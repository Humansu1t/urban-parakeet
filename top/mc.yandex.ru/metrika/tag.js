(function() {
    try {
        (function() {
            function cf(a, c, b, d) {
                var e = this;
                return C(window, "c.i", function() {
                    function f(E) {
                        (E = df(l, m, "", E)(l, m)) && (O(E.then) ? E.then(g) : g(E));
                        return E
                    }

                    function g(E) {
                        E && (O(E) ? p.push(E) : ia(E) && x(function(Q) {
                            var P = Q[0];
                            Q = Q[1];
                            O(Q) && ("u" === P ? p.push(Q) : h(Q, P))
                        }, ya(E)))
                    }

                    function h(E, Q, P) {
                        e[Q] = $l(l, m, P || q, Q, E)
                    }
                    var k, l = window;
                    (!l || isNaN(a) && !a) && Xd();
                    var m = am(a, Yd, c, b, d),
                        p = [],
                        q = [kh, df, lh];
                    q.unshift(bm);
                    var r = z(R, Ua),
                        t = K(m);
                    m.id || Sa(Pa("Invalid Metrika id: " + m.id, !0));
                    var y = hd.C("counters", {});
                    if (y[t]) return Ib(l,
                        t, "dc", (k = {}, k.key = t, k)), y[t];
                    cm(l, t, mh(a, c, b, d));
                    y[t] = e;
                    hd.D("counters", y);
                    hd.Ga("counter", e);
                    x(function(E) {
                        E(l, m)
                    }, ef);
                    x(f, id);
                    f(dm);
                    h(em(l, m, p), "destruct", [kh, lh]);
                    Rb(l, D([l, r, f, 1, "a.i"], nh));
                    x(f, X)
                })()
            }

            function kh(a, c, b, d) {
                return C(a, "cm." + b, d)
            }

            function lh(a, c, b, d) {
                return function() {
                    var e = Na(arguments);
                    e = d.apply(void 0, e);
                    return Y(e) ? Ja(a, c) : e
                }
            }

            function fm(a, c) {
                delete J(a).C("cok", {})[c]
            }

            function cm(a, c, b) {
                a = J(a);
                var d = a.C("cok", {});
                d[c] = b;
                a.D("cok", d)
            }

            function gm(a, c) {
                var b = "" + c,
                    d = {
                        id: 1,
                        ba: "0"
                    },
                    e = hm(b);
                e ? d.id = e : -1 === nb(b, ":") ? (b = Da(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Da(b[0]), d.ba = Zd(e) ? "1" : "0");
                return [Ja(a, d), d]
            }

            function oh(a, c, b, d) {
                var e;
                c = (e = {}, e.code = [
                    [1, "ym_debug", [18, ["a", [37, [40, "require"], "loadScript"]],
                            ["b", [37, [40, "require"], "callFromWindow"]]
                        ],
                        [2, [37, [40, "a"], ph + "/" + c + ".js?ver=" + ta.bb, [24, null, [],
                            [3, [2, [37, [40, "b"], "Ya._metrika.ytmm." + c + ".init", b, ff(d), ta.bb]]]
                        ]]]
                    ]
                ], e);
                qh(a)(c)
            }

            function ff(a) {
                if (M(a)) return a = z(ff, a), Kc([22], a);
                if (ia(a)) return a = z(function(c) {
                        return [c[0], ff(c[1])]
                    },
                    ya(a)), Kc([23], a);
                if (rh(a)) return a;
                Sa(Oa("npv"))
            }

            function im(a) {
                return ia(a) && M(a.code)
            }

            function jm(a, c) {
                var b, d = c.slice(2),
                    e = [(b = {}, b.require = {
                        kind: 0,
                        value: w(km, Lc([a, {}]))
                    }, b)];
                gf(e, Kc([3], d))
            }

            function gf(a, c, b) {
                c = c.slice(1);
                a.push(b || {});
                x(function(d) {
                    M(d) && 3 === d[0] ? gf(a, d) : !M(d) || 18 !== d[0] && 19 !== d[0] ? M(d) && 2 === d[0] && Sb(a, d[1]) : lm(a, d)
                }, c);
                a.pop()
            }

            function lm(a, c) {
                var b = 18 === c[0];
                x(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (b && 1 === d.length) throw Pa("mca");
                    d = a[a.length - 1];
                    if (ob(d, e)) throw Pa("vr");
                    f = Sb(a,
                        f);
                    d[e] = {
                        kind: b ? 0 : 1,
                        value: f
                    }
                }, c.slice(1))
            }

            function Sb(a, c) {
                if (rh(c)) return c;
                if (M(c) && 40 === c[0]) {
                    a: {
                        var b = c[1];
                        for (var d = a.length; 0 < d;) {
                            var e = a[--d];
                            if (ob(e, b)) {
                                b = e[b];
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) throw Pa("vnd");
                    return b.value
                }
                if (M(c) && 37 === c[0]) {
                    d = c.slice(2);
                    b = Sb(a, c[1]);
                    if (!O(b)) throw Pa("tenf");
                    d = z(u(a, Sb), d);
                    return b.apply(null, d)
                }
                if (M(c) && 24 === c[0]) return mm(a, c);
                if (M(c) && 35 === c[0]) {
                    d = c[2];
                    b = Sb(a, c[1]);
                    d = Sb(a, d);
                    if (!b) throw Pa("noma");
                    return b["" + d]
                }
                if (M(c) && 23 === c[0]) return nm(a, c);
                if (M(c) && 22 ===
                    c[0]) return om(a, c)
            }

            function om(a, c) {
                return z(function(b) {
                    return Sb(a, b)
                }, c.slice(1))
            }

            function nm(a, c) {
                return N(function(b, d) {
                    var e = d[1],
                        f = Sb(a, d[0]);
                    e = Sb(a, e);
                    b["" + f] = e;
                    return b
                }, {}, c.slice(1))
            }

            function rh(a) {
                return ea(a) || "[object Number]" === Object.prototype.toString.call(a) || !!a === a || aa(a)
            }

            function mm(a, c) {
                var b = c[1],
                    d = c[2],
                    e = c[3],
                    f = z(R, a);
                return function() {
                    var g = arguments,
                        h = N(function(k, l, m) {
                            if (k[l]) throw Pa("da");
                            k[l] = {
                                kind: 1,
                                value: g[m]
                            };
                            return k
                        }, {}, d);
                    b && !I(b, d) && (h[b] = {
                        kind: 0,
                        value: b
                    });
                    gf(f,
                        e, h)
                }
            }

            function km(a) {
                return ob(sh, a) ? sh[a] : void 0
            }

            function hf(a, c) {
                return function() {
                    try {
                        return c.apply(null, arguments)
                    } catch (b) {
                        th(a, b)
                    }
                }
            }

            function pm(a, c, b, d) {
                function e() {
                    g.state = 1;
                    b()
                }

                function f() {
                    g.state = 2;
                    d && d()
                }
                var g = qm(a, c);
                c = g.Ii;
                var h = g.state;
                c && 2 !== h ? 1 === h ? e() : (a = ka(a), a.F(c, ["load"], e), a.F(c, ["error"], f)) : f()
            }

            function qm(a, c) {
                jf[c] || (jf[c] = {
                    Ii: Mc(a, {
                        src: c
                    }),
                    state: 0
                });
                return jf[c]
            }

            function uh(a, c) {
                if (aa(a)) throw Pa("noma");
                if (1 === c.length) return a;
                var b = n(a, G(".", c.slice(0, -1)));
                if (!b) throw Pa("noma");
                return b
            }

            function rm(a) {
                return N(function(c, b) {
                    ob(a, b) && (c[b] = a[b]);
                    return c
                }, {}, fa(a))
            }

            function vh(a) {
                return {
                    Di: Jb(a.element),
                    rd: a.rd
                }
            }

            function sm(a) {
                if (!a) return "";
                a = a.match(tm);
                if (!a || 0 === a.length) return "";
                var c = um();
                return "//HTML/BODY/" + N(function(b, d) {
                    var e = d[0],
                        f = Da(d.slice(1));
                    return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b
                }, "", a)
            }

            function vm(a) {
                return wh(a) || wm(a)
            }

            function xm(a, c) {
                var b = c.patterns;
                return 0 === b.length ? !1 : Va(u(a, xh), b)
            }

            function zm(a, c) {
                var b = c.patterns;
                if (0 === b.length) return !1;
                if (1 ===
                    b.length) return xh(a, b[0]);
                b = N(function(f, g) {
                    var h = g[0],
                        k = g[1],
                        l = a[h];
                    l === k && (f.qd += 1, "i" === h || "c" === h ? f.rf = !0 : "p" === h && yh(l) === yh(k) && (f.sf = !0));
                    return f
                }, {
                    qd: 0,
                    rf: !1,
                    sf: !1
                }, b);
                var d = b.rf,
                    e = b.sf;
                return 2 <= b.qd || d && e
            }

            function xh(a, c) {
                var b = a[c[0]];
                return !(!b || b !== c[1])
            }

            function Am(a) {
                x(function(c) {
                    var b = c.event;
                    c = c.data;
                    var d = u(b, Bm);
                    "bidTimeout" === b ? x(d, c) : d(c)
                }, a)
            }

            function Bm(a, c) {
                if (I(a, Cm)) {
                    var b = n(c, "auctionId") || n(c, "bid.auctionId") || void 0;
                    if (b) {
                        dc[b] || (dc[b] = {
                            Jc: {}
                        });
                        b = dc[b];
                        var d = "auctionInit" ===
                            a,
                            e = "auctionEnd" === a,
                            f = "adRenderFailed" === a || "adRenderSucceeded" === a;
                        f || b.Tc && !d || (b.Tc = n(c, "auctionStart") || void 0, !b.Tc && d && (b.Tc = c.timestamp));
                        var g = D([a, b], Dm);
                        "bidRequested" === a ? x(g, c.bids) : f ? Em(a, b, c) : e ? (b.Se = c.auctionEnd || c.timestamp, b.Gi = ha(function(h, k, l) {
                            return kf(h, l) === k
                        }, z(V("bidderCode"), c.bidderRequests))) : d || g(c);
                        b.Se && (b.da = !0)
                    }
                }
            }

            function Em(a, c, b) {
                var d, e = b.bid,
                    f = e.bidderCode || e.bidder;
                e = e.adUnitCode;
                f && e && (c = zh(c, e), c.Nb || (c.Nb = {}), a = "adRenderSucceeded" === a, c.Nb[f] = (d = {}, d.success =
                    a, d), a || (c.Nb[f].reason = b.reason, c.Nb[f].message = b.message))
            }

            function Dm(a, c, b) {
                var d = b.adUnitCode,
                    e = b.bidderCode || b.bidder;
                if (e && d) {
                    var f = zh(c, d);
                    !f.Vd && b.mediaTypes && (f.Vd = {}, x(function(g) {
                        var h = g[0];
                        g = g[1];
                        var k;
                        M(g) ? k = g : g.sizes ? k = g.sizes : g.playerSize && (k = g.playerSize);
                        k && (f.Vd[h] = k)
                    }, ya(b.mediaTypes)));
                    "bidTimeout" === a ? (f.timeout || (f.timeout = {}), f.timeout[e] = !0) : (f.kc[a] || (f.kc[a] = {}), f.kc[a][e] = N(function(g, h) {
                        aa(b[h]) || (g[h] = Ah[h] ? Ah[h](b[h]) : b[h]);
                        return g
                    }, {}, Fm))
                }
            }

            function zh(a, c) {
                a.Jc[c] ||
                    (a.Jc[c] = {
                        kc: {}
                    });
                return a.Jc[c]
            }

            function Gm(a, c) {
                x(function(b) {
                    dc[b].da && Hm(a, c, b)
                }, fa(dc))
            }

            function Hm(a, c, b) {
                var d = dc[b];
                d.da = !1;
                d.Oa && la(a, d.Oa);
                d.Oa = T(a, function() {
                    var e, f, g = Im(b);
                    c((e = {}, e.__ym = (f = {}, f.pbjs = g, f), e));
                    delete dc[b]
                }, 2E3)
            }

            function Im(a) {
                var c = dc[a],
                    b = c.Tc,
                    d = c.Se,
                    e = c.Gi;
                return z(function(f) {
                    var g, h = f[0],
                        k = f[1];
                    f = k.Nb;
                    var l = k.Vd,
                        m = k.timeout;
                    k = k.kc;
                    return A((g = {}, g.renderState = f, g.mediaTypes = l, g.auctionId = a, g.adUnitCode = h, g.startStamp = b, g.endStamp = d, g.requestedBidders = e, g.bidTimeout =
                        m, g), k)
                }, ya(c.Jc))
            }

            function Jm(a) {
                var c = n(a, "featurePolicy");
                return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") : !1
            }

            function Km(a, c, b, d) {
                var e = n(d, "data");
                if (ea(e)) {
                    var f = e.split("*");
                    e = f[0];
                    var g = f[1];
                    f = f[2];
                    "sc.topics-response" === e ? (g && ("1" === g && f ? (a = Kb(a, f), M(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*")
                }
            }

            function Lm(a, c) {
                var b;
                if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data,
                        "_ym")) {
                    var d = c.source,
                        e = (b = {}, b._ym_uid = a, b);
                    d.postMessage(e, "https://oauth.yandex.ru")
                }
            }

            function Bh(a, c) {
                void 0 === c && (c = !0);
                var b = ec("canvas", a.document);
                if (b && (b = Nc(b))) {
                    var d = $d(a) || Oc(a),
                        e = d[0];
                    d = d[1];
                    if (.3 <= Ch(a, b, {
                            h: d,
                            w: e
                        }) / (d * e)) {
                        J(a).D("hc", 1);
                        return
                    }
                }
                c && T(a, D([a, !1], Bh), 3E3)
            }

            function Dh(a) {
                return {
                    O: function(c, b) {
                        Mm(a).then(function(d) {
                            c.J || (c.J = {});
                            c.J.uah = d;
                            b()
                        }, b)
                    }
                }
            }

            function Nm(a) {
                var c = N(function(b, d) {
                    var e = d[1],
                        f = Om(a[d[0]]);
                    f && b.push("" + e + "\n" + f);
                    return b
                }, [], ya(Pm));
                return G("\n",
                    c)
            }

            function Qm(a) {
                return "che\n" + a
            }

            function Om(a) {
                return ea(a) ? a : M(a) ? G(",", z(function(c) {
                    return '"' + c.brand + '";v="' + c.version + '"'
                }, a)) : aa(a) ? "" : a ? "?1" : "?0"
            }

            function Rm(a, c) {
                var b = Sm(a),
                    d = [Tm(a) || Um(a)];
                Eh(a) && d.push(b);
                var e = ja(a);
                b = Ta(a);
                var f = b.C("synced", {});
                d = ha(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(pb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.D("synced", f);
                return z(function(g) {
                    return {
                        Si: c[g],
                        hi: g
                    }
                }, d)
            }

            function Um(a) {
                a = Vm(a);
                return Wm[a] || a
            }

            function Sm(a) {
                a = Fh(a);
                return Xm[a] || "ru"
            }

            function Ym(a, c,
                b, d) {
                if (!b.K || Zd(c.ba)) d();
                else {
                    var e = ae(a),
                        f = u(e, Zm),
                        g = jd(a, ""),
                        h = function() {
                            var q = G(",", z($m(lf), be(e)));
                            q = "" + q + an(q, g);
                            ce(b, "gdpr", q);
                            d()
                        };
                    if (c.jj) f("31"), h();
                    else if (3 === c.id) h();
                    else {
                        var k = J(a),
                            l = k.C("f1");
                        if (l) l(h);
                        else if (l = be(e), Va(tc(lf), l)) h();
                        else if (g.C("yandex_login")) f("13"), g.D("gdpr", Pc, 525600), h();
                        else {
                            l = de(a);
                            var m = U(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                version: 2,
                                wf: bn,
                                Df: "_inversed_buttons"
                            } : void 0;
                            l || p ? (l = g.C("gdpr"), I(l, uc) ? (f(l === mf ? "12" : "3"), h()) : nf(a) || cn(a) ? (f("17"), h()) : dn(a).then(R, F).then(function(q) {
                                q ? (f("28"), h()) : (Gh(h), k.D("f1", Gh), (0, of [0])(a).then(V("params.eu")).then(function(r) {
                                    if (r || gb(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                                        g.D("gdpr_popup", mf);
                                        en(a, c);
                                        if (qb(a)) return fn(a, f, c);
                                        var t = Hh(a, e);
                                        if (t) return r = gn(a, f, t, c, p), r.then(D([a, c], hn)), r
                                    }
                                    r || f("8");
                                    return L.resolve({
                                        value: Pc,
                                        Nd: !0
                                    })
                                }).then(function(r) {
                                    g.fc("gdpr_popup");
                                    if (r) {
                                        var t = r.value;
                                        r = r.Nd;
                                        I(t, uc) && g.D("gdpr",
                                            t, r ? void 0 : 525600)
                                    }
                                    t = fc(Ih, ua);
                                    kd(a, t, 20)(Za(C(a, "gdr"), F));
                                    k.D("f1", ua)
                                })["catch"](C(a, "gdp.a")))
                            })) : (f("14"), h())
                        }
                    }
                }
            }

            function hn(a, c) {
                if (de(a)) {
                    var b = ae(a),
                        d = Ja(a, c);
                    d = d && d.params;
                    b = z(u(jn, n), be(b));
                    d && b.length && d("gdpr", Ea(b))
                }
            }

            function fn(a, c, b) {
                var d = ee(a, b);
                return new L(function(e) {
                    var f;
                    if (d) {
                        var g = d.$,
                            h = w(u("4", c), u(null, e)),
                            k = T(a, h, 2E3, "gdp.f.t");
                        d.Xf((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.F(Jh, function(m) {
                                e({
                                    value: Kh(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(D([a,
                            k
                        ], la))
                    } else e({
                        value: mf,
                        Nd: !0
                    })
                })
            }

            function en(a, c) {
                var b = ee(a, c);
                b && b.$.F(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = de(a), d
                });
                return b
            }

            function kn(a, c, b) {
                a = b || Fh(a);
                return I(a, c) ? a : "en"
            }

            function Kh(a) {
                if (I(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Pc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return I(a, uc) ? a : Pc
            }

            function Lh(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    H(e, d)(Lb(a, c))
                } catch (f) {} else Mh = T(a, D([a, c, 2 * b], Lh), b, "ai.d");
                return function() {
                    return la(a,
                        Mh)
                }
            }

            function Nh(a, c, b, d) {
                var e, f, g, h = b.Yh,
                    k = b.Th,
                    l = b.isTrusted;
                b = b.Od;
                a = pf(a, k);
                k = k.readOnly;
                d = (e = {}, e.fi = qf((f = {}, f.a = h ? 1 : 0, f.b = a, f.c = d || 0, f.d = k ? 1 : null, f.e = b ? 1 : null, f)).Fa(), e);
                aa(l) || (d.ite = rb(l));
                c.params((g = {}, g.__ym = d, g))
            }

            function Oh(a, c) {
                var b = n(c, "target");
                if (b) {
                    var d = n(b, "value");
                    if ((d = $a(d)) && !(100 <= Qa(d))) {
                        var e = "tel" === n(b, "type"),
                            f = 0 < nb(d, "@") && !e,
                            g = fe(d);
                        g = Qa(g);
                        if (f || !f && (e || g))
                            if (d = f ? Ph(d) : Qh(a, d)) return e = n(c, "isTrusted"), {
                                Th: b,
                                Yh: f,
                                Uh: d,
                                isTrusted: e,
                                Od: c.Od
                            }
                    }
                }
            }

            function Rh(a, c, b, d,
                e) {
                if (!ld(a)) return F;
                var f = [],
                    g = ka(a);
                vc(a)(Za(F, function() {
                    var h = hb(c, a.document.body);
                    e && (h = ha(e, h));
                    x(function(l) {
                        f.push(g.F(l, b, d))
                    }, h);
                    if (Fa("MutationObserver", a.MutationObserver)) {
                        var k = c.toUpperCase();
                        h = new a.MutationObserver(C(a, "de.m", function(l) {
                            x(function(m) {
                                var p = m.addedNodes;
                                m = m.removedNodes;
                                p && p.length && x(function(q) {
                                    ge(a, q, function(r) {
                                        r.nodeName !== k || e && !e(r) || f.push(g.F(r, b, d))
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, p);
                                m && m.length && x(function(q) {
                                    ge(a, q, function(r) {
                                        r.nodeName !== k ||
                                            e && !e(r) || g.vb(r, b, d)
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, m)
                            }, l)
                        }));
                        h.observe(a.document.body, {
                            childList: !0,
                            subtree: !0
                        });
                        f.push(H(h.disconnect, h))
                    }
                }));
                return D([ua, f], x)
            }

            function ln(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (c) return a = H(c, a.speechSynthesis), wc(function(b) {
                    return z(u(b, n), mn)
                }, a())
            }

            function nn(a, c, b) {
                return G("x", z(w(R, Ka("concat", "" + a), u(b, n)), c))
            }

            function on(a, c) {
                var b = c.Ig;
                if (!pn(a, b)) return "";
                var d = [];
                a: {
                    var e = qn(a, b);
                    try {
                        var f = D(e, w)()();
                        break a
                    } catch (E) {
                        if ("ccf" === E.message) {
                            f =
                                null;
                            break a
                        }
                        Sa(E)
                    }
                    f = void 0
                }
                if (Wa(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (E) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = ma(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (E) {
                    k = []
                }
                k = G(";", k);
                f = rf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = rf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2)
                }
                r = {
                    vj: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ? r : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": rf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                sf(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var y = {
                                "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (E) {}
                    y = {}
                }
                sf(d, y);
                if (!b.getShaderPrecisionFormat) return G("~", d);
                sf(d, rn(b));
                return G("~", d)
            }

            function sf(a, c, b) {
                void 0 === b && (b = ":");
                x(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, ya(c))
            }

            function sn(a, c, b, d) {
                c = d.C("cc");
                d = D(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    (e = (e = e[1]) && Da(e)) && 1440 < ja(a)(pb) - e ? d() : b.D("cc", c)
                } else Aa(0)(c) || d()
            }

            function tn(a, c, b, d) {
                return na(c, function(e) {
                    if (!he(e) && !ie(a))
                        if (e = d.C("zzlc"), Y(e) || Wa(e) || "na" === e) {
                            var f = sb(a);
                            if (f && (e = gc(a))) {
                                var g = f("iframe");
                                A(g.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                f = tf(a, 68);
                                var h = uf(a, 79);
                                g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Sh("L21ldHJpa2EvenpsYy5odG1s");
                                e.appendChild(g);
                                var k = 0,
                                    l = ka(a).F(a, ["message"], C(a, "zz.m", function(m) {
                                        (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (xc(g), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(),
                                            la(a, k))
                                    }));
                                k = T(a, w(l, u(g, xc)), 3E3)
                            }
                        } else b.D("zzlc", e)
                })
            }

            function un(a, c, b) {
                var d, e;
                c = ib(u(a, n), vn);
                c = Y(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    O(a) && (H(a, f, "y.metrika")(), a = n(f, "createOffer"), O(a) && !a.length && (a = H(a, f)(), d = n(a, "then"), O(d) && H(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        O(h) && H(h, f, g, F, F)()
                    })(), A(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (O(h)) {
                            h = H(h,
                                f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = F;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = hc(k[1]), b.D("pp", g));
                            f.onicecandidate = F;
                            h()
                        }
                    }, e))))
                }
            }

            function wn(a, c, b) {
                var d, e = md(a, c);
                if (e) {
                    e.$.F(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.C("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = T(a, D([a, c, b], Th), 200, "pu.m");
                        e.pe(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (la(a, g), b.D("pu", l))
                        })
                    } else Th(a,
                        c, b)
                }
            }

            function Th(a, c, b) {
                var d = n(a, "location.host");
                a = nd(a, c);
                b.D("pu", "" + hc(d) + a)
            }

            function xn(a) {
                a = sb(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = Ka("canPlayType", a),
                        b = wc(function(d) {
                            return z(w(R, Ka("concat", d + "; codecs=")), yn)
                        }, Uh);
                    return z(c, Uh.concat(b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function zn(a) {
                var c = n(a, "matchMedia");
                if (c && Fa("matchMedia", c)) {
                    var b = Ka("matchMedia", a);
                    return N(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, An)
                }
            }

            function rn(a) {
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] =
                        n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float",
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)
                    ],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
                        a.HIGH_INT)],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function qn(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && Fa("getParameter", c.getParameter) || vf();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(Bn);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.$h = 3;
                    b.li = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || vf();
                    return {
                        ke: d,
                        ij: e,
                        hj: b
                    }
                }, function(b) {
                    var d = b.ke,
                        e = b.ij;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || vf();
                    return A(b, {
                        ph: d
                    })
                }, function(b) {
                    var d = b.ke,
                        e = b.ph;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.ke;
                    b = b.hj;
                    d.gj = c.getAttribLocation(d, "attrVertex");
                    d.ni = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Rj);
                    c.vertexAttribPointer(d.gj, b.$h, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.ni, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.li);
                    return c.canvas
                }]
            }

            function pn(a, c) {
                if (!O(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Fa("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function rf(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function Cn(a, c) {
                if (n(c, "settings.ins")) {
                    var b = J(a);
                    if (!b.C("scip")) {
                        var d = Ta(a),
                            e = ja(a)(pb),
                            f = je(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f = qa(a, "ci");
                            var g = ["sync.cook.int"],
                                h = function(l) {
                                    l = b.C("scip", "") + l;
                                    b.D("scip", l)
                                },
                                k = u("a", h);
                            b.D("scip", "0");
                            return f({
                                Z: {
                                    ha: g,
                                    Na: 3E3,
                                    yb: !0
                                }
                            }, ["https://an.yandex.ru/sync_cookie"]).then(function(l) {
                                l = n(l.Nc,
                                    "CookieMatchUrls");
                                if (M(l) && Qa(l)) {
                                    h("1");
                                    var m = qa(a, "c");
                                    l = z(function(p, q) {
                                        return m({
                                            Z: {
                                                ha: g,
                                                Na: 3E3
                                            }
                                        }, ["https://" + p])["catch"](w(u("b", h), u("" + q, h)))
                                    }, ha(ea, l));
                                    return L.all(l)
                                }
                                k()
                            }, k).then(function() {
                                var l = b.C("scip");
                                !l || gb(l, "a") || gb(l, "b") || (d.D("sci", e), h("2"))
                            }, F)
                        }
                    }
                }
            }

            function Vh(a) {
                return {
                    O: function(c, b) {
                        if (!c.K) return b();
                        var d = J(a).C("fid");
                        !Wh && d && (ce(c, "fid", d), Wh = !0);
                        return b()
                    }
                }
            }

            function Dn(a, c) {
                var b = a.document;
                if (I(b.readyState, ["interactive", "complete"])) Rb(a, c);
                else {
                    var d = ka(a),
                        e =
                        d.F,
                        f = d.vb,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function wf(a) {
                return {
                    O: function(c, b) {
                        var d = c.K;
                        if (d) {
                            var e = J(a).C("adBlockEnabled");
                            e && d.D("adb", e)
                        }
                        b()
                    }
                }
            }

            function En(a) {
                var c = C(a, "i.clch", Fn);
                ka(a).F(a.document, ["click"], u(a, c), {
                    passive: !1
                });
                return function(b) {
                    var d = ta.Qa,
                        e = a.Ya[ta.bc],
                        f = !!e._informer;
                    e._informer = A({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || Mc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function Gn(a, c) {
                var b =
                    Ta(a),
                    d = b.C,
                    e = b.D;
                if ("" === d("cc")) {
                    e("cc", 0);
                    var f = ja(a),
                        g = J(a);
                    qa(a, "6", c)({
                        Z: {
                            yb: !0,
                            Je: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(function(h) {
                        h = n(h.Nc, "c");
                        e("cc", h + "&" + f(pb));
                        g.D("cc", h)
                    })["catch"](function(h) {
                        var k = f(pb);
                        e("cc", "&" + k);
                        Qc(a, "cc", h)
                    })
                }
            }

            function ke(a, c) {
                if (!c) return !1;
                var b = U(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function Hn(a, c) {
                return na(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Xg: In(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function Jn(a, c, b, d, e) {
                b =
                    xf(a.document.body, b);
                d = xf(a.document.body, d);
                I(e.target, [b, d]) && yf(a, c)
            }

            function Xh(a, c, b, d) {
                (b = Kn(a, d, b)) && yf(a, c, b)
            }

            function Yh(a, c) {
                var b = Zh(a, c);
                return Ln(a, b)
            }

            function Zh(a, c) {
                var b = xf(a.document.body, c);
                return b ? Mn(a, b) : ""
            }

            function yf(a, c, b) {
                if (c = Ja(a, c)) a = le(["dr", b || "" + Xa(a, 10, 99)]), c.params(le(["__ym", a]))
            }

            function xf(a, c) {
                var b = null;
                try {
                    b = c ? ec(c, a) : b
                } catch (d) {}
                return b
            }

            function $h(a) {
                a = Ga(Sh(a));
                return z(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return ai("0", 8, c)
                }, a)
            }

            function Mn(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                ge(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && $a(f)) && b.push(f)
                });
                return 0 === b.length ? "" : G(" ", b)
            }

            function Nn(a, c, b) {
                a = Na(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    jc: b
                })
            }

            function On(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Pn, d + "." + b.jc)) && (c && I(b, Qn) || a("ym-" + b + "-" + d))
                }
            }

            function Rn(a, c, b) {
                if ("rt" === b) return "https://" + bi(a, c) + ".mc.yandex.ru/watch/3/1";
                if ("mf" ===
                    b) {
                    b = U(a);
                    b = me(b.protocol + "//" + b.hostname + b.pathname);
                    c = nd(a, c);
                    var d = "";
                    do d += Xa(a); while (d.length < c.length);
                    d = d.slice(0, c.length);
                    a = "";
                    for (var e = 0; e < c.length; e += 1) a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                    a = [d, a];
                    return "https://adstat.yandex.ru/track?service=metrika&id=" + a[1] + "&mask=" + a[0] + "&ref=" + b
                }
            }

            function Sn(a, c, b) {
                var d, e = zf(c).Mb;
                return qa(a, "pi", c)({
                    K: Ha((d = {}, d[e] = 1, d))
                }, [b])
            }

            function Tn(a, c, b) {
                return new L(function(d, e) {
                    if (ci(a, ne, "isp")) {
                        var f = F,
                            g = function(h) {
                                ("1" === h ? d : e)();
                                f();
                                di(ne,
                                    "isp")
                            };
                        f = ka(a).F(a, ["message"], D([b, g], C(a, "isp.stat.m", Un)));
                        T(a, g, 1500)
                    } else e()
                })
            }

            function Un(a, c, b) {
                var d = n(b, "data");
                if (ea(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                }
            }

            function Vn(a, c) {
                var b = Ta(a),
                    d = "wv2rf:" + K(c),
                    e = c.Zb,
                    f = Af(a),
                    g = b.C(d),
                    h = c.$i;
                return Y(f) || Wa(g) ? Ba(function(k, l) {
                    na(c, function(m) {
                        var p = !!n(m, "settings.webvisor.forms");
                        p = !n(m, "settings.x3") && p;
                        f = Af(a) || n(m, "settings.eu");
                        b.D(d, rb(p));
                        l({
                            Zb: e,
                            Md: !!f,
                            Gf: p,
                            ig: h
                        })
                    })
                }) : Bf({
                    Zb: e,
                    Md: f,
                    Gf: !!Da(g),
                    ig: h
                })
            }

            function Wn() {
                var a = N(function(c, b) {
                    c[b[0]] = {
                        cd: 0,
                        Gg: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    Cg: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: N(function(b, d) {
                                var e = a[d];
                                return Math.round(b +
                                    e.cd * e.Gg)
                            }, 0, fa(a))
                        }
                    },
                    oi: function(c) {
                        c && (c = a[c.data.type || c.event]) && (c.cd += 1)
                    }
                }
            }

            function Xn(a) {
                return {
                    rh: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    th: function() {
                        if (a.document.doctype) {
                            var c = A({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + G("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    }
                }
            }

            function Yn(a, c, b) {
                var d = od(a),
                    e = ka(a),
                    f = qb(a),
                    g = c.yd(),
                    h = !n(a,
                        "postMessage") || f && !n(a, "parent.postMessage"),
                    k = u(d, R);
                if (h) {
                    if (!g) return T(a, H(d.aa, d, "i", {
                        ta: !1
                    }), 10), {
                        xd: k,
                        Tf: F,
                        stop: F
                    };
                    Sa(Oa())
                }
                d.F(["sr"], function(r) {
                    var t, y = ei(a, r.source);
                    y && Cf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.ra().Y(y), t))
                });
                d.F(["sd"], function(r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || ei(a, r)) && d.aa("sdr", {
                        data: t.data,
                        frameId: t.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function() {
                            var r;
                            Cf(a, a.parent, (r = {}, r.type = "sr", r));
                            m = T(a, p, 100, "if.i")
                        };
                    p();
                    var q = function(r) {
                        d.ga(["\u043d"], q);
                        la(a,
                            m);
                        var t = yc(a, r.origin).host;
                        l || r.source !== a.parent || !r.data.frameId || "about:blank" !== U(a).host && !I(t, b) || (l = !0, d.aa("i", {
                            frameId: r.data.frameId,
                            ta: !0
                        }))
                    };
                    d.F(["\u043d"], q);
                    T(a, function() {
                        d.ga(["\u043d"], q);
                        la(a, m);
                        l || (l = !0, d.aa("i", {
                            ta: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.F(a, ["message"], function(r) {
                    var t = Kb(a, r.data);
                    t && t.type && I(t.type, Zn) && d.aa(t.type, {
                        data: t,
                        source: r.source,
                        origin: r.origin
                    })
                });
                return {
                    xd: k,
                    Tf: function(r) {
                        var t;
                        return Cf(a, a.parent, (t = {}, t.frameId = c.yd(), t.data = r, t.type = "sd", t))
                    },
                    stop: e
                }
            }

            function ei(a,
                c) {
                try {
                    return ib(w(V("contentWindow"), Aa(c)), Ga(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function Cf(a, c, b) {
                c || Sa(Oa());
                a = Lb(a, b);
                c.postMessage(a, "*")
            }

            function fi() {
                return ic() + ic() + "-" + ic() + "-" + ic() + "-" + ic() + "-" + ic() + ic() + ic()
            }

            function ic() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function $n(a, c) {
                if (ea(c)) return c;
                var b = a.textContent;
                if (ea(b)) return b;
                b = a.data;
                if (ea(b)) return b;
                b = a.nodeValue;
                return ea(b) ? b : ""
            }

            function ao(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = La(c));
                var f = A(N(function(h, k) {
                    h[k.name] = k.value;
                    return h
                }, {}, Ga(c.attributes)), d);
                A(f, bo(c, e, f));
                var g = (d = zb(function(h, k) {
                    var l = k[0],
                        m = oe(a, c, l, k[1], b, e),
                        p = m.value;
                    aa(p) ? delete f[l] : f[l] = p;
                    return h || m.mb
                }, !1, ya(f))) && Nc(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    mb: d,
                    Dg: f
                }
            }

            function bo(a, c, b) {
                var d = {};
                Df(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function oe(a, c, b, d, e, f) {
                void 0 === f && (f = La(c));
                var g = {
                    mb: !1,
                    value: d
                };
                if (Df(c)) "value" === b ? !aa(d) && "" !==
                    d && (b = e.Md, f = e.Gf, e = pd(a, c), f ? (b = Rc(a, c, b), a = b.ob, c = b.fb, b = b.Va, g.mb = !c && (e || a)) : (g.mb = e, b = !(c && jc("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? gi("\u2022", d.length) : "") : "checked" === b && I((c.getAttribute("type") || "").toLowerCase(), co) ? g.value = c.checked ? "checked" : null : eo.test(b) && Ef(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)(e = pd(a, c)) ? (g.mb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ?
                    c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (I(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === nb(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && I(b, ["src", "type"])) g.value = null;
                return g
            }

            function Ff(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    H: function(e, f) {
                        return C(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function fo(a, c, b, d, e) {
                function f() {
                    l && l.stop()
                }
                if (!c.xb) return L.resolve(F);
                var g = qa(a, "4", c),
                    h = {
                        K: Ha()
                    },
                    k = new go(a, b, function(m, p, q) {
                        if (!g) return L.resolve();
                        var r = "wv-data=" + qd(m, !0),
                            t = C(a, "m.n.m.s");
                        p = {};
                        p["wv-part"] = "" + q;
                        q = m.length;
                        for (var y = 0, E = 255, Q = 255, P, za, Ca; q;) {
                            P = 21 < q ? 21 : q;
                            q -= P;
                            do za = "string" === typeof m ? m.charCodeAt(y) : m[y], y += 1, 255 < za && (Ca = za >> 8, za &= 255, za ^= Ca), E += za, Q += E; while (--P);
                            E = (E & 255) + (E >> 8);
                            Q = (Q & 255) + (Q >> 8)
                        }
                        m = (E & 255) + (E >> 8) << 8 | (Q & 255) + (Q >> 8);
                        return g(A({}, h, {
                            Z: {
                                ca: r
                            },
                            J: (p["wv-check"] = "" + (65535 === m ? 0 : m), p["wv-type"] = b.type, p)
                        }), c)["catch"](t)
                    }),
                    l = ho(a, k, d, e);
                return na(c, function(m) {
                    m && J(a).D("isEU", n(m, "settings.eu"));
                    J(a).C("oo") || l &&
                        hi(a, m) && l.start();
                    return f
                })
            }

            function ho(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = ka(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = H(c.flush, c),
                    m = oa(function(r, t) {
                        C(a, "hfv." + r, function() {
                            try {
                                var y = t.type
                            } catch (E) {
                                return
                            }
                            y = I(y, d);
                            c.push(t, {
                                type: r
                            });
                            y && l()
                        })()
                    }),
                    p = C(a, "sfv", function() {
                        var r = b(a),
                            t = io(a);
                        x(function(y) {
                            f.push(g.F(y.target, [y.event], m(y.type)))
                        }, r);
                        x(function(y) {
                            f.push(g.F(y.target, [y.event], C(a, "hff." + y.type + "." + y.event, function(E) {
                                x(Ba({
                                    l: a,
                                    na: E,
                                    flush: l
                                }), y.R)
                            })))
                        }, t);
                        k = ii(a, "form", e);
                        e.attachEvent &&
                            (r = ii(a, "form *", e), x(function(y) {
                                f.push(g.F(y, ["submit"], m("form")))
                            }, k), x(function(y) {
                                Gf(y) && f.push(g.F(y, ["change"], m("formInput")))
                            }, r));
                        x(function(y) {
                            var E = y.submit;
                            if (O(E) || "object" === typeof E && jo.test("" + E)) y[h] = E, y.submit = C(a, "fv", function() {
                                var Q = {
                                    target: y,
                                    type: "submit"
                                };
                                m("document")(Q);
                                return y[h]()
                            })
                        }, k)
                    }),
                    q = C(a, "ufv", function() {
                        x(ua, f);
                        x(function(r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: q
                }
            }

            function ko(a, c) {
                var b = ha(function(e) {
                        return 0 < e.R.length
                    }, c),
                    d = ji({
                        target: a.document,
                        type: "document"
                    });
                return z(w(R, d, lo(a)), b)
            }

            function ki(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Ya] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        pe(h) && !h[Ya] && va(d, zc(b, h))
                    }
                } else va(d, zc(b, c));
                return d
            }

            function Hf(a) {
                if (rd) {
                    rd = !1;
                    var c = Ab(a.l),
                        b = [];
                    jb(a.l, b, 15) ? a = [] : (S(b, c), a = b);
                    return a
                }
            }

            function li(a) {
                if (!rd) {
                    rd = !0;
                    a = Ab(a.l);
                    var c = [];
                    Tb(c, 14);
                    S(c, a);
                    return c
                }
            }

            function mo(a, c, b) {
                var d = c[Ya];
                if (d) {
                    a: {
                        var e = Ab(a),
                            f = c[Ya];
                        if (0 < f) {
                            var g = [];
                            c = If(a, c);
                            var h = Ac[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] +
                                "x" + c[3];
                            if (k !== h.Cf) {
                                h.Cf = k;
                                if (jb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                S(g, e);
                                S(g, f);
                                S(g, c[0]);
                                S(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (jb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                S(g, e);
                                S(g, f);
                                S(g, c[2]);
                                S(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    va(b, a)
                }
                return d
            }

            function Rc(a, c, b) {
                void 0 === b && (b = !1);
                if (!c) return {
                    Va: !1,
                    fb: !1,
                    ob: !1
                };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d) return {
                    Va: !1,
                    fb: !1,
                    ob: !1
                };
                var e = ha(mi, [c.className, c.id, c.name]),
                    f = c && jc("ym-record-keys", c);
                d = d && I(d, ni) || Va(cb(no), e);
                var g;
                (g = d) || (g = c.placeholder, g = Va(cb(oo),
                    e) || mi(g) && po.test(g || ""));
                e = g;
                return {
                    Va: !f && (Jf(a, c) || e && b || e && !d && !b),
                    fb: f,
                    ob: e
                }
            }

            function Jf(a, c) {
                return Ef(a, c) || sd(a, c) ? !0 : pd(a, c)
            }

            function mi(a) {
                return !!(a && 2 < a.length)
            }

            function Df(a) {
                try {
                    var c = La(a);
                    if (I(c, Kf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || I(b.toLocaleLowerCase(), qo)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function oi(a, c) {
                return c && jc("(ym-disable-submit|-metrika-noform)", c)
            }

            function ro(a, c) {
                return G("", z(function(b) {
                    return a.isNaN(b) ? so.test(b) ? (b = b.toUpperCase() === b ? to : uo, String.fromCharCode(Xa(a,
                        b[0], b[1]))) : b : "" + Xa(a, 0, 9)
                }, c.split("")))
            }

            function pd(a, c) {
                if (aa(c)) return !1;
                if (Lf(c)) {
                    var b = c.parentNode;
                    return (aa(b) ? 0 : 11 === b.nodeType) ? !1 : pd(a, c.parentNode)
                }
                b = pi(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
            }

            function hi(a, c) {
                var b = Sc(a),
                    d = b.C("visorc");
                I(d, ["w", "b"]) || (d = "");
                qi(a) && ri(a, qe, "visorc") && !vo.test(tb(a) || "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e ||
                    1 < e) d = "w";
                d || (d = J(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.D("visorc", d, 30);
                return "w" === d
            }

            function wo(a, c) {
                return {
                    O: function(b, d) {
                        b.K.Rb("we", Mb(c.xb));
                        si(a, c, b, "rn");
                        d()
                    }
                }
            }

            function ti(a, c, b) {
                if (ui.isEnabled(a)) return new ui(a, c);
                if (vi.isEnabled(a)) return new vi(a, b)
            }

            function wi(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return fc([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function xi(a, c, b) {
                a = c(b);
                c = [F, 0, 0];
                var d = [0, c, c, void 0];
                return fc(a, function(e, f) {
                    var g =
                        e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) Bc(d, W(l)), h = k(h), l & 2 && Bc(d, W(h[1])), Bc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, Mf]);
                            m.push([0, W(l), Bc]);
                            m.unshift([0, 0, Nf]);
                            va(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                q = e[4],
                                r = e[5],
                                t = fa(h);
                            for (g = t.length - 1; 0 <= g;) m = t[g], m = [
                                [0, 0, Nf],
                                [q, h[m], r],
                                [k, m, p],
                                [0, 0, Mf],
                                [0, W(l), Bc]
                            ], va(f, m), --g
                        } else m = k(h), m.push([0, 0, Mf]), m.push([0, W(l), Bc]), m.unshift([0, 0, Nf]), va(f, m);
                    return d
                })
            }

            function Nf(a) {
                var c =
                    a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [F, 0, 0], a[2] = a[1]);
                Bc(a, W(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function Mf(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [F, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function Bc(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c
            }

            function yi(a) {
                return [
                    [1857, a.partsTotal, W],
                    [1793, a.activity, W],
                    [1744, a.textChangeMutation, xo],
                    [1680, a.removedNodesMutation, yo],
                    [1616, a.addedNodesMutation, zo],
                    [1552, a.attributesChangeMutation, Ao],
                    [1488, a.publishersHeader, Bo],
                    [1424,
                        a.articleInfo, Co
                    ],
                    [1360, a.focusEvent, Do],
                    [1296, a.fatalErrorEvent, Eo],
                    [1232, a.deviceRotationEvent, Fo],
                    [1168, a.keystrokesEvent, Go],
                    [1104, a.resizeEvent, Ho],
                    [1040, a.zoomEvent, Io],
                    [976, a.touchEvent, Jo],
                    [912, a.changeEvent, Ko],
                    [848, a.selectionEvent, Lo],
                    [784, a.scrollEvent, Mo],
                    [720, a.mouseEvent, No],
                    [656, a.Oj, Oo],
                    [592, a.page, Po],
                    [513, a.end, Cc],
                    [449, a.partNum, W],
                    [401, a.chunk, Qo],
                    [257, a.frameId, ra],
                    [193, a.event, W],
                    [129, a.type, W],
                    [65, a.stamp, W]
                ]
            }

            function Ro(a) {
                return [
                    [84, a.Ei, yi]
                ]
            }

            function So(a) {
                return [
                    [129, a.position,
                        ra
                    ],
                    [81, a.name, ca]
                ]
            }

            function To(a) {
                return [
                    [81, a.name, ca]
                ]
            }

            function Uo(a) {
                return [
                    [81, a.name, ca]
                ]
            }

            function Co(a) {
                return [
                    [593, a.updateDate, ca],
                    [532, a.rubric, So],
                    [449, a.chars, ra],
                    [401, a.publicationDate, ca],
                    [340, a.topics, To],
                    [276, a.authors, Uo],
                    [209, a.pageTitle, ca],
                    [145, a.pageUrlCanonical, ca],
                    [65, a.id, W]
                ]
            }

            function Vo(a) {
                return [
                    [513, a.chars, ra],
                    [489, a.maxScrolled, td],
                    [385, a.involvedTime, ra],
                    [321, a.height, ra],
                    [257, a.width, ra],
                    [193, a.y, ra],
                    [129, a.x, ra],
                    [65, a.id, W]
                ]
            }

            function Bo(a) {
                return [
                    [129, a.involvedTime,
                        ra
                    ],
                    [84, a.articleMeta, Vo]
                ]
            }

            function Do(a) {
                return [
                    [65, a.target, ra]
                ]
            }

            function Eo(a) {
                return [
                    [209, a.stack, ca],
                    [145, a.bh, ca],
                    [81, a.code, ca]
                ]
            }

            function Fo(a) {
                return [
                    [193, a.orientation, ra],
                    [129, a.height, W],
                    [65, a.width, W]
                ]
            }

            function Go(a) {
                return [
                    [84, a.keystrokes, Wo]
                ]
            }

            function Wo(a) {
                return [
                    [273, a.modifier, ca],
                    [193, a.isMeta, Cc],
                    [145, a.key, ca],
                    [65, a.id, W]
                ]
            }

            function Ho(a) {
                return [
                    [257, a.pageHeight, W],
                    [193, a.pageWidth, W],
                    [129, a.height, W],
                    [65, a.width, W]
                ]
            }

            function Io(a) {
                return [
                    [193, a.y, ra],
                    [129, a.x, ra],
                    [105, a.level,
                        td
                    ]
                ]
            }

            function Jo(a) {
                return [
                    [129, a.target, ra],
                    [84, a.touches, Xo]
                ]
            }

            function Xo(a) {
                return [
                    [297, a.force, td],
                    [233, a.y, td],
                    [169, a.x, td],
                    [81, a.id, ca]
                ]
            }

            function Ko(a) {
                return [
                    [257, a.target, ra],
                    [193, a.hidden, Cc],
                    [129, a.checked, Cc],
                    [81, a.value, ca]
                ]
            }

            function Lo(a) {
                return [
                    [257, a.endNode, W],
                    [193, a.startNode, W],
                    [129, a.end, ra],
                    [65, a.start, ra]
                ]
            }

            function Mo(a) {
                return [
                    [257, a.target, ra],
                    [193, a.page, Cc],
                    [129, a.y, ra],
                    [65, a.x, ra]
                ]
            }

            function No(a) {
                return [
                    [193, a.target, ra],
                    [129, a.y, W],
                    [65, a.x, W]
                ]
            }

            function Oo(a) {
                return [
                    [148,
                        a.changes, Yo
                    ],
                    [65, a.target, ra]
                ]
            }

            function Yo(a) {
                return [
                    [193, a.index, W],
                    [145, a.op, ca],
                    [81, a.style, ca]
                ]
            }

            function xo(a) {
                return [
                    [209, a.value, ca],
                    [129, a.index, W],
                    [65, a.target, W]
                ]
            }

            function yo(a) {
                return [
                    [129, a.index, W],
                    [69, a.nodes, ra]
                ]
            }

            function zo(a) {
                return [
                    [129, a.index, W],
                    [84, a.nodes, zi]
                ]
            }

            function Ao(a) {
                return [
                    [210, a.attributes, 81, ca, 145, ca],
                    [129, a.index, W],
                    [65, a.target, W]
                ]
            }

            function Po(a) {
                return [
                    [852, a.content, zi],
                    [785, a.tabId, ca],
                    [705, a.recordStamp, Zo],
                    [656, a.location, $o],
                    [592, a.viewport, Ai],
                    [528, a.screen,
                        Ai
                    ],
                    [449, a.hasBase, Cc],
                    [401, a.base, ca],
                    [337, a.referrer, ca],
                    [273, a.ua, ca],
                    [209, a.address, ca],
                    [145, a.title, ca],
                    [81, a.doctype, ca]
                ]
            }

            function $o(a) {
                return [
                    [209, a.path, ca],
                    [145, a.protocol, ca],
                    [81, a.host, ca]
                ]
            }

            function Ai(a) {
                return [
                    [129, a.height, ra],
                    [65, a.width, ra]
                ]
            }

            function zi(a) {
                return [
                    [513, a.hidden, Cc],
                    [449, a.prev, W],
                    [385, a.next, W],
                    [337, a.content, ca],
                    [257, a.parent, W],
                    [210, a.attributes, 81, ca, 145, ca],
                    [145, a.name, ca],
                    [65, a.id, W]
                ]
            }

            function ca(a) {
                var c = ap({}, a, [], 0);
                return c ? [bp, c, a] : [Bi, 0, 0]
            }

            function Qo(a) {
                return [cp,
                    a.length, a
                ]
            }

            function Cc(a) {
                return [Bi, 1, a ? 1 : 0]
            }

            function Zo(a) {
                a = Ci(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [Di, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
            }

            function td(a) {
                return [dp, 4, a]
            }

            function ra(a) {
                return 0 > a ? [Di, 10, Ci(a)] : W(a)
            }

            function W(a) {
                return [ep, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            }

            function ep(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function Bi(a, c, b, d) {
                b[d] = c
            }

            function cp(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d +
                    a] = c[a]
            }

            function Ei(a) {
                return function(c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function dp(a, c, b, d) {
                return fp(a)(a, c, b, d)
            }

            function gp(a, c, b, d) {
                var e = 0 > c ? 1 :
                    0;
                e && (c = -c);
                if (0 === c) ud(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) ud(2143289344, b, d);
                else if (3.4028234663852886E38 < c) ud((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) ud((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    ud((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function ud(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function Di(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128,
                    c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function Ci(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function si(a, c, b, d) {
                var e, f = b.J;
                f.wmode = "0";
                f["wv-hit"] = f["wv-hit"] || "" + Dc(a);
                f["page-url"] = f["page-url"] || U(a).href;
                d && (f[d] = f[d] || "" + Xa(a));
                a = {
                    ma: {
                        za: "webvisor/" + c.id
                    },
                    Z: A(b.Z || {}, {
                        Za: (e = {}, e["Content-Type"] = "text/plain", e),
                        Wc: "POST"
                    }),
                    J: f
                };
                A(b, a)
            }

            function hp(a,
                c) {
                return na(c, function(b) {
                    var d = J(a),
                        e = d.C,
                        f = u("dSync", d.D);
                    K(c);
                    if (e("dSync", !1)) f(1);
                    else return f(!0), Fi(a, b, {
                        cb: c,
                        Mb: "s",
                        Sd: "ds",
                        Sc: f,
                        Qi: function(g, h, k) {
                            var l = g.Nc;
                            g = g.host;
                            if (n(l, "settings")) return Sa(Oa("ds.e"));
                            h = h(da) - k;
                            k = g[1];
                            var m, p;
                            l = Ha((m = {}, m.di = l, m.dit = h, m.dip = k, m));
                            m = (p = {}, p["page-url"] = U(a).href, p);
                            return qa(a, "S", Gi)({
                                K: l,
                                J: m
                            }, Gi).then(u(10, f), C(a, "ds.rs"))
                        }
                    })
                })
            }

            function Fi(a, c, b) {
                var d, e = b.cb,
                    f = b.Sc;
                f = void 0 === f ? F : f;
                var g = ja(a),
                    h = ip(a, c.userData, e),
                    k = jp(a),
                    l = w(Hi, D([kp, lp], re))(a),
                    m = n(c, "settings.sbp");
                b.Sc = f;
                m && (b.data = A({}, m, (d = {}, d.c = e.id, d)));
                return k.length ? mp(a, g, h, c, l, b).then(function() {
                    return np(a, k, h, g, l, b)
                }, F) : (f(2), L.resolve())
            }

            function jp(a) {
                var c = se(a);
                a = w(Of, tc(["iPhone", "iPad"]))(a);
                return c ? op : a ? pp : []
            }

            function np(a, c, b, d, e, f) {
                e = f.Qi;
                var g = void 0 === e ? F : e,
                    h = f.Sd;
                e = f.Sc;
                var k = void 0 === e ? F : e,
                    l = d(da);
                return qp(a, c, f)(Za(function(m) {
                    k(6);
                    x(function(p) {
                        p && Qc(a, h + ".s", p)
                    }, m);
                    m = d(pb);
                    b.D(h, m).then(u(7, k))
                }, function(m) {
                    k(8);
                    b.D(h, d(pb)).then(u(9, k));
                    g(m, d, l)
                }))
            }

            function mp(a,
                c, b, d, e, f) {
                var g = f.Sd,
                    h = f.cb,
                    k = f.Sc;
                return new L(function(l, m) {
                    var p = b.C(g, 0);
                    p = parseInt("" + p, 10);
                    return c(pb) - p <= e.dg ? (k(3), m()) : rp(a) ? l(void 0) : he(d) ? (k(4), m()) : l(sp(a, h)["catch"](w(Tc(u(5, k)), Sa)))
                })
            }

            function qp(a, c, b) {
                var d = b.Mb,
                    e = b.data,
                    f = qa(a, d, b.cb);
                a = A({}, Ii);
                e && A(a.J, e);
                return tp(z(function(g) {
                    return up(f(A({
                        Z: {
                            Je: !1,
                            me: !0
                        }
                    }, Ii), z(function(h) {
                            var k = h[1],
                                l = h[2];
                            h = G("", z(function(m) {
                                return String.fromCharCode(m.charCodeAt(0) + 10)
                            }, h[0].split("")));
                            return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + vp[d]
                        },
                        g)).then(function(h) {
                        return A({}, h, {
                            host: g[h.kg]
                        })
                    }))
                }, c))
            }

            function ip(a, c, b) {
                var d = c || {},
                    e = qa(a, "u", b),
                    f = Ta(a);
                return {
                    C: function(g, h) {
                        return Y(d[g]) ? f.C(g, h) : d[g]
                    },
                    D: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e({
                            J: (k = {}, k.key = g, k.value = l, k)
                        }, [ta.Qa + "//" + kc + "/user_storage_set"], {})["catch"](C(a, "u.d.s.s"))
                    }
                }
            }

            function wp(a) {
                return {
                    O: function(c, b) {
                        J(a).C("oo") || b()
                    }
                }
            }

            function xp(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return L.resolve()
                    }
                }
                return function(e) {
                    var f, g = (f = {}, f["browser-info"] =
                        yp, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = Lb(a, e)) ? d(zp, {
                        $a: g,
                        ha: [],
                        ca: "site-info=" + me(e)
                    })["catch"](F) : L.resolve()
                }
            }

            function Ap(a, c) {
                var b = te(function(d, e) {
                    return d[1].ea > e[1].ea ? 1 : -1
                }, ya(Yd));
                b = z(function(d) {
                    var e = d[0],
                        f = d[1].Ma;
                    d = ob(c, e) && !aa(c[e]);
                    e = c[e] !== (f || R)(void 0);
                    return rb(d && e)
                }, b);
                return ue(G("", b))
            }

            function Bp(a, c) {
                if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                    var b = K(c);
                    delete J(a).C("counters", {})[b];
                    Sa(Oa("oo.e"))
                }
            }

            function Cp(a) {
                if (vd(a)) return null;
                var c = Dp(a),
                    b = c.Ff;
                Y(b) && (c.Ff = null, Ep(a).then(function(d) {
                    c.Ff = d
                }));
                return b ? 1 : null
            }

            function Fp(a, c, b) {
                b = b.J;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = wd(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Gp);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Hp, d = e)
                }
                if (!b) return null;
                a = Ip(a, d, b);
                c = K(c);
                c = Jp(c);
                return (c = Kp(c, a)) && G(",", c)
            }

            function Kp(a, c) {
                var b = a.length ? z(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                x(w(R, Ka("push", a)), c);
                return ha(Aa(null),
                    b).length === a.length ? null : b
            }

            function Ip(a, c, b) {
                return z(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (O(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Ji[d[0]] || Ji[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function ve(a, c) {
                try {
                    var b = c.localStorage.getItem(a);
                    return b && qd(we(b))
                } catch (d) {}
                return null
            }

            function we(a) {
                for (var c = [], b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b);
                    128 > d ? c.push(d) :
                        (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                }
                return c
            }

            function qd(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g &
                        63
                    ])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = G("", e);
                return c ? Ki(e, !0) : e
            }

            function Sh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = Ki(b)); b.length % 4;) b += "=";
                do {
                    var f = lc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        g = lc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        h = lc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        k = lc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l =
                        f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function Ki(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return Lp[b] || b
                }) : ""
            }

            function Mp(a) {
                try {
                    var c = Qa(a) ? a : [];
                    return G(",", [a.name, a.description, w(Ga, Ea, Ub(Np), xe(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function Np(a) {
                return G(",", [a.description, a.suffixes, a.type])
            }

            function Op(a, c) {
                for (var b = "", d = 0; d < c; d +=
                    1) b += a;
                return b
            }

            function Pp(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                aa(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g));
                Y(h) || h.Rb(f, "" + k);
                return k
            }

            function Qp(a, c) {
                if (xd(a)) {
                    var b = tb(a).match(Rp);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function ye(a, c, b) {
                return function(d) {
                    var e, f, g = Ja(c, b);
                    g && Sp(a, d, c) && (g = H(g.params, g), (d = Pf({
                        event: a,
                        Ia: "products",
                        wa: mc,
                        Hh: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function Sp(a, c, b) {
                var d = !1,
                    e = "";
                if (!ia(c)) return Ib(b, "", "ecomeo"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        M(f) &&
                            f.length ? (d = Li(function(g) {
                                return ia(g) && (ea(g.id) || Vb(b, g.id) || ea(g.name))
                            }, f)) || (e = "ecomgi") : e = "ecomgei";
                        break;
                    case "purchase":
                        Vb(b, c.id) || ea(c.id) ? d = !0 : e = "ecompi"
                }
                Ib(b, "", e);
                return d
            }

            function yd(a, c) {
                return {
                    O: function(b, d) {
                        Qf(b) ? d() : na(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.J = A(b.J || {}, e);
                            d()
                        })
                    }
                }
            }

            function Tp(a, c) {
                var b = n(c, "origin"),
                    d;
                if (d = b) d = Up.test(b) || Vp.test(b);
                d && (b = Kb(a, c.data), "appendremote" === n(b, "action") && Wp(a, c, b))
            }

            function Mi(a, c, b) {
                var d, e, f;
                void 0 ===
                    b && (b = "");
                var g = J(a),
                    h = {};
                h.getCachedTags = Rf;
                h.form = (d = {}, d.closest = u(a, Ni), d.select = Xp, d.getData = u(a, Oi), d);
                h.button = (e = {}, e.closest = u(a, Pi), e.select = Qi, e.getData = u(a, Ri), e);
                h.status = (f = {}, f.checkStatus = D([a, Da(b)], Yp), f);
                g.D("_u", h);
                c && Mc(a, {
                    src: c
                })
            }

            function Si(a, c) {
                var b = c.lang;
                b = void 0 === b ? "" : b;
                var d = c.appVersion;
                d = void 0 === d ? "" : d;
                var e = c.fileId;
                e = void 0 === e ? "" : e;
                var f = c.beta;
                f = void 0 === f ? !1 : f;
                d = G(".", ha(oa(Vb)(a), z(w(R, Da), d.split("."))));
                if (!I(e, Zp) || !I(b, ["ru", "en", "tr"])) return "";
                b = (f ? "https://s3.mds.yandex.net/internal-metrika-betas" :
                    "https://yastatic.net/s3/metrika") + (d ? "/" + d : "") + "/form-selector/" + (e + "_" + b + ".js");
                return Ti(b) ? b : ""
            }

            function $p(a, c) {
                var b = sb(a);
                if (b) {
                    var d = b("div"),
                        e = gc(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            Mc(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                            mode: "open"
                        }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer = f)
                    }
                }
            }

            function Yp(a) {
                var c, b = Ui(a);
                a = J(a).C("getCounters", zd)();
                a = z(V("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && I(b, a), c
            }

            function Vi(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ?
                        ge(a, c, Ka("push", e), d) : va(e, Wi(a, c, d)));
                    x(b, e)
                }
            }

            function ge(a, c, b, d, e, f) {
                function g(k) {
                    return O(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                void 0 === f && (f = !1);
                var h = g(c);
                if (O(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && b(c), !Lf(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: g
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Wi(a, c, b) {
                var d = [],
                    e = w(R, Ka("push", d));
                O(b) ? (b = b(c), (aa(b) || b === a.NodeFilter.FILTER_ACCEPT) &&
                    e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Wi(a, c[b]);
                        x(e, g)
                    }
                }
                return d
            }

            function Xi(a, c, b) {
                var d;
                a = [Yi(a, c, function(e) {
                    d = e;
                    e.ya.F(b)
                }), function() {
                    d && d.unsubscribe()
                }];
                return D([ze, a], x)
            }

            function aq(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h = n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = ia(h) && ea(k) ? Pf(k, h) : void 0;
                    if (!h) a: {
                        var l = d;!M(d) && Vb(a, Qa(d)) && (l = Na(l));
                        if (M(l) && (h = l[0], k = l[1], l = l[2], ea(k) && ia(l) && "event" === h)) {
                            h = Pf(k, l);
                            break a
                        }
                        h = void 0
                    }
                    if (d =
                        h || bq(d)) ub(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
                }
            }

            function bq(a) {
                var c = n(a, "ecommerce");
                if (ia(c)) return a = ha(tc(cq), fa(c)), a = N(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a), 0 === fa(a).length ? void 0 : a
            }

            function Pf(a, c) {
                var b, d, e = ea(a) ? dq[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.Ia,
                        h = e.Hh,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = z(u(e.wa, eq), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = fa(l);
                        g && 1 < b.length && (m[f].actionField = zb(function(p, q) {
                            if (q ===
                                k) return p;
                            if ("currency" === q) return m.currencyCode = l.currency, p;
                            p[fq[q] || Sf[q] || q] = l[q];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function eq(a, c) {
                var b = {};
                x(function(d) {
                    var e = a[d] || Sf[d] || d; - 1 !== nb(d, "item_category") ? (e = Sf.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, fa(c));
                return b
            }

            function gq(a, c, b) {
                var d, e, f, g = n(b, "target");
                if (g && (g = Pi(a, g), g = Ri(a, g))) {
                    g = "?" + Ec(g);
                    var h = nc(a, c, "gbn", (d = {}, d.id = c.id, d.query = g, d));
                    b = n(b, "isTrusted");
                    b = aa(b) ? void 0 : (e = {}, e.__ym = (f = {}, f.ite = rb(b), f), e);
                    Ae(a, c, "btn",
                        h).reachGoal(g, b)
                }
            }

            function df(a, c, b, d) {
                return function() {
                    if (Ja(a, c)) {
                        var e = Na(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function hq(a, c, b, d) {
                var e = n(d, "target");
                e && (d = n(d, "isTrusted"), (e = Wb("button,input", a, e)) && "submit" === e.type && (e = Ni(a, e))) && (b.push(e), T(a, D([!1, a, c, b, e, d], Zi), 300))
            }

            function Zi(a, c, b, d, e, f) {
                var g, h, k, l = Nb(c)(e, d),
                    m = -1 !== l;
                if (a || m) m && d.splice(l, 1), a = Oi(c, e), a = "?" + Ec(a), d = D([c, b, "fg", (g = {}, g.id = b.id, g.query = a, g)], $i), f = aa(f) ? void 0 : (h = {}, h.__ym = (k = {}, k.ite = rb(f), k), h), Ae(c, b, "form",
                    d).reachGoal(a, f)
            }

            function $i(a, c, b, d) {
                return iq(a, c).then(w(D([nc(a, c, b, d), F], re), ua))
            }

            function Oi(a, c, b) {
                return aj(a, c, ["i", "n", "p"], void 0, b)
            }

            function jq(a, c) {
                var b;
                a((b = {}, b.clickmap = Y(c) ? !0 : c, b))
            }

            function kq(a, c, b, d, e) {
                var f, g = "clmap/" + e.id;
                c = (f = {}, f["page-url"] = c, f["pointer-click"] = b, f);
                f = {
                    K: Ha(),
                    J: c,
                    ma: {
                        za: g
                    }
                };
                d(f, e)["catch"](C(a, "c.s.c"))
            }

            function lq(a, c, b, d, e) {
                if (ob(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = La(c.element);
                if (e && !e(c.element, a) || I(c.button, [2, 3]) && "A" !== a || Va(Aa(a),
                        d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (mq(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function nq(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function oq(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ?
                    1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function bj(a, c) {
                var b = gc(a),
                    d = Tf(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function Be(a, c) {
                return {
                    O: function(b, d) {
                        var e, f = b.K,
                            g = b.Ha,
                            h = b.J,
                            k = b.Z;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ja(a);
                            f.Rb("rqnl", 1);
                            for (var m = Ad(a), p = 1; m[p];) p += 1;
                            b.M || (b.M = {});
                            b.M.Ob = p;
                            m[p] = (e = {}, e.protocol = ta.Qa, e.host = kc, e.resource = b.ma.za, e.postParams = k.ca, e.time = l(da), e.counterType = c.ba, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Dc(a),
                                e);
                            g && (m[p].telemetry = g.l());
                            Uf(a)
                        }
                        d()
                    },
                    Ba: function(b, d) {
                        cj(a, b);
                        d()
                    }
                }
            }

            function cj(a, c) {
                var b = Ad(a);
                c.K && !Wa(b) && c.M && (delete b[c.M.Ob], Uf(a))
            }

            function Uf(a) {
                var c = Ad(a);
                Ta(a).D("retryReqs", c)
            }

            function pq(a, c) {
                if (a.Yi()) {
                    var b = dj(c);
                    if (b && !jc("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Rg,
                            f = a.cb,
                            g = a.sender,
                            h = a.fh,
                            k = f.pc,
                            l = b.href;
                        var m = $a(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? $a(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        var p = n(c,
                            "isTrusted");
                        if (jc("ym-external-link", b)) Ce(d, f, {
                            url: l,
                            lb: !0,
                            title: m,
                            zc: p,
                            sender: g
                        });
                        else {
                            k = k ? yc(d, k).hostname : U(d).hostname;
                            h = RegExp("\\.(" + G("|", z(qq, h)) + ")$", "i");
                            var q = b.protocol + "//" + b.hostname + b.pathname;
                            h = ej.test(q) || ej.test(l) || h.test(l) || h.test(q);
                            b = b.hostname;
                            De(k) === De(b) ? h ? Ce(d, f, {
                                url: l,
                                xc: !0,
                                zc: p,
                                title: m,
                                sender: g
                            }) : m && e.D("il", $a(m).slice(0, 100)) : l && rq.test(l) || Ce(d, f, {
                                url: l,
                                Bc: !0,
                                lb: !0,
                                xc: h,
                                zc: p,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function Ce(a, c, b) {
                var d, e, f, g, h = Ha();
                void 0 !== b.zc && h.D("ite", rb(b.zc));
                b.xc && h.D("dl", 1);
                b.lb && h.D("ln", 1);
                var k = b.ng || {};
                h = {
                    K: h,
                    M: {
                        title: k.title || b.title,
                        Bc: !!b.Bc,
                        N: k.params
                    },
                    J: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.pc || U(a).href, d)
                };
                d = "Link";
                b.xc ? d = b.lb ? "Ext link - File" : "File" : b.lb && (d = "Ext link");
                ub(a, (e = {}, e.counterKey = K(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.lb ? "external" : "internal") + " url: " + b.url, f), e));
                c = b.sender(h, c).then(nc(a, c, "lcl", (g = {}, g.prefix = d, g.id = c.id, g.url = b.url, g), b.ng));
                return Uc(a, "cl.p.s", c, k.callback || F, k.ctx)
            }

            function sq(a,
                c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function tq(a, c, b, d) {
                var e = U(a),
                    f = e.hostname;
                e = e.href;
                if (c = Bd(c).url) a = yc(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function fj(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function uq(a, c, b, d) {
                var e;
                if (a = Ja(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    I(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b),
                        d.parent && c.Xf((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function Hh(a, c, b) {
                void 0 === b && (b = R);
                var d = od(a);
                b(d);
                var e = u(d, vq);
                Ee(a, c, function(f) {
                    f.ya.F(e)
                });
                return d
            }

            function vq(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.aa(n(b, "type"), b)
            }

            function Ee(a, c, b, d) {
                void 0 === b && (b = F);
                void 0 === d && (d = !1);
                var e = gj(a);
                if (c && O(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = Na(arguments),
                            h = g[0];
                        d && e.aa(h);
                        g = f.apply(c, g);
                        d || e.aa(h);
                        return g
                    };
                    a = {
                        ya: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    x(e.aa, c);
                    return a
                }
            }

            function ae(a) {
                a =
                    J(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c
            }

            function Zm(a, c) {
                var b, d;
                I(c, z(V("ymetrikaEvent.type"), a)) || a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function hj(a, c) {
                var b = md(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = D([a, b.pe], wq),
                    g = u(f, xq);
                b.$.F(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).F(["parentConnect"], function(h) {
                    g(e, b.Ea[h[1].counterId])
                });
                return {
                    $: b.$,
                    Nj: function(h, k) {
                        return new L(function(l, m) {
                            b.pe(h, k, function(p, q) {
                                l([p, q])
                            });
                            T(a, u(Oa(), m), 5100, "is.o")
                        })
                    },
                    Wf: function(h) {
                        var k = {
                            Zf: [],
                            Ce: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    Xf: function(h) {
                        var k = {
                            Zf: [],
                            Ce: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Ea, k, h)
                    }
                }
            }

            function xq(a, c, b) {
                c = ha(function(d) {
                    return !I(b.info.counterId, d.Ce)
                }, c);
                x(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function wq(a, c, b, d, e) {
                return (new L(function(f, g) {
                    var h = fa(b),
                        k = w(d.resolve || R, Tc(f)),
                        l = w(d.reject || R, Tc(g));
                    d.resolve = k;
                    d.reject = l;
                    x(function(m) {
                        var p;
                        d.Ce.push(+m);
                        var q = b[m],
                            r = T(a, u(Oa(), l),
                                5100, "is.m");
                        c(q.window, A(e, (p = {}, p.toCounter = Da(m), p)), function(t, y) {
                            la(a, r);
                            d.Zf.push(m);
                            d.resolve && d.resolve(y)
                        })
                    }, h)
                }))["catch"](C(a, "if.b"))
            }

            function yq(a) {
                var c = F,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    O(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    O(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Tg: b,
                        Wb: c,
                        N: 1 === d.length ? a[0] : le(d)
                    }
                }
            }

            function Uc(a, c, b, d, e) {
                var f = D([a, d, e], Vf);
                return b.then(f, function(g) {
                    f();
                    Qc(a, c, g)
                })
            }

            function Wf(a, c) {
                return {
                    O: function(b, d) {
                        var e,
                            f, g = (b.M || {}).N,
                            h = b.Z;
                        h = void 0 === h ? {} : h;
                        if (g && (ij(c, g), !h.ca && b.K && b.J)) {
                            var k = Lb(a, g),
                                l = jj(a),
                                m = b.K.C("pv");
                            k && !b.J.nohit && (ub(a, (e = {}, e.counterKey = K(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > ta.ug ? l.push([b.K, g]) : b.J["site-info"] = k : (h.ca = k, b.Z = h, b.Kc || (b.Kc = {}), b.Kc.ki = !0))
                        }
                        d()
                    },
                    Ba: function(b, d) {
                        var e = jj(a),
                            f = Ja(a, c),
                            g = f && f.params;
                        g && (f = ha(w(Cd, Aa(b.K)), e), x(function(h) {
                            g(h[1]);
                            h = Fe(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function Ge(a, c) {
                return function(b) {
                    Xf(a, c, b)
                }
            }

            function zq(a, c) {
                Yf(a)(function(b) {
                    delete b[c]
                })
            }

            function Xf(a, c, b) {
                Yf(a)(function(d) {
                    d[c] = A(d[c] || {}, b)
                })
            }

            function Yf(a) {
                a = J(a);
                var c = a.C("dsjf") || Ba({});
                a.Ga("dsjf", c);
                return c
            }

            function Aq(a, c) {
                return function(b) {
                    var d, e, f = Ja(a, c);
                    if (f) {
                        var g = oc(a, K(c));
                        ia(b) ? Qa(fa(b)) ? (b = kj(a, b)) && Qa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : g.log("fpeo") : g.log("fpno")
                    }
                }
            }

            function kj(a, c) {
                return N(function(b, d) {
                    var e = d[0],
                        f = d[1],
                        g = f;
                    f = ia(f);
                    if (!f && (Vb(a, g) && (g = "" + g), !ea(g))) return b;
                    g = f ? kj(a, g) : g;
                    Qa(g) && b.push([e,
                        g
                    ]);
                    return b
                }, [], ya(c))
            }

            function lj(a, c, b) {
                void 0 === b && (b = 0);
                c = ya(c);
                c = N(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = ia(g);
                    if (!h && (Vb(a, g) && (g = "" + g), !ea(g))) return d;
                    if (h) g = lj(a, g, b + 1);
                    else if (!b && I(f, Bq)) g = L.resolve(g);
                    else {
                        "phone_number" === f ? g = Qh(a, g) : "email" === f && (g = Ph(g));
                        if (!g) return d;
                        g = mj(a, g)
                    }
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return L.all(c)
            }

            function Ph(a) {
                var c = $a(a).replace(/^\++/gm, "").toLowerCase(),
                    b = c.lastIndexOf("@");
                if (-1 === b) return Zf(c);
                a = c.substr(0, b);
                b = c.substr(b + 1);
                if (!b || !Cq(a)) return Zf(c);
                b = b.replace("googlemail.com", "gmail.com");
                nj(b) && (b = "yandex.ru");
                "yandex.ru" === b ? a = a.replace($f, "-") : "gmail.com" === b && (a = a.replace($f, ""));
                c = nb(a, "+"); - 1 !== c && (a = a.slice(0, c));
                return Zf(a + "@" + b)
            }

            function Zf(a) {
                var c = Qa(a);
                return 5 > c || 100 < c ? void 0 : a
            }

            function Cq(a) {
                return 1 > a.length || 64 < a.length ? !1 : Li(function(c) {
                    if (1 > c.length) c = !1;
                    else if ('"' === c[0] && '"' === c[c.length - 1] && 2 < c.length) a: {
                        for (var b = 1; b + 2 < c.length; b += 1) {
                            var d = c.charCodeAt(b);
                            if (32 > d || 34 === d || 126 < d) {
                                c = !1;
                                break a
                            }
                            if (92 ===
                                d) {
                                if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) {
                                    c = !1;
                                    break a
                                }
                                b += 1
                            }
                        }
                        c = !0
                    }
                    else c = Dq.test(c) ? !0 : !1;
                    return c
                }, a.split("."))
            }

            function Qh(a, c) {
                var b = fe(c),
                    d = Qa(b);
                if (!(Eq(c) || Qa(c) - d > d || 10 > Qa(b) || 16 < Qa(b))) {
                    d = b[0];
                    var e = c[1];
                    if ("+" !== c[0] || e === d) return d = Fq(c), 10 > b.length || 13 < b.length || d.startsWith("+8") ? $a(c) : "8" === d[0] ? "7" + b.slice(1) : "+" === d[0] || Vb(a, +d[0]) ? b : "7" + b
                }
            }

            function mj(a, c) {
                return new L(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result") || "";
                            var k = nb(h, ","); - 1 !== k ? b(h.substring(k + 1)) : d(Pa("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function bm(a, c, b, d) {
                var e = oj[b];
                return e ? function() {
                    var f = Na(arguments);
                    f = d.apply(void 0, f);
                    var g = J(a);
                    g.Ga("mt", {});
                    g = g.C("mt");
                    var h = g[e];
                    g[e] = h ? h + 1 : 1;
                    return f
                } : d
            }

            function Ja(a, c) {
                var b = J(a).C("counters", {}),
                    d = K(c);
                return b[d]
            }

            function nc(a, c, b, d, e) {
                return D([a, K(c), e ? [b + ".p", e] : b, d], Ib)
            }

            function Ib(a, c, b, d) {
                oc(a,
                    c).log(b, d)
            }

            function Gq(a, c) {
                function b(d, e, f) {
                    var g, h;
                    ub(a, (g = {}, g.name = "log", g.counterKey = c, g.data = (h = {}, h.args = M(e) ? e : [e], h.type = d, h.variables = f, h), g))
                }
                return {
                    log: u("log", b),
                    error: u("error", b),
                    warn: u("warn", b)
                }
            }

            function na(a, c) {
                var b = K(a);
                return pj()(Hq(b)).then(c)
            }

            function Iq(a, c, b) {
                var d, e;
                c = K(c);
                var f = ag(a);
                b = A({
                    hh: f(da)
                }, b);
                ub(a, (d = {}, d.counterKey = c, d.name = "counterSettings", d.data = (e = {}, e.settings = b, e), d));
                return pj()(Jq(c, b))
            }

            function Jq(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.Kf = !0, d.Jf(c)) :
                        b[a] = {
                            promise: L.resolve(c),
                            Kf: !0,
                            Jf: F
                        }
                }
            }

            function bg(a) {
                return !vd(a) && cg(a)
            }

            function Dd(a) {
                return sb(a) ? u(a, Kq) : !1
            }

            function Bb(a) {
                if (a.fetch) {
                    var c = n(a, "AbortController");
                    return D([a, c ? new c : void 0], Lq)
                }
                return !1
            }

            function cg(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Fa("sendBeacon", c) ? D([a, H(c, n(a, "navigator"))], Mq) : !1
            }

            function Mq(a, c, b, d) {
                return new L(function(e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = A(d.$a, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + Ec(h) + (d.ca ? "&" + d.ca : "");
                    return 2E3 <
                        g.length ? f(Oa("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function Kq(a, c, b) {
                return new L(function(d, e) {
                    var f, g, h = "_ymjsp" + Xa(a),
                        k = A((f = {}, f.callback = h, f), b.$a),
                        l = D([a, h], Nq);
                    a[h] = function(p) {
                        try {
                            l(), xc(m), d(p)
                        } catch (q) {
                            e(q)
                        }
                    };
                    k.wmode = "5";
                    var m = Mc(a, (g = {}, g.src = qj(c, b, k), g));
                    if (!m) return l(), e(Pa("jp.s"));
                    f = u(m, xc);
                    f = w(f, u(Oa(b.ha), e));
                    g = Ed(a, f, b.Na || 1E4);
                    g = D([a, g], la);
                    m.onload = g;
                    m.onerror = w(l, g, f)
                })
            }

            function Nq(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Vc(a) {
                var c = sb(a);
                return c ? D([a, c], Oq) : !1
            }

            function Oq(a,
                c, b, d) {
                return new L(function(e, f) {
                    var g = gc(a),
                        h = c("img"),
                        k = w(u(h, xc), u(Oa(d.ha), f)),
                        l = Ed(a, k, d.Na || 3E3);
                    h.onerror = k;
                    h.onload = w(u(h, xc), u(null, e), D([a, l], la));
                    k = A({}, d.$a);
                    delete k.wmode;
                    h.src = qj(b, d, k);
                    xd(a) && (A(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function Lq(a, c, b, d) {
                var e, f = A(d.yb ? (e = {}, e.wmode = "7", e) : {}, d.$a),
                    g = c || {
                        signal: void 0,
                        abort: F
                    },
                    h = a.fetch(b + "?" + Ec(f), {
                        method: d.Wc,
                        body: d.ca,
                        credentials: !1 === d.Je ? "omit" : "include",
                        headers: d.Za,
                        signal: g.signal
                    }),
                    k = u(d.ha, Oa);
                return new L(function(l, m) {
                    d.Na && Ed(a, function() {
                        try {
                            g.abort()
                        } catch (p) {}
                        m(k())
                    }, d.Na);
                    return h.then(function(p) {
                        if (!p.ok) {
                            if (d.me) return Sa(rj(p));
                            Xd(d.ha)
                        }
                        return d.me ? p.text() : d.yb ? p.json() : null
                    }).then(l)["catch"](u(k(), m))
                })
            }

            function Cb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (Pq.test(a.location.host) && a.opera && O(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? u(a, Qq) :
                    !1
            }

            function Qq(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.ca,
                    g = A(b.yb ? (d = {}, d.wmode = "7", d) : {}, b.$a);
                return new L(function(h, k) {
                    e.open(b.Wc || "GET", c + "?" + Ec(g), !0);
                    e.withCredentials = !1 !== b.Je;
                    b.Na && (e.timeout = b.Na);
                    Rq(ya, Ub(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.Za);
                    var l = D([a, e, Oa(b.ha), b.yb, b.me, h, k], Sq);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function Sq(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(rj(c));
                    else {
                        e = null;
                        if (d) try {
                            (e =
                                Kb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function qj(a, c, b) {
                (b = Ec(b)) && (a += "?" + b);
                c.ca && (a += (b ? "&" : "?") + c.ca);
                return a
            }

            function Tq(a, c, b) {
                var d = z(Cd, Xb[c] || Yb);
                x(function(e) {
                    return d.unshift(e)
                }, He);
                return z(w(Lc([a, b]), ua), d)
            }

            function sj(a) {
                return {
                    O: function(c, b) {
                        var d = c.J;
                        if (!c.K || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = tj(a, e) : delete d["page-ref"];
                        d["page-url"] = tj(a, f).slice(0, ta.wg);
                        return b()
                    }
                }
            }

            function tj(a, c) {
                var b = U(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!ea(c) || Y(c)) return d;
                b = c.replace(uj, "");
                if (-1 !== b.search(Uq)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = nb(d, e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, G("/", d);
                return ""
            }

            function Ie(a, c) {
                return {
                    O: function(b, d) {
                        var e = vj(c);
                        e = D([b, e, d], Vq);
                        Wq(a, c, e)
                    },
                    Ba: function(b, d) {
                        var e = b.K,
                            f = vj(c);
                        if (e) {
                            var g = f.sa;
                            f.Ze === e && g && (x(ua, g), f.sa = null)
                        }
                        d()
                    }
                }
            }

            function Vq(a, c, b) {
                var d = a.K;
                d ? Qf(a) ? (c.Ze = d, b()) : c.sa ? c.sa.push(b) : b() : b()
            }

            function Qf(a) {
                return (a = a.K) && a.C("pv") && !a.C("ar")
            }

            function Wq(a, c, b) {
                if (Je(a) && qb(a)) {
                    var d = Xq(c);
                    if (!d.Wh) {
                        d.Wh = !0;
                        c = md(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.sa = [];
                        var e = function() {
                            d.sa && (x(ua, d.sa), d.sa = null)
                        };
                        T(a, e, 3E3);
                        c.$.F(["initToChild"], e)
                    }
                    d.sa ? d.sa.push(b) : b()
                } else b()
            }

            function wj(a, c) {
                return {
                    O: function(b, d) {
                        var e = b.K;
                        if (e && (!c || c.Vf)) {
                            var f = a.document.title;
                            b.M && b.M.title && (f = b.M.title);
                            var g = Fc("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, ta.vg);
                            e.D("t", f)
                        }
                        d()
                    }
                }
            }

            function Ob(a) {
                return function(c, b) {
                    return {
                        O: function(d, e) {
                            var f = d.K,
                                g = d.J;
                            f && g && x(function(h) {
                                var k = Fd[h],
                                    l = "bi",
                                    m = f;
                                k || (k = dg[h], l = "tel", m = ce(d));
                                k && (k = B(l + ":" + h, k, null)(c, b, d), m.Rb(h, k))
                            }, a || Yq());
                            e()
                        }
                    }
                }
            }

            function Zq(a, c) {
                var b = Gd(a);
                c.F(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).F(["initToChild"], function(d) {
                    var e = d[0];
                    d =
                        d[1];
                    e.source === a.parent && c.aa("parentConnect", [e, d])
                }).F(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.Ea[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function $q(a) {
                if (Fa("MutationObserver", a.MutationObserver)) {
                    var c = Gd(a).children,
                        b = new a.MutationObserver(function() {
                            x(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, fa(c))
                        });
                    vc(a)(Za(F, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function ar(a, c) {
                return function(b, d) {
                    var e, f = {
                        ec: ja(a)(da),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.ec = Da(b[0]), f.key = parseFloat(b[1]), f.dir = Da(b[2]));
                    A(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = G(":", ["__yminfo", f.ec, f.key, f.dir]), e);
                    return {
                        meta: f,
                        bg: Lb(a, g) || ""
                    }
                }
            }

            function vc(a, c) {
                function b(e) {
                    n(c, d) ? e() : T(a, u(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Ba(function(e, f) {
                    b(f)
                })
            }

            function Hd(a, c) {
                var b = c.Td,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Sc(a),
                    f = Ta(a),
                    g = ja(a)(eg),
                    h = xj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.C("d");
                yj(a, c);
                var m = !1;
                !h && k && (h =
                    k, m = !0);
                if (!h) h = G("", [g, Xa(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 < g - Da(l)) m = !0;
                m && !c.Ua && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h
            }

            function br(a, c) {
                return !c.Ua && yj(a, c)
            }

            function xj(a, c) {
                var b = Ta(a),
                    d = Sc(a),
                    e = c.Td || "uid";
                return [b.C(e), d.C(e)]
            }

            function Dc(a) {
                var c = J(a),
                    b = c.C("hitId");
                b || (b = Xa(a), c.D("hitId", b));
                return b
            }

            function Ri(a, c, b) {
                var d = La(c);
                return d && aj(a, c, Ea(["p", cr[d], "c"]), Qi, b)
            }

            function Pi(a, c) {
                var b = Wb(fg, a, c);
                if (!b) {
                    var d = Wb("div", a, c);
                    d && (hb(fg + ",div", d).length ||
                        (b = d))
                }
                return b
            }

            function aj(a, c, b, d, e) {
                return N(function(f, g) {
                    var h = null;
                    g in zj ? h = c.getAttribute && c.getAttribute(zj[g]) : g in Wc && (h = "p" === g ? Wc[g](a, c, e) : "c" === g ? Wc[g](a, c, d) : Wc[g](a, c));
                    h && (h = h.slice(0, Aj[g] || 100), f[g] = gg[g] ? "" + hc(h) : h);
                    return f
                }, {}, b)
            }

            function ii(a, c, b) {
                if (ld(a)) return Ga(b.querySelectorAll(c));
                var d = Bj(c.split(" "), b);
                return ha(function(e, f) {
                    return Nb(a)(e, d) === f
                }, d)
            }

            function Bj(a, c) {
                var b = va([], a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? wc(u(b, Bj),
                    Ga(d)) : Ga(d)
            }

            function ec(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = hb(a, c);
                return b && b.length ? b[0] : null
            }

            function hb(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? Ga(b) : []
            }

            function dj(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function Mc(a, c) {
                var b = sb(a);
                if (b) {
                    var d = a.document,
                        e = b("script");
                    e.src = c.src;
                    e.type = c.type || "text/javascript";
                    e.charset = c.charset || "utf-8";
                    e.async = c.async || !0;
                    try {
                        var f = d.getElementsByTagName("head")[0];
                        if (!f) {
                            var g = d.getElementsByTagName("html")[0];
                            f = b("head");
                            g && g.appendChild(f)
                        }
                        f.insertBefore(e, f.firstChild);
                        return e
                    } catch (h) {}
                }
            }

            function di(a, c) {
                var b = Cj(a);
                I(c, b.qb) && (b.qb = ha(w(Aa(c), Gc), b.qb), b.qb.length || (xc(b.gb), b.gb = null))
            }

            function ci(a, c, b) {
                var d = Cj(c);
                I(b, d.qb) || d.qb.push(b);
                if (Wa(d.gb)) {
                    b = sb(a);
                    if (!b) return null;
                    b = b("iframe");
                    A(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = gc(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.gb = b
                } else(a = n(d.gb, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.gb
            }

            function dr(a, c) {
                var b = M(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = G(", ", z(function(e) {
                        return "." + e
                    }, b));
                    return Ga(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return wc(w(Ka("getElementsByClassName",
                    c), Ga), b);
                d = c.getElementsByTagName("*");
                b = "(" + G("|", b) + ")";
                return ha(u(b, jc), Ga(d))
            }

            function pf(a, c, b) {
                for (var d = "", e = Rf(), f = La(c) || "*"; c && c.parentNode && !I(f, ["BODY", "HTML"]);) d += e[f] || "*", d += Dj(a, c, b) || "", c = c.parentElement, f = La(c) || "*";
                return $a(d, 128)
            }

            function Dj(a, c, b) {
                if (a = Ke(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function Ke(a, c) {
                var b = n(a, "document");
                return c && c !== b.documentElement ?
                    c === Hc(a) ? b.documentElement : n(c, "parentNode") : null
            }

            function If(a, c) {
                var b = hg(a, c),
                    d = b.left;
                b = b.top;
                var e = Le(a, c);
                return [d, b, e[0], e[1]]
            }

            function Le(a, c) {
                var b = n(a, "document");
                if (c === Hc(a) || c === b.documentElement) {
                    b = gc(a);
                    var d = Oc(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = Nc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function hg(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = La(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === Hc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = Nc(b)) return b = Tf(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function Wb(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && Fa("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = pi(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (ld(c)) {
                    for (a = Ga((c.document ||
                            c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Nb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function ld(a) {
                return !(!Fa("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function Ch(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.w;
                b = b.h;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            }

            function Ej(a) {
                return Me(a) && !Va(Aa(a.type), er) ? Ne(a) ? !a.checked :
                    !a.value : fr(a) ? !a.value : gr(a) ? 0 > a.selectedIndex : !0
            }

            function La(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (ea(c)) return c;
                    c = a.tagName;
                    if (ea(c)) return c
                } catch (b) {}
            }

            function Fj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Nb(a)(c, Ga(b))
            }

            function hr(a, c, b) {
                b = Fc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Fa("(Event|Object|constructor)", e) || ig(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = Fc("createEvent", n(a, "document"))) && O(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d &&
                            d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function Nc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Af && c.Af & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Tf(a) {
                var c = Hc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function Oc(a) {
                var c = $d(a);
                if (c) {
                    var b =
                        c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = gc(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function $d(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return aa(c) || aa(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function gc(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Hc(a) || b
            }

            function Hc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function jc(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function Ic(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function xc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Jb(a) {
                return a ? a.innerText || "" : ""
            }

            function Lf(a) {
                if (aa(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function Gj(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d =
                    "" + b + c;
                d && (d += "_");
                return {
                    Ld: ir(a),
                    C: function(e, f) {
                        var g = Hj(a, "" + d + e);
                        return Wa(g) && !Y(f) ? f : g
                    },
                    D: function(e, f) {
                        Ij(a, "" + d + e, f);
                        return this
                    },
                    fc: function(e) {
                        Jj(a, "" + d + e);
                        return this
                    }
                }
            }

            function Ij(a, c, b) {
                var d = jg(a);
                a = Lb(a, b);
                if (!Wa(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function Hj(a, c) {
                var b = jg(a);
                try {
                    return Kb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function Jj(a, c) {
                var b = jg(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function jg(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function Lb(a, c, b) {
                try {
                    return a.JSON.stringify(c,
                        null, b)
                } catch (d) {
                    return null
                }
            }

            function ce(a, c, b) {
                void 0 === b && (b = null);
                a.Ha || (a.Ha = qf());
                c && a.Ha.Rb(c, b);
                return a.Ha
            }

            function Oe(a) {
                return {
                    O: function(c, b) {
                        var d = a.document,
                            e = c.K;
                        if (e && kg(a)) {
                            var f = ka(a),
                                g = function(h) {
                                    kg(a) || (f.vb(d, Kj, g), b());
                                    return h
                                };
                            f.F(d, Kj, g);
                            e.D("pr", "1")
                        } else b()
                    }
                }
            }

            function Id(a) {
                return function(c, b, d) {
                    return function(e, f) {
                        var g = z(w(Cd, Lc([c, f]), ua), Lj[a] || []);
                        g = va(g, d);
                        return Mj(c, b, g)(e)
                    }
                }
            }

            function Mj(a, c, b) {
                var d = Pb(a, c);
                return function(e) {
                    return Nj(b, e, !0).then(function() {
                        var f =
                            e.ma || {},
                            g = f.Oh,
                            h = void 0 === g ? "" : g;
                        g = f.za;
                        var k = void 0 === g ? "" : g;
                        f = f.Ph;
                        f = z(function(l) {
                            return ta.Qa + "//" + ("" + h + l || kc) + "/" + k
                        }, void 0 === f ? [kc] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.Nc;
                        f = f.kg;
                        e.Hi = g;
                        e.Mj = f;
                        return Nj(b, e).then(u(g, R))
                    })
                }
            }

            function Pb(a, c) {
                return function(b, d) {
                    return Oj(a, c, d, b)
                }
            }

            function Oj(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = A({
                        ha: []
                    }, d.Z),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.Za && h.Za["Content-Type"] || !h.ca || (h.Za = A({}, h.Za, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded",
                    g)), h.ca = "site-info=" + me(h.ca));
                h.Wc = h.ca ? "POST" : "GET";
                h.$a = jr(a, d, l);
                h.za = (d.ma || {}).za;
                h.ha.push(l);
                A(d.Z, h);
                g = "" + m + (d.Kc && d.Kc.ki ? "/1" : "");
                var p = 0;
                p = kr(a, g, h);
                return k(g, h).then(function(q) {
                    var r = p,
                        t, y;
                    ub(a, (t = {}, t.name = "requestSuccess", t.data = (y = {}, y.body = q, y.requestId = r, y), t));
                    return {
                        Nc: q,
                        kg: e
                    }
                })["catch"](function(q) {
                    var r = p,
                        t, y;
                    ub(a, (t = {}, t.name = "requestFail", t.data = (y = {}, y.error = q, y.requestId = r, y), t));
                    r = f + 1 >= c.length;
                    t = e + 1 >= b.length;
                    r && t && Sa(q);
                    return Oj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
                })
            }

            function jr(a,
                c, b) {
                var d = A({}, c.J);
                a = ja(a);
                c.K && (d["browser-info"] = Ha(c.K.l()).D("st", a(eg)).Fa());
                !d.t && (c = c.Ha) && (c.D("ti", b), d.t = c.Fa());
                return d
            }

            function kr(a, c, b) {
                var d, e, f, g = Xa(a),
                    h = b.ha,
                    k = b.ca,
                    l = b.Za,
                    m = b.$a;
                b = b.Wc;
                ub(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders = l, f.rQuery = m, f.verb = b, f), e), d));
                return g
            }

            function Pj(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !aa(d) && Qj(a[c], b, d)
            }

            function Qj(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function Nj(a, c, b) {
                void 0 === b && (b = !1);
                return new L(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        O: f,
                        Ba: f
                    });
                    var h = fc(g, function(k, l) {
                        var m = b ? k.O : k.Ba;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(lr), e(p)
                        } else l()
                    });
                    h(Rj)
                })
            }

            function Rb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ka(a);
                    var e = "__ym__promise_" + Xa(a) + "_" + Xa(a),
                        f = F;
                    d = C(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation &&
                            g.stopPropagation(), c())
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*")
                } else T(a, c, 0, d)
            }

            function nh(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = fc(c, b);
                kd(a, c, d)(Za(C(a, e), F))
            }

            function kd(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Sj);
                lg = Infinity === b;
                return Ba(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(mr);
                        if (c(Jd)) return f(h), Tj(a);
                        lg ? (c(d(a, 1E4)), f(h), Tj(a)) : T(a, g, 100)
                    }
                    var h = [];
                    nr(g)
                })
            }

            function Tj(a) {
                if (mg.length) {
                    var c = mg.shift();
                    lg ? c() : T(a, c, 100)
                } else ng = !1
            }

            function nr(a) {
                ng ? mg.push(a) : (ng = !0, a())
            }

            function Bf(a) {
                return Ba(function(c, b) {
                    b(a)
                })
            }

            function up(a) {
                return Ba(function(c, b) {
                    a.then(b, c)
                })
            }

            function or(a) {
                var c = [],
                    b = 0;
                return Ba(function(d, e) {
                    x(function(f, g) {
                        f(Za(d, function(h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function tp(a) {
                var c = [],
                    b = !1;
                return Ba(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    x(function(g) {
                        g(Za(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Za(a, c) {
                return function(b) {
                    return b(a,
                        c)
                }
            }

            function fc(a, c) {
                return Ba({
                    Ta: a,
                    Pd: c || R,
                    we: !1,
                    va: 0
                })
            }

            function Rj(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.va += 1
                    }
                    b = !1;
                    a.Pd(a.Ta[a.va], function() {
                        d()
                    });
                    b || (a.va += 1, d = u(a, Rj))
                }
                for (var b = !0; !Jd(a) && b;) c()
            }

            function Sj(a, c) {
                return function(b) {
                    var d = ja(a),
                        e = d(da);
                    return Uj(function(f, g) {
                        d(da) - e >= c && g(Vj)
                    })(b)
                }
            }

            function og(a, c) {
                return function(b) {
                    var d = ja(a),
                        e = d(da);
                    return pg(function(f) {
                        d(da) - e >= c && Vj(f)
                    })(b)
                }
            }

            function pg(a) {
                return function(c) {
                    for (var b; c.Ta.length && !Jd(c);) b = c.Ta.pop(), b = c.Pd(b, c.Ta), a(c);
                    return b
                }
            }

            function pr(a) {
                Jd(a) && Sa(Pa("i"));
                var c = a.Pd(a.Ta[a.va]);
                a.va += 1;
                return c
            }

            function mr(a) {
                a.we = !1
            }

            function Vj(a) {
                a.we = !0
            }

            function lr(a) {
                a.va = a.Ta.length
            }

            function Jd(a) {
                return a.we || a.Ta.length <= a.va
            }

            function Ab(a) {
                a = ja(a);
                return Math.round(a(Wj) / 50)
            }

            function Wj(a) {
                var c = a.Ic,
                    b = c[1];
                a = c[0] && b ? b() : da(a) - a.Qh;
                return Math.round(a)
            }

            function eg(a) {
                return Math.round(da(a) / 1E3)
            }

            function pb(a) {
                return Math.floor(da(a) / 1E3 / 60)
            }

            function da(a) {
                var c = a.Ee;
                return 0 !== c ? c : qg(a.l, a.Ic)
            }

            function ag(a) {
                var c =
                    ka(a),
                    b = Xj(a),
                    d = {
                        l: a,
                        Ee: 0,
                        Ic: b,
                        Qh: qg(a, b)
                    },
                    e = b[1];
                b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                    0 === d.Ee && (d.Ee = qg(a, d.Ic))
                });
                return Ba(d)
            }

            function qr(a) {
                return (10 > a ? "0" : "") + a
            }

            function rr(a, c) {
                return a.clearInterval(c)
            }

            function sr(a, c, b, d) {
                return a.setInterval(C(a, "i.err." + (d || "def"), c), b)
            }

            function T(a, c, b, d) {
                return Ed(a, C(a, "d.err." + (d || "def"), c), b)
            }

            function od(a) {
                var c = {};
                return {
                    F: function(b, d) {
                        x(function(e) {
                            n(c, e) || (c[e] = gj(a));
                            c[e].F(d)
                        }, b);
                        return this
                    },
                    ga: function(b, d) {
                        x(function(e) {
                            n(c,
                                e) && c[e].ga(d)
                        }, b);
                        return this
                    },
                    aa: function(b, d) {
                        return n(c, b) ? C(a, "e." + d, c[b].aa)(d) : []
                    }
                }
            }

            function gj(a) {
                var c = [],
                    b = {};
                b.Fj = c;
                b.F = w(Ka("push", c), u(b, R));
                b.ga = w(db(Nb(a))(c), db(Ka("splice", c))(1), u(b, R));
                b.aa = w(R, db(ua), tr(c));
                return b
            }

            function Yj(a, c, b, d, e, f) {
                a = ur(a);
                var g = a.F,
                    h = a.ga;
                f = f ? h : g;
                if (c[f])
                    if (a.Ri)
                        if (e) c[f](b, d, e);
                        else c[f](b, d);
                else c[f]("on" + b, d)
            }

            function B(a, c, b) {
                return function() {
                    return C(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function C(a, c, b, d, e) {
                var f = b || Sa;
                return function() {
                    var g =
                        d;
                    try {
                        g = f.apply(e || null, arguments)
                    } catch (h) {
                        Qc(a, c, h)
                    }
                    return g
                }
            }

            function qg(a, c) {
                var b = c || Xj(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && O(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function Xj(a) {
                a = wd(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = H(b, a));
                return [c, b]
            }

            function wd(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function Qc(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Sa(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g,
                    "\\n") || "n.s.e.s") : d = "" + b);
                vr(d) || Va(u(d, gb), wr) || xr(d) && .1 <= a.Math.random() || x(w(R, Lc(["jserrs", d, c, e]), ua), Zj)
            }

            function Xd() {
                var a = Na(arguments);
                return Sa(Oa(a))
            }

            function Oa(a) {
                var c = "";
                M(a) ? c = G(".", a) : ea(a) && (c = a);
                return Pa("err.kn(" + ta.bb + ")" + c)
            }

            function rj(a) {
                return Pa("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
            }

            function yr(a) {
                this.message = a
            }

            function ub(a, c) {
                if (Pe(a)) {
                    var b = c.counterKey;
                    if (b) {
                        var d = b.split(":");
                        b = d[1];
                        d = rg(je(d[0]));
                        if ("1" === b || d) return
                    }
                    b =
                        zr(a);
                    1E3 === b.length && b.shift();
                    b.push(c)
                }
            }

            function qi(a, c, b) {
                sg(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = ak(a);
                (d = d && d.metrika_enabled) && bk(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function sg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (ri(a, qe, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + Ar(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(Br, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (ck(a)[c] = b)
                    } catch (l) {}
                }
            }

            function qe(a,
                c) {
                var b = ck(a);
                return b ? b[c] || null : null
            }

            function ak(a) {
                try {
                    var c = a.document.cookie;
                    if (!aa(c)) {
                        var b = {};
                        x(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[$a(d[0])] = $a(dk(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function ri(a, c, b) {
                return !tg.length || I(b, Qe) ? !0 : N(function(d, e) {
                    return d && e(a, c, b)
                }, !0, tg)
            }

            function Ec(a) {
                return a ? w(ya, ek(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    Y(e) || aa(e) || c.push(d + "=" + me(e));
                    return c
                }, []), xe("&"))(a) : ""
            }

            function fk(a) {
                return a ? w(Ub(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], aa(b) ? void 0 : dk(b)]
                }), ek(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function dk(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function me(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = G("", ha(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function $a(a, c) {
                if (a) {
                    var b = gk ? gk.call(a) : ("" + a).replace(uj, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function nj(a) {
                var c = a.match(hk);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return I(c,
                        ug) ? c : !1;
                    if (a) return ug[0]
                }
                return !1
            }

            function U(a) {
                return N(function(c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, Cr)
            }

            function ik(a) {
                return N(function(c, b) {
                    c[Yd[b[0]].ea] = b[1];
                    return c
                }, {}, ya(a))
            }

            function pc(a) {
                x(function(c) {
                    var b = c[1];
                    Yd[c[0]] = {
                        ea: b.ea,
                        Ma: b.Ma
                    }
                }, ya(a))
            }

            function am(a, c, b, d, e) {
                var f = mh(a, b, d, e);
                a = N(function(g, h) {
                    var k = h[1],
                        l = k.Ma;
                    k = f[k.ea];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, ya(c));
                ij(a, a.N || {});
                return a
            }

            function mh(a, c, b, d) {
                var e;
                return ia(a) ? a : (e = {}, e.id = a, e.type = b, e.defer =
                    d, e.params = c, e)
            }

            function Dr(a) {
                a = K(a);
                return qc[a] && qc[a].Xi || null
            }

            function jk(a) {
                a = K(a);
                return qc[a] && qc[a].Wi
            }

            function ij(a, c) {
                var b = K(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                qc[b] || (qc[b] = {});
                if (d || e) qc[b].Wi = d, qc[b].Xi = e
            }

            function tf(a, c) {
                if (Kd(a) && c) {
                    var b = tb(a).match(vg);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function uf(a, c) {
                var b = tb(a);
                return b && (b = b.match(Er)) && 1 < b.length ? Da(b[1]) >= c : !1
            }

            function kg(a) {
                return I("prerender", z(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Xa(a, c, b) {
                var d = Y(b);
                Y(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function Fr() {
                var a = Na(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) ob(b, d) && (c[d] = b[d]);
                    ob(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Gr(a) {
                return function(c) {
                    return c ? a(c) : []
                }
            }

            function kk(a) {
                return Y(a) ? [] : wg(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], lk(a))
            }

            function lk(a) {
                var c = [],
                    b;
                for (b in a) ob(a, b) && c.push(b);
                return c
            }

            function je(a) {
                try {
                    return parseInt(a,
                        10)
                } catch (c) {
                    return null
                }
            }

            function Vb(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
            }

            function Hr(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function va(a, c) {
                x(w(R, Ka("push", a)), c);
                return a
            }

            function te(a, c) {
                return Array.prototype.sort.call(c, a)
            }

            function Re(a) {
                return a.splice(0, a.length)
            }

            function Ga(a) {
                return a ? M(a) ? a : Ld ? Ld(a) : "number" === typeof a.length && 0 <= a.length ? mk(a) : [] : []
            }

            function Ir(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (b in
                        c && a.call(c, c[b], b)) return !0;
                return !1
            }

            function Jr(a, c) {
                return N(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(M(d) ? d : [d])
                }, [], c)
            }

            function nk(a, c) {
                return N(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function Kr(a, c) {
                if (!Kd(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function Lr(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function Mr(a, c) {
                return 1 <= ok(Aa(a), c).length
            }

            function Nr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c,
                            c[b], b)) return c[b]
            }

            function ok(a, c) {
                return wg(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function re(a, c, b) {
                return b ? a : c
            }

            function Or(a, c) {
                return N(function(b, d, e) {
                    return b ? !!a(d, e) : !1
                }, !0, c)
            }

            function Vf(a, c, b) {
                try {
                    if (O(c)) {
                        var d = Na(arguments).slice(3);
                        c.apply(aa(b) ? null : b, d)
                    }
                } catch (e) {
                    Ed(a, u(e, Sa), 0)
                }
            }

            function Sa(a) {
                throw a;
            }

            function Ed(a, c, b) {
                return Fc("setTimeout", a)(c, b)
            }

            function la(a, c) {
                return Fc("clearTimeout", a)(c)
            }

            function zd() {
                return []
            }

            function rc() {
                return {}
            }

            function Fc(a, c) {
                var b =
                    n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function vb(a, c, b) {
                return function() {
                    var d = J(arguments[0]),
                        e = b ? "global" : "m1420",
                        f = d.C(e, {}),
                        g = n(f, a);
                    g || (g = v(c), f[a] = g, d.D(e, f));
                    return g.apply(null, arguments)
                }
            }

            function le(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                zb(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : ob(b, d) || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function Md(a) {
                a = a.Ya =
                    a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Ga: function(b, d) {
                        xg.call(c, b) || (c[b] = d);
                        return this
                    },
                    D: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    C: function(b, d) {
                        var e = c[b];
                        return xg.call(c, b) || Y(d) ? e : d
                    }
                }
            }

            function ob(a, c) {
                return aa(a) ? !1 : xg.call(a, c)
            }

            function v(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : R;
                return function() {
                    var f = Na(arguments),
                        g = e.apply(void 0, f),
                        h = kf(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Nb(a) {
                if (yg) return yg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b =
                    a.Array && a.Array.prototype && ma(a.Array.prototype.indexOf, "indexOf");
                a = void 0;
                return yg = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : Pr
            }

            function Pr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function ua(a, c) {
                return c ? a(c) : a()
            }

            function w() {
                var a = Na(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0, arguments);
                    return N(pk, b, a)
                }
            }

            function ek(a, c) {
                return D([a, c], N)
            }

            function wg(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function cb(a) {
                return Ka("test", a)
            }

            function Ka(a,
                c) {
                return H(c[a], c)
            }

            function u(a, c) {
                return H(c, null, a)
            }

            function D(a, c) {
                return H.apply(void 0, Kc([c, null], a))
            }

            function Qr(a) {
                return function() {
                    var c = Na(arguments);
                    return a.apply(c[0], [c[1]].concat(c.slice(2)))
                }
            }

            function Rr() {
                var a = Na(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = Kc(d, Na(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, Kc([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && qk(f, e, b);
                        delete b[f];
                        return e
                    }
                    return qk(c, e)
                }
            }

            function qk(a,
                c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                O(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function Na(a) {
                if (Ld) try {
                    return Ld(a)
                } catch (c) {}
                return mk(a)
            }

            function mk(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function ia(a) {
                return !Wa(a) && !Y(a) && "[object Object]" === Object.prototype.toString.call(a)
            }

            function aa(a) {
                return Y(a) || Wa(a)
            }

            function O(a) {
                return "function" === typeof a
            }

            function db(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function oa(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function pk(a, c) {
                return c(a)
            }

            function qq(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace($f, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function Sr(a) {
                return "" + a
            }

            function gb(a,
                c) {
                return !(!a || -1 === nb(a, c))
            }

            function lc(a, c) {
                return nb(a, c)
            }

            function Tr(a, c) {
                for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                    b = a[e] === c[b] ? b + 1 : 0;
                    if (b === c.length) return e - c.length + 1;
                    if (!b && e > d) break
                }
                return -1
            }

            function ea(a) {
                return "string" === typeof a
            }

            function ma(a, c) {
                return Fa(c, a) && a
            }

            function Fa(a, c) {
                var b = Se(a, c);
                c && !b && zg.push([a, c]);
                return b
            }

            function Se(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g =
                        8; g < d; g += 1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function F() {}

            function Ag(a, c) {
                Ag = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return Ag(a, c)
            }

            function Gc(a) {
                return !a
            }

            function eb(a, c) {
                return c
            }

            function R(a) {
                return a
            }

            function Ma(a, c) {
                function b() {
                    this.constructor = a
                }
                Ag(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function Kc() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function n(a, c) {
                return a ? N(function(b, d) {
                    if (aa(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function Ur(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }

            function Vr() {}

            function Wr(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function Ia(a) {
                if (!(this instanceof Ia)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.Ja = 0;
                this.Ke = !1;
                this.Pa = void 0;
                this.zb = [];
                rk(a, this)
            }

            function sk(a, c) {
                for (; 3 === a.Ja;) a = a.Pa;
                0 === a.Ja ? a.zb.push(c) : (a.Ke = !0, Ia.Le(function() {
                    var b = 1 === a.Ja ? c.ri : c.wi;
                    if (null === b)(1 === a.Ja ? Bg : Nd)(c.promise, a.Pa);
                    else {
                        try {
                            var d = b(a.Pa)
                        } catch (e) {
                            Nd(c.promise, e);
                            return
                        }
                        Bg(c.promise, d)
                    }
                }))
            }

            function Bg(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b =
                            c.then;
                        if (c instanceof Ia) {
                            a.Ja = 3;
                            a.Pa = c;
                            Cg(a);
                            return
                        }
                        if ("function" === typeof b) {
                            rk(Wr(b, c), a);
                            return
                        }
                    }
                    a.Ja = 1;
                    a.Pa = c;
                    Cg(a)
                } catch (d) {
                    Nd(a, d)
                }
            }

            function Nd(a, c) {
                a.Ja = 2;
                a.Pa = c;
                Cg(a)
            }

            function Cg(a) {
                2 === a.Ja && 0 === a.zb.length && Ia.Le(function() {
                    a.Ke || Ia.Bg(a.Pa)
                });
                for (var c = 0, b = a.zb.length; c < b; c++) sk(a, a.zb[c]);
                a.zb = null
            }

            function Xr(a, c, b) {
                this.ri = "function" === typeof a ? a : null;
                this.wi = "function" === typeof c ? c : null;
                this.promise = b
            }

            function rk(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Bg(c, d))
                    }, function(d) {
                        b || (b = !0, Nd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Nd(c, d))
                }
            }

            function bk(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return sg(a, c, "", -100, b, d, e)
            }

            function jd(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = Yr(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    fc: function(g, h, k) {
                        bk(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    C: function(g) {
                        return qe(a, "" + c + g + f)
                    },
                    D: function(g, h, k, l, m) {
                        sg(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function Kb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function hc(a) {
                a = "" +
                    a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function yc(a, c) {
                var b = Zr(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function tk(a) {
                return (a = U(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function $r(a, c) {
                var b = tk(a);
                uk = sr(a, function() {
                    var d = tk(a);
                    d !== b &&
                        (c(), b = d)
                }, 200, "t.h");
                return H(rr, null, a, uk)
            }

            function as(a, c, b, d) {
                var e, f, g = c.ba,
                    h = c.He,
                    k = c.pc,
                    l = J(a),
                    m = Ha((e = {}, e.wh = 1, e.pv = 1, e));
                e = n(d, "isTrusted");
                d && !aa(e) && m.D("ite", rb(e));
                Zd(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                h && m.D("ut", "1");
                g = l.C("lastReferrer");
                d = U(a).href;
                k = {
                    J: (f = {}, f["page-url"] = k || d, f["page-ref"] = g, f),
                    K: m
                };
                b(k, c)["catch"](C(a, "g.s"));
                l.D("lastReferrer", d)
            }

            function bs(a, c, b) {
                function d() {
                    r || (q = !0, t = !1, r = !0, f())
                }

                function e() {
                    m = !0;
                    k(!1);
                    c()
                }

                function f() {
                    la(a, l);
                    if (m) k(!1);
                    else {
                        var P = Math.max(0,
                            b - (t ? y : y + p(da) - E));
                        P ? l = T(a, e, P, "u.t.d.c") : e()
                    }
                }

                function g() {
                    t = q = r = !0;
                    y += p(da) - E;
                    E = p(da);
                    f()
                }

                function h() {
                    q || r || (y = 0);
                    E = p(da);
                    q = r = !0;
                    t = !1;
                    f()
                }

                function k(P) {
                    P = P ? Q.F : Q.vb;
                    P(a, ["blur"], g);
                    P(a, ["focus"], h);
                    P(a.document, ["click", "mousemove", "keydown", "scroll"], d)
                }
                var l = 0,
                    m = !1;
                if (ig(a)) return l = T(a, c, b, "u.t.d"), D([a, l], la);
                var p = ja(a),
                    q = !1,
                    r = !1,
                    t = !0,
                    y = 0,
                    E = p(da),
                    Q = ka(a);
                k(!0);
                f();
                return function() {
                    la(a, l);
                    k(!1)
                }
            }

            function wb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>>
                    16, c[1] & 65535
                ];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function sc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Xc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function kb(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function wa(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function vk(a) {
                a =
                    wa(a, [0, a[0] >>> 1]);
                a = wb(a, [4283543511, 3981806797]);
                a = wa(a, [0, a[0] >>> 1]);
                a = wb(a, [3301882366, 444984403]);
                return a = wa(a, [0, a[0] >>> 1])
            }

            function cs(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    V: [0, d],
                    X: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f +
                            13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = wb(h, Te);
                    h = Xc(h, 31);
                    h = wb(h, Ue);
                    g.V = wa(g.V, h);
                    g.V = Xc(g.V, 27);
                    g.V = sc(g.V, g.X);
                    g.V = sc(wb(g.V, [0, 5]), [0, 1390208809]);
                    k = wb(k, Ue);
                    k = Xc(k, 33);
                    k = wb(k, Te);
                    g.X = wa(g.X, k);
                    g.X = Xc(g.X, 31);
                    g.X = sc(g.X, g.V);
                    g.X = sc(wb(g.X, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = wa(h, kb([0, b.charCodeAt(f + 14)],
                            48));
                    case 14:
                        h = wa(h, kb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = wa(h, kb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = wa(h, kb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = wa(h, kb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = wa(h, kb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = wa(h, [0, b.charCodeAt(f + 8)]), h = wb(h, Ue), h = Xc(h, 33), h = wb(h, Te), d.X = wa(d.X, h);
                    case 8:
                        g = wa(g, kb([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = wa(g, kb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = wa(g, kb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = wa(g, kb([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g =
                            wa(g, kb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = wa(g, kb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = wa(g, kb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = wa(g, [0, b.charCodeAt(f)]), g = wb(g, Te), g = Xc(g, 31), g = wb(g, Ue), d.V = wa(d.V, g)
                }
                d.V = wa(d.V, [0, b.length]);
                d.X = wa(d.X, [0, b.length]);
                d.V = sc(d.V, d.X);
                d.X = sc(d.X, d.V);
                d.V = vk(d.V);
                d.X = vk(d.X);
                d.V = sc(d.V, d.X);
                d.X = sc(d.X, d.V);
                return ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[0] >>> 0).toString(16)).slice(-8) + ("00000000" +
                    (d.X[1] >>> 0).toString(16)).slice(-8)
            }

            function Od(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = hb('[itemprop~="' + b + '"]', c);
                return d ? ha(function(e) {
                    return e.parentNode && Wb("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function fb(a, c, b) {
                return (a = Od(a, c, b)) && a.length ? a[0] : null
            }

            function ab(a) {
                if (!a) return "";
                a = M(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Jb(a[0]) : ""
            }

            function wk(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : ab(a) : ""
            }

            function sd(a, c, b) {
                a = c && (gb(c.className,
                    "ym-disable-keys") || gb(c.className, "-metrika-nokeys"));
                return b && c ? a || !!dr(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function Ef(a, c) {
                return Me(c) ? "password" === c.type || c.name && I(c.name.toLowerCase(), xk) || c.id && I(c.id.toLowerCase(), xk) : !1
            }

            function yk(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                va(a, [b >> 8, b & 255])
            }

            function Tb(a, c) {
                va(a, [c & 255])
            }

            function jb(a, c, b) {
                return -1 !== Nb(a)(b, ds) ? (Tb(c, b), !1) : !0
            }

            function S(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) va(a, [b & 127 | 128]), b >>= 7;
                va(a, [b])
            }

            function Dg(a,
                c) {
                S(a, c.length);
                for (var b = 0; b < c.length; b += 1) S(a, c.charCodeAt(b))
            }

            function Eg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) yk(a, b.charCodeAt(d))
            }

            function es(a, c) {
                var b = [];
                if (jb(a, b, 27)) return [];
                S(b, c);
                return b
            }

            function fs(a, c) {
                var b = La(c);
                if (!b) return c[Ya] = -1, null;
                var d = +c[Ya];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.qj) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = Ke(a, c),
                    g = f && f[Ya] ? f[Ya] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = gs()[b];
                h || (e |= 2);
                var k = Dj(a, c);
                k || (e |= 4);
                var l = If(a, c);
                (f = f ? If(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                Ac[d].Cf = l[0] + "x" + l[1];
                Ac[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (jb(a, f, 1)) return null;
                S(f, d);
                Tb(f, e);
                S(f, g);
                h ? Tb(f, h) : Eg(f, b);
                k && S(f, k);
                e & 8 || (S(f, l[0]), S(f, l[1]), S(f, l[2]), S(f, l[3]));
                e & 32 && Eg(f, c.id);
                Tb(f, 0);
                return f
            }

            function hs(a, c) {
                var b = c[Ya];
                if (!b || 0 > b || !Gf(c) || !c.form || oi(a, c.form)) return [];
                var d = Fj(a, c.form);
                if (0 > d) return [];
                if (Me(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        ec: 0,
                        uj: 0,
                        "datetime-local": 0,
                        email: 0,
                        Af: 0,
                        Lj: 0,
                        search: 0,
                        Qj: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Sj: 0,
                        password: 2,
                        Kj: 3,
                        sj: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        nj: 1,
                        oj: 5
                    };
                    var f = La(c);
                    e = Y(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (jb(a, g, 7)) return [];
                S(g, b);
                S(g, d);
                S(g, e);
                Dg(g, c.name || "");
                S(g, f);
                return g
            }

            function zc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !mo(a, c, b); c = Ke(a, c)) d.push(c);
                x(function(e) {
                    Ac.counter += 1;
                    var f = Ac.counter;
                    e[Ya] = f;
                    Ac[f] = {};
                    f = fs(a, e);
                    e = hs(a, e);
                    f && e && (va(b, f), va(b, e))
                }, is(d));
                return b
            }

            function js(a) {
                var c = a.na;
                if (!rd || c && !c.fromElement) return li(a)
            }

            function ks(a) {
                var c = a.na;
                if (c && !c.toElement) return Hf(a)
            }

            function zk(a) {
                var c = Ic(a.na);
                if (c && pe(c)) {
                    var b = ki(a, c),
                        d = b.concat;
                    var e = Ab(a.l),
                        f = [];
                    jb(a.l, f, 17) ? a = [] : (S(f, e), S(f, c[Ya]), a = f);
                    return d.call(b, a)
                }
            }

            function Ak(a) {
                var c = a.l,
                    b = a.na.target;
                if (b && pe(b)) {
                    c = zc(c, b);
                    var d = c.concat;
                    var e = Ab(a.l),
                        f = [];
                    jb(a.l, f, 18) ? a = [] : (S(f, e), S(f, b[Ya]), a = f);
                    return d.call(c, a)
                }
            }

            function Bk(a) {
                var c = a.l,
                    b = Ic(a.na);
                if (!b || Ef(c, b) || sd(c, b)) return [];
                if (Gf(b)) {
                    var d = J(c).C("isEU"),
                        e = Rc(c, b, d),
                        f = e.Va;
                    d = e.ob;
                    e = e.fb;
                    if (Ne(b)) var g = b.checked;
                    else g = b.value, g = f ? G("", Ck(g.split(""))) : g;
                    c = zc(c, b);
                    f = c.concat;
                    var h = Ab(a.l);
                    d = d && !e;
                    e = [];
                    jb(a.l, e, 39) ? a = [] : (S(e, h), S(e, b[Ya]), Eg(e, String(g)), Tb(e, d ? 1 : 0), a = e);
                    return f.call(c, a)
                }
            }

            function Ve(a) {
                var c = a.l,
                    b = a.na,
                    d = Ic(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = u(e, va);
                d && pe(d) ? f(ki(a, d)) : f(zc(c, d));
                var g = bj(c, b);
                f = e.concat;
                a = Ab(a.l);
                var h = b.type,
                    k = [g.x, g.y];
                g = b.which;
                b = b.button;
                var l;
                var m = Le(c, d);
                var p = m[0];
                for (m = m[1]; d && (!p || !m);)
                    if (d = Ke(c, d)) m = Le(c, d), p = m[0], m = m[1];
                d ? (p = d[Ya], !p || 0 > p ? c = [] : (m = (l = {}, l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch = 12, l)[h]) ? (l = [], d = hg(c, d), jb(c, l, m) ? c = [] : (S(l, a), S(l, p), S(l, Math.max(0, k[0] - d.left)), S(l, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Tb(l, 2 > c ? 1 : c === (g ?
                    2 : 4) ? 4 : 2)), c = l)) : c = []) : c = [];
                return f.call(e, c)
            }

            function ls(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Wa(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Rc(b, c).Va || sd(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f],
                    d = Rc(b, d).Va || sd(b, d, !0), f += 1;
                if (e !== Fg) return Fg = e, d = d ? G("", Ck(e.split(""))) : e, e = Ab(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], jb(a.l, c, 29) ? a = [] : (S(c, e), Dg(c, b), Dg(c, d), a = c), a
            }

            function ms(a) {
                return Ve(a).concat(ls(a) || [])
            }

            function Dk(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function Ek(a) {
                var c = [];
                Gg || (Gg = !0, Fg && va(c, es(a.l, Ab(a.l))),
                    Rb(a.l, function() {
                        Gg = !1
                    }, "fv.c"));
                return c
            }

            function Fk(a, c, b, d) {
                c = Ic(c);
                if (!c || Jf(a, c)) return [];
                var e = Rc(a, c),
                    f = e.ob,
                    g = e.fb;
                e = e.Va;
                var h = J(a);
                if (!g && (f && h.C("isEU") || sd(a, c))) a = [];
                else {
                    f = zc(a, c);
                    g = f.concat;
                    var k = Ab(a);
                    h = [];
                    if (jb(a, h, 38)) a = [];
                    else {
                        S(h, k);
                        yk(h, b);
                        Tb(h, d);
                        a = c[Ya];
                        if (!a || 0 > a) a = 0;
                        S(h, a);
                        Tb(h, e ? 1 : 0);
                        a = h
                    }
                    a = g.call(f, a)
                }
                return a
            }

            function ns(a) {
                var c = a.l,
                    b = a.na,
                    d = b.keyCode,
                    e = Dk(b),
                    f = [],
                    g = u(f, va);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Fk(c, b, d, e | 16)), Hg = !1, Rb(c, function() {
                    Hg = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Ek(a));
                return f
            }

            function os(a) {
                var c = a.l;
                a = a.na;
                var b = [];
                Hg && !Ig && 0 !== a.which && (va(b, Fk(c, a, a.charCode || a.keyCode, Dk(a))), Ig = !0, Rb(c, function() {
                    Ig = !1
                }, "fv.kp"));
                return b
            }

            function Gk(a) {
                var c = a.l,
                    b = Ic(a.na);
                if (!b || oi(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f +=
                        1) Ej(e[f]) || va(d, zc(c, e[f]));
                    a = Ab(a.l);
                    e = Fj(c, b);
                    if (0 > e) c = [];
                    else {
                        f = b.elements;
                        var g = f.length;
                        b = [];
                        for (var h = 0; h < g; h += 1)
                            if (!Ej(f[h])) {
                                var k = f[h][Ya];
                                k && 0 < k && b.push(k)
                            }
                        f = [];
                        if (jb(c, f, 11)) c = [];
                        else {
                            S(f, a);
                            S(f, e);
                            S(f, b.length);
                            for (c = 0; c < b.length; c += 1) S(f, b[c]);
                            c = f
                        }
                    }
                    va(d, c)
                }
                return d
            }

            function ps(a) {
                var c = a.flush;
                a = Ic(a.na);
                "BODY" === La(a) && c()
            }

            function Fn(a, c) {
                var b, d = Ic(c),
                    e = ta.bc,
                    f = Md(a);
                if (d && jc("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Da(d.getAttribute("data-cid") ||
                        "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function $l(a, c, b, d, e) {
                if (!b.length) return e;
                b = z(function(f) {
                    return D([a, c, d], f)
                }, b);
                return w.apply(void 0, b)(e)
            }
            var Yc = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "cstsejpczyib8nf716ce02r1en",
                    host: "mc.yandex.ru"
                },
                zg = [],
                $f = /\./g,
                Hk = ma(String.prototype.indexOf, "indexOf"),
                nb = Hk ? function(a, c) {
                    return Hk.call(a, c)
                } : Tr,
                Aa = oa(function(a,
                    c) {
                    return a === c
                }),
                Tc = oa(function(a, c) {
                    a(c);
                    return c
                }),
                Ba = oa(pk),
                Wa = Aa(null),
                Y = Aa(void 0),
                Ld = ma(Array.from, "from"),
                Ik = ma(Function.prototype.bind, "bind"),
                H = Ik ? Qr(Ik) : Rr,
                Jk = ma(Array.prototype.reduce, "reduce"),
                zb = Jk ? function(a, c, b) {
                    return Jk.call(b, a, c)
                } : wg,
                N = zb,
                Rq = w,
                ze = w(R, ua),
                yg, kf = Nb(window),
                $m = db(kf),
                xg = Object.prototype.hasOwnProperty,
                J = v(Md),
                V = db(n),
                Qa = V("length"),
                Lc = oa(D),
                qs = oa(Ka),
                Kk = ma(Array.prototype.every, "every"),
                Li = Kk ? function(a, c) {
                    return Kk.call(c, a)
                } : Or,
                Mb = D([1, null], re),
                rb = D([1, 0], re),
                Db = Boolean,
                Lk = ma(Array.prototype.filter, "filter"),
                ha = Lk ? function(a, c) {
                    return Lk.call(c, a)
                } : ok,
                Ea = u(Db, ha),
                rs = oa(ha),
                Mk = ma(Array.prototype.find, "find"),
                ib = Mk ? function(a, c) {
                    return Mk.call(c, a)
                } : Nr,
                Nk = ma(Array.prototype.includes, "includes"),
                I = Nk ? function(a, c, b) {
                    return Nk.call(c, a, b)
                } : Mr,
                tc = db(I),
                Ok = ma(Array.prototype.join, "join"),
                G = Ok ? function(a, c) {
                    return Ok.call(c, a)
                } : Lr,
                xe = oa(G),
                Pk = v(function(a) {
                    var c = n(a, "navigator") || {};
                    a = n(c, "userAgent") || "";
                    c = n(c, "vendor") || "";
                    return {
                        qf: -1 < nb(c, "Apple"),
                        lg: a
                    }
                }),
                tb = v(V("navigator.userAgent")),
                vg = /Firefox\/([0-9]+)/i,
                Kd = v(function(a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(vg);
                    vg.lastIndex = 0;
                    return !(!(c && "MozAppearance" in c) || aa(b)) || a
                }),
                Qk = ma(Array.isArray, "isArray"),
                M = Qk ? function(a) {
                    return Qk(a)
                } : Ur,
                Rk = ma(Array.prototype.map, "map"),
                Sk = Rk && Kr(window, Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? Rk.call(c, a) : []
                } : nk,
                z = Sk,
                x = Sk,
                Tk = ma(Array.prototype.flatMap, "flatMap"),
                wc = Tk ? function(a, c) {
                    return Tk.call(c, a)
                } : Jr,
                Ub = oa(z),
                tr = db(z),
                Uk = ma(Array.prototype.some, "some"),
                Va = Uk ? function(a, c) {
                    return Uk.call(c, a)
                } : Ir,
                Fe = v(Nb),
                Cd = V("0"),
                ss = oa(te),
                Vk = ma(Array.prototype.reverse, "reverse"),
                is = Vk ? function(a) {
                    return Vk.call(a)
                } : Hr,
                Wk = db(parseInt),
                Da = Wk(10),
                ue = Wk(2),
                Xk = ma(Object.keys, "keys"),
                Yk = ma(Object.entries, "entries"),
                ya = Yk ? Gr(Yk) : kk,
                fa = Xk ? function(a) {
                    return Xk(a)
                } : lk,
                Zk = ma(Object.values, "values"),
                ts = w(kk, u(V("1"), nk)),
                us = Zk ? function(a) {
                    return Zk(a)
                } : ts,
                A = Object.assign || Fr,
                ji = oa(function(a, c) {
                    return A({}, a, c)
                }),
                ie = v(w(V("String.fromCharCode"), u("fromCharCode", Fa), Gc)),
                Jg = v(w(tb, cb(/ipad|iphone|ipod/i))),
                Of = v(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                xd = v(function(a) {
                    a = Pk(a);
                    var c = a.lg;
                    return a.qf && !c.match("CriOS")
                }),
                vs = cb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                ws = cb(/; wv\)/),
                vd = v(function(a) {
                    a = tb(a);
                    return ws(a) || vs(a)
                }),
                xs = /Chrome\/(\d+)\./,
                ys = v(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(xs)) && a.length ? 76 <= Da(a[1]) : !1
                }),
                se = v(function(a) {
                    var c = (tb(a) || "").toLowerCase();
                    a = Of(a);
                    return gb(c, "android") && gb(c, "mobile") && /^android|linux armv/i.test(a)
                }),
                zs = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                As = v(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (Y(c)) return null;
                    a = Fe(a)(c, zs);
                    return -1 === a ? c : "" + a
                }),
                ig = v(w(V("document.addEventListener"), Gc)),
                $k = v(function(a) {
                    var c =
                        n(a, "navigator") || {};
                    return N(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                Fh = v(function(a) {
                    var c = n(a, "navigator") || {};
                    a = $k(a);
                    ea(a) || (a = "", c = n(c, "languages.0"), ea(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                qb = v(function(a) {
                    return (n(a, "top") || a) !== a
                }),
                Bs = v(V("top.contentWindow")),
                Cs = v(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                Ds = v(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = n(b, "toString") ? "" + b.toString() : "";
                    b = -1 !== nb(b, "Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Va(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Va(u(n(a, "document"), n), c) || b || d && Va(H(d.getAttribute, d), e))
                }),
                Es = v(function(a) {
                    return !!(Va(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(tb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                Fs = v(function(a) {
                    return !(!n(a,
                        "ia_document.shareURL") || !n(a, "ia_document.referrer"))
                }),
                Pd = v(function(a) {
                    var c = tb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (Jg(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && xd(a)
                }),
                Er = /Edg\/(\d+)\./,
                Je = v(function(a) {
                    return Pd(a) || tf(a, 68) || uf(a, 79)
                }),
                Gs = Yc.construct,
                kc = Yc.host,
                Kg = ig(window),
                ta = {
                    xg: 24226447,
                    pg: 26302566,
                    Ag: 51533966,
                    lj: 65446441,
                    Qa: "https:",
                    bb: "1420",
                    bc: Gs,
                    wg: Kg ? 512 : 2048,
                    ug: Kg ? 512 : 2048,
                    vg: Kg ? 100 : 400,
                    mj: 100,
                    yg: "noindex"
                },
                Qd = [],
                K = v(function(a) {
                    return a.id + ":" + a.ba
                }),
                qc = {},
                Zd = Aa("1"),
                Hs = setTimeout;
            Ia.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            Ia.prototype.then = function(a, c) {
                var b = new this.constructor(Vr);
                sk(this, new Xr(a, c, b));
                return b
            };
            Ia.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            Ia.all = function(a) {
                return new Ia(function(c,
                    b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            Ia.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === Ia ? a : new Ia(function(c) {
                    c(a)
                })
            };
            Ia.reject = function(a) {
                return new Ia(function(c, b) {
                    b(a)
                })
            };
            Ia.race = function(a) {
                return new Ia(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) Ia.resolve(a[d]).then(c, b)
                })
            };
            Ia.Le = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                Hs(a, 0)
            };
            Ia.Bg = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var L = window.Promise,
                Is = ma(L, "Promise"),
                al = ma(n(L, "resolve"), "resolve"),
                bl = ma(n(L, "reject"), "reject"),
                cl = ma(n(L, "all"), "all");
            if (Is && al && bl && cl) {
                var We = function(a) {
                    return new Promise(a)
                };
                We.resolve = H(al, L);
                We.reject = H(bl, L);
                We.all = H(cl, L);
                L = We
            } else L = Ia;
            var ef = [],
                id = [],
                X = [],
                Ua = [],
                Lg = [],
                Zc = [],
                rg = tc([26812653]),
                Js = v(w(V("id"), rg), K),
                Zb = {
                    id: "id",
                    He: "ut",
                    ba: "type",
                    Td: "ldc",
                    Ua: "nck",
                    pc: "url",
                    oh: "referrer"
                },
                Ks = /^\d+$/,
                $c = {
                    id: function(a) {
                        a = "" + (a || "0");
                        Ks.test(a) || (a = "0");
                        try {
                            var c = Da(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    ba: function(a) {
                        return "" + (a || 0 === a ?
                            a : "0")
                    },
                    Ua: Db,
                    He: Db
                };
            Zb.hd = "defer";
            $c.hd = Db;
            Zb.N = "params";
            $c.N = function(a) {
                return ia(a) || M(a) ? a : null
            };
            Zb.Ge = "userParams";
            Zb.hg = "triggerEvent";
            $c.hg = Db;
            Zb.Vf = "sendTitle";
            $c.Vf = function(a) {
                return !!a || Y(a)
            };
            Zb.Be = "trackHash";
            $c.Be = Db;
            Zb.gg = "trackLinks";
            Zb.Yg = "enableAll";
            var Yd = N(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        ea: c[1],
                        Ma: $c[b]
                    };
                    return a
                }, {}, ya(Zb)),
                Cr = "hash host hostname href pathname port protocol search".split(" "),
                ug = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "),
                hk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                De = v(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                Hi = v(function(a) {
                    a = U(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(hk));
                    return c
                }),
                dl = w(U, V("protocol"), Aa("https:")),
                Ar = v(function(a) {
                    return ys(a) && dl(a) ? "SameSite=None;Secure;" : ""
                }),
                uj = /^\s+|\s+$/g,
                gk = ma(String.prototype.trim, "trim"),
                Xe = oa(function(a, c) {
                    return c.replace(a, "")
                }),
                Ls = Xe(/\s/g),
                fe = Xe(/\D/g),
                yh = Xe(/\d/g),
                Qe = ["metrika_enabled"],
                tg = [],
                ck = vb("gsc", ak),
                Br = /:\d+$/,
                Yr = v(function(a) {
                    var c =
                        (U(a).host || "").split(".");
                    return 1 === c.length ? c[0] : N(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = G(".", c.slice(-e)), qi(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                Sc = v(jd),
                Pe = v(function(a) {
                    var c = Sc(a),
                        b = "1" === c.C("debug"),
                        d = -1 < lc(U(a).href, "_ym_debug=1") || -1 < lc(U(a).href, "_ym_debug=2"),
                        e = a._ym_debug;
                    !e && !d || b || (a = U(a), c.D("debug", "1", void 0, a.host));
                    return !!(b || e || d)
                }),
                zr = vb("debuggerEvents", zd, !0),
                wr = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Rd, Pa = function(a) {
                    return function(c,
                        b) {
                        void 0 === b && (b = !1);
                        if (Rd) var d = new Rd(c);
                        else Fa("Error", a.Error) ? (Rd = a.Error, d = new a.Error(c)) : (Rd = yr, d = new Rd(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                xr = cb(/^http./),
                vr = cb(/^err.kn/),
                Zj = [],
                ur = v(function(a) {
                    a = !(!a.addEventListener || !a.removeEventListener);
                    return {
                        Ri: a,
                        F: a ? "addEventListener" : "attachEvent",
                        ga: a ? "removeEventListener" : "detachEvent"
                    }
                }),
                Ms = v(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test",
                            F, b)
                    } catch (d) {}
                    return c
                }),
                Ns = oa(function(a, c) {
                    if (null !== c) return a ? A({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                ka = v(function(a) {
                    var c = Ms(a),
                        b = Ns(c),
                        d = {};
                    return A(d, {
                        F: function(e, f, g, h) {
                            x(function(k) {
                                var l = b(h);
                                Yj(a, e, k, g, l, !1)
                            }, f);
                            return H(d.vb, d, e, f, g, h)
                        },
                        vb: function(e, f, g, h) {
                            x(function(k) {
                                var l = b(h);
                                Yj(a, e, k, g, l, !0)
                            }, f)
                        }
                    })
                }),
                ja = v(ag),
                Uj = oa(function(a, c) {
                    for (var b = []; !Jd(c);) {
                        var d = pr(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                el = oa(function(a, c) {
                    return Ba(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Mg = oa(function(a, c) {
                    return Ba(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Za(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                mg = [],
                ng = !1,
                lg = !1,
                fl = oa(function(a, c) {
                    var b = c || {};
                    return {
                        l: u(b, R),
                        C: function(d, e) {
                            var f = b[d];
                            return Y(f) && !Y(e) ? e : f
                        },
                        D: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        Rb: function(d, e) {
                            return "" === e || aa(e) ? this : this.D(d, e)
                        },
                        Fa: u(b, a)
                    }
                }),
                Ha = fl(function(a) {
                    var c = "";
                    a = zb(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], ya(a));
                    c && a.push(c);
                    return G(":", a)
                }),
                Ng, Lj = (Ng = {}, Ng.w = [
                    [function(a,
                        c) {
                        return {
                            O: function(b, d) {
                                var e, f = b.J;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                "0" !== c.ba && (f["cnt-class"] = c.ba);
                                b.K || (b.K = Ha());
                                e = b.K;
                                var g = b.Z;
                                f = {
                                    ma: {
                                        za: "watch/" + c.id
                                    },
                                    Z: A(void 0 === g ? {} : g, {
                                        yb: !!e.C("pv") && !e.C("ar") && !e.C("wh")
                                    }),
                                    J: A(b.J || {}, f)
                                };
                                A(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], Ng),
                Og = u(Lj, Pj),
                lb = Id("w"),
                Kj = ["webkitvisibilitychange", "visibilitychange"],
                qf = fl(function(a) {
                    a = ya(a);
                    return G("", z(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Wa(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                gl = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                rq = /^\s*(data|javascript):/i,
                ej = new RegExp(G("", ["\\.(" + G("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Ra, oj = (Ra = {}, Ra.hit = "h", Ra.params = "p", Ra.reachGoal = "g", Ra.userParams = "up",
                    Ra.trackHash = "th", Ra.accurateTrackBounce = "atb", Ra.notBounce = "nb", Ra.addFileExtension = "fe", Ra.extLink = "el", Ra.file = "fc", Ra.trackLinks = "tl", Ra.destruct = "d", Ra.setUserID = "ui", Ra.getClientID = "ci", Ra.clickmap = "cm", Ra.enableAll = "ea", Ra),
                Os = v(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                Ps = w(K, Os, ua),
                dg = {
                    mc: function(a) {
                        a = Md(a).C("mt", {});
                        a = ya(a);
                        return a.length ? N(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = J(a).C("cls", {
                                $b: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.$b,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.J;
                        return !a || a.nohit ? null : Ps(c)
                    }
                },
                ir = v(function(a) {
                    Ij(a, "_ymBRC", "1");
                    var c = "1" !== Hj(a, "_ymBRC");
                    c || Jj(a, "_ymBRC");
                    return c
                }),
                Ta = v(Gj),
                ad = v(Gj, function(a, c, b) {
                    return "" + c + b
                }),
                Qs = v(V("document.documentElement")),
                Rs = v(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                sb = v(w(V("document"), u("createElement", Fc))),
                pi = v(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ?
                        (a = ib(function(b) {
                            var d = c[b];
                            return !!d && Fa(b, d)
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                Ss = Aa("INPUT"),
                Me = w(La, Ss),
                Ts = Aa("TEXTAREA"),
                fr = w(La, Ts),
                Us = Aa("SELECT"),
                gr = w(La, Us),
                Ne = w(V("type"), cb(/^(checkbox|radio)$/)),
                Gf = w(La, cb(/^INPUT|SELECT|TEXTAREA$/)),
                pe = w(La, cb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Kf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                er = ["submit", "image", "hidden"],
                Rf = v(function() {
                    for (var a = 59, c = {},
                            b = 0; b < gl.length; b += 1) c[gl[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                Cj = v(function(a) {
                    return {
                        xj: a,
                        gb: null,
                        qb: []
                    }
                }),
                Aj = {},
                gg = {};
            Aj.p = 500;
            var zj = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            gg.h = !0;
            gg.c = !0;
            var Wc = {};
            Wc.p = pf;
            Wc.c = function(a, c, b) {
                (a = $a(n(c, "textContent"))) && b && (b = b(c), b.length && Va(w(V("textContent"), $a, Aa(a)), b) && (a = ""));
                Me(c) && (a = $a(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var bd, fg = "button," + G(",", z(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"])) +
                ",a",
                Qi = u(fg, hb),
                cr = (bd = {}, bd.A = "h", bd.BUTTON = "i", bd.DIV = "i", bd.INPUT = "ty", bd),
                hl = /\/$/,
                yj = vb("r", function(a, c) {
                    var b = xj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Gd = v(function() {
                    return {
                        Ea: {},
                        pending: {},
                        children: {}
                    }
                }),
                Pg = V("postMessage"),
                Vs = B("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Gd(a),
                        g = G(":", [c.meta.ec, c.meta.key]);
                    if (Pg(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.bg, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        T(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                Ws = B("s.fh", function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k =
                        Gd(a),
                        l = null;
                    try {
                        g = Kb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!aa(h) && h.substring && "__yminfo" === h.substring(0, 8) && !aa(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !M(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!Wa(k) && Pg(k) && (f = d.aa(l.type, [f, l]), e = z(w(R, ji(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.bg, "*"))
                            }
                        } else g === "" + h && M(l) && ha(function(m) {
                                return !(!m.hid || !m.counterId)
                            }, l).length === l.length &&
                            (b = k.pending[G(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                md = v(function(a, c) {
                    var b, d = Fc("getElementsByTagName", n(a, "document")),
                        e = Gd(a),
                        f = Pg(a),
                        g = od(a),
                        h = ka(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + Dc(a), b);
                    Je(a) && (f.duid = Hd(a, c));
                    Zq(a, g);
                    $q(a);
                    b = ar(a, f);
                    var k = D([a, u([], b)], Vs);
                    x(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(p, q) {
                            g.aa("initToParent", [p, q])
                        })
                    }, d);
                    qb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l,
                        m) {
                        g.aa("parentConnect", [l, m])
                    });
                    h.F(a, ["message"], D([a, c, b, g, f], Ws));
                    return {
                        $: g,
                        Ea: e.Ea,
                        children: e.children,
                        pe: k
                    }
                }, w(eb, K)),
                nd = v(function(a, c) {
                    if (!Je(a) || !qb(a)) return Hd(a, c);
                    var b = md(a, c);
                    return b && b.Ea[c.id] ? b.Ea[c.id].info.duid || Hd(a, c) : Hd(a, c)
                }, function(a, c) {
                    return "{" + c.Td + c.Ua
                }),
                Xs = v(w(ja, Ba(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                Ys = w(ja, Ba(function(a) {
                    a = new a.l.Date;
                    return G("", z(qr, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                Zs = w(ja, Ba(eg)),
                il = v(w(ja, Ba(function(a) {
                    return a.Ic[0]
                }))),
                $s = v(function(a) {
                    a = J(a);
                    var c = a.C("counterNum", 0) + 1;
                    a.D("counterNum", c);
                    return c
                }, w(eb, K)),
                pa, Fd = (pa = {}, pa.vf = u(Yc.version, R), pa.nt = As, pa.fu = function(a, c, b) {
                        var d = b.J;
                        if (!d) return null;
                        c = (n(a, "document.referrer") || "").replace(hl, "");
                        b = (d["page-ref"] || "").replace(hl, "");
                        d = d["page-url"];
                        a = U(a).href !== d;
                        c = c !== b;
                        b = 0;
                        a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                        return b
                    }, pa.en = Rs, pa.la = $k, pa.ut = function(a, c, b) {
                        var d = b.M;
                        b = b.J;
                        d = d && d.Bc;
                        b && (Hi(a) || c.He || d) && (b.ut =
                            ta.yg);
                        return null
                    }, pa.v = u(ta.bb, R), pa.cn = $s, pa.dp = function(a) {
                        var c = J(a),
                            b = c.C("bt", {});
                        if (Y(c.C("bt"))) {
                            var d = n(a, "navigator.getBattery");
                            try {
                                b.p = d && d.call(a.navigator)
                            } catch (e) {}
                            c.D("bt", b);
                            b.p && b.p.then && b.p.then(C(a, "bi:dp.p", function(e) {
                                b.ej = n(e, "charging") && 0 === n(e, "chargingTime")
                            }))
                        }
                        return rb(b.ej)
                    }, pa.ls = v(function(a, c) {
                        var b = ad(a, c.id),
                            d = ja(a),
                            e = b.C("lsid");
                        return +e ? e : (d = Xa(a, 0, d(da)), b.D("lsid", d), d)
                    }, eb), pa.hid = Dc, pa.phid = function(a, c) {
                        if (!qb(a)) return null;
                        var b = md(a, c);
                        if (!b) return null;
                        var d = fa(b.Ea);
                        return d.length ? b.Ea[d[0]].info.hid : null
                    }, pa.z = Xs, pa.i = Ys, pa.et = Zs, pa.c = w(V("navigator.cookieEnabled"), Mb), pa.rn = w(R, Xa), pa.rqn = function(a, c, b) {
                        b = b.J;
                        if (!b || b.nohit) return null;
                        c = K(c);
                        a = ad(a, c);
                        c = (a.C("reqNum", 0) || 0) + 1;
                        a.D("reqNum", c);
                        if (a.C("reqNum") === c) return c;
                        a.fc("reqNum");
                        return null
                    }, pa.u = nd, pa.w = function(a) {
                        a = Oc(a);
                        return a[0] + "x" + a[1]
                    }, pa.s = function(a) {
                        var c = n(a, "screen");
                        if (c) {
                            a = n(c, "width");
                            var b = n(c, "height");
                            c = n(c, "colorDepth") || n(c, "pixelDepth");
                            return G("x", [a, b, c])
                        }
                        return null
                    },
                    pa.sk = V("devicePixelRatio"), pa.ifr = w(qb, Mb), pa.j = w(Cs, Mb), pa.sti = function(a) {
                        return qb(a) && Bs(a) ? "1" : null
                    }, pa),
                Yq = v(function() {
                    return va(fa(Fd), fa(dg))
                }),
                Xq = v(rc, K),
                vj = v(function() {
                    return {
                        Ze: null,
                        sa: []
                    }
                }, K),
                Uq = /^[a-z][\w.+-]+:/i,
                Qg, Yb = [
                    [Oe, 1],
                    [Ie, 2],
                    [Ob(), 3],
                    [wj, 4]
                ],
                He = [],
                xb = u(Yb, Qj),
                Xb = (Qg = {}, Qg.h = Yb, Qg),
                Z = u(Xb, Pj);
            xb(sj, -100);
            var Pq = /[^a-z0-9.:-]/,
                Rg, Sg = {},
                jl = Ea([bg && [bg, 0], Bb && [Bb, 1],
                    [Cb, 2], Dd && [Dd, 3],
                    [Vc, 4]
                ]),
                $b = Ea([bg, Bb, Cb, Dd, Vc]),
                Tg = [Cb];
            Tg.unshift(Bb);
            Tg.push(Dd);
            var kl = Ea(Tg),
                cd = Ea([Vc]);
            Ea([Bb, Cb]);
            var ll = Ea([Bb, Vc]),
                at = Ea([Bb, Cb, Dd, Vc]),
                sa = (Rg = {}, Rg.h = kl, Rg),
                Ug = v(function(a, c) {
                    var b = Sg["*"] ? Sg["*"] : c && Sg[c];
                    b || (b = c ? sa[c] || [] : $b);
                    b = N(function(d, e) {
                        var f = e(a);
                        if (f) {
                            var g = ib(w(Cd, Aa(e)), jl);
                            g && d.push([g[1], f])
                        }
                        return d
                    }, [], b);
                    b.length || Xd();
                    return b
                }, eb),
                Vg, bt = H(L.reject, L, Oa()),
                xa = (Vg = {}, Vg.h = lb, Vg),
                qa = B("g.sen", function(a, c, b) {
                    var d = Ug(a, c);
                    b = b ? Tq(a, c, b) : [];
                    var e = xa[c],
                        f = e ? e(a, d, b) : lb(a, d, b);
                    return function() {
                        var g = Na(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k = h.Z;
                        h = A(h, {
                            Z: A(void 0 ===
                                k ? {} : k, {
                                    ha: [c]
                                })
                        });
                        return f.apply(null, [h].concat(g))
                    }
                }, bt),
                Hq = oa(function(a, c) {
                    if (!c[a]) {
                        var b, d = new L(function(e) {
                            b = e
                        });
                        c[a] = {
                            Jf: b,
                            promise: d,
                            Kf: !1
                        }
                    }
                    return c[a].promise
                }),
                pj = v(w(rc, Ba)),
                ct = B("dc.init", function(a, c) {
                    return c && rg(je(c.split(":")[0])) ? {
                        log: F,
                        warn: F,
                        error: F
                    } : Gq(a, c)
                }),
                oc = v(ct, eb),
                dm = B("h.p", function(a, c) {
                    var b, d, e = qa(a, "h", c),
                        f = c.pc || "" + U(a).href,
                        g = c.oh || a.document.referrer,
                        h = {
                            K: Ha((b = {}, b.pv = 1, b)),
                            J: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            M: {}
                        };
                    h.M.N = c.N;
                    h.M.Ge = c.Ge;
                    c.hd && h.J && (h.J.nohit =
                        "1");
                    return e(h, c).then(function(k) {
                        var l;
                        k && (c.hd || nc(a, c, "h", (l = {}, l.id = c.id, l.url = f, l.ref = g, l), c.N)(), Rb(a, D([a, c, k], Iq)))
                    })["catch"](C(a, "h.g.s"))
                }),
                Wg = ["yandex_metrika_callback" + Yc.callbackPostfix, "yandex_metrika_callbacks" + Yc.callbackPostfix],
                dt = B("cb.i", function(a) {
                    var c = Wg[0],
                        b = Wg[1];
                    if (O(a[c])) a[c]();
                    "object" === typeof a[b] && x(function(d, e) {
                        a[b][e] = null;
                        Vf(a, d)
                    }, a[b]);
                    x(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, Wg)
                }),
                Dq = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
                ml = v(function(a) {
                    return !!n(a,
                        "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob")
                }),
                Fq = Xe(/[^\d+()]/g),
                Eq = cb(/[a-z\u0430-\u044f\u0451,.]/gi),
                Bq = ["yandex_cid", "yandex_public_id"],
                et = B("fpm", function(a, c) {
                    if (!dl(a)) return F;
                    var b = K(c);
                    if (!ml(a)) return Ib(a, b, "ns"), F;
                    var d = Ja(a, c);
                    return d ? function(e) {
                            return (new L(function(f, g) {
                                return ia(e) ? fa(e).length ? f(lj(a, e).then(function(h) {
                                    var k, l;
                                    h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                                }, F)) : g(Oa("fpm.l")) : g(Oa("fpm.o"))
                            }))["catch"](C(a, "fpm.en"))
                        } :
                        F
                }),
                Ye = oa(function(a, c) {
                    var b = {};
                    Yf(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                ft = B("c.c.cc", function(a) {
                    var c = J(a),
                        b = w(Ye(a), function(d) {
                            var e, f = (e = {}, e.clickmap = !!d.clickmap, e);
                            return A({}, d, f)
                        });
                    return C(a, "g.c.cc", w(H(c.C, c, "counters", {}), fa, Ub(b)))
                }),
                gt = B("gt.c.rs", function(a, c) {
                    var b, d = K(c),
                        e = c.id,
                        f = c.ba,
                        g = c.Ng,
                        h = c.Be,
                        k = D([a, d], zq);
                    Xf(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                jj = v(zd),
                Bd = v(rc, K),
                ht = B("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d,
                            e, f, g = Na(arguments),
                            h = yq(g);
                        if (!h) return null;
                        g = h.Tg;
                        var k = h.N;
                        h = h.Wb;
                        if (!ia(k) && !M(k)) return null;
                        var l = qa(a, "1", c),
                            m = Bd(c).url,
                            p = !Js(c),
                            q = "pa",
                            r = (d = {}, d.id = c.id, d);
                        d = k;
                        var t = "";
                        if (t = n(k, "__ym.user_id")) q = "pau", r.uid = t;
                        I("__ymu", fa(k)) && (q = "paup");
                        d.__ym && (d = A({}, k), d.__ym = N(function(y, E) {
                            var Q = n(k, "__ym." + E);
                            Q && (y[E] = Q);
                            return y
                        }, {}, Qd), fa(d.__ym).length || delete d.__ym, p = !!fa(d).length);
                        d = t ? void 0 : JSON.stringify(d);
                        d = nc(a, c, q, r, d);
                        l = l({
                            M: {
                                N: k
                            },
                            K: Ha((e = {}, e.pa = 1, e.ar = 1, e)),
                            J: (f = {}, f["page-url"] =
                                m || U(a).href, f)
                        }, c).then(p ? d : F);
                        return Uc(a, "p.s", l, h, g)
                    }, b
                }),
                ee = v(hj, w(eb, K)),
                it = B("y.p", function(a, c) {
                    var b = hj(a, c);
                    if (b) {
                        var d = ae(a),
                            e = D([a, b, c], uq);
                        Hh(a, d, function(f) {
                            f.F(["params"], e)
                        });
                        b.$.F(["params"], w(V("1"), e))
                    }
                }),
                Zr = v(function(a) {
                    if (a = sb(a)) return a("a")
                }),
                nl = {
                    Bj: cb(/[/&=?#]/)
                },
                Ae = B("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function(f, g, h, k) {
                        var l, m, p;
                        if (!f || nl[b] && nl[b](f)) return null;
                        var q = g,
                            r = h || F;
                        O(g) && (r = g, q = void 0, k = h);
                        var t = nc(a, c, "gr", (l = {},
                                l.id = c.id, l.goal = f, l), q),
                            y = "goal" === b;
                        g = qa(a, "g", c);
                        l = tq(a, c, f, b);
                        h = l[0];
                        l = l[1];
                        q = g({
                            M: {
                                N: q
                            },
                            K: Ha((m = {}, m.ar = 1, m)),
                            J: (p = {}, p["page-url"] = h, p["page-ref"] = l, p)
                        }, c).then(function() {
                            var E, Q;
                            y && t();
                            ub(a, (E = {}, E.counterKey = K(c), E.name = "event", E.data = (Q = {}, Q.schema = b, Q.name = f, Q), E));
                            d && d()
                        });
                        return Uc(a, "g.s", q, r, k)
                    }, e
                }),
                jt = B("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = Hd(a, c);
                        d && Vf(a, d, null, e);
                        return e
                    }, b
                }),
                uk, kt = B("th.e", function(a, c) {
                    function b() {
                        g || (k = ob(a, "onhashchange") ?
                            ka(a).F(a, ["hashchange"], h) : $r(a, h))
                    }
                    var d, e = qa(a, "t", c),
                        f = Ge(a, K(c)),
                        g = !1,
                        h = C(a, "h.h.ch", H(as, null, a, c, e)),
                        k = F;
                    c.Be && (b(), g = !0);
                    e = C(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                lt = oa(function(a, c) {
                    ea(c) ? a.push(c) : x(w(R, Ka("push", a)), c)
                }),
                Ad = vb("retryReqs", function(a) {
                    var c = Ta(a),
                        b = c.C("retryReqs", {}),
                        d = ja(a)(da);
                    x(function(e) {
                        var f = e[0];
                        e = e[1];
                        (!e || !e.time || e.time + 864E5 < d) && delete b[f]
                    }, ya(b));
                    c.D("retryReqs", b);
                    return b
                }, !0),
                Sd = w(lc,
                    Aa(0)),
                ol = db(Sd),
                mt = [ol("watch"), ol("clmap")],
                nt = B("g.r", function(a) {
                    var c = ja(a),
                        b = Ad(a),
                        d = c(da),
                        e = Dc(a);
                    return zb(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && Va(Ba(k.resource), mt) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                            protocol: k.protocol,
                            host: k.host,
                            za: k.resource,
                            Bi: k.postParams,
                            N: k.params,
                            Fg: k.browserInfo,
                            zj: k.ghid,
                            time: k.time,
                            Ob: Da(h),
                            Qg: k.counterId,
                            ba: k.counterType
                        }, k.telemetry && (h.Ha = k.telemetry), f.push(h));
                        return f
                    }, [], ya(b))
                }),
                ot = B("nb.p",
                    function(a, c) {
                        function b(E) {
                            l() || (E = "number" === typeof E ? E : 15E3, y = bs(a, d(!1), E), m())
                        }

                        function d(E) {
                            return function(Q) {
                                var P, za, Ca;
                                void 0 === Q && (Q = (P = {}, P.ctx = {}, P.callback = F, P));
                                if (E || !r && !k.Ld) {
                                    r = !0;
                                    m();
                                    y && y();
                                    var ac = p(da);
                                    P = (Da(k.C("lastHit")) || 0) < ac - 18E5;
                                    var Xg = .1 > Math.random();
                                    k.D("lastHit", ac);
                                    ac = Ha((za = {}, za.nb = 1, za.cl = t, za.ar = 1, za));
                                    za = Bd(c);
                                    za = {
                                        J: (Ca = {}, Ca["page-url"] = za.url || U(a).href, Ca),
                                        K: ac,
                                        M: {
                                            force: E
                                        }
                                    };
                                    Ca = oc(a, K(c)).warn;
                                    !Q.callback && Q.ctx && Ca("nbnc");
                                    (Ca = E || P || Xg) || (Ca = a.location.href,
                                        P = a.document.referrer, Ca = !(Ca && P ? fj(Ca) === fj(P) : !Ca && !P));
                                    if (Ca) return Ca = g(za, c), Uc(a, "l.o.l", Ca, Q.callback, Q.ctx)
                                }
                                return null
                            }
                        }
                        var e, f, g = qa(a, "n", c),
                            h = K(c),
                            k = ad(a, c.id),
                            l = u(u(h, Ye(a)), w(ua, V("accurateTrackBounce"))),
                            m = u((e = {}, e.accurateTrackBounce = !0, e), Ge(a, h)),
                            p = ja(a),
                            q = p(da),
                            r = !1,
                            t = 0,
                            y;
                        na(c, function(E) {
                            t = E.hh - q
                        });
                        c.Me && b(c.Me);
                        e = (f = {}, f.notBounce = d(!0), f.u = y, f);
                        e.accurateTrackBounce = b;
                        return e
                    }),
                mq = oa(jc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                pt = B("clm.p", function(a, c) {
                    if (ie(a)) return F;
                    var b = qa(a, "m", c),
                        d = K(c),
                        e = ja(a),
                        f = e(da),
                        g = u(u(d, Ye(a)), w(ua, V("clickmap"))),
                        h, k = null;
                    d = C(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = J(a),
                                q = p.C("cls", {
                                    $b: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.D("cls", {
                                $b: q.$b + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = z(function(y) {
                                return ("" + y).toUpperCase()
                            }, p.ignoreTags || []);
                            Y(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: nq(a, l),
                                position: bj(a, l),
                                button: oq(l),
                                time: e(da)
                            };
                            p = U(a).href;
                            if (lq(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h
                                }
                                r =
                                    Le(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = hg(a, l.element);
                                q = ["rn", Xa(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", pf(a, l.element), "X", l.position.x, "Y", l.position.y];
                                q = G(":", q);
                                m && (q += ":wh:1");
                                kq(a, p, q, b, c);
                                k = l
                            }
                        }
                    });
                    return ka(a).F(n(a, "document"), ["click"], d)
                }),
                qt = B("trigger.in", function(a, c) {
                    c.hg && Rb(a, D([a, "yacounter" + c.id + "inited"], hr), "t.i")
                }),
                rt = B("c.m.p", function(a, c) {
                    var b, d = K(c);
                    return b = {}, b.clickmap = u(Ge(a,
                        d), jq), b
                }),
                Ni = u("form", Wb),
                Xp = u("form", hb),
                iq = v(w(eb, db(na)(V("settings.form_goals"))), eb),
                st = B("s.f.i", function(a, c) {
                    var b, d = [],
                        e = [],
                        f = ka(a);
                    d.push(f.F(a, ["click"], C(a, "s.f.c", D([a, c, e], hq))));
                    d.push(f.F(a, ["submit"], C(a, "s.f.e", function(g) {
                        var h = n(g, "target");
                        g = n(g, "isTrusted");
                        Zi(!0, a, c, e, h, g)
                    })));
                    $i(a, c, "fgi", (b = {}, b.id = c.id, b));
                    return D([ze, d], x)
                }),
                tt = B("s.f.i", function(a, c) {
                    return na(c, function(b) {
                        var d;
                        if (n(b, "settings.button_goals")) return b = ka(a).F(a, ["click"], C(a, "c.t.c", w(D([a, c], df(a,
                            c, "", gq))))), nc(a, c, "gbi", (d = {}, d.id = c.id, d))(), b
                    })
                }),
                bc, Td, Yg, dd, Eb, Sf = (bc = {}, bc.transaction_id = "id", bc.item_brand = "brand", bc.index = "position", bc.item_variant = "variant", bc.value = "revenue", bc.item_category = "category", bc.item_list_name = "list", bc),
                mc = (Td = {}, Td.item_id = "id", Td.item_name = "name", Td.promotion_name = "coupon", Td),
                fq = (Yg = {}, Yg.promotion_name = "name", Yg),
                pl = (dd = {}, dd.promotion_name = "name", dd.promotion_id = "id", dd.item_id = "product_id", dd.item_name = "product_name", dd),
                cq = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
                dq = (Eb = {}, Eb.view_item = {
                    event: "detail",
                    wa: mc,
                    Ia: "products"
                }, Eb.add_to_cart = {
                    event: "add",
                    wa: mc,
                    Ia: "products"
                }, Eb.remove_from_cart = {
                    event: "remove",
                    wa: mc,
                    Ia: "products"
                }, Eb.begin_checkout = {
                    event: "checkout",
                    wa: mc,
                    Ia: "products"
                }, Eb.purchase = {
                    event: "purchase",
                    wa: mc,
                    Ia: "products"
                }, Eb.view_item_list = {
                    event: "impressions",
                    wa: mc
                }, Eb.select_item = {
                    event: "click",
                    Ia: "products",
                    wa: mc
                }, Eb.view_promotion = {
                    event: "promoView",
                    Ia: "promotions",
                    wa: pl
                }, Eb.select_promotion = {
                    event: "promoClick",
                    Ia: "promotions",
                    wa: pl
                }, Eb),
                Yi =
                B("dl.w", function(a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = M(g) && Ee(a, g, b)) || (f = T(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return la(a, f)
                    }
                }),
                ut = B("p.e", function(a, c) {
                    var b = Ja(a, c);
                    if (b) {
                        var d = J(a);
                        b = b.params;
                        var e = C(a, "h.ee", D([a, K(c), b], aq));
                        return c.od ? (d.D("ecs", 0), Xi(a, c.od, e)) : na(c, function(f) {
                            if ((f = n(f, "settings.ecommerce")) && ea(f)) return d.D("ecs", 1), Xi(a, f, e)
                        })
                    }
                }),
                ql = v(function(a) {
                    a = U(a);
                    a = fk(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang ||
                        "ru";
                    return a
                }),
                Ui = w(ql, V("_ym_status-check"), Da),
                vt = w(ql, V("_ym_lang")),
                Up = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
                Vp = /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
                Ti = cb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Zp = ["form", "button", "status"],
                Zg = [],
                Wp = v(function(a, c, b) {
                    x(w(Lc([a, c, b]), ua), Zg);
                    b.inline ? (c = Si(a, b), b = b.id, Mi(a, c, void 0 ===
                        b ? "" : b)) : b.resource && Ti(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, $p(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                wt = B("cs.init", function(a, c) {
                    var b, d = Ui(a);
                    if (d && c.id === d && "0" === c.ba) {
                        var e = Si(a, (b = {}, b.lang = vt(a), b.fileId = "status", b));
                        T(a, D([a, e, "" + d], Mi), 0, "cs")
                    }
                }),
                xt = B("suid.int", function(a, c) {
                    var b;
                    return b = {}, b.setUserID = function(d, e, f) {
                            if (ea(d) || Vb(a, d)) {
                                var g = Ja(a, c);
                                d = le(["__ym", "user_id", d]);
                                g.params(d, e || F, f)
                            } else oc(a, K(c)).error("wuid")
                        },
                        b
                }),
                yt = B("up.int", function(a, c) {
                    var b;
                    return b = {}, b.userParams = C(a, "up.c", function(d, e, f) {
                        var g, h = Ja(a, c),
                            k = oc(a, K(c)).warn;
                        h ? ia(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || F, f)) : k("wup") : k("nci")
                    }), b
                }),
                zt = /[\*\.\?\(\)]/g,
                At = v(function(a, c, b) {
                    var d;
                    try {
                        var e = b.replace("\\s", " ").replace(zt, "");
                        oc(a, "").warn("nnw", (d = {}, d.name = e, d))
                    } catch (f) {}
                }, eb),
                Bt = B("r.nn", function(a) {
                    Pe(a) && Ee(a, zg, function(c) {
                        c.ya.F(function(b) {
                            At(a, b[1], b[0]);
                            zg.splice(100)
                        })
                    })
                }),
                Ct = B("e.a.p", function(a, c) {
                    var b, d = Ja(a, c);
                    d = D([w(R, Ba(!0)), Ea(z(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], z);
                    c.Yg && d();
                    return b = {}, b.enableAll = d, b
                }),
                Dt = v(rc, K),
                Et = B("fpi", function(a) {
                    var c = wd(a);
                    if (c && !a.document.hidden) {
                        var b = J(a).Ga;
                        b("fpe", 1);
                        var d = ka(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function() {
                            a.document.hidden && (b("fht", c.now()), d())
                        })
                    }
                }),
                Ft = v(function(a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = Se("log", c) ? H(c, a) : F;
                    var b = n(a, "warn");
                    b = Se("warn", b) ? H(b, a) : c;
                    var d = n(a, "error");
                    a = Se("error", d) ? H(d, a) : c;
                    return {
                        log: c,
                        error: a,
                        warn: b
                    }
                }),
                Gt = u("add", ye),
                Ht = u("remove", ye),
                It = u("detail", ye),
                Jt = u("purchase", ye),
                Kt = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                nf = v(function(a) {
                    var c = Pk(a);
                    a = c.lg;
                    if (!c.qf) return !1;
                    c = Ka("indexOf", a);
                    c = Va(w(c, Aa(-1), Gc), Kt);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                cn = v(function(a) {
                    var c = tb(a);
                    return c ? gb(c, "YangoEats") ||
                        vd(a) : !1
                }),
                Rp = /([0-9\\.]+) Safari/,
                Lt = /\sYptp\/\d\.(\d+)\s/,
                rl = v(function(a) {
                    var c;
                    a: {
                        if ((c = tb(a)) && (c = Lt.exec(c)) && 1 < c.length) {
                            c = Da(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || uf(a, 79) ? !1 : !Pd(a) || nf(a)
                }),
                sl = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                Mt = v(function(a) {
                    a = sb(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = H(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                tl = ma(String.prototype.repeat, "repeat"),
                gi = tl ? function(a, c) {
                    return tl.call(a, c)
                } : Op,
                ai = u(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = gi(c, b);
                    return a ? c + d : d + c
                }),
                Te = [2277735313, 289559509],
                Ue = [1291169091,
                    658871167
                ],
                Nt = B("p.cd", function(a) {
                    if (se(a) || Jg(a)) {
                        var c = Ta(a);
                        if (aa(c.C("jn"))) {
                            c.D("jn", !1);
                            var b = a.chrome || xd(a) ? function() {} : /./;
                            a = Ft(a);
                            b.toString = function() {
                                c.D("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            a.log("%c%s", "color: inherit", b)
                        }
                    }
                }),
                Ot = v(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Qa(a) && Va(w(V("name"), cb(/Chrome PDF Viewer/)), a))
                }),
                Fb = oa(function(a, c) {
                    return J(c).C(a, null)
                }),
                Lp = {
                    "*": "+",
                    "-": "/",
                    pj: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                Pt = v(function(a) {
                    return O(n(a, "yandex.getSiteUid")) ?
                        a.yandex.getSiteUid() : null
                }),
                Qt = v(u("panoramaId", ve)),
                Rt = v(function(a) {
                    return ve("pubcid.org", a) || ve("_pubCommonId", a)
                }),
                St = v(u("_sharedid", ve)),
                Tt = v(function(a, c) {
                    if (c.Ua) return null;
                    var b = jd(a, "").C("_ga");
                    return b && qd(we(b))
                }, w(eb, K)),
                Hp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                yb, Gp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd",
                        "domContentLoadedEventStart"
                    ],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                Ji = (yb = {}, yb.responseEnd = 1, yb.domInteractive = 1, yb.domContentLoadedEventStart = 1, yb.domContentLoadedEventEnd = 1, yb.domComplete = 1, yb.loadEventStart = 1, yb.loadEventEnd = 1, yb.unloadEventStart = 1, yb.unloadEventEnd = 1, yb.secureConnectionStart = 1, yb),
                Jp = v(zd),
                Dp = v(rc),
                Ep = v(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (O(c) && !se(a)) return (new L(H(c, a, 0, 0))).then(function() {
                        var d =
                            n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](u(!0, R));
                    if (Kd(a)) return c = n(a, "navigator.serviceWorker"), L.resolve(Y(c));
                    c = n(a, "openDatabase");
                    if (xd(a) && O(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return L.resolve(b)
                    }
                    return L.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                Ut = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                Vt = v(function(a, c) {
                    var b = Sc(a),
                        d = U(a).search.match(Ut);
                    return d && 2 <= d.length ?
                        (d = d[2], c.Ua || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                }),
                op = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                pp = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Ii = {
                    J: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                lp = {
                    dg: 60,
                    error: 15
                },
                kp = {
                    dg: 5,
                    error: 1
                },
                Gi = {
                    id: 42822899,
                    ba: "0"
                },
                Wt = B("pa.plgn", function(a, c) {
                    var b = ee(a, c);
                    b && b.$.F(["pluginInfo"], C(a, "c.plgn", function() {
                        var d = J(a);
                        d.D("cmc", d.C("cmc", 0) + 1);
                        return ik(c)
                    }))
                }),
                Qb, mb, Wm = (Qb = {}, Qb.am = "com.am", Qb.tr = "com.tr", Qb.ge = "com.ge", Qb.il = "co.il", Qb["\u0440\u0444"] = "ru", Qb["xn--p1ai"] = "ru", Qb["\u0431\u0435\u043b"] = "by", Qb["xn--90ais"] = "by", Qb),
                ul = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                Xm = (mb = {}, mb.ka = "ge", mb.ro = "md", mb.tg = "tj", mb.tk = "tm", mb.et = "ee", mb.hy = "com.am", mb.he = "co.li", mb.ky = "kg", mb.be = "by", mb.tr = "com.tr", mb.kk = "kz", mb),
                vl = /^https?:\/\//,
                Xt = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    849340123: 1,
                    3735661796: 1,
                    3082499531: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                    3015043526: 1
                },
                wl = v(function() {
                    return N(function(a, c) {
                        var b = hc(c + "/tag.js");
                        a[b] = 1;
                        return a
                    }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                Yt = v(function(a) {
                    a = wd(a);
                    if (!a || !O(a.getEntriesByType)) return null;
                    a = a.getEntriesByType("resource");
                    var c = wl();
                    return (a = ib(function(b) {
                        b = b.name.replace(vl, "").split("?")[0];
                        b = hc(b);
                        return c[b]
                    }, a)) ? rb(a.transferSize) : null
                }),
                yp = "ar:1:pv:1:v:" + ta.bb + ":vf:" + Yc.version,
                zp = ta.Qa + "//" + kc + "/watch/" + ta.pg,
                xl = {},
                Zt = B("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                        var g, h;
                        if (ea(d) && !(0 >= d.length)) {
                            var k = qa(a, "e", c),
                                l = Bd(c).url;
                            d = k({
                                K: Ha((g = {}, g.ex = 1, g.ar = 1, g)),
                                J: (h = {}, h["page-url"] = l || U(a).href, h.exp = d, h)
                            }, c);
                            return Uc(a, "exps.s", d, e || F, f)
                        }
                    }, b
                }),
                of = [],
                $t = B("p.fh", function(a, c) {
                    var b,
                        d;
                    void 0 === c && (c = !0);
                    var e = Ta(a),
                        f = ja(a),
                        g = e.C("wasSynced"),
                        h = {
                            id: 3,
                            ba: "0"
                        };
                    return c && g && g.time + 864E5 > f(da) ? L.resolve(g) : qa(a, "f", h)({
                        K: Ha((b = {}, b.pv = 1, b)),
                        J: (d = {}, d["page-url"] = U(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(da), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.D("wasSynced", k);
                        return k
                    })["catch"](C(a, "f.h"))
                }),
                au = oa(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Ud.D("ymoo" + a.qa, a.fg(pb)), a.jd && a.jd.destruct && a.jd.destruct())
                }),
                he = w(V("settings.pcs"), Aa("1")),
                yl = kc.split("."),
                bu = yl.pop(),
                zl = G(".", yl),
                Vm = v(function(a) {
                    a = U(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                Eh = v(function(a) {
                    return -1 !== U(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                cu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/,
                de = v(function(a) {
                    a = U(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(cu));
                    return c
                }),
                du = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                rp = v(function(a) {
                    a = U(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(du));
                    return c
                }),
                ph = ta.Qa + "//" + kc + "/metrika",
                ne = ph + "/metrika_match.html",
                Ze, vp = (Ze = {}, Ze.s = "p", Ze["8"] = "i", Ze),
                sp = vb("csp", function(a, c) {
                    return qa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                $g = "et w v z i u vf".split(" "),
                Al = Id("wv"),
                eu = Id("pub"),
                vi = function() {
                    function a(c,
                        b) {
                        this.l = c;
                        this.type = b
                    }
                    a.isEnabled = function(c) {
                        return !!c.JSON
                    };
                    a.prototype.Fa = function(c) {
                        return Bf(Lb(this.l, c))
                    };
                    a.prototype.sb = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = Lb(this.l, c.data));
                        return b
                    };
                    a.prototype.jb = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.te = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    return a
                }(),
                fp = v(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f,
                        g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return gp;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                bp = Ei(!1),
                ap = Ei(!0),
                ba, Jc, Bl = (ba = {}, ba.mousemove = 0, ba.mouseup = 1, ba.mousedown = 2, ba.click = 3, ba.scroll = 4, ba.windowblur = 5, ba.windowfocus = 6, ba.focus = 7, ba.blur = 8, ba.eof = 9, ba.selection = 10, ba.change = 11, ba.input = 12, ba.touchmove = 13, ba.touchstart = 14, ba.touchend = 15, ba.touchcancel = 16, ba.touchforcechange =
                    17, ba.zoom = 18, ba.resize = 19, ba.keystroke = 20, ba.deviceRotation = 21, ba.fatalError = 22, ba.hashchange = 23, ba.stylechange = 24, ba.articleInfo = 25, ba.publishersHeader = 26, ba.pageData = 27, ba.mutationAdd = 28, ba.mutationRemove = 29, ba.mutationTextChange = 30, ba.mutationAttributesChange = 31, ba),
                Cl = (Jc = {}, Jc.page = 0, Jc.event = 1, Jc.mutation = 2, Jc.publishers = 3, Jc.activity = 4, Jc),
                ui = function() {
                    function a(c, b) {
                        var d, e, f = this;
                        this.isSync = !1;
                        this.Db = [];
                        this.$g = (d = {}, d.ad = "mutationAdd", d.re = "mutationRemove", d.tc = "mutationTextChange",
                            d.ac = "mutationAttributesChange", d.page = "pageData", d);
                        this.Vg = (e = {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange = "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent", e.click = "mouseEvent", e.focus = "focusEvent", e.blur =
                            "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "styleChangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e);
                        this.vh = function(g) {
                            var h = g.type;
                            return g.event || "publishersHeader" !== h && "articleInfo" !== h ? {
                                type: Cl[h],
                                event: Bl[f.$g[g.event] || g.event]
                            } : {
                                type: Cl.publishers,
                                event: Bl[h]
                            }
                        };
                        this.zf = function(g) {
                            var h = !Y(g.partNum),
                                k = f.vh(g);
                            k = {
                                stamp: g.stamp,
                                type: k.type,
                                event: k.event,
                                frameId: g.frameId,
                                chunk: h ?
                                    g.data : void 0,
                                partNum: g.partNum,
                                end: g.end
                            };
                            !h && g.data && (h = f.Vg[g.event] || g.event || g.type) && (k[h] = g.data);
                            return k
                        };
                        this.l = c;
                        this.type = b
                    }
                    a.prototype.Fa = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = fc(c, this.zf),
                            f = this.isSync || b ? Infinity : 10;
                        e = kd(this.l, e, f);
                        var g = [e];
                        this.Db.push(e);
                        return e(Mg(function(h) {
                            h = xi(d.l, Ro, {
                                Ei: h
                            });
                            h = kd(d.l, h, f, og);
                            g.push(h);
                            d.Db.push(h);
                            return h
                        }))(Mg(function(h) {
                            h = wi(d.l, h.slice(-4));
                            h = kd(d.l, h, f, og);
                            g.push(h);
                            d.Db.push(h);
                            return h
                        }))(el(function(h) {
                            h = h[h.length - 1];
                            x(function(k) {
                                k = Fe(d.l)(k, d.Db);
                                d.Db.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.sb = function(c) {
                        return xi(this.l, yi, this.zf(c))(pg(F))
                    };
                    a.prototype.jb = function(c) {
                        return c[0]
                    };
                    a.prototype.te = function(c, b) {
                        for (var d = wi(this.l, c)(pg(F)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    a.isEnabled = function(c) {
                        var b = Pe(c),
                            d = !1;
                        try {
                            d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size
                        } catch (e) {}
                        return !b && d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice"))
                    };
                    return a
                }(),
                Dl = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                fu = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                gu = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.yc = !1;
                        this.meta = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.involvedTime = this.xf = 0;
                        this.Wd = this.Ef = "";
                        this.fa = [];
                        this.qe = this.Oa = 0;
                        this.wb = {
                            h: 0,
                            w: 0
                        };
                        this.buffer = [];
                        this.qg = fu;
                        this.flush = function() {
                            g.qe = T(g.l, g.flush,
                                2500);
                            var h = g.Ad();
                            if (g.buffer.length || h) {
                                var k = Re(g.buffer);
                                h && k.push(h);
                                g.Ef = g.Wd;
                                g.ja.Fa(k)(Za(C(g.l, "p.b.st"), function(l) {
                                    l && g.Qb(l)
                                }))
                            }
                        };
                        this.Qb = e;
                        this.ja = d;
                        this.Vb = H(this.Vb, this);
                        this.Ad = H(this.Ad, this);
                        this.flush = H(this.flush, this);
                        this.l = c;
                        this.qa = f;
                        this.Oc = b;
                        this.Qd = "pai" + b.id;
                        this.Hb();
                        this.Ue = ka(this.l);
                        this.time = ja(this.l);
                        this.jg();
                        this.Dd = J(this.l);
                        this.Fe = null
                    }
                    a.prototype.start = function() {
                        this.qe = T(this.l, this.flush, 2500);
                        if (!this.yc) {
                            this.Pi();
                            var c = this.Dd.C(this.Qd, []),
                                b = !c.length;
                            c.push(H(this.ai, this));
                            this.Dd.Ga(this.Qd, c);
                            b && this.Nf();
                            this.Fe = ka(this.l).F(this.l, ["click"], H(this.Ni, this));
                            this.Vb({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.bj();
                        this.yc = !0;
                        this.flush();
                        la(this.l, this.qe)
                    };
                    a.prototype.tf = function(c) {
                        return Wb("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.Nf = function() {
                        var c = this;
                        C(this.l, "p.ic" + this.Oc.id, function() {
                            if (!c.yc) {
                                var b = c.Dd.C(c.Qd),
                                    d = c.Oc.gh();
                                x(function(e) {
                                        var f = z(function(g) {
                                            return A({}, g)
                                        }, d);
                                        O(e) && e(f)
                                    },
                                    b);
                                c.Oa = T(c.l, H(c.Nf, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.ai = function(c) {
                        this.yc || (this.cj(c), this.dj(), this.Jg())
                    };
                    a.prototype.Og = function(c, b) {
                        return (c.ne || 0) <= (b.ne || 0) ? b : c
                    };
                    a.prototype.Ni = function(c) {
                        if (this.fa.length) {
                            c = dj(c);
                            var b = U(this.l).hostname,
                                d;
                            if (d = c) d = De(c.hostname) === De(b);
                            d && (c = N(this.Og, this.fa[0], this.fa).id, b = Dc(this.l), ad(this.l, this.qa.split(":")[0]).D("pai", c + "-" + b))
                        }
                    };
                    a.prototype.Vb = function(c) {
                        var b = this;
                        C(this.l, "p.ec." + this.Oc.id, function() {
                            var d, e;
                            try {
                                var f = c.type;
                                var g = c.target
                            } catch (p) {
                                return
                            }
                            var h =
                                "page" === f;
                            if ("scroll" === f || h) {
                                var k = [b.l, b.l.document, b.l.document.documentElement, Hc(b.l)];
                                I(g, k) && b.Hb()
                            }("resize" === f || h) && b.jg();
                            f = b.time(da);
                            var l = Math.min(f - b.xf, 5E3);
                            b.involvedTime += Math.round(l);
                            b.xf = f;
                            if (b.meta && b.scroll && b.wb) {
                                var m = b.wb.h * b.wb.w;
                                b.fa = z(function(p) {
                                    var q = A({}, p),
                                        r = b.meta[q.id],
                                        t = Nc(p.Cb);
                                    if (!r || b.tf(q.element) || !t) return q;
                                    p = b.l.Math;
                                    r = p.max((b.scroll.y + b.wb.h - r.y) / r.height, 0);
                                    var y = t.height * t.width;
                                    t = Ch(b.l, t, b.wb);
                                    q.ne = t / m;
                                    q.visibility = t / y;
                                    if (.9 <= q.visibility || .1 <= q.ne) q.involvedTime +=
                                        l;
                                    q.maxScrolled = p.round(1E4 * r) / 1E4;
                                    return q
                                }, b.fa);
                                ub(b.l, (d = {}, d.name = "publishers", d.counterKey = b.qa, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = z(function(p) {
                                    var q;
                                    return A((q = {}, q.contentElement = p.Cb, q), p)
                                }, b.fa), e), d))
                            }
                        })()
                    };
                    a.prototype.cj = function(c) {
                        var b = z(function(d) {
                            return d.id
                        }, this.fa);
                        this.fa = this.fa.concat(ha(function(d) {
                            return !I(d.id, b)
                        }, c))
                    };
                    a.prototype.jg = function() {
                        var c = $d(this.l) || Oc(this.l);
                        this.wb = {
                            w: c[0],
                            h: c[1]
                        }
                    };
                    a.prototype.dj = function() {
                        var c = this;
                        C(this.l, "p.um." +
                            this.Oc.id,
                            function() {
                                var b = [];
                                c.Hb();
                                c.meta = zb(function(d, e) {
                                    var f;
                                    if (c.tf(e.element)) b.push(e), delete d[e.id];
                                    else {
                                        var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                        e.Cb && (f = Nc(e.Cb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                        d[e.id] = g
                                    }
                                    return d
                                }, {}, c.fa);
                                x(function(d) {
                                    d = Fe(c.l)(d, c.fa);
                                    c.fa.splice(d,
                                        1)
                                }, b)
                            })()
                    };
                    a.prototype.Ad = function() {
                        var c, b, d = z(u(this.meta, n), fa(this.meta));
                        return d.length && (this.Wd = Lb(this.l, d), this.Ef !== this.Wd) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
                    };
                    a.prototype.Jg = function() {
                        var c = this;
                        if (this.fa.length) {
                            var b = z(function(d) {
                                var e, f = N(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.qg);
                                d.Yf = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e
                            }, ha(function(d) {
                                return !d.Yf
                            }, this.fa));
                            b.length &&
                                (this.buffer = this.buffer.concat(b), Ib(this.l, this.qa, ["pdf", b]))
                        }
                    };
                    a.prototype.Pi = function() {
                        this.Ue.F(this.l, Dl, this.Vb)
                    };
                    a.prototype.bj = function() {
                        this.Fe && this.Fe();
                        this.Ue.vb(this.l, Dl, this.Vb)
                    };
                    a.prototype.Hb = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                Ud, ah = (Ud = {}, Ud[1] = 500, Ud[2] = 500, Ud[3] = 0, Ud),
                hu = ["topics", "rubric", "authors"],
                bh = function() {
                    function a(c,
                        b) {
                        var d, e = this;
                        this.id = "a";
                        this.Kd = !1;
                        this.Eb = {};
                        this.rb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Bf: ["article"]
                        };
                        this.De = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.Xe = v(function(f, g, h) {
                            var k;
                            Ib(e.l, e.qa, "pfi", (k = {}, k.field = f, k.itemField = g, k.value = h, k))
                        }, function(f, g, h) {
                            return "" + f + g + h
                        });
                        this.fj = function(f) {
                            hu.forEach(function(g) {
                                f[g] && (f[g] = f[g].reduce(function(h, k) {
                                    var l = k.name,
                                        m = k.position;
                                    if (!l) return e.Xe(g, "name", l), h;
                                    if ("string" === typeof m) {
                                        l = je(m);
                                        if (null ===
                                            l || e.l.isNaN(l)) return e.Xe(g, "position", m), h;
                                        k.position = l
                                    }
                                    h.push(k);
                                    return h
                                }, []))
                            });
                            return f
                        };
                        this.Pg = v(function(f, g) {
                            var h;
                            Ib(e.l, e.qa, ["pcs", g], (h = {}, h.chars = g.chars, h.limit = ah[g.type], h))
                        });
                        this.l = c;
                        this.root = gc(c);
                        this.qa = b
                    }
                    a.prototype.Ka = function(c) {
                        return c.element
                    };
                    a.prototype.ef = function(c, b) {
                        var d = this,
                            e;
                        C(this.l, "P.s." + b, function() {
                            e = d.Eb[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.Ci = function(c) {
                        var b = A({}, c);
                        this.Kd && !b.id && I(c.type, [3, 2]) && (c = G(", ", z(V("name"), b.authors || [])), b.pageTitle =
                            c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.Fh(b.Cb));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Dh());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.Ca = function(c) {
                        var b = this,
                            d = {},
                            e = this.Ka(c);
                        if (!e) return null;
                        d.type = c.type;
                        x(function(g) {
                            d[g] = b.ef(c, g)
                        }, fa(this.Eb));
                        var f = ja(this.l);
                        d.stamp = f(Wj);
                        d.element = c.element;
                        d.Cb = e;
                        d = this.fj(this.Ci(d));
                        d.id = d.id ? hc(d.id) : 1;
                        d.update = function(g) {
                            return b.Ka(c) ? b.ef(c,
                                g) : void 0
                        };
                        return d
                    };
                    a.prototype.Fh = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = ab(ec("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.Dh = function() {
                        var c = ec('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.kf = function() {
                        return 1
                    };
                    a.prototype.oc = function() {
                        return []
                    };
                    a.prototype.gh = function() {
                        var c = this,
                            b = this.oc(),
                            d = 1;
                        return zb(function(e, f) {
                            var g = c.Ca({
                                element: f,
                                type: c.kf(f)
                            }) || [];
                            M(g) || (g = [g]);
                            g = zb(function(h, k) {
                                var l = h.values,
                                    m = h.mf;
                                k && k.chars > ah[k.type] && !I(k.id, m) ? (l.push(k), m.push(k.id)) : k &&
                                    k.chars <= ah[k.type] && c.Pg(k.id, k);
                                return {
                                    values: l,
                                    mf: m
                                }
                            }, {
                                values: [],
                                mf: z(V("id"), e)
                            }, g).values;
                            return e.concat(z(function(h) {
                                var k;
                                h = A((k = {
                                    index: d,
                                    Yf: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                El = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Kd = !0;
                        d.Qe = G(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Eb = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity ||
                                e.data.mainEntityOfPage;
                            !f && ia(e) && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            var f = e.data;
                            return ea(f.text) ? f.text.length : Jb(this.Ka(e)).length
                        }, b.authors = function(e) {
                            e = e.data;
                            var f = [];
                            f = f.concat(this.nc(e, "author"));
                            f = f.concat(this.nc(e.mainEntity, "author"));
                            return f.concat(this.nc(e.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data,
                                g = f.headline || "";
                            f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                            "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed));
                            3 === e.type && ia(f.parentItem) &&
                                (g = f.parentItem.text);
                            return g
                        }, b.updateDate = function(e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.nc(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.Ka(e);
                            e = Ea(z(function(h) {
                                h = Kb(f.l, Jb(h));
                                if (ia(h) || M(h)) {
                                    var k = f.ff(h);
                                    if (k) return N(function(l, m) {
                                        return l ? l : ia(m) && "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" ===
                                        h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(hb(this.Qe, document.body === g ? document.documentElement : g))));
                            return e.length && (e = e[0].itemListElement, M(e)) ? Ea(z(function(h) {
                                return ia(h) && h.item && ia(h.item) && !f.l.isNaN(h.position) ? {
                                    name: h.item.name || h.name,
                                    position: h.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.nc = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = M(b[d]) ? b[d] : [b[d]];
                        b = Ea(z(function(f) {
                            return f ? "string" === typeof f ? f : N(function(g, h) {
                                    return g || "" + f[h]
                                }, "",
                                e) : null
                        }, b));
                        return z(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.Ka = function(b) {
                        var d = b.element,
                            e = b.data || {};
                        b = e["@id"];
                        var f = e.url;
                        e = null;
                        f && ea(f) && (e = this.We(f));
                        !e && b && ea(b) && (e = this.We(b));
                        e || (e = b = d.parentNode, !Wb("head", this.l, d) && b && 0 !== Jb(b).length) || (e = this.l.document.body);
                        return e
                    };
                    c.prototype.We = function(b) {
                        try {
                            var d = yc(this.l, b).hash;
                            if (d) {
                                var e = ec(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.ce = function(b) {
                        return this.De[b["@type"]] || 1
                    };
                    c.prototype.Ca =
                        function(b) {
                            var d = this,
                                e = b.element,
                                f = b.data;
                            if (!f && (f = Kb(this.l, Jb(e)), !f || !/schema\.org/.test(f["@context"]) && !M(f))) return null;
                            var g = this.ff(f);
                            if (g) return z(function(k) {
                                return ia(k) && I(k["@type"], d.rb["schema.org"]) ? a.prototype.Ca.call(d, {
                                    element: e,
                                    data: k,
                                    type: d.ce(k)
                                }) : null
                            }, g);
                            b.data = f;
                            if ("QAPage" === b.data["@type"]) {
                                var h = b.data.mainEntity || b.data.mainEntityOfPage;
                                if (!h) return null
                            }
                            "Question" === b.data["@type"] && (h = b.data);
                            return h ? (b = wc(u(h, n), ["acceptedAnswer", "suggestedAnswer"]), z(function(k) {
                                var l;
                                if (!ia(k) || !I(k["@type"], d.rb["schema.org"])) return null;
                                k = {
                                    element: e,
                                    type: d.ce(k),
                                    data: A((l = {}, l.parentItem = h, l), k)
                                };
                                return a.prototype.Ca.call(d, k)
                            }, b)) : I(b.data["@type"], this.rb["schema.org"]) ? a.prototype.Ca.call(this, A(b, {
                                type: this.ce(b.data)
                            })) : null
                        };
                    c.prototype.oc = function() {
                        return hb(this.Qe, this.root)
                    };
                    c.prototype.ff = function(b) {
                        if (M(b)) return b;
                        if (b && M(b["@graph"])) return b["@graph"]
                    };
                    return c
                }(bh),
                ch = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Kd = !0;
                        d.aj = Ka("exec", new RegExp("schema.org\\/(" + G("|", fa(d.De)) + ")$"));
                        d.Eb = (b = {}, b.id = function(e) {
                                e = e.element;
                                var f = fb(this.l, e, "identifier");
                                return f ? ab(f) : (f = fb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                            }, b.chars = function(e) {
                                var f = 0;
                                e = e.element;
                                for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                    var k = fb(this.l, e, g[h]);
                                    if (k) {
                                        f = ab(k).length;
                                        break
                                    }
                                }
                                e = Jb(e);
                                0 === f && e && (f += e.length);
                                return f
                            }, b.topics = function(e) {
                                var f =
                                    this,
                                    g = Od(this.l, e.element, "about");
                                return z(function(h) {
                                    var k = {
                                        name: ab(h)
                                    };
                                    if (g = fb(f.l, h, "name")) k.name = ab(g);
                                    return k
                                }, g)
                            }, b.rubric = function(e) {
                                var f = this;
                                (e = ec('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = ec('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                                return e ? z(function(g) {
                                    return {
                                        name: ab(fb(f.l, g, "name")),
                                        position: ab(fb(f.l, g, "position"))
                                    }
                                }, Od(this.l, e, "itemListElement")) : []
                            }, b.updateDate = function(e) {
                                return (e = fb(this.l, e.element, "dateModified")) ? wk(e) : ""
                            }, b.publicationDate =
                            function(e) {
                                return (e = fb(this.l, e.element, "datePublished")) ? wk(e) : ""
                            }, b.pageUrlCanonical = function(e) {
                                e = Od(this.l, e.element, "url");
                                if (e.length) {
                                    var f = e[0];
                                    return f.href ? f.href : ab(e)
                                }
                                return null
                            }, b.pageTitle = function(e) {
                                var f = "",
                                    g = e.element,
                                    h = fb(this.l, g, "headline");
                                h && (f += ab(h));
                                (h = fb(this.l, g, "alternativeHeadline")) && (f += " " + ab(h));
                                "" === f && ((h = fb(this.l, g, "name")) || (h = fb(this.l, g, "itemReviewed")), h && (f += ab(h)));
                                3 === e.type && (e = Wb('[itemtype$="schema.org/Question"]', this.l, g)) && (e = fb(this.l, e, "text")) &&
                                    (f += ab(e));
                                return f
                            }, b.authors = function(e) {
                                var f = this;
                                e = Od(this.l, e.element, "author");
                                return z(function(g) {
                                    var h, k = (h = {}, h.name = "", h);
                                    /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = fb(f.l, g, "name")) && (k.name = ab(h));
                                    k.name || (k.name = g.getAttribute("content") || Jb(g) || g.getAttribute("href"));
                                    return k
                                }, e)
                            }, b);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.kf = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.aj(b)) ? this.De[b[1]] : 1
                    };
                    c.prototype.Ca = function(b) {
                        return b.element && Jb(b.element).length ?
                            a.prototype.Ca.call(this, b) : null
                    };
                    c.prototype.oc = function() {
                        var b = G(",", z(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.rb["schema.org"]));
                        return hb(b, this.root)
                    };
                    return c
                }(bh),
                Fl = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Eb = (e = {}, e.chars = function(g) {
                                g = this.Ka(g);
                                return Jb(g).length
                            }, e.authors = function(g) {
                                return this.wd(g.data.author)
                            }, e.pageTitle = function(g) {
                                return this.sc(g.data.title) || ""
                            }, e.updateDate = function(g) {
                                return this.sc(g.data.modified_time)
                            }, e.publicationDate =
                            function(g) {
                                return this.sc(g.data.published_time)
                            }, e.pageUrlCanonical = function(g) {
                                return this.sc(g.data.url)
                            }, e.rubric = function(g) {
                                return this.wd(g.data.section)
                            }, e.topics = function(g) {
                                return this.wd(g.data.tag)
                            }, e);
                        f.Zg = new RegExp("^(og:)?((" + G("|", f.rb.Bf) + "):)?");
                        return f
                    }
                    Ma(c, a);
                    c.prototype.wd = function(b) {
                        var d;
                        return b ? M(b) ? z(function(e) {
                            var f;
                            return f = {}, f.name = e ? "" + e : null, f
                        }, b) : [(d = {}, d.name = b ? "" + b : null, d)] : []
                    };
                    c.prototype.sc = function(b) {
                        return M(b) ? b.length ? "" + b[0] : null : b ? "" + b : null
                    };
                    c.prototype.oc =
                        function() {
                            var b = hb('meta[property="og:type"]', this.l.document.body);
                            return [this.l.document.head].concat(b)
                        };
                    c.prototype.uh = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.Ka(b);
                        e = hb("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) x(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Zg, ""),
                                        l = ab(h);
                                    f[k] ? M(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                Qc(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return I(f.type, this.rb.Bf) ? A(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.Ka = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Ca = function(b) {
                        return (b = this.uh(b)) ? a.prototype.Ca.call(this, b) : null
                    };
                    return c
                }(bh),
                Vd = {};
            El && (Vd.json_ld = El);
            ch && (Vd.schema = ch, Vd.microdata = ch);
            Fl && (Vd.opengraph = Fl);
            var iu = B("p.p", function(a, c) {
                    function b(m) {
                        var p = A({}, l);
                        p.Z.ca = m;
                        return f(p, c)["catch"](C(a, "s.ww.p"))
                    }
                    var d, e = ti(a, "9", "8");
                    if (!Fa("querySelectorAll", a.document.querySelectorAll) || !e) return L.resolve();
                    var f =
                        qa(a, "p", c),
                        g = Ha(),
                        h = ad(a, c.id),
                        k = h.C("pai");
                    k && (h.fc("pai"), g.D("pai", k));
                    var l = {
                        J: (d = {}, d["wv-type"] = e.type, d),
                        K: g,
                        Z: {}
                    };
                    return na(c, C(a, "ps.s", function(m) {
                        var p;
                        if (m = n(m, "settings.publisher.schema")) {
                            jk(c) && (m = "microdata");
                            var q = Vd[m];
                            if (q && e) {
                                var r = K(c);
                                q = new q(a, r);
                                q = new gu(a, q, e, b, r);
                                q.start();
                                Ib(a, r, "ps", (p = {}, p.schema = m, p));
                                return H(q.stop, q)
                            }
                        }
                    }))
                }),
                ju = function() {
                    function a(c, b) {
                        this.type = "0";
                        this.l = c;
                        this.sh = b
                    }
                    a.prototype.Fa = function(c) {
                        return Bf(wc(H(this.sb, this), c))
                    };
                    a.prototype.sb = function(c,
                        b) {
                        var d = this,
                            e = [],
                            f = this.sh(this.l, b && b.type, c.type);
                        f && (e = wc(function(g) {
                            return g({
                                l: d.l,
                                na: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.jb = function(c) {
                        return c.length
                    };
                    a.prototype.te = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                Gl = function() {
                    function a(c, b, d) {
                        this.Re = 0;
                        this.de = 1;
                        this.Xc = 5E3;
                        this.l = c;
                        this.ja = b;
                        this.Qb = d
                    }
                    a.prototype.Rc = function() {
                        this.Re = T(this.l, w(H(this.flush, this), H(this.Rc, this)), this.Xc, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.Qb(c, b || [], this.de);
                        this.de += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                go = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.sg = 7500;
                        b.Xc = 3E4;
                        b.Rc();
                        return b
                    }
                    Ma(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.ja.sb(b, d);
                        va(this.buffer, e);
                        this.ja.jb(this.buffer) > this.sg && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(Gl),
                vo = /opera mini/i,
                ni = ["phone", "email"],
                Hl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                so = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                to = [65, 90],
                uo = [97, 122],
                qo = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                oo = new RegExp("(" + G("|", Hl) + ")", "i"),
                no = new RegExp("(" + G("|", ni) + ")", "i"),
                xk = ["password", "passwd", "pswd"],
                po = new RegExp("(" + G("|", Hl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Ya = "metrikaId_" + Math.random(),
                Ac = {
                    counter: 0
                },
                gs = v(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                ds = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                ku = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        yj: new RegExp("(" + G("|", a) + ")", "i"),
                        Jj: new RegExp("(" + G("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        wj: /ym-record-keys/i,
                        mi: "\u2022",
                        Gj: 88
                    }
                }(),
                Ck = Ub(u(ku.mi, R)),
                rd = !0,
                Fg = "",
                Gg = !1,
                Hg = !0,
                Ig = !1,
                lo = oa(function(a, c) {
                    var b = D([a, "efv." + c.event], C);
                    c.R = z(w(R, b), c.R);
                    return c
                }),
                Il = v(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(Hf), b.push(js), b.push(ks));
                    a.document.addEventListener ? c.push(Ak) : (b.push(zk), d.push(Ak));
                    return ko(a, ("onpagehide" in a ? [] : [{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        R: [F]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        R: [F]
                    }]).concat([{
                        event: "click",
                        R: [Ve]
                    }, {
                        event: "dblclick",
                        R: [Ve]
                    }, {
                        event: "mousedown",
                        R: [Ve]
                    }, {
                        event: "mouseup",
                        R: [ms]
                    }, {
                        event: "keydown",
                        R: [ns]
                    }, {
                        event: "keypress",
                        R: [os]
                    }, {
                        event: "copy",
                        R: [Ek]
                    }, {
                        event: "blur",
                        R: c
                    }, {
                        event: "focusin",
                        R: b
                    }, {
                        event: "focusout",
                        R: d
                    }]).concat(!a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        R: [li]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        R: [Hf]
                    }] : []).concat(a.document.addEventListener ? [{
                        event: "focus",
                        R: [zk]
                    }, {
                        event: "change",
                        R: [Bk]
                    }, {
                        event: "submit",
                        R: [Gk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        R: [Bk]
                    }, {
                        type: "form",
                        event: "submit",
                        R: [Gk]
                    }]))
                }),
                io = v(function(a) {
                    var c = [];
                    Hc(a) && c.push({
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        R: [ps]
                    });
                    "onpagehide" in a && c.push({
                        target: a,
                        type: "window",
                        event: "pagehide",
                        R: [function(b) {
                            b = b.flush;
                            b()
                        }]
                    });
                    return c
                }),
                lu = ["submit", "beforeunload", "unload"],
                mu = v(function(a, c) {
                    var b = c(a);
                    return N(function(d, e) {
                        d[e.type + ":" + e.event] = e.R;
                        return d
                    }, {}, b)
                }),
                nu = u(Il, function(a, c, b, d) {
                    return mu(c, a)[b + ":" + d] || []
                }),
                jo = /^\s*function submit\(\)/,
                ou = B("fw.p", function(a, c) {
                    var b;
                    if (!(b = c.Wg || !c.xb)) {
                        var d = J(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = K(c);
                        b[f] && (d = d.C("counters", {}), e = Zd(c.ba) && !d[f]);
                        b[f] = 1;
                        b = e
                    }
                    if (b) return L.resolve(F);
                    b = new ju(a, nu);
                    return fo(a, c, b, Il, lu)
                }),
                dh, Jl = (dh = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.Ae = 0;
                        d.Ab = 0;
                        d.ze = 0;
                        d.buffer = [];
                        d.Xc = 2E3;
                        d.$ = od(b);
                        d.Rc();
                        d.ze = f;
                        return d
                    }
                    Ma(c, a);
                    c.prototype.cf = function(b) {
                        return Ea(this.$.aa("ag", b))
                    };
                    c.prototype.bf = function(b, d) {
                        var e = this;
                        b(Za(C(this.l, "wv2.b.st"), function(f) {
                            e.send(f,
                                d)
                        }))
                    };
                    c.prototype.Oi = function(b, d) {
                        var e = this;
                        la(this.l, this.Re);
                        var f = Math.ceil(this.ja.jb(d) / 63E4),
                            g = this.ja.te(d, f);
                        x(function(h, k) {
                            var l, m = A({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l));
                            l = e.ja.Fa([m], !1);
                            e.bf(l, [m])
                        }, g);
                        this.Rc()
                    };
                    c.prototype.send = function(b, d) {
                        var e = this;
                        this.$.aa("se", d);
                        return a.prototype.send.call(this, b, d).then(R, function() {
                            e.$.aa("see", d)
                        })
                    };
                    c.df = function(b, d, e, f, g) {
                        c.$c["" + b + d] || (this.$c[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.$c[d]
                    };
                    c.prototype.Zh = function() {
                        return this.ze && this.Ae >= this.ze
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.Zh()) {
                            this.$.aa("p", b);
                            var e = this.ja.sb(b),
                                f = this.ja.jb(e);
                            7E5 < f ? this.Oi(b, e) : (e = this.cf(this.buffer.concat([b])), e = zb(function(g, h) {
                                return g + d.ja.jb(d.ja.sb(h))
                            }, 0, e), this.Ab + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Ab += f)
                        }
                    };
                    c.prototype.F = function(b, d) {
                        this.$.F([b], d)
                    };
                    c.prototype.ga = function(b, d) {
                        this.$.ga([b], d)
                    };
                    c.prototype.flush = function(b) {
                        var d = this.buffer.concat(this.cf(this.buffer));
                        d.length && (this.buffer = [], this.Ae += this.Ab, this.Ab = 0, b = this.ja.Fa(d, b), this.bf(b, d))
                    };
                    return c
                }(Gl), dh.$c = {}, dh),
                bb = function() {
                    function a(c, b, d) {
                        this.ei = "wv2.c";
                        this.pb = [];
                        this.ia = [];
                        this.l = c;
                        this.L = Ff(c, this, d, this.ei);
                        this.G = b;
                        this.Ra = this.G.yh();
                        this.start = this.L.H(this.start, "st");
                        this.stop = this.L.H(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.pb = z(function(b) {
                            var d = b[0],
                                e = b[2];
                            b = H(c.L.H(b[1], d[0]), c);
                            return c.Ra.F(e || c.l, d, b)
                        }, this.ia)
                    };
                    a.prototype.stop = function() {
                        x(ua, this.pb)
                    };
                    a.prototype.Y = function(c) {
                        return this.G.ra().Y(c)
                    };
                    return a
                }(),
                co = ["checkbox", "radio"],
                eo = /pwd|value|password/i,
                eh = V("location.href"),
                pu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.oa = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.Yd = d.L.H(d.Yd, "o");
                        d.kd = d.L.H(d.kd, "io");
                        d.Yc = d.L.H(d.Yc, "ao");
                        d.ie = d.L.H(d.ie, "a");
                        d.ee = d.L.H(d.ee, "at");
                        d.je = d.L.H(d.je, "r");
                        d.fe = d.L.H(d.fe, "c");
                        d.ya = new b.MutationObserver(d.Yd);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        this.ya.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.ya.disconnect()
                    };
                    c.prototype.Yc = function(b) {
                        var d = b.target,
                            e = b.attributeName,
                            f = b.oldValue;
                        b = d.getAttribute(e);
                        if (b === f) return !1;
                        f = Nb(this.l)(d, this.oa.elements); - 1 === f && (f = this.oa.elements.push(d) - 1, this.oa.attributes[f] = {});
                        this.oa.attributes[f] || (this.oa.attributes[f] = {});
                        this.oa.attributes[f][e] = oe(this.l, d, e, b, this.G.Gb()).value;
                        return !0
                    };
                    c.prototype.kd = function(b) {
                        function d(k) {
                            var l =
                                Nb(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                ud: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        x(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    if (e.Yc(k)) {
                                        var y = d(q);
                                        y.ud[l] || (y.ud[l] = oe(e.l, q, l, p, e.G.Gb()).value)
                                    }
                                    break;
                                case "childList":
                                    m && x(function(E) {
                                        y = d(E);
                                        y.$e || A(y, {
                                            $e: q,
                                            mh: r ? r : void 0,
                                            nh: t ? t : void 0
                                        })
                                    }, Ga(m));
                                    break;
                                case "characterData":
                                    y = d(q), y.af || (y.af = p)
                            }
                        }, b);
                        var h = this.G.ra();
                        x(function(k, l) {
                                h.se(k, g[l])
                            },
                            f)
                    };
                    c.prototype.Yd = function(b) {
                        var d = this;
                        if (eh(this.l)) {
                            var e = this.G.stamp();
                            this.kd(b);
                            x(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h && h.length && d.je(Ga(h), e);
                                        g && g.length && d.ie(Ga(g), e);
                                        break;
                                    case "characterData":
                                        d.fe(k, e)
                                }
                            }, b);
                            this.ee(e)
                        } else this.stop()
                    };
                    c.prototype.ee = function(b) {
                        var d = this;
                        x(function(e, f) {
                            var g = d.qc();
                            d.G.T("mutation", {
                                index: g,
                                attributes: d.oa.attributes[f],
                                target: d.Y(e)
                            }, "ac", b)
                        }, this.oa.elements);
                        this.oa.elements = [];
                        this.oa.attributes = []
                    };
                    c.prototype.ie = function(b, d) {
                        var e = this,
                            f = this.qc();
                        this.G.ra().vc({
                            nodes: b,
                            Qc: function(g) {
                                g = z(function(h) {
                                    h.node = void 0;
                                    return h
                                }, g);
                                e.G.T("mutation", {
                                    index: f,
                                    nodes: g
                                }, "ad", d)
                            }
                        })
                    };
                    c.prototype.je = function(b, d) {
                        var e = this,
                            f = this.qc(),
                            g = this.G.ra(),
                            h = z(function(k) {
                                var l = g.removeNode(k);
                                Vi(e.l, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.G.T("mutation", {
                            index: f,
                            nodes: h
                        }, "re", d)
                    };
                    c.prototype.fe = function(b, d) {
                        var e = this.qc();
                        this.G.T("mutation", {
                                value: b.textContent,
                                target: this.Y(b),
                                index: e
                            }, "tc",
                            d)
                    };
                    c.prototype.qc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(bb),
                qu = function() {
                    function a(c, b) {
                        var d = this;
                        this.lc = [];
                        this.eb = [];
                        this.Xd = 1;
                        this.Oe = this.Uf = 0;
                        this.xa = {};
                        this.Sa = {};
                        this.Fb = [];
                        this.Hd = function(f) {
                            return d.eb.length ? I(f, d.eb) : !1
                        };
                        this.removeNode = function(f) {
                            var g = d.Y(f),
                                h = La(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Hd(h) && d.$.aa(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.ib = function(f) {
                            var g = La(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                return h ? h : (h = d.Xd, f.__ym_indexer = h, d.Xd += 1, g = "NA:" +
                                    g.toLowerCase(), d.Hd(g) && d.$.aa(g, {
                                        data: {
                                            node: f,
                                            id: h
                                        }
                                    }), h)
                            }
                            return null
                        };
                        this.Of = function() {
                            d.Uf = T(d.l, w(H(d.da, d, !1), d.Of), 50, "i.s")
                        };
                        this.Mf = function() {
                            d.Oe = T(d.l, w(H(d.dd, d, !1), d.Mf), 50, "i.g")
                        };
                        this.Fi = function(f) {
                            null === d.xa[f] && delete d.xa[f];
                            null === d.Sa[f] && delete d.Sa[f]
                        };
                        this.l = c;
                        var e = Ff(c, this, "i");
                        this.$ = od(c);
                        this.options = b;
                        this.start = e.H(this.start, "st");
                        this.stop = e.H(this.stop, "sp");
                        this.Y = e.H(this.Y, "i");
                        this.se = e.H(this.se, "o");
                        this.vc = e.H(this.vc, "a");
                        this.removeNode = e.H(this.removeNode,
                            "r");
                        this.da = e.H(this.da, "s");
                        this.dd = e.H(this.dd, "g")
                    }
                    a.prototype.se = function(c, b) {
                        var d = this.ib(c);
                        Wa(d) || (this.Sa[d] && this.Y(c), this.Sa[d] = b)
                    };
                    a.prototype.F = function(c, b, d) {
                        c = "" + b + c;
                        this.eb.push(c);
                        this.Hd(c) || this.eb.push(c);
                        this.$.F([c], d)
                    };
                    a.prototype.ga = function(c, b, d) {
                        var e = "" + b + c;
                        this.eb = ha(function(f) {
                            return f !== e
                        }, this.eb);
                        this.$.ga([e], d)
                    };
                    a.prototype.start = function() {
                        this.Of();
                        this.Mf()
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        la(this.l, this.Oe);
                        la(this.l, this.Uf);
                        this.lc = [];
                        this.Fb = [];
                        this.xa = {};
                        this.Sa = {}
                    };
                    a.prototype.vc = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                Qc: c.Qc,
                                result: [],
                                wc: 0,
                                nodes: d
                            };
                        this.lc.push(f);
                        x(function(g) {
                            Vi(b.l, g, function(h) {
                                var k = b.ib(h);
                                Wa(k) || (d.push(h), b.xa[k] && b.Y(h), b.xa[k] = {
                                    node: h,
                                    event: f,
                                    Zi: e
                                }, e += 1)
                            })
                        }, c.nodes)
                    };
                    a.prototype.Y = function(c) {
                        if (c === this.l) return 0;
                        var b = this.ib(c),
                            d = this.xa[b],
                            e = this.qh(b),
                            f = e.$e,
                            g = e.ud,
                            h = e.af,
                            k = e.mh,
                            l = e.nh;
                        if (d) {
                            e = d.event;
                            d = d.Zi;
                            var m = Qs(this.l) === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.ib(k) : null;
                            p = !m &&
                                p ? this.ib(p) : null;
                            m = this.l;
                            k = this.options;
                            f = this.ib(f || c.parentNode || c.parentElement) || 0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 === r && (r = La(c));
                            if (Y(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    prev: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c
                                };
                                if (Lf(c)) {
                                    if (h = $n(c, h), g.attributes = {}, g.content = h)
                                        if (c = pd(m, c)) g.content = "" !== $a(h) ? ro(m, h) : h, g.hidden = c
                                } else h = ao(m, c, k, q, r), m = h.mb, g.attributes = h.Dg, m && (g.hidden = m), c.namespaceURI && gb(c.namespaceURI, "svg") &&
                                    (g.namespace = c.namespaceURI);
                                c = g
                            }
                            if (Y(c)) return;
                            this.xa[b] = null;
                            this.Fb.push(b);
                            e.result[d] = c;
                            e.wc += 1;
                            e.nodes.length === e.wc && e.Qc(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.da(!0)
                    };
                    a.prototype.dd = function() {
                        if (this.Fb.length) {
                            var c = fc(this.Fb, this.Fi),
                                b = og(this.l, 30);
                            c(b)
                        }
                    };
                    a.prototype.da = function(c) {
                        var b = this;
                        if (eh(this.l)) {
                            var d = fa(this.xa);
                            d = N(function(e, f) {
                                b.xa[f] && e.push(b.xa[f].node);
                                return e
                            }, [], d);
                            d = fc(d, this.Y);
                            c = c ? Uj(F) : Sj(this.l, 20);
                            d(c);
                            this.lc = ha(function(e) {
                                return e.wc !==
                                    e.result.length
                            }, this.lc)
                        }
                    };
                    a.prototype.qh = function(c) {
                        if (Wa(c)) return {};
                        var b = this.Sa[c];
                        return b ? (this.Sa[c] = null, this.Fb.push(c), b) : {}
                    };
                    return a
                }(),
                ru = ["input", "change", "keyup", "paste", "cut"],
                su = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.nd = !1;
                        b.Dc = b.L.H(b.Dc, "ii");
                        b.Ec = b.L.H(b.Ec, "ir");
                        b.Lc = b.L.H(b.Lc, "ri");
                        b.Vc = b.L.H(b.Vc, "ur");
                        b.Fd = b.L.H(b.Fd, "ce");
                        b.uc = b.L.H(b.uc, "vc");
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.G.ra();
                        this.nd = this.Kg();
                        x(function(e) {
                            e =
                                e.toLowerCase();
                            d.F(e, "NA:", H(b.Dc, b));
                            d.F(e, "NR:", H(b.Ec, b))
                        }, Kf);
                        this.pb = [this.Ra.F(this.l.document, ru, H(this.Fd, this)), function() {
                            x(function(e) {
                                e = e.toLowerCase();
                                d.ga(e, "NA:", b.Dc);
                                d.ga(e, "NR:", b.Ec)
                            }, Kf);
                            x(b.Vc, fa(b.inputs))
                        }]
                    };
                    c.prototype.Vc = function(b) {
                        var d = this.inputs[b];
                        if (d) {
                            if (this.nd) {
                                var e = d.zi;
                                d = d.element;
                                e && this.l.Object.defineProperty(d, this.rc(d), e)
                            }
                            delete this.inputs[b]
                        }
                    };
                    c.prototype.Ec = function(b) {
                        b && this.Vc(b.data.id)
                    };
                    c.prototype.Dc = function(b) {
                        b && (b = b.data, this.Lc(b.node, b.id))
                    };
                    c.prototype.rc = function(b) {
                        return Ne(b) ? "checked" : "value"
                    };
                    c.prototype.Fd = function(b) {
                        if (b = b.target) {
                            var d = this.rc(b);
                            this.uc(b[d], b)
                        }
                    };
                    c.prototype.uc = function(b, d) {
                        var e = this.Y(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Lc(f, e), !f)) return;
                        e = f.Mg;
                        var g = f.value,
                            h = this.rc(d),
                            k = !b || I(typeof b, ["string", "boolean", "number"]),
                            l = this.G.Gb().Md;
                        k && b !== g && (g = oe(this.l, d, h, b, this.G.Gb()).value, e ? this.G.T("event", {
                            target: this.Y(d),
                            checked: !!b
                        }, "change") : (e = Rc(this.l, d, l), l = e.fb, this.G.T("event", {
                            value: g,
                            hidden: e.ob &&
                                !l,
                            target: this.Y(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.Lc = function(b, d) {
                        var e = this;
                        if (!Df(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f = Ne(b),
                            g = this.rc(b),
                            h = {
                                element: b,
                                Mg: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.nd && Rb(this.l, function() {
                            var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                m = A({}, k, l);
                            if (Fa("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.l.Object.defineProperty(b, g, A({}, m, {
                                        configurable: !0,
                                        set: function(p) {
                                            e.uc(p, this);
                                            return m.set.call(this, p)
                                        }
                                    }))
                                } catch (p) {}
                                h.zi = m
                            }
                        });
                        return h
                    };
                    c.prototype.Kg = function() {
                        var b = !0,
                            d = sb(this.l)("input");
                        try {
                            d = sb(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = A({}, e, f);
                            this.l.Object.defineProperty(d,
                                "value", A({}, g, {
                                    configurable: !0,
                                    set: function(h) {
                                        return g.set.call(d, h)
                                    }
                                }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(bb),
                tu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Xa = {
                            width: 0,
                            height: 0,
                            pageHeight: 0,
                            pageWidth: 0,
                            orientation: 0
                        };
                        b.ia.push([
                            ["resize"], b.xi
                        ]);
                        b.ia.push([
                            ["orientationchange"], b.vi
                        ]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.Rf()
                    };
                    c.prototype.xi = function() {
                        var b =
                            this.Cd();
                        this.Nh(b) && (this.Xa = b, this.Sf(b))
                    };
                    c.prototype.vi = function() {
                        var b = this.Cd();
                        this.Xa.orientation !== b.orientation && (this.Xa = b, this.Ki(b))
                    };
                    c.prototype.uf = function(b) {
                        return !b.height || !b.width || !b.pageWidth || !b.pageHeight
                    };
                    c.prototype.Nh = function(b) {
                        return b.height !== this.Xa.height || b.width !== this.Xa.width
                    };
                    c.prototype.Cd = function() {
                        var b = this.G.hb(),
                            d = Oc(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.Bd();
                        return {
                            width: e,
                            height: d,
                            pageWidth: b ? b.scrollWidth : 0,
                            pageHeight: b ? b.scrollHeight : 0,
                            orientation: this.G.hb().Ah()
                        }
                    };
                    c.prototype.Ki = function(b) {
                        var d;
                        void 0 === d && (d = this.G.stamp());
                        this.G.T("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.Sf = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        this.G.T("event", {
                            width: b.width,
                            height: b.height,
                            pageWidth: b.pageWidth,
                            pageHeight: b.pageHeight
                        }, "resize", d)
                    };
                    c.prototype.Rf = function() {
                        var b = this.Cd();
                        this.uf(b) ? T(this.l, H(this.Rf, this), 300) : (this.uf(this.Xa) && (this.Xa = b), this.Sf(b, 0))
                    };
                    return c
                }(bb),
                $e = function() {
                    function a(c) {
                        this.index =
                            0;
                        this.ub = {};
                        this.l = c
                    }
                    a.prototype.dc = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = ja(this.l),
                            f = this.index;
                        this.index += 1;
                        this.ub[f] = {
                            Oa: 0,
                            Pb: !1,
                            kh: c,
                            Zc: [],
                            Rd: e(da)
                        };
                        var g = this;
                        return function() {
                            var h = Na(arguments),
                                k = d.Ye && !g.ub[f].Pb,
                                l = g.ub[f];
                            la(g.l, l.Oa);
                            l.Zc = h;
                            l.Pb = !0;
                            var m = e(da);
                            if (k || m - l.Rd >= b) c.apply(void 0, h), l.Rd = m;
                            l.Oa = T(g.l, function() {
                                k || (c.apply(void 0, h), l.Rd = e(da));
                                l.Pb = !1;
                                l.Zc = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        x(function(b) {
                            var d = c.ub[b],
                                e = d.Oa,
                                f = d.kh,
                                g = d.Zc;
                            d.Pb && (c.ub[b].Pb = !1, f.apply(void 0, g), la(c.l, e))
                        }, fa(this.ub))
                    };
                    return a
                }(),
                uu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.eg = [];
                        d.Ie = {
                            x: 0,
                            y: 0
                        };
                        d.Aa = new $e(b);
                        d.Hc = d.L.H(d.Hc, "o");
                        d.ia.push([
                            ["scroll"], d.yi
                        ]);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.T("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Aa.flush()
                    };
                    c.prototype.yi = function(b) {
                        if (this.G.hb().pf()) this.Hc(b);
                        else {
                            var d = b.target,
                                e = ha(function(f) {
                                    return f[0] === d
                                }, this.eg).pop();
                            e ? e = e[1] : (e = this.Aa.dc(H(this.Hc, this), 100, {
                                Ye: !0
                            }), this.eg.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Hc = function(b) {
                        var d = this.G.hb().Bd();
                        b = b.target;
                        var e = this.Hb(b);
                        d = d === b || this.l === b || this.l.document === b;
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Ie.x === f && this.Ie.y === e) return;
                            this.Ie = {
                                x: f,
                                y: e
                            }
                        }
                        this.G.T("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.Y(b)
                        }, "scroll")
                    };
                    c.prototype.Hb = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.G.hb().Bd(), b) ? I(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop || 0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(bb),
                vu = ["mousemove", "mousedown", "mouseup", "click"],
                wu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ia.push([vu, d.ui]);
                        d.Aa = new $e(b);
                        d.Cc = d.L.H(d.Cc, "n");
                        d.Ti = d.L.H(d.Aa.dc(H(d.Cc, d),
                            100), "t");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Aa.flush()
                    };
                    c.prototype.ui = function(b) {
                        var d = null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" === d ? this.Ti(b) : this.Cc(b)
                    };
                    c.prototype.Cc = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.G.T("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.Y(b)
                        }, d)
                    };
                    return c
                }(bb),
                xu = ["focus", "blur"],
                yu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b,
                            d, e) || this;
                        b.ia.push([xu, b.lh]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.lh = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.G.T("event", {
                            target: this.Y(d === this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(bb),
                zu = v(function(a) {
                    var c = ma(a.getSelection, "getSelection");
                    return c ? H(c, a) : F
                }),
                Au = w(zu, ua),
                Bu = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                Cu = /text|search|password|tel|url/,
                Du = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Id = !1;
                        b.ia.push([Bu, b.Lh]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.Lh =
                        function(b) {
                            var d = this.G,
                                e = b.type,
                                f = b.which;
                            b = b.target;
                            if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.Eh(b) : this.Ch()) && e.start !== e.end ? (this.Id = !0, d.T("event", e, "selection")) : this.Id && (this.Id = !1, d.T("event", {
                                start: 0,
                                end: 0
                            }, "selection"))
                        };
                    c.prototype.Ch = function() {
                        var b = Au(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.Y(b.startContainer),
                                e = this.Y(b.endContainer);
                            if (!Y(d) && !Y(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                startNode: d,
                                endNode: e
                            }
                        }
                    };
                    c.prototype.Eh =
                        function(b) {
                            if (Cu.test(b.type || "")) {
                                var d = this.Y(b);
                                if (!Y(d)) return {
                                    start: b.selectionStart,
                                    end: b.selectionEnd,
                                    target: d
                                }
                            }
                        };
                    return c
                }(bb),
                Kl = {
                    focus: "windowfocus",
                    blur: "windowblur",
                    Ij: "windowfocus",
                    Hj: "windowblur"
                },
                Eu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        Y(b.l.document.hidden) ? Y(b.l.document.msHidden) ? Y(b.l.document.webkitHidden) || (b.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : b.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : b.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        };
                        b.Ed = b.L.H(b.Ed, "fbe");
                        b.Gd = b.L.H(b.Gd, "she");
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        this.pb = [this.Ra.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], H(this.Ed, this))];
                        "onpagehide" in this.l && this.pb.push(this.Ra.F(this.l, ["pageshow", "pagehide"], H(this.Gd, this), null))
                    };
                    c.prototype.Gd = function(b) {
                        this.G.T("event", {}, Kl[b.type])
                    };
                    c.prototype.Ed = function(b) {
                        this.G.T("event", {}, Kl[this.visibility ? this.l.document[this.visibility.hidden] ?
                            "blur" : "focus" : b.type])
                    };
                    return c
                }(bb),
                Fu = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Gu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Uc = {};
                        d.scrolling = !1;
                        d.Pf = 0;
                        d.ia.push([
                            ["scroll"], d.Ji, d.l.document
                        ]);
                        d.ia.push([Fu, d.Vi, d.l.document]);
                        d.Aa = new $e(b);
                        d.Kb = d.L.H(d.Kb, "nh");
                        d.Ui = d.L.H(d.Aa.dc(d.Kb, d.G.hb().pf() ? 0 : 50, {
                            Ye: !0
                        }), "th");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.Ji = function() {
                        var b = this;
                        this.scrolling = !0;
                        la(this.l, this.Pf);
                        this.Pf = T(this.l, function() {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Vi = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && x(function(f) {
                            var g = d.Gh(f);
                            f.__ym_touch_id = g;
                            e && delete d.Uc[f.identifier]
                        }, Ga(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Kb(b) : this.Ui(b, this.G.stamp()) : this.Kb(b)
                    };
                    c.prototype.Gh = function(b) {
                        this.Uc[b.identifier] || (this.Uc[b.identifier] = fi());
                        return this.Uc[b.identifier]
                    };
                    c.prototype.Kb = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        var e = b.type,
                            f = z(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, Ga(b.changedTouches));
                        0 < f.length && this.G.T("event", {
                            touches: f,
                            target: this.Y(b.target)
                        }, e, d)
                    };
                    return c
                }(bb),
                Hu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ia.push([
                            ["load"], b.ti, b.l.document
                        ]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.ti = function(b) {
                        b = b.target;
                        "IMG" === La(b) && b.getAttribute("srcset") && this.G.T("mutation", {
                            target: this.Y(b),
                            attributes: {
                                src: b.currentSrc
                            }
                        }, "ac")
                    };
                    return c
                }(bb),
                Iu =
                function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.og = 1;
                        d.Aa = new $e(b);
                        d.Yb = d.L.H(d.Yb, "z");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        if (this.lf()) {
                            a.prototype.start.call(this);
                            this.Yb();
                            var b = this.Ra.F(n(this.l, "visualViewport"), ["resize"], this.Aa.dc(this.Yb, 10));
                            this.pb.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Aa.flush()
                    };
                    c.prototype.Yb = function() {
                        var b = this.lf();
                        b && b !== this.og && (this.og = b, this.Li(b))
                    };
                    c.prototype.lf = function() {
                        var b = $d(this.l);
                        return b ?
                            b[2] : null
                    };
                    c.prototype.Li = function(b) {
                        var d = Tf(this.l);
                        this.G.T("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(bb),
                Wd, af = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                Ll = {
                    "super": 1,
                    tj: 2,
                    alt: 3,
                    shift: 4,
                    Pj: 5,
                    "delete": 6,
                    rj: 6
                },
                Ju = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Ml = (Wd = {}, Wd["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Wd["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Wd.ii = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, Wd),
                Ku = /flash/,
                Lu = /ym-disable-keys/,
                Mu = /^&#/,
                Nu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.kb = {};
                        d.La = 0;
                        d.Da = [];
                        d.cg = [];
                        d.ic = 0;
                        d.If = 0;
                        d.ia.push([
                            ["keydown"], d.Ih
                        ]);
                        d.ia.push([
                            ["keyup"], d.Jh
                        ]);
                        d.zg = -1 !== lc(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
                        d.Ac = d.L.H(d.Ac, "v");
                        d.pd = d.L.H(d.pd, "ec");
                        d.Pc = d.L.H(d.Pc, "sk");
                        d.zd = d.L.H(d.zd, "gk");
                        d.ue = d.L.H(d.ue, "sc");
                        d.Xb = d.L.H(d.Xb, "cc");
                        d.reset = d.L.H(d.reset, "r");
                        d.Mc = d.L.H(d.Mc, "rs");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.Ih = function(b) {
                        if (this.Ac(b) && !this.Xh(b)) {
                            var d = b.keyCode;
                            b.repeat || this.kb[d] || (this.kb[b.keyCode] = !0, af[b.keyCode] && !this.La ? (this.La += 1, this.ue(b), this.reset(300)) : this.La ? (this.Hg(), this.le(b), this.pd()) : (this.reset(), this.le(b)))
                        }
                    };
                    c.prototype.Jh = function(b) {
                        if (this.Ac(b)) {
                            var d = b.keyCode,
                                e = af[b.keyCode];
                            this.kb[b.keyCode] && (this.kb[d] = !1);
                            e && this.La && (this.La = 0, this.kb = {});
                            1 === this.Da.length &&
                                (b = this.Da[0], I(b.keyCode, Ju) && (this.Pc([b], !0), this.reset()));
                            this.Da = ha(w(V("keyCode"), Aa(d), Gc), this.Da);
                            la(this.l, this.ic)
                        }
                    };
                    c.prototype.Ac = function(b) {
                        var d = this.l.document.activeElement;
                        d = d && "OBJECT" === d.nodeName && Ku.test(d.getAttribute("type") || "");
                        b = b.target;
                        if (!b) return !d;
                        b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Lu.test(b.className);
                        return !d && !b
                    };
                    c.prototype.pd = function() {
                        this.cg = this.Da.slice(0);
                        la(this.l, this.ic);
                        this.ic = T(this.l, u(this.cg, H(this.Pc, this)), 0, "e.c")
                    };
                    c.prototype.Pc = function(b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.zd(b);
                            this.G.T("event", {
                                keystrokes: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.zd = function(b) {
                        var d = this;
                        b = z(function(e) {
                            e = e.keyCode;
                            var f = af[e],
                                g = d.zh(e);
                            return {
                                id: e,
                                key: g,
                                isMeta: !!f && Mu.test(g),
                                modifier: f
                            }
                        }, b);
                        return te(function(e, f) {
                            return (Ll[e.modifier] || 100) - (Ll[f.modifier] || 100)
                        }, b)
                    };
                    c.prototype.zh = function(b) {
                        return Ml[this.zg][b] || Ml.ii[b] || String.fromCharCode(b)
                    };
                    c.prototype.le = function(b) {
                        I(b, this.Da) || this.Da.push(b)
                    };
                    c.prototype.ue =
                        function(b) {
                            this.le(b);
                            this.Xb()
                        };
                    c.prototype.Xb = function() {
                        this.La ? T(this.l, this.Xb, 100) : this.Da = []
                    };
                    c.prototype.Hg = function() {
                        la(this.l, this.If)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.If = T(this.l, H(this.Mc, this), b) : this.Mc()
                    };
                    c.prototype.Mc = function() {
                        this.La = 0;
                        this.Da = [];
                        this.kb = {};
                        la(this.l, this.ic)
                    };
                    c.prototype.Xh = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === af[b.keyCode] : !1
                    };
                    return c
                }(bb),
                Zn = ["sr", "sd", "\u043d"],
                Ou = /allow-same-origin/,
                Pu = function(a) {
                    function c(b,
                        d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Sb = [];
                        d.vd = {};
                        d.Zd = d.L.H(d.Zd, "fi");
                        d.$d = d.L.H(d.$d, "sd");
                        d.ae = d.L.H(d.ae, "src");
                        d.ya = new b.MutationObserver(d.ae);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.Gb().Zb && this.G.ra().F("iframe", "NA:", H(this.Zd, this));
                        this.G.gf().xd().F(["sdr"], H(this.$d, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        x(function(b) {
                            b.G.stop()
                        }, this.Sb)
                    };
                    c.prototype.ae = function(b) {
                        var d = b.pop().target;
                        if (b = ib(function(f) {
                                return f.nf ===
                                    d
                            }, this.Sb)) {
                            this.Sb = ha(function(f) {
                                return f.nf !== d
                            }, this.Sb);
                            var e = b.G.yd();
                            try {
                                b.G.stop()
                            } catch (f) {}
                            this.cc(d, e)
                        }
                    };
                    c.prototype.Zd = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.ya.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.cc(d, b.data.id)
                        }
                    };
                    c.prototype.cc = function(b, d) {
                        var e = this;
                        this.Vh(b) && vc(this.l, b)(Za(F, function() {
                            var f = e.G.cc(b.contentWindow, d);
                            e.Sb.push({
                                G: f,
                                nf: b
                            })
                        }))
                    };
                    c.prototype.$d = function(b) {
                        var d = this,
                            e = b.frameId;
                        b = b.data;
                        this.vd[e] || (this.vd[e] = {
                            data: []
                        });
                        var f = this.vd[e];
                        f.data =
                            f.data.concat(b);
                        this.l.isNaN(f.md) && x(function(g) {
                            "page" === g.type && (f.md = g.data.recordStamp - d.G.hf())
                        }, f.data);
                        this.l.isNaN(f.md) || (this.G.da(z(function(g) {
                            g.stamp += f.md;
                            g.stamp = d.l.Math.max(0, g.stamp);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Vh = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(Ou) || d && "about:blank" !== d && (d = yc(this.l, d).host) && U(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }(bb),
                Qu = v(function(a) {
                    var c =
                        n(a, "sessionStorage");
                    if (!c) return null;
                    try {
                        var b = c.getItem("__ym_tab_guid");
                        c = !1;
                        var d = n(a, "opener.sessionStorage");
                        try {
                            c = !!d && b === d.getItem("__ym_tab_guid")
                        } catch (e) {
                            c = !0
                        }
                        if (!b || c) b = fi(), a.sessionStorage.setItem("__ym_tab_guid", b);
                        return b
                    } catch (e) {
                        return null
                    }
                }),
                Ru = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.oe = b.L.H(b.oe, "ps");
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        this.G.ra().vc({
                            nodes: [this.l.document.documentElement],
                            Qc: this.oe
                        })
                    };
                    c.prototype.oe = function(b) {
                        var d = this.G.Bh(),
                            e = d.rh(),
                            f = U(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Oc(this.l),
                            l = k[0];
                        k = k[1];
                        this.G.T("page", {
                            content: z(function(m) {
                                m.node = void 0;
                                return m
                            }, b),
                            base: e || "",
                            hasBase: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.th() || "",
                            address: this.l.location.href,
                            ua: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            recordStamp: this.G.hf(),
                            tabId: Qu(this.l)
                        }, "page", 0)
                    };
                    return c
                }(bb),
                Su = ["addRule", "removeRule", "insertRule", "deleteRule"],
                fh = [
                    [function(a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.ab = {};
                            b.Tb = {};
                            b.Ne = 0;
                            b.Fc = b.L.H(b.Fc, "a");
                            b.tb = b.L.H(b.tb, "sr");
                            b.Gc = b.L.H(b.Gc, "r");
                            b.da = b.L.H(b.da, "d");
                            return b
                        }
                        Ma(c, a);
                        c.prototype.start = function() {
                            var b = this.G.ra();
                            b.F("style", "NA:", this.Fc);
                            b.F("style", "NR:", this.Gc);
                            this.da()
                        };
                        c.prototype.stop = function() {
                            var b = this;
                            a.prototype.stop.call(this);
                            var d = this.G.ra();
                            d.ga("style", "NA:", this.Fc);
                            d.ga("style", "NR:", this.Gc);
                            this.da();
                            la(this.l, this.Ne);
                            x(function(e) {
                                b.ab[e].sheet && b.Lf(b.ab[e].sheet)
                            }, fa(this.ab));
                            this.ab = {}
                        };
                        c.prototype.da = function() {
                            var b = this;
                            x(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.stamp;
                                        delete l.stamp;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && x(function(p) {
                                        b.G.T("event", {
                                            target: Da(e),
                                            changes: p
                                        }, "stylechange", g)
                                    }, h);
                                    delete b.Tb[e]
                                }
                            }, ya(this.Tb));
                            this.Ne = T(this.l, this.da, 100)
                        };
                        c.prototype.tb = function(b, d, e, f,
                            g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.Tb[b] || (this.Tb[b] = []);
                            this.Tb[b].push({
                                op: d,
                                style: f,
                                index: g,
                                stamp: e
                            })
                        };
                        c.prototype.Ai = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            O(f) && (b.addRule = function(l, m, p) {
                                e.tb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            O(g) && (b.removeRule = function(l) {
                                e.tb(d, "r", e.G.stamp(), "", l);
                                return g.call(b, l)
                            });
                            O(h) && (b.insertRule = function(l, m) {
                                e.tb(d, "a", e.G.stamp(), l, m);
                                return h.call(b, l, m)
                            });
                            O(k) && (b.deleteRule = function(l) {
                                e.tb(d,
                                    "r", e.G.stamp(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.Lf = function(b) {
                            var d = this;
                            x(function(e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                O(f) && (b[e] = H(f, b))
                            }, Su)
                        };
                        c.prototype.dh = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Fc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.dh(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h < f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        op: "a"
                                    });
                                    this.G.T("event", {
                                            changes: g,
                                            target: b
                                        },
                                        "stylechange")
                                }
                                this.Ai(e, b);
                                this.ab[b] = d
                            }
                        };
                        c.prototype.Gc = function(b) {
                            b = b.data.id;
                            var d = this.ab[b];
                            d && (delete this.ab[b], d.sheet && this.Lf(d.sheet))
                        };
                        return c
                    }(bb), "ss"],
                    [su, "in"],
                    [pu, "mu"],
                    [tu, "r"],
                    [uu, "sc"],
                    [wu, "mo"],
                    [yu, "f"],
                    [Du, "se"],
                    [Eu, "wf"],
                    [Gu, "t"],
                    [Hu, "src"],
                    [Iu, "z"],
                    [Nu, "ks"]
                ];
            fh.push([Pu, "if"]);
            fh.push([Ru, "pa"]);
            var Tu = v(function(a) {
                    var c = a.document;
                    return {
                        Bd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === nb(c.compatMode, "CSS1") ? c.documentElement : c.body;
                            return n(c,
                                "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        Ah: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = ib(u(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        Ej: u(a, qb),
                        pf: u(a, se),
                        Dj: u(a, Jg)
                    }
                }),
                Uu = function() {
                    function a(c, b) {
                        var d = this;
                        this.Jb = 0;
                        this.ld = [];
                        this.Ib = null;
                        this.ta = this.Ub = this.ag = !1;
                        this.recordStamp = 0;
                        this.stopped = !1;
                        this.Bh = function() {
                            return d.page
                        };
                        this.yd = function() {
                            return d.Jb
                        };
                        this.hf = function() {
                            return d.recordStamp
                        };
                        this.yh = function() {
                            return d.Ra
                        };
                        this.gf = function() {
                            return d.Ib
                        };
                        this.ra = function() {
                            return d.Jd
                        };
                        this.stamp = function() {
                            return d.ye ? d.l.Math.max(d.ye(da) - d.recordStamp, 0) : 0
                        };
                        this.Gb = function() {
                            return d.options
                        };
                        this.hb = function() {
                            return d.Eg
                        };
                        this.T = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            f = d.xh(f, g, h, k);
                            d.da(f)
                        };
                        this.xh = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            return {
                                type: f,
                                data: g,
                                stamp: k,
                                frameId: d.Jb,
                                event: h
                            }
                        };
                        this.da = function(f) {
                            f = M(f) ? f : [f];
                            d.ag && !d.Ub ? d.ta ? (f = z(function(g) {
                                    return g.frameId ? g : A(g, {
                                        frameId: d.Jb
                                    })
                                }, f), d.gf().Tf(f)) :
                                d.Qb(f) : d.ld = d.ld.concat(f)
                        };
                        this.l = c;
                        var e = Ff(c, this, "R");
                        this.ve = e.H(this.ve, "s");
                        this.da = e.H(this.da, "sd");
                        e = J(c);
                        e.C("wv2e") && Xd();
                        e.D("wv2e", !0);
                        this.options = b;
                        this.Ra = ka(c);
                        this.Jd = new qu(this.l, b);
                        this.Eg = Tu(c);
                        this.Pe = z(function(f) {
                            return new f[0](c, d, f[1])
                        }, fh);
                        this.Sh();
                        this.page = Xn(this.l);
                        this.ve()
                    }
                    a.prototype.start = function(c) {
                        this.ag = !0;
                        this.Qb = c;
                        this.Qf()
                    };
                    a.prototype.stop = function() {
                        this.stopped || (this.stopped = !0, eh(this.l) && (x(function(c) {
                                return c.stop()
                            }, this.Pe), this.Jd.stop(),
                            this.Ib && this.Ib.stop(), this.ta || this.T("event", {}, "eof")))
                    };
                    a.prototype.cc = function(c, b) {
                        var d = new a(c, A({}, this.options, {
                            frameId: b
                        }));
                        d.start(F);
                        return d
                    };
                    a.prototype.Sh = function() {
                        var c = this;
                        this.ta = !!this.options.frameId;
                        this.Jb = this.options.frameId || 0;
                        this.Ub = !this.ta;
                        var b = this.options.ig || [];
                        b.push(U(this.l).host);
                        this.Ib = Yn(this.l, this, b);
                        b = this.Ib.xd();
                        qb(this.l) ? this.Ub && b.F(["i"], function(d) {
                            c.ta = d.ta;
                            c.Ub = !1;
                            d.frameId && (c.Jb = d.frameId);
                            c.Qf()
                        }) : this.Ub = this.ta = !1
                    };
                    a.prototype.Qf = function() {
                        var c =
                            Re(this.ld);
                        this.da(c)
                    };
                    a.prototype.ve = function() {
                        this.ye = ag(this.l);
                        this.recordStamp = this.ye(da);
                        x(function(c) {
                            c.start()
                        }, this.Pe);
                        this.Jd.start()
                    };
                    return a
                }(),
                Vu = function() {
                    return function(a, c, b) {
                        var d = this;
                        this.bd = this.Lb = !1;
                        this.Wa = [];
                        this.yf = [];
                        this.Te = [];
                        this.send = function(e, f, g) {
                            e = d.sender(e, d.Sg);
                            f && g && e.then(f, g);
                            return e
                        };
                        this.xe = function(e, f, g) {
                            return new L(function(h, k) {
                                e.push([f, h, k, g])
                            })
                        };
                        this.Mh = function() {
                            d.Wa = te(function(g, h) {
                                return g[3].partNum - h[3].partNum
                            }, d.Wa);
                            var e = N(function(g,
                                    h, k) {
                                    h = h[3];
                                    return g && k + 1 === h.partNum
                                }, !0, d.Wa),
                                f = !!d.Wa[d.Wa.length - 1][3].end;
                            return e && f
                        };
                        this.sd = function(e) {
                            nh(d.l, e.slice(), function(f) {
                                d.send(f[0], f[1], f[2])
                            }, 20, "s.w2.sf.fes");
                            Re(e)
                        };
                        this.jh = function() {
                            d.bd || (d.bd = !0, d.sd(d.yf), d.sd(d.Te))
                        };
                        this.Lg = function(e) {
                            return N(function(f, g) {
                                var h = "page" === g.type && !g.frameId,
                                    k = "eof" === g.data.type || "eof" === g.event,
                                    l = h && !!g.partNum;
                                return {
                                    gd: f.gd || l,
                                    fd: f.fd || h,
                                    ed: f.ed || k
                                }
                            }, {
                                fd: !1,
                                ed: !1,
                                gd: !1
                            }, e)
                        };
                        this.Kh = function(e, f, g) {
                            g ? (e = d.xe(d.Wa, e, f[0]), d.Mh() &&
                                (d.sd(d.Wa), d.Lb = !0)) : (d.Lb = !0, e = d.send(e));
                            return e
                        };
                        this.jf = function(e, f, g) {
                            var h;
                            f = {
                                J: (h = {}, h["wv-part"] = "" + g, h["wv-type"] = d.Mi, h),
                                K: Ha(),
                                Z: {
                                    ca: f
                                }
                            };
                            e && f.K.D("bt", 1);
                            return f
                        };
                        this.ah = function(e, f, g) {
                            e = d.jf(!1, e, g);
                            return d.Lb ? d.send(e) : d.xe(d.Te, e, f)
                        };
                        this.ji = function(e, f, g) {
                            e = d.jf(!0, e, g);
                            if (d.Lb) return d.send(e);
                            var h = d.Lg(f);
                            g = h.fd;
                            var k = h.ed;
                            h = h.gd;
                            var l;
                            g && (l = d.Kh(e, f, h));
                            d.bd ? g || (l = d.send(e)) : (g || (l = d.xe(d.yf, e, f)), (d.Lb || k) && d.jh());
                            return l
                        };
                        this.l = a;
                        this.Mi = b;
                        this.sender = qa(a, "W", c);
                        this.Sg =
                            c
                    }
                }(),
                Nl = v(function(a) {
                    var c = J(a),
                        b = c.C("isEU");
                    if (Y(b)) {
                        var d = Da(qe(a, "is_gdpr") || "");
                        if (I(d, [0, 1])) c.D("isEU", d), b = !!d;
                        else if (a = Ta(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return J(a).C("isEU")
                }),
                Af = B("i.e", Nl),
                Wu = B("i.ep", function(a) {
                    Nl(a)
                }),
                Xu = B("w2", function(a, c) {
                    function b() {
                        h = !0
                    }
                    var d = J(a),
                        e = K(c);
                    if (!c.xb || ie(a) || !a.MutationObserver || !Fa("Element", a.Element)) return F;
                    Fa("MutationObserver", a.MutationObserver) || oc(a, e).warn("w2mo");
                    var f = Ba(function(k, l) {
                            na(c,
                                l)["catch"](k)
                        }),
                        g = vc(a)(Mg(D([a, c], Vn)))(el(function(k) {
                            return new Uu(a, k)
                        })),
                        h = !1;
                    or([g, f])(Za(C(a, "wv2.R.c"), function(k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = H(l.stop, l);
                            var m = d.C("wv2Counter");
                            if (!hi(a, k) || m) b();
                            else if (d.D("wv2Counter", e), d.D("stopRecorder", b), k = ti(a, "7", "6")) {
                                m = new Vu(a, c, k.type);
                                var p = Jl.df(e, "m", H(m.ji, m), k, a),
                                    q = Jl.df(e, "e", H(m.ah, m), k, a);
                                "onpagehide" in a ? ka(a).F(a, ["pagehide"], function(t) {
                                    t.persisted ? (p.flush(!0), q.flush(!0)) : b()
                                }, null) : ka(a).F(a, ["beforeunload", "unload"], b);
                                k = Wn();
                                m = k.oi;
                                q.F("ag", k.Cg);
                                q.F("p", m);
                                p.F("see", function(t) {
                                    var y = !1;
                                    x(function(E) {
                                        "page" === E.type && (y = !0)
                                    }, t);
                                    y && (h || q.push({
                                        type: "event",
                                        event: "fatalError",
                                        data: {
                                            code: "invalid-snapshot",
                                            bh: "p.s.f",
                                            stack: ""
                                        }
                                    }), b())
                                });
                                var r = Ub(function(t) {
                                    "eof" === n(t, "data.type") || "eof" === t.event ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0)) : ("event" === t.type ? q : p).push(t)
                                });
                                T(a, b, 864E5);
                                Rb(a, function() {
                                    var t, y;
                                    ub(a, (t = {}, t.counterKey = e, t.name = "webvisor", t.data = (y = {}, y.version = 2, y), t));
                                    l.start(r)
                                })
                            }
                        }
                    }));
                    return function() {
                        return b()
                    }
                }),
                Yu = B("w2.cs", function(a, c) {
                    var b, d = K(c);
                    Xf(a, d, (b = {}, b.webvisor = !!c.xb, b))
                }),
                Zu = ["rt", "mf"],
                zf = v(rc, K),
                bi = w(nd, hc),
                $u = vb("isp", function(a, c) {
                    na(c, function(b) {
                        var d = ib(function(h) {
                            return n(b, "settings." + h)
                        }, Zu);
                        if (d && Pd(a)) {
                            var e = he(b) && !de(a),
                                f = zf(c);
                            A(f, {
                                Mb: d,
                                status: e ? 3 : 4
                            });
                            if (!e) {
                                e = Rn(a, c, d);
                                var g = function(h) {
                                    f.status = h
                                };
                                return ("mf" === d ? Tn : Sn)(a, c, e).then(u(1, g))["catch"](u(2, g))
                            }
                        }
                    })["catch"](C(a, "l.isp"))
                }),
                Ol = B("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g =
                                Na(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        A(e, d);
                        b && x(c, b);
                        a.fbq = e
                    } else var f = T(a, D([a, c].concat(Ga(d && d.queue)), Ol), 1E3, "fbq.d");
                    return H(la, null, a, f)
                }),
                ed, Gb, fd, gh = (ed = {}, ed.add_to_wishlist = "add-to-wishlist", ed.begin_checkout = "begin-checkout", ed.generate_lead = "submit-lead", ed.add_payment_info = "add-payment-info", ed),
                hh = (Gb = {}, Gb.AddToCart = "add-to-cart", Gb.Lead = "submit-lead", Gb.InitiateCheckout = "begin-checkout", Gb.Purchase = "purchase", Gb.CompleteRegistration = "register", Gb.Contact = "submit-contact",
                    Gb.AddPaymentInfo = "add-payment-info", Gb.AddToWishlist = "add-to-wishlist", Gb.Subscribe = "subscribe", Gb),
                Pn = (fd = {}, fd["1"] = gh, fd["2"] = gh, fd["3"] = gh, fd["0"] = hh, fd),
                Qn = [hh.AddToCart, hh.Purchase],
                av = oa(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                            version: "3",
                            jc: d
                        })) a: {
                        if (M(c) || Qa(c))
                            if (b = Na(c), d = b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    jc: d
                                };
                                break a
                            }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        jc: G(",", fa(b))
                    });
                    b && a(b)
                }),
                bv = B("ag.e", function(a, c) {
                    if ("0" === c.ba) {
                        var b = [],
                            d = C(a,
                                "ag.s", D([ua, b], x));
                        na(c, function(e) {
                            if (n(e, "settings.auto_goals") && Ja(a, c) && (e = Ae(a, c, "autogoal").reachGoal)) {
                                e = D([e, c.od], On);
                                var f = av(e);
                                e = D([a, e], Nn);
                                b.push(Ol(a, e));
                                b.push(Yi(a, "dataLayer", function(g) {
                                    g.ya.F(f)
                                }))
                            }
                        });
                        return d
                    }
                }),
                cv = /[^\d.,]/g,
                dv = /[.,]$/,
                Ln = B("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(cv, "").replace(dv, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (I(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(fe(b[0]) + "." + fe(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                ev = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "),
                        "643"
                    ]
                ],
                fv = v(function(a) {
                    return new RegExp(G("|", a), "i")
                }),
                gv = B("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = Ls(a);
                    return (a = ib(function(b) {
                        return fv(b[0]).test(c)
                    }, ev)) ? a[1] : "643"
                }),
                hv = v(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h + "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = G("", $h("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                In = B("ep.dec", function(a, c) {
                    if (!c || ie(a)) return [];
                    var b = $h(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== ue(b[0])) return [];
                    b = hv();
                    f = G("", f);
                    e = ue(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(ue(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = Kb(a, b);
                    return M(d) ? z(Sr, d) : []
                }),
                Kn = B("ep.ent", function(a, c, b) {
                    a = "" + Xa(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Qa(b)) return "";
                    b = ai("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                Pl = w(Zh, gv),
                Ql = B("ep.ctp", function(a, c, b, d) {
                    var e = Pl(a, b),
                        f = Yh(a, d);
                    Xh(a, c, e, f);
                    Fa("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = Pl(a, b),
                            h = Yh(a, d);
                        if (e !== g || f !== h) e = g, f = h, Xh(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                iv = B("ep.chp", function(a, c, b, d, e) {
                    b && yf(a, c);
                    return d || e ? ka(a).F(a.document, ["click"], C(a, "ep.chp.cl", D([a, c, d, e], Jn))) : F
                }),
                nv = B("ep.i", function(a, c) {
                    if (ld(a)) return Hn(a, c).then(function(b) {
                        var d = b.Xg,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            q = d[8],
                            r = d[9],
                            t = d[10],
                            y = d[11],
                            E = d[12],
                            Q = d[13],
                            P = d[14],
                            za = d[15];
                        if (!b.isEnabled) return L.resolve(F);
                        var Ca = ke(a, e),
                            ac = ke(a, h),
                            Xg = ke(a, m),
                            jv = ke(a, q),
                            kv = "" + e + f + g === "" + h + k + l;
                        return new L(function(lv,
                            mv) {
                            vc(a)(Za(mv, function() {
                                Ca && Ql(a, c, f, g, t, y, E);
                                ac && !kv && Ql(a, c, k, l, Q, P, za);
                                lv(iv(a, c, Xg || jv, p, r))
                            }))
                        })
                    })
                }),
                vn = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                ov = B("cc.i", function(a, c) {
                    var b = D([a, c], Gn);
                    b = D([a, b, 300, void 0], T);
                    na(c, b)
                }),
                pv = u("9-d5ve+.r%7", R),
                qv = B("ad", function(a, c) {
                    if (!c.Ua) {
                        var b = J(a);
                        if (!b.C("adBlockEnabled")) {
                            var d = function(m) {
                                    I(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                                },
                                e = Sc(a),
                                f = e.C("isad");
                            if (f) d(f);
                            else {
                                var g = u("adStatus", b.D),
                                    h = function(m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.D("isad", m, 1200);
                                        return m
                                    },
                                    k = qa(a, "adb", c);
                                if (!b.C("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + pv().replace(/[^a-v]+/g, "") + "t.gif";
                                    Dn(a, function() {
                                        return k({
                                            ma: {
                                                za: l
                                            }
                                        }).then(u(!1, h))["catch"](u(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                rv = B("pr.p", function(a, c) {
                    var b, d;
                    if (kg(a)) {
                        var e = qa(a, "5", c),
                            f = Ha((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            K: f,
                            J: (d = {}, d["page-url"] = U(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](C(a, "pr.p.s"))
                    }
                }),
                Wh = !1,
                sv = B("fid", function(a) {
                    var c, b = F;
                    if (!O(a.PerformanceObserver)) return b;
                    var d = J(a);
                    if (d.C("fido")) return b;
                    d.D("fido", !0);
                    var e = new a.PerformanceObserver(C(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                tv = B("lt.p", vb("lt.p", function(a) {
                    var c;
                    if (Fa("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(C(a, "lt.o", function(e) {
                                e && e.getEntries && (e = e.getEntries(), b = N(function(f,
                                    g) {
                                    return f + g.duration
                                }, b, e), Md(a).D("lt", b))
                            }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                })),
                uv = v(w(V("performance.memory.jsHeapSizeLimit"), Ka("concat", ""))),
                vv = ["availWidth", "availHeight", "availTop"],
                wv = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                xv = ["webgl", "experimental-webgl"],
                Bn = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                vf = u(Oa("ccf"), Sa),
                An = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Uh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                yn = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                ih = v(function(a, c) {
                    var b = J(a),
                        d = Ta(a),
                        e = [],
                        f = D([a, c, b, d], Pp);
                    vd(a) || Qp(a, "14.1") || e.push(D([un, "pp", ""], f));
                    var g = !rl(a) || tf(a, 68);
                    g && e.push(D([wn, "pu", ""], f));
                    !g || d.Ld || Pd(a) || (e.push(D([tn, "zzlc", "na"], f)), e.push(D([sn, "cc", ""], f)));
                    return e.length ? {
                        Ba: function(h, k) {
                            if (0 === b.C("isEU")) try {
                                x(ze, e)
                            } catch (l) {}
                            k()
                        },
                        O: function(h, k) {
                            var l = h.K;
                            if (l && 0 === b.C("isEU")) try {
                                x(Ba(l), e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, w(eb, K)),
                yv = w(function(a) {
                    return (a = n(a, "navigator.plugins")) && Qa(a) ? w(Ga, Ea, ss(function(c, b) {
                        return c.name > b.name ? 1 : 2
                    }), Ub(Mp))(a) : ""
                }, xe(",")),
                zv = function(a) {
                    return function(c) {
                        var b = sb(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.eh;
                        e = e.Ug;
                        try {
                            var g = Ka("getContext", b);
                            d = z(w(R, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = ib(R, d)) ? f(c, {
                            canvas: b,
                            Ig: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Ug: xv,
                        eh: on
                    }
                }),
                mn = ["name", "lang", "localService",
                    "voiceURI", "default"
                ],
                Av = B("ice", function(a, c, b) {
                    if (c = Ja(a, c))
                        if (b = Oh(a, b)) return Nh(a, c, b), !0
                }),
                Bv = B("ice", function(a, c, b) {
                    if (c = Ja(a, c))
                        if (b = Oh(a, b)) return mj(a, b.Uh).then(D([a, c, b], Nh), C(a, "ice.s")), !0
                }),
                Cv = ["text", "email", "tel"],
                Dv = ["cc-", "name", "shipping"],
                Ev = B("icei", function(a, c) {
                    if (ml(a)) {
                        var b = !1,
                            d = F,
                            e = F;
                        na(c, function(f) {
                            if (!(Af(a) || n(f, "settings.eu") || b)) {
                                f = n(f, "settings.cf") ? Bv : Av;
                                var g = D([a, c], f),
                                    h = function(k) {
                                        return Jf(a, k) || !I(k.type, Cv) || Va(Db, z(u(k.autocomplete, gb), Dv)) ? !1 : !0
                                    };
                                d = Rh(a,
                                    "input", ["blur"], g, h);
                                e = Rh(a, "form", ["submit"], function(k) {
                                    var l = k.target;
                                    if (l) {
                                        l = hb("input", l);
                                        var m = 0;
                                        x(function(p) {
                                            20 <= m || !h(p) || g({
                                                target: p,
                                                isTrusted: k.isTrusted,
                                                Od: !0
                                            }) && (m += 1)
                                        }, l)
                                    }
                                })
                            }
                        });
                        return function() {
                            b = !0;
                            d();
                            e()
                        }
                    }
                }),
                Mh, Fv = B("p.ai", function(a, c) {
                    if (vd(a) || nf(a)) return na(c, function(b) {
                        var d;
                        if (b = n(b, "settings.sbp")) return Lh(a, A({}, b, (d = {}, d.c = c.id, d)), 10)
                    })
                }),
                Gv = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
                Rl = vb("uah", function(a) {
                    if (!Fa("getHighEntropyValues",
                            n(a, "navigator.userAgentData.getHighEntropyValues"))) return L.reject("0");
                    try {
                        return a.navigator.userAgentData.getHighEntropyValues(Gv).then(function(c) {
                            if (!ia(c)) throw "2";
                            return c
                        }, function() {
                            throw "1";
                        })
                    } catch (c) {
                        return L.reject("3")
                    }
                }),
                Sl = new RegExp(G("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                    "\\$&")),
                dn = v(function(a) {
                    var c = tb(a);
                    return (c = Sl.test(c)) ? L.resolve(c) : Rl(a).then(function(b) {
                        try {
                            return N(function(d, e) {
                                return d || Sl.test(e.brand)
                            }, !1, b.brands)
                        } catch (d) {
                            return !1
                        }
                    }, u(!1, R))
                }),
                uc = ["0", "1", "2", "3"],
                Pc = uc[0],
                mf = uc[1],
                Hv = uc[2],
                Tl = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"],
                Jh = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(Tl),
                lf = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(Tl).concat(["28",
                    "29", "30", "31"
                ]),
                Iv = "3 13 14 31 15 16 17 28".split(" "),
                be = w(Ub(V("ymetrikaEvent.type")), rs(tc(lf))),
                Jv = {
                    bi: !0,
                    url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                    Df: "",
                    wf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
                },
                gn = vb("gdpr", function(a, c, b, d, e) {
                    function f(p) {
                        c("10");
                        b.F(Jh, function(q) {
                            var r;
                            q = q.type;
                            l.Wf((r = {}, r.type = q, r));
                            p({
                                value: Kh(q)
                            })
                        })
                    }
                    var g = void 0 === e ? Jv : e;
                    e = g.url;
                    var h = g.Df,
                        k = g.bi;
                    g = kn(a, g.wf, d.kj);
                    var l = ee(a, d);
                    if (!l) return L.resolve({
                        value: Pc,
                        Nd: !0
                    });
                    if (a._yaGdprLoaded) return new L(function(p) {
                        c("7");
                        f(p)
                    });
                    var m = Mc(a, {
                        src: "" + e + (k ? "" : g) + h + ".js"
                    });
                    return new L(function(p, q) {
                        m ? (c("7"), m.onerror = function() {
                            var r;
                            c("9");
                            l.Wf((r = {}, r.type = "GDPR-ok-view-default", r));
                            p(null)
                        }, m.onload = u(p, f)) : (c("9"), q(Oa("gdp.e")))
                    })
                }),
                cc, jn = (cc = {}, cc["GDPR-ok"] = "ok", cc["GDPR-ok-view-default"] = "ok-default", cc["GDPR-ok-view-detailed"] = "ok-detailed", cc["GDPR-ok-view-detailed-0"] = "ok-detailed-all", cc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", cc["GDPR-ok-view-detailed-2"] =
                    "ok-detailed-tech-analytics", cc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", cc),
                bn = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
                Ih = [],
                Gh = Ka("push", Ih),
                an = v(function(a, c) {
                    var b = c.C("gdpr");
                    return I(b, uc) ? "-" + b : ""
                }),
                Ul = v(zd),
                Kv = v(function() {
                    var a = N(function(c, b) {
                        "ru" !== b && (c[b] = zl + "." + b);
                        return c
                    }, {}, ug);
                    x(function(c) {
                        a[c] = c
                    }, fa(ul));
                    return a
                }),
                Tm = v(function(a) {
                    a = U(a).hostname;
                    return (a = ib(w(V("1"), qs("test"), db(ua)(a)), ya(ul))) && a[0]
                }),
                Vl = function(a,
                    c) {
                    return function(b, d) {
                        var e = K(d);
                        e = Kv(e);
                        var f = Rm(b, e),
                            g = J(b),
                            h = qb(b);
                        return Pd(b) || Kd(b) ? {} : {
                            O: function(k, l) {
                                var m = k.K,
                                    p = Eh(b);
                                m = !(m && m.C("pv"));
                                if (!p || h || m || !f.length) return l();
                                if (g.C("startSync")) Ul(b).push(l);
                                else {
                                    g.D("startSync", !0);
                                    p = D([b, f, F, !1], a);
                                    m = of [0];
                                    if (!m) return l();
                                    m(b).then(p).then(l, w(Tc(l), C(b, c)))["catch"](F)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = ja(a),
                        f = J(a),
                        g = Ta(a);
                    b = Ug(a, "c");
                    var h = Pb(a, b);
                    return zb(function(k, l) {
                        function m() {
                            var r = g.C("synced");
                            f.D("startSync", !1);
                            r && (r[l.hi] = p, g.D("synced",
                                r));
                            r = Ul(a);
                            x(ua, r);
                            Re(r)
                        }
                        var p, q = h({
                            Z: {
                                ha: ["sync.cook"],
                                Na: 1500
                            }
                        }, [ta.Qa + "//" + l.Si + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                            p = e(pb);
                            m()
                        })["catch"](function() {
                            p = e(pb) - 1435;
                            m()
                        });
                        q = u(q, R);
                        return k.then(q)
                    }, L.resolve(), c)["catch"](C(a, "ctl"))
                }, "sy.c"),
                Hb, Pm = (Hb = {}, Hb.brands = "chu", Hb.architecture = "cha", Hb.bitness = "chb", Hb.uaFullVersion = "chf", Hb.fullVersionList = "chl", Hb.mobile = "chm", Hb.model = "cho", Hb.platform = "chp", Hb.platformVersion = "chv", Hb),
                Mm = v(function(a) {
                    return Rl(a).then(Nm,
                        Qm)
                }),
                Lv = vb("ot", function(a, c) {
                    if (Je(a)) {
                        var b = ka(a);
                        return na(c, C(a, "ot.s", function(d) {
                            if (n(d, "settings.oauth")) {
                                var e = [],
                                    f = nd(a, c);
                                e.push(b.F(a, ["message"], C(a, "ot.m", u(f, Lm))));
                                vc(a)(Za(F, C(a, "ot.b", function() {
                                    function g(q) {
                                        var r, t = q.href;
                                        t && Sd(t, "https://oauth.yandex.ru/") && !gb(t, "_ym_uid=") && (t = gb(t, "?") ? "&" : "?", q.href += "" + t + Ec((r = {}, r._ym_uid = f, r.mc = "v", r)), b.F(q, ["click"], C(a, "ot.click", function() {
                                            var y = "et=" + l(da);
                                            q.href += "&" + y
                                        })))
                                    }
                                    var h, k = a.document.body,
                                        l = ja(a),
                                        m = hb("a", k);
                                    x(g, m);
                                    if (Fa("MutationObserver",
                                            a.MutationObserver)) {
                                        m = new a.MutationObserver(C(a, "ot.m", u(function(q) {
                                            q = q.addedNodes;
                                            for (var r = 0; r < q.length; r += 1) {
                                                var t = q[r];
                                                "A" === t.nodeName && g(t)
                                            }
                                        }, x)));
                                        var p = (h = {}, h.childList = !0, h.subtree = !0, h);
                                        m.observe(k, p);
                                        e.push(H(m.disconnect, m))
                                    }
                                })));
                                return D([ze, e], x)
                            }
                        }))
                    }
                }),
                Mv = B("p.cta", function(a) {
                    vc(a)(Za(F, function() {
                        var c = J(a);
                        if (Jm(a.document)) {
                            var b = 0;
                            if (ci(a, ne, "cta")) {
                                var d = F,
                                    e = function() {
                                        di(ne, "cta");
                                        d();
                                        la(a, b)
                                    };
                                d = ka(a).F(a, ["message"], B("p.cta.o", D([a, c, e], Km)));
                                b = T(a, e, 1500)
                            } else c.D("cta.e",
                                "if")
                        } else c.D("cta.e", "ns")
                    }))
                }),
                jh, Cm = "bidRequested bidAdjustment bidWon bidResponse bidTimeout auctionInit auctionEnd adRenderSucceeded adRenderFailed".split(" "),
                Fm = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"],
                Ah = (jh = {}, jh.netRevenue = function(a) {
                    return ea(a) ? "net" === a : !!a
                }, jh),
                dc = {},
                Nv = B("pj", function(a, c) {
                    var b, d = Ja(a, c),
                        e = d && d.params;
                    return e ? (b = {}, b.pbjs = function(f) {
                        M(f) && (f = ha(Db, z(function(g) {
                            if (ia(g) && g.data && g.event && (ia(g.data) || M(g.data))) {
                                var h = n(g, "data.args");
                                return h ? {
                                    event: g.event,
                                    data: h
                                } : g
                            }
                        }, f)), Am(f), Gm(a, e))
                    }, b) : F
                }),
                wh = db(Sd)("btn:"),
                wm = db(Sd)("form:"),
                um = v(function() {
                    var a = Rf();
                    return N(function(c, b) {
                        c[a[b]] = b;
                        return c
                    }, {}, fa(a))
                }),
                tm = /(\D\d*)/g,
                Ov = v(rc),
                bf = "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(" "),
                jf = {},
                th = F,
                Pv = v(function(a, c) {
                    th = c
                }),
                gd, sh = (gd = {}, gd.copyFromWindow = function(a, c, b) {
                    if (I(b, bf) || Sd(b, "on")) throw Pa("rwp");
                    c = a[b];
                    if (aa(c) || Vb(a, c) || ea(c) || O(c)) return c;
                    if (M(c)) return Ld(c);
                    if (ia(c)) return rm(c)
                }, gd.loadScript = function(a, c, b, d, e) {
                    c = O(d) ? hf("ls.ol", function() {
                        return d.apply(null)
                    }) : F;
                    var f = O(e) ? hf("ls.ol", function() {
                        return e.apply(null)
                    }) : void 0;
                    pm(a, b, c, f)
                }, gd.callFromWindow = function(a, c, b) {
                    for (var d = [], e = 3; e < arguments.length; e++) d[e - 3] = arguments[e];
                    if (I(b, bf)) throw Pa("rwp");
                    e =
                        n(a, b);
                    if (!O(e)) throw Pa("wenf");
                    return e.apply(void 0, d)
                }, gd.createArgumentsQueue = function(a, c, b, d) {
                    function e() {
                        for (var g = 0; g < arguments.length; g++);
                        f.push(arguments)
                    }
                    if (0 !== b.length && 0 !== d.length && !n(a, b) && !n(a, d)) {
                        c = b.split(".");
                        d = d.split(".");
                        if (I(c[0], bf) || I(d[0], bf)) throw Pa("rwp");
                        var f = [];
                        uh(a, c)[c[c.length - 1]] = e;
                        uh(a, d)[d[d.length - 1]] = f;
                        return e
                    }
                }, gd),
                Qv = ["ymab", "rcmx", "yaSurvey", "ym_debug"],
                qh = v(function(a) {
                    Pv(a, function(c, b) {
                        Qc(a, "ytm." + c, b)
                    });
                    return function(c) {
                        im(c) && x(function(b) {
                            if (M(b) &&
                                1 === b[0]) {
                                var d = b[1];
                                I(d, Qv) && hf("p." + d, jm)(a, b)
                            }
                        }, c.code)
                    }
                }),
                Rv = B("y.t.m", function(a, c) {
                    return na(c, C(a, "y.t.t", function(b) {
                        if (b = n(b, "settings.aytm")) b = Kb(a, b), qh(a)(b)
                    }))
                }),
                Sv = B("p.ips", function(a, c) {
                    na(c, function(b) {
                        (n(b, "settings.phchange") || n(b, "settings.phhide")) && oh(a, "tag_phone", K(c), b)
                    })
                }),
                Wl = {},
                Xl = v(rc),
                hm = w(Ka("exec", /counterID=(\d+)/), V("1")),
                Yl = oa(function(a, c) {
                    var b, d = Xl(a),
                        e = Ga(c),
                        f = e[0],
                        g = e[1],
                        h = e.slice(2);
                    if (g) {
                        e = gm(a, f);
                        var k = e[0],
                            l = e[1];
                        e = K(l);
                        d[e] || (d[e] = {});
                        d = d[e];
                        c.Ve || Wl[g] &&
                            N(function(m, p) {
                                return m || !!p(a, l, h, k)
                            }, !1, Wl[g]) || ("init" === g ? (c.Ve = !0, k ? Ib(a, "" + f, "dc", (b = {}, b.key = f, b)) : a["yaCounter" + l.id] = new a.Ya[ta.bc](A({}, h[0], l))) : k && k[g] && d.Rh ? (k[g].apply(k, h), c.Ve = !0) : (b = d.$f, b || (b = [], d.$f = b), b.push(va([f, g], h))))
                    }
                }),
                em = B("destruct.e", function(a, c, b) {
                    return function() {
                        var d = J(a),
                            e = c.id;
                        x(function(f, g) {
                            return O(f) && C(a, "dest.fr." + g, f)()
                        }, b);
                        fm(a, K(c));
                        delete d.C("counters")[K(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                hd = J(window);
            hd.Ga("hitParam", {});
            hd.Ga("lastReferrer", window.location.href);
            (function() {
                X.push(function(a, c) {
                    var b;
                    return b = {}, b.firstPartyParams = et(a, c), b.firstPartyParamsHashed = Aq(a, c), b
                });
                Qd.push("fpp");
                Qd.push("fpmh")
            })();
            (function() {
                var a = J(window);
                a.Ga("getCounters", ft(window));
                id.push(gt);
                Lg.push(function(c, b) {
                    b.counters = a.C("getCounters")
                })
            })();
            (function() {
                X.push(function(a, c) {
                    var b;
                    ub(a, (b = {}, b.counterKey = K(c), b.name = "counter", b.data = ik(c), b))
                })
            })();
            xa["1"] = lb;
            X.push(ht);
            sa["1"] = $b;
            xb(Wf, -1);
            Xb["1"] = [
                [Wf, -1],
                [Oe, 1],
                [Ie, 2],
                [Ob(), 3],
                [sj, 4]
            ];
            X.push(it);
            X.push(B("p.ar",
                function(a, c) {
                    var b, d = qa(a, "a", c);
                    return b = {}, b.hit = function(e, f, g, h, k, l) {
                        var m, p, q, r = {
                            J: {},
                            K: Ha((m = {}, m.pv = 1, m.ar = 1, m))
                        };
                        f = ia(f) ? {
                            title: f.title,
                            Hf: f.referer,
                            N: f.params,
                            Wb: f.callback,
                            l: f.ctx
                        } : {
                            title: f,
                            Hf: g,
                            N: h,
                            Wb: k,
                            l: l
                        };
                        h = Bd(c);
                        g = e || U(a).href;
                        h.url !== g && (h.ref = h.url, h.url = e);
                        e = f.Hf || h.ref || a.document.referrer;
                        h = nc(a, c, "pv", (p = {}, p.id = c.id, p.url = g, p.ref = e, p), f.N);
                        p = A(r.M || {}, {
                            N: f.N,
                            title: f.title
                        });
                        r = d(A(r, {
                            M: p,
                            J: A(r.J || {}, (q = {}, q["page-url"] = g, q["page-ref"] = e, q))
                        }), c).then(h);
                        return Uc(a, "p.ar.s",
                            r, f.Wb || F, f.l)
                    }, b
                }));
            xa.a = lb;
            Xb.a = Yb;
            sa.a = $b;
            X.push(Ae);
            xa.g = lb;
            sa.g = $b;
            Xb.g = Yb;
            X.push(jt);
            X.push(kt);
            Xb.t = Yb;
            xa.t = lb;
            sa.t = $b;
            X.push(B("cl.p", function(a, c) {
                function b(p, q, r, t) {
                    void 0 === t && (t = {});
                    r ? Ce(a, c, {
                        url: r,
                        lb: !0,
                        xc: p,
                        Bc: q,
                        sender: e,
                        ng: t
                    }) : h.warn("clel")
                }
                var d, e = qa(a, "2", c),
                    f = [],
                    g = K(c),
                    h = oc(a, g),
                    k = C(a, "s.s.tr", u(Ge(a, g), sq));
                g = {
                    l: a,
                    cb: c,
                    fh: f,
                    sender: e,
                    Aj: J(a),
                    Rg: ad(a, c.id),
                    Cj: Dc(a),
                    Yi: u(u(g, Ye(a)), w(ua, V("trackLinks")))
                };
                g = C(a, "cl.p.c", u(g, pq));
                g = ka(a).F(a, ["click"], g);
                c.gg && k(c.gg);
                var l = C(a, "file.clc",
                        D([!0, !1], b)),
                    m = C(a, "e.l.l.clc", D([!1, !0], b));
                f = C(a, "add.f.e.clc", lt(f));
                return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = g, d
            }));
            Xb["2"] = Yb;
            xa["2"] = lb;
            sa["2"] = $b;
            xa.r = Id("r");
            sa.r = at;
            Ua.push(B("p.r", function(a, c) {
                var b = nt(a),
                    d = qa(a, "r", c),
                    e = C(a, "rts.p");
                return na(c, D([function(f, g) {
                    var h = {
                            id: g.Qg,
                            ba: g.ba
                        },
                        k = {
                            Z: {
                                ca: g.Bi
                            },
                            K: Ha(g.Fg),
                            J: g.N,
                            M: {
                                Ob: g.Ob
                            },
                            ma: {
                                za: g.za
                            }
                        };
                    g.Ha && (k.Ha = qf(g.Ha));
                    h = d(k, h)["catch"](e);
                    return f.then(u(h, R))
                }, L.resolve(), b], N))["catch"](e)
            }));
            Z("r", function(a) {
                return {
                    O: function(c,
                        b) {
                        var d = c.K,
                            e = void 0 === d ? Ha() : d,
                            f = c.M.Ob,
                            g = Ad(a);
                        d = e.C("rqnl", 0) + 1;
                        e.D("rqnl", d);
                        if (e = n(g, G(".", [f, "browserInfo"]))) e.rqnl = d, Uf(a);
                        b()
                    },
                    Ba: function(c, b) {
                        cj(a, c);
                        b()
                    }
                }
            }, 1);
            xb(Be, 100);
            Z("1", Be, 100);
            X.push(ot);
            Z("n", Oe, 1);
            Z("n", Ie, 2);
            Z("n", Ob(), 3);
            Z("n", Be, 100);
            xa.n = lb;
            sa.n = $b;
            pc({
                Me: {
                    ea: "accurateTrackBounce"
                }
            });
            X.push(pt);
            xa.m = Id("cm");
            sa.m = ll;
            Z("m", Ob(["u", "v", "vf"]), 1);
            Z("m", Be, 2);
            pc({
                Ng: {
                    ea: "clickmap"
                }
            });
            X.push(qt);
            X.push(rt);
            X.push(st);
            X.push(tt);
            (function() {
                X.push(ut);
                Qd.push("ecommerce");
                pc({
                    od: {
                        ea: "ecommerce",
                        Ma: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            Ua.push(wt);
            X.push(xt);
            Qd.push("user_id");
            X.push(yt);
            xb(function(a, c) {
                return {
                    Ba: function(b, d) {
                        var e = Ja(a, c);
                        e = e && e.userParams;
                        var f = (b.M || {}).Ge;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            Qe.push("_ym_debug");
            Zc.unshift(Bt);
            X.push(Ct);
            Zc.push(function(a) {
                var c = J(a);
                c.C("i") || (c.D("i", !0), ka(a).F(a, ["message"], u(a, Tp)))
            });
            (function() {
                var a, c = (a = {}, a.tp = w(eb, jk, Mb), a.tpid = w(eb, Dr), a);
                A(Fd, c)
            })();
            xb(yd, 20);
            Z("n", yd, 20);
            Z("1", yd, 20);
            Zc.unshift(Et);
            Fd.fp = function(a,
                c, b) {
                if (b.J && b.J.nohit) return null;
                b = J(a).C;
                if (!b("fpe")) return null;
                c = Dt(c);
                if (c.ih) return null;
                b = b("fht", Infinity);
                a: {
                    var d = n(a, "performance.getEntriesByType");
                    if (O(d)) {
                        if (a = ha(w(R, V("name"), Aa("first-contentful-paint")), d.call(a.performance, "paint")), a.length) {
                            a = a[0].startTime;
                            break a
                        }
                    } else {
                        var e = n(a, "chrome.loadTimes");
                        d = il(a);
                        if (O(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                            a = 1E3 * e - d;
                            break a
                        }
                        if (a = n(a, "performance.timing.msFirstPaint")) {
                            a -= d;
                            break a
                        }
                    }
                    a = void 0
                }
                return a && b > a ? (c.ih = a,
                    Math.round(a)) : null
            };
            X.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd = B("ecm.a", Gt(a, c)), b.ecommerceRemove = B("ecm.r", Ht(a, c)), b.ecommerceDetail = B("ecm.d", It(a, c)), b.ecommercePurchase = B("ecm.p", Jt(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = Pt;
                c.pri = Cp;
                c.wv = u(2, R);
                c.ds = Fp;
                c.co = function(b) {
                    return rb(J(b).C("jn"))
                };
                c.td = Vt;
                A(c, (a = {}, a.iss = w(Ds, Mb), a.hdl = w(Es, Mb), a.iia = w(Fs, Mb), a.cpf = w(Ot, Mb), a.ntf = v(function(b) {
                    b = n(b, "Notification.permission");
                    b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                    return Wa(b) ? null :
                        b ? 2 : 1
                }), a.eu = Fb("isEU"), a.ns = il, a.np = function(b) {
                    return Xa(b, 0, 100) ? null : qd(we($a(Of(b), 100)))
                }, a));
                c.pani = Qt;
                c.pci = Rt;
                c.si = St;
                c.gi = Tt;
                A(Fd, c)
            })();
            (function() {
                var a = {};
                a.hc = Fb("hc");
                a.oo = Fb("oo");
                a.pmc = Fb("cmc");
                a.lt = function(c) {
                    var b = Md(c).C("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.re = w(br, Mb);
                a.aw = function(c) {
                    c = ib(w(aa, Gc), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return aa(c) ? null : rb(!c)
                };
                a.rcm = Yt;
                a.yu = function(c) {
                    return (c = jd(c, "").C("yandexuid")) && c.substring(0, 25)
                };
                a.ifc = Fb("ifc");
                a.ifb = Fb("ifb");
                a.ecs = Fb("ecs");
                a.csi = Fb("scip");
                a.cdl = Fb("cdl");
                a.eco = v(Ap, w(eb, K));
                a.dss = Fb("dSync");
                a.pis = Fb("pis");
                a.ucs = function(c) {
                    return (c = jd(c).C("ucs")) && c.substring(0, 25)
                };
                A(dg, a)
            })();
            sa.er = cd;
            (function(a) {
                try {
                    var c = Ug(a, "er"),
                        b = xp(a, c);
                    Zj.push(function(d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[ta.bb] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            (function() {
                ef.push(Bp);
                He.unshift(wp);
                Zg.push(function(a) {
                    var c =
                        void 0;
                    void 0 === c && (c = !0);
                    J(a).D("oo", c)
                })
            })();
            xb(function(a, c) {
                return {
                    O: function(b, d) {
                        var e = b.J,
                            f = b.K;
                        !xl[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, xl[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            X.push(Zt);
            Xb.e = Yb;
            xa.e = lb;
            sa.e = $b;
            pc({
                exp: {
                    ea: "experiments"
                }
            });
            oj.experiments = "ex";
            (function() {
                var a; of .push($t);
                xa.f = lb;
                A(sa, (a = {}, a.f = kl, a));
                Z("f", Ob(), 1);
                Z("f", wj, 2);
                Z("f", yd, 20)
            })();
            ef.push(function(a, c) {
                var b = {
                        qa: K(c),
                        jd: Ja(a, c),
                        fg: ja(a),
                        Ud: Ta(a)
                    },
                    d = b.fg(pb);
                if (!b.Ud.Ld) {
                    var e = b.Ud.C("ymoo" + b.qa);
                    if (e && 30 > d - e) b = b.qa,
                        delete J(a).C("counters", {})[b], Sa(Oa("uws"));
                    else na(c, au(b))["catch"](C(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = [Cb];
                A(sa, (a = {}, a.s = b, a.S = b, a.u = cd, a));
                A(xa, (c = {}, c.s = Pb, c.S = lb, c.u = Pb, c));
                Z("s");
                Z("u");
                Z("S", Ob(["v", "hid", "u", "vf", "rn"]), 1);
                X.push(B("s", hp))
            })();
            xa["8"] = Pb;
            sa["8"] = [cg];
            jl.push([cg, 0]);
            X.push(B("p.us", function(a, c) {
                return na(c, function(b) {
                    if (n(b, "settings.sbp")) return Fi(a, b, {
                        cb: c,
                        Mb: "8",
                        Sd: "cs"
                    })
                })
            }));
            Z("p", Ob($g), 1);
            Og("pub", function(a, c) {
                return {
                    O: function(b, d) {
                        si(a, c, b);
                        d()
                    }
                }
            }, 1);
            xa.p =
                eu;
            sa.p = Ea([Bb, Cb]);
            Ua.push(iu);
            pc({
                xb: {
                    ea: "webvisor",
                    Ma: Db
                },
                Wg: {
                    ea: "disableFormAnalytics",
                    Ma: Db
                }
            });
            Z("4", Ob($g), 1);
            xa["4"] = Al;
            sa["4"] = Ea([Bb, Cb, Vc]);
            Ua.push(ou);
            (function() {
                Z("W", Ob($g), 1);
                Og("wv", wo, 1);
                sa.W = Ea([Bb, Cb]);
                xa.W = Al;
                Ua.push(Xu);
                X.push(Yu);
                pc({
                    xb: {
                        ea: "webvisor"
                    }
                });
                pc({
                    $i: {
                        ea: "trustedDomains"
                    },
                    Zb: {
                        ea: "childIframe",
                        Ma: Db
                    }
                });
                Zg.push(function(a) {
                    J(a).C("stopRecorder", F)()
                })
            })();
            X.push($u);
            Z("pi");
            xa.pi = Pb;
            sa.pi = cd;
            Og("w", function(a, c) {
                return {
                    O: function(b, d) {
                        if (b.K) {
                            var e = zf(c),
                                f = e.status;
                            "rt" === e.Mb && f && (b.K.D("rt", f), b.ma || (b.ma = {}), b.ma.Oh = 1 === f ? bi(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            X.push(bv);
            X.push(nv);
            sa["6"] = Ea([Bb, Cb]);
            xa["6"] = Pb;
            X.push(ov);
            X.push(Wt);
            (function() {
                Lg.push(function(a, c) {
                    c.informer = En(a)
                })
            })();
            xb(wf, 6);
            Z("1", wf, 6);
            Z("adb");
            Z("n", wf, 4);
            sa.adb = cd;
            xa.adb = Mj;
            id.push(qv);
            sa["5"] = $b;
            xa["5"] = lb;
            Xb["5"] = ha(w(Cd, tc([Oe, Ie]), Gc), Yb);
            X.push(rv);
            Z("5", yd, 20);
            xb(Vh, 7);
            Z("n", Vh, 6);
            Ua.push(sv);
            xa.d = lb;
            Z("d", Ob(["hid", "u", "v", "vf"]), 1);
            sa.d = cd;
            Z("n", function(a, c) {
                return {
                    Ba: function(b, d) {
                        if (!b.M ||
                            !b.M.force) {
                            var e = .002,
                                f = c.id === ta.xg ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = wd(a);
                            if (p && O(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var q = {}, r = {}, t = {}, y = wl(), E = U(a).href, Q = 0; Q < p.length; Q += 1) {
                                    var P = p[Q],
                                        za = P.name.replace(vl, "").split("?")[0],
                                        Ca = hc(za),
                                        ac = (g = {}, g.dns = Math.round(P.domainLookupEnd - P.domainLookupStart), g.tcp = Math.round(P.connectEnd - P.connectStart), g.duration = Math.round(P.duration), g.response = Math.round(P.responseEnd -
                                            P.requestStart), g);
                                    "script" !== P.initiatorType || e || (r[za] = A(ac, (h = {}, h.name = P.name, h.decodedBodySize = P.decodedBodySize, h.transferSize = Math.round(P.transferSize), h)));
                                    !Xt[Ca] && !y[Ca] || q[za] || f || (q[za] = A(ac, (k = {}, k.pages = E, k)))
                                }
                                fa(q).length && (t.timings8 = q);
                                fa(r).length && (t.scripts = r);
                                if (fa(t).length) qa(a, "d", c)({
                                    K: Ha((l = {}, l.ar = 1, l.pv = 1, l)),
                                    Z: {
                                        ca: Lb(a, t) || void 0
                                    },
                                    J: (m = {}, m["page-url"] = E, m)
                                }, {
                                    id: ta.Ag,
                                    ba: "0"
                                })["catch"](C(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            sa.ci = [Cb];
            xa.ci = Pb;
            Ua.push(B("p.sci", function(a, c) {
                return na(c,
                    u(a, Cn))["catch"](C(a, "ins.cs"))
            }));
            X.push(tv);
            Ua.push(Nt);
            xb(ih, 8);
            Z("f", ih, 3);
            Z("n", ih, 5);
            id.push(function(a) {
                return B("fip", function(c) {
                    if (!rl(c) || Kd(c)) {
                        var b = Ta(c);
                        if (!b.C("fip")) {
                            var d = w(Ub(w(function(e, f) {
                                return B("fip." + f, e)(c)
                            }, H(cs, null))), xe("-"))(a);
                            b.D("fip", d)
                        }
                    }
                })
            }([zv, yv, function(a) {
                var c = n(a, "ApplePaySession"),
                    b = U(a).protocol;
                a = c && "https:" === b && !qb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (O(d))
                        for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ?
                            "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function(a) {
                if (a = Mt(a)) try {
                    for (var c = [], b = 0; b < sl.length; b += 1) {
                        var d = a(sl[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? G("x", e) : ""
            }, function(a) {
                var c = void 0;
                void 0 === c && (c = wv);
                var b = n(a, "navigator") || {};
                c = z(u(b, n), c);
                c = G("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = ma(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Qa(e)
            }, uv, function(a) {
                a =
                    n(a, "screen") || {};
                return G("x", z(u(a, n), vv))
            }, function(a) {
                return G("x", ln(a) || [])
            }, function(a) {
                a = xn(a);
                return M(a) ? G("x", a) : a
            }, function(a) {
                return (a = zn(a)) ? G("x", z(D(["", ["matches", "media"]], nn), Ea(us(a)))) : ""
            }]));
            xb(function(a) {
                return {
                    O: function(c, b) {
                        var d = c.K,
                            e = Ta(a).C("fip");
                        e && d && (d.D("fip", e), ce(c, "fip", rb(e)));
                        b()
                    }
                }
            }, 9);
            Z("h", function(a) {
                return {
                    Ba: function(c, b) {
                        var d = c.Hi;
                        Qf(c) && d && J(a).D("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            id.push(Wu);
            Ua.push(Ev);
            X.push(Fv);
            pc({
                jj: {
                    ea: "yaDisableGDPR"
                },
                kj: {
                    ea: "yaGDPRLang"
                }
            });
            He.push(function(a, c) {
                return {
                    O: D([a, c], Ym)
                }
            });
            Qe.push("gdpr");
            Qe.push("gdpr_popup");
            tg.push(function(a, c) {
                var b = ae(a);
                b = be(b);
                if (ha(tc(Iv), b).length) return !0;
                b = c(a, "gdpr");
                return I(b, [Pc, Hv])
            });
            He.push(function(a) {
                return {
                    O: function(c, b) {
                        var d = c.ma || {},
                            e;
                        (e = n(a, "document.referrer")) ? (e = yc(a, e).host, e = nj(e), e = zl + "." + (e || bu)) : e = kc;
                        c.ma = A(d, {
                            Ph: [e]
                        });
                        b()
                    }
                }
            });
            xb(Vl, 5);
            Z("1", Vl, 6);
            sa.c = cd;
            xa.c = Pb;
            Z("1", Dh, 7);
            xb(Dh, 7);
            Zc.push(B("hcp", Bh));
            Ua.push(B("p.ot", Lv));
            Ua.push(vb("cta", Mv, !0));
            Z("n", function(a) {
                var c =
                    J(a);
                return {
                    O: function(b, d) {
                        var e = b.M || {},
                            f = c.C("cta"),
                            g = c.C("cta.e");
                        if (f || g) {
                            e.N || (e.N = {});
                            e.N.__ym || (e.N.__ym = {});
                            var h = {};
                            f ? (f = z(function(k) {
                                var l, m = n(k, "topic");
                                k = n(k, "version");
                                return l = {}, l.topic = m, l.version = k, l
                            }, f), h.ct = f) : g && (h["ct.e"] = g);
                            A(e.N.__ym, h);
                            b.M = A(b.M || {}, e)
                        }
                        d()
                    }
                }
            }, 7);
            Z("n", Wf, 8);
            X.push(Nv);
            Z("g", function(a, c) {
                return {
                    O: function(b, d) {
                        var e = b.J;
                        if (e && e["page-url"]) {
                            var f = e["page-url"];
                            if (vm(f)) na(c, function(g) {
                                var h, k = n(g, "settings.goal_values");
                                if (k) {
                                    var l = (g = yc(a, f).query) ? fk(g) :
                                        void 0;
                                    if (l) {
                                        g = b.M || {};
                                        g.N || (g.N = {});
                                        g.N.__ym || (g.N.__ym = {});
                                        var m = wh(f) ? zm : xm;
                                        if (m = ib(u(l, m), k)) {
                                            k = (h = {}, h.rg = m.id, h);
                                            a: {
                                                if (h = a.document.body) {
                                                    l = m.price_patterns;
                                                    m = Ov(m.id);
                                                    if (m.Bb) {
                                                        var p = m.Bb.element;
                                                        if (ob(p, "isConnected") ? p.isConnected : Wb("html", a, p) === a.document.documentElement) {
                                                            h = vh(m.Bb);
                                                            break a
                                                        }
                                                        m.Bb = void 0
                                                    }
                                                    var q = null,
                                                        r = null;
                                                    for (p = 0; p < l.length; p += 1) {
                                                        var t = l[p],
                                                            y = t[1];
                                                        "p" === t[0] ? (q = a, q = (y = sm(y)) ? n(q, "document.evaluate") ? q.document.evaluate(y, q.document, null, q.XPathResult.FIRST_ORDERED_NODE_TYPE,
                                                            null).singleNodeValue : null : null, r = "x") : ld(a) && (q = ec(y, h), r = "c");
                                                        if (q && r) {
                                                            m.Bb = {
                                                                element: q,
                                                                rd: r
                                                            };
                                                            h = vh(m.Bb);
                                                            break a
                                                        }
                                                    }
                                                }
                                                h = void 0
                                            }
                                            h && (k.gp = qd(we(h.Di)), k.mg = h.rd);
                                            A(g.N.__ym, k);
                                            b.M = A(b.M || {}, g)
                                        }
                                    }
                                }
                                d()
                            })["catch"](w(Tc(d), C(a, "a.g.v")));
                            else d()
                        } else d()
                    }
                }
            }, -2);
            Zc.push(B("cdl", function(a) {
                var c = J(a).Ga;
                if (a = n(a, "navigator.cookieDeprecationLabel")) try {
                    a.getValue().then(u("cdl", c), D(["cdl", "e"], c))
                } catch (b) {
                    c("cdl", "d")
                } else c("cdl", "na")
            }));
            Ua.push(Rv);
            Ua.push(Sv);
            sa.pis = ll;
            xa.pis = Pb;
            Ua.push(B("p.sci", function(a,
                c) {
                return na(c, function(b) {
                    var d = n(b, "settings.pis");
                    if (d && !he(b)) {
                        b = J(a);
                        var e = b.C;
                        b = b.D;
                        e = e("pis");
                        if (aa(e)) return e = qa(a, "pis"), b("pis", "0"), e({
                            Z: {
                                ha: ["pis"]
                            }
                        }, [d]).then(D(["pis", "1"], b), Tc(D(["pis", "a"], b)))
                    }
                })["catch"](C(a, "pis"))
            }));
            X.push(function(a, c) {
                var b = Xl(a),
                    d = K(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Rh = !0;
                if (b = e.$f) d = Yl(a), x(d, b)
            });
            Ua.unshift(vb("is", function(a, c) {
                na(c, function(b) {
                    (Pe(a) || n(b, "settings.sm")) && oh(a, "tag_debug", K(c), b)
                })
            }));
            x(db(ua)(window), Zc);
            if (window.Ya && cf) {
                var Zl = ta.bc;
                window.Ya[Zl] =
                    cf;
                dt(window);
                x(w(Lc([window, window.Ya[Zl]]), ua), Lg)
            }(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = Yl(a);
                    Ee(a, b, function(e) {
                        e.ya.F(d)
                    }, !0)
                }
            })(window)
        })()
    } catch (cf) {};
}).call(this)