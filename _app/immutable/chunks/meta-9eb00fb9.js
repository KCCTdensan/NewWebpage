import{S as W,i as Y,s as B,l as w,a as C,e as U,W as G,m as E,h,c as F,q as i,T as m,b as N,n as R,U as H,u as S,p as D,v as A,N as J,w as O}from"./index-8e7dcfba.js";import{p as L}from"./stores-dfd80be3.js";function I(u){return`${u.getFullYear()}/${`0${u.getMonth()+1}`.slice(-2)}/${`0${u.getDate()}`.slice(-2)}`}function j(u,e,r){const l=u.slice();return l[10]=e[r],l}function q(u){let e,r,l,f,c,a,n,o,t;function p(d,_){if(d[3]&&d[4])return Z;if(d[3])return X;if(d[4])return Q}let T=p(u),v=T&&T(u),s=u[1].length&&K(u);return{c(){e=w("div"),r=w("span"),l=S("meta = {"),f=C(),c=w("span"),v&&v.c(),a=C(),s&&s.c(),n=C(),o=w("span"),t=S("};"),this.h()},l(d){e=E(d,"DIV",{class:!0});var _=D(e);r=E(_,"SPAN",{});var y=D(r);l=A(y,"meta = {"),y.forEach(h),f=F(_),c=E(_,"SPAN",{class:!0});var k=D(c);v&&v.l(k),a=F(k),s&&s.l(k),k.forEach(h),n=F(_),o=E(_,"SPAN",{});var P=D(o);t=A(P,"};"),P.forEach(h),_.forEach(h),this.h()},h(){i(c,"class","iter svelte-y63w9z"),i(e,"class","meta svelte-y63w9z")},m(d,_){N(d,e,_),m(e,r),m(r,l),m(e,f),m(e,c),v&&v.m(c,null),m(c,a),s&&s.m(c,null),m(e,n),m(e,o),m(o,t)},p(d,_){T===(T=p(d))&&v?v.p(d,_):(v&&v.d(1),v=T&&T(d),v&&(v.c(),v.m(c,a))),d[1].length?s?s.p(d,_):(s=K(d),s.c(),s.m(c,null)):s&&(s.d(1),s=null)},d(d){d&&h(e),v&&v.d(),s&&s.d()}}}function Q(u){let e,r,l,f=I(new Date(u[4]))+"",c,a,n;return{c(){e=w("span"),r=S('updated: "'),l=w("time"),c=S(f),n=S('"'),this.h()},l(o){e=E(o,"SPAN",{class:!0});var t=D(e);r=A(t,'updated: "'),l=E(t,"TIME",{datetime:!0});var p=D(l);c=A(p,f),p.forEach(h),n=A(t,'"'),t.forEach(h),this.h()},h(){i(l,"datetime",a=new Date(u[4]).toISOString()),i(e,"class","svelte-y63w9z")},m(o,t){N(o,e,t),m(e,r),m(e,l),m(l,c),m(e,n)},p(o,t){t&16&&f!==(f=I(new Date(o[4]))+"")&&O(c,f),t&16&&a!==(a=new Date(o[4]).toISOString())&&i(l,"datetime",a)},d(o){o&&h(e)}}}function X(u){let e,r,l,f=I(new Date(u[3]))+"",c,a,n;return{c(){e=w("span"),r=S('post: "'),l=w("time"),c=S(f),n=S('"'),this.h()},l(o){e=E(o,"SPAN",{class:!0});var t=D(e);r=A(t,'post: "'),l=E(t,"TIME",{datetime:!0});var p=D(l);c=A(p,f),p.forEach(h),n=A(t,'"'),t.forEach(h),this.h()},h(){i(l,"datetime",a=new Date(u[3]).toISOString()),i(e,"class","svelte-y63w9z")},m(o,t){N(o,e,t),m(e,r),m(e,l),m(l,c),m(e,n)},p(o,t){t&8&&f!==(f=I(new Date(o[3]))+"")&&O(c,f),t&8&&a!==(a=new Date(o[3]).toISOString())&&i(l,"datetime",a)},d(o){o&&h(e)}}}function Z(u){let e,r,l=I(new Date(u[3]))+"",f,c,a,n,o,t,p=I(new Date(u[4]))+"",T,v,s;return{c(){e=w("span"),r=S('post: "'),f=S(l),c=S('"'),a=C(),n=w("span"),o=S('updated: "'),t=w("time"),T=S(p),s=S('"'),this.h()},l(d){e=E(d,"SPAN",{class:!0});var _=D(e);r=A(_,'post: "'),f=A(_,l),c=A(_,'"'),_.forEach(h),a=F(d),n=E(d,"SPAN",{class:!0});var y=D(n);o=A(y,'updated: "'),t=E(y,"TIME",{datetime:!0});var k=D(t);T=A(k,p),k.forEach(h),s=A(y,'"'),y.forEach(h),this.h()},h(){i(e,"class","svelte-y63w9z"),i(t,"datetime",v=new Date(u[4]).toISOString()),i(n,"class","svelte-y63w9z")},m(d,_){N(d,e,_),m(e,r),m(e,f),m(e,c),N(d,a,_),N(d,n,_),m(n,o),m(n,t),m(t,T),m(n,s)},p(d,_){_&8&&l!==(l=I(new Date(d[3]))+"")&&O(f,l),_&16&&p!==(p=I(new Date(d[4]))+"")&&O(T,p),_&16&&v!==(v=new Date(d[4]).toISOString())&&i(t,"datetime",v)},d(d){d&&h(e),d&&h(a),d&&h(n)}}}function K(u){let e,r,l,f,c=u[1],a=[];for(let n=0;n<c.length;n+=1)a[n]=V(j(u,c,n));return{c(){e=w("span"),r=S("authors: ["),l=w("span");for(let n=0;n<a.length;n+=1)a[n].c();f=S("]"),this.h()},l(n){e=E(n,"SPAN",{class:!0});var o=D(e);r=A(o,"authors: ["),l=E(o,"SPAN",{class:!0});var t=D(l);for(let p=0;p<a.length;p+=1)a[p].l(t);t.forEach(h),f=A(o,"]"),o.forEach(h),this.h()},h(){i(l,"class","iter svelte-y63w9z"),i(e,"class","svelte-y63w9z")},m(n,o){N(n,e,o),m(e,r),m(e,l);for(let t=0;t<a.length;t+=1)a[t].m(l,null);m(e,f)},p(n,o){if(o&2){c=n[1];let t;for(t=0;t<c.length;t+=1){const p=j(n,c,t);a[t]?a[t].p(p,o):(a[t]=V(p),a[t].c(),a[t].m(l,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=c.length}},d(n){n&&h(e),J(a,n)}}}function V(u){let e,r,l=u[10]+"",f,c;return{c(){e=w("span"),r=S('"'),f=S(l),c=S('"'),this.h()},l(a){e=E(a,"SPAN",{class:!0});var n=D(e);r=A(n,'"'),f=A(n,l),c=A(n,'"'),n.forEach(h),this.h()},h(){i(e,"class","svelte-y63w9z")},m(a,n){N(a,e,n),m(e,r),m(e,f),m(e,c)},p(a,n){n&2&&l!==(l=a[10]+"")&&O(f,l)},d(a){a&&h(e)}}}function x(u){let e,r,l,f,c,a,n,o,t,p,T,v,s,d,_,y,k,P,z;document.title=e=u[7];let M=u[5]&&q(u);return{c(){r=w("meta"),l=w("meta"),c=w("meta"),a=w("meta"),o=w("meta"),t=w("meta"),p=w("meta"),T=w("meta"),v=w("meta"),s=w("meta"),_=w("meta"),y=w("meta"),k=w("meta"),P=C(),M&&M.c(),z=U(),this.h()},l(g){const b=G('[data-svelte="svelte-9jvxrg"]',document.head);r=E(b,"META",{name:!0,content:!0}),l=E(b,"META",{name:!0,content:!0}),c=E(b,"META",{name:!0,content:!0}),a=E(b,"META",{name:!0,content:!0}),o=E(b,"META",{name:!0,content:!0}),t=E(b,"META",{name:!0,content:!0}),p=E(b,"META",{name:!0,content:!0}),T=E(b,"META",{property:!0,content:!0}),v=E(b,"META",{property:!0,content:!0}),s=E(b,"META",{property:!0,content:!0}),_=E(b,"META",{property:!0,content:!0}),y=E(b,"META",{property:!0,content:!0}),k=E(b,"META",{property:!0,content:!0}),b.forEach(h),P=F(g),M&&M.l(g),z=U(),this.h()},h(){i(r,"name","description"),i(r,"content",u[0]),i(l,"name","author"),i(l,"content",f=u[1].join(",")||"KCCTdensan"),i(c,"name","keywords"),i(c,"content","\u96FB\u7B97\u90E8,\u96FB\u5B50\u8A08\u7B97\u6A5F\u90E8,\u795E\u6238\u9AD8\u5C02,KCCT,\u9AD8\u5C02"),i(a,"name","robots"),i(a,"content",n=u[2]?"none":"all"),i(o,"name","twitter:card"),i(o,"content","summary"),i(t,"name","twitter:site"),i(t,"content","@kcct_densan"),i(p,"name","twitter:creator"),i(p,"content","@kcct_densan"),i(T,"property","og:title"),i(T,"content",u[7]),i(v,"property","og:type"),i(v,"content","website"),i(s,"property","og:url"),i(s,"content",d="https://d3bu.net"+u[6].url.pathname),i(_,"property","og:image"),i(_,"content","https://d3bu.net/icon.png"),i(y,"property","og:description"),i(y,"content",u[0]),i(k,"property","og:site_name"),i(k,"content","\u96FB\u7B97\u90E8.net")},m(g,b){m(document.head,r),m(document.head,l),m(document.head,c),m(document.head,a),m(document.head,o),m(document.head,t),m(document.head,p),m(document.head,T),m(document.head,v),m(document.head,s),m(document.head,_),m(document.head,y),m(document.head,k),N(g,P,b),M&&M.m(g,b),N(g,z,b)},p(g,[b]){b&128&&e!==(e=g[7])&&(document.title=e),b&1&&i(r,"content",g[0]),b&2&&f!==(f=g[1].join(",")||"KCCTdensan")&&i(l,"content",f),b&4&&n!==(n=g[2]?"none":"all")&&i(a,"content",n),b&64&&d!==(d="https://d3bu.net"+g[6].url.pathname)&&i(s,"content",d),b&1&&i(y,"content",g[0]),g[5]?M?M.p(g,b):(M=q(g),M.c(),M.m(z.parentNode,z)):M&&(M.d(1),M=null)},i:R,o:R,d(g){h(r),h(l),h(c),h(a),h(o),h(t),h(p),h(T),h(v),h(s),h(_),h(y),h(k),g&&h(P),M&&M.d(g),g&&h(z)}}}function $(u,e,r){let l;H(u,L,s=>r(6,l=s));let{title:f='"hello, world"'}=e,{description:c="\u795E\u6238\u9AD8\u5C02\u96FB\u7B97\u90E8\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8"}=e,{authors:a=[]}=e,{noRobots:n=!1}=e,{noTitleFormat:o=!1}=e,{date:t=void 0}=e,{dateUpd:p=void 0}=e,{showMeta:T=!1}=e;const v=f+(o?"":" :: d3bu.net");return u.$$set=s=>{"title"in s&&r(8,f=s.title),"description"in s&&r(0,c=s.description),"authors"in s&&r(1,a=s.authors),"noRobots"in s&&r(2,n=s.noRobots),"noTitleFormat"in s&&r(9,o=s.noTitleFormat),"date"in s&&r(3,t=s.date),"dateUpd"in s&&r(4,p=s.dateUpd),"showMeta"in s&&r(5,T=s.showMeta)},[c,a,n,t,p,T,l,v,f,o]}class ne extends W{constructor(e){super(),Y(this,e,$,x,B,{title:8,description:0,authors:1,noRobots:2,noTitleFormat:9,date:3,dateUpd:4,showMeta:5})}}export{ne as M,I as d};
