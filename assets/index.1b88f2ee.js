import{_ as a}from"./d-dialog.15134adf.js";import{a4 as e,ay as s,W as i,X as t,bu as l,k as n,cc as o,r,bF as c,br as p,bt as d,aY as m,al as f,aw as u,D as y,A as v,x as w,a2 as x,V as k,C as h,bw as g,U as j,b1 as b}from"./todo.9d8ad3e1.js";/* empty css             *//* empty css                   */import{o as _,a as z}from"./main.bc43ff04.js";import{yiyanInfoApi as C,yiyanLikeApi as A,yiyanShareApi as M}from"./yiyan.44595f46.js";import{ElMessage as Y}from"./index.8c1ac3e2.js";import"./el-dialog.78f7c2e8.js";import"./index.88f3c51b.js";import"./style.83568f4e.js";import"./index.6fb72867.js";import"./isObject.44842e39.js";import"./icon.b571cc89.js";import"./index.b2ab0f23.js";import"./focus-trap.50913811.js";import"./aria.66f3f71c.js";import"./index.172974c9.js";import"./index.8ef2203f.js";import"./scroll.d4cf4dfc.js";/* empty css                   */import"./Close.ac61f2f5.js";import"./baseRequest.acdd10d1.js";import"./index.becf6c0c.js";import"./config-provider.31e0a14a.js";import"./index.90c48122.js";import"./typescript.72bf8adc.js";const L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},D=[t("g",{fill:"none"},[t("path",{d:"M3 5.25A2.25 2.25 0 0 1 5.25 3h1.865a.75.75 0 1 1 0 1.5H5.25a.75.75 0 0 0-.75.75v1.865a.75.75 0 1 1-1.5 0V5.25zm9.135-1.5a.75.75 0 0 1 .75-.75h1.865A2.25 2.25 0 0 1 17 5.25v1.865a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 0-.75-.75h-1.865a.75.75 0 0 1-.75-.75zM3.75 12.135a.75.75 0 0 1 .75.75v1.865c0 .414.336.75.75.75h1.865a.75.75 0 0 1 0 1.5H5.25A2.25 2.25 0 0 1 3 14.75v-1.865a.75.75 0 0 1 .75-.75zm12.5 0a.75.75 0 0 1 .75.75v1.865A2.25 2.25 0 0 1 14.75 17h-1.865a.75.75 0 0 1 0-1.5h1.865a.75.75 0 0 0 .75-.75v-1.865a.75.75 0 0 1 .75-.75z",fill:"currentColor"})],-1)];var H=e({name:"FullScreenMaximize20Filled",render:function(a,e){return s(),i("svg",L,D)}});const V={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},F=[t("g",{fill:"none"},[t("path",{d:"M12.82 5.58l-.82.822l-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599a5.38 5.38 0 0 0-7.611 0zm6.548 6.54L12 19.485L4.635 12.12a3.875 3.875 0 1 1 5.48-5.48l1.358 1.357a.75.75 0 0 0 1.073-.012L13.88 6.64a3.88 3.88 0 0 1 5.487 5.48z",fill:"currentColor"})],-1)];var I=e({name:"Heart24Regular",render:function(a,e){return s(),i("svg",V,F)}});const B={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},$=[t("g",{fill:"none"},[t("path",{d:"M7.5 2A2.5 2.5 0 0 0 5 4.5v8A2.5 2.5 0 0 0 7.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 15.5 2h-8zM17 4.5V5h-6.5a.5.5 0 0 1-.5-.5V3h5.5A1.5 1.5 0 0 1 17 4.5zm-8 0A1.5 1.5 0 0 0 10.5 6H17v6.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 6 12.5v-8A1.5 1.5 0 0 1 7.5 3H9v1.5zM12.5 18a2.5 2.5 0 0 0 2.45-2h-1.035a1.5 1.5 0 0 1-1.415 1H6a3 3 0 0 1-3-3V7.5a1.5 1.5 0 0 1 1-1.415V5.05A2.5 2.5 0 0 0 2 7.5V14a4 4 0 0 0 4 4h6.5z",fill:"currentColor"})],-1)];var R=e({name:"TabDesktopCopy20Regular",render:function(a,e){return s(),i("svg",B,$)}});const q={class:"app-yiyan-body ac d-relative pt50",style:{"z-index":"1"}},O={class:"f14"},S={class:"app-yiyan-text"},T={class:"app-yiyan-footer"},U={key:0,class:"yiyan-icon"},W={class:"f12 number"},X={class:"f12 number"};var E=l({__name:"Content",setup(a){const e=n(null),{toggle:l,isFullscreen:j}=o(e),b=r({randomBg:c(7),isLikeClick:!1,isLike:!1,isFullScreen:!1,date:"",day:""}),L=n(p.get("app-yiyan")||{});L.value.date&&L.value.date==d().format("YYYYMMDD")||C().then((a=>{L.value=a.data||{}})),V();let D=null;function V(a=!1){let e=["日","一","二","三","四","五","六"][d().day()];a?(b.date=`${d().format("YYYY.MM.DD")} 星期${e}`,b.day=d().format("HH:mm:ss")):(b.date=`${d().format("YYYY.MM")} 星期${e}`,b.day=d().format("DD"))}function F(a){"F11"===a.code&&(a.preventDefault(),l())}function B(){b.isLike=!b.isLike,b.isLike&&(A({_id:L.value._id}).then((a=>{L.value=a.data||{}})),b.isLikeClick=!0,setTimeout((()=>{b.isLikeClick=!1}),600))}function $(){g(L.content),Y.success("已复制到剪贴板"),M({_id:L.value._id}).then((a=>{L.value=a.data||{}}))}return D&&clearInterval(D),m(j,(a=>{V(a),a?(D&&clearInterval(D),D=setInterval((()=>{V(a)}),1e3)):D&&clearInterval(D)})),f((()=>{_(document,"keydown",F)})),u((()=>{clearInterval(D),z(document,"keydown",F)})),(a,n)=>(s(),i("div",{ref_key:"yiyanRef",ref:e,class:"app-yiyan-wrap d-relative hfull",style:h(`background-image:url(https://files.codelife.cc/itab/widget/yiyan/${b.randomBg}.jpg?x-oss-process=image/resize,limit_0,m_fill,w_1920,h_1080/quality,q_90)`)},[t("div",q,[t("span",O,y(b.date),1),t("p",{class:v(["app-yiyan-day",{fullscreen:w(j)}])},y(b.day),3),t("p",S,y(L.value.content),1),t("p",T,[w(j)?k("",!0):(s(),i("span",U,[t("i",{title:"分享",onClick:$,class:"d-icon",style:{"font-size":"30px"}},[x(w(R))]),t("em",W,y(L.value.share||0),1)])),t("span",{class:v(["yiyan-icon",{fullscreen:w(j)}])},[t("i",{class:"d-icon",title:"设为屏保",onClick:n[0]||(n[0]=(...a)=>w(l)&&w(l)(...a)),style:{"font-size":"30px"}},[x(w(H))])],2),w(j)?k("",!0):(s(),i("span",{key:1,class:v(["yiyan-icon yiyan-like",[{like:b.isLike},{click:b.isLikeClick}]])},[t("i",{title:"喜欢",class:"d-icon",style:{"font-size":"30px"},onClick:B},[x(w(I),{class:"heart"})]),t("em",X,y(L.value.like||0),1)],2))])])],4))}},[["__scopeId","data-v-3cf10ec4"]]);const G={__name:"index",setup:e=>(e,i)=>(s(),j(a,{width:"860px",height:"550px",destroyOnClose:!0},{default:b((()=>[x(E)])),_:1}))};export{G as default};
