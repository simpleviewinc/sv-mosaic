import{a as X,_ as te}from"./identifier-vWKndVvV.js";import{r as a,R as A}from"./index-ePW8zFKp.js";import{c as C,a as be,u as ge,s as ne,k as oe,g as Ie,b as Oe}from"./generateUtilityClasses-CUUJXLh7.js";import{j}from"./jsx-runtime-EKYJJIwR.js";import{a as Ue,u as ze}from"./useIsFocusVisible-BxLBCNny.js";function Ke(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function ce(...e){return a.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Ke(n,t)})},e)}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,l){return n.__proto__=l,n},Z(e,t)}function Ae(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z(e,t)}const pe=A.createContext(null);function Xe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e,t){var n=function(i){return t&&a.isValidElement(i)?t(i):i},l=Object.create(null);return e&&a.Children.map(e,function(o){return o}).forEach(function(o){l[o.key]=n(o)}),l}function Ye(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var l=Object.create(null),o=[];for(var i in e)i in t?o.length&&(l[i]=o,o=[]):o.push(i);var r,c={};for(var u in t){if(l[u])for(r=0;r<l[u].length;r++){var p=l[u][r];c[l[u][r]]=n(p)}c[u]=n(u)}for(r=0;r<o.length;r++)c[o[r]]=n(o[r]);return c}function F(e,t,n){return n[t]!=null?n[t]:e.props[t]}function We(e,t){return ie(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:F(n,"appear",e),enter:F(n,"enter",e),exit:F(n,"exit",e)})})}function He(e,t,n){var l=ie(e.children),o=Ye(t,l);return Object.keys(o).forEach(function(i){var r=o[i];if(a.isValidElement(r)){var c=i in t,u=i in l,p=t[i],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?o[i]=a.cloneElement(r,{onExited:n.bind(null,r),in:!0,exit:F(r,"exit",e),enter:F(r,"enter",e)}):!u&&c&&!d?o[i]=a.cloneElement(r,{in:!1}):u&&c&&a.isValidElement(p)&&(o[i]=a.cloneElement(r,{onExited:n.bind(null,r),in:p.props.in,exit:F(r,"exit",e),enter:F(r,"enter",e)}))}}),o}var Ge=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},qe={component:"div",childFactory:function(t){return t}},re=function(e){Ae(t,e);function t(l,o){var i;i=e.call(this,l,o)||this;var r=i.handleExited.bind(Xe(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var r=i.children,c=i.handleExited,u=i.firstRender;return{children:u?We(o,c):He(o,r,c),firstRender:!1}},n.handleExited=function(o,i){var r=ie(this.props.children);o.key in r||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,i=o.component,r=o.childFactory,c=te(o,["component","childFactory"]),u=this.state.contextValue,p=Ge(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,i===null?A.createElement(pe.Provider,{value:u},p):A.createElement(pe.Provider,{value:u},A.createElement(i,c,p))},t}(A.Component);re.propTypes={};re.defaultProps=qe;const Je=typeof window<"u"?a.useLayoutEffect:a.useEffect;function Rt(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function H(e){const t=a.useRef(e);return Je(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function Qe(e){const{className:t,classes:n,pulsate:l=!1,rippleX:o,rippleY:i,rippleSize:r,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=C(t,n.ripple,n.rippleVisible,l&&n.ripplePulsate),T={width:r,height:r,top:-(r/2)+i,left:-(r/2)+o},h=C(n.child,d&&n.childLeaving,l&&n.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),j.jsx("span",{className:b,style:T,children:j.jsx("span",{className:h})})}const m=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Ze=["center","classes","className"];let G=e=>e,fe,de,he,me;const ee=550,et=80,tt=oe(fe||(fe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),nt=oe(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ot=oe(he||(he=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),it=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),rt=ne(Qe,{name:"MuiTouchRipple",slot:"Ripple"})(me||(me=G`
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
`),m.rippleVisible,tt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,nt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ot,({theme:e})=>e.transitions.easing.easeInOut),st=a.forwardRef(function(t,n){const l=ge({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:r}=l,c=te(l,Ze),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),T=Ue(),h=a.useRef(null),R=a.useRef(null),I=a.useCallback(f=>{const{pulsate:y,rippleX:M,rippleY:L,rippleSize:$,cb:U}=f;p(x=>[...x,j.jsx(rt,{classes:{ripple:C(i.ripple,m.ripple),rippleVisible:C(i.rippleVisible,m.rippleVisible),ripplePulsate:C(i.ripplePulsate,m.ripplePulsate),child:C(i.child,m.child),childLeaving:C(i.childLeaving,m.childLeaving),childPulsate:C(i.childPulsate,m.childPulsate)},timeout:ee,pulsate:y,rippleX:M,rippleY:L,rippleSize:$},d.current)]),d.current+=1,g.current=U},[i]),N=a.useCallback((f={},y={},M=()=>{})=>{const{pulsate:L=!1,center:$=o||y.pulsate,fakeElement:U=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const x=U?null:R.current,B=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,w,D;if($||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),w=Math.round(B.height/2);else{const{clientX:S,clientY:P}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(S-B.left),w=Math.round(P-B.top)}if($)D=Math.sqrt((2*B.width**2+B.height**2)/3),D%2===0&&(D+=1);else{const S=Math.max(Math.abs((x?x.clientWidth:0)-v),v)*2+2,P=Math.max(Math.abs((x?x.clientHeight:0)-w),w)*2+2;D=Math.sqrt(S**2+P**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{I({pulsate:L,rippleX:v,rippleY:w,rippleSize:D,cb:M})},T.start(et,()=>{h.current&&(h.current(),h.current=null)})):I({pulsate:L,rippleX:v,rippleY:w,rippleSize:D,cb:M})},[o,I,T]),O=a.useCallback(()=>{N({},{pulsate:!0})},[N]),_=a.useCallback((f,y)=>{if(T.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,T.start(0,()=>{_(f,y)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),g.current=y},[T]);return a.useImperativeHandle(n,()=>({pulsate:O,start:N,stop:_}),[O,N,_]),j.jsx(it,X({className:C(m.root,i.root,r),ref:R},c,{children:j.jsx(re,{component:null,exit:!0,children:u})}))});function at(e){return Ie("MuiButtonBase",e)}const lt=be("MuiButtonBase",["root","disabled","focusVisible"]),ut=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ct=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:l,classes:o}=e,r=Oe({root:["root",t&&"disabled",n&&"focusVisible"]},at,o);return n&&l&&(r.root+=` ${l}`),r},pt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${lt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),yt=a.forwardRef(function(t,n){const l=ge({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:r,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:T="a",onBlur:h,onClick:R,onContextMenu:I,onDragLeave:N,onFocus:O,onFocusVisible:_,onKeyDown:f,onKeyUp:y,onMouseDown:M,onMouseLeave:L,onMouseUp:$,onTouchEnd:U,onTouchMove:x,onTouchStart:B,tabIndex:v=0,TouchRippleProps:w,touchRippleRef:D,type:S}=l,P=te(l,ut),z=a.useRef(null),E=a.useRef(null),Re=ce(E,D),{isFocusVisibleRef:se,onFocus:ye,onBlur:Me,ref:xe}=ze(),[k,Y]=a.useState(!1);p&&k&&Y(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{Y(!0),z.current.focus()}}),[]);const[q,Ee]=a.useState(!1);a.useEffect(()=>{Ee(!0)},[]);const Ce=q&&!d&&!p;a.useEffect(()=>{k&&b&&!d&&q&&E.current.pulsate()},[d,b,k,q]);function V(s,le,$e=g){return H(ue=>(le&&le(ue),!$e&&E.current&&E.current[s](ue),!0))}const Te=V("start",M),ve=V("stop",I),Pe=V("stop",N),Ve=V("stop",$),Be=V("stop",s=>{k&&s.preventDefault(),L&&L(s)}),we=V("start",B),De=V("stop",U),Le=V("stop",x),Se=V("stop",s=>{Me(s),se.current===!1&&Y(!1),h&&h(s)},!1),ke=H(s=>{z.current||(z.current=s.currentTarget),ye(s),se.current===!0&&(Y(!0),_&&_(s)),O&&O(s)}),J=()=>{const s=z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Q=a.useRef(!1),Fe=H(s=>{b&&!Q.current&&k&&E.current&&s.key===" "&&(Q.current=!0,E.current.stop(s,()=>{E.current.start(s)})),s.target===s.currentTarget&&J()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&J()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),je=H(s=>{b&&s.key===" "&&E.current&&k&&!s.defaultPrevented&&(Q.current=!1,E.current.stop(s,()=>{E.current.pulsate(s)})),y&&y(s),R&&s.target===s.currentTarget&&J()&&s.key===" "&&!s.defaultPrevented&&R(s)});let W=u;W==="button"&&(P.href||P.to)&&(W=T);const K={};W==="button"?(K.type=S===void 0?"button":S,K.disabled=p):(!P.href&&!P.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Ne=ce(n,xe,z),ae=X({},l,{centerRipple:i,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),_e=ct(ae);return j.jsxs(pt,X({as:W,className:C(_e.root,c),ownerState:ae,onBlur:Se,onClick:R,onContextMenu:ve,onFocus:ke,onKeyDown:Fe,onKeyUp:je,onMouseDown:Te,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:Pe,onTouchEnd:De,onTouchMove:Le,onTouchStart:we,ref:Ne,tabIndex:p?-1:v,type:S},K,P,{children:[r,Ce?j.jsx(st,X({ref:Re,center:i},w)):null]}))});export{yt as B,pe as T,Z as _,Je as a,H as b,Rt as c,Xe as d,Ae as e,re as f,Ke as s,ce as u};
