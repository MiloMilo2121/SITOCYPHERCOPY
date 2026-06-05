(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/providers/themeProvider/config/borderRadius.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "borderRadiusCappedMap",
    ()=>borderRadiusCappedMap,
    "borderRadiusMap",
    ()=>borderRadiusMap
]);
const borderRadiusMap = {
    rounded: "var(--radius)",
    soft: "var(--radius-lg)",
    pill: "var(--radius-full)"
};
const borderRadiusCappedMap = {
    rounded: "var(--radius)",
    soft: "var(--radius-lg)",
    pill: "var(--radius-xl)"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/config/contentWidth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentWidthMap",
    ()=>contentWidthMap,
    "expandedContentWidthMap",
    ()=>expandedContentWidthMap
]);
const contentWidthMap = {
    small: {
        desktop: "clamp(40rem, 70vw, 100rem)",
        mobile: "80vw"
    },
    smallMedium: {
        desktop: "clamp(40rem, 72.5vw, 100rem)",
        mobile: "80vw"
    },
    compact: {
        desktop: "clamp(40rem, 75vw, 100rem)",
        mobile: "80vw"
    },
    mediumSmall: {
        desktop: "clamp(40rem, 77.5vw, 100rem)",
        mobile: "80vw"
    },
    medium: {
        desktop: "clamp(40rem, 80vw, 100rem)",
        mobile: "80vw"
    },
    mediumLarge: {
        desktop: "clamp(40rem, 82.5vw, 100rem)",
        mobile: "85vw"
    }
};
function calculateExpandedWidth(width) {
    const clampMatch = width.match(/clamp\(([\d.]+)rem,\s*([\d.]+)vw,\s*([\d.]+)rem\)/);
    if (clampMatch) {
        const minRem = clampMatch[1];
        const vwValue = parseFloat(clampMatch[2]);
        const maxRem = clampMatch[3];
        const remainingVw = 100 - vwValue;
        const expandedVw = vwValue + remainingVw / 2;
        const expandedMin = `calc(${minRem}rem - (${minRem}rem - 100vw) / 2)`;
        const expandedMax = `calc(${maxRem}rem + (100vw - ${maxRem}rem) / 2)`;
        return `clamp(${expandedMin}, ${expandedVw}vw, ${expandedMax})`;
    }
    const vwMatch = width.match(/([\d.]+)vw/);
    if (vwMatch) {
        const vwValue = parseFloat(vwMatch[1]);
        const remainingVw = 100 - vwValue;
        const expandedVw = vwValue + remainingVw / 2;
        return `${expandedVw}vw`;
    }
    return width;
}
const expandedContentWidthMap = {
    small: {
        desktop: calculateExpandedWidth(contentWidthMap.small.desktop),
        mobile: calculateExpandedWidth(contentWidthMap.small.mobile)
    },
    smallMedium: {
        desktop: calculateExpandedWidth(contentWidthMap.smallMedium.desktop),
        mobile: calculateExpandedWidth(contentWidthMap.smallMedium.mobile)
    },
    compact: {
        desktop: calculateExpandedWidth(contentWidthMap.compact.desktop),
        mobile: calculateExpandedWidth(contentWidthMap.compact.mobile)
    },
    mediumSmall: {
        desktop: calculateExpandedWidth(contentWidthMap.mediumSmall.desktop),
        mobile: calculateExpandedWidth(contentWidthMap.mediumSmall.mobile)
    },
    medium: {
        desktop: calculateExpandedWidth(contentWidthMap.medium.desktop),
        mobile: calculateExpandedWidth(contentWidthMap.medium.mobile)
    },
    mediumLarge: {
        desktop: calculateExpandedWidth(contentWidthMap.mediumLarge.desktop),
        mobile: calculateExpandedWidth(contentWidthMap.mediumLarge.mobile)
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/config/textSizing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textSizingMap",
    ()=>textSizingMap
]);
const textSizingMap = {
    medium: {
        desktop: {
            text2xs: "clamp(0.465rem, 0.62vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.72vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.82vw, 0.82rem)",
            textBase: "clamp(0.69rem, 0.92vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1vw, 1rem)",
            textXl: "clamp(0.825rem, 1.1vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.3vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.6vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2vw, 2rem)",
            text5xl: "clamp(2.025rem, 2.75vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.3vw, 3.3rem)",
            text7xl: "clamp(3rem, 4vw, 4rem)",
            text8xl: "clamp(3.5rem, 4.5vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 7vw, 7rem)"
        },
        mobile: {
            text2xs: "2.5vw",
            textXs: "2.75vw",
            textSm: "3vw",
            textBase: "3.25vw",
            textLg: "3.5vw",
            textXl: "4.25vw",
            text2xl: "5vw",
            text3xl: "6vw",
            text4xl: "7vw",
            text5xl: "7.5vw",
            text6xl: "8.5vw",
            text7xl: "10vw",
            text8xl: "12vw",
            text9xl: "14vw"
        }
    },
    mediumLarge: {
        desktop: {
            text2xs: "clamp(0.465rem, 0.651vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.756vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.861vw, 0.82rem)",
            textBase: "clamp(0.69rem, 0.966vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1.05vw, 1rem)",
            textXl: "clamp(0.825rem, 1.155vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.365vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.68vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2.1vw, 2rem)",
            text5xl: "clamp(2.025rem, 2.8875vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.465vw, 3.3rem)",
            text7xl: "clamp(3rem, 4.2vw, 4rem)",
            text8xl: "clamp(3.5rem, 4.725vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 7.35vw, 7rem)"
        },
        mobile: {
            text2xs: "2.625vw",
            textXs: "2.8875vw",
            textSm: "3.15vw",
            textBase: "3.4125vw",
            textLg: "3.675vw",
            textXl: "4.4625vw",
            text2xl: "5.25vw",
            text3xl: "6.3vw",
            text4xl: "7.35vw",
            text5xl: "7.875vw",
            text6xl: "8.925vw",
            text7xl: "10.5vw",
            text8xl: "12.6vw",
            text9xl: "14.7vw"
        }
    },
    largeSmall: {
        desktop: {
            text2xs: "clamp(0.465rem, 0.682vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.792vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.902vw, 0.82rem)",
            textBase: "clamp(0.69rem, 1.012vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1.1vw, 1rem)",
            textXl: "clamp(0.825rem, 1.21vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.43vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.76vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2.2vw, 2rem)",
            text5xl: "clamp(2.025rem, 3.025vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.63vw, 3.3rem)",
            text7xl: "clamp(3rem, 4.4vw, 4rem)",
            text8xl: "clamp(3.5rem, 4.95vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 7.7vw, 7rem)"
        },
        mobile: {
            text2xs: "2.75vw",
            textXs: "3.025vw",
            textSm: "3.3vw",
            textBase: "3.575vw",
            textLg: "3.85vw",
            textXl: "4.675vw",
            text2xl: "5.5vw",
            text3xl: "6.6vw",
            text4xl: "7.7vw",
            text5xl: "8.25vw",
            text6xl: "9.35vw",
            text7xl: "11vw",
            text8xl: "13.2vw",
            text9xl: "15.4vw"
        }
    },
    large: {
        desktop: {
            text2xs: "clamp(0.465rem, 0.713vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.828vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.943vw, 0.82rem)",
            textBase: "clamp(0.69rem, 1.058vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1.15vw, 1rem)",
            textXl: "clamp(0.825rem, 1.265vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.495vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.84vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2.3vw, 2rem)",
            text5xl: "clamp(2.025rem, 3.1625vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.795vw, 3.3rem)",
            text7xl: "clamp(3rem, 4.6vw, 4rem)",
            text8xl: "clamp(3.5rem, 5.175vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 8.05vw, 7rem)"
        },
        mobile: {
            text2xs: "2.875vw",
            textXs: "3.1625vw",
            textSm: "3.45vw",
            textBase: "3.7375vw",
            textLg: "4.025vw",
            textXl: "4.8875vw",
            text2xl: "5.75vw",
            text3xl: "6.9vw",
            text4xl: "8.05vw",
            text5xl: "8.625vw",
            text6xl: "9.775vw",
            text7xl: "11.5vw",
            text8xl: "13.8vw",
            text9xl: "16.1vw"
        }
    },
    mediumSizeLargeTitles: {
        desktop: {
            // Medium body text sizes: use medium values
            text2xs: "clamp(0.465rem, 0.62vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.72vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.82vw, 0.82rem)",
            textBase: "clamp(0.69rem, 0.92vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1vw, 1rem)",
            textXl: "clamp(0.825rem, 1.1vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.3vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.6vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2vw, 2rem)",
            // Large title sizes: use large preset values
            text5xl: "clamp(2.025rem, 3.1625vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.795vw, 3.3rem)",
            text7xl: "clamp(3rem, 4.6vw, 4rem)",
            text8xl: "clamp(3.5rem, 5.175vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 8.05vw, 7rem)"
        },
        mobile: {
            // Medium body text sizes: use medium values
            text2xs: "2.5vw",
            textXs: "2.75vw",
            textSm: "3vw",
            textBase: "3.25vw",
            textLg: "3.5vw",
            textXl: "4.25vw",
            text2xl: "5vw",
            text3xl: "6vw",
            text4xl: "7vw",
            // Large title sizes: use large preset values
            text5xl: "8.625vw",
            text6xl: "9.775vw",
            text7xl: "11.5vw",
            text8xl: "13.8vw",
            text9xl: "16.1vw"
        }
    },
    largeSizeMediumTitles: {
        desktop: {
            // Large body text sizes: use large values
            text2xs: "clamp(0.465rem, 0.713vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.828vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.943vw, 0.82rem)",
            textBase: "clamp(0.69rem, 1.058vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1.15vw, 1rem)",
            textXl: "clamp(0.825rem, 1.265vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.495vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.84vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2.3vw, 2rem)",
            // Medium title sizes: use medium preset values
            text5xl: "clamp(2.025rem, 2.75vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.3vw, 3.3rem)",
            text7xl: "clamp(3rem, 4vw, 4rem)",
            text8xl: "clamp(3.5rem, 4.5vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 7vw, 7rem)"
        },
        mobile: {
            // Large body text sizes: use large values
            text2xs: "2.875vw",
            textXs: "3.1625vw",
            textSm: "3.45vw",
            textBase: "3.7375vw",
            textLg: "4.025vw",
            textXl: "4.8875vw",
            text2xl: "5.75vw",
            text3xl: "6.9vw",
            text4xl: "8.05vw",
            // Medium title sizes: use medium preset values
            text5xl: "7.5vw",
            text6xl: "8.5vw",
            text7xl: "10vw",
            text8xl: "12vw",
            text9xl: "14vw"
        }
    },
    mediumLargeSizeLargeTitles: {
        desktop: {
            // MediumLarge body text sizes
            text2xs: "clamp(0.465rem, 0.651vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.756vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.861vw, 0.82rem)",
            textBase: "clamp(0.69rem, 0.966vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1.05vw, 1rem)",
            textXl: "clamp(0.825rem, 1.155vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.365vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.68vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2.1vw, 2rem)",
            // Large title sizes
            text5xl: "clamp(2.025rem, 3.1625vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.795vw, 3.3rem)",
            text7xl: "clamp(3rem, 4.6vw, 4rem)",
            text8xl: "clamp(3.5rem, 5.175vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 8.05vw, 7rem)"
        },
        mobile: {
            // MediumLarge body text sizes
            text2xs: "2.625vw",
            textXs: "2.8875vw",
            textSm: "3.15vw",
            textBase: "3.4125vw",
            textLg: "3.675vw",
            textXl: "4.4625vw",
            text2xl: "5.25vw",
            text3xl: "6.3vw",
            text4xl: "7.35vw",
            // Large title sizes
            text5xl: "8.625vw",
            text6xl: "9.775vw",
            text7xl: "11.5vw",
            text8xl: "13.8vw",
            text9xl: "16.1vw"
        }
    },
    largeSmallSizeLargeTitles: {
        desktop: {
            // LargeSmall body text sizes
            text2xs: "clamp(0.465rem, 0.682vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.792vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.902vw, 0.82rem)",
            textBase: "clamp(0.69rem, 1.012vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1.1vw, 1rem)",
            textXl: "clamp(0.825rem, 1.21vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.43vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.76vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2.2vw, 2rem)",
            // Large title sizes
            text5xl: "clamp(2.025rem, 3.1625vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.795vw, 3.3rem)",
            text7xl: "clamp(3rem, 4.6vw, 4rem)",
            text8xl: "clamp(3.5rem, 5.175vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 8.05vw, 7rem)"
        },
        mobile: {
            // LargeSmall body text sizes
            text2xs: "2.75vw",
            textXs: "3.025vw",
            textSm: "3.3vw",
            textBase: "3.575vw",
            textLg: "3.85vw",
            textXl: "4.675vw",
            text2xl: "5.5vw",
            text3xl: "6.6vw",
            text4xl: "7.7vw",
            // Large title sizes
            text5xl: "8.625vw",
            text6xl: "9.775vw",
            text7xl: "11.5vw",
            text8xl: "13.8vw",
            text9xl: "16.1vw"
        }
    },
    mediumLargeSizeMediumTitles: {
        desktop: {
            // MediumLarge body text sizes
            text2xs: "clamp(0.465rem, 0.651vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.756vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.861vw, 0.82rem)",
            textBase: "clamp(0.69rem, 0.966vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1.05vw, 1rem)",
            textXl: "clamp(0.825rem, 1.155vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.365vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.68vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2.1vw, 2rem)",
            // Medium title sizes
            text5xl: "clamp(2.025rem, 2.75vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.3vw, 3.3rem)",
            text7xl: "clamp(3rem, 4vw, 4rem)",
            text8xl: "clamp(3.5rem, 4.5vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 7vw, 7rem)"
        },
        mobile: {
            // MediumLarge body text sizes
            text2xs: "2.625vw",
            textXs: "2.8875vw",
            textSm: "3.15vw",
            textBase: "3.4125vw",
            textLg: "3.675vw",
            textXl: "4.4625vw",
            text2xl: "5.25vw",
            text3xl: "6.3vw",
            text4xl: "7.35vw",
            // Medium title sizes
            text5xl: "7.5vw",
            text6xl: "8.5vw",
            text7xl: "10vw",
            text8xl: "12vw",
            text9xl: "14vw"
        }
    },
    largeSmallSizeMediumTitles: {
        desktop: {
            // LargeSmall body text sizes
            text2xs: "clamp(0.465rem, 0.682vw, 0.62rem)",
            textXs: "clamp(0.54rem, 0.792vw, 0.72rem)",
            textSm: "clamp(0.615rem, 0.902vw, 0.82rem)",
            textBase: "clamp(0.69rem, 1.012vw, 0.92rem)",
            textLg: "clamp(0.75rem, 1.1vw, 1rem)",
            textXl: "clamp(0.825rem, 1.21vw, 1.1rem)",
            text2xl: "clamp(0.975rem, 1.43vw, 1.3rem)",
            text3xl: "clamp(1.2rem, 1.76vw, 1.6rem)",
            text4xl: "clamp(1.5rem, 2.2vw, 2rem)",
            // Medium title sizes
            text5xl: "clamp(2.025rem, 2.75vw, 2.75rem)",
            text6xl: "clamp(2.475rem, 3.3vw, 3.3rem)",
            text7xl: "clamp(3rem, 4vw, 4rem)",
            text8xl: "clamp(3.5rem, 4.5vw, 4.5rem)",
            text9xl: "clamp(5.25rem, 7vw, 7rem)"
        },
        mobile: {
            // LargeSmall body text sizes
            text2xs: "2.75vw",
            textXs: "3.025vw",
            textSm: "3.3vw",
            textBase: "3.575vw",
            textLg: "3.85vw",
            textXl: "4.675vw",
            text2xl: "5.5vw",
            text3xl: "6.6vw",
            text4xl: "7.7vw",
            // Medium title sizes
            text5xl: "7.5vw",
            text6xl: "8.5vw",
            text7xl: "10vw",
            text8xl: "12vw",
            text9xl: "14vw"
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/config/baseVw.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseVwMap",
    ()=>baseVwMap
]);
const baseVwMap = {
    medium: {
        desktop: "clamp(0.5rem, 0.8vw, 1rem)",
        mobile: "3vw"
    },
    mediumLarge: {
        desktop: "clamp(0.5rem, 0.84vw, 1rem)",
        mobile: "3.15vw"
    },
    largeSmall: {
        desktop: "clamp(0.5rem, 0.88vw, 1rem)",
        mobile: "3.30vw"
    },
    large: {
        desktop: "clamp(0.5rem, 0.92vw, 1rem)",
        mobile: "3.45vw"
    },
    mediumSizeLargeTitles: {
        desktop: "clamp(0.5rem, 0.8vw, 1rem)",
        mobile: "3vw"
    },
    largeSizeMediumTitles: {
        desktop: "clamp(0.5rem, 0.92vw, 1rem)",
        mobile: "3.45vw"
    },
    mediumLargeSizeLargeTitles: {
        desktop: "clamp(0.5rem, 0.84vw, 1rem)",
        mobile: "3.15vw"
    },
    largeSmallSizeLargeTitles: {
        desktop: "clamp(0.5rem, 0.88vw, 1rem)",
        mobile: "3.30vw"
    },
    mediumLargeSizeMediumTitles: {
        desktop: "clamp(0.5rem, 0.84vw, 1rem)",
        mobile: "3.15vw"
    },
    largeSmallSizeMediumTitles: {
        desktop: "clamp(0.5rem, 0.88vw, 1rem)",
        mobile: "3.30vw"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/config/background.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backgroundComponents",
    ()=>backgroundComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$CircleGradientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/CircleGradientBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$AuroraBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/AuroraBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$floatingGradientBackground$2f$FloatingGradientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/floatingGradientBackground/FloatingGradientBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$NoiseBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/NoiseBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$NoiseDiagonalGradientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/NoiseDiagonalGradientBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$FluidBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/FluidBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$BlurBottomBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/BlurBottomBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$GridBackround$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/GridBackround.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const backgroundComponents = {
    none: null,
    circleGradient: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$CircleGradientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    aurora: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$AuroraBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    floatingGradient: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$floatingGradientBackground$2f$FloatingGradientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    noise: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$NoiseBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    noiseDiagonalGradient: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$NoiseDiagonalGradientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    fluid: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$FluidBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    blurBottom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$BlurBottomBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    grid: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$GridBackround$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/config/shared.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "headingFontWeightMap",
    ()=>headingFontWeightMap
]);
const headingFontWeightMap = {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/config/constants.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Re-export all config modules for backward compatibility
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$borderRadius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/borderRadius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$contentWidth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/contentWidth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$textSizing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/textSizing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$baseVw$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/baseVw.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$background$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/background.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/shared.ts [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/styles/cardStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cardStyleMap",
    ()=>cardStyleMap,
    "getGradientBorderedPseudo",
    ()=>getGradientBorderedPseudo
]);
const cardStyleMap = {
    "solid": `
    position: relative;
    background: var(--color-card);
  `,
    "outline": `
    position: relative;
    background: var(--color-card);
    border: 1px solid color-mix(in srgb, var(--color-accent) 25%, transparent);
  `,
    "gradient-mesh": `
    position: relative;
    background:
      radial-gradient(at 0% 0%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0px, transparent 50%),
      radial-gradient(at 100% 0%, color-mix(in srgb, var(--color-accent) 10%, transparent) 0px, transparent 50%),
      radial-gradient(at 100% 100%, color-mix(in srgb, var(--color-accent) 20%, transparent) 0px, transparent 50%),
      radial-gradient(at 0% 100%, color-mix(in srgb, var(--color-accent) 12%, transparent) 0px, transparent 50%),
      var(--color-card);
  `,
    "gradient-radial": `
    position: relative;
    background: radial-gradient(circle at center, color-mix(in srgb, var(--color-card) 100%, var(--color-accent) 20%) 0%, var(--color-card) 90%);
  `,
    "inset": `
    position: relative;
    background: color-mix(in srgb, var(--color-card) 95%, var(--color-accent) 5%);
    box-shadow:
      inset 2px 2px 4px color-mix(in srgb, var(--color-foreground) 8%, transparent),
      inset -2px -2px 4px color-mix(in srgb, var(--color-background) 20%, transparent);
  `,
    "glass-elevated": `
    position: relative;
    backdrop-filter: blur(8px);
    background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border: 1px solid var(--color-card);
  `,
    "glass-depth": `
    position: relative;
    background: color-mix(in srgb, var(--color-card) 80%, transparent);
    backdrop-filter: blur(14px);
    box-shadow:
      inset 0 0 20px 0 color-mix(in srgb, var(--color-accent) 7.5%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-accent) 7.5%, transparent);
  `,
    "gradient-bordered": `
    position: relative;
    background: linear-gradient(180deg, color-mix(in srgb, var(--color-card) 100%, var(--color-accent) 5%) -35%, var(--color-card) 65%);
    box-shadow: 0px 0px 10px 4px color-mix(in srgb, var(--color-accent) 4%, transparent);
  `,
    "layered-gradient": `
    position: relative;
    background:
      linear-gradient(color-mix(in srgb, var(--color-accent) 6%, transparent) 0%, transparent 59.26%),
      linear-gradient(var(--color-card) 0%, var(--color-card) 100%),
      var(--color-card);
    box-shadow:
      20px 18px 7px color-mix(in srgb, var(--color-accent) 0%, transparent),
      2px 2px 2px color-mix(in srgb, var(--color-accent) 6.5%, transparent),
      1px 1px 2px color-mix(in srgb, var(--color-accent) 2%, transparent);
    border: 2px solid var(--color-secondary-cta);
  `,
    "soft-shadow": `
    position: relative;
    background: var(--color-card);
    box-shadow: color-mix(in srgb, var(--color-accent) 10%, transparent) 0px 0.706592px 0.706592px -0.666667px, color-mix(in srgb, var(--color-accent) 8%, transparent) 0px 1.80656px 1.80656px -1.33333px, color-mix(in srgb, var(--color-accent) 7%, transparent) 0px 3.62176px 3.62176px -2px, color-mix(in srgb, var(--color-accent) 7%, transparent) 0px 6.8656px 6.8656px -2.66667px, color-mix(in srgb, var(--color-accent) 5%, transparent) 0px 13.6468px 13.6468px -3.33333px, color-mix(in srgb, var(--color-accent) 2%, transparent) 0px 30px 30px -4px, var(--color-background) 0px 3px 1px 0px inset;
  `,
    "subtle-shadow": `
    position: relative;
    background: var(--color-card);
    box-shadow: color-mix(in srgb, var(--color-foreground) 5%, transparent) 0px 4px 32px 0px;
  `,
    "elevated-border": `
    position: relative;
    background: linear-gradient(180deg, color-mix(in srgb, var(--color-card) 100%, var(--color-foreground) 3%) 0%, var(--color-card) 100%);
    box-shadow: 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 8%, transparent), 0 4px 6px -1px color-mix(in srgb, var(--color-foreground) 5%, transparent), 0 10px 15px -3px color-mix(in srgb, var(--color-foreground) 4%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-foreground) 6%, transparent);
  `,
    "inner-glow": `
    position: relative;
    background: var(--color-card);
    box-shadow: inset 0 0 30px 0 color-mix(in srgb, var(--color-foreground) 4%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 8%, transparent), 0 4px 12px -4px color-mix(in srgb, var(--color-foreground) 8%, transparent);
  `,
    "spotlight": `
    position: relative;
    background:
      radial-gradient(ellipse at 0% 0%, color-mix(in srgb, var(--color-accent) 20%, transparent) 0%, transparent 50%),
      var(--color-card);
    box-shadow: inset 1px 1px 0 0 color-mix(in srgb, var(--color-foreground) 10%, transparent), 0 4px 16px -4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  `
};
const getGradientBorderedPseudo = (cardStyle)=>{
    if (cardStyle !== "gradient-bordered") return '';
    return `
    .card::before {
      content: "";
      position: absolute;
      pointer-events: none;
      inset: 0;
      padding: 1px;
      border-radius: inherit;
      background: linear-gradient(
        160deg,
        color-mix(in srgb, var(--color-accent) 25%, transparent) 0%,
        color-mix(in srgb, var(--color-accent) 5%, transparent) 35%,
        color-mix(in srgb, var(--color-foreground) 5%, transparent) 75%,
        color-mix(in srgb, var(--color-background-accent) 15%, transparent) 100%
      );
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      mask-composite: exclude;
    }
  `;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/styles/primaryButtonStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInsetGlowPseudo",
    ()=>getInsetGlowPseudo,
    "primaryButtonStyleMap",
    ()=>primaryButtonStyleMap
]);
const primaryButtonStyleMap = {
    gradient: `
    background: linear-gradient(to bottom, color-mix(in srgb, var(--color-primary-cta) 75%, transparent), var(--color-primary-cta));
    box-shadow: color-mix(in srgb, var(--color-background) 25%, transparent) 0px 1px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 3px 3px 3px 0px;
  `,
    shadow: `
    background: var(--color-primary-cta);
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-primary-cta) 40%, transparent);
  `,
    flat: `
    background: var(--color-primary-cta);
    box-shadow: none;
  `,
    "radial-glow": `
    background:
      radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--color-background) 32.5%, transparent) 0%, transparent 45%),
      radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--color-background) 32.5%, transparent) 0%, transparent 45%),
      var(--color-primary-cta);
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 30%, transparent);
  `,
    "diagonal-gradient": `
    background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-primary-cta) 80%, transparent), var(--color-foreground));
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 30%, transparent);
  `,
    "double-inset": `
    background: var(--color-primary-cta);
    box-shadow: color-mix(in srgb, var(--color-background) 15%, transparent) 0px 4px 10px 0px inset, color-mix(in srgb, var(--color-background) 15%, transparent) 0px -4px 8px 0px inset;
  `,
    "primary-glow": `
    background: var(--color-primary-cta);
    box-shadow: color-mix(in srgb, var(--color-background) 20%, transparent) 0px 3px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 0.839802px 0.503881px -0.3125px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 1.99048px 1.19429px -0.625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 3.63084px 2.1785px -0.9375px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 6.03627px 3.62176px -1.25px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 9.74808px 5.84885px -1.5625px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 15.9566px 9.57398px -1.875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 27.4762px 16.4857px -2.1875px, color-mix(in srgb, var(--color-primary-cta) 13%, transparent) 0px 50px 30px -2.5px;
  `,
    "inset-glow": `
    position: relative;
    background: linear-gradient(180deg, color-mix(in srgb, var(--color-primary-cta) 65%, var(--color-background)) -35%, var(--color-primary-cta) 65%);
    box-shadow: 0 10px 18px -7px color-mix(in srgb, var(--color-background) 50%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 15%, transparent);
  `,
    "soft-glow": `
    position: relative;
    background: radial-gradient(ellipse at 50% -20%, color-mix(in srgb, var(--color-primary-cta) 70%, var(--color-foreground)) 0%, var(--color-primary-cta) 70%);
    box-shadow: 0 8px 24px -6px color-mix(in srgb, var(--color-primary-cta) 35%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 20%, transparent);
  `,
    "glass-shimmer": `
    position: relative;
    background: linear-gradient(165deg, color-mix(in srgb, var(--color-primary-cta) 85%, var(--color-foreground)) 0%, var(--color-primary-cta) 40%, color-mix(in srgb, var(--color-primary-cta) 90%, var(--color-background)) 100%);
    box-shadow: inset 0 1px 1px 0 color-mix(in srgb, var(--color-foreground) 25%, transparent), inset 0 -1px 1px 0 color-mix(in srgb, var(--color-background) 15%, transparent), 0 4px 12px -2px color-mix(in srgb, var(--color-primary-cta) 25%, transparent);
  `,
    "neon-outline": `
    position: relative;
    background: var(--color-primary-cta);
    box-shadow: 0 0 5px color-mix(in srgb, var(--color-accent) 50%, transparent), 0 0 15px color-mix(in srgb, var(--color-accent) 30%, transparent), 0 0 30px color-mix(in srgb, var(--color-accent) 15%, transparent), inset 0 0 8px color-mix(in srgb, var(--color-accent) 10%, transparent);
  `,
    "lifted": `
    position: relative;
    background: linear-gradient(180deg, color-mix(in srgb, var(--color-primary-cta) 95%, var(--color-foreground)) 0%, var(--color-primary-cta) 50%, color-mix(in srgb, var(--color-primary-cta) 95%, var(--color-background)) 100%);
    box-shadow: inset 0 2px 3px 0 color-mix(in srgb, var(--color-foreground) 20%, transparent), inset 0 -2px 3px 0 color-mix(in srgb, var(--color-background) 25%, transparent), 0 2px 4px -1px color-mix(in srgb, var(--color-background) 40%, transparent);
  `,
    "depth-layers": `
    position: relative;
    background: var(--color-primary-cta);
    box-shadow: 0 1px 2px color-mix(in srgb, var(--color-primary-cta) 20%, transparent), 0 2px 4px color-mix(in srgb, var(--color-primary-cta) 20%, transparent), 0 4px 8px color-mix(in srgb, var(--color-primary-cta) 15%, transparent), 0 8px 16px color-mix(in srgb, var(--color-primary-cta) 10%, transparent), 0 16px 32px color-mix(in srgb, var(--color-primary-cta) 5%, transparent);
  `,
    "accent-edge": `
    position: relative;
    background: linear-gradient(180deg, var(--color-primary-cta) 0%, color-mix(in srgb, var(--color-primary-cta) 90%, var(--color-background)) 100%);
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-accent) 60%, transparent), 0 4px 12px -2px color-mix(in srgb, var(--color-accent) 35%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 20%, transparent);
  `,
    "metallic": `
    position: relative;
    background: linear-gradient(135deg, color-mix(in srgb, var(--color-primary-cta) 80%, var(--color-foreground)) 0%, var(--color-primary-cta) 25%, color-mix(in srgb, var(--color-primary-cta) 90%, var(--color-background)) 50%, var(--color-primary-cta) 75%, color-mix(in srgb, var(--color-primary-cta) 85%, var(--color-foreground)) 100%);
    box-shadow: inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 30%, transparent), 0 3px 8px -2px color-mix(in srgb, var(--color-background) 50%, transparent);
  `
};
const getInsetGlowPseudo = (style)=>{
    if (style !== "inset-glow") return '';
    return `
    .primary-button::before {
      content: "";
      position: absolute;
      pointer-events: none;
      inset: 0;
      padding: 1px;
      border-radius: inherit;
      background: linear-gradient(
        0deg,
        color-mix(in srgb, var(--color-primary-cta) 20%, var(--color-background)) 0%,
        color-mix(in srgb, var(--color-primary-cta) 40%, var(--color-background)) 27%,
        color-mix(in srgb, var(--color-primary-cta) 60%, var(--color-foreground)) 62%,
        color-mix(in srgb, var(--color-primary-cta) 80%, var(--color-foreground)) 100%
      );
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      mask-composite: exclude;
    }
  `;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/styles/secondaryButtonStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "secondaryButtonStyleMap",
    ()=>secondaryButtonStyleMap
]);
const secondaryButtonStyleMap = {
    glass: `
    backdrop-filter: blur(8px);
    background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-secondary-cta) 80%, transparent), var(--color-secondary-cta));
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border: 1px solid var(--color-secondary-cta);
  `,
    solid: `
    background: var(--color-secondary-cta);
    box-shadow: none;
  `,
    layered: `
    background:
      linear-gradient(color-mix(in srgb, var(--color-accent) 5%, transparent) 0%, transparent 59.26%),
      linear-gradient(var(--color-secondary-cta), var(--color-secondary-cta)),
      linear-gradient(var(--color-secondary-cta), var(--color-secondary-cta)),
      linear-gradient(color-mix(in srgb, var(--color-accent) 5%, transparent) 0%, transparent 59.26%),
      linear-gradient(color-mix(in srgb, var(--color-secondary-cta) 60%, transparent), color-mix(in srgb, var(--color-secondary-cta) 60%, transparent)),
      var(--color-secondary-cta);
    box-shadow:
      2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 10%, transparent);
    border: 1px solid var(--color-secondary-cta);
  `,
    "radial-glow": `
    background:
      radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 40%),
      radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 40%),
      var(--color-secondary-cta);
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 10%, transparent);
  `
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/constants.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$borderRadius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/borderRadius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$contentWidth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/contentWidth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$baseVw$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/baseVw.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$textSizing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/textSizing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$background$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/background.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/shared.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$styles$2f$cardStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/styles/cardStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$styles$2f$primaryButtonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/styles/primaryButtonStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$styles$2f$secondaryButtonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/styles/secondaryButtonStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useTheme = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider. Wrap your sections in <ThemeProvider> at the app/page level.");
    }
    return context;
};
_s(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ThemeProvider = ({ children, defaultButtonVariant, defaultTextAnimation, borderRadius, contentWidth, sizing, background, cardStyle, primaryButtonStyle, secondaryButtonStyle, headingFontWeight })=>{
    _s1();
    const themeConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[themeConfig]": ()=>({
                defaultButtonVariant,
                defaultTextAnimation,
                borderRadius,
                contentWidth,
                sizing,
                background,
                cardStyle,
                primaryButtonStyle,
                secondaryButtonStyle,
                headingFontWeight
            })
    }["ThemeProvider.useMemo[themeConfig]"], [
        defaultButtonVariant,
        defaultTextAnimation,
        borderRadius,
        contentWidth,
        sizing,
        background,
        cardStyle,
        primaryButtonStyle,
        secondaryButtonStyle,
        headingFontWeight
    ]);
    const BackgroundComponent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$background$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundComponents"][background];
    const styleString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[styleString]": ()=>{
            const borderRadiusValue = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$borderRadius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderRadiusMap"][borderRadius];
            const borderRadiusCappedValue = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$borderRadius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderRadiusCappedMap"][borderRadius];
            const contentWidthValues = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$contentWidth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contentWidthMap"][contentWidth];
            const expandedContentWidthValues = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$contentWidth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandedContentWidthMap"][contentWidth];
            const baseVwValues = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$baseVw$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseVwMap"][sizing];
            const textSizingValues = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$textSizing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textSizingMap"][sizing];
            const headingFontWeightValue = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingFontWeightMap"][headingFontWeight];
            const cardCss = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$styles$2f$cardStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardStyleMap"][cardStyle];
            const primaryButtonCss = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$styles$2f$primaryButtonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryButtonStyleMap"][primaryButtonStyle];
            const secondaryButtonCss = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$styles$2f$secondaryButtonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondaryButtonStyleMap"][secondaryButtonStyle];
            const gradientBorderedPseudo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$styles$2f$cardStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGradientBorderedPseudo"])(cardStyle);
            const insetGlowPseudo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$styles$2f$primaryButtonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInsetGlowPseudo"])(primaryButtonStyle);
            return `
    :root {
      --theme-border-radius: ${borderRadiusValue};
      --theme-border-radius-capped: ${borderRadiusCappedValue};
      --width-content-width: ${contentWidthValues.desktop};
      --width-content-width-expanded: ${expandedContentWidthValues.desktop};
      --vw: ${baseVwValues.desktop};
      --heading-font-weight: ${headingFontWeightValue};
      --text-2xs: ${textSizingValues.desktop.text2xs};
      --text-xs: ${textSizingValues.desktop.textXs};
      --text-sm: ${textSizingValues.desktop.textSm};
      --text-base: ${textSizingValues.desktop.textBase};
      --text-lg: ${textSizingValues.desktop.textLg};
      --text-xl: ${textSizingValues.desktop.textXl};
      --text-2xl: ${textSizingValues.desktop.text2xl};
      --text-3xl: ${textSizingValues.desktop.text3xl};
      --text-4xl: ${textSizingValues.desktop.text4xl};
      --text-5xl: ${textSizingValues.desktop.text5xl};
      --text-6xl: ${textSizingValues.desktop.text6xl};
      --text-7xl: ${textSizingValues.desktop.text7xl};
      --text-8xl: ${textSizingValues.desktop.text8xl};
      --text-9xl: ${textSizingValues.desktop.text9xl};
    }
    @media (max-width: 768px) {
      :root {
        --width-content-width: ${contentWidthValues.mobile};
        --width-content-width-expanded: ${expandedContentWidthValues.mobile};
        --vw: ${baseVwValues.mobile};
        --text-2xs: ${textSizingValues.mobile.text2xs};
        --text-xs: ${textSizingValues.mobile.textXs};
        --text-sm: ${textSizingValues.mobile.textSm};
        --text-base: ${textSizingValues.mobile.textBase};
        --text-lg: ${textSizingValues.mobile.textLg};
        --text-xl: ${textSizingValues.mobile.textXl};
        --text-2xl: ${textSizingValues.mobile.text2xl};
        --text-3xl: ${textSizingValues.mobile.text3xl};
        --text-4xl: ${textSizingValues.mobile.text4xl};
        --text-5xl: ${textSizingValues.mobile.text5xl};
        --text-6xl: ${textSizingValues.mobile.text6xl};
        --text-7xl: ${textSizingValues.mobile.text7xl};
        --text-8xl: ${textSizingValues.mobile.text8xl};
        --text-9xl: ${textSizingValues.mobile.text9xl};
      }
    }
    .card {
      ${cardCss}
    }
    ${gradientBorderedPseudo}
    .primary-button {
      ${primaryButtonCss}
    }
    ${insetGlowPseudo}
    .secondary-button {
      ${secondaryButtonCss}
    }
  `;
        }
    }["ThemeProvider.useMemo[styleString]"], [
        borderRadius,
        contentWidth,
        sizing,
        headingFontWeight,
        cardStyle,
        primaryButtonStyle,
        secondaryButtonStyle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: themeConfig,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: styleString
            }, void 0, false, {
                fileName: "[project]/src/providers/themeProvider/ThemeProvider.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            BackgroundComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundComponent, {}, void 0, false, {
                fileName: "[project]/src/providers/themeProvider/ThemeProvider.tsx",
                lineNumber: 134,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/providers/themeProvider/ThemeProvider.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ThemeProvider, "INXWI6yew1l+Zkn0z3vnJKiPoN4=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cls",
    ()=>cls,
    "cn",
    ()=>cn,
    "shouldUseInvertedText",
    ()=>shouldUseInvertedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return inputs.filter(Boolean).join(" ");
}
function cls(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function shouldUseInvertedText(useInvertedBackground, cardStyle) {
    if (!useInvertedBackground) return false;
    const lightCardStyles = [];
    return lightCardStyles.includes(cardStyle);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/buttonUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getButtonProps",
    ()=>getButtonProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/types.ts [app-client] (ecmascript)");
;
;
const getButtonProps = (button, index, variant, buttonClassName, buttonTextClassName)=>{
    const isPrimary = index === 0;
    const buttonBgClass = isPrimary ? "primary-button" : "secondary-button";
    const buttonTextClass = isPrimary ? "text-primary-cta-text" : "text-secondary-cta-text";
    // Base props shared by all variants
    const baseProps = {
        text: button.text,
        variant,
        href: button.href,
        onClick: button.onClick
    };
    // directional-hover variant (needs circleClassName handling)
    if (variant === "directional-hover") {
        const circleClass = isPrimary ? "bg-foreground" : "bg-foreground/5";
        const { bgClassName, textClassName, circleClassName } = button.props || {};
        return {
            ...button.props,
            ...baseProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClass, buttonClassName, button.props?.className),
            bgClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, bgClassName),
            textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClassName, textClassName),
            circleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(circleClass, circleClassName)
        };
    }
    // Variants with bgClassName (text-stagger, shift-hover, bounce-effect)
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasBgClassName"])(variant)) {
        const { bgClassName, textClassName } = button.props || {};
        return {
            ...button.props,
            ...baseProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClass, buttonClassName, button.props?.className),
            bgClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, bgClassName),
            textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClassName, textClassName)
        };
    }
    // icon-arrow variant
    if (variant === "icon-arrow") {
        const iconBgClass = isPrimary ? "secondary-button text-secondary-cta-text" : "primary-button text-primary-cta-text";
        const { textClassName, iconClassName } = button.props || {};
        return {
            ...button.props,
            ...baseProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, buttonTextClass, buttonClassName, button.props?.className),
            textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClassName, textClassName),
            iconClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(iconBgClass, iconClassName)
        };
    }
    // expand-hover variant
    if (variant === "expand-hover") {
        const iconBgClass = isPrimary ? "secondary-button" : "primary-button";
        const iconTextClass = isPrimary ? "text-secondary-cta-text" : "text-primary-cta-text";
        const hoverTextClass = isPrimary ? "md:group-hover:text-secondary-cta-text" : "md:group-hover:text-primary-cta-text";
        const { textClassName, iconClassName, iconBgClassName } = button.props || {};
        return {
            ...button.props,
            ...baseProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, buttonTextClass, buttonClassName, button.props?.className),
            textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(hoverTextClass, buttonTextClassName, textClassName),
            iconClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(iconTextClass, iconClassName),
            iconBgClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(iconBgClass, iconBgClassName)
        };
    }
    // hover-bubble variant
    if (variant === "hover-bubble") {
        const iconBgClass = isPrimary ? "secondary-button text-secondary-cta-text" : "primary-button text-primary-cta-text";
        const baseTextClass = isPrimary ? "text-primary-cta-text" : "text-secondary-cta-text";
        const { bgClassName, textClassName, iconClassName } = button.props || {};
        return {
            ...button.props,
            ...baseProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonClassName, button.props?.className),
            bgClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, bgClassName),
            textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(baseTextClass, buttonTextClassName, textClassName),
            iconClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(iconBgClass, iconClassName)
        };
    }
    // hover-magnetic variant (default fallback)
    return {
        ...button.props,
        ...baseProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, buttonTextClass, buttonClassName, button.props?.className),
        textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClassName, buttonTextClass)
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/throttle.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "throttle",
    ()=>throttle
]);
function throttle(func, wait) {
    let inThrottle = false;
    let lastArgs = null;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(()=>{
                inThrottle = false;
                if (lastArgs) {
                    func(...lastArgs);
                    lastArgs = null;
                }
            }, wait);
        } else {
            lastArgs = args;
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebAgency2Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavbarLayoutFloatingOverlay$2f$NavbarLayoutFloatingOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$hero$2f$HeroSplitDoubleCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureBento$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/feature/FeatureBento.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureCardTwentySix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/feature/FeatureCardTwentySix.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureCardSixteen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/feature/FeatureCardSixteen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$metrics$2f$MetricCardOne$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/metrics/MetricCardOne.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$team$2f$TeamCardFive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/team/TeamCardFive.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$faq$2f$FaqBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/faq/FaqBase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$contact$2f$ContactCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/contact/ContactCTA.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$footer$2f$FooterBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/footer/FooterBase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$testimonial$2f$TestimonialCardFifteen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/testimonial/TestimonialCardFifteen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-client] (ecmascript) <export default as Puzzle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tv$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tv.js [app-client] (ecmascript) <export default as Tv>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function WebAgency2Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        defaultButtonVariant: "text-stagger",
        defaultTextAnimation: "entrance-slide",
        borderRadius: "pill",
        contentWidth: "medium",
        sizing: "medium",
        background: "none",
        cardStyle: "glass-elevated",
        primaryButtonStyle: "metallic",
        secondaryButtonStyle: "glass",
        headingFontWeight: "medium",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            root: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavbarLayoutFloatingOverlay$2f$NavbarLayoutFloatingOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    brandName: "Webild",
                    navItems: [
                        {
                            name: "Work",
                            id: "work"
                        },
                        {
                            name: "Services",
                            id: "services"
                        },
                        {
                            name: "About",
                            id: "about"
                        },
                        {
                            name: "Contact",
                            id: "contact"
                        }
                    ],
                    button: {
                        text: "Get Started",
                        href: "#contact"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$hero$2f$HeroSplitDoubleCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "We Build Digital Experiences",
                    description: "Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers.",
                    tag: "Award-Winning Agency",
                    tagIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                    tagAnimation: "slide-up",
                    background: {
                        variant: "canvas-reveal"
                    },
                    buttons: [
                        {
                            text: "Start Project",
                            href: "#contact"
                        },
                        {
                            text: "View Work",
                            href: "#work"
                        }
                    ],
                    buttonAnimation: "slide-up",
                    carouselPosition: "right",
                    leftCarouselItems: [
                        {
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp",
                            imageAlt: "UI UX Design - Daily Life app"
                        },
                        {
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp",
                            imageAlt: "UI UX Design - SaaS platform"
                        },
                        {
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp",
                            imageAlt: "UI UX Design - Luminé skincare"
                        },
                        {
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-7.webp",
                            imageAlt: "UI UX Design - Online courses"
                        },
                        {
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-9.webp",
                            imageAlt: "UI UX Design - Business coach"
                        }
                    ],
                    rightCarouselItems: [
                        {
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp",
                            imageAlt: "UI UX Design - Luxuria travel"
                        },
                        {
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp",
                            imageAlt: "UI UX Design - Dental practice"
                        },
                        {
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp",
                            imageAlt: "UI UX Design - AI product builder"
                        },
                        {
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-8.webp",
                            imageAlt: "UI UX Design - AI automation"
                        }
                    ],
                    carouselItemClassName: "!aspect-[4/5]"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureBento$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Our Services",
                    description: "We offer a full suite of digital services to help your brand stand out online.",
                    textboxLayout: "default",
                    useInvertedBackground: false,
                    animationType: "slide-up",
                    buttons: [
                        {
                            text: "All Services",
                            href: "#services"
                        }
                    ],
                    buttonAnimation: "slide-up",
                    features: [
                        {
                            title: "SEO",
                            description: "We optimize your website to rank higher on search engines and drive organic traffic.",
                            bentoComponent: "marquee",
                            centerIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
                            variant: "text",
                            texts: [
                                "Keywords",
                                "Backlinks",
                                "Meta Tags",
                                "Organic Traffic",
                                "Rankings",
                                "Analytics",
                                "SERP",
                                "Indexing"
                            ]
                        },
                        {
                            title: "Web Development",
                            description: "Custom-built websites that are fast, responsive, and designed to convert.",
                            bentoComponent: "media-stack",
                            items: [
                                {
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-2.webp",
                                    imageAlt: "Web project - AgentFlow AI platform"
                                },
                                {
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp",
                                    imageAlt: "Web project - Architecture studio"
                                },
                                {
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp",
                                    imageAlt: "Web project - Summit Roofing"
                                }
                            ]
                        },
                        {
                            title: "Branding",
                            description: "Build a memorable brand identity that resonates with your audience.",
                            bentoComponent: "media-stack",
                            items: [
                                {
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp",
                                    imageAlt: "Brand project 1"
                                },
                                {
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp",
                                    imageAlt: "Brand project 2"
                                },
                                {
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp",
                                    imageAlt: "Brand project 3"
                                }
                            ]
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureCardTwentySix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Our Work",
                    description: "A selection of projects we've crafted for clients across industries.",
                    textboxLayout: "default",
                    useInvertedBackground: false,
                    buttons: [
                        {
                            text: "View All Work",
                            href: "#work"
                        }
                    ],
                    buttonAnimation: "slide-up",
                    cardClassName: "!h-auto aspect-video",
                    features: [
                        {
                            title: "Umbra Skincare",
                            description: "Luxury fragrance e-commerce",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp",
                            imageAlt: "Umbra Skincare website",
                            buttonIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
                            buttonHref: "#"
                        },
                        {
                            title: "Luxuria Travel",
                            description: "Bespoke luxury travel experiences",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp",
                            imageAlt: "Luxuria Travel website",
                            buttonIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
                            buttonHref: "#"
                        },
                        {
                            title: "Dental Care",
                            description: "Premier dental practice",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-3.webp",
                            imageAlt: "Luxury Dental Care website",
                            buttonIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
                            buttonHref: "#"
                        },
                        {
                            title: "Summit Roofing",
                            description: "Professional roofing services",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-4.webp",
                            imageAlt: "Summit Roofing website",
                            buttonIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
                            buttonHref: "#"
                        },
                        {
                            title: "Dubai Real Estate",
                            description: "Luxury property listings",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-5.webp",
                            imageAlt: "Dubai Real Estate website",
                            buttonIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
                            buttonHref: "#"
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureBento$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Our Promise",
                    description: "We deliver results that speak for themselves.",
                    textboxLayout: "default",
                    useInvertedBackground: false,
                    animationType: "slide-up",
                    features: [
                        {
                            title: "All Devices Optimization",
                            description: "Pixel-perfect websites that look stunning on every screen size and device.",
                            bentoComponent: "phone",
                            statusIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
                            alertIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
                            alertTitle: "Responsive check",
                            alertMessage: "All breakpoints passed",
                            apps: [
                                {
                                    name: "Phone",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
                                },
                                {
                                    name: "SMS",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
                                },
                                {
                                    name: "Books",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
                                },
                                {
                                    name: "TV",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tv$3e$__["Tv"]
                                },
                                {
                                    name: "Camera",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"]
                                },
                                {
                                    name: "Music",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"]
                                },
                                {
                                    name: "Settings",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
                                },
                                {
                                    name: "Chat",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
                                }
                            ]
                        },
                        {
                            title: "Secure Hosting",
                            description: "Enterprise-grade security and 99.9% uptime for your website.",
                            bentoComponent: "reveal-icon",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
                        },
                        {
                            title: "Fast Turnaround",
                            description: "From concept to launch in record time without sacrificing quality.",
                            bentoComponent: "timeline",
                            heading: "Project Launch",
                            subheading: "Week 1",
                            items: [
                                {
                                    label: "Discovery & wireframes",
                                    detail: "Day 1-3"
                                },
                                {
                                    label: "Design & development",
                                    detail: "Day 4-10"
                                },
                                {
                                    label: "Testing & deployment",
                                    detail: "Day 11-14"
                                }
                            ],
                            completedLabel: "Live"
                        },
                        {
                            title: "Seamless Integrations",
                            description: "Connect with the tools you already use — CRMs, analytics, payments, and more.",
                            bentoComponent: "orbiting-icons",
                            centerIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__["Puzzle"],
                            items: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"]
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                                }
                            ]
                        },
                        {
                            title: "Growth Trends",
                            description: "Data-driven insights to optimize your search presence and drive traffic.",
                            bentoComponent: "line-chart"
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$testimonial$2f$TestimonialCardFifteen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    testimonial: "Webild completely transformed our online presence. The team delivered a stunning website that exceeded our expectations and doubled our conversion rate.",
                    rating: 5,
                    author: "— Maria Santos, CEO at Luxuria Travel",
                    avatars: [
                        {
                            src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp",
                            alt: "Client"
                        }
                    ],
                    ratingAnimation: "slide-up",
                    avatarsAnimation: "slide-up",
                    useInvertedBackground: false
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$metrics$2f$MetricCardOne$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Trusted by Industry Leaders",
                    description: "Years of experience building digital products that drive real results.",
                    textboxLayout: "default",
                    useInvertedBackground: false,
                    gridVariant: "uniform-all-items-equal",
                    animationType: "slide-up",
                    metrics: [
                        {
                            id: "projects",
                            value: "100+",
                            title: "Projects",
                            description: "Successfully delivered across all industries",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
                        },
                        {
                            id: "satisfaction",
                            value: "99%",
                            title: "Satisfaction",
                            description: "Client satisfaction rate and counting",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                        },
                        {
                            id: "years",
                            value: "8+",
                            title: "Years",
                            description: "Of crafting exceptional digital experiences",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureCardSixteen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Why Choose Webild",
                    description: "See the difference a professional web agency makes.",
                    textboxLayout: "default",
                    useInvertedBackground: false,
                    animationType: "slide-up",
                    negativeCard: {
                        items: [
                            "Generic templates with no personality",
                            "Slow load times and poor performance",
                            "No SEO strategy or search visibility",
                            "Outdated design that hurts credibility",
                            "No ongoing support after launch"
                        ]
                    },
                    positiveCard: {
                        items: [
                            "Custom designs tailored to your brand",
                            "Lightning-fast performance on all devices",
                            "Built-in SEO to drive organic traffic",
                            "Modern design that builds trust",
                            "Dedicated support and maintenance"
                        ]
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$team$2f$TeamCardFive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Meet the Team",
                    description: "The creative minds behind your next project.",
                    textboxLayout: "default",
                    useInvertedBackground: false,
                    animationType: "slide-up",
                    mediaClassName: "object-[65%_center]",
                    team: [
                        {
                            id: "1",
                            name: "Sarah Miller",
                            role: "Lead Developer",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp",
                            imageAlt: "Sarah Miller"
                        },
                        {
                            id: "2",
                            name: "Valentina Reyes",
                            role: "Creative Director",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.webp",
                            imageAlt: "Valentina Reyes"
                        },
                        {
                            id: "3",
                            name: "Carlos Mendoza",
                            role: "UX Designer",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.webp",
                            imageAlt: "Carlos Mendoza"
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$faq$2f$FaqBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Frequently Asked Questions",
                    description: "Everything you need to know about working with us.",
                    textboxLayout: "default",
                    useInvertedBackground: false,
                    faqsAnimation: "slide-up",
                    faqs: [
                        {
                            id: "1",
                            title: "How long does a typical project take?",
                            content: "Most projects are completed within 2-4 weeks depending on scope and complexity. We'll provide a detailed timeline during our initial consultation."
                        },
                        {
                            id: "2",
                            title: "What is your pricing structure?",
                            content: "We offer project-based pricing tailored to your needs. Every project includes design, development, SEO optimization, and post-launch support."
                        },
                        {
                            id: "3",
                            title: "Do you offer ongoing maintenance?",
                            content: "Yes! We provide ongoing support and maintenance packages to keep your website updated, secure, and performing at its best."
                        },
                        {
                            id: "4",
                            title: "Can you redesign my existing website?",
                            content: "Absolutely. We specialize in website redesigns that modernize your brand while preserving your existing content and SEO rankings."
                        },
                        {
                            id: "5",
                            title: "What technologies do you use?",
                            content: "We build with modern technologies including Next.js, React, and Tailwind CSS to ensure fast, scalable, and maintainable websites."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$contact$2f$ContactCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tag: "Get in Touch",
                    title: "Ready to Transform Your Digital Presence?",
                    description: "Let's build something extraordinary together. Get in touch and let's discuss your next project.",
                    background: {
                        variant: "rotated-rays-animated"
                    },
                    buttons: [
                        {
                            text: "Start Your Project",
                            href: "#contact"
                        },
                        {
                            text: "View Our Work",
                            href: "#work"
                        }
                    ],
                    buttonAnimation: "slide-up",
                    useInvertedBackground: false
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$footer$2f$FooterBase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    logoText: "Webild",
                    copyrightText: "© 2026 | Webild",
                    columns: [
                        {
                            title: "Company",
                            items: [
                                {
                                    label: "About",
                                    href: "#about"
                                },
                                {
                                    label: "Services",
                                    href: "#services"
                                },
                                {
                                    label: "Work",
                                    href: "#work"
                                },
                                {
                                    label: "Contact",
                                    href: "#contact"
                                }
                            ]
                        },
                        {
                            title: "Services",
                            items: [
                                {
                                    label: "Web Development",
                                    href: "#"
                                },
                                {
                                    label: "SEO",
                                    href: "#"
                                },
                                {
                                    label: "Branding",
                                    href: "#"
                                },
                                {
                                    label: "UI/UX Design",
                                    href: "#"
                                }
                            ]
                        },
                        {
                            title: "Connect",
                            items: [
                                {
                                    label: "Twitter",
                                    href: "#"
                                },
                                {
                                    label: "LinkedIn",
                                    href: "#"
                                },
                                {
                                    label: "Instagram",
                                    href: "#"
                                },
                                {
                                    label: "Dribbble",
                                    href: "#"
                                }
                            ]
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 313,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = WebAgency2Page;
var _c;
__turbopack_context__.k.register(_c, "WebAgency2Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_86b73d11._.js.map