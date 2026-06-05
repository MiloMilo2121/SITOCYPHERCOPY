(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52571, e => {
    "use strict";
    let t = (0, e.i(75254).default)("info", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 16v-4",
            key: "1dtifu"
        }],
        ["path", {
            d: "M12 8h.01",
            key: "e9boi3"
        }]
    ]);
    e.s(["Info", 0, t], 52571)
}, 73884, e => {
    "use strict";
    let t = (0, e.i(75254).default)("circle-x", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }],
        ["path", {
            d: "m9 9 6 6",
            key: "z0biqf"
        }]
    ]);
    e.s(["XCircle", 0, t], 73884)
}, 69638, e => {
    "use strict";
    let t = (0, e.i(75254).default)("circle-check-big", [
        ["path", {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }],
        ["path", {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }]
    ]);
    e.s(["CheckCircle", 0, t], 69638)
}, 78894, e => {
    "use strict";
    let t = (0, e.i(75254).default)("triangle-alert", [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }],
        ["path", {
            d: "M12 9v4",
            key: "juzpu7"
        }],
        ["path", {
            d: "M12 17h.01",
            key: "p32p05"
        }]
    ]);
    e.s(["AlertTriangle", 0, t], 78894)
}, 3150, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(932),
        i = e.i(46696),
        s = e.i(69638),
        a = e.i(78894),
        l = e.i(52571),
        c = e.i(31278),
        n = e.i(73884),
        o = e.i(75157);
    let d = "!rounded !text-black !pl-[0.75rem] !pr-[3rem] !gap-[0.25rem] !w-fit !max-w-3/4 md:max-w-full! !h-[2.5rem] !min-h-fit !bg-[#f3f3f3] ![box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.025),0px_0px_0px_1px_rgba(0,0,0,0.07),inset_0px_1px_0px_rgba(255,255,255,0.75)]",
        m = e => {
            let i, d, m, p, h, u, g, x = (0, r.c)(19),
                {
                    type: f
                } = e;
            return x[0] !== f ? (i = (0, o.cls)("relative flex items-center justify-center h-[2.125rem] w-auto aspect-square rounded-max-sm gradient-before-rounded-max-sm", {
                success: "button-accent",
                info: "button-primary",
                warning: "badge badge-yellow",
                error: "badge badge-red",
                loading: "button-primary"
            }[f]), x[0] = f, x[1] = i) : i = x[1], x[2] !== f ? (d = "success" === f && (0, t.jsx)(s.CheckCircle, {
                className: "h-1/2 w-1/2",
                strokeWidth: 1.75
            }), x[2] = f, x[3] = d) : d = x[3], x[4] !== f ? (m = "info" === f && (0, t.jsx)(l.Info, {
                className: "h-1/2 w-1/2",
                strokeWidth: 1.75
            }), x[4] = f, x[5] = m) : m = x[5], x[6] !== f ? (p = "warning" === f && (0, t.jsx)(a.AlertTriangle, {
                className: "h-1/2 w-1/2",
                strokeWidth: 1.75
            }), x[6] = f, x[7] = p) : p = x[7], x[8] !== f ? (h = "error" === f && (0, t.jsx)(n.XCircle, {
                className: "h-1/2 w-1/2",
                strokeWidth: 1.75
            }), x[8] = f, x[9] = h) : h = x[9], x[10] !== f ? (u = "loading" === f && (0, t.jsx)(c.Loader2, {
                className: "animate-spin h-1/2 w-1/2",
                strokeWidth: 1.75
            }), x[10] = f, x[11] = u) : u = x[11], x[12] !== i || x[13] !== d || x[14] !== m || x[15] !== p || x[16] !== h || x[17] !== u ? (g = (0, t.jsxs)("div", {
                className: i,
                children: [d, m, p, h, u]
            }), x[12] = i, x[13] = d, x[14] = m, x[15] = p, x[16] = h, x[17] = u, x[18] = g) : g = x[18], g
        };
    e.s(["default", 0, () => {
        let e, s = (0, r.c)(1);
        return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)(i.Toaster, {
            expand: !1,
            theme: "light",
            gap: 8,
            duration: 6e3,
            position: "bottom-right",
            toastOptions: {
                classNames: {
                    content: "!ml-[1.0625rem] !pointer-events-none",
                    loader: "!ml-[0.5rem]",
                    title: "!font-medium !text-sm !leading-tight !tracking-tight",
                    success: d,
                    error: d,
                    warning: d,
                    info: d,
                    loading: d
                }
            },
            icons: {
                success: (0, t.jsx)(m, {
                    type: "success"
                }),
                info: (0, t.jsx)(m, {
                    type: "info"
                }),
                warning: (0, t.jsx)(m, {
                    type: "warning"
                }),
                error: (0, t.jsx)(m, {
                    type: "error"
                }),
                loading: (0, t.jsx)(m, {
                    type: "loading"
                })
            }
        }), s[0] = e) : e = s[0], e
    }])
}, 51868, e => {
    e.n(e.i(3150))
}]);