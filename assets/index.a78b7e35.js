import{_ as e}from"./d-dialog.15134adf.js";import{a4 as o,ay as t,U as s,a2 as a,bu as l,bI as i,r as d,k as r,bE as n,t as c,aY as p,Q as m,aG as u,W as f,b1 as b,x as j,V as v,b7 as x,I as g,aE as h,X as y,A as _,C as V,bp as w,b3 as k,bm as C,bo as E,aB as L,az as z,bt as U,br as O}from"./todo.9d8ad3e1.js";/* empty css             *//* empty css                   *//* empty css                  */import{E as I,a as M,b as T}from"./el-main.03209504.js";/* empty css                 */import{E as Y}from"./el-date-picker.9136ed15.js";import"./el-scrollbar.c921a7f2.js";/* empty css                  */import{_ as B}from"./d-color.003a7782.js";import{SAVE_CONFIG as q}from"./save_config.acf4dfbd.js";import{d as D}from"./debounce.86275fe6.js";import{o as R}from"./orderBy.6247b301.js";import{S as A}from"./Select.5e39278e.js";import{E as F}from"./index.469ed053.js";import{E as K}from"./index.bff313d9.js";import{D as S,P as G}from"./main.bc43ff04.js";import"./el-dialog.78f7c2e8.js";import"./index.88f3c51b.js";import"./style.83568f4e.js";import"./index.6fb72867.js";import"./isObject.44842e39.js";import"./icon.b571cc89.js";import"./index.b2ab0f23.js";import"./focus-trap.50913811.js";import"./aria.66f3f71c.js";import"./index.172974c9.js";import"./index.8ef2203f.js";import"./scroll.d4cf4dfc.js";/* empty css                   */import"./Close.ac61f2f5.js";import"./utils.c311578b.js";import"./index.7243f2d8.js";import"./index.90c48122.js";import"./index.f979cd8a.js";import"./index.53173a12.js";import"./event.0bae16b8.js";import"./index.5b03a4eb.js";import"./index.1a0b45e9.js";import"./isEqual.060206f9.js";import"./_baseIsEqual.33a0d23b.js";import"./position.c5cd7449.js";import"./validator.bcd39c35.js";import"./public-api.2bc03c02.js";import"./index.cf2b56e1.js";import"./index.becf6c0c.js";import"./baseRequest.acdd10d1.js";/* empty css                   */import"./index.8c1ac3e2.js";import"./config-provider.31e0a14a.js";import"./typescript.72bf8adc.js";import"./website.ab9ea580.js";import"./index.1756df45.js";/* empty css                */import"./Loading.a57c2d0d.js";import"./_baseOrderBy.0a62979c.js";import"./identity.737b3aaf.js";var P=o({name:"MoreFilled"});const Q={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},W=a("path",{fill:"currentColor",d:"M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"},null,-1);P.render=function(e,o,a,l,i,d){return t(),s("svg",Q,[W])},P.__file="packages/components/MoreFilled.vue";var X=P;const $=e=>(L("data-v-e97fb798"),e=e(),z(),e),H={class:"todo-wrap d-layout"},J=$((()=>y("p",{class:"d-left-tabs-item"},"所有待办",-1))),N={key:0,class:"mt10 f12 pl20"},Z=["onClick"],ee={class:"d-cell d-hidden d-main"},oe={style:{width:"50px",height:"34px"}},te={class:"todo-add"},se=["onKeyup"],ae=$((()=>y("span",{class:"toto-add-line"},null,-1))),le=[$((()=>y("source",{src:"./audio/complete.wav"},null,-1)))];var ie=l({__name:"Content",setup(e){const o=i(),l=d({inputValue:"",todoList:[],sortTodo:[]});function L(e){if(!e)return;let o=U(`${e} 23:59:59`).valueOf();return!!e&&U().valueOf()>o}const z=r(null);(async()=>{let e=await n.get("todo");e||(e=O.get("todo"),await n.set("todo",e)),l.todoList=e})();const P=D((async e=>{n.set("todo",c(e))}),500);p((()=>l.todoList),(e=>{let t=R(e=e||[],["ut","done"],["asc"]);l.sortTodo=t,o.value=l.sortTodo.slice(0,3),P(e)}),{deep:!0});const Q=()=>{if(!l.inputValue)return;let e={content:l.inputValue,expire:"",color:"",done:!1,ct:U().valueOf()};l.todoList.unshift(e),l.inputValue="",W()};function W(){q("todo")}const $=m((()=>100*(l.todoList||[]).filter((e=>e.done)).length/l.todoList.length+"%"));return(e,o)=>{const i=u("el-icon");return t(),f("div",H,[a(j(T),{class:"d-layout hfull"},{default:b((()=>[a(j(I),{class:"d-left-tabs pt30",style:{"background-color":"var(--bg-info)",width:"160px"}},{default:b((()=>[J])),_:1}),a(j(M),{class:"todo-content pr10 hfull"},{default:b((()=>[l.todoList.length?v("",!0):(t(),f("div",N,"赶快添加您的第一条待办吧")),a(x,{tag:"ul",name:"list-complete",class:"todo-content-ul d-sub"},{default:b((()=>[(t(!0),f(g,null,h(l.sortTodo,((e,o)=>(t(),f("li",{class:"todo-content-li",key:e},[y("button",{class:_(["todo-check",{done:e.done}]),style:V({borderColor:e.color}),onClick:w((o=>(e=>{e.done=!e.done,e.done&&(z.value.load(),z.value.play()),W()})(e)),["prevent"])},[a(i,{class:"todo-icon-check"},{default:b((()=>[a(j(A))])),_:1})],14,Z),y("div",ee,[a(j(F),{autosize:{minRows:1,maxRows:10},type:"textarea",size:"small",onInput:W,class:_(["todo-text",{done:e.done}]),modelValue:e.content,"onUpdate:modelValue":o=>e.content=o},null,8,["class","modelValue","onUpdate:modelValue"]),a(j(Y),{onChange:o=>e.focus=!1,clearable:!0,class:_(["item-expire",{isExpire:L(e.expire)}]),"value-format":"YYYY-MM-DD",size:"small",modelValue:e.expire,"onUpdate:modelValue":o=>e.expire=o,type:"date",style:{"--el-input-hover-border-color":"transparent","--el-input-focus-border-color":"transparent"},placeholder:"-"},null,8,["onChange","class","modelValue","onUpdate:modelValue"])]),y("div",oe,[e.done?v("",!0):(t(),s(j(K),{key:0,placement:"bottom-end",width:200,trigger:"hover"},{reference:b((()=>[a(i,null,{default:b((()=>[a(j(X))])),_:1})])),default:b((()=>[y("div",null,[a(B,{title:"优先级",custom:!1,modelValue:e.color,"onUpdate:modelValue":o=>e.color=o,colors:["#e03131","#ffb000","#4772fa","var(--d-sub)"]},null,8,["modelValue","onUpdate:modelValue","colors"])])])),_:2},1024)),a(i,{class:"ml10 mr10",title:"删除",onClick:e=>(e=>{l.todoList.splice(e,1),W()})(o)},{default:b((()=>[a(j(S))])),_:2},1032,["onClick"])])])))),128))])),_:1}),y("div",te,[a(i,{size:16,class:"todo-add-icon d-sub"},{default:b((()=>[a(j(G))])),_:1}),k(y("input",{autofocus:"autofocus",class:"todo-add-input bb",type:"text",onKeyup:E(Q,["enter"]),placeholder:"添加任务","onUpdate:modelValue":o[0]||(o[0]=e=>l.inputValue=e)},null,40,se),[[C,l.inputValue,void 0,{trim:!0}]]),ae])])),_:1})])),_:1}),y("div",{class:"todo-progress",style:V({width:j($)})},[y("audio",{class:"d-hidden",ref_key:"refAudio",ref:z},le,512)],4)])}}},[["__scopeId","data-v-e97fb798"]]);const de={name:"appTodo"},re=Object.assign(de,{setup:o=>(o,l)=>(t(),s(e,{height:"600px"},{default:b((()=>[a(ie)])),_:1}))});export{re as default};