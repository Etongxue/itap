import{bx as e,bq as t,bI as a,bG as s,bH as o,br as n,bE as i,bS as l,bs as c,bt as g,bT as r}from"./todo.9d8ad3e1.js";import{a as f}from"./index.cf2b56e1.js";import{delWebsiteIcon as d}from"./website.ab9ea580.js";import{dToast as b}from"./index.1756df45.js";/* empty css             *//* empty css                   */import{u}from"./baseRequest.acdd10d1.js";import{ElMessage as m}from"./index.8c1ac3e2.js";const h=e(),v=t(),y=a(),p=s(),w=o(),C=[{key:"baidu",title:"百度",href:"https://www.baidu.com/s?&tn=68018901_2_oem_dgie=utf-8&wd="},{key:"google",title:"Google",href:"https://www.google.com/search?q="},{key:"bing",title:"必应",href:"https://www4.bing.com/search?q="},{key:"github",title:"gitHub",href:"https://github.com/search?q="}];!y.value&&(y.value=[]),!p.value&&(p.value=[]);const T=e=>{console.log(e),e.baseConfig&&(e.baseConfig.searchEngine||(e.baseConfig.searchEngine=C),e.baseConfig.open||(e.baseConfig.open={searchBlank:e.baseConfig.search.blank,iconBlank:v.value.search.blank}),v.value=e.baseConfig),e.navConfig&&(h.value=e.navConfig),e.todo&&(i.set("todo",e.todo),y.value=e.notes.slice(0,3)),e.notes&&(i.set("notes",e.notes),p.value=e.notes.slice(0,3),l.value=e.notes.filter((e=>e&&e.fixed))),e.stocks&&(w.value=e.stocks)};window.addEventListener("storage",(e=>{if("navConfig"===e.key){let e=n.get("navConfig")||[];e.length&&(e.value=e)}}));const _=(e,t)=>{n.get("token")&&(n.set("asyncTime",t),e||(e={baseConfig:1,navConfig:1,notes:1,todo:1}),b("同步中","loading"),f.itabConfig(e).then((e=>{b("同步成功","check");let t=e.data;t&&t.iTabConfig&&(t=JSON.parse(t.iTabConfig)),t&&T(t)})))},k=u(),j=async()=>{let e=await c((()=>import("./todo.9d8ad3e1.js").then((function(e){return e.cf}))),["assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);e=e.default;let t=await e.get("todayBing"),a=g().format("YYYYMMDD");if(t&&t.enddate==a)return t;let s=await f.getBing();return e.set("todayBing",s.data||{}),s.data||{}};const A=async(e,t)=>{let a=await c((()=>import("./todo.9d8ad3e1.js").then((function(e){return e.cf}))),["assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]);if(a=a.default,!n.get("token"))return;let s=["baseConfig","navConfig","notes","todo","stocks"],o={},i={saveType:t},l=k.value.itabAsyncTime||{};if(e){let t=g().valueOf();if(["notes","todo"].includes(e)){let t=await a.get(e)||n.get(e)||[];i[e]=t}else i[e]=n.get(e);l[e]=t,o[`itabAsyncTime.${e}`]=t}else{let e=g().valueOf();await async function(e,t){for(let a=0;a<e.length;a++)await t(e[a],a,e)}(s,(async t=>{l[t]=e;if(["notes","todo"].includes(t)){let e=await a.get(t)||n.get(t)||[];i[t]=e}else i[t]=n.get(t);o[`itabAsyncTime.${t}`]=e}))}b("备份中...","loading"),f.itabConfigUpdate(i).then((()=>{f.userUpdate(o),n.set("asyncTime",l),setTimeout((()=>{b("备份成功","check")}),260),k.value.itabAsyncTime=l})).catch((()=>{b("备份失败","close"),m({type:"error",message:"备份失败，稍后请手动尝试",duration:0,showClose:!0})}))};var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",getTodayBing:j,getUserInfo:()=>{n.get("token")?f.userInfo({from:"itab",t:(new Date).getTime()}).then((e=>{k.value=e.data||{};let t=n.get("asyncTime"),a={};for(let s in e.data.itabAsyncTime)t[s]!=e.data.itabAsyncTime[s]&&(a[s]=1);r(a)||_(a,e.data.itabAsyncTime)})):k.value={}},saveConfig:A,asyncConfig:async e=>{if(!k.value._id)return{};if(n.get("asyncTime")[e]==k.value.itabAsyncTime[e])return{};b("同步中","loading");let t={};t[e]=1;let a=await f.itabConfig(t);return b("同步成功","check"),a},delIcon:async e=>{if(e&&e.includes("user_")){let t=[e.replace("https://files.codelife.cc/","")];d({paths:t})}}});export{_ as A,j as g,E as p,A as s,T as w};
