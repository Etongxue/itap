var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{b as l,i,h as c,N as p,a as f}from"./style.83568f4e.js";import{aX as u,a4 as d,Q as b,ay as m,W as v,aF as y,ak as g,x as O}from"./todo.9d8ad3e1.js";import{u as j}from"./index.6fb72867.js";function _(e){for(var t=-1,r=null==e?0:e.length,o={};++t<r;){var a=e[t];o[a[0]]=a[1]}return o}const h=e=>void 0===e,P=e=>!e&&0!==e||l(e)&&0===e.length||i(e)&&!Object.keys(e).length,S=e=>"undefined"!=typeof Element&&e instanceof Element,w=e=>e,E=(e,t)=>{if(!i(e)||i(r=e)&&r.__epPropKey)return e;var r;const{values:o,required:a,default:s,type:n,validator:l}=e,p=o||l?r=>{let a=!1,n=[];if(o&&(n=Array.from(o),c(e,"default")&&n.push(s),a||(a=n.includes(r))),l&&(a||(a=l(r))),!a&&n.length>0){const e=[...new Set(n)].map((e=>JSON.stringify(e))).join(", ");u(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${e}], got value ${JSON.stringify(r)}.`)}return a}:void 0,f={type:n,required:!!a,validator:p,__epPropKey:!0};return c(e,"default")&&(f.default=s),f},x=e=>_(Object.entries(e).map((([e,t])=>[e,E(t,e)]))),z=(e,t)=>{if(e.install=r=>{for(const o of[e,...Object.values(null!=t?t:{})])r.component(o.name,o)},t)for(const[r,o]of Object.entries(t))e[r]=o;return e},$=(e,t)=>(e.install=r=>{e._context=r._context,r.config.globalProperties[t]=e},e),k=(e,t)=>(e.install=r=>{r.directive(t,e)},e),I=e=>(e.install=p,e);var N=(e,t)=>{const r=e.__vccOpts||e;for(const[o,a]of t)r[o]=a;return r};const q=x({size:{type:[Number,String]},color:{type:String}}),A=d((J=((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&n(e,r,t[r]);return e})({},{name:"ElIcon",inheritAttrs:!1}),t(J,r({props:q,setup(e){const t=e,r=j("icon"),o=b((()=>t.size||t.color?{fontSize:h(t.size)?void 0:f(t.size),"--color":t.color}:{}));return(e,t)=>(m(),v("i",g({class:O(r).b(),style:O(o)},e.$attrs),[y(e.$slots,"default")],16))}}))));var J;const K=z(N(A,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]));var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ElIcon:K,default:K,iconProps:q});export{K as E,N as _,I as a,x as b,$ as c,w as d,E as e,_ as f,h as g,k as h,S as i,P as j,D as k,z as w};
