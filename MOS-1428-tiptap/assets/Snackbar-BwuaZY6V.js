import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as s}from"./index-BP8_t0zE.js";import{s as k,t as h}from"./theme-CtvfJOCv.js";import{d as so}from"./Close-CFi9yJil.js";import{g as N,a as W,s as M,n as co,b as c,u as H,_ as O,d as _,e as U,c as S}from"./useThemeProps-Ds-LJhvX.js";import{P as lo,u as uo}from"./Popper-Cx7DIS0Z.js";import{a as D}from"./assertThisInitialized-CO-dlV3K.js";import{C as po}from"./ClickAwayListener-BOIWMbZr.js";import{G as mo,B as fo,I as go}from"./Button-OJc5Vo8h.js";function ho(n){return N("MuiSnackbarContent",n)}W("MuiSnackbarContent",["root","message","action"]);const xo=["action","className","message","role"],bo=n=>{const{classes:o}=n;return U({root:["root"],action:["action"],message:["message"]},ho,o)},Co=M(lo,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,o)=>o.root})(({theme:n})=>{const o=n.palette.mode==="light"?.8:.98,t=co(n.palette.background.default,o);return c({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(t),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),ko=M("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,o)=>o.message})({padding:"8px 0"}),vo=M("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),yo=s.forwardRef(function(o,t){const a=H({props:o,name:"MuiSnackbarContent"}),{action:l,className:m,message:x,role:f="alert"}=a,p=O(a,xo),i=a,b=bo(i);return r.jsxs(Co,c({role:f,square:!0,elevation:6,className:_(b.root,m),ownerState:i,ref:t},p,{children:[r.jsx(ko,{className:b.message,ownerState:i,children:x}),l?r.jsx(vo,{className:b.action,ownerState:i,children:l}):null]}))});function wo(n){return N("MuiSnackbar",n)}W("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const So=["onEnter","onExited"],Mo=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Eo=n=>{const{classes:o,anchorOrigin:t}=n,a={root:["root",`anchorOrigin${S(t.vertical)}${S(t.horizontal)}`]};return U(a,wo,o)},Oo=M("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.root,o[`anchorOrigin${S(t.anchorOrigin.vertical)}${S(t.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:o})=>{const t={left:"50%",right:"auto",transform:"translateX(-50%)"};return c({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},o.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},o.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},o.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:c({},o.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},o.anchorOrigin.horizontal==="center"&&t,o.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},o.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),jo=s.forwardRef(function(o,t){const a=H({props:o,name:"MuiSnackbar"}),l=uo(),m={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:x,anchorOrigin:{vertical:f,horizontal:p}={vertical:"bottom",horizontal:"left"},autoHideDuration:i=null,children:b,className:F,ClickAwayListenerProps:G,ContentProps:K,disableWindowBlurListener:j=!1,message:q,onBlur:R,onClose:u,onFocus:L,onMouseEnter:T,onMouseLeave:z,open:d,resumeHideDuration:E,TransitionComponent:X=mo,transitionDuration:J=m,TransitionProps:{onEnter:B,onExited:$}={}}=a,Q=O(a.TransitionProps,So),V=O(a,Mo),I=c({},a,{anchorOrigin:{vertical:f,horizontal:p}}),Y=Eo(I),v=s.useRef(),[P,A]=s.useState(!0),Z=D((...e)=>{u&&u(...e)}),y=D(e=>{!u||e==null||(clearTimeout(v.current),v.current=setTimeout(()=>{Z(null,"timeout")},e))});s.useEffect(()=>(d&&y(i),()=>{clearTimeout(v.current)}),[d,i,y]);const w=()=>{clearTimeout(v.current)},C=s.useCallback(()=>{i!=null&&y(E??i*.5)},[i,E,y]),oo=e=>{L&&L(e),w()},no=e=>{T&&T(e),w()},eo=e=>{R&&R(e),C()},to=e=>{z&&z(e),C()},ro=e=>{u&&u(e,"clickaway")},ao=e=>{A(!0),$&&$(e)},io=(e,g)=>{A(!1),B&&B(e,g)};return s.useEffect(()=>{if(!j&&d)return window.addEventListener("focus",C),window.addEventListener("blur",w),()=>{window.removeEventListener("focus",C),window.removeEventListener("blur",w)}},[j,C,d]),s.useEffect(()=>{if(!d)return;function e(g){g.defaultPrevented||(g.key==="Escape"||g.key==="Esc")&&u&&u(g,"escapeKeyDown")}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[P,d,u]),!d&&P?null:r.jsx(po,c({onClickAway:ro},G,{children:r.jsx(Oo,c({className:_(Y.root,F),onBlur:eo,onFocus:oo,onMouseEnter:no,onMouseLeave:to,ownerState:I,ref:t,role:"presentation"},V,{children:r.jsx(X,c({appear:!0,in:d,timeout:J,direction:f==="top"?"down":"up",onEnter:io,onExited:ao},Q,{children:b||r.jsx(yo,c({message:q,action:x},K))}))}))}))}),Ro=k(jo)`
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
`,Lo=k.div`
  align-items: flex-start;
  background-color: ${h.newColors.almostBlack[100]};
  border-radius: 2px;
  box-shadow: 0px 2px 6px ${h.newColors.almostBlack[20]};
  display: flex;
  font-family: ${h.fontFamily};
  max-width: 400px;
  padding: 16px 16px;

  .MuiSvgIcon-root {
    color: ${h.newColors.realTeal[100]};
    font-size: 20px;
  }
`,To=k.div`
  margin-top: 16px;
`,zo=k(so)`
  &.MuiSvgIcon-root {
    color: ${h.newColors.simplyGrey[100]};
    font-size: 16px;
  }
`,Bo=k.div`
  margin-left: 8px;

  p {
    color: white;
    margin: 0;
  }
`,$o=n=>{const{action:o,autoHideDuration:t=4e3,label:a,leadingIcon:l,onClose:m,open:x=!1}=n,f=l;let p=t;return t<4e3?p=4e3:t>1e4&&(p=1e4),r.jsx(Ro,{autoHideDuration:p,onClose:m,open:x,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:r.jsxs(Lo,{children:[l&&r.jsx(f,{"data-testid":"leading-snackbar-icon"}),r.jsxs(Bo,{children:[r.jsx("p",{children:a}),(o==null?void 0:o.function)&&(o==null?void 0:o.label)&&r.jsx(To,{children:r.jsx(fo,{color:"teal",variant:"text",onClick:o.function,label:o.label,muiAttrs:{disableRipple:!0}})})]}),r.jsx(go,{"aria-label":"Close","data-testid":"close-icon",disableRipple:!0,onClick:m,size:"large",children:r.jsx(zo,{})},"close")]})})},Fo=s.memo($o);export{Fo as S};
