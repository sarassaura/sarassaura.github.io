function E(){}const Z=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function $(){return Object.create(null)}function B(t){t.forEach(T)}function M(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}function N(t,...e){if(t==null){for(const i of e)i(void 0);return E}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function nt(t){let e;return N(t,n=>e=n)(),e}function it(t,e,n){t.$$.on_destroy.push(N(e,n))}function rt(t,e,n,i){if(t){const r=A(t,e,n,i);return t[0](r)}}function A(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function ct(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function st(t,e,n,i,r,o){if(r){const c=A(e,n,i,o);t.p(c,r)}}function lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ot(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ut(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function at(t){const e={};for(const n in t)e[n]=!0;return e}function ft(t){return t&&M(t.destroy)?t.destroy:E}function _t(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let p=!1;function dt(){p=!0}function ht(){p=!1}function q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:q(1,r,D=>e[n[D]].claim_order,u))-1;i[s]=n[a]+1;const w=a+1;n[w]=s,r=Math.max(w,r)}const o=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function H(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=j("style");return e.textContent="/* empty */",L(I(t),e),e.sheet}function L(t,e){return H(t.head||t,e),e.sheet}function R(t,e){if(p){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){p&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function yt(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function gt(){return v(" ")}function xt(){return v("")}function vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function U(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const W=["width","height"];function wt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&W.indexOf(i)===-1?t[i]=e[i]:U(t,i,e[i])}function kt(t){return t.dataset.svelteH}function Et(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Nt(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,r=!1){G(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,e,n,i){return C(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function At(t,e,n){return O(t,e,n,j)}function jt(t,e,n){return O(t,e,n,z)}function J(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function Ct(t){return J(t," ")}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function St(t,e){t.value=e??""}function Dt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function K(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Pt(t,e){return new t(e)}let m;function y(t){m=t}function h(){if(!m)throw new Error("Function called outside component initialization");return m}function Tt(t){h().$$.on_mount.push(t)}function Bt(t){h().$$.after_update.push(t)}function Mt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=K(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function qt(t,e){return h().$$.context.set(t,e),e}function Ft(t){return h().$$.context.get(t)}function Ht(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],k=[];let _=[];const g=[],S=Promise.resolve();let x=!1;function Q(){x||(x=!0,S.then(X))}function It(){return Q(),S}function V(t){_.push(t)}function Lt(t){g.push(t)}const b=new Set;let f=0;function X(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,y(e),Y(e.$$)}}catch(e){throw d.length=0,f=0,e}for(y(null),d.length=0,f=0;k.length;)k.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(d.length);for(;g.length;)g.pop()();x=!1,b.clear(),y(t)}function Y(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}function Rt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{$,st as A,lt as B,ct as C,at as D,P as E,ot as F,vt as G,Ht as H,B as I,Et as J,St as K,wt as L,ut as M,it as N,Mt as O,ft as P,V as Q,kt as R,E as S,bt as T,Lt as U,z as V,jt as W,I as X,mt as Y,M as Z,K as _,gt as a,X as a0,et as a1,Rt as a2,m as a3,y as a4,T as a5,d as a6,Q as a7,dt as a8,ht as a9,Bt as b,Ct as c,yt as d,xt as e,j as f,At as g,Nt as h,pt as i,U as j,Dt as k,v as l,J as m,Ot as n,Tt as o,k as p,Pt as q,qt as r,tt as s,It as t,Ft as u,nt as v,Z as w,_t as x,rt as y,R as z};