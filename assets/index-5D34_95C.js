(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();var V,f,qe,Be,E,we,Qe,se,ze,W={},Ke=[],vt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,te=Array.isArray;function C(e,t){for(var o in t)e[o]=t[o];return e}function Ge(e){var t=e.parentNode;t&&t.removeChild(e)}function F(e,t,o){var n,i,r,s={};for(r in t)r=="key"?n=t[r]:r=="ref"?i=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?V.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return L(e,s,n,i,null)}function L(e,t,o,n,i){var r={type:e,props:t,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++qe,__i:-1,__u:0};return i==null&&f.vnode!=null&&f.vnode(r),r}function P(e){return e.children}function x(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__?D(e.__,e.__i+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?D(e):null}function Ze(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return Ze(e)}}function le(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!X.__r++||we!==f.debounceRendering)&&((we=f.debounceRendering)||Qe)(X)}function X(){var e,t,o,n,i,r,s,l,c;for(E.sort(se);e=E.shift();)e.__d&&(t=E.length,n=void 0,r=(i=(o=e).__v).__e,l=[],c=[],(s=o.__P)&&((n=C({},i)).__v=i.__v+1,f.vnode&&f.vnode(n),de(s,n,i,o.__n,s.ownerSVGElement!==void 0,32&i.__u?[r]:null,l,r??D(i),!!(32&i.__u),c),n.__.__k[n.__i]=n,et(l,n,c),n.__e!=r&&Ze(n)),E.length>t&&E.sort(se));X.__r=0}function Xe(e,t,o,n,i,r,s,l,c,u,d){var a,y,h,m,w,g=n&&n.__k||Ke,p=t.length;for(o.__d=c,mt(o,t,g),c=o.__d,a=0;a<p;a++)(h=o.__k[a])!=null&&typeof h!="boolean"&&typeof h!="function"&&(y=h.__i===-1?W:g[h.__i]||W,h.__i=a,de(e,h,y,i,r,s,l,c,u,d),m=h.__e,h.ref&&y.ref!=h.ref&&(y.ref&&pe(y.ref,null,h),d.push(h.ref,h.__c||m,h)),w==null&&m!=null&&(w=m),65536&h.__u||y.__k===h.__k?c=Ye(h,c,e):typeof h.type=="function"&&h.__d!==void 0?c=h.__d:m&&(c=m.nextSibling),h.__d=void 0,h.__u&=-196609);o.__d=c,o.__e=w}function mt(e,t,o){var n,i,r,s,l,c=t.length,u=o.length,d=u,a=0;for(e.__k=[],n=0;n<c;n++)(i=e.__k[n]=(i=t[n])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?L(null,i,null,null,i):te(i)?L(P,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?L(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=e,i.__b=e.__b+1,l=gt(i,o,s=n+a,d),i.__i=l,r=null,l!==-1&&(d--,(r=o[l])&&(r.__u|=131072)),r==null||r.__v===null?(l==-1&&a--,typeof i.type!="function"&&(i.__u|=65536)):l!==s&&(l===s+1?a++:l>s?d>c-s?a+=l-s:a--:a=l<s&&l==s-1?l-s:0,l!==n+a&&(i.__u|=65536))):(r=o[n])&&r.key==null&&r.__e&&(r.__e==e.__d&&(e.__d=D(r)),ce(r,r,!1),o[n]=null,d--);if(d)for(n=0;n<u;n++)(r=o[n])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=D(r)),ce(r,r))}function Ye(e,t,o){var n,i;if(typeof e.type=="function"){for(n=e.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=e,t=Ye(n[i],t,o));return t}return e.__e!=t&&(o.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function M(e,t){return t=t||[],e==null||typeof e=="boolean"||(te(e)?e.some(function(o){M(o,t)}):t.push(e)),t}function gt(e,t,o,n){var i=e.key,r=e.type,s=o-1,l=o+1,c=t[o];if(c===null||c&&i==c.key&&r===c.type)return o;if(n>(c!=null&&!(131072&c.__u)?1:0))for(;s>=0||l<t.length;){if(s>=0){if((c=t[s])&&!(131072&c.__u)&&i==c.key&&r===c.type)return s;s--}if(l<t.length){if((c=t[l])&&!(131072&c.__u)&&i==c.key&&r===c.type)return l;l++}}return-1}function $e(e,t,o){t[0]==="-"?e.setProperty(t,o??""):e[t]=o==null?"":typeof o!="number"||vt.test(t)?o:o+"px"}function z(e,t,o,n,i){var r;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)o&&t in o||$e(e.style,t,"");if(o)for(t in o)n&&o[t]===n[t]||$e(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=o,o?n?o.u=n.u:(o.u=Date.now(),e.addEventListener(t,r?Ie:Se,r)):e.removeEventListener(t,r?Ie:Se,r);else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,o))}}function Se(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(f.event?f.event(e):e)}function Ie(e){return this.l[e.type+!0](f.event?f.event(e):e)}function de(e,t,o,n,i,r,s,l,c,u){var d,a,y,h,m,w,g,p,b,A,q,O,ke,B,ne,I=t.type;if(t.constructor!==void 0)return null;128&o.__u&&(c=!!(32&o.__u),r=[l=t.__e=o.__e]),(d=f.__b)&&d(t);e:if(typeof I=="function")try{if(p=t.props,b=(d=I.contextType)&&n[d.__c],A=d?b?b.props.value:d.__:n,o.__c?g=(a=t.__c=o.__c).__=a.__E:("prototype"in I&&I.prototype.render?t.__c=a=new I(p,A):(t.__c=a=new x(p,A),a.constructor=I,a.render=bt),b&&b.sub(a),a.props=p,a.state||(a.state={}),a.context=A,a.__n=n,y=a.__d=!0,a.__h=[],a._sb=[]),a.__s==null&&(a.__s=a.state),I.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=C({},a.__s)),C(a.__s,I.getDerivedStateFromProps(p,a.__s))),h=a.props,m=a.state,a.__v=t,y)I.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(I.getDerivedStateFromProps==null&&p!==h&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(p,A),!a.__e&&(a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(p,a.__s,A)===!1||t.__v===o.__v)){for(t.__v!==o.__v&&(a.props=p,a.state=a.__s,a.__d=!1),t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(Q){Q&&(Q.__=t)}),q=0;q<a._sb.length;q++)a.__h.push(a._sb[q]);a._sb=[],a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(p,a.__s,A),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(h,m,w)})}if(a.context=A,a.props=p,a.__P=e,a.__e=!1,O=f.__r,ke=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,O&&O(t),d=a.render(a.props,a.state,a.context),B=0;B<a._sb.length;B++)a.__h.push(a._sb[B]);a._sb=[]}else do a.__d=!1,O&&O(t),d=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++ke<25);a.state=a.__s,a.getChildContext!=null&&(n=C(C({},n),a.getChildContext())),y||a.getSnapshotBeforeUpdate==null||(w=a.getSnapshotBeforeUpdate(h,m)),Xe(e,te(ne=d!=null&&d.type===P&&d.key==null?d.props.children:d)?ne:[ne],t,o,n,i,r,s,l,c,u),a.base=t.__e,t.__u&=-161,a.__h.length&&s.push(a),g&&(a.__E=a.__=null)}catch(Q){t.__v=null,c||r!=null?(t.__e=l,t.__u|=c?160:32,r[r.indexOf(l)]=null):(t.__e=o.__e,t.__k=o.__k),f.__e(Q,t,o)}else r==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=yt(o.__e,t,o,n,i,r,s,c,u);(d=f.diffed)&&d(t)}function et(e,t,o){t.__d=void 0;for(var n=0;n<o.length;n++)pe(o[n],o[++n],o[++n]);f.__c&&f.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){f.__e(r,i.__v)}})}function yt(e,t,o,n,i,r,s,l,c){var u,d,a,y,h,m,w,g=o.props,p=t.props,b=t.type;if(b==="svg"&&(i=!0),r!=null){for(u=0;u<r.length;u++)if((h=r[u])&&"setAttribute"in h==!!b&&(b?h.localName===b:h.nodeType===3)){e=h,r[u]=null;break}}if(e==null){if(b===null)return document.createTextNode(p);e=i?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,p.is&&p),r=null,l=!1}if(b===null)g===p||l&&e.data===p||(e.data=p);else{if(r=r&&V.call(e.childNodes),g=o.props||W,!l&&r!=null)for(g={},u=0;u<e.attributes.length;u++)g[(h=e.attributes[u]).name]=h.value;for(u in g)h=g[u],u=="children"||(u=="dangerouslySetInnerHTML"?a=h:u==="key"||u in p||z(e,u,null,h,i));for(u in p)h=p[u],u=="children"?y=h:u=="dangerouslySetInnerHTML"?d=h:u=="value"?m=h:u=="checked"?w=h:u==="key"||l&&typeof h!="function"||g[u]===h||z(e,u,h,g[u],i);if(d)l||a&&(d.__html===a.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(a&&(e.innerHTML=""),Xe(e,te(y)?y:[y],t,o,n,i&&b!=="foreignObject",r,s,r?r[0]:o.__k&&D(o,0),l,c),r!=null)for(u=r.length;u--;)r[u]!=null&&Ge(r[u]);l||(u="value",m!==void 0&&(m!==e[u]||b==="progress"&&!m||b==="option"&&m!==g[u])&&z(e,u,m,g[u],!1),u="checked",w!==void 0&&w!==e[u]&&z(e,u,w,g[u],!1))}return e}function pe(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(n){f.__e(n,o)}}function ce(e,t,o){var n,i;if(f.unmount&&f.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||pe(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){f.__e(r,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&ce(n[i],t,o||typeof e.type!="function");o||e.__e==null||Ge(e.__e),e.__=e.__e=e.__d=void 0}function bt(e,t,o){return this.constructor(e,o)}function kt(e,t,o){var n,i,r,s;f.__&&f.__(e,t),i=(n=typeof o=="function")?null:o&&o.__k||t.__k,r=[],s=[],de(t,e=(!n&&o||t).__k=F(P,null,[e]),i||W,W,t.ownerSVGElement!==void 0,!n&&o?[o]:i?null:t.firstChild?V.call(t.childNodes):null,r,!n&&o?o:i?i.__e:t.firstChild,n,s),et(r,e,s)}function wt(e,t,o){var n,i,r,s,l=C({},e.props);for(r in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)r=="key"?n=t[r]:r=="ref"?i=t[r]:l[r]=t[r]===void 0&&s!==void 0?s[r]:t[r];return arguments.length>2&&(l.children=arguments.length>3?V.call(arguments,2):o),L(e.type,l,n||e.key,i||e.ref,null)}function $t(e,t){var o={__c:t="__cC"+ze++,__:e,Consumer:function(n,i){return n.children(i)},Provider:function(n){var i,r;return this.getChildContext||(i=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&i.some(function(l){l.__e=!0,le(l)})},this.sub=function(s){i.push(s);var l=s.componentWillUnmount;s.componentWillUnmount=function(){i.splice(i.indexOf(s),1),l&&l.call(s)}}),n.children}};return o.Provider.__=o.Consumer.contextType=o}V=Ke.slice,f={__e:function(e,t,o,n){for(var i,r,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),s=i.__d),s)return i.__E=i}catch(l){e=l}throw e}},qe=0,Be=function(e){return e!=null&&e.constructor==null},x.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},o),this.props)),e&&C(o,e),e!=null&&this.__v&&(t&&this._sb.push(t),le(this))},x.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),le(this))},x.prototype.render=P,E=[],Qe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,se=function(e,t){return e.__v.__b-t.__v.__b},X.__r=0,ze=0;var _e,$,ie,Pe,xe=0,tt=[],G=[],Ce=f.__b,Ae=f.__r,je=f.diffed,Ee=f.__c,Te=f.unmount;function St(e,t){f.__h&&f.__h($,e,xe||t),xe=0;var o=$.__H||($.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({__V:G}),o.__[e]}function ot(e,t){var o=St(_e++,7);return xt(o.__H,t)?(o.__V=e(),o.i=t,o.__h=e,o.__V):o.__}function It(){for(var e;e=tt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Z),e.__H.__h.forEach(ue),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){$=null,Ce&&Ce(e)},f.__r=function(e){Ae&&Ae(e),_e=0;var t=($=e.__c).__H;t&&(ie===$?(t.__h=[],$.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=G,o.__N=o.i=void 0})):(t.__h.forEach(Z),t.__h.forEach(ue),t.__h=[],_e=0)),ie=$},f.diffed=function(e){je&&je(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(tt.push(t)!==1&&Pe===f.requestAnimationFrame||((Pe=f.requestAnimationFrame)||Pt)(It)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==G&&(o.__=o.__V),o.i=void 0,o.__V=G})),ie=$=null},f.__c=function(e,t){t.some(function(o){try{o.__h.forEach(Z),o.__h=o.__h.filter(function(n){return!n.__||ue(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],f.__e(n,o.__v)}}),Ee&&Ee(e,t)},f.unmount=function(e){Te&&Te(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{Z(n)}catch(i){t=i}}),o.__H=void 0,t&&f.__e(t,o.__v))};var Ue=typeof requestAnimationFrame=="function";function Pt(e){var t,o=function(){clearTimeout(n),Ue&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(o,100);Ue&&(t=requestAnimationFrame(o))}function Z(e){var t=$,o=e.__c;typeof o=="function"&&(e.__c=void 0,o()),$=t}function ue(e){var t=$;e.__c=e.__(),$=t}function xt(e,t){return!e||e.length!==t.length||t.some(function(o,n){return o!==e[n]})}function oe(){throw new Error("Cycle detected")}var Ct=Symbol.for("preact-signals");function ve(){if(U>1)U--;else{for(var e,t=!1;R!==void 0;){var o=R;for(R=void 0,fe++;o!==void 0;){var n=o.o;if(o.o=void 0,o.f&=-3,!(8&o.f)&&it(o))try{o.c()}catch(i){t||(e=i,t=!0)}o=n}}if(fe=0,U--,t)throw e}}var v=void 0,R=void 0,U=0,fe=0,Y=0;function nt(e){if(v!==void 0){var t=e.n;if(t===void 0||t.t!==v)return t={i:0,S:e,p:v.s,n:void 0,t:v,e:void 0,x:void 0,r:t},v.s!==void 0&&(v.s.n=t),v.s=t,e.n=t,32&v.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=v.s,t.n=void 0,v.s.n=t,v.s=t),t}}function k(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}k.prototype.brand=Ct;k.prototype.h=function(){return!0};k.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};k.prototype.U=function(e){if(this.t!==void 0){var t=e.e,o=e.x;t!==void 0&&(t.x=o,e.e=void 0),o!==void 0&&(o.e=t,e.x=void 0),e===this.t&&(this.t=o)}};k.prototype.subscribe=function(e){var t=this;return ye(function(){var o=t.value,n=32&this.f;this.f&=-33;try{e(o)}finally{this.f|=n}})};k.prototype.valueOf=function(){return this.value};k.prototype.toString=function(){return this.value+""};k.prototype.toJSON=function(){return this.value};k.prototype.peek=function(){return this.v};Object.defineProperty(k.prototype,"value",{get:function(){var e=nt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(v instanceof j&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){fe>100&&oe(),this.v=e,this.i++,Y++,U++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{ve()}}}});function me(e){return new k(e)}function it(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function rt(e){for(var t=e.s;t!==void 0;t=t.n){var o=t.S.n;if(o!==void 0&&(t.r=o),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function at(e){for(var t=e.s,o=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):o=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}e.s=o}function j(e){k.call(this,void 0),this.x=e,this.s=void 0,this.g=Y-1,this.f=4}(j.prototype=new k).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Y))return!0;if(this.g=Y,this.f|=1,this.i>0&&!it(this))return this.f&=-2,!0;var e=v;try{rt(this),v=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(o){this.v=o,this.f|=16,this.i++}return v=e,at(this),this.f&=-2,!0};j.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}k.prototype.S.call(this,e)};j.prototype.U=function(e){if(this.t!==void 0&&(k.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};j.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};j.prototype.peek=function(){if(this.h()||oe(),16&this.f)throw this.v;return this.v};Object.defineProperty(j.prototype,"value",{get:function(){1&this.f&&oe();var e=nt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function At(e){return new j(e)}function st(e){var t=e.u;if(e.u=void 0,typeof t=="function"){U++;var o=v;v=void 0;try{t()}catch(n){throw e.f&=-2,e.f|=8,ge(e),n}finally{v=o,ve()}}}function ge(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,st(e)}function jt(e){if(v!==this)throw new Error("Out-of-order effect");at(this),v=e,this.f&=-2,8&this.f&&ge(this),ve()}function J(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}J.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};J.prototype.S=function(){1&this.f&&oe(),this.f|=1,this.f&=-9,st(this),rt(this),U++;var e=v;return v=this,jt.bind(this,e)};J.prototype.N=function(){2&this.f||(this.f|=2,this.o=R,R=this)};J.prototype.d=function(){this.f|=8,1&this.f||ge(this)};function ye(e){var t=new J(e);try{t.c()}catch(o){throw t.d(),o}return t.d.bind(t)}var re;function N(e,t){f[e]=t.bind(null,f[e]||function(){})}function ee(e){re&&re(),re=e&&e.S()}function lt(e){var t=this,o=e.data,n=Tt(o);n.value=o;var i=ot(function(){for(var r=t.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return t.__$u.c=function(){var s;!Be(i.peek())&&((s=t.base)==null?void 0:s.nodeType)===3?t.base.data=i.peek():(t.__$f|=1,t.setState({}))},At(function(){var s=n.value.value;return s===0?0:s===!0?"":s||""})},[]);return i.value}lt.displayName="_st";Object.defineProperties(k.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:lt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});N("__b",function(e,t){if(typeof t.type=="string"){var o,n=t.props;for(var i in n)if(i!=="children"){var r=n[i];r instanceof k&&(o||(t.__np=o={}),o[i]=r,n[i]=r.peek())}}e(t)});N("__r",function(e,t){ee();var o,n=t.__c;n&&(n.__$f&=-2,(o=n.__$u)===void 0&&(n.__$u=o=function(i){var r;return ye(function(){r=this}),r.c=function(){n.__$f|=1,n.setState({})},r}())),ee(o),e(t)});N("__e",function(e,t,o,n){ee(),e(t,o,n)});N("diffed",function(e,t){ee();var o;if(typeof t.type=="string"&&(o=t.__e)){var n=t.__np,i=t.props;if(n){var r=o.U;if(r)for(var s in r){var l=r[s];l!==void 0&&!(s in n)&&(l.d(),r[s]=void 0)}else o.U=r={};for(var c in n){var u=r[c],d=n[c];u===void 0?(u=Et(o,c,d,i),r[c]=u):u.o(d,i)}}}e(t)});function Et(e,t,o,n){var i=t in e&&e.ownerSVGElement===void 0,r=me(o);return{o:function(s,l){r.value=s,n=l},d:ye(function(){var s=r.value.value;n[t]!==s&&(n[t]=s,i?e[t]=s:s?e.setAttribute(t,s):e.removeAttribute(t))})}}N("unmount",function(e,t){if(typeof t.type=="string"){var o=t.__e;if(o){var n=o.U;if(n){o.U=void 0;for(var i in n){var r=n[i];r&&r.d()}}}}else{var s=t.__c;if(s){var l=s.__$u;l&&(s.__$u=void 0,l.d())}}e(t)});N("__h",function(e,t,o,n){(n<3||n===9)&&(t.__$f|=2),e(t,o,n)});x.prototype.shouldComponentUpdate=function(e,t){var o=this.__$u;if(!(o&&o.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var n in t)return!0;for(var i in e)if(i!=="__source"&&e[i]!==this.props[i])return!0;for(var r in this.props)if(!(r in e))return!0;return!1};function Tt(e){return ot(function(){return me(e)},[])}var Ut={};function H(e,t){for(var o in t)e[o]=t[o];return e}function Dt(e,t,o){var n,i=/(?:\?([^#]*))?(#.*)?$/,r=e.match(i),s={};if(r&&r[1])for(var l=r[1].split("&"),c=0;c<l.length;c++){var u=l[c].split("=");s[decodeURIComponent(u[0])]=decodeURIComponent(u.slice(1).join("="))}e=he(e.replace(i,"")),t=he(t||"");for(var d=Math.max(e.length,t.length),a=0;a<d;a++)if(t[a]&&t[a].charAt(0)===":"){var y=t[a].replace(/(^:|[+*?]+$)/g,""),h=(t[a].match(/[+*?]+$/)||Ut)[0]||"",m=~h.indexOf("+"),w=~h.indexOf("*"),g=e[a]||"";if(!g&&!w&&(h.indexOf("?")<0||m)){n=!1;break}if(s[y]=decodeURIComponent(g),m||w){s[y]=e.slice(a).map(decodeURIComponent).join("/");break}}else if(t[a]!==e[a]){n=!1;break}return(o.default===!0||n!==!1)&&s}function Mt(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function Nt(e,t){return e.index=t,e.rank=function(o){return o.props.default?0:he(o.props.path).map(Ot).join("")}(e),e.props}function he(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Ot(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var Ht={},T=[],De=[],S=null,ct={url:be()},Lt=$t(ct);function be(){var e;return""+((e=S&&S.location?S.location:S&&S.getCurrentLocation?S.getCurrentLocation():typeof location<"u"?location:Ht).pathname||"")+(e.search||"")}function Rt(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(o){for(var n=T.length;n--;)if(T[n].canRoute(o))return!0;return!1}(e)&&function(o,n){n===void 0&&(n="push"),S&&S[n]?S[n](o):typeof history<"u"&&history[n+"State"]&&history[n+"State"](null,null,o)}(e,t?"replace":"push"),_t(e)}function _t(e){for(var t=!1,o=0;o<T.length;o++)T[o].routeTo(e)&&(t=!0);return t}function Wt(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),o=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!o||o.match(/^_?self$/i)))return Rt(t)}}function Ft(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function ut(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(Wt(t))return Ft(e)}while(t=t.parentNode)}}var Me=!1;function ft(e){e.history&&(S=e.history),this.state={url:e.url||be()}}H(ft.prototype=new x,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=M(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;Me||(Me=!0,S||addEventListener("popstate",function(){_t(be())}),addEventListener("click",ut)),T.push(this),S&&(this.u=S.listen(function(t){var o=t.location||t;e.routeTo(""+(o.pathname||"")+(o.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),T.splice(T.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(Nt).sort(Mt);for(var o=0;o<e.length;o++){var n=e[o],i=Dt(t,n.props.path,n.props);if(i)return[n,i]}},render:function(e,t){var o,n,i=e.onChange,r=t.url,s=this.c,l=this.g(M(e.children),r);if(l&&(n=wt(l[0],H(H({url:r,matches:o=l[1]},o),{key:void 0,ref:void 0}))),r!==(s&&s.url)){H(ct,s=this.c={url:r,previous:s&&s.url,current:n,path:n?n.props.path:null,matches:o}),s.router=this,s.active=n?[n]:[];for(var c=De.length;c--;)De[c]({});typeof i=="function"&&i(s)}return F(Lt.Provider,{value:s},n)}});var Vt=function(e){return F("a",H({onClick:ut},e))};function Jt(e,t){for(var o in t)e[o]=t[o];return e}function Ne(e,t){for(var o in e)if(o!=="__source"&&!(o in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function Oe(e){this.props=e}(Oe.prototype=new x).isPureReactComponent=!0,Oe.prototype.shouldComponentUpdate=function(e,t){return Ne(this.props,e)||Ne(this.state,t)};var He=f.__b;f.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),He&&He(e)};var qt=f.__e;f.__e=function(e,t,o,n){if(e.then){for(var i,r=t;r=r.__;)if((i=r.__c)&&i.__c)return t.__e==null&&(t.__e=o.__e,t.__k=o.__k),i.__c(e,t)}qt(e,t,o,n)};var Le=f.unmount;function ht(e,t,o){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=Jt({},e)).__c!=null&&(e.__c.__P===o&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return ht(n,t,o)})),e}function dt(e,t,o){return e&&o&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return dt(n,t,o)}),e.__c&&e.__c.__P===t&&(e.__e&&o.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=o)),e}function ae(){this.__u=0,this.t=null,this.__b=null}function pt(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function K(){this.u=null,this.o=null}f.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Le&&Le(e)},(ae.prototype=new x).__c=function(e,t){var o=t.__c,n=this;n.t==null&&(n.t=[]),n.t.push(o);var i=pt(n.__v),r=!1,s=function(){r||(r=!0,o.__R=null,i?i(l):l())};o.__R=s;var l=function(){if(!--n.__u){if(n.state.__a){var c=n.state.__a;n.__v.__k[0]=dt(c,c.__c.__P,c.__c.__O)}var u;for(n.setState({__a:n.__b=null});u=n.t.pop();)u.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(s,s)},ae.prototype.componentWillUnmount=function(){this.t=[]},ae.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=ht(this.__b,o,n.__O=n.__P)}this.__b=null}var i=t.__a&&F(P,null,e.fallback);return i&&(i.__u&=-33),[F(P,null,t.__a?null:e.children),i]};var Re=function(e,t,o){if(++o[1]===o[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(o=e.u;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;e.u=o=o[2]}};(K.prototype=new x).__a=function(e){var t=this,o=pt(t.__v),n=t.o.get(e);return n[0]++,function(i){var r=function(){t.props.revealOrder?(n.push(i),Re(t,e,n)):i()};o?o(r):r()}},K.prototype.render=function(e){this.u=null,this.o=new Map;var t=M(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var o=t.length;o--;)this.o.set(t[o],this.u=[1,0,this.u]);return e.children},K.prototype.componentDidUpdate=K.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,o){Re(e,o,t)})};var Bt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Qt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,zt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Kt=/[A-Z0-9]/g,Gt=typeof document<"u",Zt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};x.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(x.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var We=f.event;function Xt(){}function Yt(){return this.cancelBubble}function eo(){return this.defaultPrevented}f.event=function(e){return We&&(e=We(e)),e.persist=Xt,e.isPropagationStopped=Yt,e.isDefaultPrevented=eo,e.nativeEvent=e};var to={enumerable:!1,configurable:!0,get:function(){return this.class}},Fe=f.vnode;f.vnode=function(e){typeof e.type=="string"&&function(t){var o=t.props,n=t.type,i={};for(var r in o){var s=o[r];if(!(r==="value"&&"defaultValue"in o&&s==null||Gt&&r==="children"&&n==="noscript"||r==="class"||r==="className")){var l=r.toLowerCase();r==="defaultValue"&&"value"in o&&o.value==null?r="value":r==="download"&&s===!0?s="":l==="ondoubleclick"?r="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||Zt(o.type)?l==="onfocus"?r="onfocusin":l==="onblur"?r="onfocusout":zt.test(r)?r=l:n.indexOf("-")===-1&&Qt.test(r)?r=r.replace(Kt,"-$&").toLowerCase():s===null&&(s=void 0):l=r="oninput",l==="oninput"&&i[r=l]&&(r="oninputCapture"),i[r]=s}}n=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=M(o.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1})),n=="select"&&i.defaultValue!=null&&(i.value=M(o.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value})),o.class&&!o.className?(i.class=o.class,Object.defineProperty(i,"className",to)):(o.className&&!o.class||o.class&&o.className)&&(i.class=i.className=o.className),t.props=i}(e),e.$$typeof=Bt,Fe&&Fe(e)};var Ve=f.__r;f.__r=function(e){Ve&&Ve(e),e.__c};var Je=f.diffed;f.diffed=function(e){Je&&Je(e);var t=e.props,o=e.__e;o!=null&&e.type==="textarea"&&"value"in t&&t.value!==o.value&&(o.value=t.value==null?"":t.value)};var oo=0;function _(e,t,o,n,i,r){var s,l,c={};for(l in t)l=="ref"?s=t[l]:c[l]=t[l];var u={type:e,props:c,key:o,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--oo,__i:-1,__u:0,__source:i,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)c[l]===void 0&&(c[l]=s[l]);return f.vnode&&f.vnode(u),u}const no=()=>{const e=["Home","About","Portfolio"],t=["/","/about","/portfolio"];return _("nav",{className:"navbar",children:_("ul",{className:"navlist",children:e.map((o,n)=>_("li",{className:"nav-item",children:_(Vt,{activeClassname:"active",href:t[n],children:o})},n))})})},io=()=>{const e="Antti Jylhä",t="jylhant",o="gmail",n="com",i="https://github.com/jylant",r="https://www.linkedin.com/in/antti-jylha-846121265/";return _(P,{children:_("footer",{className:"footer",children:[_("p",{children:["Name: ",e]}),_("p",{children:["Email: ",_("a",{href:`mailto:${t}@${o}.${n}`,children:"Email me"})]}),_("p",{children:["GitHub: ",_("a",{href:i,children:"Jylant"})]}),_("p",{children:["LinkedIn: ",_("a",{href:r,children:"Here"})]}),_("p",{children:"© 2024 Antti Jylhä. All rights reserved."})]})})},ro="I am Antti Jylhä, a second year student in Oulu University of Applied Sciences, and I made these pages to demonstrate my programmming ventures",ao="These pages are only in english for now, because it's the most prevalent language in the field and I have time constraints",so=()=>_(P,{children:[_("h1",{children:"Welcome to My Portfolio"}),_("p",{children:"Greetings!"}),_("p",{children:ro}),_("p",{children:ao})]});function lo(){const e=()=>{const t="I'm a youthful and energetic software developer from Oulu, Finland. I'm currently studying at Oulu University of Applied Sciences.",o="Even though it's yet to show up on these pages, I love all things machine learning. My favourite language is Python, but I'm also very comfortable with Java, C++, and C#. I'm also familiar with JavaScript and React.",n="I'm always looking for new challenges and opportunities to learn new things, and I try to make most of everything that can be a learning experience.";return _(P,{children:[t," ",_("br",{})," ",_("br",{}),o,_("br",{})," ",_("br",{}),n,_("br",{})]})};return _(P,{children:[_("h1",{children:"About me"}),_("p",{children:e()})]})}const co=({title:e,description:t,images:o,url:n,myRole:i,technologies:r,myTasks:s,workDescription:l,challenges:c})=>{const u=Object.values(s);return _("div",{className:"project-block",children:[_("h2",{children:e}),_("p",{children:t}),_("ul",{className:"pics",children:o.map((d,a)=>_("li",{children:[_("img",{src:d,alt:e}),_("br",{})]},a))}),_("a",{href:n,children:"Visit Project"}),_("h3",{children:"My Role in the project"}),_("p",{children:i}),_("h3",{children:"Technologies used: "}),_("p",{children:r}),_("h3",{children:"My Tasks:"}),_("p",{children:"My tasks for the project were:"}),_("ul",{className:"tasks",children:u.map((d,a)=>_("li",{children:d},a))}),_("h3",{children:"My Work Description:"}),_("p",{children:l}),_("h3",{children:"Challenges I faced:"}),_("p",{children:c})]})},_o={name:"Portfolio website",description:"I made this website to host my portfolio and some descriptions",images:[],url:"https://github.com/Jylant/portfolio",role:"Website Developer",tech:"Preact, Vite, SCSS",tasks:{task1:"Design website",task2:"Create website as a SPA",task3:"Troubleshoot information flow",task4:"Fix portfolio page layout",task5:"Write descriptions & link projects",task6:"publish website on github pages"},workDescription:"Solo dev venture. I wanted to show that I can use preact signals, which was left incomplete in the showtime squad project. A portfolio website seemed like a useful way to do that.",challenges:"My greatest challenge lied in employing the same techniques and technologies I didn't have time to properly implement for my part of the work in the showtime squad school project, namely preact signals. My first approach was too complicated in nature, but I'm really satisfied with the finished product"},uo={name:"Showtime-Squad",description:"Website for movies and tv shows. Made as a 2nd year school project",images:[],url:"https://github.com/TVT22-3/showtime-squad",role:"Fullstack Developer",tech:"HTML, CSS, JavaScript, React, preact, Java, Spring, postgreSQL",tasks:{task1:"Plan the database structure and ER diagram",task2:"Design navbar",task3:"Structure API calls between TMDB and our backend",task4:"Design user created lists backend",task5:"Design user created lists frontend(incomplete)",task6:"Postman testing and documentation for user created lists",task7:"Miscaellaneous bugfixes and helping others with their tasks"},workDescription:"My first responsibility was to create the database structure and ER diagram. I then proceeded to design the navbar and structure the API calls between TMDB and our backend. I also designed the backend for user created lists, but didn't have time to finish the frontend for it. In between my tasks I helped others a little with their tasks and did miscellaneous bugfixes. There was also a discarded plan for more detailed automated testing for the database, which was dropped.",challenges:"I chose to start with the ER diagram because I had had some trouble with relation databases previously. I found the task easier than I thought it would be, and I'm gkad having done it. The biggest challenge was the user created lists, which I didn't have time to finish. I had to learn a lot about how to structure the backend for it with JAVA and Spring, and I didn't have time to finish the frontend for it. I'm still happy with the work I did on it, and I'm glad I got to learn more about JAVA and Spring."},fo={name:"BankSimul",description:"ATM simulator. Made as a 1st year school group project",images:["./src/assets/images/project_poster.png"],url:"https://github.com/Banksimul2023-22SPL/group_6/",role:"Fullstack Developer and de facto project coordinator",tech:"MySQL, C++, Qt, (javascript)",tasks:{task1:"Jointly ascertain the project requirements for the project from the requirements definition document",task2:"Design State Machine for ATM",task3:"Design database structure and ER diagram",task4:"Create part of the relation tables for the database with SQL",task5:"Jointly create backend for the ATM with JavaScript from example code",task6:"Frontend account balance and event log pages with Qt (C++)",task7:"Coordinate the project and help others with their tasks",task8:"Miscellaneous bugfixes"},workDescription:"I had the most clear vision of the finished product, so I was the one who designed the state machine for the ATM. We designed the database structure and ER diagram together. For the frontend I was responsible for the balance and event log pages. I also helped others with their tasks and did miscellaneous bugfixes. We kind of forgot to do a proper readme.",challenges:"The first challenge was to communicate my vision for the finished product to the other group members, which I started with a diagram for the state machine. The greatest challenge for me was using the database information in the frontend, as I had had little to no experience with Qt signals and slots before this project. I had some trouble with getting the data to show up properly, but the process was very educational. I can say that I learned a lot about debugging and using Qt, including signals and slots."},ho={name:"Brighty (because it has bright lights)",description:"Speed test game. Made as a 1st year school group project. No github repository. Provided in images an assembly example I modified from the course material. Text in pictures is in Finnish.",images:["./src/assets/images/brighty_poster.png","./src/assets/images/code_example.png"],url:"",role:"Head Programmer",tech:"C++, Arduino, (assembly)",tasks:{task1:"Jointly choose the project idea to work on",task2:"Jointly determine the hardware requirements and budget for the project",task3:"Design state machine for the game logic",task4:"Assign workloads to other team members and coordinate the project",task5:"Create an interrupt based timer for the game logic implementing provided assembly examples",task6:"Create the game logic with Arduino C++",task7:"Design and create a Simon Says side game with Arduino C++",task8:"Jointly design the project presentation",task9:"Jointly design the project poster"},workDescription:"As the first group project, we had to learn how to work together. The leadership role fell onto me, as I was the one who suggested the project idea, and I was the one who designed the state machine for the game logic. I think I did a decent job balancing the workloads according to each member's interests and capabilities. I also created the interrupt based timer for the game logic, based on provided assembly examples. Since our project was ahead of schedule, I quickly designed and implemented a Simon Says game. I directed and helped the other group members throughout the project, and I think we did a great job. We also designed the presentation and poster together. The project had no github repository, as we didn't use any version control.",challenges:"Stepping into the leadership role did not come naturally to me, but I think I did a good job. I had to learn how to balance the workloads and how to direct the other group members. I learned some good techniques for more efficient vision communication. Implementing the interrupt based timer seemed daunting at first, but I managed to do it with the help of the provided assembly examples. Directing the other group members and alleviating their concerns was less of a challenge than I thought it would be, which I can wholeheartedly attribute to the good group dynamic we had."},po={Project1:_o,Project2:uo,Project3:fo,Project4:ho},vo=me(po),mo=()=>{const e=Object.values(vo.value);return console.log("projectSignal: ",e),_("div",{className:"project-container",children:e.map((t,o)=>_(co,{title:t.name,description:t.description,images:t.images,url:t.url,myRole:t.role,technologies:t.tech,myTasks:t.tasks,workDescription:t.workDescription,challenges:t.challenges},o))})};function go(){return _(P,{children:[_("h1",{children:"My Portfolio"}),_("p",{className:"undertext",children:"Below you can see most of the projects in which I have participated."}),_(mo,{})]})}const yo=()=>_(P,{children:[_("head",{children:_("title",{children:"My Portfolio"})}),_(no,{}),_(ft,{children:[_(so,{path:"/"}),_(lo,{path:"/about"}),_(go,{path:"/portfolio"})]}),_(io,{})]});kt(_(yo,{}),document.getElementById("app"));
