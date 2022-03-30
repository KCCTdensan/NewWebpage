import{S as na,i as ua,s as _a,C as Fe,w as ca,x as va,y as Ea,z as da,A as Ot,q as ka,o as xa,B as Pa,W as $t,e as p,t as m,k as r,c as f,a as i,h as o,d as l,m as n,b as c,g as t,K as a,M as wa}from"../../../chunks/vendor-01ce2e80.js";import{M as ha}from"../../../chunks/md_layout-a3da939d.js";import"../../../chunks/meta-78e42577.js";import"../../../chunks/stores-88e3b49f.js";import"../../../chunks/fmt-158ed921.js";function Ma(F){let u,d,k,x,_,E,w,$l,As,G,jl,Os,M,Nl,C,ql,zl,$s,P,Il,J,Nt='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathnormal">x</span></span></span></span>',Kl,Q,qt='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">\u2020</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">\u2020</mi></mrow><annotation encoding="application/x-tex">\\dag\\mathrm{rootfs}\\dag</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="mord">\u2020</span><span class="mord"><span class="mord mathrm">r</span><span class="mord mathrm">o</span><span class="mord mathrm">o</span><span class="mord mathrm">t</span><span class="mord mathrm" style="margin-right:0.07778em;">f</span><span class="mord mathrm">s</span></span><span class="mord">\u2020</span></span></span></span>',Zl,js,R,zt=`<code class="language-undefined"># dd if=20220121_raspi_2_bullseye.img of=/dev/sdx status=progress
# mount /dev/sdx2 /mnt</code>`,Ns,V,Bl,qs,X,Ul,zs,Y,Wl,Is,v,bs,Fl,Gl,Hs,Jl,Ql,ys,Vl,Xl,Ls,Yl,gl,Ks,S,It=`<code class="language-undefined">auto eth0
iface eth0 inet static
  address 192.168.hoge.fuga/24
  gateway 192.168.hoge.1
iface eth0 inet6 auto</code>`,Zs,b,se,Ds,le,ee,Bs,g,te,Us,A,Ts,ae,pe,Ws,O,Kt=`<code class="language-undefined">nameserver 192.168.hoge.1
nameserver 1.1.1.1</code>`,Fs,ss,fe,Gs,$,Cs,ie,me,Js,ls,oe,Qs,es,re,Vs,H,ne,Rs,ue,_e,Xs,j,Zt=`<code class="language-diff"><span class="token coord">--- /mnt/etc/ssh/sshd_config</span>
<span class="token coord">+++ new</span>
<span class="token coord">@@ -15 +15 @@</span>
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">#Port 22
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">Port 22
</span></span><span class="token coord">@@ -34 +34 @@</span>
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">#PermitRootLogin prohibit-password
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">PermitRootLogin prohibit-password</span></span></code>`,Ys,ts,ce,gs,N,Bt=`<code class="language-undefined"># mkdir -p /mnt/root/.ssh
# echo &quot;ssh-xxxx xxxxxxxxxxxxxxxx&quot; &gt;&gt; /mnt/root/.ssh/authorized_keys</code>`,sl,as,ve,ll,y,Ee,ps,Ut='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">\u2020</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">\u2020</mi></mrow><annotation encoding="application/x-tex">\\dag\\mathrm{rootfs}\\dag</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8888799999999999em;vertical-align:-0.19444em;"></span><span class="mord">\u2020</span><span class="mord"><span class="mord mathrm">r</span><span class="mord mathrm">o</span><span class="mord mathrm">o</span><span class="mord mathrm">t</span><span class="mord mathrm" style="margin-right:0.07778em;">f</span><span class="mord mathrm">s</span></span><span class="mord">\u2020</span></span></span></span>',de,el,q,Wt=`<code class="language-undefined"># umount /mnt
# mount /dev/sdx1 /mnt
# touch /mnt/ssh
# umount /mnt</code>`,tl,fs,ke,al,is,xe,pl,ms,Pe,fl,os,we,il,z,Ft='<code class="language-undefined">% ssh -i /path/to/priv_key -p 22 root@192.168.hoge.fuga</code>',ml,rs,he,ol,ns,Me,rl,us,be,nl,_s,He,ul,L,ye,I,Le,De,_l,cs,Te,cl,K,Gt='<code class="language-undefined">% go install github.com/k0sproject/k0sctl@latest</code>',vl,vs,Ce,El,Es,Re,dl,ds,Se,kl,D,Ae,Z,Oe,$e,xl,B,Jt='<code class="language-undefined">% k0sctl init &gt; k0sctl.yaml</code>',Pl,ks,je,wl,xs,Ne,hl,U,Qt='<code class="language-undefined">% k0sctl apply --config k0sctl.yaml</code>',Ml,Ps,qe,bl,T,ze,Ss,Ie,Ke,Hl,W,Vt='<code class="language-undefined">% k0sctl kubeconfig &gt; kubeconfig</code>',yl,ws,Ze,Ll,hs,Be;return{c(){u=p("h1"),d=m("\u30E9\u30BA\u30D1\u30A4\u3067k0s\u30AF\u30E9\u30B9\u30BF\u69CB\u7BC9"),k=r(),x=p("p"),_=m("\u3084\u3063\u305F\u306E\u3067\u30E1\u30E2\uFF0E"),E=r(),w=p("h2"),$l=m("\u30E9\u30BA\u30D1\u30A4\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7"),As=r(),G=p("p"),jl=m("\u81EA\u52D5\u5316\u3063\u3066\u4F55"),Os=r(),M=p("p"),Nl=m("\u307E\u305A\uFF0CSD\u30AB\u30FC\u30C9\u3092\u7528\u610F\u3057\uFF0C"),C=p("a"),ql=m("raspi.debian.net"),zl=m(`\u304B\u3089\u9069\u5207\u306A\u30A4\u30E1\u30FC\u30B8\u306Exz\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\uFF0E
\u3053\u3053\u3067\u306F11(bullseye)\u3092\u4F7F\u7528\u3059\u308B\uFF0E`),$s=r(),P=p("h3"),Il=m("1. \u30A4\u30E1\u30FC\u30B8\u3092SD\u30AB\u30FC\u30C9(/dev/sd"),J=p("span"),Kl=m(")\u306B\u713C\u304F\u30FB"),Q=p("span"),Zl=m("\u306E\u30DE\u30A6\u30F3\u30C8"),js=r(),R=p("pre"),Ns=r(),V=p("h3"),Bl=m("2. \u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u8A2D\u5B9A"),qs=r(),X=p("p"),Ul=m("\u6CE8\u610F\u3057\u3066\u9069\u5B9C\u8AAD\u307F\u66FF\u3048\u308B\u3053\u3068\uFF0E"),zs=r(),Y=p("p"),Wl=m("\u307E\u305A\uFF0CIP\u3092\u56FA\u5B9A\u3059\u308B\uFF0E"),Is=r(),v=p("p"),bs=p("code"),Fl=m("/mnt/etc/network/interfadces.d/eth0"),Gl=m("\u306E"),Hs=p("code"),Jl=m("inet"),Ql=m("\u3092"),ys=p("code"),Vl=m("auto"),Xl=m("\u304B\u3089"),Ls=p("code"),Yl=m("static"),gl=m("\u306B\u5909\u66F4\u3059\u308B :"),Ks=r(),S=p("pre"),Zs=r(),b=p("p"),se=m("\u7121\u7DDA\u63A5\u7D9A\u3092\u8003\u3048\u3066\u3044\u308B\u306E\u3067\u3042\u308C\u3070"),Ds=p("code"),le=m("wpa_supplicant.conf"),ee=m("\u3092\u7528\u610F\u3059\u308C\u3070\u3088\u3055\u3052\uFF0E"),Bs=r(),g=p("p"),te=m(`\u6B21\u306B\uFF0Cresolv.conf\u3092\u7F6E\u304F\uFF0E
raspbian\u3068\u304B\u3092\u4F7F\u3063\u3066\u308B\u306A\u3089\u5FC5\u8981\u7121\u3044\u304B\u3082\uFF0E`),Us=r(),A=p("p"),Ts=p("code"),ae=m("/mnt/etc/resolv.conf"),pe=m("\u3092\u6B21\u306E\u3088\u3046\u306B\u3059\u308B :"),Ws=r(),O=p("pre"),Fs=r(),ss=p("p"),fe=m(`\u6700\u5F8C\u306B\uFF0Chostname\u3092\u8A2D\u5B9A\u3059\u308B\uFF0E
\u3053\u308C\u306F\u30B7\u30A7\u30EB\u3067\u64CD\u4F5C\u3059\u308B\u6642\u306B\u308F\u304B\u308A\u3084\u3059\u304F\u3059\u308B\u305F\u3081\uFF0E`),Gs=r(),$=p("p"),Cs=p("code"),ie=m("/mnt/etc/hostname"),me=m("\u3092\u7DE8\u96C6\u3059\u308B\uFF0E"),Js=r(),ls=p("h3"),oe=m("3. ssh\u306E\u8A2D\u5B9A"),Qs=r(),es=p("p"),re=m("\u4ECA\u56DE\u306Froot\u3067\u3082ssh\u304C\u4F7F\u3048\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u3066\u3044\u304F\uFF0E"),Vs=r(),H=p("p"),ne=m("\u307E\u305A\uFF0C"),Rs=p("code"),ue=m("/mnt/etc/ssh/sshd_config"),_e=m("\u3092\u7DE8\u96C6\u3059\u308B :"),Xs=r(),j=p("pre"),Ys=r(),ts=p("p"),ce=m(`\u6B21\u306B\uFF0C\u516C\u958B\u9375\u3092\u767B\u9332\u3059\u308B\uFF0E
\u9375\u306E\u4F5C\u6210\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u5404\u81EAgg\u308B\u3053\u3068\uFF0E`),gs=r(),N=p("pre"),sl=r(),as=p("h3"),ve=m("4. sshd\u3092\u6709\u52B9\u5316\u3059\u308B"),ll=r(),y=p("p"),Ee=m("\u6700\u521D\u306B"),ps=p("span"),de=m("\u3092\u30A2\u30F3\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u3044\u308B\uFF0E"),el=r(),q=p("pre"),tl=r(),fs=p("p"),ke=m(`\u3053\u308C\u3067\uFF0C\u3082\u3046\u3053\u306ESD\u30AB\u30FC\u30C9\u306B\u3057\u304C\u3089\u307F\u306F\u5B58\u5728\u3057\u306A\u3044\uFF0E
PC\u304B\u3089\u3076\u3063\u3053\u629C\u304F\uFF0E`),al=r(),is=p("h3"),xe=m("5. \u8D77\u52D5\u30FB\u63A5\u7D9A"),pl=r(),ms=p("p"),Pe=m(`\u30E9\u30BA\u30D1\u30A4\u306E\u30ED\u30FC\u30AB\u30EBIP\u3092\u56FA\u5B9A\u3057sshd\u3092\u6709\u52B9\u5316\u3057\u305F\u306E\u3067\uFF0C(\u3068\u304F\u306B\u30C8\u30E9\u30D6\u3089\u306A\u3044\u9650\u308A)\u5B8C\u5168\u306B\u30D8\u30C3\u30C9\u30EC\u30B9\u904B\u7528\u304C\u53EF\u80FD\uFF0E
\u3068\u3044\u3046\u3053\u3068\u3067SD\u30AB\u30FC\u30C9\u3068LAN\u30B1\u30FC\u30D6\u30EB\u3092\u523A\u3057\u3066\u96FB\u6E90\u3092\u6295\u5165\uFF0E`),fl=r(),os=p("p"),we=m("\u3057\u3070\u3089\u304F\u5F85\u3063\u3066ping\u304C\u901A\u308B\u3088\u3046\u3067\u3042\u308C\u3070\uFF0Cssh\u3067\u63A5\u7D9A\u3059\u308B\uFF0E"),il=r(),z=p("pre"),ml=r(),rs=p("h2"),he=m("\u30AF\u30E9\u30B9\u30BF\u306E\u69CB\u7BC9(k0sctl)"),ol=r(),ns=p("p"),Me=m("\u3053\u308C\u3092\u4F7F\u3046\u3068\u697D\u3089\u3057\u3044\uFF0E(\u5B9F\u969B\u697D\u3060\u3063\u305F)"),rl=r(),us=p("p"),be=m("\u307E\u3060\u5B8C\u5168\u306A\u7406\u89E3\u306B\u81F3\u3063\u3066\u3044\u306A\u3044\u306E\u3067\u3044\u308D\u3044\u308D\u4E0D\u6B63\u78BA\u304B\u3082\uFF0E"),nl=r(),_s=p("h3"),He=m("1. \u4F5C\u696D\u7528PC\u306Bk0sctl\u3092\u5165\u308C\u308B"),ul=r(),L=p("p"),ye=m("\u5B9F\u969B\u306B\u3084\u308B\u3068\u304D\u306Fgithub("),I=p("a"),Le=m("k0sproject/k0sctl"),De=m(")\u3092\u53C2\u7167\u306E\u3053\u3068\uFF0E"),_l=r(),cs=p("p"),Te=m("\u73FE\u72B6\uFF0Cgo\u304C\u52D5\u304F\u74B0\u5883\u3067"),cl=r(),K=p("pre"),vl=r(),vs=p("p"),Ce=m("\u3068\u3059\u308B\u3068\u3088\u3044(\u3089\u3057\u3044)\uFF0E"),El=r(),Es=p("h3"),Re=m("2. \u8A2D\u5B9A\u3059\u308B"),dl=r(),ds=p("p"),Se=m("\u3053\u3053\u304B\u3089\u306F\u30E9\u30BA\u30D1\u30A4(\u30DE\u30B9\u30BF\u30FC\u30CE\u30FC\u30C9\u3092\u542B\u3080)\u3067\u306F\u306A\u304F\uFF0C\u4F5C\u696D\u7528\u306E\u74B0\u5883\u3067\u5B9F\u884C\u3059\u308B\uFF0E"),kl=r(),D=p("p"),Ae=m("\u5B9F\u969B\u306B\u3084\u308B\u3068\u304D\u306F"),Z=p("a"),Oe=m("docs.k0sproject.io"),$e=m("\u3092\u53C2\u7167\uFF0E"),xl=r(),B=p("pre"),Pl=r(),ks=p("p"),je=m(`\u3067k0sctl\u306E\u8A2D\u5B9A\u306E\u96DB\u5F62\u304C\u5410\u304B\u308C\u308B\u306E\u3067\uFF0C\u3053\u308C\u3092\u7DE8\u96C6\u3059\u308B\uFF0E
\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306Fk0s\u306E\u30CE\u30FC\u30C9\u6BCE\u306E\u8A2D\u5B9A\u3068\u306F\u5225\u7269\u306A\u306E\u3067\u6CE8\u610F\uFF0E`),wl=r(),xs=p("p"),Ne=m("\u3067\u304D\u305F\u3089\u5B9F\u6A5F\u306B\u30C7\u30D7\u30ED\u30A4\u3059\u308B\uFF0E"),hl=r(),U=p("pre"),Ml=r(),Ps=p("p"),qe=m("\u3057\u3070\u3089\u304F(\u30D7\u30ED\u30F3\u30D7\u30C8\u304C\u5E30\u3063\u3066\u304F\u308B\u307E\u3067)\u5F85\u3064\uFF0E"),bl=r(),T=p("p"),ze=m(`\u7D42\u308F\u3063\u305F\u3089kubeconfig\u3092\u5410\u304B\u305B\u308B\uFF0E
\u3053\u308C\u306B\u3088\u3063\u3066`),Ss=p("code"),Ie=m("kubectl"),Ke=m("\u304C\u4F7F\u3048\u305F\u308A\u3059\u308B\uFF0E"),Hl=r(),W=p("pre"),yl=r(),ws=p("h2"),Ze=m("\u86C7\u8DB3"),Ll=r(),hs=p("p"),Be=m("\u30CE\u30FC\u30C9\u3092\u5168\u3066\u30E9\u30BA\u30D1\u30A4\u3067\u69CB\u7BC9\u3057\u305F\u5834\u5408\uFF0Ck0sctl apply\u3067\u305D\u3053\u305D\u3053\u6642\u9593\u304C\u304B\u304B\u3063\u305F\uFF0E"),this.h()},l(s){u=f(s,"H1",{});var e=i(u);d=o(e,"\u30E9\u30BA\u30D1\u30A4\u3067k0s\u30AF\u30E9\u30B9\u30BF\u69CB\u7BC9"),e.forEach(l),k=n(s),x=f(s,"P",{});var Ge=i(x);_=o(Ge,"\u3084\u3063\u305F\u306E\u3067\u30E1\u30E2\uFF0E"),Ge.forEach(l),E=n(s),w=f(s,"H2",{});var Je=i(w);$l=o(Je,"\u30E9\u30BA\u30D1\u30A4\u306E\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7"),Je.forEach(l),As=n(s),G=f(s,"P",{});var Qe=i(G);jl=o(Qe,"\u81EA\u52D5\u5316\u3063\u3066\u4F55"),Qe.forEach(l),Os=n(s),M=f(s,"P",{});var Dl=i(M);Nl=o(Dl,"\u307E\u305A\uFF0CSD\u30AB\u30FC\u30C9\u3092\u7528\u610F\u3057\uFF0C"),C=f(Dl,"A",{href:!0,rel:!0});var Ve=i(C);ql=o(Ve,"raspi.debian.net"),Ve.forEach(l),zl=o(Dl,`\u304B\u3089\u9069\u5207\u306A\u30A4\u30E1\u30FC\u30B8\u306Exz\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\uFF0E
\u3053\u3053\u3067\u306F11(bullseye)\u3092\u4F7F\u7528\u3059\u308B\uFF0E`),Dl.forEach(l),$s=n(s),P=f(s,"H3",{});var Ms=i(P);Il=o(Ms,"1. \u30A4\u30E1\u30FC\u30B8\u3092SD\u30AB\u30FC\u30C9(/dev/sd"),J=f(Ms,"SPAN",{class:!0});var Xt=i(J);Xt.forEach(l),Kl=o(Ms,")\u306B\u713C\u304F\u30FB"),Q=f(Ms,"SPAN",{class:!0});var Yt=i(Q);Yt.forEach(l),Zl=o(Ms,"\u306E\u30DE\u30A6\u30F3\u30C8"),Ms.forEach(l),js=n(s),R=f(s,"PRE",{class:!0});var gt=i(R);gt.forEach(l),Ns=n(s),V=f(s,"H3",{});var Xe=i(V);Bl=o(Xe,"2. \u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u8A2D\u5B9A"),Xe.forEach(l),qs=n(s),X=f(s,"P",{});var Ye=i(X);Ul=o(Ye,"\u6CE8\u610F\u3057\u3066\u9069\u5B9C\u8AAD\u307F\u66FF\u3048\u308B\u3053\u3068\uFF0E"),Ye.forEach(l),zs=n(s),Y=f(s,"P",{});var ge=i(Y);Wl=o(ge,"\u307E\u305A\uFF0CIP\u3092\u56FA\u5B9A\u3059\u308B\uFF0E"),ge.forEach(l),Is=n(s),v=f(s,"P",{});var h=i(v);bs=f(h,"CODE",{});var st=i(bs);Fl=o(st,"/mnt/etc/network/interfadces.d/eth0"),st.forEach(l),Gl=o(h,"\u306E"),Hs=f(h,"CODE",{});var lt=i(Hs);Jl=o(lt,"inet"),lt.forEach(l),Ql=o(h,"\u3092"),ys=f(h,"CODE",{});var et=i(ys);Vl=o(et,"auto"),et.forEach(l),Xl=o(h,"\u304B\u3089"),Ls=f(h,"CODE",{});var tt=i(Ls);Yl=o(tt,"static"),tt.forEach(l),gl=o(h,"\u306B\u5909\u66F4\u3059\u308B :"),h.forEach(l),Ks=n(s),S=f(s,"PRE",{class:!0});var sa=i(S);sa.forEach(l),Zs=n(s),b=f(s,"P",{});var Tl=i(b);se=o(Tl,"\u7121\u7DDA\u63A5\u7D9A\u3092\u8003\u3048\u3066\u3044\u308B\u306E\u3067\u3042\u308C\u3070"),Ds=f(Tl,"CODE",{});var at=i(Ds);le=o(at,"wpa_supplicant.conf"),at.forEach(l),ee=o(Tl,"\u3092\u7528\u610F\u3059\u308C\u3070\u3088\u3055\u3052\uFF0E"),Tl.forEach(l),Bs=n(s),g=f(s,"P",{});var pt=i(g);te=o(pt,`\u6B21\u306B\uFF0Cresolv.conf\u3092\u7F6E\u304F\uFF0E
raspbian\u3068\u304B\u3092\u4F7F\u3063\u3066\u308B\u306A\u3089\u5FC5\u8981\u7121\u3044\u304B\u3082\uFF0E`),pt.forEach(l),Us=n(s),A=f(s,"P",{});var Ue=i(A);Ts=f(Ue,"CODE",{});var ft=i(Ts);ae=o(ft,"/mnt/etc/resolv.conf"),ft.forEach(l),pe=o(Ue,"\u3092\u6B21\u306E\u3088\u3046\u306B\u3059\u308B :"),Ue.forEach(l),Ws=n(s),O=f(s,"PRE",{class:!0});var la=i(O);la.forEach(l),Fs=n(s),ss=f(s,"P",{});var it=i(ss);fe=o(it,`\u6700\u5F8C\u306B\uFF0Chostname\u3092\u8A2D\u5B9A\u3059\u308B\uFF0E
\u3053\u308C\u306F\u30B7\u30A7\u30EB\u3067\u64CD\u4F5C\u3059\u308B\u6642\u306B\u308F\u304B\u308A\u3084\u3059\u304F\u3059\u308B\u305F\u3081\uFF0E`),it.forEach(l),Gs=n(s),$=f(s,"P",{});var We=i($);Cs=f(We,"CODE",{});var mt=i(Cs);ie=o(mt,"/mnt/etc/hostname"),mt.forEach(l),me=o(We,"\u3092\u7DE8\u96C6\u3059\u308B\uFF0E"),We.forEach(l),Js=n(s),ls=f(s,"H3",{});var ot=i(ls);oe=o(ot,"3. ssh\u306E\u8A2D\u5B9A"),ot.forEach(l),Qs=n(s),es=f(s,"P",{});var rt=i(es);re=o(rt,"\u4ECA\u56DE\u306Froot\u3067\u3082ssh\u304C\u4F7F\u3048\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u3066\u3044\u304F\uFF0E"),rt.forEach(l),Vs=n(s),H=f(s,"P",{});var Cl=i(H);ne=o(Cl,"\u307E\u305A\uFF0C"),Rs=f(Cl,"CODE",{});var nt=i(Rs);ue=o(nt,"/mnt/etc/ssh/sshd_config"),nt.forEach(l),_e=o(Cl,"\u3092\u7DE8\u96C6\u3059\u308B :"),Cl.forEach(l),Xs=n(s),j=f(s,"PRE",{class:!0});var ea=i(j);ea.forEach(l),Ys=n(s),ts=f(s,"P",{});var ut=i(ts);ce=o(ut,`\u6B21\u306B\uFF0C\u516C\u958B\u9375\u3092\u767B\u9332\u3059\u308B\uFF0E
\u9375\u306E\u4F5C\u6210\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u5404\u81EAgg\u308B\u3053\u3068\uFF0E`),ut.forEach(l),gs=n(s),N=f(s,"PRE",{class:!0});var ta=i(N);ta.forEach(l),sl=n(s),as=f(s,"H3",{});var _t=i(as);ve=o(_t,"4. sshd\u3092\u6709\u52B9\u5316\u3059\u308B"),_t.forEach(l),ll=n(s),y=f(s,"P",{});var Rl=i(y);Ee=o(Rl,"\u6700\u521D\u306B"),ps=f(Rl,"SPAN",{class:!0});var aa=i(ps);aa.forEach(l),de=o(Rl,"\u3092\u30A2\u30F3\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u3044\u308B\uFF0E"),Rl.forEach(l),el=n(s),q=f(s,"PRE",{class:!0});var pa=i(q);pa.forEach(l),tl=n(s),fs=f(s,"P",{});var ct=i(fs);ke=o(ct,`\u3053\u308C\u3067\uFF0C\u3082\u3046\u3053\u306ESD\u30AB\u30FC\u30C9\u306B\u3057\u304C\u3089\u307F\u306F\u5B58\u5728\u3057\u306A\u3044\uFF0E
PC\u304B\u3089\u3076\u3063\u3053\u629C\u304F\uFF0E`),ct.forEach(l),al=n(s),is=f(s,"H3",{});var vt=i(is);xe=o(vt,"5. \u8D77\u52D5\u30FB\u63A5\u7D9A"),vt.forEach(l),pl=n(s),ms=f(s,"P",{});var Et=i(ms);Pe=o(Et,`\u30E9\u30BA\u30D1\u30A4\u306E\u30ED\u30FC\u30AB\u30EBIP\u3092\u56FA\u5B9A\u3057sshd\u3092\u6709\u52B9\u5316\u3057\u305F\u306E\u3067\uFF0C(\u3068\u304F\u306B\u30C8\u30E9\u30D6\u3089\u306A\u3044\u9650\u308A)\u5B8C\u5168\u306B\u30D8\u30C3\u30C9\u30EC\u30B9\u904B\u7528\u304C\u53EF\u80FD\uFF0E
\u3068\u3044\u3046\u3053\u3068\u3067SD\u30AB\u30FC\u30C9\u3068LAN\u30B1\u30FC\u30D6\u30EB\u3092\u523A\u3057\u3066\u96FB\u6E90\u3092\u6295\u5165\uFF0E`),Et.forEach(l),fl=n(s),os=f(s,"P",{});var dt=i(os);we=o(dt,"\u3057\u3070\u3089\u304F\u5F85\u3063\u3066ping\u304C\u901A\u308B\u3088\u3046\u3067\u3042\u308C\u3070\uFF0Cssh\u3067\u63A5\u7D9A\u3059\u308B\uFF0E"),dt.forEach(l),il=n(s),z=f(s,"PRE",{class:!0});var fa=i(z);fa.forEach(l),ml=n(s),rs=f(s,"H2",{});var kt=i(rs);he=o(kt,"\u30AF\u30E9\u30B9\u30BF\u306E\u69CB\u7BC9(k0sctl)"),kt.forEach(l),ol=n(s),ns=f(s,"P",{});var xt=i(ns);Me=o(xt,"\u3053\u308C\u3092\u4F7F\u3046\u3068\u697D\u3089\u3057\u3044\uFF0E(\u5B9F\u969B\u697D\u3060\u3063\u305F)"),xt.forEach(l),rl=n(s),us=f(s,"P",{});var Pt=i(us);be=o(Pt,"\u307E\u3060\u5B8C\u5168\u306A\u7406\u89E3\u306B\u81F3\u3063\u3066\u3044\u306A\u3044\u306E\u3067\u3044\u308D\u3044\u308D\u4E0D\u6B63\u78BA\u304B\u3082\uFF0E"),Pt.forEach(l),nl=n(s),_s=f(s,"H3",{});var wt=i(_s);He=o(wt,"1. \u4F5C\u696D\u7528PC\u306Bk0sctl\u3092\u5165\u308C\u308B"),wt.forEach(l),ul=n(s),L=f(s,"P",{});var Sl=i(L);ye=o(Sl,"\u5B9F\u969B\u306B\u3084\u308B\u3068\u304D\u306Fgithub("),I=f(Sl,"A",{href:!0,rel:!0});var ht=i(I);Le=o(ht,"k0sproject/k0sctl"),ht.forEach(l),De=o(Sl,")\u3092\u53C2\u7167\u306E\u3053\u3068\uFF0E"),Sl.forEach(l),_l=n(s),cs=f(s,"P",{});var Mt=i(cs);Te=o(Mt,"\u73FE\u72B6\uFF0Cgo\u304C\u52D5\u304F\u74B0\u5883\u3067"),Mt.forEach(l),cl=n(s),K=f(s,"PRE",{class:!0});var ia=i(K);ia.forEach(l),vl=n(s),vs=f(s,"P",{});var bt=i(vs);Ce=o(bt,"\u3068\u3059\u308B\u3068\u3088\u3044(\u3089\u3057\u3044)\uFF0E"),bt.forEach(l),El=n(s),Es=f(s,"H3",{});var Ht=i(Es);Re=o(Ht,"2. \u8A2D\u5B9A\u3059\u308B"),Ht.forEach(l),dl=n(s),ds=f(s,"P",{});var yt=i(ds);Se=o(yt,"\u3053\u3053\u304B\u3089\u306F\u30E9\u30BA\u30D1\u30A4(\u30DE\u30B9\u30BF\u30FC\u30CE\u30FC\u30C9\u3092\u542B\u3080)\u3067\u306F\u306A\u304F\uFF0C\u4F5C\u696D\u7528\u306E\u74B0\u5883\u3067\u5B9F\u884C\u3059\u308B\uFF0E"),yt.forEach(l),kl=n(s),D=f(s,"P",{});var Al=i(D);Ae=o(Al,"\u5B9F\u969B\u306B\u3084\u308B\u3068\u304D\u306F"),Z=f(Al,"A",{href:!0,rel:!0});var Lt=i(Z);Oe=o(Lt,"docs.k0sproject.io"),Lt.forEach(l),$e=o(Al,"\u3092\u53C2\u7167\uFF0E"),Al.forEach(l),xl=n(s),B=f(s,"PRE",{class:!0});var ma=i(B);ma.forEach(l),Pl=n(s),ks=f(s,"P",{});var Dt=i(ks);je=o(Dt,`\u3067k0sctl\u306E\u8A2D\u5B9A\u306E\u96DB\u5F62\u304C\u5410\u304B\u308C\u308B\u306E\u3067\uFF0C\u3053\u308C\u3092\u7DE8\u96C6\u3059\u308B\uFF0E
\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306Fk0s\u306E\u30CE\u30FC\u30C9\u6BCE\u306E\u8A2D\u5B9A\u3068\u306F\u5225\u7269\u306A\u306E\u3067\u6CE8\u610F\uFF0E`),Dt.forEach(l),wl=n(s),xs=f(s,"P",{});var Tt=i(xs);Ne=o(Tt,"\u3067\u304D\u305F\u3089\u5B9F\u6A5F\u306B\u30C7\u30D7\u30ED\u30A4\u3059\u308B\uFF0E"),Tt.forEach(l),hl=n(s),U=f(s,"PRE",{class:!0});var oa=i(U);oa.forEach(l),Ml=n(s),Ps=f(s,"P",{});var Ct=i(Ps);qe=o(Ct,"\u3057\u3070\u3089\u304F(\u30D7\u30ED\u30F3\u30D7\u30C8\u304C\u5E30\u3063\u3066\u304F\u308B\u307E\u3067)\u5F85\u3064\uFF0E"),Ct.forEach(l),bl=n(s),T=f(s,"P",{});var Ol=i(T);ze=o(Ol,`\u7D42\u308F\u3063\u305F\u3089kubeconfig\u3092\u5410\u304B\u305B\u308B\uFF0E
\u3053\u308C\u306B\u3088\u3063\u3066`),Ss=f(Ol,"CODE",{});var Rt=i(Ss);Ie=o(Rt,"kubectl"),Rt.forEach(l),Ke=o(Ol,"\u304C\u4F7F\u3048\u305F\u308A\u3059\u308B\uFF0E"),Ol.forEach(l),Hl=n(s),W=f(s,"PRE",{class:!0});var ra=i(W);ra.forEach(l),yl=n(s),ws=f(s,"H2",{});var St=i(ws);Ze=o(St,"\u86C7\u8DB3"),St.forEach(l),Ll=n(s),hs=f(s,"P",{});var At=i(hs);Be=o(At,"\u30CE\u30FC\u30C9\u3092\u5168\u3066\u30E9\u30BA\u30D1\u30A4\u3067\u69CB\u7BC9\u3057\u305F\u5834\u5408\uFF0Ck0sctl apply\u3067\u305D\u3053\u305D\u3053\u6642\u9593\u304C\u304B\u304B\u3063\u305F\uFF0E"),At.forEach(l),this.h()},h(){c(C,"href","https://raspi.debian.net/tested-images/"),c(C,"rel","nofollow"),c(J,"class","math math-inline"),c(Q,"class","math math-inline"),c(R,"class","language-undefined"),c(S,"class","language-undefined"),c(O,"class","language-undefined"),c(j,"class","language-diff"),c(N,"class","language-undefined"),c(ps,"class","math math-inline"),c(q,"class","language-undefined"),c(z,"class","language-undefined"),c(I,"href","https://github.com/k0sproject/k0sctl#installation"),c(I,"rel","nofollow"),c(K,"class","language-undefined"),c(Z,"href","https://docs.k0sproject.io/v1.23.3+k0s.1/k0sctl-install/"),c(Z,"rel","nofollow"),c(B,"class","language-undefined"),c(U,"class","language-undefined"),c(W,"class","language-undefined")},m(s,e){t(s,u,e),a(u,d),t(s,k,e),t(s,x,e),a(x,_),t(s,E,e),t(s,w,e),a(w,$l),t(s,As,e),t(s,G,e),a(G,jl),t(s,Os,e),t(s,M,e),a(M,Nl),a(M,C),a(C,ql),a(M,zl),t(s,$s,e),t(s,P,e),a(P,Il),a(P,J),J.innerHTML=Nt,a(P,Kl),a(P,Q),Q.innerHTML=qt,a(P,Zl),t(s,js,e),t(s,R,e),R.innerHTML=zt,t(s,Ns,e),t(s,V,e),a(V,Bl),t(s,qs,e),t(s,X,e),a(X,Ul),t(s,zs,e),t(s,Y,e),a(Y,Wl),t(s,Is,e),t(s,v,e),a(v,bs),a(bs,Fl),a(v,Gl),a(v,Hs),a(Hs,Jl),a(v,Ql),a(v,ys),a(ys,Vl),a(v,Xl),a(v,Ls),a(Ls,Yl),a(v,gl),t(s,Ks,e),t(s,S,e),S.innerHTML=It,t(s,Zs,e),t(s,b,e),a(b,se),a(b,Ds),a(Ds,le),a(b,ee),t(s,Bs,e),t(s,g,e),a(g,te),t(s,Us,e),t(s,A,e),a(A,Ts),a(Ts,ae),a(A,pe),t(s,Ws,e),t(s,O,e),O.innerHTML=Kt,t(s,Fs,e),t(s,ss,e),a(ss,fe),t(s,Gs,e),t(s,$,e),a($,Cs),a(Cs,ie),a($,me),t(s,Js,e),t(s,ls,e),a(ls,oe),t(s,Qs,e),t(s,es,e),a(es,re),t(s,Vs,e),t(s,H,e),a(H,ne),a(H,Rs),a(Rs,ue),a(H,_e),t(s,Xs,e),t(s,j,e),j.innerHTML=Zt,t(s,Ys,e),t(s,ts,e),a(ts,ce),t(s,gs,e),t(s,N,e),N.innerHTML=Bt,t(s,sl,e),t(s,as,e),a(as,ve),t(s,ll,e),t(s,y,e),a(y,Ee),a(y,ps),ps.innerHTML=Ut,a(y,de),t(s,el,e),t(s,q,e),q.innerHTML=Wt,t(s,tl,e),t(s,fs,e),a(fs,ke),t(s,al,e),t(s,is,e),a(is,xe),t(s,pl,e),t(s,ms,e),a(ms,Pe),t(s,fl,e),t(s,os,e),a(os,we),t(s,il,e),t(s,z,e),z.innerHTML=Ft,t(s,ml,e),t(s,rs,e),a(rs,he),t(s,ol,e),t(s,ns,e),a(ns,Me),t(s,rl,e),t(s,us,e),a(us,be),t(s,nl,e),t(s,_s,e),a(_s,He),t(s,ul,e),t(s,L,e),a(L,ye),a(L,I),a(I,Le),a(L,De),t(s,_l,e),t(s,cs,e),a(cs,Te),t(s,cl,e),t(s,K,e),K.innerHTML=Gt,t(s,vl,e),t(s,vs,e),a(vs,Ce),t(s,El,e),t(s,Es,e),a(Es,Re),t(s,dl,e),t(s,ds,e),a(ds,Se),t(s,kl,e),t(s,D,e),a(D,Ae),a(D,Z),a(Z,Oe),a(D,$e),t(s,xl,e),t(s,B,e),B.innerHTML=Jt,t(s,Pl,e),t(s,ks,e),a(ks,je),t(s,wl,e),t(s,xs,e),a(xs,Ne),t(s,hl,e),t(s,U,e),U.innerHTML=Qt,t(s,Ml,e),t(s,Ps,e),a(Ps,qe),t(s,bl,e),t(s,T,e),a(T,ze),a(T,Ss),a(Ss,Ie),a(T,Ke),t(s,Hl,e),t(s,W,e),W.innerHTML=Vt,t(s,yl,e),t(s,ws,e),a(ws,Ze),t(s,Ll,e),t(s,hs,e),a(hs,Be)},p:wa,d(s){s&&l(u),s&&l(k),s&&l(x),s&&l(E),s&&l(w),s&&l(As),s&&l(G),s&&l(Os),s&&l(M),s&&l($s),s&&l(P),s&&l(js),s&&l(R),s&&l(Ns),s&&l(V),s&&l(qs),s&&l(X),s&&l(zs),s&&l(Y),s&&l(Is),s&&l(v),s&&l(Ks),s&&l(S),s&&l(Zs),s&&l(b),s&&l(Bs),s&&l(g),s&&l(Us),s&&l(A),s&&l(Ws),s&&l(O),s&&l(Fs),s&&l(ss),s&&l(Gs),s&&l($),s&&l(Js),s&&l(ls),s&&l(Qs),s&&l(es),s&&l(Vs),s&&l(H),s&&l(Xs),s&&l(j),s&&l(Ys),s&&l(ts),s&&l(gs),s&&l(N),s&&l(sl),s&&l(as),s&&l(ll),s&&l(y),s&&l(el),s&&l(q),s&&l(tl),s&&l(fs),s&&l(al),s&&l(is),s&&l(pl),s&&l(ms),s&&l(fl),s&&l(os),s&&l(il),s&&l(z),s&&l(ml),s&&l(rs),s&&l(ol),s&&l(ns),s&&l(rl),s&&l(us),s&&l(nl),s&&l(_s),s&&l(ul),s&&l(L),s&&l(_l),s&&l(cs),s&&l(cl),s&&l(K),s&&l(vl),s&&l(vs),s&&l(El),s&&l(Es),s&&l(dl),s&&l(ds),s&&l(kl),s&&l(D),s&&l(xl),s&&l(B),s&&l(Pl),s&&l(ks),s&&l(wl),s&&l(xs),s&&l(hl),s&&l(U),s&&l(Ml),s&&l(Ps),s&&l(bl),s&&l(T),s&&l(Hl),s&&l(W),s&&l(yl),s&&l(ws),s&&l(Ll),s&&l(hs)}}}function ba(F){let u,d;const k=[F[0],jt];let x={$$slots:{default:[Ma]},$$scope:{ctx:F}};for(let _=0;_<k.length;_+=1)x=Fe(x,k[_]);return u=new ha({props:x}),{c(){ca(u.$$.fragment)},l(_){va(u.$$.fragment,_)},m(_,E){Ea(u,_,E),d=!0},p(_,[E]){const w=E&1?da(k,[E&1&&Ot(_[0]),E&0&&Ot(jt)]):{};E&2&&(w.$$scope={dirty:E,ctx:_}),u.$set(w)},i(_){d||(ka(u.$$.fragment,_),d=!0)},o(_){xa(u.$$.fragment,_),d=!1},d(_){Pa(u,_)}}}const jt={title:"\u30E9\u30BA\u30D1\u30A4\u3067k0s\u30AF\u30E9\u30B9\u30BF\u69CB\u7BC9",date:"2022-03-08T00:00:00.000Z",dateUpd:"2022-03-10T00:00:00.000Z",author:"\u5C71D"};function Ha(F,u,d){return F.$$set=k=>{d(0,u=Fe(Fe({},u),$t(k)))},u=$t(u),[u]}class Ra extends na{constructor(u){super();ua(this,u,Ha,ba,_a,{})}}export{Ra as default,jt as metadata};
