var hr = Object.defineProperty;
var pr = (n, i, o) => i in n ? hr(n, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[i] = o;
var Oe = (n, i, o) => (pr(n, typeof i != "symbol" ? i + "" : i, o), o);
import je, { useState as re, Component as mr, useEffect as gr, useMemo as yr, lazy as br, Suspense as Er } from "react";
var z = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Cr() {
  if (we)
    return W;
  we = 1;
  var n = je, i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(C, m, O) {
    var R, T = {}, w = null, Y = null;
    O !== void 0 && (w = "" + O), m.key !== void 0 && (w = "" + m.key), m.ref !== void 0 && (Y = m.ref);
    for (R in m)
      l.call(m, R) && !y.hasOwnProperty(R) && (T[R] = m[R]);
    if (C && C.defaultProps)
      for (R in m = C.defaultProps, m)
        T[R] === void 0 && (T[R] = m[R]);
    return { $$typeof: i, type: C, key: w, ref: Y, props: T, _owner: v.current };
  }
  return W.Fragment = o, W.jsx = h, W.jsxs = h, W;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Rr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = je, i = Symbol.for("react.element"), o = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), C = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), te = Symbol.iterator, Fe = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[Fe];
      return typeof r == "function" ? r : null;
    }
    var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ie("error", e, t);
      }
    }
    function Ie(e, r, t) {
      {
        var a = k.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(s) {
          return String(s);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var We = !1, $e = !1, Ye = !1, Ve = !1, Ne = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === y || Ne || e === v || e === O || e === R || Ve || e === Y || We || $e || Ye || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === T || e.$$typeof === h || e.$$typeof === C || e.$$typeof === m || e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Be(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case o:
          return "Portal";
        case y:
          return "Profiler";
        case v:
          return "StrictMode";
        case O:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return ae(r) + ".Consumer";
          case h:
            var t = e;
            return ae(t._context) + ".Provider";
          case m:
            return Be(e, e.render, "ForwardRef");
          case T:
            var a = e.displayName || null;
            return a !== null ? a : x(e.type) || "Memo";
          case w: {
            var c = e, d = c._payload, s = c._init;
            try {
              return x(s(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, A = 0, ie, oe, ue, le, se, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Le() {
      {
        if (A === 0) {
          ie = console.log, oe = console.info, ue = console.warn, le = console.error, se = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ue() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ie
            }),
            info: P({}, e, {
              value: oe
            }),
            warn: P({}, e, {
              value: ue
            }),
            error: P({}, e, {
              value: le
            }),
            group: P({}, e, {
              value: se
            }),
            groupCollapsed: P({}, e, {
              value: ce
            }),
            groupEnd: P({}, e, {
              value: fe
            })
          });
        }
        A < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = k.ReactCurrentDispatcher, J;
    function V(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            J = a && a[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, N;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      N = new ze();
    }
    function ve(e, r) {
      if (!e || G)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      G = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = q.current, q.current = null, Le();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (S) {
              a = S;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (S) {
              a = S;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            a = S;
          }
          e();
        }
      } catch (S) {
        if (S && a && typeof S.stack == "string") {
          for (var u = S.stack.split(`
`), E = a.stack.split(`
`), p = u.length - 1, g = E.length - 1; p >= 1 && g >= 0 && u[p] !== E[g]; )
            g--;
          for (; p >= 1 && g >= 0; p--, g--)
            if (u[p] !== E[g]) {
              if (p !== 1 || g !== 1)
                do
                  if (p--, g--, g < 0 || u[p] !== E[g]) {
                    var _ = `
` + u[p].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, _), _;
                  }
                while (p >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = d, Ue(), Error.prepareStackTrace = c;
      }
      var D = e ? e.displayName || e.name : "", Se = D ? V(D) : "";
      return typeof e == "function" && N.set(e, Se), Se;
    }
    function qe(e, r, t) {
      return ve(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Je(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case O:
          return V("Suspense");
        case R:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return qe(e.render);
          case T:
            return M(e.type, r, t);
          case w: {
            var a = e, c = a._payload, d = a._init;
            try {
              return M(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, he = {}, pe = k.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ge(e, r, t, a, c) {
      {
        var d = Function.call.bind(B);
        for (var s in e)
          if (d(e, s)) {
            var u = void 0;
            try {
              if (typeof e[s] != "function") {
                var E = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              u = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              u = p;
            }
            u && !(u instanceof Error) && (L(c), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof u), L(null)), u instanceof Error && !(u.message in he) && (he[u.message] = !0, L(c), b("Failed %s type: %s", t, u.message), L(null));
          }
      }
    }
    var Xe = Array.isArray;
    function X(e) {
      return Xe(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ke(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), me(e);
    }
    var I = k.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be, H;
    H = {};
    function Qe(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = x(I.current.type);
        H[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(I.current.type), e.ref), H[t] = !0);
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          be || (be = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, a, c, d, s) {
      var u = {
        $$typeof: i,
        type: e,
        key: r,
        ref: t,
        props: s,
        _owner: d
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function ir(e, r, t, a, c) {
      {
        var d, s = {}, u = null, E = null;
        t !== void 0 && (ge(t), u = "" + t), er(r) && (ge(r.key), u = "" + r.key), Qe(r) && (E = r.ref, rr(r, c));
        for (d in r)
          B.call(r, d) && !Ze.hasOwnProperty(d) && (s[d] = r[d]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (d in p)
            s[d] === void 0 && (s[d] = p[d]);
        }
        if (u || E) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && tr(s, g), E && nr(s, g);
        }
        return ar(e, u, E, c, a, I.current, s);
      }
    }
    var K = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Ce() {
      {
        if (K.current) {
          var e = x(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function ur(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + x(e._owner.type) + "."), j(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), j(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Q(a) && _e(a, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Ae(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), s; !(s = d.next()).done; )
              Q(s.value) && _e(s.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = x(r);
          Ge(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var c = x(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            j(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function xe(e, r, t, a, c, d) {
      {
        var s = Me(e);
        if (!s) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = or(c);
          E ? u += E : u += Ce();
          var p;
          e === null ? p = "null" : X(e) ? p = "array" : e !== void 0 && e.$$typeof === i ? (p = "<" + (x(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, u);
        }
        var g = ir(e, r, t, c, d);
        if (g == null)
          return g;
        if (s) {
          var _ = r.children;
          if (_ !== void 0)
            if (a)
              if (X(_)) {
                for (var D = 0; D < _.length; D++)
                  Te(_[D], e);
                Object.freeze && Object.freeze(_);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(_, e);
        }
        return e === l ? sr(g) : lr(g), g;
      }
    }
    function cr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function fr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var dr = fr, vr = cr;
    $.Fragment = l, $.jsx = dr, $.jsxs = vr;
  }()), $;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Cr() : n.exports = Rr();
})(z);
const ee = z.exports.Fragment, f = z.exports.jsx, F = z.exports.jsxs, U = {
  option(n) {
    return "options" in n;
  },
  numberSlider(n) {
    return "min" in n && "max" in n;
  },
  number(n) {
    return typeof n.default == "number" || n.type === "number";
  },
  boolean(n) {
    return typeof n.default == "boolean" || n.type === "boolean";
  }
}, _r = ({
  itemKey: n,
  control: i,
  onChange: o
}) => {
  var y;
  const l = {
    id: n,
    defaultValue: i.default
  }, v = (h) => o({
    key: n,
    value: h
  });
  return U.option(i) ? /* @__PURE__ */ f("select", {
    ...l,
    onChange: (h) => v(h.currentTarget.value),
    children: i.options.map((h) => /* @__PURE__ */ f("option", {
      children: h
    }, h))
  }) : U.numberSlider(i) ? /* @__PURE__ */ f("input", {
    type: "range",
    step: i.step,
    min: i.min,
    max: i.max,
    onChange: (h) => {
      v(h.currentTarget.value);
    },
    ...l,
    defaultValue: i.default
  }) : U.number(i) ? /* @__PURE__ */ f("input", {
    type: "number",
    step: i.step,
    min: i.min,
    max: i.max,
    onChange: (h) => {
      v(h.currentTarget.value);
    },
    ...l,
    defaultValue: i.default
  }) : U.boolean(i) ? /* @__PURE__ */ f("input", {
    type: "checkbox",
    ...l,
    onChange: (h) => {
      v(h.currentTarget.checked);
    }
  }) : /* @__PURE__ */ f("input", {
    ...l,
    defaultValue: (y = i.default) == null ? void 0 : y.toString(),
    onChange: (h) => v(h.currentTarget.value)
  });
}, Tr = (n) => /* @__PURE__ */ f("div", {
  style: {
    display: "grid",
    gap: "4px",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    border: "solid rgba(0, 0, 0, 0.1)",
    padding: "16px"
  },
  children: Object.entries(n.controls).map(([i, o]) => /* @__PURE__ */ F("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/* @__PURE__ */ f("label", {
      htmlFor: i,
      children: i
    }), /* @__PURE__ */ f(_r, {
      itemKey: i,
      control: o,
      onChange: n.onChange
    })]
  }, i))
}), xr = (n) => {
  const [i, o] = re(n.controls ? Object.fromEntries(Object.entries(n.controls).filter(([l, v]) => "default" in v).map(([l, v]) => [l, v.default])) : {});
  return /* @__PURE__ */ F(ee, {
    children: [/* @__PURE__ */ f("div", {
      style: {
        fontFamily: "revert"
      },
      children: /* @__PURE__ */ f(n.children, {
        args: i
      })
    }), n.controls && /* @__PURE__ */ f(Tr, {
      controls: n.controls,
      onChange: (l) => {
        o((v) => ({
          ...v,
          [l.key]: l.value
        }));
      }
    })]
  });
};
const ke = (n) => n.name || n.key, De = (n) => {
  const [i, o] = re(!0);
  return /* @__PURE__ */ F("div", {
    children: [/* @__PURE__ */ F("div", {
      onClick: () => o((l) => !l),
      children: [/* @__PURE__ */ f("span", {
        style: {
          fontWeight: 600
        },
        children: i ? "\u2191" : "\u2193"
      }), " ", ke(n.items)]
    }), i && /* @__PURE__ */ f("ul", {
      style: {
        margin: "0px"
      },
      children: n.items.child.map((l) => {
        var v, y;
        return (v = l.meta) != null && v.isDirectory ? /* @__PURE__ */ f(De, {
          items: l,
          onClick: n.onClick
        }, l.meta.rawPath) : /* @__PURE__ */ f("li", {
          onClick: () => {
            var h, C;
            (h = l.meta) != null && h.rawPath && ((C = n.onClick) == null || C.call(n, l.meta.rawPath));
          },
          children: ke(l)
        }, (y = l.meta) == null ? void 0 : y.rawPath);
      })
    })]
  });
}, Sr = (n) => /* @__PURE__ */ f("div", {
  style: {
    padding: "16px",
    borderRight: "solid rgba(0, 0, 0, 0.1)",
    fontFamily: "SUIT",
    fontSize: "14px",
    width: "160px",
    overflowX: "auto"
  },
  children: /* @__PURE__ */ f(De, {
    items: n.items,
    onClick: n.onClick
  })
});
class Or extends mr {
  constructor(o) {
    super(o);
    Oe(this, "state", {
      error: void 0
    });
  }
  static getDerivedStateFromError(o) {
    return {
      error: o
    };
  }
  render() {
    const {
      error: o
    } = this.state;
    return o ? o instanceof Error ? /* @__PURE__ */ F("div", {
      children: [/* @__PURE__ */ f("h2", {
        children: o.name
      }), /* @__PURE__ */ f("p", {
        children: o.message
      }), /* @__PURE__ */ f("p", {
        children: o.stack
      })]
    }) : /* @__PURE__ */ f("div", {
      children: /* @__PURE__ */ f("p", {
        children: "\uC624\uB958\uB85C \uD398\uC774\uC9C0\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uCF58\uC194\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694."
      })
    }) : this.props.children;
  }
}
function wr(n) {
  var o;
  const i = {
    key: "ROOT",
    name: "Components",
    child: [],
    meta: {
      isDirectory: !0,
      rawPath: "/"
    }
  };
  for (const l of n) {
    const v = l.split("/");
    let y = i;
    for (const C of v.slice(0, -1)) {
      let m = (o = y.child) == null ? void 0 : o.find((O) => O.key === C);
      m || (m = {
        key: C,
        child: [],
        meta: {
          isDirectory: !0,
          rawPath: l
        }
      }, y.child.push(m)), y = m;
    }
    const h = {
      key: v[v.length - 1],
      child: [],
      meta: {
        rawPath: l
      }
    };
    y.child = [...y.child, h];
  }
  return i;
}
function jr({
  components: n
}) {
  const i = wr(Object.keys(n)), [o, l] = re(location.hash.slice(1));
  gr(() => {
    location.hash = o;
  }, [o]);
  const v = yr(() => o ? br(() => import(
    /* @vite-ignore */
    o
  )) : () => /* @__PURE__ */ f(ee, {}), [o]);
  return /* @__PURE__ */ F("div", {
    style: {
      display: "flex",
      height: "100vh"
    },
    children: [/* @__PURE__ */ f(Sr, {
      items: i.child[0].child[0],
      onClick: l
    }), /* @__PURE__ */ f("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        height: "100vh",
        overflowY: "scroll",
        boxSizing: "border-box",
        fontFamily: "SUIT",
        fontSize: "16px"
      },
      children: /* @__PURE__ */ f(Or, {
        children: /* @__PURE__ */ f(Er, {
          fallback: /* @__PURE__ */ f(ee, {}),
          children: /* @__PURE__ */ f(v, {
            components: {
              Namisa: xr
            }
          })
        })
      })
    })]
  });
}
export {
  xr as Namisa,
  jr as Viewer
};
