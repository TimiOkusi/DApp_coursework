import { faker } from "@faker-js/faker";
import { storeWeatherData } from "../helpers/helpers.js"

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    city: "London",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storeWeatherData(generatedWeatherData).catch(console.error);

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    city: "Dublin",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storeWeatherData(generatedWeatherData).catch(console.error);

  // Return weather data
  return generatedWeatherData;
};

export const generateNigeriaWeatherData = (): WeatherData => {
  //Generate random weather data
  const generatedWeatherData: WeatherData = {
    city: "Nigeria",
    temperature: faker.number.int({min: -0, max: 40}),
    humidity: faker.number.int({min: 65, max: 90}),
    wind: faker.number.int({ min: 10, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storeWeatherData(generatedWeatherData).catch(console.error);

  //Return weather data
  return generatedWeatherData;
};

export const generateFranceWeatherData = (): WeatherData => {
  //Generate random weather data
  const generatedWeatherData: WeatherData = {
    city: "France",
    temperature: faker.number.int({min: -12, max: 32}),
    humidity: faker.number.int({min: 65, max: 80}),
    wind: faker.number.int({ min: 10, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storeWeatherData(generatedWeatherData).catch(console.error);

  //Return weather data
  return generatedWeatherData;
};

export const generateLondonWeatherDailyData = (): WeatherDailyData => {
  // Generate random weather data
  const generatedWeatherDailyData ={
    dayOne: 14,
    dayTwo: 23,
    dayThree: 17,
  };

  // Return weather data
  return generatedWeatherDailyData;
};

export const generateDublinWeatherDailyData = (): WeatherDailyData => {
  // Generate random weather data
  const generatedWeatherDailyData ={
    dayOne: 12,
    dayTwo: 9,
    dayThree: 2,
  };

  // Return weather data
  return generatedWeatherDailyData;
};

export const generateNigeriaWeatherDailyData = (): WeatherDailyData => {
  // Generate random weather data
  const generatedWeatherDailyData ={
    dayOne: 37,
    dayTwo: 30,
    dayThree: 33,
  };

  // Return weather data
  return generatedWeatherDailyData;
};

export const generateFranceWeatherDailyData = (): WeatherDailyData => {
  // Generate random weather data
  const generatedWeatherDailyData ={
    dayOne: 10,
    dayTwo: 16,
    dayThree: 12,
  };

  // Return weather data
  return generatedWeatherDailyData;
};


