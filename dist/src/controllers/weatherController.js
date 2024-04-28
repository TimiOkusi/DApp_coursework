import { generateDublinWeatherData, generateLondonWeatherData, generateNigeriaWeatherData, generateFranceWeatherData, generateLondonWeatherDailyData, generateDublinWeatherDailyData, generateNigeriaWeatherDailyData, generateFranceWeatherDailyData } from "../services/weatherService.js";
/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getWeatherData = async (req, res) => {
    // We will use a try catch block to catch any errors
    try {
        // Get the city param from the request
        const { city } = req.params;
        console.log(city);
        // We will create a variable with a type of WeatherData
        let finalWeatherData;
        // We will use an if statement to check which city was passed in
        if (city === "london") {
            console.log(generateLondonWeatherData());
            finalWeatherData = generateLondonWeatherData();
        }
        else if (city === "dublin") {
            console.log(generateDublinWeatherData());
            finalWeatherData = generateDublinWeatherData();
        }
        else if (city === "nigeria") {
            console.log(generateNigeriaWeatherData());
            finalWeatherData = generateNigeriaWeatherData();
        }
        else if (city === "france") {
            console.log(generateFranceWeatherData());
            finalWeatherData = generateFranceWeatherData();
        }
        else {
            // If the city is not london or dublin, we will throw an error
            res.status(404).send("City not found");
        }
        // We will return the weather data as JSON
        res.status(200).json(finalWeatherData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send("Error in fetching weather data");
    }
};
export const getWeatherDailyData = async (req, res) => {
    // We will use a try catch block to catch any errors
    try {
        // Get the city param from the request
        const { city } = req.params;
        console.log(city);
        // We will create a variable with a type of WeatherData
        let finalWeatherDailyData;
        // We will use an if statement to check which city was passed in
        if (city === "london") {
            console.log(generateLondonWeatherDailyData());
            finalWeatherDailyData = generateLondonWeatherDailyData();
        }
        else if (city === "dublin") {
            console.log(generateDublinWeatherDailyData());
            finalWeatherDailyData = generateDublinWeatherDailyData();
        }
        else if (city === "nigeria") {
            console.log(generateNigeriaWeatherDailyData());
            finalWeatherDailyData = generateNigeriaWeatherDailyData();
        }
        else if (city === "france") {
            console.log(generateFranceWeatherDailyData());
            finalWeatherDailyData = generateFranceWeatherDailyData();
        }
        else {
            // If the city is not london or dublin, we will throw an error
            res.status(404).send("City not found");
        }
        // We will return the weather data as JSON
        res.status(200).json(finalWeatherDailyData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send("Error in fetching weather data");
    }
};
//# sourceMappingURL=weatherController.js.map