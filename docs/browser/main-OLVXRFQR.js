import{a as m,b as l,e as s}from"./chunk-JEK4FINT.js";import"./chunk-WCRJNXRP.js";import"./chunk-FFZHQAZF.js";import{Ta as n,Ua as r,Va as p,ba as e,fb as i,mb as a}from"./chunk-GSMGZ5RF.js";var c=(t,f)=>!0;var u=[{path:"public",loadComponent:()=>import("./chunk-LJL7DMHV.js").then(t=>t.PublicsComponent),children:[{path:"home",title:"Home",loadComponent:()=>import("./chunk-YH2JCW3U.js").then(t=>t.HomeComponent)},{path:"login",title:"Login",loadComponent:()=>import("./chunk-2HFKH2HL.js").then(t=>t.LoginComponent)},{path:"registrate",title:"Registrate",loadComponent:()=>import("./chunk-F2MJTBB2.js").then(t=>t.RegistrateComponent)}]},{path:"private",canActivate:[c],loadComponent:()=>import("./chunk-VUY36CC7.js").then(t=>t.PrivateComponent),children:[{path:"usuario",title:"Usuario",loadComponent:()=>import("./chunk-R55UJICJ.js").then(t=>t.UsuarioComponent)}]},{path:"",redirectTo:"public/home",pathMatch:"full"}];var d={providers:[a({eventCoalescing:!0}),s(u)]};var h=(()=>{class t{title="Fundacion-Antivirus-Angular";static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e({type:t,selectors:[["app-root"]],standalone:!0,features:[i],decls:2,vars:0,template:function(o,g){o&1&&(n(0,"div"),p(1,"router-outlet"),r())},dependencies:[l],styles:["html[_ngcontent-%COMP%]{scroll-behavior:smooth}"]})}return t})();m(h,d).catch(t=>console.error(t));
