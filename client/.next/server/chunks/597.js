"use strict";exports.id=597,exports.ids=[597],exports.modules={8718:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=a(9648),s=e([r]);r=(s.then?(await s)():s)[0];let __WEBPACK_DEFAULT_EXPORT__=({req:e})=>r.default.create({baseURL:"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",headers:e.headers});n()}catch(e){n(e)}})},8792:(e,t,a)=>{a.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var n=a(997),r=a(1664),s=a.n(r);let __WEBPACK_DEFAULT_EXPORT__=({currentUser:e})=>{let t=[!e&&{label:"Sign Up",href:"/auth/signup"},!e&&{label:"Sign In",href:"/auth/signin"},e&&{label:"Sell Tickets",href:"/tickets/new"},e&&{label:"My Orders",href:"/orders"},e&&{label:"Sign Out",href:"/auth/signout"}].filter(e=>e).map(({label:e,href:t})=>n.jsx("li",{className:"nav-item",children:n.jsx(s(),{className:"nav-link",href:t,children:e})},t));return(0,n.jsxs)("nav",{className:"navbar navbar-light bg-light",children:[n.jsx(s(),{className:"navbar-brand",href:"/",children:"GitTix"}),n.jsx("div",{className:"d-flex justify-content-end",children:n.jsx("ul",{className:"nav d-flex align-items-center",children:t})})]})}},9597:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>c});var r=a(997);a(5931);var s=a(8718),l=a(8792),i=e([s]);s=(i.then?(await i)():i)[0];let AppComponent=({Component:e,pageProps:t,currentUser:a})=>(0,r.jsxs)("div",{children:[r.jsx(l.Z,{currentUser:a}),r.jsx("div",{className:"container",children:r.jsx(e,{currentUser:a,...t})})]});AppComponent.getInitialProps=async e=>{let t=(0,s.Z)(e.ctx),{data:a}=await t.get("/api/users/currentuser"),n={};return e.Component.getInitialProps&&(n=await e.Component.getInitialProps(e.ctx,t,a.currentUser)),{pageProps:n,...a}};let c=AppComponent;n()}catch(e){n(e)}})}};