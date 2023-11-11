import{s as Z,f as n,a as i,Q as Y,g as s,w as p,c as o,h as K,S as Q,d as l,j as m,i as a,C as E}from"./scheduler.07400f9b.js";import{S as ee,i as te}from"./index.a44a83f6.js";function le(W){let r,G="Tattoo Portfolio",b,u,$=`<img src="/public/banner.png?raw=true" alt="Banner"/> <p><a href="#features">Features</a> •
<a href="#installation">Installation</a> •
<a href="#usage">Usage</a> •
<a href="#environment-variables">Environment Variables</a></p> <img src="/public/page.gif" alt="Home"/> <img src="/public/portfolio.gif" alt="Portfolio"/> <img src="/public/contact.gif" alt="Contact"/> <p>A <code>tattoo-artist</code> personal portfolio with Unsplash Gallery.</p>`,H,c,B="Features",w,x,O="<li>Image Gallery connected with <em>unsplash</em></li> <li>Lazy loading images with <em>blurhash</em></li> <li>Automatic e-mails with <em>nodemailer</em></li> <li>Form Validation with <em>react-hook-form</em></li> <li>Beautiful UI and dark-mode with <em>chakra-ui</em></li> <li>Beautiful Page Animations with <em>framer-motion</em></li> <li>Responsive UI</li> <li>Static Generated Pages with <em>nextjs</em></li> <li>Sitemap with <em>next-sitemap</em></li> <li>SEO with <em>next-seo</em></li>",L,f,z="Installation",A,C,P,X=`<code class="language-sh"><span class="token comment"># Clone this repository</span>
$ git@github.com:florescente/underground.git

<span class="token comment"># Go into the repository</span>
$ <span class="token builtin class-name">cd</span> underground

<span class="token comment"># Install dependencies</span>
$ <span class="token function">npm</span> <span class="token function">install</span>
OR
$ <span class="token function">yarn</span> <span class="token builtin class-name">set</span> version berry
$ <span class="token function">yarn</span> <span class="token function">install</span>
$ <span class="token function">yarn</span> dlx @yarnpkg/sdks vscode


<span class="token comment"># Run the app</span>
$ <span class="token function">npm</span> run dev
OR
$ <span class="token function">yarn</span> dev</code>`,y,h,F="Usage",I,_,j="<li>Create an Unsplash Account</li> <li>Create a Gmail Account</li> <li>Get Unsplash Config Info</li> <li>Generate Gmail App password</li> <li>Configure URL in trampos.tsx static props</li> <li>Set the environment variables</li> <li>run</li>",U,d,D="Environment variables",T,g,M,J=`<code class="language-bash">NEXT_PUBLIC_API_KEY_UNSPLASH - Unsplash API
<span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/var/task/node_modules/canvas/build/Release - Canvas Bug
EMAIL - GMAIL
PASSWORD - Gerar senha de APP</code>`,R,v,V="Meta",S,k,q=`Created By Florescente:
<a href="https://github.com/florescente" rel="nofollow">github.com/florescente</a>`;return{c(){r=n("h1"),r.textContent=G,b=i(),u=n("div"),u.innerHTML=$,H=i(),c=n("h2"),c.textContent=B,w=i(),x=n("ul"),x.innerHTML=O,L=i(),f=n("h2"),f.textContent=z,A=i(),C=n("pre"),P=new Y(!1),y=i(),h=n("h2"),h.textContent=F,I=i(),_=n("ol"),_.innerHTML=j,U=i(),d=n("h2"),d.textContent=D,T=i(),g=n("pre"),M=new Y(!1),R=i(),v=n("h2"),v.textContent=V,S=i(),k=n("p"),k.innerHTML=q,this.h()},l(e){r=s(e,"H1",{id:!0,"data-svelte-h":!0}),p(r)!=="svelte-bm2hox"&&(r.textContent=G),b=o(e),u=s(e,"DIV",{align:!0,"data-svelte-h":!0}),p(u)!=="svelte-pv90os"&&(u.innerHTML=$),H=o(e),c=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(c)!=="svelte-dk8h9m"&&(c.textContent=B),w=o(e),x=s(e,"UL",{"data-svelte-h":!0}),p(x)!=="svelte-1uzz7av"&&(x.innerHTML=O),L=o(e),f=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(f)!=="svelte-igr1mm"&&(f.textContent=z),A=o(e),C=s(e,"PRE",{class:!0});var t=K(C);P=Q(t,!1),t.forEach(l),y=o(e),h=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(h)!=="svelte-1k322p4"&&(h.textContent=F),I=o(e),_=s(e,"OL",{"data-svelte-h":!0}),p(_)!=="svelte-pqndzx"&&(_.innerHTML=j),U=o(e),d=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(d)!=="svelte-1vmjom1"&&(d.textContent=D),T=o(e),g=s(e,"PRE",{class:!0});var N=K(g);M=Q(N,!1),N.forEach(l),R=o(e),v=s(e,"H2",{id:!0,"data-svelte-h":!0}),p(v)!=="svelte-gu31x6"&&(v.textContent=V),S=o(e),k=s(e,"P",{"data-svelte-h":!0}),p(k)!=="svelte-tt8sab"&&(k.innerHTML=q),this.h()},h(){m(r,"id","tattoo-portfolio"),m(u,"align","center"),m(c,"id","features"),m(f,"id","installation"),P.a=null,m(C,"class","language-sh"),m(h,"id","usage"),m(d,"id","environment-variables"),M.a=null,m(g,"class","language-bash"),m(v,"id","meta")},m(e,t){a(e,r,t),a(e,b,t),a(e,u,t),a(e,H,t),a(e,c,t),a(e,w,t),a(e,x,t),a(e,L,t),a(e,f,t),a(e,A,t),a(e,C,t),P.m(X,C),a(e,y,t),a(e,h,t),a(e,I,t),a(e,_,t),a(e,U,t),a(e,d,t),a(e,T,t),a(e,g,t),M.m(J,g),a(e,R,t),a(e,v,t),a(e,S,t),a(e,k,t)},p:E,i:E,o:E,d(e){e&&(l(r),l(b),l(u),l(H),l(c),l(w),l(x),l(L),l(f),l(A),l(C),l(y),l(h),l(I),l(_),l(U),l(d),l(T),l(g),l(R),l(v),l(S),l(k))}}}class se extends ee{constructor(r){super(),te(this,r,null,le,Z,{})}}export{se as default};
