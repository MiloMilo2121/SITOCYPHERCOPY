(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
    "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Textbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Textbox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/MediaContent.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$HeroBackgrounds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/HeroBackgrounds.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$LogoMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/LogoMarquee.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;;;;;
        const HeroSplitDoubleCarousel = ({
            title,
            description,
            background = {
                variant: "plain"
            },
            tag,
            tagIcon,
            tagAnimation = "opacity",
            buttons = [],
            buttonAnimation = "slide-up",
            avatars,
            avatarText,
            leftCarouselItems,
            rightCarouselItems,
            ariaLabel = "Hero section",
            carouselPosition = "right",
            className = "",
            containerClassName = "",
            textBoxClassName = "",
            titleClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = "",
            carouselWrapperClassName = "",
            carouselColumnClassName = "",
            carouselItemClassName = "",
            carouselImageClassName = "",
            avatarGroupClassName = "",
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
            const duplicatedLeftItems = [
                ...leftCarouselItems,
                ...leftCarouselItems,
                ...leftCarouselItems,
                ...leftCarouselItems
            ];
            const duplicatedRightItems = [
                ...rightCarouselItems,
                ...rightCarouselItems,
                ...rightCarouselItems,
                ...rightCarouselItems
            ];
            const renderColumn = (items, direction) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex-1 h-full min-h-0 overflow-hidden mask-fade-y-medium", carouselColumnClassName),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col gap-4 px-px", direction === "up" ? "animate-marquee-vertical" : "animate-marquee-vertical-reverse"),
                    children: items.map((item, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative card aspect-square rounded-theme-capped p-1 overflow-hidden flex-shrink-0", carouselItemClassName),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full w-full rounded-[calc(var(--radius-theme-capped)*0.92)] overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                imageSrc: item.imageSrc,
                                videoSrc: item.videoSrc,
                                imageAlt: item.imageAlt || "",
                                videoAriaLabel: item.videoAriaLabel || "Carousel video",
                                imageClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-full w-full object-cover rounded-none!", carouselImageClassName)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                    lineNumber: 123,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                lineNumber: 122,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
            const carouselContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/2 overflow-hidden h-100 md:h-screen md:py-hero-page-padding",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full h-full overflow-hidden", carouselWrapperClassName),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex gap-4",
                        children: [
                            renderColumn(duplicatedLeftItems, "up"),
                            renderColumn(duplicatedRightItems, "down")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                    lineNumber: 146,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                lineNumber: 145,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-full h-fit py-hero-page-padding md:py-0 md:h-svh flex items-center", className),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$HeroBackgrounds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...background
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                        lineNumber: 165,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto flex flex-col md:flex-row gap-10 md:gap-15 items-center relative z-10", containerClassName),
                        children: [
                            carouselPosition === "left" && carouselContent,
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
                                        fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                                        lineNumber: 171,
                                        columnNumber: 11
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
                                        descriptionClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("max-w-8/10 text-lg md:text-xl leading-tight text-center md:text-left", descriptionClassName),
                                        tagClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName),
                                        buttonContainerClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center mt-2", buttonContainerClassName),
                                        buttonClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("", buttonClassName),
                                        buttonTextClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base", buttonTextClassName),
                                        center: false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                                        lineNumber: 192,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                                lineNumber: 169,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            carouselPosition === "right" && carouselContent
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                        lineNumber: 166,
                        columnNumber: 7
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
                        fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/HeroSplitDoubleCarousel.tsx",
                lineNumber: 161,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = HeroSplitDoubleCarousel;
        const __TURBOPACK__default__export__ = HeroSplitDoubleCarousel;
        var _c;
        __turbopack_context__.k.register(_c, "HeroSplitDoubleCarousel");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/feature/FeatureBento.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStack.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/Button.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/buttonUtils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoGlobe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoGlobe.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoIconInfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoIconInfoCards.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoAnimatedBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoAnimatedBarChart.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$Bento3DStackCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/Bento3DStackCards.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$Bento3DTaskList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/Bento3DTaskList.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoOrbitingIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoOrbitingIcons.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoMap.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoMarquee.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoLineChart$2f$BentoLineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoLineChart/BentoLineChart.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoPhoneAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoPhoneAnimation.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoChatAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoChatAnimation.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$Bento3DCardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/Bento3DCardGrid.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoRevealIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoRevealIcon.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoTimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoTimeline.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoMediaStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/bento/BentoMediaStack.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;;;;;;;;;;;;;;;
        const FeatureBento = ({
            features,
            carouselMode = "buttons",
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
            ariaLabel = "Feature section",
            className = "",
            containerClassName = "",
            cardClassName = "",
            textBoxTitleClassName = "",
            textBoxTitleImageWrapperClassName = "",
            textBoxTitleImageClassName = "",
            textBoxDescriptionClassName = "",
            cardTitleClassName = "",
            cardDescriptionClassName = "",
            cardButtonClassName = "",
            cardButtonTextClassName = "",
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
            const getBentoComponent = (feature) => {
                switch (feature.bentoComponent) {
                    case "globe":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full min-h-0",
                            style: {
                                maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, black 40%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, black 40%, transparent 100%)",
                                maskComposite: "intersect",
                                WebkitMaskComposite: "source-in"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoGlobe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoGlobe"], {
                                className: "w-full scale-150 mt-[15%]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0));
                    case "icon-info-cards":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoIconInfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            items: feature.items,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 206,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "animated-bar-chart":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoAnimatedBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 208,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "3d-stack-cards":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$Bento3DStackCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            cards: feature.items.map((item) => ({
                                Icon: item.icon,
                                title: item.title,
                                subtitle: item.subtitle,
                                detail: item.detail
                            })),
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 210,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "3d-task-list":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$Bento3DTaskList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: feature.title,
                            items: feature.items,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 212,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "orbiting-icons":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoOrbitingIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            centerIcon: feature.centerIcon,
                            items: feature.items,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 214,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "marquee":
                        return feature.variant === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            centerIcon: feature.centerIcon,
                            variant: "text",
                            texts: feature.texts,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            centerIcon: feature.centerIcon,
                            variant: "icon",
                            icons: feature.icons,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    case "map":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 220,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "line-chart":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoLineChart$2f$BentoLineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 222,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "3d-card-grid":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$Bento3DCardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            items: feature.items,
                            centerIcon: feature.centerIcon,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 224,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "phone":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoPhoneAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            statusIcon: feature.statusIcon,
                            alertIcon: feature.alertIcon,
                            alertTitle: feature.alertTitle,
                            alertMessage: feature.alertMessage,
                            apps: feature.apps,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 226,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "chat":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoChatAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            aiIcon: feature.aiIcon,
                            userIcon: feature.userIcon,
                            exchanges: feature.exchanges,
                            placeholder: feature.placeholder,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 228,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "reveal-icon":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoRevealIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: feature.icon,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 230,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "timeline":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoTimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            heading: feature.heading,
                            subheading: feature.subheading,
                            items: feature.items,
                            completedLabel: feature.completedLabel,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 232,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                    case "media-stack":
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$bento$2f$BentoMediaStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            items: feature.items,
                            useInvertedBackground: useInvertedBackground
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 234,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0));
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mode: carouselMode,
                gridVariant: "uniform-all-items-equal",
                uniformGridCustomHeightClasses: "min-h-0",
                animationType: animationType,
                carouselThreshold: 4,
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
                gridClassName: gridClassName,
                carouselClassName: carouselClassName,
                carouselItemClassName: "w-carousel-item-3 xl:w-carousel-item-3!",
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
                children: features.map((feature, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("card flex flex-col gap-4 p-5 rounded-theme-capped min-h-0 h-full", cardClassName),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-70 min-h-0 overflow-hidden",
                            children: getBentoComponent(feature)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-1 flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-2xl font-medium leading-tight", shouldUseLightText && "text-background", cardTitleClassName),
                                    children: feature.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-sm leading-tight", shouldUseLightText ? "text-background" : "text-foreground", cardDescriptionClassName),
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        feature.button && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$buttonUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonProps"])(feature.button, 0, theme.defaultButtonVariant, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full", cardButtonClassName), cardButtonTextClassName)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `${feature.title}-${index}`, true, {
                    fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/feature/FeatureBento.tsx",
                lineNumber: 239,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(FeatureBento, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
            ];
        });
        _c = FeatureBento;
        const __TURBOPACK__default__export__ = FeatureBento;
        var _c;
        __turbopack_context__.k.register(_c, "FeatureBento");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$carousels$2f$ArrowCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/layouts/carousels/ArrowCarousel.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/MediaContent.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/useButtonClick.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;
        const MASK_GRADIENT = "linear-gradient(to bottom, transparent, black 60%)";
        const FeatureCard = ({
            feature,
            cardClassName = "",
            titleClassName = "",
            descriptionClassName = "",
            buttonClassName = ""
        }) => {
            _s();
            const Icon = feature.buttonIcon;
            const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"])(feature.buttonHref, feature.buttonOnClick);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative h-90 md:h-100 2xl:h-110 rounded-theme-capped overflow-hidden", cardClassName),
                children: [
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        imageSrc: feature.imageSrc,
                        videoSrc: feature.videoSrc,
                        imageAlt: feature.imageAlt,
                        videoAriaLabel: feature.videoAriaLabel,
                        imageClassName: "!absolute inset-0 w-full h-full object-cover !rounded-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-1 backdrop-blur-xl opacity-100 w-full h-1/3 left-0 bottom-0",
                        style: {
                            maskImage: MASK_GRADIENT
                        },
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/60 to-transparent z-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end md:items-center justify-between gap-4 z-2",
                        children: [
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0 min-w-0",
                                children: [
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-2xl md:text-3xl font-medium leading-tight text-background", titleClassName),
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                                        lineNumber: 91,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-sm md:text-base leading-tight text-background/75", descriptionClassName),
                                        children: feature.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                                        lineNumber: 94,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClick,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("shrink-0 primary-button h-8 w-auto aspect-square rounded-theme flex items-center justify-center cursor-pointer", buttonClassName),
                                "aria-label": feature.buttonHref ? `Navigate to ${feature.buttonHref}` : "Action button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-4/10 h-4/10 text-primary-cta-text"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                                    lineNumber: 103,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(FeatureCard, "k/n1+2dO93KQ2ssXjfb0Czox+/k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$useButtonClick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonClick"]
            ];
        });
        _c = FeatureCard;
        const FeatureCardTwentySix = ({
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
            cardClassName = "",
            textBoxTitleClassName = "",
            textBoxTitleImageWrapperClassName = "",
            textBoxTitleImageClassName = "",
            textBoxDescriptionClassName = "",
            cardTitleClassName = "",
            cardDescriptionClassName = "",
            cardButtonClassName = "",
            carouselClassName = "",
            controlsClassName = "",
            textBoxClassName = "",
            textBoxTagClassName = "",
            textBoxButtonContainerClassName = "",
            textBoxButtonClassName = "",
            textBoxButtonTextClassName = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$layouts$2f$carousels$2f$ArrowCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                ariaLabel: ariaLabel,
                className: className,
                containerClassName: containerClassName,
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
                children: features.map((feature, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                    feature: feature,
                    cardClassName: cardClassName,
                    titleClassName: cardTitleClassName,
                    descriptionClassName: cardDescriptionClassName,
                    buttonClassName: cardButtonClassName
                }, `${feature.title}-${index}`, false, {
                    fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                    lineNumber: 169,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/feature/FeatureCardTwentySix.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c1 = FeatureCardTwentySix;
        const __TURBOPACK__default__export__ = FeatureCardTwentySix;
        var _c, _c1;
        __turbopack_context__.k.register(_c, "FeatureCard");
        __turbopack_context__.k.register(_c1, "FeatureCardTwentySix");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/feature/FeatureCardSixteen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PricingFeatureList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PricingFeatureList.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/hooks/useCardAnimation.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;
        const FeatureCardSixteen = ({
            negativeCard,
            positiveCard,
            animationType,
            title,
            titleSegments,
            description,
            textboxLayout,
            useInvertedBackground = false,
            tag,
            tagIcon,
            tagAnimation = "opacity",
            buttons = [],
            buttonAnimation = "slide-up",
            ariaLabel = "Feature comparison section",
            className = "",
            containerClassName = "",
            textBoxTitleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            textBoxDescriptionClassName = "",
            textBoxClassName = "",
            textBoxTagClassName = "",
            textBoxButtonContainerClassName = "",
            textBoxButtonClassName = "",
            textBoxButtonTextClassName = "",
            gridClassName = "",
            cardClassName = "",
            itemsListClassName = "",
            itemClassName = "",
            itemIconClassName = "",
            itemTextClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const shouldUseLightText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseInvertedText"])(useInvertedBackground, theme.cardStyle);
            const {
                itemRefs,
                containerRef,
                perspectiveRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"])({
                animationType,
                itemCount: 2,
                isGrid: true,
                supports3DAnimation: true,
                gridVariant: "uniform-all-items-equal"
            });
            const cards = [{
                    ...negativeCard,
                    variant: "negative"
                },
                {
                    ...positiveCard,
                    variant: "positive"
                }
            ];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: containerRef,
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto flex flex-col gap-8", containerClassName),
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
                            titleClassName: textBoxTitleClassName,
                            titleImageWrapperClassName: titleImageWrapperClassName,
                            titleImageClassName: titleImageClassName,
                            descriptionClassName: textBoxDescriptionClassName,
                            tagClassName: textBoxTagClassName,
                            buttonContainerClassName: textBoxButtonContainerClassName,
                            buttonClassName: textBoxButtonClassName,
                            buttonTextClassName: textBoxButtonTextClassName
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureCardSixteen.tsx",
                            lineNumber: 106,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: perspectiveRef,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative mx-auto w-full md:w-60 grid grid-cols-1 gap-6", cards.length >= 2 ? "md:grid-cols-2" : "md:grid-cols-1", gridClassName),
                            children: cards.map((card, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el) => {
                                    itemRefs.current[index] = el;
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative h-full card rounded-theme-capped p-6", cardClassName),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col gap-6", card.variant === "negative" && "opacity-50"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PricingFeatureList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        features: card.items,
                                        icon: card.variant === "positive" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
                                        shouldUseLightText: shouldUseLightText,
                                        className: itemsListClassName,
                                        featureItemClassName: itemClassName,
                                        featureIconWrapperClassName: "",
                                        featureIconClassName: itemIconClassName,
                                        featureTextClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("truncate", itemTextClassName)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/feature/FeatureCardSixteen.tsx",
                                        lineNumber: 146,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/feature/FeatureCardSixteen.tsx",
                                    lineNumber: 145,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, card.variant, false, {
                                fileName: "[project]/src/components/sections/feature/FeatureCardSixteen.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/feature/FeatureCardSixteen.tsx",
                            lineNumber: 128,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/feature/FeatureCardSixteen.tsx",
                    lineNumber: 105,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/feature/FeatureCardSixteen.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(FeatureCardSixteen, "LqznOVtHfTqHts/mbwv5wwqGusI=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"]
            ];
        });
        _c = FeatureCardSixteen;
        const __TURBOPACK__default__export__ = FeatureCardSixteen;
        var _c;
        __turbopack_context__.k.register(_c, "FeatureCardSixteen");
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
    "[project]/src/components/sections/team/TeamCardFive.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/MediaContent.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/hooks/useCardAnimation.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;
        const TeamCardFive = ({
            team,
            animationType,
            title,
            titleSegments,
            description,
            textboxLayout,
            useInvertedBackground = false,
            tag,
            tagIcon,
            tagAnimation = "opacity",
            buttons = [],
            buttonAnimation = "slide-up",
            ariaLabel = "Team section",
            className = "",
            containerClassName = "",
            textBoxTitleClassName = "",
            textBoxTitleImageWrapperClassName = "",
            textBoxTitleImageClassName = "",
            textBoxDescriptionClassName = "",
            textBoxClassName = "",
            textBoxTagClassName = "",
            textBoxButtonContainerClassName = "",
            textBoxButtonClassName = "",
            textBoxButtonTextClassName = "",
            gridClassName = "",
            cardClassName = "",
            mediaWrapperClassName = "",
            mediaClassName = "",
            nameClassName = "",
            roleClassName = ""
        }) => {
            _s();
            const {
                itemRefs
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"])({
                animationType,
                itemCount: team.length
            });
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto flex flex-col gap-8", containerClassName),
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
                            titleClassName: textBoxTitleClassName,
                            titleImageWrapperClassName: textBoxTitleImageWrapperClassName,
                            titleImageClassName: textBoxTitleImageClassName,
                            descriptionClassName: textBoxDescriptionClassName,
                            tagClassName: textBoxTagClassName,
                            buttonContainerClassName: textBoxButtonContainerClassName,
                            buttonClassName: textBoxButtonClassName,
                            buttonTextClassName: textBoxButtonTextClassName
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/team/TeamCardFive.tsx",
                            lineNumber: 94,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-row flex-wrap gap-y-6 md:gap-x-0 justify-center", gridClassName),
                            children: team.map((member, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el) => {
                                    itemRefs.current[index] = el;
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative flex flex-col items-center text-center w-[55%] md:w-[28%] -mx-[4%] md:-mx-[2%]", cardClassName),
                                children: [
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative card w-full aspect-square rounded-theme overflow-hidden p-2 mb-4", mediaWrapperClassName),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MediaContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            imageSrc: member.imageSrc,
                                            videoSrc: member.videoSrc,
                                            imageAlt: member.imageAlt || member.name,
                                            videoAriaLabel: member.videoAriaLabel || member.name,
                                            imageClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 w-full h-full object-cover rounded-theme!", mediaClassName)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/team/TeamCardFive.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/team/TeamCardFive.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 w-8/10 text-2xl font-medium leading-tight truncate", useInvertedBackground ? "text-background" : "text-foreground", nameClassName),
                                        children: member.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/team/TeamCardFive.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 w-8/10 text-base leading-tight mt-1 truncate", useInvertedBackground ? "text-background/75" : "text-foreground/75", roleClassName),
                                        children: member.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/team/TeamCardFive.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, member.id, true, {
                                fileName: "[project]/src/components/sections/team/TeamCardFive.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/team/TeamCardFive.tsx",
                            lineNumber: 116,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/team/TeamCardFive.tsx",
                    lineNumber: 93,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/team/TeamCardFive.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(TeamCardFive, "h9vpg1PrhLYkI5S7sms1OeTAS5Y=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$hooks$2f$useCardAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardAnimation"]
            ];
        });
        _c = TeamCardFive;
        const __TURBOPACK__default__export__ = TeamCardFive;
        var _c;
        __turbopack_context__.k.register(_c, "TeamCardFive");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/faq/FaqBase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cardStack/CardStackTextBox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Accordion.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hooks/useButtonAnimation.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;
        const FaqBase = ({
            faqs,
            title,
            titleSegments,
            description,
            tag,
            tagIcon,
            tagAnimation = "opacity",
            buttons = [],
            buttonAnimation = "slide-up",
            faqsAnimation,
            textboxLayout,
            useInvertedBackground = false,
            animationType = "smooth",
            showCard = true,
            ariaLabel = "FAQ section",
            className = "",
            containerClassName = "",
            textBoxTitleClassName = "",
            titleImageWrapperClassName = "",
            titleImageClassName = "",
            textBoxDescriptionClassName = "",
            textBoxClassName = "",
            textBoxTagClassName = "",
            textBoxButtonContainerClassName = "",
            textBoxButtonClassName = "",
            textBoxButtonTextClassName = "",
            faqsContainerClassName = "",
            accordionClassName = "",
            accordionTitleClassName = "",
            accordionIconContainerClassName = "",
            accordionIconClassName = "",
            accordionContentClassName = "",
            separatorClassName = ""
        }) => {
            _s();
            const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
            const {
                containerRef: faqsContainerRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"])({
                animationType: faqsAnimation
            });
            const handleToggle = (index) => {
                setActiveIndex(activeIndex === index ? null : index);
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto flex flex-col gap-8", containerClassName),
                    children: [
                        (title || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cardStack$2f$CardStackTextBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            titleImageWrapperClassName: titleImageWrapperClassName,
                            titleImageClassName: titleImageClassName,
                            descriptionClassName: textBoxDescriptionClassName,
                            tagClassName: textBoxTagClassName,
                            buttonContainerClassName: textBoxButtonContainerClassName,
                            buttonClassName: textBoxButtonClassName,
                            buttonTextClassName: textBoxButtonTextClassName
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/faq/FaqBase.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: faqsContainerRef,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col gap-4", faqsContainerClassName),
                            children: faqs.map((faq, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        index: index,
                                        isActive: activeIndex === index,
                                        onToggle: handleToggle,
                                        title: faq.title,
                                        content: faq.content,
                                        animationType: animationType,
                                        showCard: showCard,
                                        useInvertedBackground: useInvertedBackground,
                                        className: accordionClassName,
                                        titleClassName: accordionTitleClassName,
                                        iconContainerClassName: accordionIconContainerClassName,
                                        iconClassName: accordionIconClassName,
                                        contentClassName: accordionContentClassName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/faq/FaqBase.tsx",
                                        lineNumber: 126,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)), !showCard && index < faqs.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full border-b border-foreground/10 mt-4", separatorClassName)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/faq/FaqBase.tsx",
                                        lineNumber: 142,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, faq.id, true, {
                                fileName: "[project]/src/components/sections/faq/FaqBase.tsx",
                                lineNumber: 125,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/faq/FaqBase.tsx",
                            lineNumber: 123,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/faq/FaqBase.tsx",
                    lineNumber: 98,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/faq/FaqBase.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(FaqBase, "N0LFt5MiPWv6oTUqUOE9AHBP/2Q=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"]
            ];
        });
        _c = FaqBase;
        const __TURBOPACK__default__export__ = FaqBase;
        var _c;
        __turbopack_context__.k.register(_c, "FaqBase");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/contact/ContactCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Textbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Textbox.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$HeroBackgrounds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/background/HeroBackgrounds.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;;;
        const ContactCTA = ({
            tag,
            tagIcon,
            tagAnimation = "opacity",
            title,
            description,
            buttons = [],
            buttonAnimation = "slide-up",
            background,
            useInvertedBackground = false,
            ariaLabel = "Contact section",
            className = "",
            containerClassName = "",
            contentClassName = "",
            textBoxClassName = "",
            titleClassName = "",
            descriptionClassName = "",
            tagClassName = "",
            buttonContainerClassName = "",
            buttonClassName = "",
            buttonTextClassName = ""
        }) => {
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
                                className: "relative z-10 w-full md:w-3/4 mx-auto flex flex-col items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Textbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    tag: tag,
                                    tagIcon: tagIcon,
                                    tagAnimation: tagAnimation,
                                    title: title,
                                    description: description,
                                    buttons: buttons,
                                    buttonAnimation: buttonAnimation,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-col gap-3 md:gap-1", textBoxClassName),
                                    titleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-4xl md:text-5xl font-medium text-balance", titleClassName),
                                    descriptionClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-base md:text-lg leading-[1.2]", descriptionClassName),
                                    tagClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName),
                                    buttonContainerClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("flex flex-wrap gap-4 max-md:justify-center mt-3", buttonContainerClassName),
                                    buttonClassName: buttonClassName,
                                    buttonTextClassName: buttonTextClassName,
                                    center: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/contact/ContactCTA.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/contact/ContactCTA.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 w-full h-full z-0 rounded-theme-capped overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$background$2f$HeroBackgrounds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ...background
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/contact/ContactCTA.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/contact/ContactCTA.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/contact/ContactCTA.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/contact/ContactCTA.tsx",
                    lineNumber: 79,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/contact/ContactCTA.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = ContactCTA;
        const __TURBOPACK__default__export__ = ContactCTA;
        var _c;
        __turbopack_context__.k.register(_c, "ContactCTA");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/footer/FooterBase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextUnderline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/button/ButtonTextUnderline.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FooterColumns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/FooterColumns.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        "use client";;;;;;
        const FooterBase = ({
            logoSrc,
            logoAlt = "",
            logoText,
            columns,
            copyrightText = `© 2025 | Webild`,
            onPrivacyClick,
            ariaLabel = "Site footer",
            className = "",
            containerClassName = "",
            logoClassName = "",
            logoImageClassName = "",
            logoTextClassName = "",
            columnsClassName = "",
            columnClassName = "",
            columnTitleClassName = "",
            columnItemClassName = "",
            copyrightContainerClassName = "",
            copyrightTextClassName = "",
            privacyButtonClassName = ""
        }) => {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                role: "contentinfo",
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative overflow-hidden w-full primary-button text-primary-cta-text py-15 mt-20", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative w-content-width mx-auto z-10", containerClassName),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start mb-10",
                            children: [
                                logoSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative h-[calc(var(--text-4xl)*1.25)] w-auto flex-shrink-0", logoClassName),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: logoSrc,
                                        alt: logoAlt,
                                        width: 200,
                                        height: 50,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-full w-auto object-contain", logoImageClassName),
                                        unoptimized: logoSrc.startsWith('http') || logoSrc.startsWith('//')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-4xl font-medium text-primary-cta-text", logoTextClassName),
                                    children: logoText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FooterColumns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    columns: columns,
                                    className: columnsClassName,
                                    columnClassName: columnClassName,
                                    columnTitleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-primary-cta-text/50", columnTitleClassName),
                                    columnItemClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-primary-cta-text", columnItemClassName)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                                    lineNumber: 79,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                            lineNumber: 61,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-full flex items-center justify-between pt-9 border-t border-primary-cta-text/20", copyrightContainerClassName),
                            children: [
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-primary-cta-text/50 text-sm", copyrightTextClassName),
                                    children: copyrightText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                                    lineNumber: 91,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$button$2f$ButtonTextUnderline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: "Privacy Policy",
                                    onClick: onPrivacyClick,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-primary-cta-text/50", privacyButtonClassName)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                                    lineNumber: 94,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                            lineNumber: 88,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                    lineNumber: 58,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/footer/FooterBase.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        };
        _c = FooterBase;
        const __TURBOPACK__default__export__ = FooterBase;
        var _c;
        __turbopack_context__.k.register(_c, "FooterBase");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
    "[project]/src/components/sections/testimonial/TestimonialCardFifteen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        __turbopack_context__.s([
            "default",
            () => __TURBOPACK__default__export__
        ]);
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2f$TextAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/text/TextAnimation.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AvatarGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/AvatarGroup.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/themeProvider/ThemeProvider.tsx [app-client] (ecmascript)");
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hooks/useButtonAnimation.ts [app-client] (ecmascript)");;
        var _s = __turbopack_context__.k.signature();
        "use client";;;;;;;;
        const TestimonialCardFifteen = ({
            testimonial,
            rating,
            author,
            avatars,
            ratingAnimation,
            avatarsAnimation,
            useInvertedBackground = false,
            ariaLabel = "Testimonial section",
            className = "",
            containerClassName = "",
            ratingClassName = "",
            starClassName = "",
            testimonialClassName = "",
            avatarGroupClassName = "",
            avatarClassName = "",
            avatarImageClassName = ""
        }) => {
            _s();
            const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
            const {
                containerRef: ratingContainerRef
            } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"])({
                animationType: ratingAnimation
            });
            const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
                "TestimonialCardFifteen.useEffect": () => {
                    const checkMobile = {
                        "TestimonialCardFifteen.useEffect.checkMobile": () => setIsMobile(window.innerWidth < 768)
                    }["TestimonialCardFifteen.useEffect.checkMobile"];
                    checkMobile();
                    window.addEventListener("resize", checkMobile);
                    return ({
                        "TestimonialCardFifteen.useEffect": () => window.removeEventListener("resize", checkMobile)
                    })["TestimonialCardFifteen.useEffect"];
                }
            }["TestimonialCardFifteen.useEffect"], []);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative py-20 w-full", useInvertedBackground && "bg-foreground", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("w-content-width mx-auto flex flex-col items-center gap-6", containerClassName),
                    children: [
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: ratingContainerRef,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("relative z-1 flex gap-1 -mb-1", ratingClassName),
                            children: Array.from({
                                length: 5
                            }).map((_, index) => /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-6 w-auto text-accent", index < rating ? "fill-accent" : "fill-transparent", starClassName),
                                strokeWidth: 1.5
                            }, index, false, {
                                fileName: "[project]/src/components/sections/testimonial/TestimonialCardFifteen.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/testimonial/TestimonialCardFifteen.tsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2f$TextAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: theme.defaultTextAnimation,
                            text: testimonial,
                            variant: "words-trigger",
                            as: "p",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-3xl md:text-5xl font-medium text-balance text-center leading-tight", useInvertedBackground && "text-background", testimonialClassName)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/testimonial/TestimonialCardFifteen.tsx",
                            lineNumber: 82,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("text-xl text-center mb-1", useInvertedBackground && "text-background"),
                            children: author
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/testimonial/TestimonialCardFifteen.tsx",
                            lineNumber: 94,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AvatarGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            avatars: avatars,
                            maxVisible: isMobile ? 3 : 6,
                            animationType: avatarsAnimation,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("justify-center", avatarGroupClassName),
                            avatarClassName: avatarClassName,
                            avatarImageClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("h-[var(--width-17_5)] md:h-[var(--width-5)]", avatarImageClassName),
                            avatarOverlapClassName: "-ml-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/testimonial/TestimonialCardFifteen.tsx",
                            lineNumber: 101,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/testimonial/TestimonialCardFifteen.tsx",
                    lineNumber: 67,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/testimonial/TestimonialCardFifteen.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        };
        _s(TestimonialCardFifteen, "hpPfG7XirEAL3+BNm2ruN1i+Z5Y=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$themeProvider$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hooks$2f$useButtonAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonAnimation"]
            ];
        });
        _c = TestimonialCardFifteen;
        const __TURBOPACK__default__export__ = TestimonialCardFifteen;
        var _c;
        __turbopack_context__.k.register(_c, "TestimonialCardFifteen");
        if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
            __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
        }
    }),
]);

//# sourceMappingURL=src_components_sections_11bdb844._.js.map