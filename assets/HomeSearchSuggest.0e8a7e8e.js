import{bu as e,a3 as s,bs as a,bq as i,r as t,br as n,Q as l,k as c,as as o,aw as r,ay as u,W as d,X as p,A as h,I as f,aE as y,bp as k,a2 as m,x as _,V as g,D as v,C as b,b1 as w,b3 as I,bn as E,U as V,aB as x,az as S,a1 as R}from"./todo.9d8ad3e1.js";import{u as A,j as C,d as j,m as T,o as L,$ as P,a as q,_ as D}from"./main.bc43ff04.js";import{googleAnalytics as B}from"./statistics.98ce30f0.js";import{useStatisticsApi as O}from"./useSta.cff90aa3.js";import{a as W}from"./index.becf6c0c.js";import"./baseRequest.acdd10d1.js";const z=e=>(x("data-v-60756811"),e=e(),S(),e),H={class:"se-list-keyword"},K=["onClick","title"],$=["onClick"],U=["src"],F={class:"d-elip se-item-title"},N={class:"se-item-icon",style:{color:"var(--primary-color)"}},Q={class:"f18 d-icon",size:18},X=z((()=>p("p",{class:"d-elip se-item-title"},"添加",-1))),G={key:0,class:"req-baidu-per"},J=R(" 开启联想词搜索建议 "),M=z((()=>p("span",{class:"f13 d-block"},"授权开启联想搜索，搜索时将显示联想词。iTab不会获取您的任何数据，建议您授权",-1))),Y=R("取消"),Z=R("授权"),ee={class:"se-keyword-icon d-icon f16"},se=["onClick","data-index"],ae={class:"se-keyword-icon d-icon f16",size:16},ie={class:"d-cell d-elip"},te=["onClick"];var ne=e({__name:"HomeSearchSuggest",props:{currSearch:{type:Object,default:{}}},emits:["selectSearch","selectSug"],setup(e,{expose:x,emit:S}){const R=e,z=s((()=>a((()=>import("./Close.ac61f2f5.js")),["assets/Close.ac61f2f5.js","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]))),ne=s((()=>a((()=>import("./main.bc43ff04.js").then((function(e){return e.F}))),["assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]))),le=s((()=>a((()=>import("./AccessTimeRound.1a47aba3.js").then((function(e){return e.A}))),["assets/AccessTimeRound.1a47aba3.js","assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]))),ce=s((()=>a((()=>import("./TranslateRound.bfebda3b.js").then((function(e){return e.T}))),["assets/TranslateRound.bfebda3b.js","assets/main.bc43ff04.js","assets/main.a74f2663.css","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]))),oe=s((()=>a((()=>import("./index.7243f2d8.js")),["assets/index.7243f2d8.js","assets/index.88f3c51b.js","assets/style.83568f4e.js","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css","assets/index.6fb72867.js","assets/isObject.44842e39.js","assets/icon.b571cc89.js","assets/index.90c48122.js","assets/index.8ef2203f.js","assets/index.f979cd8a.js"])));A();const re=i(),ue=s((()=>a((()=>import("./HomeSearchList.529e2cae.js")),["assets/HomeSearchList.529e2cae.js","assets/HomeSearchList.f3ed8cf1.css","assets/base.bb320680.css","assets/el-input.067b3bef.css","assets/el-overlay.56bab24d.css","assets/el-message.eaf5942b.css","assets/index.cf2b56e1.js","assets/index.becf6c0c.js","assets/baseRequest.acdd10d1.js","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css","assets/index.8c1ac3e2.js","assets/config-provider.31e0a14a.js","assets/index.88f3c51b.js","assets/style.83568f4e.js","assets/index.6fb72867.js","assets/isObject.44842e39.js","assets/index.90c48122.js","assets/typescript.72bf8adc.js","assets/icon.b571cc89.js","assets/aria.66f3f71c.js","assets/index.172974c9.js","assets/el-dialog.78f7c2e8.js","assets/el-dialog.07ccc5de.css","assets/index.b2ab0f23.js","assets/focus-trap.50913811.js","assets/index.8ef2203f.js","assets/scroll.d4cf4dfc.js","assets/el-checkbox-group.8feecd60.js","assets/el-checkbox-group.b92fdcf4.css","assets/index.f979cd8a.js","assets/index.469ed053.js"])));let de=W.CancelToken;const pe=t({value:"",engienVisible:!1,showKeyWord:!1,keyList:[],value:"",keyIndex:-1,searchVisible:!1,isReqBaiduSgPer:!0});function he(e){if(n.set("isAuthBaidu",e),"0"===e)return pe.isReqBaiduSgPer=!1,void a((()=>import("./index.8c1ac3e2.js")),["assets/index.8c1ac3e2.js","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css","assets/config-provider.31e0a14a.js","assets/index.88f3c51b.js","assets/style.83568f4e.js","assets/index.6fb72867.js","assets/isObject.44842e39.js","assets/index.90c48122.js","assets/typescript.72bf8adc.js","assets/icon.b571cc89.js","assets/aria.66f3f71c.js","assets/index.172974c9.js"]).then((e=>{e.default.warning("如果想开启搜索建议, 在空白处右键-设置-搜索栏-开启搜索建议 即可")}));chrome&&chrome.permissions.request({origins:["https://www.baidu.com/"]},(e=>{e&&(pe.isReqBaiduSgPer=!1,console.log("获取baidu权限成功"))}))}setTimeout((()=>{C()||"safari"==j()||"firefox"==j()||T?pe.isReqBaiduSgPer=!1:chrome&&chrome.permissions.contains({origins:["https://www.baidu.com/"]},(e=>{pe.isReqBaiduSgPer=!e,"0"===n.get("isAuthBaidu")&&(pe.isReqBaiduSgPer=!1)}))}),0);const fe=l((()=>re.value.search.history&&!pe.value));let ye=c(n.get("searchHistory")||[]);a((()=>import("./todo.9d8ad3e1.js").then((function(e){return e.cf}))),["assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]).then((e=>{e.default.get("searchHistory").then((e=>{ye.value=e||ye.value}))}));const ke=l((()=>pe.value?pe.keyList||[]:re.value.search.history?ye.value:[]));const me=l((()=>{let e=ke.value.length;return pe.value&&e++,30*e+"px"}));function _e(e){P(".se-input-box").contains(e.target)||(pe.showKeyWord=!1,pe.engienVisible=!1)}o((()=>{L(P("#searchInput"),"input",ve),L(P("#searchInput"),"keydown",be),L(P("#searchInput"),"click",(()=>{pe.showKeyWord=!0,pe.engienVisible=!1})),L(P("#selectEngine"),"click",(e=>{pe.engienVisible=!pe.engienVisible})),L(document,"click",_e)})),r((()=>{q(P("#searchInput"),"input",ve),q(P("#searchInput"),"keydown",be),q(document,"click",_e)}));let ge=null;function ve(e){if(pe.value=e.target.value,pe.value){if(pe.showKeyWord=!0,pe.keyIndex=-1,C()||"safari"==j()||"firefox"==j()||T){const e=de.source();return ge&&(ge.cancel("取消请求"),ge=null),ge=e,void W.get(`https://api.codelife.cc/api/baidu_sugrec/${pe.value}`,{cancelToken:e.token}).then((e=>{let s=e.data;pe.keyList=(s.g||[]).map((e=>e.q))}))}{ge&&(ge.abort(),ge=null);const e=new AbortController,{signal:s}=e;ge=e;let a=n.get("isAuthBaidu");if(!a||"0"===a)return;fetch(`https://www.baidu.com/sugrec?&prod=pc&wd=${pe.value}`,{signal:s}).then((e=>e.json())).then((e=>{let s=e.g||[];s=s.map((e=>e.q)),pe.keyList=s,ge=null}))}}else pe.keyList=[]}function be(e){let s=e.code;["ArrowDown","ArrowUp"].includes(s)?we(e):"Tab"===s&&function(e){e.preventDefault();let s=re.value.useSearch||"baidu",a=re.value.searchEngine.findIndex((e=>e.key==s)),i=(re.value.searchEngine||[]).length;a+=1,a>=i&&(a=0);let t=re.value.searchEngine[a];re.value.useSearch=t.key,S("selectSearch",t)}(e)}function we(e){let s=e.code;"ArrowDown"===s?(pe.keyIndex++,pe.keyIndex>=11&&(pe.keyIndex=0)):"ArrowUp"===s&&(e.preventDefault(),pe.keyIndex--,pe.keyIndex<=0&&(pe.keyIndex=10)),pe.keyIndex>0&&S("selectSug",pe.keyList[pe.keyIndex-1])}function Ie(e,s,i){if(i&&229==i.keyCode||!e)return;!async function(e){if(e){ye.value.unshift(e),ye.value=[...new Set(ye.value)],ye.value=ye.value.splice(0,10);let s=await a((()=>import("./todo.9d8ad3e1.js").then((function(e){return e.cf}))),["assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);s=s.default,s.set("searchHistory",ye._rawValue)}}(e),e=encodeURIComponent(e);let t=`${R.currSearch.href}${e} `;if(B({t:"event",ec:R.currSearch.key,ea:"use",el:"search"}),O({name:R.currSearch.key}),0===pe.keyIndex||"fanyi"==s){t=`${re.value.search.translate||"https://translate.google.cn/#en/zh-CN/"}${e} `}pe.showKeyWord=!1;let n=re.value.open&&re.value.open.searchBlank?"_blank":"_self";document.body.clientWidth<600&&t.includes("www.baidu.com")&&(t=t.replace("www","m")),window.open(t,n),setTimeout((()=>{S("selectSug",""),pe.keyList=[],pe.value=""}),500)}return x({searchHandle:Ie}),(s,i)=>(u(),d(f,null,[p("div",H,[p("ul",{class:h(["se-all",{action:pe.engienVisible}])},[(u(!0),d(f,null,y(_(re).searchEngine,((s,a)=>(u(),d("li",{onClick:k((e=>{return S("selectSearch",a=s),pe.engienVisible=!1,void(re.value.useSearch=a.key);var a}),["stop"]),class:"se-item",key:s.key,title:s.title},[0!==a?(u(),d("i",{key:0,title:"删除",onClick:k((e=>function(e){re.value.searchEngine.splice(e,1)}(a)),["stop"]),class:"f12 d-icon se-item-del"},[m(_(z))],8,$)):g("",!0),p("span",{class:h(["se-item-icon",{action:s.key==e.currSearch.key}])},[p("img",{class:"search-icon",src:`https://files.codelife.cc/itab/search/${s.key}.svg`},null,8,U)],2),p("p",F,v(s.title),1)],8,K)))),128)),p("li",{key:"add",onClick:i[0]||(i[0]=k((e=>pe.searchVisible=!0),["stop"])),class:"se-item",title:"添加"},[p("span",N,[p("i",Q,[m(_(ne))])]),X])],2),pe.showKeyWord?(u(),d("ul",{key:0,class:h(["se-keyword al",{isReqBaidu:pe.isReqBaiduSgPer}]),style:b([{height:_(me)},{backgroundColor:"backdropFilter"in document.documentElement.style?"rgba(var(--alpha-bg), 0.5)":"rgba(var(--alpha-bg), 0.96)"}])},[pe.isReqBaiduSgPer?(u(),d("div",G,[J,M,p("p",null,[m(_(oe),{size:"small",onClick:i[1]||(i[1]=e=>he("0"))},{default:w((()=>[Y])),_:1}),m(_(oe),{size:"small",type:"primary",onClick:i[2]||(i[2]=e=>he("1"))},{default:w((()=>[Z])),_:1})])])):g("",!0),p("li",{onClick:i[3]||(i[3]=k((e=>Ie(pe.value||_(ke)[0],"fanyi")),["stop"])),class:h(["se-keyword-item d-elip item-fanyi",{focus:0===pe.keyIndex}]),onKeydown:we},[p("i",ee,[m(_(ce))]),p("span",null,v(pe.value||_(ke)[0]),1)],34),(u(!0),d(f,null,y(_(ke),((e,s)=>(u(),d("li",{onClick:k((s=>Ie(e)),["stop"]),class:h(["se-keyword-item d-elip d-flex-y",{focus:pe.keyIndex==s+1}]),key:e,"data-index":s+1},[p("i",ae,[I(m(_(le),null,null,512),[[E,!pe.value]]),I(m(_(D),null,null,512),[[E,pe.value]])]),p("span",ie,v(e),1),_(fe)?(u(),d("i",{key:0,onClick:k((e=>async function(e){ye.value.splice(e,1),ye.value=ye.value;let s=await a((()=>import("./todo.9d8ad3e1.js").then((function(e){return e.cf}))),["assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);s=s.default,s.set("searchHistory",ye._rawValue)}(s)),["stop"]),class:"se-history-del d-icon f16",size:16},[m(_(z))],8,te)):g("",!0)],10,se)))),128))],6)):g("",!0)]),pe.searchVisible?(u(),V(_(ue),{key:0,modelValue:pe.searchVisible,"onUpdate:modelValue":i[4]||(i[4]=e=>pe.searchVisible=e)},null,8,["modelValue"])):g("",!0)],64))}},[["__scopeId","data-v-60756811"]]);export{ne as default};