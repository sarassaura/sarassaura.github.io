import{w as E,r as P}from"./singletons.872757ce.js";import{W as x,X as A,Y as h}from"./scheduler.bd928108.js";function R(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const g={};function S(e){return e==="local"?localStorage:sessionStorage}function m(e,t,n){const s=(n==null?void 0:n.serializer)??JSON,r=(n==null?void 0:n.storage)??"local";function u(f,c){S(r).setItem(f,s.stringify(c))}if(!g[e]){const f=E(t,o=>{const a=S(r).getItem(e);a&&o(s.parse(a));{const i=l=>{l.key===e&&o(l.newValue?s.parse(l.newValue):null)};return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)}}),{subscribe:c,set:d}=f;g[e]={set(o){u(e,o),d(o)},update(o){const a=o(x(f));u(e,a),d(a)},subscribe:c}}return g[e]}m("modeOsPrefers",!1);m("modeUserPrefers",void 0);m("modeCurrent",!1);const w="(prefers-reduced-motion: reduce)";function V(){return window.matchMedia(w).matches}const U=P(V(),e=>{{const t=s=>{e(s.matches)},n=window.matchMedia(w);return n.addEventListener("change",t),()=>{n.removeEventListener("change",t)}}});function q(e){const t=e-1;return t*t*t+1}function W(e,{delay:t=0,duration:n=400,easing:s=A}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:u=>`opacity: ${u*r}`}}function z(e,{delay:t=0,duration:n=400,easing:s=q,x:r=0,y:u=0,opacity:f=0}={}){const c=getComputedStyle(e),d=+c.opacity,o=c.transform==="none"?"":c.transform,a=d*(1-f),[i,l]=h(r),[v,$]=h(u);return{delay:t,duration:n,easing:s,css:(y,M)=>`
			transform: ${o} translate(${(1-y)*i}${l}, ${(1-y)*v}${$});
			opacity: ${d-a*M}`}}function I(e,t,n){t.forEach((s,r)=>{"#"+s==n&&p(r,e)}),n==""&&p(0,e)}function p(e,t){if(t!=null&&t.querySelectorAll("a")!=null){const n=t.querySelectorAll("a")[e].offsetLeft,s=t.querySelectorAll("a")[e].offsetWidth/t.offsetWidth;t.style.setProperty("--_left",n+"px"),t.style.setProperty("--_width",s.toString())}}export{W as a,p as c,R as e,z as f,U as p,I as u};
