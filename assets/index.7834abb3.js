var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,r,s)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s;import{b as d,d as n,_ as p,w as c}from"./index.88f3c51b.js";import{u as i}from"./index.6fb72867.js";import{a4 as y,ay as b,W as f,A as u,x as m,aF as v,a1 as h,D as w,V as j,X as O,C as g}from"./todo.9d8ad3e1.js";const S=d({header:{type:String,default:""},bodyStyle:{type:n([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),P=y((x=((e,a)=>{for(var r in a||(a={}))t.call(a,r)&&l(e,r,a[r]);if(s)for(var r of s(a))o.call(a,r)&&l(e,r,a[r]);return e})({},{name:"ElCard"}),a(x,r({props:S,setup(e){const a=i("card");return(e,r)=>(b(),f("div",{class:u([m(a).b(),m(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(b(),f("div",{key:0,class:u(m(a).e("header"))},[v(e.$slots,"header",{},(()=>[h(w(e.header),1)]))],2)):j("v-if",!0),O("div",{class:u(m(a).e("body")),style:g(e.bodyStyle)},[v(e.$slots,"default")],6)],2))}}))));var x;const $=c(p(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{$ as E};