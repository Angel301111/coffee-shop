(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[356],{653:function(t,e,s){
/*!
  * Bootstrap toast.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n(s(9011),s(7956),s(8248),s(4035))})(0,(function(t,e,s,n){"use strict";const a="toast",i="bs.toast",o=`.${i}`,r=`mouseover${o}`,l=`mouseout${o}`,c=`focusin${o}`,u=`focusout${o}`,h=`hide${o}`,d=`hidden${o}`,m=`show${o}`,g=`shown${o}`,v="fade",_="hide",p="show",b="showing",f={animation:"boolean",autohide:"boolean",delay:"number"},k={animation:!0,autohide:!0,delay:5e3};class y extends t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return k}static get DefaultType(){return f}static get NAME(){return a}show(){const t=e.trigger(this._element,m);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(v);const s=()=>{this._element.classList.remove(b),e.trigger(this._element,g),this._maybeScheduleHide()};this._element.classList.remove(_),n.reflow(this._element),this._element.classList.add(p,b),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,h);if(t.defaultPrevented)return;const s=()=>{this._element.classList.add(_),this._element.classList.remove(b,p),e.trigger(this._element,d)};this._element.classList.add(b),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(p),super.dispose()}isShown(){return this._element.classList.contains(p)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,r,(t=>this._onInteraction(t,!0))),e.on(this._element,l,(t=>this._onInteraction(t,!1))),e.on(this._element,c,(t=>this._onInteraction(t,!0))),e.on(this._element,u,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=y.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return s.enableDismissTrigger(y),n.defineJQueryPlugin(y),y}))},8308:function(t,e,s){"use strict";s.d(e,{A:function(){return y}});var n=s(641);const a={class:"toast-container position-absolute pe-3 top-0 end-0",style:{"z-index":"1050"}};function i(t,e,s,i,o,r){const l=(0,n.g2)("ToastToast");return(0,n.uX)(),(0,n.CE)("div",a,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.messages,((t,e)=>((0,n.uX)(),(0,n.Wv)(l,{key:"msg"+e,msg:t},null,8,["msg"])))),128))])}s(4114);var o=s(33);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},l={class:"toast-header"},c={class:"me-auto"},u=(0,n.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),h={key:0,class:"toast-body"};function d(t,e,s,a,i,d){return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("div",l,[(0,n.Lk)("span",{class:(0,o.C4)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n.Lk)("strong",c,(0,o.v_)(s.msg.title),1),u]),s.msg.content?((0,n.uX)(),(0,n.CE)("div",h,(0,o.v_)(s.msg.content),1)):(0,n.Q3)("",!0)],512)}var m=s(653),g=s.n(m),v={props:["msg"],mounted(){const t=this.$refs.toast,e=new(g())(t,{delay:3e3});e.show()}},_=s(6262);const p=(0,_.A)(v,[["render",d]]);var b=p,f={components:{ToastToast:b},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e,title:s,content:n}=t;this.messages.push({style:e,title:s,content:n})}))}};const k=(0,_.A)(f,[["render",i]]);var y=k},2356:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return $}});var n=s(641);const a={class:"container-fluid mt-3 position-relative"};function i(t,e,s,i,o,r){const l=(0,n.g2)("NavbarView"),c=(0,n.g2)("ToastMessages"),u=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(l),(0,n.Lk)("div",a,[(0,n.bF)(c),(0,n.bF)(u)])],64)}s(4114);var o=s(3751);const r={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},c=(0,n.Lk)("i",{class:"bi bi-cup-hot-fill pe-2"},null,-1),u=(0,n.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n.Lk)("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},d={class:"navbar-nav"};function m(t,e,s,a,i,m){const g=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("nav",r,[(0,n.Lk)("div",l,[(0,n.bF)(g,{to:"/",class:"navbar-brand text-dark"},{default:(0,n.k6)((()=>[c,(0,n.eW)(" Coffee Shop ")])),_:1}),u,(0,n.Lk)("div",h,[(0,n.Lk)("div",d,[(0,n.bF)(g,{to:"/dashboard/products",class:"nav-link"},{default:(0,n.k6)((()=>[(0,n.eW)(" 產品 ")])),_:1}),(0,n.bF)(g,{to:"/dashboard/orders",class:"nav-link"},{default:(0,n.k6)((()=>[(0,n.eW)(" 訂單 ")])),_:1}),(0,n.bF)(g,{to:"/dashboard/coupons",class:"nav-link"},{default:(0,n.k6)((()=>[(0,n.eW)(" 優惠券 ")])),_:1}),(0,n.Lk)("a",{href:"#",onClick:e[0]||(e[0]=(0,o.D$)(((...t)=>m.logout&&m.logout(...t)),["prevent"])),class:"nav-link"},"登出")])])])])}var g={inject:["emitter"],methods:{logout(){const t="https://vue3-course-api.hexschool.io/logout";this.$http.post(t).then((t=>{this.$router.push("/login")})).catch((t=>{this.emitter.emit("push-message",{style:"danger",title:`登出失敗, ${t.message}`})}))}}},v=s(6262);const _=(0,v.A)(g,[["render",m]]);var p=_,b=s(1600),f=s(8308),k={components:{NavbarView:p,ToastMessages:f.A},provide(){return{emitter:b.A}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;const e="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(e).then((t=>{t.data.success||this.$router.push("/login")})).catch((t=>{b.A.emit("push-message",{style:"danger",title:`載入失敗, ${t.message}`}),this.$router.push("/login")}))}};const y=(0,v.A)(k,[["render",i]]);var $=y}}]);
//# sourceMappingURL=356.a759abff.js.map