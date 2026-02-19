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
    precipitation: number;
    precipitationProbability: number;
    clothingAdvice: string;
    clothingAdviceCn: string;
};

import { findCityData } from "./cities";
import { getCityCoords } from "./geolocation";

const conditionDescriptions: Record<WeatherCondition, { en: string; cn: string }> = {
    Clear: { en: "Clear skies, bright sunshine", cn: "晴空萬里，陽光明媚" },
    Rain: { en: "Rainfall expected, carry an umbrella", cn: "預計有雨，請攜帶雨具" },
    Cloudy: { en: "Overcast skies, mild temperature", cn: "多雲天氣，氣溫適中" },
    Windy: { en: "Strong gusts, dress in layers", cn: "風勢較強，建議穿著多層" },
    Snow: { en: "Snowfall expected, stay warm", cn: "預計降雪，注意保暖" },
};

function getClothingAdvice(temp: number): { en: string; cn: string } {
    if (temp > 25) {
        return {
            en: "Short sleeves, shorts/skirts. Sun protection recommended.",
            cn: "建議穿著短袖、短褲或短裙，並注意防曬。"
        };
    } else if (temp >= 18) {
        return {
            en: "Long sleeves directly or light pants with a light jacket.",
            cn: "建議穿著長袖襯衫或薄長褲，搭配薄外套。"
        };
    } else {
        return {
            en: "Thermal wear, long pants, thick sweaters or coats.",
            cn: "建議穿著發熱衣、長褲、厚毛衣或大衣。"
        };
    }
}

// WMO Weather interpretation codes (http://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM)
function getWeatherCondition(code: number, windSpeed: number): WeatherCondition {
    // If wind is very strong (> 30km/h), prioritize Windy
    if (windSpeed > 30) return "Windy";

    if (code === 0) return "Clear";
    if (code >= 1 && code <= 3) return "Cloudy";
    if (code >= 45 && code <= 48) return "Cloudy";
    if (code >= 51 && code <= 67) return "Rain";
    if (code >= 71 && code <= 77) return "Snow";
    if (code >= 80 && code <= 82) return "Rain";
    if (code >= 85 && code <= 86) return "Snow";
    if (code >= 95) return "Rain"; // Thunderstorm
    return "Cloudy"; // Default
}

export const MockWeatherService = {
    async getWeather(cityName: string = "Taipei"): Promise<WeatherData> {
        // 1. Get Coordinates
        const coords = getCityCoords(cityName);
        const lat = coords?.lat || 25.033;
        const lon = coords?.lng || 121.565;

        // 2. Fetch from Open-Meteo
        try {
            const res = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=precipitation_probability&timezone=auto`
            );

            if (!res.ok) throw new Error("Weather API failed");

            const data = await res.json();
            const current = data.current;
            const hourly = data.hourly;

            // Get current hour index for precipitation probability
            const currentHourIndex = new Date().getHours();
            const precipProb = hourly.precipitation_probability[currentHourIndex] || 0;

            const temp = Math.round(current.temperature_2m);
            const condition = getWeatherCondition(current.weather_code, current.wind_speed_10m);
            const advice = getClothingAdvice(temp);

            const found = findCityData(cityName);

            return {
                city: found?.city.name || cityName,
                cityCn: found?.city.nameCn || cityName,
                country: found?.country.name || "Unknown",
                countryCn: found?.country.nameCn || "未知",
                countryCode: found?.country.code || "📍",
                continent: found?.continent.name || "Unknown",
                continentCn: found?.continent.nameCn || "未知",
                temperature: temp,
                feelsLike: Math.round(current.apparent_temperature),
                condition: condition,
                description: conditionDescriptions[condition].en,
                descriptionCn: conditionDescriptions[condition].cn,
                humidity: current.relative_humidity_2m,
                windSpeed: current.wind_speed_10m,
                precipitation: current.precipitation,
                precipitationProbability: precipProb,
                clothingAdvice: advice.en,
                clothingAdviceCn: advice.cn
            };

        } catch (error) {
            console.error("Weather fetch failed, falling back to mock logic", error);
            // Fallback logic if API fails (simplified from original mock)
            const fallbackTemp = 20;
            const advice = getClothingAdvice(fallbackTemp);
            return {
                city: cityName,
                cityCn: cityName,
                country: "Unknown",
                countryCn: "未知",
                countryCode: "??",
                continent: "Unknown",
                continentCn: "未知",
                temperature: fallbackTemp,
                feelsLike: 18,
                condition: "Cloudy",
                description: "Data unavailable",
                descriptionCn: "暫無數據",
                humidity: 50,
                windSpeed: 10,
                precipitation: 0,
                precipitationProbability: 0,
                clothingAdvice: advice.en,
                clothingAdviceCn: advice.cn
            };
        }
    },
};
