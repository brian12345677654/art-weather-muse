const http = require("http");

http
    .get("http://localhost:3000", (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
            console.log("Status Code:", res.statusCode);

            // Basic checks
            const checks = [
                { label: 'Title "ArtWeather Muse"', test: data.includes("ArtWeather Muse") },
                { label: "Has __next div", test: data.includes("__next") },
                { label: "Has script tags", test: data.includes("<script") },
                { label: "No error page", test: !data.includes("Application error") && !data.includes("Unhandled Runtime Error") },
            ];

            checks.forEach((c) => {
                console.log(c.test ? "✅" : "❌", c.label);
            });

            console.log("\nHTML size:", data.length, "bytes");
            console.log("Script count:", (data.match(/<script/g) || []).length);

            const allPassed = checks.every((c) => c.test);
            console.log(allPassed ? "\n🎉 ALL CHECKS PASSED" : "\n⚠️ SOME CHECKS FAILED");
        });
    })
    .on("error", (e) => {
        console.log("❌ Connection Error:", e.message);
        console.log("Make sure the dev server is running (npm run dev)");
    });
