import{s as Gt,G as dt,H as St,f as u,a as o,P as ct,g as m,V as p,c as r,h as ot,d as n,R as _t,j as f,i as a,u as A,C as Ut}from"./scheduler.2386ebd4.js";import{S as Ot,i as Nt,b as U,d as O,m as N,a as B,t as D,e as F}from"./index.94d2fc48.js";import{M as Bt,g as Dt,a as Ft}from"./mdsvex.fef9671a.js";import{I as rt}from"./img.781197c8.js";function Vt(M){let l,_="Tattoo-Studio",c,i,s,d,v,vt=`<a href="#features">Features</a> •
<a href="#installation">Installation</a> •
<a href="#usage">Usage</a> •
<a href="#environment-variables">Environment Variables</a>`,ut,E,mt,I,pt,y,ft,G,ht="A <code>Tattoo-Studio</code> portfolio with Cloudinary Image Gallery, On-Demand ISR, SSG, Static Paths",V,h,Ct="Features",j,T,gt="<li>Image Gallery connected with <em>cloudinary</em> Account</li> <li>Automatic e-mails with <em>nodemailer</em></li> <li>Form Validation with <em>react-hook-form</em></li> <li>Internationalization with <em>GetStaticProps</em></li> <li>Beautiful UI with <em>material-ui</em></li> <li>Beautiful Page Animations with <em>framer-motion</em></li> <li>Responsive 8-pt grid system with <em>figma</em></li> <li>Sitemap with <em>next-sitemap</em></li> <li>SEO with <em>next-seo</em></li>",Y,C,$t="Installation",K,k,X,Rt=`<code class="language-sh"><span class="token comment"># Clone this repository</span>
$ <span class="token function">git</span> clone git@github.com:florescente/tattoo.git

<span class="token comment"># Go into the repository</span>
$ <span class="token builtin class-name">cd</span> vitor-underground-tattoo

<span class="token comment"># Install dependencies</span>
$ <span class="token function">npm</span> <span class="token function">install</span>
OR
$ <span class="token function">yarn</span> <span class="token builtin class-name">set</span> version berry
$ <span class="token function">yarn</span> <span class="token function">install</span>
$ <span class="token function">yarn</span> dlx @yarnpkg/sdks vscode


<span class="token comment"># Run the app</span>
$ <span class="token function">npm</span> run dev
OR
$ <span class="token function">yarn</span> dev</code>`,q,g,xt="Usage",z,b,wt="<li>Create a Cloudinary Account</li> <li>Create a Gmail Account</li> <li>Get Cloudinary Config Info</li> <li>Generate Gmail App password</li> <li>Create Folders with Images in Cloudinary</li> <li>Set the environment variables</li> <li>run</li>",W,$,Et="Environment Variables",J,H,Q,At=`<code class="language-bash">NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_SITE_URL
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
EMAIL - GMAIL
PASSWORD - Generate APP password
SECRET_TOKEN</code>`,Z,x,It="Cloudinary Configurations",tt,L,yt="This is important for the ISR revalidation:",et,P,Tt="Go to the cloudinary settings, under uploads tab, and put this in notifications:",nt,S,at,Mt='<code class="language-bash">https://<span class="token operator">&lt;</span>NEXT_PUBLIC_SITE_URL<span class="token operator">></span>/api/revalidate?secret<span class="token operator">=</span><span class="token operator">&lt;</span>SECRET_TOKEN<span class="token operator">></span></code>',lt,w,kt="Meta",st,R,bt=`Created By Florescente:
<a href="https://github.com/florescente" rel="nofollow">github.com/florescente</a>`,it;return s=new rt({props:{src:"/public/Banner.png?raw=true",alt:"Banner"}}),E=new rt({props:{src:"/public/Home.gif",alt:"Home"}}),I=new rt({props:{src:"/public/Portfolio.gif",alt:"Portfolio"}}),y=new rt({props:{src:"/public/Contact.gif",alt:"Contact"}}),{c(){l=u("h1"),l.textContent=_,c=o(),i=u("div"),U(s.$$.fragment),d=o(),v=u("p"),v.innerHTML=vt,ut=o(),U(E.$$.fragment),mt=o(),U(I.$$.fragment),pt=o(),U(y.$$.fragment),ft=o(),G=u("p"),G.innerHTML=ht,V=o(),h=u("h2"),h.textContent=Ct,j=o(),T=u("ul"),T.innerHTML=gt,Y=o(),C=u("h2"),C.textContent=$t,K=o(),k=u("pre"),X=new ct(!1),q=o(),g=u("h2"),g.textContent=xt,z=o(),b=u("ol"),b.innerHTML=wt,W=o(),$=u("h2"),$.textContent=Et,J=o(),H=u("pre"),Q=new ct(!1),Z=o(),x=u("h2"),x.textContent=It,tt=o(),L=u("p"),L.textContent=yt,et=o(),P=u("p"),P.textContent=Tt,nt=o(),S=u("pre"),at=new ct(!1),lt=o(),w=u("h2"),w.textContent=kt,st=o(),R=u("p"),R.innerHTML=bt,this.h()},l(t){l=m(t,"H1",{id:!0,"data-svelte-h":!0}),p(l)!=="svelte-fj26dw"&&(l.textContent=_),c=r(t),i=m(t,"DIV",{align:!0});var e=ot(i);O(s.$$.fragment,e),d=r(e),v=m(e,"P",{"data-svelte-h":!0}),p(v)!=="svelte-px26c5"&&(v.innerHTML=vt),ut=r(e),O(E.$$.fragment,e),mt=r(e),O(I.$$.fragment,e),pt=r(e),O(y.$$.fragment,e),ft=r(e),G=m(e,"P",{"data-svelte-h":!0}),p(G)!=="svelte-oanzmf"&&(G.innerHTML=ht),e.forEach(n),V=r(t),h=m(t,"H2",{id:!0,"data-svelte-h":!0}),p(h)!=="svelte-dk8h9m"&&(h.textContent=Ct),j=r(t),T=m(t,"UL",{"data-svelte-h":!0}),p(T)!=="svelte-1mlo5sh"&&(T.innerHTML=gt),Y=r(t),C=m(t,"H2",{id:!0,"data-svelte-h":!0}),p(C)!=="svelte-igr1mm"&&(C.textContent=$t),K=r(t),k=m(t,"PRE",{class:!0});var Ht=ot(k);X=_t(Ht,!1),Ht.forEach(n),q=r(t),g=m(t,"H2",{id:!0,"data-svelte-h":!0}),p(g)!=="svelte-1k322p4"&&(g.textContent=xt),z=r(t),b=m(t,"OL",{"data-svelte-h":!0}),p(b)!=="svelte-jlww12"&&(b.innerHTML=wt),W=r(t),$=m(t,"H2",{id:!0,"data-svelte-h":!0}),p($)!=="svelte-rtvvg9"&&($.textContent=Et),J=r(t),H=m(t,"PRE",{class:!0});var Lt=ot(H);Q=_t(Lt,!1),Lt.forEach(n),Z=r(t),x=m(t,"H2",{id:!0,"data-svelte-h":!0}),p(x)!=="svelte-5bcu71"&&(x.textContent=It),tt=r(t),L=m(t,"P",{"data-svelte-h":!0}),p(L)!=="svelte-1hwqxlg"&&(L.textContent=yt),et=r(t),P=m(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-dn0rpp"&&(P.textContent=Tt),nt=r(t),S=m(t,"PRE",{class:!0});var Pt=ot(S);at=_t(Pt,!1),Pt.forEach(n),lt=r(t),w=m(t,"H2",{id:!0,"data-svelte-h":!0}),p(w)!=="svelte-gu31x6"&&(w.textContent=kt),st=r(t),R=m(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-tt8sab"&&(R.innerHTML=bt),this.h()},h(){f(l,"id","tattoo-studio"),f(i,"align","center"),f(h,"id","features"),f(C,"id","installation"),X.a=null,f(k,"class","language-sh"),f(g,"id","usage"),f($,"id","environment-variables"),Q.a=null,f(H,"class","language-bash"),f(x,"id","cloudinary-configurations"),at.a=null,f(S,"class","language-bash"),f(w,"id","meta")},m(t,e){a(t,l,e),a(t,c,e),a(t,i,e),N(s,i,null),A(i,d),A(i,v),A(i,ut),N(E,i,null),A(i,mt),N(I,i,null),A(i,pt),N(y,i,null),A(i,ft),A(i,G),a(t,V,e),a(t,h,e),a(t,j,e),a(t,T,e),a(t,Y,e),a(t,C,e),a(t,K,e),a(t,k,e),X.m(Rt,k),a(t,q,e),a(t,g,e),a(t,z,e),a(t,b,e),a(t,W,e),a(t,$,e),a(t,J,e),a(t,H,e),Q.m(At,H),a(t,Z,e),a(t,x,e),a(t,tt,e),a(t,L,e),a(t,et,e),a(t,P,e),a(t,nt,e),a(t,S,e),at.m(Mt,S),a(t,lt,e),a(t,w,e),a(t,st,e),a(t,R,e),it=!0},p:Ut,i(t){it||(B(s.$$.fragment,t),B(E.$$.fragment,t),B(I.$$.fragment,t),B(y.$$.fragment,t),it=!0)},o(t){D(s.$$.fragment,t),D(E.$$.fragment,t),D(I.$$.fragment,t),D(y.$$.fragment,t),it=!1},d(t){t&&(n(l),n(c),n(i),n(V),n(h),n(j),n(T),n(Y),n(C),n(K),n(k),n(q),n(g),n(z),n(b),n(W),n($),n(J),n(H),n(Z),n(x),n(tt),n(L),n(et),n(P),n(nt),n(S),n(lt),n(w),n(st),n(R)),F(s),F(E),F(I),F(y)}}}function jt(M){let l,_;const c=[M[0]];let i={$$slots:{default:[Vt]},$$scope:{ctx:M}};for(let s=0;s<c.length;s+=1)i=dt(i,c[s]);return l=new Bt({props:i}),{c(){U(l.$$.fragment)},l(s){O(l.$$.fragment,s)},m(s,d){N(l,s,d),_=!0},p(s,[d]){const v=d&1?Dt(c,[Ft(s[0])]):{};d&2&&(v.$$scope={dirty:d,ctx:s}),l.$set(v)},i(s){_||(B(l.$$.fragment,s),_=!0)},o(s){D(l.$$.fragment,s),_=!1},d(s){F(l,s)}}}function Yt(M,l,_){return M.$$set=c=>{_(0,l=dt(dt({},l),St(c)))},l=St(l),[l]}class Wt extends Ot{constructor(l){super(),Nt(this,l,Yt,jt,Gt,{})}}export{Wt as default};