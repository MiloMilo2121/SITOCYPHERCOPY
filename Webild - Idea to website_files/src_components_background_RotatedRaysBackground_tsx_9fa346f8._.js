(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/background/RotatedRaysBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
const rays = [
    {
        width: 35,
        opacity: 0.85,
        rotation: -18,
        animationDuration: 4,
        animationDelay: 0
    },
    {
        width: 35,
        opacity: 0.775,
        rotation: -12,
        animationDuration: 3.5,
        animationDelay: 0.5
    },
    {
        width: 20,
        opacity: 0.65,
        rotation: -5,
        scale: 0.90,
        animationDuration: 5,
        animationDelay: 1.2
    },
    {
        width: 15,
        opacity: 0.25,
        rotation: -3,
        animationDuration: 3,
        animationDelay: 0.3
    },
    {
        width: 40,
        opacity: 0.45,
        rotation: 0,
        scale: 0.79,
        animationDuration: 4.5,
        animationDelay: 0.8
    },
    {
        width: 20,
        opacity: 0.45,
        rotation: 6,
        animationDuration: 3.2,
        animationDelay: 1.5
    },
    {
        width: 35,
        opacity: 0.65,
        rotation: 9,
        scale: 0.83,
        animationDuration: 4.2,
        animationDelay: 0.2
    },
    {
        width: 35,
        opacity: 1,
        rotation: 14,
        scale: 0.9,
        animationDuration: 3.8,
        animationDelay: 1
    }
];
const lightSources = [
    {
        width: 1198,
        opacity: 0.05,
        top: -352
    },
    {
        width: 865,
        height: 929,
        opacity: 0.15,
        top: -252
    },
    {
        width: 865,
        height: 929,
        opacity: 0.15,
        top: -252
    }
];
const RotatedRaysBackground = ({ animated, showGrid, className = "", containerClassName = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute inset-0 z-0 overflow-hidden pointer-events-none select-none", className),
        "aria-hidden": "true",
        children: [
            animated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                        @keyframes rotatedRayPulse {
                            0%, 100% { opacity: 0; }
                            50% { opacity: var(--target-opacity); }
                        }
                    `
            }, void 0, false, {
                fileName: "[project]/src/components/background/RotatedRaysBackground.tsx",
                lineNumber: 58,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 bg-background [mask-image:radial-gradient(50%_50%_at_50%_0%,white_0%,transparent_100%)]",
                style: {
                    backgroundImage: "linear-gradient(to right, color-mix(in srgb, var(--color-background-accent) 20%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-background-accent) 10%, transparent) 1px, transparent 1px)",
                    backgroundSize: "10vw 10vw",
                    backgroundRepeat: "repeat"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/background/RotatedRaysBackground.tsx",
                lineNumber: 69,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cls"])("absolute overflow-hidden w-[1142px] h-[179vh] -top-[571px] -left-[373px]", "-rotate-[38deg] blur-[16px]", "[mask:radial-gradient(50%_109%,#000_0%,#000000f6_0%,transparent_96%)]", containerClassName),
                children: [
                    rays.map((ray, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute overflow-hidden origin-top-right -top-[352px] -bottom-[920px] [background:radial-gradient(50%_50%_at_50%_50%,var(--color-background-accent)_0%,transparent_100%)]",
                            style: {
                                width: `${ray.width}px`,
                                left: ray.left || `calc(50% - ${ray.width / 2}px)`,
                                transform: `${ray.scale ? `scale(${ray.scale})` : ""} rotate(${ray.rotation}deg)`,
                                ...animated ? {
                                    "--target-opacity": ray.opacity,
                                    animation: `rotatedRayPulse ${ray.animationDuration}s ease-in-out ${ray.animationDelay}s infinite both`
                                } : {
                                    opacity: ray.opacity
                                }
                            }
                        }, `ray-${index}`, false, {
                            fileName: "[project]/src/components/background/RotatedRaysBackground.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))),
                    lightSources.map((source, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,var(--color-background-accent)_0%,transparent_100%)]",
                            style: {
                                width: `${source.width}px`,
                                height: source.height ? `${source.height}px` : undefined,
                                top: `${source.top}px`,
                                bottom: source.height ? undefined : "-46px",
                                left: `calc(50% - ${source.width / 2}px)`,
                                opacity: source.opacity
                            }
                        }, `light-source-${index}`, false, {
                            fileName: "[project]/src/components/background/RotatedRaysBackground.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/background/RotatedRaysBackground.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/background/RotatedRaysBackground.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = RotatedRaysBackground;
const __TURBOPACK__default__export__ = RotatedRaysBackground;
var _c;
__turbopack_context__.k.register(_c, "RotatedRaysBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/background/RotatedRaysBackground.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/background/RotatedRaysBackground.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_background_RotatedRaysBackground_tsx_9fa346f8._.js.map