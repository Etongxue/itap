import{bu as e,bE as s,br as i,bS as t,aG as a,ay as o,W as n,I as c,aE as r,X as d,D as l,b3 as p,bn as m,x as f,a2 as j,b1 as b}from"./todo.9d8ad3e1.js";import{t as u}from"./timeFormat.ead8e02a.js";import{_ as x}from"./PinOff16Regular.23540ca8.js";import{SAVE_CONFIG as g}from"./save_config.acf4dfbd.js";import"./main.bc43ff04.js";import"./public-api.2bc03c02.js";import"./index.cf2b56e1.js";import"./index.becf6c0c.js";import"./baseRequest.acdd10d1.js";/* empty css             *//* empty css                   */import"./index.8c1ac3e2.js";import"./config-provider.31e0a14a.js";import"./index.88f3c51b.js";import"./style.83568f4e.js";import"./index.6fb72867.js";import"./isObject.44842e39.js";import"./index.90c48122.js";import"./typescript.72bf8adc.js";import"./icon.b571cc89.js";import"./aria.66f3f71c.js";import"./index.172974c9.js";import"./website.ab9ea580.js";import"./index.1756df45.js";/* empty css                */import"./Loading.a57c2d0d.js";import"./Close.ac61f2f5.js";import"./debounce.86275fe6.js";const v={class:"notes-fixed d-scrollbar-hide"},_={class:"notes-fixed-content"},y={class:"b"},h={class:"d-inline",style:{color:"rgba(var(--alpha-color),.3)"}},I=["onClick"];var k=e({__name:"HomeNotesFixed",setup:e=>(s.get("notes").then((e=>{let s=e||i.get("notes")||[];t.value=s.filter((e=>e&&e.fixed))})),(e,i)=>{const k=a("el-icon");return o(),n("ul",v,[(o(!0),n(c,null,r(f(t),(e=>(o(),n("li",{class:"notes-fixed-item zoomIn",key:e.id},[d("div",_,[d("span",y,l(e.title),1),d("span",null,l(e.content||""),1),p(d("span",null,"无内容",512),[[m,!e.title&&!e.content]])]),d("time",h,l(f(u)(e.ut)),1),d("span",{class:"notes-fixed-cancel",onClick:i=>function(e){let i=t.value.findIndex((s=>s.id==e.id));t.value.splice(i,1),s.get("notes").then((i=>{i.find((s=>s.id==e.id)).fixed=!1,s.set("notes",i),g("notes")}))}(e),title:"取消固定"},[j(k,{size:18},{default:b((()=>[j(f(x))])),_:1})],8,I)])))),128))])})},[["__scopeId","data-v-12922932"]]);export{k as default};