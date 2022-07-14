var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,p=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&l(e,o,t[o]);if(r)for(var o of r(t))n.call(t,o)&&l(e,o,t[o]);return e},s=(e,r)=>t(e,o(r));import{a as i,u as f,E as d}from"./index.53173a12.js";import{_ as c,b as u,d as m,h as b,w as y}from"./index.88f3c51b.js";import{g}from"./icon.b571cc89.js";import{aF as v,k as h,aA as w,af as S,as as O,x,ao as j,bQ as k,a4 as A,Q as B,ay as N,U as C,b1 as _,W as $,D as P,A as R,V as E,a1 as I,ak as M}from"./todo.9d8ad3e1.js";import{u as D}from"./index.6fb72867.js";import{a as H}from"./style.83568f4e.js";var F=c({inheritAttrs:!1},[["render",function(e,t,o,r,a,n){return v(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var Q=c({name:"ElCollectionItem",inheritAttrs:!1},[["render",function(e,t,o,r,a,n){return v(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const T=u({trigger:i.trigger,effect:s(p({},f.effect),{default:"light"}),type:{type:m(String)},placement:{type:m(String),default:"bottom"},popperOptions:{type:m(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:m([Number,String]),default:0},maxHeight:{type:m([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:m(Object)}});u({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:g}}),u({onKeydown:{type:m(Function)}}),(e=>{const t=`El${e}Collection`,o=`${t}Item`,r=Symbol(t),a=Symbol(o),n=s(p({},F),{name:t,setup(){const e=h(null),t=new Map;w(r,{itemMap:t,getItems:()=>{const o=x(e);if(!o)return[];const r=Array.from(o.querySelectorAll("[data-el-collection-item]"));return[...t.values()].sort(((e,t)=>r.indexOf(e.ref)-r.indexOf(t.ref)))},collectionRef:e})}}),l=s(p({},Q),{name:o,setup(e,{attrs:t}){const o=h(null),n=S(r,void 0);w(a,{collectionItemRef:o}),O((()=>{const e=x(o);e&&n.itemMap.set(e,p({ref:e},t))})),j((()=>{const e=x(o);n.itemMap.delete(e)}))}})})("Dropdown");const V=u({trigger:i.trigger,placement:T.placement,disabled:i.disabled,visible:f.visible,transition:f.transition,popperOptions:T.popperOptions,tabindex:T.tabindex,content:f.content,popperStyle:f.popperStyle,popperClass:f.popperClass,enterable:s(p({},f.enterable),{default:!0}),effect:s(p({},f.effect),{default:"light"}),teleported:f.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0}}),q={"update:visible":e=>k(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},z=A(s(p({},{name:"ElPopover"}),{props:V,emits:q,setup(e,{expose:t,emit:o}){const r=e,a=D("popover"),n=h(),l=B((()=>{var e;return null==(e=x(n))?void 0:e.popperRef})),p=B((()=>[{width:H(r.width)},r.popperStyle])),s=B((()=>[a.b(),r.popperClass,{[a.m("plain")]:!!r.content}])),i=B((()=>"el-fade-in-linear"===r.transition)),f=()=>{o("before-enter")},c=()=>{o("before-leave")},u=()=>{o("after-enter")},m=()=>{o("update:visible",!1),o("after-leave")};return t({popperRef:l,hide:()=>{var e;null==(e=n.value)||e.hide()}}),(e,t)=>(N(),C(x(d),M({ref_key:"tooltipRef",ref:n},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":x(s),"popper-style":x(p),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":x(i),onBeforeShow:f,onBeforeHide:c,onShow:u,onHide:m}),{content:_((()=>[e.title?(N(),$("div",{key:0,class:R(x(a).e("title")),role:"title"},P(e.title),3)):E("v-if",!0),v(e.$slots,"default",{},(()=>[I(P(e.content),1)]))])),default:_((()=>[e.$slots.reference?v(e.$slots,"reference",{key:0}):E("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration"]))}}));const K=(e,t)=>{const o=t.arg||t.value,r=null==o?void 0:o.popperRef;r&&(r.triggerRef=e)};const U=y(c(z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]),{directive:b({mounted(e,t){K(e,t)},updated(e,t){K(e,t)}},"popover")});export{U as E};
