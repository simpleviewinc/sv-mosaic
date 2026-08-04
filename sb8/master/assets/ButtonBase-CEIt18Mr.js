var Vt=Object.defineProperty;var Bt=(t,e,n)=>e in t?Vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var it=(t,e,n)=>Bt(t,typeof e!="symbol"?e+"":e,n);import{R as X,r as l}from"./index-wekxHvEx.js";import{_ as St,c as x,k as Z}from"./identifier-Bq1wI7MV.js";import{j as N}from"./jsx-runtime-D_zvdyIk.js";import{a as lt,u as ut,s as tt,g as wt,b as jt}from"./createSimplePaletteValueFilter-BVevyrl8.js";import{c as Dt,d as Lt,b as kt,a as st}from"./useSlot-VZdH5auH.js";function vt(t,e){if(t==null)return{};var n={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(e.indexOf(s)!==-1)continue;n[s]=t[s]}return n}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},J(t,e)}function Nt(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,J(t,e)}const rt=X.createContext(null);function Ot(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function et(t,e){var n=function(i){return e&&l.isValidElement(i)?e(i):i},s=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){s[o.key]=n(o)}),s}function $t(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var s=Object.create(null),o=[];for(var i in t)i in e?o.length&&(s[i]=o,o=[]):o.push(i);var r,p={};for(var u in e){if(s[u])for(r=0;r<s[u].length;r++){var f=s[u][r];p[s[u][r]]=n(f)}p[u]=n(u)}for(r=0;r<o.length;r++)p[o[r]]=n(o[r]);return p}function v(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ft(t,e){return et(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:v(n,"appear",t),enter:v(n,"enter",t),exit:v(n,"exit",t)})})}function It(t,e,n){var s=et(t.children),o=$t(e,s);return Object.keys(o).forEach(function(i){var r=o[i];if(l.isValidElement(r)){var p=i in e,u=i in s,f=e[i],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[i]=l.cloneElement(r,{onExited:n.bind(null,r),in:!0,exit:v(r,"exit",t),enter:v(r,"enter",t)}):!u&&p&&!d?o[i]=l.cloneElement(r,{in:!1}):u&&p&&l.isValidElement(f)&&(o[i]=l.cloneElement(r,{onExited:n.bind(null,r),in:f.props.in,exit:v(r,"exit",t),enter:v(r,"enter",t)}))}}),o}var Ut=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},zt={component:"div",childFactory:function(e){return e}},nt=(function(t){Nt(e,t);function e(s,o){var i;i=t.call(this,s,o)||this;var r=i.handleExited.bind(Ot(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,i){var r=i.children,p=i.handleExited,u=i.firstRender;return{children:u?Ft(o,p):It(o,r,p),firstRender:!1}},n.handleExited=function(o,i){var r=et(this.props.children);o.key in r||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=St({},p.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,i=o.component,r=o.childFactory,p=vt(o,["component","childFactory"]),u=this.state.contextValue,f=Ut(this.state.children).map(r);return delete p.appear,delete p.enter,delete p.exit,i===null?X.createElement(rt.Provider,{value:u},f):X.createElement(rt.Provider,{value:u},X.createElement(i,p,f))},e})(X.Component);nt.propTypes={};nt.defaultProps=zt;function H(t){const e=l.useRef(t);return Dt(()=>{e.current=t}),l.useRef((...n)=>(0,e.current)(...n)).current}function at(t){try{return t.matches(":focus-visible")}catch{}return!1}class G{constructor(){it(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=Lt(G.create).current,[n,s]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=s,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=At(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function _t(){return G.use()}function At(){let t,e;const n=new Promise((s,o)=>{t=s,e=o});return n.resolve=t,n.reject=e,n}function Xt(t){const{className:e,classes:n,pulsate:s=!1,rippleX:o,rippleY:i,rippleSize:r,in:p,onExited:u,timeout:f}=t,[d,h]=l.useState(!1),M=x(e,n.ripple,n.rippleVisible,s&&n.ripplePulsate),V={width:r,height:r,top:-(r/2)+i,left:-(r/2)+o},b=x(n.child,d&&n.childLeaving,s&&n.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const j=setTimeout(u,f);return()=>{clearTimeout(j)}}},[u,p,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:b})})}const g=lt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Yt=80,Kt=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Wt=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Ht=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Gt=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),qt=tt(Xt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Kt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Wt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ht};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Jt=l.forwardRef(function(e,n){const s=ut({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:r,...p}=s,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=kt(),b=l.useRef(null),j=l.useRef(null),C=l.useCallback(c=>{const{pulsate:y,rippleX:R,rippleY:F,rippleSize:D,cb:U}=c;f(E=>[...E,N.jsx(qt,{classes:{ripple:x(i.ripple,g.ripple),rippleVisible:x(i.rippleVisible,g.rippleVisible),ripplePulsate:x(i.ripplePulsate,g.ripplePulsate),child:x(i.child,g.child),childLeaving:x(i.childLeaving,g.childLeaving),childPulsate:x(i.childPulsate,g.childPulsate)},timeout:Q,pulsate:y,rippleX:R,rippleY:F,rippleSize:D},d.current)]),d.current+=1,h.current=U},[i]),O=l.useCallback((c={},y={},R=()=>{})=>{const{pulsate:F=!1,center:D=o||y.pulsate,fakeElement:U=!1}=y;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=U?null:j.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,T,w;if(D||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),T=Math.round(B.height/2);else{const{clientX:z,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-B.left),T=Math.round(L-B.top)}if(D)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-S),S)*2+2,L=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;w=Math.sqrt(z**2+L**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{C({pulsate:F,rippleX:S,rippleY:T,rippleSize:w,cb:R})},V.start(Yt,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:F,rippleX:S,rippleY:T,rippleSize:w,cb:R})},[o,C,V]),Y=l.useCallback(()=>{O({},{pulsate:!0})},[O]),$=l.useCallback((c,y)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{$(c,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:O,stop:$}),[Y,O,$]),N.jsx(Gt,{className:x(g.root,i.root,r),ref:j,...p,children:N.jsx(nt,{component:null,exit:!0,children:u})})});function Qt(t){return wt("MuiButtonBase",t)}const Zt=lt("MuiButtonBase",["root","disabled","focusVisible"]),te=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:s,classes:o}=t,r=jt({root:["root",e&&"disabled",n&&"focusVisible"]},Qt,o);return n&&s&&(r.root+=` ${s}`),r},ee=tt("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Zt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),le=l.forwardRef(function(e,n){const s=ut({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:r,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:j,onClick:C,onContextMenu:O,onDragLeave:Y,onFocus:$,onFocusVisible:c,onKeyDown:y,onKeyUp:R,onMouseDown:F,onMouseLeave:D,onMouseUp:U,onTouchEnd:E,onTouchMove:B,onTouchStart:S,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:z,type:L,...I}=s,_=l.useRef(null),m=_t(),ct=st(m.ref,z),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),_.current.focus()}}),[]);const pt=m.shouldMount&&!d&&!f;l.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const ft=P(m,"start",F,h),dt=P(m,"stop",O,h),ht=P(m,"stop",Y,h),mt=P(m,"stop",U,h),bt=P(m,"stop",a=>{k&&a.preventDefault(),D&&D(a)},h),gt=P(m,"start",S,h),Mt=P(m,"stop",E,h),Rt=P(m,"stop",B,h),yt=P(m,"stop",a=>{at(a.target)||K(!1),j&&j(a)},!1),Et=H(a=>{_.current||(_.current=a.currentTarget),at(a.target)&&(K(!0),c&&c(a)),$&&$(a)}),q=()=>{const a=_.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},xt=H(a=>{M&&!a.repeat&&k&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),y&&y(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!f&&(a.preventDefault(),C&&C(a))}),Ct=H(a=>{M&&a.key===" "&&k&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),C&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&C(a)});let W=u;W==="button"&&(I.href||I.to)&&(W=b);const A={};if(W==="button"){const a=!!I.formAction;A.type=L===void 0&&!a?"button":L,A.disabled=f}else!I.href&&!I.to&&(A.role="button"),f&&(A["aria-disabled"]=f);const Tt=st(n,_),ot={...s,centerRipple:i,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:k},Pt=te(ot);return N.jsxs(ee,{as:W,className:x(Pt.root,p),ownerState:ot,onBlur:yt,onClick:C,onContextMenu:dt,onFocus:Et,onKeyDown:xt,onKeyUp:Ct,onMouseDown:ft,onMouseLeave:bt,onMouseUp:mt,onDragLeave:ht,onTouchEnd:Mt,onTouchMove:Rt,onTouchStart:gt,ref:Tt,tabIndex:f?-1:T,type:L,...A,...I,children:[r,pt?N.jsx(Jt,{ref:ct,center:i,...w}):null]})});function P(t,e,n,s=!1){return H(o=>(n&&n(o),s||t[e](o),!0))}export{le as B,rt as T,J as _,Ot as a,Nt as b,vt as c,nt as d,at as i,H as u};
