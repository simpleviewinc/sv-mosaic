import{r as an,j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as d,a as en}from"./index-BP8_t0zE.js";import{B as e}from"./Button-DtrbI49b.js";import{d as H}from"./Create-khrlERW3.js";import{d as F}from"./Delete-b_G_Ja4O.js";import{d as b}from"./Add-CR2wy60N.js";import{d as D}from"./CloudDownload-DVL9fUqN.js";import{i as cn,_ as mn,b as T,a as J,t as wn,s as hn,u as yn,g as no,j as gn,d as oo,v as Bo,h as un}from"./styled-BxbdA4OB.js";import{r as rn,a as wo,u as yo,b as bn,c as Ho}from"./createSvgIcon-B0oOJ-Fw.js";import{d as zn}from"./Help-luNVe3S6.js";import{B as C}from"./ButtonRow-DkywlgRX.js";import{a as Do}from"./reactTools-D2O6dTsh.js";import{u as To}from"./useToggle-lipGlewK.js";import{b as Ro,c as So,a as Mo,t as Eo}from"./storyUtils-BoiXCagy.js";import{_ as A}from"./extends-CF3RwP-h.js";import{_ as Po,a as $o}from"./inheritsLoose-CMy1E8oj.js";var Hn={},Ao=cn;Object.defineProperty(Hn,"__esModule",{value:!0});var g=Hn.default=void 0,Lo=Ao(rn()),zo=an();g=Hn.default=(0,Lo.default)((0,zo.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");var Dn={},Oo=cn;Object.defineProperty(Dn,"__esModule",{value:!0});var _=Dn.default=void 0,_o=Oo(rn()),Vo=an();_=Dn.default=(0,_o.default)((0,Vo.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");var Tn={},Wo=cn;Object.defineProperty(Tn,"__esModule",{value:!0});var pn=Tn.default=void 0,No=Wo(rn()),Fo=an();pn=Tn.default=(0,No.default)((0,Fo.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMoreOutlined");var Rn={},Ko=cn;Object.defineProperty(Rn,"__esModule",{value:!0});var ln=Rn.default=void 0,Uo=Ko(rn()),Go=an();ln=Rn.default=(0,Uo.default)((0,Go.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"}),"FormatListBulletedOutlined");var Sn={},qo=cn;Object.defineProperty(Sn,"__esModule",{value:!0});var vn=Sn.default=void 0,Xo=qo(rn()),Yo=an();vn=Sn.default=(0,Xo.default)((0,Yo.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z"}),"GridOnOutlined");const On=d.createContext({}),_n=en.createContext(null);function Mn(t,o){var l=function(a){return o&&d.isValidElement(a)?o(a):a},r=Object.create(null);return t&&d.Children.map(t,function(i){return i}).forEach(function(i){r[i.key]=l(i)}),r}function Jo(t,o){t=t||{},o=o||{};function l(h){return h in o?o[h]:t[h]}var r=Object.create(null),i=[];for(var a in t)a in o?i.length&&(r[a]=i,i=[]):i.push(a);var c,p={};for(var u in o){if(r[u])for(c=0;c<r[u].length;c++){var m=r[u][c];p[r[u][c]]=l(m)}p[u]=l(u)}for(c=0;c<i.length;c++)p[i[c]]=l(i[c]);return p}function q(t,o,l){return l[o]!=null?l[o]:t.props[o]}function Qo(t,o){return Mn(t.children,function(l){return d.cloneElement(l,{onExited:o.bind(null,l),in:!0,appear:q(l,"appear",t),enter:q(l,"enter",t),exit:q(l,"exit",t)})})}function Zo(t,o,l){var r=Mn(t.children),i=Jo(o,r);return Object.keys(i).forEach(function(a){var c=i[a];if(d.isValidElement(c)){var p=a in o,u=a in r,m=o[a],h=d.isValidElement(m)&&!m.props.in;u&&(!p||h)?i[a]=d.cloneElement(c,{onExited:l.bind(null,c),in:!0,exit:q(c,"exit",t),enter:q(c,"enter",t)}):!u&&p&&!h?i[a]=d.cloneElement(c,{in:!1}):u&&p&&d.isValidElement(m)&&(i[a]=d.cloneElement(c,{onExited:l.bind(null,c),in:m.props.in,exit:q(c,"exit",t),enter:q(c,"enter",t)}))}}),i}var ne=Object.values||function(t){return Object.keys(t).map(function(o){return t[o]})},oe={component:"div",childFactory:function(o){return o}},En=function(t){Po(o,t);function o(r,i){var a;a=t.call(this,r,i)||this;var c=a.handleExited.bind($o(a));return a.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},a}var l=o.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(i,a){var c=a.children,p=a.handleExited,u=a.firstRender;return{children:u?Qo(i,p):Zo(i,c,p),firstRender:!1}},l.handleExited=function(i,a){var c=Mn(this.props.children);i.key in c||(i.props.onExited&&i.props.onExited(a),this.mounted&&this.setState(function(p){var u=A({},p.children);return delete u[i.key],{children:u}}))},l.render=function(){var i=this.props,a=i.component,c=i.childFactory,p=mn(i,["component","childFactory"]),u=this.state.contextValue,m=ne(this.state.children).map(c);return delete p.appear,delete p.enter,delete p.exit,a===null?en.createElement(_n.Provider,{value:u},m):en.createElement(_n.Provider,{value:u},en.createElement(a,p,m))},o}(en.Component);En.propTypes={};En.defaultProps=oe;function ee(t){const{className:o,classes:l,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:c,in:p,onExited:u,timeout:m}=t,[h,I]=d.useState(!1),x=T(o,l.ripple,l.rippleVisible,r&&l.ripplePulsate),j={width:c,height:c,top:-(c/2)+a,left:-(c/2)+i},k=T(l.child,h&&l.childLeaving,r&&l.childPulsate);return!p&&!h&&I(!0),d.useEffect(()=>{if(!p&&u!=null){const f=setTimeout(u,m);return()=>{clearTimeout(f)}}},[u,p,m]),n.jsx("span",{className:x,style:j,children:n.jsx("span",{className:k})})}const R=J("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),te=["center","classes","className"];let kn=t=>t,Vn,Wn,Nn,Fn;const jn=550,le=80,ae=wn(Vn||(Vn=kn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ie=wn(Wn||(Wn=kn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ce=wn(Nn||(Nn=kn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),re=hn("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),se=hn(ee,{name:"MuiTouchRipple",slot:"Ripple"})(Fn||(Fn=kn`
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
`),R.rippleVisible,ae,jn,({theme:t})=>t.transitions.easing.easeInOut,R.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,R.child,R.childLeaving,ie,jn,({theme:t})=>t.transitions.easing.easeInOut,R.childPulsate,ce,({theme:t})=>t.transitions.easing.easeInOut),de=d.forwardRef(function(o,l){const r=yn({props:o,name:"MuiTouchRipple"}),{center:i=!1,classes:a={},className:c}=r,p=mn(r,te),[u,m]=d.useState([]),h=d.useRef(0),I=d.useRef(null);d.useEffect(()=>{I.current&&(I.current(),I.current=null)},[u]);const x=d.useRef(!1),j=wo(),k=d.useRef(null),f=d.useRef(null),S=d.useCallback(v=>{const{pulsate:w,rippleX:y,rippleY:K,rippleSize:Y,cb:Q}=v;m(P=>[...P,n.jsx(se,{classes:{ripple:T(a.ripple,R.ripple),rippleVisible:T(a.rippleVisible,R.rippleVisible),ripplePulsate:T(a.ripplePulsate,R.ripplePulsate),child:T(a.child,R.child),childLeaving:T(a.childLeaving,R.childLeaving),childPulsate:T(a.childPulsate,R.childPulsate)},timeout:jn,pulsate:w,rippleX:y,rippleY:K,rippleSize:Y},h.current)]),h.current+=1,I.current=Q},[a]),E=d.useCallback((v={},w={},y=()=>{})=>{const{pulsate:K=!1,center:Y=i||w.pulsate,fakeElement:Q=!1}=w;if((v==null?void 0:v.type)==="mousedown"&&x.current){x.current=!1;return}(v==null?void 0:v.type)==="touchstart"&&(x.current=!0);const P=Q?null:f.current,V=P?P.getBoundingClientRect():{width:0,height:0,left:0,top:0};let L,W,N;if(Y||v===void 0||v.clientX===0&&v.clientY===0||!v.clientX&&!v.touches)L=Math.round(V.width/2),W=Math.round(V.height/2);else{const{clientX:U,clientY:z}=v.touches&&v.touches.length>0?v.touches[0]:v;L=Math.round(U-V.left),W=Math.round(z-V.top)}if(Y)N=Math.sqrt((2*V.width**2+V.height**2)/3),N%2===0&&(N+=1);else{const U=Math.max(Math.abs((P?P.clientWidth:0)-L),L)*2+2,z=Math.max(Math.abs((P?P.clientHeight:0)-W),W)*2+2;N=Math.sqrt(U**2+z**2)}v!=null&&v.touches?k.current===null&&(k.current=()=>{S({pulsate:K,rippleX:L,rippleY:W,rippleSize:N,cb:y})},j.start(le,()=>{k.current&&(k.current(),k.current=null)})):S({pulsate:K,rippleX:L,rippleY:W,rippleSize:N,cb:y})},[i,S,j]),B=d.useCallback(()=>{E({},{pulsate:!0})},[E]),M=d.useCallback((v,w)=>{if(j.clear(),(v==null?void 0:v.type)==="touchend"&&k.current){k.current(),k.current=null,j.start(0,()=>{M(v,w)});return}k.current=null,m(y=>y.length>0?y.slice(1):y),I.current=w},[j]);return d.useImperativeHandle(l,()=>({pulsate:B,start:E,stop:M}),[B,E,M]),n.jsx(re,A({className:T(R.root,a.root,c),ref:f},p,{children:n.jsx(En,{component:null,exit:!0,children:u})}))});function ue(t){return no("MuiButtonBase",t)}const be=J("MuiButtonBase",["root","disabled","focusVisible"]),pe=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ve=t=>{const{disabled:o,focusVisible:l,focusVisibleClassName:r,classes:i}=t,c=oo({root:["root",o&&"disabled",l&&"focusVisible"]},ue,i);return l&&r&&(c.root+=` ${r}`),c},me=hn("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${be.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),he=d.forwardRef(function(o,l){const r=yn({props:o,name:"MuiButtonBase"}),{action:i,centerRipple:a=!1,children:c,className:p,component:u="button",disabled:m=!1,disableRipple:h=!1,disableTouchRipple:I=!1,focusRipple:x=!1,LinkComponent:j="a",onBlur:k,onClick:f,onContextMenu:S,onDragLeave:E,onFocus:B,onFocusVisible:M,onKeyDown:v,onKeyUp:w,onMouseDown:y,onMouseLeave:K,onMouseUp:Y,onTouchEnd:Q,onTouchMove:P,onTouchStart:V,tabIndex:L=0,TouchRippleProps:W,touchRippleRef:N,type:U}=r,z=mn(r,pe),Z=d.useRef(null),$=d.useRef(null),eo=gn($,N),{isFocusVisibleRef:Pn,onFocus:to,onBlur:lo,ref:ao}=yo(),[G,sn]=d.useState(!1);m&&G&&sn(!1),d.useImperativeHandle(i,()=>({focusVisible:()=>{sn(!0),Z.current.focus()}}),[]);const[Cn,io]=d.useState(!1);d.useEffect(()=>{io(!0)},[]);const co=Cn&&!h&&!m;d.useEffect(()=>{G&&x&&!h&&Cn&&$.current.pulsate()},[h,x,G,Cn]);function O(s,An,jo=I){return bn(Ln=>(An&&An(Ln),!jo&&$.current&&$.current[s](Ln),!0))}const ro=O("start",y),so=O("stop",S),uo=O("stop",E),bo=O("stop",Y),po=O("stop",s=>{G&&s.preventDefault(),K&&K(s)}),vo=O("start",V),mo=O("stop",Q),ho=O("stop",P),ko=O("stop",s=>{lo(s),Pn.current===!1&&sn(!1),k&&k(s)},!1),Co=bn(s=>{Z.current||(Z.current=s.currentTarget),to(s),Pn.current===!0&&(sn(!0),M&&M(s)),B&&B(s)}),In=()=>{const s=Z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},xn=d.useRef(!1),Io=bn(s=>{x&&!xn.current&&G&&$.current&&s.key===" "&&(xn.current=!0,$.current.stop(s,()=>{$.current.start(s)})),s.target===s.currentTarget&&In()&&s.key===" "&&s.preventDefault(),v&&v(s),s.target===s.currentTarget&&In()&&s.key==="Enter"&&!m&&(s.preventDefault(),f&&f(s))}),xo=bn(s=>{x&&s.key===" "&&$.current&&G&&!s.defaultPrevented&&(xn.current=!1,$.current.stop(s,()=>{$.current.pulsate(s)})),w&&w(s),f&&s.target===s.currentTarget&&In()&&s.key===" "&&!s.defaultPrevented&&f(s)});let dn=u;dn==="button"&&(z.href||z.to)&&(dn=j);const nn={};dn==="button"?(nn.type=U===void 0?"button":U,nn.disabled=m):(!z.href&&!z.to&&(nn.role="button"),m&&(nn["aria-disabled"]=m));const fo=gn(l,ao,Z),$n=A({},r,{centerRipple:a,component:u,disabled:m,disableRipple:h,disableTouchRipple:I,focusRipple:x,tabIndex:L,focusVisible:G}),go=ve($n);return n.jsxs(me,A({as:dn,className:T(go.root,p),ownerState:$n,onBlur:ko,onClick:f,onContextMenu:so,onFocus:Co,onKeyDown:Io,onKeyUp:xo,onMouseDown:ro,onMouseLeave:po,onMouseUp:bo,onDragLeave:uo,onTouchEnd:mo,onTouchMove:ho,onTouchStart:vo,ref:fo,tabIndex:m?-1:L,type:U},nn,z,{children:[c,co?n.jsx(de,A({ref:eo,center:a},W)):null]}))}),Kn=J("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Un=J("MuiListItemIcon",["root","alignItemsFlexStart"]),Gn=J("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function ke(t){return no("MuiMenuItem",t)}const on=J("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Ce=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Ie=(t,o)=>{const{ownerState:l}=t;return[o.root,l.dense&&o.dense,l.divider&&o.divider,!l.disableGutters&&o.gutters]},xe=t=>{const{disabled:o,dense:l,divider:r,disableGutters:i,selected:a,classes:c}=t,u=oo({root:["root",l&&"dense",o&&"disabled",!i&&"gutters",r&&"divider",a&&"selected"]},ke,c);return A({},c,u)},fe=hn(he,{shouldForwardProp:t=>Bo(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Ie})(({theme:t,ownerState:o})=>A({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${on.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:un(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${on.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:un(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${on.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:un(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:un(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${on.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${on.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${Kn.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${Kn.inset}`]:{marginLeft:52},[`& .${Gn.root}`]:{marginTop:0,marginBottom:0},[`& .${Gn.inset}`]:{paddingLeft:36},[`& .${Un.root}`]:{minWidth:36}},!o.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&A({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${Un.root} svg`]:{fontSize:"1.25rem"}}))),fn=d.forwardRef(function(o,l){const r=yn({props:o,name:"MuiMenuItem"}),{autoFocus:i=!1,component:a="li",dense:c=!1,divider:p=!1,disableGutters:u=!1,focusVisibleClassName:m,role:h="menuitem",tabIndex:I,className:x}=r,j=mn(r,Ce),k=d.useContext(On),f=d.useMemo(()=>({dense:c||k.dense||!1,disableGutters:u}),[k.dense,c,u]),S=d.useRef(null);Ho(()=>{i&&S.current&&S.current.focus()},[i]);const E=A({},r,{dense:f.dense,divider:p,disableGutters:u}),B=xe(r),M=gn(S,l);let v;return r.disabled||(v=I!==void 0?I:-1),n.jsx(On.Provider,{value:f,children:n.jsx(fe,A({ref:M,role:h,tabIndex:v,component:a,focusVisibleClassName:T(B.focusVisible,m),className:T(B.root,x)},j,{ownerState:E,classes:B}))})}),ge={title:"Components/Button"},Bn=[{label:"Edit",mIcon:H,onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:D,onClick:function(){alert("DOWNLOAD CLICK")}}],je=n.jsxs("div",{children:[n.jsx(fn,{children:"Profile"}),n.jsx(fn,{children:"My account"}),n.jsx(fn,{children:"Logout"})]}),X=({backgroundColor:t,buttonColor:o,buttonVariant:l,disabled:r,fullWidth:i,href:a,iconColor:c,iconPosition:p,label:u,labelText:m,menuItems:h,popover:I,popoverEvent:x,show:j,showIcon:k,showMenuContent:f,size:S,smallText:E,tooltip:B})=>{const M=l==="icon"||k,v=B?B==="string"?"Tooltip string":n.jsx("h2",{children:"Tooltip as an H2"}):void 0,w={name:"show",onClick:()=>alert("Clicked"),show:Eo[j],color:o,variant:l},y=To(w,"show");return Do(),n.jsx("div",{style:{backgroundColor:t==="light"?"white":"#333",padding:20},children:y&&n.jsx(e,{attrs:{$smallText:E},label:u==="String"?m:n.jsx(ln,{}),variant:l,color:o,fullWidth:i,disabled:Ro[r],tooltip:v,size:S,mIcon:M&&b,mIconColor:M&&c,href:a?"https://www.google.com/":null,iconPosition:p,popover:I&&!v&&n.jsx("p",{children:"Popover Content"}),popoverEvent:x,menuItems:h&&Bn,menuContent:f&&je})})};X.args={backgroundColor:"light",buttonColor:"black",buttonVariant:"contained",disabled:"Undefined",fullWidth:!1,href:!1,iconColor:"",iconPosition:"left",label:"String",labelText:"Text",menuItems:!1,popover:!1,popoverEvent:"onClick",show:"Undefined",showIcon:!1,showMenuContent:!1,size:"medium",smallText:!1,tooltip:null};X.argTypes={backgroundColor:{options:["light","dark"],control:{type:"select"},name:"Background Color"},buttonColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Color"},buttonVariant:{options:["text","outlined","contained","icon"],control:{type:"select"},name:"Variant"},disabled:{options:So,control:{type:"select"},name:"Disabled"},fullWidth:{name:"Full Width"},href:{name:"URL (href)"},iconColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Icon Color"},iconPosition:{options:["left","right"],control:{type:"select"},name:"Icon Position"},label:{options:["String","JSX"],control:{type:"select"},name:"Label"},labelText:{name:"Label Text"},menuItems:{name:"Menu Items"},popover:{name:"Popover"},popoverEvent:{options:["onClick","onHover"],control:{type:"select"},name:"Popover Event"},show:{options:Mo,control:{type:"select"},name:"Show"},showIcon:{name:"Show Icon"},showMenuContent:{name:"Show Menu Content"},size:{options:["small","medium"],control:{type:"select"},name:"Size"},smallText:{name:"Small Text"},tooltip:{options:["string","JSX",null],control:{type:"select"},name:"Tooltip"}};const tn=()=>{const[,t]=d.useState(null);function o(){alert("yes")}const l=function(a){t(a.currentTarget)},r=[{label:"Edit",mIcon:H,color:"blue",onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:D,color:"blue",onClick:function(){alert("DOWNLOAD CLICK")}},{label:"Delete",mIcon:F,color:"red",onClick:function(){alert("DELETE CLICK")}},{label:"Cancel",mIcon:_,onClick:function(){alert("CANCEL CLICK")}}],i=[{label:"Edit",onClick:function(){alert("EDIT CLICK")}},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")}}];return n.jsxs("div",{children:[n.jsx("h1",{children:"Buttons!"}),n.jsx("h2",{children:"Contained"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"contained",label:"Save",onClick:o}),n.jsx(e,{color:"blue",variant:"contained",label:"Save",mIcon:b,onClick:o}),n.jsx(e,{color:"lightBlue",variant:"contained",label:"Save",onClick:o}),n.jsx(e,{color:"lightBlue",variant:"contained",label:"Save",mIcon:b,onClick:o}),n.jsx(e,{color:"red",variant:"contained",label:"Delete",onClick:o}),n.jsx(e,{color:"red",variant:"contained",label:"Delete",mIcon:F,onClick:o}),n.jsx(e,{color:"black",variant:"contained",label:"Cancel",onClick:o}),n.jsx(e,{color:"black",variant:"contained",label:"Cancel",mIcon:_,onClick:o}),n.jsx(e,{color:"yellow",variant:"contained",label:"Save",onClick:o}),n.jsx(e,{color:"yellow",variant:"contained",label:"Add",mIcon:b,onClick:o})]})}),n.jsx("h2",{children:"Contained - disabled"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"contained",disabled:!0,label:"Save",onClick:o}),n.jsx(e,{color:"blue",variant:"contained",disabled:!0,label:"Save",mIcon:b,onClick:o}),n.jsx(e,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",onClick:o}),n.jsx(e,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",mIcon:b,onClick:o}),n.jsx(e,{color:"red",variant:"contained",disabled:!0,label:"Delete",onClick:o}),n.jsx(e,{color:"red",variant:"contained",disabled:!0,label:"Delete",mIcon:F,onClick:o}),n.jsx(e,{color:"black",variant:"contained",disabled:!0,label:"Cancel",onClick:o}),n.jsx(e,{color:"black",variant:"contained",disabled:!0,label:"Cancel",mIcon:_,onClick:o}),n.jsx(e,{color:"yellow",variant:"contained",disabled:!0,label:"Save",onClick:o}),n.jsx(e,{color:"yellow",variant:"contained",disabled:!0,label:"Add",mIcon:b,onClick:o})]})}),n.jsx("h2",{children:"Outlined"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"outlined",label:"Save",onClick:o}),n.jsx(e,{color:"blue",variant:"outlined",label:"Save",mIcon:b,onClick:o}),n.jsx(e,{color:"red",variant:"outlined",label:"Delete",onClick:o}),n.jsx(e,{color:"red",variant:"outlined",label:"Delete",mIcon:F,onClick:o}),n.jsx(e,{color:"black",variant:"outlined",label:"Cancel",onClick:o}),n.jsx(e,{color:"black",variant:"outlined",label:"Cancel",mIcon:_,onClick:o}),n.jsx(e,{color:"gray",variant:"outlined",label:"Save",onClick:o}),n.jsx(e,{color:"gray",variant:"outlined",label:"Add",mIcon:b,onClick:o}),n.jsx(e,{color:"teal",variant:"outlined",label:"Save",onClick:o}),n.jsx(e,{color:"teal",variant:"outlined",label:"Add",mIcon:b,onClick:o})]})}),n.jsx("h2",{children:"Outlined - disabled"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"outlined",disabled:!0,label:"Save",onClick:o}),n.jsx(e,{color:"blue",variant:"outlined",disabled:!0,label:"Save",mIcon:b,onClick:o}),n.jsx(e,{color:"red",variant:"outlined",disabled:!0,label:"Delete",onClick:o}),n.jsx(e,{color:"red",variant:"outlined",disabled:!0,label:"Delete",mIcon:F,onClick:o}),n.jsx(e,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",onClick:o}),n.jsx(e,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",mIcon:_,onClick:o}),n.jsx(e,{color:"gray",variant:"outlined",disabled:!0,label:"Save",onClick:o}),n.jsx(e,{color:"gray",variant:"outlined",disabled:!0,label:"Add",mIcon:b,onClick:o}),n.jsx(e,{color:"teal",variant:"outlined",disabled:!0,label:"Save",onClick:o}),n.jsx(e,{color:"teal",variant:"outlined",disabled:!0,label:"Add",mIcon:b,onClick:o})]})}),n.jsx("h2",{children:"Text"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"text",label:"Save",onClick:o}),n.jsx(e,{color:"blue",variant:"text",label:"Save",mIcon:b,onClick:o}),n.jsx(e,{color:"red",variant:"text",label:"Delete",onClick:o}),n.jsx(e,{color:"red",variant:"text",label:"Delete",mIcon:F,onClick:o}),n.jsx(e,{color:"black",variant:"text",label:"Cancel",onClick:o}),n.jsx(e,{color:"black",variant:"text",label:"Cancel",mIcon:_,onClick:o}),n.jsx(e,{color:"teal",variant:"text",label:"Save",onClick:o}),n.jsx(e,{color:"teal",variant:"text",label:"Add",mIcon:b,onClick:o})]})}),n.jsx("h2",{children:"Text - disabled"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"text",disabled:!0,label:"Save",onClick:o}),n.jsx(e,{color:"blue",variant:"text",disabled:!0,label:"Save",mIcon:b,onClick:o}),n.jsx(e,{color:"red",variant:"text",disabled:!0,label:"Delete",onClick:o}),n.jsx(e,{color:"red",variant:"text",disabled:!0,label:"Delete",mIcon:F,onClick:o}),n.jsx(e,{color:"black",variant:"text",disabled:!0,label:"Cancel",onClick:o}),n.jsx(e,{color:"black",variant:"text",disabled:!0,label:"Cancel",mIcon:_,onClick:o}),n.jsx(e,{color:"teal",variant:"text",disabled:!0,label:"Save",onClick:o}),n.jsx(e,{color:"teal",variant:"text",disabled:!0,label:"Add",mIcon:b,onClick:o})]})}),n.jsx("h2",{children:"Small Text"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",onClick:o}),n.jsx(e,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",mIcon:b,onClick:o}),n.jsx(e,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",onClick:o}),n.jsx(e,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",mIcon:F,onClick:o}),n.jsx(e,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",onClick:o}),n.jsx(e,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",mIcon:_,onClick:o}),n.jsx(e,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Save",onClick:o}),n.jsx(e,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Add",mIcon:b,onClick:o})]})}),n.jsx("h2",{children:"Icon Positions"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"contained",label:"Save",iconPosition:"left",mIcon:b,onClick:o}),n.jsx(e,{color:"blue",variant:"contained",label:"Save",iconPosition:"right",mIcon:b,onClick:o})]})}),n.jsx("h2",{children:"Multi-Icon buttons"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",label:n.jsx(ln,{}),variant:"contained",iconPosition:"right",mIcon:pn,onClick:o}),n.jsx(e,{color:"blue",label:n.jsx(vn,{}),variant:"contained",iconPosition:"right",mIcon:g,onClick:o}),n.jsx(e,{color:"blue",label:n.jsx(ln,{}),variant:"outlined",iconPosition:"right",mIcon:pn,onClick:o}),n.jsx(e,{color:"blue",label:n.jsx(vn,{}),variant:"outlined",iconPosition:"right",mIcon:g,onClick:o}),n.jsx(e,{color:"blue",label:n.jsx(ln,{}),variant:"text",iconPosition:"right",mIcon:pn,onClick:o}),n.jsx(e,{color:"blue",label:n.jsx(vn,{}),variant:"text",iconPosition:"right",mIcon:g,onClick:o})]})}),n.jsx("h2",{children:"Icon Buttons"}),n.jsxs("div",{children:[n.jsx(e,{color:"blue",variant:"icon",mIcon:b,onClick:o}),n.jsx(e,{color:"blue",variant:"icon",mIcon:H,onClick:o}),n.jsx(e,{color:"blue",variant:"icon",mIcon:D,onClick:o}),n.jsx(e,{color:"blue",variant:"icon",mIcon:g,onClick:l}),n.jsx(e,{color:"red",variant:"icon",mIcon:b,onClick:o}),n.jsx(e,{color:"red",variant:"icon",mIcon:H,onClick:o}),n.jsx(e,{color:"red",variant:"icon",mIcon:D,onClick:o}),n.jsx(e,{color:"red",variant:"icon",mIcon:g,onClick:l}),n.jsx(e,{color:"black",variant:"icon",mIcon:b,onClick:o}),n.jsx(e,{color:"black",variant:"icon",mIcon:H,onClick:o}),n.jsx(e,{color:"black",variant:"icon",mIcon:D,onClick:o}),n.jsx(e,{color:"black",variant:"icon",mIcon:g,onClick:l}),n.jsx(e,{color:"gray",variant:"icon",mIcon:H,onClick:o}),n.jsx(e,{color:"gray",variant:"icon",mIcon:D,onClick:o}),n.jsx(e,{color:"gray",variant:"icon",mIcon:g,onClick:l}),n.jsx(e,{color:"teal",variant:"icon",mIcon:b,onClick:o}),n.jsx(e,{color:"teal",variant:"icon",mIcon:H,onClick:o}),n.jsx(e,{color:"teal",variant:"icon",mIcon:D,onClick:o}),n.jsx(e,{color:"teal",variant:"icon",mIcon:g,onClick:l}),n.jsx(e,{color:"yellow",variant:"icon",mIcon:b,onClick:o}),n.jsx(e,{color:"yellow",variant:"icon",mIcon:H,onClick:o}),n.jsx(e,{color:"yellow",variant:"icon",mIcon:D,onClick:o}),n.jsx(e,{color:"yellow",variant:"icon",mIcon:g,onClick:l}),n.jsxs("div",{style:{background:"black",display:"inline-block"},children:[n.jsx(e,{color:"white",variant:"icon",mIcon:b,onClick:o}),n.jsx(e,{color:"white",variant:"icon",mIcon:H,onClick:o}),n.jsx(e,{color:"white",variant:"icon",mIcon:D,onClick:o}),n.jsx(e,{color:"white",variant:"icon",mIcon:g,onClick:l})]})]}),n.jsx("h2",{children:"Icon Buttons - disabled"}),n.jsxs("div",{children:[n.jsx(e,{color:"blue",variant:"icon",disabled:!0,mIcon:b,onClick:o}),n.jsx(e,{color:"blue",variant:"icon",disabled:!0,mIcon:H,onClick:o}),n.jsx(e,{color:"blue",variant:"icon",disabled:!0,mIcon:D,onClick:o}),n.jsx(e,{color:"blue",variant:"icon",disabled:!0,mIcon:g,onClick:l}),n.jsx(e,{color:"red",variant:"icon",disabled:!0,mIcon:b,onClick:o}),n.jsx(e,{color:"red",variant:"icon",disabled:!0,mIcon:H,onClick:o}),n.jsx(e,{color:"red",variant:"icon",disabled:!0,mIcon:D,onClick:o}),n.jsx(e,{color:"red",variant:"icon",disabled:!0,mIcon:g,onClick:l}),n.jsx(e,{color:"black",variant:"icon",disabled:!0,mIcon:b,onClick:o}),n.jsx(e,{color:"black",variant:"icon",disabled:!0,mIcon:H,onClick:o}),n.jsx(e,{color:"black",variant:"icon",disabled:!0,mIcon:D,onClick:o}),n.jsx(e,{color:"black",variant:"icon",disabled:!0,mIcon:g,onClick:l})]}),n.jsx("h2",{children:"Button Sizes"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"contained",label:"Small",size:"small"}),n.jsx(e,{color:"blue",variant:"contained",label:"Medium (default)"})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"outlined",label:"Small",size:"small",mIcon:b}),n.jsx(e,{color:"blue",variant:"outlined",label:"Medium (default)",mIcon:b})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"black",variant:"icon",size:"small",mIcon:b}),n.jsx(e,{color:"black",variant:"icon",mIcon:b})]})}),n.jsx("h2",{children:"Buttons that open menus"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"outlined",label:"Dropdown with Icons",menuItems:Bn}),n.jsx(e,{color:"blue",variant:"outlined",label:"Dropdown with text",menuItems:i}),n.jsx(e,{color:"blue",variant:"outlined",label:"Dropdown with colored icons",menuItems:r}),n.jsx(e,{color:"blue",variant:"icon",mIcon:g,menuItems:Bn})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on click"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),label:"With Popover"}),n.jsx(e,{color:"blue",variant:"icon",mIcon:zn,popover:n.jsx("p",{children:"Helper Text"}),popoverEvent:"onClick"})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on hover"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),popoverEvent:"onHover",label:"With Popover"}),n.jsx(e,{color:"blue",variant:"icon",mIcon:zn,popoverEvent:"onHover",popover:n.jsx("p",{children:"Helper Text"})})]})}),n.jsx("h2",{children:"Buttons with custom attrs"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"black",variant:"outlined",label:"With data attribute",attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}}),n.jsx(e,{color:"black",variant:"icon",mIcon:b,attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}})]})}),n.jsx("h2",{children:"Buttons with tooltips"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"black",variant:"outlined",label:"One",tooltip:"I can haz a tooltip"}),n.jsx(e,{color:"black",variant:"outlined",label:"Two",tooltip:"I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long."})]})}),n.jsx("h2",{children:"Buttons with href that turn into a tags"}),n.jsx("div",{children:n.jsxs(C,{children:[n.jsx(e,{color:"black",variant:"outlined",label:"With Link",href:"https://www.google.com/"}),n.jsx(e,{color:"black",variant:"outlined",label:"With Link and click handler",href:"https://www.bing.com/",onClick:function(a){a.preventDefault(),alert("Click handler")}}),n.jsx(e,{color:"blue",variant:"icon",mIcon:b,onClick:o,size:"small",href:"https://www.google.com/"})]})})]})};var qn,Xn,Yn;X.parameters={...X.parameters,docs:{...(qn=X.parameters)==null?void 0:qn.docs,source:{originalSource:`({
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
}`,...(Yn=(Xn=X.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Jn,Qn,Zn;tn.parameters={...tn.parameters,docs:{...(Jn=tn.parameters)==null?void 0:Jn.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(Zn=(Qn=tn.parameters)==null?void 0:Qn.docs)==null?void 0:Zn.source}}};const Be=["Playground","KitchenSink"],We=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:tn,Playground:X,__namedExportsOrder:Be,default:ge},Symbol.toStringTag,{value:"Module"}));export{X as P,We as s};
