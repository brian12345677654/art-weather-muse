// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MockWeatherService, WeatherData } from "@/lib/weatherService";
import { findNearestCity } from "@/lib/geolocation";
import Sidebar from "@/components/Sidebar";
import WeatherVisuals from "@/components/WeatherVisuals";
import { ArtStyle, getStyleForCondition } from "@/data/artStyles";

// UI translations
const ui = {
  atmosphericConditions: { en: "Atmospheric Conditions", zh: "天氣狀況" },
  humidity: { en: "Humidity", zh: "濕度" },
  wind: { en: "Wind", zh: "風速" },
  feelsLike: { en: "Feels Like", zh: "體感溫度" },
  rainChance: { en: "Rain Chance", zh: "降雨機率" },
  region: { en: "Region", zh: "地區" },
  curatedStyle: { en: "Curated Style", zh: "策展風格" },
  outfitGuide: { en: "Outfit Guide", zh: "實用穿搭指南" },
  artistReference: { en: "Artist Reference", zh: "藝術家參考" },
  curating: { en: "Curating collection for", zh: "正在為您策展" },
  selectCity: { en: "Select City", zh: "選擇城市" },
  geoDeniedMsg: {
    en: "Location access denied — enable it for local weather & art styles.",
    zh: "定位權限被拒絕 — 開啟以顯示當地即時天氣與藝術風格。",
  },
  geoRetry: { en: "Enable Location", zh: "開啟定位" },
};

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [artStyle, setArtStyle] = useState<ArtStyle | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Taipei");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "zh">("zh");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [geoDenied, setGeoDenied] = useState(false);

  // Auto-request geolocation on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoDenied(true);
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const result = findNearestCity(latitude, longitude);
        console.log(`📍 Detected: ${result.city} (${result.distance}km away)`);
        setSelectedCity(result.city);
        setGeoDenied(false);
      },
      (err) => {
        console.warn("Geolocation denied:", err.message);
        setGeoDenied(true);
        setSelectedCity("Taipei");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  // Fetch weather when city changes
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const data = await MockWeatherService.getWeather(selectedCity);
      setWeather(data);
      const match = getStyleForCondition(data.condition);
      setArtStyle(match);
      setLoading(false);
    }
    fetchData();
  }, [selectedCity]);

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      setGeoDenied(true);
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const result = findNearestCity(latitude, longitude);
        console.log(`📍 Detected: ${result.city} (${result.distance}km away)`);
        setSelectedCity(result.city);
        setGeoDenied(false);
      },
      (err) => {
        console.warn("Geolocation denied:", err.message);
        setGeoDenied(true);
        setSelectedCity("Taipei");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };



  // Theme Styles
  const themeClasses = theme === "light"
    ? "bg-[#F9F9F9] text-[#333333] selection:bg-museum-accent/20"
    : "bg-[#121212] text-[#FAF9F6] selection:bg-[#FAF9F6]/20";

  return (
    <main className={`min-h-screen ${themeClasses} transition-colors duration-500 overflow-x-hidden relative`}>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSelectCity={setSelectedCity}
        selectedCity={selectedCity}
        onLocateMe={handleLocateMe}
        lang={lang}
      />

      {/* Geolocation Denied Banner */}
      <AnimatePresence>
        {geoDenied && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed top-20 left-1/2 -translate-x-1/2 z-[60] max-w-lg w-[90%] flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg backdrop-blur-md border ${theme === "light"
                ? "bg-white/80 border-museum-accent/30 text-[#333333]"
                : "bg-[#1e1e1e]/90 border-[#FAF9F6]/10 text-[#FAF9F6]"
              }`}
          >
            <span className="text-xl shrink-0">📍</span>
            <p className="text-xs font-sans leading-snug flex-1">
              {ui.geoDeniedMsg[lang]}
            </p>
            <button
              onClick={handleLocateMe}
              className="shrink-0 text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-2 rounded-full bg-museum-accent text-white hover:bg-museum-accent/80 transition-colors"
            >
              {ui.geoRetry[lang]}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 md:py-8 flex justify-between items-center z-30 pointer-events-none">
        <div className="text-sm font-sans font-bold tracking-[0.2em] uppercase pointer-events-auto">ArtWeather Muse</div>
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className={`text-xs font-sans font-bold tracking-widest uppercase backdrop-blur-sm border px-4 py-2 rounded-full transition-all duration-300 shadow-sm ${theme === "light"
              ? "bg-white/80 border-museum-text/10 hover:bg-museum-text hover:text-white"
              : "bg-black/80 border-white/10 hover:bg-white hover:text-black"
              }`}
          >
            {lang === "en" ? "中文" : "EN"}
          </button>

          {/* Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className={`text-xs font-sans font-bold tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 ${theme === "light"
              ? "bg-museum-text text-white hover:bg-museum-accent"
              : "bg-white text-black hover:bg-gray-200"
              }`}
          >
            🌍 {ui.selectCity[lang]}
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="h-screen w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={`w-px h-12 mb-4 animate-pulse ${theme === "light" ? "bg-museum-text/20" : "bg-white/20"}`}></div>
            <p className="text-sm font-serif italic opacity-80">
              {ui.curating[lang]} {selectedCity}...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={selectedCity}
            className="min-h-screen w-full flex flex-col md:flex-row relative pt-20 md:pt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left Panel: Weather Data */}
            <div className={`w-full md:w-1/3 p-6 md:p-12 flex flex-col justify-start md:justify-end md:border-r relative z-20 gap-8 ${theme === "light" ? "border-museum-border/30" : "border-white/10"
              }`}>
              {/* Temperature - Responsive Positioning */}
              <div className="relative md:absolute md:top-32 md:left-12 mt-4 md:mt-0">
                <h1 className={`text-8xl md:text-9xl font-serif -ml-2 md:-ml-4 select-none ${theme === "light" ? "text-museum-text/5 md:text-museum-text/10 opacity-100" : "text-white/5 md:text-white/10 opacity-100"
                  }`}>
                  {weather?.temperature}°
                </h1>
              </div>

              <div className={`z-10 backdrop-blur-sm p-6 md:p-0 rounded-lg ${theme === "light" ? "bg-museum-background/80 md:bg-transparent" : "bg-black/20 md:bg-transparent"
                }`}>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase opacity-80 mb-2">
                    {ui.atmosphericConditions[lang]}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                    <h2 className="text-5xl md:text-6xl font-serif">{weather?.condition}</h2>
                    <span className="text-xl font-sans font-light tracking-wide opacity-80">
                      {lang === "zh" ? weather?.cityCn : weather?.city}
                    </span>
                  </div>
                  <p className="font-serif italic text-xl opacity-90 mb-8">
                    {lang === "zh" ? weather?.descriptionCn : weather?.description}
                  </p>
                </motion.div>

                {/* Detailed Metrics */}
                <motion.div
                  className={`grid grid-cols-2 gap-y-8 gap-x-8 border-t py-8 ${theme === "light" ? "border-museum-border" : "border-white/20"
                    }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div>
                    <span className="block text-[10px] font-sans tracking-widest uppercase opacity-60 mb-1">{ui.rainChance[lang]}</span>
                    <span className="font-serif text-2xl">{weather?.precipitationProbability}%</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans tracking-widest uppercase opacity-60 mb-1">{ui.region[lang]}</span>
                    <span className="font-serif text-lg md:text-xl truncate block">
                      {lang === "zh" ? weather?.countryCn : weather?.country}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans tracking-widest uppercase opacity-60 mb-1">{ui.humidity[lang]}</span>
                    <span className="font-serif text-2xl">{weather?.humidity}%</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans tracking-widest uppercase opacity-60 mb-1">{ui.feelsLike[lang]}</span>
                    <span className="font-serif text-2xl">{weather?.feelsLike}°</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Panel: Immersion & Art */}
            <div className={`w-full md:w-2/3 relative overflow-hidden flex flex-col justify-center p-6 md:p-12 min-h-[500px] ${theme === "light" ? "bg-[#F4F1EA]" : "bg-[#1A1A1A]"
              }`}>
              {/* Weather Visuals Background */}
              {weather && (
                <div className="absolute inset-0 opacity-50 pointer-events-none">
                  <WeatherVisuals condition={weather.condition} />
                </div>
              )}

              {artStyle && (
                <div className={`relative z-10 max-w-2xl mx-auto backdrop-blur-md backdrop-brightness-110 p-8 md:p-10 rounded-2xl shadow-lg border ${theme === "light" ? "border-white/40 bg-white/30" : "border-white/10 bg-black/40"
                  }`}>
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px w-12 bg-museum-accent"></div>
                      <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-museum-accent">
                        {ui.curatedStyle[lang]}: {lang === "zh" ? artStyle.nameCn : artStyle.name}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                      &ldquo;{lang === "zh" ? artStyle.outfitAdviceCn : artStyle.outfitAdvice}&rdquo;
                    </h3>

                    {/* New: Outfit Guide Section */}
                    <div className={`mb-8 p-6 rounded-lg ${theme === "light" ? "bg-white/50" : "bg-white/5"}`}>
                      <h4 className="text-xs font-sans font-bold tracking-[0.2em] uppercase opacity-70 mb-3">
                        {ui.outfitGuide[lang]}
                      </h4>
                      <p className="font-serif text-lg leading-relaxed">
                        {lang === "zh" ? weather?.clothingAdviceCn : weather?.clothingAdvice}
                      </p>
                    </div>

                    <div className={`border-t pt-8 mt-4 ${theme === "light" ? "border-museum-text/10" : "border-white/10"}`}>
                      <p className="text-[10px] font-sans tracking-widest uppercase opacity-50 mb-2">{ui.artistReference[lang]}</p>
                      <p className="font-serif text-xl md:text-2xl opacity-90">{artStyle.artistReference}</p>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors ${theme === "light" ? "bg-[#121212] text-white hover:bg-black" : "bg-[#F9F9F9] text-black hover:bg-white"
                }`}
              title="Toggle Theme"
            >
              {theme === "light" ? (
                <span className="text-xl">🌙</span>
              ) : (
                <span className="text-xl">☀️</span>
              )}
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
