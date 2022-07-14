var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,i=(e,l)=>{for(var t in l||(l={}))a.call(l,t)&&s(e,t,l[t]);if(o)for(var t of o(l))n.call(l,t)&&s(e,t,l[t]);return e},r=(e,o)=>l(e,t(o));import{a4 as u,Q as c,ay as p,W as d,X as v,aF as m,A as f,x as h,U as b,b1 as g,a2 as y,bp as C,V as S,C as O,b6 as x,af as w,aY as I,t as L,a9 as k,r as T,v as E,ao as P,al as M,b3 as V,bn as B,D as z,k as D,as as q,bM as W,n as j,w as F,bN as A,aA as K,aG as _,aH as H,I as $,aE as R,bo as Q,bm as N,$ as G,aI as U}from"./todo.9d8ad3e1.js";import{i as X,E as Y}from"./index.469ed053.js";import{E as J,u as Z}from"./index.53173a12.js";import{E as ee}from"./el-scrollbar.c921a7f2.js";import{b as le,_ as te,E as oe,w as ae,a as ne}from"./index.88f3c51b.js";import{b as se,d as ie,e as re}from"./icon.b571cc89.js";import{c as ue,a as ce,u as pe,f as de,b as ve}from"./index.90c48122.js";import{u as me,g as fe}from"./index.6fb72867.js";import{t as he,i as be}from"./style.83568f4e.js";import{u as ge,U as ye,C as Ce}from"./index.b2ab0f23.js";import{d as Se,s as Oe}from"./scroll.d4cf4dfc.js";import{E as xe}from"./aria.66f3f71c.js";import{i as we}from"./isEqual.060206f9.js";import{d as Ie}from"./debounce.86275fe6.js";import{C as Le}from"./index.1a0b45e9.js";import{i as ke}from"./validator.bcd39c35.js";const Te=le({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:ce,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Ee={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent};const Pe=ae(te(u(r(i({},{name:"ElTag"}),{props:Te,emits:Ee,setup(e,{emit:l}){const t=e,o=pe(),a=me("tag"),n=c((()=>{const{type:e,hit:l,effect:n,closable:s,round:i}=t;return[a.b(),a.is("closable",s),a.m(e),a.m(o.value),a.m(n),a.is("hit",l),a.is("round",i)]})),s=e=>{l("close",e)},i=e=>{l("click",e)};return(e,l)=>e.disableTransitions?(p(),d("span",{key:0,class:f(h(n)),style:O({backgroundColor:e.color}),onClick:i},[v("span",{class:f(h(a).e("content"))},[m(e.$slots,"default")],2),e.closable?(p(),b(h(oe),{key:0,class:f(h(a).e("close")),onClick:C(s,["stop"])},{default:g((()=>[y(h(se))])),_:1},8,["class","onClick"])):S("v-if",!0)],6)):(p(),b(x,{key:1,name:`${h(a).namespace.value}-zoom-in-center`,appear:""},{default:g((()=>[v("span",{class:f(h(n)),style:O({backgroundColor:e.color}),onClick:i},[v("span",{class:f(h(a).e("content"))},[m(e.$slots,"default")],2),e.closable?(p(),b(h(oe),{key:0,class:f(h(a).e("close")),onClick:C(s,["stop"])},{default:g((()=>[y(h(se))])),_:1},8,["class","onClick"])):S("v-if",!0)],6)])),_:3},8,["name"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));var Me=te(u({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=me("select"),t=T({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i}=function(e,l){const t=w("ElSelect"),o=w("ElSelectGroup",{disabled:!1}),a=c((()=>"[object object]"===Object.prototype.toString.call(e.value).toLowerCase())),n=c((()=>t.props.multiple?d(t.props.modelValue,e.value):v(e.value,t.props.modelValue))),s=c((()=>{if(t.props.multiple){const e=t.props.modelValue||[];return!n.value&&e.length>=t.props.multipleLimit&&t.props.multipleLimit>0}return!1})),i=c((()=>e.label||(a.value?"":e.value))),r=c((()=>e.value||e.label||"")),u=c((()=>e.disabled||l.groupDisabled||s.value)),p=k(),d=(e=[],l)=>{if(a.value){const o=t.props.valueKey;return e&&e.some((e=>fe(e,o)===fe(l,o)))}return e&&e.includes(l)},v=(e,l)=>{if(a.value){const{valueKey:o}=t.props;return fe(e,o)===fe(l,o)}return e===l};I((()=>i.value),(()=>{e.created||t.props.remote||t.setSelected()})),I((()=>e.value),((l,o)=>{const{remote:a,valueKey:n}=t.props;if(!e.created&&!a){if(n&&"object"==typeof l&&"object"==typeof o&&l[n]===o[n])return;t.setSelected()}})),I((()=>o.disabled),(()=>{l.groupDisabled=o.disabled}),{immediate:!0});const{queryChange:m}=L(t);return I(m,(o=>{const{query:a}=h(o),n=new RegExp(((e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"))(a),"i");l.visible=n.test(i.value)||e.created,l.visible||t.filteredOptionsCount--})),{select:t,currentLabel:i,currentValue:r,itemSelected:n,isDisabled:u,hoverItem:()=>{e.disabled||o.disabled||(t.hoverIndex=t.optionsArray.indexOf(p.proxy))}}}(e,t),{visible:r,hover:u}=E(t),p=k().proxy,d=p.value;return s.onOptionCreate(p),P((()=>{const{selected:e}=s,l=(s.props.multiple?e:[e]).some((e=>e.value===p.value));s.cachedOptions.get(d)!==p||l||M((()=>{s.cachedOptions.delete(d)})),s.onOptionDestroy(d,p)})),{ns:l,currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i,visible:r,hover:u,selectOptionClick:function(){!0!==e.disabled&&!0!==t.groupDisabled&&s.handleOptionSelect(p,!0)},states:t}}}),[["render",function(e,l,t,o,a,n){return V((p(),d("li",{class:f([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:l[1]||(l[1]=C(((...l)=>e.selectOptionClick&&e.selectOptionClick(...l)),["stop"]))},[m(e.$slots,"default",{},(()=>[v("span",null,z(e.currentLabel),1)]))],34)),[[B,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Ve=u({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=w("ElSelect"),l=me("select"),t=c((()=>e.props.popperClass)),o=c((()=>e.props.multiple)),a=c((()=>e.props.fitInputWidth)),n=D("");function s(){var l;n.value=`${null==(l=e.selectWrapper)?void 0:l.offsetWidth}px`}return q((()=>{s(),W(e.selectWrapper,s)})),{ns:l,minWidth:n,popperClass:t,isMultiple:o,isFitInputWidth:a}}});const Be=(e,l,t)=>{const{t:o}=ge(),a=me("select"),n=D(null),s=D(null),i=D(null),r=D(null),u=D(null),p=D(null),d=D(-1),v=j({query:""}),m=j(""),f=w(de,{}),h=w(ve,{}),b=c((()=>!e.filterable||e.multiple||!l.visible)),g=c((()=>e.disabled||f.disabled)),y=c((()=>{const t=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:void 0!==e.modelValue&&null!==e.modelValue&&""!==e.modelValue;return e.clearable&&!g.value&&l.inputHovering&&t})),C=c((()=>e.remote&&e.filterable?"":e.suffixIcon)),S=c((()=>a.is("reverse",C.value&&l.visible))),O=c((()=>e.remote?300:0)),x=c((()=>e.loading?e.loadingText||o("el.select.loading"):(!e.remote||""!==l.query||0!==l.options.size)&&(e.filterable&&l.query&&l.options.size>0&&0===l.filteredOptionsCount?e.noMatchText||o("el.select.noMatch"):0===l.options.size?e.noDataText||o("el.select.noData"):null))),L=c((()=>Array.from(l.options.values()))),k=c((()=>Array.from(l.cachedOptions.values()))),T=c((()=>{const t=L.value.filter((e=>!e.created)).some((e=>e.currentLabel===l.query));return e.filterable&&e.allowCreate&&""!==l.query&&!t})),E=pe(),P=c((()=>["small"].includes(E.value)?"small":"default")),V=c({get:()=>l.visible&&!1!==x.value,set(e){l.visible=e}});I([()=>g.value,()=>E.value,()=>f.size],(()=>{M((()=>{B()}))})),I((()=>e.placeholder),(e=>{l.cachedPlaceHolder=l.currentPlaceholder=e})),I((()=>e.modelValue),((t,o)=>{var a;e.multiple&&(B(),t&&t.length>0||s.value&&""!==l.query?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",z(l.query))),K(),e.filterable&&!e.multiple&&(l.inputLength=20),we(t,o)||null==(a=h.validate)||a.call(h,"change").catch((e=>Se()))}),{flush:"post",deep:!0}),I((()=>l.visible),(o=>{var a,n,r;o?(null==(n=null==(a=i.value)?void 0:a.updatePopper)||n.call(a),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?null==(r=s.value)||r.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),z(l.query),e.multiple||e.remote||(v.value.query="",F(v),F(m)))):(s.value&&s.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,H(),M((()=>{s.value&&""===s.value.value&&0===l.selected.length&&(l.currentPlaceholder=l.cachedPlaceHolder)})),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),t.emit("visible-change",o)})),I((()=>l.options.entries()),(()=>{var t,o,a;if(!A)return;null==(o=null==(t=i.value)?void 0:t.updatePopper)||o.call(t),e.multiple&&B();const n=(null==(a=u.value)?void 0:a.querySelectorAll("input"))||[];Array.from(n).includes(document.activeElement)||K(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&W()}),{flush:"post"}),I((()=>l.hoverIndex),(e=>{"number"==typeof e&&e>-1&&(d.value=L.value[e]||{}),L.value.forEach((e=>{e.hover=d.value===e}))}));const B=()=>{e.collapseTags&&!e.filterable||M((()=>{var e,t;if(!n.value)return;const o=n.value.$el.querySelector("input"),a=r.value,s=(u=E.value||f.size,ue[u||"default"]);var u;o.style.height=(0===l.selected.length?s:Math.max(a?a.clientHeight+(a.clientHeight>s?6:0):0,s))-2+"px",l.tagInMultiLine=Number.parseFloat(o.style.height)>=s,l.visible&&!1!==x.value&&(null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e))}))},z=t=>{l.previousQuery===t||l.isOnComposition||(null!==l.previousQuery||"function"!=typeof e.filterMethod&&"function"!=typeof e.remoteMethod?(l.previousQuery=t,M((()=>{var e,t;l.visible&&(null==(t=null==(e=i.value)?void 0:e.updatePopper)||t.call(e))})),l.hoverIndex=-1,e.multiple&&e.filterable&&M((()=>{const t=15*s.value.value.length+20;l.inputLength=e.collapseTags?Math.min(50,t):t,q(),B()})),e.remote&&"function"==typeof e.remoteMethod?(l.hoverIndex=-1,e.remoteMethod(t)):"function"==typeof e.filterMethod?(e.filterMethod(t),F(m)):(l.filteredOptionsCount=l.optionsCount,v.value.query=t,F(v),F(m)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&W()):l.previousQuery=t)},q=()=>{""!==l.currentPlaceholder&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},W=()=>{const e=L.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),t=e.find((e=>e.created)),o=e[0];l.hoverIndex=Y(L.value,t||o)},K=()=>{var t;if(!e.multiple){const o=_(e.modelValue);return(null==(t=o.props)?void 0:t.created)?(l.createdLabel=o.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=o.currentLabel,l.selected=o,void(e.filterable&&(l.query=l.selectedLabel))}l.selectedLabel="";const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach((e=>{o.push(_(e))})),l.selected=o,M((()=>{B()}))},_=t=>{let o;const a="object"===he(t).toLowerCase(),n="null"===he(t).toLowerCase(),s="undefined"===he(t).toLowerCase();for(let r=l.cachedOptions.size-1;r>=0;r--){const l=k.value[r];if(a?fe(l.value,e.valueKey)===fe(t,e.valueKey):l.value===t){o={value:t,currentLabel:l.currentLabel,isDisabled:l.isDisabled};break}}if(o)return o;const i={value:t,currentLabel:a?t.label:n||s?"":t};return e.multiple&&(i.hitState=!1),i},H=()=>{setTimeout((()=>{const t=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map((e=>L.value.findIndex((l=>fe(l,t)===fe(e,t)))))):l.hoverIndex=-1:l.hoverIndex=L.value.findIndex((e=>te(e)===te(l.selected)))}),300)},$=()=>{var e;l.inputWidth=null==(e=n.value)?void 0:e.$el.getBoundingClientRect().width},R=Ie((()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,z(l.query))}),O.value),Q=Ie((e=>{z(e.target.value)}),O.value),N=l=>{we(e.modelValue,l)||t.emit(Ce,l)},G=o=>{o.stopPropagation();const a=e.multiple?[]:"";if("string"!=typeof a)for(const e of l.selected)e.isDisabled&&a.push(e.value);t.emit(ye,a),N(a),l.visible=!1,t.emit("clear")},U=(o,a)=>{var n;if(e.multiple){const a=(e.modelValue||[]).slice(),i=Y(a,o.value);i>-1?a.splice(i,1):(e.multipleLimit<=0||a.length<e.multipleLimit)&&a.push(o.value),t.emit(ye,a),N(a),o.created&&(l.query="",z(""),l.inputLength=20),e.filterable&&(null==(n=s.value)||n.focus())}else t.emit(ye,o.value),N(o.value),l.visible=!1;l.isSilentBlur=a,J(),l.visible||M((()=>{Z(o)}))},Y=(l=[],t)=>{if(!be(t))return l.indexOf(t);const o=e.valueKey;let a=-1;return l.some(((e,l)=>fe(e,o)===fe(t,o)&&(a=l,!0))),a},J=()=>{l.softFocus=!0;const e=s.value||n.value;e&&(null==e||e.focus())},Z=e=>{var l,t,o,n,s;const r=Array.isArray(e)?e[0]:e;let u=null;if(null==r?void 0:r.value){const e=L.value.filter((e=>e.value===r.value));e.length>0&&(u=e[0].$el)}if(i.value&&u){const e=null==(n=null==(o=null==(t=null==(l=i.value)?void 0:l.popperRef)?void 0:t.contentRef)?void 0:o.querySelector)?void 0:n.call(o,`.${a.be("dropdown","wrap")}`);e&&Oe(e,u)}null==(s=p.value)||s.handleScroll()},ee=e=>{if(!Array.isArray(l.selected))return;const t=l.selected[l.selected.length-1];return t?!0===e||!1===e?(t.hitState=e,e):(t.hitState=!t.hitState,t.hitState):void 0},le=()=>{var t;e.automaticDropdown||g.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:l.visible=!l.visible,l.visible&&(null==(t=s.value||n.value)||t.focus()))},te=l=>be(l.value)?fe(l.value,e.valueKey):l.value,oe=c((()=>L.value.filter((e=>e.visible)).every((e=>e.disabled)))),ae=e=>{if(l.visible){if(0!==l.options.size&&0!==l.filteredOptionsCount&&!l.isOnComposition&&!oe.value){"next"===e?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):"prev"===e&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const t=L.value[l.hoverIndex];!0!==t.disabled&&!0!==t.states.groupDisabled&&t.visible||ae(e),M((()=>Z(d.value)))}}else l.visible=!0};return{optionsArray:L,selectSize:E,handleResize:()=>{var l,t;$(),null==(t=null==(l=i.value)?void 0:l.updatePopper)||t.call(l),e.multiple&&!e.filterable&&B()},debouncedOnInputChange:R,debouncedQueryChange:Q,deletePrevTag:o=>{if(o.target.value.length<=0&&!ee()){const l=e.modelValue.slice();l.pop(),t.emit(ye,l),N(l)}1===o.target.value.length&&0===e.modelValue.length&&(l.currentPlaceholder=l.cachedPlaceHolder)},deleteTag:(o,a)=>{const n=l.selected.indexOf(a);if(n>-1&&!g.value){const l=e.modelValue.slice();l.splice(n,1),t.emit(ye,l),N(l),t.emit("remove-tag",a.value)}o.stopPropagation()},deleteSelected:G,handleOptionSelect:U,scrollToOption:Z,readonly:b,resetInputHeight:B,showClose:y,iconComponent:C,iconReverse:S,showNewOption:T,collapseTagSize:P,setSelected:K,managePlaceholder:q,selectDisabled:g,emptyText:x,toggleLastOptionHitState:ee,resetInputState:e=>{e.code!==xe.backspace&&ee(!1),l.inputLength=15*s.value.value.length+20,B()},handleComposition:e=>{const t=e.target.value;if("compositionend"===e.type)l.isOnComposition=!1,M((()=>z(t)));else{const e=t[t.length-1]||"";l.isOnComposition=!X(e)}},onOptionCreate:e=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(e.value,e),l.cachedOptions.set(e.value,e)},onOptionDestroy:(e,t)=>{l.options.get(e)===t&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(e))},handleMenuEnter:()=>{M((()=>Z(l.selected)))},handleFocus:o=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),t.emit("focus",o))},blur:()=>{var e;l.visible=!1,null==(e=n.value)||e.blur()},handleBlur:e=>{M((()=>{l.isSilentBlur?l.isSilentBlur=!1:t.emit("blur",e)})),l.softFocus=!1},handleClearClick:e=>{G(e)},handleClose:()=>{l.visible=!1},handleKeydownEscape:e=>{l.visible&&(e.preventDefault(),e.stopPropagation(),l.visible=!1)},toggleMenu:le,selectOption:()=>{l.visible?L.value[l.hoverIndex]&&U(L.value[l.hoverIndex],void 0):le()},getValueKey:te,navigateOptions:ae,dropMenuVisible:V,queryChange:v,groupQueryChange:m,reference:n,input:s,tooltipRef:i,tags:r,selectWrapper:u,scrollbar:p}},ze=u({name:"ElSelect",componentName:"ElSelect",components:{ElInput:Y,ElSelectMenu:te(Ve,[["render",function(e,l,t,o,a,n){return p(),d("div",{class:f([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:O({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[m(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]),ElOption:Me,ElTag:Pe,ElScrollbar:ee,ElTooltip:J,ElIcon:oe},directives:{ClickOutside:Le},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:ke},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Z.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:ie},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:re},tagType:r(i({},Te.type),{default:"info"})},emits:[ye,Ce,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const t=me("select"),o=me("input"),{t:a}=ge(),n=function(e){const{t:l}=ge();return T({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}(e),{optionsArray:s,selectSize:i,readonly:r,handleResize:u,collapseTagSize:p,debouncedOnInputChange:d,debouncedQueryChange:v,deletePrevTag:m,deleteTag:f,deleteSelected:b,handleOptionSelect:g,scrollToOption:y,setSelected:C,resetInputHeight:S,managePlaceholder:O,showClose:x,selectDisabled:w,iconComponent:I,iconReverse:L,showNewOption:k,emptyText:P,toggleLastOptionHitState:V,resetInputState:B,handleComposition:z,onOptionCreate:D,onOptionDestroy:j,handleMenuEnter:F,handleFocus:A,blur:_,handleBlur:H,handleClearClick:$,handleClose:R,handleKeydownEscape:Q,toggleMenu:N,selectOption:G,getValueKey:U,navigateOptions:X,dropMenuVisible:Y,reference:J,input:Z,tooltipRef:ee,tags:le,selectWrapper:te,scrollbar:oe,queryChange:ae,groupQueryChange:ne}=Be(e,n,l),{focus:se}=(ie=J,{focus:()=>{var e,l;null==(l=null==(e=ie.value)?void 0:e.focus)||l.call(e)}});var ie;const{inputWidth:re,selected:ue,inputLength:ce,filteredOptionsCount:pe,visible:de,softFocus:ve,selectedLabel:fe,hoverIndex:he,query:be,inputHovering:Ce,currentPlaceholder:Se,menuVisibleOnFocus:Oe,isOnComposition:xe,isSilentBlur:we,options:Ie,cachedOptions:Le,optionsCount:ke,prefixWidth:Te,tagInMultiLine:Ee}=E(n),Pe=c((()=>{const l=[t.b()],o=h(i);return o&&l.push(t.m(o)),e.disabled&&l.push(t.m("disabled")),l})),Me=c((()=>({maxWidth:h(re)-32+"px",width:"100%"})));K("ElSelect",T({props:e,options:Ie,optionsArray:s,cachedOptions:Le,optionsCount:ke,filteredOptionsCount:pe,hoverIndex:he,handleOptionSelect:g,onOptionCreate:D,onOptionDestroy:j,selectWrapper:te,selected:ue,setSelected:C,queryChange:ae,groupQueryChange:ne})),q((()=>{n.cachedPlaceHolder=Se.value=e.placeholder||a("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Se.value=""),W(te,u),e.remote&&e.multiple&&S(),M((()=>{const e=J.value&&J.value.$el;if(e&&(re.value=e.getBoundingClientRect().width,l.slots.prefix)){const l=e.querySelector(`.${o.e("prefix")}`);Te.value=Math.max(l.getBoundingClientRect().width+5,30)}})),C()})),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(ye,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(ye,"");const Ve=c((()=>{var e,l;return null==(l=null==(e=ee.value)?void 0:e.popperRef)?void 0:l.contentRef}));return{tagInMultiLine:Ee,prefixWidth:Te,selectSize:i,readonly:r,handleResize:u,collapseTagSize:p,debouncedOnInputChange:d,debouncedQueryChange:v,deletePrevTag:m,deleteTag:f,deleteSelected:b,handleOptionSelect:g,scrollToOption:y,inputWidth:re,selected:ue,inputLength:ce,filteredOptionsCount:pe,visible:de,softFocus:ve,selectedLabel:fe,hoverIndex:he,query:be,inputHovering:Ce,currentPlaceholder:Se,menuVisibleOnFocus:Oe,isOnComposition:xe,isSilentBlur:we,options:Ie,resetInputHeight:S,managePlaceholder:O,showClose:x,selectDisabled:w,iconComponent:I,iconReverse:L,showNewOption:k,emptyText:P,toggleLastOptionHitState:V,resetInputState:B,handleComposition:z,handleMenuEnter:F,handleFocus:A,blur:_,handleBlur:H,handleClearClick:$,handleClose:R,handleKeydownEscape:Q,toggleMenu:N,selectOption:G,getValueKey:U,navigateOptions:X,dropMenuVisible:Y,focus:se,reference:J,input:Z,tooltipRef:ee,popperPaneRef:Ve,tags:le,selectWrapper:te,scrollbar:oe,wrapperKls:Pe,selectTagsStyle:Me,nsSelect:t}}}),De={class:"select-trigger"},qe=["disabled","autocomplete"],We={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var je=te(ze,[["render",function(e,l,t,o,a,n){const s=_("el-tag"),i=_("el-tooltip"),r=_("el-icon"),u=_("el-input"),c=_("el-option"),h=_("el-scrollbar"),w=_("el-select-menu"),I=H("click-outside");return V((p(),d("div",{ref:"selectWrapper",class:f(e.wrapperKls),onClick:l[23]||(l[23]=C(((...l)=>e.toggleMenu&&e.toggleMenu(...l)),["stop"]))},[y(i,{ref:"tooltipRef",visible:e.dropMenuVisible,"onUpdate:visible":l[22]||(l[22]=l=>e.dropMenuVisible=l),placement:"bottom-start",teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:g((()=>[v("div",De,[e.multiple?(p(),d("div",{key:0,ref:"tags",class:f(e.nsSelect.e("tags")),style:O(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(p(),d("span",{key:0,class:f([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[y(s,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=l=>e.deleteTag(l,e.selected[0]))},{default:g((()=>[v("span",{class:f(e.nsSelect.e("tags-text")),style:O({maxWidth:e.inputWidth-123+"px"})},z(e.selected[0].currentLabel),7)])),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(p(),b(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:g((()=>[e.collapseTagsTooltip?(p(),b(i,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:!1},{default:g((()=>[v("span",{class:f(e.nsSelect.e("tags-text"))},"+ "+z(e.selected.length-1),3)])),content:g((()=>[v("div",{class:f(e.nsSelect.e("collapse-tags"))},[(p(!0),d($,null,R(e.selected.slice(1),((l,t)=>(p(),d("div",{key:t,class:f(e.nsSelect.e("collapse-tag"))},[(p(),b(s,{key:e.getValueKey(l),class:"in-tooltip",closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:t=>e.deleteTag(t,l)},{default:g((()=>[v("span",{class:f(e.nsSelect.e("tags-text")),style:O({maxWidth:e.inputWidth-75+"px"})},z(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"]))],2)))),128))],2)])),_:1},8,["disabled","effect"])):(p(),d("span",{key:1,class:f(e.nsSelect.e("tags-text"))},"+ "+z(e.selected.length-1),3))])),_:1},8,["size","type"])):S("v-if",!0)],2)):S("v-if",!0),S(" <div> "),e.collapseTags?S("v-if",!0):(p(),b(x,{key:1,onAfterLeave:e.resetInputHeight},{default:g((()=>[v("span",{class:f([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(p(!0),d($,null,R(e.selected,(l=>(p(),b(s,{key:e.getValueKey(l),closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:g((()=>[v("span",{class:f(e.nsSelect.e("tags-text")),style:O({maxWidth:e.inputWidth-75+"px"})},z(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],2)])),_:1},8,["onAfterLeave"])),S(" </div> "),e.filterable?V((p(),d("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=l=>e.query=l),type:"text",class:f([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:O({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:e.inputLength/(e.inputWidth-32)+"%",maxWidth:e.inputWidth-42+"px"}),onFocus:l[2]||(l[2]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onBlur:l[3]||(l[3]=(...l)=>e.handleBlur&&e.handleBlur(...l)),onKeyup:l[4]||(l[4]=(...l)=>e.managePlaceholder&&e.managePlaceholder(...l)),onKeydown:[l[5]||(l[5]=(...l)=>e.resetInputState&&e.resetInputState(...l)),l[6]||(l[6]=Q(C((l=>e.navigateOptions("next")),["prevent"]),["down"])),l[7]||(l[7]=Q(C((l=>e.navigateOptions("prev")),["prevent"]),["up"])),l[8]||(l[8]=Q(((...l)=>e.handleKeydownEscape&&e.handleKeydownEscape(...l)),["esc"])),l[9]||(l[9]=Q(C(((...l)=>e.selectOption&&e.selectOption(...l)),["stop","prevent"]),["enter"])),l[10]||(l[10]=Q(((...l)=>e.deletePrevTag&&e.deletePrevTag(...l)),["delete"])),l[11]||(l[11]=Q((l=>e.visible=!1),["tab"]))],onCompositionstart:l[12]||(l[12]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionupdate:l[13]||(l[13]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionend:l[14]||(l[14]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onInput:l[15]||(l[15]=(...l)=>e.debouncedQueryChange&&e.debouncedQueryChange(...l))},null,46,qe)),[[N,e.query]]):S("v-if",!0)],6)):S("v-if",!0),y(u,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=l=>e.selectedLabel=l),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:f([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=Q(C((l=>e.navigateOptions("next")),["stop","prevent"]),["down"])),l[18]||(l[18]=Q(C((l=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),Q(C(e.selectOption,["stop","prevent"]),["enter"]),Q(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=Q((l=>e.visible=!1),["tab"]))],onMouseenter:l[20]||(l[20]=l=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=l=>e.inputHovering=!1)},G({suffix:g((()=>[e.iconComponent&&!e.showClose?(p(),b(r,{key:0,class:f([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:g((()=>[(p(),b(U(e.iconComponent)))])),_:1},8,["class"])):S("v-if",!0),e.showClose&&e.clearIcon?(p(),b(r,{key:1,class:f([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:g((()=>[(p(),b(U(e.clearIcon)))])),_:1},8,["class","onClick"])):S("v-if",!0)])),_:2},[e.$slots.prefix?{name:"prefix",fn:g((()=>[v("div",We,[m(e.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])])),content:g((()=>[y(w,null,{default:g((()=>[V(y(h,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:f([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&0===e.filteredOptionsCount)])},{default:g((()=>[e.showNewOption?(p(),b(c,{key:0,value:e.query,created:!0},null,8,["value"])):S("v-if",!0),m(e.$slots,"default")])),_:3},8,["wrap-class","view-class","class"]),[[B,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.size)?(p(),d($,{key:0},[e.$slots.empty?m(e.$slots,"empty",{key:0}):(p(),d("p",{key:1,class:f(e.nsSelect.be("dropdown","empty"))},z(e.emptyText),3))],64)):S("v-if",!0)])),_:3})])),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[I,e.handleClose,e.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var Fe=te(u({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=me("select"),t=D(!0),o=k(),a=D([]);K("ElSelectGroup",T(i({},E(e))));const n=w("ElSelect");q((()=>{a.value=s(o.subTree)}));const s=e=>{const l=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var t;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?l.push(e.component.proxy):(null==(t=e.children)?void 0:t.length)&&l.push(...s(e))})),l},{groupQueryChange:r}=L(n);return I(r,(()=>{t.value=a.value.some((e=>!0===e.visible))})),{visible:t,ns:l}}}),[["render",function(e,l,t,o,a,n){return V((p(),d("ul",{class:f(e.ns.be("group","wrap"))},[v("li",{class:f(e.ns.be("group","title"))},z(e.label),3),v("li",null,[v("ul",{class:f(e.ns.b("group"))},[m(e.$slots,"default")],2)])],2)),[[B,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Ae=ae(je,{Option:Me,OptionGroup:Fe}),Ke=ne(Me);ne(Fe);export{Ae as E,Ke as a};