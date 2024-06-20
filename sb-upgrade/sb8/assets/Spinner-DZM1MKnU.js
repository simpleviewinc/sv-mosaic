import{j as c}from"./jsx-runtime-qGIIFXMu.js";import{t as j}from"./theme-tUuL1bpb.js";import{g as w,a as z,s as v,c as l,b as o,u as I,_ as T,d as U,e as E}from"./useThemeProps-DZj2lB8w.js";import{r as q}from"./index-CDs2tPxN.js";import{k as $,c as D}from"./emotion-react.browser.esm-DWdb6uBJ.js";function F(r){return w("MuiCircularProgress",r)}z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const K=["className","color","disableShrink","size","style","thickness","value","variant"];let d=r=>r,P,S,b,_;const t=44,W=$(P||(P=d`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),B=$(S||(S=d`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),G=r=>{const{classes:e,variant:s,color:a,disableShrink:m}=r,u={root:["root",s,`color${l(a)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,m&&"circleDisableShrink"]};return E(u,F,e)},L=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${l(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(b||(b=d`
      animation: ${0} 1.4s linear infinite;
    `),W)),V=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${l(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D(_||(_=d`
      animation: ${0} 1.4s ease-in-out infinite;
    `),B)),A=q.forwardRef(function(e,s){const a=I({props:e,name:"MuiCircularProgress"}),{className:m,color:u="primary",disableShrink:N=!1,size:p=40,style:M,thickness:i=3.6,value:f=0,variant:k="indeterminate"}=a,R=T(a,K),n=o({},a,{color:u,disableShrink:N,size:p,thickness:i,value:f,variant:k}),g=G(n),h={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);h.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(f),h.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return c.jsx(L,o({className:U(g.root,m),style:o({width:p,height:p},x,M),ownerState:n,ref:s,role:"progressbar"},y,R,{children:c.jsx(V,{className:g.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:c.jsx(Z,{className:g.circle,style:h,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});function H(r){return c.jsx(A,{style:{color:j.newColors.realTeal[100]},size:30,className:r.className,value:r.progress??void 0,variant:r.progress>=0&&r.progress<=100?"determinate":"indeterminate","data-testid":"spinner-test-id"})}H.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{className:{required:!1,tsType:{name:"string"},description:""},progress:{required:!1,tsType:{name:"number"},description:""}}};export{H as S};
