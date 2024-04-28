import { faker } from "@faker-js/faker";
import { storeCarData } from "../helpers/helpers.js";
export const generateBmwData = () => {
    const generatedCarData = {
        manufacturer: 'BMW',
        model: 'i8',
        year: faker.number.int({ min: new Date().getFullYear() - 20, max: new Date().getFullYear() }),
        color: faker.vehicle.color(),
        fuelType: 'Electric',
        mileage: faker.number.int({ min: 10000, max: 200000 }),
        price: faker.number.int({ min: 1000, max: 100000 }),
        dateAdded: faker.number.int({ min: new Date().getFullYear() - 5, max: new Date().getFullYear() })
    };
    storeCarData(generatedCarData).catch(console.error);
    return generatedCarData;
};
export const generateToyotaData = () => {
    const generatedCarData = {
        manufacturer: 'Toyota',
        model: 'Camry',
        year: faker.number.int({ min: new Date().getFullYear() - 20, max: new Date().getFullYear() }),
        color: faker.vehicle.color(),
        fuelType: 'Gasoline',
        mileage: faker.number.int({ min: 10000, max: 200000 }),
        price: faker.number.int({ min: 1000, max: 100000 }),
        dateAdded: faker.number.int({ min: new Date().getFullYear() - 5, max: new Date().getFullYear() })
    };
    storeCarData(generatedCarData).catch(console.error);
    return generatedCarData;
};
export const generateLamborghiniData = () => {
    const generatedCarData = {
        manufacturer: 'Lamborghini',
        model: 'Aventador',
        year: faker.number.int({ min: new Date().getFullYear() - 10, max: new Date().getFullYear() }),
        color: faker.vehicle.color(),
        fuelType: 'Diesel',
        mileage: faker.number.int({ min: 1000, max: 50000 }),
        price: faker.number.int({ min: 100000, max: 500000 }),
        dateAdded: faker.number.int({ min: new Date().getFullYear() - 5, max: new Date().getFullYear() })
    };
    storeCarData(generatedCarData).catch(console.error);
    return generatedCarData;
};
export const generateBugattiData = () => {
    const generatedCarData = {
        manufacturer: 'Bugatti',
        model: 'Chiron',
        year: faker.number.int({ min: new Date().getFullYear() - 10, max: new Date().getFullYear() }),
        color: faker.vehicle.color(),
        fuelType: 'Gasoline',
        mileage: faker.number.int({ min: 0, max: 10000 }),
        price: faker.number.int({ min: 1000000, max: 3000000 }),
        dateAdded: faker.number.int({ min: new Date().getFullYear() - 5, max: new Date().getFullYear() })
    };
    storeCarData(generatedCarData).catch(console.error);
    return generatedCarData;
};
//# sourceMappingURL=carService.js.map