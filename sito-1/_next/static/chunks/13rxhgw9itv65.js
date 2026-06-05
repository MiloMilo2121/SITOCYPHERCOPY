(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 78530, e => {
    "use strict";
    let s = new Map,
        a = new Map,
        t = e => {
            let t = s.get(e);
            if (t) return Promise.resolve(t);
            let l = a.get(e);
            if (l) return l;
            let i = fetch(e).then(s => {
                if (!s.ok) throw Error(`Failed to load Rive file: ${e}`);
                return s.arrayBuffer()
            }).then(t => (s.set(e, t), a.delete(e), t)).catch(s => {
                throw a.delete(e), s
            });
            return a.set(e, i), i
        },
        l = async e => {
            await Promise.allSettled(e.map(e => t(e)))
        };
    e.s(["RIVE_ANIMATIONS", 0, {
        GENERAL_LOADING: "/rive/generalloading.riv",
        RECOMMENDATIONS: ["/rive/generateSite.riv", "/rive/customize.riv", "/rive/generateImage.riv", "/rive/bobSuggestions.riv", "/rive/publish.riv"]
    }, "getCachedRiveBuffer", 0, e => s.get(e) ? ? null, "loadRiveBuffer", 0, t, "preloadRiveFiles", 0, l])
}, 59684, e => {
    "use strict";
    var s = e.i(43476),
        a = e.i(932),
        t = e.i(70703),
        l = e.i(19599);
    let i = () => {
            let e, t = (0, a.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center bg-background"
            }), t[0] = e) : e = t[0], e
        },
        n = (0, t.default)(() => e.A(1011), {
            loadableGenerated: {
                modules: [5394]
            },
            loading: i,
            ssr: !1
        }),
        c = (0, t.default)(() => e.A(38841), {
            loadableGenerated: {
                modules: [69232]
            },
            loading: i,
            ssr: !1
        }),
        r = (0, t.default)(() => e.A(24221), {
            loadableGenerated: {
                modules: [6807]
            },
            loading: i,
            ssr: !1
        }),
        d = (0, t.default)(() => e.A(63629), {
            loadableGenerated: {
                modules: [94901]
            },
            loading: i,
            ssr: !1
        }),
        o = (0, t.default)(() => e.A(69484), {
            loadableGenerated: {
                modules: [79109]
            },
            loading: i,
            ssr: !1
        }),
        u = (0, t.default)(() => e.A(49080), {
            loadableGenerated: {
                modules: [6700]
            },
            loading: i,
            ssr: !1
        }),
        m = (0, t.default)(() => e.A(87849), {
            loadableGenerated: {
                modules: [37427]
            },
            loading: () => (0, s.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center bg-background",
                children: (0, s.jsx)(l.default, {})
            }),
            ssr: !1
        });
    (0, t.default)(() => e.A(50134), {
        loadableGenerated: {
            modules: [12764]
        },
        loading: i,
        ssr: !1
    }), (0, t.default)(() => e.A(45134), {
        loadableGenerated: {
            modules: [75891]
        },
        loading: i,
        ssr: !1
    }), (0, t.default)(() => e.A(74656), {
        loadableGenerated: {
            modules: [65669]
        },
        loading: i,
        ssr: !1
    });
    let h = (0, t.default)(() => e.A(65122), {
        loadableGenerated: {
            modules: [8305]
        },
        ssr: !1
    });
    (0, t.default)(() => e.A(41957), {
        loadableGenerated: {
            modules: [83476]
        },
        loading: i,
        ssr: !1
    }), (0, t.default)(() => e.A(55494), {
        loadableGenerated: {
            modules: [32960]
        },
        loading: i,
        ssr: !1
    });
    let j = (0, t.default)(() => e.A(2408), {
        loadableGenerated: {
            modules: [4346]
        },
        loading: i,
        ssr: !1
    });
    (0, t.default)(() => e.A(84909), {
        loadableGenerated: {
            modules: [63764]
        },
        ssr: !1
    });
    let f = (0, t.default)(() => e.A(61629), {
        loadableGenerated: {
            modules: [74876]
        },
        ssr: !1
    });
    (0, t.default)(() => e.A(49778), {
        loadableGenerated: {
            modules: [99519]
        },
        ssr: !1
    });
    let k = (0, t.default)(() => e.A(34402), {
        loadableGenerated: {
            modules: [27483]
        },
        loading: i,
        ssr: !1
    });
    (0, t.default)(() => e.A(28337), {
        loadableGenerated: {
            modules: [2863]
        },
        ssr: !1
    });
    let v = (0, t.default)(() => e.A(73528), {
        loadableGenerated: {
            modules: [52725]
        },
        loading: i,
        ssr: !1
    });
    e.s(["DynamicBlockPreview", 0, j, "DynamicDeleteProjectConfirmation", 0, h, "DynamicHelpModal", 0, u, "DynamicImageUploadPreview", 0, k, "DynamicInsufficientCreditsModal", 0, d, "DynamicItemPreview", 0, v, "DynamicMaintenanceModal", 0, o, "DynamicOutOfCreditsModal", 0, r, "DynamicPricingModal", 0, n, "DynamicProjectDomains", 0, m, "DynamicReferralModal", 0, c, "DynamicSettingsModal", 0, f])
}, 22535, e => {
    "use strict";
    var s = e.i(43476),
        a = e.i(932),
        t = e.i(71645),
        l = e.i(59684);
    e.s(["default", 0, () => {
        let e, i = (0, a.c)(1);
        return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.jsxs)(t.Suspense, {
            fallback: null,
            children: [(0, s.jsx)(l.DynamicPricingModal, {}), (0, s.jsx)(l.DynamicReferralModal, {}), (0, s.jsx)(l.DynamicOutOfCreditsModal, {}), (0, s.jsx)(l.DynamicInsufficientCreditsModal, {}), (0, s.jsx)(l.DynamicMaintenanceModal, {}), (0, s.jsx)(l.DynamicHelpModal, {})]
        }), i[0] = e) : e = i[0], e
    }])
}, 82175, e => {
    e.n(e.i(22535))
}, 1011, e => {
    e.v(s => Promise.all(["static/chunks/0u7so7deif3j9.js", "static/chunks/16fo4-_0~stgw.js", "static/chunks/0r2qxkywj5rvr.js", "static/chunks/0zf01p8iat4jt.js", "static/chunks/0li3m65ong5ro.js", "static/chunks/09d072vk66obm.js"].map(s => e.l(s))).then(() => s(5394)))
}, 38841, e => {
    e.v(s => Promise.all(["static/chunks/09d072vk66obm.js", "static/chunks/0z~cel.oee9e7.js", "static/chunks/0f_zel8e6q7xm.js", "static/chunks/0zf01p8iat4jt.js"].map(s => e.l(s))).then(() => s(69232)))
}, 24221, e => {
    e.v(s => Promise.all(["static/chunks/0ye.ckqynret8.js", "static/chunks/0zf01p8iat4jt.js", "static/chunks/0v_zqs_n55mdb.js"].map(s => e.l(s))).then(() => s(6807)))
}, 63629, e => {
    e.v(s => Promise.all(["static/chunks/0h-y0x_~gu8i..js", "static/chunks/0zf01p8iat4jt.js"].map(s => e.l(s))).then(() => s(94901)))
}, 69484, e => {
    e.v(s => Promise.all(["static/chunks/15dc5een8z7lm.js", "static/chunks/0zf01p8iat4jt.js"].map(s => e.l(s))).then(() => s(79109)))
}, 49080, e => {
    e.v(s => Promise.all(["static/chunks/0a5osnlu1ul6p.js", "static/chunks/0zf01p8iat4jt.js"].map(s => e.l(s))).then(() => s(6700)))
}, 87849, e => {
    e.v(s => Promise.all(["static/chunks/14lfql6-tiqu9.js", "static/chunks/0l4yrhyq8_a3_.js", "static/chunks/0uwri3_.z5jsw.js", "static/chunks/0zf01p8iat4jt.js", "static/chunks/17-8um9gdh6m_.js", "static/chunks/0hq24z0n29mkj.js"].map(s => e.l(s))).then(() => s(37427)))
}, 50134, e => {
    e.v(s => Promise.all(["static/chunks/09oxem-umrplv.js", "static/chunks/0zf01p8iat4jt.js"].map(s => e.l(s))).then(() => s(12764)))
}, 45134, e => {
    e.v(s => Promise.all(["static/chunks/0p.4lctpfmroq.js", "static/chunks/0zf01p8iat4jt.js"].map(s => e.l(s))).then(() => s(75891)))
}, 74656, e => {
    e.v(s => Promise.all(["static/chunks/148~1egu18q44.js", "static/chunks/0zf01p8iat4jt.js"].map(s => e.l(s))).then(() => s(65669)))
}, 65122, e => {
    e.v(s => Promise.all(["static/chunks/025v6bcolbr6z.js", "static/chunks/0zf01p8iat4jt.js"].map(s => e.l(s))).then(() => s(8305)))
}, 41957, e => {
    e.v(s => Promise.all(["static/chunks/0ayyj1e7~o~gq.js", "static/chunks/0inj.bu~t5fdb.js", "static/chunks/042f~f5rbtaex.js"].map(s => e.l(s))).then(() => s(83476)))
}, 55494, e => {
    e.v(s => Promise.all(["static/chunks/0r4-7ma9gw4-..js", "static/chunks/0_z14gnkxg8db.js"].map(s => e.l(s))).then(() => s(32960)))
}, 2408, e => {
    e.v(s => Promise.all(["static/chunks/0jgd2wgy7u8d5.js"].map(s => e.l(s))).then(() => s(4346)))
}, 84909, e => {
    e.v(s => Promise.all(["static/chunks/0_nr6im4e_uyq.js"].map(s => e.l(s))).then(() => s(63764)))
}, 49778, e => {
    e.v(s => Promise.all(["static/chunks/0xh3sx5nbl5wj.js", "static/chunks/0zf01p8iat4jt.js"].map(s => e.l(s))).then(() => s(99519)))
}, 34402, e => {
    e.v(s => Promise.all(["static/chunks/0y~doc.t36n4z.js"].map(s => e.l(s))).then(() => s(27483)))
}, 28337, e => {
    e.v(s => Promise.all(["static/chunks/15465tu7p66nc.js"].map(s => e.l(s))).then(() => s(2863)))
}, 73528, e => {
    e.v(s => Promise.all(["static/chunks/0w_obptyfv_hn.js"].map(s => e.l(s))).then(() => s(52725)))
}]);