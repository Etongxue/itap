import{_ as l}from"./d-dialog.15134adf.js";import{bu as e,ay as t,W as s,X as a,I as n,aE as c,A as r,D as o,aB as u,az as i,a4 as d,k as v,cc as f,al as p,aw as m,a2 as w,U as h,aI as x,x as b,b1 as g}from"./todo.9d8ad3e1.js";import{o as y,a as j}from"./main.bc43ff04.js";/* empty css             */import"./el-dialog.78f7c2e8.js";import"./index.88f3c51b.js";import"./style.83568f4e.js";import"./index.6fb72867.js";import"./isObject.44842e39.js";import"./icon.b571cc89.js";import"./index.b2ab0f23.js";import"./focus-trap.50913811.js";import"./aria.66f3f71c.js";import"./index.172974c9.js";import"./index.8ef2203f.js";import"./scroll.d4cf4dfc.js";/* empty css                   */import"./Close.ac61f2f5.js";const z={props:{total:{type:Number,default:9},current:{type:Number,default:-1}},data(){return{before:this.total===this.current?-1:this.total,isPlay:!1}},watch:{current(l,e){this.before=e,this.isPlay||(this.isPlay=!0)}}},k=l=>(u("data-v-4e2e319e"),l=l(),i(),l),C={class:"flip"},M={class:"up"},_=k((()=>a("div",{class:"shadow"},null,-1))),H={class:"inn"},R={class:"down"},V=k((()=>a("div",{class:"shadow"},null,-1))),F={class:"inn"};var L=e(z,[["render",function(l,e,u,i,d,v){return t(),s("div",{class:r({play:d.isPlay})},[a("ul",C,[(t(!0),s(n,null,c(u.total+1,((l,e)=>(t(),s("li",{class:r(["item",{active:u.current===e,before:e===d.before}]),key:l},[a("div",M,[_,a("div",H,[a("span",null,o(e),1)])]),a("div",R,[V,a("div",F,[a("span",null,o(e),1)])])],2)))),128))])],2)}],["__scopeId","data-v-4e2e319e"]]);function O(l=new Date){const e=l.getHours(),t=l.getMinutes(),s=l.getSeconds();return[...B(e),...B(t),...B(s)]}function B(l){return l>=10?(""+l).split("").map((l=>Number(l))):[0,l]}const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},I=[a("path",{d:"M21.29 4.12L16.7 8.71l1.59 1.59c.63.63.18 1.71-.71 1.71H13c-.55 0-1-.45-1-1v-4.6c0-.89 1.08-1.34 1.71-.71l1.59 1.59l4.59-4.59a.996.996 0 0 1 1.41 0c.38.4.38 1.03-.01 1.42zM4.12 21.29l4.59-4.59l1.59 1.59c.63.63 1.71.18 1.71-.71V13c0-.55-.45-1-1-1h-4.6c-.89 0-1.34 1.08-.71 1.71l1.59 1.59l-4.59 4.59a.996.996 0 0 0 0 1.41c.4.38 1.03.38 1.42-.01z",fill:"currentColor"},null,-1)];var P=d({name:"CloseFullscreenRound",render:function(l,e){return t(),s("svg",A,I)}});const S={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},D=[a("path",{d:"M18 4h2c1.1 0 2 .9 2 2v2c0 .55-.45 1-1 1s-1-.45-1-1V6h-2c-.55 0-1-.45-1-1s.45-1 1-1zM4 8V6h2c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1zm16 8v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1zM6 18H4v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h2c.55 0 1-.45 1-1s-.45-1-1-1zM16 8H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z",fill:"currentColor"},null,-1)];var N=d({name:"FitScreenRound",render:function(l,e){return t(),s("svg",S,D)}});const T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},U=[a("path",{d:"M3.63 3.63a.996.996 0 0 0 0 1.41L7.29 8.7L7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91c-.36.15-.58.53-.58.92c0 .72.73 1.18 1.39.91c.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 1 0 1.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-3.83-2.4-7.11-5.78-8.4c-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",fill:"currentColor"},null,-1)];var E=d({name:"VolumeOffRound",render:function(l,e){return t(),s("svg",T,U)}});const W={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},X=[a("path",{d:"M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",fill:"currentColor"},null,-1)];var q=d({name:"VolumeUpRound",render:function(l,e){return t(),s("svg",W,X)}});const G=l=>(u("data-v-646c59b3"),l=l(),i(),l),J={class:"wfull hfull d-flex-center"},K={class:"clock-container",style:{}},Q=G((()=>a("div",{class:"colon"},null,-1))),Y=G((()=>a("div",{class:"colon"},null,-1))),Z=[G((()=>a("source",{src:"./assets/dida.f9d6df38.mp3"},null,-1)))],$={class:"volume",style:{position:"absolute",right:"20px",bottom:"10px",color:"#fff",opacity:".2"}};var ll=e({__name:"Content",props:{data:Object},setup(l){const e=l,n=v(null),c=v(null),r=v(!0),{toggle:o,isFullscreen:u}=f(n);function i(l){let e=l[0].contentRect;if(!n.value)return;let{width:t}=e;console.log(t),n.value.style.fontSize=t/34+"px"}p((()=>{n.value.style.fontSize="21px";let l=n.value;new ResizeObserver(i).observe(l),e.data.isFullscreen&&o()}));const d=v(O());let g=null;function z(){clearTimeout(g)}function k(l){"F11"===l.code&&(l.preventDefault(),o())}return function l(){g=setTimeout((()=>{z(),d.value=O(),l(),r.value||(c.value.load(),c.value.play())}),1e3)}(),m((()=>{z()})),p((()=>{y(document,"keydown",k)})),m((()=>{j(document,"keydown",k)})),(l,e)=>(t(),s("div",{ref_key:"watchResize",ref:n,class:"hfull wfull d-relative",style:{"background-color":"#000"}},[a("div",J,[a("div",K,[w(L,{total:2,current:d.value[0]},null,8,["current"]),w(L,{total:9,current:d.value[1]},null,8,["current"]),Q,w(L,{total:5,current:d.value[2]},null,8,["current"]),w(L,{total:9,current:d.value[3]},null,8,["current"]),Y,w(L,{total:5,current:d.value[4]},null,8,["current"]),w(L,{total:9,current:d.value[5]},null,8,["current"])]),a("audio",{class:"d-hidden",ref_key:"refAudio",ref:c},Z,512),a("div",$,[a("i",{class:"d-icon f20",title:"时钟音效",onClick:e[0]||(e[0]=l=>r.value=!r.value)},[(t(),h(x(r.value?b(E):b(q))))]),a("i",{class:"d-icon f22 ml20",title:"快捷键F11可切换至全屏",onClick:e[1]||(e[1]=(...l)=>b(o)&&b(o)(...l))},[(t(),h(x(b(u)?b(P):b(N))))])])])],512))}},[["__scopeId","data-v-646c59b3"]]);const el={__name:"index",props:{data:Object},setup(e){const s=e;return(e,a)=>(t(),h(l,{destroyOnClose:!0},{default:g((()=>[w(ll,{data:s.data},null,8,["data"])])),_:1}))}};export{el as default};