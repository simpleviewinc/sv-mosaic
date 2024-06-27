import{b as A,_ as te,d as C,a as me,s as ne,u as be,g as Ue,e as _e}from"./useThemeProps-Ds-LJhvX.js";import{r as a,a as W}from"./index-BP8_t0zE.js";import{j as N}from"./jsx-runtime-CexXSJP5.js";import{k as oe}from"./emotion-react.browser.esm-DIgfljIv.js";import{_ as ze,c as Oe,T as ce,u as Z,d as Ke,a as H}from"./assertThisInitialized-CO-dlV3K.js";function ie(e,s){var r=function(t){return s&&a.isValidElement(t)?s(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function Ae(e,s){e=e||{},s=s||{};function r(f){return f in s?s[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in s?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in s){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function F(e,s,r){return r[s]!=null?r[s]:e.props[s]}function Xe(e,s){return ie(e.children,function(r){return a.cloneElement(r,{onExited:s.bind(null,r),in:!0,appear:F(r,"appear",e),enter:F(r,"enter",e),exit:F(r,"exit",e)})})}function Ye(e,s,r){var l=ie(e.children),n=Ae(s,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in s,u=t in l,p=s[t],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:F(o,"exit",e),enter:F(o,"enter",e)}):!u&&c&&!f?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:F(o,"exit",e),enter:F(o,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(s){return e[s]})},He={component:"div",childFactory:function(s){return s}},se=function(e){ze(s,e);function s(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Oe(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var r=s.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},s.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Xe(n,c):Ye(n,o,c),firstRender:!1}},r.handleExited=function(n,t){var o=ie(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=te(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ce.Provider,{value:u},p):W.createElement(ce.Provider,{value:u},W.createElement(t,c,p))},s}(W.Component);se.propTypes={};se.defaultProps=He;function Ge(e){const{className:s,classes:r,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=C(s,r.ripple,r.rippleVisible,l&&r.ripplePulsate),P={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=C(r.child,f&&r.childLeaving,l&&r.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),N.jsx("span",{className:b,style:P,children:N.jsx("span",{className:h})})}const m=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),qe=["center","classes","className"];let G=e=>e,pe,de,fe,he;const ee=550,Je=80,Qe=oe(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ze=oe(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),et=oe(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),tt=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),nt=ne(Ge,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
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
`),m.rippleVisible,Qe,ee,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,Ze,ee,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,et,({theme:e})=>e.transitions.easing.easeInOut),ot=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=te(l,qe),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),P=a.useRef(null),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(P.current)},[]);const U=a.useCallback(d=>{const{pulsate:M,rippleX:T,rippleY:S,rippleSize:I,cb:z}=d;p(x=>[...x,N.jsx(nt,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:ee,pulsate:M,rippleX:T,rippleY:S,rippleSize:I},f.current)]),f.current+=1,g.current=z},[t]),$=a.useCallback((d={},M={},T)=>{const{pulsate:S=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const x=z?null:R.current,B=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let E,D,L;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)E=Math.round(B.width/2),D=Math.round(B.height/2);else{const{clientX:k,clientY:v}=d.touches&&d.touches.length>0?d.touches[0]:d;E=Math.round(k-B.left),D=Math.round(v-B.top)}if(I)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((x?x.clientWidth:0)-E),E)*2+2,v=Math.max(Math.abs((x?x.clientHeight:0)-D),D)*2+2;L=Math.sqrt(k**2+v**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{U({pulsate:S,rippleX:E,rippleY:D,rippleSize:L,cb:T})},P.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Je)):U({pulsate:S,rippleX:E,rippleY:D,rippleSize:L,cb:T})},[n,U]),_=a.useCallback(()=>{$({},{pulsate:!0})},[$]),j=a.useCallback((d,M)=>{if(clearTimeout(P.current),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,P.current=setTimeout(()=>{j(d,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return a.useImperativeHandle(r,()=>({pulsate:_,start:$,stop:j}),[_,$,j]),N.jsx(tt,A({className:C(m.root,t.root,o),ref:R},c,{children:N.jsx(se,{component:null,exit:!0,children:u})}))});function it(e){return Ue("MuiButtonBase",e)}const st=me("MuiButtonBase",["root","disabled","focusVisible"]),rt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],at=e=>{const{disabled:s,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=_e({root:["root",s&&"disabled",r&&"focusVisible"]},it,n);return r&&l&&(o.root+=` ${l}`),o},lt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${st.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:P="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:$,onFocus:_,onFocusVisible:j,onKeyDown:d,onKeyUp:M,onMouseDown:T,onMouseLeave:S,onMouseUp:I,onTouchEnd:z,onTouchMove:x,onTouchStart:B,tabIndex:E=0,TouchRippleProps:D,touchRippleRef:L,type:k}=l,v=te(l,rt),O=a.useRef(null),y=a.useRef(null),ge=Z(y,L),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:Te}=Ke(),[w,X]=a.useState(!1);p&&w&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[q,xe]=a.useState(!1);a.useEffect(()=>{xe(!0)},[]);const ye=q&&!f&&!p;a.useEffect(()=>{w&&b&&!f&&q&&y.current.pulsate()},[f,b,w,q]);function V(i,le,Ie=g){return H(ue=>(le&&le(ue),!Ie&&y.current&&y.current[i](ue),!0))}const Ce=V("start",T),Ee=V("stop",U),ve=V("stop",$),Ve=V("stop",I),Pe=V("stop",i=>{w&&i.preventDefault(),S&&S(i)}),Be=V("start",B),De=V("stop",z),Le=V("stop",x),Se=V("stop",i=>{Me(i),re.current===!1&&X(!1),h&&h(i)},!1),ke=H(i=>{O.current||(O.current=i.currentTarget),Re(i),re.current===!0&&(X(!0),j&&j(i)),_&&_(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),we=H(i=>{b&&!Q.current&&w&&y.current&&i.key===" "&&(Q.current=!0,y.current.stop(i,()=>{y.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),d&&d(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),Fe=H(i=>{b&&i.key===" "&&y.current&&w&&!i.defaultPrevented&&(Q.current=!1,y.current.stop(i,()=>{y.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let Y=u;Y==="button"&&(v.href||v.to)&&(Y=P);const K={};Y==="button"?(K.type=k===void 0?"button":k,K.disabled=p):(!v.href&&!v.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Ne=Z(Te,O),$e=Z(r,Ne),ae=A({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:E,focusVisible:w}),je=at(ae);return N.jsxs(lt,A({as:Y,className:C(je.root,c),ownerState:ae,onBlur:Se,onClick:R,onContextMenu:Ee,onFocus:ke,onKeyDown:we,onKeyUp:Fe,onMouseDown:Ce,onMouseLeave:Pe,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:De,onTouchMove:Le,onTouchStart:Be,ref:$e,tabIndex:p?-1:E,type:k},K,v,{children:[o,ye?N.jsx(ot,A({ref:ge,center:t},D)):null]}))});export{mt as B,se as T};
