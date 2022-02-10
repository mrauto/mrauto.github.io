this.wordle = this.wordle || {},
this.wordle.bundle = function(e) {
    "use strict";
    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function s(e, a) {
        if (!(e instanceof a))
            throw new TypeError("Cannot call a class as a function")
    }
    function t(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1,
            t.configurable = !0,
            "value"in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t)
        }
    }
    function o(e, a, s) {
        return a && t(e.prototype, a),
        s && t(e, s),
        e
    }
    function n(e, a, s) {
        return a in e ? Object.defineProperty(e, a, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[a] = s,
        e
    }
    function r(e, a) {
        if ("function" != typeof a && null !== a)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        a && l(e, a)
    }
    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function l(e, a) {
        return (l = Object.setPrototypeOf || function(e, a) {
            return e.__proto__ = a,
            e
        }
        )(e, a)
    }
    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function u(e, a, s) {
        return (u = d() ? Reflect.construct : function(e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t));
            return s && l(o, s.prototype),
            o
        }
        ).apply(null, arguments)
    }
    function c(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (c = function(e) {
            if (null === e || (s = e,
            -1 === Function.toString.call(s).indexOf("[native code]")))
                return e;
            var s;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e))
                    return a.get(e);
                a.set(e, t)
            }
            function t() {
                return u(e, arguments, i(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            l(t, e)
        }
        )(e)
    }
    function p(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function m(e, a) {
        return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
    }
    function h(e) {
        var a = d();
        return function() {
            var s, t = i(e);
            if (a) {
                var o = i(this).constructor;
                s = Reflect.construct(t, arguments, o)
            } else
                s = t.apply(this, arguments);
            return m(this, s)
        }
    }
    function y(e, a) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, a) {
            var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == s)
                return;
            var t, o, n = [], r = !0, i = !1;
            try {
                for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value),
                !a || n.length !== a); r = !0)
                    ;
            } catch (e) {
                i = !0,
                o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i)
                        throw o
                }
            }
            return n
        }(e, a) || b(e, a) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function g(e) {
        return function(e) {
            if (Array.isArray(e))
                return f(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function b(e, a) {
        if (e) {
            if ("string" == typeof e)
                return f(e, a);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === s && e.constructor && (s = e.constructor.name),
            "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
        }
    }
    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++)
            t[s] = e[s];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "_letter", ""),
            n(p(e), "_state", "empty"),
            n(p(e), "_animation", "idle"),
            n(p(e), "_last", !1),
            n(p(e), "_reveal", !1),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "last",
            set: function(e) {
                this._last = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                this.$tile = this.shadowRoot.querySelector(".tile"),
                this.$tile.addEventListener("animationend", (function(a) {
                    "PopIn" === a.animationName && (e._animation = "idle"),
                    "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state,
                    e._animation = "flip-out"),
                    "FlipOut" === a.animationName && (e._animation = "idle",
                    e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row",{
                        bubbles: !0,
                        composed: !0
                    }))),
                    e._render()
                }
                )),
                this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                case "letter":
                    if (s === a)
                        break;
                    var t = "null" === s ? "" : s;
                    this._letter = t,
                    this._state = t ? "tbd" : "empty",
                    this._animation = t ? "pop" : "idle";
                    break;
                case "evaluation":
                    if (!s)
                        break;
                    this._state = s;
                    break;
                case "reveal":
                    this._animation = "flip-in",
                    this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                this.$tile && (this.$tile.textContent = this._letter,
                ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state),
                (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letter", "evaluation", "reveal"]
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(6, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e._letters = "",
            e._evaluation = [],
            e._length,
            e
        }
        return o(t, [{
            key: "evaluation",
            get: function() {
                return this._evaluation
            },
            set: function(e) {
                var a = this;
                this._evaluation = e,
                this.$tiles && this.$tiles.forEach((function(e, s) {
                    e.setAttribute("evaluation", a._evaluation[s]),
                    setTimeout((function() {
                        e.setAttribute("reveal", "")
                    }
                    ), 300 * s)
                }
                ))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function(a) {
                    var s = document.createElement("game-tile")
                      , t = e._letters[a];
                    (t && s.setAttribute("letter", t),
                    e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]),
                    setTimeout((function() {
                        s.setAttribute("reveal", "")
                    }
                    ), 100 * a));
                    a === e._length - 1 && (s.last = !0),
                    e.$row.appendChild(s)
                }, s = 0; s < this._length; s++)
                    a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"),
                this.addEventListener("animationend", (function(a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid")
                }
                ))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                case "letters":
                    this._letters = s || "";
                    break;
                case "length":
                    this._length = parseInt(s, 10);
                    break;
                case "win":
                    if (null === s) {
                        this.$tiles.forEach((function(e) {
                            e.classList.remove("win")
                        }
                        ));
                        break
                    }
                    this.$tiles.forEach((function(e, a) {
                        e.classList.add("win"),
                        e.style.animationDelay = "".concat(100 * a, "ms")
                    }
                    ))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var e = this;
                this.$row && this.$tiles.forEach((function(a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letters", "length", "invalid", "win"]
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme"
      , S = "colorBlindTheme"
      , _ = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            s(this, t),
            n(p(e = a.call(this)), "isDarkTheme", !1),
            n(p(e), "isColorBlindTheme", !1),
            e.attachShadow({
                mode: "open"
            });
            var o = JSON.parse(window.localStorage.getItem(j))
              , r = window.matchMedia("(prefers-color-scheme: dark)").matches
              , i = JSON.parse(window.localStorage.getItem(S));
            return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0),
            !0 !== i && !1 !== i || e.setColorBlindTheme(i),
            e
        }
        return o(t, [{
            key: "setDarkTheme",
            value: function(e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"),
                this.isDarkTheme = e,
                window.localStorage.setItem(j, JSON.stringify(e))
            }
        }, {
            key: "setColorBlindTheme",
            value: function(e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"),
                this.isColorBlindTheme = e,
                window.localStorage.setItem(S, JSON.stringify(e))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                    var s = a.detail
                      , t = s.name
                      , o = s.checked;
                    switch (t) {
                    case "dark-theme":
                        return void e.setDarkTheme(o);
                    case "color-blind-theme":
                        return void e.setColorBlindTheme(o)
                    }
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    function q(e, a) {
        return e === a || e != e && a != a
    }
    function E(e, a) {
        for (var s = e.length; s--; )
            if (q(e[s][0], a))
                return s;
        return -1
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;
    function C(e) {
        var a = -1
          , s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    C.prototype.clear = function() {
        this.__data__ = [],
        this.size = 0
    }
    ,
    C.prototype.delete = function(e) {
        var a = this.__data__
          , s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1),
        --this.size,
        !0)
    }
    ,
    C.prototype.get = function(e) {
        var a = this.__data__
          , s = E(a, e);
        return s < 0 ? void 0 : a[s][1]
    }
    ,
    C.prototype.has = function(e) {
        return E(this.__data__, e) > -1
    }
    ,
    C.prototype.set = function(e, a) {
        var s = this.__data__
          , t = E(s, e);
        return t < 0 ? (++this.size,
        s.push([e, a])) : s[t][1] = a,
        this
    }
    ;
    var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global
      , T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self
      , I = L || T || Function("return this")()
      , M = I.Symbol
      , O = Object.prototype
      , R = O.hasOwnProperty
      , P = O.toString
      , $ = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;
    function D(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : N && N in Object(e) ? function(e) {
            var a = R.call(e, $)
              , s = e[$];
            try {
                e[$] = void 0;
                var t = !0
            } catch (e) {}
            var o = P.call(e);
            return t && (a ? e[$] = s : delete e[$]),
            o
        }(e) : function(e) {
            return H.call(e)
        }(e)
    }
    function G(e) {
        var s = a(e);
        return null != e && ("object" == s || "function" == s)
    }
    function B(e) {
        if (!G(e))
            return !1;
        var a = D(e);
        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
    }
    var F, W = I["__core-js_shared__"], Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/
      , X = Function.prototype
      , V = Object.prototype
      , K = X.toString
      , Q = V.hasOwnProperty
      , Z = RegExp("^" + K.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function ee(e) {
        return !(!G(e) || (a = e,
        Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
            if (null != e) {
                try {
                    return J.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var a
    }
    function ae(e, a) {
        var s = function(e, a) {
            return null == e ? void 0 : e[a]
        }(e, a);
        return ee(s) ? s : void 0
    }
    var se = ae(I, "Map")
      , te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;
    function re(e) {
        var a = -1
          , s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    function ie(e, s) {
        var t, o, n = e.__data__;
        return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map
    }
    function le(e) {
        var a = -1
          , s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s; ) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    re.prototype.clear = function() {
        this.__data__ = te ? te(null) : {},
        this.size = 0
    }
    ,
    re.prototype.delete = function(e) {
        var a = this.has(e) && delete this.__data__[e];
        return this.size -= a ? 1 : 0,
        a
    }
    ,
    re.prototype.get = function(e) {
        var a = this.__data__;
        if (te) {
            var s = a[e];
            return "__lodash_hash_undefined__" === s ? void 0 : s
        }
        return oe.call(a, e) ? a[e] : void 0
    }
    ,
    re.prototype.has = function(e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e)
    }
    ,
    re.prototype.set = function(e, a) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1,
        s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a,
        this
    }
    ,
    le.prototype.clear = function() {
        this.size = 0,
        this.__data__ = {
            hash: new re,
            map: new (se || C),
            string: new re
        }
    }
    ,
    le.prototype.delete = function(e) {
        var a = ie(this, e).delete(e);
        return this.size -= a ? 1 : 0,
        a
    }
    ,
    le.prototype.get = function(e) {
        return ie(this, e).get(e)
    }
    ,
    le.prototype.has = function(e) {
        return ie(this, e).has(e)
    }
    ,
    le.prototype.set = function(e, a) {
        var s = ie(this, e)
          , t = s.size;
        return s.set(e, a),
        this.size += s.size == t ? 0 : 1,
        this
    }
    ;
    function de(e) {
        var a = this.__data__ = new C(e);
        this.size = a.size
    }
    de.prototype.clear = function() {
        this.__data__ = new C,
        this.size = 0
    }
    ,
    de.prototype.delete = function(e) {
        var a = this.__data__
          , s = a.delete(e);
        return this.size = a.size,
        s
    }
    ,
    de.prototype.get = function(e) {
        return this.__data__.get(e)
    }
    ,
    de.prototype.has = function(e) {
        return this.__data__.has(e)
    }
    ,
    de.prototype.set = function(e, a) {
        var s = this.__data__;
        if (s instanceof C) {
            var t = s.__data__;
            if (!se || t.length < 199)
                return t.push([e, a]),
                this.size = ++s.size,
                this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a),
        this.size = s.size,
        this
    }
    ;
    var ue = function() {
        try {
            var e = ae(Object, "defineProperty");
            return e({}, "", {}),
            e
        } catch (e) {}
    }();
    function ce(e, a, s) {
        "__proto__" == a && ue ? ue(e, a, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0
        }) : e[a] = s
    }
    function pe(e, a, s) {
        (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
    }
    var me, he = function(e, a, s) {
        for (var t = -1, o = Object(e), n = s(e), r = n.length; r--; ) {
            var i = n[me ? r : ++t];
            if (!1 === a(o[i], i, o))
                break
        }
        return e
    }, ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e, ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module, be = ge && ge.exports === ye ? I.Buffer : void 0, fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;
    function ve(e, a) {
        var s, t, o = a ? (s = e.buffer,
        t = new s.constructor(s.byteLength),
        new ke(t).set(new ke(s)),
        t) : e.buffer;
        return new e.constructor(o,e.byteOffset,e.length)
    }
    var we = Object.create
      , xe = function() {
        function e() {}
        return function(a) {
            if (!G(a))
                return {};
            if (we)
                return we(a);
            e.prototype = a;
            var s = new e;
            return e.prototype = void 0,
            s
        }
    }();
    var ze, je, Se = (ze = Object.getPrototypeOf,
    je = Object,
    function(e) {
        return ze(je(e))
    }
    ), _e = Object.prototype;
    function qe(e) {
        var a = e && e.constructor;
        return e === ("function" == typeof a && a.prototype || _e)
    }
    function Ee(e) {
        return null != e && "object" == a(e)
    }
    function Ae(e) {
        return Ee(e) && "[object Arguments]" == D(e)
    }
    var Ce = Object.prototype
      , Le = Ce.hasOwnProperty
      , Te = Ce.propertyIsEnumerable
      , Ie = Ae(function() {
        return arguments
    }()) ? Ae : function(e) {
        return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee")
    }
      , Me = Array.isArray;
    function Oe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }
    function Re(e) {
        return null != e && Oe(e.length) && !B(e)
    }
    var Pe = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e
      , $e = Pe && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module
      , He = $e && $e.exports === Pe ? I.Buffer : void 0
      , Ne = (He ? He.isBuffer : void 0) || function() {
        return !1
    }
      , De = Function.prototype
      , Ge = Object.prototype
      , Be = De.toString
      , Fe = Ge.hasOwnProperty
      , We = Be.call(Object);
    var Ye = {};
    Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0,
    Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
    var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e
      , Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module
      , Xe = Ue && Ue.exports === Je && L.process
      , Ve = function() {
        try {
            var e = Ue && Ue.require && Ue.require("util").types;
            return e || Xe && Xe.binding && Xe.binding("util")
        } catch (e) {}
    }()
      , Ke = Ve && Ve.isTypedArray
      , Qe = Ke ? function(e) {
        return function(a) {
            return e(a)
        }
    }(Ke) : function(e) {
        return Ee(e) && Oe(e.length) && !!Ye[D(e)]
    }
    ;
    function Ze(e, a) {
        if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a)
            return e[a]
    }
    var ea = Object.prototype.hasOwnProperty;
    function aa(e, a, s) {
        var t = e[a];
        ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
    }
    var sa = /^(?:0|[1-9]\d*)$/;
    function ta(e, s) {
        var t = a(e);
        return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
    }
    var oa = Object.prototype.hasOwnProperty;
    function na(e, a) {
        var s = Me(e)
          , t = !s && Ie(e)
          , o = !s && !t && Ne(e)
          , n = !s && !t && !o && Qe(e)
          , r = s || t || o || n
          , i = r ? function(e, a) {
            for (var s = -1, t = Array(e); ++s < e; )
                t[s] = a(s);
            return t
        }(e.length, String) : []
          , l = i.length;
        for (var d in e)
            !a && !oa.call(e, d) || r && ("length" == d || o && ("offset" == d || "parent" == d) || n && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }
    var ra = Object.prototype.hasOwnProperty;
    function ia(e) {
        if (!G(e))
            return function(e) {
                var a = [];
                if (null != e)
                    for (var s in Object(e))
                        a.push(s);
                return a
            }(e);
        var a = qe(e)
          , s = [];
        for (var t in e)
            ("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }
    function la(e) {
        return Re(e) ? na(e, !0) : ia(e)
    }
    function da(e) {
        return function(e, a, s, t) {
            var o = !s;
            s || (s = {});
            for (var n = -1, r = a.length; ++n < r; ) {
                var i = a[n]
                  , l = t ? t(s[i], e[i], i, s, e) : void 0;
                void 0 === l && (l = e[i]),
                o ? ce(s, i, l) : aa(s, i, l)
            }
            return s
        }(e, la(e))
    }
    function ua(e, a, s, t, o, n, r) {
        var i = Ze(e, s)
          , l = Ze(a, s)
          , d = r.get(l);
        if (d)
            pe(e, s, d);
        else {
            var u, c = n ? n(i, l, s + "", e, a, r) : void 0, p = void 0 === c;
            if (p) {
                var m = Me(l)
                  , h = !m && Ne(l)
                  , y = !m && !h && Qe(l);
                c = l,
                m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                    var s = -1
                      , t = e.length;
                    for (a || (a = Array(t)); ++s < t; )
                        a[s] = e[s];
                    return a
                }(i) : h ? (p = !1,
                c = function(e, a) {
                    if (a)
                        return e.slice();
                    var s = e.length
                      , t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t),
                    t
                }(l, !0)) : y ? (p = !1,
                c = ve(l, !0)) : c = [] : function(e) {
                    if (!Ee(e) || "[object Object]" != D(e))
                        return !1;
                    var a = Se(e);
                    if (null === a)
                        return !0;
                    var s = Fe.call(a, "constructor") && a.constructor;
                    return "function" == typeof s && s instanceof s && Be.call(s) == We
                }(l) || Ie(l) ? (c = i,
                Ie(i) ? c = da(i) : G(i) && !B(i) || (c = function(e) {
                    return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
                }(l))) : p = !1
            }
            p && (r.set(l, c),
            o(c, l, t, n, r),
            r.delete(l)),
            pe(e, s, c)
        }
    }
    function ca(e, a, s, t, o) {
        e !== a && he(a, (function(n, r) {
            if (o || (o = new de),
            G(n))
                ua(e, a, r, s, ca, t, o);
            else {
                var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
                void 0 === i && (i = n),
                pe(e, r, i)
            }
        }
        ), la)
    }
    function pa(e) {
        return e
    }
    function ma(e, a, s) {
        switch (s.length) {
        case 0:
            return e.call(a);
        case 1:
            return e.call(a, s[0]);
        case 2:
            return e.call(a, s[0], s[1]);
        case 3:
            return e.call(a, s[0], s[1], s[2])
        }
        return e.apply(a, s)
    }
    var ha = Math.max;
    var ya = ue ? function(e, a) {
        return ue(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: (s = a,
            function() {
                return s
            }
            ),
            writable: !0
        });
        var s
    }
    : pa
      , ga = Date.now;
    var ba = function(e) {
        var a = 0
          , s = 0;
        return function() {
            var t = ga()
              , o = 16 - (t - s);
            if (s = t,
            o > 0) {
                if (++a >= 800)
                    return arguments[0]
            } else
                a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);
    function fa(e, a) {
        return ba(function(e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0),
            function() {
                for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n; )
                    r[o] = t[a + o];
                o = -1;
                for (var i = Array(a + 1); ++o < a; )
                    i[o] = t[o];
                return i[a] = s(r),
                ma(e, this, i)
            }
        }(e, a, pa), e + "")
    }
    var ka, va = (ka = function(e, a, s) {
        ca(e, a, s)
    }
    ,
    fa((function(e, s) {
        var t = -1
          , o = s.length
          , n = o > 1 ? s[o - 1] : void 0
          , r = o > 2 ? s[2] : void 0;
        for (n = ka.length > 3 && "function" == typeof n ? (o--,
        n) : void 0,
        r && function(e, s, t) {
            if (!G(t))
                return !1;
            var o = a(s);
            return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
        }(s[0], s[1], r) && (n = o < 3 ? void 0 : n,
        o = 1),
        e = Object(e); ++t < o; ) {
            var i = s[t];
            i && ka(e, i, t, n)
        }
        return e
    }
    ))), wa = "gameState", xa = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1
    };
    function za() {
        var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
        return JSON.parse(e)
    }
    function ja(e) {
        var a = za();
        !function(e) {
            window.localStorage.setItem(wa, JSON.stringify(e))
        }(va(a, e))
    }
    var Sa = document.createElement("template");
    Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Color Blind Mode</div>\n          <div class="description">High contrast colors</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="mailto:wordle@powerlanguage.co.uk?subject=Feedback" title="wordle@powerlanguage.co.uk">Email</a>\n          |\n          <a href="https://twitter.com/intent/tweet?screen_name=powerlanguish" target="blank" title="@powerlanguish">Twitter</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="privacy-policy"><a href="https://www.powerlanguage.co.uk/privacy-policy.html" target="_blank">Privacy Policy</a></div>\n      <div id="copyright">Copyright 2021-2022. All Rights Reserved.</div>\n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "gameApp", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e, a = this;
                this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash,
                this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset),
                this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                    e.stopPropagation();
                    var s = e.detail
                      , t = s.name
                      , o = s.checked
                      , n = s.disabled;
                    a.dispatchEvent(new CustomEvent("game-setting-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: t,
                            checked: o,
                            disabled: n
                        }
                    })),
                    a.render()
                }
                )),
                this.render()
            }
        }, {
            key: "render",
            value: function() {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
                e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var a = za();
                a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
                a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"),
                this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea, Aa = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "_duration", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                a.textContent = this.getAttribute("text"),
                this._duration = this.getAttribute("duration") || 1e3,
                "Infinity" !== this._duration && setTimeout((function() {
                    a.classList.add("fade")
                }
                ), this._duration),
                a.addEventListener("transitionend", (function(a) {
                    e.parentNode.removeChild(e)
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    function Ca() {
        dataLayer.push(arguments)
    }
    customElements.define("game-toast", Aa),
    window.dataLayer = window.dataLayer || [],
    Ca("js", new Date);
    Ca("config", "G-2SSGMHY3NP", {
        app_version: null === (Ea = window.wordle) || void 0 === Ea ? void 0 : Ea.hash,
        debug_mode: !1
    });
    var La = ['defray', 'cutlet', 'purged', 'lacier', 'boasts', 'anyway', 'crafts', 'hooted', 'jester', 'dearly', 'resent', 'squirm', 'usurps', 'winced', 'hearth', 'malady', 'glands', 'hippie', 'loomed', 'verves', 'fooled', 'winked', 'foully', 'pushed', 'breeze', 'lisles', 'bruise', 'clangs', 'irking', 'dakota', 'ocelot', 'damned', 'paddle', 'plaids', 'betels', 'cashes', 'borrow', 'haggis', 'paltry', 'napery', 'gilled', 'embank', 'niches', 'yuccas', 'radons', 'herald', 'ribose', 'nitric', 'pellet', 'purify', 'binges', 'alumna', 'equine', 'subbed', 'rondos', 'mortar', 'pleats', 'weaken', 'across', 'lenses', 'assume', 'writhe', 'buyers', 'hoofed', 'felled', 'vienna', 'fourth', 'marker', 'digger', 'sneers', 'hushes', 'rabies', 'enmity', 'letter', 'orates', 'careen', 'fruits', 'avoids', 'mouths', 'grouse', 'masers', 'impish', 'cliffs', 'fungal', 'vilify', 'shared', 'gasses', 'copula', 'wreath', 'anemia', 'curfew', 'cadmic', 'hinder', 'losses', 'nested', 'howler', 'gasser', 'erased', 'manger', 'phones', 'artful', 'oxbows', 'nurses', 'safety', 'oozing', 'spores', 'chains', 'raised', 'sheets', 'harems', 'tapirs', 'glibly', 'jading', 'folder', 'ardors', 'putsch', 'porous', 'palled', 'fervor', 'mincer', 'conger', 'relish', 'member', 'devout', 'lassos', 'irrupt', 'marlin', 'oddest', 'torpid', 'orbing', 'fiasco', 'frizzy', 'rectos', 'avowed', 'gangly', 'fledge', 'naiads', 'scenes', 'limpid', 'nutria', 'yapped', 'bamboo', 'disarm', 'cystic', 'embank', 'claims', 'pardon', 'miscue', 'affect', 'tiaras', 'lauded', 'francs', 'dreads', 'joggle', 'rogues', 'heeled', 'slangy', 'castes', 'wintry', 'weaned', 'cynics', 'embers', 'cilium', 'smiths', 'fijian', 'earths', 'jounce', 'taught', 'creels', 'solids', 'radian', 'tinges', 'battle', 'cliche', 'rebuke', 'dumber', 'skinks', 'unsnap', 'dandle', 'jammed', 'reaper', 'shower', 'raffia', 'frowns', 'rabbit', 'faster', 'owners', 'taxied', 'leaked', 'ukases', 'tragic', 'ambers', 'scruff', 'safely', 'tartly', 'conger', 'knifed', 'wildly', 'hoagie', 'ovular', 'corded', 'gunmen', 'bezels', 'missal', 'addles', 'rancho', 'bucket', 'panama', 'menace', 'bright', 'flicks', 'combat', 'mourns', 'whited', 'wavers',  'nuclei',  'civics', 'litany',  'family', 'mainly', 'output', 'sender', 'paunch', 'pillow', 'cadres',  'monism', 'rodent', 'priest', 'sigmas', 'tariff', 'podium', 'capita', 'gerund', 'fatale', 'pixels', 'snorts', 'smoggy', 'zygote', 'animal', 'taping', 'bowled', 'macros', 'glazed', 'slacks', 'rigged', 'isomer', 'slalom', 'unwell',  'travel', 'raring', 'richer', 'evened', 'lidded', 'dimmed', 'fibbed', 'resell', 'dishes', 'armlet', 'donors', 'shrunk',  'remedy', 'wizens', 'instep', 'peeled', 'advent', 'dinner', 'crouch', 'bruise', 'packed', 'glassy', 'vanish', 'corner', 'truant', 'amazon', 'scalar', 'copter', 'crater', 'frumpy', 'ripped', 'ragged',  'hurrah', 'office', 'joists', 'hoping', 'luster', 'flared', 'blinds', 'minors', 'impose', 'health', 'legume', 'despot', 'safety', 'recoup', 'clergy', 'weasel', 'slided', 'repeat', 'collie', 'father', 'abbots', 'spring', 'poplin', 'voyage', 'swatch', 'pariah', 'somber', 'shaken', 'brides', 'dipped', 'heroic', 'nature', 'tulips', 'vested', 'dollar', 'ignore', 'jotted', 'became', 'geiger', 'skiing', 'bateau', 'bluest', 'dangle', 'hazard', 'within', 'select', 'alkali', 'miscue', 'eggnog', 'napalm', 'banner', 'septet', 'sprint', 'magnum', 'airmen', 'exited', 'vellum', 'purple', 'bedlam', 'abated', 'creeps', 'grouse', 'yogurt', 'ballet', 'temple', 'podium', 'takers', 'indian', 'osmium', 'savory', 'tocsin', 'addict', 'spayed', 'jargon', 'savior', 'smooth', 'eyelet', 'pigeon', 'unhurt', 'viewed', 'starry', 'keycap', 'vacate', 'onsets', 'rammed', 'hoagie', 'struck', 'candle', 'docket', 'cetera', 'debate', 'supply', 'nudity', 'dictum', 'solace', 'zapped', 'unborn', 'racist', 'jackal', 'vanish', 'elicit', 'sacked', 'pureed', 'remove', 'gassed', 'zeroed', 'icicle', 'howled', 'trying', 'atomic',  'valves', 'jacket', 'upturn', 'asides', 'impels', 'trolls', 'robbed', 'felons', 'bitten', 'tartar',  'errant', 'deface', 'bemuse', 'spigot', 'tidies', 'vastly', 'cleave', 'basset', 'tilled', 'aghast', 'triton', 'affair', 'vulgar', 'fathom', 'homing', 'apogee', 'afraid', 'rhesus', 'arabia', 'velvet', 'beater', 'skater', 'deigns', 'rashes', 'dusted', 'rennet', 'booted', 'memoir', 'forget', 'answer', 'rating', 'rotate', 'taught', 'starts', 'paused', 'snorts', 'sprays', 'gainer', 'assert', 'shriek', 'sailor', 'homing', 'wooded', 'whites', 'methyl', 'thefts', 'limpid', 'raisin', 'nation', 'celtic', 'induct', 'attack', 'choose', 'frisky', 'frozen', 'basset', 'flashy', 'sailor', 'tester', 'flirts', 'arrive', 'dialog', 'bolder', 'revert', 'silver', 'nodule', 'feline', 'antics', 'noises', 'hooray',  'saving', 'rashes', 'miffed', 'smutty', 'sitcom', 'shorts', 'grouch', 'shares', 'quaint', 'bailed', 'blurts', 'derive', 'bleary', 'border', 'ignore', 'floods', 'harped', 'sponge', 'bushes', 'oldest', 'lilacs', 'sneaks', 'vastly', 'bubble', 'hauled', 'coolie', 'device', 'retire', 'chides', 'shacks', 'dammed', 'vesper', 'viewed', 'minion', 'blazer', 'healer', 'exceed', 'smoked', 'furled', 'sweaty', 'zapped', 'molest', 'bureau', 'booted', 'inured', 'sketch', 'graced', 'vortex', 'dumped', 'tenure', 'retort', 'broach', 'dismal', 'obtain', 'floral', 'noggin', 'whinny', 'creeks', 'fealty', 'effuse', 'memoir', 'timely', 'druids', 'metric', 'owning', 'paired', 'fairly', 'docile', 'rushes', 'refute', 'spawns', 'stucco']
      , Ta = ['abacus', 'abased', 'abaser', 'abases', 'abated', 'abater', 'abates', 'abbacy', 'abbess', 'abbeys', 'abbots', 'abduct', 'abhors', 'abided', 'abider', 'abides', 'abject', 'abjure', 'ablaze', 'ablest', 'abloom', 'aboard', 'abodes', 'aborts', 'abound', 'abrade', 'abroad', 'abrupt', 'absent', 'absorb', 'absurd', 'abused', 'abuser', 'abuses', 'abysms', 'acacia', 'accede', 'accent', 'accept', 'access', 'accord', 'accost', 'accrue', 'accuse', 'acetic', 'acetyl', 'aching', 'acidic', 'acidly', 'acorns', 'acquit', 'across', 'actins', 'acting', 'action', 'active', 'actors', 'actual', 'acuity', 'acumen', 'adages', 'adagio', 'adapts', 'addend', 'adders', 'addict', 'adding', 'addled', 'addles', 'adduce', 'adduct', 'adepts', 'adhere', 'adidas', 'adieus', 'adieux', 'adjoin', 'adjure', 'adjust', 'admire', 'admits', 'adobes', 'adonis', 'adopts', 'adored', 'adorer', 'adores', 'adorns', 'adrift', 'adroit', 'adsorb', 'adults', 'advent', 'adverb', 'advert', 'advice', 'advise', 'aerate', 'aeries', 'aerial', 'aerobe', 'affair', 'affect', 'affirm', 'afford', 'affray', 'afghan', 'afield', 'aflame', 'afloat', 'afraid', 'afresh', 'africa', 'agates', 'ageism', 'agency', 'agenda', 'agents', 'aghast', 'agleam', 'agnate', 'agonic', 'agorae', 'agouti', 'agrees', 'agreed', 'aiding', 'ailing', 'aiming', 'airbag', 'airbus', 'airier', 'airily', 'airing', 'airmen', 'airman', 'airway', 'aisles', 'akimbo', 'alarms', 'alaska', 'albany', 'albedo', 'albeit', 'albino', 'albums', 'alcove', 'alders', 'alecks', 'alerts', 'alexia', 'alibis', 'aliens', 'alight', 'aligns', 'alkali', 'alkyds', 'alkyls', 'allays', 'allele', 'allege', 'alleys', 'allied', 'allies', 'allots', 'allows', 'alloys', 'allude', 'allure', 'almond', 'almost', 'alnico', 'alohas', 'alpaca', 'alphas', 'alpine', 'altars', 'alters', 'althea', 'alumna', 'alumni', 'always', 'amazes', 'amazed', 'amazon', 'ambers', 'ambits', 'ambled', 'ambler', 'ambles', 'ambush', 'amebic', 'amebas', 'amends', 'amerce', 'amices', 'amides', 'amidst', 'amigos', 'amines', 'amnion', 'amoral', 'amount', 'amours', 'ampere', 'ampler', 'amtrak', 'amulet', 'amuses', 'amused', 'analog', 'anchor', 'ancien', 'anemia', 'anemic', 'angels', 'angers', 'angina', 'angled', 'angler', 'angles', 'angola', 'angora', 'angsts', 'animas', 'animal', 'animus', 'anions', 'anises', 'ankara', 'ankles', 'anklet', 'annals', 'anneal', 'annoys', 'annual', 'annuls', 'anodes', 'anodic', 'anodal', 'anoint', 'anomie', 'anoxia', 'anoxic', 'answer', 'anther', 'anthem', 'antics', 'antler', 'anuses', 'anvils', 'anyhow', 'anyone', 'anyway', 'aortic', 'aortal', 'aortas', 'aoudad', 'apathy', 'apexes', 'aphids', 'apiary', 'apices', 'apical', 'apiece', 'aplomb', 'apogee', 'apollo', 'appall', 'appeal', 'appear', 'append', 'apples', 'appose', 'aprons', 'aptest', 'arabic', 'arable', 'arabia', 'arbors', 'arcade', 'arcane', 'arched', 'arches', 'archly', 'archer', 'arcing', 'arctic', 'ardent', 'ardors', 'arenas', 'argent', 'argons', 'argosy', 'argots', 'argued', 'arguer', 'argues', 'argyle', 'aright', 'arises', 'arisen', 'armada', 'armful', 'armies', 'arming', 'armlet', 'armors', 'armory', 'armpit', 'arnica', 'aromas', 'around', 'arouse', 'arrant', 'arrays', 'arrest', 'arrive', 'arrows', 'arroyo', 'arsons', 'artery', 'artful', 'artier', 'artist', 'aryans', 'ascend', 'ascent', 'ascots', 'ashore', 'asians', 'asides', 'asking', 'aslant', 'asleep', 'aspect', 'aspens', 'aspics', 'aspire', 'assail', 'assays', 'assent', 'assert', 'assess', 'assets', 'assign', 'assist', 'assort', 'assume', 'assure', 'asters', 'astern', 'asthma', 'astral', 'astray', 'astute', 'asylum', 'ataxic', 'ataxia', 'athens', 'atolls', 'atomic', 'atoned', 'atonal', 'atones', 'atrium', 'attach', 'attack', 'attain', 'attars', 'attend', 'attest', 'attics', 'attire', 'attune', 'audios', 'audits', 'augers', 'augurs', 'augury', 'august', 'aurora', 'austin', 'author', 'autism', 'autumn', 'auxins', 'avails', 'avatar', 'avenge', 'avenue', 'averse', 'averts', 'aviary', 'avidly', 'avocet', 'avoids', 'avouch', 'avowal', 'avowed', 'awaits', 'awaked', 'awakes', 'awaken', 'awards', 'aweigh', 'awhile', 'awning', 'awoken', 'axioms', 'azalea', 'aztecs', 'azures', 'babels', 'babied', 'babies', 'baboon', 'backed', 'backer', 'backup', 'bacons', 'badger', 'badges', 'baffle', 'bagels', 'bagged', 'bahama', 'bailed', 'bailer', 'bairns', 'baited', 'baizes', 'bakers', 'bakery', 'baking', 'balder', 'baldly', 'baleen', 'balers', 'baling', 'balked', 'balkan', 'balled', 'ballad', 'ballet', 'ballot', 'balsas', 'balsam', 'baltic', 'bamboo', 'banana', 'banded', 'bandit', 'banged', 'bangle', 'banish', 'banjos', 'banked', 'banker', 'banned', 'banner', 'banter', 'bantam', 'banyan', 'baobab', 'barbed', 'barber', 'barbel', 'barely', 'barest', 'barged', 'barges', 'baring', 'barite', 'barium', 'barked', 'barker', 'barley', 'barmen', 'barman', 'barons', 'barony', 'barque', 'barred', 'barrel', 'barren', 'barrio', 'barrow', 'barter', 'baryon', 'basalt', 'basest', 'bashed', 'bashes', 'basics', 'basins', 'basing', 'basked', 'basket', 'basque', 'basses', 'basset', 'bassos', 'basted', 'bastes', 'batboy', 'bateau', 'bathed', 'bather', 'bathes', 'bathos', 'batiks', 'bating', 'batons', 'batted', 'batten', 'batter', 'battle', 'bauble', 'bawled', 'baying', 'bayous', 'bazaar', 'beacon', 'beaded', 'beadle', 'beagle', 'beaked', 'beaker', 'beamed', 'beaned', 'beanie', 'bearer', 'beards', 'beasts', 'beater', 'beaten', 'beauts', 'beauty', 'beaver', 'becalm', 'became', 'beckon', 'become', 'bedaub', 'bedbug', 'bedded', 'bedeck', 'bedews', 'bedlam', 'bedpan', 'beefed', 'beeped', 'beeper', 'beetle', 'beeves', 'befall', 'befell', 'befits', 'befogs', 'before', 'befoul', 'begets', 'begged', 'beggar', 'begins', 'begird', 'begirt', 'behalf', 'behave', 'behead', 'beheld', 'behest', 'behind', 'behold', 'beiges', 'beings', 'beirut', 'belays', 'beldam', 'belfry', 'belied', 'belies', 'belief', 'belize', 'belled', 'belles', 'bellow', 'belong', 'belows', 'belted', 'beluga', 'bemata', 'bemire', 'bemoan', 'bemuse', 'bender', 'benign', 'benumb', 'benzol', 'berate', 'berber', 'bereft', 'berets', 'berlin', 'berths', 'bertha', 'beryls', 'beseem', 'besets', 'beside', 'besots', 'bested', 'bestir', 'bestow', 'betake', 'betels', 'betide', 'betook', 'betray', 'bettor', 'better', 'bevels', 'bevies', 'bewail', 'beware', 'beyond', 'bezels', 'bhutan', 'bialys', 'biased', 'biases', 'bibles', 'biceps', 'bicker', 'bidder', 'bidden', 'bidets', 'biding', 'bigamy', 'bigger', 'bights', 'bigots', 'bigwig', 'bijoux', 'bikers', 'biking', 'bikini', 'bilged', 'bilges', 'bilked', 'billed', 'billet', 'billow', 'binary', 'binder', 'binges', 'bingos', 'biomes', 'biopsy', 'biotic', 'biotas', 'biotin', 'bipeds', 'birdie', 'births', 'bisect', 'bishop', 'bisque', 'bissau', 'bistro', 'bitchy', 'biters', 'biting', 'bitten', 'bitter', 'blabby', 'blacks', 'bladed', 'blades', 'blamed', 'blames', 'blanch', 'blanks', 'blared', 'blares', 'blasts', 'blazed', 'blazer', 'blazes', 'blazon', 'bleach', 'blears', 'bleary', 'bleats', 'bleeds', 'bleeps', 'blench', 'blends', 'blight', 'blimps', 'blinds', 'blinks', 'blintz', 'blithe', 'bloats', 'blocks', 'blokes', 'blonds', 'blonde', 'bloods', 'bloody', 'blooms', 'blotch', 'blouse', 'blower', 'blowsy', 'blowup', 'blowzy', 'bluest', 'bluets', 'bluffs', 'bluing', 'bluish', 'blunts', 'blurbs', 'blurry', 'blurts', 'boards', 'boasts', 'boated', 'boater', 'boatel', 'bobbed', 'bobble', 'bobbin', 'bobcat', 'bodies', 'bodily', 'bodice', 'boding', 'bodkin', 'bogeys', 'bogged', 'boggle', 'bogies', 'bogota', 'boiled', 'boiler', 'bolder', 'boldly', 'bolero', 'bollix', 'bolted', 'bombed', 'bomber', 'bonbon', 'bonded', 'boners', 'bonged', 'bongos', 'bonier', 'boning', 'bonito', 'bonnet', 'bonsai', 'boodle', 'boohoo', 'booing', 'booked', 'booker', 'bookie', 'boomed', 'boosts', 'booted', 'bootee', 'booths', 'boozed', 'boozes', 'bopped', 'borate', 'border', 'boreal', 'borers', 'boring', 'borneo', 'borons', 'borrow', 'borzoi', 'bosoms', 'bosons', 'bossed', 'bosses', 'boston', 'botany', 'botfly', 'bother', 'bottle', 'bottom', 'boughs', 'bought', 'bounce', 'bouncy', 'bounds', 'bounty', 'bourns', 'bourse', 'bovine', 'bowels', 'bowers', 'bowfin', 'bowies', 'bowing', 'bowled', 'bowler', 'bowleg', 'boxcar', 'boxers', 'boxier', 'boxing', 'boyish', 'braced', 'bracer', 'braces', 'bracts', 'brahma', 'braids', 'brains', 'brainy', 'braise', 'braked', 'brakes', 'branch', 'brands', 'brandy', 'brassy', 'bratty', 'braved', 'braves', 'braver', 'bravos', 'brawls', 'brawns', 'brawny', 'brayed', 'brayer', 'brazed', 'brazes', 'brazen', 'brazil', 'breach', 'breads', 'breaks', 'breast', 'breath', 'breech', 'breeds', 'breeze', 'breezy', 'breton', 'brevet', 'brewed', 'brewer', 'briars', 'bribed', 'bribes', 'bricks', 'brides', 'bridal', 'bridle', 'bridge', 'briefs', 'briers', 'bright', 'brines', 'brings', 'brinks', 'briton', 'broach', 'brogan', 'brogue', 'broils', 'broker', 'broken', 'bronco', 'bronze', 'brooch', 'broods', 'broody', 'brooks', 'brooms', 'broths', 'browns', 'browse', 'bruins', 'bruise', 'bruits', 'brumes', 'brunch', 'brunei', 'brunet', 'brunts', 'brutes', 'brutal', 'bubble', 'buboes', 'bucked', 'buckle', 'bucket', 'budded', 'budder', 'buddha', 'budged', 'budges', 'budget', 'budgie', 'buenos', 'buffed', 'buffer', 'buffet', 'bugged', 'bugled', 'bugler', 'bugles', 'builds', 'bulbar', 'bulbul', 'bulged', 'bulges', 'bulked', 'bulled', 'bullet', 'bumble', 'bummed', 'bumped', 'bumper', 'buncos', 'bundle', 'bunged', 'bungle', 'bunion', 'bunked', 'bunker', 'bunkum', 'bunsen', 'bunted', 'buoyed', 'burble', 'burden', 'bureau', 'burger', 'burgle', 'burghs', 'buried', 'buries', 'burial', 'burins', 'burled', 'burlap', 'burned', 'burner', 'burped', 'burred', 'burros', 'burrow', 'bursae', 'bursar', 'bursts', 'busboy', 'bushed', 'bushes', 'bushel', 'busied', 'busier', 'busies', 'busily', 'busing', 'buskin', 'bussed', 'busses', 'busted', 'buster', 'bustle', 'butane', 'butler', 'butted', 'buttes', 'butter', 'button', 'butyls', 'buyers', 'buying', 'buzzed', 'buzzer', 'buzzes', 'bygone', 'bylaws', 'bypass', 'byroad', 'byssus',
'byways', 'byword', 'cabals', 'cabana', 'cabbed', 'cabins', 'cabled', 'cables', 'cacaos', 'cached', 'caches', 'cachet', 'cackly', 'cackle', 'cactus', 'caddie', 'caddis', 'cadets', 'cadged', 'cadges', 'cadmic', 'cadres', 'caesar', 'caftan', 'cagier', 'cagily', 'caging', 'caiman', 'cairns', 'cajole', 'caking', 'calico', 'caliph', 'called', 'caller', 'callow', 'callus', 'calmed', 'calmer', 'calmly', 'calved', 'calves', 'camber', 'camels', 'cameos', 'camera', 'camped', 'camper', 'campus', 'canada', 'canals', 'canape', 'canary', 'canard', 'cancan', 'cancel', 'cancer', 'candor', 'candle', 'candid', 'canine', 'caning', 'canker', 'canned', 'cannel', 'cannon', 'cannot', 'canoes', 'canoed', 'canons', 'canopy', 'canted', 'canter', 'cantor', 'cantle', 'canthi', 'cantos', 'canton', 'canvas', 'canyon', 'capers', 'caping', 'capita', 'capons', 'capped', 'captor', 'carafe', 'carats', 'carbon', 'carboy', 'carded', 'career', 'careen', 'caress', 'carets', 'carhop', 'caries', 'caring', 'carnal', 'carobs', 'carols', 'caroms', 'carped', 'carpal', 'carpel', 'carpet', 'carpus', 'carrel', 'carrot', 'carted', 'cartel', 'carton', 'carved', 'carver', 'carves', 'casaba', 'casein', 'cashed', 'cashes', 'cashew', 'casing', 'casino', 'casket', 'cassia', 'caster', 'castes', 'castor', 'castle', 'casual', 'catchy', 'caters', 'catgut', 'cation', 'catkin', 'catnap', 'catnip', 'cattle', 'caucus', 'caudal', 'caught', 'caulks', 'caused', 'causes', 'causal', 'caveat', 'cavern', 'caviar', 'cavils', 'caving', 'cavity', 'cavort', 'cawing', 'cayuse', 'ceased', 'ceases', 'cedars', 'ceding', 'celery', 'celiac', 'celled', 'cellar', 'cellos', 'celtic', 'cement', 'censer', 'censor', 'census', 'center', 'cereal', 'cerise', 'cerium', 'cermet', 'cervix', 'cesium', 'cetera', 'ceylon', 'chafed', 'chafes', 'chaffs', 'chains', 'chairs', 'chaise', 'chalet', 'chalks', 'chalky', 'champs', 'chance', 'chancy', 'change', 'chants', 'chapel', 'chards', 'charge', 'charms', 'charts', 'chased', 'chaser', 'chases', 'chasms', 'chasse', 'chaste', 'chatty', 'cheats', 'checks', 'cheeks', 'cheeky', 'cheeps', 'cheers', 'cheery', 'cheese', 'cheesy', 'chemin', 'cherry', 'cherub', 'chests', 'chewed', 'chicle', 'chicks', 'chided', 'chides', 'chiefs', 'chills', 'chilly', 'chimed', 'chimes', 'chimps', 'chinas', 'chinch', 'chines', 'chinks', 'chinos', 'chintz', 'chirps', 'chisel', 'chitin', 'chiton', 'chives', 'chocks', 'choice', 'choirs', 'choked', 'choker', 'chokes', 'choler', 'choose', 'choosy', 'choppy', 'choric', 'choral', 'chords', 'chores', 'chorea', 'chorus', 'chosen', 'chrism', 'christ', 'chrome', 'chubby', 'chucks', 'chukka', 'chummy', 'chumps', 'chunks', 'chunky', 'church', 'churls', 'churns', 'chutes', 'cicada', 'ciders', 'cigars', 'cilium', 'cinder', 'cinema', 'cipher', 'circle', 'circus', 'cirque', 'cirrus', 'cities', 'citify', 'citing', 'citric', 'citron', 'citrus', 'civets', 'civics', 'clacks', 'claims', 'clammy', 'clamor', 'clamps', 'clangs', 'clanks', 'claque', 'claret', 'clasps', 'classy', 'clause', 'clawed', 'clayey', 'cleans', 'clears', 'cleats', 'cleave', 'clefts', 'clench', 'clergy', 'cleric', 'clerks', 'clever', 'cliche', 'clicks', 'client', 'cliffs', 'climes', 'climax', 'climbs', 'clines', 'clinch', 'clings', 'clinic', 'clinks', 'clique', 'cloaca', 'clorks', 'cloche', 'clocks', 'cloned', 'clones', 'closed', 'closer', 'closes', 'closet', 'cloths', 'clothe', 'clouds', 'cloudy', 'clouts', 'clover', 'cloves', 'cloven', 'clowns', 'cloyed', 'clubby', 'clucks', 'clumps', 'clumsy', 'clutch', 'coarse', 'coasts', 'coated', 'coatis', 'coaxed', 'coaxes', 'cobalt', 'cobble', 'cobras', 'cobweb', 'coccus', 'coccyx', 'cocked', 'cocker', 'cockle', 'cocoas', 'cocoon', 'coddle', 'codger', 'codify', 'coding', 'coerce', 'coeval', 'coffer', 'coffee', 'coffin', 'cogent', 'cognac', 'cohere', 'cohort', 'coifed', 'coiled', 'coined', 'coitus', 'colder', 'coldly', 'coleus', 'colics', 'collar', 'collie', 'colons', 'colony', 'colors', 'column', 'combed', 'combat', 'combos', 'comely', 'comedy', 'comedo', 'comers', 'comets', 'comfit', 'comics', 'coming', 'comity', 'commas', 'commit', 'commix', 'common', 'compel', 'comply', 'comsat', 'conchs', 'concur', 'condor', 'condom', 'confab', 'confer', 'congas', 'conger', 'conies', 'conked', 'conned', 'consul', 'contra', 'convex', 'convey', 'convoy', 'cooing', 'cooked', 'cooker', 'cookie', 'cooled', 'cooler', 'coolly', 'coolie', 'cooped', 'cooper', 'cootie', 'copals', 'copied', 'copier', 'copies', 'coping', 'copped', 'copper', 'copras', 'copses', 'copter', 'copula', 'corals', 'corbel', 'corded', 'cordon', 'corers', 'coring', 'corium', 'corked', 'corker', 'corned', 'corner', 'cornea', 'cornet', 'corona', 'corpse', 'corpus', 'corral', 'corset', 'cortex', 'coryza', 'cosign', 'cosine', 'cosmic', 'cosmos', 'cosset', 'costly', 'costal', 'costae', 'costar', 'cotter', 'cotton', 'cougar', 'coughs', 'coulee', 'counts', 'county', 'coupes', 'couple', 'coupon', 'course', 'courts', 'cousin', 'covens', 'covers', 'covert', 'covets', 'coveys', 'coward', 'cowboy', 'cowers', 'cowing', 'cowled', 'cowpox', 'coyest', 'coyote', 'cozens', 'cozier', 'cozily', 'crabby', 'cracks', 'cradle', 'crafts', 'crafty', 'craggy', 'cramps', 'craned', 'cranes', 'cranks', 'cranky', 'cranny', 'crated', 'crater', 'crates', 'craved', 'craves', 'cravat', 'craven', 'crawly', 'crawls', 'crayon', 'crazed', 'crazes', 'creaks', 'creaky', 'creams', 'creamy', 'crease', 'create', 'creche', 'credit', 'credos', 'creeds', 'creeks', 'creels', 'creeps', 'creepy', 'cremes', 'creole', 'crepes', 'cresol', 'crests', 'cretan', 'cretin', 'crewed', 'crewel', 'cricks', 'criers', 'crimes', 'crimea', 'crimps', 'cringe', 'crises', 'crisis', 'crisps', 'crispy', 'critic', 'croaks', 'croats', 'crocks', 'crocus', 'crofts', 'crones', 'crooks', 'croons', 'crouch', 'croups', 'crowed', 'crowds', 'crowns', 'cruder', 'crudes', 'cruddy', 'cruets', 'cruise', 'crumbs', 'crummy', 'crunch', 'cruses', 'crusts', 'crusty', 'crutch', 'cruxes', 'crying', 'crypts', 'cubans', 'cubing', 'cubism', 'cubist', 'cubits', 'cuckoo', 'cuddly', 'cuddle', 'cudgel', 'cuffed', 'culled', 'cultic', 'cumber', 'cumins', 'cumuli', 'cupels', 'cupful', 'cupids', 'cupola', 'cupped', 'cupric', 'curare', 'curate', 'curbed', 'curdle', 'curfew', 'curies', 'curiae', 'curing', 'curios', 'curium', 'curled', 'curler', 'curlew', 'cursed', 'curser', 'curses', 'cursor', 'curter', 'curtly', 'curtsy', 'curves', 'curved', 'curvet', 'cuspid', 'cussed', 'cusses', 'custom', 'cutest', 'cutlet', 'cutoff', 'cutout', 'cutter', 'cutups', 'cyanic', 'cycled', 'cycles', 'cyclic', 'cygnet', 'cymbal', 'cynics', 'cyprus', 'cystic', 'czechs', 'dabbed', 'dabble', 'dacron', 'dactyl', 'dafter', 'dagger', 'dahlia', 'dainty', 'daises', 'dakota', 'dallas', 'damage', 'damask', 'dammed', 'damned', 'damped', 'damper', 'dampen', 'damsel', 'damson', 'danced', 'dancer', 'dances', 'dander', 'dandle', 'dangle', 'danger', 'danish', 'danker', 'dapper', 'dapple', 'daring', 'darker', 'darkly', 'darken', 'darned', 'darnel', 'darted', 'darter', 'dartle', 'dashed', 'dasher', 'dashes', 'dating', 'dative', 'daubed', 'dauber', 'daunts', 'davits', 'dawdle', 'dawned', 'dayton', 'dazing', 'dazzle', 'deacon', 'deader', 'deadly', 'deaden', 'deafer', 'deafen', 'dealer', 'dearer', 'dearly', 'dearth', 'deaths', 'debars', 'debark', 'debase', 'debate', 'debits', 'debris', 'debtor', 'debugs', 'debunk', 'debuts', 'decade', 'decals', 'decamp', 'decant', 'decays', 'deceit', 'decent', 'decide', 'decked', 'deckle', 'decoct', 'decode', 'decors', 'decoys', 'decree', 'deduce', 'deduct', 'deeded', 'deemed', 'deeper', 'deeply', 'deepen', 'deface', 'defame', 'defeat', 'defect', 'defend', 'defers', 'defied', 'defies', 'defile', 'define', 'deform', 'defray', 'defter', 'deftly', 'defuse', 'degree', 'deiced', 'deicer', 'deices', 'deigns', 'deisms', 'deists', 'deject', 'delays', 'delete', 'delfts', 'deltas', 'delude', 'deluge', 'deluxe', 'delved', 'delves', 'demand', 'demean', 'demise', 'demons', 'demote', 'demurs', 'demure', 'dengue', 'denied', 'denier', 'denies', 'denial', 'denims', 'denote', 'denser', 'dented', 'dental', 'denude', 'denver', 'depart', 'depend', 'depict', 'deploy', 'deport', 'depose', 'depots', 'depths', 'depute', 'deputy', 'derail', 'deride', 'derive', 'dermal', 'dermas', 'desalt', 'descry', 'desert', 'design', 'desire', 'desist', 'despot', 'detach', 'detail', 'detain', 'detect', 'deters', 'detest', 'detour', 'deuced', 'deuces', 'device', 'devils', 'devise', 'devoid', 'devote', 'devour', 'devout', 'dewier', 'dewing', 'dewlap', 'diadem', 'dialed', 'dialer', 'dialog', 'diaper', 'diatom', 'dibble', 'dicers', 'dicing', 'dicker', 'dickey', 'dictum', 'diddle', 'dieing', 'diesel', 'dieted', 'differ', 'digest', 'digger', 'digits', 'diking', 'dilate', 'dilute', 'dimity', 'dimmed', 'dimmer', 'dimple', 'dimwit', 'diners', 'dinged', 'dinghy', 'dining', 'dinned', 'dinner', 'dinted', 'diodes', 'dipole', 'dipped', 'dipper', 'direct', 'direst', 'dirges', 'dirndl', 'disarm', 'disbar', 'disbud', 'discos', 'discus', 'dished', 'dishes', 'dismal', 'dismay', 'disown', 'dispel', 'distal', 'disuse', 'dither', 'dittos', 'divans', 'divers', 'divert', 'divest', 'divide', 'divine', 'diving', 'divots', 'dobbin', 'docent', 'docile', 'docked', 'docket', 'doctor', 'dodder', 'dodged', 'dodger', 'dodges', 'dodoes', 'doffed', 'dogged', 'dogies', 'dogmas', 'doings', 'doling', 'dolled', 'dollar', 'dollop', 'dolman', 'dolmen', 'dolors', 'domain', 'doming', 'domino', 'donate', 'donjon', 'donkey', 'donned', 'donors', 'donuts', 'doodle', 'doodad', 'doomed', 'dopier', 'dopily', 'doping', 'dories', 'dormer', 'dorsal', 'dosage', 'dosing', 'dotage', 'dotard', 'doting', 'dotted', 'dottle', 'doubly', 'double', 'doubts', 'douche', 'doughs', 'doughy', 'dourer', 'dourly', 'doused', 'douses', 'dowels', 'dowers', 'downed', 'downer', 'dowsed', 'dowser', 'dowses', 'dozens', 'dozing', 'drafts', 'drafty', 'dragon', 'drains', 'drakes', 'dramas', 'draped', 'drapes', 'drawer', 'drawls', 'dreads', 'dreams', 'dreamy', 'dreamt', 'dreary', 'dredge', 'drench', 'dressy', 'driest', 'drifts', 'drills', 'drinks', 'drippy', 'driver', 'drives', 'driven', 'drivel', 'drogue', 'droned', 'drones', 'drools', 'droops', 'droopy', 'dropsy', 'drover', 'droves', 'drowns', 'drowse', 'drowsy', 'drudge', 'druids', 'drunks', 'drupes', 'dryads', 'dryers', 'drying', 'dubbed', 'dublin', 'ducats', 'ducked', 'dueled', 'dueler', 'duffer', 'duffel', 'dugong', 'dugout', 'dulcet', 'dulled', 'duller', 'dumber', 'dumdum', 'dumped', 'dunces', 'dunked', 'dunned', 'dupery', 'duping', 'duplex', 'duress', 'during', 'durums', 'dusted', 'duster', 'dustup', 'duties', 'dwarfs', 'dwells', 'dyadic', 'dyeing', 'dynamo', 'dynast', 'eagles', 'eaglet', 'earful', 'earlap', 'earned', 'earner', 'earths', 'earthy', 'earwax', 'earwig', 'easels', 'easier', 'easily', 'easing', 'easter', 'eaters', 'eatery', 'eating', 'ebbing', 'echoed', 'echoes', 'echoic', 'eclair', 'eclats', 'eczema', 'eddied', 'eddies', 'edemas', 'edgier', 'edging', 'edible', 'edicts', 'edited', 'editor', 'educed', 'educes', 'eerier', 'eerily', 'efface', 'effect', 'effete', 'effigy', 'efflux', 'effort', 'effuse', 'egging', 'eggnog', 'egoism', 'egoist', 'egress', 'egrets', 'eiders', 'eights', 'eighty', 'eighth', 'either', 'ejects', 'elands', 'elapse', 'elates', 'elated', 'elbows', 'elders', 'eldest', 'elects', 'eleven', 'elfish', 'elicit', 'elided', 'elides', 'elites', 'elixir', 'eloped', 'elopes', 'eluded', 'eluder', 'eludes', 'embalm', 'embank', 'embark', 'embeds', 'embers', 'emblem', 'embody', 'emboli', 'emboss', 'embryo', 'emcees', 'emceed', 'emends', 'emerge', 'emetic', 'emigre', 'emoted', 'emotes', 'empire', 'employ', 'emptor', 'enable', 'enacts', 'enamel', 'enamor', 'encamp', 'encase', 'encode', 'encore', 'endear', 'ending', 'endive', 'endows', 'endued', 'endues', 'endure', 'enemas', 'energy', 'enfold', 'engage', 'engine', 'engird', 'engirt', 'engulf', 'enigma', 'enjoin', 'enjoys', 'enlace', 'enlist', 'enmesh', 'enmity', 'ennuis', 'enough', 'enrage', 'enrich', 'enroll', 'ensile', 'ensign', 'ensued', 'ensues', 'ensure', 'entail', 'enters', 'entice', 'entire', 'entity', 'entomb', 'entrap', 'entree', 'envied', 'envies', 'envois', 'envoys', 'enwrap', 'enzyme', 'eocene', 'eolith', 'eosins', 'epochs', 'epodes', 'eponym', 'equals', 'equate', 'equine', 'equips', 'equity', 'erased', 'eraser', 'erases', 'erbium', 'erects', 'ergots', 'ermine', 'eroded', 'erodes', 'erotic', 'errand', 'errant', 'errata', 'erring', 'errors', 'ersatz', 'eructs', 'erupts', 'escape', 'eschew', 'escort', 'escrow', 'eskers', 'eskimo', 'espied', 'espies', 'esprit', 'essays', 'estate', 'esteem', 'esters', 'estrus', 'etched', 'etches', 'ethane', 'ethers', 'ethics', 'ethnic', 'ethyls', 'etudes', 'euchre', 'eulogy', 'eunuch', 'eureka', 'europe', 'evaded', 'evades', 'evened', 'evenly', 'events', 'evicts', 'evince', 'evoked', 'evokes', 'evolve', 'exacts', 'exalts', 'exceed', 'excels', 'except', 'excess', 'excise', 'excite', 'excuse', 'exempt', 'exerts', 'exeunt', 'exhale', 'exhort', 'exhume', 'exiled', 'exiles', 'exists', 'exited', 'exodus', 'exotic', 'expand', 'expect', 'expels', 'expend', 'expert', 'expire', 'export', 'expose', 'extant', 'extend', 'extent', 'extols', 'extort', 'extras', 'exuded', 'exudes', 'exults', 'eyecup', 'eyeful', 'eyeing', 'eyelet', 'eyelid', 'fables', 'fabric', 'facade', 'facets', 'facial', 'facile', 'facing', 'factor', 'fading', 'faerie', 'fagged', 'fagots', 'failed', 'faille', 'faints', 'fairer', 'fairly', 'faiths', 'fakers', 'fakery', 'faking', 'fakirs', 'falcon', 'fallen', 'fallow', 'falser', 'falter', 'family', 'famine', 'famous', 'fanged', 'fanned', 'farads', 'farces', 'farina', 'faring', 'farmed', 'farmer', 'farrow', 'fasces', 'fascia', 'fasted', 'faster', 'fasten', 'fatale', 'father', 'fathom', 'fating', 'fatted', 'fatter', 'fatten', 'faucet', 'faults', 'faulty', 'faunas', 'favors', 'fawned', 'fazing', 'fealty', 'feared', 'feasts', 'fecund', 'fedora', 'feebly', 'feeble', 'feeder', 'feeing', 'feeler', 'feigns', 'feints', 'feisty', 'feline', 'felled', 'feller', 'fellow', 'felons', 'felony', 'felted', 'female', 'femmes', 'femurs', 'fenced', 'fencer', 'fences', 'fended', 'fender', 'fennel', 'ferric', 'ferret', 'ferris', 'ferule', 'fervor', 'fervid', 'fester', 'festal', 'feting', 'fetish', 'fetter', 'fettle', 'feuded', 'feudal', 'fevers', 'fewest', 'fezzes', 'fiance', 'fiasco', 'fibbed', 'fibber', 'fibers', 'fibril', 'fibrin', 'fibula', 'fickle', 'fiddle', 'fidget', 'fields', 'fiends', 'fierce', 'fiesta', 'fifing', 'fifths', 'figged', 'fights', 'figure', 'fijian', 'filets', 'filial', 'filing', 'filled', 'filler', 'fillet', 'fillip', 'filmed', 'filter', 'filthy', 'finals', 'finale', 'finder', 'finely', 'finers', 'finery', 'finest', 'finger', 'finial', 'fining', 'finish', 'finite', 'finked', 'finned', 'finnan', 'firing', 'firkin', 'firmed', 'firmer', 'firmly', 'firsts', 'firths', 'fiscal', 'fished', 'fishes', 'fisher', 'fisted', 'fitful', 'fitted', 'fitter', 'fixate', 'fixing', 'fizzed', 'fizzes', 'fizzle', 'fjords', 'flabby', 'flacks', 'flacon', 'flagon', 'flails', 'flairs', 'flaked', 'flakes', 'flamed', 'flames', 'flambe', 'flange', 'flanks', 'flared', 'flares', 'flashy', 'flasks', 'flatly', 'flaunt', 'flavor', 'flawed', 'flaxen', 'flayed', 'flecks', 'fledge', 'fleece', 'fleecy', 'fleets', 'fleshy', 'flexed', 'flexes', 'flexor', 'flicks', 'fliers', 'flight', 'flimsy', 'flinch', 'flings', 'flints', 'flinty', 'flirts', 'flirty', 'floats', 'flocks', 'floods', 'floors', 'floozy', 'floppy', 'floral', 'floras', 'floret', 'florid', 'florin', 'flossy', 'flours', 'floury', 'flouts', 'flowed', 'flower', 'fluent', 'fluffs', 'fluffy', 'fluids', 'fluked', 'flukes', 'flumed', 'flumes', 'flunks', 'flunky', 'flurry', 'fluted', 'flutes', 'fluxed', 'fluxes', 'flybys', 'flying', 'foaled', 'foamed', 'fobbed', 'fodder', 'fogged', 'fogies', 'foible', 'foiled', 'foists', 'folded', 'folder', 'folios', 'folium', 'folksy', 'follow', 'foment', 'fonder', 'fondly', 'fondle', 'fondue', 'fooled', 'footed', 'forage', 'forays', 'forbid', 'forced', 'forces', 'forded', 'forego', 'forest', 'forged', 'forges', 'forger', 'forget', 'forgot', 'forked', 'formed', 'formal', 'format', 'former', 'formic', 'fortes', 'forums', 'fossil', 'foster', 'fought', 'fouled', 'fouler', 'foully', 'founds', 'founts', 'fourth', 'foveae', 'fowled', 'foxier', 'foxily', 'foxing', 'foyers', 'framed', 'framer', 'frames', 'francs', 'france', 'franca', 'franks', 'frappe', 'frauds', 'frayed', 'freaks', 'freaky', 'freely', 'freest', 'freeze', 'french', 'frenzy', 'fresco', 'friars', 'friday', 'friend', 'frieze', 'fright', 'frigid', 'frijol', 'frills', 'frilly', 'fringe', 'frisks', 'frisky', 'frizzy', 'frocks', 'froggy', 'frolic', 'fronds', 'fronts', 'frosts', 'frosty', 'froths', 'frothy', 'frowns', 'frowzy', 'frozen', 'frugal', 'fruits', 'fruity', 'frumps', 'frumpy', 'fryers', 'frying', 'fuddle', 'fudged', 'fudges', 'fueled', 'fugues', 'fuhrer', 'fulled', 'fuller', 'fumble', 'fuming', 'funded', 'fungal', 'fungus', 'funned', 'funnel', 'furies', 'furled', 'furors', 'furred', 'furrow', 'furzes', 'fusees', 'fusing', 'fusion', 'fussed', 'fusses', 'futile', 'future', 'fuzzed', 'fuzzes', 'gabbed', 'gabber', 'gabble', 'gabled', 'gables', 'gadded', 'gadfly', 'gadget', 'gaelic', 'gaffed', 'gaffes', 'gagged', 'gaggle', 'gagmen', 'gagman', 'gaiety', 'gained', 'gainer', 'gaited', 'gaiter', 'galaxy', 'galena', 'galled', 'gallic', 'galley', 'gallon', 'gallop', 'galore', 'galosh', 'gamble', 'gambia', 'gambit', 'gambol', 'gamely', 'gamest', 'gamete', 'gamier', 'gamins', 'gaming', 'gammas', 'gammon', 'gamuts', 'gander', 'ganged', 'gangly', 'gangue', 'gannet', 'gantry', 'gaping', 'gapped', 'garage', 'garbed', 'garble', 'garden', 'gargle', 'garish', 'garlic', 'garner', 'garnet', 'garret', 'garter', 'gashed', 'gashes', 'gasket', 'gasped', 'gassed', 'gasser', 'gasses', 'gather', 'gauche', 'gauged', 'gauges', 'gauzes', 'gavels', 'gavial', 'gawked', 'gayest', 'gayety', 'gazebo', 'gazing', 'geared', 'geckos', 'geezer', 'geiger', 'geisha', 'gelded', 'gemini', 'gemmed', 'gender', 'genera', 'genets', 'geneva', 'genies', 'genial', 'genius', 'genres', 'gently', 'gentle', 'gentry', 'geodes', 'gerbil', 'german', 'gerund', 'getter', 'getups', 'gewgaw', 'geyser', 'ghetto', 'ghosts', 'ghouls', 'giants', 'gibber', 'gibbet', 'gibbon', 'gibing', 'giblet', 'gifted', 'gigged', 'giggly', 'giggle', 'gigolo', 'gigots', 'gigues', 'gilded', 'gilled', 'gimlet', 'gimped', 'ginger', 'ginkgo', 'ginned', 'girded', 'girder', 'girdle', 'girted', 'girths', 'gismos', 'givens', 'givers', 'giving', 'glaces', 'glades', 'gladly', 'glance', 'glands', 'glared', 'glares', 'glassy', 'glazed', 'glazes', 'gleams', 'gleans', 'glibly', 'glided', 'glider', 'glides', 'glints', 'glitch', 'gloats', 'globed', 'globes', 'global', 'glooms', 'gloomy', 'glossy', 'gloved', 'gloves', 'glowed', 'glower', 'glozed', 'glozes', 'gluing', 'glumly', 'glutei', 'gluten', 'glycol', 'glyphs', 'gnarls', 'gnawed', 'gneiss', 'gnomes', 'gnomic', 'gnomon', 'goaded', 'goalie', 'goatee', 'gobble', 'goblet', 'goblin', 'godson', 'gofers', 'goggle', 'goings', 'goiter', 'golder', 'golden', 'golfed', 'golfer', 'gonads', 'goners', 'gonged', 'goober', 'goodly', 'goofed', 'googol', 'gooier', 'gooney', 'goosed', 'gooses', 'gopher', 'gorged', 'gorges', 'gorier', 'goring', 'gorses', 'gospel', 'gossip', 'gothic', 'gotten', 'gouged', 'gouges', 'gourds', 'govern', 'gowned', 'grabby', 'graced', 'graces', 'graded', 'grader', 'grades', 'grafts', 'graham', 'grails', 'grains', 'grainy', 'grands', 'grange', 'granny', 'grants', 'grapes', 'graphs', 'grasps', 'grassy', 'grated', 'grater', 'grates', 'gratis', 'graved', 'graver', 'graven', 'graves', 'gravel', 'gravid', 'grayed', 'grayer', 'grazed', 'grazes', 'grease', 'greasy', 'greats', 'grebes', 'greece', 'greeds', 'greedy', 'greeks', 'greens', 'greets', 'griefs', 'grieve', 'grills', 'grille', 'grimed', 'grimes', 'grimly', 'grinds', 'gringo', 'griped', 'gripes', 'grippe', 'grisly', 'grists', 'gritty', 'groans', 'groats', 'grocer', 'groggy', 'groins', 'grooms', 'groove', 'groovy', 'groped', 'gropes', 'grotto', 'grouch', 'ground', 'groups', 'grouse', 'grouts', 'groves', 'grovel', 'grower', 'growls', 'growth', 'grubby', 'grudge', 'gruels', 'grumps', 'grumpy', 'grunts', 'guanos', 'guards', 'guavas', 'guests', 'guffaw', 'guiana', 'guided', 'guides', 'guidon', 'guiles', 'guilds', 'guilts', 'guilty', 'guinea', 'guises', 'guitar', 'gulfed', 'gulled', 'gullet', 'gulped', 'gumbos', 'gummed', 'gunmen', 'gunman', 'gunned', 'gunner', 'gurgle', 'gushed', 'gusher', 'gushes', 'gusset', 'gusted', 'gustos', 'gutted', 'gutter', 'guyana', 'guying', 'guzzle', 'gypped', 'gypsum', 'gyrate', 'habits', 'hacked', 'hacker', 'hackle', 'hackie', 'haddie', 'hafted', 'haggle', 'haggis', 'hailed', 'hailer', 'hairdo', 'halest', 'halide', 'haling', 'halite', 'halloo', 'hallow', 'halted', 'halter', 'halved', 'halves', 'hamlet', 'hammed', 'hammer', 'hamper', 'handed', 'handle', 'hanged', 'hanger', 'hangar', 'hanker', 'hansom', 'happen', 'harass', 'harbor', 'harder', 'hardly', 'harden', 'harems', 'harked', 'harlot', 'harmed', 'harped', 'harrow', 'hashed', 'hashes', 'hasped', 'hassle', 'hasted', 'hastes', 'hasten', 'hatbox', 'hating', 'hatred', 'hauled', 'haunch', 'haunts', 'havana', 'havens', 'having', 'havocs', 'hawaii', 'hawing', 'hawked', 'hawker', 'hawser', 'hawses', 'haying', 'haymow', 'hazard', 'hazels', 'hazier', 'hazily', 'hazing', 'headed', 'header', 'healed', 'healer', 'health', 'heaped', 'hearer', 'hearse', 'hearts', 'hearty', 'hearth', 'heater', 'heated', 'heaths', 'heaved', 'heaves', 'heaven', 'hebrew', 'heckle', 'hectic', 'hector', 'hedged', 'hedges', 'heeded', 'heehaw', 'heeled', 'heifer', 'height', 'heists', 'helena', 'helium', 'helmet', 'helots', 'helped', 'helper', 'hemmed', 'hennas', 'herald', 'herbed', 'herbal', 'herded', 'hereby', 'herein', 'hereof', 'hereon', 'heresy', 'hereto', 'hermit', 'hernia', 'heroes', 'heroic', 'heroin', 'herons', 'herpes', 'hewing', 'hexane', 'hexing', 'heyday', 'hiatus', 'hiccup', 'hidden', 'hiding', 'hieing', 'higher', 'highly', 'hijack', 'hikers', 'hiking', 'hinder', 'hindus', 'hinged', 'hinges', 'hinted', 'hipper', 'hippie', 'hippos', 'hirers', 'hiring', 'hissed', 'hisses', 'hither', 'hitter', 'hiving', 'hoagie', 'hoards', 'hoarse', 'hoaxed', 'hoaxes', 'hobble', 'hobbit', 'hobnob', 'hoboes', 'hocked', 'hockey', 'hoeing', 'hogged', 'hoists', 'hokums', 'holder', 'holdup', 'holier', 'holing', 'holism', 'holler', 'hollow', 'homage', 'hombre', 'homely', 'homers', 'homier', 'homily', 'hominy', 'homing', 'honcho', 'honest', 'honeys', 'honing', 'honked', 'honker', 'honors', 'hooded', 'hooeys', 'hoofed', 'hoofer', 'hooked', 'hooker', 'hookah', 'hookup', 'hooped', 'hoopla', 'hoopoe', 'hooray', 'hooted', 'hooves', 'hoping', 'hopped', 'hopper', 'hordes', 'horned', 'hornet', 'horror', 'horrid', 'horsed', 'horses', 'hosing', 'hosted', 'hostel', 'hotbed', 'hotels', 'hotter', 'hounds', 'hourly', 'housed', 'houses', 'hovels', 'hovers', 'howdah', 'howled', 'howler', 'hoyden', 'hubbub', 'hubcap', 'hubris', 'huddle', 'hueing', 'huffed', 'hugest', 'hugged', 'hugger', 'hulked', 'hulled', 'humans', 'humane', 'humbly', 'humble', 'humbug', 'hummed', 'humors', 'humped', 'humphs', 'humger', 'hungry', 'hunker', 'hunted', 'hunter', 'hurdle', 'hurled', 'hurler', 'hurrah', 'hurtle', 'hushed', 'hushes', 'husked', 'husker', 'hussar', 'hustle', 'hybrid', 'hyenas', 'hymens', 'hymned', 'hymnal', 'hyphen', 'hyping', 'hyssop', 'iambic', 'ibexes', 'ibises', 'icebox', 'icicle', 'iciest', 'icings', 'ideals', 'ideate', 'idiocy', 'idioms', 'idiots', 'idlers', 'idling', 'idylls', 'igloos', 'ignite', 'ignore', 'iguana', 'imaged', 'images', 'imbibe', 'imbrue', 'imbued', 'imbues', 'immune', 'immure', 'impact', 'impair', 'impale', 'impala', 'impart', 'impede', 'impels', 'impend', 'impish', 'import', 'impose', 'impost', 'impugn', 'impure', 'impute', 'inarch', 'inborn', 'inbred', 'incest', 'inched', 'inches', 'incise', 'incite', 'income', 'incurs', 'indeed', 'indent', 'indies', 'indian', 'indict', 'indigo', 'indite', 'indium', 'indoor', 'induce', 'induct', 'infamy', 'infant', 'infect', 'infers', 'infest', 'infirm', 'inflow', 'influx', 'inform', 'infuse', 'ingest', 'ingots', 'inhale', 'inhere', 'inhume', 'inject', 'injure', 'injury', 'inkier', 'inking', 'inlaid', 'inland', 'inlays', 'inlets', 'inmate', 'inmost', 'innate', 'inning', 'inputs', 'inroad', 'inrush', 'insane', 'insect', 'insert', 'insets', 'inside', 'insist', 'insole', 'instep', 'insult', 'insure', 'intact', 'intake', 'intend', 'intent', 'inters', 'intern', 'intone', 'intuit', 'inulin', 'inured', 'inures', 'invade', 'invent', 'invert', 'invest', 'invite', 'invoke', 'inward', 'iodide', 'iodine', 'iodize', 'ionize', 'ipecac', 'iraqis', 'ireful', 'irises', 'irking', 'ironed', 'ironic', 'irrupt', 'ischia', 'island', 'islets', 'isobar', 'isomer', 'israel', 'issued', 'issues', 'italic', 'itched', 'itches', 'itself', 'jabbed', 'jabber', 'jabots', 'jacked', 'jackal', 'jacket', 'jading', 'jagged', 'jaguar', 'jailed', 'jailer', 'jalopy', 'jammed', 'jangle', 'japans', 'japers', 'japery', 'japing', 'jarful', 'jargon', 'jarred', 'jasper', 'jaunts', 'jaunty', 'jayvee', 'jazzed', 'jazzes', 'jeered', 'jejune', 'jejuna', 'jelled', 'jennet', 'jerboa', 'jerked', 'jerkin', 'jersey', 'jested', 'jester', 'jesuit', 'jetsam', 'jetted', 'jewels', 'jewish', 'jibbed', 'jibing', 'jigged', 'jigger', 'jiggle', 'jigsaw', 'jilted', 'jingle', 'jinxed', 'jinxes', 'jitney', 'jiving', 'jobbed', 'jobber', 'jockey', 'jocose', 'jocund', 'jogged', 'jogger', 'joggle', 'joined', 'joiner', 'joints', 'joists', 'jokers', 'joking', 'jolted', 'jordan', 'joshed', 'joshes', 'jostle', 'jotted', 'joules', 'jounce', 'jousts', 'jovial', 'joyful', 'joyous', 'judaic', 'judged', 'judges', 'juggle', 'juiced', 'juicer', 'juices', 'jujube', 'juleps', 'julian', 'jumble', 'jumbos', 'jumped', 'jumper', 'juncos', 'juneau', 'jungle', 'junior', 'junked', 'junket', 'junkie', 'juntas', 'juries', 'jurist', 'jurors', 'juster', 'justly', 'jutted', 'kabobs', 'kabuki', 'kaiser', 'kansas', 'kaolin', 'kapoks', 'kappas', 'karats', 'karate', 'karmic', 'karmas', 'kashas', 'kayaks', 'kazoos', 'kebabs', 'keeled', 'keened', 'keener', 'keenly', 'keeper', 'kelvin', 'kenned', 'kennel', 'kenyan', 'kernel', 'kettle', 'keycap', 'keying', 'keypad', 'khakis', 'kibitz', 'kibosh', 'kicked', 'kicker', 'kidded', 'kidnap', 'kidney', 'killed', 'killer', 'kilter', 'kimono', 'kinder', 'kindly', 'kindle', 'kingly', 'kinked', 'kiosks', 'kipper', 'kippur', 'kirsch', 'kismet', 'kissed', 'kisser', 'kisses', 'kiting', 'kitsch', 'kitten', 'kliegs', 'kludge', 'knacks', 'knaves', 'kneads', 'kneels', 'knells', 'knifed', 'knifes', 'knight', 'knives', 'knobby', 'knocks', 'knolls', 'knotty', 'knurls', 'koalas', 'kodiak', 'kopeck', 'korean', 'kosher', 'kowtow', 'kraals', 'krills', 'kummel', 'kuwait', 'labels', 'labial', 'labium', 'labors', 'lacers', 'lacier', 'lacing', 'lacked', 'lackey', 'lactic', 'lacuna', 'ladder', 'ladies', 'lading', 'ladled', 'ladles', 'lagers', 'lagged', 'lagoon', 'lairds', 'lamaze', 'lambda', 'lamely', 'lament', 'lamest', 'lamina', 'laming', 'lanais', 'lanced', 'lancer', 'lances', 'lancet', 'landed', 'landau', 'lanker', 'lapels', 'lapins', 'lapped', 'lapper', 'lappet', 'lapsed', 'lapser', 'lapses', 'larded', 'larder', 'larger', 'largos', 'lariat', 'larked', 'larrup', 'larvae', 'larval', 'larynx', 'lasers', 'lashed', 'lashes', 'lasses', 'lassie', 'lassos', 'lasted', 'lastly', 'lastex', 'lately', 'lateen', 'latent', 'latest', 'lathed', 'lathes', 'lather', 'latish', 'latter', 'latvia', 'lauded', 'laughs', 'launch', 'laurel', 'laving', 'lavish', 'lawful', 'lawyer', 'laxest', 'laxity', 'layers', 'laying', 'laymen', 'layman', 'layoff', 'layout', 'lazier', 'lazily', 'lazing', 'lazuli', 'leaded', 'leader', 'leaden', 'leafed', 'league', 'leaked', 'leaned', 'leaner', 'leaped', 'learns', 'learnt', 'leased', 'leases', 'leaves', 'leaven', 'lecher', 'lector', 'ledger', 'ledges', 'leered', 'leeway', 'legacy', 'legate', 'legato', 'legend', 'legged', 'legion', 'legume', 'lemmas', 'lemons', 'lemony', 'lemurs', 'lender', 'length', 'lenity', 'lenses', 'lenten', 'lentil', 'lentos', 'lepers', 'lepton', 'lesion', 'lesser', 'lessor', 'lessee', 'lessen', 'lesson', 'lethal', 'letter', 'letups', 'levant', 'levees', 'levels', 'levers', 'levied', 'levies', 'levity', 'lewder', 'lewdly', 'liable', 'lianas', 'libber', 'libels', 'libido', 'libyan', 'lichen', 'licked', 'lidded', 'lieder', 'lieges', 'lifted', 'lifter', 'lights', 'lignin', 'lignum', 'likely', 'likens', 'liking', 'lilacs', 'lilies', 'lilted', 'limber', 'limbos', 'limits', 'limned', 'limner', 'limped', 'limply', 'limpet', 'limpid', 'linden', 'lineal', 'linear', 'linens', 'liners', 'linger', 'lingos', 'lingua', 'lining', 'linked', 'linker', 'linnet', 'lintel', 'lipase', 'lipids', 'lipoid', 'liquor', 'liquid', 'lisbon', 'lisles', 'lisped', 'listed', 'listen', 'litany', 'litchi', 'liters', 'lither', 'litmus', 'litter', 'little', 'lively', 'livens', 'livers', 'livery', 'living', 'lizard', 'llamas', 'llanos', 'loaded', 'loader', 'loafed', 'loafer', 'loathe', 'loaves', 'lobbed', 'locals', 'locale', 'locate', 'locked', 'locker', 'locket', 'lockup', 'locust', 'lodged', 'lodger', 'lodges', 'lofted', 'logged', 'logger', 'loggia', 'logier', 'logjam', 'loiter', 'lolled', 'london', 'lonely', 'loners', 'longed', 'longer', 'looked', 'lookup', 'loomed', 'looped', 'loosed', 'looser', 'looses', 'loosen', 'looted', 'looter', 'loping', 'lopped', 'lopper', 'lorans', 'lorded', 'lordly', 'losers', 'losing', 'losses', 'lotion', 'lottos', 'louder', 'loudly', 'lounge', 'loupes', 'loused', 'louses', 'louver', 'lovely', 'lovers', 'loving', 'lowboy', 'lowers', 'lowest', 'lowing', 'lubber', 'lucent', 'lucite', 'lucked', 'lugged', 'lulled', 'lumber', 'lumbar', 'lumens', 'lummox', 'lumped', 'lunacy', 'lunged', 'lunges', 'lupine', 'luring', 'lurked', 'lusher', 'lushes', 'lusted', 'luster', 'luxury', 'lyceum', 'lyrics', 'lysins', 'lysine', 'macaws', 'macros', 'macron', 'macula', 'madcap', 'madder', 'madden', 'madmen', 'madman', 'madras', 'madrid', 'maenad', 'maggot', 'magics', 'magnet', 'magnum', 'magpie', 'maguey', 'magyar', 'mahout', 'maiden', 'mailed', 'mailer', 'maimed', 'mainly', 'maizes', 'majors', 'makers', 'making', 'malady', 'malawi', 'malays', 'malaya', 'malice', 'malign', 'mallei', 'mallet', 'mallow', 'malted', 'mambas', 'mambos', 'mammal', 'manage', 'manful', 'manger', 'mangle', 'manias', 'maniac', 'manics', 'manila', 'manioc', 'manned', 'mannas', 'manner', 'manors', 'manque', 'manses', 'mantic', 'mantas', 'mantle', 'mantel', 'mantis', 'mantra', 'manual', 'manure', 'maoist', 'maples', 'mapped', 'maraca', 'maraud', 'marble', 'margin', 'marine', 'marina', 'marino', 'marker', 'marked', 'market', 'markup', 'marlin', 'marmot', 'maroon', 'marred', 'marrow', 'marshy', 'marten', 'martin', 'martyr', 'marvel', 'mascot', 'masers', 'mashed', 'masher', 'mashes', 'mashie', 'masked', 'masons', 'masque', 'massed', 'masses', 'massif', 'master', 'mastic', 'mating', 'matins', 'matrix', 'matron', 'matted', 'matter', 'mattes', 'mature', 'matzos', 'mauled', 'maundy', 'mauves', 'maxims', 'maybes', 'mayday', 'mayfly', 'mayhem', 'mayors', 'meadow', 'meager', 'meaner', 'measly', 'meccas', 'mecums', 'medals', 'meddle', 'medial', 'medias', 'median', 'medics', 'medico', 'medium', 'medley', 'medusa', 'meeker', 'meekly', 'meeter', 'megrim', 'melded', 'melees', 'mellow', 'melody', 'melons', 'melted', 'member', 'memoir', 'memory', 'menace', 'menage', 'mended', 'menial', 'meninx', 'menses', 'mensal', 'mentor', 'mental', 'menthe', 'meowed', 'mercer', 'merely', 'merest', 'merged', 'merger', 'merges', 'merino', 'merits', 'merles', 'merlin', 'mermen', 'merman', 'mescal', 'meshed', 'meshes', 'mesons', 'messed', 'messes', 'metals', 'meteor', 'meters', 'method', 'methyl', 'metier', 'meting', 'metric', 'metros', 'mettle', 'mewing', 'mewled', 'mexico', 'mezzos', 'miasma', 'micros', 'micron', 'midair', 'middle', 'midday', 'midges', 'midget', 'midrib', 'midway', 'miffed', 'mights', 'mighty', 'mignon', 'mikado', 'milady', 'milder', 'mildly', 'mildew', 'milers', 'milieu', 'milked', 'milled', 'miller', 'millet', 'milord', 'mimics', 'miming', 'mimosa', 'minced', 'mincer', 'minces', 'minded', 'miners', 'mingle', 'minims', 'mining', 'minion', 'minnow', 'minors', 'minted', 'minuet', 'minute', 'minxes', 'mirage', 'miring', 'mirror', 'mirths', 'miscue', 'misers', 'misery', 'misfit', 'mishap', 'mislay', 'misled', 'missed', 'misses', 'missal', 'misted', 'mister', 'misuse', 'miters', 'mitten', 'mixers', 'mixing', 'mizzen', 'mobbed', 'mobile', 'mobius', 'mochas', 'mocked', 'mockup', 'models', 'modems', 'modern', 'modest', 'modify', 'modish', 'module', 'moguls', 'mohair', 'moiety', 'moiled', 'moires', 'molars', 'molded', 'molder', 'molest', 'molted', 'molten', 'moment', 'monaco', 'monads', 'monday', 'moneys', 'monger', 'mongol', 'monism', 'monist', 'monkey', 'monody', 'months', 'mooned', 'moored', 'mooted', 'moping', 'mopped', 'moppet', 'morals', 'morale', 'morass', 'morays', 'morbid', 'morels', 'morgue', 'mormon', 'morons', 'morose', 'morrow', 'morsel', 'mortal', 'mortar', 'mosaic', 'moscow', 'moseys', 'moslem', 'mosque', 'mosses', 'mostly', 'motels', 'motets', 'mother', 'motifs', 'motile', 'motion', 'motive', 'motley', 'motors', 'mottle', 'mounds', 'mounts', 'mourns', 'moused', 'mouser', 'mouses', 'mousse', 'mouths', 'mouton', 'movers', 'movies', 'moving', 'mowers', 'mowing', 'mucked', 'mucous', 'muddle', 'muffed', 'muffle', 'muffin', 'muftis', 'mugged', 'mugger', 'mukluk', 'mulcts', 'mulish', 'mulled', 'mullet', 'mumble', 'mummer', 'muppet', 'murals', 'murder', 'murmur', 'muscle', 'muscat', 'museum', 'mushed', 'mushes', 'musics', 'musing', 'muskeg', 'musket', 'muslim', 'muslin', 'mussed', 'musses', 'mussel', 'muster', 'mutant', 'mutate', 'mutely', 'mutest', 'mutiny', 'muting', 'mutter', 'mutton', 'mutual', 'muumuu', 'muzhik', 'muzzle', 'myelin', 'myopia', 'myopic', 'myriad', 'myrrhs', 'myrtle', 'myself', 'mystic', 'nabbed', 'nabobs', 'nacres', 'nadirs', 'nagged', 'nagger', 'naiads', 'nailed', 'naives', 'namely', 'naming', 'napalm', 'napery', 'napkin', 'napped', 'narrow', 'nassau', 'nation', 'native', 'nature', 'naught', 'nausea', 'navels', 'navies', 'nazism', 'neared', 'nearer', 'nearly', 'nearby', 'neater', 'neatly', 'nebula', 'necked', 'nectar', 'needed', 'needle', 'negate', 'neighs', 'nekton', 'nelson', 'nephew', 'nerved', 'nerves', 'nested', 'nestle', 'nether', 'netted', 'nettle', 'neural', 'neuron', 'neuter', 'nevada', 'nevoid', 'newark', 'newels', 'newest', 'newton', 'niacin', 'nibble', 'nicely', 'nicest', 'nicety', 'niched', 'niches', 'nicked', 'nickel', 'nieces', 'nights', 'nimbly', 'nimble', 'nimbus', 'ninety', 'ninths', 'nipped', 'nipper', 'nipple', 'niters', 'nitric', 'nitwit', 'nixing', 'nobler', 'nobles', 'nobody', 'nodded', 'nodder', 'nodule', 'noggin', 'noised', 'noises', 'nomads', 'nonage', 'noncom', 'noodle', 'noosed', 'nooses', 'nordic', 'normal', 'norths', 'norway', 'noshed', 'noshes', 'nosier', 'nosily', 'nosing', 'notary', 'notice', 'notify', 'noting', 'notion', 'nougat', 'novels', 'novena', 'novice', 'nowise', 'nozzle', 'nuance', 'nubble', 'nubbin', 'nubile', 'nuclei', 'nudest', 'nudged', 'nudges', 'nudism', 'nudist', 'nudity', 'nugget', 'numbed', 'number', 'numbly', 'nuncio', 'nursed', 'nurses', 'nutmeg', 'nutria', 'nuzzle', 'nylons', 'nymphs', 'oakums', 'obeyed', 'object', 'oblast', 'oblate', 'oblige', 'oblong', 'oboist', 'obsess', 'obtain', 'obtuse', 'obvert', 'occult', 'occupy', 'occurs', 'oceans', 'ocelot', 'ochers', 'octane', 'octant', 'octave', 'octavo', 'octets', 'ocular', 'oddest', 'oddity', 'odious', 'odiums', 'offend', 'offers', 'office', 'offing', 'offish', 'offset', 'ogling', 'ogress', 'oilier', 'oiling', 'okayed', 'oldest', 'olefin', 'olives', 'omegas', 'omelet', 'onions', 'onrush', 'onsets', 'onuses', 'onward', 'onyxes', 'oodles', 'oolong', 'oomphs', 'oozier', 'oozing', 'opaque', 'opened', 'opener', 'openly', 'operas', 'opiate', 'opined', 'opines', 'opiums', 'oppose', 'optics', 'optima', 'opting', 'option', 'opuses', 'oracle', 'orally', 'orange', 'orated', 'orates', 'orator', 'orbing', 'orbits', 'orchid', 'ordain', 'ordeal', 'orders', 'ordure', 'oregon', 'organs', 'orgasm', 'orgies', 'orient', 'origin', 'oriole', 'orison', 'ormolu', 'ornate', 'ornery', 'orphan', 'oscars', 'oscine', 'osiers', 'osmium', 'osprey', 'ossify', 'others', 'otiose', 'ottawa', 'otters', 'ouches', 'ounces', 'ousted', 'ouster', 'outage', 'outbid', 'outcry', 'outdid', 'outfit', 'outfox', 'outing', 'outlaw', 'outlay', 'outlet', 'output', 'outran', 'outrun', 'outset', 'outwit', 'ouzels', 'overdo', 'overly', 'ovines', 'ovoids', 'ovules', 'ovular', 'owlets', 'owlish', 'owners', 'owning', 'oxalic', 'oxalis', 'oxbows', 'oxeyes', 'oxford', 'oxides', 'oxlips', 'oxtail', 'oxygen', 'oyster', 'ozones', 'pacers', 'pacify', 'pacing', 'packed', 'packer', 'packet', 'padded', 'paddle', 'padres', 'paeans', 'paella', 'pagans', 'paging', 'pagoda', 'pained', 'paints', 'paired', 'palace', 'palate', 'palely', 'palest', 'paling', 'palled', 'pallor', 'pallet', 'pallid', 'palmed', 'palter', 'paltry', 'pamper', 'pampas', 'panama', 'pander', 'pandas', 'panels', 'panics', 'panned', 'panted', 'pantry', 'panzer', 'papacy', 'papaws', 'papaya', 'papers', 'papist', 'papuan', 'parade', 'parcel', 'pardon', 'parent', 'pariah', 'paring', 'parish', 'parity', 'parked', 'parkas', 'parlor', 'parlay', 'parley', 'parody', 'parole', 'parrot', 'parsed', 'parses', 'parsec', 'parson', 'parted', 'partly', 'pascal', 'pashas', 'passed', 'passes', 'passim', 'pasted', 'pastes', 'pastas', 'pastel', 'pastor', 'pastry', 'patchy', 'patens', 'patent', 'pathos', 'patina', 'patios', 'patois', 'patrol', 'patron', 'patted', 'patter', 'paunch', 'pauper', 'paused', 'pauses', 'pavans', 'paving', 'pawing', 'pawned', 'payday', 'payees', 'paying', 'payoff', 'payola', 'peachy', 'peahen', 'peaked', 'pealed', 'peanut', 'pearly', 'pearls', 'peavey', 'pebbly', 'pebble', 'pecans', 'pecked', 'pectic', 'pectin', 'pedals', 'pedant', 'peddle', 'peeked', 'peeled', 'peeler', 'peeped', 'peered', 'peeved', 'peeves', 'peewee', 'pegged', 'peking', 'pekoes', 'pelage', 'pellet', 'pelted', 'pelvic', 'pelvis', 'pencil', 'penmen', 'penman', 'penned', 'pennon', 'pentad', 'penult', 'penury', 'people', 'peplum', 'pepped', 'pepper', 'pepsin', 'peptic', 'perils', 'period', 'perish', 'perked', 'permit', 'persia', 'person', 'perter', 'peruke', 'peruse', 'peseta', 'pester', 'pestle', 'petals', 'petard', 'peters', 'petite', 'petrel', 'petrol', 'petted', 'pewees', 'pewits', 'pewter', 'peyote', 'phalli', 'phased', 'phases', 'phenol', 'phenyl', 'phlegm', 'phloem', 'phobia', 'phobic', 'phoebe', 'phoned', 'phones', 'phonic', 'phonon', 'phooey', 'photos', 'photon', 'phrase', 'phylum', 'physic', 'pianos', 'piazza', 'picked', 'pickle', 'pickax', 'picket', 'pickup', 'picnic', 'picots', 'picric', 'piddle', 'pidgin', 'pieced', 'pieces', 'pierce', 'pierre', 'piffle', 'pigeon', 'pigged', 'piglet', 'pignut', 'pigpen', 'pigsty', 'pikers', 'pilafs', 'pileup', 'pilfer', 'piling', 'pilled', 'pillar', 'pillow', 'pilots', 'pimped', 'pimply', 'pimple', 'pinata', 'pincer', 'pineal', 'pinged', 'pinier', 'pining', 'pinion', 'pinked', 'pinker', 'pinkly', 'pinkie', 'pinned', 'pinons', 'pintos', 'pinups', 'pinyin', 'pipers', 'piping', 'pipits', 'pipkin', 'pipped', 'pippin', 'piqued', 'piques', 'piquet', 'piracy', 'pirate', 'pisces', 'pistil', 'pistol', 'piston', 'pitied', 'pities', 'pitons', 'pitted', 'pivots', 'pixels', 'pixies', 'pizzas', 'placer', 'places', 'placid', 'plague', 'plaice', 'plaids', 'plains', 'plaint', 'plaits', 'planed', 'planer', 'planes', 'planar', 'planet', 'planks', 'plants', 'plaque', 'plasma', 'plated', 'plates', 'platen', 'platys', 'played', 'player', 'playas', 'plazas', 'pleads', 'please', 'pleats', 'plebes', 'pledge', 'plenty', 'pleura', 'plexus', 'pliant', 'pliers', 'plight', 'plinth', 'plisse', 'plover', 'plowed', 'plucks', 'plucky', 'plumed', 'plumes', 'plumbs', 'plumps', 'plunge', 'plunks', 'plural', 'pluses', 'plying', 'pocket', 'podium', 'poetic', 'poetry', 'pogrom', 'points', 'pointy', 'poised', 'poises', 'poison', 'pokers', 'pokeys', 'pokier', 'pokily', 'poking', 'poland', 'poleax', 'police', 'policy', 'poling', 'polios', 'polish', 'polity', 'polite', 'polkas', 'polled', 'pollen', 'polyps', 'pomade', 'pommel', 'pompom', 'pompon', 'poncho', 'ponder', 'pongee', 'ponies', 'pontes', 'poodle', 'pooled', 'pooped', 'poorer', 'poorly', 'popery', 'popgun', 'popish', 'poplar', 'poplin', 'popped', 'popper', 'poring', 'porker', 'porous', 'porter', 'portly', 'portal', 'posers', 'poseur', 'posies', 'posing', 'posits', 'posses', 'possum', 'posted', 'postal', 'poster', 'potash', 'potato', 'potent', 'pother', 'potion', 'potpie', 'potted', 'potter', 'pounce', 'pounds', 'poured', 'pouted', 'pouter', 'powder', 'powers', 'powwow', 'prague', 'praise', 'prance', 'pranks', 'prated', 'prates', 'prawns', 'praxes', 'praxis', 'prayed', 'prayer', 'preach', 'precis', 'preens', 'prefab', 'prefer', 'prefix', 'premed', 'premix', 'prepay', 'presto', 'pretty', 'prewar', 'preyed', 'priced', 'prices', 'pricks', 'prided', 'prides', 'priers', 'priest', 'primed', 'primer', 'primes', 'primly', 'primal', 'primps', 'prince', 'prints', 'priors', 'priory', 'priori', 'prisms', 'prison', 'prissy', 'privet', 'prized', 'prizes', 'probed', 'probes', 'proems', 'profit', 'prolix', 'prompt', 'prongs', 'pronto', 'proofs', 'propel', 'proper', 'prosed', 'proses', 'proton', 'proved', 'proves', 'proven', 'prowls', 'prudes', 'pruned', 'prunes', 'prying', 'psalms', 'pseudo', 'psyche', 'psycho', 'public', 'pucker', 'puddle', 'pueblo', 'puerto', 'puffed', 'puffer', 'puffin', 'puking', 'puling', 'pulled', 'pullet', 'pulley', 'pulped', 'pulpit', 'pulsed', 'pulses', 'pulsar', 'pumice', 'pummel', 'pumped', 'punchy', 'pundit', 'punier', 'punish', 'punned', 'punted', 'punter', 'pupate', 'pupils', 'puppet', 'pureed', 'purees', 'purely', 'purest', 'purged', 'purges', 'purify', 'purism', 'purist', 'purity', 'purled', 'purple', 'purred', 'pursed', 'purser', 'purses', 'pursue', 'purvey', 'pushed', 'pusher', 'pushes', 'pushup', 'pusses', 'putoff', 'putout', 'putrid', 'putsch', 'putted', 'putter', 'puttee', 'puzzle', 'pylons', 'pyrite', 'python', 'quacks', 'quaffs', 'quahog', 'quails', 'quaint', 'quaked', 'quaker', 'quakes', 'qualms', 'quanta', 'quarks', 'quarry', 'quarts', 'quarto', 'quartz', 'quasar', 'quaver', 'queasy', 'quebec', 'queens', 'queers', 'quells', 'quench', 'querns', 'quests', 'queued', 'queues', 'quiche', 'quicks', 'quiets', 'quills', 'quilts', 'quince', 'quinsy', 'quints', 'quires', 'quirks', 'quirky', 'quirts', 'quiver', 'quoins', 'quoits', 'quorum', 'quoted', 'quotes', 'quotas', 'rabble', 'rabbet', 'rabbis', 'rabbit', 'rabies', 'raceme', 'racers', 'racier', 'racial', 'racing', 'racism', 'racist', 'racked', 'racket', 'radars', 'radial', 'radian', 'radios', 'radish', 'radium', 'radius', 'radons', 'raffle', 'raffia', 'rafted', 'rafter', 'ragged', 'raging', 'raglan', 'ragout', 'ragtag', 'raided', 'raider', 'railed', 'rained', 'raised', 'raiser', 'raises', 'raisin', 'rajahs', 'raking', 'rakish', 'ramble', 'ramies', 'ramify', 'ramjet', 'rammed', 'ramose', 'ramous', 'ramrod', 'rancho', 'rancid', 'rancor', 'random', 'ranged', 'ranger', 'ranges', 'ranked', 'ranker', 'rankle', 'ransom', 'ranted', 'rapier', 'rapids', 'rapine', 'raping', 'rapist', 'rapped', 'rappel', 'rarely', 'rarefy', 'rarest', 'raring', 'rarity', 'rascal', 'rasher', 'rashes', 'rashly', 'rasped', 'rather', 'ratify', 'rating', 'ratios', 'ration', 'ratite', 'ratted', 'ratter', 'rattle', 'rattan', 'ravage', 'ravels', 'ravens', 'ravine', 'raving', 'ravish', 'rawest', 'rayons', 'razing', 'razors', 'razzed', 'razzes', 'reacts', 'reader', 'really', 'realms', 'realty', 'reamed', 'reamer', 'reaped', 'reaper', 'reared', 'rearms', 'reason', 'rebate', 'rebels', 'rebind', 'reboot', 'reborn', 'rebuff', 'rebuke', 'rebuts', 'recall', 'recant', 'recaps', 'recast', 'recede', 'recent', 'recess', 'recipe', 'recite', 'reckon', 'recoil', 'record', 'recoup', 'rectal', 'rectos', 'rector', 'rectum', 'recurs', 'redact', 'redcap', 'redder', 'redden', 'redeem', 'redoes', 'redone', 'reduce', 'reefed', 'reefer', 'reeked', 'reeled', 'reeves', 'refers', 'refill', 'refine', 'refits', 'reflex', 'reform', 'refuel', 'refuge', 'refund', 'refuse', 'refute', 'regain', 'regale', 'regard', 'regent', 'reggae', 'regime', 'region', 'regret', 'rehash', 'rehear', 'reigns', 'reined', 'reject', 'rejoin', 'relate', 'relays', 'relent', 'relied', 'relies', 'relics', 'relief', 'reline', 'relish', 'relive', 'remade', 'remain', 'remake', 'remand', 'remark', 'remedy', 'remind', 'remiss', 'remits', 'remora', 'remote', 'remove', 'rename', 'render', 'renege', 'renews', 'rennet', 'rennin', 'renown', 'rented', 'rental', 'reopen', 'repaid', 'repair', 'repast', 'repays', 'repeal', 'repeat', 'repels', 'repent', 'repine', 'replay', 'report', 'repose', 'repute', 'reread', 'reruns', 'resale', 'rescue', 'resell', 'resent', 'resets', 'reship', 'reside', 'resign', 'resins', 'resist', 'resold', 'resort', 'rested', 'result', 'resume', 'retail', 'retain', 'retake', 'retard', 'retell', 'retina', 'retire', 'retold', 'retook', 'retool', 'retort', 'return', 'retype', 'revamp', 'reveal', 'revels', 'revere', 'revert', 'review', 'revile', 'revise', 'revive', 'revoir', 'revoke', 'revolt', 'revues', 'revved', 'reward', 'rewind', 'rewire', 'reword', 'rework', 'rezone', 'rhesus', 'rheums', 'rheumy', 'rhinos', 'rhymed', 'rhymes', 'rhythm', 'rialto', 'riatas', 'ribald', 'ribbed', 'ribbon', 'ribose', 'ricans', 'ricers', 'richer', 'riches', 'richly', 'ricing', 'ridded', 'ridden', 'riddle', 'riders', 'ridged', 'ridges', 'riding', 'rifest', 'riffle', 'rifled', 'rifles', 'rifted', 'rigged', 'rigger', 'rights', 'rigors', 'riling', 'riming', 'rimmed', 'ringed', 'ringer', 'rinsed', 'rinses', 'rioted', 'rioter', 'ripens', 'ripest', 'ripped', 'ripper', 'ripple', 'ripsaw', 'risers', 'rising', 'risked', 'risque', 'ritual', 'rivals', 'rivers', 'rivets', 'riving', 'riyadh', 'roamed', 'roared', 'roasts', 'robbed', 'robber', 'robins', 'robing', 'robots', 'robust', 'rocked', 'rocker', 'rocket', 'rococo', 'rodent', 'rodeos', 'rogues', 'roiled', 'rolled', 'roller', 'romans', 'romany', 'romeos', 'romped', 'romper', 'rondos', 'roofed', 'roofer', 'rookie', 'roomed', 'roomer', 'roosts', 'rooted', 'ropier', 'roping', 'rosary', 'rosier', 'rosins', 'roster', 'rotary', 'rotate', 'rotors', 'rotted', 'rotten', 'rotund', 'rouged', 'rouges', 'roughs', 'rounds', 'roused', 'rouses', 'rousts', 'routed', 'routes', 'rovers', 'roving', 'rowans', 'rowels', 'rowing', 'rubbed', 'rubble', 'rubber', 'rubies', 'rubles', 'rubric', 'ruched', 'ruches', 'ruckus', 'rudder', 'rudely', 'rudest', 'rueful', 'ruffed', 'ruffle', 'rugged', 'ruined', 'rulers', 'ruling', 'rumble', 'rumbas', 'rumors', 'rumple', 'rumpus', 'runlet', 'runner', 'runnel', 'runway', 'rushed', 'rusher', 'rushes', 'russet', 'russia', 'rusted', 'rustle', 'rustic', 'rutted', 'rwanda', 'sabers', 'sables', 'sabots', 'sachem', 'sacher', 'sachet', 'sacked', 'sacred', 'sacrum', 'sadder', 'saddle', 'sadden', 'sadism', 'sadist', 'safari', 'safely', 'safest', 'safety', 'sagely', 'sagest', 'sagged', 'sahibs', 'sailed', 'sailor', 'saints', 'salaam', 'salads', 'salami', 'salary', 'saline', 'saliva', 'sallow', 'salmon', 'salons', 'saloon', 'salted', 'saluki', 'salute', 'salved', 'salver', 'salves', 'salvia', 'salvos', 'samara', 'sambas', 'samoan', 'sampan', 'sample', 'sancta', 'sanded', 'sander', 'sandal', 'sanest', 'sanity', 'sansei', 'santas', 'sapped', 'sarong', 'sashed', 'sashes', 'sashay', 'sassed', 'sasses', 'sateen', 'satins', 'satiny', 'sating', 'satire', 'satrap', 'saturn', 'satyrs', 'sauced', 'saucer', 'sauces', 'saunas', 'sautes', 'sauted', 'savage', 'savant', 'savers', 'savior', 'saving', 'savors', 'savory', 'sawing', 'sawyer', 'saxons', 'saying', 'scabby', 'scaled', 'scales', 'scalar', 'scalds', 'scalps', 'scamps', 'scampi', 'scants', 'scanty', 'scared', 'scares', 'scarab', 'scarce', 'scarfs', 'scarps', 'scathe', 'scenes', 'scenic', 'scents', 'scheme', 'schema', 'schism', 'schist', 'schlep', 'school', 'schuss', 'schwas', 'scions', 'sclera', 'scoffs', 'scolds', 'scones', 'sconce', 'scoops', 'scoots', 'scopes', 'scored', 'scores', 'scorch', 'scoria', 'scorns', 'scoter', 'scotch', 'scours', 'scouts', 'scowls', 'scrams', 'scraps', 'scrape', 'scrawl', 'scream', 'screed', 'screen', 'screws', 'screwy', 'scribe', 'scrims', 'scrimp', 'scrips', 'script', 'scrods', 'scroll', 'scrota', 'scrubs', 'scruff', 'scubas', 'scuffs', 'sculls', 'sculpt', 'scurfy', 'scurry', 'scurvy', 'scythe', 'seabee', 'sealed', 'sealer', 'seamed', 'seamen', 'seaman', 'seance', 'seared', 'search', 'season', 'seated', 'seaway', 'secant', 'secede', 'second', 'secret', 'sector', 'secure', 'sedans', 'sedate', 'seders', 'sedges', 'seduce', 'sedums', 'seeded', 'seeing', 'seeker', 'seemed', 'seemly', 'seeped', 'seesaw', 'seethe', 'seined', 'seines', 'seized', 'seizes', 'seldom', 'select', 'seller', 'selves', 'semite', 'senate', 'sender', 'senile', 'senior', 'sennas', 'sensed', 'senses', 'sensor', 'sentry', 'sepals', 'sepias', 'sepses', 'sepsis', 'septic', 'septet', 'septum', 'sequel', 'sequin', 'serape', 'seraph', 'serene', 'serest', 'serges', 'series', 'serial', 'serifs', 'sermon', 'serums', 'served', 'server', 'serves', 'sesame', 'sestet', 'setoff', 'setter', 'settee', 'settle', 'setups', 'sevens', 'severs', 'severe', 'sevres', 'sewage', 'sewers', 'sewing', 'sexier', 'sexily', 'sexing', 'sexism', 'sexist', 'sextet', 'sexton', 'sexual', 'shabby', 'shacks', 'shaded', 'shades', 'shadow', 'shafts', 'shaggy', 'shaker', 'shakes', 'shaken', 'shakos', 'shales', 'shalom', 'shamed', 'shames', 'shaman', 'shamus', 'shanks', 'shanty', 'shaped', 'shapes', 'shared', 'shares', 'shards', 'sharks', 'sharps', 'shasta', 'shaved', 'shaver', 'shaves', 'shaven', 'shawls', 'shears', 'sheath', 'sheave', 'sheers', 'sheets', 'sheiks', 'shekel', 'shells', 'shelve', 'sherry', 'shield', 'shiers', 'shiest', 'shifts', 'shifty', 'shills', 'shimmy', 'shined', 'shiner', 'shines', 'shinny', 'shinto', 'shires', 'shirks', 'shirrs', 'shirts', 'shiver', 'shoals', 
 'shoats', 'shocks', 'shoddy', 'shoers', 'shofar', 'shogun', 'shooed', 'shoots', 'shored', 'shores', 'shoran', 'shorts', 'should', 'shouts', 'shoved', 'shoves', 'shovel', 'showed', 'shower', 'shrank', 'shreds', 'shrews', 'shrewd', 'shriek', 'shrift', 'shrike', 'shrill', 'shrimp', 'shrine', 'shrink', 'shrive', 'shroud', 'shrove', 'shrubs', 'shrugs', 'shrunk', 'shtick', 'shucks', 'shunts', 'shying', 'sibyls', 'sicily', 'sicker', 'sickly', 'sickle', 'sicken', 'siding', 'sidled', 'sidles', 'sieged', 'sieges', 'sienna', 'sierra', 'siesta', 'sieved', 'sieves', 'sifted', 'sifter', 'sighed', 'sights', 'sigmas', 'signed', 'signer', 'signal', 'signet', 'silage', 'silent', 'silica', 'silked', 'silken', 'silted', 'silver', 'simian', 'simile', 'simmer', 'simony', 'simper', 'simply', 'simple', 'sinews', 'sinewy', 'sinful', 'singed', 'singer', 'singes', 'singly', 'single', 'sinker', 'sinned', 'sinner', 'siphon', 'sipped', 'sirens', 'siring', 'sirius', 'sisals', 'sister', 'sitars', 'sitcom', 'siting', 'sitter', 'sixths', 'sizing', 'sizzle', 'skater', 'skates', 'skeets', 'skeins', 'sketch', 'skewed', 'skewer', 'skidoo', 'skiers', 'skiffs', 'skiing', 'skills', 'skimps', 'skimpy', 'skinks', 'skinny', 'skirls', 'skirts', 'skivvy', 'skulks', 'skulls', 'skunks', 'skying', 'skylab', 'skyway', 'slacks', 'slaked', 'slakes', 'slalom', 'slangs', 'slangy', 'slants', 'slated', 'slates', 'slaved', 'slaves', 'slavic', 'slaver', 'slayer', 'sleazy', 'sledge', 'sleeks', 'sleeps', 'sleepy', 'sleets', 'sleeve', 'sleigh', 'sleuth', 'sliced', 'slices', 'slicks', 'slided', 'slider', 'slides', 'sliest', 'slight', 'slimed', 'slimes', 'slimly', 'slings', 'slinks', 'slinky', 'sliver', 'slogan', 'sloops', 'sloped', 'slopes', 'sloppy', 'slouch', 'slough', 'slovak', 'sloven', 'slowed', 'slower', 'slowly', 'sludge', 'sludgy', 'sluice', 'sluing', 'slumps', 'slurps', 'slurry', 'slushy', 'smacks', 'smalls', 'smarmy', 'smarts', 'smears', 'smeary', 'smells', 'smelly', 'smelts', 'smiled', 'smiles', 'smilax', 'smirch', 'smirks', 'smites', 'smiths', 'smithy', 'smocks', 'smoggy', 'smoked', 'smoker', 'smokes', 'smooch', 'smooth', 'smudge', 'smudgy', 'smugly', 'smutty', 'snacks', 'snafus', 'snails', 'snaked', 'snakes', 'snappy', 'snared', 'snares', 'snarls', 'snatch', 'snazzy', 'sneaks', 'sneaky', 'sneers', 'sneeze', 'snider', 'sniffs', 'sniped', 'sniper', 'snipes', 'snippy', 'snitch', 'snivel', 'snobby', 'snoods', 'snoops', 'snoopy', 'snooty', 'snooze', 'snored', 'snores', 'snorts', 'snotty', 'snouts', 'snowed', 'snuffs', 'snugly', 'soaked', 'soaped', 'soared', 'soaves', 'sobbed', 'sobers', 'soccer', 'social', 'socked', 'socket', 'sodded', 'sodden', 'sodium', 'sodomy', 'softer', 'softly', 'soften', 'soigne', 'soiled', 'soiree', 'solace', 'solder', 'solely', 'solemn', 'solids', 'soling', 'soloed', 'solute', 'solved', 'solves', 'somali', 'somber', 'sonata', 'sonnet', 'sooner', 'sooted', 'soothe', 'sopped', 'sordid', 'sorely', 'sorest', 'sorrel', 'sorrow', 'sorted', 'sorter', 'sortie', 'soughs', 'sought', 'sounds', 'soured', 'sourer', 'sourly', 'source', 'soused', 'souses', 'soviet', 'sowing', 'spaced', 'spacer', 'spaces', 'spaded', 'spades', 'spadix', 'spanks', 'spared', 'sparer', 'spares', 'sparks', 'sparse', 'spasms', 'spates', 'spathe', 'spavin', 'spawns', 'spayed', 'speaks', 'spears', 'specie', 'specks', 'speech', 'speeds', 'speedy', 'spells', 'spends', 'sperms', 'spewed', 'sphere', 'sphinx', 'spiced', 'spices', 'spider', 'spiels', 'spiffy', 'spigot', 'spiked', 'spikes', 'spills', 'spines', 'spinal', 'spinet', 'spires', 'spiral', 'spirit', 'spited', 'spites', 'splash', 'splays', 'spleen', 'splice', 'splint', 'splits', 'spodes', 'spoils', 'spoily', 'spoked', 'spokes', 'spoken', 'sponge', 'spongy', 'spoofs', 'spooks', 'spooky', 'spools', 'spoons', 'spoors', 'spores', 'sports', 'sporty', 'spotty', 'spouse', 'spouts', 'sprain', 'sprang', 'sprats', 'sprawl', 'sprays', 'sprees', 'spread', 'sprier', 'sprigs', 'spring', 'sprint', 'sprits', 'sprite', 'sprout', 'spruce', 'sprung', 'spumed', 'spumes', 'spunks', 'spunky', 'spurge', 'spurns', 'spurts', 'sputum', 'spying', 'squabs', 'squads', 'squall', 'square', 'squash', 'squats', 'squaws', 'squawk', 'squeak', 'squeal', 'squibs', 'squids', 'squint', 'squire', 'squirm', 'squirt', 'squish', 'stable', 'stacks', 'staffs', 'staged', 'stages', 'stains', 'stairs', 'staked', 'stakes', 'staled', 'staler', 'stales', 'stalks', 'stalls', 'stamen', 'stamps', 'stance', 'stanch', 'stands', 'stanza', 'stapes', 'staple', 'stared', 'stares', 'starch', 'starry', 'starts', 'starve', 'stases', 'stasis', 'stated', 'static', 'stator', 'states', 'statue', 'status', 'staved', 'staves', 'stayed', 'steads', 'steady', 'steaks', 'steals', 'steams', 'steamy', 'steeds', 'steels', 'steely', 'steeps', 'steers', 'steins', 'steles', 'stench', 'stenos', 'steppe', 'stereo', 'sterns', 'sterna', 'sterol', 'stewed', 'sticks', 'sticky', 'stifle', 'stiffs', 'stigma', 'stiles', 'stills', 'stilts', 'stings', 'stingy', 'stinks', 'stinky', 'stints', 'stitch', 'storts', 'stocks', 'stocky', 'stodgy', 'stoics', 'stoked', 'stoker', 'stokes', 'stoles', 'stolen', 'stolid', 'stomps', 'stoned', 'stones', 'stooge', 'stools', 'stoops', 'stored', 'stores', 'storks', 'storms', 'stormy', 'stoups', 'stouts', 'stoves', 'stowed', 'strafe', 'strain', 'strait', 'strand', 'straps', 'strata', 'strati', 'straws', 'strays', 'streak', 'stream', 'street', 'stress', 'strews', 'strewn', 'striae', 'strict', 'stride', 'strife', 'strike', 'string', 'strips', 'stripe', 'stripy', 'strive', 'strobe', 'strode', 'stroke', 'stroll', 'strong', 'strops', 'strove', 'struck', 'strums', 'strung', 'struts', 'stubby', 'stucco', 'studio', 'stuffs', 'stuffy', 'stumps', 'stumpy', 'stunts', 'stupid', 'stupor', 'sturdy', 'styled', 'styles', 'stylus', 'stymie', 'subbed', 'subdue', 'sublet', 'submit', 'suborn', 'subset', 'subtly', 'subtle', 'suburb', 'subway', 'succor', 'sucked', 'sucker', 'suckle', 'sudden', 'suedes', 'suffer', 'suffix', 'sugars', 'sugary', 'suited', 'suites', 'suitor', 'sulfas', 'sulfur', 'sulked', 'sullen', 'sultan', 'sultry', 'sumacs', 'summed', 'summer', 'summit', 'summon', 'sunder', 'sundae', 'sunday', 'sundry', 'sunken', 'sunlit', 'sunned', 'sunset', 'suntan', 'sunups', 'supers', 'superb', 'supine', 'supped', 'supper', 'supple', 'supply', 'surely', 'surest', 'surety', 'surfer', 'surged', 'surges', 'surrey', 'surtax', 'survey', 'sutras', 'suttee', 'suture', 'svelte', 'swaged', 'swages', 'swains', 'swamis', 'swamps', 'swampy', 'swanky', 'swards', 'swarms', 'swatch', 'swaths', 'swathe', 'swayed', 'swears', 'sweats', 'sweaty', 'swedes', 'sweden', 'sweeps', 'sweets', 'swells', 'swerve', 'swifts', 'swills', 'swings', 'swiped', 'swipes', 'swirls', 'switch', 'swivel', 'swoons', 'swoops', 'swords', 'sylphs', 'sylvan', 'symbol', 'syndic', 'synods', 'syntax', 'syrian', 'syrinx', 'syrups', 'syrupy', 'system', 'tabard', 'tabbed', 'tabled', 'tables', 'tablet', 'taboos', 'tabors', 'tacked', 'tackle', 'tactic', 'tagged', 'tahiti', 'taigas', 'tailed', 'tailor', 'taints', 'taipei', 'taiwan', 'takers', 'taking', 'talcum', 'talent', 'talked', 'talker', 'talkie', 'taller', 'tallow', 'talmud', 'talons', 'tamale', 'tamest', 'taming', 'tamped', 'tamper', 'tampon', 'tandem', 'tangle', 'tangos', 'tanker', 'tanned', 'tannic', 'tanner', 'tannin', 'taoism', 'taoist', 'tapers', 'taping', 'tapirs', 'tapped', 'tappet', 'target', 'tariff', 'tarmac', 'tarots', 'tarpon', 'tarred', 'tarsal', 'tarsus', 'tarter', 'tartly', 'tartan', 'tartar', 'tasked', 'tassel', 'tasted', 'taster', 'tastes', 'tatted', 'tatter', 'tattle', 'tattoo', 'taught', 'taunts', 'taupes', 'taurus', 'tauter', 'tautly', 'tavern', 'tawdry', 'taxied', 'taxies', 'taxing', 'teacup', 'teamed', 'teapot', 'teared', 'teased', 'teaser', 'teases', 'teasel', 'tedium', 'teeing', 'teemed', 'teeter', 'teethe', 'teflon', 'teller', 'temple', 'temper', 'tempos', 'tempts', 'tenant', 'tended', 'tender', 'tendon', 'tenets', 'tennis', 'tenons', 'tenors', 'tenpin', 'tensed', 'tenser', 'tenses', 'tensor', 'tented', 'tenter', 'tenths', 'tenure', 'tepees', 'termed', 'terror', 'terser', 'tested', 'tester', 'testes', 'testae', 'testis', 'tether', 'tetras', 'tetrad', 'texans', 'thalia', 'thanes', 'thanks', 'thatch', 'thawed', 'thecae', 'thefts', 'theirs', 'theism', 'theist', 'themes', 'thence', 'theory', 'theses', 'thesis', 'thieve', 'thighs', 'thinly', 'things', 'thinks', 'thirds', 'thirst', 'thirty', 'thongs', 'thorax', 'thorns', 'thorny', 'though', 'thrash', 'threes', 'thread', 'threat', 'thresh', 'thrice', 'thrift', 'thrill', 'thrive', 'throes', 'throat', 'throbs', 'throne', 'throng', 'throve', 'throws', 'thrown', 'thrums', 'thrush', 'thrust', 'thumbs', 'thumps', 'thwack', 'thwart', 'thymes', 'thymic', 'thymus', 'tiaras', 'tibiae', 'tibial', 'ticked', 'ticker', 'tickle', 'ticket', 'tidbit', 'tidied', 'tidier', 'tidies', 'tidily', 'tiding', 'tiered', 'tierce', 'tiffed', 'tigers', 'tights', 'tildes', 'tiling', 'tilled', 'tiller', 'tilted', 'tilths', 'timber', 'timbre', 'timely', 'timers', 'timing', 'tinder', 'tinged', 'tingly', 'tingle', 'tinges', 'tinier', 'tinker', 'tinkle', 'tinned', 'tinsel', 'tinted', 'tipped', 'tipper', 'tipple', 'tippet', 'tiptoe', 'tiptop', 'tirade', 'tiring', 'tisane', 'tissue', 'titans', 'tithed', 'tithes', 'titian', 'titled', 'titles', 'titter', 'tittle', 'toasts', 'tobago', 'tobies', 'tocsin', 'todays', 'toddle', 'toeing', 'toffee', 'togged', 'toggle', 'toiled', 'toiles', 'toilet', 'tokens', 'tolled', 'tomato', 'tomboy', 'tomcat', 'tomcod', 'tomtit', 'tongue', 'tonics', 'toning', 'tonsil', 'tooled', 'tooted', 'toothy', 'topeka', 'topers', 'topics', 'toping', 'topped', 'topper', 'topple', 'toques', 'torahs', 'torero', 'tories', 'torpor', 'torpid', 'torque', 'torrid', 'torsos', 'tortes', 'tossed', 'tosses', 'tossup', 'totals', 'totems', 'toting', 'totted', 'totter', 'toucan', 'touche', 'touchy', 'toughs', 'toupee', 'toured', 'tousle', 'touted', 'touter', 'towage', 'toward', 'towels', 'towers', 'towhee', 'towing', 'townie', 'toxics', 'toxins', 'toying', 'traces',
'tracer', 'tracks', 'tracts', 'traded', 'trader', 'trades', 'tragic', 'trails', 'trains', 'traits', 'tramps', 'trance', 'trashy', 'trauma', 'travel', 'trawls', 'treads', 'treats', 'treaty', 'trebly', 'treble', 'tremor', 'trench', 'trends', 'trendy', 'trepan', 'triads', 'triage', 'trials', 'tribes', 'tribal', 'trices', 'tricks', 'tricky', 'tricot', 'trifle', 'trijet', 'trills', 'trines', 'trinal', 'triode', 'tripes', 'triply', 'triple', 'tripod', 'triter', 'triton', 'triune', 'trivet', 'trivia', 'troche', 'troika', 'trojan', 'trolls', 'tromps', 'troops', 'tropes', 'trophy', 'tropic', 'troths', 'trough', 'troupe', 'trowel', 'truant', 'truces', 'trucks', 'trudge', 'truest', 'truing', 'truism', 'trumps', 'trunks', 'trusts', 'trusty', 'truths', 'trying', 'tryout', 'trysts', 'tubbed', 'tubers', 'tubing', 'tubule', 'tucked', 'tucker', 'tufted', 'tugged', 'tugger', 'tulips', 'tulles', 'tumble', 'tumefy', 'tumors', 'tumuli', 'tumult', 'tundra', 'tuners', 'tunics', 'tuning', 'tunnel', 'tupelo', 'turban', 'turbid', 'turbot', 'tureen', 'turgid', 'turkic', 'turkey', 'turned', 'turner', 'turnip', 'turret', 'turtle', 'tuscan', 'tussle', 'tussah', 'tutors', 'tuxedo', 'twangs', 'tweaks', 'tweeds', 'tweedy', 'twelve', 'twenty', 'twiggy', 'twills', 'twined', 'twines', 'twinge', 'twirls', 'twists', 'twitch', 'tycoon', 'typhus', 'typify', 'typing', 'typist', 'tyrant', 'udders', 'uganda', 'uglier', 'ukases', 'ulcers', 'ulster', 'ultima', 'ultimo', 'ultras', 'umbels', 'umbers', 'umbras', 'umbrae', 'umiaks', 'umlaut', 'umpire', 'unable', 'unbars', 'unbend', 'unbent', 'unbind', 'unbolt', 'unborn', 'uncaps', 'uncial', 'uncles', 'unclad', 'uncoil', 'uncork', 'undies', 'undoes', 'undone', 'unduly', 'unease', 'uneasy', 'uneven', 'unfair', 'unfelt', 'unfits', 'unfold', 'unfurl', 'unglue', 'unhand', 'unholy', 'unhook', 'unhurt', 'unions', 'unique', 'unisex', 'unison', 'united', 'unites', 'univac', 'unjust', 'unkind', 'unlace', 'unless', 'unlike', 'unload', 'unlock', 'unmade', 'unmake', 'unmans', 'unmask', 'unpack', 'unpaid', 'unpins', 'unplug', 'unread', 'unreal', 'unreel', 'unrest', 'unripe', 'unroll', 'unruly', 'unsafe', 'unsaid', 'unseal', 'unseat', 'unseen', 'unshod', 'unsnap', 'unsold', 'unstop', 'unsung', 'unsure', 'untied', 'unties', 'untidy', 'untold', 'untrue', 'unused', 'unveil', 'unwary', 'unwell', 'unwind', 'unwise', 'unworn', 'unwrap', 'unyoke', 'unzips', 'upbeat', 'update', 'upends', 'upheld', 'uphill', 'uphold', 'upkeep', 'upland', 'uplift', 'uppers', 'upping', 'uppity', 'uproar', 'uproot', 'upsets', 'upshot', 'uptake', 'uptown', 'upturn', 'upward', 'upwind', 'uranus', 'urbane', 'urchin', 'uremia', 'ureter', 'urgent', 'urging', 'urines', 'urinal', 'ursine', 'usably', 'usable', 'usages', 'useful', 'ushers', 'usurer', 'usurps', 'uterus', 'utmost', 'utopia', 'utters', 'uvulas', 'uvular', 'vacant', 'vacate', 'vacuum', 'vagary', 'vagina', 'vaguer', 'vainer', 'vainly', 'valets', 'valise', 'valley', 'valors', 'valued', 'values', 'valves', 'vamped', 'vandal', 'vanish', 'vanity', 'vanned', 'vapors', 'varied', 'varies', 'varlet', 'vassal', 'vaster', 'vastly', 'vatted', 'vaults', 'vaunts', 'vector', 'veered', 'veiled', 'veined', 'velars', 'veldts', 'vellum', 'velour', 'velvet', 'vended', 'vendor', 'vendee', 'veneer', 'venial', 'venire', 'venoms', 'venous', 'vented', 'venues', 'verbal', 'verged', 'verger', 'verges', 'verify', 'verily', 'verity', 'vermin', 'vernal', 'versed', 'verses', 'versos', 'versus', 'vertex', 'verves', 'vesper', 'vessel', 'vested', 'vestal', 'vestry', 'vetoed', 'vetoes', 'vetted', 'vexing', 'viable', 'vialed', 'viands', 'vicars', 'victim', 'victor', 'vicuna', 'videos', 'vienna', 'viewed', 'viewer', 'vigils', 'viking', 'vilest', 'vilify', 'villas', 'vinous', 'vinyls', 'violas', 'violet', 'violin', 'vipers', 'virago', 'vireos', 'virgin', 'virile', 'virtue', 'visaed', 'visage', 'viscid', 'vishnu', 'vision', 'visits', 'visors', 'vistas', 'visual', 'vitals', 'vivify', 'vixens', 'vizard', 'vizier', 'vocals', 'vodkas', 'vogues', 'voiced', 'voices', 'voided', 'voiles', 'volant', 'volley', 'volume', 'volute', 'volvox', 'vomits', 'voodoo', 'vortex', 'votary', 'voters', 'voting', 'votive', 'vowels', 'vowing', 'voyage', 'voyeur', 'vulcan', 'vulgar', 'vulvae', 'vyings', 'wadded', 'waddle', 'wading', 'wafers', 'waffle', 'wafted', 'wagers', 'wagged', 'waggle', 'waging', 'wagons', 'wailed', 'waists', 'waited', 'waiter', 'waived', 'waiver', 'waives', 'wakens', 'waking', 'waling', 'walked', 'walker', 'walkup', 'walled', 'wallet', 'wallop', 'wallow', 'walnut', 'walrus', 'wampum', 'wander', 'wangle', 'waning', 'wankel', 'wanner', 'wanted', 'wanton', 'wapiti', 'warble', 'warded', 'warder', 'warden', 'warier', 'warily', 'warmed', 'warmer', 'warmly', 'warmth', 'warned', 'warped', 'warred', 'warren', 'warsaw', 'washed', 'washer', 'washes', 'wasted', 'waster', 'wastes', 'waters', 'watery', 'wattle', 'wavers', 'wavier', 'waving', 'waxier', 'waxing', 'waylay', 'weaker', 'weakly', 'weaken', 'wealth', 'weaned', 'weapon', 'wearer', 'weasel', 'weaver', 'weaves', 'webbed', 'wedded', 'wedged', 'wedges', 'wedgie', 'weeded', 'weekly', 'weenie', 'weevil', 'weighs', 'weight', 'weirdo', 'welded', 'welder', 'welkin', 'welled', 'welted', 'welter', 'wended', 'weskit', 'wetted', 'wetter', 'whacks', 'whaled', 'whaler', 'whales', 'whammy', 'wheals', 'wheats', 'wheels', 'wheeze', 'wheezy', 'whelks', 'whelms', 'whelps', 'whence', 'wherry', 'whiffs', 'whiled', 'whiles', 'whilom', 'whilst', 'whimsy', 'whined', 'whines', 'whinny', 'whirls', 'whisks', 'whists', 'whited', 'whiter', 'whites', 'whiten', 'wholes', 'wholly', 'whoops', 'whoosh', 'whored', 'whores', 'whorls', 'wicker', 'wicked', 'wicket', 'widely', 'widens', 'widest', 'widget', 'widows', 'widths', 'wields', 'wiener', 'wifely', 'wigged', 'wiggle', 'wigwag', 'wigwam', 'wildly', 'wilder', 'wilier', 'wiling', 'willed', 'willow', 'wilted', 'wimple', 'winced', 'winces', 'winded', 'window', 'winery', 'winged', 'wining', 'winked', 'winkle', 'winner', 'winnow', 'winter', 'wintry', 'wipers', 'wiping', 'wirier', 'wiring', 'wisdom', 'wisely', 'wisest', 'wished', 'wishes', 'wising', 'wisped', 'wither', 'withes', 'withal', 'within', 'wizard', 'wizens', 'wobbly', 'wobble', 'woeful', 'wolfed', 'wolves', 'wombat', 'wonder', 'wonted', 'wooded', 'wooden', 'woofed', 'woofer', 'wooing', 'woolly', 'woolen', 'worded', 'worked', 'worker', 'worlds', 'wormed', 'worsen', 'worsts', 'worths', 'worthy', 'wounds', 'wowing', 'wracks', 'wraith', 'wraths', 'wreaks', 'wreath', 'wrecks', 'wrench', 'wrests', 'wretch', 'wriest', 'wrings', 'wrists', 'writer', 'writes', 'writhe', 'wrongs', 'wursts', 'xebecs', 'xmases', 'xylems', 'yachts', 'yahoos', 'yahweh', 'yakked', 'yammer', 'yanked', 'yankee', 'yapped', 'yarrow', 'yawing', 'yawned', 'yearly', 'yearns', 'yeasts', 'yeasty', 'yelled', 'yeller', 'yellow', 'yelped', 'yentas', 'yeomen', 'yeoman', 'yessed', 'yesses', 'yields', 'yipped', 'yippee', 'yodels', 'yogurt', 'yokels', 'yoking', 'yonder', 'yorker', 'youths', 'yttric', 'yuccas', 'zaftig', 'zambia', 'zanier', 'zanies', 'zapped', 'zealot', 'zebras', 'zenith', 'zephyr', 'zeroed', 'zeroes', 'zigzag', 'zinced', 'zinged', 'zinger', 'zinnia', 'zipped', 'zipper', 'zircon', 'zither', 'zodiac', 'zombie', 'zoning', 'zonked', 'zooids', 'zoomed', 'zygoma', 'zygote', 'zymase'
]
      , Ia = "present"
      , Ma = "correct"
      , Oa = "absent";
    var Ra = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };
    function Pa(e, a) {
        var s = {};
        return e.forEach((function(e, t) {
            if (a[t])
                for (var o = 0; o < e.length; o++) {
                    var n = e[o]
                      , r = a[t][o]
                      , i = s[n] || "unknown";
                    Ra[r] > Ra[i] && (s[n] = r)
                }
        }
        )),
        s
    }
    function $a(e) {
        var a = ["th", "st", "nd", "rd"]
          , s = e % 100;
        return e + (a[(s - 20) % 10] || a[s] || a[0])
    }
    var Ha = new Date(2021,5,19,0,0,0,0);
    function Na(e, a) {
        var s = new Date(e)
          , t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(t / 864e5)
    }
    function Da(e) {
        var a, s = Ga(e);
        return a = s % La.length,
        La[a]
    }
    function Ga(e) {
        return Na(Ha, e)
    }
    var Ba = "abcdefghijklmnopqrstuvwxyz"
      , Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));
    function Wa(e) {
        for (var a = "", s = 0; s < e.length; s++) {
            var t = Ba.indexOf(e[s]);
            a += t >= 0 ? Fa[t] : "_"
        }
        return a
    }
    var Ya = "statistics"
      , Ja = "fail"
      , Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        }, Ja, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0
    };
    function Xa() {
        var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
        return JSON.parse(e)
    }
    function Va(e) {
        var a = e.isWin
          , s = e.isStreak
          , t = e.numGuesses
          , o = Xa();
        a ? (o.guesses[t] += 1,
        s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0,
        o.guesses.fail += 1),
        o.maxStreak = Math.max(o.currentStreak, o.maxStreak),
        o.gamesPlayed += 1,
        o.gamesWon += a ? 1 : 0,
        o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100),
        o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
            var s = y(a, 2)
              , t = s[0]
              , o = s[1];
            return t !== Ja ? e += t * o : e
        }
        ), 0) / o.gamesWon),
        function(e) {
            window.localStorage.setItem(Ya, JSON.stringify(e))
        }(o)
    }
    var Ka = document.createElement("template");
    Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         WORDLE6\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var Qa = document.createElement("template");
    Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS"
      , es = "WIN"
      , as = "FAIL"
      , ss = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"]
      , ts = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            s(this, t),
            n(p(e = a.call(this)), "tileIndex", 0),
            n(p(e), "rowIndex", 0),
            n(p(e), "solution", void 0),
            n(p(e), "boardState", void 0),
            n(p(e), "evaluations", void 0),
            n(p(e), "canInput", !0),
            n(p(e), "gameStatus", Za),
            n(p(e), "letterEvaluations", {}),
            n(p(e), "$board", void 0),
            n(p(e), "$keyboard", void 0),
            n(p(e), "$game", void 0),
            n(p(e), "today", void 0),
            n(p(e), "lastPlayedTs", void 0),
            n(p(e), "lastCompletedTs", void 0),
            n(p(e), "hardMode", void 0),
            n(p(e), "dayOffset", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e.today = new Date;
            var o = za();
            return e.lastPlayedTs = o.lastPlayedTs,
            !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""),
            e.evaluations = new Array(6).fill(null),
            e.solution = Da(e.today),
            e.dayOffset = Ga(e.today),
            e.lastCompletedTs = o.lastCompletedTs,
            e.hardMode = o.hardMode,
            e.restoringFromLocalStorage = !1,
            ja({
                rowIndex: e.rowIndex,
                boardState: e.boardState,
                evaluations: e.evaluations,
                solution: e.solution,
                gameStatus: e.gameStatus
            }),
            Ca("event", "level_start", {
                level_name: Wa(e.solution)
            })) : (e.boardState = o.boardState,
            e.evaluations = o.evaluations,
            e.rowIndex = o.rowIndex,
            e.solution = o.solution,
            e.dayOffset = Ga(e.today),
            e.letterEvaluations = Pa(e.boardState, e.evaluations),
            e.gameStatus = o.gameStatus,
            e.lastCompletedTs = o.lastCompletedTs,
            e.hardMode = o.hardMode,
            e.gameStatus !== Za && (e.canInput = !1),
            e.restoringFromLocalStorage = !0),
            e
        }
        return o(t, [{
            key: "evaluateRow",
            value: function() {
                if (6 === this.tileIndex && !(this.rowIndex >= 6)) {
                    var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex], s = this.boardState[this.rowIndex];
                    if (e = s,
                    !Ta.includes(e) && !La.includes(e))
                        return a.setAttribute("invalid", ""),
                        void this.addToast("Not in word list");
                    if (this.hardMode) {
                        var t = function(e, a, s) {
                            if (!e || !a || !s)
                                return {
                                    validGuess: !0
                                };
                            for (var t = 0; t < s.length; t++)
                                if (s[t] === Ma && e[t] !== a[t])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase())
                                    };
                            for (var o = {}, n = 0; n < s.length; n++)
                                [Ma, Ia].includes(s[n]) && (o[a[n]] ? o[a[n]] += 1 : o[a[n]] = 1);
                            var r = e.split("").reduce((function(e, a) {
                                return e[a] ? e[a] += 1 : e[a] = 1,
                                e
                            }
                            ), {});
                            for (var i in o)
                                if ((r[i] || 0) < o[i])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "Guess must contain ".concat(i.toUpperCase())
                                    };
                            return {
                                validGuess: !0
                            }
                        }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1])
                          , o = t.validGuess
                          , n = t.errorMessage;
                        if (!o)
                            return a.setAttribute("invalid", ""),
                            void this.addToast(n || "Not valid in hard mode")
                    }
                    var r = function(e, a) {
                        for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++)
                            e[n] === a[n] && o[n] && (s[n] = Ma,
                            t[n] = !1,
                            o[n] = !1);
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (t[r])
                                for (var l = 0; l < a.length; l++) {
                                    var d = a[l];
                                    if (o[l] && i === d) {
                                        s[r] = Ia,
                                        o[l] = !1;
                                        break
                                    }
                                }
                        }
                        return s
                    }(s, this.solution);
                    this.evaluations[this.rowIndex] = r,
                    this.letterEvaluations = Pa(this.boardState, this.evaluations),
                    a.evaluation = this.evaluations[this.rowIndex],
                    this.rowIndex += 1;
                    var i = this.rowIndex >= 6
                      , l = r.every((function(e) {
                        return "correct" === e
                    }
                    ));
                    if (i || l)
                        Va({
                            isWin: l,
                            isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date),
                            numGuesses: this.rowIndex
                        }),
                        ja({
                            lastCompletedTs: Date.now()
                        }),
                        this.gameStatus = l ? es : as,
                        Ca("event", "level_end", {
                            level_name: Wa(this.solution),
                            num_guesses: this.rowIndex,
                            success: l
                        });
                    this.tileIndex = 0,
                    this.canInput = !1,
                    ja({
                        rowIndex: this.rowIndex,
                        boardState: this.boardState,
                        evaluations: this.evaluations,
                        solution: this.solution,
                        gameStatus: this.gameStatus,
                        lastPlayedTs: Date.now()
                    })
                }
            }
        }, {
            key: "addLetter",
            value: function(e) {
                this.gameStatus === Za && (this.canInput && (this.tileIndex >= 6 || (this.boardState[this.rowIndex] += e,
                this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]),
                this.tileIndex += 1)))
            }
        }, {
            key: "removeLetter",
            value: function() {
                if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                    this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                    var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                    this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"),
                    e.removeAttribute("invalid"),
                    this.tileIndex -= 1
                }
            }
        }, {
            key: "submitGuess",
            value: function() {
                if (this.gameStatus === Za && this.canInput) {
                    if (6 !== this.tileIndex)
                        return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""),
                        void this.addToast("Not enough letters");
                    this.evaluateRow()
                }
            }
        }, {
            key: "addToast",
            value: function(e, a) {
                var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , t = document.createElement("game-toast");
                t.setAttribute("text", e),
                a && t.setAttribute("duration", a),
                s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
            }
        }, {
            key: "sizeBoard",
            value: function() {
                var e = this.shadowRoot.querySelector("#board-container")
                  , a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 420)
                  , s = 6 * Math.floor(a / 6);
                this.$board.style.width = "".concat(a, "px"),
                this.$board.style.height = "".concat(s, "px")
            }
        }, {
            key: "showStatsModal",
            value: function() {
                var e = this.$game.querySelector("game-modal")
                  , a = document.createElement("game-stats");
                this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex),
                a.gameApp = this,
                e.appendChild(a),
                e.setAttribute("open", "")
            }
        }, {
            key: "showHelpModal",
            value: function() {
                var e = this.$game.querySelector("game-modal");
                e.appendChild(document.createElement("game-help")),
                e.setAttribute("open", "")
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                this.$game = this.shadowRoot.querySelector("#game"),
                this.$board = this.shadowRoot.querySelector("#board"),
                this.$keyboard = this.shadowRoot.querySelector("game-keyboard"),
                this.sizeBoard(),
                this.lastPlayedTs || setTimeout((function() {
                    return e.showHelpModal()
                }
                ), 100);
                for (var a = 0; a < 6; a++) {
                    var s = document.createElement("game-row");
                    s.setAttribute("letters", this.boardState[a]),
                    s.setAttribute("length", 6),
                    this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                    this.$board.appendChild(s)
                }
                this.$game.addEventListener("game-key-press", (function(a) {
                    var s = a.detail.key;
                    "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                }
                )),
                this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                    e.$keyboard.letterEvaluations = e.letterEvaluations,
                    e.rowIndex < 6 && (e.canInput = !0);
                    var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    (a.path || a.composedPath && a.composedPath()).includes(s) && ([es, as].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === es && (s.setAttribute("win", ""),
                    e.addToast(ss[e.rowIndex - 1], 2e3)),
                    e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0),
                    setTimeout((function() {
                        e.showStatsModal()
                    }
                    ), 2500))),
                    e.restoringFromLocalStorage = !1)
                }
                )),
                this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                    var s = a.detail
                      , t = s.name
                      , o = s.checked
                      , n = s.disabled;
                    switch (t) {
                    case "hard-mode":
                        return void (n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o,
                        ja({
                            hardMode: o
                        })))
                    }
                }
                )),
                this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-page")
                      , t = document.createTextNode("Settings");
                    s.appendChild(t);
                    var o = document.createElement("game-settings");
                    o.setAttribute("slot", "content"),
                    o.gameApp = e,
                    s.appendChild(o),
                    s.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("help-button").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-page")
                      , t = document.createTextNode("How to play");
                    s.appendChild(t);
                    var o = document.createElement("game-help");
                    o.setAttribute("page", ""),
                    o.setAttribute("slot", "content"),
                    s.appendChild(o),
                    s.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(a) {
                    e.showStatsModal()
                }
                )),
                window.addEventListener("resize", this.sizeBoard.bind(this))
            }
        }, {
            key: "disconnectedCallback",
            value: function() {}
        }, {
            key: "debugTools",
            value: function() {
                var e = this;
                this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)),
                this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                    e.addToast("hello world")
                }
                )),
                this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                    var s = e.$game.querySelector("game-modal");
                    s.textContent = "hello plz",
                    s.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                    e.evaluateRow()
                }
                )),
                this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                    e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                }
                )),
                this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                    var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var ns = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                this.addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"),
                    e.removeChild(e.firstChild),
                    e.removeAttribute("open"))
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"], ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]]
      , us = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "_letterEvaluations", {}),
            e.attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "letterEvaluations",
            set: function(e) {
                this._letterEvaluations = e,
                this._render()
            }
        }, {
            key: "dispatchKeyPressEvent",
            value: function(e) {
                this.dispatchEvent(new CustomEvent("game-key-press",{
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        key: e
                    }
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                this.$keyboard = this.shadowRoot.getElementById("keyboard"),
                this.$keyboard.addEventListener("click", (function(a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                }
                )),
                window.addEventListener("keydown", (function(a) {
                    if (!0 !== a.repeat) {
                        var s = a.key
                          , t = a.metaKey
                          , o = a.ctrlKey;
                        t || o || (Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                    }
                }
                )),
                this.$keyboard.addEventListener("transitionend", (function(a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && s.classList.remove("fade")
                }
                )),
                ds.forEach((function(a) {
                    var s = document.createElement("div");
                    s.classList.add("row"),
                    a.forEach((function(e) {
                        var a;
                        if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                            if ((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e,
                            a.textContent = e,
                            "←" === e) {
                                var t = document.createElement("game-icon");
                                t.setAttribute("icon", "backspace"),
                                a.textContent = "",
                                a.appendChild(t),
                                a.classList.add("one-and-a-half")
                            }
                            "↵" == e && (a.textContent = "enter",
                            a.classList.add("one-and-a-half"))
                        } else
                            (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                        s.appendChild(a)
                    }
                    )),
                    e.$keyboard.appendChild(s)
                }
                )),
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                for (var e in this._letterEvaluations) {
                    var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                    a.dataset.state = this._letterEvaluations[e],
                    a.classList.add("fade")
                }
            }
        }]),
        t
    }(c(HTMLElement));
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
    function cs(e, a, s, t) {
        return new (s || (s = Promise))((function(o, n) {
            function r(e) {
                try {
                    l(t.next(e))
                } catch (e) {
                    n(e)
                }
            }
            function i(e) {
                try {
                    l(t.throw(e))
                } catch (e) {
                    n(e)
                }
            }
            function l(e) {
                var a;
                e.done ? o(e.value) : (a = e.value,
                a instanceof s ? a : new s((function(e) {
                    e(a)
                }
                ))).then(r, i)
            }
            l((t = t.apply(e, a || [])).next())
        }
        ))
    }
    function ps(e, a) {
        var s, t, o, n, r = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: i(0),
            throw: i(1),
            return: i(2)
        },
        "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }
        ),
        n;
        function i(n) {
            return function(i) {
                return function(n) {
                    if (s)
                        throw new TypeError("Generator is already executing.");
                    for (; r; )
                        try {
                            if (s = 1,
                            t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t),
                            0) : t.next) && !(o = o.call(t, n[1])).done)
                                return o;
                            switch (t = 0,
                            o && (n = [2 & n[0], o.value]),
                            n[0]) {
                            case 0:
                            case 1:
                                o = n;
                                break;
                            case 4:
                                return r.label++,
                                {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                r.label++,
                                t = n[1],
                                n = [0];
                                continue;
                            case 7:
                                n = r.ops.pop(),
                                r.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                                    r.label = n[1];
                                    break
                                }
                                if (6 === n[0] && r.label < o[1]) {
                                    r.label = o[1],
                                    o = n;
                                    break
                                }
                                if (o && r.label < o[2]) {
                                    r.label = o[2],
                                    r.ops.push(n);
                                    break
                                }
                                o[2] && r.ops.pop(),
                                r.trys.pop();
                                continue
                            }
                            n = a.call(e, r)
                        } catch (e) {
                            n = [6, e],
                            t = 0
                        } finally {
                            s = o = 0
                        }
                    if (5 & n[0])
                        throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, i])
            }
        }
    }
    customElements.define("game-keyboard", us),
    function() {
        (console.warn || console.log).apply(console, arguments)
    }
    .bind("[clipboard-polyfill]");
    var ms, hs, ys, gs, bs = "undefined" == typeof navigator ? void 0 : navigator, fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs),
    null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
    var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs),
    null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs))
      , vs = "undefined" == typeof window ? void 0 : window
      , ws = (null == vs || vs.ClipboardItem,
    vs);
    var xs = function() {
        this.success = !1
    };
    function zs(e, a, s) {
        for (var t in e.success = !0,
        a) {
            var o = a[t]
              , n = s.clipboardData;
            n.setData(t, o),
            "text/plain" === t && n.getData(t) !== o && (e.success = !1)
        }
        s.preventDefault()
    }
    function js(e) {
        var a = new xs
          , s = zs.bind(this, a, e);
        document.addEventListener("copy", s);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", s)
        }
        return a.success
    }
    function Ss(e, a) {
        _s(e);
        var s = js(a);
        return qs(),
        s
    }
    function _s(e) {
        var a = document.getSelection();
        if (a) {
            var s = document.createRange();
            s.selectNodeContents(e),
            a.removeAllRanges(),
            a.addRange(s)
        }
    }
    function qs() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }
    function Es(e) {
        return cs(this, void 0, void 0, (function() {
            var a;
            return ps(this, (function(s) {
                if (a = "text/plain"in e,
                "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData) {
                    if (!a)
                        throw new Error("No `text/plain` value was specified.");
                    if (t = e["text/plain"],
                    ws.clipboardData.setData("Text", t))
                        return [2, !0];
                    throw new Error("Copying failed, possibly because the user rejected it.")
                }
                var t;
                return js(e) || navigator.userAgent.indexOf("Edge") > -1 || Ss(document.body, e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"),
                    a.textContent = "temporary element",
                    document.body.appendChild(a);
                    var s = Ss(a, e);
                    return document.body.removeChild(a),
                    s
                }(e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important");
                    var s = a;
                    a.attachShadow && (s = a.attachShadow({
                        mode: "open"
                    }));
                    var t = document.createElement("span");
                    t.innerText = e,
                    s.appendChild(t),
                    document.body.appendChild(a),
                    _s(t);
                    var o = document.execCommand("copy");
                    return qs(),
                    document.body.removeChild(a),
                    o
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }
            ))
        }
        ))
    }
    function As(e, a, s) {
        try {
            t = navigator.userAgent || navigator.vendor || window.opera,
            !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(e) ? function(e) {
                return cs(this, void 0, void 0, (function() {
                    return ps(this, (function(a) {
                        if (ks)
                            return [2, ks(e)];
                        if (!Es(function(e) {
                            var a = {};
                            return a["text/plain"] = e,
                            a
                        }(e)))
                            throw new Error("writeText() failed");
                        return [2]
                    }
                    ))
                }
                ))
            }(e.text).then(a, s) : navigator.share(e)
        } catch (e) {
            s()
        }
        var t
    }
    var Cs = document.createElement("template");
    Cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement("template");
    Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML = '\n  <div class="countdown">\n    <h1>Next WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = {
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        winPercentage: "Win %",
        gamesPlayed: "Played",
        gamesWon: "Won",
        averageGuesses: "Av. Guesses"
    }
      , Os = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            n(p(e = a.call(this)), "stats", {}),
            n(p(e), "gameApp", void 0),
            e.attachShadow({
                mode: "open"
            }),
            e.stats = Xa(),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                var a = this.shadowRoot.getElementById("statistics")
                  , s = this.shadowRoot.getElementById("guess-distribution")
                  , t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                if (Object.values(this.stats.guesses).every((function(e) {
                    return 0 === e
                }
                ))) {
                    var o = document.createElement("div");
                    o.classList.add("no-data"),
                    o.innerText = "No Data",
                    s.appendChild(o)
                } else
                    for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                        var r = n
                          , i = this.stats.guesses[n]
                          , l = Ts.content.cloneNode(!0)
                          , d = Math.max(7, Math.round(i / t * 100));
                        l.querySelector(".guess").textContent = r;
                        var u = l.querySelector(".graph-bar");
                        if (u.style.width = "".concat(d, "%"),
                        "number" == typeof i) {
                            l.querySelector(".num-guesses").textContent = i,
                            i > 0 && u.classList.add("align-right");
                            var c = parseInt(this.getAttribute("highlight-guess"), 10);
                            c && n === c && u.classList.add("highlight")
                        }
                        s.appendChild(l)
                    }
                if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                    var t = Ms[s]
                      , o = e.stats[s]
                      , n = Ls.content.cloneNode(!0);
                    n.querySelector(".label").textContent = t,
                    n.querySelector(".statistic").textContent = o,
                    a.appendChild(n)
                }
                )),
                this.gameApp.gameStatus !== Za) {
                    var p = this.shadowRoot.querySelector(".footer")
                      , m = Is.content.cloneNode(!0);
                    p.appendChild(m),
                    this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                        a.preventDefault(),
                        a.stopPropagation();
                        As(function(e) {
                            var a = e.evaluations
                              , s = e.dayOffset
                              , t = e.rowIndex
                              , o = e.isHardMode
                              , n = e.isWin
                              , r = JSON.parse(window.localStorage.getItem(j))
                              , i = JSON.parse(window.localStorage.getItem(S))
                              , l = "Wordle ".concat(s);
                            l += " ".concat(n ? t : "X", "/").concat(6),
                            o && (l += "*");
                            var d = "";
                            return a.forEach((function(e) {
                                e && (e.forEach((function(e) {
                                    if (e) {
                                        var a = "";
                                        switch (e) {
                                        case Ma:
                                            a = function(e) {
                                                return e ? "🟧" : "🟩"
                                            }(i);
                                            break;
                                        case Ia:
                                            a = function(e) {
                                                return e ? "🟦" : "🟨"
                                            }(i);
                                            break;
                                        case Oa:
                                            a = function(e) {
                                                return e ? "⬛" : "⬜"
                                            }(r)
                                        }
                                        d += a
                                    }
                                }
                                )),
                                d += "\n")
                            }
                            )),
                            {
                                text: "".concat(l, "\n\n").concat(d.trimEnd())
                            }
                        }({
                            evaluations: e.gameApp.evaluations,
                            dayOffset: e.gameApp.dayOffset,
                            rowIndex: e.gameApp.rowIndex,
                            isHardMode: e.gameApp.hardMode,
                            isWin: e.gameApp.gameStatus === es
                        }), (function() {
                            e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
                        }
                        ), (function() {
                            e.gameApp.addToast("Share failed", 2e3, !0)
                        }
                        ))
                    }
                    ))
                }
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ps = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                    a.stopPropagation(),
                    e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
                    e.dispatchEvent(new CustomEvent("game-switch-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["checked"]
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-switch", Ps);
    var $s = document.createElement("template");
    $s.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>WORDLE6</strong> in 6 tries.</p>\n      <p>Each guess must be a valid 6 letter word. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="d"></game-tile>\n            <game-tile letter="l"></game-tile>\n         <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="s"></game-tile>\n            <game-tile letter="e" evaluation="present" reveal></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="s"></game-tile>\n     <game-tile letter=" "></game-tile>\n       </div>\n          <p>The letter <strong>E</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="t"></game-tile>\n       <game-tile letter="!"></game-tile>\n        </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new WORDLE6 will be available each day!<strong></p>\n    </div>\n  </section>\n';
    var Hs = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild($s.content.cloneNode(!0))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var Ds = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"),
                    Array.from(e.childNodes).forEach((function(a) {
                        e.removeChild(a)
                    }
                    )),
                    e.removeAttribute("open"))
                }
                ))
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
    }
      , Fs = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            return s(this, t),
            (e = a.call(this)).attachShadow({
                mode: "open"
            }),
            e
        }
        return o(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
            }
        }]),
        t
    }(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4
      , Js = 36e5
      , Us = function(e) {
        r(t, e);
        var a = h(t);
        function t() {
            var e;
            s(this, t),
            n(p(e = a.call(this)), "targetEpochMS", void 0),
            n(p(e), "intervalId", void 0),
            n(p(e), "$timer", void 0),
            e.attachShadow({
                mode: "open"
            });
            var o = new Date;
            return o.setDate(o.getDate() + 1),
            o.setHours(0, 0, 0, 0),
            e.targetEpochMS = o.getTime(),
            e
        }
        return o(t, [{
            key: "padDigit",
            value: function(e) {
                return e.toString().padStart(2, "0")
            }
        }, {
            key: "updateTimer",
            value: function() {
                var e, a = (new Date).getTime(), s = Math.floor(this.targetEpochMS - a);
                if (s <= 0)
                    e = "00:00:00";
                else {
                    var t = Math.floor(s % 864e5 / Js)
                      , o = Math.floor(s % Js / Ys)
                      , n = Math.floor(s % Ys / 1e3);
                    e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n))
                }
                this.$timer.textContent = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                this.$timer = this.shadowRoot.querySelector("#timer"),
                this.intervalId = setInterval((function() {
                    e.updateTimer()
                }
                ), 200)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                clearInterval(this.intervalId)
            }
        }]),
        t
    }(c(HTMLElement));
    return customElements.define("countdown-timer", Us),
    e.CountdownTimer = Us,
    e.GameApp = ts,
    e.GameHelp = Hs,
    e.GameIcon = Fs,
    e.GameKeyboard = us,
    e.GameModal = ns,
    e.GamePage = Ds,
    e.GameRow = x,
    e.GameSettings = _a,
    e.GameStats = Os,
    e.GameSwitch = Ps,
    e.GameThemeManager = _,
    e.GameTile = v,
    e.GameToast = Aa,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});

