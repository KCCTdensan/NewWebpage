import{S as f,i as c,s as _,D as h,x as $,y as g,z as y,A as b,r as w,p as U,C,Y as H,l as d,Z as R,g as j,n as v,d as D}from"../../chunks/index-ee3c2835.js";import{M}from"../../chunks/_md_layout-6fb15d10.js";import"../../chunks/meta-1a427be6.js";import"../../chunks/stores-939f4b6a.js";function S(o){let a,n;return{c(){a=new H(!1),n=d(),this.h()},l(e){a=R(e,!1),n=d(),this.h()},h(){a.a=n},m(e,s){a.m(o[6],e,s),j(e,n,s)},p:v,d(e){e&&D(n),e&&a.d()}}}function q(o){let a,n;const e=[{title:o[0],description:o[1],author:o[2],noRobots:o[3],date:o[4],dateUpd:o[5]}];let s={$$slots:{default:[S]},$$scope:{ctx:o}};for(let t=0;t<e.length;t+=1)s=h(s,e[t]);return a=new M({props:s}),{c(){$(a.$$.fragment)},l(t){g(a.$$.fragment,t)},m(t,r){y(a,t,r),n=!0},p(t,[r]){const i=r&63?b(e,[{title:t[0],description:t[1],author:t[2],noRobots:t[3],date:t[4],dateUpd:t[5]}]):{};r&256&&(i.$$scope={dirty:r,ctx:t}),a.$set(i)},i(t){n||(w(a.$$.fragment,t),n=!0)},o(t){U(a.$$.fragment,t),n=!1},d(t){C(a,t)}}}async function Y({fetch:o,params:a}){const{data:n}=await o("/api/articles/docs.json").then(s=>s.json()),e=n.find(s=>s.slug===a.slug);return e===void 0?{status:404,error:new Error("Could not find entry")}:{props:{data:e}}}function z(o,a,n){let{data:e}=a;const{title:s,description:t,author:r,noRobots:i,date:u,dateUpd:m}=e,p=e.body;return o.$$set=l=>{"data"in l&&n(7,e=l.data)},[s,t,r,i,u,m,p,e]}class Z extends f{constructor(a){super(),c(this,a,z,q,_,{data:7})}}export{Z as default,Y as load};
