import{r as s}from"./index-D0AnReJb.js";import{t as x,s as C}from"./sizes-BklZZmo4.js";import{C as J}from"./Close-DQPzhJmS.js";import{b as u,g as $,a as j,u as D,_ as L,s as v,d as Q,f as A,i as V,e as k}from"./generateUtilityClasses-rDn4KRfY.js";import{c as Y,a as z}from"./useIsFocusVisible-CvEUtp4E.js";import{e as T,P as Z,u as oo,b as eo}from"./Popper-BwE5duTX.js";import{j as h}from"./jsx-runtime-EKYJJIwR.js";import{G as no,B as to,I as ro}from"./Button-DWbCZful.js";import{C as ao}from"./ClickAwayListener-Dkkr5f_-.js";function so(e={}){const{autoHideDuration:o=null,disableWindowBlurListener:r=!1,onClose:a,open:i,resumeHideDuration:p}=e,m=Y();s.useEffect(()=>{if(!i)return;function n(t){t.defaultPrevented||(t.key==="Escape"||t.key==="Esc")&&(a==null||a(t,"escapeKeyDown"))}return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[i,a]);const g=z((n,t)=>{a==null||a(n,t)}),c=z(n=>{!a||n==null||m.start(n,()=>{g(null,"timeout")})});s.useEffect(()=>(i&&c(o),m.clear),[i,o,c,m]);const f=n=>{a==null||a(n,"clickaway")},d=m.clear,b=s.useCallback(()=>{o!=null&&c(p??o*.5)},[o,p,c]),y=n=>t=>{const l=n.onBlur;l==null||l(t),b()},E=n=>t=>{const l=n.onFocus;l==null||l(t),d()},w=n=>t=>{const l=n.onMouseEnter;l==null||l(t),d()},S=n=>t=>{const l=n.onMouseLeave;l==null||l(t),b()};return s.useEffect(()=>{if(!r&&i)return window.addEventListener("focus",b),window.addEventListener("blur",d),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",d)}},[r,i,b,d]),{getRootProps:(n={})=>{const t=u({},T(e),T(n));return u({role:"presentation"},n,t,{onBlur:y(t),onFocus:E(t),onMouseEnter:w(t),onMouseLeave:S(t)})},onClickAway:f}}function io(e){return $("MuiSnackbarContent",e)}j("MuiSnackbarContent",["root","message","action"]);const lo=["action","className","message","role"],co=e=>{const{classes:o}=e;return A({root:["root"],action:["action"],message:["message"]},io,o)},uo=v(Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>{const o=e.palette.mode==="light"?.8:.98,r=V.emphasize(e.palette.background.default,o);return u({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(r),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),po=v("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0"}),mo=v("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),go=s.forwardRef(function(o,r){const a=D({props:o,name:"MuiSnackbarContent"}),{action:i,className:p,message:m,role:g="alert"}=a,c=L(a,lo),f=a,d=co(f);return h.jsxs(uo,u({role:g,square:!0,elevation:6,className:Q(d.root,p),ownerState:f,ref:r},c,{children:[h.jsx(po,{className:d.message,ownerState:f,children:m}),i?h.jsx(mo,{className:d.action,ownerState:f,children:i}):null]}))});function fo(e){return $("MuiSnackbar",e)}j("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const bo=["onEnter","onExited"],ho=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],xo=e=>{const{classes:o,anchorOrigin:r}=e,a={root:["root",`anchorOrigin${k(r.vertical)}${k(r.horizontal)}`]};return A(a,fo,o)},I=v("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`anchorOrigin${k(r.anchorOrigin.vertical)}${k(r.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:o})=>{const r={left:"50%",right:"auto",transform:"translateX(-50%)"};return u({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},o.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},o.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},o.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:u({},o.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},o.anchorOrigin.horizontal==="center"&&r,o.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},o.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Co=s.forwardRef(function(o,r){const a=D({props:o,name:"MuiSnackbar"}),i=oo(),p={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:m,anchorOrigin:{vertical:g,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:f=null,children:d,className:b,ClickAwayListenerProps:y,ContentProps:E,disableWindowBlurListener:w=!1,message:S,open:M,TransitionComponent:n=no,transitionDuration:t=p,TransitionProps:{onEnter:l,onExited:P}={}}=a,H=L(a.TransitionProps,bo),W=L(a,ho),O=u({},a,{anchorOrigin:{vertical:g,horizontal:c},autoHideDuration:f,disableWindowBlurListener:w,TransitionComponent:n,transitionDuration:t}),N=xo(O),{getRootProps:F,onClickAway:U}=so(u({},O)),[_,B]=s.useState(!0),G=eo({elementType:I,getSlotProps:F,externalForwardedProps:W,ownerState:O,additionalProps:{ref:r},className:[N.root,b]}),K=R=>{B(!0),P&&P(R)},q=(R,X)=>{B(!1),l&&l(R,X)};return!M&&_?null:h.jsx(ao,u({onClickAway:U},y,{children:h.jsx(I,u({},G,{children:h.jsx(n,u({appear:!0,in:M,timeout:t,direction:g==="top"?"down":"up",onEnter:q,onExited:K},H,{children:d||h.jsx(go,u({message:S,action:m},E))}))}))}))}),ko=C(Co)`
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

  @media (min-width: ${x.breakpoints.mobile}) {
    &.MuiSnackbar-anchorOriginBottomRight {
      bottom: 40px;
      left: auto;
      right: 40px;
    }
  }
`,vo=C.div`
  align-items: flex-start;
  background-color: ${x.newColors.almostBlack[100]};
  border-radius: 2px;
  box-shadow: 0px 2px 6px ${x.newColors.almostBlack[20]};
  display: flex;
  font-family: ${x.fontFamily};
  max-width: 400px;
  padding: 16px 16px;

  .MuiSvgIcon-root {
    color: ${x.newColors.realTeal[100]};
    font-size: 20px;
  }
`,yo=C.div`
  margin-top: 16px;
`,Eo=C(J)`
  &.MuiSvgIcon-root {
    color: ${x.newColors.simplyGrey[100]};
    font-size: 16px;
  }
`,wo=C.div`
  margin-left: 8px;

  p {
    color: white;
    margin: 0;
  }
`,So=e=>{const{action:o,autoHideDuration:r=4e3,label:a,leadingIcon:i,onClose:p,open:m=!1}=e,g=i;let c=r;return r<4e3?c=4e3:r>1e4&&(c=1e4),s.createElement(ko,{autoHideDuration:c,onClose:p,open:m,anchorOrigin:{vertical:"bottom",horizontal:"right"},role:"alert"},s.createElement(vo,null,i&&s.createElement(g,{"data-testid":"leading-snackbar-icon"}),s.createElement(wo,null,s.createElement("p",null,a),(o==null?void 0:o.function)&&(o==null?void 0:o.label)&&s.createElement(yo,null,s.createElement(to,{color:"teal",variant:"text",onClick:o.function,label:o.label,muiAttrs:{disableRipple:!0}}))),s.createElement(ro,{"aria-label":"Close","data-testid":"close-icon",disableRipple:!0,key:"close",onClick:p,size:"large"},s.createElement(Eo,null))))},$o=s.memo(So);export{$o as S};
