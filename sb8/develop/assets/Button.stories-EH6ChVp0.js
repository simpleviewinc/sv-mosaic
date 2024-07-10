import{r as sn,j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as d,a as an}from"./index-BP8_t0zE.js";import{B as t}from"./Button-BH4-03LC.js";import{d as R}from"./Create-CT6V4C-f.js";import{d as G}from"./Delete-DMwPTIDr.js";import{d as p}from"./Add-DDRv9oNH.js";import{d as M}from"./CloudDownload-DWjulw-t.js";import{r as dn,i as un,u as Ko,a as vn,b as Uo}from"./createSvgIcon-DzRyHCtm.js";import{d as no}from"./Help-BX3t_Lh3.js";import{B as f}from"./ButtonRow-CG1gNQ0k.js";import{a as Go}from"./reactTools-D2O6dTsh.js";import{u as qo}from"./useToggle-lipGlewK.js";import{b as Xo,c as Yo,a as Jo,t as Qo}from"./storyUtils-ByV2Bsyv.js";import{q as Zo,_ as fn,b as E,a as nn,s as In,u as Ln,g as ko,j as hn,e as Co,t as ne,h as mn}from"./styled-BlYH_7wi.js";import{_ as L}from"./extends-CF3RwP-h.js";import{_ as oe,a as ee}from"./inheritsLoose-CMy1E8oj.js";var fo={exports:{}},v={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=typeof Symbol=="function"&&Symbol.for,On=I?Symbol.for("react.element"):60103,_n=I?Symbol.for("react.portal"):60106,xn=I?Symbol.for("react.fragment"):60107,gn=I?Symbol.for("react.strict_mode"):60108,jn=I?Symbol.for("react.profiler"):60114,Bn=I?Symbol.for("react.provider"):60109,yn=I?Symbol.for("react.context"):60110,Vn=I?Symbol.for("react.async_mode"):60111,wn=I?Symbol.for("react.concurrent_mode"):60111,Sn=I?Symbol.for("react.forward_ref"):60112,Hn=I?Symbol.for("react.suspense"):60113,te=I?Symbol.for("react.suspense_list"):60120,Tn=I?Symbol.for("react.memo"):60115,Rn=I?Symbol.for("react.lazy"):60116,le=I?Symbol.for("react.block"):60121,ae=I?Symbol.for("react.fundamental"):60117,ie=I?Symbol.for("react.responder"):60118,re=I?Symbol.for("react.scope"):60119;function y(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case On:switch(e=e.type,e){case Vn:case wn:case xn:case jn:case gn:case Hn:return e;default:switch(e=e&&e.$$typeof,e){case yn:case Sn:case Rn:case Tn:case Bn:return e;default:return o}}case _n:return o}}}function Io(e){return y(e)===wn}v.AsyncMode=Vn;v.ConcurrentMode=wn;v.ContextConsumer=yn;v.ContextProvider=Bn;v.Element=On;v.ForwardRef=Sn;v.Fragment=xn;v.Lazy=Rn;v.Memo=Tn;v.Portal=_n;v.Profiler=jn;v.StrictMode=gn;v.Suspense=Hn;v.isAsyncMode=function(e){return Io(e)||y(e)===Vn};v.isConcurrentMode=Io;v.isContextConsumer=function(e){return y(e)===yn};v.isContextProvider=function(e){return y(e)===Bn};v.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===On};v.isForwardRef=function(e){return y(e)===Sn};v.isFragment=function(e){return y(e)===xn};v.isLazy=function(e){return y(e)===Rn};v.isMemo=function(e){return y(e)===Tn};v.isPortal=function(e){return y(e)===_n};v.isProfiler=function(e){return y(e)===jn};v.isStrictMode=function(e){return y(e)===gn};v.isSuspense=function(e){return y(e)===Hn};v.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xn||e===wn||e===jn||e===gn||e===Hn||e===te||typeof e=="object"&&e!==null&&(e.$$typeof===Rn||e.$$typeof===Tn||e.$$typeof===Bn||e.$$typeof===yn||e.$$typeof===Sn||e.$$typeof===ae||e.$$typeof===ie||e.$$typeof===re||e.$$typeof===le)};v.typeOf=y;fo.exports=v;var ce=fo.exports,xo=ce,se={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},de={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},go={};go[xo.ForwardRef]=se;go[xo.Memo]=de;function ue(){for(var e=arguments.length,o=new Array(e),l=0;l<e;l++)o[l]=arguments[l];return Zo(o)}var Wn=function(){var o=ue.apply(void 0,arguments),l="animation-"+o.name;return{name:l,styles:"@keyframes "+l+"{"+o.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Fn={},pe=un;Object.defineProperty(Fn,"__esModule",{value:!0});var B=Fn.default=void 0,be=pe(dn()),ve=sn(),me=(0,be.default)((0,ve.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");B=Fn.default=me;var Nn={},he=un;Object.defineProperty(Nn,"__esModule",{value:!0});var F=Nn.default=void 0,ke=he(dn()),Ce=sn(),fe=(0,ke.default)((0,Ce.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");F=Nn.default=fe;var Kn={},Ie=un;Object.defineProperty(Kn,"__esModule",{value:!0});var kn=Kn.default=void 0,xe=Ie(dn()),ge=sn(),je=(0,xe.default)((0,ge.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"}),"ExpandMoreOutlined");kn=Kn.default=je;var Un={},Be=un;Object.defineProperty(Un,"__esModule",{value:!0});var cn=Un.default=void 0,ye=Be(dn()),we=sn(),Se=(0,ye.default)((0,we.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulletedOutlined");cn=Un.default=Se;var Gn={},He=un;Object.defineProperty(Gn,"__esModule",{value:!0});var Cn=Gn.default=void 0,Te=He(dn()),Re=sn(),Me=(0,Te.default)((0,Re.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"}),"GridOnOutlined");Cn=Gn.default=Me;const oo=d.createContext({}),eo=an.createContext(null);function qn(e,o){var l=function(a){return o&&d.isValidElement(a)?o(a):a},c=Object.create(null);return e&&d.Children.map(e,function(i){return i}).forEach(function(i){c[i.key]=l(i)}),c}function De(e,o){e=e||{},o=o||{};function l(k){return k in o?o[k]:e[k]}var c=Object.create(null),i=[];for(var a in e)a in o?i.length&&(c[a]=i,i=[]):i.push(a);var r,b={};for(var u in o){if(c[u])for(r=0;r<c[u].length;r++){var m=c[u][r];b[c[u][r]]=l(m)}b[u]=l(u)}for(r=0;r<i.length;r++)b[i[r]]=l(i[r]);return b}function J(e,o,l){return l[o]!=null?l[o]:e.props[o]}function $e(e,o){return qn(e.children,function(l){return d.cloneElement(l,{onExited:o.bind(null,l),in:!0,appear:J(l,"appear",e),enter:J(l,"enter",e),exit:J(l,"exit",e)})})}function Ee(e,o,l){var c=qn(e.children),i=De(o,c);return Object.keys(i).forEach(function(a){var r=i[a];if(d.isValidElement(r)){var b=a in o,u=a in c,m=o[a],k=d.isValidElement(m)&&!m.props.in;u&&(!b||k)?i[a]=d.cloneElement(r,{onExited:l.bind(null,r),in:!0,exit:J(r,"exit",e),enter:J(r,"enter",e)}):!u&&b&&!k?i[a]=d.cloneElement(r,{in:!1}):u&&b&&d.isValidElement(m)&&(i[a]=d.cloneElement(r,{onExited:l.bind(null,r),in:m.props.in,exit:J(r,"exit",e),enter:J(r,"enter",e)}))}}),i}var Pe=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},ze={component:"div",childFactory:function(o){return o}},Xn=function(e){oe(o,e);function o(c,i){var a;a=e.call(this,c,i)||this;var r=a.handleExited.bind(ee(a));return a.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},a}var l=o.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(i,a){var r=a.children,b=a.handleExited,u=a.firstRender;return{children:u?$e(i,b):Ee(i,r,b),firstRender:!1}},l.handleExited=function(i,a){var r=qn(this.props.children);i.key in r||(i.props.onExited&&i.props.onExited(a),this.mounted&&this.setState(function(b){var u=L({},b.children);return delete u[i.key],{children:u}}))},l.render=function(){var i=this.props,a=i.component,r=i.childFactory,b=fn(i,["component","childFactory"]),u=this.state.contextValue,m=Pe(this.state.children).map(r);return delete b.appear,delete b.enter,delete b.exit,a===null?an.createElement(eo.Provider,{value:u},m):an.createElement(eo.Provider,{value:u},an.createElement(a,b,m))},o}(an.Component);Xn.propTypes={};Xn.defaultProps=ze;function Ae(e){const{className:o,classes:l,pulsate:c=!1,rippleX:i,rippleY:a,rippleSize:r,in:b,onExited:u,timeout:m}=e,[k,g]=d.useState(!1),j=E(o,l.ripple,l.rippleVisible,c&&l.ripplePulsate),w={width:r,height:r,top:-(r/2)+a,left:-(r/2)+i},C=E(l.child,k&&l.childLeaving,c&&l.childPulsate);return!b&&!k&&g(!0),d.useEffect(()=>{if(!b&&u!=null){const x=setTimeout(u,m);return()=>{clearTimeout(x)}}},[u,b,m]),n.jsx("span",{className:j,style:w,children:n.jsx("span",{className:C})})}const D=nn("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Le=["center","classes","className"];let Mn=e=>e,to,lo,ao,io;const zn=550,Oe=80,_e=Wn(to||(to=Mn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ve=Wn(lo||(lo=Mn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),We=Wn(ao||(ao=Mn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Fe=In("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ne=In(Ae,{name:"MuiTouchRipple",slot:"Ripple"})(io||(io=Mn`
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
`),D.rippleVisible,_e,zn,({theme:e})=>e.transitions.easing.easeInOut,D.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,D.child,D.childLeaving,Ve,zn,({theme:e})=>e.transitions.easing.easeInOut,D.childPulsate,We,({theme:e})=>e.transitions.easing.easeInOut),Ke=d.forwardRef(function(o,l){const c=Ln({props:o,name:"MuiTouchRipple"}),{center:i=!1,classes:a={},className:r}=c,b=fn(c,Le),[u,m]=d.useState([]),k=d.useRef(0),g=d.useRef(null);d.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const j=d.useRef(!1),w=d.useRef(null),C=d.useRef(null),x=d.useRef(null);d.useEffect(()=>()=>{clearTimeout(w.current)},[]);const O=d.useCallback(h=>{const{pulsate:H,rippleX:T,rippleY:q,rippleSize:Z,cb:on}=h;m(z=>[...z,n.jsx(Ne,{classes:{ripple:E(a.ripple,D.ripple),rippleVisible:E(a.rippleVisible,D.rippleVisible),ripplePulsate:E(a.ripplePulsate,D.ripplePulsate),child:E(a.child,D.child),childLeaving:E(a.childLeaving,D.childLeaving),childPulsate:E(a.childPulsate,D.childPulsate)},timeout:zn,pulsate:H,rippleX:T,rippleY:q,rippleSize:Z},k.current)]),k.current+=1,g.current=on},[a]),$=d.useCallback((h={},H={},T)=>{const{pulsate:q=!1,center:Z=i||H.pulsate,fakeElement:on=!1}=H;if((h==null?void 0:h.type)==="mousedown"&&j.current){j.current=!1;return}(h==null?void 0:h.type)==="touchstart"&&(j.current=!0);const z=on?null:x.current,N=z?z.getBoundingClientRect():{width:0,height:0,left:0,top:0};let _,K,U;if(Z||h===void 0||h.clientX===0&&h.clientY===0||!h.clientX&&!h.touches)_=Math.round(N.width/2),K=Math.round(N.height/2);else{const{clientX:X,clientY:V}=h.touches?h.touches[0]:h;_=Math.round(X-N.left),K=Math.round(V-N.top)}if(Z)U=Math.sqrt((2*N.width**2+N.height**2)/3),U%2===0&&(U+=1);else{const X=Math.max(Math.abs((z?z.clientWidth:0)-_),_)*2+2,V=Math.max(Math.abs((z?z.clientHeight:0)-K),K)*2+2;U=Math.sqrt(X**2+V**2)}h!=null&&h.touches?C.current===null&&(C.current=()=>{O({pulsate:q,rippleX:_,rippleY:K,rippleSize:U,cb:T})},w.current=setTimeout(()=>{C.current&&(C.current(),C.current=null)},Oe)):O({pulsate:q,rippleX:_,rippleY:K,rippleSize:U,cb:T})},[i,O]),P=d.useCallback(()=>{$({},{pulsate:!0})},[$]),S=d.useCallback((h,H)=>{if(clearTimeout(w.current),(h==null?void 0:h.type)==="touchend"&&C.current){C.current(),C.current=null,w.current=setTimeout(()=>{S(h,H)});return}C.current=null,m(T=>T.length>0?T.slice(1):T),g.current=H},[]);return d.useImperativeHandle(l,()=>({pulsate:P,start:$,stop:S}),[P,$,S]),n.jsx(Fe,L({className:E(a.root,D.root,r),ref:x},b,{children:n.jsx(Xn,{component:null,exit:!0,children:u})}))});function Ue(e){return ko("MuiButtonBase",e)}const Ge=nn("MuiButtonBase",["root","disabled","focusVisible"]),qe=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Xe=e=>{const{disabled:o,focusVisible:l,focusVisibleClassName:c,classes:i}=e,r=Co({root:["root",o&&"disabled",l&&"focusVisible"]},Ue,i);return l&&c&&(r.root+=` ${c}`),r},Ye=In("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ge.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Je=d.forwardRef(function(o,l){const c=Ln({props:o,name:"MuiButtonBase"}),{action:i,centerRipple:a=!1,children:r,className:b,component:u="button",disabled:m=!1,disableRipple:k=!1,disableTouchRipple:g=!1,focusRipple:j=!1,LinkComponent:w="a",onBlur:C,onClick:x,onContextMenu:O,onDragLeave:$,onFocus:P,onFocusVisible:S,onKeyDown:h,onKeyUp:H,onMouseDown:T,onMouseLeave:q,onMouseUp:Z,onTouchEnd:on,onTouchMove:z,onTouchStart:N,tabIndex:_=0,TouchRippleProps:K,touchRippleRef:U,type:X}=c,V=fn(c,qe),en=d.useRef(null),A=d.useRef(null),jo=hn(A,U),{isFocusVisibleRef:Yn,onFocus:Bo,onBlur:yo,ref:wo}=Ko(),[Y,pn]=d.useState(!1);m&&Y&&pn(!1),d.useImperativeHandle(i,()=>({focusVisible:()=>{pn(!0),en.current.focus()}}),[]);const[Dn,So]=d.useState(!1);d.useEffect(()=>{So(!0)},[]);const Ho=Dn&&!k&&!m;d.useEffect(()=>{Y&&j&&!k&&Dn&&A.current.pulsate()},[k,j,Y,Dn]);function W(s,Qn,No=g){return vn(Zn=>(Qn&&Qn(Zn),!No&&A.current&&A.current[s](Zn),!0))}const To=W("start",T),Ro=W("stop",O),Mo=W("stop",$),Do=W("stop",Z),$o=W("stop",s=>{Y&&s.preventDefault(),q&&q(s)}),Eo=W("start",N),Po=W("stop",on),zo=W("stop",z),Ao=W("stop",s=>{yo(s),Yn.current===!1&&pn(!1),C&&C(s)},!1),Lo=vn(s=>{en.current||(en.current=s.currentTarget),Bo(s),Yn.current===!0&&(pn(!0),S&&S(s)),P&&P(s)}),$n=()=>{const s=en.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},En=d.useRef(!1),Oo=vn(s=>{j&&!En.current&&Y&&A.current&&s.key===" "&&(En.current=!0,A.current.stop(s,()=>{A.current.start(s)})),s.target===s.currentTarget&&$n()&&s.key===" "&&s.preventDefault(),h&&h(s),s.target===s.currentTarget&&$n()&&s.key==="Enter"&&!m&&(s.preventDefault(),x&&x(s))}),_o=vn(s=>{j&&s.key===" "&&A.current&&Y&&!s.defaultPrevented&&(En.current=!1,A.current.stop(s,()=>{A.current.pulsate(s)})),H&&H(s),x&&s.target===s.currentTarget&&$n()&&s.key===" "&&!s.defaultPrevented&&x(s)});let bn=u;bn==="button"&&(V.href||V.to)&&(bn=w);const tn={};bn==="button"?(tn.type=X===void 0?"button":X,tn.disabled=m):(!V.href&&!V.to&&(tn.role="button"),m&&(tn["aria-disabled"]=m));const Vo=hn(wo,en),Wo=hn(l,Vo),Jn=L({},c,{centerRipple:a,component:u,disabled:m,disableRipple:k,disableTouchRipple:g,focusRipple:j,tabIndex:_,focusVisible:Y}),Fo=Xe(Jn);return n.jsxs(Ye,L({as:bn,className:E(Fo.root,b),ownerState:Jn,onBlur:Ao,onClick:x,onContextMenu:Ro,onFocus:Lo,onKeyDown:Oo,onKeyUp:_o,onMouseDown:To,onMouseLeave:$o,onMouseUp:Do,onDragLeave:Mo,onTouchEnd:Po,onTouchMove:zo,onTouchStart:Eo,ref:Wo,tabIndex:m?-1:_,type:X},tn,V,{children:[r,Ho?n.jsx(Ke,L({ref:jo,center:a},K)):null]}))}),ro=nn("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),co=nn("MuiListItemIcon",["root","alignItemsFlexStart"]),so=nn("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function Qe(e){return ko("MuiMenuItem",e)}const ln=nn("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Ze=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],nt=(e,o)=>{const{ownerState:l}=e;return[o.root,l.dense&&o.dense,l.divider&&o.divider,!l.disableGutters&&o.gutters]},ot=e=>{const{disabled:o,dense:l,divider:c,disableGutters:i,selected:a,classes:r}=e,u=Co({root:["root",l&&"dense",o&&"disabled",!i&&"gutters",c&&"divider",a&&"selected"]},Qe,r);return L({},r,u)},et=In(Je,{shouldForwardProp:e=>ne(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:nt})(({theme:e,ownerState:o})=>L({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ln.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:mn(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${ln.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:mn(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${ln.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:mn(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:mn(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${ln.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${ln.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${ro.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${ro.inset}`]:{marginLeft:52},[`& .${so.root}`]:{marginTop:0,marginBottom:0},[`& .${so.inset}`]:{paddingLeft:36},[`& .${co.root}`]:{minWidth:36}},!o.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&L({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${co.root} svg`]:{fontSize:"1.25rem"}}))),Pn=d.forwardRef(function(o,l){const c=Ln({props:o,name:"MuiMenuItem"}),{autoFocus:i=!1,component:a="li",dense:r=!1,divider:b=!1,disableGutters:u=!1,focusVisibleClassName:m,role:k="menuitem",tabIndex:g}=c,j=fn(c,Ze),w=d.useContext(oo),C={dense:r||w.dense||!1,disableGutters:u},x=d.useRef(null);Uo(()=>{i&&x.current&&x.current.focus()},[i]);const O=L({},c,{dense:C.dense,divider:b,disableGutters:u}),$=ot(c),P=hn(x,l);let S;return c.disabled||(S=g!==void 0?g:-1),n.jsx(oo.Provider,{value:C,children:n.jsx(et,L({ref:P,role:k,tabIndex:S,component:a,focusVisibleClassName:E($.focusVisible,m)},j,{ownerState:O,classes:$}))})}),tt={title:"Components/Button"},An=[{label:"Edit",mIcon:R,onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:M,onClick:function(){alert("DOWNLOAD CLICK")}}],lt=n.jsxs("div",{children:[n.jsx(Pn,{children:"Profile"}),n.jsx(Pn,{children:"My account"}),n.jsx(Pn,{children:"Logout"})]}),Q=({backgroundColor:e,buttonColor:o,buttonVariant:l,disabled:c,fullWidth:i,href:a,iconColor:r,iconPosition:b,label:u,labelText:m,menuItems:k,popover:g,popoverEvent:j,show:w,showIcon:C,showMenuContent:x,size:O,smallText:$,tooltip:P})=>{const S=l==="icon"||C,h=P?P==="string"?"Tooltip string":n.jsx("h2",{children:"Tooltip as an H2"}):void 0,H={name:"show",onClick:()=>alert("Clicked"),show:Qo[w],color:o,variant:l},T=qo(H,"show");return Go(),n.jsx("div",{style:{backgroundColor:e==="light"?"white":"#333",padding:20},children:T&&n.jsx(t,{attrs:{$smallText:$},label:u==="String"?m:n.jsx(cn,{}),variant:l,color:o,fullWidth:i,disabled:Xo[c],tooltip:h,size:O,mIcon:S&&p,mIconColor:S&&r,href:a?"https://www.google.com/":null,iconPosition:b,popover:g&&!h&&n.jsx("p",{children:"Popover Content"}),popoverEvent:j,menuItems:k&&An,menuContent:x&&lt})})};Q.args={backgroundColor:"light",buttonColor:"black",buttonVariant:"contained",disabled:"Undefined",fullWidth:!1,href:!1,iconColor:"",iconPosition:"left",label:"String",labelText:"Text",menuItems:!1,popover:!1,popoverEvent:"onClick",show:"Undefined",showIcon:!1,showMenuContent:!1,size:"medium",smallText:!1,tooltip:null};Q.argTypes={backgroundColor:{options:["light","dark"],control:{type:"select"},name:"Background Color"},buttonColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Color"},buttonVariant:{options:["text","outlined","contained","icon"],control:{type:"select"},name:"Variant"},disabled:{options:Yo,control:{type:"select"},name:"Disabled"},fullWidth:{name:"Full Width"},href:{name:"URL (href)"},iconColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Icon Color"},iconPosition:{options:["left","right"],control:{type:"select"},name:"Icon Position"},label:{options:["String","JSX"],control:{type:"select"},name:"Label"},labelText:{name:"Label Text"},menuItems:{name:"Menu Items"},popover:{name:"Popover"},popoverEvent:{options:["onClick","onHover"],control:{type:"select"},name:"Popover Event"},show:{options:Jo,control:{type:"select"},name:"Show"},showIcon:{name:"Show Icon"},showMenuContent:{name:"Show Menu Content"},size:{options:["small","medium"],control:{type:"select"},name:"Size"},smallText:{name:"Small Text"},tooltip:{options:["string","JSX",null],control:{type:"select"},name:"Tooltip"}};const rn=()=>{const[,e]=d.useState(null);function o(){alert("yes")}const l=function(a){e(a.currentTarget)},c=[{label:"Edit",mIcon:R,color:"blue",onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:M,color:"blue",onClick:function(){alert("DOWNLOAD CLICK")}},{label:"Delete",mIcon:G,color:"red",onClick:function(){alert("DELETE CLICK")}},{label:"Cancel",mIcon:F,onClick:function(){alert("CANCEL CLICK")}}],i=[{label:"Edit",onClick:function(){alert("EDIT CLICK")}},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")}}];return n.jsxs("div",{children:[n.jsx("h1",{children:"Buttons!"}),n.jsx("h2",{children:"Contained"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"contained",label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"contained",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"lightBlue",variant:"contained",label:"Save",onClick:o}),n.jsx(t,{color:"lightBlue",variant:"contained",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"contained",label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"contained",label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"contained",label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"contained",label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"yellow",variant:"contained",label:"Save",onClick:o}),n.jsx(t,{color:"yellow",variant:"contained",label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Contained - disabled"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"contained",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"contained",disabled:!0,label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"contained",disabled:!0,label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"contained",disabled:!0,label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"contained",disabled:!0,label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"contained",disabled:!0,label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"yellow",variant:"contained",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"yellow",variant:"contained",disabled:!0,label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Outlined"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"outlined",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"outlined",label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"outlined",label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"outlined",label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"outlined",label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"gray",variant:"outlined",label:"Save",onClick:o}),n.jsx(t,{color:"gray",variant:"outlined",label:"Add",mIcon:p,onClick:o}),n.jsx(t,{color:"teal",variant:"outlined",label:"Save",onClick:o}),n.jsx(t,{color:"teal",variant:"outlined",label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Outlined - disabled"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"outlined",disabled:!0,label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"outlined",disabled:!0,label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"outlined",disabled:!0,label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"gray",variant:"outlined",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"gray",variant:"outlined",disabled:!0,label:"Add",mIcon:p,onClick:o}),n.jsx(t,{color:"teal",variant:"outlined",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"teal",variant:"outlined",disabled:!0,label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Text"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"text",label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"text",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"text",label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"text",label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"text",label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"text",label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"teal",variant:"text",label:"Save",onClick:o}),n.jsx(t,{color:"teal",variant:"text",label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Text - disabled"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"text",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"blue",variant:"text",disabled:!0,label:"Save",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"text",disabled:!0,label:"Delete",onClick:o}),n.jsx(t,{color:"red",variant:"text",disabled:!0,label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{color:"black",variant:"text",disabled:!0,label:"Cancel",onClick:o}),n.jsx(t,{color:"black",variant:"text",disabled:!0,label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{color:"teal",variant:"text",disabled:!0,label:"Save",onClick:o}),n.jsx(t,{color:"teal",variant:"text",disabled:!0,label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Small Text"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",mIcon:p,onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",mIcon:G,onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",mIcon:F,onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Save",onClick:o}),n.jsx(t,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Add",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Icon Positions"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"contained",label:"Save",iconPosition:"left",mIcon:p,onClick:o}),n.jsx(t,{color:"blue",variant:"contained",label:"Save",iconPosition:"right",mIcon:p,onClick:o})]})}),n.jsx("h2",{children:"Multi-Icon buttons"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",label:n.jsx(cn,{}),variant:"contained",iconPosition:"right",mIcon:kn,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(Cn,{}),variant:"contained",iconPosition:"right",mIcon:B,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(cn,{}),variant:"outlined",iconPosition:"right",mIcon:kn,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(Cn,{}),variant:"outlined",iconPosition:"right",mIcon:B,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(cn,{}),variant:"text",iconPosition:"right",mIcon:kn,onClick:o}),n.jsx(t,{color:"blue",label:n.jsx(Cn,{}),variant:"text",iconPosition:"right",mIcon:B,onClick:o})]})}),n.jsx("h2",{children:"Icon Buttons"}),n.jsxs("div",{children:[n.jsx(t,{color:"blue",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"red",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"red",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"red",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"black",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"black",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"black",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"black",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"gray",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"gray",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"gray",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"teal",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"teal",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"teal",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"teal",variant:"icon",mIcon:B,onClick:l}),n.jsx(t,{color:"yellow",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"yellow",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"yellow",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"yellow",variant:"icon",mIcon:B,onClick:l}),n.jsxs("div",{style:{background:"black",display:"inline-block"},children:[n.jsx(t,{color:"white",variant:"icon",mIcon:p,onClick:o}),n.jsx(t,{color:"white",variant:"icon",mIcon:R,onClick:o}),n.jsx(t,{color:"white",variant:"icon",mIcon:M,onClick:o}),n.jsx(t,{color:"white",variant:"icon",mIcon:B,onClick:l})]})]}),n.jsx("h2",{children:"Icon Buttons - disabled"}),n.jsxs("div",{children:[n.jsx(t,{color:"blue",variant:"icon",disabled:!0,mIcon:p,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",disabled:!0,mIcon:R,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",disabled:!0,mIcon:M,onClick:o}),n.jsx(t,{color:"blue",variant:"icon",disabled:!0,mIcon:B,onClick:l}),n.jsx(t,{color:"red",variant:"icon",disabled:!0,mIcon:p,onClick:o}),n.jsx(t,{color:"red",variant:"icon",disabled:!0,mIcon:R,onClick:o}),n.jsx(t,{color:"red",variant:"icon",disabled:!0,mIcon:M,onClick:o}),n.jsx(t,{color:"red",variant:"icon",disabled:!0,mIcon:B,onClick:l}),n.jsx(t,{color:"black",variant:"icon",disabled:!0,mIcon:p,onClick:o}),n.jsx(t,{color:"black",variant:"icon",disabled:!0,mIcon:R,onClick:o}),n.jsx(t,{color:"black",variant:"icon",disabled:!0,mIcon:M,onClick:o}),n.jsx(t,{color:"black",variant:"icon",disabled:!0,mIcon:B,onClick:l})]}),n.jsx("h2",{children:"Button Sizes"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"contained",label:"Small",size:"small"}),n.jsx(t,{color:"blue",variant:"contained",label:"Medium (default)"})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",label:"Small",size:"small",mIcon:p}),n.jsx(t,{color:"blue",variant:"outlined",label:"Medium (default)",mIcon:p})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"black",variant:"icon",size:"small",mIcon:p}),n.jsx(t,{color:"black",variant:"icon",mIcon:p})]})}),n.jsx("h2",{children:"Buttons that open menus"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",label:"Dropdown with Icons",menuItems:An}),n.jsx(t,{color:"blue",variant:"outlined",label:"Dropdown with text",menuItems:i}),n.jsx(t,{color:"blue",variant:"outlined",label:"Dropdown with colored icons",menuItems:c}),n.jsx(t,{color:"blue",variant:"icon",mIcon:B,menuItems:An})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on click"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),label:"With Popover"}),n.jsx(t,{color:"blue",variant:"icon",mIcon:no,popover:n.jsx("p",{children:"Helper Text"}),popoverEvent:"onClick"})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on hover"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),popoverEvent:"onHover",label:"With Popover"}),n.jsx(t,{color:"blue",variant:"icon",mIcon:no,popoverEvent:"onHover",popover:n.jsx("p",{children:"Helper Text"})})]})}),n.jsx("h2",{children:"Buttons with custom attrs"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"black",variant:"outlined",label:"With data attribute",attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}}),n.jsx(t,{color:"black",variant:"icon",mIcon:p,attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}})]})}),n.jsx("h2",{children:"Buttons with tooltips"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"black",variant:"outlined",label:"One",tooltip:"I can haz a tooltip"}),n.jsx(t,{color:"black",variant:"outlined",label:"Two",tooltip:"I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long."})]})}),n.jsx("h2",{children:"Buttons with href that turn into a tags"}),n.jsx("div",{children:n.jsxs(f,{children:[n.jsx(t,{color:"black",variant:"outlined",label:"With Link",href:"https://www.google.com/"}),n.jsx(t,{color:"black",variant:"outlined",label:"With Link and click handler",href:"https://www.bing.com/",onClick:function(a){a.preventDefault(),alert("Click handler")}}),n.jsx(t,{color:"blue",variant:"icon",mIcon:p,onClick:o,size:"small",href:"https://www.google.com/"})]})})]})};var uo,po,bo;Q.parameters={...Q.parameters,docs:{...(uo=Q.parameters)==null?void 0:uo.docs,source:{originalSource:`({
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
}`,...(bo=(po=Q.parameters)==null?void 0:po.docs)==null?void 0:bo.source}}};var vo,mo,ho;rn.parameters={...rn.parameters,docs:{...(vo=rn.parameters)==null?void 0:vo.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(ho=(mo=rn.parameters)==null?void 0:mo.docs)==null?void 0:ho.source}}};const at=["Playground","KitchenSink"],jt=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:rn,Playground:Q,__namedExportsOrder:at,default:tt},Symbol.toStringTag,{value:"Module"}));export{Q as P,jt as s};
