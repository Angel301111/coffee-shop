(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[249],{653:function(t,e,s){
/*!
  * Bootstrap toast.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,a){t.exports=a(s(9011),s(7956),s(8248),s(4035))})(0,(function(t,e,s,a){"use strict";const i="toast",o="bs.toast",n=`.${o}`,l=`mouseover${n}`,r=`mouseout${n}`,c=`focusin${n}`,d=`focusout${n}`,u=`hide${n}`,m=`hidden${n}`,h=`show${n}`,p=`shown${n}`,g="fade",f="hide",v="show",b="showing",k={animation:"boolean",autohide:"boolean",delay:"number"},L={animation:!0,autohide:!0,delay:5e3};class _ extends t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return L}static get DefaultType(){return k}static get NAME(){return i}show(){const t=e.trigger(this._element,h);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(g);const s=()=>{this._element.classList.remove(b),e.trigger(this._element,p),this._maybeScheduleHide()};this._element.classList.remove(f),a.reflow(this._element),this._element.classList.add(v,b),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,u);if(t.defaultPrevented)return;const s=()=>{this._element.classList.add(f),this._element.classList.remove(b,v),e.trigger(this._element,m)};this._element.classList.add(b),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(v),super.dispose()}isShown(){return this._element.classList.contains(v)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,l,(t=>this._onInteraction(t,!0))),e.on(this._element,r,(t=>this._onInteraction(t,!1))),e.on(this._element,c,(t=>this._onInteraction(t,!0))),e.on(this._element,d,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=_.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return s.enableDismissTrigger(_),a.defineJQueryPlugin(_),_}))},9807:function(t,e,s){"use strict";s.d(e,{A:function(){return u}});var a=s(641);const i={class:"p-3 text-center bg-light"},o=(0,a.Lk)("div",{class:"text-dark"},[(0,a.Lk)("p",null,"© 2024 Coffee Shop All rights reserved."),(0,a.Lk)("p",null,"僅作個人練習，無商業用途")],-1),n=(0,a.Lk)("i",{class:"bi bi-person-check-fill me-1"},null,-1);function l(t,e){const s=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("footer",i,[o,(0,a.bF)(s,{to:"/login",class:"login-link"},{default:(0,a.k6)((()=>[n,(0,a.eW)(" 管理員登入 ")])),_:1})])}var r=s(6262);const c={},d=(0,r.A)(c,[["render",l]]);var u=d},3901:function(t,e,s){"use strict";s.d(e,{A:function(){return A}});var a=s(641),i=s(3751);const o={class:"navbar navbar-expand-lg bg-light sticky-top bg-opacity-75 backdrop-blur"},n={class:"container-fluid"},l={class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupported","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",ref:"navbarBtn"},r=(0,a.Lk)("span",{class:"navbar-toggler-icon"},null,-1),c=[r],d=(0,a.Lk)("i",{class:"bi bi-cup-hot-fill pe-2"},null,-1),u={class:"collapse navbar-collapse order-1 order-lg-0",id:"navbarSupported"},m={class:"navbar-nav ms-auto mb-2 mb-lg-0"},h={class:"nav-item mx-2"},p={class:"nav-item mx-2"},g={class:"nav-item mx-2"},f={class:"navbar"},v={class:"navbar-nav flex-row"},b={class:"nav-item me-2 me-lg-0 d-flex align-items-center"},k=(0,a.Lk)("i",{class:"bi bi-cart3"},null,-1),L={key:0,class:"cartCircle d-block"},_={class:"nav-item d-flex align-items-center"},y=(0,a.Lk)("i",{class:"bi bi-heart"},null,-1),x={key:0,class:"favoriteCircle d-block"};function w(t,e,s,r,w,C){const F=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("nav",o,[(0,a.Lk)("div",n,[(0,a.Lk)("button",l,c,512),(0,a.bF)(F,{class:"navbar-brand text-dark",to:"/"},{default:(0,a.k6)((()=>[d,(0,a.eW)(" Coffee shop ")])),_:1}),(0,a.Lk)("div",u,[(0,a.Lk)("ul",m,[(0,a.Lk)("li",h,[(0,a.bF)(F,{class:"nav-link","aria-current":"page",to:"/user/aboutus",onClick:(0,i.D$)(C.closeNav,["prevent"])},{default:(0,a.k6)((()=>[(0,a.eW)(" 關於我們 ")])),_:1},8,["onClick"])]),(0,a.Lk)("li",p,[(0,a.bF)(F,{class:"nav-link","aria-current":"page",to:"/user/productlist",onClick:(0,i.D$)(C.closeNav,["prevent"])},{default:(0,a.k6)((()=>[(0,a.eW)(" 全部產品 ")])),_:1},8,["onClick"])]),(0,a.Lk)("li",g,[(0,a.bF)(F,{class:"nav-link","aria-current":"page",to:"/user/qa",onClick:(0,i.D$)(C.closeNav,["prevent"])},{default:(0,a.k6)((()=>[(0,a.eW)(" 常見問題 ")])),_:1},8,["onClick"])])])]),(0,a.Lk)("div",f,[(0,a.Lk)("ul",v,[(0,a.Lk)("li",b,[(0,a.bF)(F,{class:"nav-link d-flex align-items-center","aria-current":"page",to:"/user/cart"},{default:(0,a.k6)((()=>[k,w.cart.carts.length?((0,a.uX)(),(0,a.CE)("span",L)):(0,a.Q3)("",!0)])),_:1})]),(0,a.Lk)("li",_,[(0,a.bF)(F,{class:"nav-link d-flex align-items-center","aria-current":"page",to:"/user/favorite"},{default:(0,a.k6)((()=>[y,w.favoriteNum?((0,a.uX)(),(0,a.CE)("span",x)):(0,a.Q3)("",!0)])),_:1})])])])])])}var C={data(){return{favoriteNum:0,cart:{carts:""}}},inject:["emitter"],methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/angelvue/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,this.cart=t.data.data})).catch((t=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:`載入失敗, ${t.message}`})}))},getFavoriteNum(){localStorage.getItem("favorite")&&(this.favoriteNum=JSON.parse(localStorage.getItem("favorite")),this.favoriteNum=this.favoriteNum.length)},closeNav(){document.body.offsetWidth<992&&this.$refs.navbarBtn.click()}},mounted(){this.getCart(),this.getFavoriteNum(),this.emitter.on("update-cart",(()=>{this.getCart()})),this.emitter.on("update-favorite",(()=>{this.getFavoriteNum()}))}},F=s(6262);const $=(0,F.A)(C,[["render",w]]);var A=$},8308:function(t,e,s){"use strict";s.d(e,{A:function(){return _}});var a=s(641);const i={class:"toast-container position-absolute pe-3 top-0 end-0",style:{"z-index":"1050"}};function o(t,e,s,o,n,l){const r=(0,a.g2)("ToastToast");return(0,a.uX)(),(0,a.CE)("div",i,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.messages,((t,e)=>((0,a.uX)(),(0,a.Wv)(r,{key:"msg"+e,msg:t},null,8,["msg"])))),128))])}s(4114);var n=s(33);const l={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},r={class:"toast-header"},c={class:"me-auto"},d=(0,a.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),u={key:0,class:"toast-body"};function m(t,e,s,i,o,m){return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("div",r,[(0,a.Lk)("span",{class:(0,n.C4)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a.Lk)("strong",c,(0,n.v_)(s.msg.title),1),d]),s.msg.content?((0,a.uX)(),(0,a.CE)("div",u,(0,n.v_)(s.msg.content),1)):(0,a.Q3)("",!0)],512)}var h=s(653),p=s.n(h),g={props:["msg"],mounted(){const t=this.$refs.toast,e=new(p())(t,{delay:3e3});e.show()}},f=s(6262);const v=(0,f.A)(g,[["render",m]]);var b=v,k={components:{ToastToast:b},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e,title:s,content:a}=t;this.messages.push({style:e,title:s,content:a})}))}};const L=(0,f.A)(k,[["render",o]]);var _=L},6479:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return Z}});var a=s(641),i=s(33),o=s(3751),n=s.p+"img/home1.65495921.jpg",l=s.p+"img/home2.fba0132f.jpg",r=s.p+"img/home3.c5c5de70.jpg",c=s.p+"img/home-card1.9e63dc34.jpg",d=s.p+"img/home-card2.c25650d4.jpg",u=s.p+"img/home-card3.072ee473.jpg";const m={class:"aos-section"},h={class:"home-background bg px-4 py-5 d-flex align-items-center justify-content-center mb-5","data-aos":"zoom-out","data-aos-duration":"3000"},p={class:"text-center text-white"},g=(0,a.Lk)("h1",{class:"fw-bold"},"您今天喝咖啡了嗎?",-1),f=(0,a.Lk)("p",{class:"m-0"},"從農場到您手中，傳遞每一顆咖啡豆的故事",-1),v=(0,a.Lk)("p",null,"與我們一起品味咖啡，感受生活的每一個美好瞬間",-1),b=(0,a.Lk)("section",{class:"container py-5 text-center","data-aos":"zoom-in","data-aos-duration":"2000","data-aos-offset":"100"},[(0,a.Lk)("p",{class:"fs-5 fw-bold"},"體驗極致咖啡享受，探索世界奧秘風味"),(0,a.Lk)("p",null,"從精選世界各地的頂級咖啡豆，到專業烘焙和嚴格品控"),(0,a.Lk)("p",null,"我們的每一杯咖啡都充滿了對品質的承諾和對咖啡文化的熱愛")],-1),k={class:"py-5 rounded shadow my-4 coupon-background bg"},L={class:"text-center text-light rounded shadow-lg mx-auto",style:{"background-color":"hwb(0 13% 86% / 0.55)"}},_={class:"p-3"},y=(0,a.Lk)("h3",{class:"h5"},[(0,a.eW)(" 歡慶開幕!! 輸入折扣碼「 "),(0,a.Lk)("span",null,"coffee88"),(0,a.eW)(" 」全品項限時優惠 8 折 ")],-1),x=(0,a.Fv)('<section class="container py-5 aos-section"><div class="row flex-row-reverse mb-4"><div class="col-md-6 d-flex align-items-center"><div data-aos="fade-up-right" data-aos-duration="2000" data-aos-offset="200"><h2>發現世界各地的咖啡寶藏</h2><hr><p class="lh-lg text-secondary"> 從南美的哥倫比亞到非洲的埃塞俄比亞，我們的咖啡產品來自全球各個知名的咖啡產區。透過仔細挑選和嚴格品質管控，我們將最優質的咖啡豆帶到您的桌上，讓您能夠品嚐到每個產地的獨特風味和文化。 </p></div></div><div class="col-md-6"><img src="'+n+'" class="img-fluid rounded" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="200" alt="來自世界各地最優質的咖啡豆"></div></div><div class="row flex-row mb-4"><div class="col-md-6 d-flex align-items-center"><div data-aos="fade-up-left" data-aos-duration="2000" data-aos-offset="200"><h2>每一口都是匠心綻放的味蕾旅程</h2><hr><p class="lh-lg text-secondary"> 我們的咖啡豆經過熟練的烘焙師精心烘焙，以確保每一顆豆子都能散發出最豐富的風味和香氣。無論您喜歡淺焙、中焙還是深焙，我們都能滿足您的口味，讓您感受到每一口咖啡帶來的獨特魅力。 </p></div></div><div class="col-md-6"><img src="'+l+'" class="img-fluid rounded" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="200" alt="專業的烘焙師精心烘焙"></div></div><div class="row flex-row-reverse"><div class="col-md-6 d-flex align-items-center"><div data-aos="fade-up-right" data-aos-duration="2000" data-aos-offset="200"><h2>一杯咖啡，萬種風情</h2><hr><p class="lh-lg text-secondary"> 從柔和的果香到濃郁的巧克力味，我們的咖啡產品擁有多樣的風味特點，能夠滿足不同類型咖啡愛好者的口味需求。無論您是喜歡單品咖啡還是愛好特調拿鐵，我們都有適合您的咖啡產品，讓您享受到一杯咖啡帶來的美好享受。 </p></div></div><div class="col-md-6"><img src="'+r+'" class="img-fluid rounded" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="200" alt="各式風味的咖啡產品"></div></div></section>',1),w={class:"py-4"},C={class:"container"},F=(0,a.Lk)("h2",{class:"text-center pb-5"},[(0,a.Lk)("i",{class:"bi bi-cup-fill pe-2"}),(0,a.eW)(" 喚醒感官 專業品味 ")],-1),$={class:"row","data-aos":"flip-left","data-aos-duration":"1000","data-aos-offset":"200"},A={class:"col-md-4 position-relative mb-md-0 mb-3"},N=(0,a.Lk)("div",{class:"text-white px-2 py-4 align-middle letter-space position-absolute top-0 ms-3"},[(0,a.Lk)("span",{class:"h3"},"濃郁風味"),(0,a.Lk)("span",{class:"align-text-bottom"},"—"),(0,a.eW)(" 咖啡豆系列 ")],-1),T=(0,a.Lk)("img",{class:"img-fluid",src:c,alt:"濃郁風味的咖啡豆系列"},null,-1),W={class:"col-md-4 position-relative mb-md-0 mb-3","data-aos":"fade-up"},I=(0,a.Lk)("div",{class:"text-white px-2 py-4 align-middle letter-space position-absolute top-0 ms-3"},[(0,a.Lk)("span",{class:"h3"},"經典設計"),(0,a.Lk)("span",{class:"align-text-bottom"},"—"),(0,a.eW)(" 咖啡杯系列 ")],-1),S=(0,a.Lk)("img",{class:"img-fluid",src:d,alt:"經典設計的咖啡杯系列"},null,-1),E={class:"col-md-4 position-relative mb-md-0 mb-3"},j=(0,a.Lk)("div",{class:"text-white px-2 py-4 align-middle letter-space position-absolute top-0 ms-3"},[(0,a.Lk)("span",{class:"h3"},"精工打造"),(0,a.Lk)("span",{class:"align-text-bottom"},"—"),(0,a.eW)(" 咖啡用具系列 ")],-1),X=(0,a.Lk)("img",{class:"img-fluid",src:u,alt:"精工打造的咖啡用具系列"},null,-1),q={class:"py-5 rounded shadow bg-sub my-5 paper-background bg"},D={class:"container"},P={class:"row justify-content-center text-center"},M={class:"col-md-5 text-dark"},K=(0,a.Lk)("h2",{class:"mb-3"},[(0,a.Lk)("p",{class:"m-0"},[(0,a.Lk)("i",{class:"bi bi-cup-fill pe-1"}),(0,a.eW)(" 歡迎訂閱電子報 ")]),(0,a.Lk)("p",null,"與您分享我們的最新消息！")],-1),Q={class:"container pb-5"},z=(0,a.Lk)("h2",{class:"text-center"},[(0,a.Lk)("i",{class:"bi bi-cup-fill pe-2"}),(0,a.eW)(" 我們的精選 ")],-1);function B(t,e,s,n,l,r){const c=(0,a.g2)("FrontNavbar"),d=(0,a.g2)("ToastMessages"),u=(0,a.g2)("router-link"),B=(0,a.g2)("RouterLink"),H=(0,a.g2)("field-field"),J=(0,a.g2)("error-message"),O=(0,a.g2)("form-form"),V=(0,a.g2)("ProductSwiper"),R=(0,a.g2)("FooterView");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(c),(0,a.bF)(d),(0,a.Lk)("section",m,[(0,a.Lk)("header",h,[(0,a.Lk)("div",p,[g,f,v,(0,a.bF)(u,{to:"/user/productlist",class:"btn btn-outline-light"},{default:(0,a.k6)((()=>[(0,a.eW)(" shop now ")])),_:1})])])]),b,(0,a.Lk)("section",k,[(0,a.Lk)("div",L,[(0,a.Lk)("div",_,[y,(0,a.bF)(u,{to:"/user/productlist",class:"btn btn-outline-light"},{default:(0,a.k6)((()=>[(0,a.eW)(" 馬上購買 ")])),_:1})])])]),x,(0,a.Lk)("section",w,[(0,a.Lk)("div",C,[F,(0,a.Lk)("div",$,[(0,a.Lk)("div",A,[(0,a.bF)(B,{to:{path:"/user/productlist",query:{data:"精品咖啡豆"}}},{default:(0,a.k6)((()=>[N,T])),_:1})]),(0,a.Lk)("div",W,[(0,a.bF)(B,{to:{path:"/user/productlist",query:{data:"咖啡杯"}}},{default:(0,a.k6)((()=>[I,S])),_:1})]),(0,a.Lk)("div",E,[(0,a.bF)(B,{to:{path:"/user/productlist",query:{data:"咖啡用具"}}},{default:(0,a.k6)((()=>[j,X])),_:1})])])])]),(0,a.Lk)("section",q,[(0,a.Lk)("div",D,[(0,a.Lk)("div",P,[(0,a.Lk)("div",M,[K,(0,a.bF)(O,{class:"d-center flex-column"},{default:(0,a.k6)((({errors:t})=>[(0,a.bF)(H,{class:(0,i.C4)(["form-control",{"is-invalid":t["信箱"]}]),id:"userEmail",placeholder:"example@mail.com",name:"信箱",rules:"email|required"},null,8,["class"]),(0,a.bF)(J,{name:"信箱",class:"invalid-feedback"}),(0,a.Lk)("button",{class:"btn btn-dark text-white mt-3 px-md-4",type:"submit",id:"subscribeBtn",onClick:e[0]||(e[0]=(0,o.D$)((t=>r.subscribe()),["prevent"]))}," 免費訂閱 ")])),_:1})])])])]),(0,a.Lk)("section",Q,[z,(0,a.bF)(V,{products:l.products},null,8,["products"])]),(0,a.bF)(R)],64)}var H=s(1600),J=s(8308),O=s(3901),V=s(9807),R=s(6365),G={data(){return{products:[]}},components:{FrontNavbar:O.A,FooterView:V.A,ProductSwiper:R.A,ToastMessages:J.A},provide(){return{emitter:H.A}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/angelvue/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.products=t.data.products,this.isLoading=!1})).catch((t=>{H.A.emit("push-message",{style:"danger",title:`載入失敗, ${t.message}`})}))},subscribe(){H.A.emit("push-message",{style:"success",title:"成功訂閱"})}},created(){this.getProducts()}},U=s(6262);const Y=(0,U.A)(G,[["render",B]]);var Z=Y}}]);
//# sourceMappingURL=249.dc65c84c.js.map