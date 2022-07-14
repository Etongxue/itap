var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,l=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&i(e,o,t[o]);if(s)for(var o of s(t))a.call(t,o)&&i(e,o,t[o]);return e},r=(e,s)=>t(e,o(s));import{a4 as c,k as p,Q as u,as as f,bO as d,bU as m,aG as y,ay as b,U as g,b1 as v,b3 as C,bn as h,X as x,A as j,aI as k,V as T,D as O,C as S,aF as I,W as E,I as w,bp as _,a2 as z,b6 as L,bN as H,ai as M,bf as N}from"./todo.9d8ad3e1.js";import{b as B,d as P,E as U,_ as $,i as A,c as D}from"./index.88f3c51b.js";import{j as F,T as W}from"./icon.b571cc89.js";import{u as q}from"./index.6fb72867.js";import{E as G}from"./aria.66f3f71c.js";import{u as Q}from"./index.172974c9.js";import{c as V}from"./style.83568f4e.js";import"./isObject.44842e39.js";const X=["success","info","warning","error"],Z=B({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:P([String,Object]),default:""},id:{type:String,default:""},message:{type:P([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:P(Function),default:()=>{}},onClose:{type:P(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...X,""],default:""},zIndex:{type:Number,default:0}}),J={destroy:()=>!0},K=c({name:"ElNotification",components:l({ElIcon:U},F),props:Z,emits:J,setup(e){const t=q("notification"),o=p(!1);let s;const n=u((()=>{const o=e.type;return o&&W[e.type]?t.m(o):""})),a=u((()=>W[e.type]||e.icon||"")),i=u((()=>e.position.endsWith("right")?"right":"left")),l=u((()=>e.position.startsWith("top")?"top":"bottom")),r=u((()=>({[l.value]:`${e.offset}px`,zIndex:e.zIndex})));function c(){e.duration>0&&({stop:s}=m((()=>{o.value&&b()}),e.duration))}function y(){null==s||s()}function b(){o.value=!1}return f((()=>{c(),o.value=!0})),d(document,"keydown",(function({code:e}){e===G.delete||e===G.backspace?y():e===G.esc?o.value&&b():c()})),{ns:t,horizontalClass:i,typeClass:n,iconComponent:a,positionStyle:r,visible:o,close:b,clearTimer:y,startTimer:c}}}),R=["id"],Y=["textContent"],ee={key:0},te=["innerHTML"];var oe=$(K,[["render",function(e,t,o,s,n,a){const i=y("el-icon"),l=y("close");return b(),g(L,{name:e.ns.b("fade"),onBeforeLeave:e.onClose,onAfterLeave:t[3]||(t[3]=t=>e.$emit("destroy")),persisted:""},{default:v((()=>[C(x("div",{id:e.id,class:j([e.ns.b(),e.customClass,e.horizontalClass]),style:S(e.positionStyle),role:"alert",onMouseenter:t[0]||(t[0]=(...t)=>e.clearTimer&&e.clearTimer(...t)),onMouseleave:t[1]||(t[1]=(...t)=>e.startTimer&&e.startTimer(...t)),onClick:t[2]||(t[2]=(...t)=>e.onClick&&e.onClick(...t))},[e.iconComponent?(b(),g(i,{key:0,class:j([e.ns.e("icon"),e.typeClass])},{default:v((()=>[(b(),g(k(e.iconComponent)))])),_:1},8,["class"])):T("v-if",!0),x("div",{class:j(e.ns.e("group"))},[x("h2",{class:j(e.ns.e("title")),textContent:O(e.title)},null,10,Y),C(x("div",{class:j(e.ns.e("content")),style:S(e.title?void 0:{margin:0})},[I(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(b(),E(w,{key:1},[T(" Caution here, message could've been compromized, nerver use user's input as message "),T(" eslint-disable-next-line "),x("p",{innerHTML:e.message},null,8,te)],2112)):(b(),E("p",ee,O(e.message),1))]))],6),[[h,e.message]]),e.showClose?(b(),g(i,{key:0,class:j(e.ns.e("closeBtn")),onClick:_(e.close,["stop"])},{default:v((()=>[z(l)])),_:1},8,["class","onClick"])):T("v-if",!0)],2)],46,R),[[h,e.visible]])])),_:3},8,["name","onBeforeLeave"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const se={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]};let ne=1;const ae=function(e={},t=null){if(!H)return{close:()=>{}};("string"==typeof e||M(e))&&(e={message:e});const o=e.position||"top-right";let s=e.offset||0;se[o].forEach((({vm:e})=>{var t;s+=((null==(t=e.el)?void 0:t.offsetHeight)||0)+16})),s+=16;const{nextZIndex:n}=Q(),a="notification_"+ne++,i=e.onClose,c=r(l({zIndex:n(),offset:s},e),{id:a,onClose:()=>{!function(e,t,o){const s=se[t],n=s.findIndex((({vm:t})=>{var o;return(null==(o=t.component)?void 0:o.props.id)===e}));if(-1===n)return;const{vm:a}=s[n];if(!a)return;null==o||o(a);const i=a.el.offsetHeight,l=t.split("-")[0];s.splice(n,1);const r=s.length;if(r<1)return;for(let c=n;c<r;c++){const{el:e,component:t}=s[c].vm,o=Number.parseInt(e.style[l],10)-i-16;t.props.offset=o}}(a,o,i)}});let p=document.body;A(e.appendTo)?p=e.appendTo:V(e.appendTo)&&(p=document.querySelector(e.appendTo)),A(p)||(p=document.body);const u=document.createElement("div"),f=z(oe,c,M(c.message)?{default:()=>c.message}:null);return f.appContext=null!=t?t:ae._context,f.props.onDestroy=()=>{N(null,u)},N(f,u),se[o].push({vm:f}),p.appendChild(u.firstElementChild),{close:()=>{f.component.proxy.visible=!1}}};X.forEach((e=>{ae[e]=(t={})=>(("string"==typeof t||M(t))&&(t={message:t}),ae(r(l({},t),{type:e})))})),ae.closeAll=function(){for(const e of Object.values(se))e.forEach((({vm:e})=>{e.component.proxy.visible=!1}))},ae._context=null;const ie=D(ae,"$notify");export{ie as ElNotification,ie as default,J as notificationEmits,Z as notificationProps,X as notificationTypes};