(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 46475, e => {
    "use strict";
    let t = async e => await e({
        template: "webild-prod"
    });
    e.s(["getAuthToken", 0, t])
}, 38703, e => {
    "use strict";
    var t = e.i(40578);
    e.s(["useAuth", () => t.usePromisifiedAuth])
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
    async function r(e, o, s, i = !1) {
        let a = `${t}${e}`,
            c = {
                mode: "cors",
                Accept: "application/json",
                Authorization: `Bearer ${s}`,
                ...o.headers
            };
        i || o.body instanceof FormData || (c["Content-Type"] = "application/json");
        let u = await fetch(a, { ...o,
            headers: c
        });
        if (!u.ok) {
            let e = await u.json().catch(() => ({})),
                t = e.details ? .message || `Status: ${u.status}`;
            throw new n(`Error: ${t}`, u.status, e)
        }
        return await u.json()
    }
    async function o(e) {
        return r("/stripe/billing-history", {
            method: "GET"
        }, e)
    }
    async function s(e, t) {
        return r("/projects", {
            method: "POST",
            body: JSON.stringify(e)
        }, t)
    }
    async function i(e, t, n = 10, o) {
        let s = `/projects/${e}/messages?limit=${n}`;
        return o && (s += `&cursor=${o}`), r(s, {
            method: "GET"
        }, t)
    }
    async function a(e, t, n) {
        return r(`/projects/${e}/deploy`, {
            method: "POST",
            body: JSON.stringify({
                domainName: n
            })
        }, t)
    }
    async function c(e, t, n) {
        return r(`/projects/${e}/switch-version`, {
            method: "POST",
            body: JSON.stringify({
                project_version_id: t
            })
        }, n)
    }
    async function u(e, t) {
        return r(`/projects/${e}`, {
            method: "GET"
        }, t)
    }
    async function d(e, t) {
        return r(`/projects/${e}/pages`, {
            method: "GET"
        }, t)
    }
    async function m(e = 10, t, n) {
        let o = `/projects?limit=${e}`;
        return n && (o += `&cursor=${encodeURIComponent(n)}`), r(o, {
            method: "GET",
            cache: "no-store"
        }, t)
    }
    async function l(e, t) {
        return r(`/projects/${e}`, {
            method: "DELETE"
        }, t)
    }
    async function p(e, t) {
        return r("/projects/bulk-delete", {
            method: "POST",
            body: JSON.stringify({
                projectIds: e
            })
        }, t)
    }
    async function y(e, t, n, o, s, i, a) {
        if (i && i.length > 0) {
            let c = new FormData;
            return c.append("type", "user"), c.append("message", n), c.append("is_system", "false"), s ? .selector && c.append("elementSelector", s.selector), s ? .semanticType && c.append("elementType", s.semanticType), s ? .innerText && c.append("elementText", s.innerText), a && c.append("templateData", JSON.stringify(a)), i.slice(0, 5).forEach(e => {
                c.append("images", e)
            }), r(`/projects/${e}/versions/${t}/messages`, {
                method: "POST",
                body: c
            }, o, !0)
        }
        let c = {
            type: "user",
            message: n,
            is_system: !1,
            ...s ? .selector && {
                elementSelector: s.selector
            },
            ...s ? .semanticType && {
                elementType: s.semanticType
            },
            ...s ? .innerText && {
                elementText: s.innerText
            }
        };
        return a && (c.templateData = a), r(`/projects/${e}/versions/${t}/messages`, {
            method: "POST",
            body: JSON.stringify(c)
        }, o)
    }
    async function h(e, t, n, o) {
        return r(`/projects/${e}/versions/${t}/messages/edit`, {
            method: "POST",
            body: JSON.stringify(n)
        }, o)
    }
    async function f(e, t, n, o) {
        return r(`/projects/${e}/versions/${t}/visual-edit`, {
            method: "POST",
            body: JSON.stringify({
                replacements: n
            })
        }, o)
    }
    async function g(e, t) {
        return r(`/projects/${e}/stop-generation`, {
            method: "POST"
        }, t)
    }
    async function P(e, t, n) {
        return r(`/projects/${e}/versions/${t}/fix-generation`, {
            method: "POST"
        }, n)
    }
    async function S(e, t, n, o) {
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
    async function T(e, t, n, o) {
        return r(`/projects/${e}/versions/${t}/useTemplate`, {
            method: "POST",
            body: JSON.stringify(n)
        }, o)
    }
    async function A(e, t, n) {
        let o = n ? .projectId,
            s = n ? .tierIndex;
        return r("/stripe/checkout-session", {
            method: "POST",
            body: JSON.stringify({
                plan: e,
                ...o && {
                    projectId: o
                },
                ..."number" == typeof s && {
                    tierIndex: s
                }
            })
        }, t)
    }
    async function I(e) {
        return r("/stripe/subscriptions", {
            method: "GET"
        }, e)
    }
    async function $(e) {
        return r("/stripe/additional-credits", {
            method: "GET"
        }, e)
    }
    async function b(e) {
        return r("/stripe/subscription/cancel", {
            method: "POST"
        }, e)
    }
    async function O(e, t) {
        return r("/images/generate", {
            method: "POST",
            body: JSON.stringify({
                prompt: e
            })
        }, t)
    }
    async function j(e) {
        return r("/images", {
            method: "GET",
            headers: {
                "Cache-Control": "no-cache, no-store, must-revalidate"
            }
        }, e)
    }
    async function E(e, t, n) {
        return r("/images/save", {
            method: "POST",
            body: JSON.stringify({
                key: e,
                url: t
            })
        }, n)
    }
    async function v(e, t, n) {
        return r("/images", {
            method: "DELETE",
            body: JSON.stringify({
                keys: Array.isArray(e) ? e : [e],
                urls: Array.isArray(t) ? t : [t]
            })
        }, n)
    }
    async function w(e) {
        return r("/dnsimple/domains", {
            method: "GET"
        }, e)
    }
    async function N(e, t) {
        return r(`/projects/${e}/domainsConfig`, {
            method: "GET"
        }, t)
    }
    async function U(e, t) {
        return r(`/projects/${e}/theme/colors`, {
            method: "GET"
        }, t)
    }
    async function C(e, t, n) {
        return r(`/projects/${e}/theme/colors`, {
            method: "PUT",
            body: JSON.stringify(t)
        }, n)
    }
    async function D(e, t) {
        return r(`/projects/${e}/theme/fonts`, {
            method: "GET"
        }, t)
    }
    async function J(e, t, n) {
        return r(`/projects/${e}/theme/fonts`, {
            method: "PUT",
            body: JSON.stringify({
                fontKey: t
            })
        }, n)
    }
    async function G(e, t, n) {
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
    async function R(e, t) {
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
    async function _(e, t) {
        return r(`/dnsimple/domains/preregister/${encodeURIComponent(e)}`, {
            method: "POST"
        }, t)
    }
    async function L(e) {
        return r("/dnsimple/accounts/me", {
            method: "GET"
        }, e)
    }
    async function x(e, t) {
        return r(`/dnsimple/${encodeURIComponent(e)}`, {
            method: "GET"
        }, t)
    }
    async function F(e, t) {
        return r(`/dnsimple/${encodeURIComponent(e)}/nameservers`, {
            method: "GET"
        }, t)
    }
    async function B(e, t, n) {
        return r(`/dnsimple/${encodeURIComponent(e)}/nameservers`, {
            method: "PUT",
            body: JSON.stringify({
                nameservers: t
            })
        }, n)
    }
    async function z(e, t) {
        return r(`/dnsimple/${encodeURIComponent(e)}/records`, {
            method: "GET"
        }, t)
    }
    async function q(e, t, n) {
        return r(`/dnsimple/${encodeURIComponent(e)}/records`, {
            method: "POST",
            body: JSON.stringify(t)
        }, n)
    }
    async function H(e, t, n) {
        return r(`/dnsimple/${encodeURIComponent(e)}/records/${encodeURIComponent(t)}`, {
            method: "DELETE"
        }, n)
    }
    async function M(e, t, n) {
        return r(`/dnsimple/domains/auto-renewal/${e}`, {
            method: "PUT",
            body: JSON.stringify({
                enable: t
            })
        }, n)
    }
    async function K(e, t, n, o) {
        return r("/stripe/domain-checkout", {
            method: "POST",
            body: JSON.stringify({
                redirectUrl: e,
                price: t,
                meta: o
            })
        }, n)
    }
    async function V(e, t) {
        return r(`/stripe/domain-checkout/${e}/status`, {
            method: "GET"
        }, t)
    }
    async function Q(e, t, n) {
        return r(`/projects/${e}/versions/${t}/settings`, {
            method: "GET"
        }, n)
    }
    async function W(e, t, n, o) {
        return r(`/projects/${e}/versions/${t}/settings`, {
            method: "POST",
            body: JSON.stringify(n)
        }, o)
    }
    async function X(e, t) {
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
    async function Y(e, t) {
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
    async function es(e, t) {
        return r("/users/claim-referral-bonus", {
            method: "POST",
            body: JSON.stringify({
                code: e
            })
        }, t)
    }
    async function ei(e, t, n) {
        let {
            title: o,
            slug: s,
            status: i,
            image: a,
            content: c,
            category: u,
            imagePreview: d
        } = t, m = new FormData;
        return m.append("title", o), m.append("slug", s), m.append("status", i), m.append("content", c), m.append("category", u), a && m.append("image", a), d && m.append("imagePreview", d), r(`/posts/${e}`, {
            method: "POST",
            body: m
        }, n, !0)
    }
    async function ea(e, t, n) {
        return r(`/posts/${e}/generate`, {
            method: "POST",
            body: JSON.stringify({
                prompt: t
            })
        }, n)
    }
    async function ec(e, t, n) {
        let o = n ? `?status=${n}` : "";
        return r(`/posts/${e}${o}`, {
            method: "GET"
        }, t)
    }
    async function eu(e, t, n, o) {
        let {
            title: s,
            slug: i,
            status: a,
            image: c,
            content: u,
            category: d
        } = n, m = new FormData;
        return m.append("title", s), m.append("slug", i), m.append("status", a), m.append("content", u), m.append("category", d), c && m.append("image", c), r(`/posts/${e}/${t}`, {
            method: "PATCH",
            body: m
        }, o, !0)
    }
    async function ed(e, t, n) {
        return r(`/posts/${e}/${t}`, {
            method: "DELETE"
        }, n)
    }
    async function em(e, t) {
        return r(`/emails/projects/${e}/oauth/google/url`, {
            method: "GET"
        }, t)
    }
    async function el(e, t) {
        return r(`/emails/projects/${e}/oauth/outlook/url`, {
            method: "GET"
        }, t)
    }
    async function ep(e, t) {
        return r(`/emails/projects/${e}/connection`, {
            method: "GET"
        }, t)
    }
    async function ey(e, t, n) {
        return r(`/emails/projects/${e}/connections/${t}`, {
            method: "DELETE"
        }, n)
    }
    async function eh(e, t, n) {
        return r(`/emails/projects/${e}/send`, {
            method: "POST",
            body: JSON.stringify(t)
        }, n)
    }
    async function ef(e, t, n, o) {
        let s = new URLSearchParams;
        n.page && s.append("page", n.page.toString()), n.limit && s.append("limit", n.limit.toString()), n.query && s.append("query", n.query), n.folder && s.append("folder", n.folder), n.readStatus && s.append("readStatus", n.readStatus);
        let i = s.toString();
        return r(`/emails/projects/${e}/connections/${t}/emails${i?`?${i}`:""}`, {
            method: "GET"
        }, o)
    }
    async function eg(e, t, n, o) {
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
        let s = await o.blob();
        return URL.createObjectURL(s)
    }
    e.s(["ApiError", 0, n, "addDomainToProjectAPI", 0, Z, "bulkDeleteProjectsAPI", 0, p, "cancelSubscriptionAPI", 0, b, "checkDomainAvailabilityAPI", 0, R, "claimReferralBonusAPI", 0, es, "connectDomainToProjectAPI", 0, k, "createDnsRecordAPI", 0, q, "createDomainCheckoutSessionAPI", 0, K, "createMessageAPI", 0, y, "createPostAPI", 0, ei, "createProjectAPI", 0, s, "createStripeCheckoutSessionAPI", 0, A, "deleteDnsRecordAPI", 0, H, "deleteImagesAPI", 0, v, "deletePostAPI", 0, ed, "deleteProjectAPI", 0, l, "deployProjectAPI", 0, a, "disconnectEmailAPI", 0, ey, "editMessageAPI", 0, h, "fixGenerationAPI", 0, P, "fixSandboxCrashAPI", 0, S, "generateImageAPI", 0, O, "generatePostAPI", 0, ea, "getAdditionalCreditsAPI", 0, $, "getBillingHistoryAPI", 0, o, "getDNSimpleAccountAPI", 0, L, "getDnsRecordsAPI", 0, z, "getDomainCheckoutSessionStatusAPI", 0, V, "getDomainDetailAPI", 0, x, "getEmailConnectionAPI", 0, ep, "getGoogleOAuthUrlAPI", 0, em, "getImagesAPI", 0, j, "getMessagesAPI", 0, i, "getNameserversAPI", 0, F, "getOutlookOAuthUrlAPI", 0, el, "getProjectDomainsConfigAPI", 0, N, "getProjectIDAPI", 0, u, "getProjectImprovementsAPI", 0, er, "getProjectPagesAPI", 0, d, "getProjectPostsAPI", 0, ec, "getProjectThemeColorsAPI", 0, U, "getProjectThemeFontsAPI", 0, D, "getProjectsAPI", 0, m, "getReferralCodeAPI", 0, eo, "getSandboxSnapshotAPI", 0, eP, "getSiteSettingsAPI", 0, Q, "getSubscriptionPlansAPI", 0, I, "getUserDomainsAPI", 0, w, "getUserLimitsAPI", 0, en, "listEmailsAPI", 0, ef, "markEmailAsReadAPI", 0, eg, "preregisterDomainAPI", 0, _, "removeDomainFromProjectAPI", 0, et, "saveImageAPI", 0, E, "sendEmailAPI", 0, eh, "stopGenerationAPI", 0, g, "switchProjectVersionAPI", 0, c, "trackDomainSearchAPI", 0, function(e, t) {
        r("/dnsimple/domains/track-search", {
            method: "POST",
            body: JSON.stringify({
                domain: e
            })
        }, t).catch(() => {})
    }, "updateDomainAutoRenewalAPI", 0, M, "updateNameserversAPI", 0, B, "updatePostAPI", 0, eu, "updateProjectEmailToAPI", 0, G, "updateProjectThemeColorsAPI", 0, C, "updateProjectThemeFontsAPI", 0, J, "updateSiteSettingsAPI", 0, W, "uploadImageFileAPI", 0, X, "uploadImageFilesAPI", 0, Y, "useTemplateAPI", 0, T, "verifyDomainDnsAPI", 0, ee, "visualEditAPI", 0, f])
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
}, 92037, e => {
    "use strict";
    var t = e.i(68834),
        n = e.i(79473);
    let r = (0, t.create)()((0, n.devtools)((e, t) => ({
        user: null,
        isLoading: !1,
        error: null,
        setUser: t => e({
            user: t,
            error: null
        }),
        setLoading: t => e({
            isLoading: t
        }),
        setError: t => e({
            error: t
        }),
        clearUser: () => e({
            user: null,
            error: null
        }),
        fetchUser: async e => {
            let {
                setLoading: n,
                setUser: r,
                setError: o
            } = t();
            n(!0), o(null);
            try {
                let t = await e();
                if (!t) throw Error("Token not found");
                let n = await fetch("https://api.webild.io/users/me", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${t}`
                    }
                });
                if (!n.ok) throw Error(`Error status: ${n.status}`);
                let o = await n.json();
                r(o)
            } catch (e) {
                o(e instanceof Error ? e.message : "Unknown error")
            } finally {
                n(!1)
            }
        }
    }), {
        name: "user-store"
    }));
    e.s(["useUserStore", 0, r])
}, 51145, e => {
    "use strict";
    e.i(47167);
    var t = e.i(71645),
        n = e.i(38703),
        r = e.i(18279),
        o = e.i(46475),
        s = e.i(26288),
        i = e.i(932);
    let a = "webild_fbclid";

    function c() {
        try {
            let e = new URLSearchParams(window.location.search).get("fbclid");
            e && localStorage.setItem(a, e)
        } catch {}
    }
    var u = e.i(92037);
    e.s(["default", 0, () => ((() => {
        let e, d, {
                isSignedIn: m,
                getToken: l
            } = (0, n.useAuth)(),
            {
                clearUser: p
            } = (0, u.useUserStore)(),
            y = (0, t.useRef)(null),
            h = (0, t.useRef)(0),
            f = (0, t.useRef)(!1),
            g = (0, t.useRef)(null);
        (d = (0, i.c)(1))[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [], d[0] = e) : e = d[0], (0, t.useEffect)(c, e), (0, t.useEffect)(() => {
            let e = !1,
                t = async () => {
                    if (!m || e) {
                        h.current = 0;
                        return
                    }
                    try {
                        let t = await (0, o.getAuthToken)(l);
                        if (!t || e) return;
                        let n = function() {
                            try {
                                return localStorage.getItem(a)
                            } catch {
                                return null
                            }
                        }();
                        n && !f.current && (f.current = !0, fetch("https://api.webild.io/users/fbc", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${t}`
                            },
                            body: JSON.stringify({
                                fbclid: n
                            })
                        }).then(() => (function() {
                            try {
                                localStorage.removeItem(a)
                            } catch {}
                        })()).catch(() => {})), sessionStorage.getItem("session_tracked") || (sessionStorage.setItem("session_tracked", "1"), fetch("https://api.webild.io/analytics/track", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${t}`
                            },
                            body: JSON.stringify({
                                event: "session_started"
                            })
                        }).catch(() => {}));
                        let i = await (0, r.getUserLimitsAPI)(t);
                        if (e) return;
                        200 === i.code && i.data && (s.sessionStorageUtils.setLimits(i.data), h.current = 0)
                    } catch (n) {
                        if (e) return;
                        h.current < 2 ? (h.current += 1, g.current = setTimeout(() => {
                            t()
                        }, 1e3)) : 500 === n.status && s.sessionStorageUtils.setLimits({
                            plan: "free",
                            isCancelled: !1,
                            messages_token_left: 0,
                            messages_token_usage: 0,
                            projects_creation_usage: 0,
                            projects_creation_left: 0,
                            period: {
                                start: "",
                                end: ""
                            }
                        })
                    }
                };
            return t(), () => {
                e = !0, g.current && clearTimeout(g.current)
            }
        }, [m, l]), (0, t.useEffect)(() => {
            !0 === y.current && !1 === m && (s.sessionStorageUtils.clearLimits(), p()), y.current = m
        }, [m, p])
    })(), null)], 51145)
}, 90419, e => {
    e.n(e.i(51145))
}]);