import{a as k,b as w}from"./chunk-RWWCTI46.js";import{b as P,c as h,d as x,f as y}from"./chunk-JEK4FINT.js";import"./chunk-WCRJNXRP.js";import{l as O}from"./chunk-FFZHQAZF.js";import{Da as v,Ha as C,Ta as i,Ua as s,Va as m,Wa as M,Xa as p,ba as f,bb as o,cb as u,fb as _,ja as d,ka as g}from"./chunk-GSMGZ5RF.js";var S=(()=>{class a{renderer;router;constructor(n,e){this.renderer=n,this.router=e}scroll(n,e){this.router.navigate(["/public/home"]).then(()=>{setTimeout(()=>{this.renderer.selectRootElement("#oportunidades",!0).scrollIntoView({behavior:"smooth"})}),this.inicio(n,e)})}scroll2(n,e){this.router.navigate(["/public/home"]).then(()=>{setTimeout(()=>{this.renderer.selectRootElement("#servicios",!0).scrollIntoView({behavior:"smooth"})}),this.inicio(n,e)})}inicio(n,e){let t=n.querySelector("button"),r=e.querySelector("button");n.style.opacity="100",e.style.opacity="100",t.disabled==!0&&t.disabled,r.disabled==!0&&r.disabled}login(n,e){n.style.opacity="0";let t=n.querySelector("button");t.disabled,e.style.opacity="100";let r=e.querySelector("button");t.disabled}register(n,e){n.style.opacity="100";let t=n.querySelector("button");t.disabled,e.style.opacity="0";let r=e.querySelector("button");t.disabled}static \u0275fac=function(e){return new(e||a)(v(C),v(h))};static \u0275cmp=f({type:a,selectors:[["app-navbar"]],standalone:!0,features:[_],decls:27,vars:0,consts:[["ingresa",""],["registrate",""],[1,"header","container-fluid"],[1,"nav-main","container"],[1,"navbar","navbar-expand-lg","nav-bar"],["href","#",1,"navbar-brand"],["src","assets/LogoFundacionAntivirus.png","alt","Logo Fundaci\xF3n",1,"img-fluid","logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","nav-links"],[1,"nav-item"],["routerLink","home",1,"nav-link",3,"click"],[1,"nav-item",3,"click"],[1,"nav-link"],[1,"log-buttons","botones-inicio-registro"],["routerLink","login",1,"btn"],[3,"click"],["routerLink","registrate",1,"btn"]],template:function(e,t){if(e&1){let r=M();i(0,"header",2)(1,"div",3)(2,"nav",4)(3,"a",5),m(4,"img",6),s(),i(5,"button",7),m(6,"span",8),s(),i(7,"div",9)(8,"ul",10)(9,"li",11)(10,"a",12),p("click",function(){d(r);let c=o(20),l=o(24);return g(t.inicio(c,l))}),u(11,"Inicio"),s()(),i(12,"li",13),p("click",function(){d(r);let c=o(20),l=o(24);return g(t.scroll(c,l))}),i(13,"a",14),u(14,"Oportunidades"),s()(),i(15,"li",13),p("click",function(){d(r);let c=o(20),l=o(24);return g(t.scroll2(c,l))}),i(16,"a",14),u(17,"Servicios"),s()()(),i(18,"div",15)(19,"a",16,0)(21,"button",17),p("click",function(){d(r);let c=o(20),l=o(24);return g(t.login(c,l))}),u(22," Ingresa "),s()(),i(23,"a",18,1)(25,"button",17),p("click",function(){d(r);let c=o(20),l=o(24);return g(t.register(c,l))}),u(26," Reg\xEDstrate "),s()()()()()()()}},dependencies:[O,y,x],styles:[".header[_ngcontent-%COMP%]{margin-top:15px;background-color:#222d56;font-weight:900;font-family:verdana;padding:0 10%;display:flex;justify-content:space-between;align-items:center}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{cursor:pointer;width:8rem}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:auto;transition:all .3s}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.navbar-toggler[_ngcontent-%COMP%]{border:none;outline:none}.navbar-toggler-icon[_ngcontent-%COMP%]{font-size:30px;background-color:#fff;border-radius:5px}.navbar-collapse[_ngcontent-%COMP%]{justify-content:end}.nav-links[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;list-style:none;padding:0;margin:0}.nav-links[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:0 20px}.nav-links[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.nav-links[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#32526e;padding:9px 25px;background:#dcebf9;border:none;border-radius:50px;cursor:pointer;transition:all .3s ease 0s;font-weight:900}.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ffba08;color:#fff;transform:scale(1.1)}@media screen and (max-width: 1145px){.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#32526e;padding:9px 15px;background:#dcebf9;border:none;border-radius:50px;cursor:pointer;transition:all .3s ease 0s;font-weight:900}.botones-inicio-registro[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}}@media screen and (max-width: 900px){.nav-links[_ngcontent-%COMP%]{flex-direction:column;align-items:center;width:100%}.navbar-collapse[_ngcontent-%COMP%]{flex-direction:column;align-items:center;background:#222d56;position:absolute;top:100%;left:0;z-index:999;padding:10px 0;width:100%}.navbar-collapse.show[_ngcontent-%COMP%]{display:flex}.navbar-collapse[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]{flex-direction:column;align-items:center;width:100%}.navbar-collapse[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:10px 0}.log-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:10px}.log-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-bottom:10px}.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#32526e;padding:9px 25px;background:#dcebf9;border:none;border-radius:50px;cursor:pointer;transition:all .3s ease 0s;font-weight:900}}"]})}return a})();var j=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=f({type:a,selectors:[["app-publics"]],standalone:!0,features:[_],decls:4,vars:0,template:function(e,t){e&1&&m(0,"app-navbar")(1,"app-buscador")(2,"router-outlet")(3,"app-footer")},dependencies:[P,k,S,w],encapsulation:2})}return a})();export{j as PublicsComponent};
