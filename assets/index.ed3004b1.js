var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(a,t,i)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;import{a4 as n,ay as s,U as l,a2 as c,bu as r,bx as p,r as d,c0 as m,bt as u,bE as f,aG as g,W as _,X as b,x as y,D as v,b1 as j,I as h,aE as w,by as D,f as x,V as E,a1 as k,aH as L,A as V,b3 as A,ak as I,aI as O,a3 as C,bs as z,k as P,aY as T}from"./todo.9d8ad3e1.js";import{_ as R}from"./d-dialog.15134adf.js";/* empty css             *//* empty css                  */import{E as S,a as M}from"./el-tab-pane.2592ef6d.js";import{u as U,b as W,c as $,r as q,I as F,s as K,h as B}from"./main.bc43ff04.js";import{D as G}from"./d-empty.fe452060.js";/* empty css                 */import{a as H,E as N}from"./el-select.adc0af5d.js";import"./el-scrollbar.c921a7f2.js";/* empty css                  *//* empty css                  *//* empty css                */import{E as X}from"./el-skeleton-item.cf310736.js";/* empty css                   */import{getWebsiteList as Y,websiteUse as J}from"./website.ab9ea580.js";import{C as Q}from"./CustomAdd.d9f3620c.js";import{D as Z}from"./d-tabs.5cb2a835.js";import{a as ee}from"./addToDesk.4f2bf052.js";import{googleAnalytics as ae}from"./statistics.98ce30f0.js";import{d as te}from"./debounce.86275fe6.js";import{ElMessage as ie}from"./index.8c1ac3e2.js";import{S as oe}from"./Search.ae535b15.js";import{E as ne}from"./index.469ed053.js";import{ElButton as se}from"./index.7243f2d8.js";import{E as le}from"./index.7834abb3.js";import{D as ce}from"./d-icon-panel.044cf834.js";import{E as re,a as pe,b as de}from"./el-main.03209504.js";import{b as me}from"./baseRequest.acdd10d1.js";import{c as ue}from"./cloneDeep.d4cf7686.js";import"./el-dialog.78f7c2e8.js";import"./index.88f3c51b.js";import"./style.83568f4e.js";import"./index.6fb72867.js";import"./isObject.44842e39.js";import"./icon.b571cc89.js";import"./index.b2ab0f23.js";import"./focus-trap.50913811.js";import"./aria.66f3f71c.js";import"./index.172974c9.js";import"./index.8ef2203f.js";import"./scroll.d4cf4dfc.js";/* empty css                   */import"./Close.ac61f2f5.js";import"./typescript.72bf8adc.js";import"./index.53173a12.js";import"./index.90c48122.js";import"./event.0bae16b8.js";import"./isEqual.060206f9.js";import"./_baseIsEqual.33a0d23b.js";import"./index.1a0b45e9.js";import"./validator.bcd39c35.js";import"./index.becf6c0c.js";import"./d-color.003a7782.js";import"./position.c5cd7449.js";import"./index.f979cd8a.js";import"./ossClient.9167d04d.js";import"./el-progress.4b1fedf9.js";import"./el-form-item.a30a099f.js";import"./_baseClone.48fb5fa9.js";import"./RefreshRight.8530a3d8.js";import"./InfoFilled.dde03e61.js";import"./Loading.a57c2d0d.js";import"./useSta.cff90aa3.js";import"./config-provider.31e0a14a.js";var fe=n({name:"Link"});const ge={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},_e=c("path",{fill:"currentColor",d:"M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"},null,-1);fe.render=function(e,a,t,i,o,n){return s(),l("svg",ge,[_e])},fe.__file="packages/components/Link.vue";var be=fe;const ye={class:"d-layout hfull app-add-icon",style:{color:"rgba(var(--alpha-color), 0.7)"}},ve={class:"d-layout-aside category-wrap"},je={class:"category-body d-scrollbar-hide"},he={class:"hfull d-layout-content pl10"},we={class:"pt5 pb5"},De={class:"d-inline f12 ml20 mr10"},xe={class:"icon-wrap"},Ee={key:1,class:"icon-body d-scrollbar"},ke={class:"icon-item-top d-flex-y"},Le=["onClick","src"],Ve=["onClick"],Ae=["title"],Ie={class:"ar mt5"},Oe=k("添加"),Ce=k("点击加载更多..");var ze=r({__name:"WebsiteIconList",setup(e,{expose:n}){const r=p(),{t:k}=U();function L(e){let a={t:"event",ec:e.name,ea:"open",el:"url"};if(ae(a),!e||"itab://add"!=e.url&&"itab://store"!=e.url)return e&&"itab://setting"==e.url?($.visible=!0,void($.active=2)):e.url&&e.url.includes("http")?void window.open(e.url,"_blank"):void chrome.tabs.create({url:e.url});ie.warning("您想要的打开的功能就是当前界面")}const V=d({categoryData:[{name:"自定义图标",type:"custom"},{name:"浏览器功能",type:"browser"},{name:"热门",type:""},{name:"应用",type:"app"},{name:"媒体资讯",type:"news"},{name:"音乐视频",type:"music"},{name:"科技数码",type:"tech"},{name:"图片设计",type:"photos"},{name:"日常工具",type:"life"},{name:"学习资源",type:"education"},{name:"游戏娱乐",type:"entertainment"},{name:"电商购物",type:"shopping"},{name:"社交平台",type:"social"},{name:"阅读天地",type:"read"},{name:"旅游体育",type:"sports"},{name:"经济金融",type:"finance"},{name:"其他",type:"others"}],loading:!1,iconSize:"small"}),A=d({type:"app",page:1,lang:"zh",name:"",source:"itab"});function I(e){A.type=e.type,A.page=1,A.name="",C(!0)}n({open:"open"}),C(!0);const O=te(C,500);async function C(e){e?(V.loading=!0,A.page=1,V.iconData=[]):A.page++,A.name&&(A.type="search");const n=((e,n)=>{for(var s in n||(n={}))t.call(n,s)&&o(e,s,n[s]);if(a)for(var s of a(n))i.call(n,s)&&o(e,s,n[s]);return e})({},A);"search"==n.type&&(n.type="");let s=`websiteIcon_${n.type}_${n.page}`,l=await m.getItem(s);!A.name&&l&&l.data&&(V.iconData=e?l.data:[...V.iconData,...l.data],V.loading=!1,u().valueOf()<l.exp)||Y(n).then((a=>{let t=a.data||[];1==A.page||t.length?(A.name||f.set(s,t,1728e5),V.iconData=e?t:[...V.iconData,...t]):ie.warning("没有数据了")})).finally((()=>{V.loading=!1}))}function z(e){let a=e.component;if(!a&&J({_id:e._id}),a)ee(e);else{let a=["url","type","name","src"].reduce(((a,t)=>(a[t]=e[t]||"",a)),{});a.type="icon",ee(a)}}return(e,a)=>{const t=g("el-icon");return s(),_("div",ye,[b("div",ve,[b("ul",je,[c(Z,{style:{"--padding":"6px 24px","--fontSize":"13px"},data:V.categoryData,modelValue:A.type,"onUpdate:modelValue":a[0]||(a[0]=e=>A.type=e),keyId:"type",onTabClick:I},null,8,["data","modelValue"])])]),b("div",he,[b("div",we,[c(y(ne),{autofocus:"autofocus",modelValue:A.name,"onUpdate:modelValue":a[1]||(a[1]=e=>A.name=e),class:"icon-ipnut",style:{width:"200px"},size:"small",onKeydown:y(O),placeholder:y(k)("setting_search"),"prefix-icon":y(oe),clearable:""},null,8,["modelValue","onKeydown","placeholder","prefix-icon"]),b("div",De,v(y(k)("targetGroup")),1),c(y(N),{modelValue:y(D),"onUpdate:modelValue":a[2]||(a[2]=e=>x(D)?D.value=e:null),style:{width:"100px"},size:"small",placeholder:"group"},{default:j((()=>[(s(!0),_(h,null,w(y(r),(e=>(s(),l(y(H),{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),b("div",xe,["custom"==A.type?(s(),l(Q,{key:0,onAddCustomIcon:z})):(s(),_("section",Ee,[c(y(X),{loading:V.loading,rows:3,count:1,animated:""},{default:j((()=>[(s(!0),_(h,null,w(V.iconData,(e=>(s(),l(y(le),{class:"icon-item","body-style":{padding:"16px 10px"},shadow:"hover",key:e._id},{default:j((()=>[b("div",ke,[b("img",{onClick:a=>L(e),class:"icon-img",src:y(W)(e.src,50)},null,8,Le),b("h5",{onClick:a=>L(e),class:"icon-title d-cell d-elip d-main"},v(e.name),9,Ve),c(t,{onClick:a=>L(e),size:16},{default:j((()=>[c(y(be))])),_:2},1032,["onClick"])]),b("div",{class:"icon-item-desc",title:e.description},v(e.description||"暂无描述"),9,Ae),b("div",Ie,[c(y(se),{round:"",onClick:a=>z(e),size:"small"},{default:j((()=>[Oe])),_:2},1032,["onClick"])])])),_:2},1024)))),128)),"search"!=A.type&&"browser"!=A.type?(s(),l(y(se),{key:0,size:"default",onClick:a[3]||(a[3]=e=>C(!1))},{default:j((()=>[Ce])),_:1})):E("",!0),V.loading||V.iconData.length?E("",!0):(s(),l(G,{key:1}))])),_:1},8,["loading"])]))])])])}}},[["__scopeId","data-v-52e66398"]]);var Pe={};Object.defineProperty(Pe,"__esModule",{value:!0});const Te=q,Re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Se=[(0,Te.createElementVNode)("path",{d:"M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23c.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59c-1.81-1.37-2-3.34-1.84-4.75c.06-.52-.62-.77-.91-.34C4.69 10.16 4 11.84 4 14.37c.38 5.6 5.11 7.32 6.81 7.54c2.43.31 5.06-.14 6.95-1.87c2.08-1.93 2.84-5.01 1.72-7.69zm-9.28 5.03c1.44-.35 2.18-1.39 2.38-2.31c.33-1.43-.96-2.83-.09-5.09c.33 1.87 3.27 3.04 3.27 5.08c.08 2.53-2.66 4.7-5.56 2.32z",fill:"currentColor"},null,-1)];var Me=Pe.default=(0,Te.defineComponent)({name:"LocalFireDepartmentFilled",render:function(e,a){return(0,Te.openBlock)(),(0,Te.createElementBlock)("svg",Re,Se)}});const Ue={class:"category-body d-scrollbar-hide"},We=["src"],$e={class:"pt5 pb5"},qe={class:"d-inline widget-size d-elip f13 pl10"},Fe=k(" 图标尺寸预览: "),Ke={class:"d-inline"},Be=["onClick"],Ge={class:"d-inline f12 ml20 mr10"},He={class:"widget-icon-wrap","infinite-scroll-delay":100,"infinite-scroll-distance":60,"infinite-scroll-immediate":!1},Ne={class:"app-icon-body d-flex"},Xe=["src","alt"],Ye={class:"d-cell"},Je={class:"app-icon-title"},Qe=["title"],Ze=k("添加"),ea={class:"app-icon-hot"},aa={class:"d-icon f18",title:"热度",style:{color:"#ff7a06"}},ta={class:"ac",style:{clear:"both"}},ia={name:"widgetList",components:{LocalFireDepartmentFilled:Me}};var oa=r(Object.assign(ia,{setup(e){const{t:a}=U(),t=p(),i=d({name:"",category:"discovery",size:20,page:1}),o=e=>{let a=e.replace("app-","");return C({loader:()=>function(e){switch(e){case"../../DialogApp/app/bookmarks/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.G}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/calendar/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.H}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/clock/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.J}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/daysMatter/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.n}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/eat/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.K}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/habit/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.L}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/ip/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.M}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/jikipedia/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.N}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/lusun/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.O}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/multiavatar/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.Q}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/notes/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.R}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/remai/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.T}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/stock/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.U}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/todo/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.V}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/topsearch/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.W}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/uppercase/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.X}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/wallpaper/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.Y}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/weather/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.Z}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/xiayigejiaqi/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.a0}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);case"../../DialogApp/app/yiyan/icon/icon.vue":return z((()=>import("./main.bc43ff04.js").then((function(e){return e.a1}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);default:return new Promise((function(a,t){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../../DialogApp/app/${a}/icon/icon.vue`),errorComponent:F,suspensible:!0})};const n=d({appList:[],categoryData:[{name:"探索",category:"discovery"},{name:"效率",category:"efficiency"},{name:"工具",category:"tool"},{name:"开发",category:"develop"},{name:"设计",category:"design"},{name:"创意",category:"ideas"},{name:"娱乐",category:"game"},{name:"其他",category:"others"},{name:"组件图标",category:"widget"}],loading:!1,iconSize:"small",isLoadMore:!0}),r=te(P,500);function g(e){i.category=e.category,i.page=1,i.name="",P(!0)}async function P(e){n.isLoadMore=!0,e?(n.loading=!0,i.page=1,n.appList=[]):i.page++,i.name&&(i.page=1,i.category="");let a=`widgetList_${i.category}_${i.page}_${i.page}`,t=await m.getItem(a);!i.name&&t&&t.data&&(n.appList=e?t.data:[...n.appList,...t.data],n.loading=!1,u().valueOf()<t.exp)||((e={})=>me.get("/widget/list",{params:e}))(i).then((t=>{let o=t.data||[];1==i.page||o.length?(!i.name&&o.length&&f.set(a,o,864e5),n.appList=e?o:[...n.appList,...o]):n.isLoadMore=!1})).finally((()=>{n.loading=!1}))}function T(e){e.size=n.iconSize,((e={})=>{me.get("/widget/downCount",{params:e})})({_id:e._id});let a=ue(e);delete a.description,delete a._id,ee(a)}return P(!0),(e,p)=>{const d=L("infinite-scroll");return s(),l(y(de),{class:"hfull",style:{"background-color":"var(--bg-input)"}},{default:j((()=>[c(y(re),{width:"160px",class:"hfull",style:{"background-color":"var(--bg-card)"}},{default:j((()=>[b("ul",Ue,[c(Z,{style:{"--padding":"6px 24px","--fontSize":"13px","--active-bg":"linear-gradient(90deg, #089aff, #40c9ff)"},data:n.categoryData,modelValue:i.category,"onUpdate:modelValue":p[0]||(p[0]=e=>i.category=e),keyId:"category",onTabClick:g},{default:j((({row:e})=>[b("img",{style:{width:"20px","vertical-align":"-6px"},class:"mr10",src:`https://files.codelife.cc/itab/widget-category/${e.category}.svg`},null,8,We),k(v(e.name),1)])),_:1},8,["data","modelValue"])])])),_:1}),c(y(pe),{style:{padding:"0",overflow:"hidden"}},{default:j((()=>[b("div",$e,[b("div",qe,[Fe,b("div",Ke,[(s(),_(h,null,w([{value:"mini",name:"小"},{value:"small",name:"中"},{value:"medium",name:"大"}],(e=>b("span",{key:e.value,class:V(["mr10 text-hover",{"text-active":n.iconSize==e.value}]),onClick:a=>n.iconSize=e.value},v(e.name),11,Be))),64))])]),c(y(ne),{autofocus:"autofocus",modelValue:i.name,"onUpdate:modelValue":p[1]||(p[1]=e=>i.name=e),class:"icon-ipnut",style:{width:"120px"},size:"small",onKeydown:y(r),placeholder:y(a)("setting_search"),"prefix-icon":y(oe),clearable:""},null,8,["modelValue","onKeydown","placeholder","prefix-icon"]),b("div",Ge,v(y(a)("targetGroup")),1),c(y(N),{modelValue:y(D),"onUpdate:modelValue":p[2]||(p[2]=e=>x(D)?D.value=e:null),style:{width:"100px"},size:"small",placeholder:"group"},{default:j((()=>[(s(!0),_(h,null,w(y(t),(e=>(s(),l(y(H),{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),A((s(),_("div",He,[c(y(X),{loading:n.loading,rows:3,count:1,animated:""},{default:j((()=>[(s(!0),_(h,null,w(n.appList,(a=>{return s(),_("div",{class:"widget-icon-item d-border-radius",key:a.component},[b("div",Ne,[c(ce,I({onClick:e=>function(e){K(e)}(a),class:"mr15 d-pointer",size:n.iconSize},e.$attrs),{default:j((()=>["component"==a.type?(s(),l(O(o(a.component)),{key:0,size:n.iconSize},null,8,["size"])):"icon"==a.type?(s(),_("img",{key:1,class:"app-item-img",src:a.src,alt:a.name},null,8,Xe)):E("",!0)])),_:2},1040,["onClick","size"]),b("div",Ye,[b("h4",Je,v(a.name),1),b("div",{class:"app-icon-desc f12",title:a.description},v(a.description),9,Qe),c(y(se),{class:"mt10",size:"small",round:"",type:"primary",onClick:e=>T(a)},{default:j((()=>[Ze])),_:2},1032,["onClick"]),b("p",ea,[b("i",aa,[c(y(Me))]),k(" "+v((t=a.downloadCount,t>1e4?(t/1e3).toFixed(2)+"万":t||0)),1)])])])]);var t})),128))])),_:1},8,["loading"]),b("div",ta,[n.appList.length?(s(),l(y(se),{key:0,size:"default",onClick:p[3]||(p[3]=e=>P(!1))},{default:j((()=>[k(v(n.isLoadMore?"点击加载更多..":"已经到底了"),1)])),_:1})):E("",!0)]),n.loading||n.appList.length?E("",!0):(s(),l(G,{key:0}))])),[[d,P]])])),_:1})])),_:1})}}}),[["__scopeId","data-v-7b283c10"]]);const na={class:"d-flex-x"},sa={components:{WidgetList:oa,WebsiteIconList:ze}},la=Object.assign(sa,{__name:"index",setup(e){const a=P("WidgetList");return d({loading:!1,iconSize:"small"}),T((()=>B.visible),(e=>{e&&z((()=>import("./useSta.cff90aa3.js")),["assets/useSta.cff90aa3.js","assets/baseRequest.acdd10d1.js","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css","assets/index.becf6c0c.js"]).then((e=>{e.useStatisticsApi({name:"itab图标添加"})}))})),(e,t)=>(s(),l(R,{modelValue:y(B).visible,"onUpdate:modelValue":t[1]||(t[1]=e=>y(B).visible=e),height:"600px",title:""},{default:j((()=>[b("div",na,[c(y(M),{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),class:"app-tabs"},{default:j((()=>[c(y(S),{label:"应用",name:"WidgetList"}),c(y(S),{label:"图标",name:"WebsiteIconList"})])),_:1},8,["modelValue"])]),(s(),l(O(a.value)))])),_:1},8,["modelValue"]))}});export{la as default};