import{a as X,_ as oe}from"./identifier-DOqdnZ6L.js";import{r as o,R as A}from"./index-D0AnReJb.js";import{c as x,a as Me,u as Te,s as se,k as ae,g as Ae,b as Xe}from"./generateUtilityClasses-BL8vvUJw.js";import{j as N}from"./jsx-runtime-EKYJJIwR.js";function Ye(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function he(...e){return o.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Ye(n,t)})},e)}const me={};function We(e,t){const n=o.useRef(me);return n.current===me&&(n.current=e(t)),n}const He=[];function Ge(e){o.useEffect(e,He)}class G{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new G}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function qe(){const e=We(G.create).current;return Ge(e.disposeEffect),e}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,u){return n.__proto__=u,n},ne(e,t)}function Ze(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ne(e,t)}const be=A.createContext(null);function Je(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){var n=function(i){return t&&o.isValidElement(i)?t(i):i},u=Object.create(null);return e&&o.Children.map(e,function(r){return r}).forEach(function(r){u[r.key]=n(r)}),u}function Qe(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var u=Object.create(null),r=[];for(var i in e)i in t?r.length&&(u[i]=r,r=[]):r.push(i);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=n(p)}c[l]=n(l)}for(s=0;s<r.length;s++)c[r[s]]=n(r[s]);return c}function k(e,t,n){return n[t]!=null?n[t]:e.props[t]}function et(e,t){return ue(e.children,function(n){return o.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:k(n,"appear",e),enter:k(n,"enter",e),exit:k(n,"exit",e)})})}function tt(e,t,n){var u=ue(e.children),r=Qe(t,u);return Object.keys(r).forEach(function(i){var s=r[i];if(o.isValidElement(s)){var c=i in t,l=i in u,p=t[i],d=o.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[i]=o.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:k(s,"exit",e),enter:k(s,"enter",e)}):!l&&c&&!d?r[i]=o.cloneElement(s,{in:!1}):l&&c&&o.isValidElement(p)&&(r[i]=o.cloneElement(s,{onExited:n.bind(null,s),in:p.props.in,exit:k(s,"exit",e),enter:k(s,"enter",e)}))}}),r}var nt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},rt={component:"div",childFactory:function(t){return t}},le=function(e){Ze(t,e);function t(u,r){var i;i=e.call(this,u,r)||this;var s=i.handleExited.bind(Je(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,i){var s=i.children,c=i.handleExited,l=i.firstRender;return{children:l?et(r,c):tt(r,s,c),firstRender:!1}},n.handleExited=function(r,i){var s=ue(this.props.children);r.key in s||(r.props.onExited&&r.props.onExited(i),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,i=r.component,s=r.childFactory,c=oe(r,["component","childFactory"]),l=this.state.contextValue,p=nt(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?A.createElement(be.Provider,{value:l},p):A.createElement(be.Provider,{value:l},A.createElement(i,c,p))},t}(A.Component);le.propTypes={};le.defaultProps=rt;const it=typeof window<"u"?o.useLayoutEffect:o.useEffect;function H(e){const t=o.useRef(e);return it(()=>{t.current=e}),o.useRef((...n)=>(0,t.current)(...n)).current}let q=!0,re=!1;const ot=new G,st={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function at(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&st[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function ut(e){e.metaKey||e.altKey||e.ctrlKey||(q=!0)}function te(){q=!1}function lt(){this.visibilityState==="hidden"&&re&&(q=!0)}function ct(e){e.addEventListener("keydown",ut,!0),e.addEventListener("mousedown",te,!0),e.addEventListener("pointerdown",te,!0),e.addEventListener("touchstart",te,!0),e.addEventListener("visibilitychange",lt,!0)}function pt(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return q||at(t)}function ft(){const e=o.useCallback(r=>{r!=null&&ct(r.ownerDocument)},[]),t=o.useRef(!1);function n(){return t.current?(re=!0,ot.start(100,()=>{re=!1}),t.current=!1,!0):!1}function u(r){return pt(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:n,ref:e}}function dt(e){const{className:t,classes:n,pulsate:u=!1,rippleX:r,rippleY:i,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=o.useState(!1),b=x(t,n.ripple,n.rippleVisible,u&&n.ripplePulsate),C={width:s,height:s,top:-(s/2)+i,left:-(s/2)+r},h=x(n.child,d&&n.childLeaving,u&&n.childPulsate);return!c&&!d&&g(!0),o.useEffect(()=>{if(!c&&l!=null){const y=setTimeout(l,p);return()=>{clearTimeout(y)}}},[l,c,p]),N.jsx("span",{className:b,style:C,children:N.jsx("span",{className:h})})}const m=Me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ht=["center","classes","className"];let Z=e=>e,ge,ye,Re,Ee;const ie=550,mt=80,bt=ae(ge||(ge=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),gt=ae(ye||(ye=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),yt=ae(Re||(Re=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Rt=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Et=se(dt,{name:"MuiTouchRipple",slot:"Ripple"})(Ee||(Ee=Z`
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
`),m.rippleVisible,bt,ie,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,gt,ie,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,yt,({theme:e})=>e.transitions.easing.easeInOut),Mt=o.forwardRef(function(t,n){const u=Te({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:s}=u,c=oe(u,ht),[l,p]=o.useState([]),d=o.useRef(0),g=o.useRef(null);o.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=o.useRef(!1),C=qe(),h=o.useRef(null),y=o.useRef(null),_=o.useCallback(f=>{const{pulsate:R,rippleX:E,rippleY:D,rippleSize:O,cb:$}=f;p(M=>[...M,N.jsx(Et,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ie,pulsate:R,rippleX:E,rippleY:D,rippleSize:O},d.current)]),d.current+=1,g.current=$},[i]),S=o.useCallback((f={},R={},E=()=>{})=>{const{pulsate:D=!1,center:O=r||R.pulsate,fakeElement:$=!1}=R;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=$?null:y.current,P=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,L,B;if(O||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(P.width/2),L=Math.round(P.height/2);else{const{clientX:I,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(I-P.left),L=Math.round(V-P.top)}if(O)B=Math.sqrt((2*P.width**2+P.height**2)/3),B%2===0&&(B+=1);else{const I=Math.max(Math.abs((M?M.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((M?M.clientHeight:0)-L),L)*2+2;B=Math.sqrt(I**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:D,rippleX:v,rippleY:L,rippleSize:B,cb:E})},C.start(mt,()=>{h.current&&(h.current(),h.current=null)})):_({pulsate:D,rippleX:v,rippleY:L,rippleSize:B,cb:E})},[r,_,C]),U=o.useCallback(()=>{S({},{pulsate:!0})},[S]),j=o.useCallback((f,R)=>{if(C.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.start(0,()=>{j(f,R)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=R},[C]);return o.useImperativeHandle(n,()=>({pulsate:U,start:S,stop:j}),[U,S,j]),N.jsx(Rt,X({className:x(m.root,i.root,s),ref:y},c,{children:N.jsx(le,{component:null,exit:!0,children:l})}))});function Tt(e){return Ae("MuiButtonBase",e)}const xt=Me("MuiButtonBase",["root","disabled","focusVisible"]),Ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],vt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:u,classes:r}=e,s=Xe({root:["root",t&&"disabled",n&&"focusVisible"]},Tt,r);return n&&u&&(s.root+=` ${u}`),s},Vt=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${xt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),It=o.forwardRef(function(t,n){const u=Te({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:y,onContextMenu:_,onDragLeave:S,onFocus:U,onFocusVisible:j,onKeyDown:f,onKeyUp:R,onMouseDown:E,onMouseLeave:D,onMouseUp:O,onTouchEnd:$,onTouchMove:M,onTouchStart:P,tabIndex:v=0,TouchRippleProps:L,touchRippleRef:B,type:I}=u,V=oe(u,Ct),K=o.useRef(null),T=o.useRef(null),xe=he(T,B),{isFocusVisibleRef:ce,onFocus:Ce,onBlur:ve,ref:Ve}=ft(),[F,Y]=o.useState(!1);p&&F&&Y(!1),o.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),K.current.focus()}}),[]);const[J,we]=o.useState(!1);o.useEffect(()=>{we(!0)},[]);const Pe=J&&!d&&!p;o.useEffect(()=>{F&&b&&!d&&J&&T.current.pulsate()},[d,b,F,J]);function w(a,fe,ze=g){return H(de=>(fe&&fe(de),!ze&&T.current&&T.current[a](de),!0))}const Le=w("start",E),Be=w("stop",_),De=w("stop",S),Ie=w("stop",O),Fe=w("stop",a=>{F&&a.preventDefault(),D&&D(a)}),ke=w("start",P),Ne=w("stop",$),Se=w("stop",M),je=w("stop",a=>{ve(a),ce.current===!1&&Y(!1),h&&h(a)},!1),Oe=H(a=>{K.current||(K.current=a.currentTarget),Ce(a),ce.current===!0&&(Y(!0),j&&j(a)),U&&U(a)}),Q=()=>{const a=K.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},ee=o.useRef(!1),_e=H(a=>{b&&!ee.current&&F&&T.current&&a.key===" "&&(ee.current=!0,T.current.stop(a,()=>{T.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),y&&y(a))}),Ue=H(a=>{b&&a.key===" "&&T.current&&F&&!a.defaultPrevented&&(ee.current=!1,T.current.stop(a,()=>{T.current.pulsate(a)})),R&&R(a),y&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&y(a)});let W=l;W==="button"&&(V.href||V.to)&&(W=C);const z={};W==="button"?(z.type=I===void 0?"button":I,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const $e=he(n,Ve,K),pe=X({},u,{centerRipple:i,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:F}),Ke=vt(pe);return N.jsxs(Vt,X({as:W,className:x(Ke.root,c),ownerState:pe,onBlur:je,onClick:y,onContextMenu:Be,onFocus:Oe,onKeyDown:_e,onKeyUp:Ue,onMouseDown:Le,onMouseLeave:Fe,onMouseUp:Ie,onDragLeave:De,onTouchEnd:Ne,onTouchMove:Se,onTouchStart:ke,ref:$e,tabIndex:p?-1:v,type:I},z,V,{children:[s,Pe?N.jsx(Mt,X({ref:xe,center:i},L)):null]}))});export{It as B,be as T,ne as _,H as a,ft as b,it as c,qe as d,Je as e,Ze as f,le as g,Ye as s,he as u};
