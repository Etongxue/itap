var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,r=(e,r)=>{for(var i in r||(r={}))o.call(r,i)&&a(e,i,r[i]);if(t)for(var i of t(r))n.call(r,i)&&a(e,i,r[i]);return e};import{bs as i,bq as l,br as c}from"./todo.9d8ad3e1.js";import{statUserAnalyseApi as s}from"./useSta.cff90aa3.js";import"./baseRequest.acdd10d1.js";import"./index.becf6c0c.js";const f=new Promise((function(e,t){i((()=>import("./fingerprint2.a6fff28e.js").then((function(e){return e.f}))),["assets/fingerprint2.a6fff28e.js","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]).then((o=>{o.get((function(n){const a=n.map((function(e,t){return 0===t?e.value.replace(/\bNetType\/\w+\b/,""):e.value}));let r=o.x64hash128(a.join(""),31);r?e(r):t()}))}))})),d=l(),u=async()=>{let e=c.get("bdRodomTn");e||(e=Math.floor(10*Math.random())+1,c.set("bdRodomTn",e));let t=await f;s({fp:t,tn:e}).then((e=>{let t=e.data||{},o=t.tn||"68018901_2_oem_dg";d.value.searchEngine.forEach((e=>{"baidu"===e.key&&(e.href=`https://www.baidu.com/s?tn=${o}&ie=utf-8&wd=`)})),t.content&&(1==t.type?i((()=>import("./index.94551961.js")),["assets/index.94551961.js","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css","assets/index.88f3c51b.js","assets/style.83568f4e.js","assets/index.6fb72867.js","assets/isObject.44842e39.js","assets/icon.b571cc89.js","assets/aria.66f3f71c.js","assets/index.172974c9.js"]).then((e=>{e.default({customClass:"publice-notice",duration:0,showClose:!0,title:t.title,dangerouslyUseHTMLString:!0,message:t.content})})):2==t.type&&t.content&&i((()=>import("./versionNotice.2524c278.js")),["assets/versionNotice.2524c278.js","assets/todo.9d8ad3e1.js","assets/todo.a2cec06c.css"]).then((e=>{e.default({modelValue:!0,title:t.title,center:!0},t.content)})))}))},p={v:1,tid:"UA-215722304-2",ul:(window.navigator.language||"").toLowerCase()},m=async(e={})=>{if("false"===window.localStorage.getItem("collectAnalytics"))return;p.cid=await f;let t=r(r({},p),e),o="";for(let n in t)o+=`${n}=${t[n]}&`;fetch(`https://www.google-analytics.com/collect?${o}`,{method:"POST"})};export{u as customAnalytics,m as googleAnalytics};