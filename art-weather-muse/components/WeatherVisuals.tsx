"use client";

import { motion } from "framer-motion";

interface WeatherVisualsProps {
    condition: "Clear" | "Rain" | "Cloudy" | "Windy" | "Snow";
}

export default function WeatherVisuals({ condition }: WeatherVisualsProps) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

            {/* CLEAR: Sun Glare / Warmth */}
            {condition === "Clear" && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0"
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-100/40 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-conic from-transparent via-white/10 to-transparent opacity-30"
                    />
                </motion.div>
            )}

            {/* RAIN: Falling Droplets */}
            {condition === "Rain" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-px h-16 bg-blue-900/20"
                            style={{ left: `${Math.random() * 100}%`, top: -20 }}
                            animate={{ y: ["0vh", "100vh"] }}
                            transition={{
                                duration: 0.8 + Math.random() * 0.5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </motion.div>
            )}

            {/* CLOUDY: Drifting Fog */}
            {condition === "Cloudy" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                    <motion.div
                        className="absolute top-1/2 left-0 w-full h-64 bg-gray-200/20 blur-[80px]"
                        animate={{ x: [-50, 50, -50] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-2/3 h-64 bg-gray-400/10 blur-[100px]"
                        animate={{ x: [20, -20, 20] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                </motion.div>
            )}

            {/* WINDY: Moving Lines/Particles */}
            {condition === "Windy" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-px w-32 bg-gray-500/30"
                            style={{ top: `${Math.random() * 100}%`, left: -100 }}
                            animate={{ x: ["100vw", "150vw"] }} // Start from right? No, wind usually left to right
                            // Actually let's make it fly across
                            initial={{ x: -200 }}
                            transition={{
                                duration: 2 + Math.random(),
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 3
                            }}
                            // Reset to left
                            viewport={{ once: false }}
                        />
                    ))}
                    {/* Streaks */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={`streak-${i}`}
                            className="absolute h-1 w-64 bg-white/20 blur-sm rounded-full"
                            style={{ top: `${20 + Math.random() * 60}%`, left: -300 }}
                            animate={{ x: "120vw" }}
                            transition={{
                                duration: 1.5 + Math.random(),
                                repeat: Infinity,
                                repeatDelay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>
            )}

            {/* SNOW: Gentle Falling Flakes */}
            {condition === "Snow" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/60 rounded-full blur-[1px]"
                            style={{ left: `${Math.random() * 100}%`, top: -10 }}
                            animate={{ y: ["0vh", "100vh"], x: [0, Math.random() * 20 - 10] }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </motion.div>
            )}

        </div>
    );
}
