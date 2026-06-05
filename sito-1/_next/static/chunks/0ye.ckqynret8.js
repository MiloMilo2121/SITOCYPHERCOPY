(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 37727, e => {
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
        s = e.i(932),
        i = e.i(71645),
        r = e.i(74080);
    e.s(["default", 0, e => {
        let o, n, l, c, a = (0, s.c)(9),
            {
                children: u,
                container: d,
                id: f,
                className: m
            } = e,
            [p, g] = (0, i.useState)(!1),
            h = d ? ? ("u" > typeof document ? document.body : null);
        if (a[0] === Symbol.for("react.memo_cache_sentinel") ? (o = () => (g(!0), () => g(!1)), n = [], a[0] = o, a[1] = n) : (o = a[0], n = a[1]), (0, i.useEffect)(o, n), !p || !h) return null;
        a[2] !== u || a[3] !== m || a[4] !== f ? (l = m || f ? (0, t.jsx)("div", {
            id: f,
            className: m,
            children: u
        }) : u, a[2] = u, a[3] = m, a[4] = f, a[5] = l) : l = a[5];
        let v = l;
        return a[6] !== v || a[7] !== h ? (c = (0, r.createPortal)(v, h), a[6] = v, a[7] = h, a[8] = c) : c = a[8], c
    }])
}, 67082, 15446, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(932),
        i = e.i(71645),
        r = e.i(15619),
        o = e.i(30776);
    let n = e => {
        let t, r, o = (0, s.c)(3);
        o[0] !== e ? (t = () => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", l), r = [e], o[0] = e, o[1] = t, o[2] = r) : (t = o[1], r = o[2]), (0, i.useEffect)(t, r)
    };

    function l() {
        document.body.style.overflow = ""
    }
    e.s(["useBodyScrollLock", 0, n], 15446);
    var c = e.i(75157);

    function a(e) {
        return e.stopPropagation()
    }
    e.s(["default", 0, e => {
        let l, u, d, f, m, p, g, h, v, j = (0, s.c)(26),
            {
                isVisible: x,
                onClose: y,
                children: _,
                zIndexClass: b,
                backdropClassName: S,
                closeOnEscape: E,
                lockScroll: C,
                container: k,
                contentClassName: N,
                overlayOnClickClose: w
            } = e,
            I = void 0 === b ? "z-200" : b,
            G = void 0 === E || E;
        n((void 0 === C || C) && x), j[0] !== G || j[1] !== x || j[2] !== y ? (l = () => {
            if (!x || !G) return;
            let e = e => {
                "Escape" === e.key && y()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }, u = [x, G, y], j[0] = G, j[1] = x, j[2] = y, j[3] = l, j[4] = u) : (l = j[3], u = j[4]), (0, i.useEffect)(l, u), j[5] !== S || j[6] !== I ? (d = (0, c.cls)("fixed flex items-center justify-center top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm", I, S), j[5] = S, j[6] = I, j[7] = d) : d = j[7];
        let A = void 0 === w || w ? y : void 0;
        return j[8] !== A ? (f = (0, t.jsx)("div", {
            onClick: A,
            className: "absolute inset-0",
            role: "dialog",
            "aria-modal": "true"
        }), j[8] = A, j[9] = f) : f = j[9], j[10] !== N ? (m = (0, c.cls)("relative", N), j[10] = N, j[11] = m) : m = j[11], j[12] !== _ ? (p = (0, t.jsx)("div", {
            onClick: a,
            className: "contents",
            children: _
        }), j[12] = _, j[13] = p) : p = j[13], j[14] !== x || j[15] !== m || j[16] !== p ? (g = (0, t.jsx)(o.default, {
            isVisible: x,
            variant: "fade-scale",
            className: m,
            children: p
        }), j[14] = x, j[15] = m, j[16] = p, j[17] = g) : g = j[17], j[18] !== x || j[19] !== g || j[20] !== d || j[21] !== f ? (h = (0, t.jsxs)(o.default, {
            isVisible: x,
            className: d,
            children: [f, g]
        }), j[18] = x, j[19] = g, j[20] = d, j[21] = f, j[22] = h) : h = j[22], j[23] !== k || j[24] !== h ? (v = (0, t.jsx)(r.default, {
            container: k,
            children: h
        }), j[23] = k, j[24] = h, j[25] = v) : v = j[25], v
    }], 67082)
}, 1741, e => {
    "use strict";
    var t = e.i(932),
        s = e.i(71645),
        i = e.i(26288);

    function r() {
        return i.sessionStorageUtils.getLimits()
    }
    e.s(["useLimits", 0, () => {
        let e, o, n = (0, t.c)(2),
            [l, c] = (0, s.useState)(r);
        return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
            let e = () => {
                c(i.sessionStorageUtils.getLimits())
            };
            return e(), window.addEventListener(i.sessionStorageUtils.LIMITS_UPDATE_EVENT, e), () => {
                window.removeEventListener(i.sessionStorageUtils.LIMITS_UPDATE_EVENT, e)
            }
        }, o = [], n[0] = e, n[1] = o) : (e = n[0], o = n[1]), (0, s.useEffect)(e, o), l
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
        s = {
            projectGeneration: "Project Generation",
            projectDeployment: "Project Deployment",
            projectEditing: "Project Editing",
            suggestionAcceptance: "Suggestion Acceptance",
            imageGeneration: "Image Generation"
        };

    function i(e) {
        return s[e]
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
    e.s(["checkCreditsForAction", 0, function(e, s) {
        let i = e ? .messages_token_left || 0,
            r = t[s],
            o = Math.max(0, r - i);
        return {
            hasEnoughCredits: i >= r,
            creditsNeeded: r,
            creditsAvailable: i,
            shortfall: o
        }
    }, "getActionName", 0, i, "getCreditErrorMessage", 0, function(e, t, s) {
        let r = Math.max(0, t - s),
            o = i(e);
        return 0 === s ? `You're out of credits. ${o} requires ${t} credits.` : `Insufficient credits for ${o}. You need ${t} credits but only have ${s}. You need ${r} more credits.`
    }, "getDisabledFeatures", 0, function(e) {
        let t = r(e),
            s = [];
        return t.projectGeneration || s.push("Project Generation"), t.projectDeployment || s.push("Deployment"), t.projectEditing || s.push("Editing"), t.suggestionAcceptance || s.push("Suggestion Acceptance"), t.imageGeneration || s.push("Image Generation"), s
    }, "getFeatureAvailability", 0, r, "isLowOnCredits", 0, function(e) {
        if (!e) return !1;
        let t = e.messages_token_left || 0;
        return t > 0 && t <= 5
    }, "isOutOfCredits", 0, function(e, s = "projectGeneration") {
        return !!e && (e.messages_token_left || 0) < t[s]
    }], 34354)
}, 82844, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(932),
        i = e.i(57688),
        r = e.i(37727),
        o = e.i(21742),
        n = e.i(67082),
        l = e.i(71645),
        c = e.i(38703),
        a = e.i(18566),
        u = e.i(11519),
        d = e.i(1741),
        f = e.i(34354),
        m = e.i(4392);
    let p = "out_of_credits_modal_closed";
    var g = e.i(75980);
    e.s(["default", 0, () => {
        let e, h, v, j, x, y, _, b = (0, s.c)(14),
            {
                isVisible: S,
                shouldShow: E,
                handleClose: C,
                handleUpgradePlan: k
            } = (() => {
                let e, t, i, r, o, n, g, h, v, j, x = (0, s.c)(25),
                    {
                        activeModal: y,
                        closeModal: _,
                        openModal: b
                    } = (0, u.useModalStore)(),
                    S = (0, d.useLimits)(),
                    {
                        isSignedIn: E
                    } = (0, c.useAuth)(),
                    C = (0, a.usePathname)(),
                    k = (0, l.useRef)(!1),
                    [N, w] = (0, l.useState)(!1),
                    I = "out-of-credits" === y;
                x[0] !== C ? (e = C ? .startsWith("/projects/") && "/projects" !== C, x[0] = C, x[1] = e) : e = x[1];
                let G = e;
                x[2] !== y || x[3] !== S || x[4] !== G || x[5] !== E ? (t = () => {
                    if (!E || k.current || !G || "true" === sessionStorage.getItem(p)) return;
                    let e = (!S ? .plan || S ? .plan === "free") && S ? .projects_creation_usage === 1;
                    if ((0, f.isOutOfCredits)(S) && !e && "out-of-credits" !== y) {
                        let e = setTimeout(() => {
                            w(!0)
                        }, 1e3);
                        return () => clearTimeout(e)
                    }
                }, i = [S, y, E, G], x[2] = y, x[3] = S, x[4] = G, x[5] = E, x[6] = t, x[7] = i) : (t = x[6], i = x[7]), (0, l.useEffect)(t, i), x[8] !== b || x[9] !== N ? (r = () => {
                    N && !k.current && ((0, m.clarityEvent)("out_of_credits_shown"), b("out-of-credits"), k.current = !0, sessionStorage.removeItem(p), w(!1))
                }, o = [N, b], x[8] = b, x[9] = N, x[10] = r, x[11] = o) : (r = x[10], o = x[11]), (0, l.useEffect)(r, o), x[12] !== S ? (n = () => {
                    (0, f.isOutOfCredits)(S) || (sessionStorage.removeItem(p), k.current = !1)
                }, g = [S], x[12] = S, x[13] = n, x[14] = g) : (n = x[13], g = x[14]), (0, l.useEffect)(n, g), x[15] !== _ ? (h = () => {
                    _(), sessionStorage.setItem(p, "true")
                }, x[15] = _, x[16] = h) : h = x[16];
                let A = h;
                x[17] !== _ || x[18] !== b ? (v = () => {
                    (0, m.clarityEvent)("out_of_credits_upgrade_clicked"), _(), b("pricing")
                }, x[17] = _, x[18] = b, x[19] = v) : v = x[19];
                let T = v;
                return x[20] !== A || x[21] !== T || x[22] !== I || x[23] !== E ? (j = {
                    isVisible: I,
                    shouldShow: E,
                    handleClose: A,
                    handleUpgradePlan: T
                }, x[20] = A, x[21] = T, x[22] = I, x[23] = E, x[24] = j) : j = x[24], j
            })(),
            N = S && E;
        return b[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsxs)("div", {
            className: "flex flex-col gap-3 md:gap-5",
            children: [(0, t.jsx)("h2", {
                className: "text-2xl font-medium leading-tight flex items-center gap-2",
                children: g.UI_STRINGS.modals.outOfCredits.title
            }), (0, t.jsx)("p", {
                className: "text-sm text-black",
                children: g.UI_STRINGS.modals.outOfCredits.description
            })]
        }), b[0] = e) : e = b[0], b[1] !== k ? (h = (0, t.jsxs)("div", {
            className: "p-5 flex flex-col justify-between gap-5 button-secondary rounded-sm h-fit md:h-auto",
            children: [e, (0, t.jsx)(o.default, {
                onClick: k,
                styleClassName: "button-accent",
                children: g.UI_STRINGS.buttons.upgradePlan
            })]
        }), b[1] = k, b[2] = h) : h = b[2], b[3] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, t.jsx)(i.default, {
            src: "/images/outofcredits.webp",
            alt: g.UI_STRINGS.modals.outOfCredits.imageAlt,
            fill: !0,
            className: "object-cover"
        }), b[3] = v) : v = b[3], b[4] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, t.jsx)(r.X, {
            className: "h-4/10 w-4/10 text-black"
        }), b[4] = j) : j = b[4], b[5] !== C ? (x = (0, t.jsxs)("div", {
            className: "relative flex-1 h-full items-center justify-center card rounded-sm overflow-hidden",
            children: [v, (0, t.jsx)("div", {
                className: "absolute! top-4 right-4 h-8 w-auto aspect-square button-secondary rounded-full flex items-center justify-center cursor-pointer z-10",
                onClick: C,
                children: j
            })]
        }), b[5] = C, b[6] = x) : x = b[6], b[7] !== h || b[8] !== x ? (y = (0, t.jsx)("div", {
            className: "relative w-full h-full flex gap-0 card rounded-sm overflow-hidden p-5",
            children: (0, t.jsxs)("div", {
                className: "relative w-full h-full flex flex-col md:grid md:grid-cols-2 gap-5",
                children: [h, x]
            })
        }), b[7] = h, b[8] = x, b[9] = y) : y = b[9], b[10] !== C || b[11] !== N || b[12] !== y ? (_ = (0, t.jsx)(n.default, {
            isVisible: N,
            onClose: C,
            zIndexClass: "z-200",
            backdropClassName: "p-5",
            contentClassName: "max-w-3xl w-full h-full max-h-[95svh] md:max-h-130",
            overlayOnClickClose: !0,
            children: y
        }), b[10] = C, b[11] = N, b[12] = y, b[13] = _) : _ = b[13], _
    }], 82844)
}, 6807, e => {
    e.n(e.i(82844))
}, 67828, e => {
    e.v(t => Promise.all(["static/chunks/0.uc_q6tt3ufn.js"].map(t => e.l(t))).then(() => t(89786)))
}]);