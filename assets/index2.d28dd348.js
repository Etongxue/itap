var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,i=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&l(e,o,t[o]);if(r)for(var o of r(t))a.call(t,o)&&l(e,o,t[o]);return e},s=(e,r)=>t(e,o(r));import{a as p,u as f,E as c}from"./index2.69c4a5bb.js";import{a4 as d,bB as u,aF as b,k as m,aA as v,af as y,as as g,x as h,ao as w,bu as S,bv as O,cJ as x,bz as A,Q as B,bH as k,aG as j,ay as E,U as N,b1 as C,W as $,D as R,A as _,V as P,a1 as H,ak as I}from"./save_config.7e387697.js";var L=u(d({inheritAttrs:!1}),[["render",function(e,t,o,r,n,a){return b(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var M=u(d({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,o,r,n,a){return b(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const D=S({trigger:p.trigger,effect:s(i({},f.effect),{default:"light"}),type:{type:O(String)},placement:{type:O(String),default:"bottom"},popperOptions:{type:O(Object),default:()=>({})},size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:O([Number,String]),default:0},maxHeight:{type:O([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},buttonProps:{type:O(Object)}});S({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:x}}),S({onKeydown:{type:O(Function)}}),(e=>{const t=`El${e}Collection`,o=`${t}Item`,r=Symbol(t),n=Symbol(o),a=s(i({},L),{name:t,setup(){const e=m(null),t=new Map;v(r,{itemMap:t,getItems:()=>{const o=h(e);if(!o)return[];const r=Array.from(o.querySelectorAll("[data-el-collection-item]"));return[...t.values()].sort(((e,t)=>r.indexOf(e.ref)-r.indexOf(t.ref)))},collectionRef:e})}}),l=s(i({},M),{name:o,setup(e,{attrs:t}){const o=m(null),a=y(r,void 0);v(n,{collectionItemRef:o}),g((()=>{const e=h(o);e&&a.itemMap.set(e,i({ref:e},t))})),w((()=>{const e=h(o);a.itemMap.delete(e)}))}})})("Dropdown");var T=u(d({name:"ElPopover",components:{ElTooltip:c},props:S({trigger:p.trigger,placement:D.placement,disabled:p.disabled,visible:f.visible,transition:f.transition,popperOptions:D.popperOptions,tabindex:D.tabindex,content:f.content,popperStyle:f.popperStyle,popperClass:f.popperClass,enterable:s(i({},f.enterable),{default:!0}),effect:s(i({},f.effect),{default:"light"}),teleported:f.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0}}),emits:["update:visible","before-enter","before-leave","after-enter","after-leave"],setup(e,{emit:t}){const o=A("popover"),r=m(null),n=B((()=>{var e;return null==(e=h(r))?void 0:e.popperRef})),a=B((()=>k(e.width)?e.width:`${e.width}px`)),l=B((()=>[{width:a.value},e.popperStyle])),i=B((()=>[o.b(),e.popperClass,{[o.m("plain")]:!!e.content}])),s=B((()=>"el-fade-in-linear"===e.transition));return{ns:o,kls:i,gpuAcceleration:s,style:l,tooltipRef:r,popperRef:n,hide:()=>{var e;null==(e=r.value)||e.hide()},beforeEnter:()=>{t("before-enter")},beforeLeave:()=>{t("before-leave")},afterEnter:()=>{t("after-enter")},afterLeave:()=>{t("update:visible",!1),t("after-leave")}}}}),[["render",function(e,t,o,r,n,a){const l=j("el-tooltip");return E(),N(l,I({ref:"tooltipRef"},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":e.kls,"popper-style":e.style,teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":e.gpuAcceleration,onBeforeShow:e.beforeEnter,onBeforeHide:e.beforeLeave,onShow:e.afterEnter,onHide:e.afterLeave}),{content:C((()=>[e.title?(E(),$("div",{key:0,class:_(e.ns.e("title")),role:"title"},R(e.title),3)):P("v-if",!0),b(e.$slots,"default",{},(()=>[H(R(e.content),1)]))])),default:C((()=>[e.$slots.reference?b(e.$slots,"reference",{key:0}):P("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onBeforeShow","onBeforeHide","onShow","onHide"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/index.vue"]]);const z=(e,t)=>{const o=t.arg||t.value,r=null==o?void 0:o.popperRef;r&&(r.triggerRef=e)};var F={mounted(e,t){z(e,t)},updated(e,t){z(e,t)}};T.install=e=>{e.component(T.name,T)},F.install=e=>{e.directive("popover",F)};const V=F;T.directive=V;const q=T;export{q as E};