import{j as c}from"./jsx-runtime-nGUw9YhZ.js";import{t as N}from"./theme-DRtZtbPc.js";import{g as w,a as z,k as D,s as v,b as l,d as o,h as _,u as U,_ as E,e as I,f as F}from"./generateUtilityClasses-DAcHHM0W.js";import{r as K}from"./index-BP8_t0zE.js";function W(r){return w("MuiCircularProgress",r)}z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const B=["className","color","disableShrink","size","style","thickness","value","variant"];let d=r=>r,P,S,b,$;const t=44,G=D(P||(P=d`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),L=D(S||(S=d`
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
`)),T=r=>{const{classes:e,variant:s,color:a,disableShrink:m}=r,u={root:["root",s,`color${l(a)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,m&&"circleDisableShrink"]};return F(u,W,e)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${l(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&_(b||(b=d`
      animation: ${0} 1.4s linear infinite;
    `),G)),Z=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),q=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${l(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&_($||($=d`
      animation: ${0} 1.4s ease-in-out infinite;
    `),L)),A=K.forwardRef(function(e,s){const a=U({props:e,name:"MuiCircularProgress"}),{className:m,color:u="primary",disableShrink:M=!1,size:f=40,style:R,thickness:i=3.6,value:p=0,variant:k="indeterminate"}=a,j=E(a,B),n=o({},a,{color:u,disableShrink:M,size:f,thickness:i,value:p,variant:k}),h=T(n),g={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);g.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(p),g.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return c.jsx(V,o({className:I(h.root,m),style:o({width:f,height:f},x,R),ownerState:n,ref:s,role:"progressbar"},y,j,{children:c.jsx(Z,{className:h.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:c.jsx(q,{className:h.circle,style:g,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});function X(r){return c.jsx(A,{style:{color:N.newColors.realTeal[100]},size:30,className:r.className,value:r.progress??void 0,variant:r.progress>=0&&r.progress<=100?"determinate":"indeterminate","data-testid":"spinner-test-id"})}export{X as S};
