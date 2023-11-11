var R=Object.defineProperty;var F=(t,e,n)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);function D(){}const ot=t=>t;function G(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function at(){return Object.create(null)}function I(t){t.forEach(z)}function U(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function ft(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function _t(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const i of e)i(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t){let e;return M(t,n=>e=n)(),e}function dt(t,e,n){t.$$.on_destroy.push(M(e,n))}function mt(t,e,n,i){if(t){const s=L(t,e,n,i);return t[0](s)}}function L(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function yt(t,e,n,i,s,l){if(s){const r=L(e,n,i,l);t.p(r,s)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xt(t){const e={};for(const n in t)e[n]=!0;return e}function Et(t){return t??""}function Nt(t,e,n){return t.set(n),e}function Tt(t){return t&&U(t.destroy)?t.destroy:D}function vt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let b=!1;function wt(){b=!0}function At(){b=!1}function W(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&c.push(u)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:W(1,s,O=>e[n[O]].claim_order,a))-1;i[c]=n[u]+1;const A=u+1;n[A]=c,s=Math.max(A,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(r[c],u)}}function K(t,e){t.appendChild(e)}function Q(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=v("style");return e.textContent="/* empty */",V(Q(t),e),e.sheet}function V(t,e){return K(t.head||t,e),e.sheet}function X(t,e){if(b){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Y(t,e,n){t.insertBefore(e,n||null)}function Z(t,e,n){b&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function Ht(){return w(" ")}function Dt(){return w("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function $(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:$(t,e,n)}function St(t){return t.dataset.svelteH}function jt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Pt(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,s=!1){j(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function q(t,e,n,i){return P(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function qt(t,e,n){return q(t,e,n,v)}function Bt(t,e,n){return q(t,e,n,S)}function tt(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function Ot(t){return tt(t," ")}function k(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Rt(t,e){const n=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new C(e);j(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(e,l)}function Ft(t,e){e=""+e,t.data!==e&&(t.data=e)}function Gt(t,e){t.value=e??""}function zt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function It(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class nt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=S(n.nodeName):this.e=v(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Y(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class C extends nt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Z(this.t,this.n[i],n)}}function Ut(t,e){return new t(e)}let y;function g(t){y=t}function d(){if(!y)throw new Error("Function called outside component initialization");return y}function Wt(t){d().$$.on_mount.push(t)}function Jt(t){d().$$.after_update.push(t)}function Kt(t){d().$$.on_destroy.push(t)}function Qt(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=et(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Vt(t,e){return d().$$.context.set(t,e),e}function Xt(t){return d().$$.context.get(t)}function Yt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],H=[];let h=[];const N=[],B=Promise.resolve();let T=!1;function it(){T||(T=!0,B.then(rt))}function Zt(){return it(),B}function st(t){h.push(t)}function $t(t){N.push(t)}const x=new Set;let _=0;function rt(){if(_!==0)return;const t=y;do{try{for(;_<m.length;){const e=m[_];_++,g(e),ct(e.$$)}}catch(e){throw m.length=0,_=0,e}for(g(null),m.length=0,_=0;H.length;)H.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];x.has(n)||(x.add(n),n())}h.length=0}while(m.length);for(;N.length;)N.pop()();T=!1,x.clear(),g(t)}function ct(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}function te(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{vt as $,pt as A,st as B,D as C,dt as D,Vt as E,Xt as F,xt as G,G as H,gt as I,Mt as J,I as K,Yt as L,jt as M,Gt as N,Qt as O,Tt as P,C as Q,S as R,Rt as S,Bt as T,Nt as U,Ct as V,$t as W,Lt as X,Kt as Y,ft as Z,U as _,Ht as a,ot as a0,ht as a1,Q as a2,kt as a3,et as a4,at as a5,rt as a6,_t as a7,te as a8,y as a9,g as aa,z as ab,m as ac,it as ad,wt as ae,At as af,Jt as b,Ot as c,E as d,Dt as e,v as f,qt as g,Pt as h,Z as i,$ as j,zt as k,w as l,tt as m,Ft as n,Wt as o,H as p,Ut as q,It as r,ut as s,Zt as t,X as u,mt as v,St as w,Et as x,yt as y,bt as z};