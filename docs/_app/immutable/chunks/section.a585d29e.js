import{w as h,r as b}from"./paths.a41d933a.js";import{X as L,Y as E,Z as w}from"./scheduler.e0b48db9.js";function R(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const m={};function S(e){return e==="local"?localStorage:sessionStorage}function g(e,n,t){const s=(t==null?void 0:t.serializer)??JSON,a=(t==null?void 0:t.storage)??"local";function u(d,r){S(a).setItem(d,s.stringify(r))}if(!m[e]){const d=h(n,o=>{const c=S(a).getItem(e);c&&o(s.parse(c));{const l=f=>{f.key===e&&o(f.newValue?s.parse(f.newValue):null)};return window.addEventListener("storage",l),()=>window.removeEventListener("storage",l)}}),{subscribe:r,set:i}=d;m[e]={set(o){u(e,o),i(o)},update(o){const c=o(L(d));u(e,c),i(c)},subscribe:r}}return m[e]}g("modeOsPrefers",!1);g("modeUserPrefers",void 0);g("modeCurrent",!1);const y="(prefers-reduced-motion: reduce)";function V(){return window.matchMedia(y).matches}const U=b(V(),e=>{{const n=s=>{e(s.matches)},t=window.matchMedia(y);return t.addEventListener("change",n),()=>{t.removeEventListener("change",n)}}});function x(e){const n=e-1;return n*n*n+1}function z(e,{delay:n=0,duration:t=400,easing:s=E}={}){const a=+getComputedStyle(e).opacity;return{delay:n,duration:t,easing:s,css:u=>`opacity: ${u*a}`}}function I(e,{delay:n=0,duration:t=400,easing:s=x,x:a=0,y:u=0,opacity:d=0}={}){const r=getComputedStyle(e),i=+r.opacity,o=r.transform==="none"?"":r.transform,c=i*(1-d),[l,f]=w(a),[v,$]=w(u);return{delay:n,duration:t,easing:s,css:(p,M)=>`
			transform: ${o} translate(${(1-p)*l}${f}, ${(1-p)*v}${$});
			opacity: ${i-c*M}`}}const C=h("");function Q(e){C.set(e)}export{z as a,Q as c,R as e,I as f,U as p,C as s};
