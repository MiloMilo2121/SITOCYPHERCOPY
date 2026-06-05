(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/gsap-setup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServiceWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceWrapper",
    ()=>ServiceWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
'use client';
;
;
function ServiceWrapper({ children }) {
    const websiteId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WEBSITE_ANALYTICS_ID;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            websiteId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                async: true,
                defer: true,
                "data-website-id": websiteId,
                src: "https://analytics.webild.io/script.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceWrapper.tsx",
                lineNumber: 11,
                columnNumber: 17
            }, this),
            children
        ]
    }, void 0, true);
}
_c = ServiceWrapper;
var _c;
__turbopack_context__.k.register(_c, "ServiceWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/tag/useTagEffects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTagEffects",
    ()=>useTagEffects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useTagEffects() {
    _s();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shouldShow, setShouldShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTagEffects.useEffect": ()=>{
            audioRef.current = new Audio("https://webuild-dev.s3.eu-north-1.amazonaws.com/default/audio/click.mp3");
            audioRef.current.volume = 0.75;
        }
    }["useTagEffects.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTagEffects.useEffect": ()=>{
            if (window.self !== window.top) {
                try {
                    const parentHostname = window.top?.location.hostname;
                    if (parentHostname?.includes('webild.io')) {
                        setShouldShow(false);
                    }
                } catch  {
                    setShouldShow(true);
                }
            }
        }
    }["useTagEffects.useEffect"], []);
    const playSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTagEffects.useCallback[playSound]": ()=>{
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch({
                    "useTagEffects.useCallback[playSound]": ()=>{}
                }["useTagEffects.useCallback[playSound]"]);
            }
        }
    }["useTagEffects.useCallback[playSound]"], []);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTagEffects.useCallback[handleMouseEnter]": ()=>{
            if (window.innerWidth > 768) {
                playSound();
            }
        }
    }["useTagEffects.useCallback[handleMouseEnter]"], [
        playSound
    ]);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTagEffects.useCallback[handleClick]": (e, onClick)=>{
            playSound();
            if (onClick) {
                onClick(e);
            }
        }
    }["useTagEffects.useCallback[handleClick]"], [
        playSound
    ]);
    return {
        shouldShow,
        handleMouseEnter,
        handleClick,
        buttonClassName: "transition-all duration-200 hover:-translate-y-[3px]"
    };
}
_s(useTagEffects, "lLVfJefpPeEcNVR/98EZPbnwx2A=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/tag/Tag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@rive-app/react-canvas/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tag$2f$useTagEffects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/tag/useTagEffects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const STATE_MACHINE_NAME = "State Machine 1";
const HOVER_INPUT_NAME = "Hover";
const Tag = ()=>{
    _s();
    const { shouldShow, handleMouseEnter, handleClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tag$2f$useTagEffects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTagEffects"])();
    const { rive, RiveComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"])({
        src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/watermark-bob2.riv",
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
        layout: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layout"]({
            fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fit"].Contain
        })
    });
    const hoverInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"])(rive, STATE_MACHINE_NAME, HOVER_INPUT_NAME);
    const handleTagClick = ()=>{
        window.open('https://webild.io', '_blank');
    };
    const onMouseEnter = ()=>{
        handleMouseEnter();
        if (hoverInput) {
            hoverInput.value = true;
        }
    };
    const onMouseLeave = ()=>{
        if (hoverInput) {
            hoverInput.value = false;
        }
    };
    if (!shouldShow) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "fixed z-[99999] bottom-6 right-6 w-[160px] h-[92px] cursor-pointer",
        onClick: (e)=>handleClick(e, handleTagClick),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RiveComponent, {
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/src/tag/Tag.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/tag/Tag.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Tag, "aoTYZJY99X2V1jhW3QlCng67oOA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tag$2f$useTagEffects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTagEffects"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$rive$2d$app$2f$react$2d$canvas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachineInput"]
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
]);

//# sourceMappingURL=src_d44be974._.js.map