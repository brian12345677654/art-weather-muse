"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MockWeatherService, WeatherData } from "@/lib/weatherService";
import { findCityData } from "@/lib/cities";
import { findNearestCity } from "@/lib/geolocation";
import Sidebar from "@/components/Sidebar";
import WeatherVisuals from "@/components/WeatherVisuals";

// Mock ArtStyle type matches Prisma schema
type ArtStyle = {
  id: number;
  name: string;
  nameCn: string;
  outfitAdvice: string;
  outfitAdviceCn: string;
  artistReference: string;
  weatherCondition: string;
};

const MOCK_STYLES: ArtStyle[] = [
  {
    id: 1, name: "Impressionism", nameCn: "印象派",
    weatherCondition: "Clear",
    outfitAdvice: "Light linens, pastel florals, straw hats. Embrace the sunlight like a Monet garden.",
    outfitAdviceCn: "輕盈亞麻、柔和花卉、草帽。如莫內的花園般擁抱陽光。",
    artistReference: "Claude Monet",
  },
  {
    id: 2, name: "Minimalism", nameCn: "極簡主義",
    weatherCondition: "Snow",
    outfitAdvice: "Monochromatic layers, structured wool coats, stark whites and greys. Simplicity is the ultimate sophistication.",
    outfitAdviceCn: "單色層次、結構羊毛大衣、純白與灰調。簡約即是極致的優雅。",
    artistReference: "Agnes Martin",
  },
  {
    id: 3, name: "Film Noir", nameCn: "黑色電影",
    weatherCondition: "Rain",
    outfitAdvice: "Trench coats, fedoras, glossy leather boots. Step into the shadows with mystery.",
    outfitAdviceCn: "風衣、費多拉帽、亮面皮靴。帶著神秘感步入暗影之中。",
    artistReference: "Edward Hopper",
  },
  {
    id: 4, name: "Baroque", nameCn: "巴洛克",
    weatherCondition: "Cloudy",
    outfitAdvice: "Rich textures, velvet, gold accessories, dramatic silhouettes. Bring drama to the grey skies.",
    outfitAdviceCn: "豐富質地、天鵝絨、金色配件、戲劇性輪廓。為灰色天空帶來戲劇張力。",
    artistReference: "Caravaggio",
  },
  {
    id: 5, name: "Romanticism", nameCn: "浪漫主義",
    weatherCondition: "Windy",
    outfitAdvice: "Flowing scarves, billowy shirts, unkempt elegance. Let the wind shape your silhouette.",
    outfitAdviceCn: "飄逸圍巾、蓬鬆襯衫、不羈的優雅。讓風塑造你的輪廓。",
    artistReference: "Caspar David Friedrich",
  },
];

// UI translations
const ui = {
  atmosphericConditions: { en: "Atmospheric Conditions", zh: "天氣狀況" },
  humidity: { en: "Humidity", zh: "濕度" },
  wind: { en: "Wind", zh: "風速" },
  feelsLike: { en: "Feels Like", zh: "體感溫度" },
  region: { en: "Region", zh: "地區" },
  curatedStyle: { en: "Curated Style", zh: "策展風格" },
  artistReference: { en: "Artist Reference", zh: "藝術家參考" },
  curating: { en: "Curating collection for", zh: "正在為您策展" },
  selectCity: { en: "Select City", zh: "選擇城市" },
  geoTitle: { en: "Enable Location Services?", zh: "是否啟用定位服務？" },
  geoDescription: {
    en: "Allow ArtWeather Muse to access your location for personalized weather and style recommendations.",
    zh: "允許 ArtWeather Muse 存取您的位置，以提供個人化的天氣與穿搭建議。",
  },
  geoAllow: { en: "Allow", zh: "允許" },
  geoDeny: { en: "No Thanks", zh: "不用了" },
};

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [artStyle, setArtStyle] = useState<ArtStyle | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Taipei");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "zh">("zh");
  const [showGeoPrompt, setShowGeoPrompt] = useState(false);
  const [geoPromptDismissed, setGeoPromptDismissed] = useState(false);

  // Auto-prompt geolocation on first load
  useEffect(() => {
    const dismissed = sessionStorage.getItem("geo-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setShowGeoPrompt(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Fetch weather when city changes
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const data = await MockWeatherService.getWeather(selectedCity);
      setWeather(data);
      const match = MOCK_STYLES.find((s) => s.weatherCondition === data.condition) || MOCK_STYLES[0];
      setArtStyle(match);
      setLoading(false);
    }
    fetchData();
  }, [selectedCity]);

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const result = findNearestCity(latitude, longitude);
          console.log(`📍 Detected: ${result.city} (${result.distance}km away)`);
          setSelectedCity(result.city);
        },
        (err) => {
          console.warn("Geolocation denied:", err.message);
          setSelectedCity("Taipei");
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }
  };

  const handleGeoAllow = () => {
    setShowGeoPrompt(false);
    setGeoPromptDismissed(true);
    sessionStorage.setItem("geo-dismissed", "true");
    handleLocateMe();
  };

  const handleGeoDeny = () => {
    setShowGeoPrompt(false);
    setGeoPromptDismissed(true);
    sessionStorage.setItem("geo-dismissed", "true");
  };

  return (
    <main className="min-h-screen bg-museum-background text-museum-text selection:bg-museum-accent/20 overflow-hidden relative">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSelectCity={setSelectedCity}
        selectedCity={selectedCity}
        onLocateMe={handleLocateMe}
        lang={lang}
      />

      {/* Geolocation Prompt Modal */}
      <AnimatePresence>
        {showGeoPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#F9F7F2] max-w-md w-full mx-6 p-10 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-5xl mb-6">📍</div>
                <h2 className="text-2xl font-serif mb-2">{ui.geoTitle[lang]}</h2>
                <p className="text-sm font-sans text-museum-text/80 mb-8 leading-relaxed">
                  {ui.geoDescription[lang]}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={handleGeoDeny}
                    className="flex-1 py-3 border border-museum-text/20 text-xs font-sans font-bold tracking-widest uppercase hover:bg-museum-text/5 transition-colors"
                  >
                    {ui.geoDeny[lang]}
                  </button>
                  <button
                    onClick={handleGeoAllow}
                    className="flex-1 py-3 bg-museum-text text-white text-xs font-sans font-bold tracking-widest uppercase hover:bg-museum-accent transition-colors"
                  >
                    {ui.geoAllow[lang]}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 md:py-8 flex justify-between items-center z-30">
        <div className="text-sm font-sans font-bold tracking-[0.2em] uppercase">ArtWeather Muse</div>
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-xs font-sans font-bold tracking-widest uppercase bg-white/80 backdrop-blur-sm border border-museum-text/10 px-4 py-2 rounded-full hover:bg-museum-text hover:text-white transition-all duration-300 shadow-sm"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          {/* Sidebar Toggle — Always Visible */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-xs font-sans font-bold tracking-widest uppercase bg-museum-text text-white px-5 py-2 rounded-full hover:bg-museum-accent transition-all duration-300 shadow-md flex items-center gap-2"
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
            <div className="w-px h-12 bg-museum-text/20 mb-4 animate-pulse"></div>
            <p className="text-sm font-serif italic text-museum-text/80">
              {ui.curating[lang]} {selectedCity}...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={selectedCity}
            className="h-screen w-full flex flex-col md:flex-row relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left Panel: Weather Data */}
            <div className="w-full md:w-1/3 p-12 flex flex-col justify-end border-r border-museum-border/30 relative z-20">
              <div className="absolute top-32 left-12">
                <h1 className="text-9xl font-serif text-museum-text/5 -ml-4 select-none opacity-50 md:opacity-100">
                  {weather?.temperature}°
                </h1>
              </div>

              <div className="z-10 bg-museum-background/80 md:bg-transparent backdrop-blur-sm p-4 md:p-0 rounded-lg">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-museum-text/80 mb-2">
                    {ui.atmosphericConditions[lang]}
                  </p>
                  <div className="flex items-baseline gap-4 mb-1">
                    <h2 className="text-5xl font-serif">{weather?.condition}</h2>
                    <span className="text-xl font-sans font-light tracking-wide">
                      {lang === "zh" ? weather?.cityCn : weather?.city}
                    </span>
                  </div>
                  <p className="font-serif italic text-xl opacity-90 mb-8">
                    {lang === "zh" ? weather?.descriptionCn : weather?.description}
                  </p>
                </motion.div>

                {/* Detailed Metrics */}
                <motion.div
                  className="grid grid-cols-2 gap-y-6 gap-x-12 border-t border-museum-border py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div>
                    <span className="block text-[10px] font-sans tracking-widest uppercase opacity-80 mb-1">{ui.humidity[lang]}</span>
                    <span className="font-serif text-2xl">{weather?.humidity}%</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans tracking-widest uppercase opacity-80 mb-1">{ui.wind[lang]}</span>
                    <span className="font-serif text-2xl">{weather?.windSpeed} <span className="text-sm">km/h</span></span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans tracking-widest uppercase opacity-80 mb-1">{ui.feelsLike[lang]}</span>
                    <span className="font-serif text-2xl">{weather?.feelsLike}°</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-sans tracking-widest uppercase opacity-80 mb-1">{ui.region[lang]}</span>
                    <span className="font-serif text-2xl">
                      {lang === "zh" ? weather?.countryCn : weather?.country}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Panel: Immersion & Art */}
            <div className="w-full md:w-2/3 relative bg-[#F4F1EA] overflow-hidden flex flex-col justify-center p-12">
              {weather && <WeatherVisuals condition={weather.condition} />}

              {artStyle && (
                <div className="relative z-10 max-w-2xl mx-auto backdrop-blur-[2px] backdrop-brightness-110 p-8 rounded-2xl border border-white/20 shadow-sm">
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

                    <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                      &ldquo;{lang === "zh" ? artStyle.outfitAdviceCn : artStyle.outfitAdvice}&rdquo;
                    </h3>

                    <div className="border-t border-museum-text/10 pt-8 mt-12">
                      <p className="text-[10px] font-sans tracking-widest uppercase opacity-70 mb-2">{ui.artistReference[lang]}</p>
                      <p className="font-serif text-xl md:text-2xl">{artStyle.artistReference}</p>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Easter Egg */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="fixed bottom-8 right-8 z-50 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:bg-museum-accent transition-colors"
              title="Control Chair"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13h10" /><path d="M7 17h10" />
                <path d="M12 21a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v4a2 2 0 0 0 2 2Z" />
                <path d="M6 9h12a2 2 0 0 0 2-2V5H4v2a2 2 0 0 0 2 2Z" />
              </svg>
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
