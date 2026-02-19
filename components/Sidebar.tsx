"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { CONTINENTS, ContinentData, CountryData } from "@/lib/cities";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectCity: (city: string) => void;
    selectedCity: string;
    onLocateMe: () => void;
    lang: "en" | "zh";
}

const t = {
    navigation: { en: "Select Location", zh: "選擇地點" },
    locateMe: { en: "📍 Locate Me", zh: "📍 定位我的位置" },
    back: { en: "← Back", zh: "← 返回" },
    selectContinent: { en: "Select Continent", zh: "選擇洲" },
    selectCountry: { en: "Select Country", zh: "選擇國家" },
    selectCity: { en: "Select City", zh: "選擇城市" },
};

type View = "continent" | "country" | "city";

export default function Sidebar({ isOpen, onClose, onSelectCity, selectedCity, onLocateMe, lang }: SidebarProps) {
    const [view, setView] = useState<View>("continent");
    const [activeContinent, setActiveContinent] = useState<ContinentData | null>(null);
    const [activeCountry, setActiveCountry] = useState<CountryData | null>(null);

    const handleContinentClick = (continent: ContinentData) => {
        setActiveContinent(continent);
        setView("country");
    };

    const handleCountryClick = (country: CountryData) => {
        setActiveCountry(country);
        setView("city");
    };

    const handleCityClick = (cityName: string) => {
        onSelectCity(cityName);
        onClose();
        // Reset drill-down after a short delay
        setTimeout(() => {
            setView("continent");
            setActiveContinent(null);
            setActiveCountry(null);
        }, 400);
    };

    const handleBack = () => {
        if (view === "city") {
            setView("country");
            setActiveCountry(null);
        } else if (view === "country") {
            setView("continent");
            setActiveContinent(null);
        }
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setView("continent");
            setActiveContinent(null);
            setActiveCountry(null);
        }, 400);
    };

    const getTitle = () => {
        if (view === "city" && activeCountry) return lang === "zh" ? activeCountry.nameCn : activeCountry.name;
        if (view === "country" && activeContinent) return lang === "zh" ? activeContinent.nameCn : activeContinent.name;
        return t.selectContinent[lang];
    };

    const getSubtitle = () => {
        if (view === "city") return t.selectCity[lang];
        if (view === "country") return t.selectCountry[lang];
        return t.navigation[lang];
    };

    // Continent emoji mapping
    const continentEmoji: Record<string, string> = {
        "Asia": "🌏", "Europe": "🌍", "North America": "🌎",
        "South America": "🌎", "Africa": "🌍", "Oceania": "🌏", "Antarctica": "🧊",
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black z-40"
                    />
                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 left-0 h-full w-96 bg-[#F9F7F2] z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 pb-4 shrink-0 border-b border-museum-text/10">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-museum-text/40">
                                    {getSubtitle()}
                                </span>
                                <button onClick={handleClose} className="text-2xl font-serif text-museum-text hover:rotate-90 transition-transform duration-300">
                                    ×
                                </button>
                            </div>
                            <h2 className="text-2xl font-serif">{getTitle()}</h2>
                        </div>

                        {/* Back button */}
                        {view !== "continent" && (
                            <button
                                onClick={handleBack}
                                className="mx-8 mt-4 mb-2 text-left text-xs font-sans font-bold tracking-widest uppercase text-museum-accent hover:text-museum-text transition-colors shrink-0"
                            >
                                {t.back[lang]}
                            </button>
                        )}

                        {/* Locate Me (only on continent view) */}
                        {view === "continent" && (
                            <div className="px-8 pt-4 pb-2 shrink-0">
                                <button
                                    onClick={() => { onLocateMe(); handleClose(); }}
                                    className="w-full flex items-center justify-center gap-2 py-3 border border-museum-text/20 hover:border-museum-text hover:bg-museum-text hover:text-white transition-all duration-300"
                                >
                                    <span className="text-xs font-sans font-bold tracking-widest uppercase">{t.locateMe[lang]}</span>
                                </button>
                            </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto px-8 py-4">
                            <AnimatePresence mode="wait">
                                {/* CONTINENT VIEW */}
                                {view === "continent" && (
                                    <motion.div
                                        key="continents"
                                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-2"
                                    >
                                        {CONTINENTS.map((continent) => (
                                            <button
                                                key={continent.name}
                                                onClick={() => handleContinentClick(continent)}
                                                className="w-full text-left flex items-center justify-between py-4 px-4 rounded-lg hover:bg-museum-text/5 transition-colors group"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className="text-2xl">{continentEmoji[continent.name] || "🌐"}</span>
                                                    <div>
                                                        <span className="font-serif text-lg block">{lang === "zh" ? continent.nameCn : continent.name}</span>
                                                        <span className="text-[10px] font-sans tracking-widest uppercase text-museum-text/40">
                                                            {continent.countries.length} {lang === "zh" ? "國家" : "countries"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-museum-text/30 group-hover:text-museum-text/60 transition-colors text-lg">→</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}

                                {/* COUNTRY VIEW */}
                                {view === "country" && activeContinent && (
                                    <motion.div
                                        key="countries"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-1"
                                    >
                                        {activeContinent.countries.map((country) => (
                                            <button
                                                key={country.name}
                                                onClick={() => handleCountryClick(country)}
                                                className="w-full text-left flex items-center justify-between py-3 px-4 rounded-lg hover:bg-museum-text/5 transition-colors group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xs font-sans font-bold tracking-widest text-museum-text/40 w-6">{country.code}</span>
                                                    <span className="font-serif text-base">{lang === "zh" ? country.nameCn : country.name}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-sans text-museum-text/30">
                                                        {country.cities.length} {lang === "zh" ? "城市" : "cities"}
                                                    </span>
                                                    <span className="text-museum-text/30 group-hover:text-museum-text/60 transition-colors">→</span>
                                                </div>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}

                                {/* CITY VIEW */}
                                {view === "city" && activeCountry && (
                                    <motion.div
                                        key="cities"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-1"
                                    >
                                        {activeCountry.cities.map((city) => (
                                            <button
                                                key={city.name}
                                                onClick={() => handleCityClick(city.name)}
                                                className={clsx(
                                                    "w-full text-left flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200",
                                                    selectedCity === city.name
                                                        ? "bg-museum-accent/10 text-museum-accent"
                                                        : "hover:bg-museum-text/5 text-museum-text"
                                                )}
                                            >
                                                {selectedCity === city.name && (
                                                    <motion.span layoutId="cityDot" className="w-1.5 h-1.5 bg-museum-accent rounded-full shrink-0" />
                                                )}
                                                <span className={clsx("font-serif text-lg", selectedCity === city.name && "italic font-bold")}>
                                                    {lang === "zh" ? city.nameCn : city.name}
                                                </span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
