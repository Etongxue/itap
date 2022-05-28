import{_ as e}from"./d-dialog.64ba485e.js";import{bu as a,bv as t,a4 as s,af as l,Q as i,bz as n,a2 as o,bF as c,aA as u,cc as d,cy as r,r as f,dY as p,aG as m,aH as b,b3 as y,x as v,ay as g,W as h,X as k,b1 as j,I as x,aE as N,U as _,D,A as w,C as $,bp as C,aI as S,a3 as O,c9 as E,V as I}from"./save_config.7e387697.js";import{Z as T,a0 as V,a1 as K,y as R,a2 as L,a3 as z,a4 as A}from"./main.5f87c81f.js";import{m as F}from"./el-input.07836306.js";import{E as G,a as M}from"./el-select.79d7c506.js";import"./el-scrollbar.80933a65.js";/* empty css                  */import{E as U,a as q,b as H}from"./el-main.d92cc5ea.js";import{a as P,E as Q}from"./el-tabs.9629dce2.js";import{R as W}from"./Refresh.de7ffe9d.js";import"./el-overlay.e22515de.js";import"./index2.69c4a5bb.js";import"./event2.b0442ad9.js";import"./isEqual.8b269055.js";import"./_baseIsEqual.840160ed.js";import"./index2.dd10852c.js";import"./validator2.fec6f1ba.js";import"./arrow-up.1bfacdc1.js";import"./plus.8a11ae65.js";const X=Symbol("rowContextKey");const Y=c(s({name:"ElCol",props:a({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:t([Number,Object]),default:()=>F({})},sm:{type:t([Number,Object]),default:()=>F({})},md:{type:t([Number,Object]),default:()=>F({})},lg:{type:t([Number,Object]),default:()=>F({})},xl:{type:t([Number,Object]),default:()=>F({})}}),setup(e,{slots:a}){const{gutter:t}=l(X,{gutter:i((()=>0))}),s=n("col"),c=i((()=>t.value?{paddingLeft:t.value/2+"px",paddingRight:t.value/2+"px"}:{})),u=i((()=>{const a=[];["span","offset","pull","push"].forEach((t=>{const l=e[t];"number"==typeof l&&("span"===t?a.push(s.b(`${e[t]}`)):l>0&&a.push(s.b(`${t}-${e[t]}`)))}));return["xs","sm","md","lg","xl"].forEach((t=>{if("number"==typeof e[t])a.push(s.b(`${t}-${e[t]}`));else if("object"==typeof e[t]){const l=e[t];Object.keys(l).forEach((e=>{a.push("span"!==e?s.b(`${t}-${e}-${l[e]}`):s.b(`${t}-${l[e]}`))}))}})),t.value&&a.push(s.is("guttered")),a}));return()=>o(e.tag,{class:[s.b(),u.value],style:c.value},a)}})),Z=c(s({name:"ElRow",props:a({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"],default:"top"}}),setup(e,{slots:a}){const t=n("row"),s=i((()=>e.gutter));u(X,{gutter:s});const l=i((()=>{const a={marginLeft:"",marginRight:""};return e.gutter&&(a.marginLeft=`-${e.gutter/2}px`,a.marginRight=a.marginLeft),a}));return()=>o(e.tag,{class:[t.b(),t.is(`justify-${e.justify}`,"start"!==e.justify),t.is(`align-${e.align}`,"top"!==e.align)],style:l.value},{default:()=>{var e;return[null==(e=a.default)?void 0:e.call(a)]}})}}));const B={class:"stock-wrap"},J={class:"stock-handle d-absolute d-hover d-sub"},ee={class:"stock-search"},ae={class:"d-flex f12",style:{width:"200px"}},te={class:"d-elip",style:{width:"30%"}},se={class:"d-elip",style:{width:"50%"}},le={class:"d-elip",style:{width:"20%"}},ie=["onClick"],ne={class:"title fl",style:{width:"44%"}},oe={class:"d-elip"},ce={class:"f12 d-main"},ue={class:"fl",style:{width:"30%"}},de={class:"fl",style:{width:"26%"}},re=["onClick"],fe={class:"mb10 d-flex"},pe={class:"d-main"},me={class:"b f20 mt5"},be={class:"f12"},ye={class:"content-header d-flex pt10",style:{"padding-right":"120px"}},ve={class:"d-cell b f28 d-elip"},ge={class:"f16"},he={class:"f16"},ke={class:"b"},je={class:"b"};var xe=d({setup(e){const a=r(),t=[{label:"分时",value:"trends"},{label:"日K",value:"101"},{label:"周K",value:"102"},{label:"月K",value:"103"},{label:"季K",value:"104"},{label:"年K",value:"106"}],s=f({keyword:"",activeName:"trends",activeData:{},stockOption:[],selfStockData:[],subOptions:[],stockInfo:[],stockGrails:[],loading:!1,timer:null});function l(e){return 0==e?"gray":e>0?"#e5353d":"#41c662"}function i(e){var t,s,l,i;a.value=(t=a.value,s=e.newIndex,l=e.oldIndex,i=t[l],t[l]=t[s],t[s]=i,t)}function n(e){e&&L(e).then((e=>{s.subOptions=e.Data||[]}))}function c(e){if(a.value.some((a=>a.Code==e.Code)))return;let t={Code:e.Code,MktNum:e.MktNum,SecurityTypeName:e.SecurityTypeName,SecurityType:e.SecurityType};a.value.unshift(t),xe()}function u(e){"trends"==s.activeName?Ne():function(){const e={secid:`${s.activeData.f13}.${s.activeData.f12}`,klt:s.activeName};A(e).then((e=>{s.stockOption=e.data.klines||[]}))}()}s.timer?clearInterval(s.timer):s.timer=setInterval((()=>{xe()}),12e4);let d={1:"sh",2:"sz",5:"sz",19:"r_hk",20:"us"};const F=[{n:"最高",i:33},{n:"今开",i:5},{n:"成交量",i:6,unit:"手"},{n:"最低",i:34},{n:"昨收",i:4},{n:"成交额",i:37,unit:"亿"},{n:"总市值",i:45,unit:"亿"},{n:"流通",i:44,unit:"亿"}];function X(){let e=a.value.find((e=>e.Code==s.activeData.f12));s.activeData.SecurityTypeName=e.SecurityTypeName;let t=d[e.SecurityType],l=`${t}${e.Code}`;s.stockInfo=[],z(l).then((e=>{if(!e)return;e=e.split("~");let a=1e4;["r_hk","us"].includes(t)&&(a=1e8),e[37]=(e[37]/a).toFixed(2),e[44]=(e[44]/1).toFixed(2),e[45]=(e[45]/1).toFixed(2),s.stockInfo=e}))}function xe(){if(!a.value.length)return;s.loading=!0;let e=a.value.map((e=>`${e.MktNum}.${e.Code}`));T(e.join(",")).then((e=>{s.selfStockData=e.data.diff||[],p(s.activeData)&&(s.activeData=s.selfStockData[0]),s.activeName="trends",Ne(),X()})).finally((()=>{setTimeout((()=>{s.loading=!1}),200)}));T(["1.000001","0.399001","0.399006","1.000688","100.HSI"].join(",")).then((e=>{s.stockGrails=e.data.diff||[]}))}function Ne(){const e={secid:`${s.activeData.f13}.${s.activeData.f12}`};V(e).then((e=>{s.stockOption=e.data.trends||[]}))}return xe(),(e,d)=>{const r=m("el-icon"),f=b("loading");return y((g(),h("div",B,[k("div",J,[o(r,{size:16,title:"手动刷新，2分钟自动刷新一次",onClick:xe},{default:j((()=>[o(v(W))])),_:1})]),o(v(H),{class:"d-layout hfull"},{default:j((()=>[o(v(U),{class:"d-left-tabs pt30",style:{"background-color":"var(--bg-info)",width:"220px"}},{default:j((()=>[k("div",ee,[o(v(G),{class:"wfull",modelValue:v(s).keyword,"onUpdate:modelValue":d[0]||(d[0]=e=>v(s).keyword=e),size:"default",filterable:"",remote:"","reserve-keyword":"","value-key":"Code",placeholder:"输入股票名称、代码","remote-method":n,onChange:c},{default:j((()=>[(g(!0),h(x,null,N(v(s).subOptions,(e=>(g(),_(v(M),{key:e.ID,value:e},{default:j((()=>[k("li",ae,[k("span",te,D(e.Code),1),k("span",se,D(e.Name),1),k("span",le,D(e.SecurityTypeName),1)])])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])]),o(v(K),{class:"self-content d-scrollbar-hide",animation:200,list:v(s).selfStockData,itemKey:"f12",onEnd:i},{item:j((({element:e,index:t})=>[(g(),h("p",{class:w(["self-content-li d-hidden",[l(e.f3),{active:v(s).activeData==e}]]),key:e.f12,onClick:a=>{return t=e,s.activeData=t,s.activeName="trends",Ne(),void X();var t},style:$({color:l(e.f3)})},[k("span",ne,[k("p",oe,D(e.f14),1),k("code",ce,D(e.f12),1)]),k("span",ue,D(e.f2),1),k("span",de,D(e.f3)+"%",1),k("span",{class:"stock-del d-flex-center",onClick:C((l=>function(e,t){e.f12==s.activeData.f12&&(s.activeData={}),a.value.splice(t,1),xe()}(e,t)),["stop"])},[o(r,null,{default:j((()=>[o(v(R))])),_:1})],8,re)],14,ie))])),_:1},8,["list"])])),_:1}),o(v(q),{class:"todo-content pr10 hfull",style:{"padding-top":"10px"}},{default:j((()=>[k("ul",fe,[(g(!0),h(x,null,N(v(s).stockGrails,(e=>(g(),h("li",{style:$({color:l(e.f3)}),class:"mr20",key:e.f1},[k("span",pe,D(e.f14),1),k("p",me,D(e.f2),1),k("p",be,D(e.f4)+"("+D(e.f3)+"%)",1)],4)))),128))]),k("div",ye,[k("span",ve,[k("b",null,D(v(s).activeData.f14),1),k("small",ge,D(v(s).activeData.f12),1),k("small",he,D(v(s).activeData.SecurityTypeName),1)]),k("p",ke,[k("span",null,D(v(s).activeData.f2),1),k("span",{style:$([{background:"gray","border-radius":"3px",padding:"0 4px","line-height":"18px",color:"#fff"},{backgroundColor:l(v(s).activeData.f3)}]),class:"ml10 f12 d-inline"},D(v(s).activeData.f3),5)])]),o(v(Z),{class:"mt10 bt",style:{"line-height":"26px"}},{default:j((()=>[(g(),h(x,null,N(F,(e=>o(v(Y),{span:8,key:e},{default:j((()=>[k("span",null,D(e.n)+"：",1),k("span",je,D(v(s).stockInfo[e.i]||"-")+" "+D(e.unit),1)])),_:2},1024))),64))])),_:1}),o(v(P),{class:"stock-title bb bt",modelValue:v(s).activeName,"onUpdate:modelValue":d[1]||(d[1]=e=>v(s).activeName=e),onTabClick:u},{default:j((()=>[(g(),h(x,null,N(t,(e=>o(v(Q),{key:e.value,name:e.value,label:e.label},null,8,["name","label"]))),64))])),_:1},8,["modelValue"]),"trends"==v(s).activeName?(g(),_(S(O((()=>E((()=>import("./Trends.77935d1e.js")),["assets/Trends.77935d1e.js","assets/install.31878728.js","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/install.3dff7996.js"])))),{key:0,data:v(s).stockOption,style:{width:"100%",height:"316px"}},null,8,["data"])):I("",!0),"trends"!=v(s).activeName?(g(),_(S(O((()=>E((()=>import("./KLine.2bbe8156.js")),["assets/KLine.2bbe8156.js","assets/install.31878728.js","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/install.3dff7996.js"])))),{key:1,data:v(s).stockOption,style:{width:"100%",height:"316px"}},null,8,["data"])):I("",!0)])),_:1})])),_:1})])),[[f,v(s).loading]])}}},[["__scopeId","data-v-17528975"]]);const Ne={name:"appStock"},_e=Object.assign(Ne,{setup:a=>(a,t)=>(g(),_(e,{height:"600px"},{default:j((()=>[o(xe)])),_:1}))});export{_e as default};