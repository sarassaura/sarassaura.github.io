import{_ as o}from"./preload-helper.a4192956.js";import{a as s,b as a}from"./i18n-svelte.32f3c33b.js";var m=(t,r={})=>{let e=new Intl.DateTimeFormat(t,r);return i=>e.format(i)};const n=t=>({simpleDate:m(t,{day:"2-digit",month:"short",year:"numeric"})}),_={br:()=>o(()=>import("./index.7f8a747d.js"),[],import.meta.url),en:()=>o(()=>import("./index.1178a2f1.js"),[],import.meta.url),es:()=>o(()=>import("./index.eb11e966.js"),[],import.meta.url)},d=(t,r)=>a[t]={...a[t],...r},c=async t=>(await _[t]()).default,y=async t=>{d(t,await c(t)),p(t)},p=t=>void(s[t]=n(t));export{y as l};