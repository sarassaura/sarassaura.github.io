import{_ as o}from"./preload-helper.a4192956.js";import{a as s,b as a}from"./i18n-svelte.32f3c33b.js";var m=(t,r={})=>{let e=new Intl.DateTimeFormat(t,r);return i=>e.format(i)};const n=t=>({simpleDate:m(t,{day:"2-digit",month:"short",year:"numeric"})}),_={br:()=>o(()=>import("./index.c7312564.js"),[],import.meta.url),en:()=>o(()=>import("./index.a38850bc.js"),[],import.meta.url),es:()=>o(()=>import("./index.38e9e200.js"),[],import.meta.url)},d=(t,r)=>a[t]={...a[t],...r},c=async t=>(await _[t]()).default,y=async t=>{d(t,await c(t)),p(t)},p=t=>void(s[t]=n(t));export{y as l};