/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(e, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? c(e, !0) : function(b) {
        if (!b.document) {
          throw new Error("jQuery requires a window with a document")
        }
        return c(b)
      } : c(e)
    }("undefined" != typeof window ? window : this, function(a, b) {
      var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) {
          return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
          return b.toUpperCase()
        };
      m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
          return d.call(this)
        },
        get: function(a) {
          return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
          var b = m.merge(this.constructor(), a);
          return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
          return m.each(this, a, b)
        },
        map: function(a) {
          return this.pushStack(m.map(this, function(b, c) {
            return a.call(b, c, b)
          }))
        },
        slice: function() {
          return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
          return this.eq(0)
        },
        last: function() {
          return this.eq(-1)
        },
        eq: function(a) {
          var b = this.length,
            c = +a + (0 > a ? b : 0);
          return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
          return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
      }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
          if (null != (e = arguments[h])) {
            for (d in e) {
              a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c))
            }
          }
        }
        return g
      }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
          throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
          return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
          return "array" === m.type(a)
        },
        isWindow: function(a) {
          return null != a && a == a.window
        },
        isNumeric: function(a) {
          return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
          var b;
          for (b in a) {
            return !1
          }
          return !0
        },
        isPlainObject: function(a) {
          var b;
          if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) {
            return !1
          }
          try {
            if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) {
              return !1
            }
          } catch (c) {
            return !1
          }
          if (k.ownLast) {
            for (b in a) {
              return j.call(a, b)
            }
          }
          for (b in a) {}
          return void 0 === b || j.call(a, b)
        },
        type: function(a) {
          return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
          b && m.trim(b) && (a.execScript || function(b) {
            a.eval.call(a, b)
          })(b)
        },
        camelCase: function(a) {
          return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
          return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
          var d, e = 0,
            f = a.length,
            g = r(a);
          if (c) {
            if (g) {
              for (; f > e; e++) {
                if (d = b.apply(a[e], c), d === !1) {
                  break
                }
              }
            } else {
              for (e in a) {
                if (d = b.apply(a[e], c), d === !1) {
                  break
                }
              }
            }
          } else {
            if (g) {
              for (; f > e; e++) {
                if (d = b.call(a[e], e, a[e]), d === !1) {
                  break
                }
              }
            } else {
              for (e in a) {
                if (d = b.call(a[e], e, a[e]), d === !1) {
                  break
                }
              }
            }
          }
          return a
        },
        trim: function(a) {
          return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
          var c = b || [];
          return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
          var d;
          if (b) {
            if (g) {
              return g.call(b, a, c)
            }
            for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
              if (c in b && b[c] === a) {
                return c
              }
            }
          }
          return -1
        },
        merge: function(a, b) {
          var c = +b.length,
            d = 0,
            e = a.length;
          while (c > d) {
            a[e++] = b[d++]
          }
          if (c !== c) {
            while (void 0 !== b[d]) {
              a[e++] = b[d++]
            }
          }
          return a.length = e, a
        },
        grep: function(a, b, c) {
          for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
            d = !b(a[f], f), d !== h && e.push(a[f])
          }
          return e
        },
        map: function(a, b, c) {
          var d, f = 0,
            g = a.length,
            h = r(a),
            i = [];
          if (h) {
            for (; g > f; f++) {
              d = b(a[f], f, c), null != d && i.push(d)
            }
          } else {
            for (f in a) {
              d = b(a[f], f, c), null != d && i.push(d)
            }
          }
          return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
          var c, e, f;
          return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
            return a.apply(b || this, c.concat(d.call(arguments)))
          }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
          return +new Date
        },
        support: k
      }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
      });
    
      function r(a) {
        var b = a.length,
          c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
      }
      var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
          v = a.document,
          w = 0,
          x = 0,
          y = gb(),
          z = gb(),
          A = gb(),
          B = function(a, b) {
            return a === b && (l = !0), 0
          },
          C = "undefined",
          D = 1 << 31,
          E = {}.hasOwnProperty,
          F = [],
          G = F.pop,
          H = F.push,
          I = F.push,
          J = F.slice,
          K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) {
              if (this[b] === a) {
                return b
              }
            }
            return -1
          },
          L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          O = N.replace("w", "w#"),
          P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
          Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
          R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          S = new RegExp("^" + M + "*," + M + "*"),
          T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
          V = new RegExp(Q),
          W = new RegExp("^" + O + "$"),
          X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
          },
          Y = /^(?:input|select|textarea|button)$/i,
          Z = /^h\d$/i,
          $ = /^[^{]+\{\s*\[native \w/,
          _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ab = /[+~]/,
          bb = /'|\\/g,
          cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
          };
        try {
          I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
          I = {
            apply: F.length ? function(a, b) {
              H.apply(a, J.call(b))
            } : function(a, b) {
              var c = a.length,
                d = 0;
              while (a[c++] = b[d++]) {}
              a.length = c - 1
            }
          }
        }
    
        function fb(a, b, d, e) {
          var f, h, j, k, l, o, r, s, w, x;
          if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) {
            return d
          }
          if (1 !== (k = b.nodeType) && 9 !== k) {
            return []
          }
          if (p && !e) {
            if (f = _.exec(a)) {
              if (j = f[1]) {
                if (9 === k) {
                  if (h = b.getElementById(j), !h || !h.parentNode) {
                    return d
                  }
                  if (h.id === j) {
                    return d.push(h), d
                  }
                } else {
                  if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                    return d.push(h), d
                  }
                }
              } else {
                if (f[2]) {
                  return I.apply(d, b.getElementsByTagName(a)), d
                }
                if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                  return I.apply(d, b.getElementsByClassName(j)), d
                }
              }
            }
            if (c.qsa && (!q || !q.test(a))) {
              if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                while (l--) {
                  o[l] = s + qb(o[l])
                }
                w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
              }
              if (x) {
                try {
                  return I.apply(d, w.querySelectorAll(x)), d
                } catch (y) {} finally {
                  r || b.removeAttribute("id")
                }
              }
            }
          }
          return i(a.replace(R, "$1"), b, d, e)
        }
    
        function gb() {
          var a = [];
    
          function b(c, e) {
            return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
          }
          return b
        }
    
        function hb(a) {
          return a[u] = !0, a
        }
    
        function ib(a) {
          var b = n.createElement("div");
          try {
            return !!a(b)
          } catch (c) {
            return !1
          } finally {
            b.parentNode && b.parentNode.removeChild(b), b = null
          }
        }
    
        function jb(a, b) {
          var c = a.split("|"),
            e = a.length;
          while (e--) {
            d.attrHandle[c[e]] = b
          }
        }
    
        function kb(a, b) {
          var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
          if (d) {
            return d
          }
          if (c) {
            while (c = c.nextSibling) {
              if (c === b) {
                return -1
              }
            }
          }
          return a ? 1 : -1
        }
    
        function lb(a) {
          return function(b) {
            var c = b.nodeName.toLowerCase();
            return "input" === c && b.type === a
          }
        }
    
        function mb(a) {
          return function(b) {
            var c = b.nodeName.toLowerCase();
            return ("input" === c || "button" === c) && b.type === a
          }
        }
    
        function nb(a) {
          return hb(function(b) {
            return b = +b, hb(function(c, d) {
              var e, f = a([], c.length, b),
                g = f.length;
              while (g--) {
                c[e = f[g]] && (c[e] = !(d[e] = c[e]))
              }
            })
          })
        }
    
        function ob(a) {
          return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
          var b, e = a ? a.ownerDocument || a : v,
            g = e.defaultView;
          return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
            m()
          }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
            m()
          })), c.attributes = ib(function(a) {
            return a.className = "i", !a.getAttribute("className")
          }), c.getElementsByTagName = ib(function(a) {
            return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
          }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
            return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
          }), c.getById = ib(function(a) {
            return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
          }), c.getById ? (d.find.ID = function(a, b) {
            if (typeof b.getElementById !== C && p) {
              var c = b.getElementById(a);
              return c && c.parentNode ? [c] : []
            }
          }, d.filter.ID = function(a) {
            var b = a.replace(cb, db);
            return function(a) {
              return a.getAttribute("id") === b
            }
          }) : (delete d.find.ID, d.filter.ID = function(a) {
            var b = a.replace(cb, db);
            return function(a) {
              var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
              return c && c.value === b
            }
          }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
            return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
          } : function(a, b) {
            var c, d = [],
              e = 0,
              f = b.getElementsByTagName(a);
            if ("*" === a) {
              while (c = f[e++]) {
                1 === c.nodeType && d.push(c)
              }
              return d
            }
            return f
          }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
            return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
          }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
            a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
          }), ib(function(a) {
            var b = e.createElement("input");
            b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
          })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
            c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
          }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a,
              d = b && b.parentNode;
            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
          } : function(a, b) {
            if (b) {
              while (b = b.parentNode) {
                if (b === a) {
                  return !0
                }
              }
            }
            return !1
          }, B = b ? function(a, b) {
            if (a === b) {
              return l = !0, 0
            }
            var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
            return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
          } : function(a, b) {
            if (a === b) {
              return l = !0, 0
            }
            var c, d = 0,
              f = a.parentNode,
              g = b.parentNode,
              h = [a],
              i = [b];
            if (!f || !g) {
              return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0
            }
            if (f === g) {
              return kb(a, b)
            }
            c = a;
            while (c = c.parentNode) {
              h.unshift(c)
            }
            c = b;
            while (c = c.parentNode) {
              i.unshift(c)
            }
            while (h[d] === i[d]) {
              d++
            }
            return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
          }, e) : n
        }, fb.matches = function(a, b) {
          return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
          if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) {
            try {
              var d = s.call(a, b);
              if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                return d
              }
            } catch (e) {}
          }
          return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
          return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
          (a.ownerDocument || a) !== n && m(a);
          var e = d.attrHandle[b.toLowerCase()],
            f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
          return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
          throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
          var b, d = [],
            e = 0,
            f = 0;
          if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
            while (b = a[f++]) {
              b === a[f] && (e = d.push(f))
            }
            while (e--) {
              a.splice(d[e], 1)
            }
          }
          return k = null, a
        }, e = fb.getText = function(a) {
          var b, c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) {
                return a.textContent
              }
              for (a = a.firstChild; a; a = a.nextSibling) {
                c += e(a)
              }
            } else {
              if (3 === f || 4 === f) {
                return a.nodeValue
              }
            }
          } else {
            while (b = a[d++]) {
              c += e(b)
            }
          }
          return c
        }, d = fb.selectors = {
          cacheLength: 50,
          createPseudo: hb,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(a) {
              return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
            },
            CHILD: function(a) {
              return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
            },
            PSEUDO: function(a) {
              var b, c = !a[6] && a[2];
              return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
            }
          },
          filter: {
            TAG: function(a) {
              var b = a.replace(cb, db).toLowerCase();
              return "*" === a ? function() {
                return !0
              } : function(a) {
                return a.nodeName && a.nodeName.toLowerCase() === b
              }
            },
            CLASS: function(a) {
              var b = y[a + " "];
              return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
              })
            },
            ATTR: function(a, b, c) {
              return function(d) {
                var e = fb.attr(d, a);
                return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
              }
            },
            CHILD: function(a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e ? function(a) {
                return !!a.parentNode
              } : function(b, c, i) {
                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                  q = b.parentNode,
                  r = h && b.nodeName.toLowerCase(),
                  s = !i && !h;
                if (q) {
                  if (f) {
                    while (p) {
                      l = b;
                      while (l = l[p]) {
                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                          return !1
                        }
                      }
                      o = p = "only" === a && !o && "nextSibling"
                    }
                    return !0
                  }
                  if (o = [g ? q.firstChild : q.lastChild], g && s) {
                    k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                      if (1 === l.nodeType && ++m && l === b) {
                        k[a] = [w, n, m];
                        break
                      }
                    }
                  } else {
                    if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) {
                      m = j[1]
                    } else {
                      while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) {
                          break
                        }
                      }
                    }
                  }
                  return m -= e, m === d || m % d === 0 && m / d >= 0
                }
              }
            },
            PSEUDO: function(a, b) {
              var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
              return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                var d, f = e(a, b),
                  g = f.length;
                while (g--) {
                  d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                }
              }) : function(a) {
                return e(a, 0, c)
              }) : e
            }
          },
          pseudos: {
            not: hb(function(a) {
              var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
              return d[u] ? hb(function(a, b, c, e) {
                var f, g = d(a, null, e, []),
                  h = a.length;
                while (h--) {
                  (f = g[h]) && (a[h] = !(b[h] = f))
                }
              }) : function(a, e, f) {
                return b[0] = a, d(b, null, f, c), !c.pop()
              }
            }),
            has: hb(function(a) {
              return function(b) {
                return fb(a, b).length > 0
              }
            }),
            contains: hb(function(a) {
              return function(b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
              }
            }),
            lang: hb(function(a) {
              return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                function(b) {
                  var c;
                  do {
                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                      return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                    }
                  } while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1
                }
            }),
            target: function(b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id
            },
            root: function(a) {
              return a === o
            },
            focus: function(a) {
              return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
            },
            enabled: function(a) {
              return a.disabled === !1
            },
            disabled: function(a) {
              return a.disabled === !0
            },
            checked: function(a) {
              var b = a.nodeName.toLowerCase();
              return "input" === b && !!a.checked || "option" === b && !!a.selected
            },
            selected: function(a) {
              return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            },
            empty: function(a) {
              for (a = a.firstChild; a; a = a.nextSibling) {
                if (a.nodeType < 6) {
                  return !1
                }
              }
              return !0
            },
            parent: function(a) {
              return !d.pseudos.empty(a)
            },
            header: function(a) {
              return Z.test(a.nodeName)
            },
            input: function(a) {
              return Y.test(a.nodeName)
            },
            button: function(a) {
              var b = a.nodeName.toLowerCase();
              return "input" === b && "button" === a.type || "button" === b
            },
            text: function(a) {
              var b;
              return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
            },
            first: nb(function() {
              return [0]
            }),
            last: nb(function(a, b) {
              return [b - 1]
            }),
            eq: nb(function(a, b, c) {
              return [0 > c ? c + b : c]
            }),
            even: nb(function(a, b) {
              for (var c = 0; b > c; c += 2) {
                a.push(c)
              }
              return a
            }),
            odd: nb(function(a, b) {
              for (var c = 1; b > c; c += 2) {
                a.push(c)
              }
              return a
            }),
            lt: nb(function(a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0;) {
                a.push(d)
              }
              return a
            }),
            gt: nb(function(a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b;) {
                a.push(d)
              }
              return a
            })
          }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) {
          d.pseudos[b] = lb(b)
        }
        for (b in {
            submit: !0,
            reset: !0
          }) {
          d.pseudos[b] = mb(b)
        }
    
        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
          var c, e, f, g, h, i, j, k = z[a + " "];
          if (k) {
            return b ? 0 : k.slice(0)
          }
          h = a, i = [], j = d.preFilter;
          while (h) {
            (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
              value: c,
              type: e[0].replace(R, " ")
            }), h = h.slice(c.length));
            for (g in d.filter) {
              !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                value: c,
                type: g,
                matches: e
              }), h = h.slice(c.length))
            }
            if (!c) {
              break
            }
          }
          return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };
    
        function qb(a) {
          for (var b = 0, c = a.length, d = ""; c > b; b++) {
            d += a[b].value
          }
          return d
        }
    
        function rb(a, b, c) {
          var d = b.dir,
            e = c && "parentNode" === d,
            f = x++;
          return b.first ? function(b, c, f) {
            while (b = b[d]) {
              if (1 === b.nodeType || e) {
                return a(b, c, f)
              }
            }
          } : function(b, c, g) {
            var h, i, j = [w, f];
            if (g) {
              while (b = b[d]) {
                if ((1 === b.nodeType || e) && a(b, c, g)) {
                  return !0
                }
              }
            } else {
              while (b = b[d]) {
                if (1 === b.nodeType || e) {
                  if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                    return j[2] = h[2]
                  }
                  if (i[d] = j, j[2] = a(b, c, g)) {
                    return !0
                  }
                }
              }
            }
          }
        }
    
        function sb(a) {
          return a.length > 1 ? function(b, c, d) {
            var e = a.length;
            while (e--) {
              if (!a[e](b, c, d)) {
                return !1
              }
            }
            return !0
          } : a[0]
        }
    
        function tb(a, b, c) {
          for (var d = 0, e = b.length; e > d; d++) {
            fb(a, b[d], c)
          }
          return c
        }
    
        function ub(a, b, c, d, e) {
          for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
            (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
          }
          return g
        }
    
        function vb(a, b, c, d, e, f) {
          return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
            var j, k, l, m = [],
              n = [],
              o = g.length,
              p = f || tb(b || "*", h.nodeType ? [h] : h, []),
              q = !a || !f && b ? p : ub(p, m, a, h, i),
              r = c ? e || (f ? a : o || d) ? [] : g : q;
            if (c && c(q, r, h, i), d) {
              j = ub(r, n), d(j, [], h, i), k = j.length;
              while (k--) {
                (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
              }
            }
            if (f) {
              if (e || a) {
                if (e) {
                  j = [], k = r.length;
                  while (k--) {
                    (l = r[k]) && j.push(q[k] = l)
                  }
                  e(null, r = [], j, i)
                }
                k = r.length;
                while (k--) {
                  (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                }
              }
            } else {
              r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            }
          })
        }
    
        function wb(a) {
          for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
              return a === b
            }, h, !0), l = rb(function(a) {
              return K.call(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
              return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }]; f > i; i++) {
            if (c = d.relative[a[i].type]) {
              m = [rb(sb(m), c)]
            } else {
              if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                for (e = ++i; f > e; e++) {
                  if (d.relative[a[e].type]) {
                    break
                  }
                }
                return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                  value: " " === a[i - 2].type ? "*" : ""
                })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
              }
              m.push(c)
            }
          }
          return sb(m)
        }
    
        function xb(a, b) {
          var c = b.length > 0,
            e = a.length > 0,
            f = function(f, g, h, i, k) {
              var l, m, o, p = 0,
                q = "0",
                r = f && [],
                s = [],
                t = j,
                u = f || e && d.find.TAG("*", k),
                v = w += null == t ? 1 : Math.random() || 0.1,
                x = u.length;
              for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                if (e && l) {
                  m = 0;
                  while (o = a[m++]) {
                    if (o(l, g, h)) {
                      i.push(l);
                      break
                    }
                  }
                  k && (w = v)
                }
                c && ((l = !o && l) && p--, f && r.push(l))
              }
              if (p += q, c && q !== p) {
                m = 0;
                while (o = b[m++]) {
                  o(r, s, g, h)
                }
                if (f) {
                  if (p > 0) {
                    while (q--) {
                      r[q] || s[q] || (s[q] = G.call(i))
                    }
                  }
                  s = ub(s)
                }
                I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
              }
              return k && (w = v, j = t), r
            };
          return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
          var c, d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), c = b.length;
            while (c--) {
              f = wb(b[c]), f[u] ? d.push(f) : e.push(f)
            }
            f = A(a, xb(e, d)), f.selector = a
          }
          return f
        }, i = fb.select = function(a, b, e, f) {
          var i, j, k, l, m, n = "function" == typeof a && a,
            o = !f && g(a = n.selector || a);
          if (e = e || [], 1 === o.length) {
            if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
              if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) {
                return e
              }
              n && (b = b.parentNode), a = a.slice(j.shift().value.length)
            }
            i = X.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (k = j[i], d.relative[l = k.type]) {
                break
              }
              if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                if (j.splice(i, 1), a = f.length && qb(j), !a) {
                  return I.apply(e, f), e
                }
                break
              }
            }
          }
          return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
          return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
          return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
          return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
          return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
          return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
          var d;
          return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
      }(a);
      m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
      var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;
    
      function w(a, b, c) {
        if (m.isFunction(b)) {
          return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
          })
        }
        if (b.nodeType) {
          return m.grep(a, function(a) {
            return a === b !== c
          })
        }
        if ("string" == typeof b) {
          if (v.test(b)) {
            return m.filter(b, a, c)
          }
          b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
          return m.inArray(a, b) >= 0 !== c
        })
      }
      m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
          return 1 === a.nodeType
        }))
      }, m.fn.extend({
        find: function(a) {
          var b, c = [],
            d = this,
            e = d.length;
          if ("string" != typeof a) {
            return this.pushStack(m(a).filter(function() {
              for (b = 0; e > b; b++) {
                if (m.contains(d[b], this)) {
                  return !0
                }
              }
            }))
          }
          for (b = 0; e > b; b++) {
            m.find(a, d[b], c)
          }
          return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
          return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
          return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
          return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
      });
      var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
          var c, d;
          if (!a) {
            return this
          }
          if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) {
              return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a)
            }
            if (c[1]) {
              if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) {
                for (c in b) {
                  m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                }
              }
              return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
              if (d.id !== c[2]) {
                return x.find(a)
              }
              this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
          }
          return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
      A.prototype = m.fn, x = m(y);
      var B = /^(?:parents|prev(?:Until|All))/,
        C = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
      m.extend({
        dir: function(a, b, c) {
          var d = [],
            e = a[b];
          while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
            1 === e.nodeType && d.push(e), e = e[b]
          }
          return d
        },
        sibling: function(a, b) {
          for (var c = []; a; a = a.nextSibling) {
            1 === a.nodeType && a !== b && c.push(a)
          }
          return c
        }
      }), m.fn.extend({
        has: function(a) {
          var b, c = m(a, this),
            d = c.length;
          return this.filter(function() {
            for (b = 0; d > b; b++) {
              if (m.contains(this, c[b])) {
                return !0
              }
            }
          })
        },
        closest: function(a, b) {
          for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
            for (c = this[d]; c && c !== b; c = c.parentNode) {
              if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break
              }
            }
          }
          return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
          return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
          return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
          return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
      });
    
      function D(a, b) {
        do {
          a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
      }
      m.each({
        parent: function(a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
          return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
          return m.dir(a, "parentNode", c)
        },
        next: function(a) {
          return D(a, "nextSibling")
        },
        prev: function(a) {
          return D(a, "previousSibling")
        },
        nextAll: function(a) {
          return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
          return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
          return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
          return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
          return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
          return m.sibling(a.firstChild)
        },
        contents: function(a) {
          return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
      }, function(a, b) {
        m.fn[a] = function(c, d) {
          var e = m.map(this, b, c);
          return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
      });
      var E = /\S+/g,
        F = {};
    
      function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
          b[c] = !0
        }), b
      }
      m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
          i = !a.once && [],
          j = function(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
              if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
              }
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
          },
          k = {
            add: function() {
              if (h) {
                var d = h.length;
                ! function f(b) {
                  m.each(b, function(b, c) {
                    var d = m.type(c);
                    "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                  })
                }(arguments), b ? e = h.length : c && (g = d, j(c))
              }
              return this
            },
            remove: function() {
              return h && m.each(arguments, function(a, c) {
                var d;
                while ((d = m.inArray(c, h, d)) > -1) {
                  h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                }
              }), this
            },
            has: function(a) {
              return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
              return h = [], e = 0, this
            },
            disable: function() {
              return h = i = c = void 0, this
            },
            disabled: function() {
              return !h
            },
            lock: function() {
              return i = void 0, c || k.disable(), this
            },
            locked: function() {
              return !i
            },
            fireWith: function(a, c) {
              return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
            },
            fire: function() {
              return k.fireWith(this, arguments), this
            },
            fired: function() {
              return !!d
            }
          };
        return k
      }, m.extend({
        Deferred: function(a) {
          var b = [
              ["resolve", "done", m.Callbacks("once memory"), "resolved"],
              ["reject", "fail", m.Callbacks("once memory"), "rejected"],
              ["notify", "progress", m.Callbacks("memory")]
            ],
            c = "pending",
            d = {
              state: function() {
                return c
              },
              always: function() {
                return e.done(arguments).fail(arguments), this
              },
              then: function() {
                var a = arguments;
                return m.Deferred(function(c) {
                  m.each(b, function(b, f) {
                    var g = m.isFunction(a[b]) && a[b];
                    e[f[1]](function() {
                      var a = g && g.apply(this, arguments);
                      a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                    })
                  }), a = null
                }).promise()
              },
              promise: function(a) {
                return null != a ? m.extend(a, d) : d
              }
            },
            e = {};
          return d.pipe = d.then, m.each(b, function(a, f) {
            var g = f[2],
              h = f[3];
            d[f[1]] = g.add, h && g.add(function() {
              c = h
            }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
              return e[f[0] + "With"](this === e ? d : this, arguments), this
            }, e[f[0] + "With"] = g.fireWith
          }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
          var b = 0,
            c = d.call(arguments),
            e = c.length,
            f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
            g = 1 === f ? a : m.Deferred(),
            h = function(a, b, c) {
              return function(e) {
                b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
              }
            },
            i, j, k;
          if (e > 1) {
            for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
              c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f
            }
          }
          return f || g.resolveWith(k, c), g.promise()
        }
      });
      var H;
      m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
      }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
          a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
          if (a === !0 ? !--m.readyWait : !m.isReady) {
            if (!y.body) {
              return setTimeout(m.ready)
            }
            m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
          }
        }
      });
    
      function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
      }
    
      function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
      }
      m.ready.promise = function(b) {
        if (!H) {
          if (H = m.Deferred(), "complete" === y.readyState) {
            setTimeout(m.ready)
          } else {
            if (y.addEventListener) {
              y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1)
            } else {
              y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
              var c = !1;
              try {
                c = null == a.frameElement && y.documentElement
              } catch (d) {}
              c && c.doScroll && ! function e() {
                if (!m.isReady) {
                  try {
                    c.doScroll("left")
                  } catch (a) {
                    return setTimeout(e, 50)
                  }
                  I(), m.ready()
                }
              }()
            }
          }
        }
        return H.promise(b)
      };
      var K = "undefined",
        L;
      for (L in m(k)) {
        break
      }
      k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
          var a, b, c, d;
          c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
          var a = y.createElement("div");
          if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
              delete a.test
            } catch (b) {
              k.deleteExpando = !1
            }
          }
          a = null
        }(), m.acceptData = function(a) {
          var b = m.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;
          return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
      var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;
    
      function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
          var d = "data-" + b.replace(N, "-$1").toLowerCase();
          if (c = a.getAttribute(d), "string" == typeof c) {
            try {
              c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
            } catch (e) {}
            m.data(a, b, c)
          } else {
            c = void 0
          }
        }
        return c
      }
    
      function P(a) {
        var b;
        for (b in a) {
          if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) {
            return !1
          }
        }
        return !0
      }
    
      function Q(a, b, d, e) {
        if (m.acceptData(a)) {
          var f, g, h = m.expando,
            i = a.nodeType,
            j = i ? m.cache : a,
            k = i ? a[h] : a[h] && h;
          if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
            return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
              toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
          }
        }
      }
    
      function R(a, b, c) {
        if (m.acceptData(a)) {
          var d, e, f = a.nodeType,
            g = f ? m.cache : a,
            h = f ? a[m.expando] : m.expando;
          if (g[h]) {
            if (b && (d = c ? g[h] : g[h].data)) {
              m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
              while (e--) {
                delete d[b[e]]
              }
              if (c ? !P(d) : !m.isEmptyObject(d)) {
                return
              }
            }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
          }
        }
      }
      m.extend({
        cache: {},
        noData: {
          "applet ": !0,
          "embed ": !0,
          "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
          return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
          return Q(a, b, c)
        },
        removeData: function(a, b) {
          return R(a, b)
        },
        _data: function(a, b, c) {
          return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
          return R(a, b, !0)
        }
      }), m.fn.extend({
        data: function(a, b) {
          var c, d, e, f = this[0],
            g = f && f.attributes;
          if (void 0 === a) {
            if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
              c = g.length;
              while (c--) {
                g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])))
              }
              m._data(f, "parsedAttrs", !0)
            }
            return e
          }
          return "object" == typeof a ? this.each(function() {
            m.data(this, a)
          }) : arguments.length > 1 ? this.each(function() {
            m.data(this, a, b)
          }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
          return this.each(function() {
            m.removeData(this, a)
          })
        }
      }), m.extend({
        queue: function(a, b, c) {
          var d;
          return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
          b = b || "fx";
          var c = m.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = m._queueHooks(a, b),
            g = function() {
              m.dequeue(a, b)
            };
          "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
          var c = b + "queueHooks";
          return m._data(a, c) || m._data(a, c, {
            empty: m.Callbacks("once memory").add(function() {
              m._removeData(a, b + "queue"), m._removeData(a, c)
            })
          })
        }
      }), m.fn.extend({
        queue: function(a, b) {
          var c = 2;
          return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
            var c = m.queue(this, a, b);
            m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
          })
        },
        dequeue: function(a) {
          return this.each(function() {
            m.dequeue(this, a)
          })
        },
        clearQueue: function(a) {
          return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
          var c, d = 1,
            e = m.Deferred(),
            f = this,
            g = this.length,
            h = function() {
              --d || e.resolveWith(f, [f])
            };
          "string" != typeof a && (b = a, a = void 0), a = a || "fx";
          while (g--) {
            c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
          }
          return h(), e.promise(b)
        }
      });
      var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
          return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
          var h = 0,
            i = a.length,
            j = null == c;
          if ("object" === m.type(c)) {
            e = !0;
            for (h in c) {
              m.access(a, b, h, c[h], !0, f, g)
            }
          } else {
            if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(m(a), c)
              })), b)) {
              for (; i > h; h++) {
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
              }
            }
          }
          return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
      ! function() {
        var a = y.createElement("input"),
          b = y.createElement("div"),
          c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1
          }), b.cloneNode(!0).click()), null == k.deleteExpando) {
          k.deleteExpando = !0;
          try {
            delete b.test
          } catch (d) {
            k.deleteExpando = !1
          }
        }
      }(),
      function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
          }) {
          c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1)
        }
        d = null
      }();
      var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;
    
      function ab() {
        return !0
      }
    
      function bb() {
        return !1
      }
    
      function cb() {
        try {
          return y.activeElement
        } catch (a) {}
      }
      m.event = {
        global: {},
        add: function(a, b, c, d, e) {
          var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
          if (r) {
            c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
              return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
            }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
            while (h--) {
              f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                type: o,
                origType: q,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && m.expr.match.needsContext.test(e),
                namespace: p.join(".")
              }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0)
            }
            a = null
          }
        },
        remove: function(a, b, c, d, e) {
          var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
          if (r && (k = r.events)) {
            b = (b || "").match(E) || [""], j = b.length;
            while (j--) {
              if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                while (f--) {
                  g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g))
                }
                i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
              } else {
                for (o in k) {
                  m.event.remove(a, o + b[j], c, d, !0)
                }
              }
            }
            m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
          }
        },
        trigger: function(b, c, d, e) {
          var f, g, h, i, k, l, n, o = [d || y],
            p = j.call(b, "type") ? b.type : b,
            q = j.call(b, "namespace") ? b.namespace.split(".") : [];
          if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
            if (!e && !k.noBubble && !m.isWindow(d)) {
              for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
                o.push(h), l = h
              }
              l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
            }
            n = 0;
            while ((h = o[n++]) && !b.isPropagationStopped()) {
              b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault())
            }
            if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
              l = d[g], l && (d[g] = null), m.event.triggered = p;
              try {
                d[p]()
              } catch (r) {}
              m.event.triggered = void 0, l && (d[g] = l)
            }
            return b.result
          }
        },
        dispatch: function(a) {
          a = m.event.fix(a);
          var b, c, e, f, g, h = [],
            i = d.call(arguments),
            j = (m._data(this, "events") || {})[a.type] || [],
            k = m.event.special[a.type] || {};
          if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
            h = m.event.handlers.call(this, a, j), b = 0;
            while ((f = h[b++]) && !a.isPropagationStopped()) {
              a.currentTarget = f.elem, g = 0;
              while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
                (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
              }
            }
            return k.postDispatch && k.postDispatch.call(this, a), a.result
          }
        },
        handlers: function(a, b) {
          var c, d, e, f, g = [],
            h = b.delegateCount,
            i = a.target;
          if (h && i.nodeType && (!a.button || "click" !== a.type)) {
            for (; i != this; i = i.parentNode || this) {
              if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++) {
                  d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d)
                }
                e.length && g.push({
                  elem: i,
                  handlers: e
                })
              }
            }
          }
          return h < b.length && g.push({
            elem: this,
            handlers: b.slice(h)
          }), g
        },
        fix: function(a) {
          if (a[m.expando]) {
            return a
          }
          var b, c, d, e = a.type,
            f = a,
            g = this.fixHooks[e];
          g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
          while (b--) {
            c = d[b], a[c] = f[c]
          }
          return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(a, b) {
            return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
          }
        },
        mouseHooks: {
          props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function(a, b) {
            var c, d, e, f = b.button,
              g = b.fromElement;
            return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
          }
        },
        special: {
          load: {
            noBubble: !0
          },
          focus: {
            trigger: function() {
              if (this !== cb() && this.focus) {
                try {
                  return this.focus(), !1
                } catch (a) {}
              }
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function() {
              return this === cb() && this.blur ? (this.blur(), !1) : void 0
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function() {
              return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
            },
            _default: function(a) {
              return m.nodeName(a.target, "a")
            }
          },
          beforeunload: {
            postDispatch: function(a) {
              void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
            }
          }
        },
        simulate: function(a, b, c, d) {
          var e = m.extend(new m.Event, c, {
            type: a,
            isSimulated: !0,
            originalEvent: {}
          });
          d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
      }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
      } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
      }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
      }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
          var a = this.originalEvent;
          this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
          var a = this.originalEvent;
          this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
          var a = this.originalEvent;
          this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
      }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(a, b) {
        m.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function(a) {
            var c, d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
          }
        }
      }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
          return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
            var b = a.target,
              c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
            c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
              a._submit_bubble = !0
            }), m._data(c, "submitBubbles", !0))
          })
        },
        postDispatch: function(a) {
          a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
          return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
      }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
          return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
            "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
          }), m.event.add(this, "click._change", function(a) {
            this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
          })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
            var b = a.target;
            X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
              !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
            }), m._data(b, "changeBubbles", !0))
          })
        },
        handle: function(a) {
          var b = a.target;
          return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
          return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
      }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
      }, function(a, b) {
        var c = function(a) {
          m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
          setup: function() {
            var d = this.ownerDocument || this,
              e = m._data(d, b);
            e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
          },
          teardown: function() {
            var d = this.ownerDocument || this,
              e = m._data(d, b) - 1;
            e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
          }
        }
      }), m.fn.extend({
        on: function(a, b, c, d, e) {
          var f, g;
          if ("object" == typeof a) {
            "string" != typeof b && (c = c || b, b = void 0);
            for (f in a) {
              this.on(f, b, c, a[f], e)
            }
            return this
          }
          if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) {
            d = bb
          } else {
            if (!d) {
              return this
            }
          }
          return 1 === e && (g = d, d = function(a) {
            return m().off(a), g.apply(this, arguments)
          }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
            m.event.add(this, a, d, c, b)
          })
        },
        one: function(a, b, c, d) {
          return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
          var d, e;
          if (a && a.preventDefault && a.handleObj) {
            return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
          }
          if ("object" == typeof a) {
            for (e in a) {
              this.off(e, b, a[e])
            }
            return this
          }
          return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
            m.event.remove(this, a, c, b)
          })
        },
        trigger: function(a, b) {
          return this.each(function() {
            m.event.trigger(a, b, this)
          })
        },
        triggerHandler: function(a, b) {
          var c = this[0];
          return c ? m.event.trigger(a, b, c, !0) : void 0
        }
      });
    
      function db(a) {
        var b = eb.split("|"),
          c = a.createDocumentFragment();
        if (c.createElement) {
          while (b.length) {
            c.createElement(b.pop())
          }
        }
        return c
      }
      var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          area: [1, "<map>", "</map>"],
          param: [1, "<object>", "</object>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
      rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;
    
      function ub(a, b) {
        var c, d, e = 0,
          f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f) {
          for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
            !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b))
          }
        }
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
      }
    
      function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
      }
    
      function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
      }
    
      function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
      }
    
      function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
      }
    
      function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
          m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
        }
      }
    
      function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
          var c, d, e, f = m._data(a),
            g = m._data(b, f),
            h = f.events;
          if (h) {
            delete g.handle, g.events = {};
            for (c in h) {
              for (d = 0, e = h[c].length; e > d; d++) {
                m.event.add(b, c, h[c][d])
              }
            }
          }
          g.data && (g.data = m.extend({}, g.data))
        }
      }
    
      function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
          if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
            e = m._data(b);
            for (d in e.events) {
              m.removeEvent(b, d, e.handle)
            }
            b.removeAttribute(m.expando)
          }
          "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
      }
      m.extend({
        clone: function(a, b, c) {
          var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
          if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) {
            for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
              d[g] && Bb(e, d[g])
            }
          }
          if (b) {
            if (c) {
              for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
                Ab(e, d[g])
              }
            } else {
              Ab(a, f)
            }
          }
          return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
          for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
            if (f = a[q], f || 0 === f) {
              if ("object" === m.type(f)) {
                m.merge(p, f.nodeType ? [f] : f)
              } else {
                if (lb.test(f)) {
                  h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                  while (e--) {
                    h = h.lastChild
                  }
                  if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) {
                      m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                    }
                  }
                  m.merge(p, h.childNodes), h.textContent = "";
                  while (h.firstChild) {
                    h.removeChild(h.firstChild)
                  }
                  h = o.lastChild
                } else {
                  p.push(b.createTextNode(f))
                }
              }
            }
          }
          h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
          while (f = p[q++]) {
            if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
              e = 0;
              while (f = h[e++]) {
                ob.test(f.type || "") && c.push(f)
              }
            }
          }
          return h = null, o
        },
        cleanData: function(a, b) {
          for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
            if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
              if (g.events) {
                for (e in g.events) {
                  n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle)
                }
              }
              j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
            }
          }
        }
      }), m.fn.extend({
        text: function(a) {
          return V(this, function(a) {
            return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
          }, null, a, arguments.length)
        },
        append: function() {
          return this.domManip(arguments, function(a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var b = wb(this, a);
              b.appendChild(a)
            }
          })
        },
        prepend: function() {
          return this.domManip(arguments, function(a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var b = wb(this, a);
              b.insertBefore(a, b.firstChild)
            }
          })
        },
        before: function() {
          return this.domManip(arguments, function(a) {
            this.parentNode && this.parentNode.insertBefore(a, this)
          })
        },
        after: function() {
          return this.domManip(arguments, function(a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
          })
        },
        remove: function(a, b) {
          for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
            b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c))
          }
          return this
        },
        empty: function() {
          for (var a, b = 0; null != (a = this[b]); b++) {
            1 === a.nodeType && m.cleanData(ub(a, !1));
            while (a.firstChild) {
              a.removeChild(a.firstChild)
            }
            a.options && m.nodeName(a, "select") && (a.options.length = 0)
          }
          return this
        },
        clone: function(a, b) {
          return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
            return m.clone(this, a, b)
          })
        },
        html: function(a) {
          return V(this, function(a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a) {
              return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0
            }
            if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
              a = a.replace(ib, "<$1></$2>");
              try {
                for (; d > c; c++) {
                  b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a)
                }
                b = 0
              } catch (e) {}
            }
            b && this.empty().append(a)
          }, null, a, arguments.length)
        },
        replaceWith: function() {
          var a = arguments[0];
          return this.domManip(arguments, function(b) {
            a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
          }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
          return this.remove(a, !0)
        },
        domManip: function(a, b) {
          a = e.apply([], a);
          var c, d, f, g, h, i, j = 0,
            l = this.length,
            n = this,
            o = l - 1,
            p = a[0],
            q = m.isFunction(p);
          if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) {
            return this.each(function(c) {
              var d = n.eq(c);
              q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            })
          }
          if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
            for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
              d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j)
            }
            if (f) {
              for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
                d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")))
              }
            }
            i = c = null
          }
          return this
        }
      }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(a, b) {
        m.fn[a] = function(a) {
          for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
            c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get())
          }
          return this.pushStack(e)
        }
      });
      var Cb, Db = {};
    
      function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
          f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
      }
    
      function Fb(a) {
        var b = y,
          c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
      }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
          if (null != a) {
            return a
          }
          a = !1;
          var b, c, d;
          return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
      }();
      var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
      a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
      }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
      }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
      }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
      });
    
      function Lb(a, b) {
        return {
          get: function() {
            var c = a();
            if (null != c) {
              return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
          }
        }
      }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
          c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
            reliableHiddenOffsets: function() {
              return null == g && i(), g
            },
            boxSizingReliable: function() {
              return null == f && i(), f
            },
            pixelPosition: function() {
              return null == e && i(), e
            },
            reliableMarginRight: function() {
              return null == h && i(), h
            }
          });
    
          function i() {
            var b, c, d, i;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
              width: "4px"
            }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
          }
        }
      }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
          g[f] = a.style[f], a.style[f] = b[f]
        }
        e = c.apply(a, d || []);
        for (f in b) {
          a.style[f] = g[f]
        }
        return e
      };
      var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        Sb = {
          letterSpacing: "0",
          fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];
    
      function Ub(a, b) {
        if (b in a) {
          return b
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1),
          d = b,
          e = Tb.length;
        while (e--) {
          if (b = Tb[e] + c, b in a) {
            return b
          }
        }
        return d
      }
    
      function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
          d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
          d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
      }
    
      function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
      }
    
      function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
          "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)))
        }
        return g
      }
    
      function Yb(a, b, c) {
        var d = !0,
          e = "width" === b ? a.offsetWidth : a.offsetHeight,
          f = Ib(a),
          g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
          if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) {
            return e
          }
          d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
      }
      m.extend({
        cssHooks: {
          opacity: {
            get: function(a, b) {
              if (b) {
                var c = Jb(a, "opacity");
                return "" === c ? "1" : c
              }
            }
          }
        },
        cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {
          "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
          if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var e, f, g, h = m.camelCase(b),
              i = a.style;
            if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) {
              return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
            }
            if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) {
              try {
                i[b] = c
              } catch (j) {}
            }
          }
        },
        css: function(a, b, c, d) {
          var e, f, g, h = m.camelCase(b);
          return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
      }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
          get: function(a, c, d) {
            return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
              return Yb(a, b, d)
            }) : Yb(a, b, d) : void 0
          },
          set: function(a, c, d) {
            var e = d && Ib(a);
            return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
          }
        }
      }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
          return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = d && d.filter || c.filter || "";
          c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
      }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
          display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
      }), m.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(a, b) {
        m.cssHooks[a + b] = {
          expand: function(c) {
            for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
              e[a + T[d] + b] = f[d] || f[d - 2] || f[0]
            }
            return e
          }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
      }), m.fn.extend({
        css: function(a, b) {
          return V(this, function(a, b, c) {
            var d, e, f = {},
              g = 0;
            if (m.isArray(b)) {
              for (d = Ib(a), e = b.length; e > g; g++) {
                f[b[g]] = m.css(a, b[g], !1, d)
              }
              return f
            }
            return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
          }, a, b, arguments.length > 1)
        },
        show: function() {
          return Vb(this, !0)
        },
        hide: function() {
          return Vb(this)
        },
        toggle: function(a) {
          return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
            U(this) ? m(this).show() : m(this).hide()
          })
        }
      });
    
      function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
      }
      m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
          this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
          var a = Zb.propHooks[this.prop];
          return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
          var b, c = Zb.propHooks[this.prop];
          return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
      }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
          get: function(a) {
            var b;
            return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
          },
          set: function(a) {
            m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
          }
        }
      }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
      }, m.easing = {
        linear: function(a) {
          return a
        },
        swing: function(a) {
          return 0.5 - Math.cos(a * Math.PI) / 2
        }
      }, m.fx = Zb.prototype.init, m.fx.step = {};
      var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
          "*": [function(a, b) {
            var c = this.createTween(a, b),
              d = c.cur(),
              e = bc.exec(b),
              f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
              g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
              h = 1,
              i = 20;
            if (g && g[3] !== f) {
              f = f || g[3], e = e || [], g = +d || 1;
              do {
                h = h || ".5", g /= h, m.style(c.elem, a, g + f)
              } while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
          }]
        };
    
      function fc() {
        return setTimeout(function() {
          $b = void 0
        }), $b = m.now()
      }
    
      function gc(a, b) {
        var c, d = {
            height: a
          },
          e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
          c = T[e], d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
      }
    
      function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
          if (d = e[f].call(c, b, a)) {
            return d
          }
        }
      }
    
      function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
          o = {},
          p = a.style,
          q = a.nodeType && U(a),
          r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
          h.unqueued || i()
        }), h.unqueued++, n.always(function() {
          n.always(function() {
            h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
          })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
          p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) {
          if (e = b[d], ac.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
              if ("show" !== e || !r || void 0 === r[d]) {
                continue
              }
              q = !0
            }
            o[d] = r && r[d] || m.style(a, d)
          } else {
            j = void 0
          }
        }
        if (m.isEmptyObject(o)) {
          "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j)
        } else {
          r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
            m(a).hide()
          }), n.done(function() {
            var b;
            m._removeData(a, "fxshow");
            for (b in o) {
              m.style(a, b, o[b])
            }
          });
          for (d in o) {
            g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
          }
        }
      }
    
      function jc(a, b) {
        var c, d, e, f, g;
        for (c in a) {
          if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) {
              c in a || (a[c] = f[c], b[c] = e)
            }
          } else {
            b[d] = e
          }
        }
      }
    
      function kc(a, b, c) {
        var d, e, f = 0,
          g = dc.length,
          h = m.Deferred().always(function() {
            delete i.elem
          }),
          i = function() {
            if (e) {
              return !1
            }
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
              j.tweens[g].run(f)
            }
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
          },
          j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
              specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
              var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
              return j.tweens.push(d), d
            },
            stop: function(b) {
              var c = 0,
                d = b ? j.tweens.length : 0;
              if (e) {
                return this
              }
              for (e = !0; d > c; c++) {
                j.tweens[c].run(1)
              }
              return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
          }),
          k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++) {
          if (d = dc[f].call(j, a, k, j.opts)) {
            return d
          }
        }
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
          elem: a,
          anim: j,
          queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
      }
      m.Animation = m.extend(kc, {
          tweener: function(a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) {
              c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            }
          },
          prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
          }
        }), m.speed = function(a, b, c) {
          var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
          };
          return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
          }, d
        }, m.fn.extend({
          fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
              opacity: b
            }, a, c, d)
          },
          animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a),
              f = m.speed(b, c, d),
              g = function() {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
              };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
          },
          stop: function(a, b, c) {
            var d = function(a) {
              var b = a.stop;
              delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
              var b = !0,
                e = null != a && a + "queueHooks",
                f = m.timers,
                g = m._data(this);
              if (e) {
                g[e] && g[e].stop && d(g[e])
              } else {
                for (e in g) {
                  g[e] && g[e].stop && cc.test(e) && d(g[e])
                }
              }
              for (e = f.length; e--;) {
                f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
              }(b || !c) && m.dequeue(this, a)
            })
          },
          finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
              var b, c = m._data(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = m.timers,
                g = d ? d.length : 0;
              for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
              }
              for (b = 0; g > b; b++) {
                d[b] && d[b].finish && d[b].finish.call(this)
              }
              delete c.finish
            })
          }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
          var c = m.fn[b];
          m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
          }
        }), m.each({
          slideDown: gc("show"),
          slideUp: gc("hide"),
          slideToggle: gc("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, function(a, b) {
          m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
          }
        }), m.timers = [], m.fx.tick = function() {
          var a, b = m.timers,
            c = 0;
          for ($b = m.now(); c < b.length; c++) {
            a = b[c], a() || b[c] !== a || b.splice(c--, 1)
          }
          b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) {
          m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
          _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
          clearInterval(_b), _b = null
        }, m.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, m.fn.delay = function(a, b) {
          return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
              clearTimeout(d)
            }
          })
        },
        function() {
          var a, b, c, d, e;
          b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
      var lc = /\r/g;
      m.fn.extend({
        val: function(a) {
          var b, c, d, e = this[0];
          if (arguments.length) {
            return d = m.isFunction(a), this.each(function(c) {
              var e;
              1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                return null == a ? "" : a + ""
              })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })
          }
          if (e) {
            return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
          }
        }
      }), m.extend({
        valHooks: {
          option: {
            get: function(a) {
              var b = m.find.attr(a, "value");
              return null != b ? b : m.trim(m.text(a))
            }
          },
          select: {
            get: function(a) {
              for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                  if (b = m(c).val(), f) {
                    return b
                  }
                  g.push(b)
                }
              }
              return g
            },
            set: function(a, b) {
              var c, d, e = a.options,
                f = m.makeArray(b),
                g = e.length;
              while (g--) {
                if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) {
                  try {
                    d.selected = c = !0
                  } catch (h) {
                    d.scrollHeight
                  }
                } else {
                  d.selected = !1
                }
              }
              return c || (a.selectedIndex = -1), e
            }
          }
        }
      }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
          set: function(a, b) {
            return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
          }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
          return null === a.getAttribute("value") ? "on" : a.value
        })
      });
      var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
      m.fn.extend({
        attr: function(a, b) {
          return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
          return this.each(function() {
            m.removeAttr(this, a)
          })
        }
      }), m.extend({
        attr: function(a, b, c) {
          var d, e, f = a.nodeType;
          if (a && 3 !== f && 8 !== f && 2 !== f) {
            return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
          }
        },
        removeAttr: function(a, b) {
          var c, d, e = 0,
            f = b && b.match(E);
          if (f && 1 === a.nodeType) {
            while (c = f[e++]) {
              d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
            }
          }
        },
        attrHooks: {
          type: {
            set: function(a, b) {
              if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                var c = a.value;
                return a.setAttribute("type", b), c && (a.value = c), b
              }
            }
          }
        }
      }), nc = {
        set: function(a, b, c) {
          return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
      }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
          var e, f;
          return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
          return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
      }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
          return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
      }), qc || (mc = {
        set: function(a, b, c) {
          var d = a.getAttributeNode(c);
          return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
      }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
      }, m.valHooks.button = {
        get: function(a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0
        },
        set: mc.set
      }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
          mc.set(a, "" === b ? !1 : b, c)
        }
      }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
          set: function(a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
          }
        }
      })), k.style || (m.attrHooks.style = {
        get: function(a) {
          return a.style.cssText || void 0
        },
        set: function(a, b) {
          return a.style.cssText = b + ""
        }
      });
      var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
      m.fn.extend({
        prop: function(a, b) {
          return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
          return a = m.propFix[a] || a, this.each(function() {
            try {
              this[a] = void 0, delete this[a]
            } catch (b) {}
          })
        }
      }), m.extend({
        propFix: {
          "for": "htmlFor",
          "class": "className"
        },
        prop: function(a, b, c) {
          var d, e, f, g = a.nodeType;
          if (a && 3 !== g && 8 !== g && 2 !== g) {
            return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
          }
        },
        propHooks: {
          tabIndex: {
            get: function(a) {
              var b = m.find.attr(a, "tabindex");
              return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
            }
          }
        }
      }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
          get: function(a) {
            return a.getAttribute(b, 4)
          }
        }
      }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
          var b = a.parentNode;
          return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
      }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
      }), k.enctype || (m.propFix.enctype = "encoding");
      var uc = /[\t\r\n\f]/g;
      m.fn.extend({
        addClass: function(a) {
          var b, c, d, e, f, g, h = 0,
            i = this.length,
            j = "string" == typeof a && a;
          if (m.isFunction(a)) {
            return this.each(function(b) {
              m(this).addClass(a.call(this, b, this.className))
            })
          }
          if (j) {
            for (b = (a || "").match(E) || []; i > h; h++) {
              if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                f = 0;
                while (e = b[f++]) {
                  d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                }
                g = m.trim(d), c.className !== g && (c.className = g)
              }
            }
          }
          return this
        },
        removeClass: function(a) {
          var b, c, d, e, f, g, h = 0,
            i = this.length,
            j = 0 === arguments.length || "string" == typeof a && a;
          if (m.isFunction(a)) {
            return this.each(function(b) {
              m(this).removeClass(a.call(this, b, this.className))
            })
          }
          if (j) {
            for (b = (a || "").match(E) || []; i > h; h++) {
              if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                f = 0;
                while (e = b[f++]) {
                  while (d.indexOf(" " + e + " ") >= 0) {
                    d = d.replace(" " + e + " ", " ")
                  }
                }
                g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
              }
            }
          }
          return this
        },
        toggleClass: function(a, b) {
          var c = typeof a;
          return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
            m(this).toggleClass(a.call(this, c, this.className, b), b)
          } : function() {
            if ("string" === c) {
              var b, d = 0,
                e = m(this),
                f = a.match(E) || [];
              while (b = f[d++]) {
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
              }
            } else {
              (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            }
          })
        },
        hasClass: function(a) {
          for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
            if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) {
              return !0
            }
          }
          return !1
        }
      }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
          return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
      }), m.fn.extend({
        hover: function(a, b) {
          return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
          return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
          return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
          return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
          return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
      });
      var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
      m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) {
          return a.JSON.parse(b + "")
        }
        var c, d = null,
          e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
          return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
      }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) {
          return null
        }
        try {
          a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
          c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
      };
      var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
      try {
        zc = location.href
      } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
      }
      yc = Gc.exec(zc.toLowerCase()) || [];
    
      function Lc(a) {
        return function(b, c) {
          "string" != typeof b && (c = b, b = "*");
          var d, e = 0,
            f = b.toLowerCase().match(E) || [];
          if (m.isFunction(c)) {
            while (d = f[e++]) {
              "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
          }
        }
      }
    
      function Mc(a, b, c, d) {
        var e = {},
          f = a === Ic;
    
        function g(h) {
          var i;
          return e[h] = !0, m.each(a[h] || [], function(a, h) {
            var j = h(b, c, d);
            return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
          }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
      }
    
      function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) {
          void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
        }
        return c && m.extend(!0, a, c), a
      }
    
      function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
          i = a.dataTypes;
        while ("*" === i[0]) {
          i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (e) {
          for (g in h) {
            if (h[g] && h[g].test(e)) {
              i.unshift(g);
              break
            }
          }
        }
        if (i[0] in c) {
          f = i[0]
        } else {
          for (g in c) {
            if (!i[0] || a.converters[g + " " + i[0]]) {
              f = g;
              break
            }
            d || (d = g)
          }
          f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
      }
    
      function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
          k = a.dataTypes.slice();
        if (k[1]) {
          for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g]
          }
        }
        f = k.shift();
        while (f) {
          if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
            if ("*" === f) {
              f = i
            } else {
              if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) {
                  for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                      g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                      break
                    }
                  }
                }
                if (g !== !0) {
                  if (g && a["throws"]) {
                    b = g(b)
                  } else {
                    try {
                      b = g(b)
                    } catch (l) {
                      return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                      }
                    }
                  }
                }
              }
            }
          }
        }
        return {
          state: "success",
          data: b
        }
      }
      m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: zc,
          type: "GET",
          isLocal: Dc.test(yc[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Jc,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /xml/,
            html: /html/,
            json: /json/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": m.parseJSON,
            "text xml": m.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function(a, b) {
          return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
          "object" == typeof a && (b = a, a = void 0), b = b || {};
          var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
            l = k.context || k,
            n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
            o = m.Deferred(),
            p = m.Callbacks("once memory"),
            q = k.statusCode || {},
            r = {},
            s = {},
            t = 0,
            u = "canceled",
            v = {
              readyState: 0,
              getResponseHeader: function(a) {
                var b;
                if (2 === t) {
                  if (!j) {
                    j = {};
                    while (b = Cc.exec(f)) {
                      j[b[1].toLowerCase()] = b[2]
                    }
                  }
                  b = j[a.toLowerCase()]
                }
                return null == b ? null : b
              },
              getAllResponseHeaders: function() {
                return 2 === t ? f : null
              },
              setRequestHeader: function(a, b) {
                var c = a.toLowerCase();
                return t || (a = s[c] = s[c] || a, r[a] = b), this
              },
              overrideMimeType: function(a) {
                return t || (k.mimeType = a), this
              },
              statusCode: function(a) {
                var b;
                if (a) {
                  if (2 > t) {
                    for (b in a) {
                      q[b] = [q[b], a[b]]
                    }
                  } else {
                    v.always(a[v.status])
                  }
                }
                return this
              },
              abort: function(a) {
                var b = a || u;
                return i && i.abort(b), x(0, b), this
              }
            };
          if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) {
            return v
          }
          h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
          for (d in k.headers) {
            v.setRequestHeader(d, k.headers[d])
          }
          if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
            return v.abort()
          }
          u = "abort";
          for (d in {
              success: 1,
              error: 1,
              complete: 1
            }) {
            v[d](k[d])
          }
          if (i = Mc(Ic, k, b, v)) {
            v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
              v.abort("timeout")
            }, k.timeout));
            try {
              t = 1, i.send(r, x)
            } catch (w) {
              if (!(2 > t)) {
                throw w
              }
              x(-1, w)
            }
          } else {
            x(-1, "No Transport")
          }
    
          function x(a, b, c, d) {
            var j, r, s, u, w, x = b;
            2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
          }
          return v
        },
        getJSON: function(a, b, c) {
          return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
          return m.get(a, void 0, b, "script")
        }
      }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
          return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
            url: a,
            type: b,
            dataType: e,
            data: c,
            success: d
          })
        }
      }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
          return this.on(b, a)
        }
      }), m._evalUrl = function(a) {
        return m.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          "throws": !0
        })
      }, m.fn.extend({
        wrapAll: function(a) {
          if (m.isFunction(a)) {
            return this.each(function(b) {
              m(this).wrapAll(a.call(this, b))
            })
          }
          if (this[0]) {
            var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
              var a = this;
              while (a.firstChild && 1 === a.firstChild.nodeType) {
                a = a.firstChild
              }
              return a
            }).append(this)
          }
          return this
        },
        wrapInner: function(a) {
          return this.each(m.isFunction(a) ? function(b) {
            m(this).wrapInner(a.call(this, b))
          } : function() {
            var b = m(this),
              c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
          })
        },
        wrap: function(a) {
          var b = m.isFunction(a);
          return this.each(function(c) {
            m(this).wrapAll(b ? a.call(this, c) : a)
          })
        },
        unwrap: function() {
          return this.parent().each(function() {
            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
          }).end()
        }
      }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
      }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
      };
      var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;
    
      function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) {
          m.each(b, function(b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
          })
        } else {
          if (c || "object" !== m.type(b)) {
            d(a, b)
          } else {
            for (e in b) {
              Vc(a + "[" + e + "]", b[e], c, d)
            }
          }
        }
      }
      m.param = function(a, b) {
        var c, d = [],
          e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
          };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) {
          m.each(a, function() {
            e(this.name, this.value)
          })
        } else {
          for (c in a) {
            Vc(c, a[c], b, e)
          }
        }
        return d.join("&").replace(Qc, "+")
      }, m.fn.extend({
        serialize: function() {
          return m.param(this.serializeArray())
        },
        serializeArray: function() {
          return this.map(function() {
            var a = m.prop(this, "elements");
            return a ? m.makeArray(a) : this
          }).filter(function() {
            var a = this.type;
            return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
          }).map(function(a, b) {
            var c = m(this).val();
            return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
              return {
                name: b.name,
                value: a.replace(Sc, "\r\n")
              }
            }) : {
              name: b.name,
              value: c.replace(Sc, "\r\n")
            }
          }).get()
        }
      }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
      } : Zc;
      var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
      a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc) {
          Xc[a](void 0, !0)
        }
      }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
          var b;
          return {
            send: function(c, d) {
              var e, f = a.xhr(),
                g = ++Wc;
              if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                for (e in a.xhrFields) {
                  f[e] = a.xhrFields[e]
                }
              }
              a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) {
                void 0 !== c[e] && f.setRequestHeader(e, c[e] + "")
              }
              f.send(a.hasContent && a.data || null), b = function(c, e) {
                var h, i, j;
                if (b && (e || 4 === f.readyState)) {
                  if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) {
                    4 !== f.readyState && f.abort()
                  } else {
                    j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                    try {
                      i = f.statusText
                    } catch (k) {
                      i = ""
                    }
                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                  }
                }
                j && d(h, i, j, f.getAllResponseHeaders())
              }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
            },
            abort: function() {
              b && b(void 0, !0)
            }
          }
        }
      });
    
      function Zc() {
        try {
          return new a.XMLHttpRequest
        } catch (b) {}
      }
    
      function $c() {
        try {
          return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
      }
      m.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /(?:java|ecma)script/
        },
        converters: {
          "text script": function(a) {
            return m.globalEval(a), a
          }
        }
      }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
      }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
          var b, c = y.head || m("head")[0] || y.documentElement;
          return {
            send: function(d, e) {
              b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
              }, c.insertBefore(b, c.firstChild)
            },
            abort: function() {
              b && b.onload(void 0, !0)
            }
          }
        }
      });
      var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
      m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var a = _c.pop() || m.expando + "_" + vc++;
          return this[a] = !0, a
        }
      }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
          return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
          g = arguments
        }, d.always(function() {
          a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
      }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
          return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
          e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
      };
      var bd = m.fn.load;
      m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) {
          return bd.apply(this, arguments)
        }
        var d, e, f, g = this,
          h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
          url: a,
          type: f,
          dataType: "html",
          data: b
        }).done(function(a) {
          e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
          g.each(c, e || [a.responseText, b, a])
        }), this
      }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
          return a === b.elem
        }).length
      };
      var cd = a.document.documentElement;
    
      function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
      }
      m.offset = {
        setOffset: function(a, b, c) {
          var d, e, f, g, h, i, j, k = m.css(a, "position"),
            l = m(a),
            n = {};
          "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
      }, m.fn.extend({
        offset: function(a) {
          if (arguments.length) {
            return void 0 === a ? this : this.each(function(b) {
              m.offset.setOffset(this, a, b)
            })
          }
          var b, c, d = {
              top: 0,
              left: 0
            },
            e = this[0],
            f = e && e.ownerDocument;
          if (f) {
            return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
              top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
              left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
          }
        },
        position: function() {
          if (this[0]) {
            var a, b, c = {
                top: 0,
                left: 0
              },
              d = this[0];
            return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
              top: b.top - c.top - m.css(d, "marginTop", !0),
              left: b.left - c.left - m.css(d, "marginLeft", !0)
            }
          }
        },
        offsetParent: function() {
          return this.map(function() {
            var a = this.offsetParent || cd;
            while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
              a = a.offsetParent
            }
            return a || cd
          })
        }
      }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
          return V(this, function(a, d, e) {
            var f = dd(a);
            return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
          }, a, d, arguments.length, null)
        }
      }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
          return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
      }), m.each({
        Height: "height",
        Width: "width"
      }, function(a, b) {
        m.each({
          padding: "inner" + a,
          content: b,
          "": "outer" + a
        }, function(c, d) {
          m.fn[d] = function(d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return V(this, function(b, c, d) {
              var e;
              return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
            }, b, f ? d : void 0, f, null)
          }
        })
      }), m.fn.size = function() {
        return this.length
      }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
      });
      var ed = a.jQuery,
        fd = a.$;
      return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
      }, typeof b === K && (a.jQuery = a.$ = m), m
    });
    /*!
      * Bootstrap v3.3.1 (http://getbootstrap.com)
      * Copyright 2011-2014 Twitter, Inc.
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      */
    /*!
      * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=ca051c7793d36c66af70)
      * Config saved to config.json and https://gist.github.com/ca051c7793d36c66af70
      */
    if ("undefined" == typeof jQuery) {
      throw new Error("Bootstrap's JavaScript requires jQuery")
    } + function(a) {
      var b = a.fn.jquery.split(" ")[0].split(".");
      if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
      }
    }(jQuery), + function(b) {
      function f(h) {
        return this.each(function() {
          var e = b(this),
            j = e.data("bs.alert");
          j || e.data("bs.alert", j = new g(this)), "string" == typeof h && j[h].call(e)
        })
      }
      var a = '[data-dismiss="alert"]',
        g = function(h) {
          b(h).on("click", a, this.close)
        };
      g.VERSION = "3.3.1", g.TRANSITION_DURATION = 150, g.prototype.close = function(l) {
        function j() {
          h.detach().trigger("closed.bs.alert").remove()
        }
        var k = b(this),
          m = k.attr("data-target");
        m || (m = k.attr("href"), m = m && m.replace(/.*(?=#[^\s]*$)/, ""));
        var h = b(m);
        l && l.preventDefault(), h.length || (h = k.closest(".alert")), h.trigger(l = b.Event("close.bs.alert")), l.isDefaultPrevented() || (h.removeClass("in"), b.support.transition && h.hasClass("fade") ? h.one("bsTransitionEnd", j).emulateTransitionEnd(g.TRANSITION_DURATION) : j())
      };
      var c = b.fn.alert;
      b.fn.alert = f, b.fn.alert.Constructor = g, b.fn.alert.noConflict = function() {
        return b.fn.alert = c, this
      }, b(document).on("click.bs.alert.data-api", a, g.prototype.close)
    }(jQuery), + function(b) {
      function c(g) {
        return this.each(function() {
          var h = b(this),
            e = h.data("bs.button"),
            j = "object" == typeof g && g;
          e || h.data("bs.button", e = new a(this, j)), "toggle" == g ? e.toggle() : g && e.setState(g)
        })
      }
      var a = function(g, h) {
        this.$element = b(g), this.options = b.extend({}, a.DEFAULTS, h), this.isLoading = !1
      };
      a.VERSION = "3.3.1", a.DEFAULTS = {
        loadingText: "loading..."
      }, a.prototype.setState = function(j) {
        var g = "disabled",
          k = this.$element,
          h = k.is("input") ? "val" : "html",
          l = k.data();
        j += "Text", null == l.resetText && k.data("resetText", k[h]()), setTimeout(b.proxy(function() {
          k[h](null == l[j] ? this.options[j] : l[j]), "loadingText" == j ? (this.isLoading = !0, k.addClass(g).attr(g, g)) : this.isLoading && (this.isLoading = !1, k.removeClass(g).removeAttr(g))
        }, this), 0)
      }, a.prototype.toggle = function() {
        var h = !0,
          j = this.$element.closest('[data-toggle="buttons"]');
        if (j.length) {
          var g = this.$element.find("input");
          "radio" == g.prop("type") && (g.prop("checked") && this.$element.hasClass("active") ? h = !1 : j.find(".active").removeClass("active")), h && g.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else {
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"))
        }
        h && this.$element.toggleClass("active")
      };
      var f = b.fn.button;
      b.fn.button = c, b.fn.button.Constructor = a, b.fn.button.noConflict = function() {
        return b.fn.button = f, this
      }, b(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var g = b(e.target);
        g.hasClass("btn") || (g = g.closest(".btn")), c.call(g, "toggle"), e.preventDefault()
      }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(g) {
        b(g.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(g.type))
      })
    }(jQuery), + function(b) {
      function f(h) {
        return this.each(function() {
          var k = b(this),
            j = k.data("bs.carousel"),
            l = b.extend({}, a.DEFAULTS, k.data(), "object" == typeof h && h),
            e = "string" == typeof h ? h : l.slide;
          j || k.data("bs.carousel", j = new a(this, l)), "number" == typeof h ? j.to(h) : e ? j[e]() : l.interval && j.pause().cycle()
        })
      }
      var a = function(j, h) {
        this.$element = b(j), this.$indicators = this.$element.find(".carousel-indicators"), this.options = h, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", b.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", b.proxy(this.pause, this)).on("mouseleave.bs.carousel", b.proxy(this.cycle, this))
      };
      a.VERSION = "3.3.1", a.TRANSITION_DURATION = 600, a.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: !0,
        keyboard: !0
      }, a.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
          switch (e.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return
          }
          e.preventDefault()
        }
      }, a.prototype.cycle = function(h) {
        return h || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval)), this
      }, a.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
      }, a.prototype.getItemForDirection = function(j, l) {
        var h = "prev" == j ? -1 : 1,
          m = this.getItemIndex(l),
          k = (m + h) % this.$items.length;
        return this.$items.eq(k)
      }, a.prototype.to = function(j) {
        var k = this,
          h = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return j > this.$items.length - 1 || 0 > j ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
          k.to(j)
        }) : h == j ? this.pause().cycle() : this.slide(j > h ? "next" : "prev", this.$items.eq(j))
      }, a.prototype.pause = function(h) {
        return h || (this.paused = !0), this.$element.find(".next, .prev").length && b.support.transition && (this.$element.trigger(b.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
      }, a.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
      }, a.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
      }, a.prototype.slide = function(w, m) {
        var A = this.$element.find(".item.active"),
          q = m || this.getItemForDirection(w, A),
          z = this.interval,
          j = "next" == w ? "left" : "right",
          t = "next" == w ? "first" : "last",
          u = this;
        if (!q.length) {
          if (!this.options.wrap) {
            return
          }
          q = this.$element.find(".item")[t]()
        }
        if (q.hasClass("active")) {
          return this.sliding = !1
        }
        var x = q[0],
          k = b.Event("slide.bs.carousel", {
            relatedTarget: x,
            direction: j
          });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
          if (this.sliding = !0, z && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var y = b(this.$indicators.children()[this.getItemIndex(q)]);
            y && y.addClass("active")
          }
          var v = b.Event("slid.bs.carousel", {
            relatedTarget: x,
            direction: j
          });
          return b.support.transition && this.$element.hasClass("slide") ? (q.addClass(w), q[0].offsetWidth, A.addClass(j), q.addClass(j), A.one("bsTransitionEnd", function() {
            q.removeClass([w, j].join(" ")).addClass("active"), A.removeClass(["active", j].join(" ")), u.sliding = !1, setTimeout(function() {
              u.$element.trigger(v)
            }, 0)
          }).emulateTransitionEnd(a.TRANSITION_DURATION)) : (A.removeClass("active"), q.addClass("active"), this.sliding = !1, this.$element.trigger(v)), z && this.cycle(), this
        }
      };
      var g = b.fn.carousel;
      b.fn.carousel = f, b.fn.carousel.Constructor = a, b.fn.carousel.noConflict = function() {
        return b.fn.carousel = g, this
      };
      var c = function(h) {
        var l, j = b(this),
          m = b(j.attr("data-target") || (l = j.attr("href")) && l.replace(/.*(?=#[^\s]+$)/, ""));
        if (m.hasClass("carousel")) {
          var e = b.extend({}, m.data(), j.data()),
            k = j.attr("data-slide-to");
          k && (e.interval = !1), f.call(m, e), k && m.data("bs.carousel").to(k), h.preventDefault()
        }
      };
      b(document).on("click.bs.carousel.data-api", "[data-slide]", c).on("click.bs.carousel.data-api", "[data-slide-to]", c), b(window).on("load", function() {
        b('[data-ride="carousel"]').each(function() {
          var e = b(this);
          f.call(e, e.data())
        })
      })
    }(jQuery), + function(f) {
      function j(a) {
        a && 3 === a.which || (f(g).remove(), f(l).each(function() {
          var m = f(this),
            e = c(m),
            p = {
              relatedTarget: this
            };
          e.hasClass("open") && (e.trigger(a = f.Event("hide.bs.dropdown", p)), a.isDefaultPrevented() || (m.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", p)))
        }))
      }
    
      function c(m) {
        var a = m.attr("data-target");
        a || (a = m.attr("href"), a = a && /#[A-Za-z]/.test(a) && a.replace(/.*(?=#[^\s]*$)/, ""));
        var n = a && f(a);
        return n && n.length ? n : m.parent()
      }
    
      function k(a) {
        return this.each(function() {
          var e = f(this),
            m = e.data("bs.dropdown");
          m || e.data("bs.dropdown", m = new b(this)), "string" == typeof a && m[a].call(e)
        })
      }
      var g = ".dropdown-backdrop",
        l = '[data-toggle="dropdown"]',
        b = function(a) {
          f(a).on("click.bs.dropdown", this.toggle)
        };
      b.VERSION = "3.3.1", b.prototype.toggle = function(q) {
        var m = f(this);
        if (!m.is(".disabled, :disabled")) {
          var t = c(m),
            e = t.hasClass("open");
          if (j(), !e) {
            "ontouchstart" in document.documentElement && !t.closest(".navbar-nav").length && f('<div class="dropdown-backdrop"/>').insertAfter(f(this)).on("click", j);
            var p = {
              relatedTarget: this
            };
            if (t.trigger(q = f.Event("show.bs.dropdown", p)), q.isDefaultPrevented()) {
              return
            }
            m.trigger("focus").attr("aria-expanded", "true"), t.toggleClass("open").trigger("shown.bs.dropdown", p)
          }
          return !1
        }
      }, b.prototype.keydown = function(u) {
        if (/(38|40|27|32)/.test(u.which) && !/input|textarea/i.test(u.target.tagName)) {
          var v = f(this);
          if (u.preventDefault(), u.stopPropagation(), !v.is(".disabled, :disabled")) {
            var q = c(v),
              n = q.hasClass("open");
            if (!n && 27 != u.which || n && 27 == u.which) {
              return 27 == u.which && q.find(l).trigger("focus"), v.trigger("click")
            }
            var t = " li:not(.divider):visible a",
              m = q.find('[role="menu"]' + t + ', [role="listbox"]' + t);
            if (m.length) {
              var p = m.index(u.target);
              38 == u.which && p > 0 && p--, 40 == u.which && p < m.length - 1 && p++, ~p || (p = 0), m.eq(p).trigger("focus")
            }
          }
        }
      };
      var h = f.fn.dropdown;
      f.fn.dropdown = k, f.fn.dropdown.Constructor = b, f.fn.dropdown.noConflict = function() {
        return f.fn.dropdown = h, this
      }, f(document).on("click.bs.dropdown.data-api", j).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
      }).on("click.bs.dropdown.data-api", l, b.prototype.toggle).on("keydown.bs.dropdown.data-api", l, b.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', b.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', b.prototype.keydown)
    }(jQuery), + function(b) {
      function c(g, h) {
        return this.each(function() {
          var j = b(this),
            k = j.data("bs.modal"),
            e = b.extend({}, a.DEFAULTS, j.data(), "object" == typeof g && g);
          k || j.data("bs.modal", k = new a(this, e)), "string" == typeof g ? k[g](h) : e.show && k.show(h)
        })
      }
      var a = function(h, g) {
        this.options = g, this.$body = b(document.body), this.$element = b(h), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, b.proxy(function() {
          this.$element.trigger("loaded.bs.modal")
        }, this))
      };
      a.VERSION = "3.3.1", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
      }, a.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
      }, a.prototype.show = function(h) {
        var j = this,
          g = b.Event("show.bs.modal", {
            relatedTarget: h
          });
        this.$element.trigger(g), this.isShown || g.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', b.proxy(this.hide, this)), this.backdrop(function() {
          var e = b.support.transition && j.$element.hasClass("fade");
          j.$element.parent().length || j.$element.appendTo(j.$body), j.$element.show().scrollTop(0), j.options.backdrop && j.adjustBackdrop(), j.adjustDialog(), e && j.$element[0].offsetWidth, j.$element.addClass("in").attr("aria-hidden", !1), j.enforceFocus();
          var k = b.Event("shown.bs.modal", {
            relatedTarget: h
          });
          e ? j.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
            j.$element.trigger("focus").trigger(k)
          }).emulateTransitionEnd(a.TRANSITION_DURATION) : j.$element.trigger("focus").trigger(k)
        }))
      }, a.prototype.hide = function(g) {
        g && g.preventDefault(), g = b.Event("hide.bs.modal"), this.$element.trigger(g), this.isShown && !g.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), b(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), b.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", b.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
      }, a.prototype.enforceFocus = function() {
        b(document).off("focusin.bs.modal").on("focusin.bs.modal", b.proxy(function(e) {
          this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
      }, a.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", b.proxy(function(e) {
          27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
      }, a.prototype.resize = function() {
        this.isShown ? b(window).on("resize.bs.modal", b.proxy(this.handleUpdate, this)) : b(window).off("resize.bs.modal")
      }, a.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
          e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
      }, a.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
      }, a.prototype.backdrop = function(j) {
        var k = this,
          h = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var l = b.support.transition && h;
          if (this.$backdrop = b('<div class="modal-backdrop ' + h + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", b.proxy(function(e) {
              e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), l && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !j) {
            return
          }
          l ? this.$backdrop.one("bsTransitionEnd", j).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : j()
        } else {
          if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
              k.removeBackdrop(), j && j()
            };
            b.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : g()
          } else {
            j && j()
          }
        }
      }, a.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
      }, a.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
      }, a.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
      }, a.prototype.resetAdjustments = function() {
        this.$element.css({
          paddingLeft: "",
          paddingRight: ""
        })
      }, a.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
      }, a.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
      }, a.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
      }, a.prototype.measureScrollbar = function() {
        var g = document.createElement("div");
        g.className = "modal-scrollbar-measure", this.$body.append(g);
        var h = g.offsetWidth - g.clientWidth;
        return this.$body[0].removeChild(g), h
      };
      var f = b.fn.modal;
      b.fn.modal = c, b.fn.modal.Constructor = a, b.fn.modal.noConflict = function() {
        return b.fn.modal = f, this
      }, b(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(g) {
        var j = b(this),
          h = j.attr("href"),
          k = b(j.attr("data-target") || h && h.replace(/.*(?=#[^\s]+$)/, "")),
          e = k.data("bs.modal") ? "toggle" : b.extend({
            remote: !/#/.test(h) && h
          }, k.data(), j.data());
        j.is("a") && g.preventDefault(), k.one("show.bs.modal", function(l) {
          l.isDefaultPrevented() || k.one("hidden.bs.modal", function() {
            j.is(":visible") && j.trigger("focus")
          })
        }), c.call(k, e, this)
      })
    }(jQuery), + function(b) {
      function c(g) {
        return this.each(function() {
          var j = b(this),
            h = j.data("bs.tooltip"),
            k = "object" == typeof g && g,
            e = k && k.selector;
          (h || "destroy" != g) && (e ? (h || j.data("bs.tooltip", h = {}), h[e] || (h[e] = new a(this, k))) : h || j.data("bs.tooltip", h = new a(this, k)), "string" == typeof g && h[g]())
        })
      }
      var a = function(g, h) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", g, h)
      };
      a.VERSION = "3.3.1", a.TRANSITION_DURATION = 150, a.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
          selector: "body",
          padding: 0
        }
      }, a.prototype.init = function(p, j, q) {
        this.enabled = !0, this.type = p, this.$element = b(j), this.options = this.getOptions(q), this.$viewport = this.options.viewport && b(this.options.viewport.selector || this.options.viewport);
        for (var k = this.options.trigger.split(" "), t = k.length; t--;) {
          var h = k[t];
          if ("click" == h) {
            this.$element.on("click." + this.type, this.options.selector, b.proxy(this.toggle, this))
          } else {
            if ("manual" != h) {
              var m = "hover" == h ? "mouseenter" : "focusin",
                g = "hover" == h ? "mouseleave" : "focusout";
              this.$element.on(m + "." + this.type, this.options.selector, b.proxy(this.enter, this)), this.$element.on(g + "." + this.type, this.options.selector, b.proxy(this.leave, this))
            }
          }
        }
        this.options.selector ? this._options = b.extend({}, this.options, {
          trigger: "manual",
          selector: ""
        }) : this.fixTitle()
      }, a.prototype.getDefaults = function() {
        return a.DEFAULTS
      }, a.prototype.getOptions = function(g) {
        return g = b.extend({}, this.getDefaults(), this.$element.data(), g), g.delay && "number" == typeof g.delay && (g.delay = {
          show: g.delay,
          hide: g.delay
        }), g
      }, a.prototype.getDelegateOptions = function() {
        var h = {},
          g = this.getDefaults();
        return this._options && b.each(this._options, function(e, j) {
          g[e] != j && (h[e] = j)
        }), h
      }, a.prototype.enter = function(h) {
        var g = h instanceof this.constructor ? h : b(h.currentTarget).data("bs." + this.type);
        return g && g.$tip && g.$tip.is(":visible") ? void(g.hoverState = "in") : (g || (g = new this.constructor(h.currentTarget, this.getDelegateOptions()), b(h.currentTarget).data("bs." + this.type, g)), clearTimeout(g.timeout), g.hoverState = "in", g.options.delay && g.options.delay.show ? void(g.timeout = setTimeout(function() {
          "in" == g.hoverState && g.show()
        }, g.options.delay.show)) : g.show())
      }, a.prototype.leave = function(h) {
        var g = h instanceof this.constructor ? h : b(h.currentTarget).data("bs." + this.type);
        return g || (g = new this.constructor(h.currentTarget, this.getDelegateOptions()), b(h.currentTarget).data("bs." + this.type, g)), clearTimeout(g.timeout), g.hoverState = "out", g.options.delay && g.options.delay.hide ? void(g.timeout = setTimeout(function() {
          "out" == g.hoverState && g.hide()
        }, g.options.delay.hide)) : g.hide()
      }, a.prototype.show = function() {
        var B = b.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(B);
          var q = b.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
          if (B.isDefaultPrevented() || !q) {
            return
          }
          var H = this,
            t = this.tip(),
            E = this.getUID(this.type);
          this.setContent(), t.attr("id", E), this.$element.attr("aria-describedby", E), this.options.animation && t.addClass("fade");
          var j = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement,
            x = /\s?auto?\s?/i,
            y = x.test(j);
          y && (j = j.replace(x, "") || "top"), t.detach().css({
            top: 0,
            left: 0,
            display: "block"
          }).addClass(j).data("bs." + this.type, this), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element);
          var C = this.getPosition(),
            k = t[0].offsetWidth,
            D = t[0].offsetHeight;
          if (y) {
            var A = j,
              G = this.options.container ? b(this.options.container) : this.$element.parent(),
              z = this.getPosition(G);
            j = "bottom" == j && C.bottom + D > z.bottom ? "top" : "top" == j && C.top - D < z.top ? "bottom" : "right" == j && C.right + k > z.width ? "left" : "left" == j && C.left - k < z.left ? "right" : j, t.removeClass(A).addClass(j)
          }
          var F = this.getCalculatedOffset(j, C, k, D);
          this.applyPlacement(F, j);
          var w = function() {
            var e = H.hoverState;
            H.$element.trigger("shown.bs." + H.type), H.hoverState = null, "out" == e && H.leave(H)
          };
          b.support.transition && this.$tip.hasClass("fade") ? t.one("bsTransitionEnd", w).emulateTransitionEnd(a.TRANSITION_DURATION) : w()
        }
      }, a.prototype.applyPlacement = function(w, t) {
        var k = this.tip(),
          A = k[0].offsetWidth,
          m = k[0].offsetHeight,
          z = parseInt(k.css("margin-top"), 10),
          g = parseInt(k.css("margin-left"), 10);
        isNaN(z) && (z = 0), isNaN(g) && (g = 0), w.top = w.top + z, w.left = w.left + g, b.offset.setOffset(k[0], b.extend({
          using: function(e) {
            k.css({
              top: Math.round(e.top),
              left: Math.round(e.left)
            })
          }
        }, w), 0), k.addClass("in");
        var q = k[0].offsetWidth,
          u = k[0].offsetHeight;
        "top" == t && u != m && (w.top = w.top + m - u);
        var x = this.getViewportAdjustedDelta(t, w, q, u);
        x.left ? w.left += x.left : w.top += x.top;
        var j = /top|bottom/.test(t),
          y = j ? 2 * x.left - A + q : 2 * x.top - m + u,
          v = j ? "offsetWidth" : "offsetHeight";
        k.offset(w), this.replaceArrow(y, k[0][v], j)
      }, a.prototype.replaceArrow = function(h, j, g) {
        this.arrow().css(g ? "left" : "top", 50 * (1 - h / j) + "%").css(g ? "top" : "left", "")
      }, a.prototype.setContent = function() {
        var g = this.tip(),
          h = this.getTitle();
        g.find(".tooltip-inner")[this.options.html ? "html" : "text"](h), g.removeClass("fade in top bottom left right")
      }, a.prototype.hide = function(j) {
        function k() {
          "in" != h.hoverState && l.detach(), h.$element.removeAttr("aria-describedby").trigger("hidden.bs." + h.type), j && j()
        }
        var h = this,
          l = this.tip(),
          g = b.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (l.removeClass("in"), b.support.transition && this.$tip.hasClass("fade") ? l.one("bsTransitionEnd", k).emulateTransitionEnd(a.TRANSITION_DURATION) : k(), this.hoverState = null, this)
      }, a.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
      }, a.prototype.hasContent = function() {
        return this.getTitle()
      }, a.prototype.getPosition = function(l) {
        l = l || this.$element;
        var h = l[0],
          m = "BODY" == h.tagName,
          j = h.getBoundingClientRect();
        null == j.width && (j = b.extend({}, j, {
          width: j.right - j.left,
          height: j.bottom - j.top
        }));
        var p = m ? {
            top: 0,
            left: 0
          } : l.offset(),
          g = {
            scroll: m ? document.documentElement.scrollTop || document.body.scrollTop : l.scrollTop()
          },
          k = m ? {
            width: b(window).width(),
            height: b(window).height()
          } : null;
        return b.extend({}, j, g, k, p)
      }, a.prototype.getCalculatedOffset = function(h, j, g, k) {
        return "bottom" == h ? {
          top: j.top + j.height,
          left: j.left + j.width / 2 - g / 2
        } : "top" == h ? {
          top: j.top - k,
          left: j.left + j.width / 2 - g / 2
        } : "left" == h ? {
          top: j.top + j.height / 2 - k / 2,
          left: j.left - g
        } : {
          top: j.top + j.height / 2 - k / 2,
          left: j.left + j.width
        }
      }, a.prototype.getViewportAdjustedDelta = function(x, u, p, j) {
        var y = {
          top: 0,
          left: 0
        };
        if (!this.$viewport) {
          return y
        }
        var k = this.options.viewport && this.options.viewport.padding || 0,
          w = this.getPosition(this.$viewport);
        if (/right|left/.test(x)) {
          var g = u.top - k - w.scroll,
            m = u.top + k - w.scroll + j;
          g < w.top ? y.top = w.top - g : m > w.top + w.height && (y.top = w.top + w.height - m)
        } else {
          var q = u.left - k,
            v = u.left + k + p;
          q < w.left ? y.left = w.left - q : v > w.width && (y.left = w.left + w.width - v)
        }
        return y
      }, a.prototype.getTitle = function() {
        var h, j = this.$element,
          g = this.options;
        return h = j.attr("data-original-title") || ("function" == typeof g.title ? g.title.call(j[0]) : g.title)
      }, a.prototype.getUID = function(e) {
        do {
          e += ~~(1000000 * Math.random())
        } while (document.getElementById(e));
        return e
      }, a.prototype.tip = function() {
        return this.$tip = this.$tip || b(this.options.template)
      }, a.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
      }, a.prototype.enable = function() {
        this.enabled = !0
      }, a.prototype.disable = function() {
        this.enabled = !1
      }, a.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
      }, a.prototype.toggle = function(h) {
        var g = this;
        h && (g = b(h.currentTarget).data("bs." + this.type), g || (g = new this.constructor(h.currentTarget, this.getDelegateOptions()), b(h.currentTarget).data("bs." + this.type, g))), g.tip().hasClass("in") ? g.leave(g) : g.enter(g)
      }, a.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
          e.$element.off("." + e.type).removeData("bs." + e.type)
        })
      };
      var f = b.fn.tooltip;
      b.fn.tooltip = c, b.fn.tooltip.Constructor = a, b.fn.tooltip.noConflict = function() {
        return b.fn.tooltip = f, this
      }
    }(jQuery), + function(b) {
      function c(g) {
        return this.each(function() {
          var j = b(this),
            h = j.data("bs.popover"),
            k = "object" == typeof g && g,
            e = k && k.selector;
          (h || "destroy" != g) && (e ? (h || j.data("bs.popover", h = {}), h[e] || (h[e] = new a(this, k))) : h || j.data("bs.popover", h = new a(this, k)), "string" == typeof g && h[g]())
        })
      }
      var a = function(g, h) {
        this.init("popover", g, h)
      };
      if (!b.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
      }
      a.VERSION = "3.3.1", a.DEFAULTS = b.extend({}, b.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      }), a.prototype = b.extend({}, b.fn.tooltip.Constructor.prototype), a.prototype.constructor = a, a.prototype.getDefaults = function() {
        return a.DEFAULTS
      }, a.prototype.setContent = function() {
        var h = this.tip(),
          j = this.getTitle(),
          g = this.getContent();
        h.find(".popover-title")[this.options.html ? "html" : "text"](j), h.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof g ? "html" : "append" : "text"](g), h.removeClass("fade top bottom left right in"), h.find(".popover-title").html() || h.find(".popover-title").hide()
      }, a.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
      }, a.prototype.getContent = function() {
        var g = this.$element,
          h = this.options;
        return g.attr("data-content") || ("function" == typeof h.content ? h.content.call(g[0]) : h.content)
      }, a.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
      }, a.prototype.tip = function() {
        return this.$tip || (this.$tip = b(this.options.template)), this.$tip
      };
      var f = b.fn.popover;
      b.fn.popover = c, b.fn.popover.Constructor = a, b.fn.popover.noConflict = function() {
        return b.fn.popover = f, this
      }
    }(jQuery), + function(b) {
      function f(h) {
        return this.each(function() {
          var j = b(this),
            e = j.data("bs.tab");
          e || j.data("bs.tab", e = new a(this)), "string" == typeof h && e[h]()
        })
      }
      var a = function(h) {
        this.element = b(h)
      };
      a.VERSION = "3.3.1", a.TRANSITION_DURATION = 150, a.prototype.show = function() {
        var m = this.element,
          j = m.closest("ul:not(.dropdown-menu)"),
          p = m.data("target");
        if (p || (p = m.attr("href"), p = p && p.replace(/.*(?=#[^\s]*$)/, "")), !m.parent("li").hasClass("active")) {
          var k = j.find(".active:last a"),
            q = b.Event("hide.bs.tab", {
              relatedTarget: m[0]
            }),
            h = b.Event("show.bs.tab", {
              relatedTarget: k[0]
            });
          if (k.trigger(q), m.trigger(h), !h.isDefaultPrevented() && !q.isDefaultPrevented()) {
            var l = b(p);
            this.activate(m.closest("li"), j), this.activate(l, l.parent(), function() {
              k.trigger({
                type: "hidden.bs.tab",
                relatedTarget: m[0]
              }), m.trigger({
                type: "shown.bs.tab",
                relatedTarget: k[0]
              })
            })
          }
        }
      }, a.prototype.activate = function(l, m, j) {
        function p() {
          h.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), l.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), k ? (l[0].offsetWidth, l.addClass("in")) : l.removeClass("fade"), l.parent(".dropdown-menu") && l.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), j && j()
        }
        var h = m.find("> .active"),
          k = j && b.support.transition && (h.length && h.hasClass("fade") || !!m.find("> .fade").length);
        h.length && k ? h.one("bsTransitionEnd", p).emulateTransitionEnd(a.TRANSITION_DURATION) : p(), h.removeClass("in")
      };
      var g = b.fn.tab;
      b.fn.tab = f, b.fn.tab.Constructor = a, b.fn.tab.noConflict = function() {
        return b.fn.tab = g, this
      };
      var c = function(e) {
        e.preventDefault(), f.call(b(this), "show")
      };
      b(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', c).on("click.bs.tab.data-api", '[data-toggle="pill"]', c)
    }(jQuery), + function(b) {
      function c(g) {
        return this.each(function() {
          var h = b(this),
            e = h.data("bs.affix"),
            j = "object" == typeof g && g;
          e || h.data("bs.affix", e = new a(this, j)), "string" == typeof g && e[g]()
        })
      }
      var a = function(g, h) {
        this.options = b.extend({}, a.DEFAULTS, h), this.$target = b(this.options.target).on("scroll.bs.affix.data-api", b.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", b.proxy(this.checkPositionWithEventLoop, this)), this.$element = b(g), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
      };
      a.VERSION = "3.3.1", a.RESET = "affix affix-top affix-bottom", a.DEFAULTS = {
        offset: 0,
        target: window
      }, a.prototype.getState = function(w, u, p, j) {
        var x = this.$target.scrollTop(),
          k = this.$element.offset(),
          v = this.$target.height();
        if (null != p && "top" == this.affixed) {
          return p > x ? "top" : !1
        }
        if ("bottom" == this.affixed) {
          return null != p ? x + this.unpin <= k.top ? !1 : "bottom" : w - j >= x + v ? !1 : "bottom"
        }
        var g = null == this.affixed,
          m = g ? x : k.top,
          q = g ? v : u;
        return null != p && p >= m ? "top" : null != j && m + q >= w - j ? "bottom" : !1
      }, a.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) {
          return this.pinnedOffset
        }
        this.$element.removeClass(a.RESET).addClass("affix");
        var g = this.$target.scrollTop(),
          h = this.$element.offset();
        return this.pinnedOffset = h.top - g
      }, a.prototype.checkPositionWithEventLoop = function() {
        setTimeout(b.proxy(this.checkPosition, this), 1)
      }, a.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
          var q = this.$element.height(),
            t = this.options.offset,
            m = t.top,
            u = t.bottom,
            j = b("body").height();
          "object" != typeof t && (u = m = t), "function" == typeof m && (m = t.top(this.$element)), "function" == typeof u && (u = t.bottom(this.$element));
          var p = this.getState(j, q, m, u);
          if (this.affixed != p) {
            null != this.unpin && this.$element.css("top", "");
            var g = "affix" + (p ? "-" + p : ""),
              k = b.Event(g + ".bs.affix");
            if (this.$element.trigger(k), k.isDefaultPrevented()) {
              return
            }
            this.affixed = p, this.unpin = "bottom" == p ? this.getPinnedOffset() : null, this.$element.removeClass(a.RESET).addClass(g).trigger(g.replace("affix", "affixed") + ".bs.affix")
          }
          "bottom" == p && this.$element.offset({
            top: j - q - u
          })
        }
      };
      var f = b.fn.affix;
      b.fn.affix = c, b.fn.affix.Constructor = a, b.fn.affix.noConflict = function() {
        return b.fn.affix = f, this
      }, b(window).on("load", function() {
        b('[data-spy="affix"]').each(function() {
          var e = b(this),
            g = e.data();
          g.offset = g.offset || {}, null != g.offsetBottom && (g.offset.bottom = g.offsetBottom), null != g.offsetTop && (g.offset.top = g.offsetTop), c.call(e, g)
        })
      })
    }(jQuery), + function(b) {
      function f(j) {
        var h, k = j.attr("data-target") || (h = j.attr("href")) && h.replace(/.*(?=#[^\s]+$)/, "");
        return b(k)
      }
    
      function a(h) {
        return this.each(function() {
          var e = b(this),
            j = e.data("bs.collapse"),
            k = b.extend({}, g.DEFAULTS, e.data(), "object" == typeof h && h);
          !j && k.toggle && "show" == h && (k.toggle = !1), j || e.data("bs.collapse", j = new g(this, k)), "string" == typeof h && j[h]()
        })
      }
      var g = function(j, h) {
        this.$element = b(j), this.options = b.extend({}, g.DEFAULTS, h), this.$trigger = b(this.options.trigger).filter('[href="#' + j.id + '"], [data-target="#' + j.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
      };
      g.VERSION = "3.3.1", g.TRANSITION_DURATION = 350, g.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
      }, g.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
      }, g.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var o, k = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
          if (!(k && k.length && (o = k.data("bs.collapse"), o && o.transitioning))) {
            var p = b.Event("show.bs.collapse");
            if (this.$element.trigger(p), !p.isDefaultPrevented()) {
              k && k.length && (a.call(k, "hide"), o || k.data("bs.collapse", null));
              var j = this.dimension();
              this.$element.removeClass("collapse").addClass("collapsing")[j](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
              var m = function() {
                this.$element.removeClass("collapsing").addClass("collapse in")[j](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
              };
              if (!b.support.transition) {
                return m.call(this)
              }
              var h = b.camelCase(["scroll", j].join("-"));
              this.$element.one("bsTransitionEnd", b.proxy(m, this)).emulateTransitionEnd(g.TRANSITION_DURATION)[j](this.$element[0][h])
            }
          }
        }
      }, g.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var k = b.Event("hide.bs.collapse");
          if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            var h = this.dimension();
            this.$element[h](this.$element[h]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var j = function() {
              this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return b.support.transition ? void this.$element[h](0).one("bsTransitionEnd", b.proxy(j, this)).emulateTransitionEnd(g.TRANSITION_DURATION) : j.call(this)
          }
        }
      }, g.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
      }, g.prototype.getParent = function() {
        return b(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(b.proxy(function(e, j) {
          var h = b(j);
          this.addAriaAndCollapsedClass(f(h), h)
        }, this)).end()
      }, g.prototype.addAriaAndCollapsedClass = function(j, k) {
        var h = j.hasClass("in");
        j.attr("aria-expanded", h), k.toggleClass("collapsed", !h).attr("aria-expanded", h)
      };
      var c = b.fn.collapse;
      b.fn.collapse = a, b.fn.collapse.Constructor = g, b.fn.collapse.noConflict = function() {
        return b.fn.collapse = c, this
      }, b(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(k) {
        var h = b(this);
        h.attr("data-target") || k.preventDefault();
        var l = f(h),
          e = l.data("bs.collapse"),
          j = e ? "toggle" : b.extend({}, h.data(), {
            trigger: this
          });
        a.call(l, j)
      })
    }(jQuery), + function(b) {
      function c(e, h) {
        var g = b.proxy(this.process, this);
        this.$body = b("body"), this.$scrollElement = b(b(e).is("body") ? window : e), this.options = b.extend({}, c.DEFAULTS, h), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", g), this.refresh(), this.process()
      }
    
      function a(e) {
        return this.each(function() {
          var h = b(this),
            g = h.data("bs.scrollspy"),
            j = "object" == typeof e && e;
          g || h.data("bs.scrollspy", g = new c(this, j)), "string" == typeof e && g[e]()
        })
      }
      c.VERSION = "3.3.1", c.DEFAULTS = {
        offset: 10
      }, c.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
      }, c.prototype.refresh = function() {
        var h = "offset",
          g = 0;
        b.isWindow(this.$scrollElement[0]) || (h = "position", g = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var j = this;
        this.$body.find(this.selector).map(function() {
          var k = b(this),
            e = k.data("target") || k.attr("href"),
            l = /^#./.test(e) && b(e);
          return l && l.length && l.is(":visible") && [
            [l[h]().top + g, e]
          ] || null
        }).sort(function(k, l) {
          return k[0] - l[0]
        }).each(function() {
          j.offsets.push(this[0]), j.targets.push(this[1])
        })
      }, c.prototype.process = function() {
        var j, l = this.$scrollElement.scrollTop() + this.options.offset,
          h = this.getScrollHeight(),
          m = this.options.offset + h - this.$scrollElement.height(),
          k = this.offsets,
          p = this.targets,
          g = this.activeTarget;
        if (this.scrollHeight != h && this.refresh(), l >= m) {
          return g != (j = p[p.length - 1]) && this.activate(j)
        }
        if (g && l < k[0]) {
          return this.activeTarget = null, this.clear()
        }
        for (j = k.length; j--;) {
          g != p[j] && l >= k[j] && (!k[j + 1] || l <= k[j + 1]) && this.activate(p[j])
        }
      }, c.prototype.activate = function(h) {
        this.activeTarget = h, this.clear();
        var g = this.selector + '[data-target="' + h + '"],' + this.selector + '[href="' + h + '"]',
          j = b(g).parents("li").addClass("active");
        j.parent(".dropdown-menu").length && (j = j.closest("li.dropdown").addClass("active")), j.trigger("activate.bs.scrollspy")
      }, c.prototype.clear = function() {
        b(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
      };
      var f = b.fn.scrollspy;
      b.fn.scrollspy = a, b.fn.scrollspy.Constructor = c, b.fn.scrollspy.noConflict = function() {
        return b.fn.scrollspy = f, this
      }, b(window).on("load.bs.scrollspy.data-api", function() {
        b('[data-spy="scroll"]').each(function() {
          var g = b(this);
          a.call(g, g.data())
        })
      })
    }(jQuery), + function(a) {
      function b() {
        var f = document.createElement("bootstrap"),
          g = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          };
        for (var c in g) {
          if (void 0 !== f.style[c]) {
            return {
              end: g[c]
            }
          }
        }
        return !1
      }
      a.fn.emulateTransitionEnd = function(g) {
        var c = !1,
          h = this;
        a(this).one("bsTransitionEnd", function() {
          c = !0
        });
        var f = function() {
          c || a(h).trigger(a.support.transition.end)
        };
        return setTimeout(f, g), this
      }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
          bindType: a.support.transition.end,
          delegateType: a.support.transition.end,
          handle: function(c) {
            return a(c.target).is(this) ? c.handleObj.handler.apply(this, arguments) : void 0
          }
        })
      })
    }(jQuery);
    (function() {
      var a = [].slice;
      ! function(c, b) {
        var f;
        return f = function() {
          function e(h, g) {
            null == g && (g = {}), this.$element = c(h), this.options = c.extend({}, c.fn.bootstrapSwitch.defaults, {
              state: this.$element.is(":checked"),
              size: this.$element.data("size"),
              animate: this.$element.data("animate"),
              disabled: this.$element.is(":disabled"),
              readonly: this.$element.is("[readonly]"),
              indeterminate: this.$element.data("indeterminate"),
              inverse: this.$element.data("inverse"),
              radioAllOff: this.$element.data("radio-all-off"),
              onColor: this.$element.data("on-color"),
              offColor: this.$element.data("off-color"),
              onText: this.$element.data("on-text"),
              offText: this.$element.data("off-text"),
              labelText: this.$element.data("label-text"),
              handleWidth: this.$element.data("handle-width"),
              labelWidth: this.$element.data("label-width"),
              baseClass: this.$element.data("base-class"),
              wrapperClass: this.$element.data("wrapper-class")
            }, g), this.$wrapper = c("<div>", {
              "class": function(j) {
                return function() {
                  var k;
                  return k = ["" + j.options.baseClass].concat(j._getClasses(j.options.wrapperClass)), k.push(j.options.state ? "" + j.options.baseClass + "-on" : "" + j.options.baseClass + "-off"), null != j.options.size && k.push("" + j.options.baseClass + "-" + j.options.size), j.options.disabled && k.push("" + j.options.baseClass + "-disabled"), j.options.readonly && k.push("" + j.options.baseClass + "-readonly"), j.options.indeterminate && k.push("" + j.options.baseClass + "-indeterminate"), j.options.inverse && k.push("" + j.options.baseClass + "-inverse"), j.$element.attr("id") && k.push("" + j.options.baseClass + "-id-" + j.$element.attr("id")), k.join(" ")
                }
              }(this)()
            }), this.$container = c("<div>", {
              "class": "" + this.options.baseClass + "-container"
            }), this.$on = c("<span>", {
              html: this.options.onText,
              "class": "" + this.options.baseClass + "-handle-on " + this.options.baseClass + "-" + this.options.onColor
            }), this.$off = c("<span>", {
              html: this.options.offText,
              "class": "" + this.options.baseClass + "-handle-off " + this.options.baseClass + "-" + this.options.offColor
            }), this.$label = c("<span>", {
              html: this.options.labelText,
              "class": "" + this.options.baseClass + "-label"
            }), this.$element.on("init.bootstrapSwitch", function(j) {
              return function() {
                return j.options.onInit.apply(h, arguments)
              }
            }(this)), this.$element.on("switchChange.bootstrapSwitch", function(j) {
              return function() {
                return j.options.onSwitchChange.apply(h, arguments)
              }
            }(this)), this.$container = this.$element.wrap(this.$container).parent(), this.$wrapper = this.$container.wrap(this.$wrapper).parent(), this.$element.before(this.options.inverse ? this.$off : this.$on).before(this.$label).before(this.options.inverse ? this.$on : this.$off), this.options.indeterminate && this.$element.prop("indeterminate", !0), this._initWidth(), this._containerPosition(this.options.state, function(j) {
              return function() {
                return j.options.animate ? j.$wrapper.addClass("" + j.options.baseClass + "-animate") : void 0
              }
            }(this)), this._elementHandlers(), this._handleHandlers(), this._labelHandlers(), this._formHandler(), this._externalLabelHandler(), this.$element.trigger("init.bootstrapSwitch")
          }
          return e.prototype._constructor = e, e.prototype.state = function(g, h) {
            return "undefined" == typeof g ? this.options.state : this.options.disabled || this.options.readonly ? this.$element : this.options.state && !this.options.radioAllOff && this.$element.is(":radio") ? this.$element : (this.options.indeterminate ? (this.indeterminate(!1), g = !0) : g = !!g, this.$element.prop("checked", g).trigger("change.bootstrapSwitch", h), this.$element)
          }, e.prototype.toggleState = function(g) {
            return this.options.disabled || this.options.readonly ? this.$element : this.options.indeterminate ? (this.indeterminate(!1), this.state(!0)) : this.$element.prop("checked", !this.options.state).trigger("change.bootstrapSwitch", g)
          }, e.prototype.size = function(g) {
            return "undefined" == typeof g ? this.options.size : (null != this.options.size && this.$wrapper.removeClass("" + this.options.baseClass + "-" + this.options.size), g && this.$wrapper.addClass("" + this.options.baseClass + "-" + g), this._width(), this.options.size = g, this.$element)
          }, e.prototype.animate = function(g) {
            return "undefined" == typeof g ? this.options.animate : (g = !!g, g === this.options.animate ? this.$element : this.toggleAnimate())
          }, e.prototype.toggleAnimate = function() {
            return this.options.animate = !this.options.animate, this.$wrapper.toggleClass("" + this.options.baseClass + "-animate"), this.$element
          }, e.prototype.disabled = function(g) {
            return "undefined" == typeof g ? this.options.disabled : (g = !!g, g === this.options.disabled ? this.$element : this.toggleDisabled())
          }, e.prototype.toggleDisabled = function() {
            return this.options.disabled = !this.options.disabled, this.$element.prop("disabled", this.options.disabled), this.$wrapper.toggleClass("" + this.options.baseClass + "-disabled"), this.$element
          }, e.prototype.readonly = function(g) {
            return "undefined" == typeof g ? this.options.readonly : (g = !!g, g === this.options.readonly ? this.$element : this.toggleReadonly())
          }, e.prototype.toggleReadonly = function() {
            return this.options.readonly = !this.options.readonly, this.$element.prop("readonly", this.options.readonly), this.$wrapper.toggleClass("" + this.options.baseClass + "-readonly"), this.$element
          }, e.prototype.indeterminate = function(g) {
            return "undefined" == typeof g ? this.options.indeterminate : (g = !!g, g === this.options.indeterminate ? this.$element : this.toggleIndeterminate())
          }, e.prototype.toggleIndeterminate = function() {
            return this.options.indeterminate = !this.options.indeterminate, this.$element.prop("indeterminate", this.options.indeterminate), this.$wrapper.toggleClass("" + this.options.baseClass + "-indeterminate"), this._containerPosition(), this.$element
          }, e.prototype.inverse = function(g) {
            return "undefined" == typeof g ? this.options.inverse : (g = !!g, g === this.options.inverse ? this.$element : this.toggleInverse())
          }, e.prototype.toggleInverse = function() {
            var g, h;
            return this.$wrapper.toggleClass("" + this.options.baseClass + "-inverse"), h = this.$on.clone(!0), g = this.$off.clone(!0), this.$on.replaceWith(g), this.$off.replaceWith(h), this.$on = g, this.$off = h, this.options.inverse = !this.options.inverse, this.$element
          }, e.prototype.onColor = function(g) {
            var h;
            return h = this.options.onColor, "undefined" == typeof g ? h : (null != h && this.$on.removeClass("" + this.options.baseClass + "-" + h), this.$on.addClass("" + this.options.baseClass + "-" + g), this.options.onColor = g, this.$element)
          }, e.prototype.offColor = function(g) {
            var h;
            return h = this.options.offColor, "undefined" == typeof g ? h : (null != h && this.$off.removeClass("" + this.options.baseClass + "-" + h), this.$off.addClass("" + this.options.baseClass + "-" + g), this.options.offColor = g, this.$element)
          }, e.prototype.onText = function(g) {
            return "undefined" == typeof g ? this.options.onText : (this.$on.html(g), this._width(), this._containerPosition(), this.options.onText = g, this.$element)
          }, e.prototype.offText = function(g) {
            return "undefined" == typeof g ? this.options.offText : (this.$off.html(g), this._width(), this._containerPosition(), this.options.offText = g, this.$element)
          }, e.prototype.labelText = function(g) {
            return "undefined" == typeof g ? this.options.labelText : (this.$label.html(g), this._width(), this.options.labelText = g, this.$element)
          }, e.prototype.handleWidth = function(g) {
            return "undefined" == typeof g ? this.options.handleWidth : (this.options.handleWidth = g, this._width(), this._containerPosition(), this.$element)
          }, e.prototype.labelWidth = function(g) {
            return "undefined" == typeof g ? this.options.labelWidth : (this.options.labelWidth = g, this._width(), this._containerPosition(), this.$element)
          }, e.prototype.baseClass = function() {
            return this.options.baseClass
          }, e.prototype.wrapperClass = function(g) {
            return "undefined" == typeof g ? this.options.wrapperClass : (g || (g = c.fn.bootstrapSwitch.defaults.wrapperClass), this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")), this.$wrapper.addClass(this._getClasses(g).join(" ")), this.options.wrapperClass = g, this.$element)
          }, e.prototype.radioAllOff = function(g) {
            return "undefined" == typeof g ? this.options.radioAllOff : (g = !!g, g === this.options.radioAllOff ? this.$element : (this.options.radioAllOff = g, this.$element))
          }, e.prototype.onInit = function(g) {
            return "undefined" == typeof g ? this.options.onInit : (g || (g = c.fn.bootstrapSwitch.defaults.onInit), this.options.onInit = g, this.$element)
          }, e.prototype.onSwitchChange = function(g) {
            return "undefined" == typeof g ? this.options.onSwitchChange : (g || (g = c.fn.bootstrapSwitch.defaults.onSwitchChange), this.options.onSwitchChange = g, this.$element)
          }, e.prototype.destroy = function() {
            var g;
            return g = this.$element.closest("form"), g.length && g.off("reset.bootstrapSwitch").removeData("bootstrap-switch"), this.$container.children().not(this.$element).remove(), this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"), this.$element
          }, e.prototype._width = function() {
            var g, h;
            return g = this.$on.add(this.$off), g.add(this.$label).css("width", ""), h = "auto" === this.options.handleWidth ? Math.max(this.$on.width(), this.$off.width()) : this.options.handleWidth, g.width(h), this.$label.width(function(j) {
              return function(k, l) {
                return "auto" !== j.options.labelWidth ? j.options.labelWidth : h > l ? h : l
              }
            }(this)), this._handleWidth = this.$on.outerWidth(), this._labelWidth = this.$label.outerWidth(), this.$container.width(2 * this._handleWidth + this._labelWidth), this.$wrapper.width(this._handleWidth + this._labelWidth)
          }, e.prototype._initWidth = function() {
            var g;
            return this.$wrapper.is(":visible") ? this._width() : g = b.setInterval(function(h) {
              return function() {
                return h.$wrapper.is(":visible") ? (h._width(), b.clearInterval(g)) : void 0
              }
            }(this), 50)
          }, e.prototype._containerPosition = function(h, g) {
            return null == h && (h = this.options.state), this.$container.css("margin-left", function(j) {
              return function() {
                var k;
                return k = [0, "-" + j._handleWidth + "px"], j.options.indeterminate ? "-" + j._handleWidth / 2 + "px" : h ? j.options.inverse ? k[1] : k[0] : j.options.inverse ? k[0] : k[1]
              }
            }(this)), g ? c.support.transition ? this.$container.one("bsTransitionEnd", g).emulateTransitionEnd(500) : g() : void 0
          }, e.prototype._elementHandlers = function() {
            return this.$element.on({
              "change.bootstrapSwitch": function(g) {
                return function(h, k) {
                  var j;
                  return h.preventDefault(), h.stopImmediatePropagation(), j = g.$element.is(":checked"), g._containerPosition(j), j !== g.options.state ? (g.options.state = j, g.$wrapper.toggleClass("" + g.options.baseClass + "-off").toggleClass("" + g.options.baseClass + "-on"), k ? void 0 : (g.$element.is(":radio") && c("[name='" + g.$element.attr("name") + "']").not(g.$element).prop("checked", !1).trigger("change.bootstrapSwitch", !0), g.$element.trigger("switchChange.bootstrapSwitch", [j]))) : void 0
                }
              }(this),
              "focus.bootstrapSwitch": function(g) {
                return function(h) {
                  return h.preventDefault(), g.$wrapper.addClass("" + g.options.baseClass + "-focused")
                }
              }(this),
              "blur.bootstrapSwitch": function(g) {
                return function(h) {
                  return h.preventDefault(), g.$wrapper.removeClass("" + g.options.baseClass + "-focused")
                }
              }(this),
              "keydown.bootstrapSwitch": function(g) {
                return function(h) {
                  if (h.which && !g.options.disabled && !g.options.readonly) {
                    switch (h.which) {
                      case 37:
                        return h.preventDefault(), h.stopImmediatePropagation(), g.state(!1);
                      case 39:
                        return h.preventDefault(), h.stopImmediatePropagation(), g.state(!0)
                    }
                  }
                }
              }(this)
            })
          }, e.prototype._handleHandlers = function() {
            return this.$on.on("click.bootstrapSwitch", function(g) {
              return function() {
                return g.state(!1), g.$element.trigger("focus.bootstrapSwitch")
              }
            }(this)), this.$off.on("click.bootstrapSwitch", function(g) {
              return function() {
                return g.state(!0), g.$element.trigger("focus.bootstrapSwitch")
              }
            }(this))
          }, e.prototype._labelHandlers = function() {
            return this.$label.on({
              "mousedown.bootstrapSwitch touchstart.bootstrapSwitch": function(g) {
                return function(h) {
                  return g._dragStart || g.options.disabled || g.options.readonly ? void 0 : (h.preventDefault(), g._dragStart = (h.pageX || h.originalEvent.touches[0].pageX) - parseInt(g.$container.css("margin-left"), 10), g.options.animate && g.$wrapper.removeClass("" + g.options.baseClass + "-animate"), g.$element.trigger("focus.bootstrapSwitch"))
                }
              }(this),
              "mousemove.bootstrapSwitch touchmove.bootstrapSwitch": function(g) {
                return function(j) {
                  var h;
                  if (null != g._dragStart && (j.preventDefault(), h = (j.pageX || j.originalEvent.touches[0].pageX) - g._dragStart, !(h < -g._handleWidth || h > 0))) {
                    return g._dragEnd = h, g.$container.css("margin-left", "" + g._dragEnd + "px")
                  }
                }
              }(this),
              "mouseup.bootstrapSwitch touchend.bootstrapSwitch": function(g) {
                return function(j) {
                  var h;
                  if (g._dragStart) {
                    return j.preventDefault(), g.options.animate && g.$wrapper.addClass("" + g.options.baseClass + "-animate"), g._dragEnd ? (h = g._dragEnd > -(g._handleWidth / 2), g._dragEnd = !1, g.state(g.options.inverse ? !h : h)) : g.state(!g.options.state), g._dragStart = !1
                  }
                }
              }(this),
              "mouseleave.bootstrapSwitch": function(g) {
                return function() {
                  return g.$label.trigger("mouseup.bootstrapSwitch")
                }
              }(this)
            })
          }, e.prototype._externalLabelHandler = function() {
            var g;
            return g = this.$element.closest("label"), g.on("click", function(h) {
              return function(j) {
                return j.preventDefault(), j.stopImmediatePropagation(), j.target === g[0] ? h.toggleState() : void 0
              }
            }(this))
          }, e.prototype._formHandler = function() {
            var g;
            return g = this.$element.closest("form"), g.data("bootstrap-switch") ? void 0 : g.on("reset.bootstrapSwitch", function() {
              return b.setTimeout(function() {
                return g.find("input").filter(function() {
                  return c(this).data("bootstrap-switch")
                }).each(function() {
                  return c(this).bootstrapSwitch("state", this.checked)
                })
              }, 1)
            }).data("bootstrap-switch", !0)
          }, e.prototype._getClasses = function(h) {
            var g, l, j, k;
            if (!c.isArray(h)) {
              return ["" + this.options.baseClass + "-" + h]
            }
            for (l = [], j = 0, k = h.length; k > j; j++) {
              g = h[j], l.push("" + this.options.baseClass + "-" + g)
            }
            return l
          }, e
        }(), c.fn.bootstrapSwitch = function() {
          var e, g, h;
          return g = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], h = this, this.each(function() {
            var k, j;
            return k = c(this), j = k.data("bootstrap-switch"), j || k.data("bootstrap-switch", j = new f(this, g)), "string" == typeof g ? h = j[g].apply(j, e) : void 0
          }), h
        }, c.fn.bootstrapSwitch.Constructor = f, c.fn.bootstrapSwitch.defaults = {
          state: !0,
          size: null,
          animate: !0,
          disabled: !1,
          readonly: !1,
          indeterminate: !1,
          inverse: !1,
          radioAllOff: !1,
          onColor: "primary",
          offColor: "default",
          onText: "ON",
          offText: "OFF",
          labelText: "&nbsp;",
          handleWidth: "auto",
          labelWidth: "auto",
          baseClass: "bootstrap-switch",
          wrapperClass: "wrapper",
          onInit: function() {},
          onSwitchChange: function() {}
        }
      }(window.jQuery, window)
    }).call(this);
    var responseArray = {};
    var URL_FBCONNECT_CHECK = "/ajax/FBConnectCheck";
    var URL_CHOOSE_LANGUAGE = "/ajax/chooseLanguage";
    var REQUIRED_PASSWORD_LENGTH = 10;
    var flashVar = "";
    var flashAppName = "Player";
    var inviteContactName = "rcpt_ml_area";
    var on_signup_or_login_complete_handler;
    var on_signup_or_login_cancel_handler;
    var _returnto = "";

    function createPreviewPlayer(b, c, a) {
      jQuery("#" + b).flash({
        id: "Player",
        swf: c.player_url,
        height: c.height,
        width: c.width,
        quality: c.quality,
        scale: "exactfit",
        allowScriptAccess: "always",
        allowFullScreen: "false",
        wmode: "window",
        hasVersion: "10.3",
        flashvars: a
      })
    }
    
    var ModalBase = function() {};
    ModalBase.create = function(b) {
      var a = $("<div/>").attr({
        id: b,
        "class": "modal",
        role: "dialog",
        "aria-hidden": "true"
      });
      a.html('<div class="modal-dialog"><div class="modal-content"></div></div>');
      return a
    };
    ModalBase.ensure = function(b) {
      var a = $("#" + b);
      if (a.length == 0) {
        a = ModalBase.create(b).appendTo("body")
      }
      return a
    };
    ModalBase.prototype = {
      loading: function() {},
      load: function(a) {
        var b = this;
        this.$el.modal();
        this.loading();
        $.get(a, function(c) {
          b.$el.find(".modal-dialog").replaceWith(c);
          b.$el.find('[rel="tooltip"]').tooltip({
            container: b.$el
          });
          b.remoteUrl = a;
          b.$el.trigger("loaded")
        })
      },
      refresh: function() {
        if (!this.remoteUrl) {
          return
        }
        this.load(this.remoteUrl)
      },
      alert: function(b, a) {
        a = a || "success";
        this.$el.find(".alert").remove();
        var c = $('<div class="alert alert-dismissible"><button class="close" type="button" data-dismiss="alert">&times;</button></div>');
        c.addClass("alert-" + a).append(b).prependTo(this.$el.find(".modal-body"))
      }
    };
    
    function isValidUrl(a) {
      return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(a)
    }(function(k, j, g) {
      var m = "object",
        a = true;
    
      function f(o, p) {
        var q = (o[0] || 0) - (p[0] || 0);
        return q > 0 || (!q && o.length > 0 && f(o.slice(1), p.slice(1)))
      }
    
      function n(p) {
        if (typeof p != m) {
          return p
        }
        var r = [],
          o = "";
        for (var q in p) {
          if (typeof p[q] == m) {
            o = n(p[q])
          } else {
            o = [q, (a) ? encodeURIComponent(p[q]) : p[q]].join("=")
          }
          r.push(o)
        }
        return r.join("&")
      }
    
      function l(o) {
        var q = [];
        for (var p in o) {
          if (o[p]) {
            q.push([p, '="', o[p], '"'].join(""))
          }
        }
        return q.join(" ")
      }
    
      function b(o) {
        var q = [];
        for (var p in o) {
          q.push(['<param name="', p, '" value="', n(o[p]), '" />'].join(""))
        }
        return q.join("")
      }
      try {
        var c = g.description || (function() {
          return (new g("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
        }())
      } catch (h) {
        c = "Unavailable"
      }
      var e = c.match(/\d+/g) || [0];
      k[j] = {
        available: e[0] > 0,
        activeX: g && !g.name,
        version: {
          original: c,
          array: e,
          string: e.join("."),
          major: parseInt(e[0], 10) || 0,
          minor: parseInt(e[1], 10) || 0,
          release: parseInt(e[2], 10) || 0
        },
        hasVersion: function(p) {
          var o = (/string|number/.test(typeof p)) ? p.toString().split(".") : (/object/.test(typeof p)) ? [p.major, p.minor] : p || [0, 0];
          return f(e, o)
        },
        encodeParams: true,
        expressInstall: "expressInstall.swf",
        expressInstallIsActive: false,
        create: function(o) {
          var q = this;
          if (!o.swf || q.expressInstallIsActive || (!q.available && !o.hasVersionFail)) {
            return false
          }
          if (!q.hasVersion(o.hasVersion || 1)) {
            q.expressInstallIsActive = true;
            if (typeof o.hasVersionFail == "function") {
              if (!o.hasVersionFail.apply(o)) {
                return false
              }
            }
            o = {
              swf: o.expressInstall || q.expressInstall,
              height: 137,
              width: 214,
              flashvars: {
                MMredirectURL: location.href,
                MMplayerType: (q.activeX) ? "ActiveX" : "PlugIn",
                MMdoctitle: document.title.slice(0, 47) + " - Flash Player Installation"
              }
            }
          }
          attrs = {
            data: o.swf,
            type: "application/x-shockwave-flash",
            id: o.id || "flash_" + Math.floor(Math.random() * 999999999),
            width: o.width || 320,
            height: o.height || 180,
            style: o.style || ""
          };
          if (q.activeX) {
            attrs.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
          }
          a = typeof o.useEncode !== "undefined" ? o.useEncode : q.encodeParams;
          o.movie = o.swf;
          o.wmode = o.wmode || "opaque";
          delete o.fallback;
          delete o.hasVersion;
          delete o.hasVersionFail;
          delete o.height;
          delete o.id;
          delete o.swf;
          delete o.useEncode;
          delete o.width;
          var p = document.createElement("div");
          p.innerHTML = ["<object ", l(attrs), ">", b(o), "</object>"].join("");
          return p.firstChild
        }
      };
      k.fn[j] = function(p) {
        var o = this.find(m).andSelf().filter(m);
        if (/string|object/.test(typeof p)) {
          this.each(function() {
            var q = k(this),
              r;
            p = (typeof p == m) ? p : {
              swf: p
            };
            p.fallback = this;
            r = k[j].create(p);
            if (r) {
              q.children().remove();
              q.html(r)
            }
          })
        }
        if (typeof p == "function") {
          o.each(function() {
            var r = this,
              q = "jsInteractionTimeoutMs";
            r[q] = r[q] || 0;
            if (r[q] < 660) {
              if (r.clientWidth || r.clientHeight) {
                p.call(r)
              } else {
                setTimeout(function() {
                  k(r)[j](p)
                }, r[q] + 66)
              }
            }
          })
        }
        return o
      }
    }(jQuery, "flash", navigator.plugins["Shockwave Flash"] || window.ActiveXObject));
    /*!
      * jQuery blockUI plugin
      * Version 2.66.0-2013.10.09
      * Requires jQuery v1.7 or later
      *
      * Examples at: http://malsup.com/jquery/block/
      * Copyright (c) 2007-2013 M. Alsup
      * Dual licensed under the MIT and GPL licenses:
      * http://www.opensource.org/licenses/mit-license.php
      * http://www.gnu.org/licenses/gpl.html
      *
      * Thanks to Amir-Hossein Sobhi for some excellent contributions!
      */
    (function() {
      function a(l) {
        l.fn._fadeIn = l.fn.fadeIn;
        var e = l.noop || function() {};
        var p = /MSIE/.test(navigator.userAgent);
        var g = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent);
        var m = document.documentMode || 0;
        var h = l.isFunction(document.createElement("div").style.setExpression);
        l.blockUI = function(t) {
          f(window, t)
        };
        l.unblockUI = function(t) {
          k(window, t)
        };
        l.growlUI = function(z, w, x, u) {
          var v = l('<div class="growlUI"></div>');
          if (z) {
            v.append("<h1>" + z + "</h1>")
          }
          if (w) {
            v.append("<h2>" + w + "</h2>")
          }
          if (x === undefined) {
            x = 3000
          }
          var t = function(A) {
            A = A || {};
            l.blockUI({
              message: v,
              fadeIn: typeof A.fadeIn !== "undefined" ? A.fadeIn : 700,
              fadeOut: typeof A.fadeOut !== "undefined" ? A.fadeOut : 1000,
              timeout: typeof A.timeout !== "undefined" ? A.timeout : x,
              centerY: false,
              showOverlay: false,
              onUnblock: u,
              css: l.blockUI.defaults.growlCSS
            })
          };
          t();
          var y = v.css("opacity");
          v.mouseover(function() {
            t({
              fadeIn: 0,
              timeout: 30000
            });
            var A = l(".blockMsg");
            A.stop();
            A.fadeTo(300, 1)
          }).mouseout(function() {
            l(".blockMsg").fadeOut(1000)
          })
        };
        l.fn.block = function(u) {
          if (this[0] === window) {
            l.blockUI(u);
            return this
          }
          var t = l.extend({}, l.blockUI.defaults, u || {});
          this.each(function() {
            var v = l(this);
            if (t.ignoreIfBlocked && v.data("blockUI.isBlocked")) {
              return
            }
            v.unblock({
              fadeOut: 0
            })
          });
          return this.each(function() {
            if (l.css(this, "position") == "static") {
              this.style.position = "relative";
              l(this).data("blockUI.static", true)
            }
            this.style.zoom = 1;
            f(this, u)
          })
        };
        l.fn.unblock = function(t) {
          if (this[0] === window) {
            l.unblockUI(t);
            return this
          }
          return this.each(function() {
            k(this, t)
          })
        };
        l.blockUI.version = 2.66;
        l.blockUI.defaults = {
          message: "<h1>Please wait...</h1>",
          title: null,
          draggable: true,
          theme: false,
          css: {
            padding: 0,
            margin: 0,
            width: "30%",
            top: "40%",
            left: "35%",
            textAlign: "center",
            color: "#000",
            border: "3px solid #aaa",
            backgroundColor: "#fff",
            cursor: "wait"
          },
          themedCSS: {
            width: "30%",
            top: "40%",
            left: "35%"
          },
          overlayCSS: {
            backgroundColor: "#000",
            opacity: 0.6,
            cursor: "wait"
          },
          cursorReset: "default",
          growlCSS: {
            width: "350px",
            top: "10px",
            left: "",
            right: "10px",
            border: "none",
            padding: "5px",
            opacity: 0.6,
            cursor: "default",
            color: "#fff",
            backgroundColor: "#000",
            "-webkit-border-radius": "10px",
            "-moz-border-radius": "10px",
            "border-radius": "10px"
          },
          iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
          forceIframe: false,
          baseZ: 1000,
          centerX: true,
          centerY: true,
          allowBodyStretch: true,
          bindEvents: true,
          constrainTabKey: true,
          fadeIn: 200,
          fadeOut: 400,
          timeout: 0,
          showOverlay: true,
          focusInput: true,
          focusableElements: ":input:enabled:visible",
          onBlock: null,
          onUnblock: null,
          onOverlayClick: null,
          quirksmodeOffsetHack: 4,
          blockMsgClass: "blockMsg",
          ignoreIfBlocked: false
        };
        var c = null;
        var j = [];
    
        function f(w, I) {
          var F, Q;
          var D = (w == window);
          var A = (I && I.message !== undefined ? I.message : undefined);
          I = l.extend({}, l.blockUI.defaults, I || {});
          if (I.ignoreIfBlocked && l(w).data("blockUI.isBlocked")) {
            return
          }
          I.overlayCSS = l.extend({}, l.blockUI.defaults.overlayCSS, I.overlayCSS || {});
          F = l.extend({}, l.blockUI.defaults.css, I.css || {});
          if (I.onOverlayClick) {
            I.overlayCSS.cursor = "pointer"
          }
          Q = l.extend({}, l.blockUI.defaults.themedCSS, I.themedCSS || {});
          A = A === undefined ? I.message : A;
          if (D && c) {
            k(window, {
              fadeOut: 0
            })
          }
          if (A && typeof A != "string" && (A.parentNode || A.jquery)) {
            var L = A.jquery ? A[0] : A;
            var S = {};
            l(w).data("blockUI.history", S);
            S.el = L;
            S.parent = L.parentNode;
            S.display = L.style.display;
            S.position = L.style.position;
            if (S.parent) {
              S.parent.removeChild(L)
            }
          }
          l(w).data("blockUI.onUnblock", I.onUnblock);
          var E = I.baseZ;
          var P, O, N, J;
          if (p || I.forceIframe) {
            P = l('<iframe class="blockUI" style="z-index:' + (E++) + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + I.iframeSrc + '"></iframe>')
          } else {
            P = l('<div class="blockUI" style="display:none"></div>')
          }
          if (I.theme) {
            O = l('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + (E++) + ';display:none"></div>')
          } else {
            O = l('<div class="blockUI blockOverlay" style="z-index:' + (E++) + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>')
          }
          if (I.theme && D) {
            J = '<div class="blockUI ' + I.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (E + 10) + ';display:none;position:fixed">';
            if (I.title) {
              J += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (I.title || "&nbsp;") + "</div>"
            }
            J += '<div class="ui-widget-content ui-dialog-content"></div>';
            J += "</div>"
          } else {
            if (I.theme) {
              J = '<div class="blockUI ' + I.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (E + 10) + ';display:none;position:absolute">';
              if (I.title) {
                J += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (I.title || "&nbsp;") + "</div>"
              }
              J += '<div class="ui-widget-content ui-dialog-content"></div>';
              J += "</div>"
            } else {
              if (D) {
                J = '<div class="blockUI ' + I.blockMsgClass + ' blockPage" style="z-index:' + (E + 10) + ';display:none;position:fixed"></div>'
              } else {
                J = '<div class="blockUI ' + I.blockMsgClass + ' blockElement" style="z-index:' + (E + 10) + ';display:none;position:absolute"></div>'
              }
            }
          }
          N = l(J);
          if (A) {
            if (I.theme) {
              N.css(Q);
              N.addClass("ui-widget-content")
            } else {
              N.css(F)
            }
          }
          if (!I.theme) {
            O.css(I.overlayCSS)
          }
          O.css("position", D ? "fixed" : "absolute");
          if (p || I.forceIframe) {
            P.css("opacity", 0)
          }
          var C = [P, O, N],
            R = D ? l("body") : l(w);
          l.each(C, function() {
            this.appendTo(R)
          });
          if (I.theme && I.draggable && l.fn.draggable) {
            N.draggable({
              handle: ".ui-dialog-titlebar",
              cancel: "li"
            })
          }
          var y = h && (!l.support.boxModel || l("object,embed", D ? null : w).length > 0);
          if (g || y) {
            if (D && I.allowBodyStretch && l.support.boxModel) {
              l("html,body").css("height", "100%")
            }
            if ((g || !l.support.boxModel) && !D) {
              var H = q(w, "borderTopWidth"),
                M = q(w, "borderLeftWidth");
              var B = H ? "(0 - " + H + ")" : 0;
              var G = M ? "(0 - " + M + ")" : 0
            }
            l.each(C, function(t, V) {
              var z = V[0].style;
              z.position = "absolute";
              if (t < 2) {
                if (D) {
                  z.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + I.quirksmodeOffsetHack + ') + "px"')
                } else {
                  z.setExpression("height", 'this.parentNode.offsetHeight + "px"')
                }
                if (D) {
                  z.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
                } else {
                  z.setExpression("width", 'this.parentNode.offsetWidth + "px"')
                }
                if (G) {
                  z.setExpression("left", G)
                }
                if (B) {
                  z.setExpression("top", B)
                }
              } else {
                if (I.centerY) {
                  if (D) {
                    z.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"')
                  }
                  z.marginTop = 0
                } else {
                  if (!I.centerY && D) {
                    var T = (I.css && I.css.top) ? parseInt(I.css.top, 10) : 0;
                    var U = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + T + ') + "px"';
                    z.setExpression("top", U)
                  }
                }
              }
            })
          }
          if (A) {
            if (I.theme) {
              N.find(".ui-widget-content").append(A)
            } else {
              N.append(A)
            }
            if (A.jquery || A.nodeType) {
              l(A).show()
            }
          }
          if ((p || I.forceIframe) && I.showOverlay) {
            P.show()
          }
          if (I.fadeIn) {
            var K = I.onBlock ? I.onBlock : e;
            var v = (I.showOverlay && !A) ? K : e;
            var u = A ? K : e;
            if (I.showOverlay) {
              O._fadeIn(I.fadeIn, v)
            }
            if (A) {
              N._fadeIn(I.fadeIn, u)
            }
          } else {
            if (I.showOverlay) {
              O.show()
            }
            if (A) {
              N.show()
            }
            if (I.onBlock) {
              I.onBlock()
            }
          }
          o(1, w, I);
          if (D) {
            c = N[0];
            j = l(I.focusableElements, c);
            if (I.focusInput) {
              setTimeout(s, 20)
            }
          } else {
            b(N[0], I.centerX, I.centerY)
          }
          if (I.timeout) {
            var x = setTimeout(function() {
              if (D) {
                l.unblockUI(I)
              } else {
                l(w).unblock(I)
              }
            }, I.timeout);
            l(w).data("blockUI.timeout", x)
          }
        }
    
        function k(w, y) {
          var x;
          var v = (w == window);
          var u = l(w);
          var z = u.data("blockUI.history");
          var A = u.data("blockUI.timeout");
          if (A) {
            clearTimeout(A);
            u.removeData("blockUI.timeout")
          }
          y = l.extend({}, l.blockUI.defaults, y || {});
          o(0, w, y);
          if (y.onUnblock === null) {
            y.onUnblock = u.data("blockUI.onUnblock");
            u.removeData("blockUI.onUnblock")
          }
          var t;
          if (v) {
            t = l("body").children().filter(".blockUI").add("body > .blockUI")
          } else {
            t = u.find(">.blockUI")
          }
          if (y.cursorReset) {
            if (t.length > 1) {
              t[1].style.cursor = y.cursorReset
            }
            if (t.length > 2) {
              t[2].style.cursor = y.cursorReset
            }
          }
          if (v) {
            c = j = null
          }
          if (y.fadeOut) {
            x = t.length;
            t.stop().fadeOut(y.fadeOut, function() {
              if (--x === 0) {
                n(t, z, y, w)
              }
            })
          } else {
            n(t, z, y, w)
          }
        }
    
        function n(y, B, A, z) {
          var x = l(z);
          if (x.data("blockUI.isBlocked")) {
            return
          }
          y.each(function(w, C) {
            if (this.parentNode) {
              this.parentNode.removeChild(this)
            }
          });
          if (B && B.el) {
            B.el.style.display = B.display;
            B.el.style.position = B.position;
            if (B.parent) {
              B.parent.appendChild(B.el)
            }
            x.removeData("blockUI.history")
          }
          if (x.data("blockUI.static")) {
            x.css("position", "static")
          }
          if (typeof A.onUnblock == "function") {
            A.onUnblock(z, A)
          }
          var t = l(document.body),
            v = t.width(),
            u = t[0].style.width;
          t.width(v - 1).width(v);
          t[0].style.width = u
        }
    
        function o(t, x, y) {
          var w = x == window,
            v = l(x);
          if (!t && (w && !c || !w && !v.data("blockUI.isBlocked"))) {
            return
          }
          v.data("blockUI.isBlocked", t);
          if (!w || !y.bindEvents || (t && !y.showOverlay)) {
            return
          }
          var u = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
          if (t) {
            l(document).bind(u, y, r)
          } else {
            l(document).unbind(u, r)
          }
        }
    
        function r(y) {
          if (y.type === "keydown" && y.keyCode && y.keyCode == 9) {
            if (c && y.data.constrainTabKey) {
              var v = j;
              var u = !y.shiftKey && y.target === v[v.length - 1];
              var t = y.shiftKey && y.target === v[0];
              if (u || t) {
                setTimeout(function() {
                  s(t)
                }, 10);
                return false
              }
            }
          }
          var w = y.data;
          var x = l(y.target);
          if (x.hasClass("blockOverlay") && w.onOverlayClick) {
            w.onOverlayClick(y)
          }
          if (x.parents("div." + w.blockMsgClass).length > 0) {
            return true
          }
          return x.parents().children().filter("div.blockUI").length === 0
        }
    
        function s(t) {
          if (!j) {
            return
          }
          var u = j[t === true ? j.length - 1 : 0];
          if (u) {
            u.focus()
          }
        }
    
        function b(A, u, C) {
          var B = A.parentNode,
            z = A.style;
          var v = ((B.offsetWidth - A.offsetWidth) / 2) - q(B, "borderLeftWidth");
          var w = ((B.offsetHeight - A.offsetHeight) / 2) - q(B, "borderTopWidth");
          if (u) {
            z.left = v > 0 ? (v + "px") : "0"
          }
          if (C) {
            z.top = w > 0 ? (w + "px") : "0"
          }
        }
    
        function q(t, u) {
          return parseInt(l.css(t, u), 10) || 0
        }
      }
      if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
      } else {
        a(jQuery)
      }
    })();
    (function(c) {
      var b = c.scrollTo = function(f, e, g) {
        c(window).scrollTo(f, e, g)
      };
      b.defaults = {
        axis: "xy",
        duration: parseFloat(c.fn.jquery) >= 1.3 ? 0 : 1,
        limit: true
      };
      b.window = function(e) {
        return c(window)._scrollable()
      };
      c.fn._scrollable = function() {
        return this.map(function() {
          var f = this,
            g = !f.nodeName || c.inArray(f.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
          if (!g) {
            return f
          }
          var e = (f.contentWindow || f).document || f.ownerDocument || f;
          return /webkit/i.test(navigator.userAgent) || e.compatMode == "BackCompat" ? e.body : e.documentElement
        })
      };
      c.fn.scrollTo = function(k, j, h) {
        if (typeof j == "object") {
          h = j;
          j = 0
        }
        if (typeof h == "function") {
          h = {
            onAfter: h
          }
        }
        if (k == "max") {
          k = 9000000000
        }
        h = c.extend({}, b.defaults, h);
        j = j || h.duration;
        h.queue = h.queue && h.axis.length > 1;
        if (h.queue) {
          j /= 2
        }
        h.offset = a(h.offset);
        h.over = a(h.over);
        return this._scrollable().each(function() {
          if (k == null) {
            return
          }
          var o = this,
            l = c(o),
            m = k,
            g, e = {},
            n = l.is("html,body");
          switch (typeof m) {
            case "number":
            case "string":
              if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(m)) {
                m = a(m);
                break
              }
              m = c(m, this);
              if (!m.length) {
                return
              }
              case "object":
                if (m.is || m.style) {
                  g = (m = c(m)).offset()
                }
          }
          c.each(h.axis.split(""), function(u, s) {
            var q = s == "x" ? "Left" : "Top",
              w = q.toLowerCase(),
              t = "scroll" + q,
              r = o[t],
              p = b.max(o, s);
            if (g) {
              e[t] = g[w] + (n ? 0 : r - l.offset()[w]);
              if (h.margin) {
                e[t] -= parseInt(m.css("margin" + q)) || 0;
                e[t] -= parseInt(m.css("border" + q + "Width")) || 0
              }
              e[t] += h.offset[w] || 0;
              if (h.over[w]) {
                e[t] += m[s == "x" ? "width" : "height"]() * h.over[w]
              }
            } else {
              var v = m[w];
              e[t] = v.slice && v.slice(-1) == "%" ? parseFloat(v) / 100 * p : v
            }
            if (h.limit && /^\d+$/.test(e[t])) {
              e[t] = e[t] <= 0 ? 0 : Math.min(e[t], p)
            }
            if (!u && h.queue) {
              if (r != e[t]) {
                f(h.onAfterFirst)
              }
              delete e[t]
            }
          });
          f(h.onAfter);
    
          function f(p) {
            l.animate(e, j, h.easing, p && function() {
              p.call(this, k, h)
            })
          }
        }).end()
      };
      b.max = function(h, g) {
        var l = g == "x" ? "Width" : "Height",
          f = "scroll" + l;
        if (!c(h).is("html,body")) {
          return h[f] - c(h)[l.toLowerCase()]()
        }
        var k = "client" + l,
          j = h.ownerDocument.documentElement,
          e = h.ownerDocument.body;
        return Math.max(j[f], e[f]) - Math.min(j[k], e[k])
      };
    
      function a(e) {
        return typeof e == "object" ? e : {
          top: e,
          left: e
        }
      }
    });