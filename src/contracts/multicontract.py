from pyteal import *
import os
def approval_program():
    # Define global keys
    weather_key = Bytes("weather_count")
    car_key = Bytes("car_count")
    
    handle_creation = Seq([
        App.globalPut(weather_key, Int(0)),
        App.globalPut(car_key, Int(0)),
        Return(Int(1))
    ])

    # Increment weather data count
    increment_weather = Seq([
        App.globalPut(weather_key, App.globalGet(weather_key) + Int(1)),
        Return(Int(1))
    ])

    # Increment car data count
    increment_car = Seq([
        App.globalPut(car_key, App.globalGet(car_key) + Int(1)),
        Return(Int(1))
    ])

    handle_noop = Cond(
        [Txn.application_args[0] == Bytes("addWeather"), increment_weather],
        [Txn.application_args[0] == Bytes("addCar"), increment_car]
    )

    program = Cond(
        [Txn.application_id() == Int(0), handle_creation],
        [Txn.on_completion() == OnComplete.NoOp, handle_noop]
    )
    
    return compileTeal(program, Mode.Application, version=3)

def clear_state_program():
    return compileTeal(Return(Int(1)), Mode.Application, version=3)

if __name__ == "__main__":
    path = "./contracts/artifacts"
    with open(os.path.join(path, "multicontract_approval.teal"), 'w') as f:
        f.write(approval_program())
    with open(os.path.join(path, "multicontract_clear.teal"), 'w') as f:
        f.write(clear_state_program())
