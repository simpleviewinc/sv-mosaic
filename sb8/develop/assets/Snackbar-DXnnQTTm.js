import{r as s}from"./index-D0AnReJb.js";import{s as C}from"./styled-components.browser.esm-B06rF3P8.js";import{C as J}from"./Close-CGtmtFuS.js";import{t as h}from"./sizes-HwDk6ODv.js";import{a as u,_ as L,d as Q,b as k}from"./DefaultPropsProvider-BwNoCFE_.js";import{c as V,a as B}from"./useIsFocusVisible-CvEUtp4E.js";import{e as T,P as Y,u as Z,b as oo}from"./Popper-BpP7Dmyd.js";import{g as I,a as j,u as D,s as v,c as eo,b as A}from"./generateUtilityClasses-42_at76R.js";import{j as x}from"./jsx-runtime-EKYJJIwR.js";import{G as to,B as no,I as ro}from"./Button-mgz2aTYm.js";import{C as ao}from"./ClickAwayListener-Dkkr5f_-.js";function so(e={}){const{autoHideDuration:o=null,disableWindowBlurListener:r=!1,onClose:a,open:i,resumeHideDuration:p}=e,m=V();s.useEffect(()=>{if(!i)return;function t(n){n.defaultPrevented||(n.key==="Escape"||n.key==="Esc")&&(a==null||a(n,"escapeKeyDown"))}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[i,a]);const g=B((t,n)=>{a==null||a(t,n)}),c=B(t=>{!a||t==null||m.start(t,()=>{g(null,"timeout")})});s.useEffect(()=>(i&&c(o),m.clear),[i,o,c,m]);const f=t=>{a==null||a(t,"clickaway")},d=m.clear,b=s.useCallback(()=>{o!=null&&c(p??o*.5)},[o,p,c]),S=t=>n=>{const l=t.onBlur;l==null||l(n),b()},E=t=>n=>{const l=t.onFocus;l==null||l(n),d()},w=t=>n=>{const l=t.onMouseEnter;l==null||l(n),d()},y=t=>n=>{const l=t.onMouseLeave;l==null||l(n),b()};return s.useEffect(()=>{if(!r&&i)return window.addEventListener("focus",b),window.addEventListener("blur",d),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",d)}},[r,i,b,d]),{getRootProps:(t={})=>{const n=u({},T(e),T(t));return u({role:"presentation"},t,n,{onBlur:S(n),onFocus:E(n),onMouseEnter:w(n),onMouseLeave:y(n)})},onClickAway:f}}function io(e){return I("MuiSnackbarContent",e)}j("MuiSnackbarContent",["root","message","action"]);const lo=["action","className","message","role"],co=e=>{const{classes:o}=e;return A({root:["root"],action:["action"],message:["message"]},io,o)},uo=v(Y,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>{const o=e.palette.mode==="light"?.8:.98,r=Q.emphasize(e.palette.background.default,o);return u({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(r),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),po=v("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0"}),mo=v("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),go=s.forwardRef(function(o,r){const a=D({props:o,name:"MuiSnackbarContent"}),{action:i,className:p,message:m,role:g="alert"}=a,c=L(a,lo),f=a,d=co(f);return x.jsxs(uo,u({role:g,square:!0,elevation:6,className:eo(d.root,p),ownerState:f,ref:r},c,{children:[x.jsx(po,{className:d.message,ownerState:f,children:m}),i?x.jsx(mo,{className:d.action,ownerState:f,children:i}):null]}))});function fo(e){return I("MuiSnackbar",e)}j("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const bo=["onEnter","onExited"],ho=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],xo=e=>{const{classes:o,anchorOrigin:r}=e,a={root:["root",`anchorOrigin${k(r.vertical)}${k(r.horizontal)}`]};return A(a,fo,o)},$=v("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`anchorOrigin${k(r.anchorOrigin.vertical)}${k(r.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:o})=>{const r={left:"50%",right:"auto",transform:"translateX(-50%)"};return u({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},o.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},o.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},o.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:u({},o.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},o.anchorOrigin.horizontal==="center"&&r,o.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},o.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Co=s.forwardRef(function(o,r){const a=D({props:o,name:"MuiSnackbar"}),i=Z(),p={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:m,anchorOrigin:{vertical:g,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:f=null,children:d,className:b,ClickAwayListenerProps:S,ContentProps:E,disableWindowBlurListener:w=!1,message:y,open:M,TransitionComponent:t=to,transitionDuration:n=p,TransitionProps:{onEnter:l,onExited:P}={}}=a,H=L(a.TransitionProps,bo),W=L(a,ho),O=u({},a,{anchorOrigin:{vertical:g,horizontal:c},autoHideDuration:f,disableWindowBlurListener:w,TransitionComponent:t,transitionDuration:n}),N=xo(O),{getRootProps:F,onClickAway:U}=so(u({},O)),[_,z]=s.useState(!0),G=oo({elementType:$,getSlotProps:F,externalForwardedProps:W,ownerState:O,additionalProps:{ref:r},className:[N.root,b]}),K=R=>{z(!0),P&&P(R)},q=(R,X)=>{z(!1),l&&l(R,X)};return!M&&_?null:x.jsx(ao,u({onClickAway:U},S,{children:x.jsx($,u({},G,{children:x.jsx(t,u({appear:!0,in:M,timeout:n,direction:g==="top"?"down":"up",onEnter:q,onExited:K},H,{children:d||x.jsx(go,u({message:y,action:m},E))}))}))}))}),ko=C(Co)`
  .MuiIconButton-root {
    height: 24px;
    width: 24px;
  }

  &.MuiSnackbar-anchorOriginBottomRight {
    bottom: 10px;
  }

  &.MuiSnackbar-root {
    left: 10px;
    right: 10px;
  }

  @media (min-width: ${h.breakpoints.mobile}) {
    &.MuiSnackbar-anchorOriginBottomRight {
      bottom: 40px;
      left: auto;
      right: 40px;
    }
  }
`,vo=C.div`
  align-items: flex-start;
  background-color: ${h.newColors.almostBlack[100]};
  border-radius: 2px;
  box-shadow: 0px 2px 6px ${h.newColors.almostBlack[20]};
  display: flex;
  max-width: 400px;
  padding: 16px 16px;

  .MuiSvgIcon-root {
    color: ${h.newColors.realTeal[100]};
    font-size: ${h.fontSize.text["2xl"]};
  }
`,So=C.div`
  margin-top: 16px;
`,Eo=C(J)`
  &.MuiSvgIcon-root {
    color: ${h.newColors.simplyGrey[100]};
    font-size: ${h.fontSize.text.lg};
  }
`,wo=C.div`
  margin-left: 8px;

  p {
    color: white;
    margin: 0;
  }
`,yo=e=>{const{action:o,autoHideDuration:r=4e3,label:a,leadingIcon:i,onClose:p,open:m=!1}=e,g=i;let c=r;return r<4e3?c=4e3:r>1e4&&(c=1e4),s.createElement(ko,{autoHideDuration:c,onClose:p,open:m,anchorOrigin:{vertical:"bottom",horizontal:"right"},role:"alert"},s.createElement(vo,null,i&&s.createElement(g,{"data-testid":"leading-snackbar-icon"}),s.createElement(wo,null,s.createElement("p",null,a),(o==null?void 0:o.function)&&(o==null?void 0:o.label)&&s.createElement(So,null,s.createElement(no,{color:"teal",variant:"text",onClick:o.function,label:o.label,muiAttrs:{disableRipple:!0}}))),s.createElement(ro,{"aria-label":"Close","data-testid":"close-icon",disableRipple:!0,key:"close",onClick:p,size:"large"},s.createElement(Eo,null))))},Do=s.memo(yo);export{Do as S};
