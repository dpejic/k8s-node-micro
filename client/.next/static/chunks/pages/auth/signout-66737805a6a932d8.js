(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{298:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/signout",function(){return n(1332)}])},4365:function(e,t,n){"use strict";var s=n(5893),u=n(5121),r=n(7294);t.Z=e=>{let{url:t,method:n,body:a,onSuccess:i}=e,[o,c]=(0,r.useState)(null),doRequest=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{c(null);let s=await u.Z[n](t,{...a,...e});return i&&i(s.data),s.data}catch(e){c((0,s.jsxs)("div",{className:"alert alert-danger",children:[(0,s.jsx)("h4",{children:"Ooops...."}),(0,s.jsx)("ul",{className:"my-0",children:e.response.data.errors.map(e=>(0,s.jsx)("li",{children:e.message},e.message))})]}))}};return{doRequest,errors:o}}},1332:function(e,t,n){"use strict";n.r(t);var s=n(5893),u=n(7294),r=n(1163),a=n.n(r),i=n(4365);t.default=()=>{let{doRequest:e}=(0,i.Z)({url:"/api/users/signout",method:"post",body:{},onSuccess:()=>a().push("/")});return(0,u.useEffect)(()=>{e()},[]),(0,s.jsx)("div",{children:"Signing you out..."})}},1163:function(e,t,n){e.exports=n(9974)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=298)}),_N_E=e.O()}]);