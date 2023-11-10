import{$ as T,a0 as W,a1 as K}from"./scheduler.d8c2d053.js";import{w as X}from"./index.f7df93f8.js";function Y(n){const t=n-1;return t*t*t+1}function J(n){const t=Math.cos(n*Math.PI*.5);return Math.abs(t)<1e-14?1:1-t}function R(n){return Math.sin(n*Math.PI/2)}function Z(n,{delay:t=0,duration:c=400,easing:w=W}={}){const l=+getComputedStyle(n).opacity;return{delay:t,duration:c,easing:w,css:f=>`opacity: ${f*l}`}}function N(n,{delay:t=0,duration:c=400,easing:w=Y,x:l=0,y:f=0,opacity:h=0}={}){const p=getComputedStyle(n),m=+p.opacity,E=p.transform==="none"?"":p.transform,$=m*(1-h),[b,r]=T(l),[v,d]=T(f);return{delay:t,duration:c,easing:w,css:(i,e)=>`
			transform: ${E} translate(${(1-i)*b}${r}, ${(1-i)*v}${d});
			opacity: ${m-$*e}`}}const B=X(void 0);function g(n,t){const{computePosition:c,autoUpdate:w,offset:l,shift:f,flip:h,arrow:p,size:m,autoPlacement:E,hide:$,inline:b}=K(B),r={open:!1,autoUpdateCleanup:()=>{}},v=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let d;const i="https://www.skeleton.dev/utilities/popups";let e,L;function A(){e=document.querySelector(`[data-popup="${t.target}"]`)??document.createElement("div"),L=e.querySelector(".arrow")??document.createElement("div")}A();function k(){var a,u,U,F,I,D,M,q;if(!e)throw new Error(`The data-popup="${t.target}" element was not found. ${i}`);if(!c)throw new Error(`Floating UI 'computePosition' not found for data-popup="${t.target}". ${i}`);if(!l)throw new Error(`Floating UI 'offset' not found for data-popup="${t.target}". ${i}`);if(!f)throw new Error(`Floating UI 'shift' not found for data-popup="${t.target}". ${i}`);if(!h)throw new Error(`Floating UI 'flip' not found for data-popup="${t.target}". ${i}`);if(!p)throw new Error(`Floating UI 'arrow' not found for data-popup="${t.target}". ${i}`);const o=[];m&&o.push(m((a=t.middleware)==null?void 0:a.size)),E&&o.push(E((u=t.middleware)==null?void 0:u.autoPlacement)),$&&o.push($((U=t.middleware)==null?void 0:U.hide)),b&&o.push(b((F=t.middleware)==null?void 0:F.inline)),c(n,e,{placement:t.placement??"bottom",middleware:[l(((I=t.middleware)==null?void 0:I.offset)??8),f(((D=t.middleware)==null?void 0:D.shift)??{padding:8}),h((M=t.middleware)==null?void 0:M.flip),p(((q=t.middleware)==null?void 0:q.arrow)??{element:L||null}),...o]}).then(({x:P,y:Q,placement:j,middlewareData:z})=>{if(Object.assign(e.style,{left:`${P}px`,top:`${Q}px`}),L){const{x:_,y:O}=z.arrow,V={top:"bottom",right:"left",bottom:"top",left:"right"}[j.split("-")[0]];Object.assign(L.style,{left:_!=null?`${_}px`:"",top:O!=null?`${O}px`:"",right:"",bottom:"",[V]:"-4px"})}})}function y(){e&&(r.open=!0,t.state&&t.state({state:r.open}),k(),e.style.display="block",e.style.opacity="1",e.style.pointerEvents="auto",e.removeAttribute("inert"),r.autoUpdateCleanup=w(n,e,k),d=Array.from(e==null?void 0:e.querySelectorAll(v)))}function s(o){if(!e)return;const a=parseFloat(window.getComputedStyle(e).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{r.open=!1,t.state&&t.state({state:r.open}),e.style.opacity="0",e.setAttribute("inert",""),r.autoUpdateCleanup&&r.autoUpdateCleanup(),o&&o()},a)}function x(){r.open===!1?y():s()}function S(o){if(r.open===!1||n.contains(o.target))return;if(e&&e.contains(o.target)===!1){s();return}const a=t.closeQuery===void 0?"a[href], button":t.closeQuery,u=e==null?void 0:e.querySelectorAll(a);u==null||u.forEach(U=>{U.contains(o.target)&&s()})}const C=o=>{if(r.open===!1)return;const a=o.key;if(a==="Escape"){o.preventDefault(),n.focus(),s();return}d=Array.from(e==null?void 0:e.querySelectorAll(v)),r.open&&document.activeElement===n&&(a==="ArrowDown"||a==="Tab")&&v.length>0&&d.length>0&&(o.preventDefault(),d[0].focus())};switch(t.event){case"click":n.addEventListener("click",x,!0),window.addEventListener("click",S,!0);break;case"hover":n.addEventListener("mouseover",y,!0),n.addEventListener("mouseleave",()=>s(),!0);break;case"focus-blur":n.addEventListener("focus",x,!0),n.addEventListener("blur",()=>s(),!0);break;case"focus-click":n.addEventListener("focus",y,!0),window.addEventListener("click",S,!0);break;default:throw new Error(`Event value of '${t.event}' is not supported. ${i}`)}return window.addEventListener("keydown",C,!0),k(),{update(o){s(()=>{t=o,k(),A()})},destroy(){n.removeEventListener("click",x,!0),n.removeEventListener("mouseover",y,!0),n.removeEventListener("mouseleave",()=>s(),!0),n.removeEventListener("focus",x,!0),n.removeEventListener("focus",y,!0),n.removeEventListener("blur",()=>s(),!0),window.removeEventListener("click",S,!0),window.removeEventListener("keydown",C,!0)}}}export{J as a,R as b,Z as c,N as f,g as p,B as s};
