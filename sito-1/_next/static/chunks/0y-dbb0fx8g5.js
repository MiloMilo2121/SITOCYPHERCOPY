(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 75254, e => {
    "use strict";
    var t = e.i(71645);
    let i = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, i) => i ? i.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        a = (...e) => e.filter((e, t, i) => !!e && "" !== e.trim() && i.indexOf(e) === t).join(" ").trim();
    var r = {
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
    let o = (0, t.forwardRef)(({
        color: e = "currentColor",
        size: i = 24,
        strokeWidth: o = 2,
        absoluteStrokeWidth: n,
        className: s = "",
        children: l,
        iconNode: c,
        ...u
    }, d) => (0, t.createElement)("svg", {
        ref: d,
        ...r,
        width: i,
        height: i,
        stroke: e,
        strokeWidth: n ? 24 * Number(o) / Number(i) : o,
        className: a("lucide", s),
        ...!l && !(e => {
            for (let t in e)
                if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
        })(u) && {
            "aria-hidden": "true"
        },
        ...u
    }, [...c.map(([e, i]) => (0, t.createElement)(e, i)), ...Array.isArray(l) ? l : [l]]));
    e.s(["default", 0, (e, r) => {
        let n = (0, t.forwardRef)(({
            className: n,
            ...s
        }, l) => (0, t.createElement)(o, {
            ref: l,
            iconNode: r,
            className: a(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, n),
            ...s
        }));
        return n.displayName = i(e), n
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
        i = e.i(71645),
        a = e.i(31278),
        r = e.i(75157);
    let o = (0, i.forwardRef)(({
        children: e,
        className: i,
        styleClassName: o = "button-secondary",
        gradientRoundedClassName: n,
        type: s = "button",
        onClick: l,
        onMouseEnter: c,
        disabled: u = !1,
        isLoading: d = !1,
        loadingText: m
    }, p) => (0, t.jsx)("button", {
        ref: p,
        type: s,
        disabled: u || d,
        onMouseEnter: c,
        className: (0, r.cls)("button text-sm font-medium outline-none focus:outline-none focus-visible:outline-none transition-all duration-200", n, o, i, (u || d) && "opacity-50 select-none pointer-events-none"),
        onClick: l,
        children: d ? (0, t.jsxs)("span", {
            className: "flex items-center justify-center gap-2",
            children: [(0, t.jsx)(a.Loader2, {
                className: "h-[1em] w-auto animate-spin"
            }), m ? ? e]
        }) : e
    }));
    o.displayName = "Button", e.s(["default", 0, o])
}, 85203, e => {
    "use strict";
    var t = e.i(43476),
        i = e.i(932),
        a = e.i(71645),
        r = e.i(75157);
    e.s(["default", 0, e => {
        let o, n, s, l, c, u, d, m, p, g = (0, i.c)(16);
        g[0] !== e ? ({
            children: o,
            className: l,
            animationType: c,
            style: s,
            ...n
        } = e, g[0] = e, g[1] = o, g[2] = n, g[3] = s, g[4] = l, g[5] = c) : (o = g[1], n = g[2], s = g[3], l = g[4], c = g[5]);
        let h = void 0 === l ? "flex flex-col gap-5 w-full h-fit" : l,
            f = void 0 === c ? "full" : c,
            [y, b] = (0, a.useState)("full" === f ? "animation-container" : "animation-container-fade"),
            S = (0, a.useRef)(!1);
        return g[6] === Symbol.for("react.memo_cache_sentinel") ? (u = () => {
            if (S.current) return;
            S.current = !0;
            let e = setTimeout(() => {
                b("")
            }, 800);
            return () => clearTimeout(e)
        }, d = [], g[6] = u, g[7] = d) : (u = g[6], d = g[7]), (0, a.useEffect)(u, d), g[8] !== y || g[9] !== h ? (m = (0, r.cls)(h, y), g[8] = y, g[9] = h, g[10] = m) : m = g[10], g[11] !== o || g[12] !== n || g[13] !== s || g[14] !== m ? (p = (0, t.jsx)("div", {
            className: m,
            style: s,
            ...n,
            children: o
        }), g[11] = o, g[12] = n, g[13] = s, g[14] = m, g[15] = p) : p = g[15], p
    }])
}, 38703, e => {
    "use strict";
    var t = e.i(40578);
    e.s(["useAuth", () => t.usePromisifiedAuth])
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
}, 26288, e => {
    "use strict";
    let t = "user_limits",
        i = "user_limits_updated",
        a = "pending_prompt",
        r = {
            setLimits: e => {
                try {
                    localStorage.setItem(t, JSON.stringify(e)), window.dispatchEvent(new CustomEvent(i))
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
                    localStorage.removeItem(t), window.dispatchEvent(new CustomEvent(i))
                } catch (e) {}
            },
            updateLimits: e => {
                let t = r.getLimits();
                t && r.setLimits({ ...t,
                    ...e
                })
            },
            setPendingPrompt: e => {
                try {
                    sessionStorage.setItem(a, e)
                } catch (e) {}
            },
            getPendingPrompt: () => {
                try {
                    return sessionStorage.getItem(a)
                } catch (e) {
                    return null
                }
            },
            clearPendingPrompt: () => {
                try {
                    sessionStorage.removeItem(a)
                } catch (e) {}
            },
            LIMITS_UPDATE_EVENT: i
        };
    e.s(["sessionStorageUtils", 0, r])
}, 11519, e => {
    "use strict";
    var t = e.i(68834),
        i = e.i(79473);
    let a = (0, t.create)()((0, i.devtools)(e => ({
        activeModal: null,
        modalData: {},
        openModal: (t, i = {}) => e({
            activeModal: t,
            modalData: i
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
    e.s(["useModalStore", 0, a])
}, 1741, e => {
    "use strict";
    var t = e.i(932),
        i = e.i(71645),
        a = e.i(26288);

    function r() {
        return a.sessionStorageUtils.getLimits()
    }
    e.s(["useLimits", 0, () => {
        let e, o, n = (0, t.c)(2),
            [s, l] = (0, i.useState)(r);
        return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
            let e = () => {
                l(a.sessionStorageUtils.getLimits())
            };
            return e(), window.addEventListener(a.sessionStorageUtils.LIMITS_UPDATE_EVENT, e), () => {
                window.removeEventListener(a.sessionStorageUtils.LIMITS_UPDATE_EVENT, e)
            }
        }, o = [], n[0] = e, n[1] = o) : (e = n[0], o = n[1]), (0, i.useEffect)(e, o), s
    }])
}, 37727, e => {
    "use strict";
    let t = (0, e.i(75254).default)("x", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]);
    e.s(["X", 0, t], 37727)
}, 15619, e => {
    "use strict";
    var t = e.i(43476),
        i = e.i(932),
        a = e.i(71645),
        r = e.i(74080);
    e.s(["default", 0, e => {
        let o, n, s, l, c = (0, i.c)(9),
            {
                children: u,
                container: d,
                id: m,
                className: p
            } = e,
            [g, h] = (0, a.useState)(!1),
            f = d ? ? ("u" > typeof document ? document.body : null);
        if (c[0] === Symbol.for("react.memo_cache_sentinel") ? (o = () => (h(!0), () => h(!1)), n = [], c[0] = o, c[1] = n) : (o = c[0], n = c[1]), (0, a.useEffect)(o, n), !g || !f) return null;
        c[2] !== u || c[3] !== p || c[4] !== m ? (s = p || m ? (0, t.jsx)("div", {
            id: m,
            className: p,
            children: u
        }) : u, c[2] = u, c[3] = p, c[4] = m, c[5] = s) : s = c[5];
        let y = s;
        return c[6] !== y || c[7] !== f ? (l = (0, r.createPortal)(y, f), c[6] = y, c[7] = f, c[8] = l) : l = c[8], l
    }])
}, 34354, e => {
    "use strict";
    let t = {
            projectGeneration: 6,
            projectDeployment: 3,
            projectEditing: 3,
            suggestionAcceptance: 3,
            imageGeneration: 1
        },
        i = {
            projectGeneration: "Project Generation",
            projectDeployment: "Project Deployment",
            projectEditing: "Project Editing",
            suggestionAcceptance: "Suggestion Acceptance",
            imageGeneration: "Image Generation"
        };

    function a(e) {
        return i[e]
    }

    function r(e) {
        if (!e) return {
            projectGeneration: !1,
            projectDeployment: !1,
            projectEditing: !1,
            suggestionAcceptance: !1,
            imageGeneration: !1
        };
        let t = e.messages_token_left || 0;
        return {
            projectGeneration: t >= 6,
            projectDeployment: t >= 3,
            projectEditing: t >= 3,
            suggestionAcceptance: t >= 3,
            imageGeneration: "free" !== e.plan && t >= 1
        }
    }
    e.s(["checkCreditsForAction", 0, function(e, i) {
        let a = e ? .messages_token_left || 0,
            r = t[i],
            o = Math.max(0, r - a);
        return {
            hasEnoughCredits: a >= r,
            creditsNeeded: r,
            creditsAvailable: a,
            shortfall: o
        }
    }, "getActionName", 0, a, "getCreditErrorMessage", 0, function(e, t, i) {
        let r = Math.max(0, t - i),
            o = a(e);
        return 0 === i ? `You're out of credits. ${o} requires ${t} credits.` : `Insufficient credits for ${o}. You need ${t} credits but only have ${i}. You need ${r} more credits.`
    }, "getDisabledFeatures", 0, function(e) {
        let t = r(e),
            i = [];
        return t.projectGeneration || i.push("Project Generation"), t.projectDeployment || i.push("Deployment"), t.projectEditing || i.push("Editing"), t.suggestionAcceptance || i.push("Suggestion Acceptance"), t.imageGeneration || i.push("Image Generation"), i
    }, "getFeatureAvailability", 0, r, "isLowOnCredits", 0, function(e) {
        if (!e) return !1;
        let t = e.messages_token_left || 0;
        return t > 0 && t <= 5
    }, "isOutOfCredits", 0, function(e, i = "projectGeneration") {
        return !!e && (e.messages_token_left || 0) < t[i]
    }], 34354)
}, 94733, e => {
    "use strict";
    var t = e.i(43476),
        i = e.i(932),
        a = e.i(71645),
        r = e.i(18566);
    let o = (0, e.i(75254).default)("shield-alert", [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }],
        ["path", {
            d: "M12 8v4",
            key: "1got3b"
        }],
        ["path", {
            d: "M12 16h.01",
            key: "1drbdi"
        }]
    ]);
    var n = e.i(37727),
        s = e.i(85203),
        l = e.i(21742),
        c = e.i(15619),
        u = e.i(38703),
        d = e.i(11519),
        m = e.i(1741),
        p = e.i(34354),
        g = e.i(75157),
        h = e.i(75980);
    e.s(["default", 0, () => {
        let e, f, y, b, S, v, w, N, x, C, j, P, k, _, E, I, A, T = (0, i.c)(36),
            {
                showWarning: G,
                creditsLeft: M,
                isOutOfCreditsState: U,
                disabledFeatures: D,
                handleClick: L
            } = (() => {
                let e, t, a, r, o = (0, i.c)(13),
                    n = (0, m.useLimits)(),
                    {
                        openModal: s
                    } = (0, d.useModalStore)(),
                    {
                        isSignedIn: l
                    } = (0, u.useAuth)(),
                    c = n ? .messages_token_left || 0,
                    g = (!n ? .plan || n ? .plan === "free") && n ? .projects_creation_usage === 1,
                    h = 0 === c && !g;
                o[0] !== g || o[1] !== n ? (e = (0, p.isLowOnCredits)(n) && !g, o[0] = g, o[1] = n, o[2] = e) : e = o[2];
                let f = e;
                o[3] !== n ? (t = (0, p.getDisabledFeatures)(n), o[3] = n, o[4] = t) : t = o[4];
                let y = t,
                    b = l && (h || f) && !!n;
                o[5] !== s ? (a = () => s("pricing"), o[5] = s, o[6] = a) : a = o[6];
                let S = a;
                return o[7] !== c || o[8] !== y || o[9] !== S || o[10] !== h || o[11] !== b ? (r = {
                    showWarning: b,
                    creditsLeft: c,
                    isOutOfCreditsState: h,
                    disabledFeatures: y,
                    handleClick: S
                }, o[7] = c, o[8] = y, o[9] = S, o[10] = h, o[11] = b, o[12] = r) : r = o[12], r
            })(),
            O = (0, r.usePathname)(),
            [R, F] = (0, a.useState)(!1),
            [W, $] = (0, a.useState)(!1);
        T[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
            F(!1), $(!1)
        }, T[0] = e) : e = T[0], T[1] !== O || T[2] !== G ? (f = [O, G], T[1] = O, T[2] = G, T[3] = f) : f = T[3], (0, a.useEffect)(e, f), T[4] === Symbol.for("react.memo_cache_sentinel") ? (y = () => {
            $(!0), setTimeout(() => F(!0), 300)
        }, T[4] = y) : y = T[4];
        let Y = y,
            B = O ? .startsWith("/preview/");
        if (!G || R || B) return null;
        let z = W ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0";
        T[5] !== z ? (b = (0, g.cls)("hidden md:block fixed z-9999 bottom-5 right-5 transition-all duration-300", z), T[5] = z, T[6] = b) : b = T[6], T[7] !== L ? (S = (0, t.jsx)(l.default, {
            onClick: e => {
                e.stopPropagation(), L()
            },
            className: "h-8 w-full text-xs",
            styleClassName: "button-accent",
            children: h.UI_STRINGS.buttons.upgradePlan
        }), T[7] = L, T[8] = S) : S = T[8], T[9] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
            e.stopPropagation(), Y()
        }, T[9] = v) : v = T[9], T[10] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, t.jsx)(l.default, {
            "aria-label": "Close notification",
            onClick: v,
            className: "flex items-center justify-center p-0 h-8 aspect-square",
            gradientRoundedClassName: "gradient-before-rounded-full",
            children: (0, t.jsx)(n.X, {
                className: "h-4/10 w-4/10",
                strokeWidth: 2
            })
        }), T[10] = w) : w = T[10], T[11] !== S ? (N = (0, t.jsxs)("div", {
            className: "absolute z-10 flex items-center justify-center gap-3 inset-1 p-2 bg-white/20 rounded backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100",
            children: [S, w]
        }), T[11] = S, T[12] = N) : N = T[12], T[13] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, t.jsx)("div", {
            className: "relative flex items-center justify-center px-0 h-8 aspect-square button-accent rounded",
            children: (0, t.jsx)(o, {
                className: "relative size-45/100 text-white"
            })
        }), T[13] = x) : x = T[13];
        let q = U ? h.UI_STRINGS.notifications.creditWarning.outOfCredits : h.UI_STRINGS.notifications.creditWarning.lowOnCredits;
        return T[14] !== q ? (C = (0, t.jsx)("h4", {
            className: "text-base font-medium text-black leading-tight",
            children: q
        }), T[14] = q, T[15] = C) : C = T[15], T[16] !== M ? (j = (0, t.jsxs)("span", {
            className: "text-xs text-black/75",
            children: [M, " ", h.UI_STRINGS.notifications.creditWarning.left]
        }), T[16] = M, T[17] = j) : j = T[17], T[18] !== C || T[19] !== j ? (P = (0, t.jsxs)("div", {
            className: "flex items-center justify-between gap-2",
            children: [C, j]
        }), T[18] = C, T[19] = j, T[20] = P) : P = T[20], T[21] !== D || T[22] !== U ? (k = U ? h.UI_STRINGS.notifications.creditWarning.clickToUpgrade : D.length > 0 ? h.UI_STRINGS.notifications.creditWarning.cantUse(D.join(", ")) : h.UI_STRINGS.notifications.creditWarning.featuresDisabled, T[21] = D, T[22] = U, T[23] = k) : k = T[23], T[24] !== k ? (_ = (0, t.jsx)("p", {
            className: "text-xs text-black/75 leading-tight",
            children: k
        }), T[24] = k, T[25] = _) : _ = T[25], T[26] !== P || T[27] !== _ ? (E = (0, t.jsx)("div", {
            className: "relative card rounded p-3 transition-all duration-300",
            children: (0, t.jsxs)("div", {
                className: "flex items-center justify-center gap-3",
                children: [x, (0, t.jsxs)("div", {
                    className: "flex-1 h-full min-w-0",
                    children: [P, _]
                })]
            })
        }), T[26] = P, T[27] = _, T[28] = E) : E = T[28], T[29] !== L || T[30] !== E || T[31] !== N ? (I = (0, t.jsxs)("div", {
            onClick: L,
            className: "relative w-70 md:w-20 cursor-pointer group transition-all duration-200 hover:-translate-y-[3px]",
            role: "alert",
            "aria-live": "polite",
            children: [N, E]
        }), T[29] = L, T[30] = E, T[31] = N, T[32] = I) : I = T[32], T[33] !== I || T[34] !== b ? (A = (0, t.jsx)(c.default, {
            children: (0, t.jsx)(s.default, {
                className: b,
                children: I
            })
        }), T[33] = I, T[34] = b, T[35] = A) : A = T[35], A
    }], 94733)
}, 76175, e => {
    e.n(e.i(94733))
}]);