(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
    "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const ArrowCarousel = ({
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
                "ArrowCarousel.useCallback[onSelect]": (emblaApi) => {
                    setSelectedIndex(emblaApi.selectedScrollSnap());
                }
            }["ArrowCarousel.useCallback[onSelect]"], []);
            const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "ArrowCarousel.useCallback[scrollPrev]": () => emblaApi ? .scrollPrev()
            }["ArrowCarousel.useCallback[scrollPrev]"], [
                emblaApi
            ]);
            const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
                "ArrowCarousel.useCallback[scrollNext]": () => emblaApi ? .scrollNext()
            }["ArrowCarousel.useCallback[scrollNext]"], [
                emblaApi
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "ArrowCarousel.useEffect": () => {
                    if (!emblaApi) return;
                    onSelect(emblaApi);
                    emblaApi.on("select", onSelect).on("reInit", onSelect);
                    return ({
                        "ArrowCarousel.useEffect": () => {
                            emblaApi.off("select", onSelect).off("reInit", onSelect);
                        }
                    })["ArrowCarousel.useEffect"];
                }
            }["ArrowCarousel.useEffect"], [
                emblaApi,
                onSelect
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
                                fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                            lineNumber: 71,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full",
                            children: [
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("overflow-hidden w-full relative z-10 mask-fade-x", carouselClassName),
                                    ref: emblaRef,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex w-full",
                                        children: childrenArray.map((child, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-none w-60 md:w-40 mr-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("transition-all duration-500 ease-out", selectedIndex === index ? "opacity-100 scale-100" : "opacity-70 scale-90"),
                                                children: child
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                                lineNumber: 109,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, index, false, {
                                            fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                            lineNumber: 105,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                    lineNumber: 96,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute inset-y-0 w-content-width mx-auto left-0 right-0 flex items-center justify-between pointer-events-none z-10", controlsClassName),
                                    children: [
                                        /*#__PURE__*/
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: scrollPrev,
                                            className: "pointer-events-auto primary-button h-8 w-auto aspect-square rounded-theme flex items-center justify-center cursor-pointer",
                                            "aria-label": "Previous slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-4/10 h-4/10 text-primary-cta-text"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                                lineNumber: 126,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                            lineNumber: 121,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: scrollNext,
                                            className: "pointer-events-auto primary-button h-8 w-auto aspect-square rounded-theme flex items-center justify-center cursor-pointer",
                                            "aria-label": "Next slide",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-4/10 h-4/10 text-primary-cta-text"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                                lineNumber: 133,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                            lineNumber: 128,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                                    lineNumber: 120,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                            lineNumber: 95,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(ArrowCarousel, "8MFKt17fOofmY1opbbsfMNjjyqI=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ];
        });
        _c = ArrowCarousel;
        const __TURBOPACK__default__export__ = ArrowCarousel;
        var _c;
        __turbopack_context__.k.register(_c, "ArrowCarousel");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
]);

//# sourceMappingURL=src_components_cardStack_ad62121a._.js.map