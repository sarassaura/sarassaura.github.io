import{s as S,f as m,a as w,g as v,Q as T,c as k,j as o,i as b,R as g,d as u,o as O,h as M,y as p,F as Y,W as z,X as J,G as X,S as K,l as G,m as B,Y as N,n as R}from"../chunks/scheduler.fba4c89d.js";import{S as C,i as H,b as L,d as D,m as E,a as j,t as V,e as F}from"../chunks/index.83bc12b2.js";import{e as U}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.d7c553d4.js";import"../chunks/paths.ba29c09f.js";function Z(n){let e,i='<ul class="list"><li>React</li> <li>Next</li> <li>Svelte</li> <li>Typescript</li> <li>GraphQl</li> <li>Websockets</li> <li>Node</li> <li>Python</li> <li>Rust</li> <li>C</li> <li>MySQL</li></ul>',a,t,l='<ul class="list"><li>Github</li> <li>Docker</li> <li>MongoDB</li> <li>Firebase</li> <li>Jest</li> <li>Cypress</li> <li>Playwright</li> <li>Storybook</li> <li>Figma</li> <li>Tailwind</li></ul>';return{c(){e=m("div"),e.innerHTML=i,a=w(),t=m("div"),t.innerHTML=l,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-direction":!0,"data-speed":!0,"data-svelte-h":!0}),T(e)!=="svelte-1k04xmb"&&(e.innerHTML=i),a=k(s),t=v(s,"DIV",{class:!0,"data-direction":!0,"data-speed":!0,"data-svelte-h":!0}),T(t)!=="svelte-13f2452"&&(t.innerHTML=l),this.h()},h(){o(e,"class","showoff"),o(e,"data-direction","left"),o(e,"data-speed","fast"),o(t,"class","showoff"),o(t,"data-direction","left"),o(t,"data-speed","fast")},m(s,r){b(s,e,r),b(s,a,r),b(s,t,r)},p:g,i:g,o:g,d(s){s&&(u(e),u(a),u(t))}}}function ee(n){return O(()=>{const e=document.querySelectorAll(".showoff");window.matchMedia("(prefers-reduced-motion: reduce)").matches||e.forEach(i=>{i.setAttribute("data-animated","true");const a=i.querySelector(".list");Array.from(a.children).forEach(l=>{const s=l.cloneNode(!0);s.setAttribute("aria-hidden","true"),a.appendChild(s)})})}),[]}class te extends C{constructor(e){super(),H(this,e,ee,Z,S,{})}}function ae(n){let e,i='<div class="presentation overflow-hidden md:px-16 gap-y-10 md:gap-y-20"><p class="h6 w-fit">Hi, I&#39;m Sarah a <br class="break"/>Web Developer</p> <div><a class="btn variant-filled" href="https://rxresu.me/sarahyukino/sarah-nakada">Resume</a> <a class="btn variant-ghost-tertiary" href="mailto:sarahyukinonakada@gmail.com">Email me</a></div></div> <div class="image"><img src="/iphone.webp" alt="iphone"/></div>';return{c(){e=m("div"),e.innerHTML=i,this.h()},l(a){e=v(a,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),T(e)!=="svelte-pmikmq"&&(e.innerHTML=i),this.h()},h(){o(e,"class","section about"),o(e,"id","about")},m(a,t){b(a,e,t)},p:g,i:g,o:g,d(a){a&&u(e)}}}class ie extends C{constructor(e){super(),H(this,e,null,ae,S,{})}}function se(n){let e,i,a='<label class="label row-start-2"><span>Name</span> <input class="input" type="text"/></label> <label class="label row-start-3"><span>Email</span> <input class="input" type="email"/></label> <label class="label row-start-4"><span>Message</span> <textarea class="textarea" rows="5"></textarea></label> <label class="label row-start-5 flex justify-center"><button class="btn variant-filled" type="button">Send</button></label>',t,l,s="<p>Sarah Yukino Nakada</p> <p>sarahyukinonakada@gmail.com</p> <p>(+55) 11 99146-4391</p> <p>Brazil, SP/SP</p>",r,d;return{c(){e=m("div"),i=m("form"),i.innerHTML=a,t=w(),l=m("div"),l.innerHTML=s,this.h()},l($){e=v($,"DIV",{class:!0,id:!0});var h=M(e);i=v(h,"FORM",{"data-svelte-h":!0}),T(i)!=="svelte-14uthgb"&&(i.innerHTML=a),t=k(h),l=v(h,"DIV",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-16l7688"&&(l.innerHTML=s),h.forEach(u),this.h()},h(){o(l,"class","informations"),o(e,"class","section contact md:px-16"),o(e,"id","contact-me")},m($,h){b($,e,h),p(e,i),p(e,t),p(e,l),r||(d=Y(i,"input",z(J(n[0]))),r=!0)},p:g,i:g,o:g,d($){$&&u(e),r=!1,d()}}}function ne(n){function e(i){X.call(this,n,i)}return[e]}class le extends C{constructor(e){super(),H(this,e,ne,se,S,{})}}function Q(n,e,i){const a=n.slice();return a[1]=e[i],a}function W(n){let e,i,a,t,l,s,r,d=n[1].node.name+"",$,h,y,c=n[1].node.description+"",f,I;return{c(){e=m("figure"),i=m("img"),l=w(),s=m("figcaption"),r=m("p"),$=G(d),h=w(),y=m("p"),f=G(c),I=w(),this.h()},l(_){e=v(_,"FIGURE",{});var x=M(e);i=v(x,"IMG",{class:!0,src:!0,alt:!0}),l=k(x),s=v(x,"FIGCAPTION",{});var P=M(s);r=v(P,"P",{});var q=M(r);$=B(q,d),q.forEach(u),h=k(P),y=v(P,"P",{});var A=M(y);f=B(A,c),A.forEach(u),P.forEach(u),x.forEach(u),I=k(_),this.h()},h(){o(i,"class","work"),N(i.src,a=n[1].node.openGraphImageUrl)||o(i,"src",a),o(i,"alt",t=n[1].node.name)},m(_,x){b(_,e,x),p(e,i),p(e,l),p(e,s),p(s,r),p(r,$),p(s,h),p(s,y),p(y,f),b(_,I,x)},p(_,x){x&1&&!N(i.src,a=_[1].node.openGraphImageUrl)&&o(i,"src",a),x&1&&t!==(t=_[1].node.name)&&o(i,"alt",t),x&1&&d!==(d=_[1].node.name+"")&&R($,d),x&1&&c!==(c=_[1].node.description+"")&&R(f,c)},d(_){_&&(u(e),u(I))}}}function re(n){let e,i=U(n[0].data.viewer.pinnedItems.edges),a=[];for(let t=0;t<i.length;t+=1)a[t]=W(Q(n,i,t));return{c(){e=m("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0,id:!0});var l=M(e);for(let s=0;s<a.length;s+=1)a[s].l(l);l.forEach(u),this.h()},h(){o(e,"class","section projects md:px-16"),o(e,"id","projects")},m(t,l){b(t,e,l);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null)},p(t,[l]){if(l&1){i=U(t[0].data.viewer.pinnedItems.edges);let s;for(s=0;s<i.length;s+=1){const r=Q(t,i,s);a[s]?a[s].p(r,l):(a[s]=W(r),a[s].c(),a[s].m(e,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=i.length}},i:g,o:g,d(t){t&&u(e),K(a,t)}}}function ce(n,e,i){let{data:a}=e;return n.$$set=t=>{"data"in t&&i(0,a=t.data)},[a]}class oe extends C{constructor(e){super(),H(this,e,ce,re,S,{data:0})}}function de(n){let e,i='<div class="flex gap-y-2 flex-col justify-center items-center"><p class="inline-block">Federal University of ABC</p> <p class="h6">Bachelor&#39;s degree in Science and Technology</p></div> <div class="flex gap-y-2 flex-col justify-center items-center"><p>Federal University of ABC</p> <p class="h6">Bachelor&#39;s degree in Computer Science</p></div> <div class="flex gap-y-2 flex-col justify-center items-center"><p>São Mateus Technical School</p> <p class="h6">IT technician for the internet</p></div>';return{c(){e=m("div"),e.innerHTML=i,this.h()},l(a){e=v(a,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),T(e)!=="svelte-1lw29y0"&&(e.innerHTML=i),this.h()},h(){o(e,"class","section qualifications md:px-16 flex gap-8 flex-col md:flex-row justify-center items-center"),o(e,"id","qualifications")},m(a,t){b(a,e,t)},p:g,i:g,o:g,d(a){a&&u(e)}}}class fe extends C{constructor(e){super(),H(this,e,null,de,S,{})}}function ue(n){let e,i,a,t,l="<div>Frontend</div> <div>Backend</div> <div>Design</div>",s;return i=new te({}),{c(){e=m("div"),L(i.$$.fragment),a=w(),t=m("div"),t.innerHTML=l,this.h()},l(r){e=v(r,"DIV",{class:!0,id:!0});var d=M(e);D(i.$$.fragment,d),a=k(d),t=v(d,"DIV",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-1fwldbc"&&(t.innerHTML=l),d.forEach(u),this.h()},h(){o(t,"class","flex flex-row gap-x-4"),o(e,"class","section skills md:px-16 flex flex-col items-center justify-center"),o(e,"id","skills")},m(r,d){b(r,e,d),E(i,e,null),p(e,a),p(e,t),s=!0},p:g,i(r){s||(j(i.$$.fragment,r),s=!0)},o(r){V(i.$$.fragment,r),s=!1},d(r){r&&u(e),F(i)}}}class he extends C{constructor(e){super(),H(this,e,null,ue,S,{})}}function pe(n){let e,i,a,t,l,s,r,d,$,h,y;return i=new ie({}),t=new he({}),s=new oe({props:{data:n[0]}}),d=new fe({}),h=new le({}),{c(){e=m("div"),L(i.$$.fragment),a=w(),L(t.$$.fragment),l=w(),L(s.$$.fragment),r=w(),L(d.$$.fragment),$=w(),L(h.$$.fragment),this.h()},l(c){e=v(c,"DIV",{class:!0});var f=M(e);D(i.$$.fragment,f),a=k(f),D(t.$$.fragment,f),l=k(f),D(s.$$.fragment,f),r=k(f),D(d.$$.fragment,f),$=k(f),D(h.$$.fragment,f),f.forEach(u),this.h()},h(){o(e,"class","content flex items-center flex-col")},m(c,f){b(c,e,f),E(i,e,null),p(e,a),E(t,e,null),p(e,l),E(s,e,null),p(e,r),E(d,e,null),p(e,$),E(h,e,null),y=!0},p(c,[f]){const I={};f&1&&(I.data=c[0]),s.$set(I)},i(c){y||(j(i.$$.fragment,c),j(t.$$.fragment,c),j(s.$$.fragment,c),j(d.$$.fragment,c),j(h.$$.fragment,c),y=!0)},o(c){V(i.$$.fragment,c),V(t.$$.fragment,c),V(s.$$.fragment,c),V(d.$$.fragment,c),V(h.$$.fragment,c),y=!1},d(c){c&&u(e),F(i),F(t),F(s),F(d),F(h)}}}function me(n,e,i){let{data:a}=e;return n.$$set=t=>{"data"in t&&i(0,a=t.data)},[a]}class xe extends C{constructor(e){super(),H(this,e,me,pe,S,{data:0})}}export{xe as component};
