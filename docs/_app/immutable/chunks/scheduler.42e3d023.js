var F=Object.defineProperty;var G=(t,e,n)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function H(){}const at=t=>t;function z(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function ut(){return Object.create(null)}function U(t){t.forEach(I)}function W(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function _t(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function ht(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const i of e)i(void 0);return H}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t){let e;return M(t,n=>e=n)(),e}function mt(t,e,n){t.$$.on_destroy.push(M(e,n))}function pt(t,e,n,i){if(t){const s=S(t,e,n,i);return t[0](s)}}function S(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function yt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function gt(t,e,n,i,s,l){if(s){const r=S(e,n,i,l);t.p(r,s)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function xt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Et(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function vt(t){const e={};for(const n in t)e[n]=!0;return e}function wt(t,e,n){return t.set(n),e}function Tt(t){return t&&W(t.destroy)?t.destroy:H}function Nt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let g=!1;function At(){g=!0}function kt(){g=!1}function J(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&c.push(u)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:J(1,s,R=>e[n[R]].claim_order,a))-1;i[c]=n[u]+1;const A=u+1;n[A]=c,s=Math.max(A,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(r[c],u)}}function Q(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=T("style");return e.textContent="/* empty */",X(V(t),e),e.sheet}function X(t,e){return Q(t.head||t,e),e.sheet}function Y(t,e){if(g){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){g&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function Ht(){return N(" ")}function Mt(){return N("")}function St(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function L(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const tt=["width","height"];function jt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&tt.indexOf(i)===-1?t[i]=e[i]:L(t,i,e[i])}function Lt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:L(t,e,n)}function Pt(t){return t.dataset.svelteH}function Ot(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function qt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,s=!1){P(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function q(t,e,n,i){return O(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Bt(t,e,n){return q(t,e,n,T)}function Rt(t,e,n){return q(t,e,n,j)}function et(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function Ft(t){return et(t," ")}function k(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Gt(t,e){const n=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new C(e);P(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(e,l)}function zt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e){t.value=e??""}function Ut(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Wt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class it{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=j(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class C extends it{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function Jt(t,e){return new t(e)}let y;function b(t){y=t}function d(){if(!y)throw new Error("Function called outside component initialization");return y}function Kt(t){d().$$.on_mount.push(t)}function Qt(t){d().$$.after_update.push(t)}function Vt(t){d().$$.on_destroy.push(t)}function Xt(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=nt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Yt(t,e){return d().$$.context.set(t,e),e}function Zt(t){return d().$$.context.get(t)}function $t(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],D=[];let h=[];const v=[],B=Promise.resolve();let w=!1;function st(){w||(w=!0,B.then(ct))}function te(){return st(),B}function rt(t){h.push(t)}function ee(t){v.push(t)}const x=new Set;let _=0;function ct(){if(_!==0)return;const t=y;do{try{for(;_<m.length;){const e=m[_];_++,b(e),lt(e.$$)}}catch(e){throw m.length=0,_=0,e}for(b(null),m.length=0,_=0;D.length;)D.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];x.has(n)||(x.add(n),n())}h.length=0}while(m.length);for(;v.length;)v.pop()();w=!1,x.clear(),b(t)}function lt(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}function ne(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{W as $,mt as A,Yt as B,Zt as C,vt as D,z as E,xt as F,St as G,$t as H,U as I,Ot as J,It as K,jt as L,Et as M,Xt as N,Tt as O,C as P,j as Q,Wt as R,Gt as S,Rt as T,wt as U,Dt as V,Pt as W,ee as X,Lt as Y,Vt as Z,_t as _,Ht as a,Nt as a0,at as a1,dt as a2,V as a3,Ct as a4,nt as a5,ut as a6,ct as a7,ht as a8,ne as a9,y as aa,b as ab,I as ac,m as ad,st as ae,At as af,kt as ag,Qt as b,Ft as c,E as d,Mt as e,T as f,Bt as g,qt as h,$ as i,L as j,Ut as k,N as l,et as m,zt as n,Kt as o,D as p,Jt as q,pt as r,ft as s,te as t,gt as u,bt as v,yt as w,rt as x,H as y,Y as z};