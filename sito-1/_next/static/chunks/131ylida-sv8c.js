(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 62788, e => {
    "use strict";
    e.s(["COMMON_STRINGS", 0, {
        buttons: {
            SAVE: "Save",
            DELETE: "Delete",
            EDIT: "Edit",
            UPGRADE_PLAN: "Upgrade Plan",
            SETTINGS: "Settings",
            SIGN_OUT: "Sign out"
        },
        labels: {
            DOCUMENTATION: "Documentation",
            PRICING: "Pricing"
        },
        placeholders: {
            SEARCH: "Search"
        },
        images: {
            LOGO_ALT: "Logo"
        },
        defaults: {
            PROJECT_NAME: "Webild Project"
        }
    }])
}, 75980, e => {
    "use strict";
    let t = {
        modals: {
            maintenance: {
                title: "We're making a quick adjustment on our end.",
                description: "One of our partners is temporarily unavailable. Please try again in a moment.",
                imageAlt: "Maintenance"
            },
            paymentSuccess: {
                subscription: {
                    title: "Subscription Activated!",
                    description: "Your subscription has been successfully activated. You can now enjoy all the benefits of your plan."
                },
                credits: {
                    title: "Credits Purchased!",
                    description: "Your credits have been successfully added to your account. Start creating amazing projects!"
                },
                continueButton: "Continue"
            },
            paymentCancel: {
                title: "Payment Cancelled",
                description: "Your payment was cancelled. No charges were made to your account. You can try again anytime.",
                continueButton: "Continue"
            },
            insufficientCredits: {
                title: "Insufficient Credits",
                subtitle: e => `You need more credits to ${e}`,
                required: "Required",
                available: "Available"
            },
            outOfCredits: {
                title: "You've ran out of generation credits!",
                description: "Upgrade your AI plan to keep building pages, generating sections, and getting real-time suggestions without limits.",
                imageAlt: "Additional credits"
            },
            confirmation: {
                cancelButton: "Cancel",
                confirmButton: "Confirm"
            },
            dragDrop: {
                title: "Add files",
                description: "Drop any files here to add them to your message"
            }
        },
        tooltips: {
            upgrade: {
                title: "ONLY $16 to unlock Premium Features",
                benefits: ["Get 60 NEW AI credits monthly", "Remove Webild watermark from your site", "Free Secure Hosting"],
                upgradeNow: "Upgrade Now",
                comparePlans: "Compare Plans"
            }
        },
        errors: {
            route: {
                title: "Oops. Something went wrong",
                description: "Looks like that didn't go through. Please try again.",
                tryAgain: "Try Again",
                goHome: "Go Home"
            },
            screenshot: {
                unpublished: "Publish to view preview",
                noPreview: "No Preview available"
            }
        },
        notifications: {
            cookie: {
                title: "Cookie preferences",
                description: "We use cookies to analyze how you use our site and improve your experience.",
                learnMore: "Learn more about our cookie policy",
                decline: "Decline",
                accept: "Accept"
            },
            creditWarning: {
                outOfCredits: "Out of Credits",
                lowOnCredits: "Low on Credits",
                left: "left",
                clickToUpgrade: "Click to upgrade your plan",
                featuresDisabled: "Some features are disabled",
                cantUse: e => `Can't use: ${e}`
            },
            maintenance: {
                title: "Maintenance Mode",
                description: "Some features are temporarily unavailable",
                learnMore: "Learn More"
            }
        },
        input: {
            outOfCredits: "Out of credits. Upgrade to continue.",
            enhanceButton: "Enhance prompt",
            placeholders: {
                enhancing: "Enhancing your prompt",
                listening: "Listening...",
                projectPage: "Ask Webild...",
                homePage: "Make me a clean apple like website for my ai startup"
            },
            errors: {
                enhanceFailed: "Failed to enhance prompt. Please try again.",
                requestProcessing: "Please wait — your previous request is still processing.",
                minCharacters: "Please enter at least 5 characters",
                maxFileCount: e => `You can upload a maximum of ${e} images.`,
                duplicateFile: e => `File "${e}" is already added.`,
                fileTooLarge: e => `File "${e}" is too large. Maximum size is 4 MB.`,
                unsupportedFormat: e => `File "${e}" has an unsupported format. Please upload only PNG, JPG, or JPEG images.`
            }
        },
        dividers: {
            or: "or"
        },
        buttons: {
            upgradePlan: e.i(62788).COMMON_STRINGS.buttons.UPGRADE_PLAN
        },
        select: {
            province: {
                placeholder: "Select a province/state",
                selectCountryFirst: "Select a country first",
                noProvincesAvailable: "No provinces available",
                searchPlaceholder: "Search province/state",
                notFound: "Province/state not found."
            },
            country: {
                placeholder: "Select a country",
                searchPlaceholder: "Search country",
                notFound: "Country not found."
            }
        },
        dataStates: {
            error: {
                title: "Failed to load data",
                description: "Something went wrong while loading the data.",
                chartDescription: "Something went wrong while loading the chart data."
            },
            empty: {
                title: "No data available",
                tableDescription: "There are no items to display.",
                chartDescription: "There is no data to display for the selected period.",
                pieChartTitle: "No data yet",
                pieChartDescription: "Data will appear here once activity begins."
            }
        },
        chat: {
            imageMessage: {
                generationStopped: "Generation stopped",
                generatingImage: "Generating Image",
                generationImageAlt: "Generation Image"
            }
        },
        preview: {
            editMode: {
                title: "Customize mode",
                selectPrompt: "Click an element to edit",
                describeChanges: e => `Describe your changes to this ${e}.`,
                text: {
                    title: "You selected Text",
                    description: "Use the prompt box below for more advanced text edits like colors, fonts, and sizing."
                },
                image: {
                    title: "You selected Image",
                    description: "Use the prompt box below to describe the image you want, or use the toolbar to replace it."
                },
                button: {
                    title: "You selected Button",
                    description: "Use the prompt box below to modify the button text, link, or style."
                },
                section: {
                    title: "You selected Section",
                    description: "Use the prompt box below to modify this section's layout or content."
                },
                generic: {
                    title: "You selected an Element",
                    description: "Use the prompt box below to describe your changes."
                },
                selectImage: {
                    title: "Select an image",
                    description: "Click an image on your site to replace it"
                }
            },
            block: {
                selectedBlock: "Selected block",
                selectedPage: "Selected page"
            },
            item: {
                defaultSubtitle: "New page"
            }
        }
    };
    e.s(["UI_STRINGS", 0, t])
}, 38703, e => {
    "use strict";
    var t = e.i(40578);
    e.s(["useAuth", () => t.usePromisifiedAuth])
}, 85203, e => {
    "use strict";
    var t = e.i(43476),
        n = e.i(932),
        r = e.i(71645),
        o = e.i(75157);
    e.s(["default", 0, e => {
        let i, a, s, l, c, u, d, p, m, f = (0, n.c)(16);
        f[0] !== e ? ({
            children: i,
            className: l,
            animationType: c,
            style: s,
            ...a
        } = e, f[0] = e, f[1] = i, f[2] = a, f[3] = s, f[4] = l, f[5] = c) : (i = f[1], a = f[2], s = f[3], l = f[4], c = f[5]);
        let g = void 0 === l ? "flex flex-col gap-5 w-full h-fit" : l,
            h = void 0 === c ? "full" : c,
            [y, P] = (0, r.useState)("full" === h ? "animation-container" : "animation-container-fade"),
            b = (0, r.useRef)(!1);
        return f[6] === Symbol.for("react.memo_cache_sentinel") ? (u = () => {
            if (b.current) return;
            b.current = !0;
            let e = setTimeout(() => {
                P("")
            }, 800);
            return () => clearTimeout(e)
        }, d = [], f[6] = u, f[7] = d) : (u = f[6], d = f[7]), (0, r.useEffect)(u, d), f[8] !== y || f[9] !== g ? (p = (0, o.cls)(g, y), f[8] = y, f[9] = g, f[10] = p) : p = f[10], f[11] !== i || f[12] !== a || f[13] !== s || f[14] !== p ? (m = (0, t.jsx)("div", {
            className: p,
            style: s,
            ...a,
            children: i
        }), f[11] = i, f[12] = a, f[13] = s, f[14] = p, f[15] = m) : m = f[15], m
    }])
}, 75254, e => {
    "use strict";
    var t = e.i(71645);
    let n = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        r = (...e) => e.filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t).join(" ").trim();
    var o = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let i = (0, t.forwardRef)(({
        color: e = "currentColor",
        size: n = 24,
        strokeWidth: i = 2,
        absoluteStrokeWidth: a,
        className: s = "",
        children: l,
        iconNode: c,
        ...u
    }, d) => (0, t.createElement)("svg", {
        ref: d,
        ...o,
        width: n,
        height: n,
        stroke: e,
        strokeWidth: a ? 24 * Number(i) / Number(n) : i,
        className: r("lucide", s),
        ...!l && !(e => {
            for (let t in e)
                if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
        })(u) && {
            "aria-hidden": "true"
        },
        ...u
    }, [...c.map(([e, n]) => (0, t.createElement)(e, n)), ...Array.isArray(l) ? l : [l]]));
    e.s(["default", 0, (e, o) => {
        let a = (0, t.forwardRef)(({
            className: a,
            ...s
        }, l) => (0, t.createElement)(i, {
            ref: l,
            iconNode: o,
            className: r(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, a),
            ...s
        }));
        return a.displayName = n(e), a
    }], 75254)
}, 31278, e => {
    "use strict";
    let t = (0, e.i(75254).default)("loader-circle", [
        ["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }]
    ]);
    e.s(["Loader2", 0, t], 31278)
}, 21742, e => {
    "use strict";
    var t = e.i(43476),
        n = e.i(71645),
        r = e.i(31278),
        o = e.i(75157);
    let i = (0, n.forwardRef)(({
        children: e,
        className: n,
        styleClassName: i = "button-secondary",
        gradientRoundedClassName: a,
        type: s = "button",
        onClick: l,
        onMouseEnter: c,
        disabled: u = !1,
        isLoading: d = !1,
        loadingText: p
    }, m) => (0, t.jsx)("button", {
        ref: m,
        type: s,
        disabled: u || d,
        onMouseEnter: c,
        className: (0, o.cls)("button text-sm font-medium outline-none focus:outline-none focus-visible:outline-none transition-all duration-200", a, i, n, (u || d) && "opacity-50 select-none pointer-events-none"),
        onClick: l,
        children: d ? (0, t.jsxs)("span", {
            className: "flex items-center justify-center gap-2",
            children: [(0, t.jsx)(r.Loader2, {
                className: "h-[1em] w-auto animate-spin"
            }), p ? ? e]
        }) : e
    }));
    i.displayName = "Button", e.s(["default", 0, i])
}, 18581, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let r = e.r(71645);

    function o(e, t) {
        let n = (0, r.useRef)(null),
            o = (0, r.useRef)(null);
        return (0, r.useCallback)(r => {
            if (null === r) {
                let e = n.current;
                e && (n.current = null, e());
                let t = o.current;
                t && (o.current = null, t())
            } else e && (n.current = i(e, r)), t && (o.current = i(t, r))
        }, [e, t])
    }

    function i(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let n = e(t);
            return "function" == typeof n ? n : () => e(null)
        }
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 88143, (e, t, n) => {
    "use strict";

    function r({
        widthInt: e,
        heightInt: t,
        blurWidth: n,
        blurHeight: o,
        blurDataURL: i,
        objectFit: a
    }) {
        let s = n ? 40 * n : e,
            l = o ? 40 * o : t,
            c = s && l ? `viewBox='0 0 ${s} ${l}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}, 87690, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        VALID_LOADERS: function() {
            return i
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var o in r) Object.defineProperty(n, o, {
        enumerable: !0,
        get: r[o]
    });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        a = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumDiskCacheSize: void 0,
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1,
            customCacheHandler: !1
        }
}, 8927, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "getImgProps", {
        enumerable: !0,
        get: function() {
            return c
        }
    }), e.r(33525);
    let r = e.r(43369),
        o = e.r(88143),
        i = e.r(87690),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function s(e) {
        return void 0 !== e.default
    }

    function l(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function c({
        src: e,
        sizes: t,
        unoptimized: n = !1,
        priority: u = !1,
        preload: d = !1,
        loading: p,
        className: m,
        quality: f,
        width: g,
        height: h,
        fill: y = !1,
        style: P,
        overrideSrc: b,
        onLoad: v,
        onLoadingComplete: S,
        placeholder: w = "empty",
        blurDataURL: E,
        fetchPriority: I,
        decoding: j = "async",
        layout: O,
        objectFit: A,
        objectPosition: T,
        lazyBoundary: C,
        lazyRoot: $,
        ...x
    }, _) {
        var R;
        let N, D, k, {
                imgConf: M,
                showAltText: L,
                blurComplete: G,
                defaultLoader: U
            } = _,
            z = M || i.imageConfigDefault;
        if ("allSizes" in z) N = z;
        else {
            let e = [...z.deviceSizes, ...z.imageSizes].sort((e, t) => e - t),
                t = z.deviceSizes.sort((e, t) => e - t),
                n = z.qualities ? .sort((e, t) => e - t);
            N = { ...z,
                allSizes: e,
                deviceSizes: t,
                qualities: n
            }
        }
        if (void 0 === U) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let F = x.loader || U;
        delete x.loader, delete x.srcSet;
        let J = "__next_img_default" in F;
        if (J) {
            if ("custom" === N.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = F;
            F = t => {
                let {
                    config: n,
                    ...r
                } = t;
                return e(r)
            }
        }
        if (O) {
            "fill" === O && (y = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[O];
            e && (P = { ...P,
                ...e
            });
            let n = {
                responsive: "100vw",
                fill: "100vw"
            }[O];
            n && !t && (t = n)
        }
        let B = "",
            W = l(g),
            q = l(h);
        if ((R = e) && "object" == typeof R && (s(R) || void 0 !== R.src)) {
            let t = s(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (D = t.blurWidth, k = t.blurHeight, E = E || t.blurDataURL, B = t.src, !y)
                if (W || q) {
                    if (W && !q) {
                        let e = W / t.width;
                        q = Math.round(t.height * e)
                    } else if (!W && q) {
                        let e = q / t.height;
                        W = Math.round(t.width * e)
                    }
                } else W = t.width, q = t.height
        }
        let Y = !u && !d && ("lazy" === p || void 0 === p);
        (!(e = "string" == typeof e ? e : B) || e.startsWith("data:") || e.startsWith("blob:")) && (n = !0, Y = !1), N.unoptimized && (n = !0), J && !N.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (n = !0);
        let H = l(f),
            V = Object.assign(y ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: A,
                objectPosition: T
            } : {}, L ? {} : {
                color: "transparent"
            }, P),
            X = G || "empty" === w ? null : "blur" === w ? `url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:W,heightInt:q,blurWidth:D,blurHeight:k,blurDataURL:E||"",objectFit:V.objectFit})}")` : `url("${w}")`,
            K = a.includes(V.objectFit) ? "fill" === V.objectFit ? "100% 100%" : "cover" : V.objectFit,
            Q = X ? {
                backgroundSize: K,
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X
            } : {},
            Z = function({
                config: e,
                src: t,
                unoptimized: n,
                width: o,
                quality: i,
                sizes: a,
                loader: s
            }) {
                if (n) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, r.getDeploymentId)();
                        if (e) {
                            let n = t.indexOf("?");
                            if (-1 !== n) {
                                let r = new URLSearchParams(t.slice(n + 1));
                                r.get("dpl") || (r.append("dpl", e), t = t.slice(0, n) + "?" + r.toString())
                            } else t += `?dpl=${e}`
                        }
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: l,
                    kind: c
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, n, r) {
                    if (r) {
                        let n = /(^|\s)(1?\d?\d)vw/g,
                            o = [];
                        for (let e; e = n.exec(r);) o.push(parseInt(e[2]));
                        if (o.length) {
                            let n = .01 * Math.min(...o);
                            return {
                                widths: t.filter(t => t >= e[0] * n),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof n ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([n, 2 * n].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, o, a), u = l.length - 1;
                return {
                    sizes: a || "w" !== c ? a : "100vw",
                    srcSet: l.map((n, r) => `${s({config:e,src:t,quality:i,width:n})} ${"w"===c?n:r+1}${c}`).join(", "),
                    src: s({
                        config: e,
                        src: t,
                        quality: i,
                        width: l[u]
                    })
                }
            }({
                config: N,
                src: e,
                unoptimized: n,
                width: W,
                quality: H,
                sizes: t,
                loader: F
            }),
            ee = Y ? "lazy" : p;
        return {
            props: { ...x,
                loading: ee,
                fetchPriority: I,
                width: W,
                height: q,
                decoding: j,
                className: m,
                style: { ...V,
                    ...Q
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: b || Z.src
            },
            meta: {
                unoptimized: n,
                preload: d || u,
                placeholder: w,
                fill: y
            }
        }
    }
}, 98879, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let r = e.r(71645),
        o = "u" < typeof window,
        i = o ? () => {} : r.useLayoutEffect,
        a = o ? () => {} : r.useEffect;

    function s(e) {
        let {
            headManager: t,
            reduceComponentsToState: n
        } = e;

        function s() {
            if (t && t.mountedInstances) {
                let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(n(e))
            }
        }
        return o && (t ? .mountedInstances ? .add(e.children), s()), i(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), i(() => (t && (t._pendingUpdate = s), () => {
            t && (t._pendingUpdate = s)
        })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 25633, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return g
        },
        defaultHead: function() {
            return d
        }
    };
    for (var o in r) Object.defineProperty(n, o, {
        enumerable: !0,
        get: r[o]
    });
    let i = e.r(55682),
        a = e.r(90809),
        s = e.r(43476),
        l = a._(e.r(71645)),
        c = i._(e.r(98879)),
        u = e.r(42732);

    function d() {
        return [(0, s.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, s.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function p(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let m = ["name", "httpEquiv", "charSet", "itemProp"];

    function f(e) {
        let t, n, r, o;
        return e.reduce(p, []).reverse().concat(d().reverse()).filter((t = new Set, n = new Set, r = new Set, o = {}, e => {
            let i = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let n = e.key.slice(e.key.indexOf("$") + 1);
                t.has(n) ? i = !1 : t.add(n)
            }
            switch (e.type) {
                case "title":
                case "base":
                    n.has(e.type) ? i = !1 : n.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, n = m.length; t < n; t++) {
                        let n = m[t];
                        if (e.props.hasOwnProperty(n))
                            if ("charSet" === n) r.has(n) ? i = !1 : r.add(n);
                            else {
                                let t = e.props[n],
                                    r = o[n] || new Set;
                                ("name" !== n || !a) && r.has(t) ? i = !1 : (r.add(t), o[n] = r)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let n = e.key || t;
            return l.default.cloneElement(e, {
                key: n
            })
        })
    }
    let g = function({
        children: e
    }) {
        let t = (0, l.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(c.default, {
            reduceComponentsToState: f,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 18556, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let r = e.r(55682)._(e.r(71645)),
        o = e.r(87690),
        i = r.default.createContext(o.imageConfigDefault)
}, 70965, (e, t, n) => {
    "use strict";

    function r(e, t) {
        let n = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - n) < Math.abs(e - n) ? t : e, t.qualities[0]) : n
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}, 1948, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let r = e.r(70965),
        o = e.r(43369);

    function i({
        config: e,
        src: t,
        width: n,
        quality: a
    }) {
        let s = (0, o.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let n = new URLSearchParams(t.slice(e + 1)),
                    r = n.get("dpl");
                if (r) {
                    s = r, n.delete("dpl");
                    let o = n.toString();
                    t = t.slice(0, e) + (o ? "?" + o : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let l = (0, r.findClosestQuality)(a, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${n}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`
    }
    i.__next_img_default = !0;
    let a = i
}, 85437, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "Image", {
        enumerable: !0,
        get: function() {
            return v
        }
    });
    let r = e.r(55682),
        o = e.r(90809),
        i = e.r(43476),
        a = o._(e.r(71645)),
        s = r._(e.r(74080)),
        l = r._(e.r(25633)),
        c = e.r(8927),
        u = e.r(87690),
        d = e.r(18556);
    e.r(33525);
    let p = e.r(65856),
        m = r._(e.r(1948)),
        f = e.r(18581),
        g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !0,
            unoptimized: !1
        };

    function h(e, t, n, r, o, i, a) {
        let s = e ? .src;
        e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && o(!0), n ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let r = !1,
                        o = !1;
                    n.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => r,
                        isPropagationStopped: () => o,
                        persist: () => {},
                        preventDefault: () => {
                            r = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            o = !0, t.stopPropagation()
                        }
                    })
                }
                r ? .current && r.current(e)
            }
        }))
    }

    function y(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let P = (0, a.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: n,
        height: r,
        width: o,
        decoding: s,
        className: l,
        style: c,
        fetchPriority: u,
        placeholder: d,
        loading: p,
        unoptimized: m,
        fill: g,
        onLoadRef: P,
        onLoadingCompleteRef: b,
        setBlurComplete: v,
        setShowAltText: S,
        sizesInput: w,
        onLoad: E,
        onError: I,
        ...j
    }, O) => {
        let A = (0, a.useCallback)(e => {
                e && (I && (e.src = e.src), e.complete && h(e, d, P, b, v, m, w))
            }, [e, d, P, b, v, I, m, w]),
            T = (0, f.useMergedRef)(O, A);
        return (0, i.jsx)("img", { ...j,
            ...y(u),
            loading: p,
            width: o,
            height: r,
            decoding: s,
            "data-nimg": g ? "fill" : "1",
            className: l,
            style: c,
            sizes: n,
            srcSet: t,
            src: e,
            ref: T,
            onLoad: e => {
                h(e.currentTarget, d, P, b, v, m, w)
            },
            onError: e => {
                S(!0), "empty" !== d && v(!0), I && I(e)
            }
        })
    });

    function b({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let n = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...y(t.fetchPriority)
        };
        return e && s.default.preload ? (s.default.preload(t.src, n), null) : (0, i.jsx)(l.default, {
            children: (0, i.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...n
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let v = (0, a.forwardRef)((e, t) => {
        let n = (0, a.useContext)(p.RouterContext),
            r = (0, a.useContext)(d.ImageConfigContext),
            o = (0, a.useMemo)(() => {
                let e = g || r || u.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    n = e.deviceSizes.sort((e, t) => e - t),
                    o = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: n,
                    qualities: o,
                    localPatterns: "u" < typeof window ? r ? .localPatterns : e.localPatterns
                }
            }, [r]),
            {
                onLoad: s,
                onLoadingComplete: l
            } = e,
            f = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
            f.current = s
        }, [s]);
        let h = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
            h.current = l
        }, [l]);
        let [y, v] = (0, a.useState)(!1), [S, w] = (0, a.useState)(!1), {
            props: E,
            meta: I
        } = (0, c.getImgProps)(e, {
            defaultLoader: m.default,
            imgConf: o,
            blurComplete: y,
            showAltText: S
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(P, { ...E,
                unoptimized: I.unoptimized,
                placeholder: I.placeholder,
                fill: I.fill,
                onLoadRef: f,
                onLoadingCompleteRef: h,
                setBlurComplete: v,
                setShowAltText: w,
                sizesInput: e.sizes,
                ref: t
            }), I.preload ? (0, i.jsx)(b, {
                isAppRouter: !n,
                imgAttributes: E
            }) : null]
        })
    });
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 94909, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return u
        },
        getImageProps: function() {
            return c
        }
    };
    for (var o in r) Object.defineProperty(n, o, {
        enumerable: !0,
        get: r[o]
    });
    let i = e.r(55682),
        a = e.r(8927),
        s = e.r(85437),
        l = i._(e.r(1948));

    function c(e) {
        let {
            props: t
        } = (0, a.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !0,
                unoptimized: !1
            }
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return {
            props: t
        }
    }
    let u = s.Image
}, 57688, (e, t, n) => {
    t.exports = e.r(94909)
}, 30776, e => {
    "use strict";
    var t = e.i(43476),
        n = e.i(932);
    e.i(47167);
    var r = e.i(71645),
        o = e.i(31178),
        i = e.i(47414),
        a = e.i(74008),
        s = e.i(21476),
        l = e.i(72846),
        c = r,
        u = e.i(37806);

    function d(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    class p extends c.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if ((0, l.isHTMLElement)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
                let e = t.offsetParent,
                    n = (0, l.isHTMLElement)(e) && e.offsetWidth || 0,
                    r = (0, l.isHTMLElement)(e) && e.offsetHeight || 0,
                    o = getComputedStyle(t),
                    i = this.props.sizeRef.current;
                i.height = parseFloat(o.height), i.width = parseFloat(o.width), i.top = t.offsetTop, i.left = t.offsetLeft, i.right = n - i.width - i.left, i.bottom = r - i.height - i.top
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function m({
        children: e,
        isPresent: n,
        anchorX: o,
        anchorY: i,
        root: a,
        pop: s
    }) {
        let l = (0, c.useId)(),
            f = (0, c.useRef)(null),
            g = (0, c.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }),
            {
                nonce: h
            } = (0, c.useContext)(u.MotionConfigContext),
            y = function(...e) {
                return r.useCallback(function(...e) {
                    return t => {
                        let n = !1,
                            r = e.map(e => {
                                let r = d(e, t);
                                return n || "function" != typeof r || (n = !0), r
                            });
                        if (n) return () => {
                            for (let t = 0; t < r.length; t++) {
                                let n = r[t];
                                "function" == typeof n ? n() : d(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }(f, e.props ? .ref ? ? e ? .ref);
        return (0, c.useInsertionEffect)(() => {
            let {
                width: e,
                height: t,
                top: r,
                left: c,
                right: u,
                bottom: d
            } = g.current;
            if (n || !1 === s || !f.current || !e || !t) return;
            let p = "left" === o ? `left: ${c}` : `right: ${u}`,
                m = "bottom" === i ? `bottom: ${d}` : `top: ${r}`;
            f.current.dataset.motionPopId = l;
            let y = document.createElement("style");
            h && (y.nonce = h);
            let P = a ? ? document.head;
            return P.appendChild(y), y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${p}px !important;
            ${m}px !important;
          }
        `), () => {
                f.current ? .removeAttribute("data-motion-pop-id"), P.contains(y) && P.removeChild(y)
            }
        }, [n]), (0, t.jsx)(p, {
            isPresent: n,
            childRef: f,
            sizeRef: g,
            pop: s,
            children: !1 === s ? e : c.cloneElement(e, {
                ref: y
            })
        })
    }
    let f = ({
        children: e,
        initial: n,
        isPresent: o,
        onExitComplete: a,
        custom: l,
        presenceAffectsLayout: c,
        mode: u,
        anchorX: d,
        anchorY: p,
        root: f
    }) => {
        let h = (0, i.useConstant)(g),
            y = (0, r.useId)(),
            P = !0,
            b = (0, r.useMemo)(() => (P = !1, {
                id: y,
                initial: n,
                isPresent: o,
                custom: l,
                onExitComplete: e => {
                    for (let t of (h.set(e, !0), h.values()))
                        if (!t) return;
                    a && a()
                },
                register: e => (h.set(e, !1), () => h.delete(e))
            }), [o, h, a]);
        return c && P && (b = { ...b
        }), (0, r.useMemo)(() => {
            h.forEach((e, t) => h.set(t, !1))
        }, [o]), r.useEffect(() => {
            o || h.size || !a || a()
        }, [o]), e = (0, t.jsx)(m, {
            pop: "popLayout" === u,
            isPresent: o,
            anchorX: d,
            anchorY: p,
            root: f,
            children: e
        }), (0, t.jsx)(s.PresenceContext.Provider, {
            value: b,
            children: e
        })
    };

    function g() {
        return new Map
    }
    var h = e.i(64978);
    let y = e => e.key || "";

    function P(e) {
        let t = [];
        return r.Children.forEach(e, e => {
            (0, r.isValidElement)(e) && t.push(e)
        }), t
    }
    let b = ({
        children: e,
        custom: n,
        initial: s = !0,
        onExitComplete: l,
        presenceAffectsLayout: c = !0,
        mode: u = "sync",
        propagate: d = !1,
        anchorX: p = "left",
        anchorY: m = "top",
        root: g
    }) => {
        let [b, v] = (0, h.usePresence)(d), S = (0, r.useMemo)(() => P(e), [e]), w = d && !b ? [] : S.map(y), E = (0, r.useRef)(!0), I = (0, r.useRef)(S), j = (0, i.useConstant)(() => new Map), O = (0, r.useRef)(new Set), [A, T] = (0, r.useState)(S), [C, $] = (0, r.useState)(S);
        (0, a.useIsomorphicLayoutEffect)(() => {
            E.current = !1, I.current = S;
            for (let e = 0; e < C.length; e++) {
                let t = y(C[e]);
                w.includes(t) ? (j.delete(t), O.current.delete(t)) : !0 !== j.get(t) && j.set(t, !1)
            }
        }, [C, w.length, w.join("-")]);
        let x = [];
        if (S !== A) {
            let e = [...S];
            for (let t = 0; t < C.length; t++) {
                let n = C[t],
                    r = y(n);
                w.includes(r) || (e.splice(t, 0, n), x.push(n))
            }
            return "wait" === u && x.length && (e = x), $(P(e)), T(S), null
        }
        let {
            forceRender: _
        } = (0, r.useContext)(o.LayoutGroupContext);
        return (0, t.jsx)(t.Fragment, {
            children: C.map(e => {
                let r = y(e),
                    o = (!d || !!b) && (S === C || w.includes(r));
                return (0, t.jsx)(f, {
                    isPresent: o,
                    initial: (!E.current || !!s) && void 0,
                    custom: n,
                    presenceAffectsLayout: c,
                    mode: u,
                    root: g,
                    onExitComplete: o ? void 0 : () => {
                        if (O.current.has(r) || !j.has(r)) return;
                        O.current.add(r), j.set(r, !0);
                        let e = !0;
                        j.forEach(t => {
                            t || (e = !1)
                        }), e && (_ ? .(), $(I.current), d && v ? .(), l && l())
                    },
                    anchorX: p,
                    anchorY: m,
                    children: e
                }, r)
            })
        })
    };
    var v = e.i(46932);
    let S = {
        fade: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            }
        },
        "fade-scale": {
            initial: {
                opacity: 0,
                scale: .95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: .95
            }
        }
    };
    e.s(["default", 0, e => {
        let r, o, i = (0, n.c)(9),
            {
                isVisible: a,
                children: s,
                className: l,
                style: c,
                duration: u,
                variant: d
            } = e,
            p = void 0 === u ? .2 : u,
            m = void 0 === d ? "fade" : d;
        return i[0] !== s || i[1] !== l || i[2] !== p || i[3] !== a || i[4] !== c || i[5] !== m ? (r = a && (0, t.jsx)(v.motion.div, { ...S[m],
            transition: {
                duration: p
            },
            className: l,
            style: c,
            children: s
        }), i[0] = s, i[1] = l, i[2] = p, i[3] = a, i[4] = c, i[5] = m, i[6] = r) : r = i[6], i[7] !== r ? (o = (0, t.jsx)(b, {
            children: r
        }), i[7] = r, i[8] = o) : o = i[8], o
    }], 30776)
}, 28853, e => {
    "use strict";
    var t = e.i(43476),
        n = e.i(932),
        r = e.i(75157);
    e.s(["default", 0, e => {
        let o, i, a = (0, n.c)(4),
            {
                className: s
            } = e;
        return a[0] !== s ? (o = (0, r.cls)("border-t-2 border-black/5", s), a[0] = s, a[1] = o) : o = a[1], a[2] !== o ? (i = (0, t.jsx)("div", {
            className: o
        }), a[2] = o, a[3] = i) : i = a[3], i
    }])
}, 95380, e => {
    "use strict";
    var t = e.i(43476),
        n = e.i(932),
        r = e.i(71645),
        o = e.i(30776),
        i = e.i(75157);
    e.s(["default", 0, e => {
        var a;
        let s, l, c, u, d, p, m, f, g = (0, n.c)(12),
            {
                isOpen: h,
                onClose: y,
                children: P,
                className: b,
                contentClassName: v,
                styleClassName: S,
                triggerRef: w
            } = e,
            E = void 0 === S ? "card" : S,
            I = (0, r.useRef)(null);
        return g[0] !== w ? (s = w ? [w] : void 0, g[0] = w, g[1] = s) : s = g[1], a = s, m = (0, n.c)(6), f = void 0 === h || h, m[0] !== a || m[1] !== y || m[2] !== f || m[3] !== I ? (d = () => {
            if (!f) return;
            let e = e => {
                    I.current && !I.current.contains(e.target) && (a ? .some(t => t.current ? .contains(e.target)) || y())
                },
                t = e => {
                    "Escape" === e.key && y()
                };
            return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
                document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t)
            }
        }, p = [I, y, f, a], m[0] = a, m[1] = y, m[2] = f, m[3] = I, m[4] = d, m[5] = p) : (d = m[4], p = m[5]), (0, r.useEffect)(d, p), g[2] !== b || g[3] !== E ? (l = (0, i.cls)("absolute! z-50 right-0 top-12 rounded origin-top-right", E, b), g[2] = b, g[3] = E, g[4] = l) : l = g[4], g[5] !== P || g[6] !== v ? (c = (0, t.jsx)("div", {
            ref: I,
            className: v,
            children: P
        }), g[5] = P, g[6] = v, g[7] = c) : c = g[7], g[8] !== h || g[9] !== l || g[10] !== c ? (u = (0, t.jsx)(o.default, {
            isVisible: h,
            variant: "fade-scale",
            className: l,
            children: c
        }), g[8] = h, g[9] = l, g[10] = c, g[11] = u) : u = g[11], u
    }], 95380)
}, 4392, e => {
    "use strict";
    let t = null,
        n = () => (t || (t = e.A(67828).then(e => e.default)), t);
    e.s(["clarityEvent", 0, e => {
        n().then(t => t.event(e)).catch(() => {})
    }, "clarityTag", 0, (e, t) => {
        n().then(n => n.setTag(e, String(t))).catch(() => {})
    }])
}, 18279, e => {
    "use strict";
    let t = "https://api.webild.io";
    class n extends Error {
        status;
        response;
        constructor(e, t, n) {
            super(e), this.status = t, this.response = n, this.name = "ApiError"
        }
    }
    async function r(e, o, i, a = !1) {
        let s = `${t}${e}`,
            l = {
                mode: "cors",
                Accept: "application/json",
                Authorization: `Bearer ${i}`,
                ...o.headers
            };
        a || o.body instanceof FormData || (l["Content-Type"] = "application/json");
        let c = await fetch(s, { ...o,
            headers: l
        });
        if (!c.ok) {
            let e = await c.json().catch(() => ({})),
                t = e.details ? .message || `Status: ${c.status}`;
            throw new n(`Error: ${t}`, c.status, e)
        }
        return await c.json()
    }
    async function o(e) {
        return r("/stripe/billing-history", {
            method: "GET"
        }, e)
    }
    async function i(e, t) {
        return r("/projects", {
            method: "POST",
            body: JSON.stringify(e)
        }, t)
    }
    async function a(e, t, n = 10, o) {
        let i = `/projects/${e}/messages?limit=${n}`;
        return o && (i += `&cursor=${o}`), r(i, {
            method: "GET"
        }, t)
    }
    async function s(e, t, n) {
        return r(`/projects/${e}/deploy`, {
            method: "POST",
            body: JSON.stringify({
                domainName: n
            })
        }, t)
    }
    async function l(e, t, n) {
        return r(`/projects/${e}/switch-version`, {
            method: "POST",
            body: JSON.stringify({
                project_version_id: t
            })
        }, n)
    }
    async function c(e, t) {
        return r(`/projects/${e}`, {
            method: "GET"
        }, t)
    }
    async function u(e, t) {
        return r(`/projects/${e}/pages`, {
            method: "GET"
        }, t)
    }
    async function d(e = 10, t, n) {
        let o = `/projects?limit=${e}`;
        return n && (o += `&cursor=${encodeURIComponent(n)}`), r(o, {
            method: "GET",
            cache: "no-store"
        }, t)
    }
    async function p(e, t) {
        return r(`/projects/${e}`, {
            method: "DELETE"
        }, t)
    }
    async function m(e, t) {
        return r("/projects/bulk-delete", {
            method: "POST",
            body: JSON.stringify({
                projectIds: e
            })
        }, t)
    }
    async function f(e, t, n, o, i, a, s) {
        if (a && a.length > 0) {
            let l = new FormData;
            return l.append("type", "user"), l.append("message", n), l.append("is_system", "false"), i ? .selector && l.append("elementSelector", i.selector), i ? .semanticType && l.append("elementType", i.semanticType), i ? .innerText && l.append("elementText", i.innerText), s && l.append("templateData", JSON.stringify(s)), a.slice(0, 5).forEach(e => {
                l.append("images", e)
            }), r(`/projects/${e}/versions/${t}/messages`, {
                method: "POST",
                body: l
            }, o, !0)
        }
        let l = {
            type: "user",
            message: n,
            is_system: !1,
            ...i ? .selector && {
                elementSelector: i.selector
            },
            ...i ? .semanticType && {
                elementType: i.semanticType
            },
            ...i ? .innerText && {
                elementText: i.innerText
            }
        };
        return s && (l.templateData = s), r(`/projects/${e}/versions/${t}/messages`, {
            method: "POST",
            body: JSON.stringify(l)
        }, o)
    }
    async function g(e, t, n, o) {
        return r(`/projects/${e}/versions/${t}/messages/edit`, {
            method: "POST",
            body: JSON.stringify(n)
        }, o)
    }
    async function h(e, t, n, o) {
        return r(`/projects/${e}/versions/${t}/visual-edit`, {
            method: "POST",
            body: JSON.stringify({
                replacements: n
            })
        }, o)
    }
    async function y(e, t) {
        return r(`/projects/${e}/stop-generation`, {
            method: "POST"
        }, t)
    }
    async function P(e, t, n) {
        return r(`/projects/${e}/versions/${t}/fix-generation`, {
            method: "POST"
        }, n)
    }
    async function b(e, t, n, o) {
        return r(`/projects/${e}/versions/${t}/fix-sandbox-crash`, {
            method: "POST",
            body: JSON.stringify({
                error: o
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }, n)
    }
    async function v(e, t, n, o) {
        return r(`/projects/${e}/versions/${t}/useTemplate`, {
            method: "POST",
            body: JSON.stringify(n)
        }, o)
    }
    async function S(e, t, n) {
        let o = n ? .projectId,
            i = n ? .tierIndex;
        return r("/stripe/checkout-session", {
            method: "POST",
            body: JSON.stringify({
                plan: e,
                ...o && {
                    projectId: o
                },
                ..."number" == typeof i && {
                    tierIndex: i
                }
            })
        }, t)
    }
    async function w(e) {
        return r("/stripe/subscriptions", {
            method: "GET"
        }, e)
    }
    async function E(e) {
        return r("/stripe/additional-credits", {
            method: "GET"
        }, e)
    }
    async function I(e) {
        return r("/stripe/subscription/cancel", {
            method: "POST"
        }, e)
    }
    async function j(e, t) {
        return r("/images/generate", {
            method: "POST",
            body: JSON.stringify({
                prompt: e
            })
        }, t)
    }
    async function O(e) {
        return r("/images", {
            method: "GET",
            headers: {
                "Cache-Control": "no-cache, no-store, must-revalidate"
            }
        }, e)
    }
    async function A(e, t, n) {
        return r("/images/save", {
            method: "POST",
            body: JSON.stringify({
                key: e,
                url: t
            })
        }, n)
    }
    async function T(e, t, n) {
        return r("/images", {
            method: "DELETE",
            body: JSON.stringify({
                keys: Array.isArray(e) ? e : [e],
                urls: Array.isArray(t) ? t : [t]
            })
        }, n)
    }
    async function C(e) {
        return r("/dnsimple/domains", {
            method: "GET"
        }, e)
    }
    async function $(e, t) {
        return r(`/projects/${e}/domainsConfig`, {
            method: "GET"
        }, t)
    }
    async function x(e, t) {
        return r(`/projects/${e}/theme/colors`, {
            method: "GET"
        }, t)
    }
    async function _(e, t, n) {
        return r(`/projects/${e}/theme/colors`, {
            method: "PUT",
            body: JSON.stringify(t)
        }, n)
    }
    async function R(e, t) {
        return r(`/projects/${e}/theme/fonts`, {
            method: "GET"
        }, t)
    }
    async function N(e, t, n) {
        return r(`/projects/${e}/theme/fonts`, {
            method: "PUT",
            body: JSON.stringify({
                fontKey: t
            })
        }, n)
    }
    async function D(e, t, n) {
        return r(`/projects/${e}/email-to`, {
            method: "PUT",
            body: JSON.stringify({
                email_to: t ? ? null
            })
        }, n)
    }
    async function k(e, t) {
        return r("/dnsimple/vercel/connect", {
            method: "POST",
            body: JSON.stringify(e)
        }, t)
    }
    async function M(e, t) {
        let n = await fetch(`/api/check-availability?domain=${encodeURIComponent(e)}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${t}`
            }
        });
        if (!n.ok) throw Error("Failed to check domain availability");
        let r = await n.json();
        return "invalid" === r.availability ? {
            code: 400,
            validationError: r.error,
            data: {
                domain: r.domain,
                available: !1,
                premium: !1
            }
        } : {
            code: 200,
            data: {
                domain: r.domain,
                available: "available" === r.availability,
                premium: !1
            }
        }
    }
    async function L(e, t) {
        return r(`/dnsimple/domains/preregister/${encodeURIComponent(e)}`, {
            method: "POST"
        }, t)
    }
    async function G(e) {
        return r("/dnsimple/accounts/me", {
            method: "GET"
        }, e)
    }
    async function U(e, t) {
        return r(`/dnsimple/${encodeURIComponent(e)}`, {
            method: "GET"
        }, t)
    }
    async function z(e, t) {
        return r(`/dnsimple/${encodeURIComponent(e)}/nameservers`, {
            method: "GET"
        }, t)
    }
    async function F(e, t, n) {
        return r(`/dnsimple/${encodeURIComponent(e)}/nameservers`, {
            method: "PUT",
            body: JSON.stringify({
                nameservers: t
            })
        }, n)
    }
    async function J(e, t) {
        return r(`/dnsimple/${encodeURIComponent(e)}/records`, {
            method: "GET"
        }, t)
    }
    async function B(e, t, n) {
        return r(`/dnsimple/${encodeURIComponent(e)}/records`, {
            method: "POST",
            body: JSON.stringify(t)
        }, n)
    }
    async function W(e, t, n) {
        return r(`/dnsimple/${encodeURIComponent(e)}/records/${encodeURIComponent(t)}`, {
            method: "DELETE"
        }, n)
    }
    async function q(e, t, n) {
        return r(`/dnsimple/domains/auto-renewal/${e}`, {
            method: "PUT",
            body: JSON.stringify({
                enable: t
            })
        }, n)
    }
    async function Y(e, t, n, o) {
        return r("/stripe/domain-checkout", {
            method: "POST",
            body: JSON.stringify({
                redirectUrl: e,
                price: t,
                meta: o
            })
        }, n)
    }
    async function H(e, t) {
        return r(`/stripe/domain-checkout/${e}/status`, {
            method: "GET"
        }, t)
    }
    async function V(e, t, n) {
        return r(`/projects/${e}/versions/${t}/settings`, {
            method: "GET"
        }, n)
    }
    async function X(e, t, n, o) {
        return r(`/projects/${e}/versions/${t}/settings`, {
            method: "POST",
            body: JSON.stringify(n)
        }, o)
    }
    async function K(e, t) {
        try {
            let n = new FormData;
            n.append("files", e), n.append("contentType", e.type);
            let o = await r("/images/upload", {
                method: "POST",
                body: n,
                headers: {}
            }, t, !0);
            return {
                code: 0,
                data: o[0]
            }
        } catch (e) {
            throw new n("Failed to upload image file", 500, e)
        }
    }
    async function Q(e, t) {
        try {
            let n = new FormData;
            e.forEach(e => {
                n.append("files", e)
            });
            let o = await r("/images/upload", {
                method: "POST",
                body: n,
                headers: {}
            }, t, !0);
            return {
                code: 0,
                data: o
            }
        } catch (e) {
            throw new n("Failed to upload image files", 500, e)
        }
    }
    async function Z(e, t, n) {
        return r(`/projects/${e}/domains`, {
            method: "POST",
            body: JSON.stringify({
                domain: t
            })
        }, n)
    }
    async function ee(e, t, n) {
        return r(`/projects/${e}/domains/verify`, {
            method: "POST",
            body: JSON.stringify({
                domain: t
            })
        }, n)
    }
    async function et(e, t, n) {
        return r("/dnsimple/vercel/disconnect", {
            method: "POST",
            body: JSON.stringify({
                domain: t,
                projectId: e
            })
        }, n)
    }
    async function en(e) {
        return r("/users/limits", {
            method: "GET"
        }, e)
    }
    async function er(e, t, n) {
        return r(`/projects/${e}/versions/${t}/improvements`, {
            method: "GET"
        }, n)
    }
    async function eo(e) {
        return r("/users/referral-code", {
            method: "GET"
        }, e)
    }
    async function ei(e, t) {
        return r("/users/claim-referral-bonus", {
            method: "POST",
            body: JSON.stringify({
                code: e
            })
        }, t)
    }
    async function ea(e, t, n) {
        let {
            title: o,
            slug: i,
            status: a,
            image: s,
            content: l,
            category: c,
            imagePreview: u
        } = t, d = new FormData;
        return d.append("title", o), d.append("slug", i), d.append("status", a), d.append("content", l), d.append("category", c), s && d.append("image", s), u && d.append("imagePreview", u), r(`/posts/${e}`, {
            method: "POST",
            body: d
        }, n, !0)
    }
    async function es(e, t, n) {
        return r(`/posts/${e}/generate`, {
            method: "POST",
            body: JSON.stringify({
                prompt: t
            })
        }, n)
    }
    async function el(e, t, n) {
        let o = n ? `?status=${n}` : "";
        return r(`/posts/${e}${o}`, {
            method: "GET"
        }, t)
    }
    async function ec(e, t, n, o) {
        let {
            title: i,
            slug: a,
            status: s,
            image: l,
            content: c,
            category: u
        } = n, d = new FormData;
        return d.append("title", i), d.append("slug", a), d.append("status", s), d.append("content", c), d.append("category", u), l && d.append("image", l), r(`/posts/${e}/${t}`, {
            method: "PATCH",
            body: d
        }, o, !0)
    }
    async function eu(e, t, n) {
        return r(`/posts/${e}/${t}`, {
            method: "DELETE"
        }, n)
    }
    async function ed(e, t) {
        return r(`/emails/projects/${e}/oauth/google/url`, {
            method: "GET"
        }, t)
    }
    async function ep(e, t) {
        return r(`/emails/projects/${e}/oauth/outlook/url`, {
            method: "GET"
        }, t)
    }
    async function em(e, t) {
        return r(`/emails/projects/${e}/connection`, {
            method: "GET"
        }, t)
    }
    async function ef(e, t, n) {
        return r(`/emails/projects/${e}/connections/${t}`, {
            method: "DELETE"
        }, n)
    }
    async function eg(e, t, n) {
        return r(`/emails/projects/${e}/send`, {
            method: "POST",
            body: JSON.stringify(t)
        }, n)
    }
    async function eh(e, t, n, o) {
        let i = new URLSearchParams;
        n.page && i.append("page", n.page.toString()), n.limit && i.append("limit", n.limit.toString()), n.query && i.append("query", n.query), n.folder && i.append("folder", n.folder), n.readStatus && i.append("readStatus", n.readStatus);
        let a = i.toString();
        return r(`/emails/projects/${e}/connections/${t}/emails${a?`?${a}`:""}`, {
            method: "GET"
        }, o)
    }
    async function ey(e, t, n, o) {
        return r(`/emails/projects/${e}/connections/${t}/emails/${n}/read`, {
            method: "PATCH"
        }, o)
    }
    async function eP(e, n) {
        let r = `${t}/projects/${e}/sandbox-snapshot`,
            o = await fetch(r, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${n}`,
                    Accept: "image/webp,image/*"
                },
                cache: "no-store"
            });
        if (!o.ok) return null;
        let i = await o.blob();
        return URL.createObjectURL(i)
    }
    e.s(["ApiError", 0, n, "addDomainToProjectAPI", 0, Z, "bulkDeleteProjectsAPI", 0, m, "cancelSubscriptionAPI", 0, I, "checkDomainAvailabilityAPI", 0, M, "claimReferralBonusAPI", 0, ei, "connectDomainToProjectAPI", 0, k, "createDnsRecordAPI", 0, B, "createDomainCheckoutSessionAPI", 0, Y, "createMessageAPI", 0, f, "createPostAPI", 0, ea, "createProjectAPI", 0, i, "createStripeCheckoutSessionAPI", 0, S, "deleteDnsRecordAPI", 0, W, "deleteImagesAPI", 0, T, "deletePostAPI", 0, eu, "deleteProjectAPI", 0, p, "deployProjectAPI", 0, s, "disconnectEmailAPI", 0, ef, "editMessageAPI", 0, g, "fixGenerationAPI", 0, P, "fixSandboxCrashAPI", 0, b, "generateImageAPI", 0, j, "generatePostAPI", 0, es, "getAdditionalCreditsAPI", 0, E, "getBillingHistoryAPI", 0, o, "getDNSimpleAccountAPI", 0, G, "getDnsRecordsAPI", 0, J, "getDomainCheckoutSessionStatusAPI", 0, H, "getDomainDetailAPI", 0, U, "getEmailConnectionAPI", 0, em, "getGoogleOAuthUrlAPI", 0, ed, "getImagesAPI", 0, O, "getMessagesAPI", 0, a, "getNameserversAPI", 0, z, "getOutlookOAuthUrlAPI", 0, ep, "getProjectDomainsConfigAPI", 0, $, "getProjectIDAPI", 0, c, "getProjectImprovementsAPI", 0, er, "getProjectPagesAPI", 0, u, "getProjectPostsAPI", 0, el, "getProjectThemeColorsAPI", 0, x, "getProjectThemeFontsAPI", 0, R, "getProjectsAPI", 0, d, "getReferralCodeAPI", 0, eo, "getSandboxSnapshotAPI", 0, eP, "getSiteSettingsAPI", 0, V, "getSubscriptionPlansAPI", 0, w, "getUserDomainsAPI", 0, C, "getUserLimitsAPI", 0, en, "listEmailsAPI", 0, eh, "markEmailAsReadAPI", 0, ey, "preregisterDomainAPI", 0, L, "removeDomainFromProjectAPI", 0, et, "saveImageAPI", 0, A, "sendEmailAPI", 0, eg, "stopGenerationAPI", 0, y, "switchProjectVersionAPI", 0, l, "trackDomainSearchAPI", 0, function(e, t) {
        r("/dnsimple/domains/track-search", {
            method: "POST",
            body: JSON.stringify({
                domain: e
            })
        }, t).catch(() => {})
    }, "updateDomainAutoRenewalAPI", 0, q, "updateNameserversAPI", 0, F, "updatePostAPI", 0, ec, "updateProjectEmailToAPI", 0, D, "updateProjectThemeColorsAPI", 0, _, "updateProjectThemeFontsAPI", 0, N, "updateSiteSettingsAPI", 0, X, "uploadImageFileAPI", 0, K, "uploadImageFilesAPI", 0, Q, "useTemplateAPI", 0, v, "verifyDomainDnsAPI", 0, ee, "visualEditAPI", 0, h])
}, 26288, e => {
    "use strict";
    let t = "user_limits",
        n = "user_limits_updated",
        r = "pending_prompt",
        o = {
            setLimits: e => {
                try {
                    localStorage.setItem(t, JSON.stringify(e)), window.dispatchEvent(new CustomEvent(n))
                } catch (e) {}
            },
            getLimits: () => {
                try {
                    let e = localStorage.getItem(t);
                    if (!e) return null;
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            },
            clearLimits: () => {
                try {
                    localStorage.removeItem(t), window.dispatchEvent(new CustomEvent(n))
                } catch (e) {}
            },
            updateLimits: e => {
                let t = o.getLimits();
                t && o.setLimits({ ...t,
                    ...e
                })
            },
            setPendingPrompt: e => {
                try {
                    sessionStorage.setItem(r, e)
                } catch (e) {}
            },
            getPendingPrompt: () => {
                try {
                    return sessionStorage.getItem(r)
                } catch (e) {
                    return null
                }
            },
            clearPendingPrompt: () => {
                try {
                    sessionStorage.removeItem(r)
                } catch (e) {}
            },
            LIMITS_UPDATE_EVENT: n
        };
    e.s(["sessionStorageUtils", 0, o])
}, 11519, e => {
    "use strict";
    var t = e.i(68834),
        n = e.i(79473);
    let r = (0, t.create)()((0, n.devtools)(e => ({
        activeModal: null,
        modalData: {},
        openModal: (t, n = {}) => e({
            activeModal: t,
            modalData: n
        }),
        closeModal: () => e({
            activeModal: null,
            modalData: {}
        }),
        setModalData: t => e(e => ({
            modalData: { ...e.modalData,
                ...t
            }
        }))
    }), {
        name: "modal-store"
    }));
    e.s(["useModalStore", 0, r])
}]);