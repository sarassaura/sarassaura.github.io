import{s as S,f as v,a as w,l as L,g,h as C,d as p,c as y,m as I,W as b,j as c,i as A,u as f,I as B,n as O,C as N,v as R}from"./scheduler.346da9b0.js";import{S as j,i as q}from"./index.4c01ff8f.js";import{L as F}from"./i18n-svelte.fb721426.js";import{R as P}from"./ripple.510b20eb.js";function W(n){let a,e,r,i,o,t=n[2].back()+"",h,k,u,m,d,E;return{c(){a=v("a"),e=v("iconify-icon"),r=w(),i=v("span"),o=L(" "),h=L(t),k=L(" "),this.h()},l(s){a=g(s,"A",{class:!0,href:!0,"aria-label":!0});var l=C(a);e=g(l,"ICONIFY-ICON",{icon:!0,height:!0,width:!0}),C(e).forEach(p),r=y(l),i=g(l,"SPAN",{class:!0});var _=C(i);o=I(_," "),h=I(_,t),k=I(_," "),_.forEach(p),l.forEach(p),this.h()},h(){b(e,"icon",n[0]),b(e,"height","28"),b(e,"width","28"),c(i,"class","break !ml-0 pl-1"),c(a,"class","btn variant-filled px-3 py-3 but"),c(a,"href",u=n[2].link(n[1])),c(a,"aria-label",m=n[2].back())},m(s,l){A(s,a,l),f(a,e),f(a,r),f(a,i),f(i,o),f(i,h),f(i,k),d||(E=B(a,"click",P),d=!0)},p(s,[l]){l&1&&b(e,"icon",s[0]),l&4&&t!==(t=s[2].back()+"")&&O(h,t),l&6&&u!==(u=s[2].link(s[1]))&&c(a,"href",u),l&4&&m!==(m=s[2].back())&&c(a,"aria-label",m)},i:N,o:N,d(s){s&&p(a),d=!1,E()}}}function Y(n,a,e){let r;R(n,F,t=>e(2,r=t));let{icon:i}=a,{link:o}=a;return n.$$set=t=>{"icon"in t&&e(0,i=t.icon),"link"in t&&e(1,o=t.link)},[i,o,r]}class J extends j{constructor(a){super(),q(this,a,Y,W,S,{icon:0,link:1})}}export{J as B};