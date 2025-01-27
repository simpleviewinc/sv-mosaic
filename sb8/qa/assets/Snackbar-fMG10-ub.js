import{j as s}from"./jsx-runtime-DKBipoO1.js";import{r as h}from"./index-P8U4y8pz.js";import{s as C,t as b}from"./theme-BWODkkBA.js";import{C as J}from"./Close-Z8pEHv17.js";import{d as u,a as I,g as $,s as v,j as Q,u as D,_ as j,e as V,f as A,b as k}from"./generateUtilityClasses-1sHYEbWh.js";import{d as Y,a as B}from"./useIsFocusVisible-wVqIivVs.js";import{e as z,P as Z,u as oo,b as no}from"./Popper-Cd5SEDCW.js";import{C as to}from"./ClickAwayListener-6W73t1nN.js";import{G as eo,B as ro,I as ao}from"./Button-BBMCWwxG.js";function so(n={}){const{autoHideDuration:o=null,disableWindowBlurListener:r=!1,onClose:a,open:i,resumeHideDuration:p}=n,g=Y();h.useEffect(()=>{if(!i)return;function t(e){e.defaultPrevented||(e.key==="Escape"||e.key==="Esc")&&(a==null||a(e,"escapeKeyDown"))}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[i,a]);const m=B((t,e)=>{a==null||a(t,e)}),c=B(t=>{!a||t==null||g.start(t,()=>{m(null,"timeout")})});h.useEffect(()=>(i&&c(o),g.clear),[i,o,c,g]);const f=t=>{a==null||a(t,"clickaway")},d=g.clear,x=h.useCallback(()=>{o!=null&&c(p??o*.5)},[o,p,c]),w=t=>e=>{const l=t.onBlur;l==null||l(e),x()},y=t=>e=>{const l=t.onFocus;l==null||l(e),d()},S=t=>e=>{const l=t.onMouseEnter;l==null||l(e),d()},M=t=>e=>{const l=t.onMouseLeave;l==null||l(e),x()};return h.useEffect(()=>{if(!r&&i)return window.addEventListener("focus",x),window.addEventListener("blur",d),()=>{window.removeEventListener("focus",x),window.removeEventListener("blur",d)}},[r,i,x,d]),{getRootProps:(t={})=>{const e=u({},z(n),z(t));return u({role:"presentation"},t,e,{onBlur:w(e),onFocus:y(e),onMouseEnter:S(e),onMouseLeave:M(e)})},onClickAway:f}}function io(n){return $("MuiSnackbarContent",n)}I("MuiSnackbarContent",["root","message","action"]);const lo=["action","className","message","role"],co=n=>{const{classes:o}=n;return A({root:["root"],action:["action"],message:["message"]},io,o)},uo=v(Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,o)=>o.root})(({theme:n})=>{const o=n.palette.mode==="light"?.8:.98,r=Q.emphasize(n.palette.background.default,o);return u({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(r),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),po=v("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,o)=>o.message})({padding:"8px 0"}),go=v("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),mo=h.forwardRef(function(o,r){const a=D({props:o,name:"MuiSnackbarContent"}),{action:i,className:p,message:g,role:m="alert"}=a,c=j(a,lo),f=a,d=co(f);return s.jsxs(uo,u({role:m,square:!0,elevation:6,className:V(d.root,p),ownerState:f,ref:r},c,{children:[s.jsx(po,{className:d.message,ownerState:f,children:g}),i?s.jsx(go,{className:d.action,ownerState:f,children:i}):null]}))});function fo(n){return $("MuiSnackbar",n)}I("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ho=["onEnter","onExited"],xo=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],bo=n=>{const{classes:o,anchorOrigin:r}=n,a={root:["root",`anchorOrigin${k(r.vertical)}${k(r.horizontal)}`]};return A(a,fo,o)},T=v("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:r}=n;return[o.root,o[`anchorOrigin${k(r.anchorOrigin.vertical)}${k(r.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:o})=>{const r={left:"50%",right:"auto",transform:"translateX(-50%)"};return u({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},o.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},o.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},o.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:u({},o.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},o.anchorOrigin.horizontal==="center"&&r,o.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},o.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Co=h.forwardRef(function(o,r){const a=D({props:o,name:"MuiSnackbar"}),i=oo(),p={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:g,anchorOrigin:{vertical:m,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:f=null,children:d,className:x,ClickAwayListenerProps:w,ContentProps:y,disableWindowBlurListener:S=!1,message:M,open:E,TransitionComponent:t=eo,transitionDuration:e=p,TransitionProps:{onEnter:l,onExited:L}={}}=a,H=j(a.TransitionProps,ho),W=j(a,xo),O=u({},a,{anchorOrigin:{vertical:m,horizontal:c},autoHideDuration:f,disableWindowBlurListener:S,TransitionComponent:t,transitionDuration:e}),N=bo(O),{getRootProps:F,onClickAway:U}=so(u({},O)),[_,P]=h.useState(!0),G=no({elementType:T,getSlotProps:F,externalForwardedProps:W,ownerState:O,additionalProps:{ref:r},className:[N.root,x]}),K=R=>{P(!0),L&&L(R)},q=(R,X)=>{P(!1),l&&l(R,X)};return!E&&_?null:s.jsx(to,u({onClickAway:U},w,{children:s.jsx(T,u({},G,{children:s.jsx(t,u({appear:!0,in:E,timeout:e,direction:m==="top"?"down":"up",onEnter:q,onExited:K},H,{children:d||s.jsx(mo,u({message:M,action:g},y))}))}))}))}),ko=C(Co)`
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

  @media (min-width: ${b.breakpoints.mobile}) {
    &.MuiSnackbar-anchorOriginBottomRight {
      bottom: 40px;
      left: auto;
      right: 40px;
    }
  }
`,vo=C.div`
  align-items: flex-start;
  background-color: ${b.newColors.almostBlack[100]};
  border-radius: 2px;
  box-shadow: 0px 2px 6px ${b.newColors.almostBlack[20]};
  display: flex;
  font-family: ${b.fontFamily};
  max-width: 400px;
  padding: 16px 16px;

  .MuiSvgIcon-root {
    color: ${b.newColors.realTeal[100]};
    font-size: 20px;
  }
`,wo=C.div`
  margin-top: 16px;
`,yo=C(J)`
  &.MuiSvgIcon-root {
    color: ${b.newColors.simplyGrey[100]};
    font-size: 16px;
  }
`,So=C.div`
  margin-left: 8px;

  p {
    color: white;
    margin: 0;
  }
`,Mo=n=>{const{action:o,autoHideDuration:r=4e3,label:a,leadingIcon:i,onClose:p,open:g=!1}=n,m=i;let c=r;return r<4e3?c=4e3:r>1e4&&(c=1e4),s.jsx(ko,{autoHideDuration:c,onClose:p,open:g,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:s.jsxs(vo,{children:[i&&s.jsx(m,{"data-testid":"leading-snackbar-icon"}),s.jsxs(So,{children:[s.jsx("p",{children:a}),(o==null?void 0:o.function)&&(o==null?void 0:o.label)&&s.jsx(wo,{children:s.jsx(ro,{color:"teal",variant:"text",onClick:o.function,label:o.label,muiAttrs:{disableRipple:!0}})})]}),s.jsx(ao,{"aria-label":"Close","data-testid":"close-icon",disableRipple:!0,onClick:p,size:"large",children:s.jsx(yo,{})},"close")]})})},Io=h.memo(Mo);export{Io as S};
