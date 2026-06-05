(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
    "[project]/src/providers/themeProvider/config/borderRadius.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "borderRadiusCappedMap",
            () => borderRadiusCappedMap,
            "borderRadiusMap",
            () => borderRadiusMap
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
            () => contentWidthMap,
            "expandedContentWidthMap",
            () => expandedContentWidthMap
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
            () => textSizingMap
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
            () => baseVwMap
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
    "[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "cls",
            () => cls,
            "cn",
            () => cn,
            "shouldUseInvertedText",
            () => shouldUseInvertedText
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");;;

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
    "[project]/src/components/background/CircleGradientBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;
        const CircleGradientBackground = ({
            className = "",
            diagonal = "primary"
        }) => {
            const isPrimary = diagonal === "primary";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("fixed top-0 left-0 right-0 bottom-0 h-screen w-full -z-10 overflow-hidden", className),
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("fixed w-100 md:w-70 h-auto aspect-square rounded-full opacity-10", isPrimary ? "top-0 right-0 translate-x-1/2 -translate-y-1/2" : "top-0 left-0 -translate-x-1/2 -translate-y-1/2"),
                        style: {
                            background: `radial-gradient(circle at center, var(--color-background-accent) 35%, transparent 70%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/CircleGradientBackground.tsx",
                        lineNumber: 23,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("fixed w-100 md:w-70 h-auto aspect-square rounded-full opacity-10", isPrimary ? "bottom-0 left-0 -translate-x-1/2 translate-y-1/2" : "bottom-0 right-0 translate-x-1/2 translate-y-1/2"),
                        style: {
                            background: `radial-gradient(circle at center, var(--color-background-accent) 35%, transparent 70%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/CircleGradientBackground.tsx",
                        lineNumber: 32,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/background/CircleGradientBackground.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = CircleGradientBackground;
        const __TURBOPACK__default__export__ = CircleGradientBackground;
        var _c;
        __turbopack_context__.k.register(_c, "CircleGradientBackground");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/AuroraBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;
        const AuroraBackground = ({
            className = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("fixed inset-0 z-0 w-full h-full bg-background", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full z-10 backdrop-blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/AuroraBackground.tsx",
                        lineNumber: 14,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-y-1/2 -translate-x-[120%] w-[9vw] h-[110vh] bg-background-accent/15   -rotate-[52.5deg] rounded-[100%]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/AuroraBackground.tsx",
                        lineNumber: 16,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-20vh] right-[2.5vw] -translate-x-[0%] w-[12.5vw] h-[100vh] bg-background-accent/15   -rotate-[60deg] rounded-[100%]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/AuroraBackground.tsx",
                        lineNumber: 18,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-20vh] left-[2vw] -translate-x-[0%] w-[15vw] h-[150vh] bg-background-accent/20   -rotate-[45deg] rounded-[100%]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/AuroraBackground.tsx",
                        lineNumber: 20,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-30vh] left-0 -translate-x-[0%] w-[10vw] h-[70vh] bg-background-accent/15   -rotate-[45deg] rounded-[100%]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/AuroraBackground.tsx",
                        lineNumber: 22,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-40vh] left-0 -translate-x-[0%] w-[120vw] h-[50vh] bg-background-accent/10   -rotate-[20deg] rounded-[100%]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/AuroraBackground.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/background/AuroraBackground.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = AuroraBackground;
        const __TURBOPACK__default__export__ = AuroraBackground;
        var _c;
        __turbopack_context__.k.register(_c, "AuroraBackground");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/floatingGradientBackground/FloatingGradientBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;;
        const FloatingGradientBackground = ({
            className = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("fixed top-0 bottom-0 left-0 right-0 w-full h-full z-0 pointer-events-none blur-[40px]", "[mask-image:linear-gradient(to_bottom,transparent,#010101_20%,#010101_80%,transparent)]", "[mask-composite:intersect]", "[-webkit-mask-image:linear-gradient(to_bottom,transparent,#010101_20%,#010101_80%,transparent)]", "[-webkit-mask-composite:destination-in]", "floating-gradient-background-container", className),
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute opacity-[0.075] floating-gradient-background-circle-one"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/floatingGradientBackground/FloatingGradientBackground.tsx",
                        lineNumber: 26,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute opacity-[0.125] floating-gradient-background-circle-two"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/floatingGradientBackground/FloatingGradientBackground.tsx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute opacity-[0.125] floating-gradient-background-circle-three"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/floatingGradientBackground/FloatingGradientBackground.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute opacity-[0.15] floating-gradient-background-circle-four"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/floatingGradientBackground/FloatingGradientBackground.tsx",
                        lineNumber: 29,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute opacity-[0.075] floating-gradient-background-circle-five"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/floatingGradientBackground/FloatingGradientBackground.tsx",
                        lineNumber: 30,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/background/floatingGradientBackground/FloatingGradientBackground.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = FloatingGradientBackground;
        const __TURBOPACK__default__export__ = FloatingGradientBackground;
        var _c;
        __turbopack_context__.k.register(_c, "FloatingGradientBackground");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/NoiseBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;
        const NoiseBackground = ({
            className = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("fixed inset-0 -z-10 bg-background-accent/10", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-repeat mix-blend-overlay opacity-10",
                    style: {
                        backgroundImage: "url(https://webuild-dev.s3.eu-north-1.amazonaws.com/default/noise.webp)",
                        backgroundSize: "512px"
                    },
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/background/NoiseBackground.tsx",
                    lineNumber: 16,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/background/NoiseBackground.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = NoiseBackground;
        const __TURBOPACK__default__export__ = NoiseBackground;
        var _c;
        __turbopack_context__.k.register(_c, "NoiseBackground");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/NoiseDiagonalGradientBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;
        const NoiseDiagonalGradientBackground = ({
            className = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("fixed inset-0 -z-10 bg-background-accent/10", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none opacity-100 bg-gradient-to-br from-background via-background-accent/10 to-background-accent/20",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/NoiseDiagonalGradientBackground.tsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-repeat mix-blend-overlay opacity-10",
                        style: {
                            backgroundImage: "url(https://webuild-dev.s3.eu-north-1.amazonaws.com/default/noise.webp)",
                            backgroundSize: "512px"
                        },
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/NoiseDiagonalGradientBackground.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/background/NoiseDiagonalGradientBackground.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = NoiseDiagonalGradientBackground;
        const __TURBOPACK__default__export__ = NoiseDiagonalGradientBackground;
        var _c;
        __turbopack_context__.k.register(_c, "NoiseDiagonalGradientBackground");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/FluidBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export e as extend>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shaderMaterial.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature(),
            _s1 = __turbopack_context__.k.signature();
        'use client';;;;;;
        const getComputedColor = (varName) => {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const styles = getComputedStyle(document.documentElement);
            const colorString = styles.getPropertyValue(varName).trim();
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](colorString || '#000000');
        };
        const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
        const fragmentShader = `
  #ifdef GL_ES
    precision lowp float;
  #endif
  uniform float iTime;
  uniform vec2 iResolution;
  uniform vec3 uBackgroundColor;
  uniform vec3 uPrimaryCta;
  uniform vec3 uAccent;
  uniform vec3 uSecondaryCta;
  varying vec2 vUv;

  vec4 buf[8];

  vec4 sigmoid(vec4 x) { return 1. / (1. + exp(-x)); }

  vec4 cppn_fn(vec2 coordinate, float in0, float in1, float in2) {
    buf[6] = vec4(coordinate.x, coordinate.y, 0.3948333106474662 + in0, 0.36 + in1);
    buf[7] = vec4(0.14 + in2, sqrt(coordinate.x * coordinate.x + coordinate.y * coordinate.y), 0., 0.);

    buf[0] = mat4(vec4(6.5404263, -3.6126034, 0.7590882, -1.13613), vec4(2.4582713, 3.1660357, 1.2219609, 0.06276096), vec4(-5.478085, -6.159632, 1.8701609, -4.7742867), vec4(6.039214, -5.542865, -0.90925294, 3.251348))
    * buf[6]
    + mat4(vec4(0.8473259, -5.722911, 3.975766, 1.6522468), vec4(-0.24321538, 0.5839259, -1.7661959, -5.350116), vec4(0.0, 0.0, 0.0, 0.0), vec4(0.0, 0.0, 0.0, 0.0))
    * buf[7]
    + vec4(0.21808943, 1.1243913, -1.7969975, 5.0294676);

    buf[1] = mat4(vec4(-3.3522482, -6.0612736, 0.55641043, -4.4719114), vec4(0.8631464, 1.7432913, 5.643898, 1.6106541), vec4(2.4941394, -3.5012043, 1.7184316, 6.357333), vec4(3.310376, 8.209261, 1.1355612, -1.165539))
    * buf[6]
    + mat4(vec4(5.24046, -13.034365, 0.009859298, 15.870829), vec4(2.987511, 3.129433, -0.89023495, -1.6822904), vec4(0.0, 0.0, 0.0, 0.0), vec4(0.0, 0.0, 0.0, 0.0))
    * buf[7]
    + vec4(-5.9457836, -6.573602, -0.8812491, 1.5436668);

    buf[0] = sigmoid(buf[0]);
    buf[1] = sigmoid(buf[1]);

    buf[2] = mat4(vec4(-15.219568, 8.095543, -2.429353, -1.9381982), vec4(-5.951362, 4.3115187, 2.6393783, 1.274315), vec4(-7.3145227, 6.7297835, 5.2473326, 5.9411426), vec4(5.0796127, 8.979051, -1.7278991, -1.158976))
    * buf[6]
    + mat4(vec4(-11.967154, -11.608155, 6.1486754, 11.237008), vec4(2.124141, -6.263192, -1.7050359, -0.7021966), vec4(0.0, 0.0, 0.0, 0.0), vec4(0.0, 0.0, 0.0, 0.0))
    * buf[7]
    + vec4(-4.17164, -3.2281182, -4.576417, -3.6401186);

    buf[3] = mat4(vec4(3.1832156, -13.738922, 1.879223, 3.233465), vec4(0.64300746, 12.768129, 1.9141049, 0.50990224), vec4(-0.049295485, 4.4807224, 1.4733979, 1.801449), vec4(5.0039253, 13.000481, 3.3991797, -4.5561905))
    * buf[6]
    + mat4(vec4(-0.1285731, 7.720628, -3.1425676, 4.742367), vec4(0.6393625, 3.714393, -0.8108378, -0.39174938), vec4(0.0, 0.0, 0.0, 0.0), vec4(0.0, 0.0, 0.0, 0.0))
    * buf[7]
    + vec4(-1.1811101, -21.621881, 0.7851888, 1.2329718);

    buf[2] = sigmoid(buf[2]);
    buf[3] = sigmoid(buf[3]);

    buf[4] = mat4(vec4(5.214916, -7.183024, 2.7228765, 2.6592617), vec4(-5.601878, -25.3591, 4.067988, 0.4602802), vec4(-10.57759, 24.286327, 21.102104, 37.546658), vec4(4.3024497, -1.9625226, 2.3458803, -1.372816))
    * buf[0]
    + mat4(vec4(-17.6526, -10.507558, 2.2587414, 12.462782), vec4(6.265566, -502.75443, -12.642513, 0.9112289), vec4(-10.983244, 20.741234, -9.701768, -0.7635988), vec4(5.383626, 1.4819539, -4.1911616, -4.8444734))
    * buf[1]
    + mat4(vec4(12.785233, -16.345072, -0.39901125, 1.7955981), vec4(-30.48365, -1.8345358, 1.4542528, -1.1118771), vec4(19.872723, -7.337935, -42.941723, -98.52709), vec4(8.337645, -2.7312303, -2.2927687, -36.142323))
    * buf[2]
    + mat4(vec4(-16.298317, 3.5471997, -0.44300047, -9.444417), vec4(57.5077, -35.609753, 16.163465, -4.1534753), vec4(-0.07470326, -3.8656476, -7.0901804, 3.1523974), vec4(-12.559385, -7.077619, 1.490437, -0.8211543))
    * buf[3]
    + vec4(-7.67914, 15.927437, 1.3207729, -1.6686112);

    buf[5] = mat4(vec4(-1.4109162, -0.372762, -3.770383, -21.367174), vec4(-6.2103205, -9.35908, 0.92529047, 8.82561), vec4(11.460242, -22.348068, 13.625772, -18.693201), vec4(-0.3429052, -3.9905605, -2.4626114, -0.45033523))
    * buf[0]
    + mat4(vec4(7.3481627, -4.3661838, -6.3037653, -3.868115), vec4(1.5462853, 6.5488915, 1.9701879, -0.58291394), vec4(6.5858274, -2.2180402, 3.7127688, -1.3730392), vec4(-5.7973905, 10.134961, -2.3395722, -5.965605))
    * buf[1]
    + mat4(vec4(-2.5132585, -6.6685553, -1.4029363, -0.16285264), vec4(-0.37908727, 0.53738135, 4.389061, -1.3024765), vec4(-0.70647055, 2.0111287, -5.1659346, -3.728635), vec4(-13.562562, 10.487719, -0.9173751, -2.6487076))
    * buf[2]
    + mat4(vec4(-8.645013, 6.5546675, -6.3944063, -5.5933375), vec4(-0.57783127, -1.077275, 36.91025, 5.736769), vec4(14.283112, 3.7146652, 7.1452246, -4.5958776), vec4(2.7192075, 3.6021907, -4.366337, -2.3653464))
    * buf[3]
    + vec4(-5.9000807, -4.329569, 1.2427121, 8.59503);

    buf[4] = sigmoid(buf[4]);
    buf[5] = sigmoid(buf[5]);

    buf[6] = mat4(vec4(-1.61102, 0.7970257, 1.4675229, 0.20917463), vec4(-28.793737, -7.1390953, 1.5025433, 4.656581), vec4(-10.94861, 39.66238, 0.74318546, -10.095605), vec4(-0.7229728, -1.5483948, 0.7301322, 2.1687684))
    * buf[0]
    + mat4(vec4(3.2547753, 21.489103, -1.0194173, -3.3100595), vec4(-3.7316632, -3.3792162, -7.223193, -0.23685838), vec4(13.1804495, 0.7916005, 5.338587, 5.687114), vec4(-4.167605, -17.798311, -6.815736, -1.6451967))
    * buf[1]
    + mat4(vec4(0.604885, -7.800309, -7.213122, -2.741014), vec4(-3.522382, -0.12359311, -0.5258442, 0.43852118), vec4(9.6752825, -22.853785, 2.062431, 0.099892326), vec4(-4.3196306, -17.730087, 2.5184598, 5.30267))
    * buf[2]
    + mat4(vec4(-6.545563, -15.790176, -6.0438633, -5.415399), vec4(-43.591583, 28.551912, -16.00161, 18.84728), vec4(4.212382, 8.394307, 3.0958717, 8.657522), vec4(-5.0237565, -4.450633, -4.4768, -5.5010443))
    * buf[3]
    + mat4(vec4(1.6985557, -67.05806, 6.897715, 1.9004834), vec4(1.8680354, 2.3915145, 2.5231109, 4.081538), vec4(11.158006, 1.7294737, 2.0738268, 7.386411), vec4(-4.256034, -306.24686, 8.258898, -17.132736))
    * buf[4]
    + mat4(vec4(1.6889864, -4.5852966, 3.8534803, -6.3482175), vec4(1.3543309, -1.2640043, 9.932754, 2.9079645), vec4(-5.2770967, 0.07150358, -0.13962056, 3.3269649), vec4(28.34703, -4.918278, 6.1044083, 4.085355))
    * buf[5]
    + vec4(6.6818056, 12.522166, -3.7075126, -4.104386);

    buf[7] = mat4(vec4(-8.265602, -4.7027016, 5.098234, 0.7509808), vec4(8.6507845, -17.15949, 16.51939, -8.884479), vec4(-4.036479, -2.3946867, -2.6055532, -1.9866527), vec4(-2.2167742, -1.8135649, -5.9759874, 4.8846445))
    * buf[0]
    + mat4(vec4(6.7790847, 3.5076547, -2.8191125, -2.7028968), vec4(-5.743024, -0.27844876, 1.4958696, -5.0517144), vec4(13.122226, 15.735168, -2.9397483, -4.101023), vec4(-14.375265, -5.030483, -6.2599335, 2.9848232))
    * buf[1]
    + mat4(vec4(4.0950394, -0.94011575, -5.674733, 4.755022), vec4(4.3809423, 4.8310084, 1.7425908, -3.437416), vec4(2.117492, 0.16342592, -104.56341, 16.949184), vec4(-5.22543, -2.994248, 3.8350096, -1.9364246))
    * buf[2]
    + mat4(vec4(-5.900337, 1.7946124, -13.604192, -3.8060522), vec4(6.6583457, 31.911177, 25.164474, 91.81147), vec4(11.840538, 4.1503043, -0.7314397, 6.768467), vec4(-6.3967767, 4.034772, 6.1714606, -0.32874924))
    * buf[3]
    + mat4(vec4(3.4992442, -196.91893, -8.923708, 2.8142626), vec4(3.4806502, -3.1846354, 5.1725626, 5.1804223), vec4(-2.4009497, 15.585794, 1.2863957, 2.0252278), vec4(-71.25271, -62.441242, -8.138444, 0.50670296))
    * buf[4]
    + mat4(vec4(-12.291733, -11.176166, -7.3474145, 4.390294), vec4(10.805477, 5.6337385, -0.9385842, -4.7348723), vec4(-12.869276, -7.039391, 5.3029537, 7.5436664), vec4(1.4593618, 8.91898, 3.5101583, 5.840625))
    * buf[5]
    + vec4(2.2415268, -6.705987, -0.98861027, -2.117676);

    buf[6] = sigmoid(buf[6]);
    buf[7] = sigmoid(buf[7]);

    buf[0] = mat4(vec4(1.6794263, 1.3817469, 2.9625452, 0.0), vec4(-1.8834411, -1.4806935, -3.5924516, 0.0), vec4(-1.3279216, -1.0918057, -2.3124623, 0.0), vec4(0.2662234, 0.23235129, 0.44178495, 0.0))
    * buf[0]
    + mat4(vec4(-0.6299101, -0.5945583, -0.9125601, 0.0), vec4(0.17828953, 0.18300213, 0.18182953, 0.0), vec4(-2.96544, -2.5819945, -4.9001055, 0.0), vec4(1.4195864, 1.1868085, 2.5176322, 0.0))
    * buf[1]
    + mat4(vec4(-1.2584374, -1.0552157, -2.1688404, 0.0), vec4(-0.7200217, -0.52666044, -1.438251, 0.0), vec4(0.15345335, 0.15196142, 0.272854, 0.0), vec4(0.945728, 0.8861938, 1.2766753, 0.0))
    * buf[2]
    + mat4(vec4(-2.4218085, -1.968602, -4.35166, 0.0), vec4(-22.683098, -18.0544, -41.954372, 0.0), vec4(0.63792, 0.5470648, 1.1078634, 0.0), vec4(-1.5489894, -1.3075932, -2.6444845, 0.0))
    * buf[3]
    + mat4(vec4(-0.49252132, -0.39877754, -0.91366625, 0.0), vec4(0.95609266, 0.7923952, 1.640221, 0.0), vec4(0.30616966, 0.15693925, 0.8639857, 0.0), vec4(1.1825981, 0.94504964, 2.176963, 0.0))
    * buf[4]
    + mat4(vec4(0.35446745, 0.3293795, 0.59547555, 0.0), vec4(-0.58784515, -0.48177817, -1.0614829, 0.0), vec4(2.5271258, 1.9991658, 4.6846647, 0.0), vec4(0.13042648, 0.08864098, 0.30187556, 0.0))
    * buf[5]
    + mat4(vec4(-1.7718065, -1.4033192, -3.3355875, 0.0), vec4(3.1664357, 2.638297, 5.378702, 0.0), vec4(-3.1724713, -2.6107926, -5.549295, 0.0), vec4(-2.851368, -2.249092, -5.3013067, 0.0))
    * buf[6]
    + mat4(vec4(1.5203838, 1.2212278, 2.8404984, 0.0), vec4(1.5210563, 1.2651345, 2.683903, 0.0), vec4(2.9789467, 2.4364579, 5.2347264, 0.0), vec4(2.2270417, 1.8825914, 3.8028636, 0.0))
    * buf[7]
    + vec4(-1.5468478, -3.6171484, 0.24762098, 0.0);

    buf[0] = sigmoid(buf[0]);
    return vec4(buf[0].x , buf[0].y , buf[0].z, 1.0);
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0; uv.y *= -1.0;
    vec4 pattern = cppn_fn(uv, 0.1 * sin(0.3 * iTime), 0.1 * sin(0.69 * iTime), 0.1 * sin(0.44 * iTime));

    vec3 color1 = mix(uBackgroundColor, uPrimaryCta, pattern.x);
    vec3 color2 = mix(uBackgroundColor, uAccent, pattern.y);
    vec3 color3 = mix(uBackgroundColor, uSecondaryCta, pattern.z);

    vec3 finalColor = (color1 + color2 + color3) / 3.0;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;
        const CPPNShaderMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderMaterial"])({
            iTime: 0,
            iResolution: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 1),
            uBackgroundColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000),
            uPrimaryCta: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff0000),
            uAccent: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x00ff00),
            uSecondaryCta: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x0000ff)
        }, vertexShader, fragmentShader);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
            CPPNShaderMaterial
        });
        const ShaderPlane = ({
            backgroundColor,
            primaryCta,
            accent,
            secondaryCta
        }) => {
            _s();
            const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const materialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const {
                viewport
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
                "ShaderPlane.useFrame": (state) => {
                    if (!materialRef.current) return;
                    materialRef.current.iTime = state.clock.elapsedTime;
                    const {
                        width,
                        height
                    } = state.size;
                    materialRef.current.iResolution.set(width, height);
                }
            }["ShaderPlane.useFrame"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "ShaderPlane.useEffect": () => {
                    if (!materialRef.current) return;
                    materialRef.current.uBackgroundColor = backgroundColor;
                    materialRef.current.uPrimaryCta = primaryCta;
                    materialRef.current.uAccent = accent;
                    materialRef.current.uSecondaryCta = secondaryCta;
                }
            }["ShaderPlane.useEffect"], [
                backgroundColor,
                primaryCta,
                accent,
                secondaryCta
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: meshRef,
                position: [
                    0,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            viewport.width,
                            viewport.height
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/FluidBackground.tsx",
                        lineNumber: 215,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cPPNShaderMaterial", {
                        ref: materialRef,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/FluidBackground.tsx",
                        lineNumber: 216,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/background/FluidBackground.tsx",
                lineNumber: 214,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ShaderPlane, "3HdMSfQ3HATZmvxjjWiYLmUc5Uk=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
            ];
        });
        _c = ShaderPlane;
        const FluidBackground = ({
            className = ""
        }) => {
            _s1();
            const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "FluidBackground.useMemo[camera]": () => ({
                    position: [
                        0,
                        0,
                        5
                    ],
                    fov: 75,
                    near: 0.1,
                    far: 1000
                })
            }["FluidBackground.useMemo[camera]"], []);
            const [colors, setColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
                background: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000),
                primaryCta: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff0000),
                accent: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x00ff00),
                secondaryCta: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x0000ff)
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "FluidBackground.useEffect": () => {
                    const updateColors = {
                        "FluidBackground.useEffect.updateColors": () => {
                            setColors({
                                background: getComputedColor('--background'),
                                primaryCta: getComputedColor('--color-background-accent'),
                                accent: getComputedColor('--color-background-accent'),
                                secondaryCta: getComputedColor('--color-background-accent')
                            });
                        }
                    }["FluidBackground.useEffect.updateColors"];
                    updateColors();
                }
            }["FluidBackground.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("bg-background fixed inset-0 -z-10 w-full h-full", className),
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    camera: camera,
                    gl: {
                        antialias: true,
                        alpha: false
                    },
                    dpr: [
                        1,
                        2
                    ],
                    style: {
                        width: '100%',
                        height: '100%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShaderPlane, {
                        backgroundColor: colors.background,
                        primaryCta: colors.primaryCta,
                        accent: colors.accent,
                        secondaryCta: colors.secondaryCta
                    }, void 0, false, {
                        fileName: "[project]/src/components/background/FluidBackground.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/background/FluidBackground.tsx",
                    lineNumber: 251,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/background/FluidBackground.tsx",
                lineNumber: 250,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s1(FluidBackground, "9QimVw9d4fMoryc5zVfVWPbX1fA=");
        _c1 = FluidBackground;
        const __TURBOPACK__default__export__ = FluidBackground;
        var _c, _c1;
        __turbopack_context__.k.register(_c, "ShaderPlane");
        __turbopack_context__.k.register(_c1, "FluidBackground");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/BlurBottomBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;
        const MASK_GRADIENT = "linear-gradient(to bottom, transparent, black 60%)";
        const BOTTOM_THRESHOLD = 50;
        const TOP_THRESHOLD = 50;
        const BlurBottomBackground = ({
            className = ""
        }) => {
            _s();
            const [isAtBottom, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            const [isAtTop, setIsAtTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
            const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "BlurBottomBackground.useCallback[handleScroll]": () => {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const windowHeight = window.innerHeight;
                    const documentHeight = document.documentElement.scrollHeight;
                    const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
                    setIsAtTop(scrollTop <= TOP_THRESHOLD);
                    setIsAtBottom(distanceFromBottom <= BOTTOM_THRESHOLD);
                }
            }["BlurBottomBackground.useCallback[handleScroll]"], []);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "BlurBottomBackground.useEffect": () => {
                    handleScroll();
                    window.addEventListener("scroll", handleScroll, {
                        passive: true
                    });
                    window.addEventListener("resize", handleScroll, {
                        passive: true
                    });
                    return ({
                        "BlurBottomBackground.useEffect": () => {
                            window.removeEventListener("scroll", handleScroll);
                            window.removeEventListener("resize", handleScroll);
                        }
                    })["BlurBottomBackground.useEffect"];
                }
            }["BlurBottomBackground.useEffect"], [
                handleScroll
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("fixed pointer-events-none backdrop-blur-xl w-full h-30 left-0 bottom-0 z-[500] transition-opacity duration-500 ease-out", isAtTop || isAtBottom ? "opacity-0" : "opacity-100", className),
                style: {
                    maskImage: MASK_GRADIENT
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/background/BlurBottomBackground.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(BlurBottomBackground, "z52wfag0WM8H+fyJQgIkL8HcGSU=");
        _c = BlurBottomBackground;
        const __TURBOPACK__default__export__ = BlurBottomBackground;
        var _c;
        __turbopack_context__.k.register(_c, "BlurBottomBackground");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/GridBackround.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;
        const GRID_SIZES = {
            small: "6.25vw 6.25vw",
            medium: "10vw 10vw",
            large: "20vw 20vw"
        };
        const GridBackround = ({
            size = "medium",
            className = "",
            perspectiveThreeD = false
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("fixed inset-0 -z-10 bg-background [mask-image:radial-gradient(circle_at_center,white_0%,transparent_90%)]", perspectiveThreeD && "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12", className),
                style: {
                    backgroundImage: "linear-gradient(to right, color-mix(in srgb, var(--background-accent) 10%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--background-accent) 10%, transparent) 1px, transparent 1px)",
                    backgroundSize: GRID_SIZES[size],
                    backgroundRepeat: "repeat"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/background/GridBackround.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = GridBackround;
        const __TURBOPACK__default__export__ = GridBackround;
        var _c;
        __turbopack_context__.k.register(_c, "GridBackround");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/providers/themeProvider/config/background.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "backgroundComponents",
            () => backgroundComponents
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$CircleGradientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/CircleGradientBackground.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$AuroraBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/AuroraBackground.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$floatingGradientBackground$2f$FloatingGradientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/floatingGradientBackground/FloatingGradientBackground.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$NoiseBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/NoiseBackground.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$NoiseDiagonalGradientBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/NoiseDiagonalGradientBackground.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$FluidBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/FluidBackground.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$BlurBottomBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/BlurBottomBackground.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$GridBackround$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/GridBackround.tsx [app-client] (ecmascript)");;;;;;;;;
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
            () => headingFontWeightMap
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$config$2f$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/config/shared.ts [app-client] (ecmascript)");;;;;;;
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/providers/themeProvider/styles/cardStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "cardStyleMap",
            () => cardStyleMap,
            "getGradientBorderedPseudo",
            () => getGradientBorderedPseudo
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
        const getGradientBorderedPseudo = (cardStyle) => {
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
            () => getInsetGlowPseudo,
            "primaryButtonStyleMap",
            () => primaryButtonStyleMap
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
        const getInsetGlowPseudo = (style) => {
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
            () => secondaryButtonStyleMap
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
            () => ThemeProvider,
            "useTheme",
            () => useTheme
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$styles$2f$secondaryButtonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/styles/secondaryButtonStyles.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature(),
            _s1 = __turbopack_context__.k.signature();
        "use client";;;;;;
        const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
        const useTheme = () => {
            _s();
            const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
            if (!context) {
                throw new Error("useTheme must be used within a ThemeProvider. Wrap your sections in <ThemeProvider> at the app/page level.");
            }
            return context;
        };
        _s(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
        const ThemeProvider = ({
            children,
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
        }) => {
            _s1();
            const themeConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "ThemeProvider.useMemo[themeConfig]": () => ({
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
                "ThemeProvider.useMemo[styleString]": () => {
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
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
    "[project]/src/components/text/TextAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]);;
        const ANIMATION_CONFIG = {
            trigger: {
                stagger: 0.0075,
                useDuration: false,
                duration: 0.6
            },
            "words-trigger": {
                stagger: 0.03,
                useDuration: false,
                duration: 0.6
            }
        };
        const ANIMATION_TYPES = {
            "entrance-slide": {
                classPrefix: "slide",
                fromVars: {
                    opacity: 0,
                    yPercent: 50
                },
                toVars: {
                    opacity: 1,
                    yPercent: 0,
                    ease: "power1"
                }
            },
            "reveal-blur": {
                classPrefix: "blur",
                fromVars: {
                    autoAlpha: 0,
                    filter: "blur(10px)"
                },
                toVars: {
                    autoAlpha: 1,
                    filter: "blur(0px)",
                    ease: "power1.inOut"
                }
            },
            "background-highlight": {
                classPrefix: "highlight",
                fromVars: {
                    opacity: 0.25
                },
                toVars: {
                    opacity: 1,
                    ease: "power2.inOut"
                }
            }
        };
        const TextAnimation = ({
            type = "entrance-slide",
            text,
            children,
            className = "",
            duration = 1,
            stagger,
            start = "top 80%",
            end = "top 20%",
            variant = "trigger",
            ariaLabel,
            as = "div",
            gradientColors
        }) => {
            _s();
            const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const splitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "TextAnimation.useEffect": () => {
                    if (!textRef.current) return;
                    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                        "TextAnimation.useEffect.ctx": () => {
                            const isWords = variant === "words-trigger";
                            const animConfig = ANIMATION_TYPES[type];
                            const classPrefix = animConfig.classPrefix;
                            splitRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](textRef.current, {
                                type: isWords ? "lines,words" : "lines,words,chars",
                                linesClass: `${classPrefix}-line`,
                                wordsClass: `${classPrefix}-word`,
                                charsClass: isWords ? undefined : `${classPrefix}-char`
                            });
                            const lines = splitRef.current.lines;
                            if (type === "entrance-slide") {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(lines, {
                                    overflow: "hidden",
                                    display: as === "span" ? "inline" : undefined
                                });
                            } else if (as === "span") {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(lines, {
                                    display: "inline"
                                });
                            }
                            const words = splitRef.current.words;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(words, {
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            });
                            const animateTarget = isWords ? splitRef.current.words : splitRef.current.chars;
                            const config = ANIMATION_CONFIG[variant];
                            const animationDuration = config.useDuration ? duration : config.duration;
                            const animationStagger = stagger ? ? config.stagger;
                            if (gradientColors) {
                                animateTarget.forEach({
                                    "TextAnimation.useEffect.ctx": (element) => {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(element, {
                                            backgroundImage: `linear-gradient(180deg, ${gradientColors.from} 0%, ${gradientColors.to} 100%)`,
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            display: "inline-block"
                                        });
                                    }
                                }["TextAnimation.useEffect.ctx"]);
                            }
                            const scrollTriggerConfig = {
                                trigger: textRef.current,
                                start: start,
                                end: end,
                                markers: false,
                                toggleActions: "play none none none"
                            };
                            if (type === "reveal-blur") {
                                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                                    scrollTrigger: scrollTriggerConfig
                                });
                                const parentElement = textRef.current;
                                const splitInstance = splitRef.current;
                                tl.fromTo(animateTarget, animConfig.fromVars, {
                                    ...animConfig.toVars,
                                    duration: animationDuration,
                                    stagger: animationStagger,
                                    force3D: true,
                                    onStart: {
                                        "TextAnimation.useEffect.ctx": function() {
                                            if (this._targets && this._targets.length > 0) {
                                                this._targets.forEach({
                                                    "TextAnimation.useEffect.ctx": (target) => {
                                                        target.style.willChange = "filter, opacity, transform";
                                                    }
                                                }["TextAnimation.useEffect.ctx"]);
                                            }
                                        }
                                    }["TextAnimation.useEffect.ctx"],
                                    onComplete: {
                                        "TextAnimation.useEffect.ctx": function() {
                                            if (this._targets && this._targets.length > 0) {
                                                this._targets.forEach({
                                                    "TextAnimation.useEffect.ctx": (target) => {
                                                        target.style.willChange = "auto";
                                                    }
                                                }["TextAnimation.useEffect.ctx"]);
                                            }
                                            if (parentElement && splitInstance) {
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(parentElement, {
                                                    opacity: 1,
                                                    visibility: 'visible',
                                                    filter: 'blur(0px)',
                                                    transform: 'none'
                                                });
                                                splitInstance.revert();
                                                splitRef.current = null;
                                            }
                                        }
                                    }["TextAnimation.useEffect.ctx"]
                                });
                                scrollTriggerRef.current = tl.scrollTrigger;
                            } else {
                                const parentElement = textRef.current;
                                const splitInstance = splitRef.current;
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(animateTarget, animConfig.fromVars, {
                                    ...animConfig.toVars,
                                    duration: animationDuration,
                                    stagger: animationStagger,
                                    force3D: true,
                                    scrollTrigger: scrollTriggerConfig,
                                    onComplete: {
                                        "TextAnimation.useEffect.ctx": () => {
                                            if (parentElement && splitInstance) {
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(parentElement, {
                                                    opacity: 1,
                                                    transform: 'none'
                                                });
                                                splitInstance.revert();
                                                splitRef.current = null;
                                            }
                                        }
                                    }["TextAnimation.useEffect.ctx"]
                                });
                            }
                        }
                    }["TextAnimation.useEffect.ctx"], textRef);
                    const currentTextRef = textRef.current;
                    return ({
                        "TextAnimation.useEffect": () => {
                            if (type === "reveal-blur" && scrollTriggerRef.current && scrollTriggerRef.current.trigger === currentTextRef) {
                                scrollTriggerRef.current.kill();
                            }
                            ctx.revert();
                            if (splitRef.current) {
                                splitRef.current.revert();
                            }
                        }
                    })["TextAnimation.useEffect"];
                }
            }["TextAnimation.useEffect"], [
                text,
                type,
                duration,
                stagger,
                start,
                end,
                variant,
                as,
                gradientColors
            ]);
            const animConfig = ANIMATION_TYPES[type];
            const Component = as;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
                // @ts-expect-error - Dynamic component type requires flexible ref
                ref: textRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(`${animConfig.classPrefix}-text`, className),
                style: {
                    fontKerning: 'none',
                    textRendering: 'optimizeSpeed'
                },
                "aria-label": ariaLabel || text || undefined,
                children: children || text ? .replace(/-/g, '\u2011')
            }, void 0, false, {
                fileName: "[project]/src/components/text/TextAnimation.tsx",
                lineNumber: 267,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(TextAnimation, "Y+9t0824i4I5KoMZA96QYPx4Tmk=");
        _c = TextAnimation;
        const __TURBOPACK__default__export__ = TextAnimation;
        var _c;
        __turbopack_context__.k.register(_c, "TextAnimation");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonHoverMagnetic/useMagneticEffect.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();
        "use client";;
        const useMagneticEffect = (strengthFactor = 10) => {
            _s();
            const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useMagneticEffect.useEffect": () => {
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    __turbopack_context__.A("[project]/node_modules/gsap/index.js [app-client] (ecmascript, async loader)").then({
                        "useMagneticEffect.useEffect": (gsap) => {
                            const element = elementRef.current;
                            if (!element || window.innerWidth < 768) return;
                            const resetEl = {
                                "useMagneticEffect.useEffect.resetEl": (el, immediate) => {
                                    if (!el) return;
                                    gsap.default.killTweensOf(el);
                                    (immediate ? gsap.default.set : gsap.default.to)(el, {
                                        x: "0vw",
                                        y: "0vw",
                                        rotate: "0deg",
                                        clearProps: "all",
                                        ...!immediate && {
                                            ease: "elastic.out(1, 0.3)",
                                            duration: 1.6
                                        }
                                    });
                                }
                            }["useMagneticEffect.useEffect.resetEl"];
                            const resetOnEnter = {
                                "useMagneticEffect.useEffect.resetOnEnter": () => {
                                    resetEl(element, true);
                                }
                            }["useMagneticEffect.useEffect.resetOnEnter"];
                            const moveMagnet = {
                                "useMagneticEffect.useEffect.moveMagnet": (e) => {
                                    const b = element.getBoundingClientRect();
                                    const strength = strengthFactor;
                                    const offsetX = ((e.clientX - b.left) / element.offsetWidth - 0.5) * (strength / 16);
                                    const offsetY = ((e.clientY - b.top) / element.offsetHeight - 0.5) * (strength / 16);
                                    gsap.default.to(element, {
                                        x: offsetX + "vw",
                                        y: offsetY + "vw",
                                        rotate: "0.001deg",
                                        ease: "power4.out",
                                        duration: 1.6
                                    });
                                }
                            }["useMagneticEffect.useEffect.moveMagnet"];
                            const resetMagnet = {
                                "useMagneticEffect.useEffect.resetMagnet": () => {
                                    gsap.default.to(element, {
                                        x: "0vw",
                                        y: "0vw",
                                        ease: "elastic.out(1, 0.3)",
                                        duration: 1.6,
                                        clearProps: "all"
                                    });
                                }
                            }["useMagneticEffect.useEffect.resetMagnet"];
                            element.addEventListener("mouseenter", resetOnEnter);
                            element.addEventListener("mousemove", moveMagnet);
                            element.addEventListener("mouseleave", resetMagnet);
                            return ({
                                "useMagneticEffect.useEffect": () => {
                                    element.removeEventListener("mouseenter", resetOnEnter);
                                    element.removeEventListener("mousemove", moveMagnet);
                                    element.removeEventListener("mouseleave", resetMagnet);
                                }
                            })["useMagneticEffect.useEffect"];
                        }
                    }["useMagneticEffect.useEffect"]);
                }
            }["useMagneticEffect.useEffect"], [
                strengthFactor
            ]);
            return elementRef;
        };
        _s(useMagneticEffect, "CKe/C9l/PZDcdMrjDfTWxieUegY=");
        const __TURBOPACK__default__export__ = useMagneticEffect;
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "useButtonClick",
            () => useButtonClick
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const useButtonClick = (href, onClick, scrollToSection) => {
            _s();
            const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
            const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
            const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
            const scrollToElement = (sectionId, delay = 100) => {
                setTimeout(() => {
                    if (lenis) {
                        lenis.scrollTo(`#${sectionId}`, {
                            offset: 0
                        });
                    } else {
                        const element = document.getElementById(sectionId);
                        if (element) {
                            element.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }
                    }
                }, delay);
            };
            const handleClick = () => {
                if (href) {
                    const isExternalLink = /^(https?:\/\/|www\.)/.test(href);
                    if (isExternalLink) {
                        window.open(href.startsWith("www.") ? `https://${href}` : href, "_blank", "noopener,noreferrer");
                    } else if (href.startsWith("/")) {
                        const [path, hash] = href.split("#");
                        if (path !== pathname) {
                            router.push(path);
                            if (hash) {
                                setTimeout(() => {
                                    window.location.hash = hash;
                                    scrollToElement(hash, 100);
                                }, 100);
                            }
                        } else {
                            if (hash) {
                                window.location.hash = hash;
                                scrollToElement(hash, 50);
                            } else if (scrollToSection) {
                                const sectionId = path.replace(/^\//, "").replace(/\//g, "-");
                                scrollToElement(sectionId, 50);
                            }
                        }
                    } else {
                        scrollToElement(href, 50);
                    }
                }
                onClick ? .();
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useButtonClick.useEffect": () => {
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.location.hash) {
                        const hash = window.location.hash.replace("#", "");
                        scrollToElement(hash, 300);
                    }
                }
            }["useButtonClick.useEffect"], [
                pathname
            ]);
            return handleClick;
        };
        _s(useButtonClick, "QZpN5nlQfIfPw6ywZ66Mcx145V8=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
            ];
        });
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonHoverMagnetic/ButtonHoverMagnetic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonHoverMagnetic$2f$useMagneticEffect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonHoverMagnetic/useMagneticEffect.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const ButtonHoverMagnetic = ({
            text,
            onClick,
            href,
            className = "",
            textClassName = "",
            strengthFactor = 20,
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const magneticRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonHoverMagnetic$2f$useMagneticEffect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(strengthFactor);
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: magneticRef,
                "data-href": href,
                type: type,
                onClick: handleClick,
                disabled: disabled,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative cursor-pointer h-9 min-w-0 w-fit max-w-full px-6 rounded-theme", "disabled:cursor-not-allowed disabled:opacity-50", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-sm block overflow-hidden truncate whitespace-nowrap", textClassName),
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/components/button/ButtonHoverMagnetic/ButtonHoverMagnetic.tsx",
                    lineNumber: 50,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/button/ButtonHoverMagnetic/ButtonHoverMagnetic.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonHoverMagnetic, "kKWgSwBdIDJVg0VVKhLGSnfLeY4=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonHoverMagnetic$2f$useMagneticEffect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"]
            ];
        });
        _c = ButtonHoverMagnetic;
        const __TURBOPACK__default__export__ = ButtonHoverMagnetic;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonHoverMagnetic");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonIconArrow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const ButtonIconArrow = ({
            text,
            onClick,
            href,
            className = "",
            textClassName = "",
            iconClassName = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: type,
                onClick: handleClick,
                disabled: disabled,
                "data-href": href,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative group cursor-pointer h-9 min-w-0 w-fit max-w-full primary-button rounded-theme px-6 text-sm text-primary-cta-text flex items-center gap-3", "disabled:cursor-not-allowed disabled:opacity-50", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("block overflow-hidden truncate whitespace-nowrap md:transition-transform md:duration-[600ms] md:[transition-timing-function:cubic-bezier(.25,.8,.25,1)] md:group-hover:[transform:translateX(calc(var(--height-9)/4))]", textClassName),
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonIconArrow.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-5 w-[var(--height-5)] aspect-square rounded-theme flex items-center justify-center md:transition-transform md:duration-[600ms] md:[transition-timing-function:cubic-bezier(.25,.8,.25,1)] md:group-hover:scale-[0.2] md:group-hover:rotate-90", iconClassName || "secondary-button text-secondary-cta-text"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "h-1/2 w-1/2 md:transition-opacity md:duration-[600ms] md:[transition-timing-function:cubic-bezier(.25,.8,.25,1)] md:group-hover:opacity-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/button/ButtonIconArrow.tsx",
                            lineNumber: 58,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonIconArrow.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/button/ButtonIconArrow.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonIconArrow, "k/n1+2dO93KQ2ssXjfb0Czox+/k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"]
            ];
        });
        _c = ButtonIconArrow;
        const __TURBOPACK__default__export__ = ButtonIconArrow;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonIconArrow");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/useCharAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "useCharAnimation",
            () => useCharAnimation
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();;
        const useCharAnimation = (buttonRef, text, selector = "[data-button-animate-chars]", staggerDelay = 0) => {
            _s();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useCharAnimation.useEffect": () => {
                    const buttonElement = buttonRef.current ? .querySelector(selector);
                    if (!buttonElement) return;
                    const textContent = text || buttonElement.textContent || "";
                    buttonElement.innerHTML = "";
                    [
                        ...textContent
                    ].forEach({
                        "useCharAnimation.useEffect": (char, index) => {
                            const span = document.createElement("span");
                            span.textContent = char;
                            if (staggerDelay > 0) {
                                span.style.transitionDelay = `${index * staggerDelay}s`;
                            }
                            if (char === " ") {
                                span.style.whiteSpace = "pre";
                            }
                            buttonElement.appendChild(span);
                        }
                    }["useCharAnimation.useEffect"]);
                }
            }["useCharAnimation.useEffect"], [
                buttonRef,
                text,
                selector,
                staggerDelay
            ]);
        };
        _s(useCharAnimation, "OD7bBpZva5O2jO+Puf00hKivP7c=");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonShiftHover/ButtonShiftHover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useCharAnimation.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const ButtonShiftHover = ({
            text,
            onClick,
            href,
            className = "",
            bgClassName = "",
            textClassName = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCharAnimation"])(buttonRef, text);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                type: type,
                onClick: handleClick,
                disabled: disabled,
                "data-href": href,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("shift-button group relative cursor-pointer flex gap-2 items-center justify-center bg-transparent border-none leading-none no-underline h-9 px-5 pr-4 min-w-0 w-fit max-w-full rounded-theme text-primary-cta-text text-sm", "disabled:cursor-not-allowed disabled:opacity-50", textClassName, className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("shift-button-bg absolute! inset-0 rounded-theme transition-transform duration-[600ms] primary-button", bgClassName)
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonShiftHover/ButtonShiftHover.tsx",
                        lineNumber: 54,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-button-animate-chars": "",
                        className: "shift-button-text relative inline-block overflow-hidden truncate whitespace-nowrap",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonShiftHover/ButtonShiftHover.tsx",
                        lineNumber: 60,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[1em] w-auto aspect-square rounded-theme border border-current scale-65 transition-all duration-300 md:group-hover:bg-current md:group-hover:scale-40"
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonShiftHover/ButtonShiftHover.tsx",
                        lineNumber: 66,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/button/ButtonShiftHover/ButtonShiftHover.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonShiftHover, "j9rlP3WJaJwNi2y/bSZgMQw/yME=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCharAnimation"]
            ];
        });
        _c = ButtonShiftHover;
        const __TURBOPACK__default__export__ = ButtonShiftHover;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonShiftHover");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonTextStagger/ButtonTextStagger.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useCharAnimation.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const ButtonTextStagger = ({
            text,
            onClick,
            href,
            className = "",
            bgClassName = "",
            textClassName = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCharAnimation"])(buttonRef, text, "[data-button-animate-chars]", 0.01);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                type: type,
                onClick: handleClick,
                "data-href": href,
                disabled: disabled,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("stagger-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-9 px-6 min-w-0 w-fit max-w-full rounded-theme text-primary-cta-text", "disabled:cursor-not-allowed disabled:opacity-50", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("stagger-button-bg absolute! inset-0 rounded-theme transition-transform duration-[600ms] primary-button", bgClassName)
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonTextStagger/ButtonTextStagger.tsx",
                        lineNumber: 53,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-button-animate-chars": "",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("stagger-button-text relative text-sm inline-block overflow-hidden truncate whitespace-nowrap", textClassName),
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonTextStagger/ButtonTextStagger.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/button/ButtonTextStagger/ButtonTextStagger.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonTextStagger, "j9rlP3WJaJwNi2y/bSZgMQw/yME=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCharAnimation"]
            ];
        });
        _c = ButtonTextStagger;
        const __TURBOPACK__default__export__ = ButtonTextStagger;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonTextStagger");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonTextUnderline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;
        const ButtonTextUnderline = ({
            text,
            onClick,
            href,
            className = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: type,
                onClick: handleClick,
                disabled: disabled,
                "data-href": href,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative text-sm inline-block bg-transparent border-none p-0 cursor-pointer", "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]", "after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-300", "hover:after:scale-x-100 hover:after:origin-left", "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:after:scale-x-0", className),
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/button/ButtonTextUnderline.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonTextUnderline, "k/n1+2dO93KQ2ssXjfb0Czox+/k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"]
            ];
        });
        _c = ButtonTextUnderline;
        const __TURBOPACK__default__export__ = ButtonTextUnderline;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonTextUnderline");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonHoverBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-client] (ecmascript) <export default as ArrowDownRight>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const ButtonHoverBubble = ({
            text,
            onClick,
            href,
            className = "",
            bgClassName = "",
            textClassName = "",
            iconClassName = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: type,
                onClick: handleClick,
                disabled: disabled,
                "aria-label": ariaLabel || text,
                "data-href": href,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative group flex justify-center items-center min-w-0 w-fit max-w-full rounded-theme cursor-pointer pointer-events-auto outline-none", "disabled:cursor-not-allowed disabled:opacity-50", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex justify-center items-center h-9 aspect-square rounded-theme relative", "scale-0 md:transition-transform md:duration-700 md:ease-[cubic-bezier(0.625,0.05,0,1)] md:origin-left md:group-hover:scale-100", iconClassName),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                            strokeWidth: 1.5,
                            className: "h-[35%] w-auto aspect-square object-contain md:transition-transform md:duration-700 md:group-hover:rotate-[-45deg]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/button/ButtonHoverBubble.tsx",
                            lineNumber: 57,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonHoverBubble.tsx",
                        lineNumber: 50,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex justify-center items-center h-9 px-4 min-w-0 w-fit max-w-full rounded-theme relative", "-translate-x-[var(--height-9)] md:transition-transform md:duration-700 md:ease-[cubic-bezier(0.625,0.05,0,1)] md:group-hover:translate-x-0", bgClassName),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-sm block overflow-hidden truncate whitespace-nowrap", textClassName),
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/src/components/button/ButtonHoverBubble.tsx",
                            lineNumber: 66,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonHoverBubble.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex justify-center items-center h-9 aspect-square rounded-theme absolute right-0 z-20", "scale-100 md:transition-transform md:duration-700 md:ease-[cubic-bezier(0.625,0.05,0,1)] md:origin-right md:group-hover:scale-0", iconClassName),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                            strokeWidth: 1.5,
                            className: "h-[35%] w-auto aspect-square object-contain md:transition-transform md:duration-700 md:group-hover:rotate-[-45deg]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/button/ButtonHoverBubble.tsx",
                            lineNumber: 75,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonHoverBubble.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/button/ButtonHoverBubble.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonHoverBubble, "k/n1+2dO93KQ2ssXjfb0Czox+/k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"]
            ];
        });
        _c = ButtonHoverBubble;
        const __TURBOPACK__default__export__ = ButtonHoverBubble;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonHoverBubble");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonExpandHover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const ButtonExpandHover = ({
            text,
            onClick,
            href,
            icon: Icon,
            className = "",
            textClassName = "",
            iconClassName = "",
            iconBgClassName = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: type,
                onClick: handleClick,
                disabled: disabled,
                "data-href": href,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("group relative cursor-pointer h-fit min-w-0 w-fit max-w-full rounded-theme text-sm text-background pointer-events-auto outline-none", "disabled:cursor-not-allowed disabled:opacity-50", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-9 w-full px-5",
                    style: {
                        paddingRight: "calc(2.25rem + 0.75rem)"
                    },
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-9 flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-10 block overflow-hidden truncate whitespace-nowrap md:transition-colors md:duration-[900ms] md:[transition-timing-function:cubic-bezier(.77,0,.18,1)]", textClassName),
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/src/components/button/ButtonExpandHover.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/button/ButtonExpandHover.tsx",
                            lineNumber: 57,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute overflow-hidden top-[2px] bottom-[2px] left-[2px] right-[2px] rounded-theme flex justify-end",
                            children: [
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-10 h-full w-auto aspect-square flex items-center justify-center", iconClassName),
                                    children: Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-1/2 w-auto aspect-square",
                                        strokeWidth: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/button/ButtonExpandHover.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "h-1/2 w-auto aspect-square",
                                        strokeWidth: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/button/ButtonExpandHover.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/button/ButtonExpandHover.tsx",
                                    lineNumber: 68,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute z-0 h-full w-full rounded-theme", "md:transition-transform md:duration-[900ms] md:[transition-timing-function:cubic-bezier(.77,0,.18,1)]", "-translate-x-[calc(-100%+2.25rem-4px)] md:group-hover:translate-x-0", iconBgClassName)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/button/ButtonExpandHover.tsx",
                                    lineNumber: 80,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/button/ButtonExpandHover.tsx",
                            lineNumber: 67,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/button/ButtonExpandHover.tsx",
                    lineNumber: 53,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/button/ButtonExpandHover.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonExpandHover, "k/n1+2dO93KQ2ssXjfb0Czox+/k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"]
            ];
        });
        _c = ButtonExpandHover;
        const __TURBOPACK__default__export__ = ButtonExpandHover;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonExpandHover");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonElasticEffect/useElasticEffect.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
        var _s = __turbopack_context__.k.signature();
        "use client";;;
        const useElasticEffect = () => {
            _s();
            const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const hoverLockedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
            const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "useElasticEffect.useCallback[handleMouseEnter]": () => {
                    const el = elementRef.current;
                    if (!el || hoverLockedRef.current) return;
                    hoverLockedRef.current = true;
                    setTimeout({
                        "useElasticEffect.useCallback[handleMouseEnter]": () => {
                            hoverLockedRef.current = false;
                        }
                    }["useElasticEffect.useCallback[handleMouseEnter]"], 500);
                    const w = el.offsetWidth;
                    const h = el.offsetHeight;
                    const fs = parseFloat(getComputedStyle(el).fontSize);
                    const stretch = 0.75 * fs;
                    const sx = (w + stretch) / w;
                    const sy = (h - stretch * 0.33) / h;
                    if (timelineRef.current) {
                        timelineRef.current.kill();
                    }
                    timelineRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline().to(el, {
                        scaleX: sx,
                        scaleY: sy,
                        duration: 0.1,
                        ease: "power1.out"
                    }).to(el, {
                        scaleX: 1,
                        scaleY: 1,
                        duration: 1,
                        ease: "elastic.out(1, 0.3)"
                    });
                }
            }["useElasticEffect.useCallback[handleMouseEnter]"], []);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useElasticEffect.useEffect": () => {
                    // Skip on touch devices
                    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
                        return;
                    }
                    const el = elementRef.current;
                    if (!el) return;
                    el.addEventListener("mouseenter", handleMouseEnter);
                    return ({
                        "useElasticEffect.useEffect": () => {
                            el.removeEventListener("mouseenter", handleMouseEnter);
                            if (timelineRef.current) {
                                timelineRef.current.kill();
                            }
                        }
                    })["useElasticEffect.useEffect"];
                }
            }["useElasticEffect.useEffect"], [
                handleMouseEnter
            ]);
            return elementRef;
        };
        _s(useElasticEffect, "EuTDbcBK4KBuzrEVALRfz+nNUqc=");
        const __TURBOPACK__default__export__ = useElasticEffect;
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonElasticEffect/ButtonElasticEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonElasticEffect$2f$useElasticEffect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonElasticEffect/useElasticEffect.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const ButtonElasticEffect = ({
            text,
            onClick,
            href,
            className = "",
            textClassName = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const elasticRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonElasticEffect$2f$useElasticEffect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: elasticRef,
                type: type,
                onClick: handleClick,
                disabled: disabled,
                "data-href": href,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative cursor-pointer h-9 min-w-0 w-fit max-w-full px-6 primary-button rounded-theme text-primary-cta-text", "disabled:cursor-not-allowed disabled:opacity-50", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-sm block overflow-hidden truncate whitespace-nowrap", textClassName),
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/components/button/ButtonElasticEffect/ButtonElasticEffect.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/button/ButtonElasticEffect/ButtonElasticEffect.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonElasticEffect, "q5+7fSjOk+1tZoxFWR1QLcVqIvg=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonElasticEffect$2f$useElasticEffect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"]
            ];
        });
        _c = ButtonElasticEffect;
        const __TURBOPACK__default__export__ = ButtonElasticEffect;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonElasticEffect");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonBounceEffect/ButtonBounceEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useCharAnimation.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const ButtonBounceEffect = ({
            text,
            onClick,
            href,
            className = "",
            bgClassName = "",
            textClassName = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCharAnimation"])(buttonRef, text);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                type: type,
                onClick: handleClick,
                "data-href": href,
                disabled: disabled,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("bounce-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-9 px-6 min-w-0 w-fit max-w-full rounded-theme text-primary-cta-text", "disabled:cursor-not-allowed disabled:opacity-50", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("bounce-button-bg absolute! inset-0 rounded-theme primary-button", bgClassName)
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonBounceEffect/ButtonBounceEffect.tsx",
                        lineNumber: 53,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-button-animate-chars": "",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("bounce-button-text relative text-sm inline-block overflow-hidden truncate whitespace-nowrap", textClassName),
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonBounceEffect/ButtonBounceEffect.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/button/ButtonBounceEffect/ButtonBounceEffect.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonBounceEffect, "j9rlP3WJaJwNi2y/bSZgMQw/yME=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCharAnimation"]
            ];
        });
        _c = ButtonBounceEffect;
        const __TURBOPACK__default__export__ = ButtonBounceEffect;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonBounceEffect");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonDirectionalHover/useDirectionalHover.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "useDirectionalHover",
            () => useDirectionalHover
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();;
        const useDirectionalHover = (buttonRef, circleSelector = ".directional-button-circle") => {
            _s();
            const handleHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "useDirectionalHover.useCallback[handleHover]": (event) => {
                    const button = buttonRef.current;
                    if (!button) return;
                    const buttonRect = button.getBoundingClientRect();
                    const buttonWidth = buttonRect.width;
                    const buttonHeight = buttonRect.height;
                    const buttonCenterX = buttonRect.left + buttonWidth / 2;
                    const mouseX = event.clientX;
                    const mouseY = event.clientY;
                    const offsetXFromLeft = (mouseX - buttonRect.left) / buttonWidth * 100;
                    const offsetYFromTop = (mouseY - buttonRect.top) / buttonHeight * 100;
                    let offsetXFromCenter = (mouseX - buttonCenterX) / (buttonWidth / 2) * 50;
                    offsetXFromCenter = Math.abs(offsetXFromCenter);
                    const circle = button.querySelector(circleSelector);
                    if (circle) {
                        circle.style.left = `${offsetXFromLeft.toFixed(1)}%`;
                        circle.style.top = `${offsetYFromTop.toFixed(1)}%`;
                        circle.style.width = `${115 + offsetXFromCenter * 2}%`;
                    }
                }
            }["useDirectionalHover.useCallback[handleHover]"], [
                buttonRef,
                circleSelector
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useDirectionalHover.useEffect": () => {
                    const button = buttonRef.current;
                    if (!button) return;
                    button.addEventListener("mouseenter", handleHover);
                    button.addEventListener("mouseleave", handleHover);
                    return ({
                        "useDirectionalHover.useEffect": () => {
                            button.removeEventListener("mouseenter", handleHover);
                            button.removeEventListener("mouseleave", handleHover);
                        }
                    })["useDirectionalHover.useEffect"];
                }
            }["useDirectionalHover.useEffect"], [
                buttonRef,
                handleHover
            ]);
        };
        _s(useDirectionalHover, "klM5dqx6Qws2cU6TFf8XrIekjos=");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonDirectionalHover/ButtonDirectionalHover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonDirectionalHover$2f$useDirectionalHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonDirectionalHover/useDirectionalHover.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const ButtonDirectionalHover = ({
            text,
            onClick,
            href,
            className = "",
            bgClassName = "",
            textClassName = "",
            circleClassName = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonDirectionalHover$2f$useDirectionalHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirectionalHover"])(buttonRef);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                type: type,
                "data-href": href,
                onClick: handleClick,
                disabled: disabled,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("directional-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-9 px-6 min-w-0 w-fit max-w-full rounded-theme text-primary-cta-text", "disabled:cursor-not-allowed disabled:opacity-50", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("directional-button-bg absolute! inset-0 rounded-theme primary-button", bgClassName)
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonDirectionalHover/ButtonDirectionalHover.tsx",
                        lineNumber: 55,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "directional-button-circle-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("directional-button-circle bg-accent", circleClassName)
                        }, void 0, false, {
                            fileName: "[project]/src/components/button/ButtonDirectionalHover/ButtonDirectionalHover.tsx",
                            lineNumber: 62,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonDirectionalHover/ButtonDirectionalHover.tsx",
                        lineNumber: 61,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("directional-button-text relative text-sm inline-block overflow-hidden truncate whitespace-nowrap", textClassName),
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonDirectionalHover/ButtonDirectionalHover.tsx",
                        lineNumber: 69,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/button/ButtonDirectionalHover/ButtonDirectionalHover.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonDirectionalHover, "I0kAxtJkvkEtk3MFKLCrKNsJzlQ=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonDirectionalHover$2f$useDirectionalHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirectionalHover"]
            ];
        });
        _c = ButtonDirectionalHover;
        const __TURBOPACK__default__export__ = ButtonDirectionalHover;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonDirectionalHover");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/ButtonTextShift/ButtonTextShift.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useCharAnimation.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const ButtonTextShift = ({
            text,
            onClick,
            href,
            className = "",
            bgClassName = "",
            textClassName = "",
            disabled = false,
            ariaLabel,
            type = "button",
            scrollToSection
        }) => {
            _s();
            const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick, scrollToSection);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCharAnimation"])(buttonRef, text, "[data-button-animate-chars]", 0.0);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                type: type,
                "data-href": href,
                onClick: handleClick,
                disabled: disabled,
                "aria-label": ariaLabel || text,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("stagger-button relative cursor-pointer flex items-center justify-center bg-transparent border-none leading-none no-underline h-9 px-6 min-w-0 w-fit max-w-full rounded-theme text-primary-cta-text", "disabled:cursor-not-allowed disabled:opacity-50", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("stagger-button-bg absolute! inset-0 rounded-theme primary-button", bgClassName)
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonTextShift/ButtonTextShift.tsx",
                        lineNumber: 53,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-button-animate-chars": "",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("stagger-button-text relative text-sm inline-block overflow-hidden truncate whitespace-nowrap", textClassName),
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/button/ButtonTextShift/ButtonTextShift.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/button/ButtonTextShift/ButtonTextShift.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonTextShift, "j9rlP3WJaJwNi2y/bSZgMQw/yME=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useCharAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCharAnimation"]
            ];
        });
        _c = ButtonTextShift;
        const __TURBOPACK__default__export__ = ButtonTextShift;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonTextShift");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonHoverMagnetic$2f$ButtonHoverMagnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonHoverMagnetic/ButtonHoverMagnetic.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonIconArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonIconArrow.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonShiftHover$2f$ButtonShiftHover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonShiftHover/ButtonShiftHover.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextStagger$2f$ButtonTextStagger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonTextStagger/ButtonTextStagger.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextUnderline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonTextUnderline.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonHoverBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonHoverBubble.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonExpandHover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonExpandHover.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonElasticEffect$2f$ButtonElasticEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonElasticEffect/ButtonElasticEffect.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonBounceEffect$2f$ButtonBounceEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonBounceEffect/ButtonBounceEffect.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonDirectionalHover$2f$ButtonDirectionalHover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonDirectionalHover/ButtonDirectionalHover.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextShift$2f$ButtonTextShift$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonTextShift/ButtonTextShift.tsx [app-client] (ecmascript)");
        "use client";;;;;;;;;;;;;
        const buttonComponents = {
            "hover-magnetic": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonHoverMagnetic$2f$ButtonHoverMagnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "hover-bubble": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonHoverBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "expand-hover": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonExpandHover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "elastic-effect": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonElasticEffect$2f$ButtonElasticEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "bounce-effect": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonBounceEffect$2f$ButtonBounceEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "icon-arrow": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonIconArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "shift-hover": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonShiftHover$2f$ButtonShiftHover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "text-stagger": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextStagger$2f$ButtonTextStagger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "text-shift": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextShift$2f$ButtonTextShift$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "text-underline": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextUnderline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            "directional-hover": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonDirectionalHover$2f$ButtonDirectionalHover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        };
        const Button = (props) => {
            const {
                variant = "hover-magnetic", ...restProps
            } = props;
            const ButtonComponent = buttonComponents[variant];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonComponent, {
                ...restProps
            }, void 0, false, {
                fileName: "[project]/src/components/button/Button.tsx",
                lineNumber: 36,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = Button;
        const __TURBOPACK__default__export__ = Button;
        var _c;
        __turbopack_context__.k.register(_c, "Button");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/shared/Tag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;
        const Tag = ({
            text,
            icon: Icon,
            useInvertedBackground,
            className = "",
            textClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const shouldUseLightText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseInvertedText"])(useInvertedBackground, theme.cardStyle);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 px-3 py-1 text-sm rounded-theme card inline-flex items-center gap-2 w-fit", className),
                children: [
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 h-[1em] w-auto", shouldUseLightText ? "text-background" : "text-foreground")
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/Tag.tsx",
                        lineNumber: 30,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(shouldUseLightText ? "text-background" : "text-foreground", textClassName),
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/Tag.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/Tag.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(Tag, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
            ];
        });
        _c = Tag;
        const __TURBOPACK__default__export__ = Tag;
        var _c;
        __turbopack_context__.k.register(_c, "Tag");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/hooks/useButtonAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "useButtonAnimation",
            () => useButtonAnimation
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();;;;;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
        const useButtonAnimation = ({
            animationType
        }) => {
            _s();
            const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
                "useButtonAnimation.useGSAP": () => {
                    if (animationType === "none" || !containerRef.current) return;
                    // First try to find buttons/links, otherwise animate direct children
                    let elements = containerRef.current.querySelectorAll("button, a");
                    if (elements.length === 0) {
                        // For non-button elements (like Tag), animate the direct children
                        elements = containerRef.current.children;
                    }
                    if (elements.length === 0) return;
                    if (animationType === "opacity") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(elements, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 1.25,
                            stagger: 0.15,
                            ease: "sine",
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        });
                    } else if (animationType === "slide-up") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(elements, {
                            opacity: 0,
                            yPercent: 30
                        }, {
                            opacity: 1,
                            yPercent: 0,
                            duration: 1,
                            stagger: 0.15,
                            ease: "sine",
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        });
                    } else if (animationType === "blur-reveal") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(elements, {
                            opacity: 0,
                            filter: "blur(10px)"
                        }, {
                            opacity: 1,
                            filter: "blur(0px)",
                            duration: 1.2,
                            stagger: 0.15,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        });
                    }
                }
            }["useButtonAnimation.useGSAP"], [
                animationType
            ]);
            return {
                containerRef
            };
        };
        _s(useButtonAnimation, "R5+5KjrXQ5+JB5wCKyyreNNaUX8=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
            ];
        });
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/shared/AvatarGroup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hooks/useButtonAnimation.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const AvatarGroup = ({
            avatars,
            text,
            maxVisible = 5,
            animationType = "none",
            className = "",
            avatarClassName = "",
            avatarImageClassName = "",
            avatarOverlapClassName = "-ml-3",
            textClassName = "",
            ariaLabel = "User avatars"
        }) => {
            _s();
            const {
                containerRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"])({
                animationType
            });
            const visibleAvatars = avatars.slice(0, maxVisible);
            const remainingCount = Math.max(0, avatars.length - maxVisible);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                role: "group",
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 flex items-center gap-3", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            visibleAvatars.map((avatar, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative card p-0.5 rounded-theme", index !== 0 && avatarOverlapClassName, `z-[${visibleAvatars.length - index}]`, avatarClassName),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 h-12 w-auto aspect-square rounded-theme overflow-hidden", avatarImageClassName),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: avatar.src,
                                        alt: avatar.alt,
                                        fill: true,
                                        className: "w-full h-full object-cover",
                                        unoptimized: avatar.src.startsWith('http') || avatar.src.startsWith('//')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/AvatarGroup.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/AvatarGroup.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/src/components/shared/AvatarGroup.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))),
                            remainingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(`card p-0.5 rounded-theme ${avatarOverlapClassName} z-0`, avatarClassName),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 h-12 w-auto aspect-square rounded-theme flex items-center justify-center text-xs text-foreground", avatarImageClassName),
                                    children: [
                                        "+",
                                        remainingCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/AvatarGroup.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/AvatarGroup.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/AvatarGroup.tsx",
                        lineNumber: 50,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 text-sm text-foreground text-balance", textClassName),
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/AvatarGroup.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/AvatarGroup.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(AvatarGroup, "5+jWt0mYjzD+Fh6sCQ0aUuqQH4M=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"]
            ];
        });
        _c = AvatarGroup;
        const __TURBOPACK__default__export__ = AvatarGroup;
        var _c;
        __turbopack_context__.k.register(_c, "AvatarGroup");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/button/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "hasBgClassName",
            () => hasBgClassName
        ]);
        const hasBgClassName = (variant) => {
            return variant === "text-stagger" || variant === "text-shift" || variant === "shift-hover" || variant === "bounce-effect" || variant === "directional-hover";
        };
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/lib/buttonUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "getButtonProps",
            () => getButtonProps
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/types.ts [app-client] (ecmascript)");;;
        const getButtonProps = (button, index, variant, buttonClassName, buttonTextClassName) => {
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
                const {
                    bgClassName,
                    textClassName,
                    circleClassName
                } = button.props || {};
                return {
                    ...button.props,
                    ...baseProps,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClass, buttonClassName, button.props ? .className),
                    bgClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, bgClassName),
                    textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClassName, textClassName),
                    circleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(circleClass, circleClassName)
                };
            }
            // Variants with bgClassName (text-stagger, shift-hover, bounce-effect)
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasBgClassName"])(variant)) {
                const {
                    bgClassName,
                    textClassName
                } = button.props || {};
                return {
                    ...button.props,
                    ...baseProps,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClass, buttonClassName, button.props ? .className),
                    bgClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, bgClassName),
                    textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClassName, textClassName)
                };
            }
            // icon-arrow variant
            if (variant === "icon-arrow") {
                const iconBgClass = isPrimary ? "secondary-button text-secondary-cta-text" : "primary-button text-primary-cta-text";
                const {
                    textClassName,
                    iconClassName
                } = button.props || {};
                return {
                    ...button.props,
                    ...baseProps,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, buttonTextClass, buttonClassName, button.props ? .className),
                    textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClassName, textClassName),
                    iconClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(iconBgClass, iconClassName)
                };
            }
            // expand-hover variant
            if (variant === "expand-hover") {
                const iconBgClass = isPrimary ? "secondary-button" : "primary-button";
                const iconTextClass = isPrimary ? "text-secondary-cta-text" : "text-primary-cta-text";
                const hoverTextClass = isPrimary ? "md:group-hover:text-secondary-cta-text" : "md:group-hover:text-primary-cta-text";
                const {
                    textClassName,
                    iconClassName,
                    iconBgClassName
                } = button.props || {};
                return {
                    ...button.props,
                    ...baseProps,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, buttonTextClass, buttonClassName, button.props ? .className),
                    textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(hoverTextClass, buttonTextClassName, textClassName),
                    iconClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(iconTextClass, iconClassName),
                    iconBgClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(iconBgClass, iconBgClassName)
                };
            }
            // hover-bubble variant
            if (variant === "hover-bubble") {
                const iconBgClass = isPrimary ? "secondary-button text-secondary-cta-text" : "primary-button text-primary-cta-text";
                const baseTextClass = isPrimary ? "text-primary-cta-text" : "text-secondary-cta-text";
                const {
                    bgClassName,
                    textClassName,
                    iconClassName
                } = button.props || {};
                return {
                    ...button.props,
                    ...baseProps,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonClassName, button.props ? .className),
                    bgClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, bgClassName),
                    textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(baseTextClass, buttonTextClassName, textClassName),
                    iconClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(iconBgClass, iconClassName)
                };
            }
            // hover-magnetic variant (default fallback)
            return {
                ...button.props,
                ...baseProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonBgClass, buttonTextClass, buttonClassName, button.props ? .className),
                textClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(buttonTextClassName, buttonTextClass)
            };
        };
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/Textbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2f$TextAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/text/TextAnimation.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/Button.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Tag.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AvatarGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/AvatarGroup.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buttonUtils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hooks/useButtonAnimation.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;;;;;
        const TextBox = ({
            title,
            titleSegments,
            description,
            type,
            textboxLayout = "default",
            useInvertedBackground,
            className = "",
            titleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            descriptionClassName = "",
            duration = 1,
            start = "top 80%",
            end = "top 20%",
            gradientColors,
            children,
            center = false,
            tag,
            tagIcon: TagIcon,
            tagClassName = "",
            tagAnimation = "none",
            buttons,
            buttonAnimation = "none",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            avatars,
            avatarText,
            avatarGroupClassName = "",
            avatarsAbove = false
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const {
                containerRef: tagContainerRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"])({
                animationType: tagAnimation
            });
            const {
                containerRef: buttonContainerRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"])({
                animationType: buttonAnimation
            });
            // Shared tag component
            const tagElement = tag ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tagContainerRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: tag,
                    icon: TagIcon,
                    useInvertedBackground: useInvertedBackground,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(textboxLayout === "default" && "mb-3", tagClassName)
                }, void 0, false, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 102,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Textbox.tsx",
                lineNumber: 101,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)) : null;
            // Shared title component
            const titleElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "TextBox.useMemo[titleElement]": () => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2f$TextAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: type || theme.defaultTextAnimation,
                    text: title,
                    variant: "trigger",
                    as: "h2",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(textboxLayout === "split" || textboxLayout === "split-actions" || textboxLayout === "split-description" ? "text-7xl font-medium text-balance" : "text-6xl font-medium", center && textboxLayout === "default" && "text-center", useInvertedBackground && "text-background", titleClassName),
                    duration: duration,
                    start: start,
                    end: end,
                    gradientColors: gradientColors
                }, void 0, false, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 113,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }["TextBox.useMemo[titleElement]"], [
                type,
                theme.defaultTextAnimation,
                title,
                textboxLayout,
                center,
                useInvertedBackground,
                titleClassName,
                duration,
                start,
                end,
                gradientColors
            ]);
            // Inline image title component (used when textboxLayout === "inline-image")
            const inlineImageTitleElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "TextBox.useMemo[inlineImageTitleElement]": () => titleSegments && titleSegments.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-4xl md:text-5xl font-medium text-center leading-[1.15] text-balance", useInvertedBackground && "text-background", titleClassName),
                    children: titleSegments.map({
                        "TextBox.useMemo[inlineImageTitleElement]": (segment, index) => {
                            const imageIndex = titleSegments.slice(0, index + 1).filter({
                                "TextBox.useMemo[inlineImageTitleElement]": (s) => s.type === "image"
                            }["TextBox.useMemo[inlineImageTitleElement]"]).length - 1;
                            const element = segment.type === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: segment.content
                            }, index, false, {
                                fileName: "[project]/src/components/Textbox.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("inline-block relative primary-button -mt-[0.2em] h-[1.1em] w-auto aspect-square align-middle mx-1 p-0.5 rounded-theme", imageIndex % 2 === 0 ? "-rotate-12" : "rotate-12", titleImageWrapperClassName),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: segment.src,
                                        alt: segment.alt || "",
                                        width: 24,
                                        height: 24,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute inset-0 m-auto h-full w-full rounded-theme", titleImageClassName),
                                        unoptimized: segment.src.startsWith("http") || segment.src.startsWith("//"),
                                        "aria-hidden": !segment.alt || segment.alt === ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Textbox.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Textbox.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/src/components/Textbox.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    index > 0 && " ",
                                    element
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/Textbox.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0));
                        }
                    }["TextBox.useMemo[inlineImageTitleElement]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 133,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)) : null
            }["TextBox.useMemo[inlineImageTitleElement]"], [
                titleSegments,
                useInvertedBackground,
                titleClassName,
                titleImageWrapperClassName,
                titleImageClassName
            ]);
            // Shared description component
            const descriptionElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "TextBox.useMemo[descriptionElement]": () => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2f$TextAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: type || theme.defaultTextAnimation,
                    text: description,
                    variant: "words-trigger",
                    as: "p",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-lg leading-[1.2]", center && textboxLayout === "default" && "text-center", (textboxLayout === "split" || textboxLayout === "split-description") && "text-balance", useInvertedBackground && "text-background", descriptionClassName),
                    duration: duration,
                    start: start,
                    end: end,
                    gradientColors: gradientColors
                }, void 0, false, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 185,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }["TextBox.useMemo[descriptionElement]"], [
                type,
                theme.defaultTextAnimation,
                description,
                center,
                textboxLayout,
                useInvertedBackground,
                descriptionClassName,
                duration,
                start,
                end,
                gradientColors
            ]);
            // Shared avatars component
            const avatarsElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "TextBox.useMemo[avatarsElement]": () => avatars && avatars.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AvatarGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    avatars: avatars,
                    text: avatarText,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(textboxLayout === "default" && !avatarsAbove && "mt-3", textboxLayout === "default" && avatarsAbove && "mb-3", center && textboxLayout === "default" && "justify-center", avatarGroupClassName)
                }, void 0, false, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 206,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)) : null
            }["TextBox.useMemo[avatarsElement]"], [
                avatars,
                avatarText,
                textboxLayout,
                center,
                avatarGroupClassName,
                avatarsAbove
            ]);
            // Shared buttons/children component
            const actionsElement = buttons && buttons.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: buttonContainerRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center", textboxLayout === "default" && "w-full mt-3", (textboxLayout === "split" || textboxLayout === "split-actions") && "w-fit", center && textboxLayout === "default" && "justify-center", buttonContainerClassName),
                children: buttons.slice(0, 2).map((button, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonProps"])(button, index, theme.defaultButtonVariant, buttonClassName, buttonTextClassName)
                }, `${button.text}-${index}`, false, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/Textbox.tsx",
                lineNumber: 220,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)) : children;
            // Split layout
            if (textboxLayout === "split") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col md:flex-row gap-3 md:gap-15 md:items-end", className),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-6/10 flex flex-col gap-3",
                            children: [
                                tagElement,
                                titleElement,
                                descriptionElement
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Textbox.tsx",
                            lineNumber: 243,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-4/10 flex flex-col gap-3 md:items-end",
                            children: actionsElement
                        }, void 0, false, {
                            fileName: "[project]/src/components/Textbox.tsx",
                            lineNumber: 248,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 242,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0));
            }
            // Split actions layout - tag and buttons required, no description
            if (textboxLayout === "split-actions") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col md:flex-row gap-3 md:gap-15 md:items-end", className),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-6/10 flex flex-col gap-3",
                            children: [
                                tagElement,
                                titleElement
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Textbox.tsx",
                            lineNumber: 259,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-4/10 flex flex-col gap-3 md:items-end",
                            children: actionsElement
                        }, void 0, false, {
                            fileName: "[project]/src/components/Textbox.tsx",
                            lineNumber: 263,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 258,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0));
            }
            // Split description layout - tag + title left, description only right (no buttons)
            if (textboxLayout === "split-description") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col md:flex-row gap-3 md:gap-15 md:items-end", className),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-6/10 flex flex-col gap-3",
                            children: [
                                tagElement,
                                titleElement
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Textbox.tsx",
                            lineNumber: 274,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-4/10 flex flex-col gap-3 md:items-end",
                            children: descriptionElement
                        }, void 0, false, {
                            fileName: "[project]/src/components/Textbox.tsx",
                            lineNumber: 278,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 273,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0));
            }
            // Inline image layout - centered heading with inline images and optional buttons
            if (textboxLayout === "inline-image") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col gap-3 md:gap-1", center && "items-center text-center", className),
                    children: [
                        tagElement,
                        inlineImageTitleElement || titleElement,
                        descriptionElement,
                        actionsElement
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Textbox.tsx",
                    lineNumber: 288,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0));
            }
            // Default layout
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col gap-3 md:gap-1", center && "items-center text-center", className),
                children: [
                    avatarsAbove && avatarsElement,
                    tagElement,
                    titleElement,
                    descriptionElement,
                    actionsElement, !avatarsAbove && avatarsElement
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Textbox.tsx",
                lineNumber: 299,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(TextBox, "bqHkXJ4F7hWDXVB44o6qH4PPDis=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"]
            ];
        });
        _c = TextBox;
        const __TURBOPACK__default__export__ = TextBox;
        var _c;
        __turbopack_context__.k.register(_c, "TextBox");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/shared/MediaContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;;
        const MediaContent = ({
            imageSrc,
            videoSrc,
            imageAlt = "",
            videoAriaLabel = "Video content",
            imageClassName = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: videoSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: videoSrc,
                    "aria-label": videoAriaLabel,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full h-auto object-cover rounded-theme-capped", imageClassName),
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/MediaContent.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)) : imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: imageAlt,
                    width: 1920,
                    height: 1080,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full h-auto object-cover rounded-theme-capped", imageClassName),
                    unoptimized: imageSrc.startsWith('http') || imageSrc.startsWith('//'),
                    "aria-hidden": imageAlt === ""
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/MediaContent.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false);
        };
        _c = MediaContent;
        const __TURBOPACK__default__export__ = MediaContent;
        var _c;
        __turbopack_context__.k.register(_c, "MediaContent");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/background/HeroBackgrounds.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");;;;;;;;;;;;
        "use client";;;
        const AnimatedGridBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = () => __turbopack_context__.A("[project]/src/components/background/AnimatedGridBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/AnimatedGridBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c1 = AnimatedGridBackground;
        const CanvasRevealBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = () => __turbopack_context__.A("[project]/src/components/background/CanvasRevealBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/CanvasRevealBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c3 = CanvasRevealBackground;
        const CellWaveBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c4 = () => __turbopack_context__.A("[project]/src/components/background/CellWaveBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/CellWaveBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c5 = CellWaveBackground;
        const DownwardRaysBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(() => __turbopack_context__.A("[project]/src/components/background/DownwardRaysBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/DownwardRaysBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c6 = DownwardRaysBackground;
        const GlowingOrbBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c7 = () => __turbopack_context__.A("[project]/src/components/background/GlowingOrbBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/GlowingOrbBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c8 = GlowingOrbBackground;
        const GlowingOrbSparklesBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c9 = () => __turbopack_context__.A("[project]/src/components/background/GlowingOrbSparklesBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/GlowingOrbSparklesBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c10 = GlowingOrbSparklesBackground;
        const GradientBarsBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c11 = () => __turbopack_context__.A("[project]/src/components/background/GradientBarsBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/GradientBarsBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c12 = GradientBarsBackground;
        const RadialGradientBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c13 = () => __turbopack_context__.A("[project]/src/components/background/RadialGradientBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/RadialGradientBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c14 = RadialGradientBackground;
        const RotatedRaysBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(() => __turbopack_context__.A("[project]/src/components/background/RotatedRaysBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/RotatedRaysBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c15 = RotatedRaysBackground;
        const RotatingGradientBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c16 = () => __turbopack_context__.A("[project]/src/components/background/RotatingGradientBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/RotatingGradientBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c17 = RotatingGradientBackground;
        const SparklesGradientBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c18 = () => __turbopack_context__.A("[project]/src/components/background/SparklesGradientBackground.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
            loadableGenerated: {
                modules: [
                    "[project]/src/components/background/SparklesGradientBackground.tsx [app-client] (ecmascript, next/dynamic entry)"
                ]
            },
            ssr: false,
            loading: () => null
        });
        _c19 = SparklesGradientBackground;
        const heroBackgroundComponents = {
            "animated-grid": AnimatedGridBackground,
            "canvas-reveal": CanvasRevealBackground,
            "cell-wave": CellWaveBackground,
            "downward-rays": DownwardRaysBackground,
            "glowing-orb": GlowingOrbBackground,
            "glowing-orb-sparkles": GlowingOrbSparklesBackground,
            "gradient-bars": GradientBarsBackground,
            "radial-gradient": RadialGradientBackground,
            "rotated-rays": RotatedRaysBackground,
            "rotating-gradient": RotatingGradientBackground,
            "sparkles-gradient": SparklesGradientBackground
        };
        const HeroBackgrounds = (props) => {
            if (props.variant === "plain") {
                return null;
            }
            const {
                variant,
                ...restProps
            } = props;
            // Handle rotated-rays preset variants
            if (variant === "rotated-rays-animated") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatedRaysBackground, {
                    animated: true,
                    showGrid: false,
                    ...restProps
                }, void 0, false, {
                    fileName: "[project]/src/components/background/HeroBackgrounds.tsx",
                    lineNumber: 90,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (variant === "rotated-rays-animated-grid") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatedRaysBackground, {
                    animated: true,
                    showGrid: true,
                    ...restProps
                }, void 0, false, {
                    fileName: "[project]/src/components/background/HeroBackgrounds.tsx",
                    lineNumber: 93,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (variant === "rotated-rays-static") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatedRaysBackground, {
                    animated: false,
                    showGrid: false,
                    ...restProps
                }, void 0, false, {
                    fileName: "[project]/src/components/background/HeroBackgrounds.tsx",
                    lineNumber: 96,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (variant === "rotated-rays-static-grid") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatedRaysBackground, {
                    animated: false,
                    showGrid: true,
                    ...restProps
                }, void 0, false, {
                    fileName: "[project]/src/components/background/HeroBackgrounds.tsx",
                    lineNumber: 99,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0));
            }
            // Handle downward-rays preset variants
            if (variant === "downward-rays-animated") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownwardRaysBackground, {
                    animated: true,
                    showGrid: false,
                    ...restProps
                }, void 0, false, {
                    fileName: "[project]/src/components/background/HeroBackgrounds.tsx",
                    lineNumber: 104,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (variant === "downward-rays-animated-grid") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownwardRaysBackground, {
                    animated: true,
                    showGrid: true,
                    ...restProps
                }, void 0, false, {
                    fileName: "[project]/src/components/background/HeroBackgrounds.tsx",
                    lineNumber: 107,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (variant === "downward-rays-static") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownwardRaysBackground, {
                    animated: false,
                    showGrid: false,
                    ...restProps
                }, void 0, false, {
                    fileName: "[project]/src/components/background/HeroBackgrounds.tsx",
                    lineNumber: 110,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (variant === "downward-rays-static-grid") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownwardRaysBackground, {
                    animated: false,
                    showGrid: true,
                    ...restProps
                }, void 0, false, {
                    fileName: "[project]/src/components/background/HeroBackgrounds.tsx",
                    lineNumber: 113,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0));
            }
            const BackgroundComponent = heroBackgroundComponents[variant];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundComponent, {
                ...restProps
            }, void 0, false, {
                fileName: "[project]/src/components/background/HeroBackgrounds.tsx",
                lineNumber: 117,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c20 = HeroBackgrounds;
        const __TURBOPACK__default__export__ = HeroBackgrounds;
        var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
        __turbopack_context__.k.register(_c, "AnimatedGridBackground$dynamic");
        __turbopack_context__.k.register(_c1, "AnimatedGridBackground");
        __turbopack_context__.k.register(_c2, "CanvasRevealBackground$dynamic");
        __turbopack_context__.k.register(_c3, "CanvasRevealBackground");
        __turbopack_context__.k.register(_c4, "CellWaveBackground$dynamic");
        __turbopack_context__.k.register(_c5, "CellWaveBackground");
        __turbopack_context__.k.register(_c6, "DownwardRaysBackground");
        __turbopack_context__.k.register(_c7, "GlowingOrbBackground$dynamic");
        __turbopack_context__.k.register(_c8, "GlowingOrbBackground");
        __turbopack_context__.k.register(_c9, "GlowingOrbSparklesBackground$dynamic");
        __turbopack_context__.k.register(_c10, "GlowingOrbSparklesBackground");
        __turbopack_context__.k.register(_c11, "GradientBarsBackground$dynamic");
        __turbopack_context__.k.register(_c12, "GradientBarsBackground");
        __turbopack_context__.k.register(_c13, "RadialGradientBackground$dynamic");
        __turbopack_context__.k.register(_c14, "RadialGradientBackground");
        __turbopack_context__.k.register(_c15, "RotatedRaysBackground");
        __turbopack_context__.k.register(_c16, "RotatingGradientBackground$dynamic");
        __turbopack_context__.k.register(_c17, "RotatingGradientBackground");
        __turbopack_context__.k.register(_c18, "SparklesGradientBackground$dynamic");
        __turbopack_context__.k.register(_c19, "SparklesGradientBackground");
        __turbopack_context__.k.register(_c20, "HeroBackgrounds");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/shared/LogoMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;;;
        const LogoMarquee = ({
            items,
            speed = 30,
            showCard = true,
            className = "",
            itemClassName = "",
            cardClassName = "",
            imageClassName = "",
            textClassName = "",
            iconClassName = ""
        }) => {
            const repeatedItems = [
                ...items,
                ...items,
                ...items
            ];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("mask-padding-x", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    gradient: false,
                    speed: speed,
                    children: repeatedItems.map((item, i) => {
                        const hasCard = item.type !== "image" && showCard;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(hasCard ? "mx-2" : "mx-6", itemClassName),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(hasCard ? "card px-4 py-3 mb-1 rounded-theme" : "", cardClassName),
                                children: [
                                    item.type === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        width: 500,
                                        height: 500,
                                        src: item.src,
                                        alt: item.alt || `Logo ${i + 1}`,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 h-6 w-auto", imageClassName),
                                        unoptimized: item.src.startsWith("http") || item.src.startsWith("//")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/LogoMarquee.tsx",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.type === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 text-foreground text-sm", textClassName),
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/LogoMarquee.tsx",
                                        lineNumber: 57,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.type === "text-icon" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 flex items-center gap-2 text-foreground text-sm", textClassName),
                                        children: [
                                            /*#__PURE__*/
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-[1em] w-auto", iconClassName),
                                                strokeWidth: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/LogoMarquee.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            item.text
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/LogoMarquee.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/LogoMarquee.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, i, false, {
                            fileName: "[project]/src/components/shared/LogoMarquee.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/LogoMarquee.tsx",
                    lineNumber: 40,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/LogoMarquee.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = LogoMarquee;
        const __TURBOPACK__default__export__ = LogoMarquee;
        var _c;
        __turbopack_context__.k.register(_c, "LogoMarquee");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/hero/HeroSplitKpi.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Textbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Textbox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/MediaContent.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$HeroBackgrounds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/HeroBackgrounds.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$LogoMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/LogoMarquee.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hooks/useButtonAnimation.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature(),
            _s1 = __turbopack_context__.k.signature();
        "use client";;;;;;;;
        const MOBILE_BREAKPOINT = 768;
        const useKpiAnimation = (enableAnimation = true) => {
            _s();
            const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const boxRef1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const boxRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const boxRef3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useKpiAnimation.useEffect": () => {
                    if (!enableAnimation) return;
                    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
                    if (isMobile) return;
                    let mouseX = 0;
                    let mouseY = 0;
                    let box1X = 0,
                        box1Y = 0;
                    let box2X = 0,
                        box2Y = 0;
                    let box3X = 0,
                        box3Y = 0;
                    const speed = 0.025;
                    const handleMouseMove = {
                        "useKpiAnimation.useEffect.handleMouseMove": (event) => {
                            mouseX = event.clientX / window.innerWidth * 100 - 50;
                            mouseY = event.clientY / window.innerHeight * 100 - 50;
                        }
                    }["useKpiAnimation.useEffect.handleMouseMove"];
                    const animate = {
                        "useKpiAnimation.useEffect.animate": () => {
                            // Box 1 movement
                            const distX1 = mouseX * -0.25 - box1X;
                            const distY1 = mouseY * -0.25 - box1Y;
                            box1X += distX1 * speed;
                            box1Y += distY1 * speed;
                            // Box 2 movement
                            const distX2 = mouseX * -0.5 - box2X;
                            const distY2 = mouseY * -0.5 - box2Y;
                            box2X += distX2 * speed;
                            box2Y += distY2 * speed;
                            // Box 3 movement
                            const distX3 = mouseX * 0.25 - box3X;
                            const distY3 = mouseY * 0.25 - box3Y;
                            box3X += distX3 * speed;
                            box3Y += distY3 * speed;
                            // Apply transforms
                            if (boxRef1.current) {
                                boxRef1.current.style.transform = `translate(${box1X}px, ${box1Y}px)`;
                            }
                            if (boxRef2.current) {
                                boxRef2.current.style.transform = `translate(${box2X}px, ${box2Y}px)`;
                            }
                            if (boxRef3.current) {
                                boxRef3.current.style.transform = `translate(${box3X}px, ${box3Y}px)`;
                            }
                            requestAnimationFrame(animate);
                        }
                    }["useKpiAnimation.useEffect.animate"];
                    animate();
                    window.addEventListener('mousemove', handleMouseMove);
                    return ({
                        "useKpiAnimation.useEffect": () => {
                            window.removeEventListener('mousemove', handleMouseMove);
                        }
                    })["useKpiAnimation.useEffect"];
                }
            }["useKpiAnimation.useEffect"], [
                enableAnimation
            ]);
            return {
                sectionRef,
                boxRef1,
                boxRef2,
                boxRef3
            };
        };
        _s(useKpiAnimation, "iDe8mYVt21dc8TVVcF3ktMpkYfA=");
        const HeroSplitKpi = ({
            title,
            description,
            background = {
                variant: "plain"
            },
            kpis,
            enableKpiAnimation,
            tag,
            tagIcon,
            tagAnimation = "opacity",
            buttons = [],
            buttonAnimation = "slide-up",
            avatars,
            avatarText,
            mediaAnimation = "none",
            imageSrc,
            videoSrc,
            imageAlt = "",
            videoAriaLabel = "Hero video",
            ariaLabel = "Hero section",
            imagePosition = "right",
            className = "",
            containerClassName = "",
            textBoxClassName = "",
            titleClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            mediaWrapperClassName = "",
            imageClassName = "",
            avatarGroupClassName = "",
            kpiClassName = "",
            kpiValueClassName = "",
            kpiLabelClassName = "",
            marqueeItems,
            marqueeSpeed = 30,
            showMarqueeCard = true,
            marqueeClassName = "",
            marqueeItemClassName = "",
            marqueeCardClassName = "",
            marqueeImageClassName = "",
            marqueeTextClassName = "",
            marqueeIconClassName = ""
        }) => {
            _s1();
            const {
                sectionRef,
                boxRef1,
                boxRef2,
                boxRef3
            } = useKpiAnimation(enableKpiAnimation);
            const {
                containerRef: mediaContainerRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"])({
                animationType: mediaAnimation
            });
            const boxRefs = [
                boxRef1,
                boxRef2,
                boxRef3
            ];
            const mediaContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-full h-fit md:w-1/2 aspect-square md:aspect-auto md:h-[65vh]", mediaWrapperClassName),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: mediaContainerRef,
                        className: "relative h-full scale-75 w-full overflow-hidden rounded-theme-capped card p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            imageSrc: imageSrc,
                            videoSrc: videoSrc,
                            imageAlt: imageAlt,
                            videoAriaLabel: videoAriaLabel,
                            imageClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-full min-h-0", imageClassName)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                            lineNumber: 213,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                        lineNumber: 212,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    kpis.map((kpi, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: boxRefs[index],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute! card backdrop-blur-xs rounded-theme-capped px-4 py-3 md:px-6 md:py-4 flex flex-col items-center", index === 0 && "top-[5%] left-[5%] md:top-[0%] md:left-[0%]", index === 1 && "top-[35%] right-[2.5%] md:top-[35%]", index === 2 && "bottom-[7.5%] left-[10%] md:left-[7.5%] md:bottom-[0%]", kpiClassName),
                        children: [
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-2xl md:text-4xl font-medium text-foreground", kpiValueClassName),
                                children: kpi.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                                lineNumber: 234,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-sm md:text-base text-foreground/70", kpiLabelClassName),
                                children: kpi.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                                lineNumber: 237,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                        lineNumber: 223,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-full h-fit py-hero-page-padding md:py-0 md:h-svh flex items-center", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$HeroBackgrounds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...background
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                        lineNumber: 251,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto flex flex-col md:flex-row gap-13 md:gap-15 items-center relative z-10", containerClassName),
                        children: [
                            imagePosition === "left" && mediaContent,
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full md:w-1/2"),
                                children: [
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Textbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: title,
                                        description: description,
                                        tag: tag,
                                        tagIcon: tagIcon,
                                        tagAnimation: tagAnimation,
                                        buttons: buttons,
                                        buttonAnimation: buttonAnimation,
                                        avatars: avatars,
                                        avatarText: avatarText,
                                        avatarGroupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("!mt-5", avatarGroupClassName),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col gap-3 md:hidden", textBoxClassName),
                                        titleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-7xl 2xl:text-8xl font-medium text-center md:text-left text-balance", titleClassName),
                                        descriptionClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("max-w-8/10 text-lg md:text-xl leading-[1.2] text-center md:text-left", descriptionClassName),
                                        tagClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName),
                                        buttonContainerClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center mt-2", buttonContainerClassName),
                                        buttonClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("", buttonClassName),
                                        buttonTextClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base", buttonTextClassName),
                                        center: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                                        lineNumber: 257,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Textbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: title,
                                        description: description,
                                        tag: tag,
                                        tagIcon: tagIcon,
                                        tagAnimation: tagAnimation,
                                        buttons: buttons,
                                        buttonAnimation: buttonAnimation,
                                        avatars: avatars,
                                        avatarText: avatarText,
                                        avatarGroupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("", avatarGroupClassName),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("hidden md:flex flex-col gap-3 md:gap-4", textBoxClassName),
                                        titleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-7xl 2xl:text-8xl font-medium text-center md:text-left text-balance", titleClassName),
                                        descriptionClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("max-w-8/10 text-lg md:text-xl leading-[1.2] text-center md:text-left", descriptionClassName),
                                        tagClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName),
                                        buttonContainerClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center mt-2", buttonContainerClassName),
                                        buttonClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("", buttonClassName),
                                        buttonTextClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base", buttonTextClassName),
                                        center: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                                        lineNumber: 278,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                                lineNumber: 255,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            imagePosition === "right" && mediaContent
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    marqueeItems && marqueeItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$LogoMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        items: marqueeItems,
                        speed: marqueeSpeed,
                        showCard: showMarqueeCard,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute bottom-6 left-1/2 -translate-x-1/2 w-content-width z-10", marqueeClassName),
                        itemClassName: marqueeItemClassName,
                        cardClassName: marqueeCardClassName,
                        imageClassName: marqueeImageClassName,
                        textClassName: marqueeTextClassName,
                        iconClassName: marqueeIconClassName
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                        lineNumber: 304,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/HeroSplitKpi.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s1(HeroSplitKpi, "p6oHzDb24LJq3uHabhzz6lh2XGM=", false, function() {
            return [
                useKpiAnimation,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"]
            ];
        });
        _c = HeroSplitKpi;
        const __TURBOPACK__default__export__ = HeroSplitKpi;
        var _c;
        __turbopack_context__.k.register(_c, "HeroSplitKpi");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/about/TextAbout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2f$TextAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/text/TextAnimation.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Tag.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/Button.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buttonUtils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hooks/useButtonAnimation.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;;
        const TextAbout = ({
            tag,
            tagIcon,
            tagAnimation = "none",
            title,
            buttons = [],
            buttonAnimation = "none",
            useInvertedBackground = false,
            ariaLabel = "About section",
            className = "",
            containerClassName = "",
            titleClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const {
                containerRef: tagContainerRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"])({
                animationType: tagAnimation
            });
            const {
                containerRef: buttonContainerRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"])({
                animationType: buttonAnimation
            });
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto flex flex-col gap-6 items-center", containerClassName),
                    children: [
                        tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: tagContainerRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: tag,
                                icon: tagIcon,
                                useInvertedBackground: useInvertedBackground
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/about/TextAbout.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/about/TextAbout.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2f$TextAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: theme.defaultTextAnimation,
                            text: title,
                            variant: "words-trigger",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-2xl md:text-5xl font-medium text-center leading-[1.175]", useInvertedBackground && "text-background", titleClassName)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/about/TextAbout.tsx",
                            lineNumber: 61,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        buttons && buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: buttonContainerRef,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center", tag && "mt-2", buttonContainerClassName),
                            children: buttons.slice(0, 2).map((button, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonProps"])(button, index, theme.defaultButtonVariant, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("", buttonClassName), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base", buttonTextClassName))
                            }, index, false, {
                                fileName: "[project]/src/components/sections/about/TextAbout.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/about/TextAbout.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/about/TextAbout.tsx",
                    lineNumber: 55,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/about/TextAbout.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(TextAbout, "yXxB3BIfo1ZLRGg90mqMSTyPHUs=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"]
            ];
        });
        _c = TextAbout;
        const __TURBOPACK__default__export__ = TextAbout;
        var _c;
        __turbopack_context__.k.register(_c, "TextAbout");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/navbar/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const Logo = ({
            logoSrc,
            logoAlt = "",
            brandName = "cypher",
            className = "",
            imageClassName = "",
            textClassName = "",
            onClick,
            href
        }) => {
            _s();
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(href, onClick);
            const isClickable = onClick || href;
            if (logoSrc) {
                const imageElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative h-[calc(var(--text-xl)*1.25)] w-auto", className),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: logoSrc,
                        alt: logoAlt,
                        width: 100,
                        height: 24,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-full w-auto object-contain", imageClassName),
                        unoptimized: logoSrc.startsWith('http') || logoSrc.startsWith('//')
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Logo.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Logo.tsx",
                    lineNumber: 33,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0));
                if (isClickable) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClick,
                        className: "cursor-pointer",
                        children: imageElement
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Logo.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return imageElement;
            }
            if (isClickable) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClick,
                    className: "cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-xl font-medium text-foreground", textClassName),
                        children: brandName
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Logo.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Logo.tsx",
                    lineNumber: 58,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-xl font-medium text-foreground", textClassName),
                children: brandName
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Logo.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(Logo, "k/n1+2dO93KQ2ssXjfb0Czox+/k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"]
            ];
        });
        _c = Logo;
        const __TURBOPACK__default__export__ = Logo;
        var _c;
        __turbopack_context__.k.register(_c, "Logo");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/Button.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextUnderline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonTextUnderline.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/Logo.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buttonUtils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;;
        const NavbarLayoutFloatingInline = ({
            navItems,
            logoSrc,
            logoAlt = "",
            brandName = "cypher",
            button,
            secondaryButton,
            animateOnLoad = true,
            className = "",
            logoClassName = "",
            logoImageClassName = "",
            navItemClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            secondaryButtonClassName = "",
            secondaryButtonTextClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const [entered, setEntered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!animateOnLoad);
            const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!animateOnLoad);
            const [showLinks, setShowLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!animateOnLoad);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "NavbarLayoutFloatingInline.useEffect": () => {
                    if (!animateOnLoad) return;
                    const t1 = setTimeout({
                        "NavbarLayoutFloatingInline.useEffect.t1": () => setEntered(true)
                    }["NavbarLayoutFloatingInline.useEffect.t1"], 50);
                    const t2 = setTimeout({
                        "NavbarLayoutFloatingInline.useEffect.t2": () => setExpanded(true)
                    }["NavbarLayoutFloatingInline.useEffect.t2"], 1000);
                    const t3 = setTimeout({
                        "NavbarLayoutFloatingInline.useEffect.t3": () => setShowLinks(true)
                    }["NavbarLayoutFloatingInline.useEffect.t3"], 1900);
                    return ({
                        "NavbarLayoutFloatingInline.useEffect": () => {
                            clearTimeout(t1);
                            clearTimeout(t2);
                            clearTimeout(t3);
                        }
                    })["NavbarLayoutFloatingInline.useEffect"];
                }
            }["NavbarLayoutFloatingInline.useEffect"], [
                animateOnLoad
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                role: "navigation",
                "aria-label": "Main navigation",
                className: "fixed z-[100] top-6 w-full",
                style: animateOnLoad ? {
                    transform: entered ? "translateY(0)" : "translateY(calc(-100% - 3rem))",
                    transition: "transform 900ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                } : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("mx-auto flex items-center justify-between", "card rounded-theme", "p-3 pl-6 h-fit relative", !animateOnLoad && "w-content-width", className),
                    style: animateOnLoad ? {
                        maxWidth: expanded ? "var(--width-content-width)" : "22rem",
                        transition: "max-width 1000ms cubic-bezier(0.4, 0, 0.2, 1)"
                    } : undefined,
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            brandName: brandName,
                            logoSrc: logoSrc,
                            logoAlt: logoAlt,
                            className: logoClassName,
                            imageClassName: logoImageClassName,
                            href: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx",
                            lineNumber: 90,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-6 items-center",
                            children: navItems.map((item, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: animateOnLoad ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("transition-all duration-700 ease-out", showLinks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3") : undefined,
                                style: animateOnLoad ? {
                                    transitionDelay: `${index * 120}ms`
                                } : undefined,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextUnderline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: item.name,
                                    href: item.id,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("!text-base", navItemClassName)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx",
                            lineNumber: 99,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                secondaryButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonProps"])(secondaryButton, 1, theme.defaultButtonVariant, secondaryButtonClassName, secondaryButtonTextClassName)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonProps"])(button, 0, theme.defaultButtonVariant, buttonClassName, buttonTextClassName)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx",
                                    lineNumber: 130,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx",
                            lineNumber: 118,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx",
                    lineNumber: 77,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(NavbarLayoutFloatingInline, "WFJix4TDBttuL1ItHkOocg8KRh0=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
            ];
        });
        _c = NavbarLayoutFloatingInline;
        const __TURBOPACK__default__export__ = NavbarLayoutFloatingInline;
        var _c;
        __turbopack_context__.k.register(_c, "NavbarLayoutFloatingInline");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Textbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Textbox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const CardStackTextBox = ({
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation,
            buttons,
            buttonAnimation,
            textboxLayout,
            useInvertedBackground,
            textBoxClassName = "",
            titleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = ""
        }) => {
            _s();
            const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "CardStackTextBox.useMemo[styles]": () => {
                    if (textboxLayout === "default") {
                        return {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col gap-3 md:gap-2", textBoxClassName),
                            titleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-6xl font-medium text-center", titleClassName),
                            descriptionClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-lg leading-tight text-center md:max-w-6/10", descriptionClassName),
                            tagClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-0 mx-auto", tagClassName),
                            buttonContainerClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center mt-1 md:mt-3 justify-center", buttonContainerClassName),
                            center: true
                        };
                    }
                    if (textboxLayout === "inline-image") {
                        return {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col gap-3 md:gap-2", textBoxClassName),
                            titleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-4xl md:text-5xl font-medium text-center", titleClassName),
                            descriptionClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-lg leading-tight text-center", descriptionClassName),
                            tagClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-0 mx-auto", tagClassName),
                            buttonContainerClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center mt-1 md:mt-3 justify-center", buttonContainerClassName),
                            center: true
                        };
                    }
                    return {
                        className: textBoxClassName,
                        titleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-6xl font-medium", titleClassName),
                        descriptionClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-lg leading-tight", descriptionClassName),
                        tagClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2", tagClassName),
                        buttonContainerClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center", buttonContainerClassName),
                        center: false
                    };
                }
            }["CardStackTextBox.useMemo[styles]"], [
                textboxLayout,
                textBoxClassName,
                titleClassName,
                descriptionClassName,
                tagClassName,
                buttonContainerClassName
            ]);
            if (!title && !titleSegments && !description) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Textbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: title,
                titleSegments: titleSegments,
                description: description,
                tag: tag,
                tagIcon: tagIcon,
                tagAnimation: tagAnimation,
                buttons: buttons,
                buttonAnimation: buttonAnimation,
                textboxLayout: textboxLayout,
                useInvertedBackground: useInvertedBackground,
                className: styles.className,
                titleClassName: styles.titleClassName,
                titleImageWrapperClassName: titleImageWrapperClassName,
                titleImageClassName: titleImageClassName,
                descriptionClassName: styles.descriptionClassName,
                tagClassName: styles.tagClassName,
                buttonContainerClassName: styles.buttonContainerClassName,
                buttonClassName: buttonClassName,
                buttonTextClassName: buttonTextClassName,
                center: styles.center
            }, void 0, false, {
                fileName: "[project]/src/components/cardStack/CardStackTextBox.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(CardStackTextBox, "FNnwCRplwscOkAlRYwSCnqaDILI=");
        _c = CardStackTextBox;
        const __TURBOPACK__default__export__ = CardStackTextBox;
        var _c;
        __turbopack_context__.k.register(_c, "CardStackTextBox");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/layouts/grid/gridConfigs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "gridConfigs",
            () => gridConfigs
        ]);
        const gridConfigs = {
            "uniform-all-items-equal": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-3",
                    itemClasses: [],
                    heightClasses: "min-h-90 2xl:min-h-100"
                },
                4: {
                    gridCols: "md:grid-cols-4",
                    itemClasses: [],
                    heightClasses: "min-h-90 2xl:min-h-100"
                }
            },
            "bento-grid": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-4",
                    gridRows: "md:grid-rows-[18rem_18rem] 2xl:grid-rows-[22rem_22rem]",
                    itemClasses: [
                        "md:col-span-2 md:row-span-2 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ],
                    heightClasses: "min-h-80"
                },
                4: {
                    gridCols: "md:grid-cols-4",
                    gridRows: "md:grid-rows-[18rem_18rem] 2xl:grid-rows-[22rem_22rem]",
                    itemClasses: [
                        "md:col-span-2 md:row-span-2 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ],
                    heightClasses: "min-h-80"
                }
            },
            "bento-grid-inverted": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-4",
                    gridRows: "md:grid-rows-[18rem_18rem] 2xl:grid-rows-[22rem_22rem]",
                    itemClasses: [
                        "md:col-span-2 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-2 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ],
                    heightClasses: "min-h-80"
                },
                4: {
                    gridCols: "md:grid-cols-4",
                    gridRows: "md:grid-rows-[18rem_18rem] 2xl:grid-rows-[22rem_22rem]",
                    itemClasses: [
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-2 md:row-start-1 md:col-start-3 md:min-h-0 md:overflow-hidden"
                    ],
                    heightClasses: "min-h-80"
                }
            },
            "two-columns-alternating-heights": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-3",
                    itemClasses: []
                },
                4: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[13rem_13rem_0.5rem_0.5rem_13rem_13rem] 2xl:grid-rows-[16rem_16rem_0.5rem_0.5rem_16rem_16rem]",
                    itemClasses: [
                        "md:col-span-1 md:row-span-2 md:row-start-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-4 md:row-start-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-4 md:row-start-3 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-2 md:row-start-5 md:min-h-0 md:overflow-hidden"
                    ]
                }
            },
            "asymmetric-60-wide-40-narrow": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-10",
                    gridRows: "md:grid-rows-[24rem_24rem] 2xl:grid-rows-[27rem_27rem]",
                    itemClasses: [
                        "md:col-span-6 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-4 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-10 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                },
                4: {
                    gridCols: "md:grid-cols-10",
                    gridRows: "md:grid-rows-[24rem_24rem] 2xl:grid-rows-[27rem_27rem]",
                    itemClasses: [
                        "md:col-span-6 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-4 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-4 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-6 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                }
            },
            "three-columns-all-equal-width": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[21rem_21rem] 2xl:grid-rows-[24rem_24rem]",
                    itemClasses: [
                        "md:col-span-1 md:row-span-2 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                },
                4: {
                    gridCols: "md:grid-cols-3",
                    gridRows: "md:grid-rows-[21rem_21rem] 2xl:grid-rows-[24rem_24rem]",
                    itemClasses: [
                        "md:col-span-1 md:row-span-2 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-2 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                }
            },
            "four-items-2x2-equal-grid": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-3",
                    itemClasses: []
                },
                4: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[26.5rem_26.5rem] 2xl:grid-rows-[32.5rem_32.5rem]",
                    itemClasses: [
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                }
            },
            "one-large-right-three-stacked-left": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-6",
                    gridRows: "md:grid-rows-[24rem_24rem] 2xl:grid-rows-[27rem_27rem]",
                    itemClasses: [
                        "md:col-span-2 md:row-span-1 md:row-start-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:row-start-2 md:min-h-0 md:overflow-hidden",
                        "md:col-span-4 md:row-span-2 md:row-start-1 md:min-h-0 md:overflow-hidden"
                    ]
                },
                4: {
                    gridCols: "md:grid-cols-6",
                    gridRows: "md:grid-rows-[17.5rem_17.5rem_17.5rem] 2xl:grid-rows-[21rem_21rem_21rem]",
                    itemClasses: [
                        "md:col-span-2 md:row-span-1 md:row-start-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:row-start-2 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:row-start-3 md:min-h-0 md:overflow-hidden",
                        "md:col-span-4 md:row-span-3 md:row-start-1 md:min-h-0 md:overflow-hidden"
                    ]
                }
            },
            "items-top-row-full-width-bottom": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[24rem_24rem] 2xl:grid-rows-[27rem_27rem]",
                    itemClasses: [
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                },
                4: {
                    gridCols: "md:grid-cols-3",
                    gridRows: "md:grid-rows-[24rem_24rem] 2xl:grid-rows-[27rem_27rem]",
                    itemClasses: [
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-3 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                }
            },
            "full-width-top-items-bottom-row": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[24rem_24rem] 2xl:grid-rows-[27rem_27rem]",
                    itemClasses: [
                        "md:col-span-2 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                },
                4: {
                    gridCols: "md:grid-cols-3",
                    gridRows: "md:grid-rows-[24rem_24rem] 2xl:grid-rows-[27rem_27rem]",
                    itemClasses: [
                        "md:col-span-3 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:row-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                }
            },
            "one-large-left-three-stacked-right": {
                1: null,
                2: null,
                3: {
                    gridCols: "md:grid-cols-6",
                    gridRows: "md:grid-rows-[24rem_24rem] 2xl:grid-rows-[27rem_27rem]",
                    itemClasses: [
                        "md:col-span-4 md:row-span-2 md:row-start-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:row-start-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:row-start-2 md:min-h-0 md:overflow-hidden"
                    ]
                },
                4: {
                    gridCols: "md:grid-cols-6",
                    gridRows: "md:grid-rows-[17.5rem_17.5rem_17.5rem] 2xl:grid-rows-[21rem_21rem_21rem]",
                    itemClasses: [
                        "md:col-span-4 md:row-span-3 md:row-start-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:row-start-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:row-start-2 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:row-span-1 md:row-start-3 md:min-h-0 md:overflow-hidden"
                    ]
                }
            },
            "two-items-per-row": {
                1: null,
                2: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[28rem] 2xl:grid-rows-[32rem]",
                    itemClasses: [
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                },
                3: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[28rem_28rem] 2xl:grid-rows-[32rem_32rem]",
                    itemClasses: [
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:min-h-0 md:overflow-hidden"
                    ]
                },
                4: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[28rem_28rem] 2xl:grid-rows-[32rem_32rem]",
                    itemClasses: [
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                },
                5: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[28rem_28rem_28rem] 2xl:grid-rows-[32rem_32rem_32rem]",
                    itemClasses: [
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:min-h-0 md:overflow-hidden"
                    ]
                },
                6: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[28rem_28rem_28rem] 2xl:grid-rows-[32rem_32rem_32rem]",
                    itemClasses: [
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                },
                7: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[28rem_28rem_28rem_28rem] 2xl:grid-rows-[32rem_32rem_32rem_32rem]",
                    itemClasses: [
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-2 md:min-h-0 md:overflow-hidden"
                    ]
                },
                8: {
                    gridCols: "md:grid-cols-2",
                    gridRows: "md:grid-rows-[28rem_28rem_28rem_28rem] 2xl:grid-rows-[32rem_32rem_32rem_32rem]",
                    itemClasses: [
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden",
                        "md:col-span-1 md:min-h-0 md:overflow-hidden"
                    ]
                }
            }
        };
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/hooks/useDepth3DAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "useDepth3DAnimation",
            () => useDepth3DAnimation
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();;
        const MOBILE_BREAKPOINT = 768;
        const ANIMATION_SPEED = 0.05;
        const ROTATION_SPEED = 0.1;
        const MOUSE_MULTIPLIER = 0.5;
        const ROTATION_MULTIPLIER = 0.25;
        const useDepth3DAnimation = ({
            itemRefs,
            containerRef,
            perspectiveRef,
            isEnabled
        }) => {
            _s();
            const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            // Detect mobile viewport
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useDepth3DAnimation.useEffect": () => {
                    const checkMobile = {
                        "useDepth3DAnimation.useEffect.checkMobile": () => {
                            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                        }
                    }["useDepth3DAnimation.useEffect.checkMobile"];
                    checkMobile();
                    window.addEventListener("resize", checkMobile);
                    return ({
                        "useDepth3DAnimation.useEffect": () => {
                            window.removeEventListener("resize", checkMobile);
                        }
                    })["useDepth3DAnimation.useEffect"];
                }
            }["useDepth3DAnimation.useEffect"], []);
            // 3D mouse-tracking effect (desktop only)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useDepth3DAnimation.useEffect": () => {
                    if (!isEnabled || isMobile) return;
                    let animationFrameId;
                    let isAnimating = true;
                    // Apply perspective to the perspective ref (grid) if provided, otherwise to container (section)
                    const perspectiveElement = perspectiveRef ? .current || containerRef.current;
                    if (perspectiveElement) {
                        perspectiveElement.style.perspective = "1200px";
                        perspectiveElement.style.transformStyle = "preserve-3d";
                    }
                    let mouseX = 0;
                    let mouseY = 0;
                    let isMouseInSection = false;
                    let currentX = 0;
                    let currentY = 0;
                    let currentRotationX = 0;
                    let currentRotationY = 0;
                    const handleMouseMove = {
                        "useDepth3DAnimation.useEffect.handleMouseMove": (event) => {
                            if (containerRef.current) {
                                const rect = containerRef.current.getBoundingClientRect();
                                isMouseInSection = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
                            }
                            if (isMouseInSection) {
                                mouseX = event.clientX / window.innerWidth * 100 - 50;
                                mouseY = event.clientY / window.innerHeight * 100 - 50;
                            }
                        }
                    }["useDepth3DAnimation.useEffect.handleMouseMove"];
                    const animate = {
                        "useDepth3DAnimation.useEffect.animate": () => {
                            if (!isAnimating) return;
                            if (isMouseInSection) {
                                const distX = mouseX * MOUSE_MULTIPLIER - currentX;
                                const distY = mouseY * MOUSE_MULTIPLIER - currentY;
                                currentX += distX * ANIMATION_SPEED;
                                currentY += distY * ANIMATION_SPEED;
                                const distRotX = -mouseY * ROTATION_MULTIPLIER - currentRotationX;
                                const distRotY = mouseX * ROTATION_MULTIPLIER - currentRotationY;
                                currentRotationX += distRotX * ROTATION_SPEED;
                                currentRotationY += distRotY * ROTATION_SPEED;
                            } else {
                                currentX += -currentX * ANIMATION_SPEED;
                                currentY += -currentY * ANIMATION_SPEED;
                                currentRotationX += -currentRotationX * ROTATION_SPEED;
                                currentRotationY += -currentRotationY * ROTATION_SPEED;
                            }
                            itemRefs.current ? .forEach({
                                "useDepth3DAnimation.useEffect.animate": (ref) => {
                                    if (!ref) return;
                                    ref.style.transform = `translate(${currentX}px, ${currentY}px) rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
                                }
                            }["useDepth3DAnimation.useEffect.animate"]);
                            animationFrameId = requestAnimationFrame(animate);
                        }
                    }["useDepth3DAnimation.useEffect.animate"];
                    animate();
                    window.addEventListener("mousemove", handleMouseMove);
                    return ({
                        "useDepth3DAnimation.useEffect": () => {
                            window.removeEventListener("mousemove", handleMouseMove);
                            if (animationFrameId) {
                                cancelAnimationFrame(animationFrameId);
                            }
                            isAnimating = false;
                        }
                    })["useDepth3DAnimation.useEffect"];
                }
            }["useDepth3DAnimation.useEffect"], [
                isEnabled,
                isMobile,
                itemRefs,
                containerRef
            ]);
            return {
                isMobile
            };
        };
        _s(useDepth3DAnimation, "nO5ySpXjTdUP2EUAeXIbqoF2FUU=");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/hooks/useCardAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "useCardAnimation",
            () => useCardAnimation
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useDepth3DAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/hooks/useDepth3DAnimation.ts [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();;;;;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);;
        const useCardAnimation = ({
            animationType,
            itemCount,
            isGrid = true,
            supports3DAnimation = false,
            gridVariant,
            useIndividualTriggers = false
        }) => {
            _s();
            const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
            const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const perspectiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const bottomContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            // Enable 3D effect only when explicitly supported and conditions are met
            const {
                isMobile
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useDepth3DAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDepth3DAnimation"])({
                itemRefs,
                containerRef,
                perspectiveRef,
                isEnabled: animationType === "depth-3d" && isGrid && supports3DAnimation && gridVariant === "uniform-all-items-equal"
            });
            // Use scale-rotate as fallback when depth-3d conditions aren't met
            const effectiveAnimationType = animationType === "depth-3d" && (isMobile || !isGrid || gridVariant !== "uniform-all-items-equal") ? "scale-rotate" : animationType;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
                "useCardAnimation.useGSAP": () => {
                    if (effectiveAnimationType === "none" || effectiveAnimationType === "depth-3d" || itemRefs.current.length === 0) return;
                    const items = itemRefs.current.filter({
                        "useCardAnimation.useGSAP.items": (el) => el !== null
                    }["useCardAnimation.useGSAP.items"]);
                    // Include bottomContent in animation if it exists
                    if (bottomContentRef.current) {
                        items.push(bottomContentRef.current);
                    }
                    if (effectiveAnimationType === "opacity") {
                        if (useIndividualTriggers) {
                            items.forEach({
                                "useCardAnimation.useGSAP": (item) => {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                                        opacity: 0
                                    }, {
                                        opacity: 1,
                                        duration: 1.25,
                                        ease: "sine",
                                        scrollTrigger: {
                                            trigger: item,
                                            start: "top 80%",
                                            toggleActions: "play none none none"
                                        }
                                    });
                                }
                            }["useCardAnimation.useGSAP"]);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(items, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 1.25,
                                stagger: 0.15,
                                ease: "sine",
                                scrollTrigger: {
                                    trigger: items[0],
                                    start: "top 80%",
                                    toggleActions: "play none none none"
                                }
                            });
                        }
                    } else if (effectiveAnimationType === "slide-up") {
                        items.forEach({
                            "useCardAnimation.useGSAP": (item, index) => {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                                    opacity: 0,
                                    yPercent: 15
                                }, {
                                    opacity: 1,
                                    yPercent: 0,
                                    duration: 1,
                                    delay: useIndividualTriggers ? 0 : index * 0.15,
                                    ease: "sine",
                                    scrollTrigger: {
                                        trigger: useIndividualTriggers ? item : items[0],
                                        start: "top 80%",
                                        toggleActions: "play none none none"
                                    }
                                });
                            }
                        }["useCardAnimation.useGSAP"]);
                    } else if (effectiveAnimationType === "scale-rotate") {
                        if (useIndividualTriggers) {
                            items.forEach({
                                "useCardAnimation.useGSAP": (item) => {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                                        scaleX: 0,
                                        rotate: 10
                                    }, {
                                        scaleX: 1,
                                        rotate: 0,
                                        duration: 1,
                                        ease: "power3",
                                        scrollTrigger: {
                                            trigger: item,
                                            start: "top 80%",
                                            toggleActions: "play none none none"
                                        }
                                    });
                                }
                            }["useCardAnimation.useGSAP"]);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(items, {
                                scaleX: 0,
                                rotate: 10
                            }, {
                                scaleX: 1,
                                rotate: 0,
                                duration: 1,
                                stagger: 0.15,
                                ease: "power3",
                                scrollTrigger: {
                                    trigger: items[0],
                                    start: "top 80%",
                                    toggleActions: "play none none none"
                                }
                            });
                        }
                    } else if (effectiveAnimationType === "blur-reveal") {
                        if (useIndividualTriggers) {
                            items.forEach({
                                "useCardAnimation.useGSAP": (item) => {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                                        opacity: 0,
                                        filter: "blur(10px)"
                                    }, {
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        duration: 1.2,
                                        ease: "power2.out",
                                        scrollTrigger: {
                                            trigger: item,
                                            start: "top 80%",
                                            toggleActions: "play none none none"
                                        }
                                    });
                                }
                            }["useCardAnimation.useGSAP"]);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(items, {
                                opacity: 0,
                                filter: "blur(10px)"
                            }, {
                                opacity: 1,
                                filter: "blur(0px)",
                                duration: 1.2,
                                stagger: 0.15,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: items[0],
                                    start: "top 80%",
                                    toggleActions: "play none none none"
                                }
                            });
                        }
                    }
                }
            }["useCardAnimation.useGSAP"], [
                effectiveAnimationType,
                itemCount,
                useIndividualTriggers
            ]);
            return {
                itemRefs,
                containerRef,
                perspectiveRef,
                bottomContentRef
            };
        };
        _s(useCardAnimation, "GsEgKiEVnnHbEv3S57BmkR9hBC8=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useDepth3DAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDepth3DAnimation"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
            ];
        });
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/layouts/grid/GridLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$grid$2f$gridConfigs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/layouts/grid/gridConfigs.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/hooks/useCardAnimation.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const GridLayout = ({
            children,
            itemCount,
            gridVariant = "uniform-all-items-equal",
            uniformGridCustomHeightClasses,
            gridRowsClassName,
            itemHeightClassesOverride,
            animationType,
            supports3DAnimation = false,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation,
            buttons,
            buttonAnimation,
            textboxLayout = "default",
            useInvertedBackground,
            bottomContent,
            className = "",
            containerClassName = "",
            gridClassName = "",
            textBoxClassName = "",
            titleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            ariaLabel
        }) => {
            _s();
            // Get config for this variant and item count
            const config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$grid$2f$gridConfigs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridConfigs"][gridVariant] ? .[itemCount];
            // Fallback to default uniform grid if no config
            const gridColsMap = {
                1: "md:grid-cols-1",
                2: "md:grid-cols-2",
                3: "md:grid-cols-3",
                4: "md:grid-cols-4"
            };
            const defaultGridCols = gridColsMap[itemCount] || "md:grid-cols-4";
            // Use config values or fallback
            const gridCols = config ? .gridCols || defaultGridCols;
            const gridRows = gridRowsClassName || config ? .gridRows || "";
            const itemClasses = config ? .itemClasses || [];
            const itemHeightClasses = itemHeightClassesOverride || config ? .itemHeightClasses || [];
            const heightClasses = uniformGridCustomHeightClasses || config ? .heightClasses || "";
            const itemWrapperClass = config ? .itemWrapperClass || "";
            const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
            const {
                itemRefs,
                containerRef,
                perspectiveRef,
                bottomContentRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"])({
                animationType,
                itemCount: childrenArray.length,
                isGrid: true,
                supports3DAnimation,
                gridVariant
            });
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: containerRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                "aria-label": ariaLabel,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto flex flex-col gap-6", containerClassName),
                    children: [
                        (title || titleSegments || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: title,
                            titleSegments: titleSegments,
                            description: description,
                            tag: tag,
                            tagIcon: tagIcon,
                            tagAnimation: tagAnimation,
                            buttons: buttons,
                            buttonAnimation: buttonAnimation,
                            textboxLayout: textboxLayout,
                            useInvertedBackground: useInvertedBackground,
                            textBoxClassName: textBoxClassName,
                            titleClassName: titleClassName,
                            titleImageWrapperClassName: titleImageWrapperClassName,
                            titleImageClassName: titleImageClassName,
                            descriptionClassName: descriptionClassName,
                            tagClassName: tagClassName,
                            buttonContainerClassName: buttonContainerClassName,
                            buttonClassName: buttonClassName,
                            buttonTextClassName: buttonTextClassName
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/grid/GridLayout.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: perspectiveRef,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("grid grid-cols-1 gap-6", gridCols, gridRows, gridClassName),
                            children: childrenArray.map((child, index) => {
                                const itemClass = itemClasses[index] || "";
                                const itemHeightClass = itemHeightClasses[index] || "";
                                const combinedClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(itemWrapperClass, itemClass, itemHeightClass, heightClasses);
                                return combinedClass ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("min-h-0", combinedClass),
                                    ref: (el) => {
                                        itemRefs.current[index] = el;
                                    },
                                    children: child
                                }, index, false, {
                                    fileName: "[project]/src/components/cardStack/layouts/grid/GridLayout.tsx",
                                    lineNumber: 121,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-h-0",
                                    ref: (el) => {
                                        itemRefs.current[index] = el;
                                    },
                                    children: child
                                }, index, false, {
                                    fileName: "[project]/src/components/cardStack/layouts/grid/GridLayout.tsx",
                                    lineNumber: 129,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/grid/GridLayout.tsx",
                            lineNumber: 107,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        bottomContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: bottomContentRef,
                            children: bottomContent
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/grid/GridLayout.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cardStack/layouts/grid/GridLayout.tsx",
                    lineNumber: 83,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cardStack/layouts/grid/GridLayout.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(GridLayout, "pyvj/nGgD8Ws5WxxX7Dz2lAlINA=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"]
            ];
        });
        _c = GridLayout;
        const __TURBOPACK__default__export__ = GridLayout;
        var _c;
        __turbopack_context__.k.register(_c, "GridLayout");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/hooks/useCardAnimation.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const AutoCarousel = ({
            children,
            uniformGridCustomHeightClasses,
            animationType,
            speed = 50,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation,
            buttons,
            buttonAnimation,
            textboxLayout = "default",
            useInvertedBackground,
            bottomContent,
            className = "",
            containerClassName = "",
            carouselClassName = "",
            itemClassName = "",
            textBoxClassName = "",
            titleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            ariaLabel,
            showTextBox = true,
            dualMarquee = false,
            topMarqueeDirection = "left",
            bottomCarouselClassName = "",
            marqueeGapClassName = ""
        }) => {
            _s();
            const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
            const heightClasses = uniformGridCustomHeightClasses || "min-h-80 2xl:min-h-90";
            const {
                itemRefs,
                bottomContentRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"])({
                animationType,
                itemCount: childrenArray.length,
                isGrid: false
            });
            // Bottom marquee direction is opposite of top
            const bottomMarqueeDirection = topMarqueeDirection === "left" ? "right" : "left";
            // Reverse order for bottom marquee to avoid alignment with top
            const bottomChildren = dualMarquee ? [
                ...childrenArray
            ].reverse() : [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                "aria-label": ariaLabel,
                "aria-live": "off",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full md:w-content-width mx-auto", containerClassName),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-col gap-6",
                            children: [
                                showTextBox && (title || titleSegments || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: title,
                                    titleSegments: titleSegments,
                                    description: description,
                                    tag: tag,
                                    tagIcon: tagIcon,
                                    tagAnimation: tagAnimation,
                                    buttons: buttons,
                                    buttonAnimation: buttonAnimation,
                                    textboxLayout: textboxLayout,
                                    useInvertedBackground: useInvertedBackground,
                                    textBoxClassName: textBoxClassName,
                                    titleClassName: titleClassName,
                                    titleImageWrapperClassName: titleImageWrapperClassName,
                                    titleImageClassName: titleImageClassName,
                                    descriptionClassName: descriptionClassName,
                                    tagClassName: tagClassName,
                                    buttonContainerClassName: buttonContainerClassName,
                                    buttonClassName: buttonClassName,
                                    buttonTextClassName: buttonTextClassName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full flex flex-col", marqueeGapClassName || "gap-6"),
                                    children: [
                                        /*#__PURE__*/
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("overflow-hidden w-full relative z-10 mask-padding-x", carouselClassName),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                gradient: false,
                                                speed: speed,
                                                direction: topMarqueeDirection,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(childrenArray, (child, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("min-h-0 flex-none w-carousel-item-3 xl:w-carousel-item-4 mb-1 mr-6", heightClasses, itemClassName),
                                                    ref: (el) => {
                                                        itemRefs.current[index] = el;
                                                    },
                                                    children: child
                                                }, index, false, {
                                                    fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                                                lineNumber: 105,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        dualMarquee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("overflow-hidden w-full relative z-10 mask-padding-x", bottomCarouselClassName || carouselClassName),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                gradient: false,
                                                speed: speed,
                                                direction: bottomMarqueeDirection,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(bottomChildren, (child, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("min-h-0 flex-none w-carousel-item-3 xl:w-carousel-item-4 mb-1 mr-6", heightClasses, itemClassName),
                                                    children: child
                                                }, `bottom-${index}`, false, {
                                                    fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                bottomContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: bottomContentRef,
                                    children: bottomContent
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                                    lineNumber: 135,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(AutoCarousel, "YsylbaFj1fBY49xN6zFwRY6OxMk=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"]
            ];
        });
        _c = AutoCarousel;
        const __TURBOPACK__default__export__ = AutoCarousel;
        var _c;
        __turbopack_context__.k.register(_c, "AutoCarousel");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/hooks/usePrevNextButtons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "usePrevNextButtons",
            () => usePrevNextButtons
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();;
        const usePrevNextButtons = (emblaApi) => {
            _s();
            const [prevBtnDisabled, setPrevBtnDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
            const [nextBtnDisabled, setNextBtnDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
            const onPrevButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "usePrevNextButtons.useCallback[onPrevButtonClick]": () => {
                    if (!emblaApi) return;
                    emblaApi.scrollPrev();
                }
            }["usePrevNextButtons.useCallback[onPrevButtonClick]"], [
                emblaApi
            ]);
            const onNextButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "usePrevNextButtons.useCallback[onNextButtonClick]": () => {
                    if (!emblaApi) return;
                    emblaApi.scrollNext();
                }
            }["usePrevNextButtons.useCallback[onNextButtonClick]"], [
                emblaApi
            ]);
            const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "usePrevNextButtons.useCallback[onSelect]": (emblaApi) => {
                    setPrevBtnDisabled(!emblaApi.canScrollPrev());
                    setNextBtnDisabled(!emblaApi.canScrollNext());
                }
            }["usePrevNextButtons.useCallback[onSelect]"], []);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "usePrevNextButtons.useEffect": () => {
                    if (!emblaApi) return;
                    onSelect(emblaApi);
                    emblaApi.on("reInit", onSelect).on("select", onSelect);
                    return ({
                        "usePrevNextButtons.useEffect": () => {
                            emblaApi.off("reInit", onSelect).off("select", onSelect);
                        }
                    })["usePrevNextButtons.useEffect"];
                }
            }["usePrevNextButtons.useEffect"], [
                emblaApi,
                onSelect
            ]);
            return {
                prevBtnDisabled,
                nextBtnDisabled,
                onPrevButtonClick,
                onNextButtonClick
            };
        };
        _s(usePrevNextButtons, "Bl2CJWm6boFT/rRhiKPKyJkYpeM=");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/hooks/useScrollProgress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "useScrollProgress",
            () => useScrollProgress
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();;
        const useScrollProgress = (emblaApi) => {
            _s();
            const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
            const onScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "useScrollProgress.useCallback[onScroll]": (emblaApi) => {
                    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
                    setScrollProgress(progress * 100);
                }
            }["useScrollProgress.useCallback[onScroll]"], []);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useScrollProgress.useEffect": () => {
                    if (!emblaApi) return;
                    onScroll(emblaApi);
                    emblaApi.on("reInit", onScroll).on("scroll", onScroll).on("slideFocus", onScroll);
                    return ({
                        "useScrollProgress.useEffect": () => {
                            emblaApi.off("reInit", onScroll).off("scroll", onScroll).off("slideFocus", onScroll);
                        }
                    })["useScrollProgress.useEffect"];
                }
            }["useScrollProgress.useEffect"], [
                emblaApi,
                onScroll
            ]);
            return scrollProgress;
        };
        _s(useScrollProgress, "2brNwmKPypE+4wrdEpGljepMkKA=");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$usePrevNextButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/hooks/usePrevNextButtons.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/hooks/useScrollProgress.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/hooks/useCardAnimation.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;;;
        const ButtonCarousel = ({
            children,
            uniformGridCustomHeightClasses,
            animationType,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation,
            buttons,
            buttonAnimation,
            textboxLayout = "default",
            useInvertedBackground,
            bottomContent,
            className = "",
            containerClassName = "",
            carouselClassName = "",
            carouselItemClassName = "",
            controlsClassName = "",
            textBoxClassName = "",
            titleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            ariaLabel
        }) => {
            _s();
            const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                dragFree: true
            });
            const {
                prevBtnDisabled,
                nextBtnDisabled,
                onPrevButtonClick,
                onNextButtonClick
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$usePrevNextButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevNextButtons"])(emblaApi);
            const scrollProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"])(emblaApi);
            const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
            const heightClasses = uniformGridCustomHeightClasses || "min-h-80 2xl:min-h-90";
            const {
                itemRefs,
                bottomContentRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"])({
                animationType,
                itemCount: childrenArray.length,
                isGrid: false
            });
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative px-[var(--width-0)] py-20 w-full", useInvertedBackground && "bg-foreground", className),
                "aria-label": ariaLabel,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full mx-auto", containerClassName),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-col gap-6",
                            children: [
                                (title || titleSegments || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-content-width mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: title,
                                        titleSegments: titleSegments,
                                        description: description,
                                        tag: tag,
                                        tagIcon: tagIcon,
                                        tagAnimation: tagAnimation,
                                        buttons: buttons,
                                        buttonAnimation: buttonAnimation,
                                        textboxLayout: textboxLayout,
                                        useInvertedBackground: useInvertedBackground,
                                        textBoxClassName: textBoxClassName,
                                        titleClassName: titleClassName,
                                        titleImageWrapperClassName: titleImageWrapperClassName,
                                        titleImageClassName: titleImageClassName,
                                        descriptionClassName: descriptionClassName,
                                        tagClassName: tagClassName,
                                        buttonContainerClassName: buttonContainerClassName,
                                        buttonClassName: buttonClassName,
                                        buttonTextClassName: buttonTextClassName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                        lineNumber: 77,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                    lineNumber: 76,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full flex flex-col gap-6"),
                                    children: [
                                        /*#__PURE__*/
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("overflow-hidden w-full relative z-10 flex cursor-grab", carouselClassName),
                                            ref: emblaRef,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-6 w-full",
                                                children: [
                                                    /*#__PURE__*/
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 w-carousel-padding"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(childrenArray, (child, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("min-h-0 flex-none select-none w-carousel-item-3 xl:w-carousel-item-4 mb-6", heightClasses, carouselItemClassName),
                                                        ref: (el) => {
                                                            itemRefs.current[index] = el;
                                                        },
                                                        children: child
                                                    }, index, false, {
                                                        fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                    /*#__PURE__*/
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 w-carousel-padding"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                lineNumber: 112,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                            lineNumber: 105,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full flex", controlsClassName),
                                            children: [
                                                /*#__PURE__*/
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 w-carousel-padding-controls"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center w-full",
                                                    children: [
                                                        /*#__PURE__*/
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-theme card relative h-2 w-50 overflow-hidden",
                                                            role: "progressbar",
                                                            "aria-label": "Carousel progress",
                                                            "aria-valuenow": Math.round(scrollProgress),
                                                            "aria-valuemin": 0,
                                                            "aria-valuemax": 100,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-foreground primary-button absolute! w-full top-0 bottom-0 -left-full rounded-theme",
                                                                style: {
                                                                    transform: `translate3d(${scrollProgress}%,0px,0px)`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: onPrevButtonClick,
                                                                    disabled: prevBtnDisabled,
                                                                    className: "secondary-button h-8 aspect-square flex items-center justify-center rounded-theme cursor-pointer transition-colors disabled:cursor-not-allowed disabled:opacity-50",
                                                                    type: "button",
                                                                    "aria-label": "Previous slide",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                        className: "h-[40%] w-auto aspect-square text-secondary-cta-text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: onNextButtonClick,
                                                                    disabled: nextBtnDisabled,
                                                                    className: "secondary-button h-8 aspect-square flex items-center justify-center rounded-theme cursor-pointer transition-colors disabled:cursor-not-allowed disabled:opacity-50",
                                                                    type: "button",
                                                                    "aria-label": "Next slide",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        className: "h-[40%] w-auto aspect-square text-secondary-cta-text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 w-carousel-padding-controls"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                            lineNumber: 127,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                bottomContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: bottomContentRef,
                                    className: "w-content-width mx-auto",
                                    children: bottomContent
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                                    lineNumber: 169,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ButtonCarousel, "Hn0IcagFEY8/1IkSvkgxoiF6Ji4=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$usePrevNextButtons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrevNextButtons"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"]
            ];
        });
        _c = ButtonCarousel;
        const __TURBOPACK__default__export__ = ButtonCarousel;
        var _c;
        __turbopack_context__.k.register(_c, "ButtonCarousel");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/CardStack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$grid$2f$GridLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/layouts/grid/GridLayout.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$carousels$2f$AutoCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/layouts/carousels/AutoCarousel.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$carousels$2f$ButtonCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/layouts/carousels/ButtonCarousel.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$grid$2f$gridConfigs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/layouts/grid/gridConfigs.ts [app-client] (ecmascript)");
        "use client";;;;;;;
        const CardStack = ({
            children,
            mode = "buttons",
            gridVariant = "uniform-all-items-equal",
            uniformGridCustomHeightClasses,
            gridRowsClassName,
            itemHeightClassesOverride,
            animationType,
            supports3DAnimation = false,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation,
            buttons,
            buttonAnimation,
            textboxLayout = "default",
            useInvertedBackground,
            carouselThreshold = 5,
            bottomContent,
            className = "",
            containerClassName = "",
            gridClassName = "",
            carouselClassName = "",
            carouselItemClassName = "",
            controlsClassName = "",
            textBoxClassName = "",
            titleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            ariaLabel = "Card stack"
        }) => {
            const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
            const itemCount = childrenArray.length;
            // Check if the current grid config has gridRows defined
            const gridConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$grid$2f$gridConfigs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridConfigs"][gridVariant] ? .[itemCount];
            const hasFixedGridRows = gridConfig && 'gridRows' in gridConfig && gridConfig.gridRows;
            // If grid has fixed row heights and we have uniformGridCustomHeightClasses,
            // we need to use min-h-0 on md+ to prevent conflicts
            let adjustedHeightClasses = uniformGridCustomHeightClasses;
            if (hasFixedGridRows && uniformGridCustomHeightClasses) {
                // Extract the mobile min-height and add md:min-h-0
                const mobileMinHeight = uniformGridCustomHeightClasses.split(' ')[0];
                adjustedHeightClasses = `${mobileMinHeight} md:min-h-0`;
            }
            // Use grid for items below threshold, carousel for items at or above threshold
            const useCarousel = itemCount >= carouselThreshold;
            // Grid layout for 1-4 items
            if (!useCarousel) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$grid$2f$GridLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    itemCount: itemCount,
                    gridVariant: gridVariant,
                    uniformGridCustomHeightClasses: adjustedHeightClasses,
                    gridRowsClassName: gridRowsClassName,
                    itemHeightClassesOverride: itemHeightClassesOverride,
                    animationType: animationType,
                    supports3DAnimation: supports3DAnimation,
                    title: title,
                    titleSegments: titleSegments,
                    description: description,
                    tag: tag,
                    tagIcon: tagIcon,
                    tagAnimation: tagAnimation,
                    buttons: buttons,
                    buttonAnimation: buttonAnimation,
                    textboxLayout: textboxLayout,
                    useInvertedBackground: useInvertedBackground,
                    bottomContent: bottomContent,
                    className: className,
                    containerClassName: containerClassName,
                    gridClassName: gridClassName,
                    textBoxClassName: textBoxClassName,
                    titleClassName: titleClassName,
                    titleImageWrapperClassName: titleImageWrapperClassName,
                    titleImageClassName: titleImageClassName,
                    descriptionClassName: descriptionClassName,
                    tagClassName: tagClassName,
                    buttonContainerClassName: buttonContainerClassName,
                    buttonClassName: buttonClassName,
                    buttonTextClassName: buttonTextClassName,
                    ariaLabel: ariaLabel,
                    children: childrenArray
                }, void 0, false, {
                    fileName: "[project]/src/components/cardStack/CardStack.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            }
            // Auto-scroll carousel for 5+ items
            if (mode === "auto") {
                // Convert depth-3d to scale-rotate for carousel (doesn't support 3D)
                const carouselAnimationType = animationType === "depth-3d" ? "scale-rotate" : animationType;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$carousels$2f$AutoCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    uniformGridCustomHeightClasses: adjustedHeightClasses,
                    animationType: carouselAnimationType,
                    title: title,
                    titleSegments: titleSegments,
                    description: description,
                    tag: tag,
                    tagIcon: tagIcon,
                    tagAnimation: tagAnimation,
                    buttons: buttons,
                    buttonAnimation: buttonAnimation,
                    textboxLayout: textboxLayout,
                    useInvertedBackground: useInvertedBackground,
                    bottomContent: bottomContent,
                    className: className,
                    containerClassName: containerClassName,
                    carouselClassName: carouselClassName,
                    textBoxClassName: textBoxClassName,
                    titleClassName: titleClassName,
                    titleImageWrapperClassName: titleImageWrapperClassName,
                    titleImageClassName: titleImageClassName,
                    descriptionClassName: descriptionClassName,
                    tagClassName: tagClassName,
                    buttonContainerClassName: buttonContainerClassName,
                    buttonClassName: buttonClassName,
                    buttonTextClassName: buttonTextClassName,
                    ariaLabel: ariaLabel,
                    children: childrenArray
                }, void 0, false, {
                    fileName: "[project]/src/components/cardStack/CardStack.tsx",
                    lineNumber: 114,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            }
            // Button-controlled carousel for 5+ items
            // Convert depth-3d to scale-rotate for carousel (doesn't support 3D)
            const carouselAnimationType = animationType === "depth-3d" ? "scale-rotate" : animationType;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$carousels$2f$ButtonCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                uniformGridCustomHeightClasses: adjustedHeightClasses,
                animationType: carouselAnimationType,
                title: title,
                titleSegments: titleSegments,
                description: description,
                tag: tag,
                tagIcon: tagIcon,
                tagAnimation: tagAnimation,
                buttons: buttons,
                buttonAnimation: buttonAnimation,
                textboxLayout: textboxLayout,
                useInvertedBackground: useInvertedBackground,
                bottomContent: bottomContent,
                className: className,
                containerClassName: containerClassName,
                carouselClassName: carouselClassName,
                carouselItemClassName: carouselItemClassName,
                controlsClassName: controlsClassName,
                textBoxClassName: textBoxClassName,
                titleClassName: titleClassName,
                titleImageWrapperClassName: titleImageWrapperClassName,
                titleImageClassName: titleImageClassName,
                descriptionClassName: descriptionClassName,
                tagClassName: tagClassName,
                buttonContainerClassName: buttonContainerClassName,
                buttonClassName: buttonClassName,
                buttonTextClassName: buttonTextClassName,
                ariaLabel: ariaLabel,
                children: childrenArray
            }, void 0, false, {
                fileName: "[project]/src/components/cardStack/CardStack.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = CardStack;
        const __TURBOPACK__default__export__ = CardStack;
        var _c;
        __turbopack_context__.k.register(_c, "CardStack");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/metrics/MetricCardOne.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStack.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const MetricCardItem = ({
            metric,
            shouldUseLightText,
            cardClassName = "",
            valueClassName = "",
            titleClassName = "",
            descriptionClassName = "",
            iconContainerClassName = "",
            iconClassName = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-full min-w-0 h-full card text-foreground rounded-theme-capped p-6 flex flex-col items-center justify-center gap-0", cardClassName),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 w-full text-9xl font-foreground font-medium leading-[1.1] truncate text-center", valueClassName),
                        style: {
                            backgroundImage: shouldUseLightText ? `linear-gradient(to bottom, var(--color-background) 0%, var(--color-background) 20%, transparent 72%, transparent 80%, transparent 100%)` : `linear-gradient(to bottom, var(--color-foreground) 0%, var(--color-foreground) 20%, transparent 72%, transparent 80%, transparent 100%)`,
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent"
                        },
                        children: metric.value
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/metrics/MetricCardOne.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-full z-1 mt-[calc(var(--text-4xl)*-0.75)] md:mt-[calc(var(--text-4xl)*-1.15)] text-4xl font-medium text-center truncate", shouldUseLightText ? "text-background" : "text-foreground", titleClassName),
                        children: metric.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/metrics/MetricCardOne.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative line-clamp-2 z-1 max-w-9/10 md:max-w-7/10 text-base text-center leading-[1.1] mt-2", shouldUseLightText ? "text-background" : "text-foreground", descriptionClassName),
                        children: metric.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/metrics/MetricCardOne.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute! z-1 left-6 bottom-6 h-10 aspect-square primary-button rounded-theme flex items-center justify-center", iconContainerClassName),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(metric.icon, {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-4/10 text-primary-cta-text", iconClassName)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/metrics/MetricCardOne.tsx",
                            lineNumber: 104,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/metrics/MetricCardOne.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/metrics/MetricCardOne.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = MetricCardItem;
        const MetricCardOne = ({
            metrics,
            carouselMode = "buttons",
            gridVariant,
            uniformGridCustomHeightClasses,
            animationType,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation = "opacity",
            buttons = [],
            buttonAnimation = "slide-up",
            textboxLayout,
            useInvertedBackground = false,
            ariaLabel = "Metrics section",
            className = "",
            containerClassName = "",
            cardClassName = "",
            textBoxTitleClassName = "",
            textBoxTitleImageWrapperClassName = "",
            textBoxTitleImageClassName = "",
            textBoxDescriptionClassName = "",
            valueClassName = "",
            titleClassName = "",
            descriptionClassName = "",
            iconContainerClassName = "",
            iconClassName = "",
            gridClassName = "",
            carouselClassName = "",
            controlsClassName = "",
            textBoxClassName = "",
            textBoxTagClassName = "",
            textBoxButtonContainerClassName = "",
            textBoxButtonClassName = "",
            textBoxButtonTextClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const shouldUseLightText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseInvertedText"])(useInvertedBackground, theme.cardStyle);
            const customUniformHeight = gridVariant === "uniform-all-items-equal" ? "min-h-70 2xl:min-h-80" : uniformGridCustomHeightClasses;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                useInvertedBackground: useInvertedBackground,
                mode: carouselMode,
                gridVariant: gridVariant,
                uniformGridCustomHeightClasses: customUniformHeight,
                animationType: animationType,
                supports3DAnimation: true,
                carouselThreshold: 4,
                carouselItemClassName: "w-carousel-item-3!",
                title: title,
                titleSegments: titleSegments,
                description: description,
                tag: tag,
                tagIcon: tagIcon,
                tagAnimation: tagAnimation,
                buttons: buttons,
                buttonAnimation: buttonAnimation,
                textboxLayout: textboxLayout,
                className: className,
                containerClassName: containerClassName,
                gridClassName: gridClassName,
                carouselClassName: carouselClassName,
                controlsClassName: controlsClassName,
                textBoxClassName: textBoxClassName,
                titleClassName: textBoxTitleClassName,
                titleImageWrapperClassName: textBoxTitleImageWrapperClassName,
                titleImageClassName: textBoxTitleImageClassName,
                descriptionClassName: textBoxDescriptionClassName,
                tagClassName: textBoxTagClassName,
                buttonContainerClassName: textBoxButtonContainerClassName,
                buttonClassName: textBoxButtonClassName,
                buttonTextClassName: textBoxButtonTextClassName,
                ariaLabel: ariaLabel,
                children: metrics.map((metric, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCardItem, {
                    metric: metric,
                    shouldUseLightText: shouldUseLightText,
                    cardClassName: cardClassName,
                    valueClassName: valueClassName,
                    titleClassName: titleClassName,
                    descriptionClassName: descriptionClassName,
                    iconContainerClassName: iconContainerClassName,
                    iconClassName: iconClassName
                }, `${metric.id}-${index}`, false, {
                    fileName: "[project]/src/components/sections/metrics/MetricCardOne.tsx",
                    lineNumber: 193,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/metrics/MetricCardOne.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(MetricCardOne, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
            ];
        });
        _c1 = MetricCardOne;
        const __TURBOPACK__default__export__ = MetricCardOne;
        var _c, _c1;
        __turbopack_context__.k.register(_c, "MetricCardItem");
        __turbopack_context__.k.register(_c1, "MetricCardOne");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;
        const FullWidthCarousel = ({
            children,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation,
            buttons,
            buttonAnimation,
            textboxLayout = "default",
            useInvertedBackground,
            className = "",
            containerClassName = "",
            carouselClassName = "",
            dotsClassName = "",
            textBoxClassName = "",
            titleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            ariaLabel = "Carousel section"
        }) => {
            _s();
            const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                loop: true,
                align: "center"
            });
            const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
            const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
            const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "FullWidthCarousel.useCallback[onSelect]": (emblaApi) => {
                    setSelectedIndex(emblaApi.selectedScrollSnap());
                }
            }["FullWidthCarousel.useCallback[onSelect]"], []);
            const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "FullWidthCarousel.useCallback[scrollTo]": (index) => {
                    if (!emblaApi) return;
                    emblaApi.scrollTo(index);
                }
            }["FullWidthCarousel.useCallback[scrollTo]"], [
                emblaApi
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "FullWidthCarousel.useEffect": () => {
                    if (!emblaApi) return;
                    onSelect(emblaApi);
                    emblaApi.on("select", onSelect).on("reInit", onSelect);
                    return ({
                        "FullWidthCarousel.useEffect": () => {
                            emblaApi.off("select", onSelect).off("reInit", onSelect);
                        }
                    })["FullWidthCarousel.useEffect"];
                }
            }["FullWidthCarousel.useEffect"], [
                emblaApi,
                onSelect
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "FullWidthCarousel.useEffect": () => {
                    if (!emblaApi) return;
                    const autoplay = setInterval({
                        "FullWidthCarousel.useEffect.autoplay": () => {
                            emblaApi.scrollNext();
                        }
                    }["FullWidthCarousel.useEffect.autoplay"], 5000);
                    return ({
                        "FullWidthCarousel.useEffect": () => clearInterval(autoplay)
                    })["FullWidthCarousel.useEffect"];
                }
            }["FullWidthCarousel.useEffect"], [
                emblaApi
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                "aria-label": ariaLabel,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full mx-auto flex flex-col gap-6", containerClassName),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-content-width mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: title,
                                titleSegments: titleSegments,
                                description: description,
                                tag: tag,
                                tagIcon: tagIcon,
                                tagAnimation: tagAnimation,
                                buttons: buttons,
                                buttonAnimation: buttonAnimation,
                                textboxLayout: textboxLayout,
                                useInvertedBackground: useInvertedBackground,
                                textBoxClassName: textBoxClassName,
                                titleClassName: titleClassName,
                                titleImageWrapperClassName: titleImageWrapperClassName,
                                titleImageClassName: titleImageClassName,
                                descriptionClassName: descriptionClassName,
                                tagClassName: tagClassName,
                                buttonContainerClassName: buttonContainerClassName,
                                buttonClassName: buttonClassName,
                                buttonTextClassName: buttonTextClassName
                            }, void 0, false, {
                                fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                            lineNumber: 85,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("overflow-hidden w-full relative z-10", carouselClassName),
                                ref: emblaRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(childrenArray, (child, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-none w-70 mr-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                                            isActive: selectedIndex === index
                                        }) : child
                                    }, index, false, {
                                        fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                                        lineNumber: 119,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                            lineNumber: 109,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex items-center justify-center gap-2", dotsClassName),
                            children: childrenArray.map((_, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: () => scrollTo(index),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative cursor-pointer h-2 rounded-theme bg-accent transition-all duration-300", selectedIndex === index ? "w-8 opacity-100" : "w-2 opacity-20"),
                                "aria-label": `Go to slide ${index + 1}`,
                                "aria-current": selectedIndex === index
                            }, index, false, {
                                fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                                lineNumber: 133,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                            lineNumber: 131,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                    lineNumber: 84,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(FullWidthCarousel, "uemGpgQYYp28r3UrPn+TCdBuszE=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ];
        });
        _c = FullWidthCarousel;
        const __TURBOPACK__default__export__ = FullWidthCarousel;
        var _c;
        __turbopack_context__.k.register(_c, "FullWidthCarousel");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/shared/TestimonialAuthor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        const TestimonialAuthor = ({
            name,
            subtitle,
            imageSrc,
            imageAlt,
            icon: Icon,
            useInvertedBackground,
            className = "",
            imageWrapperClassName = "",
            imageClassName = "",
            iconClassName = "",
            nameClassName = "",
            subtitleClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const shouldUseLightText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseInvertedText"])(useInvertedBackground, theme.cardStyle);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 flex items-center gap-4", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative shrink-0 h-11 w-fit aspect-square rounded-theme flex items-center justify-center primary-button overflow-hidden", imageWrapperClassName),
                        children: imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: imageSrc,
                            alt: imageAlt || name,
                            width: 800,
                            height: 800,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute inset-0 w-full h-full object-cover", imageClassName),
                            unoptimized: imageSrc.startsWith('http') || imageSrc.startsWith('//'),
                            "aria-hidden": imageAlt === ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/TestimonialAuthor.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)) : Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-1/2 w-1/2 text-primary-cta-text", iconClassName),
                            strokeWidth: 1
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/TestimonialAuthor.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-1/2 w-1/2 rounded-full bg-primary-cta-text/20", iconClassName),
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/TestimonialAuthor.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/TestimonialAuthor.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full min-w-0 flex flex-col gap-0",
                        children: [
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-2xl font-medium leading-[1.15] truncate", shouldUseLightText ? "text-background" : "text-foreground", nameClassName),
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/TestimonialAuthor.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-sm leading-[1.15]", shouldUseLightText ? "text-background" : "text-foreground", subtitleClassName),
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/TestimonialAuthor.tsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/TestimonialAuthor.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/TestimonialAuthor.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(TestimonialAuthor, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
            ];
        });
        _c = TestimonialAuthor;
        const __TURBOPACK__default__export__ = TestimonialAuthor;
        var _c;
        __turbopack_context__.k.register(_c, "TestimonialAuthor");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$carousels$2f$FullWidthCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/layouts/carousels/FullWidthCarousel.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/MediaContent.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Tag.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TestimonialAuthor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/TestimonialAuthor.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;
        const TestimonialCard = ({
            testimonial,
            useInvertedBackground,
            cardClassName = "",
            tagClassName = "",
            titleClassName = "",
            quoteClassName = "",
            authorClassName = "",
            avatarWrapperClassName = "",
            avatarClassName = "",
            nameClassName = "",
            dateClassName = "",
            imageClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const shouldUseLightText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseInvertedText"])(useInvertedBackground, theme.cardStyle);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("card h-full rounded-theme-capped overflow-hidden flex flex-col-reverse md:grid md:grid-cols-2 gap-0", cardClassName),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-1 p-6 md:p-10 flex flex-col gap-10 justify-between flex-1 md:flex-auto",
                        children: [
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 md:gap-6",
                                children: [
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        text: testimonial.tag,
                                        useInvertedBackground: useInvertedBackground,
                                        className: tagClassName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                                        lineNumber: 104,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-4xl font-medium leading-tight line-clamp-3", shouldUseLightText ? "text-background" : "text-foreground", titleClassName),
                                                children: testimonial.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                                                lineNumber: 111,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base md:text-lg leading-tight line-clamp-10", shouldUseLightText ? "text-background/75" : "text-foreground/75", quoteClassName),
                                                children: testimonial.quote
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                                                lineNumber: 114,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                                        lineNumber: 110,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TestimonialAuthor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: testimonial.name,
                                subtitle: testimonial.date,
                                imageSrc: testimonial.avatarSrc,
                                imageAlt: testimonial.avatarAlt,
                                useInvertedBackground: useInvertedBackground,
                                className: authorClassName,
                                imageWrapperClassName: avatarWrapperClassName,
                                imageClassName: avatarClassName,
                                nameClassName: nameClassName,
                                subtitleClassName: dateClassName
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                                lineNumber: 120,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-1 min-h-0 aspect-square",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            imageSrc: testimonial.imageSrc,
                            videoSrc: testimonial.videoSrc,
                            imageAlt: testimonial.imageAlt,
                            videoAriaLabel: testimonial.videoAriaLabel,
                            imageClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("!absolute inset-0 w-full h-full object-cover !rounded-none", imageClassName)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                            lineNumber: 135,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(TestimonialCard, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
            ];
        });
        _c = TestimonialCard;
        const TestimonialCardFive = ({
            testimonials,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation = "opacity",
            buttons = [],
            buttonAnimation = "slide-up",
            textboxLayout,
            useInvertedBackground = false,
            ariaLabel = "Testimonials section",
            className = "",
            containerClassName = "",
            cardClassName = "",
            textBoxTitleClassName = "",
            textBoxTitleImageWrapperClassName = "",
            textBoxTitleImageClassName = "",
            textBoxDescriptionClassName = "",
            cardTagClassName = "",
            cardTitleClassName = "",
            cardQuoteClassName = "",
            cardAuthorClassName = "",
            cardAvatarWrapperClassName = "",
            cardAvatarClassName = "",
            cardNameClassName = "",
            cardDateClassName = "",
            cardImageClassName = "",
            carouselClassName = "",
            dotsClassName = "",
            textBoxClassName = "",
            textBoxTagClassName = "",
            textBoxButtonContainerClassName = "",
            textBoxButtonClassName = "",
            textBoxButtonTextClassName = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$carousels$2f$FullWidthCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: title,
                titleSegments: titleSegments,
                description: description,
                tag: tag,
                tagIcon: tagIcon,
                tagAnimation: tagAnimation,
                buttons: buttons,
                buttonAnimation: buttonAnimation,
                textboxLayout: textboxLayout,
                useInvertedBackground: useInvertedBackground,
                className: className,
                containerClassName: containerClassName,
                carouselClassName: carouselClassName,
                dotsClassName: dotsClassName,
                textBoxClassName: textBoxClassName,
                titleClassName: textBoxTitleClassName,
                titleImageWrapperClassName: textBoxTitleImageWrapperClassName,
                titleImageClassName: textBoxTitleImageClassName,
                descriptionClassName: textBoxDescriptionClassName,
                tagClassName: textBoxTagClassName,
                buttonContainerClassName: textBoxButtonContainerClassName,
                buttonClassName: textBoxButtonClassName,
                buttonTextClassName: textBoxButtonTextClassName,
                ariaLabel: ariaLabel,
                children: testimonials.map((testimonial, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                    testimonial: testimonial,
                    useInvertedBackground: useInvertedBackground,
                    cardClassName: cardClassName,
                    tagClassName: cardTagClassName,
                    titleClassName: cardTitleClassName,
                    quoteClassName: cardQuoteClassName,
                    authorClassName: cardAuthorClassName,
                    avatarWrapperClassName: cardAvatarWrapperClassName,
                    avatarClassName: cardAvatarClassName,
                    nameClassName: cardNameClassName,
                    dateClassName: cardDateClassName,
                    imageClassName: cardImageClassName
                }, `${testimonial.id}-${index}`, false, {
                    fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                    lineNumber: 213,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/testimonial/TestimonialCardFive.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c1 = TestimonialCardFive;
        const __TURBOPACK__default__export__ = TestimonialCardFive;
        var _c, _c1;
        __turbopack_context__.k.register(_c, "TestimonialCard");
        __turbopack_context__.k.register(_c1, "TestimonialCardFive");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/layouts/timelines/TimelineCardStack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
        const TimelineCardStack = ({
            children,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation,
            buttons,
            buttonAnimation,
            textboxLayout,
            useInvertedBackground,
            className = "",
            containerClassName = "",
            textBoxClassName = "",
            titleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            ariaLabel = "Timeline section"
        }) => {
            _s();
            const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
            const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "TimelineCardStack.useEffect": () => {
                    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                        "TimelineCardStack.useEffect.ctx": () => {
                            itemRefs.current.forEach({
                                "TimelineCardStack.useEffect.ctx": (ref, position) => {
                                    if (!ref) return;
                                    const isLast = position === itemRefs.current.length - 1;
                                    const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                                        scrollTrigger: {
                                            trigger: ref,
                                            start: "center center",
                                            end: "+=100%",
                                            scrub: true
                                        }
                                    });
                                    timeline.set(ref, {
                                        willChange: "opacity"
                                    }).to(ref, {
                                        ease: "none",
                                        opacity: isLast ? 1 : 0
                                    });
                                }
                            }["TimelineCardStack.useEffect.ctx"]);
                        }
                    }["TimelineCardStack.useEffect.ctx"]);
                    return ({
                        "TimelineCardStack.useEffect": () => {
                            ctx.revert();
                        }
                    })["TimelineCardStack.useEffect"];
                }
            }["TimelineCardStack.useEffect"], [
                childrenArray.length
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative overflow-visible h-fit py-20 w-full", useInvertedBackground && "bg-foreground", className),
                "aria-label": ariaLabel,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto flex flex-col gap-6", containerClassName),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: title,
                            titleSegments: titleSegments,
                            description: description,
                            tag: tag,
                            tagIcon: tagIcon,
                            tagAnimation: tagAnimation,
                            buttons: buttons,
                            buttonAnimation: buttonAnimation,
                            textboxLayout: textboxLayout,
                            useInvertedBackground: useInvertedBackground,
                            textBoxClassName: textBoxClassName,
                            titleClassName: titleClassName,
                            titleImageWrapperClassName: titleImageWrapperClassName,
                            titleImageClassName: titleImageClassName,
                            descriptionClassName: descriptionClassName,
                            tagClassName: tagClassName,
                            buttonContainerClassName: buttonContainerClassName,
                            buttonClassName: buttonClassName,
                            buttonTextClassName: buttonTextClassName
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineCardStack.tsx",
                            lineNumber: 106,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-col gap-[var(--width-25)] md:gap-[6.25vh]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(childrenArray, (child, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el) => {
                                    itemRefs.current[index] = el;
                                },
                                className: "!sticky w-full card backdrop-blur-xs rounded-theme-capped h-[140vw] md:h-[75vh] top-[25vw] md:top-[12.5vh]",
                                children: child
                            }, index, false, {
                                fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineCardStack.tsx",
                                lineNumber: 129,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineCardStack.tsx",
                            lineNumber: 127,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineCardStack.tsx",
                    lineNumber: 105,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineCardStack.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(TimelineCardStack, "29fbZwPNm2tekerrOj5ZBz9H7LE=");
        _c = TimelineCardStack;
        const __TURBOPACK__default__export__ = TimelineCardStack;
        var _c;
        __turbopack_context__.k.register(_c, "TimelineCardStack");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/feature/FeatureCardNineteen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$timelines$2f$TimelineCardStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/layouts/timelines/TimelineCardStack.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/MediaContent.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Tag.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/Button.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buttonUtils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;;
        const FeatureCardNineteen = ({
            features,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation = "opacity",
            buttons = [],
            buttonAnimation = "slide-up",
            textboxLayout,
            useInvertedBackground = false,
            ariaLabel = "Feature section",
            className = "",
            containerClassName = "",
            textBoxTitleClassName = "",
            textBoxDescriptionClassName = "",
            textBoxClassName = "",
            textBoxTagClassName = "",
            textBoxButtonContainerClassName = "",
            textBoxButtonClassName = "",
            textBoxButtonTextClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            cardContentClassName = "",
            cardTagClassName = "",
            cardTitleClassName = "",
            cardDescriptionClassName = "",
            cardButtonClassName = "",
            cardButtonTextClassName = "",
            imageContainerClassName = "",
            imageClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const shouldUseLightText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseInvertedText"])(useInvertedBackground, theme.cardStyle);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$timelines$2f$TimelineCardStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: title,
                titleSegments: titleSegments,
                description: description,
                tag: tag,
                tagIcon: tagIcon,
                tagAnimation: tagAnimation,
                buttons: buttons,
                buttonAnimation: buttonAnimation,
                textboxLayout: textboxLayout,
                useInvertedBackground: useInvertedBackground,
                className: className,
                containerClassName: containerClassName,
                titleClassName: textBoxTitleClassName,
                descriptionClassName: textBoxDescriptionClassName,
                textBoxClassName: textBoxClassName,
                tagClassName: textBoxTagClassName,
                buttonContainerClassName: textBoxButtonContainerClassName,
                buttonClassName: textBoxButtonClassName,
                buttonTextClassName: textBoxButtonTextClassName,
                titleImageWrapperClassName: titleImageWrapperClassName,
                titleImageClassName: titleImageClassName,
                ariaLabel: ariaLabel,
                children: features.map((feature, index) => {
                    const stepNumber = String(index + 1).padStart(2, "0");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 w-full min-h-0 h-full flex flex-col md:flex-row justify-between overflow-hidden", cardContentClassName),
                        children: [
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-1/2 md:h-full flex flex-col justify-between p-8 md:p-12",
                                children: [
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 md:gap-6",
                                        children: [
                                            /*#__PURE__*/
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                text: feature.tag,
                                                useInvertedBackground: useInvertedBackground,
                                                className: cardTagClassName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                                lineNumber: 130,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-5xl md:text-7xl font-medium leading-none", shouldUseLightText ? "text-background" : "text-foreground", cardTitleClassName),
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                                lineNumber: 135,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                        lineNumber: 129,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "block md:hidden w-full h-px my-6 bg-accent/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                        lineNumber: 143,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2 md:gap-4",
                                        children: [
                                            /*#__PURE__*/
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-xl md:text-4xl font-medium", shouldUseLightText ? "text-background" : "text-foreground"),
                                                children: feature.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                                lineNumber: 145,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base md:text-lg leading-tight", shouldUseLightText ? "text-background/80" : "text-foreground/80", cardDescriptionClassName),
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            feature.buttons && feature.buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-4 max-md:justify-center mt-2",
                                                children: feature.buttons.slice(0, 2).map((button, buttonIndex) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonProps"])(button, buttonIndex, theme.defaultButtonVariant, cardButtonClassName, cardButtonTextClassName)
                                                }, `${button.text}-${buttonIndex}`, false, {
                                                    fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                                lineNumber: 159,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                        lineNumber: 144,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                lineNumber: 128,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-4/10 min-h-0 h-full flex flex-col gap-10 p-8 md:p-12",
                                children: [
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "hidden md:block text-8xl font-medium text-accent/20 self-end",
                                        children: stepNumber
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                        lineNumber: 171,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative max-h-full min-h-0 w-full h-full min-w-0 max-w-full md:aspect-[4/5] rounded-theme-capped overflow-hidden rotate-3", imageContainerClassName),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            imageSrc: feature.imageSrc,
                                            videoSrc: feature.videoSrc,
                                            imageAlt: feature.imageAlt || feature.title,
                                            videoAriaLabel: feature.videoAriaLabel || feature.title,
                                            imageClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full h-full object-cover", imageClassName)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                            lineNumber: 180,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                        lineNumber: 174,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                                lineNumber: 170,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                        lineNumber: 124,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/sections/feature/FeatureCardNineteen.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(FeatureCardNineteen, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
            ];
        });
        _c = FeatureCardNineteen;
        const __TURBOPACK__default__export__ = FeatureCardNineteen;
        var _c;
        __turbopack_context__.k.register(_c, "FeatureCardNineteen");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/hooks/useCardAnimation.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);;;;
        const TimelineProcessFlow = ({
            items,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation,
            buttons,
            buttonAnimation,
            textboxLayout,
            animationType,
            useInvertedBackground,
            ariaLabel = "Timeline process flow section",
            className = "",
            containerClassName = "",
            textBoxClassName = "",
            textBoxTitleClassName = "",
            textBoxDescriptionClassName = "",
            textBoxTagClassName = "",
            textBoxButtonContainerClassName = "",
            textBoxButtonClassName = "",
            textBoxButtonTextClassName = "",
            itemClassName = "",
            mediaWrapperClassName = "",
            numberClassName = "",
            contentWrapperClassName = "",
            gapClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = ""
        }) => {
            _s();
            const {
                itemRefs
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"])({
                animationType,
                itemCount: items.length,
                useIndividualTriggers: true
            });
            const [isMdScreen, setIsMdScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "TimelineProcessFlow.useEffect": () => {
                    const checkScreenSize = {
                        "TimelineProcessFlow.useEffect.checkScreenSize": () => {
                            setIsMdScreen(window.innerWidth >= 768);
                        }
                    }["TimelineProcessFlow.useEffect.checkScreenSize"];
                    checkScreenSize();
                    window.addEventListener('resize', checkScreenSize);
                    return ({
                        "TimelineProcessFlow.useEffect": () => window.removeEventListener('resize', checkScreenSize)
                    })["TimelineProcessFlow.useEffect"];
                }
            }["TimelineProcessFlow.useEffect"], []);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "TimelineProcessFlow.useEffect": () => {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(".timeline-line-fill", {
                        yPercent: -100
                    }, {
                        yPercent: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".timeline-container",
                            start: "top center",
                            end: "bottom center",
                            scrub: true
                        }
                    });
                    return ({
                        "TimelineProcessFlow.useEffect": () => {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                                "TimelineProcessFlow.useEffect": (trigger) => trigger.kill()
                            }["TimelineProcessFlow.useEffect"]);
                        }
                    })["TimelineProcessFlow.useEffect"];
                }
            }["TimelineProcessFlow.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                "aria-label": ariaLabel,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full flex flex-col gap-6", containerClassName),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-content-width mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: title,
                                titleSegments: titleSegments,
                                description: description,
                                tag: tag,
                                tagIcon: tagIcon,
                                tagAnimation: tagAnimation,
                                buttons: buttons,
                                buttonAnimation: buttonAnimation,
                                textboxLayout: textboxLayout,
                                useInvertedBackground: useInvertedBackground,
                                textBoxClassName: textBoxClassName,
                                titleClassName: textBoxTitleClassName,
                                descriptionClassName: textBoxDescriptionClassName,
                                tagClassName: textBoxTagClassName,
                                buttonContainerClassName: textBoxButtonContainerClassName,
                                buttonClassName: textBoxButtonClassName,
                                buttonTextClassName: textBoxButtonTextClassName,
                                titleImageWrapperClassName: titleImageWrapperClassName,
                                titleImageClassName: titleImageClassName
                            }, void 0, false, {
                                fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                            lineNumber: 130,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "timeline-container relative w-full",
                            children: [
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:hidden pointer-events-none absolute top-0 right-[var(--width-10)] w-px h-full z-10 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative timeline-line h-full bg-foreground overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "timeline-line-fill w-full h-full bg-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                    lineNumber: 155,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-content-width mx-auto flex flex-col gap-10 md:gap-20 md:p-6", isMdScreen && "card", "md:rounded-theme-capped", gapClassName),
                                    children: [
                                        /*#__PURE__*/
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:block pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-full z-0 overflow-hidden py-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative timeline-line h-full bg-foreground overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "timeline-line-fill w-full h-full bg-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                            lineNumber: 162,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        items.map((item, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            ref: (el) => {
                                                itemRefs.current[index] = el;
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-10 w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between", item.reverse && "flex-col md:flex-row-reverse", itemClassName),
                                            children: [
                                                /*#__PURE__*/
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-70 md:w-[calc(50%-var(--width-5))]", mediaWrapperClassName),
                                                    children: item.media
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute! top-1/2 right-[calc(var(--height-8)/-2)] md:right-auto md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 h-8 aspect-square rounded-theme flex items-center justify-center z-50 primary-button", numberClassName),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-primary-cta-text",
                                                        children: index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-70 md:w-[calc(50%-var(--width-5))]", contentWrapperClassName),
                                                    children: item.content
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                                    lineNumber: 160,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                            lineNumber: 153,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                    lineNumber: 129,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx",
                lineNumber: 121,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(TimelineProcessFlow, "gaUQB8bFcn/oyg/ChoH3tvFqLek=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"]
            ];
        });
        _c = TimelineProcessFlow;
        const __TURBOPACK__default__export__ = TimelineProcessFlow;
        var _c;
        __turbopack_context__.k.register(_c, "TimelineProcessFlow");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/feature/FeatureCardTen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$timelines$2f$TimelineProcessFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/layouts/timelines/TimelineProcessFlow.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/MediaContent.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const FeatureMedia = ({
            media,
            title,
            mediaCardClassName
        }) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("card rounded-theme-capped p-4 aspect-square md:aspect-[16/10]", mediaCardClassName),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                imageSrc: media.imageSrc,
                videoSrc: media.videoSrc,
                imageAlt: media.imageAlt || title,
                videoAriaLabel: media.videoAriaLabel || `${title} video`,
                imageClassName: "relative z-1 w-full h-full object-cover rounded-theme-capped"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
            lineNumber: 82,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
        _c = FeatureMedia;
        const FeatureContent = ({
            feature,
            useInvertedBackground,
            shouldUseLightText,
            featureTitleClassName,
            featureDescriptionClassName,
            listItemClassName,
            iconContainerClassName,
            iconClassName
        }) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                /*#__PURE__*/
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-xl md:text-4xl font-medium leading-[1.15]", useInvertedBackground && "text-background", featureTitleClassName),
                    children: feature.title
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base leading-[1.2]", useInvertedBackground ? "text-background/75" : "text-foreground/75", featureDescriptionClassName),
                    children: feature.description
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col m-0 mt-1 p-0 list-none gap-3",
                    children: feature.items.map((listItem, listIndex) => {
                        const Icon = listItem.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("shrink-0 h-9 aspect-square flex items-center justify-center rounded bg-background card", iconContainerClassName),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-4/10 w-4/10", shouldUseLightText ? "text-background" : "text-foreground", iconClassName),
                                        strokeWidth: 1.25
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base", useInvertedBackground ? "text-background/75" : "text-foreground/75", listItemClassName),
                                    children: listItem.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, listIndex, true, {
                            fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
            lineNumber: 114,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
        _c1 = FeatureContent;
        const FeatureCardTen = ({
            features,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation = "opacity",
            buttons = [],
            buttonAnimation = "slide-up",
            textboxLayout,
            animationType,
            useInvertedBackground = false,
            ariaLabel = "Feature section",
            className = "",
            containerClassName = "",
            textBoxClassName = "",
            textBoxTitleClassName = "",
            textBoxDescriptionClassName = "",
            textBoxTagClassName = "",
            textBoxButtonContainerClassName = "",
            textBoxButtonClassName = "",
            textBoxButtonTextClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            itemClassName = "",
            mediaWrapperClassName = "",
            mediaCardClassName = "",
            numberClassName = "",
            contentWrapperClassName = "",
            featureTitleClassName = "",
            featureDescriptionClassName = "",
            listItemClassName = "",
            iconContainerClassName = "",
            iconClassName = "",
            gapClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const shouldUseLightText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseInvertedText"])(useInvertedBackground, theme.cardStyle);
            const timelineItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "FeatureCardTen.useMemo[timelineItems]": () => features.map({
                    "FeatureCardTen.useMemo[timelineItems]": (feature) => ({
                        reverse: feature.reverse,
                        media: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureMedia, {
                            media: feature.media,
                            title: feature.title,
                            mediaCardClassName: mediaCardClassName
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                            lineNumber: 192,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureContent, {
                            feature: feature,
                            useInvertedBackground: useInvertedBackground,
                            shouldUseLightText: shouldUseLightText,
                            featureTitleClassName: featureTitleClassName,
                            featureDescriptionClassName: featureDescriptionClassName,
                            listItemClassName: listItemClassName,
                            iconContainerClassName: iconContainerClassName,
                            iconClassName: iconClassName
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                            lineNumber: 199,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    })
                }["FeatureCardTen.useMemo[timelineItems]"])
            }["FeatureCardTen.useMemo[timelineItems]"], [
                features,
                useInvertedBackground,
                shouldUseLightText,
                mediaCardClassName,
                featureTitleClassName,
                featureDescriptionClassName,
                listItemClassName,
                iconContainerClassName,
                iconClassName
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$timelines$2f$TimelineProcessFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                items: timelineItems,
                title: title,
                titleSegments: titleSegments,
                description: description,
                tag: tag,
                tagIcon: tagIcon,
                tagAnimation: tagAnimation,
                buttons: buttons,
                buttonAnimation: buttonAnimation,
                textboxLayout: textboxLayout,
                animationType: animationType,
                useInvertedBackground: useInvertedBackground,
                ariaLabel: ariaLabel,
                className: className,
                containerClassName: containerClassName,
                textBoxClassName: textBoxClassName,
                textBoxTitleClassName: textBoxTitleClassName,
                textBoxDescriptionClassName: textBoxDescriptionClassName,
                textBoxTagClassName: textBoxTagClassName,
                textBoxButtonContainerClassName: textBoxButtonContainerClassName,
                textBoxButtonClassName: textBoxButtonClassName,
                textBoxButtonTextClassName: textBoxButtonTextClassName,
                titleImageWrapperClassName: titleImageWrapperClassName,
                titleImageClassName: titleImageClassName,
                itemClassName: itemClassName,
                mediaWrapperClassName: mediaWrapperClassName,
                numberClassName: numberClassName,
                contentWrapperClassName: contentWrapperClassName,
                gapClassName: gapClassName
            }, void 0, false, {
                fileName: "[project]/src/components/sections/feature/FeatureCardTen.tsx",
                lineNumber: 225,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(FeatureCardTen, "UNgB90vJnVLYTBxiKEJHdhQ3m7g=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
            ];
        });
        _c2 = FeatureCardTen;
        const __TURBOPACK__default__export__ = FeatureCardTen;
        var _c, _c1, _c2;
        __turbopack_context__.k.register(_c, "FeatureMedia");
        __turbopack_context__.k.register(_c1, "FeatureContent");
        __turbopack_context__.k.register(_c2, "FeatureCardTen");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/contact/ContactText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2f$TextAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/text/TextAnimation.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/Button.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$HeroBackgrounds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/HeroBackgrounds.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buttonUtils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;
        const ContactText = ({
            text,
            animationType = "entrance-slide",
            buttons = [],
            background,
            useInvertedBackground = false,
            ariaLabel = "Contact section",
            className = "",
            containerClassName = "",
            contentClassName = "",
            textClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const shouldUseLightText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseInvertedText"])(useInvertedBackground, theme.cardStyle);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto relative z-10", containerClassName),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-full card rounded-theme-capped py-20 px-10 flex items-center justify-center", contentClassName),
                        children: [
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 w-full md:w-3/4 mx-auto flex flex-col items-center justify-center gap-8",
                                children: [
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2f$TextAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: animationType,
                                        text: text,
                                        variant: "words-trigger",
                                        as: "h2",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-4xl md:text-5xl font-medium text-center leading-[1.15]", shouldUseLightText && "text-background", textClassName)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/contact/ContactText.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    buttons && buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center", buttonContainerClassName),
                                        children: buttons.slice(0, 2).map((button, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonProps"])(button, index, theme.defaultButtonVariant, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("", buttonClassName), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base", buttonTextClassName))
                                        }, index, false, {
                                            fileName: "[project]/src/components/sections/contact/ContactText.tsx",
                                            lineNumber: 90,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/contact/ContactText.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/contact/ContactText.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 w-full h-full z-0 rounded-theme-capped overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$HeroBackgrounds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ...background
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/contact/ContactText.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/contact/ContactText.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/contact/ContactText.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/contact/ContactText.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/contact/ContactText.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ContactText, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
            ];
        });
        _c = ContactText;
        const __TURBOPACK__default__export__ = ContactText;
        var _c;
        __turbopack_context__.k.register(_c, "ContactText");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/shared/FillWidthText/useFillWidthText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => useFillWidthText
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var _s = __turbopack_context__.k.signature();
        'use client';;
        const BASE_FONT_SIZE = 100;
        // Shared canvas for text measurement (no DOM manipulation needed)
        let measureCanvas = null;

        function getMeasureCanvas() {
            if (typeof document === 'undefined') return null;
            if (!measureCanvas) {
                measureCanvas = document.createElement('canvas');
            }
            return measureCanvas.getContext('2d');
        }

        function useFillWidthText(text) {
            _s();
            const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const [fontSize, setFontSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(BASE_FONT_SIZE);
            const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            // Cache for computed styles
            const stylesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
            const calculateFontSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "useFillWidthText.useCallback[calculateFontSize]": () => {
                    if (!containerRef.current || !textRef.current) return;
                    const container = containerRef.current;
                    const textElement = textRef.current;
                    const containerWidth = container.offsetWidth;
                    if (containerWidth === 0) return;
                    // Cache styles on first calculation
                    if (!stylesRef.current) {
                        const computed = getComputedStyle(textElement);
                        stylesRef.current = {
                            fontFamily: computed.fontFamily,
                            fontWeight: computed.fontWeight
                        };
                    }
                    const ctx = getMeasureCanvas();
                    if (!ctx) return;
                    // Measure text using canvas (fast, no reflow)
                    const {
                        fontFamily,
                        fontWeight
                    } = stylesRef.current;
                    ctx.font = `${fontWeight} ${BASE_FONT_SIZE}px ${fontFamily}`;
                    const textWidth = ctx.measureText(text).width;
                    if (textWidth === 0) return;
                    const newFontSize = containerWidth / textWidth * BASE_FONT_SIZE;
                    setFontSize(newFontSize);
                    setIsReady(true);
                }
            }["useFillWidthText.useCallback[calculateFontSize]"], [
                text
            ]);
            // Initial calculation
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useFillWidthText.useEffect": () => {
                    const rafId = requestAnimationFrame({
                        "useFillWidthText.useEffect.rafId": () => {
                            calculateFontSize();
                        }
                    }["useFillWidthText.useEffect.rafId"]);
                    return ({
                        "useFillWidthText.useEffect": () => cancelAnimationFrame(rafId)
                    })["useFillWidthText.useEffect"];
                }
            }["useFillWidthText.useEffect"], [
                text,
                calculateFontSize
            ]);
            // Debounced resize observer
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useFillWidthText.useEffect": () => {
                    if (!containerRef.current) return;
                    let rafId = null;
                    const resizeObserver = new ResizeObserver({
                        "useFillWidthText.useEffect": () => {
                            // Debounce using RAF - only calculate once per frame
                            if (rafId) cancelAnimationFrame(rafId);
                            rafId = requestAnimationFrame({
                                "useFillWidthText.useEffect": () => {
                                    calculateFontSize();
                                }
                            }["useFillWidthText.useEffect"]);
                        }
                    }["useFillWidthText.useEffect"]);
                    resizeObserver.observe(containerRef.current);
                    return ({
                        "useFillWidthText.useEffect": () => {
                            if (rafId) cancelAnimationFrame(rafId);
                            resizeObserver.disconnect();
                        }
                    })["useFillWidthText.useEffect"];
                }
            }["useFillWidthText.useEffect"], [
                calculateFontSize
            ]);
            // Reset style cache if text changes (might have different element)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "useFillWidthText.useEffect": () => {
                    stylesRef.current = null;
                }
            }["useFillWidthText.useEffect"], [
                text
            ]);
            return {
                containerRef,
                textRef,
                fontSize,
                isReady
            };
        }
        _s(useFillWidthText, "kEIWc5+wORzXJssJS1RN5BLNdZM=");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/shared/FillWidthText/FillWidthText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__,
            "hasDescenders",
            () => hasDescenders
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FillWidthText$2f$useFillWidthText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/FillWidthText/useFillWidthText.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;
        // Lowercase characters that have descenders (extend below the baseline)
        // Uppercase versions (G, J, P, Q, Y) don't have descenders
        const DESCENDER_CHARS = /[gjpqy]/;
        const hasDescenders = (text) => DESCENDER_CHARS.test(text);
        const FillWidthText = ({
            children,
            as: Component = "h1",
            className = ""
        }) => {
            _s();
            const {
                containerRef,
                textRef,
                fontSize,
                isReady
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FillWidthText$2f$useFillWidthText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children);
            // Use tighter line height if text has no descender characters
            const lineHeight = DESCENDER_CHARS.test(children) ? 1.2 : 0.8;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "w-full min-w-0 flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
                    ref: textRef,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("whitespace-nowrap transition-opacity duration-150", isReady ? "opacity-100" : "opacity-0", className),
                    style: {
                        fontSize: `${fontSize}px`,
                        lineHeight
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/FillWidthText/FillWidthText.tsx",
                    lineNumber: 36,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/FillWidthText/FillWidthText.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(FillWidthText, "mZqxMzuil5wP18U9B/6lE5dhnzA=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FillWidthText$2f$useFillWidthText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ];
        });
        _c = FillWidthText;
        const __TURBOPACK__default__export__ = FillWidthText;
        var _c;
        __turbopack_context__.k.register(_c, "FillWidthText");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/shared/SocialLinks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;
        const SocialLinks = ({
            socialLinks,
            className = "",
            iconClassName = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 flex items-center gap-4", className),
                children: socialLinks.map((social, index) => {
                    const SocialIcon = social.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: social.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": social.ariaLabel,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("card h-10 w-auto aspect-square rounded-theme flex items-center justify-center", iconClassName),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                            className: "relative z-1 h-45/100 w-45/100 text-foreground",
                            strokeWidth: 1.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/SocialLinks.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/src/components/shared/SocialLinks.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SocialLinks.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = SocialLinks;
        const __TURBOPACK__default__export__ = SocialLinks;
        var _c;
        __turbopack_context__.k.register(_c, "SocialLinks");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/footer/FooterCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FillWidthText$2f$FillWidthText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/FillWidthText/FillWidthText.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SocialLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SocialLinks.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;;;;
        const FooterCard = ({
            logoSrc,
            logoAlt = "",
            logoText,
            copyrightText = `© 2025 | cypher`,
            socialLinks,
            ariaLabel = "Site footer",
            className = "",
            containerClassName = "",
            cardClassName = "",
            logoClassName = "",
            logoImageClassName = "",
            dividerClassName = "",
            copyrightContainerClassName = "",
            copyrightTextClassName = "",
            socialContainerClassName = "",
            socialIconClassName = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                role: "contentinfo",
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-full h-fit py-20", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-content-width h-fit mx-auto card rounded-theme-capped px-10 pb-6 flex flex-col", containerClassName, cardClassName),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 w-full", logoClassName),
                            children: logoSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: logoSrc,
                                alt: logoAlt,
                                width: 1920,
                                height: 200,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full h-auto my-10", logoImageClassName),
                                unoptimized: logoSrc.startsWith('http') || logoSrc.startsWith('//')
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/footer/FooterCard.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FillWidthText$2f$FillWidthText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FillWidthText$2f$FillWidthText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasDescenders"])(logoText ? ? "") && "my-10"),
                                children: logoText
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/footer/FooterCard.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/footer/FooterCard.tsx",
                            lineNumber: 53,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 w-full h-px bg-accent/20 mb-6", dividerClassName)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/footer/FooterCard.tsx",
                            lineNumber: 70,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 w-full flex flex-col md:flex-row items-center justify-between gap-4", copyrightContainerClassName),
                            children: [
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-accent/75 text-sm", copyrightTextClassName),
                                    children: copyrightText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/footer/FooterCard.tsx",
                                    lineNumber: 75,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                socialLinks && socialLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SocialLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    socialLinks: socialLinks,
                                    className: socialContainerClassName,
                                    iconClassName: socialIconClassName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/footer/FooterCard.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/footer/FooterCard.tsx",
                            lineNumber: 72,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/footer/FooterCard.tsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/footer/FooterCard.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = FooterCard;
        const __TURBOPACK__default__export__ = FooterCard;
        var _c;
        __turbopack_context__.k.register(_c, "FooterCard");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => WebAgencyThemePage
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$hero$2f$HeroSplitKpi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/hero/HeroSplitKpi.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$about$2f$TextAbout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/about/TextAbout.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavbarLayoutFloatingInline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/NavbarLayoutFloatingInline.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$metrics$2f$MetricCardOne$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/metrics/MetricCardOne.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$testimonial$2f$TestimonialCardFive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/testimonial/TestimonialCardFive.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureCardNineteen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/feature/FeatureCardNineteen.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureCardTen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/feature/FeatureCardTen.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$contact$2f$ContactText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/contact/ContactText.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$footer$2f$FooterCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/footer/FooterCard.tsx [app-client] (ecmascript)");
        "use client";;;;;;;;;;;;;;;

        function WebAgencyThemePage() {
            const navItems = [{
                    name: "Home",
                    id: "home"
                },
                {
                    name: "Metodo",
                    id: "services"
                },
                {
                    name: "Sistema",
                    id: "work"
                },
                {
                    name: "Contatti",
                    id: "contact"
                }
            ];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                defaultButtonVariant: "icon-arrow",
                defaultTextAnimation: "entrance-slide",
                borderRadius: "pill",
                contentWidth: "medium",
                sizing: "medium",
                background: "aurora",
                cardStyle: "layered-gradient",
                primaryButtonStyle: "gradient",
                secondaryButtonStyle: "glass",
                headingFontWeight: "medium",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    root: true,
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavbarLayoutFloatingInline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            navItems: navItems,
                            brandName: "Studio",
                            button: {
                                text: "Contatti",
                                href: "#contact"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 39,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$hero$2f$HeroSplitKpi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            background: {
                                variant: "radial-gradient"
                            },
                            tag: "Advanced Scaling System · Padova",
                            tagIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                            title: "Costruiamo sistemi di acquisizione clienti.",
                            description: "Non vendiamo gestione di pubblicità. Strategia, advertising performance e AI in un unico sistema — con compenso legato alle vendite che generiamo.",
                            enableKpiAnimation: true,
                            kpis: [{
                                    value: "150+",
                                    label: "Giorni Delivered"
                                },
                                {
                                    value: "98%",
                                    label: "Client Performance fee"
                                },
                                {
                                    value: "12+",
                                    label: "Proprietà tua Experience"
                                }
                            ],
                            buttons: [{
                                    text: "Prenota l'audit",
                                    href: "#contact"
                                },
                                {
                                    text: "Vedi il metodo",
                                    href: "#work"
                                }
                            ],
                            avatars: [{
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero2.webp",
                                    alt: "Team member 1"
                                },
                                {
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero3.webp",
                                    alt: "Team member 2"
                                },
                                {
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero4.webp",
                                    alt: "Team member 3"
                                }
                            ],
                            avatarText: "Trusted by startups and Fortune 500 companies",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero1.webp",
                            imageAlt: "Web design showcase",
                            mediaAnimation: "slide-up",
                            showMarqueeCard: false,
                            marqueeItems: [{
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                },
                                {
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                },
                                {
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                },
                                {
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                },
                                {
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                },
                                {
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                },
                                {
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                },
                                {
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                },
                                {
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                },
                                {
                                    type: "image",
                                    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/logo.svg",
                                    alt: "Logo"
                                }
                            ],
                            marqueeClassName: "md:mb-5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 44,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$about$2f$TextAbout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "We craft digital experiences that captivate audiences and drive meaningful results for ambitious brands worldwide.",
                            buttons: [{
                                    text: "Our Process",
                                    href: "#process"
                                },
                                {
                                    text: "Chi c'è dietro",
                                    href: "#team"
                                }
                            ],
                            useInvertedBackground: false
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 90,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureCardNineteen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Il sistema",
                            description: "A proven methodology that delivers results consistently across every project.",
                            tag: "What We Do",
                            tagIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                            features: [{
                                    tag: "Service 01",
                                    title: "01",
                                    subtitle: "Cypher Engine",
                                    description: "Your website should be more than functional—it should resonate. We craft bespoke digital experiences that merge innovation with creativity, delivering intuitive, visually stunning platforms that captivate audiences, reflect your brand's essence, and adapt to future opportunities.",
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process1.webp",
                                    imageAlt: "Web development"
                                },
                                {
                                    tag: "Service 02",
                                    title: "02",
                                    subtitle: "Marketing",
                                    description: "Impactful marketing goes beyond visibility—it creates connections. We fuse creativity with analytics to craft adaptive strategies that engage your audience authentically, keeping your brand relevant and resonant while delivering measurable results in an ever-evolving digital world.",
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process2.webp",
                                    imageAlt: "Marketing"
                                },
                                {
                                    tag: "Service 03",
                                    title: "03",
                                    subtitle: "Design",
                                    description: "Design is your brand's voice. We craft visuals and layouts that communicate purpose, inspire trust, and connect emotionally. By harmonizing artistry with intent, our designs transform user interactions into meaningful, memorable experiences that align with your identity.",
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process3.webp",
                                    imageAlt: "Design"
                                },
                                {
                                    tag: "Service 04",
                                    title: "04",
                                    subtitle: "Software Development",
                                    description: "We build custom software that evolves with your business. By addressing unique challenges, our tailored solutions streamline workflows, eliminate inefficiencies, and foster innovation—empowering you to scale, adapt, and maintain a competitive edge in an ever-changing landscape.",
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/process/process4.webp",
                                    imageAlt: "Software development"
                                }
                            ],
                            textboxLayout: "default",
                            useInvertedBackground: false
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 98,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$metrics$2f$MetricCardOne$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Results That Speak",
                            description: "Our track record of delivering exceptional digital solutions for clients across industries.",
                            tag: "Our Impact",
                            tagIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                            metrics: [{
                                    id: "clients",
                                    value: "200+",
                                    title: "Happy Clients",
                                    description: "Businesses transformed through our digital solutions",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                                },
                                {
                                    id: "projects",
                                    value: "500+",
                                    title: "Giorni",
                                    description: "Websites and apps launched worldwide",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                                },
                                {
                                    id: "performance",
                                    value: "5-10%",
                                    title: "Uptime",
                                    description: "Reliable performance for all our projects",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
                                }
                            ],
                            gridVariant: "uniform-all-items-equal",
                            animationType: "depth-3d",
                            textboxLayout: "default",
                            useInvertedBackground: false
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 140,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$testimonial$2f$TestimonialCardFive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "What Our Clients Say",
                            description: "Hear from the brands we've helped transform through innovative digital solutions.",
                            tag: "Testimonials",
                            tagIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                            testimonials: [{
                                    id: "1",
                                    name: "Sarah Johnson",
                                    date: "CEO, TechStart",
                                    title: "Transformed Our Digital Presence",
                                    quote: "Working with Studio was a game-changer for our startup. They delivered a website that not only looks stunning but converts visitors into customers at twice our previous rate.",
                                    tag: "Cypher Engine",
                                    avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero2.webp",
                                    avatarAlt: "Sarah Johnson",
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero2.webp",
                                    imageAlt: "TechStart project showcase"
                                },
                                {
                                    id: "2",
                                    name: "Michael Chen",
                                    date: "Founder, GrowthLab",
                                    title: "Exceeded All Expectations",
                                    quote: "The team's attention to detail and creative vision brought our brand to life in ways we never imagined. Our new platform has received incredible feedback from users.",
                                    tag: "Brand Design",
                                    avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero3.webp",
                                    avatarAlt: "Michael Chen",
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero3.webp",
                                    imageAlt: "GrowthLab project showcase"
                                },
                                {
                                    id: "3",
                                    name: "Emily Rodriguez",
                                    date: "Marketing Director, Elevate",
                                    title: "A True Partnership",
                                    quote: "From strategy to execution, Studio understood our vision and delivered beyond what we hoped for. The new website has become our most powerful marketing asset.",
                                    tag: "E-commerce",
                                    avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero4.webp",
                                    avatarAlt: "Emil Svenson",
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero4.webp",
                                    imageAlt: "Elevate project showcase"
                                },
                                {
                                    id: "4",
                                    name: "David Park",
                                    date: "CTO, InnovateCo",
                                    title: "Technical Excellence",
                                    quote: "The development team delivered a high-performance application that handles our complex requirements with ease. Their technical expertise is unmatched in the industry.",
                                    tag: "Web Application",
                                    avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero5.webp",
                                    avatarAlt: "David Park",
                                    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/hero/hero5.webp",
                                    imageAlt: "InnovateCo project showcase"
                                }
                            ],
                            textboxLayout: "default",
                            useInvertedBackground: false
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 155,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$feature$2f$FeatureCardTen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            tag: "How We Work",
                            tagIcon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                            title: "Our Process",
                            description: "A structured approach that turns your vision into results, every step of the way.",
                            textboxLayout: "default",
                            animationType: "slide-up",
                            useInvertedBackground: false,
                            features: [{
                                    title: "Discovery & Strategy",
                                    description: "We start by understanding your goals, audience, and market to build a roadmap tailored to your business.",
                                    media: {
                                        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/services/how1.webp",
                                        imageAlt: "Discovery and strategy"
                                    },
                                    reverse: false,
                                    items: [{
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
                                            text: "In-depth research and audits"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                            text: "Clear goals and KPIs defined"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                                            text: "Custom project roadmap"
                                        }
                                    ]
                                },
                                {
                                    title: "Design & Prototyping",
                                    description: "We translate strategy into visual concepts, iterating with you until every detail feels right.",
                                    media: {
                                        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/services/how2.webp",
                                        imageAlt: "Design and prototyping"
                                    },
                                    reverse: true,
                                    items: [{
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
                                            text: "Wireframes and mockups"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                                            text: "Interactive prototypes"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                                            text: "Client feedback loops"
                                        }
                                    ]
                                },
                                {
                                    title: "Build & Launch",
                                    description: "We develop, test, and deploy your project with precision, ensuring a smooth launch and measurable impact.",
                                    media: {
                                        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency/services/how3.webp",
                                        imageAlt: "Build and launch"
                                    },
                                    reverse: false,
                                    items: [{
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                            text: "Agile development sprints"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                                            text: "QA testing and optimization"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                                            text: "Launch support and analytics"
                                        }
                                    ]
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 213,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$contact$2f$ContactText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "Ready to transform your digital presence? Let's create something extraordinary together.",
                            buttons: [{
                                    text: "Start a Project",
                                    href: "#contact"
                                },
                                {
                                    text: "Schedule a Call",
                                    href: "#call"
                                }
                            ],
                            background: {
                                variant: "canvas-reveal"
                            },
                            useInvertedBackground: false
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 257,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$footer$2f$FooterCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            logoText: "Studio",
                            copyrightText: "© 2025 Studio. All rights reserved.",
                            socialLinks: [{
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Email"],
                                    href: "https://twitter.com",
                                    ariaLabel: "Follow us on Twitter"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Email"],
                                    href: "https://instagram.com",
                                    ariaLabel: "Follow us on Instagram"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                    href: "https://linkedin.com",
                                    ariaLabel: "Connect on LinkedIn"
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 266,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 38,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this);
        }
        _c = WebAgencyThemePage;
        var _c;
        __turbopack_context__.k.register(_c, "WebAgencyThemePage");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
]);

//# sourceMappingURL=src_42b38388._.js.map