import{s as ft,f as n,a as s,Q as Y,g as i,w as r,c as o,h as j,S as q,d as l,j as p,i as a,C as K}from"./scheduler.07400f9b.js";import{S as dt,i as Ct}from"./index.a44a83f6.js";function ht(pt){let u,X="Tattoo-Studio",b,m,z=`<img src="/public/Banner.png?raw=true" alt="Banner"/> <p><a href="#features">Features</a> •
<a href="#installation">Installation</a> •
<a href="#usage">Usage</a> •
<a href="#environment-variables">Environment Variables</a></p> <img src="/public/Home.gif" alt="Home"/> <img src="/public/Portfolio.gif" alt="Portfolio"/> <img src="/public/Contact.gif" alt="Contact"/> <p>A <code>Tattoo-Studio</code> portfolio with Cloudinary Image Gallery, On-Demand ISR, SSG, Static Paths</p>`,y,c,Q="Features",S,_,W="<li>Image Gallery connected with <em>cloudinary</em> Account</li> <li>Automatic e-mails with <em>nodemailer</em></li> <li>Form Validation with <em>react-hook-form</em></li> <li>Internationalization with <em>GetStaticProps</em></li> <li>Beautiful UI with <em>material-ui</em></li> <li>Beautiful Page Animations with <em>framer-motion</em></li> <li>Responsive 8-pt grid system with <em>figma</em></li> <li>Sitemap with <em>next-sitemap</em></li> <li>SEO with <em>next-seo</em></li>",L,f,J="Installation",H,x,P,ut=`<code class="language-sh"><span class="token comment"># Clone this repository</span>
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
$ <span class="token function">yarn</span> dev</code>`,A,d,Z="Usage",R,w,tt="<li>Create a Cloudinary Account</li> <li>Create a Gmail Account</li> <li>Get Cloudinary Config Info</li> <li>Generate Gmail App password</li> <li>Create Folders with Images in Cloudinary</li> <li>Set the environment variables</li> <li>run</li>",M,C,et="Environment Variables",G,E,U,mt=`<code class="language-bash">NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_SITE_URL
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
EMAIL - GMAIL
PASSWORD - Generate APP password
SECRET_TOKEN</code>`,O,h,lt="Cloudinary Configurations",N,g,at="This is important for the ISR revalidation:",B,k,nt="Go to the cloudinary settings, under uploads tab, and put this in notifications:",$,I,D,ct='<code class="language-bash">https://<span class="token operator">&lt;</span>NEXT_PUBLIC_SITE_URL<span class="token operator">></span>/api/revalidate?secret<span class="token operator">=</span><span class="token operator">&lt;</span>SECRET_TOKEN<span class="token operator">></span></code>',F,v,it="Meta",V,T,st=`Created By Florescente:
<a href="https://github.com/florescente" rel="nofollow">github.com/florescente</a>`;return{c(){u=n("h1"),u.textContent=X,b=s(),m=n("div"),m.innerHTML=z,y=s(),c=n("h2"),c.textContent=Q,S=s(),_=n("ul"),_.innerHTML=W,L=s(),f=n("h2"),f.textContent=J,H=s(),x=n("pre"),P=new Y(!1),A=s(),d=n("h2"),d.textContent=Z,R=s(),w=n("ol"),w.innerHTML=tt,M=s(),C=n("h2"),C.textContent=et,G=s(),E=n("pre"),U=new Y(!1),O=s(),h=n("h2"),h.textContent=lt,N=s(),g=n("p"),g.textContent=at,B=s(),k=n("p"),k.textContent=nt,$=s(),I=n("pre"),D=new Y(!1),F=s(),v=n("h2"),v.textContent=it,V=s(),T=n("p"),T.innerHTML=st,this.h()},l(t){u=i(t,"H1",{id:!0,"data-svelte-h":!0}),r(u)!=="svelte-fj26dw"&&(u.textContent=X),b=o(t),m=i(t,"DIV",{align:!0,"data-svelte-h":!0}),r(m)!=="svelte-1wo666q"&&(m.innerHTML=z),y=o(t),c=i(t,"H2",{id:!0,"data-svelte-h":!0}),r(c)!=="svelte-dk8h9m"&&(c.textContent=Q),S=o(t),_=i(t,"UL",{"data-svelte-h":!0}),r(_)!=="svelte-1mlo5sh"&&(_.innerHTML=W),L=o(t),f=i(t,"H2",{id:!0,"data-svelte-h":!0}),r(f)!=="svelte-igr1mm"&&(f.textContent=J),H=o(t),x=i(t,"PRE",{class:!0});var e=j(x);P=q(e,!1),e.forEach(l),A=o(t),d=i(t,"H2",{id:!0,"data-svelte-h":!0}),r(d)!=="svelte-1k322p4"&&(d.textContent=Z),R=o(t),w=i(t,"OL",{"data-svelte-h":!0}),r(w)!=="svelte-jlww12"&&(w.innerHTML=tt),M=o(t),C=i(t,"H2",{id:!0,"data-svelte-h":!0}),r(C)!=="svelte-rtvvg9"&&(C.textContent=et),G=o(t),E=i(t,"PRE",{class:!0});var ot=j(E);U=q(ot,!1),ot.forEach(l),O=o(t),h=i(t,"H2",{id:!0,"data-svelte-h":!0}),r(h)!=="svelte-5bcu71"&&(h.textContent=lt),N=o(t),g=i(t,"P",{"data-svelte-h":!0}),r(g)!=="svelte-1hwqxlg"&&(g.textContent=at),B=o(t),k=i(t,"P",{"data-svelte-h":!0}),r(k)!=="svelte-dn0rpp"&&(k.textContent=nt),$=o(t),I=i(t,"PRE",{class:!0});var rt=j(I);D=q(rt,!1),rt.forEach(l),F=o(t),v=i(t,"H2",{id:!0,"data-svelte-h":!0}),r(v)!=="svelte-gu31x6"&&(v.textContent=it),V=o(t),T=i(t,"P",{"data-svelte-h":!0}),r(T)!=="svelte-tt8sab"&&(T.innerHTML=st),this.h()},h(){p(u,"id","tattoo-studio"),p(m,"align","center"),p(c,"id","features"),p(f,"id","installation"),P.a=null,p(x,"class","language-sh"),p(d,"id","usage"),p(C,"id","environment-variables"),U.a=null,p(E,"class","language-bash"),p(h,"id","cloudinary-configurations"),D.a=null,p(I,"class","language-bash"),p(v,"id","meta")},m(t,e){a(t,u,e),a(t,b,e),a(t,m,e),a(t,y,e),a(t,c,e),a(t,S,e),a(t,_,e),a(t,L,e),a(t,f,e),a(t,H,e),a(t,x,e),P.m(ut,x),a(t,A,e),a(t,d,e),a(t,R,e),a(t,w,e),a(t,M,e),a(t,C,e),a(t,G,e),a(t,E,e),U.m(mt,E),a(t,O,e),a(t,h,e),a(t,N,e),a(t,g,e),a(t,B,e),a(t,k,e),a(t,$,e),a(t,I,e),D.m(ct,I),a(t,F,e),a(t,v,e),a(t,V,e),a(t,T,e)},p:K,i:K,o:K,d(t){t&&(l(u),l(b),l(m),l(y),l(c),l(S),l(_),l(L),l(f),l(H),l(x),l(A),l(d),l(R),l(w),l(M),l(C),l(G),l(E),l(O),l(h),l(N),l(g),l(B),l(k),l($),l(I),l(F),l(v),l(V),l(T))}}}class xt extends dt{constructor(u){super(),Ct(this,u,null,ht,ft,{})}}export{xt as default};
