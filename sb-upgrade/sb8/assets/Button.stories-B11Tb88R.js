import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as d,R as an}from"./index-CDs2tPxN.js";import{B as t}from"./Button-B_QyrzNG.js";import{d as R}from"./Create-oJ86cL9r.js";import{d as G}from"./Delete-DW5ub3Hx.js";import{d as p}from"./Add-4Hn9ciTE.js";import{d as M}from"./CloudDownload-DDjM78dA.js";import{r as sn,i as dn,u as No,a as bn,b as Ko}from"./createSvgIcon-Ci5omaqv.js";import{d as Zn}from"./Help-Csc6dX8H.js";import{B as f}from"./ButtonRow-BqlcWF3K.js";import{a as Uo}from"./reactTools-i2anJKce.js";import{u as Go}from"./useToggle-D8hNafRh.js";import{b as qo,c as Xo,a as Yo,t as Jo}from"./storyUtils-ByV2Bsyv.js";import{q as Qo,_ as Cn,b as E,a as nn,s as fn,u as zn,g as ho,j as mn,e as ko,t as Zo,h as vn}from"./styled-P6hUx81_.js";import{_ as L}from"./extends-CF3RwP-h.js";import{_ as ne,a as oe}from"./assertThisInitialized-C1KLUksq.js";import"./theme-tUuL1bpb.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./emotion-unitless.esm-sScrWPmR.js";var Co={exports:{}},v={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=typeof Symbol=="function"&&Symbol.for,Ln=I?Symbol.for("react.element"):60103,_n=I?Symbol.for("react.portal"):60106,In=I?Symbol.for("react.fragment"):60107,xn=I?Symbol.for("react.strict_mode"):60108,gn=I?Symbol.for("react.profiler"):60114,jn=I?Symbol.for("react.provider"):60109,Bn=I?Symbol.for("react.context"):60110,On=I?Symbol.for("react.async_mode"):60111,yn=I?Symbol.for("react.concurrent_mode"):60111,wn=I?Symbol.for("react.forward_ref"):60112,Sn=I?Symbol.for("react.suspense"):60113,ee=I?Symbol.for("react.suspense_list"):60120,Hn=I?Symbol.for("react.memo"):60115,Tn=I?Symbol.for("react.lazy"):60116,te=I?Symbol.for("react.block"):60121,le=I?Symbol.for("react.fundamental"):60117,ae=I?Symbol.for("react.responder"):60118,ie=I?Symbol.for("react.scope"):60119;function y(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case Ln:switch(e=e.type,e){case On:case yn:case In:case gn:case xn:case Sn:return e;default:switch(e=e&&e.$$typeof,e){case Bn:case wn:case Tn:case Hn:case jn:return e;default:return o}}case _n:return o}}}function fo(e){return y(e)===yn}v.AsyncMode=On;v.ConcurrentMode=yn;v.ContextConsumer=Bn;v.ContextProvider=jn;v.Element=Ln;v.ForwardRef=wn;v.Fragment=In;v.Lazy=Tn;v.Memo=Hn;v.Portal=_n;v.Profiler=gn;v.StrictMode=xn;v.Suspense=Sn;v.isAsyncMode=function(e){return fo(e)||y(e)===On};v.isConcurrentMode=fo;v.isContextConsumer=function(e){return y(e)===Bn};v.isContextProvider=function(e){return y(e)===jn};v.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ln};v.isForwardRef=function(e){return y(e)===wn};v.isFragment=function(e){return y(e)===In};v.isLazy=function(e){return y(e)===Tn};v.isMemo=function(e){return y(e)===Hn};v.isPortal=function(e){return y(e)===_n};v.isProfiler=function(e){return y(e)===gn};v.isStrictMode=function(e){return y(e)===xn};v.isSuspense=function(e){return y(e)===Sn};v.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===In||e===yn||e===gn||e===xn||e===Sn||e===ee||typeof e=="object"&&e!==null&&(e.$$typeof===Tn||e.$$typeof===Hn||e.$$typeof===jn||e.$$typeof===Bn||e.$$typeof===wn||e.$$typeof===le||e.$$typeof===ae||e.$$typeof===ie||e.$$typeof===te)};v.typeOf=y;Co.exports=v;var re=Co.exports,Io=re,ce={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},se={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xo={};xo[Io.ForwardRef]=ce;xo[Io.Memo]=se;function de(){for(var e=arguments.length,o=new Array(e),l=0;l<e;l++)o[l]=arguments[l];return Qo(o)}var Vn=function(){var o=de.apply(void 0,arguments),l="animation-"+o.name;return{name:l,styles:"@keyframes "+l+"{"+o.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Wn={},ue=dn;Object.defineProperty(Wn,"__esModule",{value:!0});var B=Wn.default=void 0,pe=ue(sn()),be=n,ve=(0,pe.default)((0,be.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");B=Wn.default=ve;var Fn={},me=dn;Object.defineProperty(Fn,"__esModule",{value:!0});var F=Fn.default=void 0,he=me(sn()),ke=n,Ce=(0,he.default)((0,ke.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");F=Fn.default=Ce;var Nn={},fe=dn;Object.defineProperty(Nn,"__esModule",{value:!0});var hn=Nn.default=void 0,Ie=fe(sn()),xe=n,ge=(0,Ie.default)((0,xe.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"}),"ExpandMoreOutlined");hn=Nn.default=ge;var Kn={},je=dn;Object.defineProperty(Kn,"__esModule",{value:!0});var cn=Kn.default=void 0,Be=je(sn()),ye=n,we=(0,Be.default)((0,ye.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulletedOutlined");cn=Kn.default=we;var Un={},Se=dn;Object.defineProperty(Un,"__esModule",{value:!0});var kn=Un.default=void 0,He=Se(sn()),Te=n,Re=(0,He.default)((0,Te.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"}),"GridOnOutlined");kn=Un.default=Re;const no=d.createContext({}),oo=an.createContext(null);function Gn(e,o){var l=function(a){return o&&d.isValidElement(a)?o(a):a},c=Object.create(null);return e&&d.Children.map(e,function(i){return i}).forEach(function(i){c[i.key]=l(i)}),c}function Me(e,o){e=e||{},o=o||{};function l(k){return k in o?o[k]:e[k]}var c=Object.create(null),i=[];for(var a in e)a in o?i.length&&(c[a]=i,i=[]):i.push(a);var r,b={};for(var u in o){if(c[u])for(r=0;r<c[u].length;r++){var m=c[u][r];b[c[u][r]]=l(m)}b[u]=l(u)}for(r=0;r<i.length;r++)b[i[r]]=l(i[r]);return b}function J(e,o,l){return l[o]!=null?l[o]:e.props[o]}function De(e,o){return Gn(e.children,function(l){return d.cloneElement(l,{onExited:o.bind(null,l),in:!0,appear:J(l,"appear",e),enter:J(l,"enter",e),exit:J(l,"exit",e)})})}function $e(e,o,l){var c=Gn(e.children),i=Me(o,c);return Object.keys(i).forEach(function(a){var r=i[a];if(d.isValidElement(r)){var b=a in o,u=a in c,m=o[a],k=d.isValidElement(m)&&!m.props.in;u&&(!b||k)?i[a]=d.cloneElement(r,{onExited:l.bind(null,r),in:!0,exit:J(r,"exit",e),enter:J(r,"enter",e)}):!u&&b&&!k?i[a]=d.cloneElement(r,{in:!1}):u&&b&&d.isValidElement(m)&&(i[a]=d.cloneElement(r,{onExited:l.bind(null,r),in:m.props.in,exit:J(r,"exit",e),enter:J(r,"enter",e)}))}}),i}var Ee=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},Pe={component:"div",childFactory:function(o){return o}},qn=function(e){ne(o,e);function o(c,i){var a;a=e.call(this,c,i)||this;var r=a.handleExited.bind(oe(a));return a.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},a}var l=o.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(i,a){var r=a.children,b=a.handleExited,u=a.firstRender;return{children:u?De(i,b):$e(i,r,b),firstRender:!1}},l.handleExited=function(i,a){var r=Gn(this.props.children);i.key in r||(i.props.onExited&&i.props.onExited(a),this.mounted&&this.setState(function(b){var u=L({},b.children);return delete u[i.key],{children:u}}))},l.render=function(){var i=this.props,a=i.component,r=i.childFactory,b=Cn(i,["component","childFactory"]),u=this.state.contextValue,m=Ee(this.state.children).map(r);return delete b.appear,delete b.enter,delete b.exit,a===null?an.createElement(oo.Provider,{value:u},m):an.createElement(oo.Provider,{value:u},an.createElement(a,b,m))},o}(an.Component);qn.propTypes={};qn.defaultProps=Pe;function Ae(e){const{className:o,classes:l,pulsate:c=!1,rippleX:i,rippleY:a,rippleSize:r,in:b,onExited:u,timeout:m}=e,[k,g]=d.useState(!1),j=E(o,l.ripple,l.rippleVisible,c&&l.ripplePulsate),w={width:r,height:r,top:-(r/2)+a,left:-(r/2)+i},C=E(l.child,k&&l.childLeaving,c&&l.childPulsate);return!b&&!k&&g(!0),d.useEffect(()=>{if(!b&&u!=null){const x=setTimeout(u,m);return()=>{clearTimeout(x)}}},[u,b,m]),n.jsx("span",{className:j,style:w,children:n.jsx("span",{className:C})})}const D=nn("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ze=["center","classes","className"];let Rn=e=>e,eo,to,lo,ao;const Pn=550,Le=80,_e=Vn(eo||(eo=Rn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Oe=Vn(to||(to=Rn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Ve=Vn(lo||(lo=Rn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),We=fn("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Fe=fn(Ae,{name:"MuiTouchRipple",slot:"Ripple"})(ao||(ao=Rn`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),D.rippleVisible,_e,Pn,({theme:e})=>e.transitions.easing.easeInOut,D.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,D.child,D.childLeaving,Oe,Pn,({theme:e})=>e.transitions.easing.easeInOut,D.childPulsate,Ve,({theme:e})=>e.transitions.easing.easeInOut),Ne=d.forwardRef(function(o,l){const c=zn({props:o,name:"MuiTouchRipple"}),{center:i=!1,classes:a={},className:r}=c,b=Cn(c,ze),[u,m]=d.useState([]),k=d.useRef(0),g=d.useRef(null);d.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const j=d.useRef(!1),w=d.useRef(null),C=d.useRef(null),x=d.useRef(null);d.useEffect(()=>()=>{clearTimeout(w.current)},[]);const _=d.useCallback(h=>{const{pulsate:H,rippleX:T,rippleY:q,rippleSize:Z,cb:on}=h;m(A=>[...A,n.jsx(Fe,{classes:{ripple:E(a.ripple,D.ripple),rippleVisible:E(a.rippleVisible,D.rippleVisible),ripplePulsate:E(a.ripplePulsate,D.ripplePulsate),child:E(a.child,D.child),childLeaving:E(a.childLeaving,D.childLeaving),childPulsate:E(a.childPulsate,D.childPulsate)},timeout:Pn,pulsate:H,rippleX:T,rippleY:q,rippleSize:Z},k.current)]),k.current+=1,g.current=on},[a]),$=d.useCallback((h={},H={},T)=>{const{pulsate:q=!1,center:Z=i||H.pulsate,fakeElement:on=!1}=H;if((h==null?void 0:h.type)==="mousedown"&&j.current){j.current=!1;return}(h==null?void 0:h.type)==="touchstart"&&(j.current=!0);const A=on?null:x.current,N=A?A.getBoundingClientRect():{width:0,height:0,left:0,top:0};let O,K,U;if(Z||h===void 0||h.clientX===0&&h.clientY===0||!h.clientX&&!h.touches)O=Math.round(N.width/2),K=Math.round(N.height/2);else{const{clientX:X,clientY:V}=h.touches?h.touches[0]:h;O=Math.round(X-N.left),K=Math.round(V-N.top)}if(Z)U=Math.sqrt((2*N.width**2+N.height**2)/3),U%2===0&&(U+=1);else{const X=Math.max(Math.abs((A?A.clientWidth:0)-O),O)*2+2,V=Math.max(Math.abs((A?A.clientHeight:0)-K),K)*2+2;U=Math.sqrt(X**2+V**2)}h!=null&&h.touches?C.current===null&&(C.current=()=>{_({pulsate:q,rippleX:O,rippleY:K,rippleSize:U,cb:T})},w.current=setTimeout(()=>{C.current&&(C.current(),C.current=null)},Le)):_({pulsate:q,rippleX:O,rippleY:K,rippleSize:U,cb:T})},[i,_]),P=d.useCallback(()=>{$({},{pulsate:!0})},[$]),S=d.useCallback((h,H)=>{if(clearTimeout(w.current),(h==null?void 0:h.type)==="touchend"&&C.current){C.current(),C.current=null,w.current=setTimeout(()=>{S(h,H)});return}C.current=null,m(T=>T.length>0?T.slice(1):T),g.current=H},[]);return d.useImperativeHandle(l,()=>({pulsate:P,start:$,stop:S}),[P,$,S]),n.jsx(We,L({className:E(a.root,D.root,r),ref:x},b,{children:n.jsx(qn,{component:null,exit:!0,children:u})}))});function Ke(e){return ho("MuiButtonBase",e)}const Ue=nn("MuiButtonBase",["root","disabled","focusVisible"]),Ge=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],qe=e=>{const{disabled:o,focusVisible:l,focusVisibleClassName:c,classes:i}=e,r=ko({root:["root",o&&"disabled",l&&"focusVisible"]},Ke,i);return l&&c&&(r.root+=` ${c}`),r},Xe=fn("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ue.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ye=d.forwardRef(function(o,l){const c=zn({props:o,name:"MuiButtonBase"}),{action:i,centerRipple:a=!1,children:r,className:b,component:u="button",disabled:m=!1,disableRipple:k=!1,disableTouchRipple:g=!1,focusRipple:j=!1,LinkComponent:w="a",onBlur:C,onClick:x,onContextMenu:_,onDragLeave:$,onFocus:P,onFocusVisible:S,onKeyDown:h,onKeyUp:H,onMouseDown:T,onMouseLeave:q,onMouseUp:Z,onTouchEnd:on,onTouchMove:A,onTouchStart:N,tabIndex:O=0,TouchRippleProps:K,touchRippleRef:U,type:X}=c,V=Cn(c,Ge),en=d.useRef(null),z=d.useRef(null),go=mn(z,U),{isFocusVisibleRef:Xn,onFocus:jo,onBlur:Bo,ref:yo}=No(),[Y,un]=d.useState(!1);m&&Y&&un(!1),d.useImperativeHandle(i,()=>({focusVisible:()=>{un(!0),en.current.focus()}}),[]);const[Mn,wo]=d.useState(!1);d.useEffect(()=>{wo(!0)},[]);const So=Mn&&!k&&!m;d.useEffect(()=>{Y&&j&&!k&&Mn&&z.current.pulsate()},[k,j,Y,Mn]);function W(s,Jn,Fo=g){return bn(Qn=>(Jn&&Jn(Qn),!Fo&&z.current&&z.current[s](Qn),!0))}const Ho=W("start",T),To=W("stop",_),Ro=W("stop",$),Mo=W("stop",Z),Do=W("stop",s=>{Y&&s.preventDefault(),q&&q(s)}),$o=W("start",N),Eo=W("stop",on),Po=W("stop",A),Ao=W("stop",s=>{Bo(s),Xn.current===!1&&un(!1),C&&C(s)},!1),zo=bn(s=>{en.current||(en.current=s.currentTarget),jo(s),Xn.current===!0&&(un(!0),S&&S(s)),P&&P(s)}),Dn=()=>{const s=en.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},$n=d.useRef(!1),Lo=bn(s=>{j&&!$n.current&&Y&&z.current&&s.key===" "&&($n.current=!0,z.current.stop(s,()=>{z.current.start(s)})),s.target===s.currentTarget&&Dn()&&s.key===" "&&s.preventDefault(),h&&h(s),s.target===s.currentTarget&&Dn()&&s.key==="Enter"&&!m&&(s.preventDefault(),x&&x(s))}),_o=bn(s=>{j&&s.key===" "&&z.current&&Y&&!s.defaultPrevented&&($n.current=!1,z.current.stop(s,()=>{z.current.pulsate(s)})),H&&H(s),x&&s.target===s.currentTarget&&Dn()&&s.key===" "&&!s.defaultPrevented&&x(s)});let pn=u;pn==="button"&&(V.href||V.to)&&(pn=w);const tn={};pn==="button"?(tn.type=X===void 0?"button":X,tn.disabled=m):(!V.href&&!V.to&&(tn.role="button"),m&&(tn["aria-disabled"]=m));const Oo=mn(yo,en),Vo=mn(l,Oo),Yn=L({},c,{centerRipple:a,component:u,disabled:m,disableRipple:k,disableTouchRipple:g,focusRipple:j,tabIndex:O,focusVisible:Y}),Wo=qe(Yn);return n.jsxs(Xe,L({as:pn,className:E(Wo.root,b),ownerState:Yn,onBlur:Ao,onClick:x,onContextMenu:To,onFocus:zo,onKeyDown:Lo,onKeyUp:_o,onMouseDown:Ho,onMouseLeave:Do,onMouseUp:Mo,onDragLeave:Ro,onTouchEnd:Eo,onTouchMove:Po,onTouchStart:$o,ref:Vo,tabIndex:m?-1:O,type:X},tn,V,{children:[r,So?n.jsx(Ne,L({ref:go,center:a},K)):null]}))}),io=nn("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),ro=nn("MuiListItemIcon",["root","alignItemsFlexStart"]),co=nn("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function Je(e){return ho("MuiMenuItem",e)}const ln=nn("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Qe=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],Ze=(e,o)=>{const{ownerState:l}=e;return[o.root,l.dense&&o.dense,l.divider&&o.divider,!l.disableGutters&&o.gutters]},nt=e=>{const{disabled:o,dense:l,divider:c,disableGutters:i,selected:a,classes:r}=e,u=ko({root:["root",l&&"dense",o&&"disabled",!i&&"gutters",c&&"divider",a&&"selected"]},Je,r);return L({},r,u)},ot=fn(Ye,{shouldForwardProp:e=>Zo(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Ze})(({theme:e,ownerState:o})=>L({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ln.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:vn(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${ln.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:vn(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${ln.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:vn(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:vn(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${ln.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${ln.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${io.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${io.inset}`]:{marginLeft:52},[`& .${co.root}`]:{marginTop:0,marginBottom:0},[`& .${co.inset}`]:{paddingLeft:36},[`& .${ro.root}`]:{minWidth:36}},!o.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&L({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${ro.root} svg`]:{fontSize:"1.25rem"}}))),En=d.forwardRef(function(o,l){const c=zn({props:o,name:"MuiMenuItem"}),{autoFocus:i=!1,component:a="li",dense:r=!1,divider:b=!1,disableGutters:u=!1,focusVisibleClassName:m,role:k="menuitem",tabIndex:g}=c,j=Cn(c,Qe),w=d.useContext(no),C={dense:r||w.dense||!1,disableGutters:u},x=d.useRef(null);Ko(()=>{i&&x.current&&x.current.focus()},[i]);const _=L({},c,{dense:C.dense,divider:b,disableGutters:u}),$=nt(c),P=mn(x,l);let S;return c.disabled||(S=g!==void 0?g:-1),n.jsx(no.Provider,{value:C,children:n.jsx(ot,L({ref:P,role:k,tabIndex:S,component:a,focusVisibleClassName:E($.focusVisible,m)},j,{ownerState:_,classes:$}))})}),Rt={title:"Components/Button"},An=[{label:"Edit",mIcon:R,onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:M,onClick:function(){alert("DOWNLOAD CLICK")}}],et=n.jsxs("div",{children:[n.jsx(En,{children:"Profile"}),n.jsx(En,{children:"My account"}),n.jsx(En,{children:"Logout"})]}),Q=({backgroundColor:e,buttonColor:o,buttonVariant:l,disabled:c,fullWidth:i,href:a,iconColor:r,iconPosition:b,label:u,labelText:m,menuItems:k,popover:g,popoverEvent:j,show:w,showIcon:C,showMenuContent:x,size:_,smallText:$,tooltip:P})=>{const S=l==="icon"||C,h=P?P==="string"?"Tooltip string":n.jsx("h2",{children:"Tooltip as an H2"}):void 0,H={name:"show",onClick:()=>alert("Clicked"),show:Jo[w],color:o,variant:l},T=Go(H,"show");return Uo(),n.jsx("div",{style:{backgroundColor:e==="light"?"white":"#333",padding:20},children:T&&n.jsx(t,{attrs:{$smallText:$},label:u==="String"?m:n.jsx(cn,{}),variant:l,color:o,fullWidth:i,disabled:qo[c],tooltip:h,size:_,mIcon:S&&p,mIconColor:S&&r,href:a?"https://www.google.com/":null,iconPosition:b,popover:g&&!h&&n.jsx("p",{children:"Popover Content"}),popoverEvent:j,menuItems:k&&An,menuContent:x&&et})})};Q.args={backgroundColor:"light",buttonColor:"black",buttonVariant:"contained",disabled:"Undefined",fullWidth:!1,href:!1,iconColor:"",iconPosition:"left",label:"String",labelText:"Text",menuItems:!1,popover:!1,popoverEvent:"onClick",show:"Undefined",showIcon:!1,showMenuContent:!1,size:"medium",smallText:!1,tooltip:null};Q.argTypes={backgroundColor:{options:["light","dark"],control:{type:"select"},name:"Background Color"},buttonColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Color"},buttonVariant:{options:["text","outlined","contained","icon"],control:{type:"select"},name:"Variant"},disabled:{options:Xo,control:{type:"select"},name:"Disabled"},fullWidth:{name:"Full Width"},href:{name:"URL (href)"},iconColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Icon Color"},iconPosition:{options:["left","right"],control:{type:"select"},name:"Icon Position"},label:{options:["String","JSX"],control:{type:"select"},name:"Label"},labelText:{name:"Label Text"},menuItems:{name:"Menu Items"},popover:{name:"Popover"},popoverEvent:{options:["onClick","onHover"],control:{type:"select"},name:"Popover Event"},show:{options:Yo,control:{type:"select"},name:"Show"},showIcon:{name:"Show Icon"},showMenuContent:{name:"Show Menu Content"},size:{options:["small","medium"],control:{type:"select"},name:"Size"},smallText:{name:"Small Text"},tooltip:{options:["string","JSX",null],control:{type:"select"},name:"Tooltip"}};const rn=()=>{const[,e]=d.useState(null);function o(){alert("yes")}const l=function(a){e(a.currentTarget)},c=[{label:"Edit",mIcon:R,color:"blue",onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:M,color:"blue",onClick:function(){alert("DOWNLOAD CLICK")}},{label:"Delete",mIcon:G,color:"red",onClick:function(){alert("DELETE CLICK")}},{label:"Cancel",mIcon:F,onClick:function(){alert("CANCEL CLICK")}}],i=[{label:"Edit",onClick:function(){alert("EDIT CLICK")}},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")}}];return n.jsxs("div",{children:[n.jsx("h1",{children:"Buttons!"}),n.jsx("h2",{children:"Contained"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"contained",label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"contained",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"lightBlue",variant:"contained",label:"Save",onClick:o}),n.jsx(t,{color:"lightBlue",variant:"contained",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"contained",label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"contained",label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"contained",label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"contained",label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"yellow",variant:"contained",label:"Save",onClick:o}),n.jsx(t,{color:"yellow",variant:"contained",label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Contained - disabled"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"contained",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"contained",disabled:!0,label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"contained",disabled:!0,label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"contained",disabled:!0,label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"contained",disabled:!0,label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"contained",disabled:!0,label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"yellow",variant:"contained",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"yellow",variant:"contained",disabled:!0,label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Outlined"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"outlined",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"outlined",label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"outlined",label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"outlined",label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"outlined",label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"gray",variant:"outlined",label:"Save",onClick:o}),n.jsx(t,{color:"gray",variant:"outlined",label:"Add",mIcon:p,onClick:o}),n.jsx(t,{color:"teal",variant:"outlined",label:"Save",onClick:o}),n.jsx(t,{color:"teal",variant:"outlined",label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Outlined - disabled"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"outlined",disabled:!0,label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"outlined",disabled:!0,label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"outlined",disabled:!0,label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"gray",variant:"outlined",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"gray",variant:"outlined",disabled:!0,label:"Add",mIcon:p,onClick:o}),n.jsx(t,{color:"teal",variant:"outlined",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"teal",variant:"outlined",disabled:!0,label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Text"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"text",label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"text",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"text",label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"text",label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"text",label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"text",label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"teal",variant:"text",label:"Save",onClick:o}),n.jsx(t,{color:"teal",variant:"text",label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Text - disabled"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"text",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"text",disabled:!0,label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"text",disabled:!0,label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"text",disabled:!0,label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"text",disabled:!0,label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"text",disabled:!0,label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"teal",variant:"text",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"teal",variant:"text",disabled:!0,label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Small Text"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Save",onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Icon Positions"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"contained",label:"Save",iconPosition:"left",mIcon:p,onClick:o}),n.jsx(t,{color:"blue",variant:"contained",label:"Save",iconPosition:"right",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Multi-Icon buttons"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",label:n.jsx(cn,{}),variant:"contained",iconPosition:"right",mIcon:hn,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(kn,{}),variant:"contained",iconPosition:"right",mIcon:B,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(cn,{}),variant:"outlined",iconPosition:"right",mIcon:hn,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(kn,{}),variant:"outlined",iconPosition:"right",mIcon:B,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(cn,{}),variant:"text",iconPosition:"right",mIcon:hn,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(kn,{}),variant:"text",iconPosition:"right",mIcon:B,onClick:o})]})}),n.jsx("h2",{children:"Icon Buttons"}),n.jsxs("div",{children:[n.jsx(t,{color:"blue",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"red",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"red",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"red",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"black",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"black",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"black",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"black",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"gray",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"gray",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"gray",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"teal",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"teal",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"teal",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"teal",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"yellow",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"yellow",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"yellow",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"yellow",variant:"icon",mIcon:B,onClick:l}),n.jsxs("div",{style:{background:"black",display:"inline-block"},children:[n.jsx(t,{color:"white",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"white",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"white",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"white",variant:"icon",mIcon:B,onClick:l})]})]}),n.jsx("h2",{children:"Icon Buttons - disabled"}),n.jsxs("div",{children:[n.jsx(t,{color:"blue",variant:"icon",disabled:!0,mIcon:p,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",disabled:!0,mIcon:R,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",disabled:!0,mIcon:M,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",disabled:!0,mIcon:B,onClick:l}),n.jsx(t,{color:"red",variant:"icon",disabled:!0,mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"icon",disabled:!0,mIcon:R,onClick:o}),n.jsx(t,{color:"red",variant:"icon",disabled:!0,mIcon:M,onClick:o}),n.jsx(t,{color:"red",variant:"icon",disabled:!0,mIcon:B,onClick:l}),n.jsx(t,{color:"black",variant:"icon",disabled:!0,mIcon:p,onClick:o}),n.jsx(t,{color:"black",variant:"icon",disabled:!0,mIcon:R,onClick:o}),n.jsx(t,{color:"black",variant:"icon",disabled:!0,mIcon:M,onClick:o}),n.jsx(t,{color:"black",variant:"icon",disabled:!0,mIcon:B,onClick:l})]}),n.jsx("h2",{children:"Button Sizes"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"contained",label:"Small",size:"small"}),n.jsx(t,{color:"blue",variant:"contained",label:"Medium (default)"})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",label:"Small",size:"small",mIcon:p}),n.jsx(t,{color:"blue",variant:"outlined",label:"Medium (default)",mIcon:p})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"black",variant:"icon",size:"small",mIcon:p}),n.jsx(t,{color:"black",variant:"icon",mIcon:p})]})}),n.jsx("h2",{children:"Buttons that open menus"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",label:"Dropdown with Icons",menuItems:An}),n.jsx(t,{color:"blue",variant:"outlined",label:"Dropdown with text",menuItems:i}),n.jsx(t,{color:"blue",variant:"outlined",label:"Dropdown with colored icons",menuItems:c}),n.jsx(t,{color:"blue",variant:"icon",mIcon:B,menuItems:An})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on click"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),label:"With Popover"}),n.jsx(t,{color:"blue",variant:"icon",mIcon:Zn,popover:n.jsx("p",{children:"Helper Text"}),popoverEvent:"onClick"})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on hover"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),popoverEvent:"onHover",label:"With Popover"}),n.jsx(t,{color:"blue",variant:"icon",mIcon:Zn,popoverEvent:"onHover",popover:n.jsx("p",{children:"Helper Text"})})]})}),n.jsx("h2",{children:"Buttons with custom attrs"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"black",variant:"outlined",label:"With data attribute",attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}}),n.jsx(t,{color:"black",variant:"icon",mIcon:p,attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}})]})}),n.jsx("h2",{children:"Buttons with tooltips"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"black",variant:"outlined",label:"One",tooltip:"I can haz a tooltip"}),n.jsx(t,{color:"black",variant:"outlined",label:"Two",tooltip:"I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long."})]})}),n.jsx("h2",{children:"Buttons with href that turn into a tags"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"black",variant:"outlined",label:"With Link",href:"https://www.google.com/"}),n.jsx(t,{color:"black",variant:"outlined",label:"With Link and click handler",href:"https://www.bing.com/",onClick:function(a){a.preventDefault(),alert("Click handler")}}),n.jsx(t,{color:"blue",variant:"icon",mIcon:p,onClick:o,size:"small",href:"https://www.google.com/"})]})})]})};Q.__docgenInfo={description:"",methods:[],displayName:"Playground"};rn.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var so,uo,po;Q.parameters={...Q.parameters,docs:{...(so=Q.parameters)==null?void 0:so.docs,source:{originalSource:`({
  backgroundColor,
  buttonColor,
  buttonVariant,
  disabled,
  fullWidth,
  href,
  iconColor,
  iconPosition,
  label,
  labelText,
  menuItems,
  popover,
  popoverEvent,
  show,
  showIcon,
  showMenuContent,
  size,
  smallText,
  tooltip
}: typeof Playground.args): ReactElement => {
  const useIcon = buttonVariant === "icon" || showIcon;
  const tooltipType = tooltip ? tooltip === "string" ? "Tooltip string" : <h2>Tooltip as an H2</h2> : undefined;
  const action = {
    name: "show",
    onClick: () => alert("Clicked"),
    show: toggleMap[show],
    color: buttonColor,
    variant: buttonVariant
  };
  const showButton = useToggle(action, "show");
  useStoryBookCssReset();
  return <div style={{
    backgroundColor: backgroundColor === "light" ? "white" : "#333",
    padding: 20
  }}>
            {showButton && <Button attrs={{
      $smallText: smallText
    }} label={label === "String" ? labelText : <FormatListBulletedOutlinedIcon />} variant={buttonVariant} color={buttonColor} fullWidth={fullWidth} disabled={toggleMapInverse[disabled]} tooltip={tooltipType} size={size} mIcon={useIcon && AddIcon} mIconColor={useIcon && iconColor} href={href ? "https://www.google.com/" : null} iconPosition={iconPosition} popover={popover && !tooltipType && <p>Popover Content</p>} popoverEvent={popoverEvent} menuItems={menuItems && dropdownWithIcons} menuContent={showMenuContent && menuContent} />}
        </div>;
}`,...(po=(uo=Q.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var bo,vo,mo;rn.parameters={...rn.parameters,docs:{...(bo=rn.parameters)==null?void 0:bo.docs,source:{originalSource:`(): ReactElement => {
  const [, setAnchorEl] = useState(null);
  function clickHandler() {
    alert("yes");
  }
  const openDropdown = function (event) {
    setAnchorEl(event.currentTarget);
  };
  const dropdownWithColoredIcons: ButtonProps["menuItems"] = [{
    label: "Edit",
    mIcon: CreateIcon,
    color: "blue",
    onClick: function () {
      alert("EDIT CLICK");
    }
  }, {
    label: "Download",
    mIcon: CloudDownloadIcon,
    color: "blue",
    onClick: function () {
      alert("DOWNLOAD CLICK");
    }
  }, {
    label: "Delete",
    mIcon: DeleteIcon,
    color: "red",
    onClick: function () {
      alert("DELETE CLICK");
    }
  }, {
    label: "Cancel",
    mIcon: ChevronLeftIcon,
    onClick: function () {
      alert("CANCEL CLICK");
    }
  }];
  const dropdownWithText: ButtonProps["menuItems"] = [{
    label: "Edit",
    onClick: function () {
      alert("EDIT CLICK");
    }
  }, {
    label: "Download",
    onClick: function () {
      alert("DOWNLOAD CLICK");
    }
  }];
  return <div>
            <h1>Buttons!</h1>
            <h2>Contained</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="contained" label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="lightBlue" variant="contained" label="Save" onClick={clickHandler} />
                    <Button color="lightBlue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="contained" label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="contained" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="contained" label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="contained" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="yellow" variant="contained" label="Save" onClick={clickHandler} />
                    <Button color="yellow" variant="contained" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Contained - disabled</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="contained" disabled label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="contained" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="lightBlue" variant="contained" disabled label="Save" onClick={clickHandler} />
                    <Button color="lightBlue" variant="contained" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="contained" disabled label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="contained" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="contained" disabled label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="contained" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="yellow" variant="contained" disabled label="Save" onClick={clickHandler} />
                    <Button color="yellow" variant="contained" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Outlined</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="outlined" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="outlined" label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="outlined" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="outlined" label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="outlined" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="gray" variant="outlined" label="Save" onClick={clickHandler} />
                    <Button color="gray" variant="outlined" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="teal" variant="outlined" label="Save" onClick={clickHandler} />
                    <Button color="teal" variant="outlined" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Outlined - disabled</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" disabled label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="outlined" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="outlined" disabled label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="outlined" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="outlined" disabled label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="outlined" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="gray" variant="outlined" disabled label="Save" onClick={clickHandler} />
                    <Button color="gray" variant="outlined" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="teal" variant="outlined" disabled label="Save" onClick={clickHandler} />
                    <Button color="teal" variant="outlined" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Text</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="text" label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="text" label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="text" label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="teal" variant="text" label="Save" onClick={clickHandler} />
                    <Button color="teal" variant="text" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Text - disabled</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="text" disabled label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="text" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="text" disabled label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="text" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="text" disabled label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="text" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="teal" variant="text" disabled label="Save" onClick={clickHandler} />
                    <Button color="teal" variant="text" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Small Text</h2>
            <div>
                <ButtonRow>
                    <Button attrs={{
          $smallText: true
        }} color="blue" variant="text" label="Save" onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="red" variant="text" label="Delete" onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="black" variant="text" label="Cancel" onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="black" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="teal" variant="text" label="Save" onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="teal" variant="text" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Icon Positions</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="contained" label="Save" iconPosition="left" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="blue" variant="contained" label="Save" iconPosition="right" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Multi-Icon buttons</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" label={<FormatListBulletedOutlinedIcon />} variant="contained" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler} />
                    <Button color="blue" label={<GridOnOutlinedIcon />} variant="contained" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler} />
                    <Button color="blue" label={<FormatListBulletedOutlinedIcon />} variant="outlined" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler} />
                    <Button color="blue" label={<GridOnOutlinedIcon />} variant="outlined" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler} />
                    <Button color="blue" label={<FormatListBulletedOutlinedIcon />} variant="text" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler} />
                    <Button color="blue" label={<GridOnOutlinedIcon />} variant="text" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Icon Buttons</h2>
            <div>
                <Button color="blue" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="red" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="black" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="gray" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="gray" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="gray" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="teal" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="teal" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="teal" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="teal" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="yellow" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="yellow" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="yellow" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="yellow" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <div style={{
        background: "black",
        display: "inline-block"
      }}>
                    <Button color="white" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="white" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                    <Button color="white" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                    <Button color="white" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                </div>
            </div>

            <h2>Icon Buttons - disabled</h2>
            <div>
                <Button color="blue" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="red" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="black" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown} />
            </div>

            <h2>Button Sizes</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="contained" label="Small" size="small" />
                    <Button color="blue" variant="contained" label="Medium (default)" />
                </ButtonRow>
            </div>
            <br />
            <br />
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" label="Small" size="small" mIcon={AddIcon} />
                    <Button color="blue" variant="outlined" label="Medium (default)" mIcon={AddIcon} />
                </ButtonRow>
            </div>
            <br />
            <br />
            <div>
                <ButtonRow>
                    <Button color="black" variant="icon" size="small" mIcon={AddIcon} />
                    <Button color="black" variant="icon" mIcon={AddIcon} />
                </ButtonRow>
            </div>

            <h2>Buttons that open menus</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" label="Dropdown with Icons" menuItems={dropdownWithIcons} />
                    <Button color="blue" variant="outlined" label="Dropdown with text" menuItems={dropdownWithText} />
                    <Button color="blue" variant="outlined" label="Dropdown with colored icons" menuItems={dropdownWithColoredIcons} />
                    <Button color="blue" variant="icon" mIcon={MoreHorizIcon} menuItems={dropdownWithIcons} />
                </ButtonRow>
            </div>

            <h2>Buttons that triggers Popover on click</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" popover={<p>Popover Content</p>} label="With Popover" />
                    <Button color="blue" variant="icon" mIcon={HelpIcon} popover={<p>Helper Text</p>} popoverEvent="onClick" />
                </ButtonRow>
            </div>

            <h2>Buttons that triggers Popover on hover</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" popover={<p>Popover Content</p>} popoverEvent="onHover" label="With Popover" />
                    <Button color="blue" variant="icon" mIcon={HelpIcon} popoverEvent="onHover" popover={<p>Helper Text</p>} />
                </ButtonRow>
            </div>

            <h2>Buttons with custom attrs</h2>
            <div>
                <ButtonRow>
                    <Button color="black" variant="outlined" label="With data attribute" attrs={{
          "data-foo": "foo value"
        }} muiAttrs={{
          "data-bar": "bar value"
        }} />
                    <Button color="black" variant="icon" mIcon={AddIcon} attrs={{
          "data-foo": "foo value"
        }} muiAttrs={{
          "data-bar": "bar value"
        }} />
                </ButtonRow>
            </div>

            <h2>Buttons with tooltips</h2>
            <div>
                <ButtonRow>
                    <Button color="black" variant="outlined" label="One" tooltip="I can haz a tooltip" />
                    <Button color="black" variant="outlined" label="Two" tooltip="I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long." />
                </ButtonRow>
            </div>

            <h2>Buttons with href that turn into a tags</h2>
            <div>
                <ButtonRow>
                    <Button color="black" variant="outlined" label="With Link" href="https://www.google.com/" />
                    <Button color="black" variant="outlined" label="With Link and click handler" href="https://www.bing.com/" onClick={function (e) {
          e.preventDefault();
          alert("Click handler");
        }} />
                    <Button color="blue" variant="icon" mIcon={AddIcon} onClick={clickHandler} size="small" href="https://www.google.com/" />
                </ButtonRow>
            </div>
        </div>;
}`,...(mo=(vo=rn.parameters)==null?void 0:vo.docs)==null?void 0:mo.source}}};const Mt=["Playground","KitchenSink"];export{rn as KitchenSink,Q as Playground,Mt as __namedExportsOrder,Rt as default};
