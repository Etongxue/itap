import{u as t,i as a,a as e,b as o,U as s}from"./install.4ea7e57f.js";import{i as r,a as i,b as l,c as n,d as p}from"./install.fe8fd325.js";import{Q as d,ay as c,U as y,x as m}from"./todo.9d8ad3e1.js";const h={__name:"Trends",props:{data:{type:Array,default:[]}},setup(h){const u=h;function b(t,a){return t.values.map((t=>t[a]))}t([a,e,o,r,i,l,n,p]);const f=d((()=>{let t=function(t){const a=[],e=[];return t.forEach((t=>{let o=t.split(",");o[0].split(" ")[1]<"15:31"&&(a.push(o[0].split(" ")[1]),e.push(o))})),{categoryData:a,values:e}}(u.data);return{backgroundColor:"transparent",color:["#0098fa","#f58e36"],title:{text:"",left:0},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{data:["最新","均价"]},grid:{top:36,left:0,right:10,bottom:40,containLabel:!0},xAxis:{type:"category",data:t.categoryData,scale:!0,boundaryGap:!1,axisLine:{onZero:!1},splitLine:{show:!1},min:"dataMin",max:"dataMax"},yAxis:{scale:!0,splitLine:{lineStyle:{color:"rgba(100,100,100,.1)"}}},dataZoom:[{type:"inside",show:!0,height:20,bottom:10,borderColor:"rgba(100,100,100,.5)",start:50,end:100},{show:!0,type:"slider",height:20,bottom:10,borderColor:"rgba(100,100,100,.5)",start:50,end:100}],series:[{name:"最新",type:"line",data:b(t,1),smooth:!0,showSymbol:!1,areaStyle:{opacity:.2},lineStyle:{width:1,opacity:.8}},{name:"均价",type:"line",data:b(t,3),smooth:!0,showSymbol:!1,lineStyle:{width:1,opacity:.8}}]}}));return(t,a)=>(c(),y(m(s),{autoresize:"",theme:"dark",class:"chart",option:m(f)},null,8,["option"]))}};export{h as default};