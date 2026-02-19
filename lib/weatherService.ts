export type WeatherCondition = "Clear" | "Rain" | "Cloudy" | "Windy" | "Snow";

export type WeatherData = {
    city: string;
    cityCn: string;
    country: string;
    countryCn: string;
    countryCode: string;
    continent: string;
    continentCn: string;
    temperature: number;
    feelsLike: number;
    condition: WeatherCondition;
    description: string;
    descriptionCn: string;
    humidity: number;
    windSpeed: number;
};

import { findCityData } from "./cities";

const conditionDescriptions: Record<WeatherCondition, { en: string; cn: string }> = {
    Clear: { en: "Clear skies, bright sunshine", cn: "晴空萬里，陽光明媚" },
    Rain: { en: "Rainfall expected, carry an umbrella", cn: "預計有雨，請攜帶雨具" },
    Cloudy: { en: "Overcast skies, mild temperature", cn: "多雲天氣，氣溫適中" },
    Windy: { en: "Strong gusts, dress in layers", cn: "風勢較強，建議穿著多層" },
    Snow: { en: "Snowfall expected, stay warm", cn: "預計降雪，注意保暖" },
};

export const MockWeatherService = {
    async getWeather(cityName: string = "Taipei"): Promise<WeatherData> {
        await new Promise((resolve) => setTimeout(resolve, 600));

        const conditions: WeatherCondition[] = ["Clear", "Rain", "Cloudy", "Windy", "Snow"];
        const index = cityName.length % conditions.length;
        const randomCondition = Math.random() > 0.5 ? conditions[index] : conditions[Math.floor(Math.random() * conditions.length)];
        const baseTemp = 10 + (cityName.length * 2);
        const randomTemp = Math.floor(baseTemp + Math.random() * 5 - 2);

        const found = findCityData(cityName);

        return {
            city: found?.city.name || cityName,
            cityCn: found?.city.nameCn || cityName,
            country: found?.country.name || "Unknown",
            countryCn: found?.country.nameCn || "未知",
            countryCode: found?.country.code || "📍",
            continent: found?.continent.name || "Unknown",
            continentCn: found?.continent.nameCn || "未知",
            temperature: randomTemp,
            feelsLike: randomTemp - 2,
            condition: randomCondition,
            description: conditionDescriptions[randomCondition].en,
            descriptionCn: conditionDescriptions[randomCondition].cn,
            humidity: Math.floor(Math.random() * 40) + 40,
            windSpeed: Math.floor(Math.random() * 20) + 5,
        };
    },
};
