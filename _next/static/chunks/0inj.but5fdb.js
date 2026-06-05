(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 35198, 55699, 69377, 50007, e => {
    "use strict";
    var a = e.i(71645),
        t = e.i(46696),
        s = e.i(38703),
        r = e.i(18566),
        i = e.i(40846),
        l = e.i(196),
        n = e.i(18279),
        o = e.i(2170),
        c = e.i(4392),
        u = e.i(59637),
        d = e.i(5652);
    let m = e => {
        if ("object" != typeof e || null === e) return !1;
        if (429 === e.status) return !0;
        let a = e.response;
        if (a ? .status === 429) return !0;
        let t = a ? .data,
            s = t ? .details,
            r = s ? .message;
        if (r ? .includes ? .("429") || r ? .includes ? .("Request failed with status code 429")) return !0;
        let i = e.message;
        return !!(i ? .includes ? .("429") || i ? .includes ? .("Request failed with status code 429"))
    };
    e.s(["useBuyNewDomain", 0, () => {
        let e = (0, r.useSearchParams)(),
            [h, f] = (0, a.useState)("search"),
            [g, x] = (0, a.useState)(null),
            [y, S] = (0, a.useState)(!1),
            [b, p] = (0, a.useState)(!1),
            [v, N] = (0, a.useState)(null),
            [w, D] = (0, a.useState)(null),
            [j, _] = (0, a.useState)(!1),
            [I, T] = (0, a.useState)(null),
            [A, P] = (0, a.useState)(null),
            [R, k] = (0, a.useState)(null),
            [C, E] = (0, a.useState)(null),
            [M, O] = (0, a.useState)(!1),
            {
                getToken: G
            } = (0, s.useAuth)(),
            q = (0, l.useMaintenanceStore)(e => e.showModal),
            L = (0, i.useDomainStore)(e => e.pendingDomainSearchQuery),
            B = (0, i.useDomainStore)(e => e.setPendingDomainSearchQuery),
            F = (0, i.useDomainStore)(e => e.skipToPurchase),
            z = (0, i.useDomainStore)(e => e.setSkipToPurchase);
        (0, a.useEffect)(() => {
            let a = e.get("session_id"),
                t = e.get("domain_registration");
            if (a && t) {
                T(t), f("success");
                let e = new URL(window.location.href);
                e.searchParams.delete("session_id"), e.searchParams.delete("domain_registration"), window.history.replaceState({}, "", e.toString())
            }
        }, [e]);
        let $ = (0, a.useRef)(null),
            [V, U] = (0, a.useState)(0);
        (0, a.useEffect)(() => {
            L && !F && ($.current = L, x(L), _(!1), N(null), U(e => e + 1), B(null))
        }, [L, B, F]), (0, a.useEffect)(() => {
            (async () => {
                if (!F || !L) return;
                O(!0), x(L);
                let e = await G();
                if (!e) {
                    z(!1), O(!1);
                    return
                }
                E(L);
                try {
                    let a = await (0, n.preregisterDomainAPI)(L, e);
                    a.data && (k(a.data), x(L), P(L), f("purchase"))
                } catch {
                    x(L), U(e => e + 1), $.current = L
                } finally {
                    E(null), z(!1), B(null), O(!1)
                }
            })()
        }, [F, L, G, z, B]);
        let K = async e => {
            let a = "string" == typeof e ? e : g;
            if (!a ? .trim()) return;
            let s = (0, u.validateDomainSearchInput)(a);
            if (s) {
                D(s), _(!0), S(!1), t.toast.error(s);
                return
            }(0, c.clarityEvent)("domain_search_started"), S(!0), p(!1), D(null), N(null);
            try {
                let e, s = await G();
                if (!s) throw Error("Authentication required");
                let r = /\.[a-z]{2,}$/i.test(a.trim()) ? a.trim() : `${a.trim()}.com`;
                try {
                    (0, n.trackDomainSearchAPI)(r, s);
                    let a = await (0, n.checkDomainAvailabilityAPI)(r, s);
                    if (a.validationError) {
                        D(a.validationError), _(!0), S(!1), t.toast.error(a.validationError);
                        return
                    }
                    let i = a.data.available;
                    e = {
                        domain: r,
                        available: i,
                        premium: !1,
                        isOriginal: !0,
                        price: void 0
                    }, i ? (0, c.clarityEvent)("domain_available") : (0, c.clarityEvent)("domain_unavailable")
                } catch (e) {
                    if (m(e)) {
                        D("Too many requests"), _(!0), S(!1), p(!1), t.toast.error("Too many requests. Please try again in a moment.");
                        return
                    }
                    throw e
                }
                let i = {
                    searchTerm: r,
                    suggestions: e.available ? [e] : [],
                    hasResults: e.available
                };
                N(i), _(!0), S(!1), p(!0);
                let l = r.replace(/\.[a-z]{2,}$/i, ""),
                    u = (0, o.generateDomainSuggestions)(l).filter(e => e.toLowerCase() !== r.toLowerCase()),
                    d = (await Promise.allSettled(u.map(async e => {
                        let a = (await (0, n.checkDomainAvailabilityAPI)(e, s)).data.available;
                        return {
                            domain: e,
                            available: a,
                            premium: !1,
                            isOriginal: !1,
                            price: void 0
                        }
                    }))).filter(e => "fulfilled" === e.status && e.value.available).map(e => e.value),
                    h = {
                        searchTerm: r,
                        suggestions: [...e.available ? [e] : [], ...d],
                        hasResults: e.available || d.length > 0
                    };
                N(h), p(!1), 0 !== d.length || e.available || t.toast.info("No available domains found for your search term.")
            } catch (a) {
                let e;
                (0, c.clarityEvent)("domain_search_failed"), m(a) ? (e = "Too many requests", t.toast.error("Too many requests. Please try again in a moment.")) : (e = (0, o.getErrorMessage)(a, "Failed to search domains"), t.toast.error(e)), D(e), _(!0), S(!1), p(!1)
            }
        };
        (0, a.useEffect)(() => {
            if (V > 0 && $.current) {
                let e = $.current;
                $.current = null, K(e)
            }
        }, [V]);
        let Q = async e => {
            if ((0, d.isMaintenanceMode)()) return void q();
            P(e), E(e);
            try {
                let a = await G();
                if (!a) throw Error("Authentication required");
                let t = await (0, n.preregisterDomainAPI)(e, a);
                k(t.data), (0, c.clarityEvent)("domain_selected"), f("purchase")
            } catch (a) {
                let e;
                e = m(a) ? "Too many requests. Please try again in a moment." : (0, o.getErrorMessage)(a, "Failed to get domain details"), t.toast.error(e)
            } finally {
                E(null)
            }
        };
        return {
            currentStep: h,
            searchTerm: g,
            isSearching: y,
            isLoadingSuggestions: b,
            isLoadingSkipToPurchase: M,
            searchResults: v,
            searchError: w,
            hasSearched: j,
            purchasedDomain: I,
            selectedDomain: A,
            preregisterData: R,
            loadingDomain: C,
            setSearchTerm: x,
            handleSearch: K,
            handleKeyDown: e => {
                "Enter" === e.key && K()
            },
            handleBuyDomain: e => {
                (0, d.isMaintenanceMode)() ? q(): e ? Q(e) : R && f("purchase")
            },
            handleDomainSelect: Q,
            handlePurchaseSuccess: e => {
                (0, c.clarityEvent)("domain_purchase_completed"), T(e), f("success")
            },
            handleBackToSearch: () => {
                f("search"), P(null), k(null)
            },
            resetForSuccessGoBack: e => {
                f("search"), T(null), N(null), P(null), k(null), _(!1), p(!1), e ? .()
            }
        }
    }], 35198), e.s(["useDomainPurchaseForm", 0, e => {
        let {
            getToken: u
        } = (0, s.useAuth)(), m = (0, l.useMaintenanceStore)(e => e.showModal), [h, f] = (0, a.useState)(!1), [g, x] = (0, a.useState)(null), [y, S] = (0, a.useState)(!0), b = (0, r.useParams)(), p = b ? .id, v = (0, i.useDomainStore)(e => e.isDeployingFromPublishDropdown), N = (0, i.useDomainStore)(e => e.setIsDeployingFromPublishDropdown), w = 1.2 * (e ? e.premium_price ? parseFloat(e.premium_price) : e.registration_price || 16 : 16), D = async () => {
            if ((0, d.isMaintenanceMode)()) return void m();
            if (e) {
                (0, c.clarityEvent)("domain_checkout_started"), f(!0), x(null);
                try {
                    let a = await u();
                    if (!a) throw Error("Authentication required");
                    let t = 0;
                    try {
                        let e = await (0, n.getDNSimpleAccountAPI)(a);
                        e.data && (t = e.data.id)
                    } catch {}
                    let s = Math.round(100 * w),
                        r = new URL(window.location.href),
                        i = null;
                    if (r.searchParams.set("domain_registration", "true"), r.searchParams.set("is_global_domain", "true"), r.searchParams.set("domain_name", e.domain), r.pathname = "", v && N(!1), p) try {
                        let {
                            publish_url: e
                        } = (await (0, n.getProjectIDAPI)(p, a)).data;
                        !e && v && (i = p, r.pathname = `/projects/${p}/website`, r.searchParams.set("isDeploying", "true"))
                    } catch {}
                    let {
                        data: l
                    } = await (0, n.createDomainCheckoutSessionAPI)(r.toString(), s, a, {
                        domain_name: e.domain,
                        contact_id: t,
                        auto_renew: y,
                        whois_privacy: !0,
                        auto_deploy_to_project: i
                    });
                    if (l.url)(0, c.clarityEvent)("domain_checkout_redirect"), window.location.href = l.url;
                    else throw Error("Failed to create checkout session")
                } catch (a) {
                    (0, c.clarityEvent)("domain_checkout_failed");
                    let e = (0, o.handleDomainError)(a, "Failed to initiate domain purchase", x);
                    t.toast.error(e), f(!1), v && N(!1)
                }
            }
        };
        return {
            isProcessing: h,
            error: g,
            autoRenew: y,
            setAutoRenew: S,
            totalPrice: w,
            handlePurchase: D
        }
    }], 55699), e.s(["useDomainSuccessScreen", 0, (e, t) => {
        let {
            getToken: r
        } = (0, s.useAuth)(), [i, l] = (0, a.useState)(!1), [n, c] = (0, a.useState)(!1), [u, d] = (0, a.useState)(null);
        return (0, a.useEffect)(() => {
            let a = setTimeout(async () => {
                if (!t ? .id || !e) return;
                l(!0), d(null);
                let a = (async () => {
                    let a = await r();
                    if (!a) throw Error("Authentication required");
                    await (0, o.replaceNonVercelDomains)(t.id, e, a)
                })();
                try {
                    await a, c(!0)
                } catch (e) {
                    (0, o.handleDomainError)(e, "Failed to connect domain", d)
                } finally {
                    l(!1)
                }
            }, 1500);
            return () => clearTimeout(a)
        }, [e, t ? .id, r]), {
            isConnecting: i,
            connectionComplete: n,
            connectionError: u
        }
    }], 69377);
    class h {
        value;
        next;
        constructor(e) {
            this.value = e
        }
    }
    class f {#
        e;#
        a;#
        t;
        constructor() {
            this.clear()
        }
        enqueue(e) {
            let a = new h(e);
            this.#e ? this.#a.next = a : this.#e = a, this.#a = a, this.#t++
        }
        dequeue() {
            let e = this.#e;
            if (e) return this.#e = this.#e.next, this.#t--, this.#e || (this.#a = void 0), e.value
        }
        peek() {
            if (this.#e) return this.#e.value
        }
        clear() {
            this.#e = void 0, this.#a = void 0, this.#t = 0
        }
        get size() {
            return this.#t
        }*[Symbol.iterator]() {
            let e = this.#e;
            for (; e;) yield e.value, e = e.next
        }* drain() {
            for (; this.#e;) yield this.dequeue()
        }
    }

    function g(e) {
        if (!((Number.isInteger(e) || e === 1 / 0) && e > 0)) throw TypeError("Expected `concurrency` to be a number from 1 and up")
    }
    e.s(["useGlobalDomainPurchase", 0, () => {
        let [e, r] = (0, a.useState)("search"), [l, d] = (0, a.useState)(null), [m, h] = (0, a.useState)(!1), [x, y] = (0, a.useState)(!1), [S, b] = (0, a.useState)(null), [p, v] = (0, a.useState)(null), [N, w] = (0, a.useState)(!1), [D, j] = (0, a.useState)(null), [_, I] = (0, a.useState)(null), [T, A] = (0, a.useState)(null), {
            getToken: P
        } = (0, s.useAuth)(), R = (0, i.useDomainStore)(e => e.pendingDomainSearchQuery), k = (0, i.useDomainStore)(e => e.setPendingDomainSearchQuery), C = async e => {
            if (!e.trim()) return void t.toast.error("Please enter a domain name");
            let a = (0, u.validateDomainSearchInput)(e);
            if (a) {
                v(a), w(!0), h(!1), t.toast.error(a);
                return
            }
            let s = /\.[a-z]{2,}$/i.test(e.trim()) ? e.trim() : `${e.trim()}.com`;
            (0, c.clarityEvent)("domain_search_performed"), h(!0), v(null), w(!0), b(null);
            try {
                let e = await P();
                if (!e) throw Error("Authentication required");
                (0, n.trackDomainSearchAPI)(s, e);
                let a = await (0, n.checkDomainAvailabilityAPI)(s, e);
                if (a.validationError) {
                    v(a.validationError), h(!1), t.toast.error(a.validationError);
                    return
                }
                let r = a.data.available;
                r ? (0, c.clarityEvent)("domain_available") : (0, c.clarityEvent)("domain_unavailable"), b({
                    searchTerm: s,
                    suggestions: [{
                        domain: s,
                        available: r,
                        premium: !1,
                        isOriginal: !0,
                        price: void 0
                    }],
                    hasResults: !0
                }), y(!0), E(s)
            } catch (e) {
                if ((0, c.clarityEvent)("domain_search_failed"), (e => {
                        if ("object" != typeof e || null === e) return !1;
                        if (429 === e.status) return !0;
                        let a = e.response;
                        if (a ? .status === 429) return !0;
                        let t = a ? .data,
                            s = t ? .details,
                            r = s ? .message;
                        if (r ? .includes ? .("429") || r ? .includes ? .("Request failed with status code 429")) return !0;
                        let i = e.message;
                        return !!(i ? .includes ? .("429") || i ? .includes ? .("Request failed with status code 429"))
                    })(e)) v("Too many requests. Please wait a moment before trying again."), t.toast.error("Too many requests. Please try again in a moment.");
                else {
                    let a = e instanceof Error ? e.message : "Failed to search domain";
                    v(a), t.toast.error(a)
                }
            } finally {
                h(!1)
            }
        }, E = async e => {
            y(!0);
            try {
                let a = await P();
                if (!a) return;
                let t = e.replace(/\.[a-z]{2,}$/i, ""),
                    s = (0, o.generateDomainSuggestions)(t).filter(a => a.toLowerCase() !== e.toLowerCase()),
                    r = function(e) {
                        let a = !1;
                        if ("object" == typeof e && ({
                                concurrency: e,
                                rejectOnClear: a = !1
                            } = e), g(e), "boolean" != typeof a) throw TypeError("Expected `rejectOnClear` to be a boolean");
                        let t = new f,
                            s = 0,
                            r = () => {
                                s < e && t.size > 0 && (s++, t.dequeue().run())
                            },
                            i = async (e, a, t) => {
                                let i = (async () => e(...t))();
                                a(i);
                                try {
                                    await i
                                } catch {}
                                s--, r()
                            },
                            l = (a, ...l) => new Promise((n, o) => {
                                let c;
                                c = {
                                    reject: o
                                }, new Promise(e => {
                                    c.run = e, t.enqueue(c)
                                }).then(i.bind(void 0, a, n, l)), s < e && r()
                            });
                        return Object.defineProperties(l, {
                            activeCount: {
                                get: () => s
                            },
                            pendingCount: {
                                get: () => t.size
                            },
                            clearQueue: {
                                value() {
                                    if (!a) return void t.clear();
                                    let e = AbortSignal.abort().reason;
                                    for (; t.size > 0;) t.dequeue().reject(e)
                                }
                            },
                            concurrency: {
                                get: () => e,
                                set(a) {
                                    g(a), e = a, queueMicrotask(() => {
                                        for (; s < e && t.size > 0;) r()
                                    })
                                }
                            },
                            map: {
                                async value(e, a) {
                                    return Promise.all(Array.from(e, (e, t) => this(a, e, t)))
                                }
                            }
                        }), l
                    }(6),
                    i = (await Promise.allSettled(s.map(e => r(async () => {
                        let t = (await (0, n.checkDomainAvailabilityAPI)(e, a)).data.available;
                        return {
                            domain: e,
                            available: t,
                            premium: !1,
                            isOriginal: !1,
                            price: void 0
                        }
                    })))).filter(e => "fulfilled" === e.status && e.value.available).map(e => e.value);
                b(e => e ? { ...e,
                    suggestions: [...e.suggestions, ...i],
                    hasResults: e.suggestions.length > 0 || i.length > 0
                } : null)
            } catch (a) {
                let e = a instanceof Error ? a.message : "Failed to load suggestions";
                t.toast.error(e)
            } finally {
                y(!1)
            }
        }, M = async e => {
            (0, c.clarityEvent)("domain_purchase_initiated"), j(e), A(e), v(null);
            try {
                let a = await P();
                if (!a) throw Error("Authentication required");
                let t = await (0, n.preregisterDomainAPI)(e, a);
                I(t.data), r("purchase")
            } catch (a) {
                let e = (0, o.getErrorMessage)(a, "Failed to preregister domain");
                v(e), t.toast.error(e)
            } finally {
                A(null)
            }
        };
        return (0, a.useEffect)(() => {
            R && (d(R), C(R), k(null))
        }, [R, k]), {
            currentStep: e,
            searchTerm: l,
            isSearching: m,
            isLoadingSuggestions: x,
            searchResults: S,
            searchError: p,
            hasSearched: N,
            selectedDomain: D,
            preregisterData: _,
            loadingDomain: T,
            setSearchTerm: d,
            handleSearch: C,
            handleKeyDown: e => {
                "Enter" === e.key && l && C(l)
            },
            handleBuyDomain: M,
            handleBackToSearch: () => {
                r("search"), j(null), I(null)
            }
        }
    }], 50007)
}, 48438, e => {
    "use strict";
    var a = e.i(43476),
        t = e.i(932),
        s = e.i(24032);
    e.s(["default", 0, e => {
        let r, i, l, n, o, c, u, d, m = (0, t.c)(26),
            {
                icon: h,
                domainName: f,
                statusLabel: g,
                statusBgClass: x,
                statusTextClass: y,
                subText: S,
                anotherStatus: b,
                anotherStatusBgClass: p,
                anotherStatusTextClass: v,
                href: N
            } = e,
            w = void 0 === p ? "badge badge-blue" : p,
            D = void 0 === v ? "text-black" : v,
            j = g && x && y;
        return m[0] !== h ? (r = (0, a.jsx)("div", {
            className: "relative flex items-center justify-center h-10 w-auto aspect-square button-secondary rounded-sm",
            children: (0, a.jsx)(h, {
                className: "h-4/10 w-4/10 text-black",
                strokeWidth: 1.5
            })
        }), m[0] = h, m[1] = r) : r = m[1], m[2] !== f || m[3] !== N ? (i = N ? (0, a.jsx)("a", {
            href: N,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm text-black font-medium hover:underline hover:text-black/90 transition-all",
            children: f
        }) : (0, a.jsx)("p", {
            className: "text-sm font-medium text-black",
            children: f
        }), m[2] = f, m[3] = N, m[4] = i) : i = m[4], m[5] !== j || m[6] !== x || m[7] !== g || m[8] !== y ? (l = j && (0, a.jsx)(s.default, {
            statusLabel: g,
            statusBgClass: x,
            statusTextClass: y
        }), m[5] = j, m[6] = x, m[7] = g, m[8] = y, m[9] = l) : l = m[9], m[10] !== b || m[11] !== w || m[12] !== D ? (n = b && (0, a.jsx)("span", {
            className: "hidden md:inline-flex",
            children: (0, a.jsx)(s.default, {
                statusLabel: b,
                statusBgClass: w,
                statusTextClass: D
            })
        }), m[10] = b, m[11] = w, m[12] = D, m[13] = n) : n = m[13], m[14] !== i || m[15] !== l || m[16] !== n ? (o = (0, a.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [i, l, n]
        }), m[14] = i, m[15] = l, m[16] = n, m[17] = o) : o = m[17], m[18] !== S ? (c = (0, a.jsx)("p", {
            className: "text-xs text-black",
            children: S
        }), m[18] = S, m[19] = c) : c = m[19], m[20] !== o || m[21] !== c ? (u = (0, a.jsxs)("div", {
            className: "flex flex-col",
            children: [o, c]
        }), m[20] = o, m[21] = c, m[22] = u) : u = m[22], m[23] !== r || m[24] !== u ? (d = (0, a.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [r, u]
        }), m[23] = r, m[24] = u, m[25] = d) : d = m[25], d
    }])
}, 48238, e => {
    "use strict";
    var a = e.i(43476),
        t = e.i(932),
        s = e.i(71645),
        r = e.i(69638),
        i = e.i(85203),
        l = e.i(19599),
        n = e.i(21742),
        o = e.i(90116),
        c = e.i(30906),
        u = e.i(6299),
        d = e.i(35198),
        m = e.i(55699),
        h = e.i(69377),
        f = e.i(50007),
        g = e.i(75157),
        x = e.i(9428),
        y = e.i(73884),
        S = e.i(56581),
        b = e.i(48438);
    let p = e => {
            let s, i, l, o = (0, t.c)(19),
                {
                    suggestion: c,
                    isPrimaryMatch: d,
                    isLoading: m,
                    isDisabled: h,
                    onBuy: f
                } = e,
                {
                    domain: g,
                    available: x,
                    premium: S
                } = c,
                p = x ? r.CheckCircle : y.XCircle,
                v = x ? u.DOMAIN_STRINGS.availability.available : u.DOMAIN_STRINGS.availability.notAvailable,
                N = d && x ? u.DOMAIN_STRINGS.suggestions.bestMatch : x ? u.DOMAIN_STRINGS.suggestions.greatAlternative : S ? u.DOMAIN_STRINGS.availability.premium : void 0,
                w = x ? d ? "badge badge-blue" : "button-secondary" : void 0,
                D = x ? "text-black" : void 0,
                j = x ? "badge badge-green" : "badge badge-red",
                _ = x ? "" : u.DOMAIN_STRINGS.suggestions.domainTaken;
            return o[0] !== g || o[1] !== p || o[2] !== v || o[3] !== N || o[4] !== w || o[5] !== D || o[6] !== j || o[7] !== _ ? (s = (0, a.jsx)("div", {
                className: "flex flex-col flex-1 gap-3",
                children: (0, a.jsx)(b.default, {
                    icon: p,
                    domainName: g,
                    statusLabel: v,
                    anotherStatus: N,
                    anotherStatusBgClass: w,
                    anotherStatusTextClass: D,
                    statusBgClass: j,
                    statusTextClass: "text-black",
                    subText: _
                })
            }), o[0] = g, o[1] = p, o[2] = v, o[3] = N, o[4] = w, o[5] = D, o[6] = j, o[7] = _, o[8] = s) : s = o[8], o[9] !== x || o[10] !== g || o[11] !== h || o[12] !== m || o[13] !== d || o[14] !== f ? (i = x && (0, a.jsx)(n.default, {
                className: "w-full md:w-auto",
                onClick: () => f(g),
                styleClassName: d ? "button-accent" : void 0,
                isLoading: m,
                disabled: h,
                children: u.DOMAIN_STRINGS.suggestions.getIt
            }), o[9] = x, o[10] = g, o[11] = h, o[12] = m, o[13] = d, o[14] = f, o[15] = i) : i = o[15], o[16] !== s || o[17] !== i ? (l = (0, a.jsx)("div", {
                className: "relative p-3 card rounded-sm",
                children: (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                    children: [s, i]
                })
            }), o[16] = s, o[17] = i, o[18] = l) : l = o[18], l
        },
        v = e => {
            let s, r, n, o, c = (0, t.c)(15),
                {
                    hasSearched: d,
                    isSearching: m,
                    isLoadingSuggestions: h,
                    searchError: f,
                    searchResults: g,
                    onBuyDomain: x,
                    loadingDomain: b
                } = e;
            if (!d || m) return null;
            let v = f ? "error" : g ? .hasResults ? `results-${g.searchTerm}-${g.suggestions.length}-${h?"loading":"loaded"}` : "empty";
            c[0] !== g ? .searchTerm ? (s = g ? .searchTerm.replace(/\.\w+$/, "") ? ? "", c[0] = g ? .searchTerm, c[1] = s) : s = c[1];
            let N = s;
            c[2] !== N || c[3] !== g ? .searchTerm ? (r = e => e === g ? .searchTerm || e === N + ".com", c[2] = N, c[3] = g ? .searchTerm, c[4] = r) : r = c[4];
            let w = r;
            return c[5] !== h || c[6] !== w || c[7] !== b || c[8] !== x || c[9] !== f || c[10] !== g ? (n = f ? (0, a.jsx)(S.default, {
                icon: y.XCircle,
                textColor: "text-red-500",
                bgColor: "bg-red-500/15",
                children: f
            }) : g ? (0, a.jsx)("div", {
                className: "space-y-5",
                children: g.hasResults ? (0, a.jsxs)(a.Fragment, {
                    children: [g.suggestions.map((e, t) => (0, a.jsxs)("div", {
                        children: [1 === t && (0, a.jsx)("div", {
                            className: "mt-5 mb-2 text-sm text-black",
                            children: u.DOMAIN_STRINGS.suggestions.otherAvailable
                        }), (0, a.jsx)(p, {
                            suggestion: e,
                            isPrimaryMatch: w(e.domain),
                            isLoading: b === e.domain,
                            isDisabled: null !== b,
                            onBuy: x
                        })]
                    }, e.domain)), h && (0, a.jsx)("div", {
                        className: "mt-5",
                        children: (0, a.jsx)("div", {
                            className: "relative flex items-center justify-center p-4 w-full card rounded-sm",
                            children: (0, a.jsx)(l.default, {
                                className: "w-40 md:w-15"
                            })
                        })
                    })]
                }) : (0, a.jsxs)(S.default, {
                    icon: y.XCircle,
                    textColor: "text-red-500",
                    bgColor: "bg-red-500/15",
                    children: [u.DOMAIN_STRINGS.noResults.noAvailableDomains, ' "', g.searchTerm, '".', " ", u.DOMAIN_STRINGS.noResults.tryDifferentSearch]
                })
            }) : null, c[5] = h, c[6] = w, c[7] = b, c[8] = x, c[9] = f, c[10] = g, c[11] = n) : n = c[11], c[12] !== v || c[13] !== n ? (o = (0, a.jsx)(i.default, {
                animationType: "fade",
                children: n
            }, v), c[12] = v, c[13] = n, c[14] = o) : o = c[14], o
        };
    var N = e.i(38773);
    let w = e => {
        let s, r, i, l = (0, t.c)(8),
            {
                domain: n,
                autoRenew: o,
                onAutoRenewChange: c
            } = e;
        return l[0] !== n ? (s = (0, a.jsx)("h2", {
            className: "text-lg font-medium text-black leading-tight",
            children: n
        }), l[0] = n, l[1] = s) : s = l[1], l[2] !== o || l[3] !== c ? (r = (0, a.jsx)(N.default, {
            checked: o,
            onChange: c,
            label: u.DOMAIN_STRINGS.purchaseHeader.autoRenewLabel,
            labelClassName: "text-xs font-normal",
            className: "gap-1 w-fit max-w-full"
        }), l[2] = o, l[3] = c, l[4] = r) : r = l[4], l[5] !== s || l[6] !== r ? (i = (0, a.jsxs)("div", {
            className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
            children: [s, r]
        }), l[5] = s, l[6] = r, l[7] = i) : i = l[7], i
    };
    var D = e.i(14283),
        j = e.i(28853);
    let _ = e => {
            let s, r, i, l, n, o, c, u, d, m, h = (0, t.c)(26),
                {
                    leftContent: f,
                    rightContent: x,
                    showDot: y,
                    dotColor: S
                } = e,
                b = void 0 === S ? "bg-blue" : S,
                p = y && "flex items-start gap-2";
            return h[0] !== p ? (s = (0, g.cls)(p), h[0] = p, h[1] = s) : s = h[1], h[2] !== b || h[3] !== y ? (r = y && (0, a.jsx)("div", {
                className: (0, g.cls)("h-3 aspect-square rounded-full mt-[4.5%]", b)
            }), h[2] = b, h[3] = y, h[4] = r) : r = h[4], h[5] !== f.primary ? (i = (0, a.jsx)("p", {
                className: "text-sm text-black",
                children: f.primary
            }), h[5] = f.primary, h[6] = i) : i = h[6], h[7] !== f.secondary ? (l = f.secondary && (0, a.jsx)("p", {
                className: "text-xs text-black",
                children: f.secondary
            }), h[7] = f.secondary, h[8] = l) : l = h[8], h[9] !== i || h[10] !== l ? (n = (0, a.jsxs)("div", {
                children: [i, l]
            }), h[9] = i, h[10] = l, h[11] = n) : n = h[11], h[12] !== s || h[13] !== r || h[14] !== n ? (o = (0, a.jsxs)("div", {
                className: s,
                children: [r, n]
            }), h[12] = s, h[13] = r, h[14] = n, h[15] = o) : o = h[15], h[16] !== x.primary ? (c = (0, a.jsx)("p", {
                className: "text-sm font-medium text-black",
                children: x.primary
            }), h[16] = x.primary, h[17] = c) : c = h[17], h[18] !== x.secondary ? (u = x.secondary && (0, a.jsx)("p", {
                className: "text-xs text-black",
                children: x.secondary
            }), h[18] = x.secondary, h[19] = u) : u = h[19], h[20] !== u || h[21] !== c ? (d = (0, a.jsxs)("div", {
                className: "text-right",
                children: [c, u]
            }), h[20] = u, h[21] = c, h[22] = d) : d = h[22], h[23] !== d || h[24] !== o ? (m = (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [o, d]
            }), h[23] = d, h[24] = o, h[25] = m) : m = h[25], m
        },
        I = e => {
            let s, r, i, l, o, c, d, m, h = (0, t.c)(15),
                {
                    totalPrice: f,
                    isProcessing: g,
                    onPurchase: x,
                    isDisabled: y
                } = e,
                S = void 0 !== y && y;
            h[0] !== f ? (s = f.toFixed(2), h[0] = f, h[1] = s) : s = h[1];
            let b = `$${s} USD`;
            h[2] === Symbol.for("react.memo_cache_sentinel") ? (r = new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            }), h[2] = r) : r = h[2];
            let p = r;
            return h[3] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(D.default, {
                label: u.DOMAIN_STRINGS.buyDomain.summary,
                tooltip: u.DOMAIN_STRINGS.buyDomain.nonRefundable,
                tooltipMultiLine: !0,
                tooltipVerticalPosition: "below",
                labelClassName: "font-medium"
            }), l = (0, a.jsx)(j.default, {}), h[3] = i, h[4] = l) : (i = h[3], l = h[4]), h[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                primary: u.DOMAIN_STRINGS.purchaseSummarySection.total,
                secondary: p
            }, h[5] = o) : o = h[5], h[6] !== b ? (c = (0, a.jsx)(_, {
                leftContent: o,
                rightContent: {
                    primary: b,
                    secondary: u.DOMAIN_STRINGS.purchaseSummary.plusTaxes
                }
            }), h[6] = b, h[7] = c) : c = h[7], h[8] !== S || h[9] !== g || h[10] !== x ? (d = (0, a.jsx)(n.default, {
                onClick: x,
                disabled: S,
                isLoading: g,
                loadingText: u.DOMAIN_STRINGS.statusViews.processing,
                styleClassName: "button-accent",
                className: "w-full",
                children: u.DOMAIN_STRINGS.buyDomain.buyButton
            }), h[8] = S, h[9] = g, h[10] = x, h[11] = d) : d = h[11], h[12] !== c || h[13] !== d ? (m = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [i, l, c, d]
            }), h[12] = c, h[13] = d, h[14] = m) : m = h[14], m
        },
        T = e => {
            let s, r, l, n, c, d, m, h = (0, t.c)(23),
                {
                    preregisterData: f,
                    onBack: x,
                    onPurchase: b,
                    isProcessing: p,
                    error: v,
                    autoRenew: N,
                    onAutoRenewChange: D,
                    totalPrice: j,
                    className: _,
                    isDashboard: T
                } = e,
                A = void 0 !== T && T;
            return h[0] !== A || h[1] !== x ? (s = !A && (0, a.jsx)(o.default, {
                onBack: x,
                baseLabel: u.DOMAIN_STRINGS.breadcrumbs.domains,
                currentLabel: u.DOMAIN_STRINGS.breadcrumbs.purchase
            }), h[0] = A, h[1] = x, h[2] = s) : s = h[2], h[3] !== _ ? (r = (0, g.cls)("flex flex-col gap-5 h-full", _), h[3] = _, h[4] = r) : r = h[4], h[5] !== N || h[6] !== D || h[7] !== f.domain ? (l = (0, a.jsx)("div", {
                className: "relative flex flex-col mx-auto gap-5 p-5 w-full h-fit button-secondary rounded-sm",
                children: (0, a.jsx)(w, {
                    domain: f.domain,
                    autoRenew: N,
                    onAutoRenewChange: D
                })
            }), h[5] = N, h[6] = D, h[7] = f.domain, h[8] = l) : l = h[8], h[9] !== p || h[10] !== b || h[11] !== j ? (n = (0, a.jsx)("div", {
                className: "relative flex flex-col mx-auto gap-5 p-5 w-full h-fit button-secondary rounded-sm",
                children: (0, a.jsx)(I, {
                    totalPrice: j,
                    isProcessing: p,
                    onPurchase: b
                })
            }), h[9] = p, h[10] = b, h[11] = j, h[12] = n) : n = h[12], h[13] !== v ? (c = v && (0, a.jsx)(S.default, {
                icon: y.XCircle,
                textColor: "text-red-500",
                children: v
            }), h[13] = v, h[14] = c) : c = h[14], h[15] !== r || h[16] !== l || h[17] !== n || h[18] !== c ? (d = (0, a.jsxs)(i.default, {
                className: r,
                children: [l, n, c]
            }), h[15] = r, h[16] = l, h[17] = n, h[18] = c, h[19] = d) : d = h[19], h[20] !== s || h[21] !== d ? (m = (0, a.jsxs)(a.Fragment, {
                children: [s, d]
            }), h[20] = s, h[21] = d, h[22] = m) : m = h[22], m
        },
        A = {
            search: 0,
            purchase: 1,
            success: 2
        };
    e.s(["default", 0, e => {
        let y, S, b, p, N, w, D, j, _, I = (0, t.c)(45),
            {
                onBack: P,
                onSuccess: R,
                project: k,
                isGlobalContext: C,
                isDashboard: E,
                onSetModalBack: M,
                onSetActiveStep: O
            } = e,
            G = void 0 !== C && C,
            q = void 0 !== E && E,
            L = (0, d.useBuyNewDomain)(),
            B = (0, f.useGlobalDomainPurchase)(),
            {
                currentStep: F,
                searchTerm: z,
                isSearching: $,
                isLoadingSuggestions: V,
                searchResults: U,
                searchError: K,
                hasSearched: Q,
                preregisterData: X,
                loadingDomain: H,
                setSearchTerm: W,
                handleSearch: J,
                handleKeyDown: Y,
                handleBuyDomain: Z,
                handleBackToSearch: ee
            } = G ? B : L,
            {
                isProcessing: ea,
                error: et,
                autoRenew: es,
                setAutoRenew: er,
                totalPrice: ei,
                handlePurchase: el
            } = (0, m.useDomainPurchaseForm)(X),
            en = G ? null : L.purchasedDomain,
            eo = !G && L.isLoadingSkipToPurchase,
            ec = G ? void 0 : L.resetForSuccessGoBack;
        (0, h.useDomainSuccessScreen)(en || "", k);
        let eu = (0, s.useRef)(ee);
        return I[0] !== ee ? (y = () => {
            eu.current = ee
        }, S = [ee], I[0] = ee, I[1] = y, I[2] = S) : (y = I[1], S = I[2]), (0, s.useEffect)(y, S), I[3] !== F || I[4] !== M ? (b = () => {
            M && ("purchase" === F ? M(() => eu.current()) : M(null))
        }, p = [F, M], I[3] = F, I[4] = M, I[5] = b, I[6] = p) : (b = I[5], p = I[6]), (0, s.useEffect)(b, p), I[7] !== F || I[8] !== O ? (N = () => {
            O && O(A[F] ? ? 0)
        }, w = [F, O], I[7] = F, I[8] = O, I[9] = N, I[10] = w) : (N = I[9], w = I[10]), (0, s.useEffect)(N, w), I[11] !== F || I[12] !== q || I[13] !== P ? (D = "search" === F && !q && (0, a.jsx)(o.default, {
            onBack: P,
            baseLabel: u.DOMAIN_STRINGS.breadcrumbs.domains,
            currentLabel: u.DOMAIN_STRINGS.buyDomain.currentLabel
        }), I[11] = F, I[12] = q, I[13] = P, I[14] = D) : D = I[14], I[15] !== es || I[16] !== F || I[17] !== et || I[18] !== ee || I[19] !== Z || I[20] !== Y || I[21] !== el || I[22] !== J || I[23] !== Q || I[24] !== q || I[25] !== G || I[26] !== eo || I[27] !== V || I[28] !== ea || I[29] !== $ || I[30] !== H || I[31] !== R || I[32] !== X || I[33] !== en || I[34] !== ec || I[35] !== K || I[36] !== U || I[37] !== z || I[38] !== er || I[39] !== W || I[40] !== ei ? (j = "purchase" === F && X ? (0, a.jsx)(T, {
            preregisterData: X,
            onBack: ee,
            onPurchase: el,
            isProcessing: ea,
            error: et,
            autoRenew: es,
            onAutoRenewChange: er,
            totalPrice: ei,
            className: q ? "w-full" : "w-full md:w-50 2xl:w-55",
            isDashboard: q
        }) : "success" === F && en && !G ? (0, a.jsx)(i.default, {
            children: (0, a.jsx)(c.default, {
                icon: r.CheckCircle,
                title: `${u.DOMAIN_STRINGS.statusViews.success}!`,
                description: (0, a.jsxs)(a.Fragment, {
                    children: [u.DOMAIN_STRINGS.statusViews.yourDomain, " ", (0, a.jsx)("span", {
                        className: "font-medium",
                        children: en
                    }), " ", u.DOMAIN_STRINGS.statusViews.hasBeenSuccessfully, " ", u.DOMAIN_STRINGS.statusViews.purchasedAndConnected, "!"]
                }),
                children: (0, a.jsx)(n.default, {
                    onClick: () => ec ? .(R),
                    styleClassName: "card",
                    children: u.DOMAIN_STRINGS.dashboardDomains.goBack
                })
            })
        }, "success") : (0, a.jsxs)(i.default, {
            className: (0, g.cls)("relative flex flex-col mx-auto gap-5 p-5 h-fit button-secondary rounded-sm", q ? "w-full" : "w-full md:w-50 2xl:w-55"),
            children: [(0, a.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [(0, a.jsx)("h2", {
                    className: "text-lg font-medium text-black leading-tight",
                    children: u.DOMAIN_STRINGS.buyDomain.title
                }), (0, a.jsx)("p", {
                    className: "text-sm text-black/75 leading-tight text-balance",
                    children: u.DOMAIN_STRINGS.buyDomain.description
                })]
            }), (0, a.jsx)(x.default, {
                value: z || "",
                isLoading: $ || eo,
                onChange: e => W(e || null),
                onSubmit: G ? () => z && J(z) : J,
                onKeyDown: Y,
                placeholder: u.DOMAIN_STRINGS.buyDomain.placeholder,
                buttonStyleClassName: "button-accent"
            }), eo ? (0, a.jsx)("div", {
                className: "relative flex items-center justify-center p-4 w-full card rounded-sm",
                children: (0, a.jsx)(l.default, {
                    className: "w-40 md:w-15"
                })
            }) : (0, a.jsx)(v, {
                hasSearched: Q,
                isSearching: $,
                isLoadingSuggestions: V,
                searchError: K,
                searchResults: U,
                onBuyDomain: Z,
                loadingDomain: H
            })]
        }, "search"), I[15] = es, I[16] = F, I[17] = et, I[18] = ee, I[19] = Z, I[20] = Y, I[21] = el, I[22] = J, I[23] = Q, I[24] = q, I[25] = G, I[26] = eo, I[27] = V, I[28] = ea, I[29] = $, I[30] = H, I[31] = R, I[32] = X, I[33] = en, I[34] = ec, I[35] = K, I[36] = U, I[37] = z, I[38] = er, I[39] = W, I[40] = ei, I[41] = j) : j = I[41], I[42] !== j || I[43] !== D ? (_ = (0, a.jsxs)(a.Fragment, {
            children: [D, j]
        }), I[42] = j, I[43] = D, I[44] = _) : _ = I[44], _
    }], 48238)
}]);