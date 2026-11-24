var St=Object.defineProperty;var wt=(t,e,n)=>e in t?St(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var st=(t,e,n)=>wt(t,typeof e!="symbol"?e+"":e,n);import{r as Vt,m as Bt,u as J,b as jt,c as Dt,d as Lt,a as Ft}from"./mergeSlotProps-DU4484Lo.js";import{R as Y,r as l}from"./index-wekxHvEx.js";import{_ as kt,a as S}from"./identifier-DEb8G0aq.js";import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{a as lt,u as ut,s as tt,g as vt,b as Nt}from"./generateUtilityClasses-NbEjrlIW.js";import{k as et}from"./emotion-react.browser.esm-CeqoEiNQ.js";function Ot(t,e){if(t==null)return{};var n={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(e.indexOf(s)!==-1)continue;n[s]=t[s]}return n}function Q(t,e){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},Q(t,e)}function $t(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Q(t,e)}const it=Y.createContext(null);function It(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nt(t,e){var n=function(r){return e&&l.isValidElement(r)?e(r):r},s=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){s[o.key]=n(o)}),s}function Ut(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var s=Object.create(null),o=[];for(var r in t)r in e?o.length&&(s[r]=o,o=[]):o.push(r);var i,p={};for(var u in e){if(s[u])for(i=0;i<s[u].length;i++){var f=s[u][i];p[s[u][i]]=n(f)}p[u]=n(u)}for(i=0;i<o.length;i++)p[o[i]]=n(o[i]);return p}function N(t,e,n){return n[e]!=null?n[e]:t.props[e]}function zt(t,e){return nt(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:N(n,"appear",t),enter:N(n,"enter",t),exit:N(n,"exit",t)})})}function _t(t,e,n){var s=nt(t.children),o=Ut(e,s);return Object.keys(o).forEach(function(r){var i=o[r];if(l.isValidElement(i)){var p=r in e,u=r in s,f=e[r],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[r]=l.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:N(i,"exit",t),enter:N(i,"enter",t)}):!u&&p&&!d?o[r]=l.cloneElement(i,{in:!1}):u&&p&&l.isValidElement(f)&&(o[r]=l.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:N(i,"exit",t),enter:N(i,"enter",t)}))}}),o}var At=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Xt={component:"div",childFactory:function(e){return e}},ot=(function(t){$t(e,t);function e(s,o){var r;r=t.call(this,s,o)||this;var i=r.handleExited.bind(It(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,r){var i=r.children,p=r.handleExited,u=r.firstRender;return{children:u?zt(o,p):_t(o,i,p),firstRender:!1}},n.handleExited=function(o,r){var i=nt(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var u=kt({},p.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,r=o.component,i=o.childFactory,p=Ot(o,["component","childFactory"]),u=this.state.contextValue,f=At(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,r===null?Y.createElement(it.Provider,{value:u},f):Y.createElement(it.Provider,{value:u},Y.createElement(r,p,f))},e})(Y.Component);ot.propTypes={};ot.defaultProps=Xt;function fe(t,e){const{className:n,elementType:s,ownerState:o,externalForwardedProps:r,internalForwardedProps:i,shouldForwardComponentProp:p=!1,...u}=e,{component:f,slots:d={[t]:void 0},slotProps:h={[t]:void 0},...g}=r,y=d[t]||s,m=Vt(h[t],o),{props:{component:C,...R},internalRef:B}=Bt({className:n,...u,externalForwardedProps:t==="root"?g:void 0,externalSlotProps:m}),$=J(B,m==null?void 0:m.ref,e.ref),x=t==="root"?C||f:C,c=jt(y,{...t==="root"&&!f&&!d[t]&&i,...t!=="root"&&!d[t]&&i,...R,...x&&!p&&{as:x},...x&&p&&{component:x},ref:$},o);return[y,c]}function H(t){const e=l.useRef(t);return Dt(()=>{e.current=t}),l.useRef((...n)=>(0,e.current)(...n)).current}function at(t){try{return t.matches(":focus-visible")}catch{}return!1}class G{constructor(){st(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=Lt(G.create).current,[n,s]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=s,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Kt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Yt(){return G.use()}function Kt(){let t,e;const n=new Promise((s,o)=>{t=s,e=o});return n.resolve=t,n.reject=e,n}function Wt(t){const{className:e,classes:n,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:p,onExited:u,timeout:f}=t,[d,h]=l.useState(!1),g=S(e,n.ripple,n.rippleVisible,s&&n.ripplePulsate),y={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},m=S(n.child,d&&n.childLeaving,s&&n.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const C=setTimeout(u,f);return()=>{clearTimeout(C)}}},[u,p,f]),O.jsx("span",{className:g,style:y,children:O.jsx("span",{className:m})})}const M=lt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Z=550,Ht=80,Gt=et`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,qt=et`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Jt=et`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Qt=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Zt=tt(Wt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${M.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Gt};
    animation-duration: ${Z}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${M.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${M.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${M.childLeaving} {
    opacity: 0;
    animation-name: ${qt};
    animation-duration: ${Z}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${M.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,te=l.forwardRef(function(e,n){const s=ut({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...p}=s,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const g=l.useRef(!1),y=Ft(),m=l.useRef(null),C=l.useRef(null),R=l.useCallback(c=>{const{pulsate:P,rippleX:E,rippleY:I,rippleSize:F,cb:z}=c;f(T=>[...T,O.jsx(Zt,{classes:{ripple:S(r.ripple,M.ripple),rippleVisible:S(r.rippleVisible,M.rippleVisible),ripplePulsate:S(r.ripplePulsate,M.ripplePulsate),child:S(r.child,M.child),childLeaving:S(r.childLeaving,M.childLeaving),childPulsate:S(r.childPulsate,M.childPulsate)},timeout:Z,pulsate:P,rippleX:E,rippleY:I,rippleSize:F},d.current)]),d.current+=1,h.current=z},[r]),B=l.useCallback((c={},P={},E=()=>{})=>{const{pulsate:I=!1,center:F=o||P.pulsate,fakeElement:z=!1}=P;if((c==null?void 0:c.type)==="mousedown"&&g.current){g.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(g.current=!0);const T=z?null:C.current,j=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let D,w,L;if(F||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)D=Math.round(j.width/2),w=Math.round(j.height/2);else{const{clientX:_,clientY:k}=c.touches&&c.touches.length>0?c.touches[0]:c;D=Math.round(_-j.left),w=Math.round(k-j.top)}if(F)L=Math.sqrt((2*j.width**2+j.height**2)/3),L%2===0&&(L+=1);else{const _=Math.max(Math.abs((T?T.clientWidth:0)-D),D)*2+2,k=Math.max(Math.abs((T?T.clientHeight:0)-w),w)*2+2;L=Math.sqrt(_**2+k**2)}c!=null&&c.touches?m.current===null&&(m.current=()=>{R({pulsate:I,rippleX:D,rippleY:w,rippleSize:L,cb:E})},y.start(Ht,()=>{m.current&&(m.current(),m.current=null)})):R({pulsate:I,rippleX:D,rippleY:w,rippleSize:L,cb:E})},[o,R,y]),$=l.useCallback(()=>{B({},{pulsate:!0})},[B]),x=l.useCallback((c,P)=>{if(y.clear(),(c==null?void 0:c.type)==="touchend"&&m.current){m.current(),m.current=null,y.start(0,()=>{x(c,P)});return}m.current=null,f(E=>E.length>0?E.slice(1):E),h.current=P},[y]);return l.useImperativeHandle(n,()=>({pulsate:$,start:B,stop:x}),[$,B,x]),O.jsx(Qt,{className:S(M.root,r.root,i),ref:C,...p,children:O.jsx(ot,{component:null,exit:!0,children:u})})});function ee(t){return vt("MuiButtonBase",t)}const ne=lt("MuiButtonBase",["root","disabled","focusVisible"]),oe=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:s,classes:o}=t,i=Nt({root:["root",e&&"disabled",n&&"focusVisible"]},ee,o);return n&&s&&(i.root+=` ${s}`),i},re=tt("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ne.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),de=l.forwardRef(function(e,n){const s=ut({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:g=!1,focusVisibleClassName:y,LinkComponent:m="a",onBlur:C,onClick:R,onContextMenu:B,onDragLeave:$,onFocus:x,onFocusVisible:c,onKeyDown:P,onKeyUp:E,onMouseDown:I,onMouseLeave:F,onMouseUp:z,onTouchEnd:T,onTouchMove:j,onTouchStart:D,tabIndex:w=0,TouchRippleProps:L,touchRippleRef:_,type:k,...U}=s,A=l.useRef(null),b=Yt(),ct=J(b.ref,_),[v,K]=l.useState(!1);f&&v&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const pt=b.shouldMount&&!d&&!f;l.useEffect(()=>{v&&g&&!d&&b.pulsate()},[d,g,v,b]);const ft=V(b,"start",I,h),dt=V(b,"stop",B,h),ht=V(b,"stop",$,h),mt=V(b,"stop",z,h),bt=V(b,"stop",a=>{v&&a.preventDefault(),F&&F(a)},h),gt=V(b,"start",D,h),Mt=V(b,"stop",T,h),yt=V(b,"stop",j,h),Rt=V(b,"stop",a=>{at(a.target)||K(!1),C&&C(a)},!1),xt=H(a=>{A.current||(A.current=a.currentTarget),at(a.target)&&(K(!0),c&&c(a)),x&&x(a)}),q=()=>{const a=A.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Et=H(a=>{g&&!a.repeat&&v&&a.key===" "&&b.stop(a,()=>{b.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),P&&P(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!f&&(a.preventDefault(),R&&R(a))}),Ct=H(a=>{g&&a.key===" "&&v&&!a.defaultPrevented&&b.stop(a,()=>{b.pulsate(a)}),E&&E(a),R&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&R(a)});let W=u;W==="button"&&(U.href||U.to)&&(W=m);const X={};if(W==="button"){const a=!!U.formAction;X.type=k===void 0&&!a?"button":k,X.disabled=f}else!U.href&&!U.to&&(X.role="button"),f&&(X["aria-disabled"]=f);const Pt=J(n,A),rt={...s,centerRipple:r,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:g,tabIndex:w,focusVisible:v},Tt=oe(rt);return O.jsxs(re,{as:W,className:S(Tt.root,p),ownerState:rt,onBlur:Rt,onClick:R,onContextMenu:dt,onFocus:xt,onKeyDown:Et,onKeyUp:Ct,onMouseDown:ft,onMouseLeave:bt,onMouseUp:mt,onDragLeave:ht,onTouchEnd:Mt,onTouchMove:yt,onTouchStart:gt,ref:Pt,tabIndex:f?-1:w,type:k,...X,...U,children:[i,pt?O.jsx(te,{ref:ct,center:r,...L}):null]})});function V(t,e,n,s=!1){return H(o=>(n&&n(o),s||t[e](o),!0))}export{de as B,it as T,Q as _,H as a,It as b,$t as c,Ot as d,ot as e,at as i,fe as u};
