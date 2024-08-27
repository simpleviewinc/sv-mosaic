import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{B as G}from"./Button-DtrbI49b.js";import{s as T,t as h}from"./theme-D4oZEIDo.js";import{g as y,a as b,s as g,d as t,u as M,_ as $,e as m,f as S,b as d}from"./generateUtilityClasses-BPeOZGYv.js";import{r as u}from"./index-BP8_t0zE.js";import{B as J,M as Q,P as N,u as Z,F as oo}from"./Popper-XtJavzF_.js";import{u as eo}from"./useId-DLncWxdO.js";function io(o){return y("MuiDialogActions",o)}b("MuiDialogActions",["root","spacing"]);const ao=["className","disableSpacing"],to=o=>{const{classes:e,disableSpacing:i}=o;return S({root:["root",!i&&"spacing"]},io,e)},so=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:i}=o;return[e.root,!i.disableSpacing&&e.spacing]}})(({ownerState:o})=>t({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),ro=u.forwardRef(function(e,i){const a=M({props:e,name:"MuiDialogActions"}),{className:s,disableSpacing:n=!1}=a,l=$(a,ao),c=t({},a,{disableSpacing:n}),x=to(c);return r.jsx(so,t({className:m(x.root,s),ownerState:c,ref:i},l))});function no(o){return y("MuiDialogContent",o)}b("MuiDialogContent",["root","dividers"]);const lo=b("MuiDialogTitle",["root"]),co=["className","dividers"],po=o=>{const{classes:e,dividers:i}=o;return S({root:["root",i&&"dividers"]},no,e)},uo=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:i}=o;return[e.root,i.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>t({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${lo.root} + &`]:{paddingTop:0}})),go=u.forwardRef(function(e,i){const a=M({props:e,name:"MuiDialogContent"}),{className:s,dividers:n=!1}=a,l=$(a,co),c=t({},a,{dividers:n}),x=po(c);return r.jsx(uo,t({className:m(x.root,s),ownerState:c,ref:i},l))});function xo(o){return y("MuiDialog",o)}const W=b("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),mo=u.createContext({}),fo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ho=g(J,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),bo=o=>{const{classes:e,scroll:i,maxWidth:a,fullWidth:s,fullScreen:n}=o,l={root:["root"],container:["container",`scroll${d(i)}`],paper:["paper",`paperScroll${d(i)}`,`paperWidth${d(String(a))}`,s&&"paperFullWidth",n&&"paperFullScreen"]};return S(l,xo,e)},Do=g(Q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),Co=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:i}=o;return[e.container,e[`scroll${d(i.scroll)}`]]}})(({ownerState:o})=>t({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),vo=g(N,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:i}=o;return[e.paper,e[`scrollPaper${d(i.scroll)}`],e[`paperWidth${d(String(i.maxWidth))}`],i.fullWidth&&e.paperFullWidth,i.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>t({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${W.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${W.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),ko=u.forwardRef(function(e,i){const a=M({props:e,name:"MuiDialog"}),s=Z(),n={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":c,BackdropComponent:x,BackdropProps:F,children:U,className:_,disableEscapeKeyDown:P=!1,fullScreen:I=!1,fullWidth:L=!1,maxWidth:z="sm",onBackdropClick:B,onClick:w,onClose:D,open:j,PaperComponent:E=N,PaperProps:R={},scroll:Y="paper",TransitionComponent:X=oo,transitionDuration:A=n,TransitionProps:H}=a,K=$(a,fo),f=t({},a,{disableEscapeKeyDown:P,fullScreen:I,fullWidth:L,maxWidth:z,scroll:Y}),C=bo(f),v=u.useRef(),O=p=>{v.current=p.target===p.currentTarget},V=p=>{w&&w(p),v.current&&(v.current=null,B&&B(p),D&&D(p,"backdropClick"))},k=eo(c),q=u.useMemo(()=>({titleId:k}),[k]);return r.jsx(Do,t({className:m(C.root,_),closeAfterTransition:!0,components:{Backdrop:ho},componentsProps:{backdrop:t({transitionDuration:A,as:x},F)},disableEscapeKeyDown:P,onClose:D,open:j,ref:i,onClick:V,ownerState:f},K,{children:r.jsx(X,t({appear:!0,in:j,timeout:A,role:"presentation"},H,{children:r.jsx(Co,{className:m(C.container),onMouseDown:O,ownerState:f,children:r.jsx(vo,t({as:E,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":k},R,{className:m(C.paper,R.className),ownerState:f,children:r.jsx(mo.Provider,{value:q,children:U})}))})}))}))}),Wo=T(ko)`
z-index: 99999 !important;
  font-family: ${h.fontFamily};

  .MuiDialogContent-root {
    border-bottom: 2px solid ${h.newColors.grey2[100]};
  }

  .MuiPaper-rounded {
    border-radius: 0;
  }

  .MuiDialogContent-root {
    padding: 0px 30px 40px 30px;
  }

  .MuiDialogActions-root {
    padding: 20px 20px;
  }

  .MuiDialogActions-spacing > :not(:first-child) {
    margin-left: 20px;
  }
`,yo=T.div`
  color: ${h.newColors.almostBlack[100]};
  font-size: 20px;
  font-weight: ${h.fontWeight.medium};
  padding: 40px 30px 24px 30px;
`,Ro=o=>{const{children:e,dialogTitle:i,open:a,buttons:s}=o;return r.jsxs(Wo,{open:a,children:[r.jsx(yo,{children:i}),r.jsx(go,{children:e}),r.jsx(ro,{children:s==null?void 0:s.map((n,l)=>r.jsx(G,{...n},`${n.label}-${l}`))})]})};export{Ro as D,ro as a,ko as b,go as c,W as d};
