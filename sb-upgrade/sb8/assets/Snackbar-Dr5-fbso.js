import{j as r}from"./jsx-runtime-qGIIFXMu.js";import{r as s}from"./index-CDs2tPxN.js";import{s as C,t as h}from"./theme-tUuL1bpb.js";import{d as ce}from"./Close-CGoSL4st.js";import{g as q,a as N,s as M,n as le,b as c,u as _,_ as E,d as H,e as W,c as S}from"./useThemeProps-DZj2lB8w.js";import{P as ue,u as de}from"./Popper-CAohKvIp.js";import{a as D}from"./assertThisInitialized-DcNg8fFv.js";import{C as pe}from"./ClickAwayListener-BvBAfXuM.js";import{G as me,B as fe,I as ge}from"./Button-B_QyrzNG.js";function he(n){return q("MuiSnackbarContent",n)}N("MuiSnackbarContent",["root","message","action"]);const be=["action","className","message","role"],xe=n=>{const{classes:e}=n;return W({root:["root"],action:["action"],message:["message"]},he,e)},ke=M(ue,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,e)=>e.root})(({theme:n})=>{const e=n.palette.mode==="light"?.8:.98,o=le(n.palette.background.default,e);return c({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(o),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Ce=M("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,e)=>e.message})({padding:"8px 0"}),ve=M("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,e)=>e.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),ye=s.forwardRef(function(e,o){const a=_({props:e,name:"MuiSnackbarContent"}),{action:l,className:m,message:b,role:f="alert"}=a,p=E(a,be),i=a,x=xe(i);return r.jsxs(ke,c({role:f,square:!0,elevation:6,className:H(x.root,m),ownerState:i,ref:o},p,{children:[r.jsx(Ce,{className:x.message,ownerState:i,children:b}),l?r.jsx(ve,{className:x.action,ownerState:i,children:l}):null]}))});function we(n){return q("MuiSnackbar",n)}N("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Se=["onEnter","onExited"],Me=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Te=n=>{const{classes:e,anchorOrigin:o}=n,a={root:["root",`anchorOrigin${S(o.vertical)}${S(o.horizontal)}`]};return W(a,we,e)},Ee=M("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:o}=n;return[e.root,e[`anchorOrigin${S(o.anchorOrigin.vertical)}${S(o.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:e})=>{const o={left:"50%",right:"auto",transform:"translateX(-50%)"};return c({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},e.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},e.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},e.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:c({},e.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},e.anchorOrigin.horizontal==="center"&&o,e.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},e.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Oe=s.forwardRef(function(e,o){const a=_({props:e,name:"MuiSnackbar"}),l=de(),m={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:b,anchorOrigin:{vertical:f,horizontal:p}={vertical:"bottom",horizontal:"left"},autoHideDuration:i=null,children:x,className:F,ClickAwayListenerProps:G,ContentProps:X,disableWindowBlurListener:O=!1,message:J,onBlur:j,onClose:u,onFocus:R,onMouseEnter:L,onMouseLeave:I,open:d,resumeHideDuration:T,TransitionComponent:K=me,transitionDuration:Q=m,TransitionProps:{onEnter:z,onExited:B}={}}=a,V=E(a.TransitionProps,Se),Y=E(a,Me),$=c({},a,{anchorOrigin:{vertical:f,horizontal:p}}),Z=Te($),v=s.useRef(),[P,A]=s.useState(!0),ee=D((...t)=>{u&&u(...t)}),y=D(t=>{!u||t==null||(clearTimeout(v.current),v.current=setTimeout(()=>{ee(null,"timeout")},t))});s.useEffect(()=>(d&&y(i),()=>{clearTimeout(v.current)}),[d,i,y]);const w=()=>{clearTimeout(v.current)},k=s.useCallback(()=>{i!=null&&y(T??i*.5)},[i,T,y]),ne=t=>{R&&R(t),w()},te=t=>{L&&L(t),w()},oe=t=>{j&&j(t),k()},re=t=>{I&&I(t),k()},ae=t=>{u&&u(t,"clickaway")},ie=t=>{A(!0),B&&B(t)},se=(t,g)=>{A(!1),z&&z(t,g)};return s.useEffect(()=>{if(!O&&d)return window.addEventListener("focus",k),window.addEventListener("blur",w),()=>{window.removeEventListener("focus",k),window.removeEventListener("blur",w)}},[O,k,d]),s.useEffect(()=>{if(!d)return;function t(g){g.defaultPrevented||(g.key==="Escape"||g.key==="Esc")&&u&&u(g,"escapeKeyDown")}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[P,d,u]),!d&&P?null:r.jsx(pe,c({onClickAway:ae},G,{children:r.jsx(Ee,c({className:H(Z.root,F),onBlur:oe,onFocus:ne,onMouseEnter:te,onMouseLeave:re,ownerState:$,ref:o,role:"presentation"},Y,{children:r.jsx(K,c({appear:!0,in:d,timeout:Q,direction:f==="top"?"down":"up",onEnter:se,onExited:ie},V,{children:x||r.jsx(ye,c({message:J,action:b},X))}))}))}))}),je=C(Oe)`
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
`,Re=C.div`
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
`,Le=C.div`
  margin-top: 16px;
`,Ie=C(ce)`
  &.MuiSvgIcon-root {
    color: ${h.newColors.simplyGrey[100]};
    font-size: 16px;
  }
`,ze=C.div`
  margin-left: 8px;

  p {
    color: white;
    margin: 0;
  }
`,U=n=>{const{action:e,autoHideDuration:o=4e3,label:a,leadingIcon:l,onClose:m,open:b=!1}=n,f=l;let p=o;return o<4e3?p=4e3:o>1e4&&(p=1e4),r.jsx(je,{autoHideDuration:p,onClose:m,open:b,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:r.jsxs(Re,{children:[l&&r.jsx(f,{"data-testid":"leading-snackbar-icon"}),r.jsxs(ze,{children:[r.jsx("p",{children:a}),(e==null?void 0:e.function)&&(e==null?void 0:e.label)&&r.jsx(Le,{children:r.jsx(fe,{color:"teal",variant:"text",onClick:e.function,label:e.label,muiAttrs:{disableRipple:!0}})})]}),r.jsx(ge,{"aria-label":"Close","data-testid":"close-icon",disableRipple:!0,onClick:m,size:"large",children:r.jsx(Ie,{})},"close")]})})},We=s.memo(U);U.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{autoHideDuration:{required:!1,tsType:{name:"number"},description:`The number of seconds to wait before automatically calling the\r
onClose function. onClose should then set the state of the open prop\r
to hide the Snackbar.`},label:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:"Message to display"},leadingIcon:{required:!1,tsType:{name:"SvgIcon"},description:"Material UI icon"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Function that will be triggered when the\r
close icon is clicked. This function\r
should set the snackbar open state to false`},open:{required:!0,tsType:{name:"boolean"},description:"If true, the snackbar is shown."},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
	label: string;\r
	function: () => void;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"function",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:"Additional action that the snackbar could execute"}}};export{We as S};
