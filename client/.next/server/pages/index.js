"use strict";(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={6030:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>P,default:()=>u,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>g,reportWebVitals:()=>S,routeModule:()=>k,unstable_getServerProps:()=>m,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>_});var a=r(7093),i=r(5244),l=r(1323),n=r(9209),c=r.n(n),d=r(9597),o=r(7052),p=e([d]);d=(p.then?(await p)():p)[0];let u=(0,l.l)(o,"default"),g=(0,l.l)(o,"getStaticProps"),h=(0,l.l)(o,"getStaticPaths"),x=(0,l.l)(o,"getServerSideProps"),P=(0,l.l)(o,"config"),S=(0,l.l)(o,"reportWebVitals"),_=(0,l.l)(o,"unstable_getStaticProps"),b=(0,l.l)(o,"unstable_getStaticPaths"),j=(0,l.l)(o,"unstable_getStaticParams"),m=(0,l.l)(o,"unstable_getServerProps"),v=(0,l.l)(o,"unstable_getServerSideProps"),k=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d.default,Document:c()},userland:o});s()}catch(e){s(e)}})},7052:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r(997),a=r(1664),i=r.n(a);let LandingPage=({currentUser:e,tickets:t})=>{let r=t.map(e=>(0,s.jsxs)("tr",{children:[s.jsx("td",{children:e.title}),s.jsx("td",{children:e.price}),s.jsx("td",{children:s.jsx(i(),{href:"/tickets/[ticketId]",as:`/tickets/${e.id}`,children:"View"})})]},e.id));return(0,s.jsxs)("div",{children:[s.jsx("h1",{children:"Tickets"}),(0,s.jsxs)("table",{className:"table",children:[s.jsx("thead",{children:(0,s.jsxs)("tr",{children:[s.jsx("th",{children:"Title"}),s.jsx("th",{children:"Price"}),s.jsx("th",{children:"Link"})]})}),s.jsx("tbody",{children:r})]})]})};LandingPage.getInitialProps=async(e,t,r)=>{let{data:s}=await t.get("/api/tickets");return{tickets:s}};let l=LandingPage},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},9648:e=>{e.exports=import("axios")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[801,209,282,450,597],()=>__webpack_exec__(6030));module.exports=r})();