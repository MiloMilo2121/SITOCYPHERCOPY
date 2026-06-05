(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 73884, e => {
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
}, 2170, e => {
    "use strict";
    var t = e.i(18279);
    let a = [".com", ".ai", ".io", ".co", ".net", ".xyz", ".org"],
        n = async (e, a, n) => {
            let i = await t.getProjectDomainsConfigAPI(e, n),
                s = i.data ? .domains || [];
            if (s.some(e => e.domain.name === a)) return;
            let l = s.filter(e => !e.domain.name.includes("vercel.app"));
            await Promise.all(l.map(a => t.removeDomainFromProjectAPI(e, a.domain.name, n))), await t.addDomainToProjectAPI(e, a, n)
        },
        i = (e, a) => {
            if (e instanceof t.ApiError) {
                let t = e.response ? .details,
                    n = t ? .message;
                return "string" == typeof n && n.length > 0 ? n : e.message.replace(/^Error!\s*/, "") || a
            }
            return e instanceof Error ? e.message : a
        };
    e.s(["generateDomainSuggestions", 0, e => {
        let t = e.replace(/\.[a-z]{2,}$/i, "");
        return a.map(e => `${t}${e}`)
    }, "generateProjectDomainName", 0, e => e.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "").substring(0, 63), "generateWordOrderVariations", 0, e => {
        let t = e.toLowerCase().trim().split(/\s+/).filter(Boolean);
        if (t.length < 2) return [];
        let a = [],
            n = [...t].reverse();
        return a.push(n.join("")), a.push(t.join("-")), a.push(n.join("-")), [...new Set(a)]
    }, "getErrorMessage", 0, i, "handleDomainError", 0, (e, t, a) => {
        let n = i(e, t);
        return a && a(n), n
    }, "replaceNonVercelDomains", 0, n], 2170)
}, 24032, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(75157);
    e.s(["default", 0, e => {
        let i, s, l, o, r = (0, a.c)(10),
            {
                statusBgClass: c,
                statusTextClass: d,
                statusLabel: m
            } = e;
        return r[0] !== c ? (i = (0, n.cls)("px-3 w-fit py-0.5 rounded", c), r[0] = c, r[1] = i) : i = r[1], r[2] !== d ? (s = (0, n.cls)("text-xs", d), r[2] = d, r[3] = s) : s = r[3], r[4] !== m || r[5] !== s ? (l = (0, t.jsx)("p", {
            className: s,
            children: m
        }), r[4] = m, r[5] = s, r[6] = l) : l = r[6], r[7] !== i || r[8] !== l ? (o = (0, t.jsx)("div", {
            className: i,
            children: l
        }), r[7] = i, r[8] = l, r[9] = o) : o = r[9], o
    }])
}, 90116, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(73375),
        i = e.i(63059),
        s = e.i(75157);
    e.s(["default", 0, e => {
        let l, o, r, c, d, m, u, h, x = (0, a.c)(21),
            {
                onBack: g,
                baseLabel: f,
                currentLabel: p,
                icon: b,
                className: y
            } = e;
        x[0] !== y ? (l = (0, s.cls)("flex items-center gap-2 w-full", y), x[0] = y, x[1] = l) : l = x[1], x[2] !== b || x[3] !== g ? (o = g ? (0, t.jsx)("button", {
            onClick: g,
            className: "relative flex items-center justify-center h-5 aspect-square button-secondary rounded-max-sm cursor-pointer",
            children: (0, t.jsx)(n.ChevronLeft, {
                className: "h-[50%] w-auto text-black",
                strokeWidth: 2.5
            })
        }) : b ? (0, t.jsx)(b, {
            className: "h-(--text-sm) w-auto text-black",
            strokeWidth: 2.5
        }) : null, x[2] = b, x[3] = g, x[4] = o) : o = x[4];
        let N = g ? "cursor-pointer text-black/75" : "text-black";
        return x[5] !== N ? (r = (0, s.cls)("text-sm font-medium", N), x[5] = N, x[6] = r) : r = x[6], x[7] !== f || x[8] !== g || x[9] !== r ? (c = (0, t.jsx)("button", {
            onClick: g,
            className: r,
            children: f
        }), x[7] = f, x[8] = g, x[9] = r, x[10] = c) : c = x[10], x[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, t.jsx)(i.ChevronRight, {
            className: "h-[1em] w-auto text-black",
            strokeWidth: 2.5
        }), x[11] = d) : d = x[11], x[12] !== p ? (m = (0, t.jsx)("span", {
            className: "text-sm font-medium text-black",
            children: p
        }), x[12] = p, x[13] = m) : m = x[13], x[14] !== c || x[15] !== m ? (u = (0, t.jsxs)("div", {
            className: "flex items-center gap-1 text-sm",
            children: [c, d, m]
        }), x[14] = c, x[15] = m, x[16] = u) : u = x[16], x[17] !== l || x[18] !== o || x[19] !== u ? (h = (0, t.jsxs)("div", {
            className: l,
            children: [o, u]
        }), x[17] = l, x[18] = o, x[19] = u, x[20] = h) : h = x[20], h
    }])
}, 6299, e => {
    "use strict";
    var t = e.i(43531),
        a = e.i(37727),
        n = e.i(62788);
    t.Check, a.X;
    let i = {
        projectSelection: {
            title: "Select a project for your domain",
            description: "Choose a project to connect your existing domain to.",
            searchPlaceholder: "Search for a project",
            noProjectsTitle: "No projects found",
            publishFirstDescription: "Please publish a project first to assign this domain."
        },
        errors: {
            failedToRegister: "Failed to register domain",
            errorPrefix: "Error:"
        },
        mainView: {
            globalDescription: "Manage your global domains and connect them to projects.",
            projectDescription: "Publish your project to custom domains.",
            noDomainsConnected: "No domains connected to this project"
        },
        upgrade: {
            title: "Upgrade to access custom domains",
            description: "Purchase, connect, and manage custom domains for your projects.",
            buttonLabel: n.COMMON_STRINGS.buttons.UPGRADE_PLAN
        },
        connectingModal: {
            title: "Connecting domain",
            description: "Please wait while we deploy and connect your domain."
        },
        dnsRecords: {
            pointsToLabel: "Points to",
            pointsToPlaceholder: "Points to",
            title: "Manage DNS records",
            description: "These records define how your domain connects to services.",
            addRecord: "Add Record",
            tableHeaders: ["Type", "Name", "Value"]
        },
        domainInfo: {
            expirationLabel: "Expiration date",
            expirationTooltip: "The date your domain registration expires"
        },
        buyDomain: {
            currentLabel: "Buy new domain",
            title: "Find the perfect domain",
            description: "Purchase, host, and manage your domains — all in one place.",
            placeholder: "Enter domain (e.g., example.com)",
            registrationPeriod: "Registration period",
            periodDescription: "Choose how long you want to register your domain for.",
            yearSuffix: "/year",
            continue: "Continue",
            summary: "Summary",
            nonRefundable: "This is a non-refundable purchase.",
            buyButton: "Buy Domain"
        },
        connectDomain: {
            currentLabel: "Connect existing",
            successTitle: "Domain connected successfully!",
            title: "Connect Existing Domain",
            publishRequired: "Your project needs to be published before connecting a domain.",
            publishButton: "Publish Project",
            verifyFailed: "We couldn't verify your domain yet.",
            dnsNote: "DNS changes can take up to 48 hours to propagate."
        },
        purchaseSummary: {
            plusTaxes: "Plus applicable taxes",
            annualRegistration: "Annual registration"
        },
        suggestions: {
            domainTaken: "This domain is already taken",
            otherAvailable: "Other available domains:",
            bestMatch: "Best Match",
            greatAlternative: "Great Alternative",
            getIt: "Get it"
        },
        domainManagement: {
            title: "Domain Management",
            yourDomains: "Your Domains",
            active: "Active",
            expiresPrefix: "Expires: ",
            manageDomains: "Manage Domains"
        },
        privacySecurity: {
            title: "Privacy & Security",
            description: "Configure privacy settings for your domain.",
            domainRegistration: "Domain Registration",
            privateRegistration: "Private Registration",
            publicRegistration: "Public Registration",
            checkout: "Checkout"
        },
        processing: {
            registering: "Registering your domain and connecting...",
            registeringToProject: "Registering your domain and connecting it to your project..."
        },
        nameservers: {
            title: "DNS/Nameservers",
            noConfigured: "No nameservers configured",
            changeButton: "Change Nameservers"
        },
        domainOverview: {
            title: "Domain overview",
            renewButton: "Renew",
            redirecting: "Redirecting..."
        },
        configuration: {
            needsConfig: "Needs Configuration",
            verifyOwnership: "To verify ownership, add the following records where your domain is managed (e.g., GoDaddy, Namecheap):",
            instructions: "Instructions:",
            verifyButton: "Verify",
            verifying: "Verifying...",
            propagationNote: "It may take up to 60 minutes for site to show up on new custom domains after successful configuration."
        },
        availability: {
            available: "Available",
            notAvailable: "Not Available",
            premium: "Premium"
        },
        emptyState: {
            noDomainsYet: "You don't have any domains yet",
            getCustomDomain: "Get Custom Domain"
        },
        connectBanner: {
            description: "Looking to connect an existing domain to one of your projects?",
            button: "Connect Domain"
        },
        sections: {
            myDomains: "My Domains",
            siteDomains: "Site Domains",
            domains: "Domains"
        },
        common: {
            cancel: "Cancel",
            save: "Save",
            select: "Select",
            skip: "Skip",
            settings: "Settings",
            search: "Search",
            configure: "Configure",
            free: "Free",
            publishing: "Publishing"
        },
        projectDomainsSection: {
            title: "Project Domains",
            disconnect: "Disconnect",
            manage: "Manage",
            disconnectTitle: "Disconnect",
            disconnectConfirm: "This domain is currently connected to another project. If you continue, it will be disconnected from that project. The previous site will no longer be live on this domain.",
            disconnectButton: "Disconnect domain"
        },
        domainItem: {
            connected: "Connected",
            connecting: "Connecting",
            connect: "Connect",
            processing: "Processing...",
            primary: "Primary",
            redirect: "Redirect"
        },
        dashboardDomains: {
            title: "Domains",
            back: "Back",
            goBack: "Go Back"
        },
        purchaseHeader: {
            autoRenewLabel: "Auto-renew every year"
        },
        purchaseSummarySection: {
            total: "Total"
        },
        statusViews: {
            error: "Error",
            processing: "Processing",
            success: "Success",
            registering: "Registering your domain",
            paymentCancelled: "Payment Cancelled",
            paymentCancelledDesc: "Your domain purchase was cancelled. No charges were made.",
            tryAgain: "Try Again",
            yourDomain: "Your domain",
            hasBeenSuccessfully: "has been successfully",
            purchased: "purchased",
            connected: "connected",
            purchasedAndConnected: "purchased and connected",
            andConnectedToProject: "and connected to the project"
        },
        noResults: {
            noAvailableDomains: "No available domains found for",
            tryDifferentSearch: "Try a different search term."
        },
        connectExisting: {
            verifyFailedDesc: "DNS changes can take up to 60 minutes to propagate. Try again soon."
        },
        dnsRecordModal: {
            type: "Type",
            name: "Name",
            target: "Target",
            ttl: "TTL",
            update: "Update",
            add: "Add"
        },
        dnsRecordsSection: {
            priority: "Priority",
            content: "Content",
            delete: "Delete",
            deleteTitle: "Delete DNS record",
            defaultPlaceholder: "@",
            defaultTtl: "14400",
            adding: "Adding..."
        },
        breadcrumbs: {
            domains: "Domains",
            management: "Management",
            purchase: "Purchase",
            domainOverview: "Domain Overview"
        },
        stepLabels: {
            search: "Search",
            purchase: "Purchase",
            connect: "Connect",
            configure: "Configure"
        },
        projectSelectionScreen: {
            assign: "Assign",
            toAProject: "to a Project",
            noPublishedProjects: "No Published Projects",
            createProject: "Create Project",
            noProjectsFound: "No projects found"
        },
        projectSelectionControls: {
            connecting: "Connecting",
            continue: "Continue"
        },
        domainManagementCard: {
            autoRenew: "Auto-renew"
        }
    };
    e.s(["DNS_TYPE_OPTIONS", 0, [{
        label: "A",
        value: "A"
    }, {
        label: "AAAA",
        value: "AAAA"
    }, {
        label: "CNAME",
        value: "CNAME"
    }, {
        label: "MX",
        value: "MX"
    }, {
        label: "TXT",
        value: "TXT"
    }, {
        label: "SRV",
        value: "SRV"
    }, {
        label: "CAA",
        value: "CAA"
    }], "DOMAIN_CONFIGURATION_INSTRUCTIONS", 0, ["Log into your domain registrar's control panel", "Navigate to DNS settings or DNS management", "Add the DNS records with the type, name and value shown above", "Wait for DNS propagation (usually 5-60 minutes)", "Your domain is now connected to your Webild site!"], "DOMAIN_STRINGS", 0, i, "NAMESERVER_FIELDS", 0, [{
        label: "Nameserver 1",
        placeholder: "ns1.example.com"
    }, {
        label: "Nameserver 2",
        placeholder: "ns2.example.com"
    }, {
        label: "Nameserver 3",
        placeholder: "ns3.example.com"
    }, {
        label: "Nameserver 4",
        placeholder: "ns4.example.com"
    }]])
}, 9428, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(72520),
        i = e.i(37727),
        s = e.i(41079);
    e.s(["default", 0, e => {
        let l, o, r, c, d, m = (0, a.c)(19),
            {
                value: u,
                isLoading: h,
                onChange: x,
                onSubmit: g,
                placeholder: f,
                buttonStyleClassName: p,
                onKeyDown: b
            } = e,
            y = void 0 === f ? "yourdomain.com" : f,
            N = void 0 === p ? "button-accent" : p,
            v = !u || h;
        m[0] !== x ? (l = () => x(""), m[0] = x, m[1] = l) : l = m[1], m[2] !== v || m[3] !== l ? (o = {
            icon: i.X,
            onClick: l,
            styleClassName: "button-secondary rounded-extra-sm",
            disabled: v
        }, m[2] = v, m[3] = l, m[4] = o) : o = m[4], m[5] !== N || m[6] !== v || m[7] !== h || m[8] !== g ? (r = {
            icon: n.ArrowRight,
            onClick: g,
            styleClassName: N,
            disabled: v,
            loading: h
        }, m[5] = N, m[6] = v, m[7] = h, m[8] = g, m[9] = r) : r = m[9], m[10] !== o || m[11] !== r ? (c = [o, r], m[10] = o, m[11] = r, m[12] = c) : c = m[12];
        let j = c;
        return m[13] !== j || m[14] !== x || m[15] !== b || m[16] !== y || m[17] !== u ? (d = (0, t.jsx)(s.default, {
            value: u,
            onChange: x,
            onKeyDown: b,
            placeholder: y,
            styleClassName: "card",
            buttons: j
        }), m[13] = j, m[14] = x, m[15] = b, m[16] = y, m[17] = u, m[18] = d) : d = m[18], d
    }])
}, 19044, e => {
    "use strict";
    var t = e.i(71645),
        a = e.i(38703),
        n = e.i(18279),
        i = e.i(46475),
        s = e.i(26288),
        l = e.i(34354),
        o = e.i(11519),
        r = e.i(196),
        c = e.i(46696),
        d = e.i(4392),
        m = e.i(5652);
    e.s(["usePublish", 0, ({
        projectId: e,
        onSuccess: u,
        onClose: h
    }) => {
        let {
            getToken: x
        } = (0, a.useAuth)(), {
            openModal: g
        } = (0, o.useModalStore)(), f = (0, r.useMaintenanceStore)(e => e.showModal), [p, b] = (0, t.useState)(!1), [y, N] = (0, t.useState)(null), v = async t => {
            if ((0, m.isMaintenanceMode)()) return void f();
            if (p) return;
            (0, d.clarityEvent)("publish_clicked");
            let a = s.sessionStorageUtils.getLimits(),
                o = (0, l.checkCreditsForAction)(a, "projectDeployment");
            if (!o.hasEnoughCredits) {
                let e = (0, l.getCreditErrorMessage)("projectDeployment", o.creditsNeeded, o.creditsAvailable);
                c.toast.error(e), N(e), g("insufficient-credits", {
                    action: "projectDeployment",
                    actionName: (0, l.getActionName)("projectDeployment"),
                    creditsNeeded: o.creditsNeeded,
                    creditsAvailable: o.creditsAvailable,
                    shortfall: o.shortfall
                });
                return
            }
            b(!0), N(null);
            try {
                let a = await (0, i.getAuthToken)(x);
                if (!a) throw Error("Authentication token not found");
                await (0, n.deployProjectAPI)(e, a, t), (0, d.clarityEvent)("publish_success"), u && u(), h && h()
            } catch (e) {
                (0, d.clarityEvent)("publish_failed"), N(e instanceof Error ? e.message : "Failed to publish project")
            } finally {
                b(!1)
            }
        };
        return {
            isPublishing: p,
            publishError: y,
            handlePublish: v
        }
    }])
}, 56581, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(75157);
    e.s(["default", 0, e => {
        let i, s, l, o, r, c, d = (0, a.c)(16),
            {
                icon: m,
                textColor: u,
                bgColor: h,
                children: x
            } = e,
            g = void 0 === u ? "text-black" : u,
            f = void 0 === h ? "bg-white" : h;
        return d[0] !== f ? (i = (0, n.cls)("p-2 px-3 card rounded-extra-sm flex items-center gap-2", f), d[0] = f, d[1] = i) : i = d[1], d[2] !== g ? (s = (0, n.cls)("h-(--text-sm) w-auto shrink-0", g), d[2] = g, d[3] = s) : s = d[3], d[4] !== m || d[5] !== s ? (l = (0, t.jsx)(m, {
            className: s
        }), d[4] = m, d[5] = s, d[6] = l) : l = d[6], d[7] !== g ? (o = (0, n.cls)("text-sm", g), d[7] = g, d[8] = o) : o = d[8], d[9] !== x || d[10] !== o ? (r = (0, t.jsx)("div", {
            className: o,
            children: x
        }), d[9] = x, d[10] = o, d[11] = r) : r = d[11], d[12] !== i || d[13] !== l || d[14] !== r ? (c = (0, t.jsxs)("div", {
            className: i,
            children: [l, r]
        }), d[12] = i, d[13] = l, d[14] = r, d[15] = c) : c = d[15], c
    }])
}, 7621, e => {
    "use strict";
    var t = e.i(61653);
    e.s(["CircleAlert", () => t.default])
}, 32240, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(71645),
        i = e.i(69638),
        s = e.i(73884),
        l = e.i(85203),
        o = e.i(21742),
        r = e.i(90116),
        c = e.i(30906),
        d = e.i(7621),
        m = e.i(52571),
        u = e.i(56581),
        h = e.i(9428),
        x = e.i(75157),
        g = e.i(6299);
    let f = e => {
        let n, i, s, l, r, c = (0, a.c)(20),
            {
                inputDomain: f,
                setInputDomain: p,
                isConnecting: b,
                handleConnect: y,
                error: N,
                isDashboard: v,
                needsPublish: j,
                isPublishing: S,
                onPublish: w
            } = e,
            D = void 0 !== j && j,
            C = void 0 !== S && S;
        c[0] !== y || c[1] !== f || c[2] !== b ? (n = e => {
            "Enter" === e.key && f && !b && y()
        }, c[0] = y, c[1] = f, c[2] = b, c[3] = n) : n = c[3];
        let I = n,
            _ = void 0 !== v && v ? "w-full" : "w-full md:w-50 2xl:w-55";
        return c[4] !== _ ? (i = (0, x.cls)("relative flex flex-col mx-auto gap-5 p-5 h-fit button-secondary rounded-sm", _), c[4] = _, c[5] = i) : i = c[5], c[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)("h2", {
            className: "text-lg font-medium text-black leading-tight",
            children: g.DOMAIN_STRINGS.connectDomain.title
        }), c[6] = s) : s = c[6], c[7] !== N || c[8] !== y || c[9] !== I || c[10] !== f || c[11] !== b || c[12] !== C || c[13] !== D || c[14] !== w || c[15] !== p ? (l = D ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(u.default, {
                icon: m.Info,
                children: g.DOMAIN_STRINGS.connectDomain.publishRequired
            }), (0, t.jsx)(o.default, {
                onClick: w,
                isLoading: C,
                loadingText: g.DOMAIN_STRINGS.common.publishing,
                styleClassName: "button-accent",
                className: "w-fit",
                children: g.DOMAIN_STRINGS.connectDomain.publishButton
            })]
        }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(h.default, {
                value: f,
                isLoading: b,
                onChange: p,
                onSubmit: y,
                onKeyDown: I
            }), N && (0, t.jsx)(u.default, {
                icon: d.CircleAlert,
                textColor: "text-red-500",
                children: N
            })]
        }), c[7] = N, c[8] = y, c[9] = I, c[10] = f, c[11] = b, c[12] = C, c[13] = D, c[14] = w, c[15] = p, c[16] = l) : l = c[16], c[17] !== i || c[18] !== l ? (r = (0, t.jsx)("div", {
            className: "flex flex-col gap-5",
            children: (0, t.jsxs)("div", {
                className: i,
                children: [s, l]
            })
        }), c[17] = i, c[18] = l, c[19] = r) : r = c[19], r
    };
    var p = e.i(24032),
        b = e.i(28853);
    let y = (0, e.i(75254).default)("copy", [
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }]
    ]);
    var N = e.i(43531);
    let v = e => {
            let i, s, l, o, r, c, d, m, u = (0, a.c)(17),
                {
                    type: h,
                    name: g,
                    value: f
                } = e,
                [p, b] = (0, n.useState)(null);
            u[0] !== p ? (i = () => {
                if (!p) return;
                let e = setTimeout(() => b(null), 2e3);
                return () => clearTimeout(e)
            }, s = [p], u[0] = p, u[1] = i, u[2] = s) : (i = u[1], s = u[2]), (0, n.useEffect)(i, s), u[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (e, t) => {
                navigator.clipboard.writeText(e), b(t)
            }, u[3] = l) : l = u[3];
            let v = l;
            u[4] !== h ? (o = {
                label: "type",
                value: h
            }, u[4] = h, u[5] = o) : o = u[5], u[6] !== g ? (r = {
                label: "name",
                value: g
            }, u[6] = g, u[7] = r) : r = u[7], u[8] !== f ? (c = {
                label: "value",
                value: f
            }, u[8] = f, u[9] = c) : c = u[9], u[10] !== o || u[11] !== r || u[12] !== c ? (d = [o, r, c], u[10] = o, u[11] = r, u[12] = c, u[13] = d) : d = u[13];
            let j = d;
            return u[14] !== p || u[15] !== j ? (m = (0, t.jsx)("div", {
                className: "grid grid-cols-3 gap-5 p-5 border-b-2 border-white last:border-b-0",
                children: j.map(e => {
                    let a = p === e.label;
                    return (0, t.jsxs)("div", {
                        className: "flex items-center gap-5 rounded",
                        children: [(0, t.jsx)("span", {
                            className: "text-sm text-black",
                            children: e.value
                        }), (0, t.jsxs)("div", {
                            role: "button",
                            tabIndex: 0,
                            "aria-label": `Copy ${e.label}`,
                            className: "relative h-(--text-xs) w-auto cursor-pointer",
                            onClick: () => v(e.value, e.label),
                            onKeyDown: t => {
                                ("Enter" === t.key || " " === t.key) && (t.preventDefault(), v(e.value, e.label))
                            },
                            children: [(0, t.jsx)(y, {
                                className: (0, x.cls)("h-(--text-sm) w-auto text-black absolute inset-0 transition-all duration-300", a ? "opacity-0 blur-sm" : "opacity-100 blur-0"),
                                strokeWidth: 2.5
                            }), (0, t.jsx)(N.Check, {
                                className: (0, x.cls)("h-(--text-sm) w-auto text-black absolute inset-0 transition-all duration-300", a ? "opacity-100 blur-0" : "opacity-0 blur-sm"),
                                strokeWidth: 2.5
                            })]
                        })]
                    }, e.label)
                })
            }), u[14] = p, u[15] = j, u[16] = m) : m = u[16], m
        },
        j = e => {
            let n, i, s, l = (0, a.c)(5),
                {
                    dnsRecords: o
                } = e;
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)("div", {
                className: "grid grid-cols-3 gap-5 p-5 border-b-2 border-white",
                children: g.DOMAIN_STRINGS.dnsRecords.tableHeaders.map(S)
            }), l[0] = n) : n = l[0], l[1] !== o ? (i = o.map(w), l[1] = o, l[2] = i) : i = l[2], l[3] !== i ? (s = (0, t.jsx)("div", {
                className: "button-secondary rounded-extra-sm overflow-x-auto",
                children: (0, t.jsxs)("div", {
                    className: "min-w-max",
                    children: [n, i]
                })
            }), l[3] = i, l[4] = s) : s = l[4], s
        };

    function S(e) {
        return (0, t.jsx)("div", {
            className: "text-sm text-black font-medium",
            children: e
        }, e)
    }

    function w(e) {
        return (0, t.jsx)(v, {
            type: e.type,
            name: e.name,
            value: e.value
        }, `${e.type}-${e.name}-${e.value}`)
    }
    let D = e => {
        let n, i, s, l, r, c, d, h, f, y, N, v, S, w = (0, a.c)(24),
            {
                domainName: D,
                dnsRecords: I,
                isVerifying: _,
                onVerify: A,
                isDashboard: k
            } = e,
            T = void 0 !== k && k ? "w-full" : "w-full md:w-50 2xl:w-55";
        return w[0] !== T ? (n = (0, x.cls)("flex flex-col items-center justify-center gap-5 mx-auto min-h-full h-fit", T), w[0] = T, w[1] = n) : n = w[1], w[2] !== D ? (i = (0, t.jsx)("h3", {
            className: "text-lg text-black font-medium leading-tight",
            children: D
        }), w[2] = D, w[3] = i) : i = w[3], w[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(p.default, {
            statusLabel: g.DOMAIN_STRINGS.configuration.needsConfig,
            statusBgClass: "badge badge-yellow",
            statusTextClass: "text-black"
        }), w[4] = s) : s = w[4], w[5] !== i ? (l = (0, t.jsxs)("div", {
            className: "flex items-center justify-between gap-5",
            children: [i, s]
        }), w[5] = i, w[6] = l) : l = w[6], w[7] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(b.default, {}), w[7] = r) : r = w[7], w[8] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, t.jsx)("p", {
            className: "text-sm text-black font-medium",
            children: g.DOMAIN_STRINGS.configuration.verifyOwnership
        }), w[8] = c) : c = w[8], w[9] !== I ? (d = (0, t.jsxs)("div", {
            className: "card rounded-extra-sm p-5 flex flex-col gap-5",
            children: [c, (0, t.jsx)(j, {
                dnsRecords: I
            })]
        }), w[9] = I, w[10] = d) : d = w[10], w[11] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)("p", {
            className: "text-sm text-black font-medium",
            children: g.DOMAIN_STRINGS.configuration.instructions
        }), w[11] = h) : h = w[11], w[12] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, t.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [h, (0, t.jsx)("ol", {
                className: "list-decimal list-inside text-sm text-black space-y-1",
                children: g.DOMAIN_CONFIGURATION_INSTRUCTIONS.map(C)
            })]
        }), w[12] = f) : f = w[12], w[13] !== _ || w[14] !== A ? (y = (0, t.jsx)(o.default, {
            onClick: A,
            isLoading: _,
            loadingText: g.DOMAIN_STRINGS.configuration.verifying,
            styleClassName: "button-accent",
            className: "w-full",
            children: g.DOMAIN_STRINGS.configuration.verifyButton
        }), w[13] = _, w[14] = A, w[15] = y) : y = w[15], w[16] === Symbol.for("react.memo_cache_sentinel") ? (N = (0, t.jsx)(u.default, {
            icon: m.Info,
            children: g.DOMAIN_STRINGS.configuration.propagationNote
        }), w[16] = N) : N = w[16], w[17] !== y || w[18] !== l || w[19] !== d ? (v = (0, t.jsxs)("div", {
            className: "flex flex-col gap-5 p-5 w-full button-secondary rounded-sm",
            children: [l, r, d, f, y, N]
        }), w[17] = y, w[18] = l, w[19] = d, w[20] = v) : v = w[20], w[21] !== v || w[22] !== n ? (S = (0, t.jsx)("div", {
            className: n,
            children: v
        }), w[21] = v, w[22] = n, w[23] = S) : S = w[23], S
    };

    function C(e) {
        return (0, t.jsx)("li", {
            children: e
        }, e)
    }
    var I = e.i(46696),
        _ = e.i(38703),
        A = e.i(18279),
        k = e.i(2170),
        T = e.i(4392),
        R = e.i(19044);
    e.s(["default", 0, e => {
        let d, m, u, h, p, b, y, N, v, j, S, w = (0, a.c)(41),
            {
                onBack: C,
                onSuccess: M,
                domainName: P,
                project: O,
                isDashboard: G,
                onSetModalBack: E,
                onSetActiveStep: B
            } = e,
            L = void 0 !== G && G,
            [F, V] = (0, n.useState)(!!O ? .vercel_publish_url),
            $ = O ? .id ? ? "";
        w[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => V(!0), w[0] = d) : d = w[0], w[1] !== $ ? (m = {
            projectId: $,
            onSuccess: d
        }, w[1] = $, w[2] = m) : m = w[2];
        let {
            isPublishing: U,
            handlePublish: W
        } = (0, R.usePublish)(m), {
            inputDomain: z,
            setInputDomain: Y,
            isConnecting: q,
            isVerifying: X,
            dnsRecords: K,
            error: H,
            success: Z,
            showValidationError: J,
            handleConnect: Q,
            handleVerify: ee,
            resetConfig: et
        } = ((e, t = "", a) => {
            let {
                getToken: i
            } = (0, _.useAuth)(), [s, l] = (0, n.useState)(t), [o, r] = (0, n.useState)(!1), [c, d] = (0, n.useState)(!1), [m, u] = (0, n.useState)([]), [h, x] = (0, n.useState)(!1), [g, f] = (0, n.useState)(null), [p, b] = (0, n.useState)(!1), [y] = (0, n.useState)(!1), N = async () => {
                if (e ? .id && s) {
                    (0, T.clarityEvent)("domain_connect_started"), r(!0), f(null);
                    try {
                        let t = await i();
                        if (!t) throw Error("Authentication required");
                        let a = await A.addDomainToProjectAPI(e.id, s, t);
                        if (a.dnsRecords ? .length) u(a.dnsRecords), x(!1);
                        else {
                            let a = await A.getProjectDomainsConfigAPI(e.id, t),
                                n = a.data.domains.find(e => e.domain.name === s);
                            if (n ? .dnsRecords ? .length) u(n.dnsRecords);
                            else {
                                let e = a.data.domains.find(e => e.domain.name.includes("vercel.app"));
                                e ? .dnsRecords ? .length && u(e.dnsRecords)
                            }
                            x(!1)
                        }
                    } catch (t) {
                        let e = (0, k.handleDomainError)(t, "Failed to connect domain", f);
                        I.toast.error(e)
                    } finally {
                        r(!1)
                    }
                }
            }, v = async () => {
                if (e ? .id && s) {
                    d(!0), f(null);
                    try {
                        let t = await i();
                        if (!t) throw Error("Authentication required");
                        (await A.verifyDomainDnsAPI(e.id, s, t)).data.verified ? ((0, T.clarityEvent)("domain_verification_completed"), x(!0), b(!0), setTimeout(() => {
                            a ? .()
                        }, 2e3)) : I.toast.error("DNS records not detected yet. Please wait and try again.")
                    } catch (t) {
                        (0, T.clarityEvent)("domain_verification_failed");
                        let e = (0, k.handleDomainError)(t, "Failed to verify domain", f);
                        I.toast.error(e)
                    } finally {
                        d(!1)
                    }
                }
            };
            return {
                inputDomain: s,
                setInputDomain: l,
                isConnecting: o,
                isVerifying: c,
                dnsRecords: m,
                isConfigured: h,
                error: g,
                success: p,
                showValidationError: y,
                handleConnect: N,
                handleVerify: v,
                resetConfig: (0, n.useCallback)(() => {
                    u([]), x(!1)
                }, [])
            }
        })(O, void 0 === P ? "" : P, M), ea = K.length > 0, en = ea ? "config" : Z ? "success" : J ? "error" : "main";
        w[3] !== ea || w[4] !== B ? (u = () => {
            B && B(+!!ea)
        }, h = [ea, B], w[3] = ea, w[4] = B, w[5] = u, w[6] = h) : (u = w[5], h = w[6]), (0, n.useEffect)(u, h), w[7] !== ea || w[8] !== E || w[9] !== et ? (p = () => {
            E && E(ea ? et : null)
        }, b = [ea, E, et], w[7] = ea, w[8] = E, w[9] = et, w[10] = p, w[11] = b) : (p = w[10], b = w[11]), (0, n.useEffect)(p, b), w[12] !== L || w[13] !== C ? (y = !L && (0, t.jsx)(r.default, {
            onBack: C,
            baseLabel: g.DOMAIN_STRINGS.breadcrumbs.domains,
            currentLabel: g.DOMAIN_STRINGS.connectDomain.currentLabel
        }), w[12] = L, w[13] = C, w[14] = y) : y = w[14];
        let ei = !L && "md:w-auto";
        return w[15] !== ei ? (N = (0, x.cls)("w-full", ei), w[15] = ei, w[16] = N) : N = w[16], w[17] !== K || w[18] !== H || w[19] !== Q || w[20] !== W || w[21] !== ee || w[22] !== ea || w[23] !== z || w[24] !== q || w[25] !== L || w[26] !== F || w[27] !== U || w[28] !== X || w[29] !== C || w[30] !== Y || w[31] !== J || w[32] !== Z ? (v = Z ? (0, t.jsx)(c.default, {
            icon: i.CheckCircle,
            title: g.DOMAIN_STRINGS.connectDomain.successTitle,
            description: `${z} is now connected to your project.`,
            children: (0, t.jsx)(o.default, {
                onClick: C,
                styleClassName: "card",
                children: g.DOMAIN_STRINGS.dashboardDomains.goBack
            })
        }) : J ? (0, t.jsx)(c.default, {
            icon: s.XCircle,
            title: g.DOMAIN_STRINGS.connectDomain.verifyFailed,
            description: g.DOMAIN_STRINGS.connectExisting.verifyFailedDesc,
            children: (0, t.jsxs)("div", {
                className: "flex gap-3",
                children: [(0, t.jsx)(o.default, {
                    onClick: C,
                    styleClassName: "card",
                    children: g.DOMAIN_STRINGS.statusViews.tryAgain
                }), (0, t.jsx)(o.default, {
                    onClick: C,
                    styleClassName: "card",
                    children: g.DOMAIN_STRINGS.dashboardDomains.goBack
                })]
            })
        }) : ea ? (0, t.jsx)(D, {
            domainName: z,
            dnsRecords: K,
            isVerifying: X,
            onVerify: ee,
            isDashboard: L
        }) : (0, t.jsx)(f, {
            inputDomain: z,
            setInputDomain: Y,
            isConnecting: q,
            handleConnect: Q,
            error: H,
            isDashboard: L,
            needsPublish: !F,
            isPublishing: U,
            onPublish: () => W()
        }), w[17] = K, w[18] = H, w[19] = Q, w[20] = W, w[21] = ee, w[22] = ea, w[23] = z, w[24] = q, w[25] = L, w[26] = F, w[27] = U, w[28] = X, w[29] = C, w[30] = Y, w[31] = J, w[32] = Z, w[33] = v) : v = w[33], w[34] !== en || w[35] !== N || w[36] !== v ? (j = (0, t.jsx)(l.default, {
            className: N,
            children: v
        }, en), w[34] = en, w[35] = N, w[36] = v, w[37] = j) : j = w[37], w[38] !== y || w[39] !== j ? (S = (0, t.jsxs)(t.Fragment, {
            children: [y, j]
        }), w[38] = y, w[39] = j, w[40] = S) : S = w[40], S
    }], 32240)
}, 22315, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(28853),
        i = e.i(75157);
    let s = "bg-black/5",
        l = () => {
            let e, n, l = (0, a.c)(2);
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [(0, t.jsx)("div", {
                    className: (0, i.cls)(s, "rounded w-20"),
                    style: {
                        height: "calc(var(--text-lg) * 1.25)"
                    }
                }), (0, t.jsx)("div", {
                    className: (0, i.cls)(s, "rounded w-20"),
                    style: {
                        height: "calc(var(--text-sm) * 1.25)"
                    }
                })]
            }), l[0] = e) : e = l[0], l[1] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsxs)("div", {
                className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                children: [e, (0, t.jsxs)("div", {
                    className: "flex w-full gap-3 md:w-auto",
                    children: [(0, t.jsx)("div", {
                        className: (0, i.cls)(s, "h-10 w-full rounded md:w-32")
                    }), (0, t.jsx)("div", {
                        className: (0, i.cls)(s, "h-10 w-full rounded md:w-28")
                    })]
                })]
            }), l[1] = n) : n = l[1], n
        },
        o = () => {
            let e, n = (0, a.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsxs)("div", {
                className: "shrink-0 flex flex-col gap-2 w-full",
                children: [(0, t.jsx)("div", {
                    className: (0, i.cls)(s, "rounded w-24"),
                    style: {
                        height: "calc(var(--text-sm) * 1.5)"
                    }
                }), (0, t.jsx)("div", {
                    className: (0, i.cls)(s, "rounded-extra-sm w-full", "h-[calc(var(--spacing-5)*2+var(--height-10)+var(--spacing-5)+var(--height-10)+var(--text-sm)*1.5+var(--text-xs)*1.5)]", "md:h-[calc(var(--spacing-5)*2+var(--height-10)+var(--text-sm)*1.5+var(--text-xs)*1.5)]")
                })]
            }), n[0] = e) : e = n[0], e
        },
        r = () => {
            let e, n = (0, a.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
                className: (0, i.cls)(s, "rounded w-full"),
                style: {
                    height: "calc(var(--vw-1_25)*2 + var(--height-10))"
                }
            }), n[0] = e) : e = n[0], e
        },
        c = () => {
            let e, n = (0, a.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
                className: (0, i.cls)(s, "rounded w-full"),
                style: {
                    height: "calc(var(--spacing-4)*2 + var(--text-sm)*1.5 + var(--text-xs)*1.5)"
                }
            }), n[0] = e) : e = n[0], e
        },
        d = () => {
            let e, n = (0, a.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
                className: (0, i.cls)(s, "rounded w-full"),
                style: {
                    height: "calc(var(--spacing-5)*2 + var(--text-sm)*1.5 + var(--spacing-3)*2 + var(--spacing-4)*2 + var(--text-sm)*1.5*4 + var(--spacing-2)*3 + var(--height-10))"
                }
            }), n[0] = e) : e = n[0], e
        },
        m = () => {
            let e, n = (0, a.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
                className: (0, i.cls)(s, "rounded w-full"),
                style: {
                    height: "calc(var(--spacing-5)*2 + var(--spacing-5)*4 + var(--text-sm)*1.5 + var(--text-xs)*2*1.5 + var(--height-10)*2 + var(--spacing-5)*2)"
                }
            }), n[0] = e) : e = n[0], e
        };
    e.s(["default", 0, e => {
        let u, h, x, g = (0, a.c)(14),
            {
                variant: f
            } = e,
            p = void 0 === f ? "global" : f;
        if ("dashboard" === p) {
            let e;
            return g[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsxs)("div", {
                className: "flex flex-col gap-5 p-5 w-full animate-pulse pointer-events-none",
                children: [(0, t.jsx)(o, {}), (0, t.jsx)(n.default, {}), (0, t.jsx)(o, {})]
            }), g[0] = e) : e = g[0], e
        }
        if ("management" === p) {
            let e;
            return g[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsxs)("div", {
                className: "relative flex flex-col gap-5 mx-auto p-5 w-full md:w-50 2xl:w-55 h-fit button-secondary rounded animate-pulse pointer-events-none",
                children: [(0, t.jsx)("div", {
                    className: (0, i.cls)(s, "rounded w-40"),
                    style: {
                        height: "calc(var(--text-sm) * 1.5)"
                    }
                }), (0, t.jsx)(n.default, {}), (0, t.jsx)("div", {
                    className: (0, i.cls)(s, "rounded w-28"),
                    style: {
                        height: "calc(var(--text-sm) * 1.5)"
                    }
                }), (0, t.jsx)(c, {}), (0, t.jsx)(c, {})]
            }), g[1] = e) : e = g[1], e
        }
        if ("overview" === p || "overview-dashboard" === p) {
            let e, a, l, o, r, c, u = "overview-dashboard" === p ? "w-full" : "w-full md:w-50 2xl:w-55";
            return g[2] !== u ? (e = (0, i.cls)("flex flex-col gap-5 animate-pulse pointer-events-none", u), g[2] = u, g[3] = e) : e = g[3], g[4] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)("div", {
                className: (0, i.cls)(s, "rounded w-28"),
                style: {
                    height: "calc(var(--text-base) * 1.25)"
                }
            }), g[4] = a) : a = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsxs)("div", {
                className: "flex flex-col gap-5",
                children: [a, (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 gap-5 md:grid-cols-2",
                    children: [(0, t.jsx)(d, {}), (0, t.jsx)(d, {})]
                })]
            }), o = (0, t.jsx)(n.default, {}), r = (0, t.jsx)(m, {}), g[5] = l, g[6] = o, g[7] = r) : (l = g[5], o = g[6], r = g[7]), g[8] !== e ? (c = (0, t.jsxs)("div", {
                className: e,
                children: [l, o, r]
            }), g[8] = e, g[9] = c) : c = g[9], c
        }
        return g[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)(l, {}), h = (0, t.jsx)(n.default, {}), g[10] = u, g[11] = h) : (u = g[10], h = g[11]), g[12] !== p ? (x = (0, t.jsxs)("div", {
            className: "relative flex flex-col gap-5 mx-auto p-5 w-full md:w-50 2xl:w-55 h-fit button-secondary rounded animate-pulse pointer-events-none",
            children: [u, h, "project" === p ? (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(o, {}), (0, t.jsx)(n.default, {}), (0, t.jsx)(o, {})]
            }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(o, {}), (0, t.jsx)(n.default, {}), (0, t.jsx)(r, {})]
            })]
        }), g[12] = p, g[13] = x) : x = g[13], x
    }])
}, 88024, e => {
    "use strict";
    let t = (0, e.i(75254).default)("app-window-mac", [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }],
        ["path", {
            d: "M6 8h.01",
            key: "x9i8wu"
        }],
        ["path", {
            d: "M10 8h.01",
            key: "1r9ogq"
        }],
        ["path", {
            d: "M14 8h.01",
            key: "1primd"
        }]
    ]);
    e.s(["AppWindowMac", 0, t], 88024)
}, 32583, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(31278),
        i = e.i(69638),
        s = e.i(63209),
        l = e.i(21742),
        o = e.i(30906),
        r = e.i(6299);
    let c = {
        processing: {
            icon: n.Loader2,
            iconInnerClassName: "animate-spin",
            title: r.DOMAIN_STRINGS.statusViews.processing
        },
        success: {
            icon: i.CheckCircle,
            iconInnerClassName: void 0,
            title: r.DOMAIN_STRINGS.statusViews.success
        },
        error: {
            icon: s.AlertCircle,
            iconInnerClassName: void 0,
            title: r.DOMAIN_STRINGS.statusViews.error
        }
    };

    function d(e) {
        return (0, t.jsx)(l.default, {
            onClick: e.onClick,
            styleClassName: e.styleClassName ? ? "button-secondary",
            children: e.text
        }, e.text)
    }
    e.s(["default", 0, e => {
        let n, i, s, m = (0, a.c)(13),
            {
                status: u,
                message: h,
                onGoBack: x,
                additionalButtons: g
            } = e;
        m[0] !== g ? (n = void 0 === g ? [] : g, m[0] = g, m[1] = n) : n = m[1];
        let f = n,
            p = c[u],
            b = "processing" !== u && x;
        return m[2] !== f || m[3] !== x || m[4] !== b || m[5] !== u ? (i = b && (0, t.jsxs)("div", {
            className: "flex gap-3",
            children: [(0, t.jsx)(l.default, {
                onClick: x,
                styleClassName: "button-secondary",
                children: r.DOMAIN_STRINGS.dashboardDomains.goBack
            }), f.map(d)]
        }), m[2] = f, m[3] = x, m[4] = b, m[5] = u, m[6] = i) : i = m[6], m[7] !== p.icon || m[8] !== p.iconInnerClassName || m[9] !== p.title || m[10] !== h || m[11] !== i ? (s = (0, t.jsx)("div", {
            className: "flex items-center justify-center mb-5 w-full h-full",
            children: (0, t.jsx)(o.default, {
                icon: p.icon,
                iconInnerClassName: p.iconInnerClassName,
                title: p.title,
                description: h,
                removeBackground: !0,
                children: i
            })
        }), m[7] = p.icon, m[8] = p.iconInnerClassName, m[9] = p.title, m[10] = h, m[11] = i, m[12] = s) : s = m[12], s
    }])
}, 91844, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(57688),
        i = e.i(21742),
        s = e.i(6299);
    e.s(["default", 0, e => {
        let l, o, r, c, d = (0, a.c)(13),
            {
                onBuyClick: m,
                message: u,
                buttonText: h,
                imageSrc: x,
                imageClassName: g
            } = e,
            f = void 0 === u ? s.DOMAIN_STRINGS.emptyState.noDomainsYet : u,
            p = void 0 === h ? s.DOMAIN_STRINGS.emptyState.getCustomDomain : h,
            b = void 0 === g ? "h-15 w-auto" : g;
        return d[0] !== b || d[1] !== x || d[2] !== f ? (l = x && (0, t.jsx)(n.default, {
            src: x,
            width: 500,
            height: 500,
            className: b,
            alt: f
        }), d[0] = b, d[1] = x, d[2] = f, d[3] = l) : l = d[3], d[4] !== f ? (o = (0, t.jsx)("p", {
            className: "text-sm",
            children: f
        }), d[4] = f, d[5] = o) : o = d[5], d[6] !== p || d[7] !== m ? (r = (0, t.jsx)(i.default, {
            onClick: m,
            styleClassName: "button-accent",
            className: "w-fit px-10",
            children: p
        }), d[6] = p, d[7] = m, d[8] = r) : r = d[8], d[9] !== l || d[10] !== o || d[11] !== r ? (c = (0, t.jsxs)("div", {
            className: "p-5 text-center text-black flex flex-col gap-2 items-center",
            children: [l, o, r]
        }), d[9] = l, d[10] = o, d[11] = r, d[12] = c) : c = d[12], c
    }])
}, 14141, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(7621),
        i = e.i(85203),
        s = e.i(90116),
        l = e.i(28853),
        o = e.i(56581),
        r = e.i(22315),
        c = e.i(91844),
        d = e.i(48256),
        m = e.i(38773),
        u = e.i(48438),
        h = e.i(6299);
    let x = e => {
        let n, i, s, l, o, r, c = (0, a.c)(21),
            {
                domain: x,
                isUpdating: g,
                onAutoRenewalToggle: f
            } = e,
            p = "active" === x.state,
            b = "registered" === x.state,
            y = p ? "badge badge-green" : b ? "badge badge-blue" : "badge badge-yellow",
            N = p ? h.DOMAIN_STRINGS.domainManagement.active : x.state;
        c[0] !== y || c[1] !== N ? (n = {
            bg: y,
            text: "text-black",
            label: N
        }, c[0] = y, c[1] = N, c[2] = n) : n = c[2];
        let v = n;
        c[3] !== x.name || c[4] !== f ? (i = e => {
            f(x.name, e)
        }, c[3] = x.name, c[4] = f, c[5] = i) : i = c[5];
        let j = i,
            S = x.name,
            w = v.label,
            D = v.bg,
            C = v.text;
        c[6] !== x.expires_at ? (s = new Date(x.expires_at).toLocaleDateString(), c[6] = x.expires_at, c[7] = s) : s = c[7];
        let I = `${h.DOMAIN_STRINGS.domainManagement.expiresPrefix}${s}`;
        return c[8] !== x.name || c[9] !== v.bg || c[10] !== v.label || c[11] !== v.text || c[12] !== I ? (l = (0, t.jsx)(u.default, {
            icon: d.Globe,
            domainName: S,
            statusLabel: w,
            statusBgClass: D,
            statusTextClass: C,
            subText: I
        }), c[8] = x.name, c[9] = v.bg, c[10] = v.label, c[11] = v.text, c[12] = I, c[13] = l) : l = c[13], c[14] !== x.auto_renew || c[15] !== j || c[16] !== g ? (o = (0, t.jsx)(m.default, {
            checked: x.auto_renew,
            onChange: j,
            disabled: g,
            label: h.DOMAIN_STRINGS.domainManagementCard.autoRenew,
            className: "w-fit"
        }), c[14] = x.auto_renew, c[15] = j, c[16] = g, c[17] = o) : o = c[17], c[18] !== l || c[19] !== o ? (r = (0, t.jsxs)("div", {
            className: "flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between",
            children: [l, o]
        }), c[18] = l, c[19] = o, c[20] = r) : r = c[20], r
    };
    var g = e.i(71645),
        f = e.i(46696),
        p = e.i(18279),
        b = e.i(2170),
        y = e.i(20047),
        N = e.i(4392),
        v = e.i(75157);
    e.s(["default", 0, e => {
        let d, m, u, j, S = (0, a.c)(18),
            {
                onBack: w,
                onBuyDomain: D,
                isDashboard: C
            } = e,
            I = void 0 !== C && C,
            {
                domains: _,
                isLoading: A,
                error: k,
                updatingAutoRenewal: T,
                handleAutoRenewalToggle: R
            } = (() => {
                let {
                    getAuthenticatedToken: e
                } = (0, y.useApi)(), [t, a] = (0, g.useState)([]), [n, i] = (0, g.useState)(!0), [s, l] = (0, g.useState)(null), [o, r] = (0, g.useState)({});
                return (0, g.useEffect)(() => {
                    (async () => {
                        try {
                            let t = await e();
                            if (!t) throw Error("Authentication required");
                            let n = await (0, p.getUserDomainsAPI)(t);
                            a(n.data)
                        } catch (t) {
                            let e = (0, b.handleDomainError)(t, "Failed to fetch domains", l);
                            f.toast.error(e)
                        } finally {
                            i(!1)
                        }
                    })()
                }, [e]), {
                    domains: t,
                    isLoading: n,
                    error: s,
                    updatingAutoRenewal: o,
                    handleAutoRenewalToggle: async (t, n) => {
                        r(e => ({ ...e,
                            [t]: !0
                        })), l(null);
                        try {
                            let i = await e();
                            if (!i) throw Error("No authentication token");
                            await (0, p.updateDomainAutoRenewalAPI)(t, n, i), (0, N.clarityEvent)("domain_auto_renewal_toggled"), a(e => e.map(e => e.name === t ? { ...e,
                                auto_renew: n
                            } : e))
                        } catch (t) {
                            let e = (0, b.handleDomainError)(t, `Failed to ${n?"enable":"disable"} auto renewal`, l);
                            f.toast.error(e)
                        } finally {
                            r(e => ({ ...e,
                                [t]: !1
                            }))
                        }
                    }
                }
            })(),
            M = A ? "loading" : k ? "error" : 0 === _.length ? "empty" : "domains";
        return S[0] !== I || S[1] !== w ? (d = !I && (0, t.jsx)(s.default, {
            onBack: w,
            baseLabel: h.DOMAIN_STRINGS.breadcrumbs.domains,
            currentLabel: h.DOMAIN_STRINGS.breadcrumbs.management
        }), S[0] = I, S[1] = w, S[2] = d) : d = S[2], S[3] !== _ || S[4] !== k || S[5] !== R || S[6] !== I || S[7] !== A || S[8] !== w || S[9] !== D || S[10] !== T ? (m = A ? (0, t.jsx)(r.default, {
            variant: "management"
        }) : (0, t.jsxs)("div", {
            className: (0, v.cls)("relative flex flex-col mx-auto gap-5 p-5 h-fit button-secondary rounded-sm", I ? "w-full" : "w-full md:w-50 2xl:w-55"),
            children: [(0, t.jsx)("h2", {
                className: "text-lg font-medium text-black leading-tight",
                children: h.DOMAIN_STRINGS.domainManagement.title
            }), k ? (0, t.jsxs)(o.default, {
                icon: n.CircleAlert,
                textColor: "text-red-500",
                children: [h.DOMAIN_STRINGS.errors.errorPrefix, " ", k]
            }) : 0 === _.length ? (0, t.jsx)("div", {
                className: "relative card rounded-sm",
                children: (0, t.jsx)(c.default, {
                    onBuyClick: D || w
                })
            }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(l.default, {}), (0, t.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [(0, t.jsx)("h3", {
                        className: "text-sm font-medium text-black",
                        children: h.DOMAIN_STRINGS.domainManagement.yourDomains
                    }), (0, t.jsx)("div", {
                        className: "card rounded-extra-sm divide-y-2 divide-grey",
                        children: _.map(e => (0, t.jsx)(x, {
                            domain: e,
                            isUpdating: T[e.name] || !1,
                            onAutoRenewalToggle: R
                        }, e.name))
                    })]
                })]
            })]
        }), S[3] = _, S[4] = k, S[5] = R, S[6] = I, S[7] = A, S[8] = w, S[9] = D, S[10] = T, S[11] = m) : m = S[11], S[12] !== M || S[13] !== m ? (u = (0, t.jsx)(i.default, {
            animationType: "fade",
            className: "w-full",
            children: m
        }, M), S[12] = M, S[13] = m, S[14] = u) : u = S[14], S[15] !== d || S[16] !== u ? (j = (0, t.jsxs)(t.Fragment, {
            children: [d, u]
        }), S[15] = d, S[16] = u, S[17] = j) : j = S[17], j
    }], 14141)
}, 9613, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(75157),
        i = e.i(19599);
    e.s(["default", 0, e => {
        let s, l, o, r = (0, a.c)(6),
            {
                className: c,
                withBox: d
            } = e,
            m = (void 0 === d || d) && "card rounded-sm";
        return r[0] !== c || r[1] !== m ? (s = (0, n.cls)("relative flex flex-col items-center justify-center gap-3 mx-auto p-5 py-20 w-full md:w-50 2xl:w-55 h-fit rounded", m, c), r[0] = c, r[1] = m, r[2] = s) : s = r[2], r[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)(i.default, {
            className: "w-40 md:w-15"
        }), r[3] = l) : l = r[3], r[4] !== s ? (o = (0, t.jsx)("div", {
            className: s,
            children: l
        }), r[4] = s, r[5] = o) : o = r[5], o
    }])
}, 67469, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(21742),
        i = e.i(6299);

    function s(e) {
        return (0, t.jsx)(n.default, {
            onClick: e.onClick,
            styleClassName: e.styleClassName,
            className: "px-6",
            children: e.label
        }, e.label)
    }
    e.s(["default", 0, e => {
        let n, l, o, r, c, d, m = (0, a.c)(14),
            {
                title: u,
                description: h,
                buttons: x
            } = e,
            g = void 0 === u ? i.DOMAIN_STRINGS.breadcrumbs.domains : u;
        return m[0] !== g ? (n = (0, t.jsx)("h2", {
            className: "text-lg text-black font-medium leading-tight",
            children: g
        }), m[0] = g, m[1] = n) : n = m[1], m[2] !== h ? (l = (0, t.jsx)("p", {
            className: "text-sm text-black/75 truncate leading-tight",
            children: h
        }), m[2] = h, m[3] = l) : l = m[3], m[4] !== n || m[5] !== l ? (o = (0, t.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [n, l]
        }), m[4] = n, m[5] = l, m[6] = o) : o = m[6], m[7] !== x ? (r = x.map(s), m[7] = x, m[8] = r) : r = m[8], m[9] !== r ? (c = (0, t.jsx)("div", {
            className: "flex gap-3",
            children: r
        }), m[9] = r, m[10] = c) : c = m[10], m[11] !== o || m[12] !== c ? (d = (0, t.jsxs)("div", {
            className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
            children: [o, c]
        }), m[11] = o, m[12] = c, m[13] = d) : d = m[13], d
    }])
}, 99887, 58977, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(932),
        n = e.i(71645),
        i = e.i(85203),
        s = e.i(91844),
        l = e.i(48256),
        o = e.i(64659),
        r = e.i(75254);
    let c = (0, r.default)("unplug", [
        ["path", {
            d: "m19 5 3-3",
            key: "yk6iyv"
        }],
        ["path", {
            d: "m2 22 3-3",
            key: "19mgm9"
        }],
        ["path", {
            d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
            key: "goz73y"
        }],
        ["path", {
            d: "M7.5 13.5 10 11",
            key: "7xgeeb"
        }],
        ["path", {
            d: "M10.5 16.5 13 14",
            key: "10btkg"
        }],
        ["path", {
            d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",
            key: "1snsnr"
        }]
    ]);
    e.s(["Unplug", 0, c], 58977);
    let d = (0, r.default)("circle-dot", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }]
    ]);
    var m = e.i(20884);
    let u = (0, r.default)("link-2-off", [
        ["path", {
            d: "M9 17H7A5 5 0 0 1 7 7",
            key: "10o201"
        }],
        ["path", {
            d: "M15 7h2a5 5 0 0 1 4 8",
            key: "1d3206"
        }],
        ["line", {
            x1: "8",
            x2: "12",
            y1: "12",
            y2: "12",
            key: "rvw6j4"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22",
            key: "a6p6uj"
        }]
    ]);
    var h = e.i(21742),
        x = e.i(41101),
        g = e.i(20002),
        f = e.i(22309),
        p = e.i(48438),
        b = e.i(4392),
        y = e.i(6299);
    let N = e => {
        let i, s, r, N, v, j, S, w, D, C = (0, a.c)(43),
            {
                domain: I,
                onConnectDomain: _,
                onDisconnectDomain: A,
                onRedirectDomain: k,
                showRegistrationStatus: T,
                projectId: R,
                isDropdownOpen: M,
                onDropdownOpenChange: P
            } = e,
            O = void 0 !== T && T,
            G = void 0 !== M && M;
        C[0] !== I || C[1] !== _ || C[2] !== A || C[3] !== k || C[4] !== R || C[5] !== O ? (i = {
            domain: I,
            onConnectDomain: _,
            onDisconnectDomain: A,
            onRedirectDomain: k,
            showRegistrationStatus: O,
            projectId: R
        }, C[0] = I, C[1] = _, C[2] = A, C[3] = k, C[4] = R, C[5] = O, C[6] = i) : i = C[6];
        let {
            isProcessing: E,
            status: B,
            isConnected: L,
            isConnectedToCurrentProject: F,
            subText: V,
            getDomainActionStatus: $,
            handleDomainAction: U
        } = (({
            domain: e,
            onConnectDomain: t,
            onDisconnectDomain: a,
            onRedirectDomain: i,
            showRegistrationStatus: s = !1,
            projectId: l
        }) => {
            let [o, r] = (0, n.useState)(!1), c = (0, n.useMemo)(() => {
                var t;
                return s ? "registered" === (t = e.state) ? {
                    bg: "badge badge-green",
                    text: "text-black",
                    label: "Active"
                } : {
                    bg: "badge badge-yellow",
                    text: "text-black",
                    label: t || "Unknown"
                } : e.isConnectedToCurrentProject ? {
                    bg: "badge badge-green",
                    text: "text-black",
                    label: "Connected"
                } : e.connectedProjectId ? {
                    bg: "badge badge-yellow",
                    text: "text-black",
                    label: `Connected to: ${e.connectedProjectName||"Another project"}`
                } : {
                    bg: "badge badge-red",
                    text: "text-black",
                    label: "Not Connected"
                }
            }, [s, e]), d = !!(e.projectId && e.projectId === l), m = !!e.projectId, u = (0, n.useMemo)(() => s && m ? `Redirected to ${e.connectedProjectName||"another project"}` : `Expires: ${new Date(e.expires_on).toLocaleDateString()}`, [s, m, e.connectedProjectName, e.expires_on]), h = (0, n.useCallback)(() => d ? "Primary" : m ? "Redirecting Domain" : "Disconnected", [m, d]);
            return {
                isProcessing: o,
                status: c,
                isConnected: m,
                isConnectedToCurrentProject: d,
                subText: u,
                getDomainActionStatus: h,
                handleDomainAction: (0, n.useCallback)(async n => {
                    if (l) {
                        r(!0);
                        try {
                            "primary" === n ? ((0, b.clarityEvent)("domain_set_as_primary"), await t(e.name)) : "redirected" === n ? e.connectedProjectId && ((0, b.clarityEvent)("domain_redirected"), await i ? .(e.name, e.connectedProjectId)) : "disconnected" === n && e.connectedProjectId && ((0, b.clarityEvent)("domain_disconnected"), await a ? .(e.name, e.connectedProjectId))
                        } finally {
                            r(!1)
                        }
                    }
                }, [l, e.name, e.connectedProjectId, t, i, a])
            }
        })(i), [W, z] = (0, n.useState)(!1), [Y, q] = (0, n.useState)(!1);
        C[7] !== I.name || C[8] !== _ ? (s = () => {
            z(!0), _(I.name)
        }, C[7] = I.name, C[8] = _, C[9] = s) : s = C[9];
        let X = s;
        C[10] !== I.connectedProjectId || C[11] !== I.name || C[12] !== A ? (r = () => {
            A ? .(I.name, I.connectedProjectId), q(!1)
        }, C[10] = I.connectedProjectId, C[11] = I.name, C[12] = A, C[13] = r) : r = C[13];
        let K = r;
        C[14] === Symbol.for("react.memo_cache_sentinel") ? (N = () => {
            q(!1)
        }, C[14] = N) : N = C[14];
        let H = N;
        C[15] !== I.name || C[16] !== B.bg || C[17] !== B.label || C[18] !== B.text || C[19] !== V ? (v = (0, t.jsx)(p.default, {
            icon: l.Globe,
            domainName: I.name,
            statusLabel: B.label,
            statusBgClass: B.bg,
            statusTextClass: B.text,
            subText: V
        }), C[15] = I.name, C[16] = B.bg, C[17] = B.label, C[18] = B.text, C[19] = V, C[20] = v) : v = C[20], C[21] !== I.connectedProjectName || C[22] !== $ || C[23] !== X || C[24] !== U || C[25] !== L || C[26] !== F || C[27] !== W || C[28] !== G || C[29] !== E || C[30] !== P || C[31] !== O ? (j = (0, t.jsx)("div", {
            className: "flex items-center gap-3",
            children: O ? L ? (0, t.jsxs)(h.default, {
                onClick: () => q(!0),
                className: "w-full md:w-auto",
                styleClassName: "button-secondary",
                children: [y.DOMAIN_STRINGS.projectDomainsSection.disconnect, I.connectedProjectName && ` from ${I.connectedProjectName}`]
            }) : (0, t.jsx)(h.default, {
                onClick: X,
                className: "w-full md:w-auto",
                styleClassName: "button-primary",
                isLoading: W,
                loadingText: y.DOMAIN_STRINGS.domainItem.connecting,
                children: y.DOMAIN_STRINGS.domainItem.connect
            }) : (0, t.jsxs)(g.default, {
                trigger: (0, t.jsxs)(h.default, {
                    className: "flex items-center justify-center gap-1 w-full md:w-auto",
                    disabled: E,
                    children: [E ? y.DOMAIN_STRINGS.domainItem.processing : $(), (0, t.jsx)(o.ChevronDown, {
                        className: "h-[1em] w-auto",
                        strokeWidth: 2.5
                    })]
                }),
                align: "right",
                position: "top",
                className: "w-full md:w-auto",
                menuClassName: "w-1/2 md:w-full",
                isOpen: G,
                onOpenChange: P,
                children: [(0, t.jsx)(f.default, {
                    icon: d,
                    label: y.DOMAIN_STRINGS.domainItem.primary,
                    onClick: () => U("primary"),
                    isSelected: F
                }), (0, t.jsx)(f.default, {
                    icon: m.CornerDownRight,
                    label: y.DOMAIN_STRINGS.domainItem.redirect,
                    onClick: () => U("redirected"),
                    isSelected: L && !F
                }), (0, t.jsx)(f.default, {
                    icon: u,
                    label: y.DOMAIN_STRINGS.projectDomainsSection.disconnect,
                    onClick: () => U("disconnected")
                })]
            })
        }), C[21] = I.connectedProjectName, C[22] = $, C[23] = X, C[24] = U, C[25] = L, C[26] = F, C[27] = W, C[28] = G, C[29] = E, C[30] = P, C[31] = O, C[32] = j) : j = C[32], C[33] !== v || C[34] !== j ? (S = (0, t.jsxs)("div", {
            className: "flex flex-col md:flex-row md:items-center md:justify-between gap-5 p-5",
            children: [v, j]
        }), C[33] = v, C[34] = j, C[35] = S) : S = C[35];
        let Z = `${y.DOMAIN_STRINGS.projectDomainsSection.disconnectTitle} ${I.name}?`;
        return C[36] !== K || C[37] !== Y || C[38] !== Z ? (w = (0, t.jsx)(x.default, {
            isVisible: Y,
            zIndex: "z-100",
            onCancel: H,
            onConfirm: K,
            title: Z,
            description: y.DOMAIN_STRINGS.projectDomainsSection.disconnectConfirm,
            icon: c,
            cancelText: y.DOMAIN_STRINGS.common.cancel,
            confirmText: y.DOMAIN_STRINGS.projectDomainsSection.disconnectButton,
            className: "w-80 md:w-25"
        }), C[36] = K, C[37] = Y, C[38] = Z, C[39] = w) : w = C[39], C[40] !== w || C[41] !== S ? (D = (0, t.jsxs)(t.Fragment, {
            children: [S, w]
        }), C[40] = w, C[41] = S, C[42] = D) : D = C[42], D
    };
    e.s(["default", 0, e => {
        let l, o, r, c = (0, a.c)(13),
            {
                userDomainsWithUsage: d,
                onBuyClick: m,
                onConnectDomain: u,
                onDisconnectDomain: h,
                onRedirectDomain: x,
                projectId: g,
                showRegistrationStatus: f
            } = e,
            [p, b] = (0, n.useState)(null);
        c[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("h3", {
            className: "text-sm font-medium text-black",
            children: y.DOMAIN_STRINGS.sections.myDomains
        }), c[0] = l) : l = c[0];
        let v = 0 === d.length ? "empty" : "domains";
        return c[1] !== m || c[2] !== u || c[3] !== h || c[4] !== x || c[5] !== p || c[6] !== g || c[7] !== f || c[8] !== d ? (o = 0 === d.length ? (0, t.jsx)(s.default, {
            onBuyClick: m,
            imageSrc: "/images/no-domain.svg"
        }) : (0, t.jsx)("div", {
            className: "divide-y-2 divide-grey",
            children: d.map(e => (0, t.jsx)(N, {
                domain: e,
                onConnectDomain: u,
                onDisconnectDomain: h,
                onRedirectDomain: x,
                projectId: g,
                showRegistrationStatus: f,
                isDropdownOpen: p === e.name,
                onDropdownOpenChange: t => b(t ? e.name : null)
            }, e.name))
        }), c[1] = m, c[2] = u, c[3] = h, c[4] = x, c[5] = p, c[6] = g, c[7] = f, c[8] = d, c[9] = o) : o = c[9], c[10] !== v || c[11] !== o ? (r = (0, t.jsxs)("div", {
            className: "shrink-0 flex flex-col gap-2",
            children: [l, (0, t.jsx)("div", {
                className: "card rounded-extra-sm",
                children: (0, t.jsx)(i.default, {
                    animationType: "fade",
                    children: o
                }, v)
            })]
        }), c[10] = v, c[11] = o, c[12] = r) : r = c[12], r
    }], 99887)
}]);