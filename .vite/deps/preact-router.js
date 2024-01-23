import {
  h,
  p,
  q
} from "./chunk-3DX4SQKH.js";
import {
  $,
  E,
  F,
  b,
  y
} from "./chunk-GKN43OMQ.js";
import "./chunk-Y2F7D3TJ.js";

// node_modules/preact-router/dist/preact-router.mjs
var a = {};
function c(n, t) {
  for (var r in t)
    n[r] = t[r];
  return n;
}
function s(n, t, r) {
  var i, o = /(?:\?([^#]*))?(#.*)?$/, e = n.match(o), u = {};
  if (e && e[1])
    for (var f = e[1].split("&"), c2 = 0; c2 < f.length; c2++) {
      var s2 = f[c2].split("=");
      u[decodeURIComponent(s2[0])] = decodeURIComponent(s2.slice(1).join("="));
    }
  n = d(n.replace(o, "")), t = d(t || "");
  for (var h3 = Math.max(n.length, t.length), v2 = 0; v2 < h3; v2++)
    if (t[v2] && ":" === t[v2].charAt(0)) {
      var l2 = t[v2].replace(/(^:|[+*?]+$)/g, ""), p3 = (t[v2].match(/[+*?]+$/) || a)[0] || "", m2 = ~p3.indexOf("+"), y3 = ~p3.indexOf("*"), U2 = n[v2] || "";
      if (!U2 && !y3 && (p3.indexOf("?") < 0 || m2)) {
        i = false;
        break;
      }
      if (u[l2] = decodeURIComponent(U2), m2 || y3) {
        u[l2] = n.slice(v2).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[v2] !== n[v2]) {
      i = false;
      break;
    }
  return (true === r.default || false !== i) && u;
}
function h2(n, t) {
  return n.rank < t.rank ? 1 : n.rank > t.rank ? -1 : n.index - t.index;
}
function v(n, t) {
  return n.index = t, n.rank = function(n2) {
    return n2.props.default ? 0 : d(n2.props.path).map(l).join("");
  }(n), n.props;
}
function d(n) {
  return n.replace(/(^\/+|\/+$)/g, "").split("/");
}
function l(n) {
  return ":" == n.charAt(0) ? 1 + "*+?".indexOf(n.charAt(n.length - 1)) || 4 : 5;
}
var p2 = {};
var m = [];
var y2 = [];
var U = null;
var g = { url: R() };
var k = F(g);
function C() {
  var n = q(k);
  if (n === g) {
    var t = h()[1];
    p(function() {
      return y2.push(t), function() {
        return y2.splice(y2.indexOf(t), 1);
      };
    }, []);
  }
  return [n, $2];
}
function R() {
  var n;
  return "" + ((n = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p2).pathname || "") + (n.search || "");
}
function $2(n, t) {
  return void 0 === t && (t = false), "string" != typeof n && n.url && (t = n.replace, n = n.url), function(n2) {
    for (var t2 = m.length; t2--; )
      if (m[t2].canRoute(n2))
        return true;
    return false;
  }(n) && function(n2, t2) {
    void 0 === t2 && (t2 = "push"), U && U[t2] ? U[t2](n2) : "undefined" != typeof history && history[t2 + "State"] && history[t2 + "State"](null, null, n2);
  }(n, t ? "replace" : "push"), I(n);
}
function I(n) {
  for (var t = false, r = 0; r < m.length; r++)
    m[r].routeTo(n) && (t = true);
  return t;
}
function M(n) {
  if (n && n.getAttribute) {
    var t = n.getAttribute("href"), r = n.getAttribute("target");
    if (t && t.match(/^\//g) && (!r || r.match(/^_?self$/i)))
      return $2(t);
  }
}
function b2(n) {
  return n.stopImmediatePropagation && n.stopImmediatePropagation(), n.stopPropagation && n.stopPropagation(), n.preventDefault(), false;
}
function W(n) {
  if (!(n.ctrlKey || n.metaKey || n.altKey || n.shiftKey || n.button)) {
    var t = n.target;
    do {
      if ("a" === t.localName && t.getAttribute("href")) {
        if (t.hasAttribute("data-native") || t.hasAttribute("native"))
          return;
        if (M(t))
          return b2(n);
      }
    } while (t = t.parentNode);
  }
}
var w = false;
function D(n) {
  n.history && (U = n.history), this.state = { url: n.url || R() };
}
c(D.prototype = new b(), { shouldComponentUpdate: function(n) {
  return true !== n.static || n.url !== this.props.url || n.onChange !== this.props.onChange;
}, canRoute: function(n) {
  var t = $(this.props.children);
  return void 0 !== this.g(t, n);
}, routeTo: function(n) {
  this.setState({ url: n });
  var t = this.canRoute(n);
  return this.p || this.forceUpdate(), t;
}, componentWillMount: function() {
  this.p = true;
}, componentDidMount: function() {
  var n = this;
  w || (w = true, U || addEventListener("popstate", function() {
    I(R());
  }), addEventListener("click", W)), m.push(this), U && (this.u = U.listen(function(t) {
    var r = t.location || t;
    n.routeTo("" + (r.pathname || "") + (r.search || ""));
  })), this.p = false;
}, componentWillUnmount: function() {
  "function" == typeof this.u && this.u(), m.splice(m.indexOf(this), 1);
}, componentWillUpdate: function() {
  this.p = true;
}, componentDidUpdate: function() {
  this.p = false;
}, g: function(n, t) {
  n = n.filter(v).sort(h2);
  for (var r = 0; r < n.length; r++) {
    var i = n[r], o = s(t, i.props.path, i.props);
    if (o)
      return [i, o];
  }
}, render: function(n, t) {
  var e, u, f = n.onChange, a2 = t.url, s2 = this.c, h3 = this.g($(n.children), a2);
  if (h3 && (u = E(h3[0], c(c({ url: a2, matches: e = h3[1] }, e), { key: void 0, ref: void 0 }))), a2 !== (s2 && s2.url)) {
    c(g, s2 = this.c = { url: a2, previous: s2 && s2.url, current: u, path: u ? u.props.path : null, matches: e }), s2.router = this, s2.active = u ? [u] : [];
    for (var v2 = y2.length; v2--; )
      y2[v2]({});
    "function" == typeof f && f(s2);
  }
  return y(k.Provider, { value: s2 }, u);
} });
var E2 = function(n) {
  return y("a", c({ onClick: W }, n));
};
var L = function(n) {
  return y(n.component, n);
};
export {
  E2 as Link,
  L as Route,
  D as Router,
  D as default,
  s as exec,
  R as getCurrentUrl,
  $2 as route,
  C as useRouter
};
//# sourceMappingURL=preact-router.js.map
