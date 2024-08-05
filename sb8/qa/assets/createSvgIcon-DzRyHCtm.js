import{r as i,b as j}from"./index-BP8_t0zE.js";import{_ as x}from"./extends-CF3RwP-h.js";import{j as w}from"./jsx-runtime-nGUw9YhZ.js";import{g as M,a as V,s as P,c as h,u as D,_ as k,b as L,e as q,C as B,p as O,l as A,k as K,j as U}from"./styled-BlYH_7wi.js";var T={exports:{}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(T);var be=T.exports,b={};function G(...e){return e.reduce((t,r)=>r==null?t:function(...o){t.apply(this,o),r.apply(this,o)},()=>{})}function W(e,t=166){let r;function n(...o){const u=()=>{e.apply(this,o)};clearTimeout(r),r=setTimeout(u,t)}return n.clear=()=>{clearTimeout(r)},n}function X(e,t){return()=>null}function Y(e,t){var r,n;return i.isValidElement(e)&&t.indexOf((r=e.type.muiName)!=null?r:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function z(e){return e&&e.ownerDocument||document}function H(e){return z(e).defaultView||window}function J(e,t){return()=>null}const F=typeof window<"u"?i.useLayoutEffect:i.useEffect;function Q(e,t,r,n,o){return null}function Z(e){const t=i.useRef(e);return F(()=>{t.current=e}),i.useRef((...r)=>(0,t.current)(...r)).current}class E{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new E}start(t,r){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,r()},t)}}let _=!0,$=!1;const ee=new E,te={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function re(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&te[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function ne(e){e.metaKey||e.altKey||e.ctrlKey||(_=!0)}function S(){_=!1}function oe(){this.visibilityState==="hidden"&&$&&(_=!0)}function ie(e){e.addEventListener("keydown",ne,!0),e.addEventListener("mousedown",S,!0),e.addEventListener("pointerdown",S,!0),e.addEventListener("touchstart",S,!0),e.addEventListener("visibilitychange",oe,!0)}function se(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return _||re(t)}function ue(){const e=i.useCallback(o=>{o!=null&&ie(o.ownerDocument)},[]),t=i.useRef(!1);function r(){return t.current?($=!0,ee.start(100,()=>{$=!1}),t.current=!1,!0):!1}function n(o){return se(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:n,onBlur:r,ref:e}}function ae(e){return M("MuiSvgIcon",e)}V("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const le=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],ce=e=>{const{color:t,fontSize:r,classes:n}=e,o={root:["root",t!=="inherit"&&`color${h(t)}`,`fontSize${h(r)}`]};return q(o,ae,n)},de=P("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.color!=="inherit"&&t[`color${h(r.color)}`],t[`fontSize${h(r.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var r,n,o,u,l,c,d,v,a,s,f,y,p,m,g,C,R;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(r=e.transitions)==null||(n=r.create)==null?void 0:n.call(r,"fill",{duration:(o=e.transitions)==null||(u=o.duration)==null?void 0:u.shorter}),fontSize:{inherit:"inherit",small:((l=e.typography)==null||(c=l.pxToRem)==null?void 0:c.call(l,20))||"1.25rem",medium:((d=e.typography)==null||(v=d.pxToRem)==null?void 0:v.call(d,24))||"1.5rem",large:((a=e.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,35))||"2.1875"}[t.fontSize],color:(f=(y=(e.vars||e).palette)==null||(p=y[t.color])==null?void 0:p.main)!=null?f:{action:(m=(e.vars||e).palette)==null||(g=m.action)==null?void 0:g.active,disabled:(C=(e.vars||e).palette)==null||(R=C.action)==null?void 0:R.disabled,inherit:void 0}[t.color]}}),I=i.forwardRef(function(t,r){const n=D({props:t,name:"MuiSvgIcon"}),{children:o,className:u,color:l="inherit",component:c="svg",fontSize:d="medium",htmlColor:v,inheritViewBox:a=!1,titleAccess:s,viewBox:f="0 0 24 24"}=n,y=k(n,le),p=x({},n,{color:l,component:c,fontSize:d,instanceFontSize:t.fontSize,inheritViewBox:a,viewBox:f}),m={};a||(m.viewBox=f);const g=ce(p);return w.jsxs(de,x({as:c,className:L(g.root,u),ownerState:p,focusable:"false",color:v,"aria-hidden":s?void 0:!0,role:s?"img":void 0,ref:r},m,y,{children:[o,s?w.jsx("title",{children:s}):null]}))});I.muiName="SvgIcon";function fe(e,t){const r=(n,o)=>w.jsx(I,x({"data-testid":`${t}Icon`,ref:o},n,{children:e}));return r.muiName=I.muiName,i.memo(i.forwardRef(r))}const pe={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),B.configure(e)}},me=Object.freeze(Object.defineProperty({__proto__:null,capitalize:h,createChainedFunction:G,createSvgIcon:fe,debounce:W,deprecatedPropType:X,isMuiElement:Y,ownerDocument:z,ownerWindow:H,requirePropFactory:J,setRef:O,unstable_ClassNameGenerator:pe,unstable_useEnhancedEffect:F,unstable_useId:A,unsupportedProp:Q,useControlled:K,useEventCallback:Z,useForkRef:U,useIsFocusVisible:ue},Symbol.toStringTag,{value:"Module"})),he=j(me);var N;function Se(){return N||(N=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=he}(b)),b}export{Z as a,F as b,be as i,Se as r,ue as u};