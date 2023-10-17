import{s as V,f as g,a as L,g as y,O as S,c as H,j as v,i as b,P as fe,N as C,d as m,o as se,h as E,w as I,D as ue,U as oe,V as ce,E as de,Q as pe,l as J,m as K,W as Y,n as X,K as me}from"../chunks/scheduler.e0b48db9.js";import{S as q,i as P,j as _,a as x,g as N,t as M,c as O,b as A,d as B,m as F,e as G}from"../chunks/index.9d7dfe42.js";import{a as $,s as R,e as Z,c as he,b as ve}from"../chunks/tabs.22f78bb3.js";import"../chunks/singletons.bf145b8e.js";import{p as _e}from"../chunks/stores.9069e061.js";function $e(o){let e,i='<ul class="list"><li>React</li> <li>Next</li> <li>Svelte</li> <li>Typescript</li> <li>GraphQl</li> <li>Websockets</li> <li>Node</li> <li>Python</li> <li>Rust</li> <li>C</li> <li>MySQL</li></ul>',t,l,r,s='<ul class="list"><li>Github</li> <li>Docker</li> <li>MongoDB</li> <li>Firebase</li> <li>Jest</li> <li>Cypress</li> <li>Playwright</li> <li>Storybook</li> <li>Figma</li> <li>Tailwind</li></ul>',a,n;return{c(){e=g("div"),e.innerHTML=i,l=L(),r=g("div"),r.innerHTML=s,this.h()},l(f){e=y(f,"DIV",{class:!0,"data-direction":!0,"data-speed":!0,"data-svelte-h":!0}),S(e)!=="svelte-13xp7ra"&&(e.innerHTML=i),l=H(f),r=y(f,"DIV",{class:!0,"data-direction":!0,"data-speed":!0,"data-svelte-h":!0}),S(r)!=="svelte-1ip1e8w"&&(r.innerHTML=s),this.h()},h(){v(e,"class","showoff"),v(e,"data-direction","left"),v(e,"data-speed","fast"),v(r,"class","showoff"),v(r,"data-direction","left"),v(r,"data-speed","fast")},m(f,p){b(f,e,p),b(f,l,p),b(f,r,p),n=!0},p:fe,i(f){n||(f&&C(()=>{n&&(t||(t=_(e,$,{duration:500,delay:250},!0)),t.run(1))}),f&&C(()=>{n&&(a||(a=_(r,$,{duration:500,delay:350},!0)),a.run(1))}),n=!0)},o(f){f&&(t||(t=_(e,$,{duration:500,delay:250},!1)),t.run(0)),f&&(a||(a=_(r,$,{duration:500,delay:350},!1)),a.run(0)),n=!1},d(f){f&&(m(e),m(l),m(r)),f&&t&&t.end(),f&&a&&a.end()}}}function be(o){return se(()=>{const e=document.querySelectorAll(".showoff");window.matchMedia("(prefers-reduced-motion: reduce)").matches||e.forEach(i=>{i.setAttribute("data-animated","true");const t=i.querySelector(".list");Array.from(t.children).forEach(r=>{const s=r.cloneNode(!0);s.setAttribute("aria-hidden","true"),t.appendChild(s)})})}),[]}class ge extends q{constructor(e){super(),P(this,e,be,$e,V,{})}}function ee(o){let e,i,t='Hi, I&#39;m Sarah a <br class="break"/> <span class="typewrite">Web Developer</span>',l,r,s,a='<a class="btn variant-filled" href="https://rxresu.me/sarahyukino/sarah-nakada">Resume</a> <a class="btn variant-ghost-tertiary" href="mailto:sarahyukinonakada@gmail.com">Email me</a>',n,f,p,d='<img src="/iphone.webp" alt="iphone"/>',c,u;return{c(){e=g("div"),i=g("p"),i.innerHTML=t,r=L(),s=g("div"),s.innerHTML=a,f=L(),p=g("div"),p.innerHTML=d,this.h()},l(h){e=y(h,"DIV",{class:!0});var D=E(e);i=y(D,"P",{class:!0,"data-svelte-h":!0}),S(i)!=="svelte-1lwnpim"&&(i.innerHTML=t),r=H(D),s=y(D,"DIV",{"data-svelte-h":!0}),S(s)!=="svelte-j3h8ym"&&(s.innerHTML=a),D.forEach(m),f=H(h),p=y(h,"DIV",{class:!0,"data-svelte-h":!0}),S(p)!=="svelte-1cueyxa"&&(p.innerHTML=d),this.h()},h(){v(i,"class","h6 w-fit title"),v(e,"class","presentation overflow-hidden md:px-16 px-4 gap-y-5 md:gap-y-20"),v(p,"class","image")},m(h,D){b(h,e,D),I(e,i),I(e,r),I(e,s),b(h,f,D),b(h,p,D),u=!0},i(h){u||(h&&C(()=>{u&&(l||(l=_(i,$,{duration:500,delay:500},!0)),l.run(1))}),h&&C(()=>{u&&(n||(n=_(s,$,{duration:500,delay:500},!0)),n.run(1))}),h&&C(()=>{u&&(c||(c=_(p,$,{duration:500,delay:1e3},!0)),c.run(1))}),u=!0)},o(h){h&&(l||(l=_(i,$,{duration:500,delay:500},!1)),l.run(0)),h&&(n||(n=_(s,$,{duration:500,delay:500},!1)),n.run(0)),h&&(c||(c=_(p,$,{duration:500,delay:1e3},!1)),c.run(0)),u=!1},d(h){h&&(m(e),m(f),m(p)),h&&l&&l.end(),h&&n&&n.end(),h&&c&&c.end()}}}function ye(o){let e,i=(o[0]=="about"||o[0]=="")&&ee();return{c(){e=g("div"),i&&i.c(),this.h()},l(t){e=y(t,"DIV",{class:!0,id:!0});var l=E(e);i&&i.l(l),l.forEach(m),this.h()},h(){v(e,"class","section about"),v(e,"id","about")},m(t,l){b(t,e,l),i&&i.m(e,null)},p(t,[l]){t[0]=="about"||t[0]==""?i?l&1&&x(i,1):(i=ee(),i.c(),x(i,1),i.m(e,null)):i&&(N(),M(i,1,1,()=>{i=null}),O())},i(t){x(i)},o(t){M(i)},d(t){t&&m(e),i&&i.d()}}}function xe(o,e,i){let t;return R.subscribe(l=>{i(0,t=l)}),[t]}class ke extends q{constructor(e){super(),P(this,e,xe,ye,V,{})}}function te(o){let e,i='<label class="label row-start-2"><input class="input" type="text" required=""/> <span>Name</span></label> <label class="label row-start-3"><input class="input" type="email" required=""/> <span>Email</span></label> <label class="label row-start-4"><textarea class="textarea" rows="5" required=""></textarea> <span>Message</span></label> <label class="label row-start-5 flex justify-center"><button class="btn variant-filled" type="button">Send</button></label>',t,l,r,s="<p>Sarah Yukino Nakada</p> <p>sarahyukinonakada@gmail.com</p> <p>(+55) 11 99146-4391</p> <p>Brazil, SP/SP</p>",a,n,f,p;return{c(){e=g("form"),e.innerHTML=i,l=L(),r=g("div"),r.innerHTML=s,this.h()},l(d){e=y(d,"FORM",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1k4ka3e"&&(e.innerHTML=i),l=H(d),r=y(d,"DIV",{class:!0,"data-svelte-h":!0}),S(r)!=="svelte-1lsbv52"&&(r.innerHTML=s),this.h()},h(){v(e,"class","space-y-6 px-8 md:px-0 flex items-center justify-center flex-col"),v(r,"class","informations")},m(d,c){b(d,e,c),b(d,l,c),b(d,r,c),n=!0,f||(p=ue(e,"input",oe(ce(o[1]))),f=!0)},i(d){n||(d&&C(()=>{n&&(t||(t=_(e,$,{duration:500,delay:500},!0)),t.run(1))}),d&&C(()=>{n&&(a||(a=_(r,$,{duration:500,delay:700},!0)),a.run(1))}),n=!0)},o(d){d&&(t||(t=_(e,$,{duration:500,delay:500},!1)),t.run(0)),d&&(a||(a=_(r,$,{duration:500,delay:700},!1)),a.run(0)),n=!1},d(d){d&&(m(e),m(l),m(r)),d&&t&&t.end(),d&&a&&a.end(),f=!1,p()}}}function we(o){let e,i=o[0]=="contact-me"&&te(o);return{c(){e=g("div"),i&&i.c(),this.h()},l(t){e=y(t,"DIV",{class:!0,id:!0});var l=E(e);i&&i.l(l),l.forEach(m),this.h()},h(){v(e,"class","section contact md:px-16 px-4"),v(e,"id","contact-me")},m(t,l){b(t,e,l),i&&i.m(e,null)},p(t,[l]){t[0]=="contact-me"?i?l&1&&x(i,1):(i=te(t),i.c(),x(i,1),i.m(e,null)):i&&(N(),M(i,1,1,()=>{i=null}),O())},i(t){x(i)},o(t){M(i)},d(t){t&&m(e),i&&i.d()}}}function Me(o,e,i){let t;R.subscribe(r=>{i(0,t=r)});function l(r){de.call(this,o,r)}return[t,l]}class Ie extends q{constructor(e){super(),P(this,e,Me,we,V,{})}}function ie(o,e,i){const t=o.slice();return t[2]=e[i],t}function le(o){let e,i,t;return{c(){e=g("div"),this.h()},l(l){e=y(l,"DIV",{class:!0}),E(e).forEach(m),this.h()},h(){v(e,"class","pseudo")},m(l,r){b(l,e,r),t=!0},i(l){t||(l&&C(()=>{t&&(i||(i=_(e,$,{duration:500,delay:250},!0)),i.run(1))}),t=!0)},o(l){l&&(i||(i=_(e,$,{duration:500,delay:250},!1)),i.run(0)),t=!1},d(l){l&&m(e),l&&i&&i.end()}}}function re(o){let e,i,t,l,r,s,a,n,f,p=o[2].node.name+"",d,c,u,h=o[2].node.description+"",D,U,j,k=o[1]!="projects"&&le();return{c(){e=g("figure"),k&&k.c(),i=L(),t=g("img"),a=L(),n=g("figcaption"),f=g("p"),d=J(p),c=L(),u=g("p"),D=J(h),U=L(),this.h()},l(w){e=y(w,"FIGURE",{class:!0});var T=E(e);k&&k.l(T),i=H(T),t=y(T,"IMG",{class:!0,src:!0,alt:!0}),a=H(T),n=y(T,"FIGCAPTION",{});var Q=E(n);f=y(Q,"P",{});var W=E(f);d=K(W,p),W.forEach(m),c=H(Q),u=y(Q,"P",{});var z=E(u);D=K(z,h),z.forEach(m),Q.forEach(m),T.forEach(m),U=H(w),this.h()},h(){v(t,"class","work"),Y(t.src,l=o[2].node.openGraphImageUrl)||v(t,"src",l),v(t,"alt",r=o[2].node.name),v(e,"class","relative")},m(w,T){b(w,e,T),k&&k.m(e,null),I(e,i),I(e,t),I(e,a),I(e,n),I(n,f),I(f,d),I(n,c),I(n,u),I(u,D),b(w,U,T),j=!0},p(w,T){w[1]!="projects"?k?T&2&&x(k,1):(k=le(),k.c(),x(k,1),k.m(e,i)):k&&(N(),M(k,1,1,()=>{k=null}),O()),(!j||T&1&&!Y(t.src,l=w[2].node.openGraphImageUrl))&&v(t,"src",l),(!j||T&1&&r!==(r=w[2].node.name))&&v(t,"alt",r),(!j||T&1)&&p!==(p=w[2].node.name+"")&&X(d,p),(!j||T&1)&&h!==(h=w[2].node.description+"")&&X(D,h)},i(w){j||(x(k),w&&C(()=>{j&&(s||(s=_(t,$,{duration:500,delay:500},!0)),s.run(1))}),j=!0)},o(w){M(k),w&&(s||(s=_(t,$,{duration:500,delay:500},!1)),s.run(0)),j=!1},d(w){w&&(m(e),m(U)),k&&k.d(),w&&s&&s.end()}}}function Te(o){let e,i,t=Z(o[0].data.viewer.pinnedItems.edges),l=[];for(let s=0;s<t.length;s+=1)l[s]=re(ie(o,t,s));const r=s=>M(l[s],1,1,()=>{l[s]=null});return{c(){e=g("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=y(s,"DIV",{class:!0,id:!0});var a=E(e);for(let n=0;n<l.length;n+=1)l[n].l(a);a.forEach(m),this.h()},h(){v(e,"class","section projects md:px-16 px-4"),v(e,"id","projects")},m(s,a){b(s,e,a);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null);i=!0},p(s,[a]){if(a&3){t=Z(s[0].data.viewer.pinnedItems.edges);let n;for(n=0;n<t.length;n+=1){const f=ie(s,t,n);l[n]?(l[n].p(f,a),x(l[n],1)):(l[n]=re(f),l[n].c(),x(l[n],1),l[n].m(e,null))}for(N(),n=t.length;n<l.length;n+=1)r(n);O()}},i(s){if(!i){for(let a=0;a<t.length;a+=1)x(l[a]);i=!0}},o(s){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)M(l[a]);i=!1},d(s){s&&m(e),pe(l,s)}}}function Le(o,e,i){let t;R.subscribe(r=>{i(1,t=r)});let{data:l}=e;return o.$$set=r=>{"data"in r&&i(0,l=r.data)},[l,t]}class He extends q{constructor(e){super(),P(this,e,Le,Te,V,{data:0})}}function ne(o){let e,i='<p class="inline-block">Federal University of ABC</p> <p class="h6">Bachelor&#39;s degree in Science and Technology</p>',t,l,r,s='<p>Federal University of ABC</p> <p class="h6">Bachelor&#39;s degree in Computer Science</p>',a,n,f,p='<p>São Mateus Technical School</p> <p class="h6">IT technician for the internet</p>',d,c;return{c(){e=g("div"),e.innerHTML=i,l=L(),r=g("div"),r.innerHTML=s,n=L(),f=g("div"),f.innerHTML=p,this.h()},l(u){e=y(u,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1j991lh"&&(e.innerHTML=i),l=H(u),r=y(u,"DIV",{class:!0,"data-svelte-h":!0}),S(r)!=="svelte-tf34pr"&&(r.innerHTML=s),n=H(u),f=y(u,"DIV",{class:!0,"data-svelte-h":!0}),S(f)!=="svelte-2c16se"&&(f.innerHTML=p),this.h()},h(){v(e,"class","flex gap-y-2 flex-col justify-center items-center"),v(r,"class","flex gap-y-2 flex-col justify-center items-center"),v(f,"class","flex gap-y-2 flex-col justify-center items-center")},m(u,h){b(u,e,h),b(u,l,h),b(u,r,h),b(u,n,h),b(u,f,h),c=!0},i(u){c||(u&&C(()=>{c&&(t||(t=_(e,$,{duration:500,delay:700},!0)),t.run(1))}),u&&C(()=>{c&&(a||(a=_(r,$,{duration:500,delay:700},!0)),a.run(1))}),u&&C(()=>{c&&(d||(d=_(f,$,{duration:500,delay:700},!0)),d.run(1))}),c=!0)},o(u){u&&(t||(t=_(e,$,{duration:500,delay:700},!1)),t.run(0)),u&&(a||(a=_(r,$,{duration:500,delay:700},!1)),a.run(0)),u&&(d||(d=_(f,$,{duration:500,delay:700},!1)),d.run(0)),c=!1},d(u){u&&(m(e),m(l),m(r),m(n),m(f)),u&&t&&t.end(),u&&a&&a.end(),u&&d&&d.end()}}}function De(o){let e,i=o[0]=="qualifications"&&ne();return{c(){e=g("div"),i&&i.c(),this.h()},l(t){e=y(t,"DIV",{class:!0,id:!0});var l=E(e);i&&i.l(l),l.forEach(m),this.h()},h(){v(e,"class","section qualifications md:px-16 px-4 flex gap-8 flex-col md:flex-row justify-center items-center"),v(e,"id","qualifications")},m(t,l){b(t,e,l),i&&i.m(e,null)},p(t,[l]){t[0]=="qualifications"?i?l&1&&x(i,1):(i=ne(),i.c(),x(i,1),i.m(e,null)):i&&(N(),M(i,1,1,()=>{i=null}),O())},i(t){x(i)},o(t){M(i)},d(t){t&&m(e),i&&i.d()}}}function Ce(o,e,i){let t;return R.subscribe(l=>{i(0,t=l)}),[t]}class Ee extends q{constructor(e){super(),P(this,e,Ce,De,V,{})}}function ae(o){let e,i,t,l="<div>Frontend</div> <div>Backend</div> <div>Design</div>",r,s;return e=new ge({}),{c(){A(e.$$.fragment),i=L(),t=g("div"),t.innerHTML=l,this.h()},l(a){B(e.$$.fragment,a),i=H(a),t=y(a,"DIV",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-7p2bmv"&&(t.innerHTML=l),this.h()},h(){v(t,"class","flex flex-row gap-x-4")},m(a,n){F(e,a,n),b(a,i,n),b(a,t,n),s=!0},i(a){s||(x(e.$$.fragment,a),a&&C(()=>{s&&(r||(r=_(t,$,{duration:500,delay:500},!0)),r.run(1))}),s=!0)},o(a){M(e.$$.fragment,a),a&&(r||(r=_(t,$,{duration:500,delay:500},!1)),r.run(0)),s=!1},d(a){a&&(m(i),m(t)),G(e,a),a&&r&&r.end()}}}function Se(o){let e,i,t=o[0]=="skills"&&ae();return{c(){e=g("div"),t&&t.c(),this.h()},l(l){e=y(l,"DIV",{class:!0,id:!0});var r=E(e);t&&t.l(r),r.forEach(m),this.h()},h(){v(e,"class","section skills md:px-16 px-4 flex flex-col items-center justify-center"),v(e,"id","skills")},m(l,r){b(l,e,r),t&&t.m(e,null),i=!0},p(l,[r]){l[0]=="skills"?t?r&1&&x(t,1):(t=ae(),t.c(),x(t,1),t.m(e,null)):t&&(N(),M(t,1,1,()=>{t=null}),O())},i(l){i||(x(t),i=!0)},o(l){M(t),i=!1},d(l){l&&m(e),t&&t.d()}}}function je(o,e,i){let t;return R.subscribe(l=>{i(0,t=l)}),[t]}class Ve extends q{constructor(e){super(),P(this,e,je,Se,V,{})}}function qe(o){let e,i,t,l,r,s,a,n,f,p,d;return i=new ke({}),l=new Ve({}),s=new He({props:{data:o[0]}}),n=new Ee({}),p=new Ie({}),{c(){e=g("div"),A(i.$$.fragment),t=L(),A(l.$$.fragment),r=L(),A(s.$$.fragment),a=L(),A(n.$$.fragment),f=L(),A(p.$$.fragment),this.h()},l(c){e=y(c,"DIV",{class:!0});var u=E(e);B(i.$$.fragment,u),t=H(u),B(l.$$.fragment,u),r=H(u),B(s.$$.fragment,u),a=H(u),B(n.$$.fragment,u),f=H(u),B(p.$$.fragment,u),u.forEach(m),this.h()},h(){v(e,"class","content flex items-center flex-col")},m(c,u){b(c,e,u),F(i,e,null),I(e,t),F(l,e,null),I(e,r),F(s,e,null),I(e,a),F(n,e,null),I(e,f),F(p,e,null),d=!0},p(c,[u]){const h={};u&1&&(h.data=c[0]),s.$set(h)},i(c){d||(x(i.$$.fragment,c),x(l.$$.fragment,c),x(s.$$.fragment,c),x(n.$$.fragment,c),x(p.$$.fragment,c),d=!0)},o(c){M(i.$$.fragment,c),M(l.$$.fragment,c),M(s.$$.fragment,c),M(n.$$.fragment,c),M(p.$$.fragment,c),d=!1},d(c){c&&m(e),G(i),G(l),G(s),G(n),G(p)}}}function Pe(o,e,i){let t;me(o,_e,n=>i(3,t=n));let{data:l}=e;const r=["about","skills","projects","qualifications","contact-me"];let s,a;return se(()=>{s=document.querySelector(".tab-list"),a=document.querySelectorAll(".section");let n=new IntersectionObserver(f=>{f.forEach(p=>{if(p.isIntersecting){he(r.indexOf(p.target.id),s),ve(p.target.id),console.log(p.target.id);const d=t.url;d.hash=r[r.indexOf(p.target.id)]}})},{threshold:.3});a.forEach(f=>{n.observe(f)})}),o.$$set=n=>{"data"in n&&i(0,l=n.data)},[l]}class Oe extends q{constructor(e){super(),P(this,e,Pe,qe,V,{data:0})}}export{Oe as component};
