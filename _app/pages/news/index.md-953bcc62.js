import{S as J,i as O,s as Q,D as R,x as V,y as W,z as Y,A as Z,B as z,r as ee,p as te,C as ae,X as B,e as A,t as g,k as H,c as N,a as $,h as j,m as L,d as o,b as T,g as C,R as m,j as M,l as F,N as le}from"../../chunks/index-0daf26e0.js";import{M as se}from"../../chunks/_md_layout-d288c7a4.js";import{d as P}from"../../chunks/meta-b0d28380.js";import"../../chunks/stores-6f336de3.js";function U(f,t,l){const s=f.slice();return s[2]=t[l],s}function X(f){let t,l=f[2].date?`${P(new Date(f[2].date))} - `:"",s,_,a,u=f[2].title+"",d,p,b,v,k,w=(f[2].author||"KCCTdensan")+"",E,D;return{c(){t=A("article"),s=g(l),_=H(),a=A("a"),d=g(u),b=H(),v=A("span"),k=g("by "),E=g(w),D=H(),this.h()},l(c){t=N(c,"ARTICLE",{});var n=$(t);s=j(n,l),_=L(n),a=N(n,"A",{href:!0});var y=$(a);d=j(y,u),y.forEach(o),b=L(n),v=N(n,"SPAN",{class:!0});var r=$(v);k=j(r,"by "),E=j(r,w),r.forEach(o),D=L(n),n.forEach(o),this.h()},h(){T(a,"href",p=`/news/${f[2].slug}`),T(v,"class","inline-block")},m(c,n){C(c,t,n),m(t,s),m(t,_),m(t,a),m(a,d),m(t,b),m(t,v),m(v,k),m(v,E),m(t,D)},p(c,n){n&1&&l!==(l=c[2].date?`${P(new Date(c[2].date))} - `:"")&&M(s,l),n&1&&u!==(u=c[2].title+"")&&M(d,u),n&1&&p!==(p=`/news/${c[2].slug}`)&&T(a,"href",p),n&1&&w!==(w=(c[2].author||"KCCTdensan")+"")&&M(E,w)},d(c){c&&o(t)}}}function ne(f){let t,l,s,_,a,u,d,p,b,v,k,w,E,D,c,n,y=f[0],r=[];for(let e=0;e<y.length;e+=1)r[e]=X(U(f,y,e));return{c(){t=A("h1"),l=g("\u96FB\u7B97\u90E8\u306E\u60C5\u5831"),s=H(),_=A("h2"),a=g("\u56FA\u5B9A\u8A18\u4E8B"),u=H(),d=A("ul"),p=A("li"),b=A("a"),v=g("\u96FB\u7B97\u90E8\u306E\u6D3B\u52D5"),k=g(" : \u30B3\u30F3\u30C6\u30B9\u30C8\u7B49\u306E\u51FA\u5834\u8A18\u9332\u306A\u3069"),w=H(),E=A("h2"),D=g("\u65B0\u7740\u60C5\u5831"),c=H();for(let e=0;e<r.length;e+=1)r[e].c();n=F(),this.h()},l(e){t=N(e,"H1",{});var h=$(t);l=j(h,"\u96FB\u7B97\u90E8\u306E\u60C5\u5831"),h.forEach(o),s=L(e),_=N(e,"H2",{});var i=$(_);a=j(i,"\u56FA\u5B9A\u8A18\u4E8B"),i.forEach(o),u=L(e),d=N(e,"UL",{});var S=$(d);p=N(S,"LI",{});var I=$(p);b=N(I,"A",{href:!0});var q=$(b);v=j(q,"\u96FB\u7B97\u90E8\u306E\u6D3B\u52D5"),q.forEach(o),k=j(I," : \u30B3\u30F3\u30C6\u30B9\u30C8\u7B49\u306E\u51FA\u5834\u8A18\u9332\u306A\u3069"),I.forEach(o),S.forEach(o),w=L(e),E=N(e,"H2",{});var x=$(E);D=j(x,"\u65B0\u7740\u60C5\u5831"),x.forEach(o),c=L(e);for(let K=0;K<r.length;K+=1)r[K].l(e);n=F(),this.h()},h(){T(b,"href","activities/")},m(e,h){C(e,t,h),m(t,l),C(e,s,h),C(e,_,h),m(_,a),C(e,u,h),C(e,d,h),m(d,p),m(p,b),m(b,v),m(p,k),C(e,w,h),C(e,E,h),m(E,D),C(e,c,h);for(let i=0;i<r.length;i+=1)r[i].m(e,h);C(e,n,h)},p(e,h){if(h&1){y=e[0];let i;for(i=0;i<y.length;i+=1){const S=U(e,y,i);r[i]?r[i].p(S,h):(r[i]=X(S),r[i].c(),r[i].m(n.parentNode,n))}for(;i<r.length;i+=1)r[i].d(1);r.length=y.length}},d(e){e&&o(t),e&&o(s),e&&o(_),e&&o(u),e&&o(d),e&&o(w),e&&o(E),e&&o(c),le(r,e),e&&o(n)}}}function re(f){let t,l;const s=[f[1],G];let _={$$slots:{default:[ne]},$$scope:{ctx:f}};for(let a=0;a<s.length;a+=1)_=R(_,s[a]);return t=new se({props:_}),{c(){V(t.$$.fragment)},l(a){W(t.$$.fragment,a)},m(a,u){Y(t,a,u),l=!0},p(a,[u]){const d=u&2?Z(s,[u&2&&z(a[1]),u&0&&z(G)]):{};u&33&&(d.$$scope={dirty:u,ctx:a}),t.$set(d)},i(a){l||(ee(t.$$.fragment,a),l=!0)},o(a){te(t.$$.fragment,a),l=!1},d(a){ae(t,a)}}}const G={title:"News",description:"\u96FB\u7B97\u90E8\u306E\u60C5\u5831"};async function ce({fetch:f,params:t}){const{data:l}=await f("/api/articles/news.json").then(s=>s.json());return{props:{entries:l}}}function ie(f,t,l){let{entries:s}=t;return f.$$set=_=>{l(1,t=R(R({},t),B(_))),"entries"in _&&l(0,s=_.entries)},t=B(t),[s,t]}class he extends J{constructor(t){super(),O(this,t,ie,re,Q,{entries:0})}}export{he as default,ce as load,G as metadata};
