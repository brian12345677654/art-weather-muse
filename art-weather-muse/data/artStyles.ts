export type ArtStyle = {
    id: number;
    name: string;
    nameCn: string;
    outfitAdvice: string;
    outfitAdviceCn: string;
    colorPalette: string;
    artistReference: string;
    weatherCondition: string;
};

export const ART_STYLES: ArtStyle[] = [
    // ===== Clear =====
    {
        id: 1,
        name: "Impressionism",
        nameCn: "印象派",
        weatherCondition: "Clear",
        outfitAdvice:
            "Light linens, pastel florals, straw hats. Embrace the sunlight like a Monet garden.",
        outfitAdviceCn:
            "輕盈亞麻、柔和花卉、草帽。如莫內的花園般擁抱陽光。",
        colorPalette: "#8CB0D0, #E8DCC2, #F0A6CA",
        artistReference: "Claude Monet",
    },
    {
        id: 2,
        name: "Pop Art",
        nameCn: "普普藝術",
        weatherCondition: "Clear",
        outfitAdvice:
            "Bold primary colors, graphic prints, oversized sunglasses. Be your own Andy Warhol canvas under the bright sky.",
        outfitAdviceCn:
            "大膽原色、圖像印花、超大墨鏡。在明亮天空下成為安迪·沃荷的畫布。",
        colorPalette: "#FF6F61, #FFD700, #00BFFF",
        artistReference: "Andy Warhol",
    },

    // ===== Rain =====
    {
        id: 3,
        name: "Film Noir",
        nameCn: "黑色電影",
        weatherCondition: "Rain",
        outfitAdvice:
            "Trench coats, fedoras, glossy leather boots. Step into the shadows with mystery.",
        outfitAdviceCn:
            "風衣、費多拉帽、亮面皮靴。帶著神秘感步入暗影之中。",
        colorPalette: "#000000, #333333, #550000",
        artistReference: "Edward Hopper",
    },
    {
        id: 4,
        name: "Ukiyo-e",
        nameCn: "浮世繪",
        weatherCondition: "Rain",
        outfitAdvice:
            "Indigo layers, wooden geta sandals, a waxed paper parasol. Walk through the rain like a Hiroshige woodblock.",
        outfitAdviceCn:
            "靛藍層次、木屐、油紙傘。如歌川廣重的版畫般漫步雨中。",
        colorPalette: "#1B3A5C, #4A7C9B, #E8D5B7",
        artistReference: "Utagawa Hiroshige",
    },

    // ===== Cloudy =====
    {
        id: 5,
        name: "Baroque",
        nameCn: "巴洛克",
        weatherCondition: "Cloudy",
        outfitAdvice:
            "Rich textures, velvet, gold accessories, dramatic silhouettes. Bring drama to the grey skies.",
        outfitAdviceCn:
            "豐富質地、天鵝絨、金色配件、戲劇性輪廓。為灰色天空帶來戲劇張力。",
        colorPalette: "#D4AF37, #4A0404, #2E2E2E",
        artistReference: "Caravaggio",
    },
    {
        id: 6,
        name: "Cubism",
        nameCn: "立體派",
        weatherCondition: "Cloudy",
        outfitAdvice:
            "Geometric patterns, color-blocked blazers, angular accessories. Deconstruct the ordinary like Picasso.",
        outfitAdviceCn:
            "幾何圖案、色塊西裝外套、稜角配件。如畢卡索般解構平凡。",
        colorPalette: "#B5651D, #556B2F, #708090",
        artistReference: "Pablo Picasso",
    },

    // ===== Windy =====
    {
        id: 7,
        name: "Romanticism",
        nameCn: "浪漫主義",
        weatherCondition: "Windy",
        outfitAdvice:
            "Flowing scarves, billowy shirts, unkempt elegance. Let the wind shape your silhouette.",
        outfitAdviceCn:
            "飄逸圍巾、蓬鬆襯衫、不羈的優雅。讓風塑造你的輪廓。",
        colorPalette: "#5F4B8B, #88B04B, #92A8D1",
        artistReference: "Caspar David Friedrich",
    },
    {
        id: 8,
        name: "Art Nouveau",
        nameCn: "新藝術",
        weatherCondition: "Windy",
        outfitAdvice:
            "Organic curves, flowing fabrics, floral brooches and whiplash patterns. Move like a Mucha poster in the breeze.",
        outfitAdviceCn:
            "有機曲線、飄逸面料、花卉胸針與鞭形紋樣。在微風中如慕夏海報般律動。",
        colorPalette: "#C9B037, #8B7355, #A8D8EA",
        artistReference: "Alphonse Mucha",
    },

    // ===== Snow =====
    {
        id: 9,
        name: "Minimalism",
        nameCn: "極簡主義",
        weatherCondition: "Snow",
        outfitAdvice:
            "Monochromatic layers, structured wool coats, stark whites and greys. Simplicity is the ultimate sophistication.",
        outfitAdviceCn:
            "單色層次、結構羊毛大衣、純白與灰調。簡約即是極致的優雅。",
        colorPalette: "#FFFFFF, #E5E5E5, #1A1A1A",
        artistReference: "Agnes Martin",
    },
    {
        id: 10,
        name: "Gothic",
        nameCn: "哥德風格",
        weatherCondition: "Snow",
        outfitAdvice:
            "Dark layers, lace details, silver jewelry, long coats. Contrast the white landscape with brooding elegance.",
        outfitAdviceCn:
            "深色層次、蕾絲細節、銀飾、長大衣。以沉鬱的優雅對比白色雪景。",
        colorPalette: "#1C1C1C, #4B0082, #C0C0C0",
        artistReference: "Caspar David Friedrich",
    },

    // ===== Bonus all-weather =====
    {
        id: 11,
        name: "Surrealism",
        nameCn: "超現實主義",
        weatherCondition: "Cloudy",
        outfitAdvice:
            "Unexpected fabric combinations, mismatched prints, statement hats. Dress like reality is optional — Dalí would approve.",
        outfitAdviceCn:
            "出人意料的面料搭配、不對稱印花、宣言帽飾。穿得像現實是可選的——達利會認同。",
        colorPalette: "#FF6347, #9370DB, #FFE4B5",
        artistReference: "Salvador Dalí",
    },
    {
        id: 12,
        name: "Abstract Expressionism",
        nameCn: "抽象表現主義",
        weatherCondition: "Windy",
        outfitAdvice:
            "Paint-splattered denim, oversized silhouettes, raw textures. Channel Pollock's untamed energy.",
        outfitAdviceCn:
            "潑漆丹寧、超大輪廓、粗獷質地。展現波洛克般不羈的能量。",
        colorPalette: "#2F4F4F, #CD853F, #B22222",
        artistReference: "Jackson Pollock",
    },
];

/** Find the best matching art style for a weather condition */
export function getStyleForCondition(condition: string): ArtStyle {
    const matches = ART_STYLES.filter((s) => s.weatherCondition === condition);
    if (matches.length === 0) return ART_STYLES[0];
    // Pick a random one from matching styles for variety
    return matches[Math.floor(Math.random() * matches.length)];
}
