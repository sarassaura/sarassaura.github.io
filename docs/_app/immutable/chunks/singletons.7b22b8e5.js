import{S as b,s as w}from"./scheduler.f05f386a.js";const u=[];function I(e,t){return{subscribe:d(e,t).subscribe}}function d(e,t=b){let n;const o=new Set;function r(s){if(w(e,s)&&(e=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){r(s(e))}function a(s,c=b){const l=[s,c];return o.add(l),o.size===1&&(n=t(r,i)||b),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}var g;const y=((g=globalThis.__sveltekit_rrylv)==null?void 0:g.base)??"";var k;const E=((k=globalThis.__sveltekit_rrylv)==null?void 0:k.assets)??y,S="1697149676747",x="sveltekit:snapshot",O="sveltekit:scroll",U="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function L(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function N(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...p,"":p.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function P(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function V(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||R(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:o,download:i}}function Y(e){let t=null,n=null,o=null,r=null,i=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=v(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:_[o??"off"],preload_data:_[r??"off"],keep_focus:c(t),noscroll:c(n),reload:c(i),replace_state:c(a)}}function h(e){const t=d(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function i(a){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:r,subscribe:i}}function A(){const{set:e,subscribe:t}=d(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==S;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function R(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let m;function j(e){m=e.client}function q(e){return(...t)=>m[e](...t)}const K={url:h({}),page:h({}),navigating:d(null),updated:A()};export{U as I,p as P,O as S,x as a,V as b,Y as c,K as d,y as e,P as f,L as g,j as h,R as i,q as j,I as r,N as s,d as w};
