"use strict";(()=>{var e={};e.id=65,e.ids=[65,888,660],e.modules={891:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>S,default:()=>d,getServerSideProps:()=>m,getStaticPaths:()=>_,getStaticProps:()=>g,reportWebVitals:()=>b,routeModule:()=>j,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>f,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>h,unstable_getStaticProps:()=>x});var s=r(7093),i=r(5244),n=r(1323),l=r(9209),o=r.n(l),u=r(9597),c=r(3221),p=e([u,c]);[u,c]=p.then?(await p)():p;let d=(0,n.l)(c,"default"),g=(0,n.l)(c,"getStaticProps"),_=(0,n.l)(c,"getStaticPaths"),m=(0,n.l)(c,"getServerSideProps"),S=(0,n.l)(c,"config"),b=(0,n.l)(c,"reportWebVitals"),x=(0,n.l)(c,"unstable_getStaticProps"),h=(0,n.l)(c,"unstable_getStaticPaths"),P=(0,n.l)(c,"unstable_getStaticParams"),v=(0,n.l)(c,"unstable_getServerProps"),f=(0,n.l)(c,"unstable_getServerSideProps"),j=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/auth/signin",pathname:"/auth/signin",bundlePath:"",filename:""},components:{App:u.default,Document:o()},userland:c});a()}catch(e){a(e)}})},3221:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(997),i=r(6689),n=r(1163),l=r.n(n),o=r(4365),u=e([o]);o=(u.then?(await u)():u)[0];let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)(""),{doRequest:n,errors:u}=(0,o.Z)({url:"/api/users/signin",method:"post",body:{email:e,password:r},onSuccess:()=>l().push("/")}),onSubmit=async e=>{e.preventDefault(),await n()};return(0,s.jsxs)("form",{onSubmit:onSubmit,children:[s.jsx("h1",{children:"Sign In"}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{children:"Email Address"}),s.jsx("input",{value:e,onChange:e=>t(e.target.value),className:"form-control"})]}),(0,s.jsxs)("div",{className:"form-group",children:[s.jsx("label",{children:"Password"}),s.jsx("input",{value:r,onChange:e=>a(e.target.value),type:"password",className:"form-control"})]}),u,s.jsx("button",{className:"btn btn-primary",children:"Sign In"})]})};a()}catch(e){a(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},9648:e=>{e.exports=import("axios")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[801,209,282,450,163,597,365],()=>__webpack_exec__(891));module.exports=r})();