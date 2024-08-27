import{r as i,b as F}from"./index-BP8_t0zE.js";import{_ as I}from"./extends-CF3RwP-h.js";import{j as _}from"./jsx-runtime-nGUw9YhZ.js";import{g as V,a as j,s as M,c as m,u as P,_ as L,b as A,d as k,C as D,q as O,l as B,k as K,j as U}from"./styled-BxbdA4OB.js";var b={};function q(...e){return e.reduce((t,n)=>n==null?t:function(...r){t.apply(this,r),n.apply(this,r)},()=>{})}function W(e,t=166){let n;function o(...r){const s=()=>{e.apply(this,r)};clearTimeout(n),n=setTimeout(s,t)}return o.clear=()=>{clearTimeout(n)},o}function G(e,t){return()=>null}function X(e,t){var n,o;return i.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(o=e.type)==null||(o=o._payload)==null||(o=o.value)==null?void 0:o.muiName)!==-1}function N(e){return e&&e.ownerDocument||document}function Y(e){return N(e).defaultView||window}function Z(e,t){return()=>null}const T=typeof window<"u"?i.useLayoutEffect:i.useEffect;function H(e,t,n,o,r){return null}function J(e){const t=i.useRef(e);return T(()=>{t.current=e}),i.useRef((...n)=>(0,t.current)(...n)).current}const C={};function Q(e,t){const n=i.useRef(C);return n.current===C&&(n.current=e(t)),n}const ee=[];function te(e){i.useEffect(e,ee)}class v{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new v}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function _e(){const e=Q(v.create).current;return te(e.disposeEffect),e}let g=!0,E=!1;const ne=new v,re={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function oe(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&re[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function ie(e){e.metaKey||e.altKey||e.ctrlKey||(g=!0)}function S(){g=!1}function ue(){this.visibilityState==="hidden"&&E&&(g=!0)}function se(e){e.addEventListener("keydown",ie,!0),e.addEventListener("mousedown",S,!0),e.addEventListener("pointerdown",S,!0),e.addEventListener("touchstart",S,!0),e.addEventListener("visibilitychange",ue,!0)}function le(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return g||oe(t)}function ae(){const e=i.useCallback(r=>{r!=null&&se(r.ownerDocument)},[]),t=i.useRef(!1);function n(){return t.current?(E=!0,ne.start(100,()=>{E=!1}),t.current=!1,!0):!1}function o(r){return le(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:o,onBlur:n,ref:e}}function ce(e){return V("MuiSvgIcon",e)}j("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const fe=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],de=e=>{const{color:t,fontSize:n,classes:o}=e,r={root:["root",t!=="inherit"&&`color${m(t)}`,`fontSize${m(n)}`]};return k(r,ce,o)},pe=M("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${m(n.color)}`],t[`fontSize${m(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,o,r,s,h,c,y,d,p,l,a,f,u;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(o=n.create)==null?void 0:o.call(n,"fill",{duration:(r=e.transitions)==null||(r=r.duration)==null?void 0:r.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(h=s.pxToRem)==null?void 0:h.call(s,20))||"1.25rem",medium:((c=e.typography)==null||(y=c.pxToRem)==null?void 0:y.call(c,24))||"1.5rem",large:((d=e.typography)==null||(p=d.pxToRem)==null?void 0:p.call(d,35))||"2.1875rem"}[t.fontSize],color:(l=(a=(e.vars||e).palette)==null||(a=a[t.color])==null?void 0:a.main)!=null?l:{action:(f=(e.vars||e).palette)==null||(f=f.action)==null?void 0:f.active,disabled:(u=(e.vars||e).palette)==null||(u=u.action)==null?void 0:u.disabled,inherit:void 0}[t.color]}}),w=i.forwardRef(function(t,n){const o=P({props:t,name:"MuiSvgIcon"}),{children:r,className:s,color:h="inherit",component:c="svg",fontSize:y="medium",htmlColor:d,inheritViewBox:p=!1,titleAccess:l,viewBox:a="0 0 24 24"}=o,f=L(o,fe),u=i.isValidElement(r)&&r.type==="svg",$=I({},o,{color:h,component:c,fontSize:y,instanceFontSize:t.fontSize,inheritViewBox:p,viewBox:a,hasSvgAsChild:u}),x={};p||(x.viewBox=a);const z=de($);return _.jsxs(pe,I({as:c,className:A(z.root,s),focusable:"false",color:d,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:n},x,f,u&&r.props,{ownerState:$,children:[u?r.props.children:r,l?_.jsx("title",{children:l}):null]}))});w.muiName="SvgIcon";function me(e,t){function n(o,r){return _.jsx(w,I({"data-testid":`${t}Icon`,ref:r},o,{children:e}))}return n.muiName=w.muiName,i.memo(i.forwardRef(n))}const he={configure:e=>{D.configure(e)}},ye=Object.freeze(Object.defineProperty({__proto__:null,capitalize:m,createChainedFunction:q,createSvgIcon:me,debounce:W,deprecatedPropType:G,isMuiElement:X,ownerDocument:N,ownerWindow:Y,requirePropFactory:Z,setRef:O,unstable_ClassNameGenerator:he,unstable_useEnhancedEffect:T,unstable_useId:B,unsupportedProp:H,useControlled:K,useEventCallback:J,useForkRef:U,useIsFocusVisible:ae},Symbol.toStringTag,{value:"Module"})),ve=F(ye);var R;function Ee(){return R||(R=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=ve}(b)),b}export{_e as a,J as b,T as c,Ee as r,ae as u};
