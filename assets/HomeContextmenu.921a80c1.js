import{u as e,o as a,$ as t,a as l,c as n,f as s,d as r,g as i}from"./main.5f87c81f.js";import{d as o}from"./index.e4e38f05.js";import{dz as p,k as c,c6 as m,r as u,al as d,c7 as f,cq as w,aw as h,ay as y,U as g,x as k}from"./save_config.7e387697.js";import{r as v}from"./wallpaper.67353579.js";import{c as b}from"./create_login.823c0dbe.js";import{i as j}from"./wallpaperDb.a302f175.js";import"./el-overlay.e22515de.js";import"./el-input.07836306.js";import"./el-form-item.9774cccc.js";import"./_baseClone.36822d61.js";import"./_baseIsEqual.840160ed.js";import"./isEqual.8b269055.js";import"./el-radio.2ecd3578.js";const x={setup(x){var _=p.createInstance({name:"wallpaper"});const C=c(null),D=m(),{t:I}=e(),M=u({contextmenuData:[{name:I("addIcon"),key:"add",icon:"plus"},{name:I("changeWallpaper"),key:"switchWallpaper",icon:"switch"},{name:I("downWallpaper"),key:"download",icon:"download",group:!0},{name:I("setting"),key:"setting",icon:"setting"},{name:"立即备份",key:"backups",icon:"cloudy"},{name:"本地搜索",key:"search",icon:"search"}]});d((()=>{a(t("#app-main"),"contextmenu",T)}));let W=D.value.wallpaper.time;if(W){let e=f.get("wallpaperSwitchTime"),a=(new Date).getTime();e+=36e5*W,e<a&&(q(),f.set("wallpaperSwitchTime",a))}async function q(){try{let e=await j.keys();e=e.filter((e=>e.includes("bing_")||e.includes("unsplash_")||e.includes("birdpaper_")));let a=e[Math.floor(Math.random()*e.length)],t=await _.getItem(a);t=t.data||[];let l=t[Math.floor(Math.random()*t.length)];D.value.wallpaper.src=l.raw,D.value.wallpaper.thumb=l.thumb,D.value.wallpaper.type=1,w("baseConfig")}catch(e){v().then((e=>{let a=e.data||"";D.value.wallpaper.src=a,D.value.wallpaper.thumb="",D.value.wallpaper.type=1,w("baseConfig")}))}}function T(e){e.preventDefault(),e.stopPropagation(),C.value.open(e)}function E(e){if("add"==e.key)s();else if("switchWallpaper"==e.key)q();else if("download"==e.key){let e=D.value.wallpaper;if(!e.src)return;o(e.src,e.name)}else if("setting"==e.key)r.visible=!0,r.active=2;else if("backups"==e.key){if(!f.get("token"))return void b("login");w(null,100,"manua")}else"search"==e.key&&(i.value=!0)}return h((()=>{l(t("#app-main"),"contextmenu",T)})),(e,a)=>(y(),g(n,{uid:"home_5dwx",data:k(M).contextmenuData,onClick:E,ref_key:"refContextmenu",ref:C},null,8,["data"]))}};export{x as default};