import{Da as D,Fa as I,Ja as M,T as a,U as A,W as f,Y as d,Z as l,ca as S,da as b,ob as B,qa as v,xa as _}from"./chunk-GSMGZ5RF.js";var k=null;function p(){return k}function Ge(i){k??=i}var L=class{};var E=new f(""),y=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=a({token:e,factory:()=>l(z),providedIn:"platform"});let i=e;return i})(),He=new f(""),z=(()=>{let e=class e extends y{constructor(){super(),this._doc=l(E),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return p().getBaseHref(this._doc)}onPopState(t){let n=p().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=p().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,r){this._history.pushState(t,n,r)}replaceState(t,n,r){this._history.replaceState(t,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=a({token:e,factory:()=>new e,providedIn:"platform"});let i=e;return i})();function w(i,e){if(i.length==0)return e;if(e.length==0)return i;let s=0;return i.endsWith("/")&&s++,e.startsWith("/")&&s++,s==2?i+e.substring(1):s==1?i+e:i+"/"+e}function R(i){let e=i.match(/#|\?|$/),s=e&&e.index||i.length,t=s-(i[s-1]==="/"?1:0);return i.slice(0,t)+i.slice(s)}function c(i){return i&&i[0]!=="?"?"?"+i:i}var g=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=a({token:e,factory:()=>l(V),providedIn:"root"});let i=e;return i})(),N=new f(""),V=(()=>{let e=class e extends g{constructor(t,n){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return w(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+c(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${n}${r}`:n}pushState(t,n,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.pushState(t,n,u)}replaceState(t,n,r,o){let u=this.prepareExternalUrl(r+c(o));this._platformLocation.replaceState(t,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(n){return new(n||e)(d(y),d(N,8))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Ye=(()=>{let e=class e extends g{constructor(t,n){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(t){let n=w(this._baseHref,t);return n.length>0?"#"+n:n}pushState(t,n,r,o){let u=this.prepareExternalUrl(r+c(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(t,n,u)}replaceState(t,n,r,o){let u=this.prepareExternalUrl(r+c(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(t,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(n){return new(n||e)(d(y),d(N,8))},e.\u0275prov=a({token:e,factory:e.\u0275fac});let i=e;return i})(),j=(()=>{let e=class e{constructor(t){this._subject=new v,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=Y(R(O(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+c(n))}normalize(t){return e.stripTrailingSlash(H(this._basePath,O(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",r=null){this._locationStrategy.pushState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+c(n)),r)}replaceState(t,n="",r=null){this._locationStrategy.replaceState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+c(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(r=>r(t,n))}subscribe(t,n,r){return this._subject.subscribe({next:t,error:n,complete:r})}};e.normalizeQueryParams=c,e.joinWithSlash=w,e.stripTrailingSlash=R,e.\u0275fac=function(n){return new(n||e)(d(g))},e.\u0275prov=a({token:e,factory:()=>G(),providedIn:"root"});let i=e;return i})();function G(){return new j(d(g))}function H(i,e){if(!i||!e.startsWith(i))return e;let s=e.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:e}function O(i){return i.replace(/\/index.html$/,"")}function Y(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function Ze(i,e){e=encodeURIComponent(e);for(let s of i.split(";")){let t=s.indexOf("="),[n,r]=t==-1?[s,""]:[s.slice(0,t),s.slice(t+1)];if(n.trim()===e)return decodeURIComponent(r)}return null}var m=class{constructor(e,s,t,n){this.$implicit=e,this.ngForOf=s,this.index=t,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},We=(()=>{let e=class e{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,n,r){this._viewContainer=t,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((r,o,u)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new m(r.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)n.remove(o===null?void 0:o);else if(o!==null){let h=n.get(o);n.move(h,u),T(h,r)}});for(let r=0,o=n.length;r<o;r++){let h=n.get(r).context;h.index=r,h.count=o,h.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);T(o,r)})}static ngTemplateContextGuard(t,n){return!0}};e.\u0275fac=function(n){return new(n||e)(D(M),D(I),D(B))},e.\u0275dir=b({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let i=e;return i})();function T(i,e){i.context.$implicit=e.item}var Ke=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=A({});let i=e;return i})(),Z="browser",W="server";function K(i){return i===Z}function Xe(i){return i===W}var qe=(()=>{let e=class e{};e.\u0275prov=a({token:e,providedIn:"root",factory:()=>K(l(_))?new C(l(E),window):new F});let i=e;return i})(),C=class{constructor(e,s){this.document=e,this.window=s,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let s=X(this.document,e);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let s=e.getBoundingClientRect(),t=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(t-r[0],n-r[1])}};function X(i,e){let s=i.getElementById(e)||i.getElementsByName(e)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let t=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=t.currentNode;for(;n;){let r=n.shadowRoot;if(r){let o=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(o)return o}n=t.nextNode()}}return null}var F=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},P=class{};export{p as a,Ge as b,L as c,E as d,He as e,g as f,V as g,Ye as h,j as i,Ze as j,We as k,Ke as l,Z as m,Xe as n,qe as o,P as p};
