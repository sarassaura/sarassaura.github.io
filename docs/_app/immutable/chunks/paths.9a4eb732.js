import{R as u,s as h}from"./scheduler.fba4c89d.js";const i=[];function q(t,o){return{subscribe:p(t,o).subscribe}}function p(t,o=u){let n;const r=new Set;function b(e){if(h(t,e)&&(t=e,n)){const c=!i.length;for(const s of r)s[1](),i.push(s,t);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(e){b(e(t))}function _(e,c=u){const s=[e,c];return r.add(s),r.size===1&&(n=o(b,a)||u),e(t),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_10sjst6)==null?void 0:f.base)??"";var l;const j=((l=globalThis.__sveltekit_10sjst6)==null?void 0:l.assets)??d;export{j as a,d as b,q as r,p as w};
