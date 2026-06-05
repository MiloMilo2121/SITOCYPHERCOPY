(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 75254, e => {
    "use strict";
    var t = e.i(71645);
    let r = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        o = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
    var n = {
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
        size: r = 24,
        strokeWidth: i = 2,
        absoluteStrokeWidth: a,
        className: l = "",
        children: s,
        iconNode: c,
        ...u
    }, d) => (0, t.createElement)("svg", {
        ref: d,
        ...n,
        width: r,
        height: r,
        stroke: e,
        strokeWidth: a ? 24 * Number(i) / Number(r) : i,
        className: o("lucide", l),
        ...!s && !(e => {
            for (let t in e)
                if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
        })(u) && {
            "aria-hidden": "true"
        },
        ...u
    }, [...c.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(s) ? s : [s]]));
    e.s(["default", 0, (e, n) => {
        let a = (0, t.forwardRef)(({
            className: a,
            ...l
        }, s) => (0, t.createElement)(i, {
            ref: s,
            iconNode: n,
            className: o(`lucide-${r(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, a),
            ...l
        }));
        return a.displayName = r(e), a
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
        r = e.i(71645),
        o = e.i(31278),
        n = e.i(75157);
    let i = (0, r.forwardRef)(({
        children: e,
        className: r,
        styleClassName: i = "button-secondary",
        gradientRoundedClassName: a,
        type: l = "button",
        onClick: s,
        onMouseEnter: c,
        disabled: u = !1,
        isLoading: d = !1,
        loadingText: p
    }, f) => (0, t.jsx)("button", {
        ref: f,
        type: l,
        disabled: u || d,
        onMouseEnter: c,
        className: (0, n.cls)("button text-sm font-medium outline-none focus:outline-none focus-visible:outline-none transition-all duration-200", a, i, r, (u || d) && "opacity-50 select-none pointer-events-none"),
        onClick: s,
        children: d ? (0, t.jsxs)("span", {
            className: "flex items-center justify-center gap-2",
            children: [(0, t.jsx)(o.Loader2, {
                className: "h-[1em] w-auto animate-spin"
            }), p ? ? e]
        }) : e
    }));
    i.displayName = "Button", e.s(["default", 0, i])
}, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let o = e.r(71645);

    function n(e, t) {
        let r = (0, o.useRef)(null),
            n = (0, o.useRef)(null);
        return (0, o.useCallback)(o => {
            if (null === o) {
                let e = r.current;
                e && (r.current = null, e());
                let t = n.current;
                t && (n.current = null, t())
            } else e && (r.current = i(e, o)), t && (n.current = i(t, o))
        }, [e, t])
    }

    function i(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 62788, e => {
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
}, 95057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return c
        },
        urlObjectKeys: function() {
            return s
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let i = e.r(90809)._(e.r(98183)),
        a = /https?|ftp|gopher|file/;

    function l(e) {
        let {
            auth: t,
            hostname: r
        } = e, o = e.protocol || "", n = e.pathname || "", l = e.hash || "", s = e.query || "", c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), s && "object" == typeof s && (s = String(i.urlQueryToSearchParams(s)));
        let u = e.search || s && `?${s}` || "";
        return o && !o.endsWith(":") && (o += ":"), e.slashes || (!o || a.test(o)) && !1 !== c ? (c = "//" + (c || ""), n && "/" !== n[0] && (n = "/" + n)) : c || (c = ""), l && "#" !== l[0] && (l = "#" + l), u && "?" !== u[0] && (u = "?" + u), n = n.replace(/[?#]/g, encodeURIComponent), u = u.replace("#", "%23"), `${o}${c}${n}${u}${l}`
    }
    let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function c(e) {
        return l(e)
    }
}, 73668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let o = e.r(18967),
        n = e.r(52817);

    function i(e) {
        if (!(0, o.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, o.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, n.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 84508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e => {}
}, 22016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return y
        },
        useLinkStatus: function() {
            return S
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let i = e.r(90809),
        a = e.r(43476),
        l = i._(e.r(71645)),
        s = e.r(95057),
        c = e.r(8372),
        u = e.r(18581),
        d = e.r(18967),
        p = e.r(5550);
    e.r(33525);
    let f = e.r(88540),
        m = e.r(91949),
        h = e.r(73668),
        g = e.r(9396);

    function y(t) {
        var r, o;
        let n, i, y, [S, v] = (0, l.useOptimistic)(m.IDLE_LINK_STATUS),
            C = (0, l.useRef)(null),
            {
                href: P,
                as: w,
                children: k,
                prefetch: N = null,
                passHref: T,
                replace: _,
                shallow: x,
                scroll: O,
                onClick: j,
                onMouseEnter: I,
                onTouchStart: E,
                legacyBehavior: A = !1,
                onNavigate: R,
                transitionTypes: L,
                ref: U,
                unstable_dynamicOnHover: M,
                ...D
            } = t;
        n = k, A && ("string" == typeof n || "number" == typeof n) && (n = (0, a.jsx)("a", {
            children: n
        }));
        let G = l.default.useContext(c.AppRouterContext),
            $ = !1 !== N,
            F = !1 !== N ? null === (o = N) || "auto" === o ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR,
            B = "string" == typeof(r = w || P) ? r : (0, s.formatUrl)(r);
        if (A) {
            if (n ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            i = l.default.Children.only(n)
        }
        let Y = A ? i && "object" == typeof i && i.ref : U,
            W = l.default.useCallback(e => (null !== G && (C.current = (0, m.mountLinkInstance)(e, B, G, F, $, v)), () => {
                C.current && ((0, m.unmountLinkForCurrentNavigation)(C.current), C.current = null), (0, m.unmountPrefetchableInstance)(e)
            }), [$, B, G, F, v]),
            z = {
                ref: (0, u.useMergedRef)(W, Y),
                onClick(t) {
                    A || "function" != typeof j || j(t), A && i.props && "function" == typeof i.props.onClick && i.props.onClick(t), !G || t.defaultPrevented || function(t, r, o, n, i, a, s) {
                        if ("u" > typeof window) {
                            let c, {
                                nodeName: u
                            } = t.currentTarget;
                            if ("A" === u.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, h.isLocalURL)(r)) {
                                n && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), a) {
                                let e = !1;
                                if (a({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = e.r(99781);
                            l.default.startTransition(() => {
                                d(r, n ? "replace" : "push", !1 === i ? f.ScrollBehavior.NoScroll : f.ScrollBehavior.Default, o.current, s)
                            })
                        }
                    }(t, B, C, _, O, R, L)
                },
                onMouseEnter(e) {
                    A || "function" != typeof I || I(e), A && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e), G && $ && (0, m.onNavigationIntent)(e.currentTarget, !0 === M)
                },
                onTouchStart: function(e) {
                    A || "function" != typeof E || E(e), A && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e), G && $ && (0, m.onNavigationIntent)(e.currentTarget, !0 === M)
                }
            };
        return (0, d.isAbsoluteUrl)(B) ? z.href = B : A && !T && ("a" !== i.type || "href" in i.props) || (z.href = (0, p.addBasePath)(B)), y = A ? l.default.cloneElement(i, z) : (0, a.jsx)("a", { ...D,
            ...z,
            children: n
        }), (0, a.jsx)(b.Provider, {
            value: S,
            children: y
        })
    }
    e.r(84508);
    let b = (0, l.createContext)(m.IDLE_LINK_STATUS),
        S = () => (0, l.useContext)(b);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 664, e => {
    "use strict";
    var t = e.i(68834),
        r = e.i(79473);
    let o = "webild-cookie-consent",
        n = (0, t.create)()((0, r.devtools)(e => ({
            consentStatus: "pending",
            hasLoaded: !1,
            loadConsent: () => {
                let t = localStorage.getItem(o);
                "accepted" === t || "declined" === t ? e({
                    consentStatus: t,
                    hasLoaded: !0
                }) : e({
                    hasLoaded: !0
                })
            },
            acceptCookies: () => {
                localStorage.setItem(o, "accepted"), e({
                    consentStatus: "accepted"
                })
            },
            declineCookies: () => {
                localStorage.setItem(o, "declined"), e({
                    consentStatus: "declined"
                })
            }
        }), {
            name: "cookie-consent-store"
        }));
    e.s(["useCookieConsentStore", 0, n])
}, 74298, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(932),
        o = e.i(22016),
        n = e.i(21742),
        i = e.i(71645),
        a = e.i(18566),
        l = e.i(664),
        s = e.i(75157),
        c = e.i(75980);
    e.s(["default", 0, () => {
        let e, u, d, p, f, m, h, g = (0, r.c)(16),
            {
                shouldShow: y,
                isVisible: b,
                isDismissing: S,
                handleAccept: v,
                handleDecline: C
            } = (() => {
                let e, t, o, n, s, c, u, d, p, f, m, h, g = (0, r.c)(24),
                    y = (0, a.usePathname)(),
                    {
                        consentStatus: b,
                        hasLoaded: S,
                        loadConsent: v,
                        acceptCookies: C,
                        declineCookies: P
                    } = (0, l.useCookieConsentStore)(),
                    [w, k] = (0, i.useState)(!1),
                    [N, T] = (0, i.useState)(!1),
                    [_, x] = (0, i.useState)(!0),
                    O = (0, i.useRef)(null);
                g[0] !== y ? (e = y ? .startsWith("/preview"), g[0] = y, g[1] = e) : e = g[1];
                let j = e;
                g[2] !== v ? (t = () => {
                    v()
                }, o = [v], g[2] = v, g[3] = t, g[4] = o) : (t = g[3], o = g[4]), (0, i.useEffect)(t, o), g[5] !== b || g[6] !== S ? (n = () => {
                    if (S && "pending" === b) {
                        let e = setTimeout(() => k(!0), 500);
                        return () => clearTimeout(e)
                    }
                }, s = [S, b], g[5] = b, g[6] = S, g[7] = n, g[8] = s) : (n = g[7], s = g[8]), (0, i.useEffect)(n, s), g[9] !== b ? (c = () => {
                    "pending" !== b && x(!1)
                }, u = [b], g[9] = b, g[10] = c, g[11] = u) : (c = g[10], u = g[11]), (0, i.useEffect)(c, u), g[12] !== C ? (d = () => {
                    T(!0), O.current && clearTimeout(O.current), O.current = setTimeout(() => {
                        C()
                    }, 300)
                }, g[12] = C, g[13] = d) : d = g[13];
                let I = d;
                g[14] !== P ? (p = () => {
                    T(!0), O.current && clearTimeout(O.current), O.current = setTimeout(() => {
                        P()
                    }, 300)
                }, g[14] = P, g[15] = p) : p = g[15];
                let E = p;
                g[16] === Symbol.for("react.memo_cache_sentinel") ? (m = () => () => {
                    O.current && clearTimeout(O.current)
                }, f = [], g[16] = f, g[17] = m) : (f = g[16], m = g[17]), (0, i.useEffect)(m, f);
                let A = S && _ && !j,
                    R = w && !N;
                return g[18] !== I || g[19] !== E || g[20] !== N || g[21] !== R || g[22] !== A ? (h = {
                    shouldShow: A,
                    isVisible: R,
                    isDismissing: N,
                    handleAccept: I,
                    handleDecline: E
                }, g[18] = I, g[19] = E, g[20] = N, g[21] = R, g[22] = A, g[23] = h) : h = g[23], h
            })();
        if (!y) return null;
        let P = b ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
        return g[0] !== P ? (e = (0, s.cls)("fixed! flex flex-col z-100 gap-4 p-5 bottom-5 right-5 md:left-auto md:right-5 w-75 md:w-25 card rounded transition-all duration-300", P), g[0] = P, g[1] = e) : e = g[1], g[2] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("h3", {
            className: "text-base font-medium text-black leading-tight",
            children: c.UI_STRINGS.notifications.cookie.title
        }), g[2] = u) : u = g[2], g[3] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [u, (0, t.jsxs)("p", {
                className: "text-sm text-black leading-tight",
                children: [c.UI_STRINGS.notifications.cookie.description, " ", (0, t.jsx)(o.default, {
                    href: "/cookies",
                    className: "underline",
                    children: c.UI_STRINGS.notifications.cookie.learnMore
                })]
            })]
        }), g[3] = d) : d = g[3], g[4] !== C || g[5] !== S ? (p = (0, t.jsx)(n.default, {
            onClick: C,
            disabled: S,
            children: c.UI_STRINGS.notifications.cookie.decline
        }), g[4] = C, g[5] = S, g[6] = p) : p = g[6], g[7] !== v || g[8] !== S ? (f = (0, t.jsx)(n.default, {
            onClick: v,
            styleClassName: "button-primary",
            disabled: S,
            children: c.UI_STRINGS.notifications.cookie.accept
        }), g[7] = v, g[8] = S, g[9] = f) : f = g[9], g[10] !== p || g[11] !== f ? (m = (0, t.jsxs)("div", {
            className: "grid grid-cols-2 gap-3",
            children: [p, f]
        }), g[10] = p, g[11] = f, g[12] = m) : m = g[12], g[13] !== e || g[14] !== m ? (h = (0, t.jsxs)("div", {
            className: e,
            children: [d, m]
        }), g[13] = e, g[14] = m, g[15] = h) : h = g[15], h
    }], 74298)
}, 92100, e => {
    e.n(e.i(74298))
}]);