import{b as t}from"./baseRequest.acdd10d1.js";import"./todo.9d8ad3e1.js";import"./index.becf6c0c.js";const e=(e={})=>t.get("/api/getLocation",{params:e}),o=()=>t.get("https://v1.hitokoto.cn/?encode=json"),a=(e={})=>t.get("/api/getDate",{params:e}),s=(e={})=>t.get("api/wechat/robot",{params:e});export{o as apiGetYiyan,s as apiWechatRobot,a as getDateApi,e as getLocation};
