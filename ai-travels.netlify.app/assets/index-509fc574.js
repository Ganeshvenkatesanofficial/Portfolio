(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var en =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function t0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var am = { exports: {} },
  ga = {},
  lm = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ms = Symbol.for("react.element"),
  n0 = Symbol.for("react.portal"),
  r0 = Symbol.for("react.fragment"),
  i0 = Symbol.for("react.strict_mode"),
  s0 = Symbol.for("react.profiler"),
  o0 = Symbol.for("react.provider"),
  a0 = Symbol.for("react.context"),
  l0 = Symbol.for("react.forward_ref"),
  u0 = Symbol.for("react.suspense"),
  c0 = Symbol.for("react.memo"),
  d0 = Symbol.for("react.lazy"),
  vh = Symbol.iterator;
function h0(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (vh && t[vh]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var um = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  cm = Object.assign,
  dm = {};
function Qr(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = dm),
    (this.updater = n || um);
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Qr.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function hm() {}
hm.prototype = Qr.prototype;
function Sc(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = dm),
    (this.updater = n || um);
}
var Cc = (Sc.prototype = new hm());
Cc.constructor = Sc;
cm(Cc, Qr.prototype);
Cc.isPureReactComponent = !0;
var yh = Array.isArray,
  fm = Object.prototype.hasOwnProperty,
  Ic = { current: null },
  pm = { key: !0, ref: !0, __self: !0, __source: !0 };
function mm(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      fm.call(e, r) && !pm.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ms,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: Ic.current,
  };
}
function f0(t, e) {
  return {
    $$typeof: ms,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Tc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === ms;
}
function p0(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Eh = /\/+/g;
function Za(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? p0("" + t.key)
    : e.toString(36);
}
function to(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case ms:
          case n0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + Za(o, 0) : r),
      yh(i)
        ? ((n = ""),
          t != null && (n = t.replace(Eh, "$&/") + "/"),
          to(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Tc(i) &&
            (i = f0(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Eh, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), yh(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + Za(s, a);
      o += to(s, e, n, l, i);
    }
  else if (((l = h0(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + Za(s, a++)), (o += to(s, e, n, l, i));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ds(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    to(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function m0(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var De = { current: null },
  no = { transition: null },
  g0 = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: no,
    ReactCurrentOwner: Ic,
  };
j.Children = {
  map: Ds,
  forEach: function (t, e, n) {
    Ds(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Ds(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Ds(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Tc(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
j.Component = Qr;
j.Fragment = r0;
j.Profiler = s0;
j.PureComponent = Sc;
j.StrictMode = i0;
j.Suspense = u0;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g0;
j.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = cm({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Ic.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      fm.call(e, l) &&
        !pm.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ms, type: t.type, key: i, ref: s, props: r, _owner: o };
};
j.createContext = function (t) {
  return (
    (t = {
      $$typeof: a0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: o0, _context: t }),
    (t.Consumer = t)
  );
};
j.createElement = mm;
j.createFactory = function (t) {
  var e = mm.bind(null, t);
  return (e.type = t), e;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (t) {
  return { $$typeof: l0, render: t };
};
j.isValidElement = Tc;
j.lazy = function (t) {
  return { $$typeof: d0, _payload: { _status: -1, _result: t }, _init: m0 };
};
j.memo = function (t, e) {
  return { $$typeof: c0, type: t, compare: e === void 0 ? null : e };
};
j.startTransition = function (t) {
  var e = no.transition;
  no.transition = {};
  try {
    t();
  } finally {
    no.transition = e;
  }
};
j.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
j.useCallback = function (t, e) {
  return De.current.useCallback(t, e);
};
j.useContext = function (t) {
  return De.current.useContext(t);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (t) {
  return De.current.useDeferredValue(t);
};
j.useEffect = function (t, e) {
  return De.current.useEffect(t, e);
};
j.useId = function () {
  return De.current.useId();
};
j.useImperativeHandle = function (t, e, n) {
  return De.current.useImperativeHandle(t, e, n);
};
j.useInsertionEffect = function (t, e) {
  return De.current.useInsertionEffect(t, e);
};
j.useLayoutEffect = function (t, e) {
  return De.current.useLayoutEffect(t, e);
};
j.useMemo = function (t, e) {
  return De.current.useMemo(t, e);
};
j.useReducer = function (t, e, n) {
  return De.current.useReducer(t, e, n);
};
j.useRef = function (t) {
  return De.current.useRef(t);
};
j.useState = function (t) {
  return De.current.useState(t);
};
j.useSyncExternalStore = function (t, e, n) {
  return De.current.useSyncExternalStore(t, e, n);
};
j.useTransition = function () {
  return De.current.useTransition();
};
j.version = "18.2.0";
lm.exports = j;
var U = lm.exports;
const _0 = t0(U);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var v0 = U,
  y0 = Symbol.for("react.element"),
  E0 = Symbol.for("react.fragment"),
  w0 = Object.prototype.hasOwnProperty,
  S0 = v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  C0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function gm(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) w0.call(e, r) && !C0.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: y0,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: S0.current,
  };
}
ga.Fragment = E0;
ga.jsx = gm;
ga.jsxs = gm;
am.exports = ga;
var E = am.exports,
  su = {},
  _m = { exports: {} },
  Ye = {},
  vm = { exports: {} },
  ym = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(R, b) {
    var D = R.length;
    R.push(b);
    e: for (; 0 < D; ) {
      var ne = (D - 1) >>> 1,
        fe = R[ne];
      if (0 < i(fe, b)) (R[ne] = b), (R[D] = fe), (D = ne);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var b = R[0],
      D = R.pop();
    if (D !== b) {
      R[0] = D;
      e: for (var ne = 0, fe = R.length, xs = fe >>> 1; ne < xs; ) {
        var Rn = 2 * (ne + 1) - 1,
          Xa = R[Rn],
          Pn = Rn + 1,
          bs = R[Pn];
        if (0 > i(Xa, D))
          Pn < fe && 0 > i(bs, Xa)
            ? ((R[ne] = bs), (R[Pn] = D), (ne = Pn))
            : ((R[ne] = Xa), (R[Rn] = D), (ne = Rn));
        else if (Pn < fe && 0 > i(bs, D)) (R[ne] = bs), (R[Pn] = D), (ne = Pn);
        else break e;
      }
    }
    return b;
  }
  function i(R, b) {
    var D = R.sortIndex - b.sortIndex;
    return D !== 0 ? D : R.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    c = null,
    h = 3,
    f = !1,
    p = !1,
    _ = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= R)
        r(u), (b.sortIndex = b.expirationTime), e(l, b);
      else break;
      b = n(u);
    }
  }
  function y(R) {
    if (((_ = !1), v(R), !p))
      if (n(l) !== null) (p = !0), ai(I);
      else {
        var b = n(u);
        b !== null && li(y, b.startTime - R);
      }
  }
  function I(R, b) {
    (p = !1), _ && ((_ = !1), g(O), (O = -1)), (f = !0);
    var D = h;
    try {
      for (
        v(b), c = n(l);
        c !== null && (!(c.expirationTime > b) || (R && !ae()));

      ) {
        var ne = c.callback;
        if (typeof ne == "function") {
          (c.callback = null), (h = c.priorityLevel);
          var fe = ne(c.expirationTime <= b);
          (b = t.unstable_now()),
            typeof fe == "function" ? (c.callback = fe) : c === n(l) && r(l),
            v(b);
        } else r(l);
        c = n(l);
      }
      if (c !== null) var xs = !0;
      else {
        var Rn = n(u);
        Rn !== null && li(y, Rn.startTime - b), (xs = !1);
      }
      return xs;
    } finally {
      (c = null), (h = D), (f = !1);
    }
  }
  var T = !1,
    k = null,
    O = -1,
    z = 5,
    N = -1;
  function ae() {
    return !(t.unstable_now() - N < z);
  }
  function Ie() {
    if (k !== null) {
      var R = t.unstable_now();
      N = R;
      var b = !0;
      try {
        b = k(!0, R);
      } finally {
        b ? gt() : ((T = !1), (k = null));
      }
    } else T = !1;
  }
  var gt;
  if (typeof m == "function")
    gt = function () {
      m(Ie);
    };
  else if (typeof MessageChannel < "u") {
    var te = new MessageChannel(),
      ir = te.port2;
    (te.port1.onmessage = Ie),
      (gt = function () {
        ir.postMessage(null);
      });
  } else
    gt = function () {
      w(Ie, 0);
    };
  function ai(R) {
    (k = R), T || ((T = !0), gt());
  }
  function li(R, b) {
    O = w(function () {
      R(t.unstable_now());
    }, b);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      p || f || ((p = !0), ai(I));
    }),
    (t.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (R) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = h;
      }
      var D = h;
      h = b;
      try {
        return R();
      } finally {
        h = D;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (R, b) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var D = h;
      h = R;
      try {
        return b();
      } finally {
        h = D;
      }
    }),
    (t.unstable_scheduleCallback = function (R, b, D) {
      var ne = t.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? ne + D : ne))
          : (D = ne),
        R)
      ) {
        case 1:
          var fe = -1;
          break;
        case 2:
          fe = 250;
          break;
        case 5:
          fe = 1073741823;
          break;
        case 4:
          fe = 1e4;
          break;
        default:
          fe = 5e3;
      }
      return (
        (fe = D + fe),
        (R = {
          id: d++,
          callback: b,
          priorityLevel: R,
          startTime: D,
          expirationTime: fe,
          sortIndex: -1,
        }),
        D > ne
          ? ((R.sortIndex = D),
            e(u, R),
            n(l) === null &&
              R === n(u) &&
              (_ ? (g(O), (O = -1)) : (_ = !0), li(y, D - ne)))
          : ((R.sortIndex = fe), e(l, R), p || f || ((p = !0), ai(I))),
        R
      );
    }),
    (t.unstable_shouldYield = ae),
    (t.unstable_wrapCallback = function (R) {
      var b = h;
      return function () {
        var D = h;
        h = b;
        try {
          return R.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    });
})(ym);
vm.exports = ym;
var I0 = vm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em = U,
  Qe = I0;
function S(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var wm = new Set(),
  Bi = {};
function er(t, e) {
  Dr(t, e), Dr(t + "Capture", e);
}
function Dr(t, e) {
  for (Bi[t] = e, t = 0; t < e.length; t++) wm.add(e[t]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ou = Object.prototype.hasOwnProperty,
  T0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wh = {},
  Sh = {};
function k0(t) {
  return ou.call(Sh, t)
    ? !0
    : ou.call(wh, t)
    ? !1
    : T0.test(t)
    ? (Sh[t] = !0)
    : ((wh[t] = !0), !1);
}
function R0(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function P0(t, e, n, r) {
  if (e === null || typeof e > "u" || R0(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Le(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Se[t] = new Le(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Se[e] = new Le(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Se[t] = new Le(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Se[t] = new Le(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Se[t] = new Le(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Se[t] = new Le(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Se[t] = new Le(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Se[t] = new Le(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Se[t] = new Le(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var kc = /[\-:]([a-z])/g;
function Rc(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(kc, Rc);
    Se[e] = new Le(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(kc, Rc);
    Se[e] = new Le(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(kc, Rc);
  Se[e] = new Le(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Se[t] = new Le(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Se[t] = new Le(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Pc(t, e, n, r) {
  var i = Se.hasOwnProperty(e) ? Se[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (P0(e, n, i, r) && (n = null),
    r || i === null
      ? k0(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var zt = Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ls = Symbol.for("react.element"),
  ur = Symbol.for("react.portal"),
  cr = Symbol.for("react.fragment"),
  Oc = Symbol.for("react.strict_mode"),
  au = Symbol.for("react.profiler"),
  Sm = Symbol.for("react.provider"),
  Cm = Symbol.for("react.context"),
  Nc = Symbol.for("react.forward_ref"),
  lu = Symbol.for("react.suspense"),
  uu = Symbol.for("react.suspense_list"),
  Ac = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  Im = Symbol.for("react.offscreen"),
  Ch = Symbol.iterator;
function ui(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Ch && t[Ch]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var ee = Object.assign,
  el;
function wi(t) {
  if (el === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      el = (e && e[1]) || "";
    }
  return (
    `
` +
    el +
    t
  );
}
var tl = !1;
function nl(t, e) {
  if (!t || tl) return "";
  tl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (tl = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? wi(t) : "";
}
function O0(t) {
  switch (t.tag) {
    case 5:
      return wi(t.type);
    case 16:
      return wi("Lazy");
    case 13:
      return wi("Suspense");
    case 19:
      return wi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = nl(t.type, !1)), t;
    case 11:
      return (t = nl(t.type.render, !1)), t;
    case 1:
      return (t = nl(t.type, !0)), t;
    default:
      return "";
  }
}
function cu(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case cr:
      return "Fragment";
    case ur:
      return "Portal";
    case au:
      return "Profiler";
    case Oc:
      return "StrictMode";
    case lu:
      return "Suspense";
    case uu:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Cm:
        return (t.displayName || "Context") + ".Consumer";
      case Sm:
        return (t._context.displayName || "Context") + ".Provider";
      case Nc:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Ac:
        return (
          (e = t.displayName || null), e !== null ? e : cu(t.type) || "Memo"
        );
      case qt:
        (e = t._payload), (t = t._init);
        try {
          return cu(t(e));
        } catch {}
    }
  return null;
}
function N0(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return cu(e);
    case 8:
      return e === Oc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function _n(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Tm(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function A0(t) {
  var e = Tm(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Ms(t) {
  t._valueTracker || (t._valueTracker = A0(t));
}
function km(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = Tm(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Eo(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function du(t, e) {
  var n = e.checked;
  return ee({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Ih(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = _n(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Rm(t, e) {
  (e = e.checked), e != null && Pc(t, "checked", e, !1);
}
function hu(t, e) {
  Rm(t, e);
  var n = _n(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? fu(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && fu(t, e.type, _n(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Th(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function fu(t, e, n) {
  (e !== "number" || Eo(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Si = Array.isArray;
function Cr(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + _n(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function pu(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(S(91));
  return ee({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function kh(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(S(92));
      if (Si(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: _n(n) };
}
function Pm(t, e) {
  var n = _n(e.value),
    r = _n(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function Rh(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Om(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mu(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Om(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var Fs,
  Nm = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Fs = Fs || document.createElement("div"),
          Fs.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Fs.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function zi(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ri = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  x0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ri).forEach(function (t) {
  x0.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ri[e] = Ri[t]);
  });
});
function Am(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Ri.hasOwnProperty(t) && Ri[t])
    ? ("" + e).trim()
    : e + "px";
}
function xm(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Am(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var b0 = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function gu(t, e) {
  if (e) {
    if (b0[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(S(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(S(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(S(62));
  }
}
function _u(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var vu = null;
function xc(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var yu = null,
  Ir = null,
  Tr = null;
function Ph(t) {
  if ((t = vs(t))) {
    if (typeof yu != "function") throw Error(S(280));
    var e = t.stateNode;
    e && ((e = wa(e)), yu(t.stateNode, t.type, e));
  }
}
function bm(t) {
  Ir ? (Tr ? Tr.push(t) : (Tr = [t])) : (Ir = t);
}
function Dm() {
  if (Ir) {
    var t = Ir,
      e = Tr;
    if (((Tr = Ir = null), Ph(t), e)) for (t = 0; t < e.length; t++) Ph(e[t]);
  }
}
function Lm(t, e) {
  return t(e);
}
function Mm() {}
var rl = !1;
function Fm(t, e, n) {
  if (rl) return t(e, n);
  rl = !0;
  try {
    return Lm(t, e, n);
  } finally {
    (rl = !1), (Ir !== null || Tr !== null) && (Mm(), Dm());
  }
}
function Hi(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = wa(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(S(231, e, typeof n));
  return n;
}
var Eu = !1;
if (Mt)
  try {
    var ci = {};
    Object.defineProperty(ci, "passive", {
      get: function () {
        Eu = !0;
      },
    }),
      window.addEventListener("test", ci, ci),
      window.removeEventListener("test", ci, ci);
  } catch {
    Eu = !1;
  }
function D0(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Pi = !1,
  wo = null,
  So = !1,
  wu = null,
  L0 = {
    onError: function (t) {
      (Pi = !0), (wo = t);
    },
  };
function M0(t, e, n, r, i, s, o, a, l) {
  (Pi = !1), (wo = null), D0.apply(L0, arguments);
}
function F0(t, e, n, r, i, s, o, a, l) {
  if ((M0.apply(this, arguments), Pi)) {
    if (Pi) {
      var u = wo;
      (Pi = !1), (wo = null);
    } else throw Error(S(198));
    So || ((So = !0), (wu = u));
  }
}
function tr(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Um(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Oh(t) {
  if (tr(t) !== t) throw Error(S(188));
}
function U0(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = tr(t)), e === null)) throw Error(S(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Oh(i), t;
        if (s === r) return Oh(i), e;
        s = s.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? t : e;
}
function jm(t) {
  return (t = U0(t)), t !== null ? Vm(t) : null;
}
function Vm(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Vm(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Bm = Qe.unstable_scheduleCallback,
  Nh = Qe.unstable_cancelCallback,
  j0 = Qe.unstable_shouldYield,
  V0 = Qe.unstable_requestPaint,
  oe = Qe.unstable_now,
  B0 = Qe.unstable_getCurrentPriorityLevel,
  bc = Qe.unstable_ImmediatePriority,
  zm = Qe.unstable_UserBlockingPriority,
  Co = Qe.unstable_NormalPriority,
  z0 = Qe.unstable_LowPriority,
  Hm = Qe.unstable_IdlePriority,
  _a = null,
  Et = null;
function H0(t) {
  if (Et && typeof Et.onCommitFiberRoot == "function")
    try {
      Et.onCommitFiberRoot(_a, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : q0,
  W0 = Math.log,
  $0 = Math.LN2;
function q0(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((W0(t) / $0) | 0)) | 0;
}
var Us = 64,
  js = 4194304;
function Ci(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Io(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Ci(a)) : ((s &= o), s !== 0 && (r = Ci(s)));
  } else (o = n & ~i), o !== 0 ? (r = Ci(o)) : s !== 0 && (r = Ci(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - dt(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function G0(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function K0(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - dt(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = G0(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function Su(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Wm() {
  var t = Us;
  return (Us <<= 1), !(Us & 4194240) && (Us = 64), t;
}
function il(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function gs(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - dt(e)),
    (t[e] = n);
}
function Q0(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - dt(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function Dc(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - dt(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var H = 0;
function $m(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var qm,
  Lc,
  Gm,
  Km,
  Qm,
  Cu = !1,
  Vs = [],
  rn = null,
  sn = null,
  on = null,
  Wi = new Map(),
  $i = new Map(),
  Kt = [],
  Y0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ah(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      Wi.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $i.delete(e.pointerId);
  }
}
function di(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = vs(e)), e !== null && Lc(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function J0(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (rn = di(rn, t, e, n, r, i)), !0;
    case "dragenter":
      return (sn = di(sn, t, e, n, r, i)), !0;
    case "mouseover":
      return (on = di(on, t, e, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Wi.set(s, di(Wi.get(s) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), $i.set(s, di($i.get(s) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function Ym(t) {
  var e = bn(t.target);
  if (e !== null) {
    var n = tr(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Um(n)), e !== null)) {
          (t.blockedOn = e),
            Qm(t.priority, function () {
              Gm(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function ro(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Iu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vu = r), n.target.dispatchEvent(r), (vu = null);
    } else return (e = vs(n)), e !== null && Lc(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function xh(t, e, n) {
  ro(t) && n.delete(e);
}
function X0() {
  (Cu = !1),
    rn !== null && ro(rn) && (rn = null),
    sn !== null && ro(sn) && (sn = null),
    on !== null && ro(on) && (on = null),
    Wi.forEach(xh),
    $i.forEach(xh);
}
function hi(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Cu ||
      ((Cu = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, X0)));
}
function qi(t) {
  function e(i) {
    return hi(i, t);
  }
  if (0 < Vs.length) {
    hi(Vs[0], t);
    for (var n = 1; n < Vs.length; n++) {
      var r = Vs[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && hi(rn, t),
      sn !== null && hi(sn, t),
      on !== null && hi(on, t),
      Wi.forEach(e),
      $i.forEach(e),
      n = 0;
    n < Kt.length;
    n++
  )
    (r = Kt[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Kt.length && ((n = Kt[0]), n.blockedOn === null); )
    Ym(n), n.blockedOn === null && Kt.shift();
}
var kr = zt.ReactCurrentBatchConfig,
  To = !0;
function Z0(t, e, n, r) {
  var i = H,
    s = kr.transition;
  kr.transition = null;
  try {
    (H = 1), Mc(t, e, n, r);
  } finally {
    (H = i), (kr.transition = s);
  }
}
function eE(t, e, n, r) {
  var i = H,
    s = kr.transition;
  kr.transition = null;
  try {
    (H = 4), Mc(t, e, n, r);
  } finally {
    (H = i), (kr.transition = s);
  }
}
function Mc(t, e, n, r) {
  if (To) {
    var i = Iu(t, e, n, r);
    if (i === null) pl(t, e, r, ko, n), Ah(t, r);
    else if (J0(i, t, e, n, r)) r.stopPropagation();
    else if ((Ah(t, r), e & 4 && -1 < Y0.indexOf(t))) {
      for (; i !== null; ) {
        var s = vs(i);
        if (
          (s !== null && qm(s),
          (s = Iu(t, e, n, r)),
          s === null && pl(t, e, r, ko, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else pl(t, e, r, null, n);
  }
}
var ko = null;
function Iu(t, e, n, r) {
  if (((ko = null), (t = xc(r)), (t = bn(t)), t !== null))
    if (((e = tr(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Um(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (ko = t), null;
}
function Jm(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (B0()) {
        case bc:
          return 1;
        case zm:
          return 4;
        case Co:
        case z0:
          return 16;
        case Hm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  Fc = null,
  io = null;
function Xm() {
  if (io) return io;
  var t,
    e = Fc,
    n = e.length,
    r,
    i = "value" in tn ? tn.value : tn.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (io = i.slice(t, 1 < r ? 1 - r : void 0));
}
function so(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Bs() {
  return !0;
}
function bh() {
  return !1;
}
function Je(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Bs
        : bh),
      (this.isPropagationStopped = bh),
      this
    );
  }
  return (
    ee(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bs));
      },
      persist: function () {},
      isPersistent: Bs,
    }),
    e
  );
}
var Yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Uc = Je(Yr),
  _s = ee({}, Yr, { view: 0, detail: 0 }),
  tE = Je(_s),
  sl,
  ol,
  fi,
  va = ee({}, _s, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jc,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== fi &&
            (fi && t.type === "mousemove"
              ? ((sl = t.screenX - fi.screenX), (ol = t.screenY - fi.screenY))
              : (ol = sl = 0),
            (fi = t)),
          sl);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : ol;
    },
  }),
  Dh = Je(va),
  nE = ee({}, va, { dataTransfer: 0 }),
  rE = Je(nE),
  iE = ee({}, _s, { relatedTarget: 0 }),
  al = Je(iE),
  sE = ee({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  oE = Je(sE),
  aE = ee({}, Yr, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  lE = Je(aE),
  uE = ee({}, Yr, { data: 0 }),
  Lh = Je(uE),
  cE = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  dE = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fE(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = hE[t]) ? !!e[t] : !1;
}
function jc() {
  return fE;
}
var pE = ee({}, _s, {
    key: function (t) {
      if (t.key) {
        var e = cE[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = so(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? dE[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jc,
    charCode: function (t) {
      return t.type === "keypress" ? so(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? so(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  mE = Je(pE),
  gE = ee({}, va, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Mh = Je(gE),
  _E = ee({}, _s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jc,
  }),
  vE = Je(_E),
  yE = ee({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  EE = Je(yE),
  wE = ee({}, va, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  SE = Je(wE),
  CE = [9, 13, 27, 32],
  Vc = Mt && "CompositionEvent" in window,
  Oi = null;
Mt && "documentMode" in document && (Oi = document.documentMode);
var IE = Mt && "TextEvent" in window && !Oi,
  Zm = Mt && (!Vc || (Oi && 8 < Oi && 11 >= Oi)),
  Fh = String.fromCharCode(32),
  Uh = !1;
function eg(t, e) {
  switch (t) {
    case "keyup":
      return CE.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function tg(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var dr = !1;
function TE(t, e) {
  switch (t) {
    case "compositionend":
      return tg(e);
    case "keypress":
      return e.which !== 32 ? null : ((Uh = !0), Fh);
    case "textInput":
      return (t = e.data), t === Fh && Uh ? null : t;
    default:
      return null;
  }
}
function kE(t, e) {
  if (dr)
    return t === "compositionend" || (!Vc && eg(t, e))
      ? ((t = Xm()), (io = Fc = tn = null), (dr = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Zm && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var RE = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!RE[t.type] : e === "textarea";
}
function ng(t, e, n, r) {
  bm(r),
    (e = Ro(e, "onChange")),
    0 < e.length &&
      ((n = new Uc("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var Ni = null,
  Gi = null;
function PE(t) {
  fg(t, 0);
}
function ya(t) {
  var e = pr(t);
  if (km(e)) return t;
}
function OE(t, e) {
  if (t === "change") return e;
}
var rg = !1;
if (Mt) {
  var ll;
  if (Mt) {
    var ul = "oninput" in document;
    if (!ul) {
      var Vh = document.createElement("div");
      Vh.setAttribute("oninput", "return;"),
        (ul = typeof Vh.oninput == "function");
    }
    ll = ul;
  } else ll = !1;
  rg = ll && (!document.documentMode || 9 < document.documentMode);
}
function Bh() {
  Ni && (Ni.detachEvent("onpropertychange", ig), (Gi = Ni = null));
}
function ig(t) {
  if (t.propertyName === "value" && ya(Gi)) {
    var e = [];
    ng(e, Gi, t, xc(t)), Fm(PE, e);
  }
}
function NE(t, e, n) {
  t === "focusin"
    ? (Bh(), (Ni = e), (Gi = n), Ni.attachEvent("onpropertychange", ig))
    : t === "focusout" && Bh();
}
function AE(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return ya(Gi);
}
function xE(t, e) {
  if (t === "click") return ya(e);
}
function bE(t, e) {
  if (t === "input" || t === "change") return ya(e);
}
function DE(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var pt = typeof Object.is == "function" ? Object.is : DE;
function Ki(t, e) {
  if (pt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ou.call(e, i) || !pt(t[i], e[i])) return !1;
  }
  return !0;
}
function zh(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Hh(t, e) {
  var n = zh(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zh(n);
  }
}
function sg(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? sg(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function og() {
  for (var t = window, e = Eo(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Eo(t.document);
  }
  return e;
}
function Bc(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function LE(t) {
  var e = og(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    sg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Bc(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Hh(n, s));
        var o = Hh(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var ME = Mt && "documentMode" in document && 11 >= document.documentMode,
  hr = null,
  Tu = null,
  Ai = null,
  ku = !1;
function Wh(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ku ||
    hr == null ||
    hr !== Eo(r) ||
    ((r = hr),
    "selectionStart" in r && Bc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ai && Ki(Ai, r)) ||
      ((Ai = r),
      (r = Ro(Tu, "onSelect")),
      0 < r.length &&
        ((e = new Uc("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = hr))));
}
function zs(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var fr = {
    animationend: zs("Animation", "AnimationEnd"),
    animationiteration: zs("Animation", "AnimationIteration"),
    animationstart: zs("Animation", "AnimationStart"),
    transitionend: zs("Transition", "TransitionEnd"),
  },
  cl = {},
  ag = {};
Mt &&
  ((ag = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fr.animationend.animation,
    delete fr.animationiteration.animation,
    delete fr.animationstart.animation),
  "TransitionEvent" in window || delete fr.transitionend.transition);
function Ea(t) {
  if (cl[t]) return cl[t];
  if (!fr[t]) return t;
  var e = fr[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in ag) return (cl[t] = e[n]);
  return t;
}
var lg = Ea("animationend"),
  ug = Ea("animationiteration"),
  cg = Ea("animationstart"),
  dg = Ea("transitionend"),
  hg = new Map(),
  $h =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Sn(t, e) {
  hg.set(t, e), er(e, [t]);
}
for (var dl = 0; dl < $h.length; dl++) {
  var hl = $h[dl],
    FE = hl.toLowerCase(),
    UE = hl[0].toUpperCase() + hl.slice(1);
  Sn(FE, "on" + UE);
}
Sn(lg, "onAnimationEnd");
Sn(ug, "onAnimationIteration");
Sn(cg, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(dg, "onTransitionEnd");
Dr("onMouseEnter", ["mouseout", "mouseover"]);
Dr("onMouseLeave", ["mouseout", "mouseover"]);
Dr("onPointerEnter", ["pointerout", "pointerover"]);
Dr("onPointerLeave", ["pointerout", "pointerover"]);
er(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
er(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
er(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
er(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
er(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ii =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));
function qh(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), F0(r, e, void 0, t), (t.currentTarget = null);
}
function fg(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          qh(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          qh(i, a, u), (s = l);
        }
    }
  }
  if (So) throw ((t = wu), (So = !1), (wu = null), t);
}
function K(t, e) {
  var n = e[Au];
  n === void 0 && (n = e[Au] = new Set());
  var r = t + "__bubble";
  n.has(r) || (pg(e, t, 2, !1), n.add(r));
}
function fl(t, e, n) {
  var r = 0;
  e && (r |= 4), pg(n, t, r, e);
}
var Hs = "_reactListening" + Math.random().toString(36).slice(2);
function Qi(t) {
  if (!t[Hs]) {
    (t[Hs] = !0),
      wm.forEach(function (n) {
        n !== "selectionchange" && (jE.has(n) || fl(n, !1, t), fl(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Hs] || ((e[Hs] = !0), fl("selectionchange", !1, e));
  }
}
function pg(t, e, n, r) {
  switch (Jm(e)) {
    case 1:
      var i = Z0;
      break;
    case 4:
      i = eE;
      break;
    default:
      i = Mc;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !Eu ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function pl(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = bn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Fm(function () {
    var u = s,
      d = xc(n),
      c = [];
    e: {
      var h = hg.get(t);
      if (h !== void 0) {
        var f = Uc,
          p = t;
        switch (t) {
          case "keypress":
            if (so(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = mE;
            break;
          case "focusin":
            (p = "focus"), (f = al);
            break;
          case "focusout":
            (p = "blur"), (f = al);
            break;
          case "beforeblur":
          case "afterblur":
            f = al;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = Dh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = rE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = vE;
            break;
          case lg:
          case ug:
          case cg:
            f = oE;
            break;
          case dg:
            f = EE;
            break;
          case "scroll":
            f = tE;
            break;
          case "wheel":
            f = SE;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = lE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Mh;
        }
        var _ = (e & 4) !== 0,
          w = !_ && t === "scroll",
          g = _ ? (h !== null ? h + "Capture" : null) : h;
        _ = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var y = v.stateNode;
          if (
            (v.tag === 5 &&
              y !== null &&
              ((v = y),
              g !== null && ((y = Hi(m, g)), y != null && _.push(Yi(m, y, v)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < _.length &&
          ((h = new f(h, p, null, n, d)), c.push({ event: h, listeners: _ }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((h = t === "mouseover" || t === "pointerover"),
          (f = t === "mouseout" || t === "pointerout"),
          h &&
            n !== vu &&
            (p = n.relatedTarget || n.fromElement) &&
            (bn(p) || p[Ft]))
        )
          break e;
        if (
          (f || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          f
            ? ((p = n.relatedTarget || n.toElement),
              (f = u),
              (p = p ? bn(p) : null),
              p !== null &&
                ((w = tr(p)), p !== w || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((f = null), (p = u)),
          f !== p)
        ) {
          if (
            ((_ = Dh),
            (y = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((_ = Mh),
              (y = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (w = f == null ? h : pr(f)),
            (v = p == null ? h : pr(p)),
            (h = new _(y, m + "leave", f, n, d)),
            (h.target = w),
            (h.relatedTarget = v),
            (y = null),
            bn(d) === u &&
              ((_ = new _(g, m + "enter", p, n, d)),
              (_.target = v),
              (_.relatedTarget = w),
              (y = _)),
            (w = y),
            f && p)
          )
            t: {
              for (_ = f, g = p, m = 0, v = _; v; v = sr(v)) m++;
              for (v = 0, y = g; y; y = sr(y)) v++;
              for (; 0 < m - v; ) (_ = sr(_)), m--;
              for (; 0 < v - m; ) (g = sr(g)), v--;
              for (; m--; ) {
                if (_ === g || (g !== null && _ === g.alternate)) break t;
                (_ = sr(_)), (g = sr(g));
              }
              _ = null;
            }
          else _ = null;
          f !== null && Gh(c, h, f, _, !1),
            p !== null && w !== null && Gh(c, w, p, _, !0);
        }
      }
      e: {
        if (
          ((h = u ? pr(u) : window),
          (f = h.nodeName && h.nodeName.toLowerCase()),
          f === "select" || (f === "input" && h.type === "file"))
        )
          var I = OE;
        else if (jh(h))
          if (rg) I = bE;
          else {
            I = AE;
            var T = NE;
          }
        else
          (f = h.nodeName) &&
            f.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (I = xE);
        if (I && (I = I(t, u))) {
          ng(c, I, n, d);
          break e;
        }
        T && T(t, h, u),
          t === "focusout" &&
            (T = h._wrapperState) &&
            T.controlled &&
            h.type === "number" &&
            fu(h, "number", h.value);
      }
      switch (((T = u ? pr(u) : window), t)) {
        case "focusin":
          (jh(T) || T.contentEditable === "true") &&
            ((hr = T), (Tu = u), (Ai = null));
          break;
        case "focusout":
          Ai = Tu = hr = null;
          break;
        case "mousedown":
          ku = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ku = !1), Wh(c, n, d);
          break;
        case "selectionchange":
          if (ME) break;
        case "keydown":
        case "keyup":
          Wh(c, n, d);
      }
      var k;
      if (Vc)
        e: {
          switch (t) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        dr
          ? eg(t, n) && (O = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (Zm &&
          n.locale !== "ko" &&
          (dr || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && dr && (k = Xm())
            : ((tn = d),
              (Fc = "value" in tn ? tn.value : tn.textContent),
              (dr = !0))),
        (T = Ro(u, O)),
        0 < T.length &&
          ((O = new Lh(O, t, null, n, d)),
          c.push({ event: O, listeners: T }),
          k ? (O.data = k) : ((k = tg(n)), k !== null && (O.data = k)))),
        (k = IE ? TE(t, n) : kE(t, n)) &&
          ((u = Ro(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Lh("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = k)));
    }
    fg(c, e);
  });
}
function Yi(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ro(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Hi(t, n)),
      s != null && r.unshift(Yi(t, s, i)),
      (s = Hi(t, e)),
      s != null && r.push(Yi(t, s, i))),
      (t = t.return);
  }
  return r;
}
function sr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Gh(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Hi(n, s)), l != null && o.unshift(Yi(n, l, a)))
        : i || ((l = Hi(n, s)), l != null && o.push(Yi(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var VE = /\r\n?/g,
  BE = /\u0000|\uFFFD/g;
function Kh(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      VE,
      `
`
    )
    .replace(BE, "");
}
function Ws(t, e, n) {
  if (((e = Kh(e)), Kh(t) !== e && n)) throw Error(S(425));
}
function Po() {}
var Ru = null,
  Pu = null;
function Ou(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Nu = typeof setTimeout == "function" ? setTimeout : void 0,
  zE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qh = typeof Promise == "function" ? Promise : void 0,
  HE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qh < "u"
      ? function (t) {
          return Qh.resolve(null).then(t).catch(WE);
        }
      : Nu;
function WE(t) {
  setTimeout(function () {
    throw t;
  });
}
function ml(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), qi(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  qi(e);
}
function an(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Yh(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Jr = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + Jr,
  Ji = "__reactProps$" + Jr,
  Ft = "__reactContainer$" + Jr,
  Au = "__reactEvents$" + Jr,
  $E = "__reactListeners$" + Jr,
  qE = "__reactHandles$" + Jr;
function bn(t) {
  var e = t[yt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Ft] || n[yt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Yh(t); t !== null; ) {
          if ((n = t[yt])) return n;
          t = Yh(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function vs(t) {
  return (
    (t = t[yt] || t[Ft]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function pr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(S(33));
}
function wa(t) {
  return t[Ji] || null;
}
var xu = [],
  mr = -1;
function Cn(t) {
  return { current: t };
}
function Y(t) {
  0 > mr || ((t.current = xu[mr]), (xu[mr] = null), mr--);
}
function G(t, e) {
  mr++, (xu[mr] = t.current), (t.current = e);
}
var vn = {},
  Oe = Cn(vn),
  je = Cn(!1),
  zn = vn;
function Lr(t, e) {
  var n = t.type.contextTypes;
  if (!n) return vn;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ve(t) {
  return (t = t.childContextTypes), t != null;
}
function Oo() {
  Y(je), Y(Oe);
}
function Jh(t, e, n) {
  if (Oe.current !== vn) throw Error(S(168));
  G(Oe, e), G(je, n);
}
function mg(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(S(108, N0(t) || "Unknown", i));
  return ee({}, n, r);
}
function No(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || vn),
    (zn = Oe.current),
    G(Oe, t),
    G(je, je.current),
    !0
  );
}
function Xh(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((t = mg(t, e, zn)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      Y(je),
      Y(Oe),
      G(Oe, t))
    : Y(je),
    G(je, n);
}
var Pt = null,
  Sa = !1,
  gl = !1;
function gg(t) {
  Pt === null ? (Pt = [t]) : Pt.push(t);
}
function GE(t) {
  (Sa = !0), gg(t);
}
function In() {
  if (!gl && Pt !== null) {
    gl = !0;
    var t = 0,
      e = H;
    try {
      var n = Pt;
      for (H = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (Sa = !1);
    } catch (i) {
      throw (Pt !== null && (Pt = Pt.slice(t + 1)), Bm(bc, In), i);
    } finally {
      (H = e), (gl = !1);
    }
  }
  return null;
}
var gr = [],
  _r = 0,
  Ao = null,
  xo = 0,
  Xe = [],
  Ze = 0,
  Hn = null,
  Ot = 1,
  Nt = "";
function On(t, e) {
  (gr[_r++] = xo), (gr[_r++] = Ao), (Ao = t), (xo = e);
}
function _g(t, e, n) {
  (Xe[Ze++] = Ot), (Xe[Ze++] = Nt), (Xe[Ze++] = Hn), (Hn = t);
  var r = Ot;
  t = Nt;
  var i = 32 - dt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - dt(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Ot = (1 << (32 - dt(e) + i)) | (n << i) | r),
      (Nt = s + t);
  } else (Ot = (1 << s) | (n << i) | r), (Nt = t);
}
function zc(t) {
  t.return !== null && (On(t, 1), _g(t, 1, 0));
}
function Hc(t) {
  for (; t === Ao; )
    (Ao = gr[--_r]), (gr[_r] = null), (xo = gr[--_r]), (gr[_r] = null);
  for (; t === Hn; )
    (Hn = Xe[--Ze]),
      (Xe[Ze] = null),
      (Nt = Xe[--Ze]),
      (Xe[Ze] = null),
      (Ot = Xe[--Ze]),
      (Xe[Ze] = null);
}
var Ke = null,
  Ge = null,
  J = !1,
  at = null;
function vg(t, e) {
  var n = et(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Zh(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Ke = t), (Ge = an(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Ke = t), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Hn !== null ? { id: Ot, overflow: Nt } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = et(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Ke = t),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bu(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Du(t) {
  if (J) {
    var e = Ge;
    if (e) {
      var n = e;
      if (!Zh(t, e)) {
        if (bu(t)) throw Error(S(418));
        e = an(n.nextSibling);
        var r = Ke;
        e && Zh(t, e)
          ? vg(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (J = !1), (Ke = t));
      }
    } else {
      if (bu(t)) throw Error(S(418));
      (t.flags = (t.flags & -4097) | 2), (J = !1), (Ke = t);
    }
  }
}
function ef(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Ke = t;
}
function $s(t) {
  if (t !== Ke) return !1;
  if (!J) return ef(t), (J = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Ou(t.type, t.memoizedProps))),
    e && (e = Ge))
  ) {
    if (bu(t)) throw (yg(), Error(S(418)));
    for (; e; ) vg(t, e), (e = an(e.nextSibling));
  }
  if ((ef(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(S(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Ge = an(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Ke ? an(t.stateNode.nextSibling) : null;
  return !0;
}
function yg() {
  for (var t = Ge; t; ) t = an(t.nextSibling);
}
function Mr() {
  (Ge = Ke = null), (J = !1);
}
function Wc(t) {
  at === null ? (at = [t]) : at.push(t);
}
var KE = zt.ReactCurrentBatchConfig;
function st(t, e) {
  if (t && t.defaultProps) {
    (e = ee({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var bo = Cn(null),
  Do = null,
  vr = null,
  $c = null;
function qc() {
  $c = vr = Do = null;
}
function Gc(t) {
  var e = bo.current;
  Y(bo), (t._currentValue = e);
}
function Lu(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Rr(t, e) {
  (Do = t),
    ($c = vr = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (Fe = !0), (t.firstContext = null));
}
function nt(t) {
  var e = t._currentValue;
  if ($c !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), vr === null)) {
      if (Do === null) throw Error(S(308));
      (vr = t), (Do.dependencies = { lanes: 0, firstContext: t });
    } else vr = vr.next = t;
  return e;
}
var Dn = null;
function Kc(t) {
  Dn === null ? (Dn = [t]) : Dn.push(t);
}
function Eg(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), Kc(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    Ut(t, r)
  );
}
function Ut(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function Qc(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wg(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Dt(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ln(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      Ut(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Kc(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Ut(t, n)
  );
}
function oo(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Dc(t, n);
  }
}
function tf(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Lo(t, e, n, r) {
  var i = t.updateQueue;
  Gt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var d = t.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var c = i.baseState;
    (o = 0), (d = u = l = null), (a = s);
    do {
      var h = a.lane,
        f = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: f,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = t,
            _ = a;
          switch (((h = e), (f = n), _.tag)) {
            case 1:
              if (((p = _.payload), typeof p == "function")) {
                c = p.call(f, c, h);
                break e;
              }
              c = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = _.payload),
                (h = typeof p == "function" ? p.call(f, c, h) : p),
                h == null)
              )
                break e;
              c = ee({}, c, h);
              break e;
            case 2:
              Gt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (f = {
          eventTime: f,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = f), (l = c)) : (d = d.next = f),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (l = c),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    ($n |= o), (t.lanes = o), (t.memoizedState = c);
  }
}
function nf(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var Sg = new Em.Component().refs;
function Mu(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : ee({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Ca = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? tr(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = be(),
      i = cn(t),
      s = Dt(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = ln(t, s, i)),
      e !== null && (ht(e, t, i, r), oo(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = be(),
      i = cn(t),
      s = Dt(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = ln(t, s, i)),
      e !== null && (ht(e, t, i, r), oo(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = be(),
      r = cn(t),
      i = Dt(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = ln(t, i, r)),
      e !== null && (ht(e, t, r, n), oo(e, t, r));
  },
};
function rf(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Ki(n, r) || !Ki(i, s)
      : !0
  );
}
function Cg(t, e, n) {
  var r = !1,
    i = vn,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = nt(s))
      : ((i = Ve(e) ? zn : Oe.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? Lr(t, i) : vn)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Ca),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function sf(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Ca.enqueueReplaceState(e, e.state, null);
}
function Fu(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = Sg), Qc(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = nt(s))
    : ((s = Ve(e) ? zn : Oe.current), (i.context = Lr(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (Mu(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && Ca.enqueueReplaceState(i, i.state, null),
      Lo(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function pi(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            a === Sg && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, t));
  }
  return t;
}
function qs(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      S(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function of(t) {
  var e = t._init;
  return e(t._payload);
}
function Ig(t) {
  function e(g, m) {
    if (t) {
      var v = g.deletions;
      v === null ? ((g.deletions = [m]), (g.flags |= 16)) : v.push(m);
    }
  }
  function n(g, m) {
    if (!t) return null;
    for (; m !== null; ) e(g, m), (m = m.sibling);
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function i(g, m) {
    return (g = dn(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function s(g, m, v) {
    return (
      (g.index = v),
      t
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((g.flags |= 2), m) : v)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function o(g) {
    return t && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, m, v, y) {
    return m === null || m.tag !== 6
      ? ((m = Cl(v, g.mode, y)), (m.return = g), m)
      : ((m = i(m, v)), (m.return = g), m);
  }
  function l(g, m, v, y) {
    var I = v.type;
    return I === cr
      ? d(g, m, v.props.children, y, v.key)
      : m !== null &&
        (m.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === qt &&
            of(I) === m.type))
      ? ((y = i(m, v.props)), (y.ref = pi(g, m, v)), (y.return = g), y)
      : ((y = fo(v.type, v.key, v.props, null, g.mode, y)),
        (y.ref = pi(g, m, v)),
        (y.return = g),
        y);
  }
  function u(g, m, v, y) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = Il(v, g.mode, y)), (m.return = g), m)
      : ((m = i(m, v.children || [])), (m.return = g), m);
  }
  function d(g, m, v, y, I) {
    return m === null || m.tag !== 7
      ? ((m = jn(v, g.mode, y, I)), (m.return = g), m)
      : ((m = i(m, v)), (m.return = g), m);
  }
  function c(g, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Cl("" + m, g.mode, v)), (m.return = g), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ls:
          return (
            (v = fo(m.type, m.key, m.props, null, g.mode, v)),
            (v.ref = pi(g, null, m)),
            (v.return = g),
            v
          );
        case ur:
          return (m = Il(m, g.mode, v)), (m.return = g), m;
        case qt:
          var y = m._init;
          return c(g, y(m._payload), v);
      }
      if (Si(m) || ui(m))
        return (m = jn(m, g.mode, v, null)), (m.return = g), m;
      qs(g, m);
    }
    return null;
  }
  function h(g, m, v, y) {
    var I = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return I !== null ? null : a(g, m, "" + v, y);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ls:
          return v.key === I ? l(g, m, v, y) : null;
        case ur:
          return v.key === I ? u(g, m, v, y) : null;
        case qt:
          return (I = v._init), h(g, m, I(v._payload), y);
      }
      if (Si(v) || ui(v)) return I !== null ? null : d(g, m, v, y, null);
      qs(g, v);
    }
    return null;
  }
  function f(g, m, v, y, I) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (g = g.get(v) || null), a(m, g, "" + y, I);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ls:
          return (g = g.get(y.key === null ? v : y.key) || null), l(m, g, y, I);
        case ur:
          return (g = g.get(y.key === null ? v : y.key) || null), u(m, g, y, I);
        case qt:
          var T = y._init;
          return f(g, m, v, T(y._payload), I);
      }
      if (Si(y) || ui(y)) return (g = g.get(v) || null), d(m, g, y, I, null);
      qs(m, y);
    }
    return null;
  }
  function p(g, m, v, y) {
    for (
      var I = null, T = null, k = m, O = (m = 0), z = null;
      k !== null && O < v.length;
      O++
    ) {
      k.index > O ? ((z = k), (k = null)) : (z = k.sibling);
      var N = h(g, k, v[O], y);
      if (N === null) {
        k === null && (k = z);
        break;
      }
      t && k && N.alternate === null && e(g, k),
        (m = s(N, m, O)),
        T === null ? (I = N) : (T.sibling = N),
        (T = N),
        (k = z);
    }
    if (O === v.length) return n(g, k), J && On(g, O), I;
    if (k === null) {
      for (; O < v.length; O++)
        (k = c(g, v[O], y)),
          k !== null &&
            ((m = s(k, m, O)), T === null ? (I = k) : (T.sibling = k), (T = k));
      return J && On(g, O), I;
    }
    for (k = r(g, k); O < v.length; O++)
      (z = f(k, g, O, v[O], y)),
        z !== null &&
          (t && z.alternate !== null && k.delete(z.key === null ? O : z.key),
          (m = s(z, m, O)),
          T === null ? (I = z) : (T.sibling = z),
          (T = z));
    return (
      t &&
        k.forEach(function (ae) {
          return e(g, ae);
        }),
      J && On(g, O),
      I
    );
  }
  function _(g, m, v, y) {
    var I = ui(v);
    if (typeof I != "function") throw Error(S(150));
    if (((v = I.call(v)), v == null)) throw Error(S(151));
    for (
      var T = (I = null), k = m, O = (m = 0), z = null, N = v.next();
      k !== null && !N.done;
      O++, N = v.next()
    ) {
      k.index > O ? ((z = k), (k = null)) : (z = k.sibling);
      var ae = h(g, k, N.value, y);
      if (ae === null) {
        k === null && (k = z);
        break;
      }
      t && k && ae.alternate === null && e(g, k),
        (m = s(ae, m, O)),
        T === null ? (I = ae) : (T.sibling = ae),
        (T = ae),
        (k = z);
    }
    if (N.done) return n(g, k), J && On(g, O), I;
    if (k === null) {
      for (; !N.done; O++, N = v.next())
        (N = c(g, N.value, y)),
          N !== null &&
            ((m = s(N, m, O)), T === null ? (I = N) : (T.sibling = N), (T = N));
      return J && On(g, O), I;
    }
    for (k = r(g, k); !N.done; O++, N = v.next())
      (N = f(k, g, O, N.value, y)),
        N !== null &&
          (t && N.alternate !== null && k.delete(N.key === null ? O : N.key),
          (m = s(N, m, O)),
          T === null ? (I = N) : (T.sibling = N),
          (T = N));
    return (
      t &&
        k.forEach(function (Ie) {
          return e(g, Ie);
        }),
      J && On(g, O),
      I
    );
  }
  function w(g, m, v, y) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === cr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ls:
          e: {
            for (var I = v.key, T = m; T !== null; ) {
              if (T.key === I) {
                if (((I = v.type), I === cr)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (m = i(T, v.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  T.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === qt &&
                    of(I) === T.type)
                ) {
                  n(g, T.sibling),
                    (m = i(T, v.props)),
                    (m.ref = pi(g, T, v)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                n(g, T);
                break;
              } else e(g, T);
              T = T.sibling;
            }
            v.type === cr
              ? ((m = jn(v.props.children, g.mode, y, v.key)),
                (m.return = g),
                (g = m))
              : ((y = fo(v.type, v.key, v.props, null, g.mode, y)),
                (y.ref = pi(g, m, v)),
                (y.return = g),
                (g = y));
          }
          return o(g);
        case ur:
          e: {
            for (T = v.key; m !== null; ) {
              if (m.key === T)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(g, m.sibling),
                    (m = i(m, v.children || [])),
                    (m.return = g),
                    (g = m);
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else e(g, m);
              m = m.sibling;
            }
            (m = Il(v, g.mode, y)), (m.return = g), (g = m);
          }
          return o(g);
        case qt:
          return (T = v._init), w(g, m, T(v._payload), y);
      }
      if (Si(v)) return p(g, m, v, y);
      if (ui(v)) return _(g, m, v, y);
      qs(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = i(m, v)), (m.return = g), (g = m))
          : (n(g, m), (m = Cl(v, g.mode, y)), (m.return = g), (g = m)),
        o(g))
      : n(g, m);
  }
  return w;
}
var Fr = Ig(!0),
  Tg = Ig(!1),
  ys = {},
  wt = Cn(ys),
  Xi = Cn(ys),
  Zi = Cn(ys);
function Ln(t) {
  if (t === ys) throw Error(S(174));
  return t;
}
function Yc(t, e) {
  switch ((G(Zi, e), G(Xi, t), G(wt, ys), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : mu(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = mu(e, t));
  }
  Y(wt), G(wt, e);
}
function Ur() {
  Y(wt), Y(Xi), Y(Zi);
}
function kg(t) {
  Ln(Zi.current);
  var e = Ln(wt.current),
    n = mu(e, t.type);
  e !== n && (G(Xi, t), G(wt, n));
}
function Jc(t) {
  Xi.current === t && (Y(wt), Y(Xi));
}
var X = Cn(0);
function Mo(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var _l = [];
function Xc() {
  for (var t = 0; t < _l.length; t++)
    _l[t]._workInProgressVersionPrimary = null;
  _l.length = 0;
}
var ao = zt.ReactCurrentDispatcher,
  vl = zt.ReactCurrentBatchConfig,
  Wn = 0,
  Z = null,
  ue = null,
  me = null,
  Fo = !1,
  xi = !1,
  es = 0,
  QE = 0;
function Te() {
  throw Error(S(321));
}
function Zc(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!pt(t[n], e[n])) return !1;
  return !0;
}
function ed(t, e, n, r, i, s) {
  if (
    ((Wn = s),
    (Z = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (ao.current = t === null || t.memoizedState === null ? ZE : ew),
    (t = n(r, i)),
    xi)
  ) {
    s = 0;
    do {
      if (((xi = !1), (es = 0), 25 <= s)) throw Error(S(301));
      (s += 1),
        (me = ue = null),
        (e.updateQueue = null),
        (ao.current = tw),
        (t = n(r, i));
    } while (xi);
  }
  if (
    ((ao.current = Uo),
    (e = ue !== null && ue.next !== null),
    (Wn = 0),
    (me = ue = Z = null),
    (Fo = !1),
    e)
  )
    throw Error(S(300));
  return t;
}
function td() {
  var t = es !== 0;
  return (es = 0), t;
}
function vt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return me === null ? (Z.memoizedState = me = t) : (me = me.next = t), me;
}
function rt() {
  if (ue === null) {
    var t = Z.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = ue.next;
  var e = me === null ? Z.memoizedState : me.next;
  if (e !== null) (me = e), (ue = t);
  else {
    if (t === null) throw Error(S(310));
    (ue = t),
      (t = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      me === null ? (Z.memoizedState = me = t) : (me = me.next = t);
  }
  return me;
}
function ts(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function yl(t) {
  var e = rt(),
    n = e.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = t;
  var r = ue,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var d = u.lane;
      if ((Wn & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = c), (o = r)) : (l = l.next = c),
          (Z.lanes |= d),
          ($n |= d);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      pt(r, e.memoizedState) || (Fe = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (Z.lanes |= s), ($n |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function El(t) {
  var e = rt(),
    n = e.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    pt(s, e.memoizedState) || (Fe = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Rg() {}
function Pg(t, e) {
  var n = Z,
    r = rt(),
    i = e(),
    s = !pt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Fe = !0)),
    (r = r.queue),
    nd(Ag.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ns(9, Ng.bind(null, n, r, i, e), void 0, null),
      ve === null)
    )
      throw Error(S(349));
    Wn & 30 || Og(n, e, i);
  }
  return i;
}
function Og(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Z.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Z.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Ng(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), xg(e) && bg(t);
}
function Ag(t, e, n) {
  return n(function () {
    xg(e) && bg(t);
  });
}
function xg(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !pt(t, n);
  } catch {
    return !0;
  }
}
function bg(t) {
  var e = Ut(t, 1);
  e !== null && ht(e, t, 1, -1);
}
function af(t) {
  var e = vt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ts,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = XE.bind(null, Z, t)),
    [e.memoizedState, t]
  );
}
function ns(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Z.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Z.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function Dg() {
  return rt().memoizedState;
}
function lo(t, e, n, r) {
  var i = vt();
  (Z.flags |= t),
    (i.memoizedState = ns(1 | e, n, void 0, r === void 0 ? null : r));
}
function Ia(t, e, n, r) {
  var i = rt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ue !== null) {
    var o = ue.memoizedState;
    if (((s = o.destroy), r !== null && Zc(r, o.deps))) {
      i.memoizedState = ns(e, n, s, r);
      return;
    }
  }
  (Z.flags |= t), (i.memoizedState = ns(1 | e, n, s, r));
}
function lf(t, e) {
  return lo(8390656, 8, t, e);
}
function nd(t, e) {
  return Ia(2048, 8, t, e);
}
function Lg(t, e) {
  return Ia(4, 2, t, e);
}
function Mg(t, e) {
  return Ia(4, 4, t, e);
}
function Fg(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Ug(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), Ia(4, 4, Fg.bind(null, e, t), n)
  );
}
function rd() {}
function jg(t, e) {
  var n = rt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Zc(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function Vg(t, e) {
  var n = rt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Zc(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Bg(t, e, n) {
  return Wn & 21
    ? (pt(n, e) || ((n = Wm()), (Z.lanes |= n), ($n |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (Fe = !0)), (t.memoizedState = n));
}
function YE(t, e) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = vl.transition;
  vl.transition = {};
  try {
    t(!1), e();
  } finally {
    (H = n), (vl.transition = r);
  }
}
function zg() {
  return rt().memoizedState;
}
function JE(t, e, n) {
  var r = cn(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Hg(t))
  )
    Wg(e, n);
  else if (((n = Eg(t, e, n, r)), n !== null)) {
    var i = be();
    ht(n, t, r, i), $g(n, e, r);
  }
}
function XE(t, e, n) {
  var r = cn(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hg(t)) Wg(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), pt(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((i.next = i), Kc(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Eg(t, e, i, r)),
      n !== null && ((i = be()), ht(n, t, r, i), $g(n, e, r));
  }
}
function Hg(t) {
  var e = t.alternate;
  return t === Z || (e !== null && e === Z);
}
function Wg(t, e) {
  xi = Fo = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function $g(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Dc(t, n);
  }
}
var Uo = {
    readContext: nt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  ZE = {
    readContext: nt,
    useCallback: function (t, e) {
      return (vt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: nt,
    useEffect: lf,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        lo(4194308, 4, Fg.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return lo(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return lo(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = vt();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = vt();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = JE.bind(null, Z, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = vt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: af,
    useDebugValue: rd,
    useDeferredValue: function (t) {
      return (vt().memoizedState = t);
    },
    useTransition: function () {
      var t = af(!1),
        e = t[0];
      return (t = YE.bind(null, t[1])), (vt().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = Z,
        i = vt();
      if (J) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = e()), ve === null)) throw Error(S(349));
        Wn & 30 || Og(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        lf(Ag.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        ns(9, Ng.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = vt(),
        e = ve.identifierPrefix;
      if (J) {
        var n = Nt,
          r = Ot;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = es++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = QE++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  ew = {
    readContext: nt,
    useCallback: jg,
    useContext: nt,
    useEffect: nd,
    useImperativeHandle: Ug,
    useInsertionEffect: Lg,
    useLayoutEffect: Mg,
    useMemo: Vg,
    useReducer: yl,
    useRef: Dg,
    useState: function () {
      return yl(ts);
    },
    useDebugValue: rd,
    useDeferredValue: function (t) {
      var e = rt();
      return Bg(e, ue.memoizedState, t);
    },
    useTransition: function () {
      var t = yl(ts)[0],
        e = rt().memoizedState;
      return [t, e];
    },
    useMutableSource: Rg,
    useSyncExternalStore: Pg,
    useId: zg,
    unstable_isNewReconciler: !1,
  },
  tw = {
    readContext: nt,
    useCallback: jg,
    useContext: nt,
    useEffect: nd,
    useImperativeHandle: Ug,
    useInsertionEffect: Lg,
    useLayoutEffect: Mg,
    useMemo: Vg,
    useReducer: El,
    useRef: Dg,
    useState: function () {
      return El(ts);
    },
    useDebugValue: rd,
    useDeferredValue: function (t) {
      var e = rt();
      return ue === null ? (e.memoizedState = t) : Bg(e, ue.memoizedState, t);
    },
    useTransition: function () {
      var t = El(ts)[0],
        e = rt().memoizedState;
      return [t, e];
    },
    useMutableSource: Rg,
    useSyncExternalStore: Pg,
    useId: zg,
    unstable_isNewReconciler: !1,
  };
function jr(t, e) {
  try {
    var n = "",
      r = e;
    do (n += O0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function wl(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Uu(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var nw = typeof WeakMap == "function" ? WeakMap : Map;
function qg(t, e, n) {
  (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Vo || ((Vo = !0), (Ku = r)), Uu(t, e);
    }),
    n
  );
}
function Gg(t, e, n) {
  (n = Dt(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Uu(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Uu(t, e),
          typeof r != "function" &&
            (un === null ? (un = new Set([this])) : un.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function uf(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new nw();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = gw.bind(null, t, e, n)), e.then(t, t));
}
function cf(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function df(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Dt(-1, 1)), (e.tag = 2), ln(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var rw = zt.ReactCurrentOwner,
  Fe = !1;
function Ae(t, e, n, r) {
  e.child = t === null ? Tg(e, null, n, r) : Fr(e, t.child, n, r);
}
function hf(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    Rr(e, i),
    (r = ed(t, e, n, r, s, i)),
    (n = td()),
    t !== null && !Fe
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        jt(t, e, i))
      : (J && n && zc(e), (e.flags |= 1), Ae(t, e, r, i), e.child)
  );
}
function ff(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !dd(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Kg(t, e, s, r, i))
      : ((t = fo(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ki), n(o, r) && t.ref === e.ref)
    )
      return jt(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = dn(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Kg(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Ki(s, r) && t.ref === e.ref)
      if (((Fe = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (Fe = !0);
      else return (e.lanes = t.lanes), jt(t, e, i);
  }
  return ju(t, e, n, r, i);
}
function Qg(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(Er, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          G(Er, qe),
          (qe |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        G(Er, qe),
        (qe |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      G(Er, qe),
      (qe |= r);
  return Ae(t, e, i, n), e.child;
}
function Yg(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function ju(t, e, n, r, i) {
  var s = Ve(n) ? zn : Oe.current;
  return (
    (s = Lr(e, s)),
    Rr(e, i),
    (n = ed(t, e, n, r, s, i)),
    (r = td()),
    t !== null && !Fe
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        jt(t, e, i))
      : (J && r && zc(e), (e.flags |= 1), Ae(t, e, n, i), e.child)
  );
}
function pf(t, e, n, r, i) {
  if (Ve(n)) {
    var s = !0;
    No(e);
  } else s = !1;
  if ((Rr(e, i), e.stateNode === null))
    uo(t, e), Cg(e, n, r), Fu(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = nt(u))
      : ((u = Ve(n) ? zn : Oe.current), (u = Lr(e, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && sf(e, o, r, u)),
      (Gt = !1);
    var h = e.memoizedState;
    (o.state = h),
      Lo(e, r, o, i),
      (l = e.memoizedState),
      a !== r || h !== l || je.current || Gt
        ? (typeof d == "function" && (Mu(e, n, d, r), (l = e.memoizedState)),
          (a = Gt || rf(e, n, a, r, h, l, u))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      wg(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : st(e.type, a)),
      (o.props = u),
      (c = e.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = nt(l))
        : ((l = Ve(n) ? zn : Oe.current), (l = Lr(e, l)));
    var f = n.getDerivedStateFromProps;
    (d =
      typeof f == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== c || h !== l) && sf(e, o, r, l)),
      (Gt = !1),
      (h = e.memoizedState),
      (o.state = h),
      Lo(e, r, o, i);
    var p = e.memoizedState;
    a !== c || h !== p || je.current || Gt
      ? (typeof f == "function" && (Mu(e, n, f, r), (p = e.memoizedState)),
        (u = Gt || rf(e, n, u, r, h, p, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, p, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, p, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = p)),
        (o.props = r),
        (o.state = p),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Vu(t, e, n, r, s, i);
}
function Vu(t, e, n, r, i, s) {
  Yg(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && Xh(e, n, !1), jt(t, e, s);
  (r = e.stateNode), (rw.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Fr(e, t.child, null, s)), (e.child = Fr(e, null, a, s)))
      : Ae(t, e, a, s),
    (e.memoizedState = r.state),
    i && Xh(e, n, !0),
    e.child
  );
}
function Jg(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Jh(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Jh(t, e.context, !1),
    Yc(t, e.containerInfo);
}
function mf(t, e, n, r, i) {
  return Mr(), Wc(i), (e.flags |= 256), Ae(t, e, n, r), e.child;
}
var Bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function zu(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Xg(t, e, n) {
  var r = e.pendingProps,
    i = X.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    G(X, i & 1),
    t === null)
  )
    return (
      Du(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ra(o, r, 0, null)),
              (t = jn(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = zu(n)),
              (e.memoizedState = Bu),
              t)
            : id(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return iw(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = dn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = dn(a, s)) : ((s = jn(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? zu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Bu),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = dn(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function id(t, e) {
  return (
    (e = Ra({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Gs(t, e, n, r) {
  return (
    r !== null && Wc(r),
    Fr(e, t.child, null, n),
    (t = id(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function iw(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = wl(Error(S(422)))), Gs(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = Ra({ mode: "visible", children: r.children }, i, 0, null)),
        (s = jn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && Fr(e, t.child, null, o),
        (e.child.memoizedState = zu(o)),
        (e.memoizedState = Bu),
        s);
  if (!(e.mode & 1)) return Gs(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(S(419))), (r = wl(s, r, void 0)), Gs(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), Fe || a)) {
    if (((r = ve), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Ut(t, i), ht(r, t, i, -1));
    }
    return cd(), (r = wl(Error(S(421)))), Gs(t, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = _w.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (Ge = an(i.nextSibling)),
      (Ke = e),
      (J = !0),
      (at = null),
      t !== null &&
        ((Xe[Ze++] = Ot),
        (Xe[Ze++] = Nt),
        (Xe[Ze++] = Hn),
        (Ot = t.id),
        (Nt = t.overflow),
        (Hn = e)),
      (e = id(e, r.children)),
      (e.flags |= 4096),
      e);
}
function gf(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), Lu(t.return, e, n);
}
function Sl(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Zg(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ae(t, e, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && gf(t, n, e);
        else if (t.tag === 19) gf(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((G(X, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && Mo(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Sl(e, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && Mo(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        Sl(e, !0, n, null, s);
        break;
      case "together":
        Sl(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function uo(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function jt(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    ($n |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(S(153));
  if (e.child !== null) {
    for (
      t = e.child, n = dn(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = dn(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function sw(t, e, n) {
  switch (e.tag) {
    case 3:
      Jg(e), Mr();
      break;
    case 5:
      kg(e);
      break;
    case 1:
      Ve(e.type) && No(e);
      break;
    case 4:
      Yc(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      G(bo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(X, X.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? Xg(t, e, n)
          : (G(X, X.current & 1),
            (t = jt(t, e, n)),
            t !== null ? t.sibling : null);
      G(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Zg(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Qg(t, e, n);
  }
  return jt(t, e, n);
}
var e_, Hu, t_, n_;
e_ = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Hu = function () {};
t_ = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), Ln(wt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = du(t, i)), (r = du(t, r)), (s = []);
        break;
      case "select":
        (i = ee({}, i, { value: void 0 })),
          (r = ee({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = pu(t, i)), (r = pu(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = Po);
    }
    gu(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Bi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Bi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && K("scroll", t),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
n_ = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function mi(t, e) {
  if (!J)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ke(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function ow(t, e, n) {
  var r = e.pendingProps;
  switch ((Hc(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ke(e), null;
    case 1:
      return Ve(e.type) && Oo(), ke(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Ur(),
        Y(je),
        Y(Oe),
        Xc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          ($s(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), at !== null && (Ju(at), (at = null)))),
        Hu(t, e),
        ke(e),
        null
      );
    case 5:
      Jc(e);
      var i = Ln(Zi.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        t_(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(S(166));
          return ke(e), null;
        }
        if (((t = Ln(wt.current)), $s(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[yt] = e), (r[Ji] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ii.length; i++) K(Ii[i], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K("error", r), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Ih(r, s), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              kh(r, s), K("invalid", r);
          }
          gu(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ws(r.textContent, a, t),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ws(r.textContent, a, t),
                    (i = ["children", "" + a]))
                : Bi.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              Ms(r), Th(r, s, !0);
              break;
            case "textarea":
              Ms(r), Rh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Po);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Om(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[yt] = e),
            (t[Ji] = r),
            e_(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = _u(n, r)), n)) {
              case "dialog":
                K("cancel", t), K("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ii.length; i++) K(Ii[i], t);
                i = r;
                break;
              case "source":
                K("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                K("error", t), K("load", t), (i = r);
                break;
              case "details":
                K("toggle", t), (i = r);
                break;
              case "input":
                Ih(t, r), (i = du(t, r)), K("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ee({}, r, { value: void 0 })),
                  K("invalid", t);
                break;
              case "textarea":
                kh(t, r), (i = pu(t, r)), K("invalid", t);
                break;
              default:
                i = r;
            }
            gu(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? xm(t, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Nm(t, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && zi(t, l)
                    : typeof l == "number" && zi(t, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Bi.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && K("scroll", t)
                      : l != null && Pc(t, s, l, o));
              }
            switch (n) {
              case "input":
                Ms(t), Th(t, r, !1);
                break;
              case "textarea":
                Ms(t), Rh(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + _n(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Cr(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Cr(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = Po);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return ke(e), null;
    case 6:
      if (t && e.stateNode != null) n_(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(S(166));
        if (((n = Ln(Zi.current)), Ln(wt.current), $s(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[yt] = e),
            (s = r.nodeValue !== n) && ((t = Ke), t !== null))
          )
            switch (t.tag) {
              case 3:
                Ws(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ws(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = e),
            (e.stateNode = r);
      }
      return ke(e), null;
    case 13:
      if (
        (Y(X),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (J && Ge !== null && e.mode & 1 && !(e.flags & 128))
          yg(), Mr(), (e.flags |= 98560), (s = !1);
        else if (((s = $s(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(S(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(S(317));
            s[yt] = e;
          } else
            Mr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          ke(e), (s = !1);
        } else at !== null && (Ju(at), (at = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || X.current & 1 ? he === 0 && (he = 3) : cd())),
          e.updateQueue !== null && (e.flags |= 4),
          ke(e),
          null);
    case 4:
      return (
        Ur(), Hu(t, e), t === null && Qi(e.stateNode.containerInfo), ke(e), null
      );
    case 10:
      return Gc(e.type._context), ke(e), null;
    case 17:
      return Ve(e.type) && Oo(), ke(e), null;
    case 19:
      if ((Y(X), (s = e.memoizedState), s === null)) return ke(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) mi(s, !1);
        else {
          if (he !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Mo(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    mi(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return G(X, (X.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            oe() > Vr &&
            ((e.flags |= 128), (r = !0), mi(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = Mo(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              mi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !J)
            )
              return ke(e), null;
          } else
            2 * oe() - s.renderingStartTime > Vr &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), mi(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = oe()),
          (e.sibling = null),
          (n = X.current),
          G(X, r ? (n & 1) | 2 : n & 1),
          e)
        : (ke(e), null);
    case 22:
    case 23:
      return (
        ud(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? qe & 1073741824 && (ke(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : ke(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, e.tag));
}
function aw(t, e) {
  switch ((Hc(e), e.tag)) {
    case 1:
      return (
        Ve(e.type) && Oo(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Ur(),
        Y(je),
        Y(Oe),
        Xc(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Jc(e), null;
    case 13:
      if ((Y(X), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(S(340));
        Mr();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return Y(X), null;
    case 4:
      return Ur(), null;
    case 10:
      return Gc(e.type._context), null;
    case 22:
    case 23:
      return ud(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ks = !1,
  Re = !1,
  lw = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function yr(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(t, e, r);
      }
    else n.current = null;
}
function Wu(t, e, n) {
  try {
    n();
  } catch (r) {
    ie(t, e, r);
  }
}
var _f = !1;
function uw(t, e) {
  if (((Ru = To), (t = og()), Bc(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            c = t,
            h = null;
          t: for (;;) {
            for (
              var f;
              c !== n || (i !== 0 && c.nodeType !== 3) || (a = o + i),
                c !== s || (r !== 0 && c.nodeType !== 3) || (l = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (f = c.firstChild) !== null;

            )
              (h = c), (c = f);
            for (;;) {
              if (c === t) break t;
              if (
                (h === n && ++u === i && (a = o),
                h === s && ++d === r && (l = o),
                (f = c.nextSibling) !== null)
              )
                break;
              (c = h), (h = c.parentNode);
            }
            c = f;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Pu = { focusedElem: t, selectionRange: n }, To = !1, P = e; P !== null; )
    if (((e = P), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (P = t);
    else
      for (; P !== null; ) {
        e = P;
        try {
          var p = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var _ = p.memoizedProps,
                    w = p.memoizedState,
                    g = e.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? _ : st(e.type, _),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = e.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (y) {
          ie(e, e.return, y);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (P = t);
          break;
        }
        P = e.return;
      }
  return (p = _f), (_f = !1), p;
}
function bi(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Wu(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ta(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function $u(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function r_(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), r_(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[yt], delete e[Ji], delete e[Au], delete e[$E], delete e[qE])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function i_(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function vf(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || i_(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function qu(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Po));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (qu(t, e, n), t = t.sibling; t !== null; ) qu(t, e, n), (t = t.sibling);
}
function Gu(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Gu(t, e, n), t = t.sibling; t !== null; ) Gu(t, e, n), (t = t.sibling);
}
var ye = null,
  ot = !1;
function Wt(t, e, n) {
  for (n = n.child; n !== null; ) s_(t, e, n), (n = n.sibling);
}
function s_(t, e, n) {
  if (Et && typeof Et.onCommitFiberUnmount == "function")
    try {
      Et.onCommitFiberUnmount(_a, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || yr(n, e);
    case 6:
      var r = ye,
        i = ot;
      (ye = null),
        Wt(t, e, n),
        (ye = r),
        (ot = i),
        ye !== null &&
          (ot
            ? ((t = ye),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null &&
        (ot
          ? ((t = ye),
            (n = n.stateNode),
            t.nodeType === 8
              ? ml(t.parentNode, n)
              : t.nodeType === 1 && ml(t, n),
            qi(t))
          : ml(ye, n.stateNode));
      break;
    case 4:
      (r = ye),
        (i = ot),
        (ye = n.stateNode.containerInfo),
        (ot = !0),
        Wt(t, e, n),
        (ye = r),
        (ot = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Wu(n, e, o),
            (i = i.next);
        } while (i !== r);
      }
      Wt(t, e, n);
      break;
    case 1:
      if (
        !Re &&
        (yr(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ie(n, e, a);
        }
      Wt(t, e, n);
      break;
    case 21:
      Wt(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Wt(t, e, n), (Re = r))
        : Wt(t, e, n);
      break;
    default:
      Wt(t, e, n);
  }
}
function yf(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new lw()),
      e.forEach(function (r) {
        var i = vw.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function it(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ye = a.stateNode), (ot = !1);
              break e;
            case 3:
              (ye = a.stateNode.containerInfo), (ot = !0);
              break e;
            case 4:
              (ye = a.stateNode.containerInfo), (ot = !0);
              break e;
          }
          a = a.return;
        }
        if (ye === null) throw Error(S(160));
        s_(s, o, i), (ye = null), (ot = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ie(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) o_(e, t), (e = e.sibling);
}
function o_(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(e, t), _t(t), r & 4)) {
        try {
          bi(3, t, t.return), Ta(3, t);
        } catch (_) {
          ie(t, t.return, _);
        }
        try {
          bi(5, t, t.return);
        } catch (_) {
          ie(t, t.return, _);
        }
      }
      break;
    case 1:
      it(e, t), _t(t), r & 512 && n !== null && yr(n, n.return);
      break;
    case 5:
      if (
        (it(e, t),
        _t(t),
        r & 512 && n !== null && yr(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          zi(i, "");
        } catch (_) {
          ie(t, t.return, _);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Rm(i, s),
              _u(a, o);
            var u = _u(a, s);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                c = l[o + 1];
              d === "style"
                ? xm(i, c)
                : d === "dangerouslySetInnerHTML"
                ? Nm(i, c)
                : d === "children"
                ? zi(i, c)
                : Pc(i, d, c, u);
            }
            switch (a) {
              case "input":
                hu(i, s);
                break;
              case "textarea":
                Pm(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var f = s.value;
                f != null
                  ? Cr(i, !!s.multiple, f, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Cr(i, !!s.multiple, s.defaultValue, !0)
                      : Cr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Ji] = s;
          } catch (_) {
            ie(t, t.return, _);
          }
      }
      break;
    case 6:
      if ((it(e, t), _t(t), r & 4)) {
        if (t.stateNode === null) throw Error(S(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (_) {
          ie(t, t.return, _);
        }
      }
      break;
    case 3:
      if (
        (it(e, t), _t(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qi(e.containerInfo);
        } catch (_) {
          ie(t, t.return, _);
        }
      break;
    case 4:
      it(e, t), _t(t);
      break;
    case 13:
      it(e, t),
        _t(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ad = oe())),
        r & 4 && yf(t);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Re = (u = Re) || d), it(e, t), (Re = u)) : it(e, t),
        _t(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !d && t.mode & 1)
        )
          for (P = t, d = t.child; d !== null; ) {
            for (c = P = d; P !== null; ) {
              switch (((h = P), (f = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bi(4, h, h.return);
                  break;
                case 1:
                  yr(h, h.return);
                  var p = h.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (e = r),
                        (p.props = e.memoizedProps),
                        (p.state = e.memoizedState),
                        p.componentWillUnmount();
                    } catch (_) {
                      ie(r, n, _);
                    }
                  }
                  break;
                case 5:
                  yr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    wf(c);
                    continue;
                  }
              }
              f !== null ? ((f.return = h), (P = f)) : wf(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = t; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (i = c.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = c.stateNode),
                      (l = c.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Am("display", o)));
              } catch (_) {
                ie(t, t.return, _);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (_) {
                ie(t, t.return, _);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === t) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === t) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === t) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      it(e, t), _t(t), r & 4 && yf(t);
      break;
    case 21:
      break;
    default:
      it(e, t), _t(t);
  }
}
function _t(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (i_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (zi(i, ""), (r.flags &= -33));
          var s = vf(t);
          Gu(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = vf(t);
          qu(t, a, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (l) {
      ie(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function cw(t, e, n) {
  (P = t), a_(t);
}
function a_(t, e, n) {
  for (var r = (t.mode & 1) !== 0; P !== null; ) {
    var i = P,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ks;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Re;
        a = Ks;
        var u = Re;
        if (((Ks = o), (Re = l) && !u))
          for (P = i; P !== null; )
            (o = P),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Sf(i)
                : l !== null
                ? ((l.return = o), (P = l))
                : Sf(i);
        for (; s !== null; ) (P = s), a_(s), (s = s.sibling);
        (P = i), (Ks = a), (Re = u);
      }
      Ef(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (P = s)) : Ef(t);
  }
}
function Ef(t) {
  for (; P !== null; ) {
    var e = P;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Re || Ta(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : st(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = e.updateQueue;
              s !== null && nf(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                nf(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && qi(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        Re || (e.flags & 512 && $u(e));
      } catch (h) {
        ie(e, e.return, h);
      }
    }
    if (e === t) {
      P = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (P = n);
      break;
    }
    P = e.return;
  }
}
function wf(t) {
  for (; P !== null; ) {
    var e = P;
    if (e === t) {
      P = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (P = n);
      break;
    }
    P = e.return;
  }
}
function Sf(t) {
  for (; P !== null; ) {
    var e = P;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Ta(4, e);
          } catch (l) {
            ie(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ie(e, i, l);
            }
          }
          var s = e.return;
          try {
            $u(e);
          } catch (l) {
            ie(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            $u(e);
          } catch (l) {
            ie(e, o, l);
          }
      }
    } catch (l) {
      ie(e, e.return, l);
    }
    if (e === t) {
      P = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (P = a);
      break;
    }
    P = e.return;
  }
}
var dw = Math.ceil,
  jo = zt.ReactCurrentDispatcher,
  sd = zt.ReactCurrentOwner,
  tt = zt.ReactCurrentBatchConfig,
  V = 0,
  ve = null,
  le = null,
  we = 0,
  qe = 0,
  Er = Cn(0),
  he = 0,
  rs = null,
  $n = 0,
  ka = 0,
  od = 0,
  Di = null,
  Me = null,
  ad = 0,
  Vr = 1 / 0,
  Rt = null,
  Vo = !1,
  Ku = null,
  un = null,
  Qs = !1,
  nn = null,
  Bo = 0,
  Li = 0,
  Qu = null,
  co = -1,
  ho = 0;
function be() {
  return V & 6 ? oe() : co !== -1 ? co : (co = oe());
}
function cn(t) {
  return t.mode & 1
    ? V & 2 && we !== 0
      ? we & -we
      : KE.transition !== null
      ? (ho === 0 && (ho = Wm()), ho)
      : ((t = H),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Jm(t.type))),
        t)
    : 1;
}
function ht(t, e, n, r) {
  if (50 < Li) throw ((Li = 0), (Qu = null), Error(S(185)));
  gs(t, n, r),
    (!(V & 2) || t !== ve) &&
      (t === ve && (!(V & 2) && (ka |= n), he === 4 && Qt(t, we)),
      Be(t, r),
      n === 1 && V === 0 && !(e.mode & 1) && ((Vr = oe() + 500), Sa && In()));
}
function Be(t, e) {
  var n = t.callbackNode;
  K0(t, e);
  var r = Io(t, t === ve ? we : 0);
  if (r === 0)
    n !== null && Nh(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Nh(n), e === 1))
      t.tag === 0 ? GE(Cf.bind(null, t)) : gg(Cf.bind(null, t)),
        HE(function () {
          !(V & 6) && In();
        }),
        (n = null);
    else {
      switch ($m(r)) {
        case 1:
          n = bc;
          break;
        case 4:
          n = zm;
          break;
        case 16:
          n = Co;
          break;
        case 536870912:
          n = Hm;
          break;
        default:
          n = Co;
      }
      n = m_(n, l_.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function l_(t, e) {
  if (((co = -1), (ho = 0), V & 6)) throw Error(S(327));
  var n = t.callbackNode;
  if (Pr() && t.callbackNode !== n) return null;
  var r = Io(t, t === ve ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = zo(t, r);
  else {
    e = r;
    var i = V;
    V |= 2;
    var s = c_();
    (ve !== t || we !== e) && ((Rt = null), (Vr = oe() + 500), Un(t, e));
    do
      try {
        pw();
        break;
      } catch (a) {
        u_(t, a);
      }
    while (1);
    qc(),
      (jo.current = s),
      (V = i),
      le !== null ? (e = 0) : ((ve = null), (we = 0), (e = he));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Su(t)), i !== 0 && ((r = i), (e = Yu(t, i)))), e === 1)
    )
      throw ((n = rs), Un(t, 0), Qt(t, r), Be(t, oe()), n);
    if (e === 6) Qt(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !hw(i) &&
          ((e = zo(t, r)),
          e === 2 && ((s = Su(t)), s !== 0 && ((r = s), (e = Yu(t, s)))),
          e === 1))
      )
        throw ((n = rs), Un(t, 0), Qt(t, r), Be(t, oe()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Nn(t, Me, Rt);
          break;
        case 3:
          if (
            (Qt(t, r), (r & 130023424) === r && ((e = ad + 500 - oe()), 10 < e))
          ) {
            if (Io(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              be(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = Nu(Nn.bind(null, t, Me, Rt), e);
            break;
          }
          Nn(t, Me, Rt);
          break;
        case 4:
          if ((Qt(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - dt(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * dw(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Nu(Nn.bind(null, t, Me, Rt), r);
            break;
          }
          Nn(t, Me, Rt);
          break;
        case 5:
          Nn(t, Me, Rt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Be(t, oe()), t.callbackNode === n ? l_.bind(null, t) : null;
}
function Yu(t, e) {
  var n = Di;
  return (
    t.current.memoizedState.isDehydrated && (Un(t, e).flags |= 256),
    (t = zo(t, e)),
    t !== 2 && ((e = Me), (Me = n), e !== null && Ju(e)),
    t
  );
}
function Ju(t) {
  Me === null ? (Me = t) : Me.push.apply(Me, t);
}
function hw(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!pt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Qt(t, e) {
  for (
    e &= ~od,
      e &= ~ka,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - dt(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Cf(t) {
  if (V & 6) throw Error(S(327));
  Pr();
  var e = Io(t, 0);
  if (!(e & 1)) return Be(t, oe()), null;
  var n = zo(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Su(t);
    r !== 0 && ((e = r), (n = Yu(t, r)));
  }
  if (n === 1) throw ((n = rs), Un(t, 0), Qt(t, e), Be(t, oe()), n);
  if (n === 6) throw Error(S(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Nn(t, Me, Rt),
    Be(t, oe()),
    null
  );
}
function ld(t, e) {
  var n = V;
  V |= 1;
  try {
    return t(e);
  } finally {
    (V = n), V === 0 && ((Vr = oe() + 500), Sa && In());
  }
}
function qn(t) {
  nn !== null && nn.tag === 0 && !(V & 6) && Pr();
  var e = V;
  V |= 1;
  var n = tt.transition,
    r = H;
  try {
    if (((tt.transition = null), (H = 1), t)) return t();
  } finally {
    (H = r), (tt.transition = n), (V = e), !(V & 6) && In();
  }
}
function ud() {
  (qe = Er.current), Y(Er);
}
function Un(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), zE(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Hc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Oo();
          break;
        case 3:
          Ur(), Y(je), Y(Oe), Xc();
          break;
        case 5:
          Jc(r);
          break;
        case 4:
          Ur();
          break;
        case 13:
          Y(X);
          break;
        case 19:
          Y(X);
          break;
        case 10:
          Gc(r.type._context);
          break;
        case 22:
        case 23:
          ud();
      }
      n = n.return;
    }
  if (
    ((ve = t),
    (le = t = dn(t.current, null)),
    (we = qe = e),
    (he = 0),
    (rs = null),
    (od = ka = $n = 0),
    (Me = Di = null),
    Dn !== null)
  ) {
    for (e = 0; e < Dn.length; e++)
      if (((n = Dn[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Dn = null;
  }
  return t;
}
function u_(t, e) {
  do {
    var n = le;
    try {
      if ((qc(), (ao.current = Uo), Fo)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Fo = !1;
      }
      if (
        ((Wn = 0),
        (me = ue = Z = null),
        (xi = !1),
        (es = 0),
        (sd.current = null),
        n === null || n.return === null)
      ) {
        (he = 1), (rs = e), (le = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = we),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var f = cf(o);
          if (f !== null) {
            (f.flags &= -257),
              df(f, o, a, s, e),
              f.mode & 1 && uf(s, u, e),
              (e = f),
              (l = u);
            var p = e.updateQueue;
            if (p === null) {
              var _ = new Set();
              _.add(l), (e.updateQueue = _);
            } else p.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              uf(s, u, e), cd();
              break e;
            }
            l = Error(S(426));
          }
        } else if (J && a.mode & 1) {
          var w = cf(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              df(w, o, a, s, e),
              Wc(jr(l, a));
            break e;
          }
        }
        (s = l = jr(l, a)),
          he !== 4 && (he = 2),
          Di === null ? (Di = [s]) : Di.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var g = qg(s, l, e);
              tf(s, g);
              break e;
            case 1:
              a = l;
              var m = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (un === null || !un.has(v))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var y = Gg(s, a, e);
                tf(s, y);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      h_(n);
    } catch (I) {
      (e = I), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function c_() {
  var t = jo.current;
  return (jo.current = Uo), t === null ? Uo : t;
}
function cd() {
  (he === 0 || he === 3 || he === 2) && (he = 4),
    ve === null || (!($n & 268435455) && !(ka & 268435455)) || Qt(ve, we);
}
function zo(t, e) {
  var n = V;
  V |= 2;
  var r = c_();
  (ve !== t || we !== e) && ((Rt = null), Un(t, e));
  do
    try {
      fw();
      break;
    } catch (i) {
      u_(t, i);
    }
  while (1);
  if ((qc(), (V = n), (jo.current = r), le !== null)) throw Error(S(261));
  return (ve = null), (we = 0), he;
}
function fw() {
  for (; le !== null; ) d_(le);
}
function pw() {
  for (; le !== null && !j0(); ) d_(le);
}
function d_(t) {
  var e = p_(t.alternate, t, qe);
  (t.memoizedProps = t.pendingProps),
    e === null ? h_(t) : (le = e),
    (sd.current = null);
}
function h_(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = aw(n, e)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (he = 6), (le = null);
        return;
      }
    } else if (((n = ow(n, e, qe)), n !== null)) {
      le = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      le = e;
      return;
    }
    le = e = t;
  } while (e !== null);
  he === 0 && (he = 5);
}
function Nn(t, e, n) {
  var r = H,
    i = tt.transition;
  try {
    (tt.transition = null), (H = 1), mw(t, e, n, r);
  } finally {
    (tt.transition = i), (H = r);
  }
  return null;
}
function mw(t, e, n, r) {
  do Pr();
  while (nn !== null);
  if (V & 6) throw Error(S(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(S(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Q0(t, s),
    t === ve && ((le = ve = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Qs ||
      ((Qs = !0),
      m_(Co, function () {
        return Pr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = tt.transition), (tt.transition = null);
    var o = H;
    H = 1;
    var a = V;
    (V |= 4),
      (sd.current = null),
      uw(t, n),
      o_(n, t),
      LE(Pu),
      (To = !!Ru),
      (Pu = Ru = null),
      (t.current = n),
      cw(n),
      V0(),
      (V = a),
      (H = o),
      (tt.transition = s);
  } else t.current = n;
  if (
    (Qs && ((Qs = !1), (nn = t), (Bo = i)),
    (s = t.pendingLanes),
    s === 0 && (un = null),
    H0(n.stateNode),
    Be(t, oe()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Vo) throw ((Vo = !1), (t = Ku), (Ku = null), t);
  return (
    Bo & 1 && t.tag !== 0 && Pr(),
    (s = t.pendingLanes),
    s & 1 ? (t === Qu ? Li++ : ((Li = 0), (Qu = t))) : (Li = 0),
    In(),
    null
  );
}
function Pr() {
  if (nn !== null) {
    var t = $m(Bo),
      e = tt.transition,
      n = H;
    try {
      if (((tt.transition = null), (H = 16 > t ? 16 : t), nn === null))
        var r = !1;
      else {
        if (((t = nn), (nn = null), (Bo = 0), V & 6)) throw Error(S(331));
        var i = V;
        for (V |= 4, P = t.current; P !== null; ) {
          var s = P,
            o = s.child;
          if (P.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (P = u; P !== null; ) {
                  var d = P;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bi(8, d, s);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (P = c);
                  else
                    for (; P !== null; ) {
                      d = P;
                      var h = d.sibling,
                        f = d.return;
                      if ((r_(d), d === u)) {
                        P = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = f), (P = h);
                        break;
                      }
                      P = f;
                    }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var _ = p.child;
                if (_ !== null) {
                  p.child = null;
                  do {
                    var w = _.sibling;
                    (_.sibling = null), (_ = w);
                  } while (_ !== null);
                }
              }
              P = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (P = o);
          else
            e: for (; P !== null; ) {
              if (((s = P), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bi(9, s, s.return);
                }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (P = g);
                break e;
              }
              P = s.return;
            }
        }
        var m = t.current;
        for (P = m; P !== null; ) {
          o = P;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (P = v);
          else
            e: for (o = m; P !== null; ) {
              if (((a = P), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ta(9, a);
                  }
                } catch (I) {
                  ie(a, a.return, I);
                }
              if (a === o) {
                P = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (P = y);
                break e;
              }
              P = a.return;
            }
        }
        if (
          ((V = i), In(), Et && typeof Et.onPostCommitFiberRoot == "function")
        )
          try {
            Et.onPostCommitFiberRoot(_a, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (tt.transition = e);
    }
  }
  return !1;
}
function If(t, e, n) {
  (e = jr(n, e)),
    (e = qg(t, e, 1)),
    (t = ln(t, e, 1)),
    (e = be()),
    t !== null && (gs(t, 1, e), Be(t, e));
}
function ie(t, e, n) {
  if (t.tag === 3) If(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        If(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (un === null || !un.has(r)))
        ) {
          (t = jr(n, t)),
            (t = Gg(e, t, 1)),
            (e = ln(e, t, 1)),
            (t = be()),
            e !== null && (gs(e, 1, t), Be(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function gw(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = be()),
    (t.pingedLanes |= t.suspendedLanes & n),
    ve === t &&
      (we & n) === n &&
      (he === 4 || (he === 3 && (we & 130023424) === we && 500 > oe() - ad)
        ? Un(t, 0)
        : (od |= n)),
    Be(t, e);
}
function f_(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = js), (js <<= 1), !(js & 130023424) && (js = 4194304))
      : (e = 1));
  var n = be();
  (t = Ut(t, e)), t !== null && (gs(t, e, n), Be(t, n));
}
function _w(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), f_(t, n);
}
function vw(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(e), f_(t, n);
}
var p_;
p_ = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || je.current) Fe = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (Fe = !1), sw(t, e, n);
      Fe = !!(t.flags & 131072);
    }
  else (Fe = !1), J && e.flags & 1048576 && _g(e, xo, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      uo(t, e), (t = e.pendingProps);
      var i = Lr(e, Oe.current);
      Rr(e, n), (i = ed(null, e, r, t, i, n));
      var s = td();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ve(r) ? ((s = !0), No(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Qc(e),
            (i.updater = Ca),
            (e.stateNode = i),
            (i._reactInternals = e),
            Fu(e, r, t, n),
            (e = Vu(null, e, r, !0, s, n)))
          : ((e.tag = 0), J && s && zc(e), Ae(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (uo(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = Ew(r)),
          (t = st(r, t)),
          i)
        ) {
          case 0:
            e = ju(null, e, r, t, n);
            break e;
          case 1:
            e = pf(null, e, r, t, n);
            break e;
          case 11:
            e = hf(null, e, r, t, n);
            break e;
          case 14:
            e = ff(null, e, r, st(r.type, t), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : st(r, i)),
        ju(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : st(r, i)),
        pf(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((Jg(e), t === null)) throw Error(S(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          wg(t, e),
          Lo(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = jr(Error(S(423)), e)), (e = mf(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = jr(Error(S(424)), e)), (e = mf(t, e, r, n, i));
            break e;
          } else
            for (
              Ge = an(e.stateNode.containerInfo.firstChild),
                Ke = e,
                J = !0,
                at = null,
                n = Tg(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Mr(), r === i)) {
            e = jt(t, e, n);
            break e;
          }
          Ae(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        kg(e),
        t === null && Du(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        Ou(r, i) ? (o = null) : s !== null && Ou(r, s) && (e.flags |= 32),
        Yg(t, e),
        Ae(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && Du(e), null;
    case 13:
      return Xg(t, e, n);
    case 4:
      return (
        Yc(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Fr(e, null, r, n)) : Ae(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : st(r, i)),
        hf(t, e, r, i, n)
      );
    case 7:
      return Ae(t, e, e.pendingProps, n), e.child;
    case 8:
      return Ae(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Ae(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          G(bo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (pt(s.value, o)) {
            if (s.children === i.children && !je.current) {
              e = jt(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = Dt(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Lu(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Lu(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ae(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Rr(e, n),
        (i = nt(i)),
        (r = r(i)),
        (e.flags |= 1),
        Ae(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = st(r, e.pendingProps)),
        (i = st(r.type, i)),
        ff(t, e, r, i, n)
      );
    case 15:
      return Kg(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : st(r, i)),
        uo(t, e),
        (e.tag = 1),
        Ve(r) ? ((t = !0), No(e)) : (t = !1),
        Rr(e, n),
        Cg(e, r, i),
        Fu(e, r, i, n),
        Vu(null, e, r, !0, t, n)
      );
    case 19:
      return Zg(t, e, n);
    case 22:
      return Qg(t, e, n);
  }
  throw Error(S(156, e.tag));
};
function m_(t, e) {
  return Bm(t, e);
}
function yw(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function et(t, e, n, r) {
  return new yw(t, e, n, r);
}
function dd(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Ew(t) {
  if (typeof t == "function") return dd(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Nc)) return 11;
    if (t === Ac) return 14;
  }
  return 2;
}
function dn(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = et(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function fo(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) dd(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case cr:
        return jn(n.children, i, s, e);
      case Oc:
        (o = 8), (i |= 8);
        break;
      case au:
        return (
          (t = et(12, n, e, i | 2)), (t.elementType = au), (t.lanes = s), t
        );
      case lu:
        return (t = et(13, n, e, i)), (t.elementType = lu), (t.lanes = s), t;
      case uu:
        return (t = et(19, n, e, i)), (t.elementType = uu), (t.lanes = s), t;
      case Im:
        return Ra(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Sm:
              o = 10;
              break e;
            case Cm:
              o = 9;
              break e;
            case Nc:
              o = 11;
              break e;
            case Ac:
              o = 14;
              break e;
            case qt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = et(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  );
}
function jn(t, e, n, r) {
  return (t = et(7, t, r, e)), (t.lanes = n), t;
}
function Ra(t, e, n, r) {
  return (
    (t = et(22, t, r, e)),
    (t.elementType = Im),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Cl(t, e, n) {
  return (t = et(6, t, null, e)), (t.lanes = n), t;
}
function Il(t, e, n) {
  return (
    (e = et(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function ww(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = il(0)),
    (this.expirationTimes = il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function hd(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new ww(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = et(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qc(s),
    t
  );
}
function Sw(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ur,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function g_(t) {
  if (!t) return vn;
  t = t._reactInternals;
  e: {
    if (tr(t) !== t || t.tag !== 1) throw Error(S(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ve(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(S(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Ve(n)) return mg(t, n, e);
  }
  return e;
}
function __(t, e, n, r, i, s, o, a, l) {
  return (
    (t = hd(n, r, !0, t, i, s, o, a, l)),
    (t.context = g_(null)),
    (n = t.current),
    (r = be()),
    (i = cn(n)),
    (s = Dt(r, i)),
    (s.callback = e ?? null),
    ln(n, s, i),
    (t.current.lanes = i),
    gs(t, i, r),
    Be(t, r),
    t
  );
}
function Pa(t, e, n, r) {
  var i = e.current,
    s = be(),
    o = cn(i);
  return (
    (n = g_(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Dt(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = ln(i, e, o)),
    t !== null && (ht(t, i, o, s), oo(t, i, o)),
    o
  );
}
function Ho(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Tf(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function fd(t, e) {
  Tf(t, e), (t = t.alternate) && Tf(t, e);
}
function Cw() {
  return null;
}
var v_ =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function pd(t) {
  this._internalRoot = t;
}
Oa.prototype.render = pd.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(S(409));
  Pa(t, e, null, null);
};
Oa.prototype.unmount = pd.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    qn(function () {
      Pa(null, t, null, null);
    }),
      (e[Ft] = null);
  }
};
function Oa(t) {
  this._internalRoot = t;
}
Oa.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Km();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Kt.length && e !== 0 && e < Kt[n].priority; n++);
    Kt.splice(n, 0, t), n === 0 && Ym(t);
  }
};
function md(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Na(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function kf() {}
function Iw(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ho(o);
        s.call(u);
      };
    }
    var o = __(e, r, t, 0, null, !1, !1, "", kf);
    return (
      (t._reactRootContainer = o),
      (t[Ft] = o.current),
      Qi(t.nodeType === 8 ? t.parentNode : t),
      qn(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ho(l);
      a.call(u);
    };
  }
  var l = hd(t, 0, !1, null, null, !1, !1, "", kf);
  return (
    (t._reactRootContainer = l),
    (t[Ft] = l.current),
    Qi(t.nodeType === 8 ? t.parentNode : t),
    qn(function () {
      Pa(e, l, n, r);
    }),
    l
  );
}
function Aa(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ho(o);
        a.call(l);
      };
    }
    Pa(e, o, t, i);
  } else o = Iw(n, e, t, i, r);
  return Ho(o);
}
qm = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Ci(e.pendingLanes);
        n !== 0 &&
          (Dc(e, n | 1), Be(e, oe()), !(V & 6) && ((Vr = oe() + 500), In()));
      }
      break;
    case 13:
      qn(function () {
        var r = Ut(t, 1);
        if (r !== null) {
          var i = be();
          ht(r, t, 1, i);
        }
      }),
        fd(t, 1);
  }
};
Lc = function (t) {
  if (t.tag === 13) {
    var e = Ut(t, 134217728);
    if (e !== null) {
      var n = be();
      ht(e, t, 134217728, n);
    }
    fd(t, 134217728);
  }
};
Gm = function (t) {
  if (t.tag === 13) {
    var e = cn(t),
      n = Ut(t, e);
    if (n !== null) {
      var r = be();
      ht(n, t, e, r);
    }
    fd(t, e);
  }
};
Km = function () {
  return H;
};
Qm = function (t, e) {
  var n = H;
  try {
    return (H = t), e();
  } finally {
    H = n;
  }
};
yu = function (t, e, n) {
  switch (e) {
    case "input":
      if ((hu(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = wa(r);
            if (!i) throw Error(S(90));
            km(r), hu(r, i);
          }
        }
      }
      break;
    case "textarea":
      Pm(t, n);
      break;
    case "select":
      (e = n.value), e != null && Cr(t, !!n.multiple, e, !1);
  }
};
Lm = ld;
Mm = qn;
var Tw = { usingClientEntryPoint: !1, Events: [vs, pr, wa, bm, Dm, ld] },
  gi = {
    findFiberByHostInstance: bn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  kw = {
    bundleType: gi.bundleType,
    version: gi.version,
    rendererPackageName: gi.rendererPackageName,
    rendererConfig: gi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = jm(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: gi.findFiberByHostInstance || Cw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ys.isDisabled && Ys.supportsFiber)
    try {
      (_a = Ys.inject(kw)), (Et = Ys);
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tw;
Ye.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!md(e)) throw Error(S(200));
  return Sw(t, e, null, n);
};
Ye.createRoot = function (t, e) {
  if (!md(t)) throw Error(S(299));
  var n = !1,
    r = "",
    i = v_;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = hd(t, 1, !1, null, null, n, !1, r, i)),
    (t[Ft] = e.current),
    Qi(t.nodeType === 8 ? t.parentNode : t),
    new pd(e)
  );
};
Ye.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(S(188))
      : ((t = Object.keys(t).join(",")), Error(S(268, t)));
  return (t = jm(e)), (t = t === null ? null : t.stateNode), t;
};
Ye.flushSync = function (t) {
  return qn(t);
};
Ye.hydrate = function (t, e, n) {
  if (!Na(e)) throw Error(S(200));
  return Aa(null, t, e, !0, n);
};
Ye.hydrateRoot = function (t, e, n) {
  if (!md(t)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = v_;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = __(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[Ft] = e.current),
    Qi(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new Oa(e);
};
Ye.render = function (t, e, n) {
  if (!Na(e)) throw Error(S(200));
  return Aa(null, t, e, !1, n);
};
Ye.unmountComponentAtNode = function (t) {
  if (!Na(t)) throw Error(S(40));
  return t._reactRootContainer
    ? (qn(function () {
        Aa(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Ft] = null);
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = ld;
Ye.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Na(n)) throw Error(S(200));
  if (t == null || t._reactInternals === void 0) throw Error(S(38));
  return Aa(t, e, n, !1, r);
};
Ye.version = "18.2.0-next-9e3b772b8-20220608";
function y_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y_);
    } catch (t) {
      console.error(t);
    }
}
y_(), (_m.exports = Ye);
var Rw = _m.exports,
  Rf = Rw;
(su.createRoot = Rf.createRoot), (su.hydrateRoot = Rf.hydrateRoot);
const E_ = () =>
  E.jsxs("div", {
    className: "loading",
    children: ["Loading", E.jsx("span", { className: "loading-dot" })],
  });
const Pw = ({ userPlace: t, show: e, createItinerary: n }) => {
  const [r, i] = U.useState([]),
    [s, o] = U.useState(!1),
    [a, l] = U.useState(""),
    u = (h, f, p, _, w, g, m) => {
      m && n(h, f, p, _, w, g, m);
    },
    d = "AIzaSyAknPW92nbcLpW8NCDKZsVsUXy8vG4AXoA";
  async function c() {
    const h = new URL(
        "https://proxy.junocollege.com/https://maps.googleapis.com/maps/api/place/textsearch/json"
      ),
      f = new URLSearchParams({ query: t, key: d });
    h.search = f;
    try {
      o(!0), l("");
      const w = (await (await fetch(h)).json()).results,
        g = [];
      for (let m of w)
        if (m.photos) {
          const v = m.photos[0].photo_reference,
            y = new URL(
              "https://proxy.junocollege.com/https://maps.googleapis.com/maps/api/place/photo"
            ),
            I = new URLSearchParams({
              maxwidth: 400,
              photo_reference: v,
              key: d,
            });
          y.search = I;
          const k = await (await fetch(y)).blob(),
            O = URL.createObjectURL(k);
          g.push({ ...m, url: O });
        } else {
          const v = "/no-image.png";
          g.push({ ...m, url: v });
        }
      i(g);
    } catch {
      l("Something went wrong. Please try again.");
    } finally {
      o(!1);
    }
  }
  return (
    U.useEffect(() => {
      e && c();
    }, [t, e]),
    e
      ? a
        ? E.jsx(E.Fragment, {
            children: E.jsx("ul", {
              className: "all-places",
              children: E.jsx("p", { className: "place-error", children: a }),
            }),
          })
        : s
        ? E.jsx(E_, {})
        : E.jsxs(E.Fragment, {
            children: [
              E.jsx("h2", {
                className: "section-title",
                children: "Search Results",
              }),
              E.jsx("ul", {
                className: "all-places",
                children:
                  r.length === 0
                    ? E.jsx("p", {
                        className: "place-error",
                        children: "No location found",
                      })
                    : r.map((h) =>
                        E.jsxs(
                          "li",
                          {
                            className: "list-place",
                            children: [
                              E.jsx("h2", { children: h.name }),
                              h.formatted_address &&
                                E.jsx("h3", { children: h.formatted_address }),
                              E.jsx("img", {
                                src: h.url,
                                className: "location",
                              }),
                              E.jsxs("form", {
                                className: "days",
                                children: [
                                  E.jsx("label", {
                                    htmlFor: "number",
                                    children: "Number of days:",
                                  }),
                                  E.jsx("input", {
                                    type: "number",
                                    className: "number-of-days",
                                    id: "number",
                                    min: 0,
                                    required: !0,
                                  }),
                                  E.jsxs("button", {
                                    className: "select-button",
                                    onClick: (f) => {
                                      u(
                                        f,
                                        h.name,
                                        h.formatted_address,
                                        h.url,
                                        h.rating,
                                        h.types,
                                        f.target.parentNode.children[1].value
                                      );
                                    },
                                    children: [
                                      E.jsx("i", {
                                        className: "fa-solid fa-earth-americas",
                                      }),
                                      "Create Itinerary",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          h.place_id
                        )
                      ),
              }),
            ],
          })
      : null
  );
};
var Xu = {},
  w_ = {},
  gd = { exports: {} },
  S_ = function (e, n) {
    return function () {
      for (var i = new Array(arguments.length), s = 0; s < i.length; s++)
        i[s] = arguments[s];
      return e.apply(n, i);
    };
  },
  Ow = S_,
  Tn = Object.prototype.toString;
function _d(t) {
  return Array.isArray(t);
}
function Zu(t) {
  return typeof t > "u";
}
function Nw(t) {
  return (
    t !== null &&
    !Zu(t) &&
    t.constructor !== null &&
    !Zu(t.constructor) &&
    typeof t.constructor.isBuffer == "function" &&
    t.constructor.isBuffer(t)
  );
}
function C_(t) {
  return Tn.call(t) === "[object ArrayBuffer]";
}
function Aw(t) {
  return Tn.call(t) === "[object FormData]";
}
function xw(t) {
  var e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && C_(t.buffer)),
    e
  );
}
function bw(t) {
  return typeof t == "string";
}
function Dw(t) {
  return typeof t == "number";
}
function I_(t) {
  return t !== null && typeof t == "object";
}
function po(t) {
  if (Tn.call(t) !== "[object Object]") return !1;
  var e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
function Lw(t) {
  return Tn.call(t) === "[object Date]";
}
function Mw(t) {
  return Tn.call(t) === "[object File]";
}
function Fw(t) {
  return Tn.call(t) === "[object Blob]";
}
function T_(t) {
  return Tn.call(t) === "[object Function]";
}
function Uw(t) {
  return I_(t) && T_(t.pipe);
}
function jw(t) {
  return Tn.call(t) === "[object URLSearchParams]";
}
function Vw(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function Bw() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function vd(t, e) {
  if (!(t === null || typeof t > "u"))
    if ((typeof t != "object" && (t = [t]), _d(t)))
      for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
    else
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t);
}
function ec() {
  var t = {};
  function e(i, s) {
    po(t[s]) && po(i)
      ? (t[s] = ec(t[s], i))
      : po(i)
      ? (t[s] = ec({}, i))
      : _d(i)
      ? (t[s] = i.slice())
      : (t[s] = i);
  }
  for (var n = 0, r = arguments.length; n < r; n++) vd(arguments[n], e);
  return t;
}
function zw(t, e, n) {
  return (
    vd(e, function (i, s) {
      n && typeof i == "function" ? (t[s] = Ow(i, n)) : (t[s] = i);
    }),
    t
  );
}
function Hw(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
var We = {
    isArray: _d,
    isArrayBuffer: C_,
    isBuffer: Nw,
    isFormData: Aw,
    isArrayBufferView: xw,
    isString: bw,
    isNumber: Dw,
    isObject: I_,
    isPlainObject: po,
    isUndefined: Zu,
    isDate: Lw,
    isFile: Mw,
    isBlob: Fw,
    isFunction: T_,
    isStream: Uw,
    isURLSearchParams: jw,
    isStandardBrowserEnv: Bw,
    forEach: vd,
    merge: ec,
    extend: zw,
    trim: Vw,
    stripBOM: Hw,
  },
  or = We;
function Pf(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var k_ = function (e, n, r) {
    if (!n) return e;
    var i;
    if (r) i = r(n);
    else if (or.isURLSearchParams(n)) i = n.toString();
    else {
      var s = [];
      or.forEach(n, function (l, u) {
        l === null ||
          typeof l > "u" ||
          (or.isArray(l) ? (u = u + "[]") : (l = [l]),
          or.forEach(l, function (c) {
            or.isDate(c)
              ? (c = c.toISOString())
              : or.isObject(c) && (c = JSON.stringify(c)),
              s.push(Pf(u) + "=" + Pf(c));
          }));
      }),
        (i = s.join("&"));
    }
    if (i) {
      var o = e.indexOf("#");
      o !== -1 && (e = e.slice(0, o)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
    }
    return e;
  },
  Ww = We;
function xa() {
  this.handlers = [];
}
xa.prototype.use = function (e, n, r) {
  return (
    this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
xa.prototype.eject = function (e) {
  this.handlers[e] && (this.handlers[e] = null);
};
xa.prototype.forEach = function (e) {
  Ww.forEach(this.handlers, function (r) {
    r !== null && e(r);
  });
};
var $w = xa,
  qw = We,
  Gw = function (e, n) {
    qw.forEach(e, function (i, s) {
      s !== n &&
        s.toUpperCase() === n.toUpperCase() &&
        ((e[n] = i), delete e[s]);
    });
  },
  R_ = function (e, n, r, i, s) {
    return (
      (e.config = n),
      r && (e.code = r),
      (e.request = i),
      (e.response = s),
      (e.isAxiosError = !0),
      (e.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      }),
      e
    );
  },
  P_ = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Tl,
  Of;
function O_() {
  if (Of) return Tl;
  Of = 1;
  var t = R_;
  return (
    (Tl = function (n, r, i, s, o) {
      var a = new Error(n);
      return t(a, r, i, s, o);
    }),
    Tl
  );
}
var kl, Nf;
function Kw() {
  if (Nf) return kl;
  Nf = 1;
  var t = O_();
  return (
    (kl = function (n, r, i) {
      var s = i.config.validateStatus;
      !i.status || !s || s(i.status)
        ? n(i)
        : r(
            t(
              "Request failed with status code " + i.status,
              i.config,
              null,
              i.request,
              i
            )
          );
    }),
    kl
  );
}
var Rl, Af;
function Qw() {
  if (Af) return Rl;
  Af = 1;
  var t = We;
  return (
    (Rl = t.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (r, i, s, o, a, l) {
              var u = [];
              u.push(r + "=" + encodeURIComponent(i)),
                t.isNumber(s) && u.push("expires=" + new Date(s).toGMTString()),
                t.isString(o) && u.push("path=" + o),
                t.isString(a) && u.push("domain=" + a),
                l === !0 && u.push("secure"),
                (document.cookie = u.join("; "));
            },
            read: function (r) {
              var i = document.cookie.match(
                new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
              );
              return i ? decodeURIComponent(i[3]) : null;
            },
            remove: function (r) {
              this.write(r, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })()),
    Rl
  );
}
var Pl, xf;
function Yw() {
  return (
    xf ||
      ((xf = 1),
      (Pl = function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      })),
    Pl
  );
}
var Ol, bf;
function Jw() {
  return (
    bf ||
      ((bf = 1),
      (Ol = function (e, n) {
        return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
      })),
    Ol
  );
}
var Nl, Df;
function Xw() {
  if (Df) return Nl;
  Df = 1;
  var t = Yw(),
    e = Jw();
  return (
    (Nl = function (r, i) {
      return r && !t(i) ? e(r, i) : i;
    }),
    Nl
  );
}
var Al, Lf;
function Zw() {
  if (Lf) return Al;
  Lf = 1;
  var t = We,
    e = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  return (
    (Al = function (r) {
      var i = {},
        s,
        o,
        a;
      return (
        r &&
          t.forEach(
            r.split(`
`),
            function (u) {
              if (
                ((a = u.indexOf(":")),
                (s = t.trim(u.substr(0, a)).toLowerCase()),
                (o = t.trim(u.substr(a + 1))),
                s)
              ) {
                if (i[s] && e.indexOf(s) >= 0) return;
                s === "set-cookie"
                  ? (i[s] = (i[s] ? i[s] : []).concat([o]))
                  : (i[s] = i[s] ? i[s] + ", " + o : o);
              }
            }
          ),
        i
      );
    }),
    Al
  );
}
var xl, Mf;
function eS() {
  if (Mf) return xl;
  Mf = 1;
  var t = We;
  return (
    (xl = t.isStandardBrowserEnv()
      ? (function () {
          var n = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a"),
            i;
          function s(o) {
            var a = o;
            return (
              n && (r.setAttribute("href", a), (a = r.href)),
              r.setAttribute("href", a),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (i = s(window.location.href)),
            function (a) {
              var l = t.isString(a) ? s(a) : a;
              return l.protocol === i.protocol && l.host === i.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    xl
  );
}
var bl, Ff;
function ba() {
  if (Ff) return bl;
  Ff = 1;
  function t(e) {
    this.message = e;
  }
  return (
    (t.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
    (t.prototype.__CANCEL__ = !0),
    (bl = t),
    bl
  );
}
var Dl, Uf;
function jf() {
  if (Uf) return Dl;
  Uf = 1;
  var t = We,
    e = Kw(),
    n = Qw(),
    r = k_,
    i = Xw(),
    s = Zw(),
    o = eS(),
    a = O_(),
    l = P_,
    u = ba();
  return (
    (Dl = function (c) {
      return new Promise(function (f, p) {
        var _ = c.data,
          w = c.headers,
          g = c.responseType,
          m;
        function v() {
          c.cancelToken && c.cancelToken.unsubscribe(m),
            c.signal && c.signal.removeEventListener("abort", m);
        }
        t.isFormData(_) && delete w["Content-Type"];
        var y = new XMLHttpRequest();
        if (c.auth) {
          var I = c.auth.username || "",
            T = c.auth.password
              ? unescape(encodeURIComponent(c.auth.password))
              : "";
          w.Authorization = "Basic " + btoa(I + ":" + T);
        }
        var k = i(c.baseURL, c.url);
        y.open(c.method.toUpperCase(), r(k, c.params, c.paramsSerializer), !0),
          (y.timeout = c.timeout);
        function O() {
          if (y) {
            var N =
                "getAllResponseHeaders" in y
                  ? s(y.getAllResponseHeaders())
                  : null,
              ae =
                !g || g === "text" || g === "json"
                  ? y.responseText
                  : y.response,
              Ie = {
                data: ae,
                status: y.status,
                statusText: y.statusText,
                headers: N,
                config: c,
                request: y,
              };
            e(
              function (te) {
                f(te), v();
              },
              function (te) {
                p(te), v();
              },
              Ie
            ),
              (y = null);
          }
        }
        if (
          ("onloadend" in y
            ? (y.onloadend = O)
            : (y.onreadystatechange = function () {
                !y ||
                  y.readyState !== 4 ||
                  (y.status === 0 &&
                    !(y.responseURL && y.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(O);
              }),
          (y.onabort = function () {
            y && (p(a("Request aborted", c, "ECONNABORTED", y)), (y = null));
          }),
          (y.onerror = function () {
            p(a("Network Error", c, null, y)), (y = null);
          }),
          (y.ontimeout = function () {
            var ae = c.timeout
                ? "timeout of " + c.timeout + "ms exceeded"
                : "timeout exceeded",
              Ie = c.transitional || l;
            c.timeoutErrorMessage && (ae = c.timeoutErrorMessage),
              p(
                a(
                  ae,
                  c,
                  Ie.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                  y
                )
              ),
              (y = null);
          }),
          t.isStandardBrowserEnv())
        ) {
          var z =
            (c.withCredentials || o(k)) && c.xsrfCookieName
              ? n.read(c.xsrfCookieName)
              : void 0;
          z && (w[c.xsrfHeaderName] = z);
        }
        "setRequestHeader" in y &&
          t.forEach(w, function (ae, Ie) {
            typeof _ > "u" && Ie.toLowerCase() === "content-type"
              ? delete w[Ie]
              : y.setRequestHeader(Ie, ae);
          }),
          t.isUndefined(c.withCredentials) ||
            (y.withCredentials = !!c.withCredentials),
          g && g !== "json" && (y.responseType = c.responseType),
          typeof c.onDownloadProgress == "function" &&
            y.addEventListener("progress", c.onDownloadProgress),
          typeof c.onUploadProgress == "function" &&
            y.upload &&
            y.upload.addEventListener("progress", c.onUploadProgress),
          (c.cancelToken || c.signal) &&
            ((m = function (N) {
              y &&
                (p(!N || (N && N.type) ? new u("canceled") : N),
                y.abort(),
                (y = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(m),
            c.signal &&
              (c.signal.aborted ? m() : c.signal.addEventListener("abort", m))),
          _ || (_ = null),
          y.send(_);
      });
    }),
    Dl
  );
}
var Ee = We,
  Vf = Gw,
  tS = R_,
  nS = P_,
  rS = { "Content-Type": "application/x-www-form-urlencoded" };
function Bf(t, e) {
  !Ee.isUndefined(t) &&
    Ee.isUndefined(t["Content-Type"]) &&
    (t["Content-Type"] = e);
}
function iS() {
  var t;
  return (
    (typeof XMLHttpRequest < "u" ||
      (typeof process < "u" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (t = jf()),
    t
  );
}
function sS(t, e, n) {
  if (Ee.isString(t))
    try {
      return (e || JSON.parse)(t), Ee.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(t);
}
var Da = {
  transitional: nS,
  adapter: iS(),
  transformRequest: [
    function (e, n) {
      return (
        Vf(n, "Accept"),
        Vf(n, "Content-Type"),
        Ee.isFormData(e) ||
        Ee.isArrayBuffer(e) ||
        Ee.isBuffer(e) ||
        Ee.isStream(e) ||
        Ee.isFile(e) ||
        Ee.isBlob(e)
          ? e
          : Ee.isArrayBufferView(e)
          ? e.buffer
          : Ee.isURLSearchParams(e)
          ? (Bf(n, "application/x-www-form-urlencoded;charset=utf-8"),
            e.toString())
          : Ee.isObject(e) || (n && n["Content-Type"] === "application/json")
          ? (Bf(n, "application/json"), sS(e))
          : e
      );
    },
  ],
  transformResponse: [
    function (e) {
      var n = this.transitional || Da.transitional,
        r = n && n.silentJSONParsing,
        i = n && n.forcedJSONParsing,
        s = !r && this.responseType === "json";
      if (s || (i && Ee.isString(e) && e.length))
        try {
          return JSON.parse(e);
        } catch (o) {
          if (s)
            throw o.name === "SyntaxError" ? tS(o, this, "E_JSON_PARSE") : o;
        }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
Ee.forEach(["delete", "get", "head"], function (e) {
  Da.headers[e] = {};
});
Ee.forEach(["post", "put", "patch"], function (e) {
  Da.headers[e] = Ee.merge(rS);
});
var yd = Da,
  oS = We,
  aS = yd,
  lS = function (e, n, r) {
    var i = this || aS;
    return (
      oS.forEach(r, function (o) {
        e = o.call(i, e, n);
      }),
      e
    );
  },
  Ll,
  zf;
function N_() {
  return (
    zf ||
      ((zf = 1),
      (Ll = function (e) {
        return !!(e && e.__CANCEL__);
      })),
    Ll
  );
}
var Hf = We,
  Ml = lS,
  uS = N_(),
  cS = yd,
  dS = ba();
function Fl(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new dS("canceled");
}
var hS = function (e) {
    Fl(e),
      (e.headers = e.headers || {}),
      (e.data = Ml.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = Hf.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      Hf.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (i) {
          delete e.headers[i];
        }
      );
    var n = e.adapter || cS.adapter;
    return n(e).then(
      function (i) {
        return (
          Fl(e),
          (i.data = Ml.call(e, i.data, i.headers, e.transformResponse)),
          i
        );
      },
      function (i) {
        return (
          uS(i) ||
            (Fl(e),
            i &&
              i.response &&
              (i.response.data = Ml.call(
                e,
                i.response.data,
                i.response.headers,
                e.transformResponse
              ))),
          Promise.reject(i)
        );
      }
    );
  },
  $e = We,
  A_ = function (e, n) {
    n = n || {};
    var r = {};
    function i(d, c) {
      return $e.isPlainObject(d) && $e.isPlainObject(c)
        ? $e.merge(d, c)
        : $e.isPlainObject(c)
        ? $e.merge({}, c)
        : $e.isArray(c)
        ? c.slice()
        : c;
    }
    function s(d) {
      if ($e.isUndefined(n[d])) {
        if (!$e.isUndefined(e[d])) return i(void 0, e[d]);
      } else return i(e[d], n[d]);
    }
    function o(d) {
      if (!$e.isUndefined(n[d])) return i(void 0, n[d]);
    }
    function a(d) {
      if ($e.isUndefined(n[d])) {
        if (!$e.isUndefined(e[d])) return i(void 0, e[d]);
      } else return i(void 0, n[d]);
    }
    function l(d) {
      if (d in n) return i(e[d], n[d]);
      if (d in e) return i(void 0, e[d]);
    }
    var u = {
      url: o,
      method: o,
      data: o,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: l,
    };
    return (
      $e.forEach(Object.keys(e).concat(Object.keys(n)), function (c) {
        var h = u[c] || s,
          f = h(c);
        ($e.isUndefined(f) && h !== l) || (r[c] = f);
      }),
      r
    );
  },
  Ul,
  Wf;
function x_() {
  return Wf || ((Wf = 1), (Ul = { version: "0.26.1" })), Ul;
}
var fS = x_().version,
  Ed = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (t, e) {
    Ed[t] = function (r) {
      return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
var $f = {};
Ed.transitional = function (e, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      fS +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return function (s, o, a) {
    if (e === !1)
      throw new Error(i(o, " has been removed" + (n ? " in " + n : "")));
    return (
      n &&
        !$f[o] &&
        (($f[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      e ? e(s, o, a) : !0
    );
  };
};
function pS(t, e, n) {
  if (typeof t != "object") throw new TypeError("options must be an object");
  for (var r = Object.keys(t), i = r.length; i-- > 0; ) {
    var s = r[i],
      o = e[s];
    if (o) {
      var a = t[s],
        l = a === void 0 || o(a, s, t);
      if (l !== !0) throw new TypeError("option " + s + " must be " + l);
      continue;
    }
    if (n !== !0) throw Error("Unknown option " + s);
  }
}
var mS = { assertOptions: pS, validators: Ed },
  b_ = We,
  gS = k_,
  qf = $w,
  Gf = hS,
  La = A_,
  D_ = mS,
  ar = D_.validators;
function Es(t) {
  (this.defaults = t),
    (this.interceptors = { request: new qf(), response: new qf() });
}
Es.prototype.request = function (e, n) {
  typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
    (n = La(this.defaults, n)),
    n.method
      ? (n.method = n.method.toLowerCase())
      : this.defaults.method
      ? (n.method = this.defaults.method.toLowerCase())
      : (n.method = "get");
  var r = n.transitional;
  r !== void 0 &&
    D_.assertOptions(
      r,
      {
        silentJSONParsing: ar.transitional(ar.boolean),
        forcedJSONParsing: ar.transitional(ar.boolean),
        clarifyTimeoutError: ar.transitional(ar.boolean),
      },
      !1
    );
  var i = [],
    s = !0;
  this.interceptors.request.forEach(function (f) {
    (typeof f.runWhen == "function" && f.runWhen(n) === !1) ||
      ((s = s && f.synchronous), i.unshift(f.fulfilled, f.rejected));
  });
  var o = [];
  this.interceptors.response.forEach(function (f) {
    o.push(f.fulfilled, f.rejected);
  });
  var a;
  if (!s) {
    var l = [Gf, void 0];
    for (
      Array.prototype.unshift.apply(l, i),
        l = l.concat(o),
        a = Promise.resolve(n);
      l.length;

    )
      a = a.then(l.shift(), l.shift());
    return a;
  }
  for (var u = n; i.length; ) {
    var d = i.shift(),
      c = i.shift();
    try {
      u = d(u);
    } catch (h) {
      c(h);
      break;
    }
  }
  try {
    a = Gf(u);
  } catch (h) {
    return Promise.reject(h);
  }
  for (; o.length; ) a = a.then(o.shift(), o.shift());
  return a;
};
Es.prototype.getUri = function (e) {
  return (
    (e = La(this.defaults, e)),
    gS(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
  );
};
b_.forEach(["delete", "get", "head", "options"], function (e) {
  Es.prototype[e] = function (n, r) {
    return this.request(
      La(r || {}, { method: e, url: n, data: (r || {}).data })
    );
  };
});
b_.forEach(["post", "put", "patch"], function (e) {
  Es.prototype[e] = function (n, r, i) {
    return this.request(La(i || {}, { method: e, url: n, data: r }));
  };
});
var _S = Es,
  jl,
  Kf;
function vS() {
  if (Kf) return jl;
  Kf = 1;
  var t = ba();
  function e(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var r;
    this.promise = new Promise(function (o) {
      r = o;
    });
    var i = this;
    this.promise.then(function (s) {
      if (i._listeners) {
        var o,
          a = i._listeners.length;
        for (o = 0; o < a; o++) i._listeners[o](s);
        i._listeners = null;
      }
    }),
      (this.promise.then = function (s) {
        var o,
          a = new Promise(function (l) {
            i.subscribe(l), (o = l);
          }).then(s);
        return (
          (a.cancel = function () {
            i.unsubscribe(o);
          }),
          a
        );
      }),
      n(function (o) {
        i.reason || ((i.reason = new t(o)), r(i.reason));
      });
  }
  return (
    (e.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (e.prototype.subscribe = function (r) {
      if (this.reason) {
        r(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
    }),
    (e.prototype.unsubscribe = function (r) {
      if (this._listeners) {
        var i = this._listeners.indexOf(r);
        i !== -1 && this._listeners.splice(i, 1);
      }
    }),
    (e.source = function () {
      var r,
        i = new e(function (o) {
          r = o;
        });
      return { token: i, cancel: r };
    }),
    (jl = e),
    jl
  );
}
var Vl, Qf;
function yS() {
  return (
    Qf ||
      ((Qf = 1),
      (Vl = function (e) {
        return function (r) {
          return e.apply(null, r);
        };
      })),
    Vl
  );
}
var Bl, Yf;
function ES() {
  if (Yf) return Bl;
  Yf = 1;
  var t = We;
  return (
    (Bl = function (n) {
      return t.isObject(n) && n.isAxiosError === !0;
    }),
    Bl
  );
}
var Jf = We,
  wS = S_,
  mo = _S,
  SS = A_,
  CS = yd;
function L_(t) {
  var e = new mo(t),
    n = wS(mo.prototype.request, e);
  return (
    Jf.extend(n, mo.prototype, e),
    Jf.extend(n, e),
    (n.create = function (i) {
      return L_(SS(t, i));
    }),
    n
  );
}
var Tt = L_(CS);
Tt.Axios = mo;
Tt.Cancel = ba();
Tt.CancelToken = vS();
Tt.isCancel = N_();
Tt.VERSION = x_().version;
Tt.all = function (e) {
  return Promise.all(e);
};
Tt.spread = yS();
Tt.isAxiosError = ES();
gd.exports = Tt;
gd.exports.default = Tt;
var IS = gd.exports,
  M_ = IS,
  re = {},
  wd = {};
(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.RequiredError = t.BaseAPI = t.COLLECTION_FORMATS = t.BASE_PATH = void 0);
  const e = M_;
  (t.BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, "")),
    (t.COLLECTION_FORMATS = { csv: ",", ssv: " ", tsv: "	", pipes: "|" });
  class n {
    constructor(s, o = t.BASE_PATH, a = e.default) {
      (this.basePath = o),
        (this.axios = a),
        s &&
          ((this.configuration = s),
          (this.basePath = s.basePath || this.basePath));
    }
  }
  t.BaseAPI = n;
  class r extends Error {
    constructor(s, o) {
      super(o), (this.field = s), (this.name = "RequiredError");
    }
  }
  t.RequiredError = r;
})(wd);
var Sd =
  (en && en.__awaiter) ||
  function (t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (o) {
            o(s);
          });
    }
    return new (n || (n = Promise))(function (s, o) {
      function a(d) {
        try {
          u(r.next(d));
        } catch (c) {
          o(c);
        }
      }
      function l(d) {
        try {
          u(r.throw(d));
        } catch (c) {
          o(c);
        }
      }
      function u(d) {
        d.done ? s(d.value) : i(d.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
Object.defineProperty(re, "__esModule", { value: !0 });
re.createRequestFunction =
  re.toPathString =
  re.serializeDataIfNeeded =
  re.setSearchParams =
  re.setOAuthToObject =
  re.setBearerAuthToObject =
  re.setBasicAuthToObject =
  re.setApiKeyToObject =
  re.assertParamExists =
  re.DUMMY_BASE_URL =
    void 0;
const TS = wd;
re.DUMMY_BASE_URL = "https://example.com";
re.assertParamExists = function (t, e, n) {
  if (n == null)
    throw new TS.RequiredError(
      e,
      `Required parameter ${e} was null or undefined when calling ${t}.`
    );
};
re.setApiKeyToObject = function (t, e, n) {
  return Sd(this, void 0, void 0, function* () {
    if (n && n.apiKey) {
      const r =
        typeof n.apiKey == "function" ? yield n.apiKey(e) : yield n.apiKey;
      t[e] = r;
    }
  });
};
re.setBasicAuthToObject = function (t, e) {
  e &&
    (e.username || e.password) &&
    (t.auth = { username: e.username, password: e.password });
};
re.setBearerAuthToObject = function (t, e) {
  return Sd(this, void 0, void 0, function* () {
    if (e && e.accessToken) {
      const n =
        typeof e.accessToken == "function"
          ? yield e.accessToken()
          : yield e.accessToken;
      t.Authorization = "Bearer " + n;
    }
  });
};
re.setOAuthToObject = function (t, e, n, r) {
  return Sd(this, void 0, void 0, function* () {
    if (r && r.accessToken) {
      const i =
        typeof r.accessToken == "function"
          ? yield r.accessToken(e, n)
          : yield r.accessToken;
      t.Authorization = "Bearer " + i;
    }
  });
};
function tc(t, e, n = "") {
  e != null &&
    (typeof e == "object"
      ? Array.isArray(e)
        ? e.forEach((r) => tc(t, r, n))
        : Object.keys(e).forEach((r) =>
            tc(t, e[r], `${n}${n !== "" ? "." : ""}${r}`)
          )
      : t.has(n)
      ? t.append(n, e)
      : t.set(n, e));
}
re.setSearchParams = function (t, ...e) {
  const n = new URLSearchParams(t.search);
  tc(n, e), (t.search = n.toString());
};
re.serializeDataIfNeeded = function (t, e, n) {
  const r = typeof t != "string";
  return (r && n && n.isJsonMime ? n.isJsonMime(e.headers["Content-Type"]) : r)
    ? JSON.stringify(t !== void 0 ? t : {})
    : t || "";
};
re.toPathString = function (t) {
  return t.pathname + t.search + t.hash;
};
re.createRequestFunction = function (t, e, n, r) {
  return (i = e, s = n) => {
    const o = Object.assign(Object.assign({}, t.options), {
      url: ((r == null ? void 0 : r.basePath) || s) + t.url,
    });
    return i.request(o);
  };
};
(function (t) {
  var e =
    (en && en.__awaiter) ||
    function (o, a, l, u) {
      function d(c) {
        return c instanceof l
          ? c
          : new l(function (h) {
              h(c);
            });
      }
      return new (l || (l = Promise))(function (c, h) {
        function f(w) {
          try {
            _(u.next(w));
          } catch (g) {
            h(g);
          }
        }
        function p(w) {
          try {
            _(u.throw(w));
          } catch (g) {
            h(g);
          }
        }
        function _(w) {
          w.done ? c(w.value) : d(w.value).then(f, p);
        }
        _((u = u.apply(o, a || [])).next());
      });
    };
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.OpenAIApi =
      t.OpenAIApiFactory =
      t.OpenAIApiFp =
      t.OpenAIApiAxiosParamCreator =
      t.CreateImageRequestResponseFormatEnum =
      t.CreateImageRequestSizeEnum =
      t.ChatCompletionResponseMessageRoleEnum =
      t.ChatCompletionRequestMessageRoleEnum =
        void 0);
  const n = M_,
    r = re,
    i = wd;
  (t.ChatCompletionRequestMessageRoleEnum = {
    System: "system",
    User: "user",
    Assistant: "assistant",
    Function: "function",
  }),
    (t.ChatCompletionResponseMessageRoleEnum = {
      System: "system",
      User: "user",
      Assistant: "assistant",
      Function: "function",
    }),
    (t.CreateImageRequestSizeEnum = {
      _256x256: "256x256",
      _512x512: "512x512",
      _1024x1024: "1024x1024",
    }),
    (t.CreateImageRequestResponseFormatEnum = {
      Url: "url",
      B64Json: "b64_json",
    }),
    (t.OpenAIApiAxiosParamCreator = function (o) {
      return {
        cancelFineTune: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("cancelFineTune", "fineTuneId", a);
            const u = "/fine-tunes/{fine_tune_id}/cancel".replace(
                "{fine_tune_id}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              { url: r.toPathString(d), options: h }
            );
          }),
        createAnswer: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createAnswer", "createAnswerRequest", a);
            const u = "/answers",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            (f["Content-Type"] = "application/json"), r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              (h.data = r.serializeDataIfNeeded(a, h, o)),
              { url: r.toPathString(d), options: h }
            );
          }),
        createChatCompletion: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists(
              "createChatCompletion",
              "createChatCompletionRequest",
              a
            );
            const u = "/chat/completions",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            (f["Content-Type"] = "application/json"), r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              (h.data = r.serializeDataIfNeeded(a, h, o)),
              { url: r.toPathString(d), options: h }
            );
          }),
        createClassification: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists(
              "createClassification",
              "createClassificationRequest",
              a
            );
            const u = "/classifications",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            (f["Content-Type"] = "application/json"), r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              (h.data = r.serializeDataIfNeeded(a, h, o)),
              { url: r.toPathString(d), options: h }
            );
          }),
        createCompletion: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists(
              "createCompletion",
              "createCompletionRequest",
              a
            );
            const u = "/completions",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            (f["Content-Type"] = "application/json"), r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              (h.data = r.serializeDataIfNeeded(a, h, o)),
              { url: r.toPathString(d), options: h }
            );
          }),
        createEdit: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createEdit", "createEditRequest", a);
            const u = "/edits",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            (f["Content-Type"] = "application/json"), r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              (h.data = r.serializeDataIfNeeded(a, h, o)),
              { url: r.toPathString(d), options: h }
            );
          }),
        createEmbedding: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createEmbedding", "createEmbeddingRequest", a);
            const u = "/embeddings",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            (f["Content-Type"] = "application/json"), r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              (h.data = r.serializeDataIfNeeded(a, h, o)),
              { url: r.toPathString(d), options: h }
            );
          }),
        createFile: (a, l, u = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createFile", "file", a),
              r.assertParamExists("createFile", "purpose", l);
            const d = "/files",
              c = new URL(d, r.DUMMY_BASE_URL);
            let h;
            o && (h = o.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, h), u),
              p = {},
              _ = {},
              w = new ((o && o.formDataCtor) || FormData)();
            a !== void 0 && w.append("file", a),
              l !== void 0 && w.append("purpose", l),
              (p["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(c, _);
            let g = h && h.headers ? h.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, p), w.getHeaders()),
                  g
                ),
                u.headers
              )),
              (f.data = w),
              { url: r.toPathString(c), options: f }
            );
          }),
        createFineTune: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createFineTune", "createFineTuneRequest", a);
            const u = "/fine-tunes",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            (f["Content-Type"] = "application/json"), r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              (h.data = r.serializeDataIfNeeded(a, h, o)),
              { url: r.toPathString(d), options: h }
            );
          }),
        createImage: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createImage", "createImageRequest", a);
            const u = "/images/generations",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            (f["Content-Type"] = "application/json"), r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              (h.data = r.serializeDataIfNeeded(a, h, o)),
              { url: r.toPathString(d), options: h }
            );
          }),
        createImageEdit: (a, l, u, d, c, h, f, p = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createImageEdit", "image", a),
              r.assertParamExists("createImageEdit", "prompt", l);
            const _ = "/images/edits",
              w = new URL(_, r.DUMMY_BASE_URL);
            let g;
            o && (g = o.baseOptions);
            const m = Object.assign(Object.assign({ method: "POST" }, g), p),
              v = {},
              y = {},
              I = new ((o && o.formDataCtor) || FormData)();
            a !== void 0 && I.append("image", a),
              u !== void 0 && I.append("mask", u),
              l !== void 0 && I.append("prompt", l),
              d !== void 0 && I.append("n", d),
              c !== void 0 && I.append("size", c),
              h !== void 0 && I.append("response_format", h),
              f !== void 0 && I.append("user", f),
              (v["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(w, y);
            let T = g && g.headers ? g.headers : {};
            return (
              (m.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, v), I.getHeaders()),
                  T
                ),
                p.headers
              )),
              (m.data = I),
              { url: r.toPathString(w), options: m }
            );
          }),
        createImageVariation: (a, l, u, d, c, h = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createImageVariation", "image", a);
            const f = "/images/variations",
              p = new URL(f, r.DUMMY_BASE_URL);
            let _;
            o && (_ = o.baseOptions);
            const w = Object.assign(Object.assign({ method: "POST" }, _), h),
              g = {},
              m = {},
              v = new ((o && o.formDataCtor) || FormData)();
            a !== void 0 && v.append("image", a),
              l !== void 0 && v.append("n", l),
              u !== void 0 && v.append("size", u),
              d !== void 0 && v.append("response_format", d),
              c !== void 0 && v.append("user", c),
              (g["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(p, m);
            let y = _ && _.headers ? _.headers : {};
            return (
              (w.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, g), v.getHeaders()),
                  y
                ),
                h.headers
              )),
              (w.data = v),
              { url: r.toPathString(p), options: w }
            );
          }),
        createModeration: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists(
              "createModeration",
              "createModerationRequest",
              a
            );
            const u = "/moderations",
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "POST" }, c), l),
              f = {},
              p = {};
            (f["Content-Type"] = "application/json"), r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              (h.data = r.serializeDataIfNeeded(a, h, o)),
              { url: r.toPathString(d), options: h }
            );
          }),
        createSearch: (a, l, u = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createSearch", "engineId", a),
              r.assertParamExists("createSearch", "createSearchRequest", l);
            const d = "/engines/{engine_id}/search".replace(
                "{engine_id}",
                encodeURIComponent(String(a))
              ),
              c = new URL(d, r.DUMMY_BASE_URL);
            let h;
            o && (h = o.baseOptions);
            const f = Object.assign(Object.assign({ method: "POST" }, h), u),
              p = {},
              _ = {};
            (p["Content-Type"] = "application/json"), r.setSearchParams(c, _);
            let w = h && h.headers ? h.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), w),
                u.headers
              )),
              (f.data = r.serializeDataIfNeeded(l, f, o)),
              { url: r.toPathString(c), options: f }
            );
          }),
        createTranscription: (a, l, u, d, c, h, f = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createTranscription", "file", a),
              r.assertParamExists("createTranscription", "model", l);
            const p = "/audio/transcriptions",
              _ = new URL(p, r.DUMMY_BASE_URL);
            let w;
            o && (w = o.baseOptions);
            const g = Object.assign(Object.assign({ method: "POST" }, w), f),
              m = {},
              v = {},
              y = new ((o && o.formDataCtor) || FormData)();
            a !== void 0 && y.append("file", a),
              l !== void 0 && y.append("model", l),
              u !== void 0 && y.append("prompt", u),
              d !== void 0 && y.append("response_format", d),
              c !== void 0 && y.append("temperature", c),
              h !== void 0 && y.append("language", h),
              (m["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(_, v);
            let I = w && w.headers ? w.headers : {};
            return (
              (g.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, m), y.getHeaders()),
                  I
                ),
                f.headers
              )),
              (g.data = y),
              { url: r.toPathString(_), options: g }
            );
          }),
        createTranslation: (a, l, u, d, c, h = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("createTranslation", "file", a),
              r.assertParamExists("createTranslation", "model", l);
            const f = "/audio/translations",
              p = new URL(f, r.DUMMY_BASE_URL);
            let _;
            o && (_ = o.baseOptions);
            const w = Object.assign(Object.assign({ method: "POST" }, _), h),
              g = {},
              m = {},
              v = new ((o && o.formDataCtor) || FormData)();
            a !== void 0 && v.append("file", a),
              l !== void 0 && v.append("model", l),
              u !== void 0 && v.append("prompt", u),
              d !== void 0 && v.append("response_format", d),
              c !== void 0 && v.append("temperature", c),
              (g["Content-Type"] = "multipart/form-data"),
              r.setSearchParams(p, m);
            let y = _ && _.headers ? _.headers : {};
            return (
              (w.headers = Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, g), v.getHeaders()),
                  y
                ),
                h.headers
              )),
              (w.data = v),
              { url: r.toPathString(p), options: w }
            );
          }),
        deleteFile: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("deleteFile", "fileId", a);
            const u = "/files/{file_id}".replace(
                "{file_id}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "DELETE" }, c), l),
              f = {},
              p = {};
            r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              { url: r.toPathString(d), options: h }
            );
          }),
        deleteModel: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("deleteModel", "model", a);
            const u = "/models/{model}".replace(
                "{model}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "DELETE" }, c), l),
              f = {},
              p = {};
            r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              { url: r.toPathString(d), options: h }
            );
          }),
        downloadFile: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("downloadFile", "fileId", a);
            const u = "/files/{file_id}/content".replace(
                "{file_id}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "GET" }, c), l),
              f = {},
              p = {};
            r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              { url: r.toPathString(d), options: h }
            );
          }),
        listEngines: (a = {}) =>
          e(this, void 0, void 0, function* () {
            const l = "/engines",
              u = new URL(l, r.DUMMY_BASE_URL);
            let d;
            o && (d = o.baseOptions);
            const c = Object.assign(Object.assign({ method: "GET" }, d), a),
              h = {},
              f = {};
            r.setSearchParams(u, f);
            let p = d && d.headers ? d.headers : {};
            return (
              (c.headers = Object.assign(
                Object.assign(Object.assign({}, h), p),
                a.headers
              )),
              { url: r.toPathString(u), options: c }
            );
          }),
        listFiles: (a = {}) =>
          e(this, void 0, void 0, function* () {
            const l = "/files",
              u = new URL(l, r.DUMMY_BASE_URL);
            let d;
            o && (d = o.baseOptions);
            const c = Object.assign(Object.assign({ method: "GET" }, d), a),
              h = {},
              f = {};
            r.setSearchParams(u, f);
            let p = d && d.headers ? d.headers : {};
            return (
              (c.headers = Object.assign(
                Object.assign(Object.assign({}, h), p),
                a.headers
              )),
              { url: r.toPathString(u), options: c }
            );
          }),
        listFineTuneEvents: (a, l, u = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("listFineTuneEvents", "fineTuneId", a);
            const d = "/fine-tunes/{fine_tune_id}/events".replace(
                "{fine_tune_id}",
                encodeURIComponent(String(a))
              ),
              c = new URL(d, r.DUMMY_BASE_URL);
            let h;
            o && (h = o.baseOptions);
            const f = Object.assign(Object.assign({ method: "GET" }, h), u),
              p = {},
              _ = {};
            l !== void 0 && (_.stream = l), r.setSearchParams(c, _);
            let w = h && h.headers ? h.headers : {};
            return (
              (f.headers = Object.assign(
                Object.assign(Object.assign({}, p), w),
                u.headers
              )),
              { url: r.toPathString(c), options: f }
            );
          }),
        listFineTunes: (a = {}) =>
          e(this, void 0, void 0, function* () {
            const l = "/fine-tunes",
              u = new URL(l, r.DUMMY_BASE_URL);
            let d;
            o && (d = o.baseOptions);
            const c = Object.assign(Object.assign({ method: "GET" }, d), a),
              h = {},
              f = {};
            r.setSearchParams(u, f);
            let p = d && d.headers ? d.headers : {};
            return (
              (c.headers = Object.assign(
                Object.assign(Object.assign({}, h), p),
                a.headers
              )),
              { url: r.toPathString(u), options: c }
            );
          }),
        listModels: (a = {}) =>
          e(this, void 0, void 0, function* () {
            const l = "/models",
              u = new URL(l, r.DUMMY_BASE_URL);
            let d;
            o && (d = o.baseOptions);
            const c = Object.assign(Object.assign({ method: "GET" }, d), a),
              h = {},
              f = {};
            r.setSearchParams(u, f);
            let p = d && d.headers ? d.headers : {};
            return (
              (c.headers = Object.assign(
                Object.assign(Object.assign({}, h), p),
                a.headers
              )),
              { url: r.toPathString(u), options: c }
            );
          }),
        retrieveEngine: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("retrieveEngine", "engineId", a);
            const u = "/engines/{engine_id}".replace(
                "{engine_id}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "GET" }, c), l),
              f = {},
              p = {};
            r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              { url: r.toPathString(d), options: h }
            );
          }),
        retrieveFile: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("retrieveFile", "fileId", a);
            const u = "/files/{file_id}".replace(
                "{file_id}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "GET" }, c), l),
              f = {},
              p = {};
            r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              { url: r.toPathString(d), options: h }
            );
          }),
        retrieveFineTune: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("retrieveFineTune", "fineTuneId", a);
            const u = "/fine-tunes/{fine_tune_id}".replace(
                "{fine_tune_id}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "GET" }, c), l),
              f = {},
              p = {};
            r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              { url: r.toPathString(d), options: h }
            );
          }),
        retrieveModel: (a, l = {}) =>
          e(this, void 0, void 0, function* () {
            r.assertParamExists("retrieveModel", "model", a);
            const u = "/models/{model}".replace(
                "{model}",
                encodeURIComponent(String(a))
              ),
              d = new URL(u, r.DUMMY_BASE_URL);
            let c;
            o && (c = o.baseOptions);
            const h = Object.assign(Object.assign({ method: "GET" }, c), l),
              f = {},
              p = {};
            r.setSearchParams(d, p);
            let _ = c && c.headers ? c.headers : {};
            return (
              (h.headers = Object.assign(
                Object.assign(Object.assign({}, f), _),
                l.headers
              )),
              { url: r.toPathString(d), options: h }
            );
          }),
      };
    }),
    (t.OpenAIApiFp = function (o) {
      const a = t.OpenAIApiAxiosParamCreator(o);
      return {
        cancelFineTune(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.cancelFineTune(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createAnswer(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.createAnswer(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createChatCompletion(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.createChatCompletion(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createClassification(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.createClassification(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createCompletion(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.createCompletion(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createEdit(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.createEdit(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createEmbedding(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.createEmbedding(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createFile(l, u, d) {
          return e(this, void 0, void 0, function* () {
            const c = yield a.createFile(l, u, d);
            return r.createRequestFunction(c, n.default, i.BASE_PATH, o);
          });
        },
        createFineTune(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.createFineTune(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createImage(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.createImage(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createImageEdit(l, u, d, c, h, f, p, _) {
          return e(this, void 0, void 0, function* () {
            const w = yield a.createImageEdit(l, u, d, c, h, f, p, _);
            return r.createRequestFunction(w, n.default, i.BASE_PATH, o);
          });
        },
        createImageVariation(l, u, d, c, h, f) {
          return e(this, void 0, void 0, function* () {
            const p = yield a.createImageVariation(l, u, d, c, h, f);
            return r.createRequestFunction(p, n.default, i.BASE_PATH, o);
          });
        },
        createModeration(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.createModeration(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        createSearch(l, u, d) {
          return e(this, void 0, void 0, function* () {
            const c = yield a.createSearch(l, u, d);
            return r.createRequestFunction(c, n.default, i.BASE_PATH, o);
          });
        },
        createTranscription(l, u, d, c, h, f, p) {
          return e(this, void 0, void 0, function* () {
            const _ = yield a.createTranscription(l, u, d, c, h, f, p);
            return r.createRequestFunction(_, n.default, i.BASE_PATH, o);
          });
        },
        createTranslation(l, u, d, c, h, f) {
          return e(this, void 0, void 0, function* () {
            const p = yield a.createTranslation(l, u, d, c, h, f);
            return r.createRequestFunction(p, n.default, i.BASE_PATH, o);
          });
        },
        deleteFile(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.deleteFile(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        deleteModel(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.deleteModel(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        downloadFile(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.downloadFile(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        listEngines(l) {
          return e(this, void 0, void 0, function* () {
            const u = yield a.listEngines(l);
            return r.createRequestFunction(u, n.default, i.BASE_PATH, o);
          });
        },
        listFiles(l) {
          return e(this, void 0, void 0, function* () {
            const u = yield a.listFiles(l);
            return r.createRequestFunction(u, n.default, i.BASE_PATH, o);
          });
        },
        listFineTuneEvents(l, u, d) {
          return e(this, void 0, void 0, function* () {
            const c = yield a.listFineTuneEvents(l, u, d);
            return r.createRequestFunction(c, n.default, i.BASE_PATH, o);
          });
        },
        listFineTunes(l) {
          return e(this, void 0, void 0, function* () {
            const u = yield a.listFineTunes(l);
            return r.createRequestFunction(u, n.default, i.BASE_PATH, o);
          });
        },
        listModels(l) {
          return e(this, void 0, void 0, function* () {
            const u = yield a.listModels(l);
            return r.createRequestFunction(u, n.default, i.BASE_PATH, o);
          });
        },
        retrieveEngine(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.retrieveEngine(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        retrieveFile(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.retrieveFile(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        retrieveFineTune(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.retrieveFineTune(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
        retrieveModel(l, u) {
          return e(this, void 0, void 0, function* () {
            const d = yield a.retrieveModel(l, u);
            return r.createRequestFunction(d, n.default, i.BASE_PATH, o);
          });
        },
      };
    }),
    (t.OpenAIApiFactory = function (o, a, l) {
      const u = t.OpenAIApiFp(o);
      return {
        cancelFineTune(d, c) {
          return u.cancelFineTune(d, c).then((h) => h(l, a));
        },
        createAnswer(d, c) {
          return u.createAnswer(d, c).then((h) => h(l, a));
        },
        createChatCompletion(d, c) {
          return u.createChatCompletion(d, c).then((h) => h(l, a));
        },
        createClassification(d, c) {
          return u.createClassification(d, c).then((h) => h(l, a));
        },
        createCompletion(d, c) {
          return u.createCompletion(d, c).then((h) => h(l, a));
        },
        createEdit(d, c) {
          return u.createEdit(d, c).then((h) => h(l, a));
        },
        createEmbedding(d, c) {
          return u.createEmbedding(d, c).then((h) => h(l, a));
        },
        createFile(d, c, h) {
          return u.createFile(d, c, h).then((f) => f(l, a));
        },
        createFineTune(d, c) {
          return u.createFineTune(d, c).then((h) => h(l, a));
        },
        createImage(d, c) {
          return u.createImage(d, c).then((h) => h(l, a));
        },
        createImageEdit(d, c, h, f, p, _, w, g) {
          return u.createImageEdit(d, c, h, f, p, _, w, g).then((m) => m(l, a));
        },
        createImageVariation(d, c, h, f, p, _) {
          return u.createImageVariation(d, c, h, f, p, _).then((w) => w(l, a));
        },
        createModeration(d, c) {
          return u.createModeration(d, c).then((h) => h(l, a));
        },
        createSearch(d, c, h) {
          return u.createSearch(d, c, h).then((f) => f(l, a));
        },
        createTranscription(d, c, h, f, p, _, w) {
          return u
            .createTranscription(d, c, h, f, p, _, w)
            .then((g) => g(l, a));
        },
        createTranslation(d, c, h, f, p, _) {
          return u.createTranslation(d, c, h, f, p, _).then((w) => w(l, a));
        },
        deleteFile(d, c) {
          return u.deleteFile(d, c).then((h) => h(l, a));
        },
        deleteModel(d, c) {
          return u.deleteModel(d, c).then((h) => h(l, a));
        },
        downloadFile(d, c) {
          return u.downloadFile(d, c).then((h) => h(l, a));
        },
        listEngines(d) {
          return u.listEngines(d).then((c) => c(l, a));
        },
        listFiles(d) {
          return u.listFiles(d).then((c) => c(l, a));
        },
        listFineTuneEvents(d, c, h) {
          return u.listFineTuneEvents(d, c, h).then((f) => f(l, a));
        },
        listFineTunes(d) {
          return u.listFineTunes(d).then((c) => c(l, a));
        },
        listModels(d) {
          return u.listModels(d).then((c) => c(l, a));
        },
        retrieveEngine(d, c) {
          return u.retrieveEngine(d, c).then((h) => h(l, a));
        },
        retrieveFile(d, c) {
          return u.retrieveFile(d, c).then((h) => h(l, a));
        },
        retrieveFineTune(d, c) {
          return u.retrieveFineTune(d, c).then((h) => h(l, a));
        },
        retrieveModel(d, c) {
          return u.retrieveModel(d, c).then((h) => h(l, a));
        },
      };
    });
  class s extends i.BaseAPI {
    cancelFineTune(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .cancelFineTune(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createAnswer(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .createAnswer(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createChatCompletion(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .createChatCompletion(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createClassification(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .createClassification(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createCompletion(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .createCompletion(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createEdit(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .createEdit(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createEmbedding(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .createEmbedding(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createFile(a, l, u) {
      return t
        .OpenAIApiFp(this.configuration)
        .createFile(a, l, u)
        .then((d) => d(this.axios, this.basePath));
    }
    createFineTune(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .createFineTune(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createImage(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .createImage(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createImageEdit(a, l, u, d, c, h, f, p) {
      return t
        .OpenAIApiFp(this.configuration)
        .createImageEdit(a, l, u, d, c, h, f, p)
        .then((_) => _(this.axios, this.basePath));
    }
    createImageVariation(a, l, u, d, c, h) {
      return t
        .OpenAIApiFp(this.configuration)
        .createImageVariation(a, l, u, d, c, h)
        .then((f) => f(this.axios, this.basePath));
    }
    createModeration(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .createModeration(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    createSearch(a, l, u) {
      return t
        .OpenAIApiFp(this.configuration)
        .createSearch(a, l, u)
        .then((d) => d(this.axios, this.basePath));
    }
    createTranscription(a, l, u, d, c, h, f) {
      return t
        .OpenAIApiFp(this.configuration)
        .createTranscription(a, l, u, d, c, h, f)
        .then((p) => p(this.axios, this.basePath));
    }
    createTranslation(a, l, u, d, c, h) {
      return t
        .OpenAIApiFp(this.configuration)
        .createTranslation(a, l, u, d, c, h)
        .then((f) => f(this.axios, this.basePath));
    }
    deleteFile(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .deleteFile(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    deleteModel(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .deleteModel(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    downloadFile(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .downloadFile(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    listEngines(a) {
      return t
        .OpenAIApiFp(this.configuration)
        .listEngines(a)
        .then((l) => l(this.axios, this.basePath));
    }
    listFiles(a) {
      return t
        .OpenAIApiFp(this.configuration)
        .listFiles(a)
        .then((l) => l(this.axios, this.basePath));
    }
    listFineTuneEvents(a, l, u) {
      return t
        .OpenAIApiFp(this.configuration)
        .listFineTuneEvents(a, l, u)
        .then((d) => d(this.axios, this.basePath));
    }
    listFineTunes(a) {
      return t
        .OpenAIApiFp(this.configuration)
        .listFineTunes(a)
        .then((l) => l(this.axios, this.basePath));
    }
    listModels(a) {
      return t
        .OpenAIApiFp(this.configuration)
        .listModels(a)
        .then((l) => l(this.axios, this.basePath));
    }
    retrieveEngine(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .retrieveEngine(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    retrieveFile(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .retrieveFile(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    retrieveFineTune(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .retrieveFineTune(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
    retrieveModel(a, l) {
      return t
        .OpenAIApiFp(this.configuration)
        .retrieveModel(a, l)
        .then((u) => u(this.axios, this.basePath));
    }
  }
  t.OpenAIApi = s;
})(w_);
var Ma = {};
const kS = "openai",
  RS = "3.3.0",
  PS = "Node.js library for the OpenAI API",
  OS = { type: "git", url: "git@github.com:openai/openai-node.git" },
  NS = ["openai", "open", "ai", "gpt-3", "gpt3"],
  AS = "OpenAI",
  xS = "MIT",
  bS = "./dist/index.js",
  DS = "./dist/index.d.ts",
  LS = { build: "tsc --outDir dist/" },
  MS = { axios: "^0.26.0", "form-data": "^4.0.0" },
  FS = { "@types/node": "^12.11.5", typescript: "^3.6.4" },
  US = {
    name: kS,
    version: RS,
    description: PS,
    repository: OS,
    keywords: NS,
    author: AS,
    license: xS,
    main: bS,
    types: DS,
    scripts: LS,
    dependencies: MS,
    devDependencies: FS,
  };
var zl, Xf;
function jS() {
  return (
    Xf ||
      ((Xf = 1),
      (zl = typeof self == "object" ? self.FormData : window.FormData)),
    zl
  );
}
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.Configuration = void 0;
const VS = US;
class BS {
  constructor(e = {}) {
    (this.apiKey = e.apiKey),
      (this.organization = e.organization),
      (this.username = e.username),
      (this.password = e.password),
      (this.accessToken = e.accessToken),
      (this.basePath = e.basePath),
      (this.baseOptions = e.baseOptions),
      (this.formDataCtor = e.formDataCtor),
      this.baseOptions || (this.baseOptions = {}),
      (this.baseOptions.headers = Object.assign(
        {
          "User-Agent": `OpenAI/NodeJS/${VS.version}`,
          Authorization: `Bearer ${this.apiKey}`,
        },
        this.baseOptions.headers
      )),
      this.organization &&
        (this.baseOptions.headers["OpenAI-Organization"] = this.organization),
      this.formDataCtor || (this.formDataCtor = jS());
  }
  isJsonMime(e) {
    const n = new RegExp(
      "^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$",
      "i"
    );
    return (
      e !== null &&
      (n.test(e) || e.toLowerCase() === "application/json-patch+json")
    );
  }
}
Ma.Configuration = BS;
(function (t) {
  var e =
      (en && en.__createBinding) ||
      (Object.create
        ? function (r, i, s, o) {
            o === void 0 && (o = s),
              Object.defineProperty(r, o, {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              });
          }
        : function (r, i, s, o) {
            o === void 0 && (o = s), (r[o] = i[s]);
          }),
    n =
      (en && en.__exportStar) ||
      function (r, i) {
        for (var s in r) s !== "default" && !i.hasOwnProperty(s) && e(i, r, s);
      };
  Object.defineProperty(t, "__esModule", { value: !0 }), n(w_, t), n(Ma, t);
})(Xu);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const F_ = {
  NODE_CLIENT: !1,
  NODE_ADMIN: !1,
  SDK_VERSION: "${JSCORE_VERSION}",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const C = function (t, e) {
    if (!t) throw Xr(e);
  },
  Xr = function (t) {
    return new Error(
      "Firebase Database (" + F_.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t
    );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const U_ = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  zS = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          a = t[n++],
          l =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (l >> 10))),
          (e[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return e.join("");
  },
  Cd = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          a = o ? t[i + 1] : 0,
          l = i + 2 < t.length,
          u = l ? t[i + 2] : 0,
          d = s >> 2,
          c = ((s & 3) << 4) | (a >> 4);
        let h = ((a & 15) << 2) | (u >> 6),
          f = u & 63;
        l || ((f = 64), o || (h = 64)), r.push(n[d], n[c], n[h], n[f]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(U_(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : zS(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          a = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const u = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const c = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || a == null || u == null || c == null))
          throw new HS();
        const h = (s << 2) | (a >> 4);
        if ((r.push(h), u !== 64)) {
          const f = ((a << 4) & 240) | (u >> 2);
          if ((r.push(f), c !== 64)) {
            const p = ((u << 6) & 192) | c;
            r.push(p);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
class HS extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const j_ = function (t) {
    const e = U_(t);
    return Cd.encodeByteArray(e, !0);
  },
  Wo = function (t) {
    return j_(t).replace(/\./g, "");
  },
  $o = function (t) {
    try {
      return Cd.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function WS(t) {
  return V_(void 0, t);
}
function V_(t, e) {
  if (!(e instanceof Object)) return e;
  switch (e.constructor) {
    case Date:
      const n = e;
      return new Date(n.getTime());
    case Object:
      t === void 0 && (t = {});
      break;
    case Array:
      t = [];
      break;
    default:
      return e;
  }
  for (const n in e) !e.hasOwnProperty(n) || !$S(n) || (t[n] = V_(t[n], e[n]));
  return t;
}
function $S(t) {
  return t !== "__proto__";
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qS() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const GS = () => qS().__FIREBASE_DEFAULTS__,
  KS = () => {
    if (typeof process > "u" || typeof process.env > "u") return;
    const t = {}.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  QS = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && $o(t[1]);
    return e && JSON.parse(e);
  },
  Id = () => {
    try {
      return GS() || KS() || QS();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  B_ = (t) => {
    var e, n;
    return (n =
      (e = Id()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t];
  },
  YS = (t) => {
    const e = B_(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  z_ = () => {
    var t;
    return (t = Id()) === null || t === void 0 ? void 0 : t.config;
  },
  H_ = (t) => {
    var e;
    return (e = Id()) === null || e === void 0 ? void 0 : e[`_${t}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fa {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function JS(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = e || "demo-project",
    i = t.iat || 0,
    s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
      {
        iss: `https://securetoken.google.com/${r}`,
        aud: r,
        iat: i,
        exp: i + 3600,
        auth_time: i,
        sub: s,
        user_id: s,
        firebase: { sign_in_provider: "custom", identities: {} },
      },
      t
    ),
    a = "";
  return [Wo(JSON.stringify(n)), Wo(JSON.stringify(o)), a].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ne() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Td() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())
  );
}
function XS() {
  const t =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function W_() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function ZS() {
  const t = Ne();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function $_() {
  return F_.NODE_ADMIN === !0;
}
function eC() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function tC() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nC = "FirebaseError";
class kn extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = nC),
      Object.setPrototypeOf(this, kn.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, ws.prototype.create);
  }
}
class ws {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? rC(s, r) : "Error",
      a = `${this.serviceName}: ${o} (${i}).`;
    return new kn(i, a, r);
  }
}
function rC(t, e) {
  return t.replace(iC, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const iC = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function is(t) {
  return JSON.parse(t);
}
function ce(t) {
  return JSON.stringify(t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const q_ = function (t) {
    let e = {},
      n = {},
      r = {},
      i = "";
    try {
      const s = t.split(".");
      (e = is($o(s[0]) || "")),
        (n = is($o(s[1]) || "")),
        (i = s[2]),
        (r = n.d || {}),
        delete n.d;
    } catch {}
    return { header: e, claims: n, data: r, signature: i };
  },
  sC = function (t) {
    const e = q_(t),
      n = e.claims;
    return !!n && typeof n == "object" && n.hasOwnProperty("iat");
  },
  oC = function (t) {
    const e = q_(t).claims;
    return typeof e == "object" && e.admin === !0;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ht(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Br(t, e) {
  if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
}
function nc(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function qo(t, e, n) {
  const r = {};
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      (r[i] = e.call(n, t[i], i, t));
  return r;
}
function Go(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (Zf(s) && Zf(o)) {
      if (!Go(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Zf(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zr(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function Ti(t) {
  const e = {};
  return (
    t
      .replace(/^\?/, "")
      .split("&")
      .forEach((r) => {
        if (r) {
          const [i, s] = r.split("=");
          e[decodeURIComponent(i)] = decodeURIComponent(s);
        }
      }),
    e
  );
}
function ki(t) {
  const e = t.indexOf("?");
  if (!e) return "";
  const n = t.indexOf("#", e);
  return t.substring(e, n > 0 ? n : void 0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aC {
  constructor() {
    (this.chain_ = []),
      (this.buf_ = []),
      (this.W_ = []),
      (this.pad_ = []),
      (this.inbuf_ = 0),
      (this.total_ = 0),
      (this.blockSize = 512 / 8),
      (this.pad_[0] = 128);
    for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
    this.reset();
  }
  reset() {
    (this.chain_[0] = 1732584193),
      (this.chain_[1] = 4023233417),
      (this.chain_[2] = 2562383102),
      (this.chain_[3] = 271733878),
      (this.chain_[4] = 3285377520),
      (this.inbuf_ = 0),
      (this.total_ = 0);
  }
  compress_(e, n) {
    n || (n = 0);
    const r = this.W_;
    if (typeof e == "string")
      for (let c = 0; c < 16; c++)
        (r[c] =
          (e.charCodeAt(n) << 24) |
          (e.charCodeAt(n + 1) << 16) |
          (e.charCodeAt(n + 2) << 8) |
          e.charCodeAt(n + 3)),
          (n += 4);
    else
      for (let c = 0; c < 16; c++)
        (r[c] = (e[n] << 24) | (e[n + 1] << 16) | (e[n + 2] << 8) | e[n + 3]),
          (n += 4);
    for (let c = 16; c < 80; c++) {
      const h = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16];
      r[c] = ((h << 1) | (h >>> 31)) & 4294967295;
    }
    let i = this.chain_[0],
      s = this.chain_[1],
      o = this.chain_[2],
      a = this.chain_[3],
      l = this.chain_[4],
      u,
      d;
    for (let c = 0; c < 80; c++) {
      c < 40
        ? c < 20
          ? ((u = a ^ (s & (o ^ a))), (d = 1518500249))
          : ((u = s ^ o ^ a), (d = 1859775393))
        : c < 60
        ? ((u = (s & o) | (a & (s | o))), (d = 2400959708))
        : ((u = s ^ o ^ a), (d = 3395469782));
      const h = (((i << 5) | (i >>> 27)) + u + l + d + r[c]) & 4294967295;
      (l = a),
        (a = o),
        (o = ((s << 30) | (s >>> 2)) & 4294967295),
        (s = i),
        (i = h);
    }
    (this.chain_[0] = (this.chain_[0] + i) & 4294967295),
      (this.chain_[1] = (this.chain_[1] + s) & 4294967295),
      (this.chain_[2] = (this.chain_[2] + o) & 4294967295),
      (this.chain_[3] = (this.chain_[3] + a) & 4294967295),
      (this.chain_[4] = (this.chain_[4] + l) & 4294967295);
  }
  update(e, n) {
    if (e == null) return;
    n === void 0 && (n = e.length);
    const r = n - this.blockSize;
    let i = 0;
    const s = this.buf_;
    let o = this.inbuf_;
    for (; i < n; ) {
      if (o === 0) for (; i <= r; ) this.compress_(e, i), (i += this.blockSize);
      if (typeof e == "string") {
        for (; i < n; )
          if (((s[o] = e.charCodeAt(i)), ++o, ++i, o === this.blockSize)) {
            this.compress_(s), (o = 0);
            break;
          }
      } else
        for (; i < n; )
          if (((s[o] = e[i]), ++o, ++i, o === this.blockSize)) {
            this.compress_(s), (o = 0);
            break;
          }
    }
    (this.inbuf_ = o), (this.total_ += n);
  }
  digest() {
    const e = [];
    let n = this.total_ * 8;
    this.inbuf_ < 56
      ? this.update(this.pad_, 56 - this.inbuf_)
      : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    for (let i = this.blockSize - 1; i >= 56; i--)
      (this.buf_[i] = n & 255), (n /= 256);
    this.compress_(this.buf_);
    let r = 0;
    for (let i = 0; i < 5; i++)
      for (let s = 24; s >= 0; s -= 8)
        (e[r] = (this.chain_[i] >> s) & 255), ++r;
    return e;
  }
}
function lC(t, e) {
  const n = new uC(t, e);
  return n.subscribe.bind(n);
}
class uC {
  constructor(e, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e);
    }),
      this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }),
      this.close();
  }
  subscribe(e, n, r) {
    let i;
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    cC(e, ["next", "error", "complete"])
      ? (i = e)
      : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = Hl),
      i.error === void 0 && (i.error = Hl),
      i.complete === void 0 && (i.complete = Hl);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e);
  }
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function cC(t, e) {
  if (typeof t != "object" || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == "function") return !0;
  return !1;
}
function Hl() {}
function kd(t, e) {
  return `${t} failed: ${e} argument `;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dC = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      if (i >= 55296 && i <= 56319) {
        const s = i - 55296;
        r++, C(r < t.length, "Surrogate pair missing trail surrogate.");
        const o = t.charCodeAt(r) - 56320;
        i = 65536 + (s << 10) + o;
      }
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : i < 65536
        ? ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  Ua = function (t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      r < 128
        ? e++
        : r < 2048
        ? (e += 2)
        : r >= 55296 && r <= 56319
        ? ((e += 4), n++)
        : (e += 3);
    }
    return e;
  };
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ce(t) {
  return t && t._delegate ? t._delegate : t;
}
class Gn {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const An = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hC {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new Fa();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (pC(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: An });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = An) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = An) {
    return this.instances.has(e);
  }
  getOptions(e = An) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: fC(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = An) {
    return this.component ? (this.component.multipleInstances ? e : An) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function fC(t) {
  return t === An ? void 0 : t;
}
function pC(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mC {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new hC(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var W;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(W || (W = {}));
const gC = {
    debug: W.DEBUG,
    verbose: W.VERBOSE,
    info: W.INFO,
    warn: W.WARN,
    error: W.ERROR,
    silent: W.SILENT,
  },
  _C = W.INFO,
  vC = {
    [W.DEBUG]: "log",
    [W.VERBOSE]: "log",
    [W.INFO]: "info",
    [W.WARN]: "warn",
    [W.ERROR]: "error",
  },
  yC = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = vC[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class Rd {
  constructor(e) {
    (this.name = e),
      (this._logLevel = _C),
      (this._logHandler = yC),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in W))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? gC[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, W.DEBUG, ...e),
      this._logHandler(this, W.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, W.VERBOSE, ...e),
      this._logHandler(this, W.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, W.INFO, ...e),
      this._logHandler(this, W.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, W.WARN, ...e),
      this._logHandler(this, W.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, W.ERROR, ...e),
      this._logHandler(this, W.ERROR, ...e);
  }
}
const EC = (t, e) => e.some((n) => t instanceof n);
let ep, tp;
function wC() {
  return (
    ep ||
    (ep = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function SC() {
  return (
    tp ||
    (tp = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const G_ = new WeakMap(),
  rc = new WeakMap(),
  K_ = new WeakMap(),
  Wl = new WeakMap(),
  Pd = new WeakMap();
function CC(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(hn(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && G_.set(n, t);
      })
      .catch(() => {}),
    Pd.set(e, t),
    e
  );
}
function IC(t) {
  if (rc.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", s),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i();
      };
    t.addEventListener("complete", s),
      t.addEventListener("error", o),
      t.addEventListener("abort", o);
  });
  rc.set(t, e);
}
let ic = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return rc.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || K_.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return hn(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function TC(t) {
  ic = t(ic);
}
function kC(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call($l(this), e, ...n);
        return K_.set(r, e.sort ? e.sort() : [e]), hn(r);
      }
    : SC().includes(t)
    ? function (...e) {
        return t.apply($l(this), e), hn(G_.get(this));
      }
    : function (...e) {
        return hn(t.apply($l(this), e));
      };
}
function RC(t) {
  return typeof t == "function"
    ? kC(t)
    : (t instanceof IDBTransaction && IC(t),
      EC(t, wC()) ? new Proxy(t, ic) : t);
}
function hn(t) {
  if (t instanceof IDBRequest) return CC(t);
  if (Wl.has(t)) return Wl.get(t);
  const e = RC(t);
  return e !== t && (Wl.set(t, e), Pd.set(e, t)), e;
}
const $l = (t) => Pd.get(t);
function PC(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = hn(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(hn(o.result), l.oldVersion, l.newVersion, hn(o.transaction), l);
      }),
    n && o.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        s && l.addEventListener("close", () => s()),
          i &&
            l.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    a
  );
}
const OC = ["get", "getKey", "getAll", "getAllKeys", "count"],
  NC = ["put", "add", "delete", "clear"],
  ql = new Map();
function np(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (ql.get(e)) return ql.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = NC.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || OC.includes(n))
  )
    return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let u = l.store;
    return (
      r && (u = u.index(a.shift())),
      (await Promise.all([u[n](...a), i && l.done]))[0]
    );
  };
  return ql.set(e, s), s;
}
TC((t) => ({
  ...t,
  get: (e, n, r) => np(e, n) || t.get(e, n, r),
  has: (e, n) => !!np(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AC {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (xC(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function xC(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const sc = "@firebase/app",
  rp = "0.9.15";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kn = new Rd("@firebase/app"),
  bC = "@firebase/app-compat",
  DC = "@firebase/analytics-compat",
  LC = "@firebase/analytics",
  MC = "@firebase/app-check-compat",
  FC = "@firebase/app-check",
  UC = "@firebase/auth",
  jC = "@firebase/auth-compat",
  VC = "@firebase/database",
  BC = "@firebase/database-compat",
  zC = "@firebase/functions",
  HC = "@firebase/functions-compat",
  WC = "@firebase/installations",
  $C = "@firebase/installations-compat",
  qC = "@firebase/messaging",
  GC = "@firebase/messaging-compat",
  KC = "@firebase/performance",
  QC = "@firebase/performance-compat",
  YC = "@firebase/remote-config",
  JC = "@firebase/remote-config-compat",
  XC = "@firebase/storage",
  ZC = "@firebase/storage-compat",
  eI = "@firebase/firestore",
  tI = "@firebase/firestore-compat",
  nI = "firebase",
  rI = "10.1.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oc = "[DEFAULT]",
  iI = {
    [sc]: "fire-core",
    [bC]: "fire-core-compat",
    [LC]: "fire-analytics",
    [DC]: "fire-analytics-compat",
    [FC]: "fire-app-check",
    [MC]: "fire-app-check-compat",
    [UC]: "fire-auth",
    [jC]: "fire-auth-compat",
    [VC]: "fire-rtdb",
    [BC]: "fire-rtdb-compat",
    [zC]: "fire-fn",
    [HC]: "fire-fn-compat",
    [WC]: "fire-iid",
    [$C]: "fire-iid-compat",
    [qC]: "fire-fcm",
    [GC]: "fire-fcm-compat",
    [KC]: "fire-perf",
    [QC]: "fire-perf-compat",
    [YC]: "fire-rc",
    [JC]: "fire-rc-compat",
    [XC]: "fire-gcs",
    [ZC]: "fire-gcs-compat",
    [eI]: "fire-fst",
    [tI]: "fire-fst-compat",
    "fire-js": "fire-js",
    [nI]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ko = new Map(),
  ac = new Map();
function sI(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    Kn.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function zr(t) {
  const e = t.name;
  if (ac.has(e))
    return (
      Kn.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  ac.set(e, t);
  for (const n of Ko.values()) sI(n, t);
  return !0;
}
function Od(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oI = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  fn = new ws("app", "Firebase", oI);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aI {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Gn("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw fn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ei = rI;
function Q_(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: oc, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != "string" || !i)
    throw fn.create("bad-app-name", { appName: String(i) });
  if ((n || (n = z_()), !n)) throw fn.create("no-options");
  const s = Ko.get(i);
  if (s) {
    if (Go(n, s.options) && Go(r, s.config)) return s;
    throw fn.create("duplicate-app", { appName: i });
  }
  const o = new mC(i);
  for (const l of ac.values()) o.addComponent(l);
  const a = new aI(n, r, o);
  return Ko.set(i, a), a;
}
function Y_(t = oc) {
  const e = Ko.get(t);
  if (!e && t === oc && z_()) return Q_();
  if (!e) throw fn.create("no-app", { appName: t });
  return e;
}
function pn(t, e, n) {
  var r;
  let i = (r = iI[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push("and"),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      Kn.warn(a.join(" "));
    return;
  }
  zr(new Gn(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lI = "firebase-heartbeat-database",
  uI = 1,
  ss = "firebase-heartbeat-store";
let Gl = null;
function J_() {
  return (
    Gl ||
      (Gl = PC(lI, uI, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(ss);
          }
        },
      }).catch((t) => {
        throw fn.create("idb-open", { originalErrorMessage: t.message });
      })),
    Gl
  );
}
async function cI(t) {
  try {
    return await (await J_()).transaction(ss).objectStore(ss).get(X_(t));
  } catch (e) {
    if (e instanceof kn) Kn.warn(e.message);
    else {
      const n = fn.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      Kn.warn(n.message);
    }
  }
}
async function ip(t, e) {
  try {
    const r = (await J_()).transaction(ss, "readwrite");
    await r.objectStore(ss).put(e, X_(t)), await r.done;
  } catch (n) {
    if (n instanceof kn) Kn.warn(n.message);
    else {
      const r = fn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Kn.warn(r.message);
    }
  }
}
function X_(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dI = 1024,
  hI = 30 * 24 * 60 * 60 * 1e3;
class fI {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new mI(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = sp();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((i) => {
            const s = new Date(i.date).valueOf();
            return Date.now() - s <= hI;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const e = sp(),
      { heartbeatsToSend: n, unsentEntries: r } = pI(
        this._heartbeatsCache.heartbeats
      ),
      i = Wo(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = e),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function sp() {
  return new Date().toISOString().substring(0, 10);
}
function pI(t, e = dI) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), op(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), op(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class mI {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return eC()
      ? tC()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await cI(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ip(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ip(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function op(t) {
  return Wo(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gI(t) {
  zr(new Gn("platform-logger", (e) => new AC(e), "PRIVATE")),
    zr(new Gn("heartbeat", (e) => new fI(e), "PRIVATE")),
    pn(sc, rp, t),
    pn(sc, rp, "esm2017"),
    pn("fire-js", "");
}
gI("");
const ap = "@firebase/database",
  lp = "1.0.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Z_ = "";
function _I(t) {
  Z_ = t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vI {
  constructor(e) {
    (this.domStorage_ = e), (this.prefix_ = "firebase:");
  }
  set(e, n) {
    n == null
      ? this.domStorage_.removeItem(this.prefixedName_(e))
      : this.domStorage_.setItem(this.prefixedName_(e), ce(n));
  }
  get(e) {
    const n = this.domStorage_.getItem(this.prefixedName_(e));
    return n == null ? null : is(n);
  }
  remove(e) {
    this.domStorage_.removeItem(this.prefixedName_(e));
  }
  prefixedName_(e) {
    return this.prefix_ + e;
  }
  toString() {
    return this.domStorage_.toString();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yI {
  constructor() {
    (this.cache_ = {}), (this.isInMemoryStorage = !0);
  }
  set(e, n) {
    n == null ? delete this.cache_[e] : (this.cache_[e] = n);
  }
  get(e) {
    return Ht(this.cache_, e) ? this.cache_[e] : null;
  }
  remove(e) {
    delete this.cache_[e];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ev = function (t) {
    try {
      if (typeof window < "u" && typeof window[t] < "u") {
        const e = window[t];
        return (
          e.setItem("firebase:sentinel", "cache"),
          e.removeItem("firebase:sentinel"),
          new vI(e)
        );
      }
    } catch {}
    return new yI();
  },
  Mn = ev("localStorage"),
  lc = ev("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Or = new Rd("@firebase/database"),
  EI = (function () {
    let t = 1;
    return function () {
      return t++;
    };
  })(),
  tv = function (t) {
    const e = dC(t),
      n = new aC();
    n.update(e);
    const r = n.digest();
    return Cd.encodeByteArray(r);
  },
  Ss = function (...t) {
    let e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      Array.isArray(r) ||
      (r && typeof r == "object" && typeof r.length == "number")
        ? (e += Ss.apply(null, r))
        : typeof r == "object"
        ? (e += ce(r))
        : (e += r),
        (e += " ");
    }
    return e;
  };
let Vn = null,
  up = !0;
const wI = function (t, e) {
    C(!e || t === !0 || t === !1, "Can't turn on custom loggers persistently."),
      t === !0
        ? ((Or.logLevel = W.VERBOSE),
          (Vn = Or.log.bind(Or)),
          e && lc.set("logging_enabled", !0))
        : typeof t == "function"
        ? (Vn = t)
        : ((Vn = null), lc.remove("logging_enabled"));
  },
  Pe = function (...t) {
    if (
      (up === !0 &&
        ((up = !1), Vn === null && lc.get("logging_enabled") === !0 && wI(!0)),
      Vn)
    ) {
      const e = Ss.apply(null, t);
      Vn(e);
    }
  },
  Cs = function (t) {
    return function (...e) {
      Pe(t, ...e);
    };
  },
  uc = function (...t) {
    const e = "FIREBASE INTERNAL ERROR: " + Ss(...t);
    Or.error(e);
  },
  Vt = function (...t) {
    const e = `FIREBASE FATAL ERROR: ${Ss(...t)}`;
    throw (Or.error(e), new Error(e));
  },
  ze = function (...t) {
    const e = "FIREBASE WARNING: " + Ss(...t);
    Or.warn(e);
  },
  SI = function () {
    typeof window < "u" &&
      window.location &&
      window.location.protocol &&
      window.location.protocol.indexOf("https:") !== -1 &&
      ze(
        "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
      );
  },
  nv = function (t) {
    return (
      typeof t == "number" &&
      (t !== t ||
        t === Number.POSITIVE_INFINITY ||
        t === Number.NEGATIVE_INFINITY)
    );
  },
  CI = function (t) {
    if (document.readyState === "complete") t();
    else {
      let e = !1;
      const n = function () {
        if (!document.body) {
          setTimeout(n, Math.floor(10));
          return;
        }
        e || ((e = !0), t());
      };
      document.addEventListener
        ? (document.addEventListener("DOMContentLoaded", n, !1),
          window.addEventListener("load", n, !1))
        : document.attachEvent &&
          (document.attachEvent("onreadystatechange", () => {
            document.readyState === "complete" && n();
          }),
          window.attachEvent("onload", n));
    }
  },
  Hr = "[MIN_NAME]",
  Qn = "[MAX_NAME]",
  ti = function (t, e) {
    if (t === e) return 0;
    if (t === Hr || e === Qn) return -1;
    if (e === Hr || t === Qn) return 1;
    {
      const n = cp(t),
        r = cp(e);
      return n !== null
        ? r !== null
          ? n - r === 0
            ? t.length - e.length
            : n - r
          : -1
        : r !== null
        ? 1
        : t < e
        ? -1
        : 1;
    }
  },
  II = function (t, e) {
    return t === e ? 0 : t < e ? -1 : 1;
  },
  _i = function (t, e) {
    if (e && t in e) return e[t];
    throw new Error("Missing required key (" + t + ") in object: " + ce(e));
  },
  Nd = function (t) {
    if (typeof t != "object" || t === null) return ce(t);
    const e = [];
    for (const r in t) e.push(r);
    e.sort();
    let n = "{";
    for (let r = 0; r < e.length; r++)
      r !== 0 && (n += ","), (n += ce(e[r])), (n += ":"), (n += Nd(t[e[r]]));
    return (n += "}"), n;
  },
  rv = function (t, e) {
    const n = t.length;
    if (n <= e) return [t];
    const r = [];
    for (let i = 0; i < n; i += e)
      i + e > n ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));
    return r;
  };
function He(t, e) {
  for (const n in t) t.hasOwnProperty(n) && e(n, t[n]);
}
const iv = function (t) {
    C(!nv(t), "Invalid JSON number");
    const e = 11,
      n = 52,
      r = (1 << (e - 1)) - 1;
    let i, s, o, a, l;
    t === 0
      ? ((s = 0), (o = 0), (i = 1 / t === -1 / 0 ? 1 : 0))
      : ((i = t < 0),
        (t = Math.abs(t)),
        t >= Math.pow(2, 1 - r)
          ? ((a = Math.min(Math.floor(Math.log(t) / Math.LN2), r)),
            (s = a + r),
            (o = Math.round(t * Math.pow(2, n - a) - Math.pow(2, n))))
          : ((s = 0), (o = Math.round(t / Math.pow(2, 1 - r - n)))));
    const u = [];
    for (l = n; l; l -= 1) u.push(o % 2 ? 1 : 0), (o = Math.floor(o / 2));
    for (l = e; l; l -= 1) u.push(s % 2 ? 1 : 0), (s = Math.floor(s / 2));
    u.push(i ? 1 : 0), u.reverse();
    const d = u.join("");
    let c = "";
    for (l = 0; l < 64; l += 8) {
      let h = parseInt(d.substr(l, 8), 2).toString(16);
      h.length === 1 && (h = "0" + h), (c = c + h);
    }
    return c.toLowerCase();
  },
  TI = function () {
    return !!(
      typeof window == "object" &&
      window.chrome &&
      window.chrome.extension &&
      !/^chrome/.test(window.location.href)
    );
  },
  kI = function () {
    return typeof Windows == "object" && typeof Windows.UI == "object";
  };
function RI(t, e) {
  let n = "Unknown Error";
  t === "too_big"
    ? (n =
        "The data requested exceeds the maximum size that can be accessed with a single request.")
    : t === "permission_denied"
    ? (n = "Client doesn't have permission to access the desired data.")
    : t === "unavailable" && (n = "The service is unavailable");
  const r = new Error(t + " at " + e._path.toString() + ": " + n);
  return (r.code = t.toUpperCase()), r;
}
const PI = new RegExp("^-?(0*)\\d{1,10}$"),
  OI = -2147483648,
  NI = 2147483647,
  cp = function (t) {
    if (PI.test(t)) {
      const e = Number(t);
      if (e >= OI && e <= NI) return e;
    }
    return null;
  },
  ni = function (t) {
    try {
      t();
    } catch (e) {
      setTimeout(() => {
        const n = e.stack || "";
        throw (ze("Exception was thrown by user callback.", n), e);
      }, Math.floor(0));
    }
  },
  AI = function () {
    return (
      (
        (typeof window == "object" &&
          window.navigator &&
          window.navigator.userAgent) ||
        ""
      ).search(
        /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
      ) >= 0
    );
  },
  Mi = function (t, e) {
    const n = setTimeout(t, e);
    return (
      typeof n == "number" && typeof Deno < "u" && Deno.unrefTimer
        ? Deno.unrefTimer(n)
        : typeof n == "object" && n.unref && n.unref(),
      n
    );
  };
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xI {
  constructor(e, n) {
    (this.appName_ = e),
      (this.appCheckProvider = n),
      (this.appCheck = n == null ? void 0 : n.getImmediate({ optional: !0 })),
      this.appCheck || n == null || n.get().then((r) => (this.appCheck = r));
  }
  getToken(e) {
    return this.appCheck
      ? this.appCheck.getToken(e)
      : new Promise((n, r) => {
          setTimeout(() => {
            this.appCheck ? this.getToken(e).then(n, r) : n(null);
          }, 0);
        });
  }
  addTokenChangeListener(e) {
    var n;
    (n = this.appCheckProvider) === null ||
      n === void 0 ||
      n.get().then((r) => r.addTokenListener(e));
  }
  notifyForInvalidToken() {
    ze(
      `Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bI {
  constructor(e, n, r) {
    (this.appName_ = e),
      (this.firebaseOptions_ = n),
      (this.authProvider_ = r),
      (this.auth_ = null),
      (this.auth_ = r.getImmediate({ optional: !0 })),
      this.auth_ || r.onInit((i) => (this.auth_ = i));
  }
  getToken(e) {
    return this.auth_
      ? this.auth_
          .getToken(e)
          .catch((n) =>
            n && n.code === "auth/token-not-initialized"
              ? (Pe(
                  "Got auth/token-not-initialized error.  Treating as null token."
                ),
                null)
              : Promise.reject(n)
          )
      : new Promise((n, r) => {
          setTimeout(() => {
            this.auth_ ? this.getToken(e).then(n, r) : n(null);
          }, 0);
        });
  }
  addTokenChangeListener(e) {
    this.auth_
      ? this.auth_.addAuthTokenListener(e)
      : this.authProvider_.get().then((n) => n.addAuthTokenListener(e));
  }
  removeTokenChangeListener(e) {
    this.authProvider_.get().then((n) => n.removeAuthTokenListener(e));
  }
  notifyForInvalidToken() {
    let e =
      'Provided authentication credentials for the app named "' +
      this.appName_ +
      '" are invalid. This usually indicates your app was not initialized correctly. ';
    "credential" in this.firebaseOptions_
      ? (e +=
          'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
      : "serviceAccount" in this.firebaseOptions_
      ? (e +=
          'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
      : (e +=
          'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
      ze(e);
  }
}
class Nr {
  constructor(e) {
    this.accessToken = e;
  }
  getToken(e) {
    return Promise.resolve({ accessToken: this.accessToken });
  }
  addTokenChangeListener(e) {
    e(this.accessToken);
  }
  removeTokenChangeListener(e) {}
  notifyForInvalidToken() {}
}
Nr.OWNER = "owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ad = "5",
  sv = "v",
  ov = "s",
  av = "r",
  lv = "f",
  uv =
    /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
  cv = "ls",
  dv = "p",
  cc = "ac",
  hv = "websocket",
  fv = "long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pv {
  constructor(e, n, r, i, s = !1, o = "", a = !1, l = !1) {
    (this.secure = n),
      (this.namespace = r),
      (this.webSocketOnly = i),
      (this.nodeAdmin = s),
      (this.persistenceKey = o),
      (this.includeNamespaceInQueryParams = a),
      (this.isUsingEmulator = l),
      (this._host = e.toLowerCase()),
      (this._domain = this._host.substr(this._host.indexOf(".") + 1)),
      (this.internalHost = Mn.get("host:" + e) || this._host);
  }
  isCacheableHost() {
    return this.internalHost.substr(0, 2) === "s-";
  }
  isCustomHost() {
    return (
      this._domain !== "firebaseio.com" &&
      this._domain !== "firebaseio-demo.com"
    );
  }
  get host() {
    return this._host;
  }
  set host(e) {
    e !== this.internalHost &&
      ((this.internalHost = e),
      this.isCacheableHost() &&
        Mn.set("host:" + this._host, this.internalHost));
  }
  toString() {
    let e = this.toURLString();
    return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e;
  }
  toURLString() {
    const e = this.secure ? "https://" : "http://",
      n = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
    return `${e}${this.host}/${n}`;
  }
}
function DI(t) {
  return (
    t.host !== t.internalHost ||
    t.isCustomHost() ||
    t.includeNamespaceInQueryParams
  );
}
function mv(t, e, n) {
  C(typeof e == "string", "typeof type must == string"),
    C(typeof n == "object", "typeof params must == object");
  let r;
  if (e === hv) r = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
  else if (e === fv)
    r = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?";
  else throw new Error("Unknown connection type: " + e);
  DI(t) && (n.ns = t.namespace);
  const i = [];
  return (
    He(n, (s, o) => {
      i.push(s + "=" + o);
    }),
    r + i.join("&")
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LI {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(e, n = 1) {
    Ht(this.counters_, e) || (this.counters_[e] = 0), (this.counters_[e] += n);
  }
  get() {
    return WS(this.counters_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kl = {},
  Ql = {};
function xd(t) {
  const e = t.toString();
  return Kl[e] || (Kl[e] = new LI()), Kl[e];
}
function MI(t, e) {
  const n = t.toString();
  return Ql[n] || (Ql[n] = e()), Ql[n];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FI {
  constructor(e) {
    (this.onMessage_ = e),
      (this.pendingResponses = []),
      (this.currentResponseNum = 0),
      (this.closeAfterResponse = -1),
      (this.onClose = null);
  }
  closeAfter(e, n) {
    (this.closeAfterResponse = e),
      (this.onClose = n),
      this.closeAfterResponse < this.currentResponseNum &&
        (this.onClose(), (this.onClose = null));
  }
  handleResponse(e, n) {
    for (
      this.pendingResponses[e] = n;
      this.pendingResponses[this.currentResponseNum];

    ) {
      const r = this.pendingResponses[this.currentResponseNum];
      delete this.pendingResponses[this.currentResponseNum];
      for (let i = 0; i < r.length; ++i)
        r[i] &&
          ni(() => {
            this.onMessage_(r[i]);
          });
      if (this.currentResponseNum === this.closeAfterResponse) {
        this.onClose && (this.onClose(), (this.onClose = null));
        break;
      }
      this.currentResponseNum++;
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dp = "start",
  UI = "close",
  jI = "pLPCommand",
  VI = "pRTLPCB",
  gv = "id",
  _v = "pw",
  vv = "ser",
  BI = "cb",
  zI = "seg",
  HI = "ts",
  WI = "d",
  $I = "dframe",
  yv = 1870,
  Ev = 30,
  qI = yv - Ev,
  GI = 25e3,
  KI = 3e4;
class wr {
  constructor(e, n, r, i, s, o, a) {
    (this.connId = e),
      (this.repoInfo = n),
      (this.applicationId = r),
      (this.appCheckToken = i),
      (this.authToken = s),
      (this.transportSessionId = o),
      (this.lastSessionId = a),
      (this.bytesSent = 0),
      (this.bytesReceived = 0),
      (this.everConnected_ = !1),
      (this.log_ = Cs(e)),
      (this.stats_ = xd(n)),
      (this.urlFn = (l) => (
        this.appCheckToken && (l[cc] = this.appCheckToken), mv(n, fv, l)
      ));
  }
  open(e, n) {
    (this.curSegmentNum = 0),
      (this.onDisconnect_ = n),
      (this.myPacketOrderer = new FI(e)),
      (this.isClosed_ = !1),
      (this.connectTimeoutTimer_ = setTimeout(() => {
        this.log_("Timed out trying to connect."),
          this.onClosed_(),
          (this.connectTimeoutTimer_ = null);
      }, Math.floor(KI))),
      CI(() => {
        if (this.isClosed_) return;
        this.scriptTagHolder = new bd(
          (...s) => {
            const [o, a, l, u, d] = s;
            if ((this.incrementIncomingBytes_(s), !!this.scriptTagHolder))
              if (
                (this.connectTimeoutTimer_ &&
                  (clearTimeout(this.connectTimeoutTimer_),
                  (this.connectTimeoutTimer_ = null)),
                (this.everConnected_ = !0),
                o === dp)
              )
                (this.id = a), (this.password = l);
              else if (o === UI)
                a
                  ? ((this.scriptTagHolder.sendNewPolls = !1),
                    this.myPacketOrderer.closeAfter(a, () => {
                      this.onClosed_();
                    }))
                  : this.onClosed_();
              else throw new Error("Unrecognized command received: " + o);
          },
          (...s) => {
            const [o, a] = s;
            this.incrementIncomingBytes_(s),
              this.myPacketOrderer.handleResponse(o, a);
          },
          () => {
            this.onClosed_();
          },
          this.urlFn
        );
        const r = {};
        (r[dp] = "t"),
          (r[vv] = Math.floor(Math.random() * 1e8)),
          this.scriptTagHolder.uniqueCallbackIdentifier &&
            (r[BI] = this.scriptTagHolder.uniqueCallbackIdentifier),
          (r[sv] = Ad),
          this.transportSessionId && (r[ov] = this.transportSessionId),
          this.lastSessionId && (r[cv] = this.lastSessionId),
          this.applicationId && (r[dv] = this.applicationId),
          this.appCheckToken && (r[cc] = this.appCheckToken),
          typeof location < "u" &&
            location.hostname &&
            uv.test(location.hostname) &&
            (r[av] = lv);
        const i = this.urlFn(r);
        this.log_("Connecting via long-poll to " + i),
          this.scriptTagHolder.addTag(i, () => {});
      });
  }
  start() {
    this.scriptTagHolder.startLongPoll(this.id, this.password),
      this.addDisconnectPingFrame(this.id, this.password);
  }
  static forceAllow() {
    wr.forceAllow_ = !0;
  }
  static forceDisallow() {
    wr.forceDisallow_ = !0;
  }
  static isAvailable() {
    return wr.forceAllow_
      ? !0
      : !wr.forceDisallow_ &&
          typeof document < "u" &&
          document.createElement != null &&
          !TI() &&
          !kI();
  }
  markConnectionHealthy() {}
  shutdown_() {
    (this.isClosed_ = !0),
      this.scriptTagHolder &&
        (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
      this.myDisconnFrame &&
        (document.body.removeChild(this.myDisconnFrame),
        (this.myDisconnFrame = null)),
      this.connectTimeoutTimer_ &&
        (clearTimeout(this.connectTimeoutTimer_),
        (this.connectTimeoutTimer_ = null));
  }
  onClosed_() {
    this.isClosed_ ||
      (this.log_("Longpoll is closing itself"),
      this.shutdown_(),
      this.onDisconnect_ &&
        (this.onDisconnect_(this.everConnected_), (this.onDisconnect_ = null)));
  }
  close() {
    this.isClosed_ ||
      (this.log_("Longpoll is being closed."), this.shutdown_());
  }
  send(e) {
    const n = ce(e);
    (this.bytesSent += n.length),
      this.stats_.incrementCounter("bytes_sent", n.length);
    const r = j_(n),
      i = rv(r, qI);
    for (let s = 0; s < i.length; s++)
      this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[s]),
        this.curSegmentNum++;
  }
  addDisconnectPingFrame(e, n) {
    this.myDisconnFrame = document.createElement("iframe");
    const r = {};
    (r[$I] = "t"),
      (r[gv] = e),
      (r[_v] = n),
      (this.myDisconnFrame.src = this.urlFn(r)),
      (this.myDisconnFrame.style.display = "none"),
      document.body.appendChild(this.myDisconnFrame);
  }
  incrementIncomingBytes_(e) {
    const n = ce(e).length;
    (this.bytesReceived += n),
      this.stats_.incrementCounter("bytes_received", n);
  }
}
class bd {
  constructor(e, n, r, i) {
    (this.onDisconnect = r),
      (this.urlFn = i),
      (this.outstandingRequests = new Set()),
      (this.pendingSegs = []),
      (this.currentSerial = Math.floor(Math.random() * 1e8)),
      (this.sendNewPolls = !0);
    {
      (this.uniqueCallbackIdentifier = EI()),
        (window[jI + this.uniqueCallbackIdentifier] = e),
        (window[VI + this.uniqueCallbackIdentifier] = n),
        (this.myIFrame = bd.createIFrame_());
      let s = "";
      this.myIFrame.src &&
        this.myIFrame.src.substr(0, 11) === "javascript:" &&
        (s = '<script>document.domain="' + document.domain + '";</script>');
      const o = "<html><body>" + s + "</body></html>";
      try {
        this.myIFrame.doc.open(),
          this.myIFrame.doc.write(o),
          this.myIFrame.doc.close();
      } catch (a) {
        Pe("frame writing exception"), a.stack && Pe(a.stack), Pe(a);
      }
    }
  }
  static createIFrame_() {
    const e = document.createElement("iframe");
    if (((e.style.display = "none"), document.body)) {
      document.body.appendChild(e);
      try {
        e.contentWindow.document || Pe("No IE domain setting required");
      } catch {
        const r = document.domain;
        e.src =
          "javascript:void((function(){document.open();document.domain='" +
          r +
          "';document.close();})())";
      }
    } else
      throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
    return (
      e.contentDocument
        ? (e.doc = e.contentDocument)
        : e.contentWindow
        ? (e.doc = e.contentWindow.document)
        : e.document && (e.doc = e.document),
      e
    );
  }
  close() {
    (this.alive = !1),
      this.myIFrame &&
        ((this.myIFrame.doc.body.textContent = ""),
        setTimeout(() => {
          this.myIFrame !== null &&
            (document.body.removeChild(this.myIFrame), (this.myIFrame = null));
        }, Math.floor(0)));
    const e = this.onDisconnect;
    e && ((this.onDisconnect = null), e());
  }
  startLongPoll(e, n) {
    for (this.myID = e, this.myPW = n, this.alive = !0; this.newRequest_(); );
  }
  newRequest_() {
    if (
      this.alive &&
      this.sendNewPolls &&
      this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)
    ) {
      this.currentSerial++;
      const e = {};
      (e[gv] = this.myID), (e[_v] = this.myPW), (e[vv] = this.currentSerial);
      let n = this.urlFn(e),
        r = "",
        i = 0;
      for (
        ;
        this.pendingSegs.length > 0 &&
        this.pendingSegs[0].d.length + Ev + r.length <= yv;

      ) {
        const o = this.pendingSegs.shift();
        (r =
          r +
          "&" +
          zI +
          i +
          "=" +
          o.seg +
          "&" +
          HI +
          i +
          "=" +
          o.ts +
          "&" +
          WI +
          i +
          "=" +
          o.d),
          i++;
      }
      return (n = n + r), this.addLongPollTag_(n, this.currentSerial), !0;
    } else return !1;
  }
  enqueueSegment(e, n, r) {
    this.pendingSegs.push({ seg: e, ts: n, d: r }),
      this.alive && this.newRequest_();
  }
  addLongPollTag_(e, n) {
    this.outstandingRequests.add(n);
    const r = () => {
        this.outstandingRequests.delete(n), this.newRequest_();
      },
      i = setTimeout(r, Math.floor(GI)),
      s = () => {
        clearTimeout(i), r();
      };
    this.addTag(e, s);
  }
  addTag(e, n) {
    setTimeout(() => {
      try {
        if (!this.sendNewPolls) return;
        const r = this.myIFrame.doc.createElement("script");
        (r.type = "text/javascript"),
          (r.async = !0),
          (r.src = e),
          (r.onload = r.onreadystatechange =
            function () {
              const i = r.readyState;
              (!i || i === "loaded" || i === "complete") &&
                ((r.onload = r.onreadystatechange = null),
                r.parentNode && r.parentNode.removeChild(r),
                n());
            }),
          (r.onerror = () => {
            Pe("Long-poll script failed to load: " + e),
              (this.sendNewPolls = !1),
              this.close();
          }),
          this.myIFrame.doc.body.appendChild(r);
      } catch {}
    }, Math.floor(1));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const QI = 16384,
  YI = 45e3;
let Qo = null;
typeof MozWebSocket < "u"
  ? (Qo = MozWebSocket)
  : typeof WebSocket < "u" && (Qo = WebSocket);
class lt {
  constructor(e, n, r, i, s, o, a) {
    (this.connId = e),
      (this.applicationId = r),
      (this.appCheckToken = i),
      (this.authToken = s),
      (this.keepaliveTimer = null),
      (this.frames = null),
      (this.totalFrames = 0),
      (this.bytesSent = 0),
      (this.bytesReceived = 0),
      (this.log_ = Cs(this.connId)),
      (this.stats_ = xd(n)),
      (this.connURL = lt.connectionURL_(n, o, a, i, r)),
      (this.nodeAdmin = n.nodeAdmin);
  }
  static connectionURL_(e, n, r, i, s) {
    const o = {};
    return (
      (o[sv] = Ad),
      typeof location < "u" &&
        location.hostname &&
        uv.test(location.hostname) &&
        (o[av] = lv),
      n && (o[ov] = n),
      r && (o[cv] = r),
      i && (o[cc] = i),
      s && (o[dv] = s),
      mv(e, hv, o)
    );
  }
  open(e, n) {
    (this.onDisconnect = n),
      (this.onMessage = e),
      this.log_("Websocket connecting to " + this.connURL),
      (this.everConnected_ = !1),
      Mn.set("previous_websocket_failure", !0);
    try {
      let r;
      $_(), (this.mySock = new Qo(this.connURL, [], r));
    } catch (r) {
      this.log_("Error instantiating WebSocket.");
      const i = r.message || r.data;
      i && this.log_(i), this.onClosed_();
      return;
    }
    (this.mySock.onopen = () => {
      this.log_("Websocket connected."), (this.everConnected_ = !0);
    }),
      (this.mySock.onclose = () => {
        this.log_("Websocket connection was disconnected."),
          (this.mySock = null),
          this.onClosed_();
      }),
      (this.mySock.onmessage = (r) => {
        this.handleIncomingFrame(r);
      }),
      (this.mySock.onerror = (r) => {
        this.log_("WebSocket error.  Closing connection.");
        const i = r.message || r.data;
        i && this.log_(i), this.onClosed_();
      });
  }
  start() {}
  static forceDisallow() {
    lt.forceDisallow_ = !0;
  }
  static isAvailable() {
    let e = !1;
    if (typeof navigator < "u" && navigator.userAgent) {
      const n = /Android ([0-9]{0,}\.[0-9]{0,})/,
        r = navigator.userAgent.match(n);
      r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0);
    }
    return !e && Qo !== null && !lt.forceDisallow_;
  }
  static previouslyFailed() {
    return Mn.isInMemoryStorage || Mn.get("previous_websocket_failure") === !0;
  }
  markConnectionHealthy() {
    Mn.remove("previous_websocket_failure");
  }
  appendFrame_(e) {
    if ((this.frames.push(e), this.frames.length === this.totalFrames)) {
      const n = this.frames.join("");
      this.frames = null;
      const r = is(n);
      this.onMessage(r);
    }
  }
  handleNewFrameCount_(e) {
    (this.totalFrames = e), (this.frames = []);
  }
  extractFrameCount_(e) {
    if (
      (C(this.frames === null, "We already have a frame buffer"), e.length <= 6)
    ) {
      const n = Number(e);
      if (!isNaN(n)) return this.handleNewFrameCount_(n), null;
    }
    return this.handleNewFrameCount_(1), e;
  }
  handleIncomingFrame(e) {
    if (this.mySock === null) return;
    const n = e.data;
    if (
      ((this.bytesReceived += n.length),
      this.stats_.incrementCounter("bytes_received", n.length),
      this.resetKeepAlive(),
      this.frames !== null)
    )
      this.appendFrame_(n);
    else {
      const r = this.extractFrameCount_(n);
      r !== null && this.appendFrame_(r);
    }
  }
  send(e) {
    this.resetKeepAlive();
    const n = ce(e);
    (this.bytesSent += n.length),
      this.stats_.incrementCounter("bytes_sent", n.length);
    const r = rv(n, QI);
    r.length > 1 && this.sendString_(String(r.length));
    for (let i = 0; i < r.length; i++) this.sendString_(r[i]);
  }
  shutdown_() {
    (this.isClosed_ = !0),
      this.keepaliveTimer &&
        (clearInterval(this.keepaliveTimer), (this.keepaliveTimer = null)),
      this.mySock && (this.mySock.close(), (this.mySock = null));
  }
  onClosed_() {
    this.isClosed_ ||
      (this.log_("WebSocket is closing itself"),
      this.shutdown_(),
      this.onDisconnect &&
        (this.onDisconnect(this.everConnected_), (this.onDisconnect = null)));
  }
  close() {
    this.isClosed_ ||
      (this.log_("WebSocket is being closed"), this.shutdown_());
  }
  resetKeepAlive() {
    clearInterval(this.keepaliveTimer),
      (this.keepaliveTimer = setInterval(() => {
        this.mySock && this.sendString_("0"), this.resetKeepAlive();
      }, Math.floor(YI)));
  }
  sendString_(e) {
    try {
      this.mySock.send(e);
    } catch (n) {
      this.log_(
        "Exception thrown from WebSocket.send():",
        n.message || n.data,
        "Closing connection."
      ),
        setTimeout(this.onClosed_.bind(this), 0);
    }
  }
}
lt.responsesRequiredToBeHealthy = 2;
lt.healthyTimeout = 3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class os {
  constructor(e) {
    this.initTransports_(e);
  }
  static get ALL_TRANSPORTS() {
    return [wr, lt];
  }
  static get IS_TRANSPORT_INITIALIZED() {
    return this.globalTransportInitialized_;
  }
  initTransports_(e) {
    const n = lt && lt.isAvailable();
    let r = n && !lt.previouslyFailed();
    if (
      (e.webSocketOnly &&
        (n ||
          ze(
            "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
          ),
        (r = !0)),
      r)
    )
      this.transports_ = [lt];
    else {
      const i = (this.transports_ = []);
      for (const s of os.ALL_TRANSPORTS) s && s.isAvailable() && i.push(s);
      os.globalTransportInitialized_ = !0;
    }
  }
  initialTransport() {
    if (this.transports_.length > 0) return this.transports_[0];
    throw new Error("No transports available");
  }
  upgradeTransport() {
    return this.transports_.length > 1 ? this.transports_[1] : null;
  }
}
os.globalTransportInitialized_ = !1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const JI = 6e4,
  XI = 5e3,
  ZI = 10 * 1024,
  eT = 100 * 1024,
  Yl = "t",
  hp = "d",
  tT = "s",
  fp = "r",
  nT = "e",
  pp = "o",
  mp = "a",
  gp = "n",
  _p = "p",
  rT = "h";
class iT {
  constructor(e, n, r, i, s, o, a, l, u, d) {
    (this.id = e),
      (this.repoInfo_ = n),
      (this.applicationId_ = r),
      (this.appCheckToken_ = i),
      (this.authToken_ = s),
      (this.onMessage_ = o),
      (this.onReady_ = a),
      (this.onDisconnect_ = l),
      (this.onKill_ = u),
      (this.lastSessionId = d),
      (this.connectionCount = 0),
      (this.pendingDataMessages = []),
      (this.state_ = 0),
      (this.log_ = Cs("c:" + this.id + ":")),
      (this.transportManager_ = new os(n)),
      this.log_("Connection created"),
      this.start_();
  }
  start_() {
    const e = this.transportManager_.initialTransport();
    (this.conn_ = new e(
      this.nextTransportId_(),
      this.repoInfo_,
      this.applicationId_,
      this.appCheckToken_,
      this.authToken_,
      null,
      this.lastSessionId
    )),
      (this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0);
    const n = this.connReceiver_(this.conn_),
      r = this.disconnReceiver_(this.conn_);
    (this.tx_ = this.conn_),
      (this.rx_ = this.conn_),
      (this.secondaryConn_ = null),
      (this.isHealthy_ = !1),
      setTimeout(() => {
        this.conn_ && this.conn_.open(n, r);
      }, Math.floor(0));
    const i = e.healthyTimeout || 0;
    i > 0 &&
      (this.healthyTimeout_ = Mi(() => {
        (this.healthyTimeout_ = null),
          this.isHealthy_ ||
            (this.conn_ && this.conn_.bytesReceived > eT
              ? (this.log_(
                  "Connection exceeded healthy timeout but has received " +
                    this.conn_.bytesReceived +
                    " bytes.  Marking connection healthy."
                ),
                (this.isHealthy_ = !0),
                this.conn_.markConnectionHealthy())
              : this.conn_ && this.conn_.bytesSent > ZI
              ? this.log_(
                  "Connection exceeded healthy timeout but has sent " +
                    this.conn_.bytesSent +
                    " bytes.  Leaving connection alive."
                )
              : (this.log_("Closing unhealthy connection after timeout."),
                this.close()));
      }, Math.floor(i)));
  }
  nextTransportId_() {
    return "c:" + this.id + ":" + this.connectionCount++;
  }
  disconnReceiver_(e) {
    return (n) => {
      e === this.conn_
        ? this.onConnectionLost_(n)
        : e === this.secondaryConn_
        ? (this.log_("Secondary connection lost."),
          this.onSecondaryConnectionLost_())
        : this.log_("closing an old connection");
    };
  }
  connReceiver_(e) {
    return (n) => {
      this.state_ !== 2 &&
        (e === this.rx_
          ? this.onPrimaryMessageReceived_(n)
          : e === this.secondaryConn_
          ? this.onSecondaryMessageReceived_(n)
          : this.log_("message on old connection"));
    };
  }
  sendRequest(e) {
    const n = { t: "d", d: e };
    this.sendData_(n);
  }
  tryCleanupConnection() {
    this.tx_ === this.secondaryConn_ &&
      this.rx_ === this.secondaryConn_ &&
      (this.log_(
        "cleaning up and promoting a connection: " + this.secondaryConn_.connId
      ),
      (this.conn_ = this.secondaryConn_),
      (this.secondaryConn_ = null));
  }
  onSecondaryControl_(e) {
    if (Yl in e) {
      const n = e[Yl];
      n === mp
        ? this.upgradeIfSecondaryHealthy_()
        : n === fp
        ? (this.log_("Got a reset on secondary, closing it"),
          this.secondaryConn_.close(),
          (this.tx_ === this.secondaryConn_ ||
            this.rx_ === this.secondaryConn_) &&
            this.close())
        : n === pp &&
          (this.log_("got pong on secondary."),
          this.secondaryResponsesRequired_--,
          this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const n = _i("t", e),
      r = _i("d", e);
    if (n === "c") this.onSecondaryControl_(r);
    else if (n === "d") this.pendingDataMessages.push(r);
    else throw new Error("Unknown protocol layer: " + n);
  }
  upgradeIfSecondaryHealthy_() {
    this.secondaryResponsesRequired_ <= 0
      ? (this.log_("Secondary connection is healthy."),
        (this.isHealthy_ = !0),
        this.secondaryConn_.markConnectionHealthy(),
        this.proceedWithUpgrade_())
      : (this.log_("sending ping on secondary."),
        this.secondaryConn_.send({ t: "c", d: { t: _p, d: {} } }));
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start(),
      this.log_("sending client ack on secondary"),
      this.secondaryConn_.send({ t: "c", d: { t: mp, d: {} } }),
      this.log_("Ending transmission on primary"),
      this.conn_.send({ t: "c", d: { t: gp, d: {} } }),
      (this.tx_ = this.secondaryConn_),
      this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(e) {
    const n = _i("t", e),
      r = _i("d", e);
    n === "c" ? this.onControl_(r) : n === "d" && this.onDataMessage_(r);
  }
  onDataMessage_(e) {
    this.onPrimaryResponse_(), this.onMessage_(e);
  }
  onPrimaryResponse_() {
    this.isHealthy_ ||
      (this.primaryResponsesRequired_--,
      this.primaryResponsesRequired_ <= 0 &&
        (this.log_("Primary connection is healthy."),
        (this.isHealthy_ = !0),
        this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const n = _i(Yl, e);
    if (hp in e) {
      const r = e[hp];
      if (n === rT) {
        const i = Object.assign({}, r);
        this.repoInfo_.isUsingEmulator && (i.h = this.repoInfo_.host),
          this.onHandshake_(i);
      } else if (n === gp) {
        this.log_("recvd end transmission on primary"),
          (this.rx_ = this.secondaryConn_);
        for (let i = 0; i < this.pendingDataMessages.length; ++i)
          this.onDataMessage_(this.pendingDataMessages[i]);
        (this.pendingDataMessages = []), this.tryCleanupConnection();
      } else
        n === tT
          ? this.onConnectionShutdown_(r)
          : n === fp
          ? this.onReset_(r)
          : n === nT
          ? uc("Server Error: " + r)
          : n === pp
          ? (this.log_("got pong on primary."),
            this.onPrimaryResponse_(),
            this.sendPingOnPrimaryIfNecessary_())
          : uc("Unknown control packet command: " + n);
    }
  }
  onHandshake_(e) {
    const n = e.ts,
      r = e.v,
      i = e.h;
    (this.sessionId = e.s),
      (this.repoInfo_.host = i),
      this.state_ === 0 &&
        (this.conn_.start(),
        this.onConnectionEstablished_(this.conn_, n),
        Ad !== r && ze("Protocol version mismatch detected"),
        this.tryStartUpgrade_());
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    (this.secondaryConn_ = new e(
      this.nextTransportId_(),
      this.repoInfo_,
      this.applicationId_,
      this.appCheckToken_,
      this.authToken_,
      this.sessionId
    )),
      (this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0);
    const n = this.connReceiver_(this.secondaryConn_),
      r = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(n, r),
      Mi(() => {
        this.secondaryConn_ &&
          (this.log_("Timed out trying to upgrade."),
          this.secondaryConn_.close());
      }, Math.floor(JI));
  }
  onReset_(e) {
    this.log_("Reset packet received.  New host: " + e),
      (this.repoInfo_.host = e),
      this.state_ === 1
        ? this.close()
        : (this.closeConnections_(), this.start_());
  }
  onConnectionEstablished_(e, n) {
    this.log_("Realtime connection established."),
      (this.conn_ = e),
      (this.state_ = 1),
      this.onReady_ &&
        (this.onReady_(n, this.sessionId), (this.onReady_ = null)),
      this.primaryResponsesRequired_ === 0
        ? (this.log_("Primary connection is healthy."), (this.isHealthy_ = !0))
        : Mi(() => {
            this.sendPingOnPrimaryIfNecessary_();
          }, Math.floor(XI));
  }
  sendPingOnPrimaryIfNecessary_() {
    !this.isHealthy_ &&
      this.state_ === 1 &&
      (this.log_("sending ping on primary."),
      this.sendData_({ t: "c", d: { t: _p, d: {} } }));
  }
  onSecondaryConnectionLost_() {
    const e = this.secondaryConn_;
    (this.secondaryConn_ = null),
      (this.tx_ === e || this.rx_ === e) && this.close();
  }
  onConnectionLost_(e) {
    (this.conn_ = null),
      !e && this.state_ === 0
        ? (this.log_("Realtime connection failed."),
          this.repoInfo_.isCacheableHost() &&
            (Mn.remove("host:" + this.repoInfo_.host),
            (this.repoInfo_.internalHost = this.repoInfo_.host)))
        : this.state_ === 1 && this.log_("Realtime connection lost."),
      this.close();
  }
  onConnectionShutdown_(e) {
    this.log_("Connection shutdown command received. Shutting down..."),
      this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
      (this.onDisconnect_ = null),
      this.close();
  }
  sendData_(e) {
    if (this.state_ !== 1) throw "Connection is not connected";
    this.tx_.send(e);
  }
  close() {
    this.state_ !== 2 &&
      (this.log_("Closing realtime connection."),
      (this.state_ = 2),
      this.closeConnections_(),
      this.onDisconnect_ &&
        (this.onDisconnect_(), (this.onDisconnect_ = null)));
  }
  closeConnections_() {
    this.log_("Shutting down all connections"),
      this.conn_ && (this.conn_.close(), (this.conn_ = null)),
      this.secondaryConn_ &&
        (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
      this.healthyTimeout_ &&
        (clearTimeout(this.healthyTimeout_), (this.healthyTimeout_ = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wv {
  put(e, n, r, i) {}
  merge(e, n, r, i) {}
  refreshAuthToken(e) {}
  refreshAppCheckToken(e) {}
  onDisconnectPut(e, n, r) {}
  onDisconnectMerge(e, n, r) {}
  onDisconnectCancel(e, n) {}
  reportStats(e) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sv {
  constructor(e) {
    (this.allowedEvents_ = e),
      (this.listeners_ = {}),
      C(Array.isArray(e) && e.length > 0, "Requires a non-empty array");
  }
  trigger(e, ...n) {
    if (Array.isArray(this.listeners_[e])) {
      const r = [...this.listeners_[e]];
      for (let i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, n);
    }
  }
  on(e, n, r) {
    this.validateEventType_(e),
      (this.listeners_[e] = this.listeners_[e] || []),
      this.listeners_[e].push({ callback: n, context: r });
    const i = this.getInitialEvent(e);
    i && n.apply(r, i);
  }
  off(e, n, r) {
    this.validateEventType_(e);
    const i = this.listeners_[e] || [];
    for (let s = 0; s < i.length; s++)
      if (i[s].callback === n && (!r || r === i[s].context)) {
        i.splice(s, 1);
        return;
      }
  }
  validateEventType_(e) {
    C(
      this.allowedEvents_.find((n) => n === e),
      "Unknown event: " + e
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yo extends Sv {
  constructor() {
    super(["online"]),
      (this.online_ = !0),
      typeof window < "u" &&
        typeof window.addEventListener < "u" &&
        !Td() &&
        (window.addEventListener(
          "online",
          () => {
            this.online_ || ((this.online_ = !0), this.trigger("online", !0));
          },
          !1
        ),
        window.addEventListener(
          "offline",
          () => {
            this.online_ && ((this.online_ = !1), this.trigger("online", !1));
          },
          !1
        ));
  }
  static getInstance() {
    return new Yo();
  }
  getInitialEvent(e) {
    return C(e === "online", "Unknown event type: " + e), [this.online_];
  }
  currentlyOnline() {
    return this.online_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vp = 32,
  yp = 768;
class $ {
  constructor(e, n) {
    if (n === void 0) {
      this.pieces_ = e.split("/");
      let r = 0;
      for (let i = 0; i < this.pieces_.length; i++)
        this.pieces_[i].length > 0 &&
          ((this.pieces_[r] = this.pieces_[i]), r++);
      (this.pieces_.length = r), (this.pieceNum_ = 0);
    } else (this.pieces_ = e), (this.pieceNum_ = n);
  }
  toString() {
    let e = "";
    for (let n = this.pieceNum_; n < this.pieces_.length; n++)
      this.pieces_[n] !== "" && (e += "/" + this.pieces_[n]);
    return e || "/";
  }
}
function B() {
  return new $("");
}
function L(t) {
  return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_];
}
function yn(t) {
  return t.pieces_.length - t.pieceNum_;
}
function q(t) {
  let e = t.pieceNum_;
  return e < t.pieces_.length && e++, new $(t.pieces_, e);
}
function Cv(t) {
  return t.pieceNum_ < t.pieces_.length
    ? t.pieces_[t.pieces_.length - 1]
    : null;
}
function sT(t) {
  let e = "";
  for (let n = t.pieceNum_; n < t.pieces_.length; n++)
    t.pieces_[n] !== "" &&
      (e += "/" + encodeURIComponent(String(t.pieces_[n])));
  return e || "/";
}
function Iv(t, e = 0) {
  return t.pieces_.slice(t.pieceNum_ + e);
}
function Tv(t) {
  if (t.pieceNum_ >= t.pieces_.length) return null;
  const e = [];
  for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++) e.push(t.pieces_[n]);
  return new $(e, 0);
}
function de(t, e) {
  const n = [];
  for (let r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r]);
  if (e instanceof $)
    for (let r = e.pieceNum_; r < e.pieces_.length; r++) n.push(e.pieces_[r]);
  else {
    const r = e.split("/");
    for (let i = 0; i < r.length; i++) r[i].length > 0 && n.push(r[i]);
  }
  return new $(n, 0);
}
function F(t) {
  return t.pieceNum_ >= t.pieces_.length;
}
function xe(t, e) {
  const n = L(t),
    r = L(e);
  if (n === null) return e;
  if (n === r) return xe(q(t), q(e));
  throw new Error(
    "INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")"
  );
}
function Dd(t, e) {
  if (yn(t) !== yn(e)) return !1;
  for (let n = t.pieceNum_, r = e.pieceNum_; n <= t.pieces_.length; n++, r++)
    if (t.pieces_[n] !== e.pieces_[r]) return !1;
  return !0;
}
function ut(t, e) {
  let n = t.pieceNum_,
    r = e.pieceNum_;
  if (yn(t) > yn(e)) return !1;
  for (; n < t.pieces_.length; ) {
    if (t.pieces_[n] !== e.pieces_[r]) return !1;
    ++n, ++r;
  }
  return !0;
}
class oT {
  constructor(e, n) {
    (this.errorPrefix_ = n),
      (this.parts_ = Iv(e, 0)),
      (this.byteLength_ = Math.max(1, this.parts_.length));
    for (let r = 0; r < this.parts_.length; r++)
      this.byteLength_ += Ua(this.parts_[r]);
    kv(this);
  }
}
function aT(t, e) {
  t.parts_.length > 0 && (t.byteLength_ += 1),
    t.parts_.push(e),
    (t.byteLength_ += Ua(e)),
    kv(t);
}
function lT(t) {
  const e = t.parts_.pop();
  (t.byteLength_ -= Ua(e)), t.parts_.length > 0 && (t.byteLength_ -= 1);
}
function kv(t) {
  if (t.byteLength_ > yp)
    throw new Error(
      t.errorPrefix_ +
        "has a key path longer than " +
        yp +
        " bytes (" +
        t.byteLength_ +
        ")."
    );
  if (t.parts_.length > vp)
    throw new Error(
      t.errorPrefix_ +
        "path specified exceeds the maximum depth that can be written (" +
        vp +
        ") or object contains a cycle " +
        xn(t)
    );
}
function xn(t) {
  return t.parts_.length === 0
    ? ""
    : "in property '" + t.parts_.join(".") + "'";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ld extends Sv {
  constructor() {
    super(["visible"]);
    let e, n;
    typeof document < "u" &&
      typeof document.addEventListener < "u" &&
      (typeof document.hidden < "u"
        ? ((n = "visibilitychange"), (e = "hidden"))
        : typeof document.mozHidden < "u"
        ? ((n = "mozvisibilitychange"), (e = "mozHidden"))
        : typeof document.msHidden < "u"
        ? ((n = "msvisibilitychange"), (e = "msHidden"))
        : typeof document.webkitHidden < "u" &&
          ((n = "webkitvisibilitychange"), (e = "webkitHidden"))),
      (this.visible_ = !0),
      n &&
        document.addEventListener(
          n,
          () => {
            const r = !document[e];
            r !== this.visible_ &&
              ((this.visible_ = r), this.trigger("visible", r));
          },
          !1
        );
  }
  static getInstance() {
    return new Ld();
  }
  getInitialEvent(e) {
    return C(e === "visible", "Unknown event type: " + e), [this.visible_];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vi = 1e3,
  uT = 60 * 5 * 1e3,
  Ep = 30 * 1e3,
  cT = 1.3,
  dT = 3e4,
  hT = "server_kill",
  wp = 3;
class Lt extends wv {
  constructor(e, n, r, i, s, o, a, l) {
    if (
      (super(),
      (this.repoInfo_ = e),
      (this.applicationId_ = n),
      (this.onDataUpdate_ = r),
      (this.onConnectStatus_ = i),
      (this.onServerInfoUpdate_ = s),
      (this.authTokenProvider_ = o),
      (this.appCheckTokenProvider_ = a),
      (this.authOverride_ = l),
      (this.id = Lt.nextPersistentConnectionId_++),
      (this.log_ = Cs("p:" + this.id + ":")),
      (this.interruptReasons_ = {}),
      (this.listens = new Map()),
      (this.outstandingPuts_ = []),
      (this.outstandingGets_ = []),
      (this.outstandingPutCount_ = 0),
      (this.outstandingGetCount_ = 0),
      (this.onDisconnectRequestQueue_ = []),
      (this.connected_ = !1),
      (this.reconnectDelay_ = vi),
      (this.maxReconnectDelay_ = uT),
      (this.securityDebugCallback_ = null),
      (this.lastSessionId = null),
      (this.establishConnectionTimer_ = null),
      (this.visible_ = !1),
      (this.requestCBHash_ = {}),
      (this.requestNumber_ = 0),
      (this.realtime_ = null),
      (this.authToken_ = null),
      (this.appCheckToken_ = null),
      (this.forceTokenRefresh_ = !1),
      (this.invalidAuthTokenCount_ = 0),
      (this.invalidAppCheckTokenCount_ = 0),
      (this.firstConnection_ = !0),
      (this.lastConnectionAttemptTime_ = null),
      (this.lastConnectionEstablishedTime_ = null),
      l && !$_())
    )
      throw new Error(
        "Auth override specified in options, but not supported on non Node.js platforms"
      );
    Ld.getInstance().on("visible", this.onVisible_, this),
      e.host.indexOf("fblocal") === -1 &&
        Yo.getInstance().on("online", this.onOnline_, this);
  }
  sendRequest(e, n, r) {
    const i = ++this.requestNumber_,
      s = { r: i, a: e, b: n };
    this.log_(ce(s)),
      C(
        this.connected_,
        "sendRequest call when we're not connected not allowed."
      ),
      this.realtime_.sendRequest(s),
      r && (this.requestCBHash_[i] = r);
  }
  get(e) {
    this.initConnection_();
    const n = new Fa(),
      i = {
        action: "g",
        request: { p: e._path.toString(), q: e._queryObject },
        onComplete: (o) => {
          const a = o.d;
          o.s === "ok" ? n.resolve(a) : n.reject(a);
        },
      };
    this.outstandingGets_.push(i), this.outstandingGetCount_++;
    const s = this.outstandingGets_.length - 1;
    return this.connected_ && this.sendGet_(s), n.promise;
  }
  listen(e, n, r, i) {
    this.initConnection_();
    const s = e._queryIdentifier,
      o = e._path.toString();
    this.log_("Listen called for " + o + " " + s),
      this.listens.has(o) || this.listens.set(o, new Map()),
      C(
        e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
        "listen() called for non-default but complete query"
      ),
      C(
        !this.listens.get(o).has(s),
        "listen() called twice for same path/queryId."
      );
    const a = { onComplete: i, hashFn: n, query: e, tag: r };
    this.listens.get(o).set(s, a), this.connected_ && this.sendListen_(a);
  }
  sendGet_(e) {
    const n = this.outstandingGets_[e];
    this.sendRequest("g", n.request, (r) => {
      delete this.outstandingGets_[e],
        this.outstandingGetCount_--,
        this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []),
        n.onComplete && n.onComplete(r);
    });
  }
  sendListen_(e) {
    const n = e.query,
      r = n._path.toString(),
      i = n._queryIdentifier;
    this.log_("Listen on " + r + " for " + i);
    const s = { p: r },
      o = "q";
    e.tag && ((s.q = n._queryObject), (s.t = e.tag)),
      (s.h = e.hashFn()),
      this.sendRequest(o, s, (a) => {
        const l = a.d,
          u = a.s;
        Lt.warnOnListenWarnings_(l, n),
          (this.listens.get(r) && this.listens.get(r).get(i)) === e &&
            (this.log_("listen response", a),
            u !== "ok" && this.removeListen_(r, i),
            e.onComplete && e.onComplete(u, l));
      });
  }
  static warnOnListenWarnings_(e, n) {
    if (e && typeof e == "object" && Ht(e, "w")) {
      const r = Br(e, "w");
      if (Array.isArray(r) && ~r.indexOf("no_index")) {
        const i = '".indexOn": "' + n._queryParams.getIndex().toString() + '"',
          s = n._path.toString();
        ze(
          `Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`
        );
      }
    }
  }
  refreshAuthToken(e) {
    (this.authToken_ = e),
      this.log_("Auth token refreshed"),
      this.authToken_
        ? this.tryAuth()
        : this.connected_ && this.sendRequest("unauth", {}, () => {}),
      this.reduceReconnectDelayIfAdminCredential_(e);
  }
  reduceReconnectDelayIfAdminCredential_(e) {
    ((e && e.length === 40) || oC(e)) &&
      (this.log_(
        "Admin auth credential detected.  Reducing max reconnect time."
      ),
      (this.maxReconnectDelay_ = Ep));
  }
  refreshAppCheckToken(e) {
    (this.appCheckToken_ = e),
      this.log_("App check token refreshed"),
      this.appCheckToken_
        ? this.tryAppCheck()
        : this.connected_ && this.sendRequest("unappeck", {}, () => {});
  }
  tryAuth() {
    if (this.connected_ && this.authToken_) {
      const e = this.authToken_,
        n = sC(e) ? "auth" : "gauth",
        r = { cred: e };
      this.authOverride_ === null
        ? (r.noauth = !0)
        : typeof this.authOverride_ == "object" &&
          (r.authvar = this.authOverride_),
        this.sendRequest(n, r, (i) => {
          const s = i.s,
            o = i.d || "error";
          this.authToken_ === e &&
            (s === "ok"
              ? (this.invalidAuthTokenCount_ = 0)
              : this.onAuthRevoked_(s, o));
        });
    }
  }
  tryAppCheck() {
    this.connected_ &&
      this.appCheckToken_ &&
      this.sendRequest("appcheck", { token: this.appCheckToken_ }, (e) => {
        const n = e.s,
          r = e.d || "error";
        n === "ok"
          ? (this.invalidAppCheckTokenCount_ = 0)
          : this.onAppCheckRevoked_(n, r);
      });
  }
  unlisten(e, n) {
    const r = e._path.toString(),
      i = e._queryIdentifier;
    this.log_("Unlisten called for " + r + " " + i),
      C(
        e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
        "unlisten() called for non-default but complete query"
      ),
      this.removeListen_(r, i) &&
        this.connected_ &&
        this.sendUnlisten_(r, i, e._queryObject, n);
  }
  sendUnlisten_(e, n, r, i) {
    this.log_("Unlisten on " + e + " for " + n);
    const s = { p: e },
      o = "n";
    i && ((s.q = r), (s.t = i)), this.sendRequest(o, s);
  }
  onDisconnectPut(e, n, r) {
    this.initConnection_(),
      this.connected_
        ? this.sendOnDisconnect_("o", e, n, r)
        : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "o",
            data: n,
            onComplete: r,
          });
  }
  onDisconnectMerge(e, n, r) {
    this.initConnection_(),
      this.connected_
        ? this.sendOnDisconnect_("om", e, n, r)
        : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "om",
            data: n,
            onComplete: r,
          });
  }
  onDisconnectCancel(e, n) {
    this.initConnection_(),
      this.connected_
        ? this.sendOnDisconnect_("oc", e, null, n)
        : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "oc",
            data: null,
            onComplete: n,
          });
  }
  sendOnDisconnect_(e, n, r, i) {
    const s = { p: n, d: r };
    this.log_("onDisconnect " + e, s),
      this.sendRequest(e, s, (o) => {
        i &&
          setTimeout(() => {
            i(o.s, o.d);
          }, Math.floor(0));
      });
  }
  put(e, n, r, i) {
    this.putInternal("p", e, n, r, i);
  }
  merge(e, n, r, i) {
    this.putInternal("m", e, n, r, i);
  }
  putInternal(e, n, r, i, s) {
    this.initConnection_();
    const o = { p: n, d: r };
    s !== void 0 && (o.h = s),
      this.outstandingPuts_.push({ action: e, request: o, onComplete: i }),
      this.outstandingPutCount_++;
    const a = this.outstandingPuts_.length - 1;
    this.connected_ ? this.sendPut_(a) : this.log_("Buffering put: " + n);
  }
  sendPut_(e) {
    const n = this.outstandingPuts_[e].action,
      r = this.outstandingPuts_[e].request,
      i = this.outstandingPuts_[e].onComplete;
    (this.outstandingPuts_[e].queued = this.connected_),
      this.sendRequest(n, r, (s) => {
        this.log_(n + " response", s),
          delete this.outstandingPuts_[e],
          this.outstandingPutCount_--,
          this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []),
          i && i(s.s, s.d);
      });
  }
  reportStats(e) {
    if (this.connected_) {
      const n = { c: e };
      this.log_("reportStats", n),
        this.sendRequest("s", n, (r) => {
          if (r.s !== "ok") {
            const s = r.d;
            this.log_("reportStats", "Error sending stats: " + s);
          }
        });
    }
  }
  onDataMessage_(e) {
    if ("r" in e) {
      this.log_("from server: " + ce(e));
      const n = e.r,
        r = this.requestCBHash_[n];
      r && (delete this.requestCBHash_[n], r(e.b));
    } else {
      if ("error" in e) throw "A server-side error has occurred: " + e.error;
      "a" in e && this.onDataPush_(e.a, e.b);
    }
  }
  onDataPush_(e, n) {
    this.log_("handleServerMessage", e, n),
      e === "d"
        ? this.onDataUpdate_(n.p, n.d, !1, n.t)
        : e === "m"
        ? this.onDataUpdate_(n.p, n.d, !0, n.t)
        : e === "c"
        ? this.onListenRevoked_(n.p, n.q)
        : e === "ac"
        ? this.onAuthRevoked_(n.s, n.d)
        : e === "apc"
        ? this.onAppCheckRevoked_(n.s, n.d)
        : e === "sd"
        ? this.onSecurityDebugPacket_(n)
        : uc(
            "Unrecognized action received from server: " +
              ce(e) +
              `
Are you using the latest client?`
          );
  }
  onReady_(e, n) {
    this.log_("connection ready"),
      (this.connected_ = !0),
      (this.lastConnectionEstablishedTime_ = new Date().getTime()),
      this.handleTimestamp_(e),
      (this.lastSessionId = n),
      this.firstConnection_ && this.sendConnectStats_(),
      this.restoreState_(),
      (this.firstConnection_ = !1),
      this.onConnectStatus_(!0);
  }
  scheduleConnect_(e) {
    C(
      !this.realtime_,
      "Scheduling a connect when we're already connected/ing?"
    ),
      this.establishConnectionTimer_ &&
        clearTimeout(this.establishConnectionTimer_),
      (this.establishConnectionTimer_ = setTimeout(() => {
        (this.establishConnectionTimer_ = null), this.establishConnection_();
      }, Math.floor(e)));
  }
  initConnection_() {
    !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
  }
  onVisible_(e) {
    e &&
      !this.visible_ &&
      this.reconnectDelay_ === this.maxReconnectDelay_ &&
      (this.log_("Window became visible.  Reducing delay."),
      (this.reconnectDelay_ = vi),
      this.realtime_ || this.scheduleConnect_(0)),
      (this.visible_ = e);
  }
  onOnline_(e) {
    e
      ? (this.log_("Browser went online."),
        (this.reconnectDelay_ = vi),
        this.realtime_ || this.scheduleConnect_(0))
      : (this.log_("Browser went offline.  Killing connection."),
        this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (
      (this.log_("data client disconnected"),
      (this.connected_ = !1),
      (this.realtime_ = null),
      this.cancelSentTransactions_(),
      (this.requestCBHash_ = {}),
      this.shouldReconnect_())
    ) {
      this.visible_
        ? this.lastConnectionEstablishedTime_ &&
          (new Date().getTime() - this.lastConnectionEstablishedTime_ > dT &&
            (this.reconnectDelay_ = vi),
          (this.lastConnectionEstablishedTime_ = null))
        : (this.log_("Window isn't visible.  Delaying reconnect."),
          (this.reconnectDelay_ = this.maxReconnectDelay_),
          (this.lastConnectionAttemptTime_ = new Date().getTime()));
      const e = new Date().getTime() - this.lastConnectionAttemptTime_;
      let n = Math.max(0, this.reconnectDelay_ - e);
      (n = Math.random() * n),
        this.log_("Trying to reconnect in " + n + "ms"),
        this.scheduleConnect_(n),
        (this.reconnectDelay_ = Math.min(
          this.maxReconnectDelay_,
          this.reconnectDelay_ * cT
        ));
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt"),
        (this.lastConnectionAttemptTime_ = new Date().getTime()),
        (this.lastConnectionEstablishedTime_ = null);
      const e = this.onDataMessage_.bind(this),
        n = this.onReady_.bind(this),
        r = this.onRealtimeDisconnect_.bind(this),
        i = this.id + ":" + Lt.nextConnectionId_++,
        s = this.lastSessionId;
      let o = !1,
        a = null;
      const l = function () {
          a ? a.close() : ((o = !0), r());
        },
        u = function (c) {
          C(a, "sendRequest call when we're not connected not allowed."),
            a.sendRequest(c);
        };
      this.realtime_ = { close: l, sendRequest: u };
      const d = this.forceTokenRefresh_;
      this.forceTokenRefresh_ = !1;
      try {
        const [c, h] = await Promise.all([
          this.authTokenProvider_.getToken(d),
          this.appCheckTokenProvider_.getToken(d),
        ]);
        o
          ? Pe("getToken() completed but was canceled")
          : (Pe("getToken() completed. Creating connection."),
            (this.authToken_ = c && c.accessToken),
            (this.appCheckToken_ = h && h.token),
            (a = new iT(
              i,
              this.repoInfo_,
              this.applicationId_,
              this.appCheckToken_,
              this.authToken_,
              e,
              n,
              r,
              (f) => {
                ze(f + " (" + this.repoInfo_.toString() + ")"),
                  this.interrupt(hT);
              },
              s
            )));
      } catch (c) {
        this.log_("Failed to get token: " + c),
          o || (this.repoInfo_.nodeAdmin && ze(c), l());
      }
    }
  }
  interrupt(e) {
    Pe("Interrupting connection for reason: " + e),
      (this.interruptReasons_[e] = !0),
      this.realtime_
        ? this.realtime_.close()
        : (this.establishConnectionTimer_ &&
            (clearTimeout(this.establishConnectionTimer_),
            (this.establishConnectionTimer_ = null)),
          this.connected_ && this.onRealtimeDisconnect_());
  }
  resume(e) {
    Pe("Resuming connection for reason: " + e),
      delete this.interruptReasons_[e],
      nc(this.interruptReasons_) &&
        ((this.reconnectDelay_ = vi),
        this.realtime_ || this.scheduleConnect_(0));
  }
  handleTimestamp_(e) {
    const n = e - new Date().getTime();
    this.onServerInfoUpdate_({ serverTimeOffset: n });
  }
  cancelSentTransactions_() {
    for (let e = 0; e < this.outstandingPuts_.length; e++) {
      const n = this.outstandingPuts_[e];
      n &&
        "h" in n.request &&
        n.queued &&
        (n.onComplete && n.onComplete("disconnect"),
        delete this.outstandingPuts_[e],
        this.outstandingPutCount_--);
    }
    this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []);
  }
  onListenRevoked_(e, n) {
    let r;
    n ? (r = n.map((s) => Nd(s)).join("$")) : (r = "default");
    const i = this.removeListen_(e, r);
    i && i.onComplete && i.onComplete("permission_denied");
  }
  removeListen_(e, n) {
    const r = new $(e).toString();
    let i;
    if (this.listens.has(r)) {
      const s = this.listens.get(r);
      (i = s.get(n)), s.delete(n), s.size === 0 && this.listens.delete(r);
    } else i = void 0;
    return i;
  }
  onAuthRevoked_(e, n) {
    Pe("Auth token revoked: " + e + "/" + n),
      (this.authToken_ = null),
      (this.forceTokenRefresh_ = !0),
      this.realtime_.close(),
      (e === "invalid_token" || e === "permission_denied") &&
        (this.invalidAuthTokenCount_++,
        this.invalidAuthTokenCount_ >= wp &&
          ((this.reconnectDelay_ = Ep),
          this.authTokenProvider_.notifyForInvalidToken()));
  }
  onAppCheckRevoked_(e, n) {
    Pe("App check token revoked: " + e + "/" + n),
      (this.appCheckToken_ = null),
      (this.forceTokenRefresh_ = !0),
      (e === "invalid_token" || e === "permission_denied") &&
        (this.invalidAppCheckTokenCount_++,
        this.invalidAppCheckTokenCount_ >= wp &&
          this.appCheckTokenProvider_.notifyForInvalidToken());
  }
  onSecurityDebugPacket_(e) {
    this.securityDebugCallback_
      ? this.securityDebugCallback_(e)
      : "msg" in e &&
        console.log(
          "FIREBASE: " +
            e.msg.replace(
              `
`,
              `
FIREBASE: `
            )
        );
  }
  restoreState_() {
    this.tryAuth(), this.tryAppCheck();
    for (const e of this.listens.values())
      for (const n of e.values()) this.sendListen_(n);
    for (let e = 0; e < this.outstandingPuts_.length; e++)
      this.outstandingPuts_[e] && this.sendPut_(e);
    for (; this.onDisconnectRequestQueue_.length; ) {
      const e = this.onDisconnectRequestQueue_.shift();
      this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete);
    }
    for (let e = 0; e < this.outstandingGets_.length; e++)
      this.outstandingGets_[e] && this.sendGet_(e);
  }
  sendConnectStats_() {
    const e = {};
    let n = "js";
    (e["sdk." + n + "." + Z_.replace(/\./g, "-")] = 1),
      Td()
        ? (e["framework.cordova"] = 1)
        : W_() && (e["framework.reactnative"] = 1),
      this.reportStats(e);
  }
  shouldReconnect_() {
    const e = Yo.getInstance().currentlyOnline();
    return nc(this.interruptReasons_) && e;
  }
}
Lt.nextPersistentConnectionId_ = 0;
Lt.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M {
  constructor(e, n) {
    (this.name = e), (this.node = n);
  }
  static Wrap(e, n) {
    return new M(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ja {
  getCompare() {
    return this.compare.bind(this);
  }
  indexedValueChanged(e, n) {
    const r = new M(Hr, e),
      i = new M(Hr, n);
    return this.compare(r, i) !== 0;
  }
  minPost() {
    return M.MIN;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Js;
class Rv extends ja {
  static get __EMPTY_NODE() {
    return Js;
  }
  static set __EMPTY_NODE(e) {
    Js = e;
  }
  compare(e, n) {
    return ti(e.name, n.name);
  }
  isDefinedOn(e) {
    throw Xr("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(e, n) {
    return !1;
  }
  minPost() {
    return M.MIN;
  }
  maxPost() {
    return new M(Qn, Js);
  }
  makePost(e, n) {
    return (
      C(typeof e == "string", "KeyIndex indexValue must always be a string."),
      new M(e, Js)
    );
  }
  toString() {
    return ".key";
  }
}
const Ar = new Rv();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xs {
  constructor(e, n, r, i, s = null) {
    (this.isReverse_ = i), (this.resultGenerator_ = s), (this.nodeStack_ = []);
    let o = 1;
    for (; !e.isEmpty(); )
      if (((e = e), (o = n ? r(e.key, n) : 1), i && (o *= -1), o < 0))
        this.isReverse_ ? (e = e.left) : (e = e.right);
      else if (o === 0) {
        this.nodeStack_.push(e);
        break;
      } else
        this.nodeStack_.push(e), this.isReverse_ ? (e = e.right) : (e = e.left);
  }
  getNext() {
    if (this.nodeStack_.length === 0) return null;
    let e = this.nodeStack_.pop(),
      n;
    if (
      (this.resultGenerator_
        ? (n = this.resultGenerator_(e.key, e.value))
        : (n = { key: e.key, value: e.value }),
      this.isReverse_)
    )
      for (e = e.left; !e.isEmpty(); ) this.nodeStack_.push(e), (e = e.right);
    else
      for (e = e.right; !e.isEmpty(); ) this.nodeStack_.push(e), (e = e.left);
    return n;
  }
  hasNext() {
    return this.nodeStack_.length > 0;
  }
  peek() {
    if (this.nodeStack_.length === 0) return null;
    const e = this.nodeStack_[this.nodeStack_.length - 1];
    return this.resultGenerator_
      ? this.resultGenerator_(e.key, e.value)
      : { key: e.key, value: e.value };
  }
}
class ge {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? ge.RED),
      (this.left = i ?? Ue.EMPTY_NODE),
      (this.right = s ?? Ue.EMPTY_NODE);
  }
  copy(e, n, r, i, s) {
    return new ge(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right
    );
  }
  count() {
    return this.left.count() + 1 + this.right.count();
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      !!e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min_() {
    return this.left.isEmpty() ? this : this.left.min_();
  }
  minKey() {
    return this.min_().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return (
      s < 0
        ? (i = i.copy(null, null, null, i.left.insert(e, n, r), null))
        : s === 0
        ? (i = i.copy(null, n, null, null, null))
        : (i = i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp_()
    );
  }
  removeMin_() {
    if (this.left.isEmpty()) return Ue.EMPTY_NODE;
    let e = this;
    return (
      !e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()),
      (e = e.copy(null, null, null, e.left.removeMin_(), null)),
      e.fixUp_()
    );
  }
  remove(e, n) {
    let r, i;
    if (((r = this), n(e, r.key) < 0))
      !r.left.isEmpty() &&
        !r.left.isRed_() &&
        !r.left.left.isRed_() &&
        (r = r.moveRedLeft_()),
        (r = r.copy(null, null, null, r.left.remove(e, n), null));
    else {
      if (
        (r.left.isRed_() && (r = r.rotateRight_()),
        !r.right.isEmpty() &&
          !r.right.isRed_() &&
          !r.right.left.isRed_() &&
          (r = r.moveRedRight_()),
        n(e, r.key) === 0)
      ) {
        if (r.right.isEmpty()) return Ue.EMPTY_NODE;
        (i = r.right.min_()),
          (r = r.copy(i.key, i.value, null, null, r.right.removeMin_()));
      }
      r = r.copy(null, null, null, null, r.right.remove(e, n));
    }
    return r.fixUp_();
  }
  isRed_() {
    return this.color;
  }
  fixUp_() {
    let e = this;
    return (
      e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
      e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()),
      e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
      e
    );
  }
  moveRedLeft_() {
    let e = this.colorFlip_();
    return (
      e.right.left.isRed_() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight_())),
        (e = e.rotateLeft_()),
        (e = e.colorFlip_())),
      e
    );
  }
  moveRedRight_() {
    let e = this.colorFlip_();
    return (
      e.left.left.isRed_() && ((e = e.rotateRight_()), (e = e.colorFlip_())), e
    );
  }
  rotateLeft_() {
    const e = this.copy(null, null, ge.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight_() {
    const e = this.copy(null, null, ge.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip_() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth_() {
    const e = this.check_();
    return Math.pow(2, e) <= this.count() + 1;
  }
  check_() {
    if (this.isRed_() && this.left.isRed_())
      throw new Error(
        "Red node has red child(" + this.key + "," + this.value + ")"
      );
    if (this.right.isRed_())
      throw new Error(
        "Right child of (" + this.key + "," + this.value + ") is red"
      );
    const e = this.left.check_();
    if (e !== this.right.check_()) throw new Error("Black depths differ");
    return e + (this.isRed_() ? 0 : 1);
  }
}
ge.RED = !0;
ge.BLACK = !1;
class fT {
  copy(e, n, r, i, s) {
    return this;
  }
  insert(e, n, r) {
    return new ge(e, n, null);
  }
  remove(e, n) {
    return this;
  }
  count() {
    return 0;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  check_() {
    return 0;
  }
  isRed_() {
    return !1;
  }
}
class Ue {
  constructor(e, n = Ue.EMPTY_NODE) {
    (this.comparator_ = e), (this.root_ = n);
  }
  insert(e, n) {
    return new Ue(
      this.comparator_,
      this.root_
        .insert(e, n, this.comparator_)
        .copy(null, null, ge.BLACK, null, null)
    );
  }
  remove(e) {
    return new Ue(
      this.comparator_,
      this.root_
        .remove(e, this.comparator_)
        .copy(null, null, ge.BLACK, null, null)
    );
  }
  get(e) {
    let n,
      r = this.root_;
    for (; !r.isEmpty(); ) {
      if (((n = this.comparator_(e, r.key)), n === 0)) return r.value;
      n < 0 ? (r = r.left) : n > 0 && (r = r.right);
    }
    return null;
  }
  getPredecessorKey(e) {
    let n,
      r = this.root_,
      i = null;
    for (; !r.isEmpty(); )
      if (((n = this.comparator_(e, r.key)), n === 0)) {
        if (r.left.isEmpty()) return i ? i.key : null;
        for (r = r.left; !r.right.isEmpty(); ) r = r.right;
        return r.key;
      } else n < 0 ? (r = r.left) : n > 0 && ((i = r), (r = r.right));
    throw new Error(
      "Attempted to find predecessor key for a nonexistent key.  What gives?"
    );
  }
  isEmpty() {
    return this.root_.isEmpty();
  }
  count() {
    return this.root_.count();
  }
  minKey() {
    return this.root_.minKey();
  }
  maxKey() {
    return this.root_.maxKey();
  }
  inorderTraversal(e) {
    return this.root_.inorderTraversal(e);
  }
  reverseTraversal(e) {
    return this.root_.reverseTraversal(e);
  }
  getIterator(e) {
    return new Xs(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, n) {
    return new Xs(this.root_, e, this.comparator_, !1, n);
  }
  getReverseIteratorFrom(e, n) {
    return new Xs(this.root_, e, this.comparator_, !0, n);
  }
  getReverseIterator(e) {
    return new Xs(this.root_, null, this.comparator_, !0, e);
  }
}
Ue.EMPTY_NODE = new fT();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pT(t, e) {
  return ti(t.name, e.name);
}
function Md(t, e) {
  return ti(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dc;
function mT(t) {
  dc = t;
}
const Pv = function (t) {
    return typeof t == "number" ? "number:" + iv(t) : "string:" + t;
  },
  Ov = function (t) {
    if (t.isLeafNode()) {
      const e = t.val();
      C(
        typeof e == "string" ||
          typeof e == "number" ||
          (typeof e == "object" && Ht(e, ".sv")),
        "Priority must be a string or number."
      );
    } else C(t === dc || t.isEmpty(), "priority of unexpected type.");
    C(
      t === dc || t.getPriority().isEmpty(),
      "Priority nodes can't have a priority of their own."
    );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Sp;
class pe {
  constructor(e, n = pe.__childrenNodeConstructor.EMPTY_NODE) {
    (this.value_ = e),
      (this.priorityNode_ = n),
      (this.lazyHash_ = null),
      C(
        this.value_ !== void 0 && this.value_ !== null,
        "LeafNode shouldn't be created with null/undefined value."
      ),
      Ov(this.priorityNode_);
  }
  static set __childrenNodeConstructor(e) {
    Sp = e;
  }
  static get __childrenNodeConstructor() {
    return Sp;
  }
  isLeafNode() {
    return !0;
  }
  getPriority() {
    return this.priorityNode_;
  }
  updatePriority(e) {
    return new pe(this.value_, e);
  }
  getImmediateChild(e) {
    return e === ".priority"
      ? this.priorityNode_
      : pe.__childrenNodeConstructor.EMPTY_NODE;
  }
  getChild(e) {
    return F(e)
      ? this
      : L(e) === ".priority"
      ? this.priorityNode_
      : pe.__childrenNodeConstructor.EMPTY_NODE;
  }
  hasChild() {
    return !1;
  }
  getPredecessorChildName(e, n) {
    return null;
  }
  updateImmediateChild(e, n) {
    return e === ".priority"
      ? this.updatePriority(n)
      : n.isEmpty() && e !== ".priority"
      ? this
      : pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
          e,
          n
        ).updatePriority(this.priorityNode_);
  }
  updateChild(e, n) {
    const r = L(e);
    return r === null
      ? n
      : n.isEmpty() && r !== ".priority"
      ? this
      : (C(
          r !== ".priority" || yn(e) === 1,
          ".priority must be the last token in a path"
        ),
        this.updateImmediateChild(
          r,
          pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e), n)
        ));
  }
  isEmpty() {
    return !1;
  }
  numChildren() {
    return 0;
  }
  forEachChild(e, n) {
    return !1;
  }
  val(e) {
    return e && !this.getPriority().isEmpty()
      ? { ".value": this.getValue(), ".priority": this.getPriority().val() }
      : this.getValue();
  }
  hash() {
    if (this.lazyHash_ === null) {
      let e = "";
      this.priorityNode_.isEmpty() ||
        (e += "priority:" + Pv(this.priorityNode_.val()) + ":");
      const n = typeof this.value_;
      (e += n + ":"),
        n === "number" ? (e += iv(this.value_)) : (e += this.value_),
        (this.lazyHash_ = tv(e));
    }
    return this.lazyHash_;
  }
  getValue() {
    return this.value_;
  }
  compareTo(e) {
    return e === pe.__childrenNodeConstructor.EMPTY_NODE
      ? 1
      : e instanceof pe.__childrenNodeConstructor
      ? -1
      : (C(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
  }
  compareToLeafNode_(e) {
    const n = typeof e.value_,
      r = typeof this.value_,
      i = pe.VALUE_TYPE_ORDER.indexOf(n),
      s = pe.VALUE_TYPE_ORDER.indexOf(r);
    return (
      C(i >= 0, "Unknown leaf type: " + n),
      C(s >= 0, "Unknown leaf type: " + r),
      i === s
        ? r === "object"
          ? 0
          : this.value_ < e.value_
          ? -1
          : this.value_ === e.value_
          ? 0
          : 1
        : s - i
    );
  }
  withIndex() {
    return this;
  }
  isIndexed() {
    return !0;
  }
  equals(e) {
    if (e === this) return !0;
    if (e.isLeafNode()) {
      const n = e;
      return (
        this.value_ === n.value_ && this.priorityNode_.equals(n.priorityNode_)
      );
    } else return !1;
  }
}
pe.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Nv, Av;
function gT(t) {
  Nv = t;
}
function _T(t) {
  Av = t;
}
class vT extends ja {
  compare(e, n) {
    const r = e.node.getPriority(),
      i = n.node.getPriority(),
      s = r.compareTo(i);
    return s === 0 ? ti(e.name, n.name) : s;
  }
  isDefinedOn(e) {
    return !e.getPriority().isEmpty();
  }
  indexedValueChanged(e, n) {
    return !e.getPriority().equals(n.getPriority());
  }
  minPost() {
    return M.MIN;
  }
  maxPost() {
    return new M(Qn, new pe("[PRIORITY-POST]", Av));
  }
  makePost(e, n) {
    const r = Nv(e);
    return new M(n, new pe("[PRIORITY-POST]", r));
  }
  toString() {
    return ".priority";
  }
}
const se = new vT();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yT = Math.log(2);
class ET {
  constructor(e) {
    const n = (s) => parseInt(Math.log(s) / yT, 10),
      r = (s) => parseInt(Array(s + 1).join("1"), 2);
    (this.count = n(e + 1)), (this.current_ = this.count - 1);
    const i = r(this.count);
    this.bits_ = (e + 1) & i;
  }
  nextBitIsOne() {
    const e = !(this.bits_ & (1 << this.current_));
    return this.current_--, e;
  }
}
const Jo = function (t, e, n, r) {
  t.sort(e);
  const i = function (l, u) {
      const d = u - l;
      let c, h;
      if (d === 0) return null;
      if (d === 1)
        return (
          (c = t[l]),
          (h = n ? n(c) : c),
          new ge(h, c.node, ge.BLACK, null, null)
        );
      {
        const f = parseInt(d / 2, 10) + l,
          p = i(l, f),
          _ = i(f + 1, u);
        return (
          (c = t[f]), (h = n ? n(c) : c), new ge(h, c.node, ge.BLACK, p, _)
        );
      }
    },
    s = function (l) {
      let u = null,
        d = null,
        c = t.length;
      const h = function (p, _) {
          const w = c - p,
            g = c;
          c -= p;
          const m = i(w + 1, g),
            v = t[w],
            y = n ? n(v) : v;
          f(new ge(y, v.node, _, null, m));
        },
        f = function (p) {
          u ? ((u.left = p), (u = p)) : ((d = p), (u = p));
        };
      for (let p = 0; p < l.count; ++p) {
        const _ = l.nextBitIsOne(),
          w = Math.pow(2, l.count - (p + 1));
        _ ? h(w, ge.BLACK) : (h(w, ge.BLACK), h(w, ge.RED));
      }
      return d;
    },
    o = new ET(t.length),
    a = s(o);
  return new Ue(r || e, a);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Jl;
const lr = {};
class At {
  constructor(e, n) {
    (this.indexes_ = e), (this.indexSet_ = n);
  }
  static get Default() {
    return (
      C(lr && se, "ChildrenNode.ts has not been loaded"),
      (Jl = Jl || new At({ ".priority": lr }, { ".priority": se })),
      Jl
    );
  }
  get(e) {
    const n = Br(this.indexes_, e);
    if (!n) throw new Error("No index defined for " + e);
    return n instanceof Ue ? n : null;
  }
  hasIndex(e) {
    return Ht(this.indexSet_, e.toString());
  }
  addIndex(e, n) {
    C(
      e !== Ar,
      "KeyIndex always exists and isn't meant to be added to the IndexMap."
    );
    const r = [];
    let i = !1;
    const s = n.getIterator(M.Wrap);
    let o = s.getNext();
    for (; o; ) (i = i || e.isDefinedOn(o.node)), r.push(o), (o = s.getNext());
    let a;
    i ? (a = Jo(r, e.getCompare())) : (a = lr);
    const l = e.toString(),
      u = Object.assign({}, this.indexSet_);
    u[l] = e;
    const d = Object.assign({}, this.indexes_);
    return (d[l] = a), new At(d, u);
  }
  addToIndexes(e, n) {
    const r = qo(this.indexes_, (i, s) => {
      const o = Br(this.indexSet_, s);
      if ((C(o, "Missing index implementation for " + s), i === lr))
        if (o.isDefinedOn(e.node)) {
          const a = [],
            l = n.getIterator(M.Wrap);
          let u = l.getNext();
          for (; u; ) u.name !== e.name && a.push(u), (u = l.getNext());
          return a.push(e), Jo(a, o.getCompare());
        } else return lr;
      else {
        const a = n.get(e.name);
        let l = i;
        return a && (l = l.remove(new M(e.name, a))), l.insert(e, e.node);
      }
    });
    return new At(r, this.indexSet_);
  }
  removeFromIndexes(e, n) {
    const r = qo(this.indexes_, (i) => {
      if (i === lr) return i;
      {
        const s = n.get(e.name);
        return s ? i.remove(new M(e.name, s)) : i;
      }
    });
    return new At(r, this.indexSet_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let yi;
class A {
  constructor(e, n, r) {
    (this.children_ = e),
      (this.priorityNode_ = n),
      (this.indexMap_ = r),
      (this.lazyHash_ = null),
      this.priorityNode_ && Ov(this.priorityNode_),
      this.children_.isEmpty() &&
        C(
          !this.priorityNode_ || this.priorityNode_.isEmpty(),
          "An empty node cannot have a priority"
        );
  }
  static get EMPTY_NODE() {
    return yi || (yi = new A(new Ue(Md), null, At.Default));
  }
  isLeafNode() {
    return !1;
  }
  getPriority() {
    return this.priorityNode_ || yi;
  }
  updatePriority(e) {
    return this.children_.isEmpty()
      ? this
      : new A(this.children_, e, this.indexMap_);
  }
  getImmediateChild(e) {
    if (e === ".priority") return this.getPriority();
    {
      const n = this.children_.get(e);
      return n === null ? yi : n;
    }
  }
  getChild(e) {
    const n = L(e);
    return n === null ? this : this.getImmediateChild(n).getChild(q(e));
  }
  hasChild(e) {
    return this.children_.get(e) !== null;
  }
  updateImmediateChild(e, n) {
    if ((C(n, "We should always be passing snapshot nodes"), e === ".priority"))
      return this.updatePriority(n);
    {
      const r = new M(e, n);
      let i, s;
      n.isEmpty()
        ? ((i = this.children_.remove(e)),
          (s = this.indexMap_.removeFromIndexes(r, this.children_)))
        : ((i = this.children_.insert(e, n)),
          (s = this.indexMap_.addToIndexes(r, this.children_)));
      const o = i.isEmpty() ? yi : this.priorityNode_;
      return new A(i, o, s);
    }
  }
  updateChild(e, n) {
    const r = L(e);
    if (r === null) return n;
    {
      C(
        L(e) !== ".priority" || yn(e) === 1,
        ".priority must be the last token in a path"
      );
      const i = this.getImmediateChild(r).updateChild(q(e), n);
      return this.updateImmediateChild(r, i);
    }
  }
  isEmpty() {
    return this.children_.isEmpty();
  }
  numChildren() {
    return this.children_.count();
  }
  val(e) {
    if (this.isEmpty()) return null;
    const n = {};
    let r = 0,
      i = 0,
      s = !0;
    if (
      (this.forEachChild(se, (o, a) => {
        (n[o] = a.val(e)),
          r++,
          s && A.INTEGER_REGEXP_.test(o)
            ? (i = Math.max(i, Number(o)))
            : (s = !1);
      }),
      !e && s && i < 2 * r)
    ) {
      const o = [];
      for (const a in n) o[a] = n[a];
      return o;
    } else
      return (
        e &&
          !this.getPriority().isEmpty() &&
          (n[".priority"] = this.getPriority().val()),
        n
      );
  }
  hash() {
    if (this.lazyHash_ === null) {
      let e = "";
      this.getPriority().isEmpty() ||
        (e += "priority:" + Pv(this.getPriority().val()) + ":"),
        this.forEachChild(se, (n, r) => {
          const i = r.hash();
          i !== "" && (e += ":" + n + ":" + i);
        }),
        (this.lazyHash_ = e === "" ? "" : tv(e));
    }
    return this.lazyHash_;
  }
  getPredecessorChildName(e, n, r) {
    const i = this.resolveIndex_(r);
    if (i) {
      const s = i.getPredecessorKey(new M(e, n));
      return s ? s.name : null;
    } else return this.children_.getPredecessorKey(e);
  }
  getFirstChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const r = n.minKey();
      return r && r.name;
    } else return this.children_.minKey();
  }
  getFirstChild(e) {
    const n = this.getFirstChildName(e);
    return n ? new M(n, this.children_.get(n)) : null;
  }
  getLastChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const r = n.maxKey();
      return r && r.name;
    } else return this.children_.maxKey();
  }
  getLastChild(e) {
    const n = this.getLastChildName(e);
    return n ? new M(n, this.children_.get(n)) : null;
  }
  forEachChild(e, n) {
    const r = this.resolveIndex_(e);
    return r
      ? r.inorderTraversal((i) => n(i.name, i.node))
      : this.children_.inorderTraversal(n);
  }
  getIterator(e) {
    return this.getIteratorFrom(e.minPost(), e);
  }
  getIteratorFrom(e, n) {
    const r = this.resolveIndex_(n);
    if (r) return r.getIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getIteratorFrom(e.name, M.Wrap);
      let s = i.peek();
      for (; s != null && n.compare(s, e) < 0; ) i.getNext(), (s = i.peek());
      return i;
    }
  }
  getReverseIterator(e) {
    return this.getReverseIteratorFrom(e.maxPost(), e);
  }
  getReverseIteratorFrom(e, n) {
    const r = this.resolveIndex_(n);
    if (r) return r.getReverseIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getReverseIteratorFrom(e.name, M.Wrap);
      let s = i.peek();
      for (; s != null && n.compare(s, e) > 0; ) i.getNext(), (s = i.peek());
      return i;
    }
  }
  compareTo(e) {
    return this.isEmpty()
      ? e.isEmpty()
        ? 0
        : -1
      : e.isLeafNode() || e.isEmpty()
      ? 1
      : e === Is
      ? -1
      : 0;
  }
  withIndex(e) {
    if (e === Ar || this.indexMap_.hasIndex(e)) return this;
    {
      const n = this.indexMap_.addIndex(e, this.children_);
      return new A(this.children_, this.priorityNode_, n);
    }
  }
  isIndexed(e) {
    return e === Ar || this.indexMap_.hasIndex(e);
  }
  equals(e) {
    if (e === this) return !0;
    if (e.isLeafNode()) return !1;
    {
      const n = e;
      if (this.getPriority().equals(n.getPriority()))
        if (this.children_.count() === n.children_.count()) {
          const r = this.getIterator(se),
            i = n.getIterator(se);
          let s = r.getNext(),
            o = i.getNext();
          for (; s && o; ) {
            if (s.name !== o.name || !s.node.equals(o.node)) return !1;
            (s = r.getNext()), (o = i.getNext());
          }
          return s === null && o === null;
        } else return !1;
      else return !1;
    }
  }
  resolveIndex_(e) {
    return e === Ar ? null : this.indexMap_.get(e.toString());
  }
}
A.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class wT extends A {
  constructor() {
    super(new Ue(Md), A.EMPTY_NODE, At.Default);
  }
  compareTo(e) {
    return e === this ? 0 : 1;
  }
  equals(e) {
    return e === this;
  }
  getPriority() {
    return this;
  }
  getImmediateChild(e) {
    return A.EMPTY_NODE;
  }
  isEmpty() {
    return !1;
  }
}
const Is = new wT();
Object.defineProperties(M, {
  MIN: { value: new M(Hr, A.EMPTY_NODE) },
  MAX: { value: new M(Qn, Is) },
});
Rv.__EMPTY_NODE = A.EMPTY_NODE;
pe.__childrenNodeConstructor = A;
mT(Is);
_T(Is);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ST = !0;
function _e(t, e = null) {
  if (t === null) return A.EMPTY_NODE;
  if (
    (typeof t == "object" && ".priority" in t && (e = t[".priority"]),
    C(
      e === null ||
        typeof e == "string" ||
        typeof e == "number" ||
        (typeof e == "object" && ".sv" in e),
      "Invalid priority type found: " + typeof e
    ),
    typeof t == "object" &&
      ".value" in t &&
      t[".value"] !== null &&
      (t = t[".value"]),
    typeof t != "object" || ".sv" in t)
  ) {
    const n = t;
    return new pe(n, _e(e));
  }
  if (!(t instanceof Array) && ST) {
    const n = [];
    let r = !1;
    if (
      (He(t, (o, a) => {
        if (o.substring(0, 1) !== ".") {
          const l = _e(a);
          l.isEmpty() ||
            ((r = r || !l.getPriority().isEmpty()), n.push(new M(o, l)));
        }
      }),
      n.length === 0)
    )
      return A.EMPTY_NODE;
    const s = Jo(n, pT, (o) => o.name, Md);
    if (r) {
      const o = Jo(n, se.getCompare());
      return new A(s, _e(e), new At({ ".priority": o }, { ".priority": se }));
    } else return new A(s, _e(e), At.Default);
  } else {
    let n = A.EMPTY_NODE;
    return (
      He(t, (r, i) => {
        if (Ht(t, r) && r.substring(0, 1) !== ".") {
          const s = _e(i);
          (s.isLeafNode() || !s.isEmpty()) &&
            (n = n.updateImmediateChild(r, s));
        }
      }),
      n.updatePriority(_e(e))
    );
  }
}
gT(_e);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class CT extends ja {
  constructor(e) {
    super(),
      (this.indexPath_ = e),
      C(
        !F(e) && L(e) !== ".priority",
        "Can't create PathIndex with empty path or .priority key"
      );
  }
  extractChild(e) {
    return e.getChild(this.indexPath_);
  }
  isDefinedOn(e) {
    return !e.getChild(this.indexPath_).isEmpty();
  }
  compare(e, n) {
    const r = this.extractChild(e.node),
      i = this.extractChild(n.node),
      s = r.compareTo(i);
    return s === 0 ? ti(e.name, n.name) : s;
  }
  makePost(e, n) {
    const r = _e(e),
      i = A.EMPTY_NODE.updateChild(this.indexPath_, r);
    return new M(n, i);
  }
  maxPost() {
    const e = A.EMPTY_NODE.updateChild(this.indexPath_, Is);
    return new M(Qn, e);
  }
  toString() {
    return Iv(this.indexPath_, 0).join("/");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IT extends ja {
  compare(e, n) {
    const r = e.node.compareTo(n.node);
    return r === 0 ? ti(e.name, n.name) : r;
  }
  isDefinedOn(e) {
    return !0;
  }
  indexedValueChanged(e, n) {
    return !e.equals(n);
  }
  minPost() {
    return M.MIN;
  }
  maxPost() {
    return M.MAX;
  }
  makePost(e, n) {
    const r = _e(e);
    return new M(n, r);
  }
  toString() {
    return ".value";
  }
}
const TT = new IT();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xv(t) {
  return { type: "value", snapshotNode: t };
}
function Wr(t, e) {
  return { type: "child_added", snapshotNode: e, childName: t };
}
function as(t, e) {
  return { type: "child_removed", snapshotNode: e, childName: t };
}
function ls(t, e, n) {
  return { type: "child_changed", snapshotNode: e, childName: t, oldSnap: n };
}
function kT(t, e) {
  return { type: "child_moved", snapshotNode: e, childName: t };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fd {
  constructor(e) {
    this.index_ = e;
  }
  updateChild(e, n, r, i, s, o) {
    C(
      e.isIndexed(this.index_),
      "A node must be indexed if only a child is updated"
    );
    const a = e.getImmediateChild(n);
    return (a.getChild(i).equals(r.getChild(i)) &&
      a.isEmpty() === r.isEmpty()) ||
      (o != null &&
        (r.isEmpty()
          ? e.hasChild(n)
            ? o.trackChildChange(as(n, a))
            : C(
                e.isLeafNode(),
                "A child remove without an old child only makes sense on a leaf node"
              )
          : a.isEmpty()
          ? o.trackChildChange(Wr(n, r))
          : o.trackChildChange(ls(n, r, a))),
      e.isLeafNode() && r.isEmpty())
      ? e
      : e.updateImmediateChild(n, r).withIndex(this.index_);
  }
  updateFullNode(e, n, r) {
    return (
      r != null &&
        (e.isLeafNode() ||
          e.forEachChild(se, (i, s) => {
            n.hasChild(i) || r.trackChildChange(as(i, s));
          }),
        n.isLeafNode() ||
          n.forEachChild(se, (i, s) => {
            if (e.hasChild(i)) {
              const o = e.getImmediateChild(i);
              o.equals(s) || r.trackChildChange(ls(i, s, o));
            } else r.trackChildChange(Wr(i, s));
          })),
      n.withIndex(this.index_)
    );
  }
  updatePriority(e, n) {
    return e.isEmpty() ? A.EMPTY_NODE : e.updatePriority(n);
  }
  filtersNodes() {
    return !1;
  }
  getIndexedFilter() {
    return this;
  }
  getIndex() {
    return this.index_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class us {
  constructor(e) {
    (this.indexedFilter_ = new Fd(e.getIndex())),
      (this.index_ = e.getIndex()),
      (this.startPost_ = us.getStartPost_(e)),
      (this.endPost_ = us.getEndPost_(e)),
      (this.startIsInclusive_ = !e.startAfterSet_),
      (this.endIsInclusive_ = !e.endBeforeSet_);
  }
  getStartPost() {
    return this.startPost_;
  }
  getEndPost() {
    return this.endPost_;
  }
  matches(e) {
    const n = this.startIsInclusive_
        ? this.index_.compare(this.getStartPost(), e) <= 0
        : this.index_.compare(this.getStartPost(), e) < 0,
      r = this.endIsInclusive_
        ? this.index_.compare(e, this.getEndPost()) <= 0
        : this.index_.compare(e, this.getEndPost()) < 0;
    return n && r;
  }
  updateChild(e, n, r, i, s, o) {
    return (
      this.matches(new M(n, r)) || (r = A.EMPTY_NODE),
      this.indexedFilter_.updateChild(e, n, r, i, s, o)
    );
  }
  updateFullNode(e, n, r) {
    n.isLeafNode() && (n = A.EMPTY_NODE);
    let i = n.withIndex(this.index_);
    i = i.updatePriority(A.EMPTY_NODE);
    const s = this;
    return (
      n.forEachChild(se, (o, a) => {
        s.matches(new M(o, a)) || (i = i.updateImmediateChild(o, A.EMPTY_NODE));
      }),
      this.indexedFilter_.updateFullNode(e, i, r)
    );
  }
  updatePriority(e, n) {
    return e;
  }
  filtersNodes() {
    return !0;
  }
  getIndexedFilter() {
    return this.indexedFilter_;
  }
  getIndex() {
    return this.index_;
  }
  static getStartPost_(e) {
    if (e.hasStart()) {
      const n = e.getIndexStartName();
      return e.getIndex().makePost(e.getIndexStartValue(), n);
    } else return e.getIndex().minPost();
  }
  static getEndPost_(e) {
    if (e.hasEnd()) {
      const n = e.getIndexEndName();
      return e.getIndex().makePost(e.getIndexEndValue(), n);
    } else return e.getIndex().maxPost();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class RT {
  constructor(e) {
    (this.withinDirectionalStart = (n) =>
      this.reverse_ ? this.withinEndPost(n) : this.withinStartPost(n)),
      (this.withinDirectionalEnd = (n) =>
        this.reverse_ ? this.withinStartPost(n) : this.withinEndPost(n)),
      (this.withinStartPost = (n) => {
        const r = this.index_.compare(this.rangedFilter_.getStartPost(), n);
        return this.startIsInclusive_ ? r <= 0 : r < 0;
      }),
      (this.withinEndPost = (n) => {
        const r = this.index_.compare(n, this.rangedFilter_.getEndPost());
        return this.endIsInclusive_ ? r <= 0 : r < 0;
      }),
      (this.rangedFilter_ = new us(e)),
      (this.index_ = e.getIndex()),
      (this.limit_ = e.getLimit()),
      (this.reverse_ = !e.isViewFromLeft()),
      (this.startIsInclusive_ = !e.startAfterSet_),
      (this.endIsInclusive_ = !e.endBeforeSet_);
  }
  updateChild(e, n, r, i, s, o) {
    return (
      this.rangedFilter_.matches(new M(n, r)) || (r = A.EMPTY_NODE),
      e.getImmediateChild(n).equals(r)
        ? e
        : e.numChildren() < this.limit_
        ? this.rangedFilter_.getIndexedFilter().updateChild(e, n, r, i, s, o)
        : this.fullLimitUpdateChild_(e, n, r, s, o)
    );
  }
  updateFullNode(e, n, r) {
    let i;
    if (n.isLeafNode() || n.isEmpty()) i = A.EMPTY_NODE.withIndex(this.index_);
    else if (this.limit_ * 2 < n.numChildren() && n.isIndexed(this.index_)) {
      i = A.EMPTY_NODE.withIndex(this.index_);
      let s;
      this.reverse_
        ? (s = n.getReverseIteratorFrom(
            this.rangedFilter_.getEndPost(),
            this.index_
          ))
        : (s = n.getIteratorFrom(
            this.rangedFilter_.getStartPost(),
            this.index_
          ));
      let o = 0;
      for (; s.hasNext() && o < this.limit_; ) {
        const a = s.getNext();
        if (this.withinDirectionalStart(a))
          if (this.withinDirectionalEnd(a))
            (i = i.updateImmediateChild(a.name, a.node)), o++;
          else break;
        else continue;
      }
    } else {
      (i = n.withIndex(this.index_)), (i = i.updatePriority(A.EMPTY_NODE));
      let s;
      this.reverse_
        ? (s = i.getReverseIterator(this.index_))
        : (s = i.getIterator(this.index_));
      let o = 0;
      for (; s.hasNext(); ) {
        const a = s.getNext();
        o < this.limit_ &&
        this.withinDirectionalStart(a) &&
        this.withinDirectionalEnd(a)
          ? o++
          : (i = i.updateImmediateChild(a.name, A.EMPTY_NODE));
      }
    }
    return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, r);
  }
  updatePriority(e, n) {
    return e;
  }
  filtersNodes() {
    return !0;
  }
  getIndexedFilter() {
    return this.rangedFilter_.getIndexedFilter();
  }
  getIndex() {
    return this.index_;
  }
  fullLimitUpdateChild_(e, n, r, i, s) {
    let o;
    if (this.reverse_) {
      const c = this.index_.getCompare();
      o = (h, f) => c(f, h);
    } else o = this.index_.getCompare();
    const a = e;
    C(a.numChildren() === this.limit_, "");
    const l = new M(n, r),
      u = this.reverse_
        ? a.getFirstChild(this.index_)
        : a.getLastChild(this.index_),
      d = this.rangedFilter_.matches(l);
    if (a.hasChild(n)) {
      const c = a.getImmediateChild(n);
      let h = i.getChildAfterChild(this.index_, u, this.reverse_);
      for (; h != null && (h.name === n || a.hasChild(h.name)); )
        h = i.getChildAfterChild(this.index_, h, this.reverse_);
      const f = h == null ? 1 : o(h, l);
      if (d && !r.isEmpty() && f >= 0)
        return (
          s != null && s.trackChildChange(ls(n, r, c)),
          a.updateImmediateChild(n, r)
        );
      {
        s != null && s.trackChildChange(as(n, c));
        const _ = a.updateImmediateChild(n, A.EMPTY_NODE);
        return h != null && this.rangedFilter_.matches(h)
          ? (s != null && s.trackChildChange(Wr(h.name, h.node)),
            _.updateImmediateChild(h.name, h.node))
          : _;
      }
    } else
      return r.isEmpty()
        ? e
        : d && o(u, l) >= 0
        ? (s != null &&
            (s.trackChildChange(as(u.name, u.node)),
            s.trackChildChange(Wr(n, r))),
          a
            .updateImmediateChild(n, r)
            .updateImmediateChild(u.name, A.EMPTY_NODE))
        : e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ud {
  constructor() {
    (this.limitSet_ = !1),
      (this.startSet_ = !1),
      (this.startNameSet_ = !1),
      (this.startAfterSet_ = !1),
      (this.endSet_ = !1),
      (this.endNameSet_ = !1),
      (this.endBeforeSet_ = !1),
      (this.limit_ = 0),
      (this.viewFrom_ = ""),
      (this.indexStartValue_ = null),
      (this.indexStartName_ = ""),
      (this.indexEndValue_ = null),
      (this.indexEndName_ = ""),
      (this.index_ = se);
  }
  hasStart() {
    return this.startSet_;
  }
  isViewFromLeft() {
    return this.viewFrom_ === "" ? this.startSet_ : this.viewFrom_ === "l";
  }
  getIndexStartValue() {
    return (
      C(this.startSet_, "Only valid if start has been set"),
      this.indexStartValue_
    );
  }
  getIndexStartName() {
    return (
      C(this.startSet_, "Only valid if start has been set"),
      this.startNameSet_ ? this.indexStartName_ : Hr
    );
  }
  hasEnd() {
    return this.endSet_;
  }
  getIndexEndValue() {
    return (
      C(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
    );
  }
  getIndexEndName() {
    return (
      C(this.endSet_, "Only valid if end has been set"),
      this.endNameSet_ ? this.indexEndName_ : Qn
    );
  }
  hasLimit() {
    return this.limitSet_;
  }
  hasAnchoredLimit() {
    return this.limitSet_ && this.viewFrom_ !== "";
  }
  getLimit() {
    return C(this.limitSet_, "Only valid if limit has been set"), this.limit_;
  }
  getIndex() {
    return this.index_;
  }
  loadsAllData() {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  }
  isDefault() {
    return this.loadsAllData() && this.index_ === se;
  }
  copy() {
    const e = new Ud();
    return (
      (e.limitSet_ = this.limitSet_),
      (e.limit_ = this.limit_),
      (e.startSet_ = this.startSet_),
      (e.startAfterSet_ = this.startAfterSet_),
      (e.indexStartValue_ = this.indexStartValue_),
      (e.startNameSet_ = this.startNameSet_),
      (e.indexStartName_ = this.indexStartName_),
      (e.endSet_ = this.endSet_),
      (e.endBeforeSet_ = this.endBeforeSet_),
      (e.indexEndValue_ = this.indexEndValue_),
      (e.endNameSet_ = this.endNameSet_),
      (e.indexEndName_ = this.indexEndName_),
      (e.index_ = this.index_),
      (e.viewFrom_ = this.viewFrom_),
      e
    );
  }
}
function PT(t) {
  return t.loadsAllData()
    ? new Fd(t.getIndex())
    : t.hasLimit()
    ? new RT(t)
    : new us(t);
}
function Cp(t) {
  const e = {};
  if (t.isDefault()) return e;
  let n;
  if (
    (t.index_ === se
      ? (n = "$priority")
      : t.index_ === TT
      ? (n = "$value")
      : t.index_ === Ar
      ? (n = "$key")
      : (C(t.index_ instanceof CT, "Unrecognized index type!"),
        (n = t.index_.toString())),
    (e.orderBy = ce(n)),
    t.startSet_)
  ) {
    const r = t.startAfterSet_ ? "startAfter" : "startAt";
    (e[r] = ce(t.indexStartValue_)),
      t.startNameSet_ && (e[r] += "," + ce(t.indexStartName_));
  }
  if (t.endSet_) {
    const r = t.endBeforeSet_ ? "endBefore" : "endAt";
    (e[r] = ce(t.indexEndValue_)),
      t.endNameSet_ && (e[r] += "," + ce(t.indexEndName_));
  }
  return (
    t.limitSet_ &&
      (t.isViewFromLeft()
        ? (e.limitToFirst = t.limit_)
        : (e.limitToLast = t.limit_)),
    e
  );
}
function Ip(t) {
  const e = {};
  if (
    (t.startSet_ &&
      ((e.sp = t.indexStartValue_),
      t.startNameSet_ && (e.sn = t.indexStartName_),
      (e.sin = !t.startAfterSet_)),
    t.endSet_ &&
      ((e.ep = t.indexEndValue_),
      t.endNameSet_ && (e.en = t.indexEndName_),
      (e.ein = !t.endBeforeSet_)),
    t.limitSet_)
  ) {
    e.l = t.limit_;
    let n = t.viewFrom_;
    n === "" && (t.isViewFromLeft() ? (n = "l") : (n = "r")), (e.vf = n);
  }
  return t.index_ !== se && (e.i = t.index_.toString()), e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xo extends wv {
  constructor(e, n, r, i) {
    super(),
      (this.repoInfo_ = e),
      (this.onDataUpdate_ = n),
      (this.authTokenProvider_ = r),
      (this.appCheckTokenProvider_ = i),
      (this.log_ = Cs("p:rest:")),
      (this.listens_ = {});
  }
  reportStats(e) {
    throw new Error("Method not implemented.");
  }
  static getListenId_(e, n) {
    return n !== void 0
      ? "tag$" + n
      : (C(
          e._queryParams.isDefault(),
          "should have a tag if it's not a default query."
        ),
        e._path.toString());
  }
  listen(e, n, r, i) {
    const s = e._path.toString();
    this.log_("Listen called for " + s + " " + e._queryIdentifier);
    const o = Xo.getListenId_(e, r),
      a = {};
    this.listens_[o] = a;
    const l = Cp(e._queryParams);
    this.restRequest_(s + ".json", l, (u, d) => {
      let c = d;
      if (
        (u === 404 && ((c = null), (u = null)),
        u === null && this.onDataUpdate_(s, c, !1, r),
        Br(this.listens_, o) === a)
      ) {
        let h;
        u
          ? u === 401
            ? (h = "permission_denied")
            : (h = "rest_error:" + u)
          : (h = "ok"),
          i(h, null);
      }
    });
  }
  unlisten(e, n) {
    const r = Xo.getListenId_(e, n);
    delete this.listens_[r];
  }
  get(e) {
    const n = Cp(e._queryParams),
      r = e._path.toString(),
      i = new Fa();
    return (
      this.restRequest_(r + ".json", n, (s, o) => {
        let a = o;
        s === 404 && ((a = null), (s = null)),
          s === null
            ? (this.onDataUpdate_(r, a, !1, null), i.resolve(a))
            : i.reject(new Error(a));
      }),
      i.promise
    );
  }
  refreshAuthToken(e) {}
  restRequest_(e, n = {}, r) {
    return (
      (n.format = "export"),
      Promise.all([
        this.authTokenProvider_.getToken(!1),
        this.appCheckTokenProvider_.getToken(!1),
      ]).then(([i, s]) => {
        i && i.accessToken && (n.auth = i.accessToken),
          s && s.token && (n.ac = s.token);
        const o =
          (this.repoInfo_.secure ? "https://" : "http://") +
          this.repoInfo_.host +
          e +
          "?ns=" +
          this.repoInfo_.namespace +
          Zr(n);
        this.log_("Sending REST request for " + o);
        const a = new XMLHttpRequest();
        (a.onreadystatechange = () => {
          if (r && a.readyState === 4) {
            this.log_(
              "REST Response for " + o + " received. status:",
              a.status,
              "response:",
              a.responseText
            );
            let l = null;
            if (a.status >= 200 && a.status < 300) {
              try {
                l = is(a.responseText);
              } catch {
                ze(
                  "Failed to parse JSON response for " +
                    o +
                    ": " +
                    a.responseText
                );
              }
              r(null, l);
            } else
              a.status !== 401 &&
                a.status !== 404 &&
                ze(
                  "Got unsuccessful REST response for " +
                    o +
                    " Status: " +
                    a.status
                ),
                r(a.status);
            r = null;
          }
        }),
          a.open("GET", o, !0),
          a.send();
      })
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class OT {
  constructor() {
    this.rootNode_ = A.EMPTY_NODE;
  }
  getNode(e) {
    return this.rootNode_.getChild(e);
  }
  updateSnapshot(e, n) {
    this.rootNode_ = this.rootNode_.updateChild(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zo() {
  return { value: null, children: new Map() };
}
function bv(t, e, n) {
  if (F(e)) (t.value = n), t.children.clear();
  else if (t.value !== null) t.value = t.value.updateChild(e, n);
  else {
    const r = L(e);
    t.children.has(r) || t.children.set(r, Zo());
    const i = t.children.get(r);
    (e = q(e)), bv(i, e, n);
  }
}
function hc(t, e, n) {
  t.value !== null
    ? n(e, t.value)
    : NT(t, (r, i) => {
        const s = new $(e.toString() + "/" + r);
        hc(i, s, n);
      });
}
function NT(t, e) {
  t.children.forEach((n, r) => {
    e(r, n);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AT {
  constructor(e) {
    (this.collection_ = e), (this.last_ = null);
  }
  get() {
    const e = this.collection_.get(),
      n = Object.assign({}, e);
    return (
      this.last_ &&
        He(this.last_, (r, i) => {
          n[r] = n[r] - i;
        }),
      (this.last_ = e),
      n
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tp = 10 * 1e3,
  xT = 30 * 1e3,
  bT = 5 * 60 * 1e3;
class DT {
  constructor(e, n) {
    (this.server_ = n),
      (this.statsToReport_ = {}),
      (this.statsListener_ = new AT(e));
    const r = Tp + (xT - Tp) * Math.random();
    Mi(this.reportStats_.bind(this), Math.floor(r));
  }
  reportStats_() {
    const e = this.statsListener_.get(),
      n = {};
    let r = !1;
    He(e, (i, s) => {
      s > 0 && Ht(this.statsToReport_, i) && ((n[i] = s), (r = !0));
    }),
      r && this.server_.reportStats(n),
      Mi(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * bT));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ct;
(function (t) {
  (t[(t.OVERWRITE = 0)] = "OVERWRITE"),
    (t[(t.MERGE = 1)] = "MERGE"),
    (t[(t.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
    (t[(t.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
})(ct || (ct = {}));
function Dv() {
  return { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 };
}
function jd() {
  return { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 };
}
function Vd(t) {
  return { fromUser: !1, fromServer: !0, queryId: t, tagged: !0 };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ea {
  constructor(e, n, r) {
    (this.path = e),
      (this.affectedTree = n),
      (this.revert = r),
      (this.type = ct.ACK_USER_WRITE),
      (this.source = Dv());
  }
  operationForChild(e) {
    if (F(this.path)) {
      if (this.affectedTree.value != null)
        return (
          C(
            this.affectedTree.children.isEmpty(),
            "affectedTree should not have overlapping affected paths."
          ),
          this
        );
      {
        const n = this.affectedTree.subtree(new $(e));
        return new ea(B(), n, this.revert);
      }
    } else
      return (
        C(L(this.path) === e, "operationForChild called for unrelated child."),
        new ea(q(this.path), this.affectedTree, this.revert)
      );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cs {
  constructor(e, n) {
    (this.source = e), (this.path = n), (this.type = ct.LISTEN_COMPLETE);
  }
  operationForChild(e) {
    return F(this.path)
      ? new cs(this.source, B())
      : new cs(this.source, q(this.path));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yn {
  constructor(e, n, r) {
    (this.source = e),
      (this.path = n),
      (this.snap = r),
      (this.type = ct.OVERWRITE);
  }
  operationForChild(e) {
    return F(this.path)
      ? new Yn(this.source, B(), this.snap.getImmediateChild(e))
      : new Yn(this.source, q(this.path), this.snap);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ds {
  constructor(e, n, r) {
    (this.source = e),
      (this.path = n),
      (this.children = r),
      (this.type = ct.MERGE);
  }
  operationForChild(e) {
    if (F(this.path)) {
      const n = this.children.subtree(new $(e));
      return n.isEmpty()
        ? null
        : n.value
        ? new Yn(this.source, B(), n.value)
        : new ds(this.source, B(), n);
    } else
      return (
        C(
          L(this.path) === e,
          "Can't get a merge for a child not on the path of the operation"
        ),
        new ds(this.source, q(this.path), this.children)
      );
  }
  toString() {
    return (
      "Operation(" +
      this.path +
      ": " +
      this.source.toString() +
      " merge: " +
      this.children.toString() +
      ")"
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class En {
  constructor(e, n, r) {
    (this.node_ = e), (this.fullyInitialized_ = n), (this.filtered_ = r);
  }
  isFullyInitialized() {
    return this.fullyInitialized_;
  }
  isFiltered() {
    return this.filtered_;
  }
  isCompleteForPath(e) {
    if (F(e)) return this.isFullyInitialized() && !this.filtered_;
    const n = L(e);
    return this.isCompleteForChild(n);
  }
  isCompleteForChild(e) {
    return (
      (this.isFullyInitialized() && !this.filtered_) || this.node_.hasChild(e)
    );
  }
  getNode() {
    return this.node_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LT {
  constructor(e) {
    (this.query_ = e), (this.index_ = this.query_._queryParams.getIndex());
  }
}
function MT(t, e, n, r) {
  const i = [],
    s = [];
  return (
    e.forEach((o) => {
      o.type === "child_changed" &&
        t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) &&
        s.push(kT(o.childName, o.snapshotNode));
    }),
    Ei(t, i, "child_removed", e, r, n),
    Ei(t, i, "child_added", e, r, n),
    Ei(t, i, "child_moved", s, r, n),
    Ei(t, i, "child_changed", e, r, n),
    Ei(t, i, "value", e, r, n),
    i
  );
}
function Ei(t, e, n, r, i, s) {
  const o = r.filter((a) => a.type === n);
  o.sort((a, l) => UT(t, a, l)),
    o.forEach((a) => {
      const l = FT(t, a, s);
      i.forEach((u) => {
        u.respondsTo(a.type) && e.push(u.createEvent(l, t.query_));
      });
    });
}
function FT(t, e, n) {
  return (
    e.type === "value" ||
      e.type === "child_removed" ||
      (e.prevName = n.getPredecessorChildName(
        e.childName,
        e.snapshotNode,
        t.index_
      )),
    e
  );
}
function UT(t, e, n) {
  if (e.childName == null || n.childName == null)
    throw Xr("Should only compare child_ events.");
  const r = new M(e.childName, e.snapshotNode),
    i = new M(n.childName, n.snapshotNode);
  return t.index_.compare(r, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Va(t, e) {
  return { eventCache: t, serverCache: e };
}
function Fi(t, e, n, r) {
  return Va(new En(e, n, r), t.serverCache);
}
function Lv(t, e, n, r) {
  return Va(t.eventCache, new En(e, n, r));
}
function ta(t) {
  return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null;
}
function Jn(t) {
  return t.serverCache.isFullyInitialized() ? t.serverCache.getNode() : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Xl;
const jT = () => (Xl || (Xl = new Ue(II)), Xl);
class Q {
  constructor(e, n = jT()) {
    (this.value = e), (this.children = n);
  }
  static fromObject(e) {
    let n = new Q(null);
    return (
      He(e, (r, i) => {
        n = n.set(new $(r), i);
      }),
      n
    );
  }
  isEmpty() {
    return this.value === null && this.children.isEmpty();
  }
  findRootMostMatchingPathAndValue(e, n) {
    if (this.value != null && n(this.value))
      return { path: B(), value: this.value };
    if (F(e)) return null;
    {
      const r = L(e),
        i = this.children.get(r);
      if (i !== null) {
        const s = i.findRootMostMatchingPathAndValue(q(e), n);
        return s != null
          ? { path: de(new $(r), s.path), value: s.value }
          : null;
      } else return null;
    }
  }
  findRootMostValueAndPath(e) {
    return this.findRootMostMatchingPathAndValue(e, () => !0);
  }
  subtree(e) {
    if (F(e)) return this;
    {
      const n = L(e),
        r = this.children.get(n);
      return r !== null ? r.subtree(q(e)) : new Q(null);
    }
  }
  set(e, n) {
    if (F(e)) return new Q(n, this.children);
    {
      const r = L(e),
        s = (this.children.get(r) || new Q(null)).set(q(e), n),
        o = this.children.insert(r, s);
      return new Q(this.value, o);
    }
  }
  remove(e) {
    if (F(e))
      return this.children.isEmpty() ? new Q(null) : new Q(null, this.children);
    {
      const n = L(e),
        r = this.children.get(n);
      if (r) {
        const i = r.remove(q(e));
        let s;
        return (
          i.isEmpty()
            ? (s = this.children.remove(n))
            : (s = this.children.insert(n, i)),
          this.value === null && s.isEmpty()
            ? new Q(null)
            : new Q(this.value, s)
        );
      } else return this;
    }
  }
  get(e) {
    if (F(e)) return this.value;
    {
      const n = L(e),
        r = this.children.get(n);
      return r ? r.get(q(e)) : null;
    }
  }
  setTree(e, n) {
    if (F(e)) return n;
    {
      const r = L(e),
        s = (this.children.get(r) || new Q(null)).setTree(q(e), n);
      let o;
      return (
        s.isEmpty()
          ? (o = this.children.remove(r))
          : (o = this.children.insert(r, s)),
        new Q(this.value, o)
      );
    }
  }
  fold(e) {
    return this.fold_(B(), e);
  }
  fold_(e, n) {
    const r = {};
    return (
      this.children.inorderTraversal((i, s) => {
        r[i] = s.fold_(de(e, i), n);
      }),
      n(e, this.value, r)
    );
  }
  findOnPath(e, n) {
    return this.findOnPath_(e, B(), n);
  }
  findOnPath_(e, n, r) {
    const i = this.value ? r(n, this.value) : !1;
    if (i) return i;
    if (F(e)) return null;
    {
      const s = L(e),
        o = this.children.get(s);
      return o ? o.findOnPath_(q(e), de(n, s), r) : null;
    }
  }
  foreachOnPath(e, n) {
    return this.foreachOnPath_(e, B(), n);
  }
  foreachOnPath_(e, n, r) {
    if (F(e)) return this;
    {
      this.value && r(n, this.value);
      const i = L(e),
        s = this.children.get(i);
      return s ? s.foreachOnPath_(q(e), de(n, i), r) : new Q(null);
    }
  }
  foreach(e) {
    this.foreach_(B(), e);
  }
  foreach_(e, n) {
    this.children.inorderTraversal((r, i) => {
      i.foreach_(de(e, r), n);
    }),
      this.value && n(e, this.value);
  }
  foreachChild(e) {
    this.children.inorderTraversal((n, r) => {
      r.value && e(n, r.value);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ft {
  constructor(e) {
    this.writeTree_ = e;
  }
  static empty() {
    return new ft(new Q(null));
  }
}
function Ui(t, e, n) {
  if (F(e)) return new ft(new Q(n));
  {
    const r = t.writeTree_.findRootMostValueAndPath(e);
    if (r != null) {
      const i = r.path;
      let s = r.value;
      const o = xe(i, e);
      return (s = s.updateChild(o, n)), new ft(t.writeTree_.set(i, s));
    } else {
      const i = new Q(n),
        s = t.writeTree_.setTree(e, i);
      return new ft(s);
    }
  }
}
function kp(t, e, n) {
  let r = t;
  return (
    He(n, (i, s) => {
      r = Ui(r, de(e, i), s);
    }),
    r
  );
}
function Rp(t, e) {
  if (F(e)) return ft.empty();
  {
    const n = t.writeTree_.setTree(e, new Q(null));
    return new ft(n);
  }
}
function fc(t, e) {
  return nr(t, e) != null;
}
function nr(t, e) {
  const n = t.writeTree_.findRootMostValueAndPath(e);
  return n != null ? t.writeTree_.get(n.path).getChild(xe(n.path, e)) : null;
}
function Pp(t) {
  const e = [],
    n = t.writeTree_.value;
  return (
    n != null
      ? n.isLeafNode() ||
        n.forEachChild(se, (r, i) => {
          e.push(new M(r, i));
        })
      : t.writeTree_.children.inorderTraversal((r, i) => {
          i.value != null && e.push(new M(r, i.value));
        }),
    e
  );
}
function mn(t, e) {
  if (F(e)) return t;
  {
    const n = nr(t, e);
    return n != null ? new ft(new Q(n)) : new ft(t.writeTree_.subtree(e));
  }
}
function pc(t) {
  return t.writeTree_.isEmpty();
}
function $r(t, e) {
  return Mv(B(), t.writeTree_, e);
}
function Mv(t, e, n) {
  if (e.value != null) return n.updateChild(t, e.value);
  {
    let r = null;
    return (
      e.children.inorderTraversal((i, s) => {
        i === ".priority"
          ? (C(s.value !== null, "Priority writes must always be leaf nodes"),
            (r = s.value))
          : (n = Mv(de(t, i), s, n));
      }),
      !n.getChild(t).isEmpty() &&
        r !== null &&
        (n = n.updateChild(de(t, ".priority"), r)),
      n
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ba(t, e) {
  return Vv(e, t);
}
function VT(t, e, n, r, i) {
  C(r > t.lastWriteId, "Stacking an older write on top of newer ones"),
    i === void 0 && (i = !0),
    t.allWrites.push({ path: e, snap: n, writeId: r, visible: i }),
    i && (t.visibleWrites = Ui(t.visibleWrites, e, n)),
    (t.lastWriteId = r);
}
function BT(t, e) {
  for (let n = 0; n < t.allWrites.length; n++) {
    const r = t.allWrites[n];
    if (r.writeId === e) return r;
  }
  return null;
}
function zT(t, e) {
  const n = t.allWrites.findIndex((a) => a.writeId === e);
  C(n >= 0, "removeWrite called with nonexistent writeId.");
  const r = t.allWrites[n];
  t.allWrites.splice(n, 1);
  let i = r.visible,
    s = !1,
    o = t.allWrites.length - 1;
  for (; i && o >= 0; ) {
    const a = t.allWrites[o];
    a.visible &&
      (o >= n && HT(a, r.path) ? (i = !1) : ut(r.path, a.path) && (s = !0)),
      o--;
  }
  if (i) {
    if (s) return WT(t), !0;
    if (r.snap) t.visibleWrites = Rp(t.visibleWrites, r.path);
    else {
      const a = r.children;
      He(a, (l) => {
        t.visibleWrites = Rp(t.visibleWrites, de(r.path, l));
      });
    }
    return !0;
  } else return !1;
}
function HT(t, e) {
  if (t.snap) return ut(t.path, e);
  for (const n in t.children)
    if (t.children.hasOwnProperty(n) && ut(de(t.path, n), e)) return !0;
  return !1;
}
function WT(t) {
  (t.visibleWrites = Fv(t.allWrites, $T, B())),
    t.allWrites.length > 0
      ? (t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId)
      : (t.lastWriteId = -1);
}
function $T(t) {
  return t.visible;
}
function Fv(t, e, n) {
  let r = ft.empty();
  for (let i = 0; i < t.length; ++i) {
    const s = t[i];
    if (e(s)) {
      const o = s.path;
      let a;
      if (s.snap)
        ut(n, o)
          ? ((a = xe(n, o)), (r = Ui(r, a, s.snap)))
          : ut(o, n) && ((a = xe(o, n)), (r = Ui(r, B(), s.snap.getChild(a))));
      else if (s.children) {
        if (ut(n, o)) (a = xe(n, o)), (r = kp(r, a, s.children));
        else if (ut(o, n))
          if (((a = xe(o, n)), F(a))) r = kp(r, B(), s.children);
          else {
            const l = Br(s.children, L(a));
            if (l) {
              const u = l.getChild(q(a));
              r = Ui(r, B(), u);
            }
          }
      } else throw Xr("WriteRecord should have .snap or .children");
    }
  }
  return r;
}
function Uv(t, e, n, r, i) {
  if (!r && !i) {
    const s = nr(t.visibleWrites, e);
    if (s != null) return s;
    {
      const o = mn(t.visibleWrites, e);
      if (pc(o)) return n;
      if (n == null && !fc(o, B())) return null;
      {
        const a = n || A.EMPTY_NODE;
        return $r(o, a);
      }
    }
  } else {
    const s = mn(t.visibleWrites, e);
    if (!i && pc(s)) return n;
    if (!i && n == null && !fc(s, B())) return null;
    {
      const o = function (u) {
          return (
            (u.visible || i) &&
            (!r || !~r.indexOf(u.writeId)) &&
            (ut(u.path, e) || ut(e, u.path))
          );
        },
        a = Fv(t.allWrites, o, e),
        l = n || A.EMPTY_NODE;
      return $r(a, l);
    }
  }
}
function qT(t, e, n) {
  let r = A.EMPTY_NODE;
  const i = nr(t.visibleWrites, e);
  if (i)
    return (
      i.isLeafNode() ||
        i.forEachChild(se, (s, o) => {
          r = r.updateImmediateChild(s, o);
        }),
      r
    );
  if (n) {
    const s = mn(t.visibleWrites, e);
    return (
      n.forEachChild(se, (o, a) => {
        const l = $r(mn(s, new $(o)), a);
        r = r.updateImmediateChild(o, l);
      }),
      Pp(s).forEach((o) => {
        r = r.updateImmediateChild(o.name, o.node);
      }),
      r
    );
  } else {
    const s = mn(t.visibleWrites, e);
    return (
      Pp(s).forEach((o) => {
        r = r.updateImmediateChild(o.name, o.node);
      }),
      r
    );
  }
}
function GT(t, e, n, r, i) {
  C(r || i, "Either existingEventSnap or existingServerSnap must exist");
  const s = de(e, n);
  if (fc(t.visibleWrites, s)) return null;
  {
    const o = mn(t.visibleWrites, s);
    return pc(o) ? i.getChild(n) : $r(o, i.getChild(n));
  }
}
function KT(t, e, n, r) {
  const i = de(e, n),
    s = nr(t.visibleWrites, i);
  if (s != null) return s;
  if (r.isCompleteForChild(n)) {
    const o = mn(t.visibleWrites, i);
    return $r(o, r.getNode().getImmediateChild(n));
  } else return null;
}
function QT(t, e) {
  return nr(t.visibleWrites, e);
}
function YT(t, e, n, r, i, s, o) {
  let a;
  const l = mn(t.visibleWrites, e),
    u = nr(l, B());
  if (u != null) a = u;
  else if (n != null) a = $r(l, n);
  else return [];
  if (((a = a.withIndex(o)), !a.isEmpty() && !a.isLeafNode())) {
    const d = [],
      c = o.getCompare(),
      h = s ? a.getReverseIteratorFrom(r, o) : a.getIteratorFrom(r, o);
    let f = h.getNext();
    for (; f && d.length < i; ) c(f, r) !== 0 && d.push(f), (f = h.getNext());
    return d;
  } else return [];
}
function JT() {
  return { visibleWrites: ft.empty(), allWrites: [], lastWriteId: -1 };
}
function na(t, e, n, r) {
  return Uv(t.writeTree, t.treePath, e, n, r);
}
function Bd(t, e) {
  return qT(t.writeTree, t.treePath, e);
}
function Op(t, e, n, r) {
  return GT(t.writeTree, t.treePath, e, n, r);
}
function ra(t, e) {
  return QT(t.writeTree, de(t.treePath, e));
}
function XT(t, e, n, r, i, s) {
  return YT(t.writeTree, t.treePath, e, n, r, i, s);
}
function zd(t, e, n) {
  return KT(t.writeTree, t.treePath, e, n);
}
function jv(t, e) {
  return Vv(de(t.treePath, e), t.writeTree);
}
function Vv(t, e) {
  return { treePath: t, writeTree: e };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ZT {
  constructor() {
    this.changeMap = new Map();
  }
  trackChildChange(e) {
    const n = e.type,
      r = e.childName;
    C(
      n === "child_added" || n === "child_changed" || n === "child_removed",
      "Only child changes supported for tracking"
    ),
      C(r !== ".priority", "Only non-priority child changes can be tracked.");
    const i = this.changeMap.get(r);
    if (i) {
      const s = i.type;
      if (n === "child_added" && s === "child_removed")
        this.changeMap.set(r, ls(r, e.snapshotNode, i.snapshotNode));
      else if (n === "child_removed" && s === "child_added")
        this.changeMap.delete(r);
      else if (n === "child_removed" && s === "child_changed")
        this.changeMap.set(r, as(r, i.oldSnap));
      else if (n === "child_changed" && s === "child_added")
        this.changeMap.set(r, Wr(r, e.snapshotNode));
      else if (n === "child_changed" && s === "child_changed")
        this.changeMap.set(r, ls(r, e.snapshotNode, i.oldSnap));
      else
        throw Xr(
          "Illegal combination of changes: " + e + " occurred after " + i
        );
    } else this.changeMap.set(r, e);
  }
  getChanges() {
    return Array.from(this.changeMap.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ek {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, n, r) {
    return null;
  }
}
const Bv = new ek();
class Hd {
  constructor(e, n, r = null) {
    (this.writes_ = e),
      (this.viewCache_ = n),
      (this.optCompleteServerCache_ = r);
  }
  getCompleteChild(e) {
    const n = this.viewCache_.eventCache;
    if (n.isCompleteForChild(e)) return n.getNode().getImmediateChild(e);
    {
      const r =
        this.optCompleteServerCache_ != null
          ? new En(this.optCompleteServerCache_, !0, !1)
          : this.viewCache_.serverCache;
      return zd(this.writes_, e, r);
    }
  }
  getChildAfterChild(e, n, r) {
    const i =
        this.optCompleteServerCache_ != null
          ? this.optCompleteServerCache_
          : Jn(this.viewCache_),
      s = XT(this.writes_, i, n, 1, r, e);
    return s.length === 0 ? null : s[0];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tk(t) {
  return { filter: t };
}
function nk(t, e) {
  C(
    e.eventCache.getNode().isIndexed(t.filter.getIndex()),
    "Event snap not indexed"
  ),
    C(
      e.serverCache.getNode().isIndexed(t.filter.getIndex()),
      "Server snap not indexed"
    );
}
function rk(t, e, n, r, i) {
  const s = new ZT();
  let o, a;
  if (n.type === ct.OVERWRITE) {
    const u = n;
    u.source.fromUser
      ? (o = mc(t, e, u.path, u.snap, r, i, s))
      : (C(u.source.fromServer, "Unknown source."),
        (a = u.source.tagged || (e.serverCache.isFiltered() && !F(u.path))),
        (o = ia(t, e, u.path, u.snap, r, i, a, s)));
  } else if (n.type === ct.MERGE) {
    const u = n;
    u.source.fromUser
      ? (o = sk(t, e, u.path, u.children, r, i, s))
      : (C(u.source.fromServer, "Unknown source."),
        (a = u.source.tagged || e.serverCache.isFiltered()),
        (o = gc(t, e, u.path, u.children, r, i, a, s)));
  } else if (n.type === ct.ACK_USER_WRITE) {
    const u = n;
    u.revert
      ? (o = lk(t, e, u.path, r, i, s))
      : (o = ok(t, e, u.path, u.affectedTree, r, i, s));
  } else if (n.type === ct.LISTEN_COMPLETE) o = ak(t, e, n.path, r, s);
  else throw Xr("Unknown operation type: " + n.type);
  const l = s.getChanges();
  return ik(e, o, l), { viewCache: o, changes: l };
}
function ik(t, e, n) {
  const r = e.eventCache;
  if (r.isFullyInitialized()) {
    const i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
      s = ta(t);
    (n.length > 0 ||
      !t.eventCache.isFullyInitialized() ||
      (i && !r.getNode().equals(s)) ||
      !r.getNode().getPriority().equals(s.getPriority())) &&
      n.push(xv(ta(e)));
  }
}
function zv(t, e, n, r, i, s) {
  const o = e.eventCache;
  if (ra(r, n) != null) return e;
  {
    let a, l;
    if (F(n))
      if (
        (C(
          e.serverCache.isFullyInitialized(),
          "If change path is empty, we must have complete server data"
        ),
        e.serverCache.isFiltered())
      ) {
        const u = Jn(e),
          d = u instanceof A ? u : A.EMPTY_NODE,
          c = Bd(r, d);
        a = t.filter.updateFullNode(e.eventCache.getNode(), c, s);
      } else {
        const u = na(r, Jn(e));
        a = t.filter.updateFullNode(e.eventCache.getNode(), u, s);
      }
    else {
      const u = L(n);
      if (u === ".priority") {
        C(yn(n) === 1, "Can't have a priority with additional path components");
        const d = o.getNode();
        l = e.serverCache.getNode();
        const c = Op(r, n, d, l);
        c != null ? (a = t.filter.updatePriority(d, c)) : (a = o.getNode());
      } else {
        const d = q(n);
        let c;
        if (o.isCompleteForChild(u)) {
          l = e.serverCache.getNode();
          const h = Op(r, n, o.getNode(), l);
          h != null
            ? (c = o.getNode().getImmediateChild(u).updateChild(d, h))
            : (c = o.getNode().getImmediateChild(u));
        } else c = zd(r, u, e.serverCache);
        c != null
          ? (a = t.filter.updateChild(o.getNode(), u, c, d, i, s))
          : (a = o.getNode());
      }
    }
    return Fi(e, a, o.isFullyInitialized() || F(n), t.filter.filtersNodes());
  }
}
function ia(t, e, n, r, i, s, o, a) {
  const l = e.serverCache;
  let u;
  const d = o ? t.filter : t.filter.getIndexedFilter();
  if (F(n)) u = d.updateFullNode(l.getNode(), r, null);
  else if (d.filtersNodes() && !l.isFiltered()) {
    const f = l.getNode().updateChild(n, r);
    u = d.updateFullNode(l.getNode(), f, null);
  } else {
    const f = L(n);
    if (!l.isCompleteForPath(n) && yn(n) > 1) return e;
    const p = q(n),
      w = l.getNode().getImmediateChild(f).updateChild(p, r);
    f === ".priority"
      ? (u = d.updatePriority(l.getNode(), w))
      : (u = d.updateChild(l.getNode(), f, w, p, Bv, null));
  }
  const c = Lv(e, u, l.isFullyInitialized() || F(n), d.filtersNodes()),
    h = new Hd(i, c, s);
  return zv(t, c, n, i, h, a);
}
function mc(t, e, n, r, i, s, o) {
  const a = e.eventCache;
  let l, u;
  const d = new Hd(i, e, s);
  if (F(n))
    (u = t.filter.updateFullNode(e.eventCache.getNode(), r, o)),
      (l = Fi(e, u, !0, t.filter.filtersNodes()));
  else {
    const c = L(n);
    if (c === ".priority")
      (u = t.filter.updatePriority(e.eventCache.getNode(), r)),
        (l = Fi(e, u, a.isFullyInitialized(), a.isFiltered()));
    else {
      const h = q(n),
        f = a.getNode().getImmediateChild(c);
      let p;
      if (F(h)) p = r;
      else {
        const _ = d.getCompleteChild(c);
        _ != null
          ? Cv(h) === ".priority" && _.getChild(Tv(h)).isEmpty()
            ? (p = _)
            : (p = _.updateChild(h, r))
          : (p = A.EMPTY_NODE);
      }
      if (f.equals(p)) l = e;
      else {
        const _ = t.filter.updateChild(a.getNode(), c, p, h, d, o);
        l = Fi(e, _, a.isFullyInitialized(), t.filter.filtersNodes());
      }
    }
  }
  return l;
}
function Np(t, e) {
  return t.eventCache.isCompleteForChild(e);
}
function sk(t, e, n, r, i, s, o) {
  let a = e;
  return (
    r.foreach((l, u) => {
      const d = de(n, l);
      Np(e, L(d)) && (a = mc(t, a, d, u, i, s, o));
    }),
    r.foreach((l, u) => {
      const d = de(n, l);
      Np(e, L(d)) || (a = mc(t, a, d, u, i, s, o));
    }),
    a
  );
}
function Ap(t, e, n) {
  return (
    n.foreach((r, i) => {
      e = e.updateChild(r, i);
    }),
    e
  );
}
function gc(t, e, n, r, i, s, o, a) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let l = e,
    u;
  F(n) ? (u = r) : (u = new Q(null).setTree(n, r));
  const d = e.serverCache.getNode();
  return (
    u.children.inorderTraversal((c, h) => {
      if (d.hasChild(c)) {
        const f = e.serverCache.getNode().getImmediateChild(c),
          p = Ap(t, f, h);
        l = ia(t, l, new $(c), p, i, s, o, a);
      }
    }),
    u.children.inorderTraversal((c, h) => {
      const f = !e.serverCache.isCompleteForChild(c) && h.value === null;
      if (!d.hasChild(c) && !f) {
        const p = e.serverCache.getNode().getImmediateChild(c),
          _ = Ap(t, p, h);
        l = ia(t, l, new $(c), _, i, s, o, a);
      }
    }),
    l
  );
}
function ok(t, e, n, r, i, s, o) {
  if (ra(i, n) != null) return e;
  const a = e.serverCache.isFiltered(),
    l = e.serverCache;
  if (r.value != null) {
    if ((F(n) && l.isFullyInitialized()) || l.isCompleteForPath(n))
      return ia(t, e, n, l.getNode().getChild(n), i, s, a, o);
    if (F(n)) {
      let u = new Q(null);
      return (
        l.getNode().forEachChild(Ar, (d, c) => {
          u = u.set(new $(d), c);
        }),
        gc(t, e, n, u, i, s, a, o)
      );
    } else return e;
  } else {
    let u = new Q(null);
    return (
      r.foreach((d, c) => {
        const h = de(n, d);
        l.isCompleteForPath(h) && (u = u.set(d, l.getNode().getChild(h)));
      }),
      gc(t, e, n, u, i, s, a, o)
    );
  }
}
function ak(t, e, n, r, i) {
  const s = e.serverCache,
    o = Lv(e, s.getNode(), s.isFullyInitialized() || F(n), s.isFiltered());
  return zv(t, o, n, r, Bv, i);
}
function lk(t, e, n, r, i, s) {
  let o;
  if (ra(r, n) != null) return e;
  {
    const a = new Hd(r, e, i),
      l = e.eventCache.getNode();
    let u;
    if (F(n) || L(n) === ".priority") {
      let d;
      if (e.serverCache.isFullyInitialized()) d = na(r, Jn(e));
      else {
        const c = e.serverCache.getNode();
        C(c instanceof A, "serverChildren would be complete if leaf node"),
          (d = Bd(r, c));
      }
      (d = d), (u = t.filter.updateFullNode(l, d, s));
    } else {
      const d = L(n);
      let c = zd(r, d, e.serverCache);
      c == null &&
        e.serverCache.isCompleteForChild(d) &&
        (c = l.getImmediateChild(d)),
        c != null
          ? (u = t.filter.updateChild(l, d, c, q(n), a, s))
          : e.eventCache.getNode().hasChild(d)
          ? (u = t.filter.updateChild(l, d, A.EMPTY_NODE, q(n), a, s))
          : (u = l),
        u.isEmpty() &&
          e.serverCache.isFullyInitialized() &&
          ((o = na(r, Jn(e))),
          o.isLeafNode() && (u = t.filter.updateFullNode(u, o, s)));
    }
    return (
      (o = e.serverCache.isFullyInitialized() || ra(r, B()) != null),
      Fi(e, u, o, t.filter.filtersNodes())
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uk {
  constructor(e, n) {
    (this.query_ = e), (this.eventRegistrations_ = []);
    const r = this.query_._queryParams,
      i = new Fd(r.getIndex()),
      s = PT(r);
    this.processor_ = tk(s);
    const o = n.serverCache,
      a = n.eventCache,
      l = i.updateFullNode(A.EMPTY_NODE, o.getNode(), null),
      u = s.updateFullNode(A.EMPTY_NODE, a.getNode(), null),
      d = new En(l, o.isFullyInitialized(), i.filtersNodes()),
      c = new En(u, a.isFullyInitialized(), s.filtersNodes());
    (this.viewCache_ = Va(c, d)), (this.eventGenerator_ = new LT(this.query_));
  }
  get query() {
    return this.query_;
  }
}
function ck(t) {
  return t.viewCache_.serverCache.getNode();
}
function dk(t) {
  return ta(t.viewCache_);
}
function hk(t, e) {
  const n = Jn(t.viewCache_);
  return n &&
    (t.query._queryParams.loadsAllData() ||
      (!F(e) && !n.getImmediateChild(L(e)).isEmpty()))
    ? n.getChild(e)
    : null;
}
function xp(t) {
  return t.eventRegistrations_.length === 0;
}
function fk(t, e) {
  t.eventRegistrations_.push(e);
}
function bp(t, e, n) {
  const r = [];
  if (n) {
    C(e == null, "A cancel should cancel all event registrations.");
    const i = t.query._path;
    t.eventRegistrations_.forEach((s) => {
      const o = s.createCancelEvent(n, i);
      o && r.push(o);
    });
  }
  if (e) {
    let i = [];
    for (let s = 0; s < t.eventRegistrations_.length; ++s) {
      const o = t.eventRegistrations_[s];
      if (!o.matches(e)) i.push(o);
      else if (e.hasAnyCallback()) {
        i = i.concat(t.eventRegistrations_.slice(s + 1));
        break;
      }
    }
    t.eventRegistrations_ = i;
  } else t.eventRegistrations_ = [];
  return r;
}
function Dp(t, e, n, r) {
  e.type === ct.MERGE &&
    e.source.queryId !== null &&
    (C(
      Jn(t.viewCache_),
      "We should always have a full cache before handling merges"
    ),
    C(
      ta(t.viewCache_),
      "Missing event cache, even though we have a server cache"
    ));
  const i = t.viewCache_,
    s = rk(t.processor_, i, e, n, r);
  return (
    nk(t.processor_, s.viewCache),
    C(
      s.viewCache.serverCache.isFullyInitialized() ||
        !i.serverCache.isFullyInitialized(),
      "Once a server snap is complete, it should never go back"
    ),
    (t.viewCache_ = s.viewCache),
    Hv(t, s.changes, s.viewCache.eventCache.getNode(), null)
  );
}
function pk(t, e) {
  const n = t.viewCache_.eventCache,
    r = [];
  return (
    n.getNode().isLeafNode() ||
      n.getNode().forEachChild(se, (s, o) => {
        r.push(Wr(s, o));
      }),
    n.isFullyInitialized() && r.push(xv(n.getNode())),
    Hv(t, r, n.getNode(), e)
  );
}
function Hv(t, e, n, r) {
  const i = r ? [r] : t.eventRegistrations_;
  return MT(t.eventGenerator_, e, n, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sa;
class Wv {
  constructor() {
    this.views = new Map();
  }
}
function mk(t) {
  C(!sa, "__referenceConstructor has already been defined"), (sa = t);
}
function gk() {
  return C(sa, "Reference.ts has not been loaded"), sa;
}
function _k(t) {
  return t.views.size === 0;
}
function Wd(t, e, n, r) {
  const i = e.source.queryId;
  if (i !== null) {
    const s = t.views.get(i);
    return (
      C(s != null, "SyncTree gave us an op for an invalid query."),
      Dp(s, e, n, r)
    );
  } else {
    let s = [];
    for (const o of t.views.values()) s = s.concat(Dp(o, e, n, r));
    return s;
  }
}
function $v(t, e, n, r, i) {
  const s = e._queryIdentifier,
    o = t.views.get(s);
  if (!o) {
    let a = na(n, i ? r : null),
      l = !1;
    a
      ? (l = !0)
      : r instanceof A
      ? ((a = Bd(n, r)), (l = !1))
      : ((a = A.EMPTY_NODE), (l = !1));
    const u = Va(new En(a, l, !1), new En(r, i, !1));
    return new uk(e, u);
  }
  return o;
}
function vk(t, e, n, r, i, s) {
  const o = $v(t, e, r, i, s);
  return (
    t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o),
    fk(o, n),
    pk(o, n)
  );
}
function yk(t, e, n, r) {
  const i = e._queryIdentifier,
    s = [];
  let o = [];
  const a = wn(t);
  if (i === "default")
    for (const [l, u] of t.views.entries())
      (o = o.concat(bp(u, n, r))),
        xp(u) &&
          (t.views.delete(l),
          u.query._queryParams.loadsAllData() || s.push(u.query));
  else {
    const l = t.views.get(i);
    l &&
      ((o = o.concat(bp(l, n, r))),
      xp(l) &&
        (t.views.delete(i),
        l.query._queryParams.loadsAllData() || s.push(l.query)));
  }
  return (
    a && !wn(t) && s.push(new (gk())(e._repo, e._path)),
    { removed: s, events: o }
  );
}
function qv(t) {
  const e = [];
  for (const n of t.views.values())
    n.query._queryParams.loadsAllData() || e.push(n);
  return e;
}
function gn(t, e) {
  let n = null;
  for (const r of t.views.values()) n = n || hk(r, e);
  return n;
}
function Gv(t, e) {
  if (e._queryParams.loadsAllData()) return za(t);
  {
    const r = e._queryIdentifier;
    return t.views.get(r);
  }
}
function Kv(t, e) {
  return Gv(t, e) != null;
}
function wn(t) {
  return za(t) != null;
}
function za(t) {
  for (const e of t.views.values())
    if (e.query._queryParams.loadsAllData()) return e;
  return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oa;
function Ek(t) {
  C(!oa, "__referenceConstructor has already been defined"), (oa = t);
}
function wk() {
  return C(oa, "Reference.ts has not been loaded"), oa;
}
let Sk = 1;
class Lp {
  constructor(e) {
    (this.listenProvider_ = e),
      (this.syncPointTree_ = new Q(null)),
      (this.pendingWriteTree_ = JT()),
      (this.tagToQueryMap = new Map()),
      (this.queryToTagMap = new Map());
  }
}
function Qv(t, e, n, r, i) {
  return (
    VT(t.pendingWriteTree_, e, n, r, i), i ? ks(t, new Yn(Dv(), e, n)) : []
  );
}
function Fn(t, e, n = !1) {
  const r = BT(t.pendingWriteTree_, e);
  if (zT(t.pendingWriteTree_, e)) {
    let s = new Q(null);
    return (
      r.snap != null
        ? (s = s.set(B(), !0))
        : He(r.children, (o) => {
            s = s.set(new $(o), !0);
          }),
      ks(t, new ea(r.path, s, n))
    );
  } else return [];
}
function Ts(t, e, n) {
  return ks(t, new Yn(jd(), e, n));
}
function Ck(t, e, n) {
  const r = Q.fromObject(n);
  return ks(t, new ds(jd(), e, r));
}
function Ik(t, e) {
  return ks(t, new cs(jd(), e));
}
function Tk(t, e, n) {
  const r = qd(t, n);
  if (r) {
    const i = Gd(r),
      s = i.path,
      o = i.queryId,
      a = xe(s, e),
      l = new cs(Vd(o), a);
    return Kd(t, s, l);
  } else return [];
}
function aa(t, e, n, r, i = !1) {
  const s = e._path,
    o = t.syncPointTree_.get(s);
  let a = [];
  if (o && (e._queryIdentifier === "default" || Kv(o, e))) {
    const l = yk(o, e, n, r);
    _k(o) && (t.syncPointTree_ = t.syncPointTree_.remove(s));
    const u = l.removed;
    if (((a = l.events), !i)) {
      const d = u.findIndex((h) => h._queryParams.loadsAllData()) !== -1,
        c = t.syncPointTree_.findOnPath(s, (h, f) => wn(f));
      if (d && !c) {
        const h = t.syncPointTree_.subtree(s);
        if (!h.isEmpty()) {
          const f = Pk(h);
          for (let p = 0; p < f.length; ++p) {
            const _ = f[p],
              w = _.query,
              g = Zv(t, _);
            t.listenProvider_.startListening(
              ji(w),
              hs(t, w),
              g.hashFn,
              g.onComplete
            );
          }
        }
      }
      !c &&
        u.length > 0 &&
        !r &&
        (d
          ? t.listenProvider_.stopListening(ji(e), null)
          : u.forEach((h) => {
              const f = t.queryToTagMap.get(Ha(h));
              t.listenProvider_.stopListening(ji(h), f);
            }));
    }
    Ok(t, u);
  }
  return a;
}
function Yv(t, e, n, r) {
  const i = qd(t, r);
  if (i != null) {
    const s = Gd(i),
      o = s.path,
      a = s.queryId,
      l = xe(o, e),
      u = new Yn(Vd(a), l, n);
    return Kd(t, o, u);
  } else return [];
}
function kk(t, e, n, r) {
  const i = qd(t, r);
  if (i) {
    const s = Gd(i),
      o = s.path,
      a = s.queryId,
      l = xe(o, e),
      u = Q.fromObject(n),
      d = new ds(Vd(a), l, u);
    return Kd(t, o, d);
  } else return [];
}
function _c(t, e, n, r = !1) {
  const i = e._path;
  let s = null,
    o = !1;
  t.syncPointTree_.foreachOnPath(i, (h, f) => {
    const p = xe(h, i);
    (s = s || gn(f, p)), (o = o || wn(f));
  });
  let a = t.syncPointTree_.get(i);
  a
    ? ((o = o || wn(a)), (s = s || gn(a, B())))
    : ((a = new Wv()), (t.syncPointTree_ = t.syncPointTree_.set(i, a)));
  let l;
  s != null
    ? (l = !0)
    : ((l = !1),
      (s = A.EMPTY_NODE),
      t.syncPointTree_.subtree(i).foreachChild((f, p) => {
        const _ = gn(p, B());
        _ && (s = s.updateImmediateChild(f, _));
      }));
  const u = Kv(a, e);
  if (!u && !e._queryParams.loadsAllData()) {
    const h = Ha(e);
    C(!t.queryToTagMap.has(h), "View does not exist, but we have a tag");
    const f = Nk();
    t.queryToTagMap.set(h, f), t.tagToQueryMap.set(f, h);
  }
  const d = Ba(t.pendingWriteTree_, i);
  let c = vk(a, e, n, d, s, l);
  if (!u && !o && !r) {
    const h = Gv(a, e);
    c = c.concat(Ak(t, e, h));
  }
  return c;
}
function $d(t, e, n) {
  const i = t.pendingWriteTree_,
    s = t.syncPointTree_.findOnPath(e, (o, a) => {
      const l = xe(o, e),
        u = gn(a, l);
      if (u) return u;
    });
  return Uv(i, e, s, n, !0);
}
function Rk(t, e) {
  const n = e._path;
  let r = null;
  t.syncPointTree_.foreachOnPath(n, (u, d) => {
    const c = xe(u, n);
    r = r || gn(d, c);
  });
  let i = t.syncPointTree_.get(n);
  i
    ? (r = r || gn(i, B()))
    : ((i = new Wv()), (t.syncPointTree_ = t.syncPointTree_.set(n, i)));
  const s = r != null,
    o = s ? new En(r, !0, !1) : null,
    a = Ba(t.pendingWriteTree_, e._path),
    l = $v(i, e, a, s ? o.getNode() : A.EMPTY_NODE, s);
  return dk(l);
}
function ks(t, e) {
  return Jv(e, t.syncPointTree_, null, Ba(t.pendingWriteTree_, B()));
}
function Jv(t, e, n, r) {
  if (F(t.path)) return Xv(t, e, n, r);
  {
    const i = e.get(B());
    n == null && i != null && (n = gn(i, B()));
    let s = [];
    const o = L(t.path),
      a = t.operationForChild(o),
      l = e.children.get(o);
    if (l && a) {
      const u = n ? n.getImmediateChild(o) : null,
        d = jv(r, o);
      s = s.concat(Jv(a, l, u, d));
    }
    return i && (s = s.concat(Wd(i, t, r, n))), s;
  }
}
function Xv(t, e, n, r) {
  const i = e.get(B());
  n == null && i != null && (n = gn(i, B()));
  let s = [];
  return (
    e.children.inorderTraversal((o, a) => {
      const l = n ? n.getImmediateChild(o) : null,
        u = jv(r, o),
        d = t.operationForChild(o);
      d && (s = s.concat(Xv(d, a, l, u)));
    }),
    i && (s = s.concat(Wd(i, t, r, n))),
    s
  );
}
function Zv(t, e) {
  const n = e.query,
    r = hs(t, n);
  return {
    hashFn: () => (ck(e) || A.EMPTY_NODE).hash(),
    onComplete: (i) => {
      if (i === "ok") return r ? Tk(t, n._path, r) : Ik(t, n._path);
      {
        const s = RI(i, n);
        return aa(t, n, null, s);
      }
    },
  };
}
function hs(t, e) {
  const n = Ha(e);
  return t.queryToTagMap.get(n);
}
function Ha(t) {
  return t._path.toString() + "$" + t._queryIdentifier;
}
function qd(t, e) {
  return t.tagToQueryMap.get(e);
}
function Gd(t) {
  const e = t.indexOf("$");
  return (
    C(e !== -1 && e < t.length - 1, "Bad queryKey."),
    { queryId: t.substr(e + 1), path: new $(t.substr(0, e)) }
  );
}
function Kd(t, e, n) {
  const r = t.syncPointTree_.get(e);
  C(r, "Missing sync point for query tag that we're tracking");
  const i = Ba(t.pendingWriteTree_, e);
  return Wd(r, n, i, null);
}
function Pk(t) {
  return t.fold((e, n, r) => {
    if (n && wn(n)) return [za(n)];
    {
      let i = [];
      return (
        n && (i = qv(n)),
        He(r, (s, o) => {
          i = i.concat(o);
        }),
        i
      );
    }
  });
}
function ji(t) {
  return t._queryParams.loadsAllData() && !t._queryParams.isDefault()
    ? new (wk())(t._repo, t._path)
    : t;
}
function Ok(t, e) {
  for (let n = 0; n < e.length; ++n) {
    const r = e[n];
    if (!r._queryParams.loadsAllData()) {
      const i = Ha(r),
        s = t.queryToTagMap.get(i);
      t.queryToTagMap.delete(i), t.tagToQueryMap.delete(s);
    }
  }
}
function Nk() {
  return Sk++;
}
function Ak(t, e, n) {
  const r = e._path,
    i = hs(t, e),
    s = Zv(t, n),
    o = t.listenProvider_.startListening(ji(e), i, s.hashFn, s.onComplete),
    a = t.syncPointTree_.subtree(r);
  if (i) C(!wn(a.value), "If we're adding a query, it shouldn't be shadowed");
  else {
    const l = a.fold((u, d, c) => {
      if (!F(u) && d && wn(d)) return [za(d).query];
      {
        let h = [];
        return (
          d && (h = h.concat(qv(d).map((f) => f.query))),
          He(c, (f, p) => {
            h = h.concat(p);
          }),
          h
        );
      }
    });
    for (let u = 0; u < l.length; ++u) {
      const d = l[u];
      t.listenProvider_.stopListening(ji(d), hs(t, d));
    }
  }
  return o;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qd {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const n = this.node_.getImmediateChild(e);
    return new Qd(n);
  }
  node() {
    return this.node_;
  }
}
class Yd {
  constructor(e, n) {
    (this.syncTree_ = e), (this.path_ = n);
  }
  getImmediateChild(e) {
    const n = de(this.path_, e);
    return new Yd(this.syncTree_, n);
  }
  node() {
    return $d(this.syncTree_, this.path_);
  }
}
const xk = function (t) {
    return (
      (t = t || {}), (t.timestamp = t.timestamp || new Date().getTime()), t
    );
  },
  Mp = function (t, e, n) {
    if (!t || typeof t != "object") return t;
    if (
      (C(".sv" in t, "Unexpected leaf node or priority contents"),
      typeof t[".sv"] == "string")
    )
      return bk(t[".sv"], e, n);
    if (typeof t[".sv"] == "object") return Dk(t[".sv"], e);
    C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
  },
  bk = function (t, e, n) {
    switch (t) {
      case "timestamp":
        return n.timestamp;
      default:
        C(!1, "Unexpected server value: " + t);
    }
  },
  Dk = function (t, e, n) {
    t.hasOwnProperty("increment") ||
      C(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
    const r = t.increment;
    typeof r != "number" && C(!1, "Unexpected increment value: " + r);
    const i = e.node();
    if (
      (C(
        i !== null && typeof i < "u",
        "Expected ChildrenNode.EMPTY_NODE for nulls"
      ),
      !i.isLeafNode())
    )
      return r;
    const o = i.getValue();
    return typeof o != "number" ? r : o + r;
  },
  Lk = function (t, e, n, r) {
    return Jd(e, new Yd(n, t), r);
  },
  ey = function (t, e, n) {
    return Jd(t, new Qd(e), n);
  };
function Jd(t, e, n) {
  const r = t.getPriority().val(),
    i = Mp(r, e.getImmediateChild(".priority"), n);
  let s;
  if (t.isLeafNode()) {
    const o = t,
      a = Mp(o.getValue(), e, n);
    return a !== o.getValue() || i !== o.getPriority().val()
      ? new pe(a, _e(i))
      : t;
  } else {
    const o = t;
    return (
      (s = o),
      i !== o.getPriority().val() && (s = s.updatePriority(new pe(i))),
      o.forEachChild(se, (a, l) => {
        const u = Jd(l, e.getImmediateChild(a), n);
        u !== l && (s = s.updateImmediateChild(a, u));
      }),
      s
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xd {
  constructor(e = "", n = null, r = { children: {}, childCount: 0 }) {
    (this.name = e), (this.parent = n), (this.node = r);
  }
}
function Zd(t, e) {
  let n = e instanceof $ ? e : new $(e),
    r = t,
    i = L(n);
  for (; i !== null; ) {
    const s = Br(r.node.children, i) || { children: {}, childCount: 0 };
    (r = new Xd(i, r, s)), (n = q(n)), (i = L(n));
  }
  return r;
}
function ri(t) {
  return t.node.value;
}
function ty(t, e) {
  (t.node.value = e), vc(t);
}
function ny(t) {
  return t.node.childCount > 0;
}
function Mk(t) {
  return ri(t) === void 0 && !ny(t);
}
function Wa(t, e) {
  He(t.node.children, (n, r) => {
    e(new Xd(n, t, r));
  });
}
function ry(t, e, n, r) {
  n && !r && e(t),
    Wa(t, (i) => {
      ry(i, e, !0, r);
    }),
    n && r && e(t);
}
function Fk(t, e, n) {
  let r = n ? t : t.parent;
  for (; r !== null; ) {
    if (e(r)) return !0;
    r = r.parent;
  }
  return !1;
}
function Rs(t) {
  return new $(t.parent === null ? t.name : Rs(t.parent) + "/" + t.name);
}
function vc(t) {
  t.parent !== null && Uk(t.parent, t.name, t);
}
function Uk(t, e, n) {
  const r = Mk(n),
    i = Ht(t.node.children, e);
  r && i
    ? (delete t.node.children[e], t.node.childCount--, vc(t))
    : !r && !i && ((t.node.children[e] = n.node), t.node.childCount++, vc(t));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jk = /[\[\].#$\/\u0000-\u001F\u007F]/,
  Vk = /[\[\].#$\u0000-\u001F\u007F]/,
  Zl = 10 * 1024 * 1024,
  iy = function (t) {
    return typeof t == "string" && t.length !== 0 && !jk.test(t);
  },
  sy = function (t) {
    return typeof t == "string" && t.length !== 0 && !Vk.test(t);
  },
  Bk = function (t) {
    return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), sy(t);
  },
  oy = function (t, e, n, r) {
    (r && e === void 0) || eh(kd(t, "value"), e, n);
  },
  eh = function (t, e, n) {
    const r = n instanceof $ ? new oT(n, t) : n;
    if (e === void 0) throw new Error(t + "contains undefined " + xn(r));
    if (typeof e == "function")
      throw new Error(
        t + "contains a function " + xn(r) + " with contents = " + e.toString()
      );
    if (nv(e)) throw new Error(t + "contains " + e.toString() + " " + xn(r));
    if (typeof e == "string" && e.length > Zl / 3 && Ua(e) > Zl)
      throw new Error(
        t +
          "contains a string greater than " +
          Zl +
          " utf8 bytes " +
          xn(r) +
          " ('" +
          e.substring(0, 50) +
          "...')"
      );
    if (e && typeof e == "object") {
      let i = !1,
        s = !1;
      if (
        (He(e, (o, a) => {
          if (o === ".value") i = !0;
          else if (o !== ".priority" && o !== ".sv" && ((s = !0), !iy(o)))
            throw new Error(
              t +
                " contains an invalid key (" +
                o +
                ") " +
                xn(r) +
                `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`
            );
          aT(r, o), eh(t, a, r), lT(r);
        }),
        i && s)
      )
        throw new Error(
          t +
            ' contains ".value" child ' +
            xn(r) +
            " in addition to actual children."
        );
    }
  },
  ay = function (t, e, n, r) {
    if (!(r && n === void 0) && !sy(n))
      throw new Error(
        kd(t, e) +
          'was an invalid path = "' +
          n +
          `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`
      );
  },
  zk = function (t, e, n, r) {
    n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), ay(t, e, n, r);
  },
  th = function (t, e) {
    if (L(e) === ".info")
      throw new Error(t + " failed = Can't modify data under /.info/");
  },
  Hk = function (t, e) {
    const n = e.path.toString();
    if (
      typeof e.repoInfo.host != "string" ||
      e.repoInfo.host.length === 0 ||
      (!iy(e.repoInfo.namespace) &&
        e.repoInfo.host.split(":")[0] !== "localhost") ||
      (n.length !== 0 && !Bk(n))
    )
      throw new Error(
        kd(t, "url") +
          `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`
      );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wk {
  constructor() {
    (this.eventLists_ = []), (this.recursionDepth_ = 0);
  }
}
function nh(t, e) {
  let n = null;
  for (let r = 0; r < e.length; r++) {
    const i = e[r],
      s = i.getPath();
    n !== null && !Dd(s, n.path) && (t.eventLists_.push(n), (n = null)),
      n === null && (n = { events: [], path: s }),
      n.events.push(i);
  }
  n && t.eventLists_.push(n);
}
function ly(t, e, n) {
  nh(t, n), uy(t, (r) => Dd(r, e));
}
function It(t, e, n) {
  nh(t, n), uy(t, (r) => ut(r, e) || ut(e, r));
}
function uy(t, e) {
  t.recursionDepth_++;
  let n = !0;
  for (let r = 0; r < t.eventLists_.length; r++) {
    const i = t.eventLists_[r];
    if (i) {
      const s = i.path;
      e(s) ? ($k(t.eventLists_[r]), (t.eventLists_[r] = null)) : (n = !1);
    }
  }
  n && (t.eventLists_ = []), t.recursionDepth_--;
}
function $k(t) {
  for (let e = 0; e < t.events.length; e++) {
    const n = t.events[e];
    if (n !== null) {
      t.events[e] = null;
      const r = n.getEventRunner();
      Vn && Pe("event: " + n.toString()), ni(r);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qk = "repo_interrupt",
  Gk = 25;
class Kk {
  constructor(e, n, r, i) {
    (this.repoInfo_ = e),
      (this.forceRestClient_ = n),
      (this.authTokenProvider_ = r),
      (this.appCheckProvider_ = i),
      (this.dataUpdateCount = 0),
      (this.statsListener_ = null),
      (this.eventQueue_ = new Wk()),
      (this.nextWriteId_ = 1),
      (this.interceptServerDataCallback_ = null),
      (this.onDisconnect_ = Zo()),
      (this.transactionQueueTree_ = new Xd()),
      (this.persistentConnection_ = null),
      (this.key = this.repoInfo_.toURLString());
  }
  toString() {
    return (
      (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
    );
  }
}
function Qk(t, e, n) {
  if (((t.stats_ = xd(t.repoInfo_)), t.forceRestClient_ || AI()))
    (t.server_ = new Xo(
      t.repoInfo_,
      (r, i, s, o) => {
        Fp(t, r, i, s, o);
      },
      t.authTokenProvider_,
      t.appCheckProvider_
    )),
      setTimeout(() => Up(t, !0), 0);
  else {
    if (typeof n < "u" && n !== null) {
      if (typeof n != "object")
        throw new Error(
          "Only objects are supported for option databaseAuthVariableOverride"
        );
      try {
        ce(n);
      } catch (r) {
        throw new Error("Invalid authOverride provided: " + r);
      }
    }
    (t.persistentConnection_ = new Lt(
      t.repoInfo_,
      e,
      (r, i, s, o) => {
        Fp(t, r, i, s, o);
      },
      (r) => {
        Up(t, r);
      },
      (r) => {
        Yk(t, r);
      },
      t.authTokenProvider_,
      t.appCheckProvider_,
      n
    )),
      (t.server_ = t.persistentConnection_);
  }
  t.authTokenProvider_.addTokenChangeListener((r) => {
    t.server_.refreshAuthToken(r);
  }),
    t.appCheckProvider_.addTokenChangeListener((r) => {
      t.server_.refreshAppCheckToken(r.token);
    }),
    (t.statsReporter_ = MI(t.repoInfo_, () => new DT(t.stats_, t.server_))),
    (t.infoData_ = new OT()),
    (t.infoSyncTree_ = new Lp({
      startListening: (r, i, s, o) => {
        let a = [];
        const l = t.infoData_.getNode(r._path);
        return (
          l.isEmpty() ||
            ((a = Ts(t.infoSyncTree_, r._path, l)),
            setTimeout(() => {
              o("ok");
            }, 0)),
          a
        );
      },
      stopListening: () => {},
    })),
    ih(t, "connected", !1),
    (t.serverSyncTree_ = new Lp({
      startListening: (r, i, s, o) => (
        t.server_.listen(r, s, i, (a, l) => {
          const u = o(a, l);
          It(t.eventQueue_, r._path, u);
        }),
        []
      ),
      stopListening: (r, i) => {
        t.server_.unlisten(r, i);
      },
    }));
}
function cy(t) {
  const n = t.infoData_.getNode(new $(".info/serverTimeOffset")).val() || 0;
  return new Date().getTime() + n;
}
function rh(t) {
  return xk({ timestamp: cy(t) });
}
function Fp(t, e, n, r, i) {
  t.dataUpdateCount++;
  const s = new $(e);
  n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n;
  let o = [];
  if (i)
    if (r) {
      const l = qo(n, (u) => _e(u));
      o = kk(t.serverSyncTree_, s, l, i);
    } else {
      const l = _e(n);
      o = Yv(t.serverSyncTree_, s, l, i);
    }
  else if (r) {
    const l = qo(n, (u) => _e(u));
    o = Ck(t.serverSyncTree_, s, l);
  } else {
    const l = _e(n);
    o = Ts(t.serverSyncTree_, s, l);
  }
  let a = s;
  o.length > 0 && (a = qa(t, s)), It(t.eventQueue_, a, o);
}
function Up(t, e) {
  ih(t, "connected", e), e === !1 && Zk(t);
}
function Yk(t, e) {
  He(e, (n, r) => {
    ih(t, n, r);
  });
}
function ih(t, e, n) {
  const r = new $("/.info/" + e),
    i = _e(n);
  t.infoData_.updateSnapshot(r, i);
  const s = Ts(t.infoSyncTree_, r, i);
  It(t.eventQueue_, r, s);
}
function dy(t) {
  return t.nextWriteId_++;
}
function Jk(t, e, n) {
  const r = Rk(t.serverSyncTree_, e);
  return r != null
    ? Promise.resolve(r)
    : t.server_.get(e).then(
        (i) => {
          const s = _e(i).withIndex(e._queryParams.getIndex());
          _c(t.serverSyncTree_, e, n, !0);
          let o;
          if (e._queryParams.loadsAllData())
            o = Ts(t.serverSyncTree_, e._path, s);
          else {
            const a = hs(t.serverSyncTree_, e);
            o = Yv(t.serverSyncTree_, e._path, s, a);
          }
          return (
            It(t.eventQueue_, e._path, o),
            aa(t.serverSyncTree_, e, n, null, !0),
            s
          );
        },
        (i) => (
          $a(t, "get for query " + ce(e) + " failed: " + i),
          Promise.reject(new Error(i))
        )
      );
}
function Xk(t, e, n, r, i) {
  $a(t, "set", { path: e.toString(), value: n, priority: r });
  const s = rh(t),
    o = _e(n, r),
    a = $d(t.serverSyncTree_, e),
    l = ey(o, a, s),
    u = dy(t),
    d = Qv(t.serverSyncTree_, e, l, u, !0);
  nh(t.eventQueue_, d),
    t.server_.put(e.toString(), o.val(!0), (h, f) => {
      const p = h === "ok";
      p || ze("set at " + e + " failed: " + h);
      const _ = Fn(t.serverSyncTree_, u, !p);
      It(t.eventQueue_, e, _), n1(t, i, h, f);
    });
  const c = gy(t, e);
  qa(t, c), It(t.eventQueue_, c, []);
}
function Zk(t) {
  $a(t, "onDisconnectEvents");
  const e = rh(t),
    n = Zo();
  hc(t.onDisconnect_, B(), (i, s) => {
    const o = Lk(i, s, t.serverSyncTree_, e);
    bv(n, i, o);
  });
  let r = [];
  hc(n, B(), (i, s) => {
    r = r.concat(Ts(t.serverSyncTree_, i, s));
    const o = gy(t, i);
    qa(t, o);
  }),
    (t.onDisconnect_ = Zo()),
    It(t.eventQueue_, B(), r);
}
function e1(t, e, n) {
  let r;
  L(e._path) === ".info"
    ? (r = _c(t.infoSyncTree_, e, n))
    : (r = _c(t.serverSyncTree_, e, n)),
    ly(t.eventQueue_, e._path, r);
}
function jp(t, e, n) {
  let r;
  L(e._path) === ".info"
    ? (r = aa(t.infoSyncTree_, e, n))
    : (r = aa(t.serverSyncTree_, e, n)),
    ly(t.eventQueue_, e._path, r);
}
function t1(t) {
  t.persistentConnection_ && t.persistentConnection_.interrupt(qk);
}
function $a(t, ...e) {
  let n = "";
  t.persistentConnection_ && (n = t.persistentConnection_.id + ":"),
    Pe(n, ...e);
}
function n1(t, e, n, r) {
  e &&
    ni(() => {
      if (n === "ok") e(null);
      else {
        const i = (n || "error").toUpperCase();
        let s = i;
        r && (s += ": " + r);
        const o = new Error(s);
        (o.code = i), e(o);
      }
    });
}
function hy(t, e, n) {
  return $d(t.serverSyncTree_, e, n) || A.EMPTY_NODE;
}
function sh(t, e = t.transactionQueueTree_) {
  if ((e || Ga(t, e), ri(e))) {
    const n = py(t, e);
    C(n.length > 0, "Sending zero length transaction queue"),
      n.every((i) => i.status === 0) && r1(t, Rs(e), n);
  } else
    ny(e) &&
      Wa(e, (n) => {
        sh(t, n);
      });
}
function r1(t, e, n) {
  const r = n.map((u) => u.currentWriteId),
    i = hy(t, e, r);
  let s = i;
  const o = i.hash();
  for (let u = 0; u < n.length; u++) {
    const d = n[u];
    C(
      d.status === 0,
      "tryToSendTransactionQueue_: items in queue should all be run."
    ),
      (d.status = 1),
      d.retryCount++;
    const c = xe(e, d.path);
    s = s.updateChild(c, d.currentOutputSnapshotRaw);
  }
  const a = s.val(!0),
    l = e;
  t.server_.put(
    l.toString(),
    a,
    (u) => {
      $a(t, "transaction put response", { path: l.toString(), status: u });
      let d = [];
      if (u === "ok") {
        const c = [];
        for (let h = 0; h < n.length; h++)
          (n[h].status = 2),
            (d = d.concat(Fn(t.serverSyncTree_, n[h].currentWriteId))),
            n[h].onComplete &&
              c.push(() =>
                n[h].onComplete(null, !0, n[h].currentOutputSnapshotResolved)
              ),
            n[h].unwatcher();
        Ga(t, Zd(t.transactionQueueTree_, e)),
          sh(t, t.transactionQueueTree_),
          It(t.eventQueue_, e, d);
        for (let h = 0; h < c.length; h++) ni(c[h]);
      } else {
        if (u === "datastale")
          for (let c = 0; c < n.length; c++)
            n[c].status === 3 ? (n[c].status = 4) : (n[c].status = 0);
        else {
          ze("transaction at " + l.toString() + " failed: " + u);
          for (let c = 0; c < n.length; c++)
            (n[c].status = 4), (n[c].abortReason = u);
        }
        qa(t, e);
      }
    },
    o
  );
}
function qa(t, e) {
  const n = fy(t, e),
    r = Rs(n),
    i = py(t, n);
  return i1(t, i, r), r;
}
function i1(t, e, n) {
  if (e.length === 0) return;
  const r = [];
  let i = [];
  const o = e.filter((a) => a.status === 0).map((a) => a.currentWriteId);
  for (let a = 0; a < e.length; a++) {
    const l = e[a],
      u = xe(n, l.path);
    let d = !1,
      c;
    if (
      (C(
        u !== null,
        "rerunTransactionsUnderNode_: relativePath should not be null."
      ),
      l.status === 4)
    )
      (d = !0),
        (c = l.abortReason),
        (i = i.concat(Fn(t.serverSyncTree_, l.currentWriteId, !0)));
    else if (l.status === 0)
      if (l.retryCount >= Gk)
        (d = !0),
          (c = "maxretry"),
          (i = i.concat(Fn(t.serverSyncTree_, l.currentWriteId, !0)));
      else {
        const h = hy(t, l.path, o);
        l.currentInputSnapshot = h;
        const f = e[a].update(h.val());
        if (f !== void 0) {
          eh("transaction failed: Data returned ", f, l.path);
          let p = _e(f);
          (typeof f == "object" && f != null && Ht(f, ".priority")) ||
            (p = p.updatePriority(h.getPriority()));
          const w = l.currentWriteId,
            g = rh(t),
            m = ey(p, h, g);
          (l.currentOutputSnapshotRaw = p),
            (l.currentOutputSnapshotResolved = m),
            (l.currentWriteId = dy(t)),
            o.splice(o.indexOf(w), 1),
            (i = i.concat(
              Qv(t.serverSyncTree_, l.path, m, l.currentWriteId, l.applyLocally)
            )),
            (i = i.concat(Fn(t.serverSyncTree_, w, !0)));
        } else
          (d = !0),
            (c = "nodata"),
            (i = i.concat(Fn(t.serverSyncTree_, l.currentWriteId, !0)));
      }
    It(t.eventQueue_, n, i),
      (i = []),
      d &&
        ((e[a].status = 2),
        (function (h) {
          setTimeout(h, Math.floor(0));
        })(e[a].unwatcher),
        e[a].onComplete &&
          (c === "nodata"
            ? r.push(() => e[a].onComplete(null, !1, e[a].currentInputSnapshot))
            : r.push(() => e[a].onComplete(new Error(c), !1, null))));
  }
  Ga(t, t.transactionQueueTree_);
  for (let a = 0; a < r.length; a++) ni(r[a]);
  sh(t, t.transactionQueueTree_);
}
function fy(t, e) {
  let n,
    r = t.transactionQueueTree_;
  for (n = L(e); n !== null && ri(r) === void 0; )
    (r = Zd(r, n)), (e = q(e)), (n = L(e));
  return r;
}
function py(t, e) {
  const n = [];
  return my(t, e, n), n.sort((r, i) => r.order - i.order), n;
}
function my(t, e, n) {
  const r = ri(e);
  if (r) for (let i = 0; i < r.length; i++) n.push(r[i]);
  Wa(e, (i) => {
    my(t, i, n);
  });
}
function Ga(t, e) {
  const n = ri(e);
  if (n) {
    let r = 0;
    for (let i = 0; i < n.length; i++)
      n[i].status !== 2 && ((n[r] = n[i]), r++);
    (n.length = r), ty(e, n.length > 0 ? n : void 0);
  }
  Wa(e, (r) => {
    Ga(t, r);
  });
}
function gy(t, e) {
  const n = Rs(fy(t, e)),
    r = Zd(t.transactionQueueTree_, e);
  return (
    Fk(r, (i) => {
      eu(t, i);
    }),
    eu(t, r),
    ry(r, (i) => {
      eu(t, i);
    }),
    n
  );
}
function eu(t, e) {
  const n = ri(e);
  if (n) {
    const r = [];
    let i = [],
      s = -1;
    for (let o = 0; o < n.length; o++)
      n[o].status === 3 ||
        (n[o].status === 1
          ? (C(s === o - 1, "All SENT items should be at beginning of queue."),
            (s = o),
            (n[o].status = 3),
            (n[o].abortReason = "set"))
          : (C(n[o].status === 0, "Unexpected transaction status in abort"),
            n[o].unwatcher(),
            (i = i.concat(Fn(t.serverSyncTree_, n[o].currentWriteId, !0))),
            n[o].onComplete &&
              r.push(n[o].onComplete.bind(null, new Error("set"), !1, null))));
    s === -1 ? ty(e, void 0) : (n.length = s + 1), It(t.eventQueue_, Rs(e), i);
    for (let o = 0; o < r.length; o++) ni(r[o]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function s1(t) {
  let e = "";
  const n = t.split("/");
  for (let r = 0; r < n.length; r++)
    if (n[r].length > 0) {
      let i = n[r];
      try {
        i = decodeURIComponent(i.replace(/\+/g, " "));
      } catch {}
      e += "/" + i;
    }
  return e;
}
function o1(t) {
  const e = {};
  t.charAt(0) === "?" && (t = t.substring(1));
  for (const n of t.split("&")) {
    if (n.length === 0) continue;
    const r = n.split("=");
    r.length === 2
      ? (e[decodeURIComponent(r[0])] = decodeURIComponent(r[1]))
      : ze(`Invalid query segment '${n}' in query '${t}'`);
  }
  return e;
}
const Vp = function (t, e) {
    const n = a1(t),
      r = n.namespace;
    n.domain === "firebase.com" &&
      Vt(
        n.host +
          " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
      ),
      (!r || r === "undefined") &&
        n.domain !== "localhost" &&
        Vt(
          "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
        ),
      n.secure || SI();
    const i = n.scheme === "ws" || n.scheme === "wss";
    return {
      repoInfo: new pv(n.host, n.secure, r, i, e, "", r !== n.subdomain),
      path: new $(n.pathString),
    };
  },
  a1 = function (t) {
    let e = "",
      n = "",
      r = "",
      i = "",
      s = "",
      o = !0,
      a = "https",
      l = 443;
    if (typeof t == "string") {
      let u = t.indexOf("//");
      u >= 0 && ((a = t.substring(0, u - 1)), (t = t.substring(u + 2)));
      let d = t.indexOf("/");
      d === -1 && (d = t.length);
      let c = t.indexOf("?");
      c === -1 && (c = t.length),
        (e = t.substring(0, Math.min(d, c))),
        d < c && (i = s1(t.substring(d, c)));
      const h = o1(t.substring(Math.min(t.length, c)));
      (u = e.indexOf(":")),
        u >= 0
          ? ((o = a === "https" || a === "wss"),
            (l = parseInt(e.substring(u + 1), 10)))
          : (u = e.length);
      const f = e.slice(0, u);
      if (f.toLowerCase() === "localhost") n = "localhost";
      else if (f.split(".").length <= 2) n = f;
      else {
        const p = e.indexOf(".");
        (r = e.substring(0, p).toLowerCase()),
          (n = e.substring(p + 1)),
          (s = r);
      }
      "ns" in h && (s = h.ns);
    }
    return {
      host: e,
      port: l,
      domain: n,
      subdomain: r,
      secure: o,
      scheme: a,
      pathString: i,
      namespace: s,
    };
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Bp =
    "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
  l1 = (function () {
    let t = 0;
    const e = [];
    return function (n) {
      const r = n === t;
      t = n;
      let i;
      const s = new Array(8);
      for (i = 7; i >= 0; i--)
        (s[i] = Bp.charAt(n % 64)), (n = Math.floor(n / 64));
      C(n === 0, "Cannot push at time == 0");
      let o = s.join("");
      if (r) {
        for (i = 11; i >= 0 && e[i] === 63; i--) e[i] = 0;
        e[i]++;
      } else for (i = 0; i < 12; i++) e[i] = Math.floor(Math.random() * 64);
      for (i = 0; i < 12; i++) o += Bp.charAt(e[i]);
      return C(o.length === 20, "nextPushId: Length should be 20."), o;
    };
  })();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _y {
  constructor(e, n, r, i) {
    (this.eventType = e),
      (this.eventRegistration = n),
      (this.snapshot = r),
      (this.prevName = i);
  }
  getPath() {
    const e = this.snapshot.ref;
    return this.eventType === "value" ? e._path : e.parent._path;
  }
  getEventType() {
    return this.eventType;
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return (
      this.getPath().toString() +
      ":" +
      this.eventType +
      ":" +
      ce(this.snapshot.exportVal())
    );
  }
}
class vy {
  constructor(e, n, r) {
    (this.eventRegistration = e), (this.error = n), (this.path = r);
  }
  getPath() {
    return this.path;
  }
  getEventType() {
    return "cancel";
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return this.path.toString() + ":cancel";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yy {
  constructor(e, n) {
    (this.snapshotCallback = e), (this.cancelCallback = n);
  }
  onValue(e, n) {
    this.snapshotCallback.call(null, e, n);
  }
  onCancel(e) {
    return (
      C(
        this.hasCancelCallback,
        "Raising a cancel event on a listener with no cancel callback"
      ),
      this.cancelCallback.call(null, e)
    );
  }
  get hasCancelCallback() {
    return !!this.cancelCallback;
  }
  matches(e) {
    return (
      this.snapshotCallback === e.snapshotCallback ||
      (this.snapshotCallback.userCallback !== void 0 &&
        this.snapshotCallback.userCallback ===
          e.snapshotCallback.userCallback &&
        this.snapshotCallback.context === e.snapshotCallback.context)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oh {
  constructor(e, n, r, i) {
    (this._repo = e),
      (this._path = n),
      (this._queryParams = r),
      (this._orderByCalled = i);
  }
  get key() {
    return F(this._path) ? null : Cv(this._path);
  }
  get ref() {
    return new kt(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = Ip(this._queryParams),
      n = Nd(e);
    return n === "{}" ? "default" : n;
  }
  get _queryObject() {
    return Ip(this._queryParams);
  }
  isEqual(e) {
    if (((e = Ce(e)), !(e instanceof oh))) return !1;
    const n = this._repo === e._repo,
      r = Dd(this._path, e._path),
      i = this._queryIdentifier === e._queryIdentifier;
    return n && r && i;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + sT(this._path);
  }
}
class kt extends oh {
  constructor(e, n) {
    super(e, n, new Ud(), !1);
  }
  get parent() {
    const e = Tv(this._path);
    return e === null ? null : new kt(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; ) e = e.parent;
    return e;
  }
}
class qr {
  constructor(e, n, r) {
    (this._node = e), (this.ref = n), (this._index = r);
  }
  get priority() {
    return this._node.getPriority().val();
  }
  get key() {
    return this.ref.key;
  }
  get size() {
    return this._node.numChildren();
  }
  child(e) {
    const n = new $(e),
      r = Gr(this.ref, e);
    return new qr(this._node.getChild(n), r, se);
  }
  exists() {
    return !this._node.isEmpty();
  }
  exportVal() {
    return this._node.val(!0);
  }
  forEach(e) {
    return this._node.isLeafNode()
      ? !1
      : !!this._node.forEachChild(this._index, (r, i) =>
          e(new qr(i, Gr(this.ref, r), se))
        );
  }
  hasChild(e) {
    const n = new $(e);
    return !this._node.getChild(n).isEmpty();
  }
  hasChildren() {
    return this._node.isLeafNode() ? !1 : !this._node.isEmpty();
  }
  toJSON() {
    return this.exportVal();
  }
  val() {
    return this._node.val();
  }
}
function la(t, e) {
  return (
    (t = Ce(t)),
    t._checkNotDeleted("ref"),
    e !== void 0 ? Gr(t._root, e) : t._root
  );
}
function Gr(t, e) {
  return (
    (t = Ce(t)),
    L(t._path) === null
      ? zk("child", "path", e, !1)
      : ay("child", "path", e, !1),
    new kt(t._repo, de(t._path, e))
  );
}
function u1(t, e) {
  (t = Ce(t)), th("push", t._path), oy("push", e, t._path, !0);
  const n = cy(t._repo),
    r = l1(n),
    i = Gr(t, r),
    s = Gr(t, r);
  let o;
  return (
    e != null ? (o = wy(s, e).then(() => s)) : (o = Promise.resolve(s)),
    (i.then = o.then.bind(o)),
    (i.catch = o.then.bind(o, void 0)),
    i
  );
}
function Ey(t) {
  return th("remove", t._path), wy(t, null);
}
function wy(t, e) {
  (t = Ce(t)), th("set", t._path), oy("set", e, t._path, !1);
  const n = new Fa();
  return (
    Xk(
      t._repo,
      t._path,
      e,
      null,
      n.wrapCallback(() => {})
    ),
    n.promise
  );
}
function zp(t) {
  t = Ce(t);
  const e = new yy(() => {}),
    n = new Ka(e);
  return Jk(t._repo, t, n).then(
    (r) => new qr(r, new kt(t._repo, t._path), t._queryParams.getIndex())
  );
}
class Ka {
  constructor(e) {
    this.callbackContext = e;
  }
  respondsTo(e) {
    return e === "value";
  }
  createEvent(e, n) {
    const r = n._queryParams.getIndex();
    return new _y(
      "value",
      this,
      new qr(e.snapshotNode, new kt(n._repo, n._path), r)
    );
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel"
      ? () => this.callbackContext.onCancel(e.error)
      : () => this.callbackContext.onValue(e.snapshot, null);
  }
  createCancelEvent(e, n) {
    return this.callbackContext.hasCancelCallback ? new vy(this, e, n) : null;
  }
  matches(e) {
    return e instanceof Ka
      ? !e.callbackContext || !this.callbackContext
        ? !0
        : e.callbackContext.matches(this.callbackContext)
      : !1;
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
class ah {
  constructor(e, n) {
    (this.eventType = e), (this.callbackContext = n);
  }
  respondsTo(e) {
    let n = e === "children_added" ? "child_added" : e;
    return (
      (n = n === "children_removed" ? "child_removed" : n), this.eventType === n
    );
  }
  createCancelEvent(e, n) {
    return this.callbackContext.hasCancelCallback ? new vy(this, e, n) : null;
  }
  createEvent(e, n) {
    C(e.childName != null, "Child events should have a childName.");
    const r = Gr(new kt(n._repo, n._path), e.childName),
      i = n._queryParams.getIndex();
    return new _y(e.type, this, new qr(e.snapshotNode, r, i), e.prevName);
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel"
      ? () => this.callbackContext.onCancel(e.error)
      : () => this.callbackContext.onValue(e.snapshot, e.prevName);
  }
  matches(e) {
    return e instanceof ah
      ? this.eventType === e.eventType &&
          (!this.callbackContext ||
            !e.callbackContext ||
            this.callbackContext.matches(e.callbackContext))
      : !1;
  }
  hasAnyCallback() {
    return !!this.callbackContext;
  }
}
function c1(t, e, n, r, i) {
  let s;
  if (
    (typeof r == "object" && ((s = void 0), (i = r)),
    typeof r == "function" && (s = r),
    i && i.onlyOnce)
  ) {
    const l = n,
      u = (d, c) => {
        jp(t._repo, t, a), l(d, c);
      };
    (u.userCallback = n.userCallback), (u.context = n.context), (n = u);
  }
  const o = new yy(n, s || void 0),
    a = e === "value" ? new Ka(o) : new ah(e, o);
  return e1(t._repo, t, a), () => jp(t._repo, t, a);
}
function Hp(t, e, n, r) {
  return c1(t, "value", e, n, r);
}
mk(kt);
Ek(kt);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const d1 = "FIREBASE_DATABASE_EMULATOR_HOST",
  yc = {};
let h1 = !1;
function f1(t, e, n, r) {
  (t.repoInfo_ = new pv(
    `${e}:${n}`,
    !1,
    t.repoInfo_.namespace,
    t.repoInfo_.webSocketOnly,
    t.repoInfo_.nodeAdmin,
    t.repoInfo_.persistenceKey,
    t.repoInfo_.includeNamespaceInQueryParams,
    !0
  )),
    r && (t.authTokenProvider_ = r);
}
function p1(t, e, n, r, i) {
  let s = r || t.options.databaseURL;
  s === void 0 &&
    (t.options.projectId ||
      Vt(
        "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
      ),
    Pe("Using default host for project ", t.options.projectId),
    (s = `${t.options.projectId}-default-rtdb.firebaseio.com`));
  let o = Vp(s, i),
    a = o.repoInfo,
    l,
    u;
  typeof process < "u" && process.env && (u = process.env[d1]),
    u
      ? ((l = !0),
        (s = `http://${u}?ns=${a.namespace}`),
        (o = Vp(s, i)),
        (a = o.repoInfo))
      : (l = !o.repoInfo.secure);
  const d = i && l ? new Nr(Nr.OWNER) : new bI(t.name, t.options, e);
  Hk("Invalid Firebase Database URL", o),
    F(o.path) ||
      Vt(
        "Database URL must point to the root of a Firebase Database (not including a child path)."
      );
  const c = g1(a, t, d, new xI(t.name, n));
  return new _1(c, t);
}
function m1(t, e) {
  const n = yc[e];
  (!n || n[t.key] !== t) &&
    Vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),
    t1(t),
    delete n[t.key];
}
function g1(t, e, n, r) {
  let i = yc[e.name];
  i || ((i = {}), (yc[e.name] = i));
  let s = i[t.toURLString()];
  return (
    s &&
      Vt(
        "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
      ),
    (s = new Kk(t, h1, n, r)),
    (i[t.toURLString()] = s),
    s
  );
}
class _1 {
  constructor(e, n) {
    (this._repoInternal = e),
      (this.app = n),
      (this.type = "database"),
      (this._instanceStarted = !1);
  }
  get _repo() {
    return (
      this._instanceStarted ||
        (Qk(
          this._repoInternal,
          this.app.options.appId,
          this.app.options.databaseAuthVariableOverride
        ),
        (this._instanceStarted = !0)),
      this._repoInternal
    );
  }
  get _root() {
    return (
      this._rootInternal || (this._rootInternal = new kt(this._repo, B())),
      this._rootInternal
    );
  }
  _delete() {
    return (
      this._rootInternal !== null &&
        (m1(this._repo, this.app.name),
        (this._repoInternal = null),
        (this._rootInternal = null)),
      Promise.resolve()
    );
  }
  _checkNotDeleted(e) {
    this._rootInternal === null &&
      Vt("Cannot call " + e + " on a deleted database.");
  }
}
function v1(t = Y_(), e) {
  const n = Od(t, "database").getImmediate({ identifier: e });
  if (!n._instanceStarted) {
    const r = YS("database");
    r && y1(n, ...r);
  }
  return n;
}
function y1(t, e, n, r = {}) {
  (t = Ce(t)),
    t._checkNotDeleted("useEmulator"),
    t._instanceStarted &&
      Vt(
        "Cannot call useEmulator() after instance has already been initialized."
      );
  const i = t._repoInternal;
  let s;
  if (i.repoInfo_.nodeAdmin)
    r.mockUserToken &&
      Vt(
        'mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'
      ),
      (s = new Nr(Nr.OWNER));
  else if (r.mockUserToken) {
    const o =
      typeof r.mockUserToken == "string"
        ? r.mockUserToken
        : JS(r.mockUserToken, t.app.options.projectId);
    s = new Nr(o);
  }
  f1(i, e, n, s);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E1(t) {
  _I(ei),
    zr(
      new Gn(
        "database",
        (e, { instanceIdentifier: n }) => {
          const r = e.getProvider("app").getImmediate(),
            i = e.getProvider("auth-internal"),
            s = e.getProvider("app-check-internal");
          return p1(r, i, s, n);
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    pn(ap, lp, t),
    pn(ap, lp, "esm2017");
}
Lt.prototype.simpleListen = function (t, e) {
  this.sendRequest("q", { p: t }, e);
};
Lt.prototype.echo = function (t, e) {
  this.sendRequest("echo", { d: t }, e);
};
E1();
var w1 = "firebase",
  S1 = "10.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ pn(w1, S1, "app");
const C1 = {
    apiKey: "AIzaSyAll-t99Xo2i12sTymP0pFa2x08DenXqLY",
    authDomain: "ai-travel-cb3d8.firebaseapp.com",
    projectId: "ai-travel-cb3d8",
    storageBucket: "ai-travel-cb3d8.appspot.com",
    messagingSenderId: "792225441237",
    appId: "1:792225441237:web:8ed2acf787fdbda7a5895c",
  },
  I1 = Q_(C1),
  ua = v1(I1),
  Zs = la(ua),
  T1 = ({ placeInfo: t, show: e, userInfo: n }) => {
    const [r, i] = U.useState(""),
      [s, o] = U.useState(!1),
      [a, l] = U.useState(""),
      [u, d] = U.useState("");
    async function c() {
      try {
        o(!0), i(""), d(""), l("");
        const p = "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",
          _ = new Xu.Configuration({ apiKey: p }),
          g = await new Xu.OpenAIApi(_).createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a virtual travel agent; Provided a place to visit, you provide an itinerary with suggestions about restaurants, activities, places to see and things to do. You will also provide a summary with the place type. ALWAYS use HTML markup and use proper spacing between days. Don't use h1 and DO NOT provide additional styling.",
              },
              {
                role: "user",
                content: `Place name: ${t.name}, place address: ${
                  t.address
                }, place ratings: ${t.ratings}, place types: ${t.types.map(
                  (v) => v
                )}, number of days: ${t.numberOfDays}`,
              },
            ],
          }),
          m = {
            location: t.name,
            itinerary: g.data.choices[0].message.content,
            days: t.numberOfDays,
          };
        i(m);
      } catch {
        d("Something went wrong. Please try again.");
      } finally {
        o(!1);
      }
    }
    let h;
    const f = (p) => {
      if (n) {
        if ((l(""), p.target.textContent == "Save Itinerary")) {
          (p.target.textContent = "Saved"), p.target.classList.add("saved");
          const _ = `users/${n.uid}/savedTrips`,
            w = la(ua, _);
          h = u1(w, r).key;
        } else if (
          (p.target.textContent = "Saved") &&
          ((p.target.textContent = "Save Itinerary"),
          p.target.classList.remove("saved"),
          h)
        ) {
          const _ = `users/${n.uid}/savedTrips`,
            w = la(ua, `${_}/${h}`);
          Ey(w), (h = "");
        }
      } else l("You need to be logged in.");
    };
    return (
      U.useEffect(() => {
        e && (d(""), c());
      }, [e]),
      e
        ? u
          ? E.jsx("p", { className: "itinerary-error", children: u })
          : s
          ? E.jsx(E_, {})
          : E.jsxs("div", {
              className: "itinerary",
              children: [
                E.jsx("h2", {
                  className: "section-title",
                  children: "Itinerary",
                }),
                E.jsx("p", {
                  dangerouslySetInnerHTML: { __html: r.itinerary },
                }),
                E.jsx("button", {
                  className: "save-itinerary",
                  onClick: (p) => f(p),
                  children: "Save Itinerary",
                }),
                a && E.jsx("p", { className: "login-error", children: a }),
              ],
            })
        : null
    );
  };
const k1 = ({ show: t, userInfo: e }) => {
  const [n, r] = U.useState([]),
    i = [],
    s = (l) => {
      l.stopPropagation();
      const u = l.currentTarget,
        d = l.currentTarget.parentElement;
      u.classList.add("open"), d.classList.add("open-overflow");
    },
    o = (l) => {
      l.stopPropagation();
      const u = l.currentTarget.parentElement.parentElement;
      l.currentTarget.parentElement.classList.remove("open"),
        u.classList.remove("open-overflow");
    },
    a = (l) => {
      const u = la(
        ua,
        `/users/${e.uid}/savedTrips/${l.target.parentElement.firstChild.id}`
      );
      Ey(u),
        Hp(Zs, () => {
          const d = [];
          zp(Zs).then((c) => {
            var f;
            const h =
              (f = c.val()) == null ? void 0 : f.users[e.uid].savedTrips;
            for (let p in h) d.push({ key: p, value: h[p] });
            r(d);
          });
        });
    };
  return (
    U.useEffect(() => {
      Hp(Zs, () => {
        zp(Zs).then((l) => {
          var d;
          const u = (d = l.val()) == null ? void 0 : d.users[e.uid].savedTrips;
          for (let c in u) i.push({ key: c, value: u[c] });
        });
      }),
        r(i);
    }, [t, e]),
    t
      ? e
        ? n.length === 0
          ? E.jsx("p", {
              className: "no-itinerary",
              children: "You didn't save an itinerary yet.",
            })
          : E.jsxs(E.Fragment, {
              children: [
                E.jsx("h2", {
                  className: "section-title",
                  children: "My Locations",
                }),
                E.jsxs("h3", {
                  className: "user-locations",
                  children: [
                    e.displayName,
                    e.displayName.endsWith("s") ? "'" : "'s",
                    " Saved Locations",
                  ],
                }),
                E.jsx("div", {
                  className: "saved-locations",
                  children: n.map((l) =>
                    E.jsxs(
                      "div",
                      {
                        className: "location-info",
                        children: [
                          E.jsxs("div", {
                            className: "saved-location",
                            id: l.key,
                            onClick: s,
                            children: [
                              E.jsx("h2", { children: l.value.location }),
                              E.jsxs("h3", {
                                children: [
                                  "Duration: ",
                                  l.value.days,
                                  " ",
                                  l.value.days == 1 ? "day" : "days",
                                ],
                              }),
                              E.jsx("button", {
                                className: "hidden close-btn",
                                onClick: o,
                                children: E.jsx("i", {
                                  className: "fa-solid fa-xmark",
                                }),
                              }),
                              E.jsx("div", {
                                dangerouslySetInnerHTML: {
                                  __html: l.value.itinerary,
                                },
                                className: "description hidden",
                              }),
                            ],
                          }),
                          E.jsxs("button", {
                            className: "remove-btn",
                            onClick: a,
                            children: [
                              E.jsx("i", {
                                className: "fa-solid fa-trash-can",
                              }),
                              "Remove",
                            ],
                          }),
                          E.jsx("div", { className: "overflow" }),
                        ],
                      },
                      l.key
                    )
                  ),
                }),
              ],
            })
        : E.jsx(E.Fragment, {
            children: E.jsx("p", {
              className: "no-user",
              children: "You need to be logged in to see your locations",
            }),
          })
      : null
  );
};
const R1 = ({ show: t }) =>
  t
    ? E.jsxs("div", {
        className: "instructions",
        children: [
          E.jsx("h2", {
            className: "section-title instruction-title",
            children: "Instructions",
          }),
          E.jsxs("ol", {
            children: [
              E.jsx("li", {
                children:
                  "Use the Search Bar to look for a location you would like to visit",
              }),
              E.jsx("li", {
                children: "Choose the number of days for your trip",
              }),
              E.jsx("li", { children: "Create an Itinerary" }),
            ],
          }),
          E.jsx("p", { children: "If you want to save your locations:" }),
          E.jsxs("ol", {
            children: [
              E.jsx("li", { children: "Create your account" }),
              E.jsx("li", {
                children: "Generate an itinerary and click on Save Itinerary",
              }),
              E.jsx("li", {
                children: "You can access your itineraries from My Locations",
              }),
            ],
          }),
          E.jsx("p", { className: "enjoy", children: "Enjoy your trip!" }),
        ],
      })
    : null;
const P1 = ({ handlePlace: t, handleLocations: e, handleSignIn: n }) => {
  const r = (i) => {
    i.currentTarget.parentElement.classList.toggle("open-sidebar");
  };
  return E.jsxs("div", {
    className: "sidebar",
    children: [
      E.jsx("div", {
        className: "hamburger-icon",
        onClick: r,
        children: E.jsx("span", { className: "middle-line" }),
      }),
      E.jsxs("h1", {
        children: [
          E.jsx("span", { className: "ai", children: "AI" }),
          " ",
          E.jsx("span", { className: "letter-t", children: "T" }),
          "ravels",
        ],
      }),
      E.jsxs("div", {
        className: "gpt-buttons",
        children: [
          E.jsxs("button", {
            className: "search-place gpt-btn",
            onClick: t,
            children: [
              E.jsx("i", { className: "fa-regular fa-map" }),
              "Instructions",
            ],
          }),
          E.jsxs("button", {
            className: "gpt-btn",
            onClick: e,
            children: [
              E.jsx("i", { className: "fa-solid fa-heart" }),
              "My Locations",
            ],
          }),
          E.jsxs("button", {
            className: "gpt-btn",
            onClick: n,
            children: [
              E.jsx("i", { className: "fa-solid fa-user" }),
              "Sign In",
            ],
          }),
        ],
      }),
      E.jsx("div", {
        className: "logo",
        children: E.jsx("img", {
          className: "world",
          src: "/logo.png",
          alt: "3d world map",
        }),
      }),
    ],
  });
};
function lh(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
        (n[r[i]] = t[r[i]]);
  return n;
}
function Sy() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const O1 = Sy,
  Cy = new ws("auth", "Firebase", Sy());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ca = new Rd("@firebase/auth");
function N1(t, ...e) {
  ca.logLevel <= W.WARN && ca.warn(`Auth (${ei}): ${t}`, ...e);
}
function go(t, ...e) {
  ca.logLevel <= W.ERROR && ca.error(`Auth (${ei}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mt(t, ...e) {
  throw uh(t, ...e);
}
function St(t, ...e) {
  return uh(t, ...e);
}
function A1(t, e, n) {
  const r = Object.assign(Object.assign({}, O1()), { [e]: n });
  return new ws("auth", "Firebase", r).create(e, { appName: t.name });
}
function uh(t, ...e) {
  if (typeof t != "string") {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return Cy.create(t, ...e);
}
function x(t, e, ...n) {
  if (!t) throw uh(e, ...n);
}
function xt(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw (go(e), new Error(e));
}
function Bt(t, e) {
  t || xt(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ec() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.href)) ||
    ""
  );
}
function x1() {
  return Wp() === "http:" || Wp() === "https:";
}
function Wp() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function b1() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (x1() || XS() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function D1() {
  if (typeof navigator > "u") return null;
  const t = navigator;
  return (t.languages && t.languages[0]) || t.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ps {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      Bt(n > e, "Short delay should be less than long delay!"),
      (this.isMobile = Td() || W_());
  }
  get() {
    return b1()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ch(t, e) {
  Bt(t.emulator, "Emulator should always be set here");
  const { url: n } = t.emulator;
  return e ? `${n}${e.startsWith("/") ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Iy {
  static initialize(e, n, r) {
    (this.fetchImpl = e),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    xt(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    xt(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    xt(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const L1 = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const M1 = new Ps(3e4, 6e4);
function ii(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e;
}
async function rr(t, e, n, r, i = {}) {
  return Ty(t, i, async () => {
    let s = {},
      o = {};
    r && (e === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = Zr(Object.assign({ key: t.config.apiKey }, o)).slice(1),
      l = await t._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/json"),
      t.languageCode && (l["X-Firebase-Locale"] = t.languageCode),
      Iy.fetch()(
        ky(t, t.config.apiHost, n, a),
        Object.assign(
          { method: e, headers: l, referrerPolicy: "no-referrer" },
          s
        )
      )
    );
  });
}
async function Ty(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, L1), e);
  try {
    const i = new F1(t),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw eo(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [l, u] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw eo(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS") throw eo(t, "email-already-in-use", o);
      if (l === "USER_DISABLED") throw eo(t, "user-disabled", o);
      const d = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw A1(t, d, u);
      mt(t, d);
    }
  } catch (i) {
    if (i instanceof kn) throw i;
    mt(t, "network-request-failed", { message: String(i) });
  }
}
async function Os(t, e, n, r, i = {}) {
  const s = await rr(t, e, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      mt(t, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
function ky(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? ch(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class F1 {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(St(this.auth, "network-request-failed")),
          M1.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function eo(t, e, n) {
  const r = { appName: t.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = St(t, e, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function U1(t, e) {
  return rr(t, "POST", "/v1/accounts:delete", e);
}
async function j1(t, e) {
  return rr(t, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vi(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function V1(t, e = !1) {
  const n = Ce(t),
    r = await n.getIdToken(e),
    i = dh(r);
  x(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Vi(tu(i.auth_time)),
    issuedAtTime: Vi(tu(i.iat)),
    expirationTime: Vi(tu(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function tu(t) {
  return Number(t) * 1e3;
}
function dh(t) {
  const [e, n, r] = t.split(".");
  if (e === void 0 || n === void 0 || r === void 0)
    return go("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = $o(n);
    return i
      ? JSON.parse(i)
      : (go("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      go(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function B1(t) {
  const e = dh(t);
  return (
    x(e, "internal-error"),
    x(typeof e.exp < "u", "internal-error"),
    x(typeof e.iat < "u", "internal-error"),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Kr(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof kn &&
        z1(r) &&
        t.auth.currentUser === t &&
        (await t.auth.signOut()),
      r)
    );
  }
}
function z1({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H1 {
  constructor(e) {
    (this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var n;
    if (e) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ry {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Vi(this.lastLoginAt)),
      (this.creationTime = Vi(this.createdAt));
  }
  _copy(e) {
    (this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function da(t) {
  var e;
  const n = t.auth,
    r = await t.getIdToken(),
    i = await Kr(t, j1(n, { idToken: r }));
  x(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? q1(s.providerUserInfo)
        : [],
    a = $1(t.providerData, o),
    l = t.isAnonymous,
    u = !(t.email && s.passwordHash) && !(a != null && a.length),
    d = l ? u : !1,
    c = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: a,
      metadata: new Ry(s.createdAt, s.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(t, c);
}
async function W1(t) {
  const e = Ce(t);
  await da(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function $1(t, e) {
  return [
    ...t.filter((r) => !e.some((i) => i.providerId === r.providerId)),
    ...e,
  ];
}
function q1(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = lh(e, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function G1(t, e) {
  const n = await Ty(t, {}, async () => {
    const r = Zr({ grant_type: "refresh_token", refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = ky(t, i, "/v1/token", `key=${s}`),
      a = await t._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/x-www-form-urlencoded"),
      Iy.fetch()(o, { method: "POST", headers: a, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fs {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    x(e.idToken, "internal-error"),
      x(typeof e.idToken < "u", "internal-error"),
      x(typeof e.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in e && typeof e.expiresIn < "u"
        ? Number(e.expiresIn)
        : B1(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  async getToken(e, n = !1) {
    return (
      x(!this.accessToken || this.refreshToken, e, "user-token-expired"),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
        ? (await this.refresh(e, this.refreshToken), this.accessToken)
        : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await G1(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new fs();
    return (
      r &&
        (x(typeof r == "string", "internal-error", { appName: e }),
        (o.refreshToken = r)),
      i &&
        (x(typeof i == "string", "internal-error", { appName: e }),
        (o.accessToken = i)),
      s &&
        (x(typeof s == "number", "internal-error", { appName: e }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    (this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime);
  }
  _clone() {
    return Object.assign(new fs(), this.toJSON());
  }
  _performRefresh() {
    return xt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $t(t, e) {
  x(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class Bn {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      s = lh(e, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new H1(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Ry(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await Kr(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      x(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return V1(this, e);
  }
  reload() {
    return W1(this);
  }
  _assign(e) {
    this !== e &&
      (x(this.uid === e.uid, this.auth, "internal-error"),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new Bn(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(e) {
    x(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, n = !1) {
    let r = !1;
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      n && (await da(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return (
      await Kr(this, U1(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e) => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, n) {
    var r, i, s, o, a, l, u, d;
    const c = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      h = (i = n.email) !== null && i !== void 0 ? i : void 0,
      f = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      p = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      _ = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
      w = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
      g = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      m = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0,
      {
        uid: v,
        emailVerified: y,
        isAnonymous: I,
        providerData: T,
        stsTokenManager: k,
      } = n;
    x(v && k, e, "internal-error");
    const O = fs.fromJSON(this.name, k);
    x(typeof v == "string", e, "internal-error"),
      $t(c, e.name),
      $t(h, e.name),
      x(typeof y == "boolean", e, "internal-error"),
      x(typeof I == "boolean", e, "internal-error"),
      $t(f, e.name),
      $t(p, e.name),
      $t(_, e.name),
      $t(w, e.name),
      $t(g, e.name),
      $t(m, e.name);
    const z = new Bn({
      uid: v,
      auth: e,
      email: h,
      emailVerified: y,
      displayName: c,
      isAnonymous: I,
      photoURL: p,
      phoneNumber: f,
      tenantId: _,
      stsTokenManager: O,
      createdAt: g,
      lastLoginAt: m,
    });
    return (
      T &&
        Array.isArray(T) &&
        (z.providerData = T.map((N) => Object.assign({}, N))),
      w && (z._redirectEventId = w),
      z
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new fs();
    i.updateFromServerResponse(n);
    const s = new Bn({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await da(s), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $p = new Map();
function bt(t) {
  Bt(t instanceof Function, "Expected a class definition");
  let e = $p.get(t);
  return e
    ? (Bt(e instanceof t, "Instance stored in cache mismatched with class"), e)
    : ((e = new t()), $p.set(t, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Py {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, n) {
    this.storage[e] = n;
  }
  async _get(e) {
    const n = this.storage[e];
    return n === void 0 ? null : n;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Py.type = "NONE";
const qp = Py;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _o(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class xr {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = _o(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = _o("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Bn._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, n, r = "authUser") {
    if (!n.length) return new xr(bt(qp), e, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let s = i[0] || bt(qp);
    const o = _o(r, e.config.apiKey, e.name);
    let a = null;
    for (const u of n)
      try {
        const d = await u._get(o);
        if (d) {
          const c = Bn._fromJSON(e, d);
          u !== s && (a = c), (s = u);
          break;
        }
      } catch {}
    const l = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length
      ? new xr(s, e, r)
      : ((s = l[0]),
        a && (await s._set(o, a.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== s)
              try {
                await u._remove(o);
              } catch {}
          })
        ),
        new xr(s, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gp(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Ay(e)) return "IEMobile";
  if (e.includes("msie") || e.includes("trident/")) return "IE";
  if (e.includes("edge/")) return "Edge";
  if (Oy(e)) return "Firefox";
  if (e.includes("silk/")) return "Silk";
  if (by(e)) return "Blackberry";
  if (Dy(e)) return "Webos";
  if (hh(e)) return "Safari";
  if ((e.includes("chrome/") || Ny(e)) && !e.includes("edge/")) return "Chrome";
  if (xy(e)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function Oy(t = Ne()) {
  return /firefox\//i.test(t);
}
function hh(t = Ne()) {
  const e = t.toLowerCase();
  return (
    e.includes("safari/") &&
    !e.includes("chrome/") &&
    !e.includes("crios/") &&
    !e.includes("android")
  );
}
function Ny(t = Ne()) {
  return /crios\//i.test(t);
}
function Ay(t = Ne()) {
  return /iemobile/i.test(t);
}
function xy(t = Ne()) {
  return /android/i.test(t);
}
function by(t = Ne()) {
  return /blackberry/i.test(t);
}
function Dy(t = Ne()) {
  return /webos/i.test(t);
}
function Qa(t = Ne()) {
  return (
    /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
  );
}
function K1(t = Ne()) {
  var e;
  return (
    Qa(t) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function Q1() {
  return ZS() && document.documentMode === 10;
}
function Ly(t = Ne()) {
  return Qa(t) || xy(t) || Dy(t) || by(t) || /windows phone/i.test(t) || Ay(t);
}
function Y1() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function My(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = Gp(Ne());
      break;
    case "Worker":
      n = `${Gp(Ne())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${ei}/${r}`;
}
async function Fy(t, e) {
  return rr(t, "GET", "/v2/recaptchaConfig", ii(t, e));
}
function Kp(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class Uy {
  constructor(e) {
    if (
      ((this.siteKey = ""),
      (this.emailPasswordEnabled = !1),
      e.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = e.recaptchaKey.split("/")[3]),
      (this.emailPasswordEnabled = e.recaptchaEnforcementState.some(
        (n) =>
          n.provider === "EMAIL_PASSWORD_PROVIDER" &&
          n.enforcementState !== "OFF"
      ));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function J1() {
  var t, e;
  return (e =
    (t = document.getElementsByTagName("head")) === null || t === void 0
      ? void 0
      : t[0]) !== null && e !== void 0
    ? e
    : document;
}
function jy(t) {
  return new Promise((e, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", t),
      (r.onload = e),
      (r.onerror = (i) => {
        const s = St("internal-error");
        (s.customData = i), n(s);
      }),
      (r.type = "text/javascript"),
      (r.charset = "UTF-8"),
      J1().appendChild(r);
  });
}
function X1(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
const Z1 = "https://www.google.com/recaptcha/enterprise.js?render=",
  eR = "recaptcha-enterprise",
  tR = "NO_RECAPTCHA";
class Vy {
  constructor(e) {
    (this.type = eR), (this.auth = si(e));
  }
  async verify(e = "verify", n = !1) {
    async function r(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (
          s.tenantId != null &&
          s._tenantRecaptchaConfigs[s.tenantId] !== void 0
        )
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, a) => {
        Fy(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((l) => {
            if (l.recaptchaKey === void 0)
              a(new Error("recaptcha Enterprise site key undefined"));
            else {
              const u = new Uy(l);
              return (
                s.tenantId == null
                  ? (s._agentRecaptchaConfig = u)
                  : (s._tenantRecaptchaConfigs[s.tenantId] = u),
                o(u.siteKey)
              );
            }
          })
          .catch((l) => {
            a(l);
          });
      });
    }
    function i(s, o, a) {
      const l = window.grecaptcha;
      Kp(l)
        ? l.enterprise.ready(() => {
            l.enterprise
              .execute(s, { action: e })
              .then((u) => {
                o(u);
              })
              .catch(() => {
                o(tR);
              });
          })
        : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((s, o) => {
      r(this.auth)
        .then((a) => {
          if (!n && Kp(window.grecaptcha)) i(a, s, o);
          else {
            if (typeof window > "u") {
              o(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            jy(Z1 + a)
              .then(() => {
                i(a, s, o);
              })
              .catch((l) => {
                o(l);
              });
          }
        })
        .catch((a) => {
          o(a);
        });
    });
  }
}
async function ha(t, e, n, r = !1) {
  const i = new Vy(t);
  let s;
  try {
    s = await i.verify(n);
  } catch {
    s = await i.verify(n, !0);
  }
  const o = Object.assign({}, e);
  return (
    r
      ? Object.assign(o, { captchaResp: s })
      : Object.assign(o, { captchaResponse: s }),
    Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    o
  );
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nR {
  constructor(e) {
    (this.auth = e), (this.queue = []);
  }
  pushCallback(e, n) {
    const r = (s) =>
      new Promise((o, a) => {
        try {
          const l = e(s);
          o(l);
        } catch (l) {
          a(l);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const n = [];
    try {
      for (const r of this.queue) await r(e), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rR {
  constructor(e, n, r, i) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Qp(this)),
      (this.idTokenSubscription = new Qp(this)),
      (this.beforeStateQueue = new nR(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Cy),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(e, n) {
    return (
      n && (this._popupRedirectResolver = bt(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await xr.create(this, e)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUser(e) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        a = i == null ? void 0 : i._redirectEventId,
        l = await this.tryRedirectSignIn(e);
      (!o || o === a) && l != null && l.user && ((i = l.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      x(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(e) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await da(e);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = D1();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const n = e ? Ce(e) : null;
    return (
      n &&
        x(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && x(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(e) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(bt(e));
    });
  }
  async initializeRecaptchaConfig() {
    const e = await Fy(this, {
        clientType: "CLIENT_TYPE_WEB",
        version: "RECAPTCHA_ENTERPRISE",
      }),
      n = new Uy(e);
    this.tenantId == null
      ? (this._agentRecaptchaConfig = n)
      : (this._tenantRecaptchaConfigs[this.tenantId] = n),
      n.emailPasswordEnabled && new Vy(this).verify();
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new ws("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
  }
  authStateReady() {
    return new Promise((e, n) => {
      if (this.currentUser) e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, n);
      }
    });
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = (e && bt(e)) || this._popupRedirectResolver;
      x(n, this, "argument-error"),
        (this.redirectPersistenceManager = await xr.create(
          this,
          [bt(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === e
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n),
      o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return (
      x(o, this, "internal-error"),
      o.then(() => s(this.currentUser)),
      typeof n == "function" ? e.addObserver(n, r, i) : e.addObserver(n)
    );
  }
  async directlySetCurrentUser(e) {
    this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return (this.operations = this.operations.then(e, e)), this.operations;
  }
  get assertedPersistence() {
    return (
      x(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = My(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var e;
    const n = await ((e = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getToken());
    return (
      n != null &&
        n.error &&
        N1(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function si(t) {
  return Ce(t);
}
class Qp {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = lC((n) => (this.observer = n)));
  }
  get next() {
    return (
      x(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iR(t, e) {
  const n = Od(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Go(s, e ?? {})) return i;
    mt(i, "already-initialized");
  }
  return n.initialize({ options: e });
}
function sR(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(bt);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap),
    t._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver
    );
}
function oR(t, e, n) {
  const r = si(t);
  x(r._canInitEmulator, r, "emulator-config-failed"),
    x(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
  const i = !!(n != null && n.disableWarnings),
    s = By(e),
    { host: o, port: a } = aR(e),
    l = a === null ? "" : `:${a}`;
  (r.config.emulator = { url: `${s}//${o}${l}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: a,
      protocol: s.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    i || lR();
}
function By(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function aR(t) {
  const e = By(t),
    n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: Yp(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: Yp(o) };
  }
}
function Yp(t) {
  if (!t) return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function lR() {
  function t() {
    const e = document.createElement("p"),
      n = e.style;
    (e.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      e.classList.add("firebase-emulator-warning"),
      document.body.appendChild(e);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", t)
        : t());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fh {
  constructor(e, n) {
    (this.providerId = e), (this.signInMethod = n);
  }
  toJSON() {
    return xt("not implemented");
  }
  _getIdTokenResponse(e) {
    return xt("not implemented");
  }
  _linkToIdToken(e, n) {
    return xt("not implemented");
  }
  _getReauthenticationResolver(e) {
    return xt("not implemented");
  }
}
async function uR(t, e) {
  return rr(t, "POST", "/v1/accounts:update", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nu(t, e) {
  return Os(t, "POST", "/v1/accounts:signInWithPassword", ii(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function cR(t, e) {
  return Os(t, "POST", "/v1/accounts:signInWithEmailLink", ii(t, e));
}
async function dR(t, e) {
  return Os(t, "POST", "/v1/accounts:signInWithEmailLink", ii(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ps extends fh {
  constructor(e, n, r, i = null) {
    super("password", r),
      (this._email = e),
      (this._password = n),
      (this._tenantId = i);
  }
  static _fromEmailAndPassword(e, n) {
    return new ps(e, n, "password");
  }
  static _fromEmailAndCode(e, n, r = null) {
    return new ps(e, n, "emailLink", r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e;
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === "password")
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink")
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    var n;
    switch (this.signInMethod) {
      case "password":
        const r = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        if (
          !((n = e._getRecaptchaConfig()) === null || n === void 0) &&
          n.emailPasswordEnabled
        ) {
          const i = await ha(e, r, "signInWithPassword");
          return nu(e, i);
        } else
          return nu(e, r).catch(async (i) => {
            if (i.code === "auth/missing-recaptcha-token") {
              console.log(
                "Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."
              );
              const s = await ha(e, r, "signInWithPassword");
              return nu(e, s);
            } else return Promise.reject(i);
          });
      case "emailLink":
        return cR(e, { email: this._email, oobCode: this._password });
      default:
        mt(e, "internal-error");
    }
  }
  async _linkToIdToken(e, n) {
    switch (this.signInMethod) {
      case "password":
        return uR(e, {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
        });
      case "emailLink":
        return dR(e, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        });
      default:
        mt(e, "internal-error");
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function br(t, e) {
  return Os(t, "POST", "/v1/accounts:signInWithIdp", ii(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hR = "http://localhost";
class Xn extends fh {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const n = new Xn(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
        ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
        : mt("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e,
      { providerId: r, signInMethod: i } = n,
      s = lh(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const o = new Xn(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return br(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), br(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), br(e, n);
  }
  buildRequest() {
    const e = { requestUri: hR, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = Zr(n));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fR(t) {
  switch (t) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function pR(t) {
  const e = Ti(ki(t)).link,
    n = e ? Ti(ki(e)).deep_link_id : null,
    r = Ti(ki(t)).deep_link_id;
  return (r ? Ti(ki(r)).link : null) || r || n || e || t;
}
class ph {
  constructor(e) {
    var n, r, i, s, o, a;
    const l = Ti(ki(e)),
      u = (n = l.apiKey) !== null && n !== void 0 ? n : null,
      d = (r = l.oobCode) !== null && r !== void 0 ? r : null,
      c = fR((i = l.mode) !== null && i !== void 0 ? i : null);
    x(u && d && c, "argument-error"),
      (this.apiKey = u),
      (this.operation = c),
      (this.code = d),
      (this.continueUrl =
        (s = l.continueUrl) !== null && s !== void 0 ? s : null),
      (this.languageCode =
        (o = l.languageCode) !== null && o !== void 0 ? o : null),
      (this.tenantId = (a = l.tenantId) !== null && a !== void 0 ? a : null);
  }
  static parseLink(e) {
    const n = pR(e);
    try {
      return new ph(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oi {
  constructor() {
    this.providerId = oi.PROVIDER_ID;
  }
  static credential(e, n) {
    return ps._fromEmailAndPassword(e, n);
  }
  static credentialWithLink(e, n) {
    const r = ph.parseLink(n);
    return x(r, "argument-error"), ps._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
oi.PROVIDER_ID = "password";
oi.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
oi.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zy {
  constructor(e) {
    (this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return (this.customParameters = e), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ns extends zy {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yt extends Ns {
  constructor() {
    super("facebook.com");
  }
  static credential(e) {
    return Xn._fromParams({
      providerId: Yt.PROVIDER_ID,
      signInMethod: Yt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return Yt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Yt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return Yt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Yt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Yt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jt extends Ns {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(e, n) {
    return Xn._fromParams({
      providerId: Jt.PROVIDER_ID,
      signInMethod: Jt.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n,
    });
  }
  static credentialFromResult(e) {
    return Jt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Jt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return Jt.credential(n, r);
    } catch {
      return null;
    }
  }
}
Jt.GOOGLE_SIGN_IN_METHOD = "google.com";
Jt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xt extends Ns {
  constructor() {
    super("github.com");
  }
  static credential(e) {
    return Xn._fromParams({
      providerId: Xt.PROVIDER_ID,
      signInMethod: Xt.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return Xt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Xt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return Xt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Xt.GITHUB_SIGN_IN_METHOD = "github.com";
Xt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zt extends Ns {
  constructor() {
    super("twitter.com");
  }
  static credential(e, n) {
    return Xn._fromParams({
      providerId: Zt.PROVIDER_ID,
      signInMethod: Zt.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(e) {
    return Zt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Zt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return Zt.credential(n, r);
    } catch {
      return null;
    }
  }
}
Zt.TWITTER_SIGN_IN_METHOD = "twitter.com";
Zt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ru(t, e) {
  return Os(t, "POST", "/v1/accounts:signUp", ii(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zn {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await Bn._fromIdTokenResponse(e, r, i),
      o = Jp(r);
    return new Zn({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = Jp(r);
    return new Zn({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function Jp(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fa extends kn {
  constructor(e, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, fa.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new fa(e, n, r, i);
  }
}
function Hy(t, e, n, r) {
  return (
    e === "reauthenticate"
      ? n._getReauthenticationResolver(t)
      : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? fa._fromErrorAndOperation(t, s, e, r)
      : s;
  });
}
async function mR(t, e, n = !1) {
  const r = await Kr(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return Zn._forOperation(t, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function gR(t, e, n = !1) {
  const { auth: r } = t,
    i = "reauthenticate";
  try {
    const s = await Kr(t, Hy(r, i, e, t), n);
    x(s.idToken, r, "internal-error");
    const o = dh(s.idToken);
    x(o, r, "internal-error");
    const { sub: a } = o;
    return x(t.uid === a, r, "user-mismatch"), Zn._forOperation(t, i, s);
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === "auth/user-not-found" &&
        mt(r, "user-mismatch"),
      s)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Wy(t, e, n = !1) {
  const r = "signIn",
    i = await Hy(t, r, e),
    s = await Zn._fromIdTokenResponse(t, r, i);
  return n || (await t._updateCurrentUser(s.user)), s;
}
async function _R(t, e) {
  return Wy(si(t), e);
}
async function vR(t, e, n) {
  var r;
  const i = si(t),
    s = {
      returnSecureToken: !0,
      email: e,
      password: n,
      clientType: "CLIENT_TYPE_WEB",
    };
  let o;
  if (
    !((r = i._getRecaptchaConfig()) === null || r === void 0) &&
    r.emailPasswordEnabled
  ) {
    const u = await ha(i, s, "signUpPassword");
    o = ru(i, u);
  } else
    o = ru(i, s).catch(async (u) => {
      if (u.code === "auth/missing-recaptcha-token") {
        console.log(
          "Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."
        );
        const d = await ha(i, s, "signUpPassword");
        return ru(i, d);
      } else return Promise.reject(u);
    });
  const a = await o.catch((u) => Promise.reject(u)),
    l = await Zn._fromIdTokenResponse(i, "signIn", a);
  return await i._updateCurrentUser(l.user), l;
}
function yR(t, e, n) {
  return _R(Ce(t), oi.credential(e, n));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ER(t, e) {
  return rr(t, "POST", "/v1/accounts:update", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function wR(t, { displayName: e, photoURL: n }) {
  if (e === void 0 && n === void 0) return;
  const r = Ce(t),
    s = {
      idToken: await r.getIdToken(),
      displayName: e,
      photoUrl: n,
      returnSecureToken: !0,
    },
    o = await Kr(r, ER(r.auth, s));
  (r.displayName = o.displayName || null), (r.photoURL = o.photoUrl || null);
  const a = r.providerData.find(({ providerId: l }) => l === "password");
  a && ((a.displayName = r.displayName), (a.photoURL = r.photoURL)),
    await r._updateTokensIfNecessary(o);
}
function SR(t, e, n, r) {
  return Ce(t).onIdTokenChanged(e, n, r);
}
function CR(t, e, n) {
  return Ce(t).beforeAuthStateChanged(e, n);
}
function IR(t, e, n, r) {
  return Ce(t).onAuthStateChanged(e, n, r);
}
function TR(t) {
  return Ce(t).signOut();
}
const pa = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $y {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(pa, "1"),
          this.storage.removeItem(pa),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kR() {
  const t = Ne();
  return hh(t) || Qa(t);
}
const RR = 1e3,
  PR = 10;
class qy extends $y {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = kR() && Y1()),
      (this.fallbackToPolling = Ly()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && e(n, i, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, a, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const r = e.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const o = this.storage.getItem(r);
      if (e.newValue !== o)
        e.newValue !== null
          ? this.storage.setItem(r, e.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !n) return;
    }
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    Q1() && s !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, PR)
      : i();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: e, oldValue: n, newValue: r }),
            !0
          );
        });
      }, RR));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(e, n) {
    await super._set(e, n), (this.localCache[e] = JSON.stringify(n));
  }
  async _get(e) {
    const n = await super._get(e);
    return (this.localCache[e] = JSON.stringify(n)), n;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
qy.type = "LOCAL";
const OR = qy;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gy extends $y {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Gy.type = "SESSION";
const Ky = Gy;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function NR(t) {
  return Promise.all(
    t.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ya {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new Ya(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const n = e,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const a = Array.from(o).map(async (u) => u(n.origin, s)),
      l = await NR(a);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: l,
    });
  }
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(n);
  }
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n),
      (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Ya.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mh(t = "", e = 10) {
  let n = "";
  for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10);
  return t + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AR {
  constructor(e) {
    (this.target = e), (this.handlers = new Set());
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener("message", e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e);
  }
  async _send(e, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let s, o;
    return new Promise((a, l) => {
      const u = mh("", 20);
      i.port1.start();
      const d = setTimeout(() => {
        l(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(c) {
          const h = c;
          if (h.data.eventId === u)
            switch (h.data.status) {
              case "ack":
                clearTimeout(d),
                  (s = setTimeout(() => {
                    l(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(s), a(h.data.response);
                break;
              default:
                clearTimeout(d),
                  clearTimeout(s),
                  l(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener("message", o.onMessage),
        this.target.postMessage({ eventType: e, eventId: u, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ct() {
  return window;
}
function xR(t) {
  Ct().location.href = t;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qy() {
  return (
    typeof Ct().WorkerGlobalScope < "u" &&
    typeof Ct().importScripts == "function"
  );
}
async function bR() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function DR() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    t === void 0
      ? void 0
      : t.controller) || null
  );
}
function LR() {
  return Qy() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yy = "firebaseLocalStorageDb",
  MR = 1,
  ma = "firebaseLocalStorage",
  Jy = "fbase_key";
class As {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function Ja(t, e) {
  return t.transaction([ma], e ? "readwrite" : "readonly").objectStore(ma);
}
function FR() {
  const t = indexedDB.deleteDatabase(Yy);
  return new As(t).toPromise();
}
function wc() {
  const t = indexedDB.open(Yy, MR);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }),
      t.addEventListener("upgradeneeded", () => {
        const r = t.result;
        try {
          r.createObjectStore(ma, { keyPath: Jy });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener("success", async () => {
        const r = t.result;
        r.objectStoreNames.contains(ma)
          ? e(r)
          : (r.close(), await FR(), e(await wc()));
      });
  });
}
async function Xp(t, e, n) {
  const r = Ja(t, !0).put({ [Jy]: e, value: n });
  return new As(r).toPromise();
}
async function UR(t, e) {
  const n = Ja(t, !1).get(e),
    r = await new As(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Zp(t, e) {
  const n = Ja(t, !0).delete(e);
  return new As(n).toPromise();
}
const jR = 800,
  VR = 3;
class Xy {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await wc()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > VR) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Qy() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Ya._getInstance(LR())),
      this.receiver._subscribe("keyChanged", async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (e, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await bR()), !this.activeServiceWorker))
      return;
    this.sender = new AR(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        DR() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await wc();
      return await Xp(e, pa, "1"), await Zp(e, pa), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Xp(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => UR(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Zp(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = Ja(i, !1).getAll();
      return new As(s).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    for (const { fbase_key: i, value: s } of e)
      r.add(i),
        JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
          (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), jR));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Xy.type = "LOCAL";
const BR = Xy;
new Ps(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zR(t, e) {
  return e
    ? bt(e)
    : (x(t._popupRedirectResolver, t, "argument-error"),
      t._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gh extends fh {
  constructor(e) {
    super("custom", "custom"), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return br(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return br(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return br(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return e && (n.idToken = e), n;
  }
}
function HR(t) {
  return Wy(t.auth, new gh(t), t.bypassAuthState);
}
function WR(t) {
  const { auth: e, user: n } = t;
  return x(n, e, "internal-error"), gR(n, new gh(t), t.bypassAuthState);
}
async function $R(t) {
  const { auth: e, user: n } = t;
  return x(n, e, "internal-error"), mR(n, new gh(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zy {
  constructor(e, n, r, i, s = !1) {
    (this.auth = e),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: a,
    } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(a)(l));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return HR;
      case "linkViaPopup":
      case "linkViaRedirect":
        return $R;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return WR;
      default:
        mt(this.auth, "internal-error");
    }
  }
  resolve(e) {
    Bt(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    Bt(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qR = new Ps(2e3, 1e4);
class Sr extends Zy {
  constructor(e, n, r, i, s) {
    super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Sr.currentPopupAction && Sr.currentPopupAction.cancel(),
      (Sr.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return x(e, this.auth, "internal-error"), e;
  }
  async onExecution() {
    Bt(this.filter.length === 1, "Popup operations only handle one event");
    const e = mh();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(St(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return (
      ((e = this.authWindow) === null || e === void 0
        ? void 0
        : e.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(St(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Sr.currentPopupAction = null);
  }
  pollUserCancellation() {
    const e = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(St(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, qR.get());
    };
    e();
  }
}
Sr.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const GR = "pendingRedirect",
  vo = new Map();
class KR extends Zy {
  constructor(e, n, r = !1) {
    super(
      e,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let e = vo.get(this.auth._key());
    if (!e) {
      try {
        const r = (await QR(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      vo.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        vo.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId);
      if (n) return (this.user = n), super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function QR(t, e) {
  const n = XR(e),
    r = JR(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function YR(t, e) {
  vo.set(t._key(), e);
}
function JR(t) {
  return bt(t._redirectPersistence);
}
function XR(t) {
  return _o(GR, t.config.apiKey, t.name);
}
async function ZR(t, e, n = !1) {
  const r = si(t),
    i = zR(r, e),
    o = await new KR(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, e)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eP = 10 * 60 * 1e3;
class tP {
  constructor(e) {
    (this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(e) {
    this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((n = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !nP(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !e0(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(St(this.auth, i));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= eP &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(em(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(em(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function em(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId]
    .filter((e) => e)
    .join("-");
}
function e0({ type: t, error: e }) {
  return (
    t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
  );
}
function nP(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return e0(t);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rP(t, e = {}) {
  return rr(t, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const iP = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  sP = /^https?/;
async function oP(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await rP(t);
  for (const n of e)
    try {
      if (aP(n)) return;
    } catch {}
  mt(t, "unauthorized-domain");
}
function aP(t) {
  const e = Ec(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          t.replace("chrome-extension://", "") ===
            e.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!sP.test(n)) return !1;
  if (iP.test(t)) return r === t;
  const i = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lP = new Ps(3e4, 6e4);
function tm() {
  const t = Ct().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (
        ((t.H[e].r = t.H[e].r || []),
        (t.H[e].L = t.H[e].L || []),
        (t.H[e].r = [...t.H[e].L]),
        t.CP)
      )
        for (let n = 0; n < t.CP.length; n++) t.CP[n] = null;
  }
}
function uP(t) {
  return new Promise((e, n) => {
    var r, i, s;
    function o() {
      tm(),
        gapi.load("gapi.iframes", {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            tm(), n(St(t, "network-request-failed"));
          },
          timeout: lP.get(),
        });
    }
    if (
      !(
        (i = (r = Ct().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((s = Ct().gapi) === null || s === void 0) && s.load) o();
    else {
      const a = X1("iframefcb");
      return (
        (Ct()[a] = () => {
          gapi.load ? o() : n(St(t, "network-request-failed"));
        }),
        jy(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((e) => {
    throw ((yo = null), e);
  });
}
let yo = null;
function cP(t) {
  return (yo = yo || uP(t)), yo;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dP = new Ps(5e3, 15e3),
  hP = "__/auth/iframe",
  fP = "emulator/auth/iframe",
  pP = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  mP = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function gP(t) {
  const e = t.config;
  x(e.authDomain, t, "auth-domain-config-required");
  const n = e.emulator ? ch(e, fP) : `https://${t.config.authDomain}/${hP}`,
    r = { apiKey: e.apiKey, appName: t.name, v: ei },
    i = mP.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${Zr(r).slice(1)}`;
}
async function _P(t) {
  const e = await cP(t),
    n = Ct().gapi;
  return (
    x(n, t, "internal-error"),
    e.open(
      {
        where: document.body,
        url: gP(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: pP,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = St(t, "network-request-failed"),
            a = Ct().setTimeout(() => {
              s(o);
            }, dP.get());
          function l() {
            Ct().clearTimeout(a), i(r);
          }
          r.ping(l).then(l, () => {
            s(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vP = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  yP = 500,
  EP = 600,
  wP = "_blank",
  SP = "http://localhost";
class nm {
  constructor(e) {
    (this.window = e), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function CP(t, e, n, r = yP, i = EP) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = Object.assign(Object.assign({}, vP), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    u = Ne().toLowerCase();
  n && (a = Ny(u) ? wP : n), Oy(u) && ((e = e || SP), (l.scrollbars = "yes"));
  const d = Object.entries(l).reduce((h, [f, p]) => `${h}${f}=${p},`, "");
  if (K1(u) && a !== "_self") return IP(e || "", a), new nm(null);
  const c = window.open(e || "", a, d);
  x(c, t, "popup-blocked");
  try {
    c.focus();
  } catch {}
  return new nm(c);
}
function IP(t, e) {
  const n = document.createElement("a");
  (n.href = t), (n.target = e);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const TP = "__/auth/handler",
  kP = "emulator/auth/handler",
  RP = encodeURIComponent("fac");
async function rm(t, e, n, r, i, s) {
  x(t.config.authDomain, t, "auth-domain-config-required"),
    x(t.config.apiKey, t, "invalid-api-key");
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: ei,
    eventId: i,
  };
  if (e instanceof zy) {
    e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ""),
      nc(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, c] of Object.entries(s || {})) o[d] = c;
  }
  if (e instanceof Ns) {
    const d = e.getScopes().filter((c) => c !== "");
    d.length > 0 && (o.scopes = d.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const d of Object.keys(a)) a[d] === void 0 && delete a[d];
  const l = await t._getAppCheckToken(),
    u = l ? `#${RP}=${encodeURIComponent(l)}` : "";
  return `${PP(t)}?${Zr(a).slice(1)}${u}`;
}
function PP({ config: t }) {
  return t.emulator ? ch(t, kP) : `https://${t.authDomain}/${TP}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const iu = "webStorageSupport";
class OP {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Ky),
      (this._completeRedirectFn = ZR),
      (this._overrideRedirectResult = YR);
  }
  async _openPopup(e, n, r, i) {
    var s;
    Bt(
      (s = this.eventManagers[e._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = await rm(e, n, r, Ec(), i);
    return CP(e, o, mh());
  }
  async _openRedirect(e, n, r, i) {
    await this._originValidation(e);
    const s = await rm(e, n, r, Ec(), i);
    return xR(s), new Promise(() => {});
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (Bt(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const n = await _P(e),
      r = new tP(e);
    return (
      n.register(
        "authEvent",
        (i) => (
          x(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(
      iu,
      { type: iu },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[iu];
        o !== void 0 && n(!!o), mt(e, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = oP(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Ly() || hh() || Qa();
  }
}
const NP = OP;
var im = "@firebase/auth",
  sm = "1.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AP {
  constructor(e) {
    (this.auth = e), (this.internalListeners = new Map());
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
        null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    x(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xP(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function bP(t) {
  zr(
    new Gn(
      "auth",
      (e, { options: n }) => {
        const r = e.getProvider("app").getImmediate(),
          i = e.getProvider("heartbeat"),
          s = e.getProvider("app-check-internal"),
          { apiKey: o, authDomain: a } = r.options;
        x(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
        const l = {
            apiKey: o,
            authDomain: a,
            clientPlatform: t,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: My(t),
          },
          u = new rR(r, i, s, l);
        return sR(u, n), u;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider("auth-internal").initialize();
      })
  ),
    zr(
      new Gn(
        "auth-internal",
        (e) => {
          const n = si(e.getProvider("auth").getImmediate());
          return ((r) => new AP(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    pn(im, sm, xP(t)),
    pn(im, sm, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DP = 5 * 60,
  LP = H_("authIdTokenMaxAge") || DP;
let om = null;
const MP = (t) => async (e) => {
  const n = e && (await e.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > LP) return;
  const i = n == null ? void 0 : n.token;
  om !== i &&
    ((om = i),
    await fetch(t, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function _h(t = Y_()) {
  const e = Od(t, "auth");
  if (e.isInitialized()) return e.getImmediate();
  const n = iR(t, { popupRedirectResolver: NP, persistence: [BR, OR, Ky] }),
    r = H_("authTokenSyncURL");
  if (r) {
    const s = MP(r);
    CR(n, s, () => s(n.currentUser)), SR(n, (o) => s(o));
  }
  const i = B_("auth");
  return i && oR(n, `http://${i}`), n;
}
bP("Browser");
const FP = ({ show: t, handleSignIn: e, onSignUp: n }) => {
  const [r, i] = U.useState(""),
    [s, o] = U.useState(""),
    [a, l] = U.useState(""),
    [u, d] = U.useState("");
  U.useEffect(() => {
    l("");
  }, [t]);
  const c = (h) => {
    h.preventDefault();
    const f = _h();
    vR(f, r, s)
      .then((p) => {
        l("");
        const _ = p.user;
        wR(_, { displayName: u }).then(() => {
          n(_.displayName);
        });
      })
      .catch((p) => {
        const _ = p.message;
        l(_);
      })
      .finally(() => {
        i(""), o(""), d("");
      });
  };
  return t
    ? E.jsxs("div", {
        className: "sign-up",
        children: [
          E.jsx("h2", { children: "Sign Up" }),
          E.jsxs("form", {
            action: "#",
            onSubmit: c,
            className: "sign-up-form",
            children: [
              E.jsx("label", { htmlFor: "name", children: "Name" }),
              E.jsx("input", {
                type: "text",
                value: u,
                onChange: (h) => {
                  d(h.target.value);
                },
                className: "name",
                required: !0,
              }),
              E.jsx("label", { htmlFor: "email", children: "E-Mail" }),
              E.jsx("input", {
                type: "email",
                value: r,
                onChange: (h) => {
                  i(h.target.value);
                },
                className: "email",
                required: !0,
              }),
              E.jsx("label", { htmlFor: "password", children: "Password" }),
              E.jsx("input", {
                type: "password",
                value: s,
                onChange: (h) => {
                  o(h.target.value);
                },
                className: "password",
                required: !0,
              }),
              E.jsx("button", {
                type: "submit",
                className: "sign-up-button",
                children: "Sign up",
              }),
            ],
          }),
          E.jsxs("div", {
            className: "already-signed",
            children: [
              E.jsx("p", { children: "Already have an account? " }),
              E.jsx("a", { onClick: e, children: "Sign In" }),
            ],
          }),
          a && E.jsx("p", { className: "error", children: a }),
        ],
      })
    : null;
};
const UP = ({ show: t, handleSignUp: e }) => {
  const [n, r] = U.useState(""),
    [i, s] = U.useState(""),
    [o, a] = U.useState("");
  U.useEffect(() => {
    a("");
  }, [t]);
  const l = (u) => {
    u.preventDefault();
    const d = _h();
    yR(d, n, i)
      .then((c) => {
        a(""), c.user;
      })
      .catch((c) => {
        const h = c.message;
        a(h);
      })
      .finally(() => {
        r(""), s("");
      });
  };
  return t
    ? E.jsxs("div", {
        className: "sign-in",
        children: [
          E.jsx("h2", { children: "Sign In" }),
          E.jsxs("form", {
            action: "#",
            onSubmit: l,
            className: "sign-in-form",
            children: [
              E.jsx("label", { htmlFor: "email", children: "E-Mail" }),
              E.jsx("input", {
                type: "email",
                value: n,
                onChange: (u) => {
                  r(u.target.value);
                },
                className: "email",
                required: !0,
              }),
              E.jsx("label", { htmlFor: "password", children: "Password" }),
              E.jsx("input", {
                type: "password",
                value: i,
                onChange: (u) => {
                  s(u.target.value);
                },
                className: "password",
                required: !0,
              }),
              E.jsx("button", {
                type: "submit",
                className: "sign-in-button",
                children: "Sign In",
              }),
            ],
          }),
          E.jsxs("div", {
            className: "not-yet-signed",
            children: [
              E.jsx("p", { children: "Not signed up yet?" }),
              E.jsx("a", { onClick: e, children: "Create account" }),
            ],
          }),
          o && E.jsx("p", { className: "error", children: o }),
        ],
      })
    : null;
};
const jP = ({ getUserInfo: t, username: e }) => {
  const [n, r] = U.useState(null),
    i = _h();
  U.useEffect(() => {
    const o = IR(i, (a) => {
      a ? (r(a), t(a)) : (r(null), t(null));
    });
    return () => {
      o();
    };
  }, []);
  const s = () => {
    TR(i);
  };
  return n
    ? E.jsxs("div", {
        className: "login-info",
        children: [
          E.jsxs("p", { children: ["Hello, ", e || n.displayName] }),
          E.jsx("a", { onClick: s, children: "SIGN OUT" }),
        ],
      })
    : E.jsx("div", {
        className: "login-info",
        children: E.jsx("p", { children: "You are not logged in" }),
      });
};
function VP() {
  const [t, e] = U.useState(""),
    [n, r] = U.useState(""),
    [i, s] = U.useState(!1),
    [o, a] = U.useState(!1),
    [l, u] = U.useState(!0),
    [d, c] = U.useState(!1),
    [h, f] = U.useState({}),
    [p, _] = U.useState(!1),
    [w, g] = U.useState(!1),
    [m, v] = U.useState(null),
    y = (te) => {
      v(te);
    },
    [I, T] = U.useState(""),
    k = (te) => {
      T(te);
    },
    O = (te) => {
      te.preventDefault(),
        t && (a(!1), s(!0), u(!1), c(!1), _(!1), g(!1), r(t), e(""));
    },
    z = (te, ir, ai, li, R, b, D) => {
      f({
        e: te,
        name: ir,
        address: ai,
        image: li,
        rating: R,
        types: b,
        numberOfDays: D,
      }),
        s(!1),
        a(!0),
        u(!1),
        c(!1),
        _(!1),
        g(!1);
    },
    N = (te) => {
      te.currentTarget.parentElement.parentElement.classList.remove(
        "open-sidebar"
      ),
        a(!1),
        u(!0),
        s(!1),
        c(!1),
        _(!1),
        g(!1);
    },
    ae = (te) => {
      te.currentTarget.parentElement.parentElement.classList.remove(
        "open-sidebar"
      ),
        c(!0),
        a(!1),
        u(!1),
        s(!1),
        _(!1),
        g(!1);
    },
    Ie = () => {
      _(!0), g(!1), c(!1), a(!1), u(!1), s(!1);
    },
    gt = (te) => {
      te.currentTarget.parentElement.parentElement.classList.remove(
        "open-sidebar"
      ),
        _(!1),
        g(!0),
        c(!1),
        a(!1),
        u(!1),
        s(!1);
    };
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(P1, {
        handlePlace: N,
        handleLocations: ae,
        handleSignUp: Ie,
        handleSignIn: gt,
      }),
      E.jsx(jP, { getUserInfo: y, username: I }),
      E.jsxs("main", {
        children: [
          E.jsx(Pw, { userPlace: n, show: i, createItinerary: z }),
          E.jsx(T1, { placeInfo: h, show: o, userInfo: m }),
          E.jsx(FP, { show: p, handleSignIn: gt, onSignUp: k }),
          E.jsx(UP, { show: w, handleSignUp: Ie }),
          E.jsx(k1, { show: d, userInfo: m }),
          E.jsx(R1, { show: l }),
          E.jsxs("form", {
            action: "#",
            onSubmit: O,
            className: "get-place-form",
            children: [
              E.jsx("i", {
                className: "fa-solid fa-magnifying-glass mobile-search",
              }),
              E.jsx("input", {
                type: "text",
                onChange: (te) => {
                  e(te.target.value);
                },
                className: "text-field",
                value: t,
                placeholder: "Search for a location...",
                required: !0,
              }),
              E.jsxs("button", {
                type: "submit",
                className: "submit-button",
                children: [
                  E.jsx("i", { className: "fa-solid fa-location-arrow" }),
                  E.jsx("span", {
                    className: "mobile-search",
                    children: "Search",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
su.createRoot(document.getElementById("root")).render(
  E.jsx(_0.StrictMode, { children: E.jsx(VP, {}) })
);
