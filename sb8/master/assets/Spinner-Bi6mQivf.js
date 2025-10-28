import{r as j,R as z}from"./index-ePW8zFKp.js";import{t as E}from"./sizes-1ZdlMWGC.js";import{_ as U,a as o,b as c}from"./identifier-vWKndVvV.js";import{g as w,a as I,u as F,s as v,c as K,b as W,d as D,k as R}from"./generateUtilityClasses-CUUJXLh7.js";import{j as h}from"./jsx-runtime-EKYJJIwR.js";function B(r){return w("MuiCircularProgress",r)}I("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const G=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,$;const t=44,L=R(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),V=R(S||(S=l`
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
`)),Z=r=>{const{classes:e,variant:s,color:a,disableShrink:d}=r,m={root:["root",s,`color${c(a)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,d&&"circleDisableShrink"]};return W(m,B,e)},q=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&D(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),L)),A=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),H=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&D($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),V)),J=j.forwardRef(function(e,s){const a=F({props:e,name:"MuiCircularProgress"}),{className:d,color:m="primary",disableShrink:_=!1,size:u=40,style:M,thickness:i=3.6,value:f=0,variant:k="indeterminate"}=a,N=U(a,G),n=o({},a,{color:m,disableShrink:_,size:u,thickness:i,value:f,variant:k}),p=Z(n),g={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);g.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(f),g.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return h.jsx(q,o({className:K(p.root,d),style:o({width:u,height:u},x,M),ownerState:n,ref:s,role:"progressbar"},y,N,{children:h.jsx(A,{className:p.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:h.jsx(H,{className:p.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});function rr(r){var e;return z.createElement(J,{style:{color:E.color.gray[500]},size:30,className:r.className,value:(e=r.progress)!==null&&e!==void 0?e:void 0,variant:r.progress>=0&&r.progress<=100?"determinate":"indeterminate","data-testid":"spinner-test-id"})}export{rr as S};
