import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const styles = [
        {
            name: "Impressionism",
            weatherCondition: "Clear",
            outfitAdvice: "Light linens, pastel florals, straw hats. Embrace the sunlight like a Monet garden.",
            colorPalette: "#8CB0D0, #E8DCC2, #F0A6CA",
            artistReference: "Claude Monet",
        },
        {
            name: "Minimalism",
            weatherCondition: "Snow", // Mapped to Cold/Snow
            outfitAdvice: "Monochromatic layers, structured wool coats, stark whites and greys. Simplicity is the ultimate sophistication.",
            colorPalette: "#FFFFFF, #E5E5E5, #1A1A1A",
            artistReference: "Agnes Martin",
        },
        {
            name: "Film Noir",
            weatherCondition: "Rain",
            outfitAdvice: "Trench coats, fedoras, glossy leather boots. Step into the shadows with mystery.",
            colorPalette: "#000000, #333333, #550000",
            artistReference: "Edward Hopper",
        },
        {
            name: "Baroque",
            weatherCondition: "Cloudy",
            outfitAdvice: "Rich textures, velvet, gold accessories, dramatic silhouettes. Bring drama to the grey skies.",
            colorPalette: "#D4AF37, #4A0404, #2E2E2E",
            artistReference: "Caravaggio",
        },
        {
            name: "Romanticism",
            weatherCondition: "Windy",
            outfitAdvice: "Flowing scarves, billowy shirts, unkempt elegance. Let the wind shape your silhouette.",
            colorPalette: "#5F4B8B, #88B04B, #92A8D1",
            artistReference: "Caspar David Friedrich",
        },
    ]

    for (const style of styles) {
        await prisma.artStyle.create({
            data: style,
        })
    }

    console.log('Seeding completed: 5 Art Styles added.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
