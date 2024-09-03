import{o as Ie,e as C,a as he,k as ee,s as te,u as me,_ as be,d as H,g as _e,f as Ue}from"./generateUtilityClasses-BPeOZGYv.js";import{r as a,a as X}from"./index-BP8_t0zE.js";import{j as N}from"./jsx-runtime-nGUw9YhZ.js";import{_ as ze,c as Oe,d as Ke,T as le,e as Ae,u as ue,f as We,a as Y}from"./useIsFocusVisible-B0UKn5st.js";function ne(e,s){var r=function(t){return s&&a.isValidElement(t)?s(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function Xe(e,s){e=e||{},s=s||{};function r(f){return f in s?s[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in s?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in s){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function F(e,s,r){return r[s]!=null?r[s]:e.props[s]}function Ye(e,s){return ne(e.children,function(r){return a.cloneElement(r,{onExited:s.bind(null,r),in:!0,appear:F(r,"appear",e),enter:F(r,"enter",e),exit:F(r,"exit",e)})})}function He(e,s,r){var l=ne(e.children),n=Xe(s,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in s,u=t in l,p=s[t],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:F(o,"exit",e),enter:F(o,"enter",e)}):!u&&c&&!f?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:F(o,"exit",e),enter:F(o,"enter",e)}))}}),n}var Ge=Object.values||function(e){return Object.keys(e).map(function(s){return e[s]})},qe={component:"div",childFactory:function(s){return s}},oe=function(e){ze(s,e);function s(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Oe(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var r=s.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},s.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ye(n,c):He(n,o,c),firstRender:!1}},r.handleExited=function(n,t){var o=ne(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Ie({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=Ke(n,["component","childFactory"]),u=this.state.contextValue,p=Ge(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?X.createElement(le.Provider,{value:u},p):X.createElement(le.Provider,{value:u},X.createElement(t,c,p))},s}(X.Component);oe.propTypes={};oe.defaultProps=qe;function Je(e){const{className:s,classes:r,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=C(s,r.ripple,r.rippleVisible,l&&r.ripplePulsate),E={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=C(r.child,f&&r.childLeaving,l&&r.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),N.jsx("span",{className:b,style:E,children:N.jsx("span",{className:h})})}const m=he("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Qe=["center","classes","className"];let G=e=>e,ce,pe,de,fe;const Z=550,Ze=80,et=ee(ce||(ce=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),tt=ee(pe||(pe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),nt=ee(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ot=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=te(Je,{name:"MuiTouchRipple",slot:"Ripple"})(fe||(fe=G`
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
`),m.rippleVisible,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,tt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,nt,({theme:e})=>e.transitions.easing.easeInOut),st=a.forwardRef(function(s,r){const l=me({props:s,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=be(l,Qe),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),E=Ae(),h=a.useRef(null),R=a.useRef(null),_=a.useCallback(d=>{const{pulsate:M,rippleX:x,rippleY:S,rippleSize:I,cb:z}=d;p(y=>[...y,N.jsx(it,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:x,rippleY:S,rippleSize:I},f.current)]),f.current+=1,g.current=z},[t]),$=a.useCallback((d={},M={},x=()=>{})=>{const{pulsate:S=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const y=z?null:R.current,B=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,D,L;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)v=Math.round(B.width/2),D=Math.round(B.height/2);else{const{clientX:k,clientY:V}=d.touches&&d.touches.length>0?d.touches[0]:d;v=Math.round(k-B.left),D=Math.round(V-B.top)}if(I)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((y?y.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((y?y.clientHeight:0)-D),D)*2+2;L=Math.sqrt(k**2+V**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{_({pulsate:S,rippleX:v,rippleY:D,rippleSize:L,cb:x})},E.start(Ze,()=>{h.current&&(h.current(),h.current=null)})):_({pulsate:S,rippleX:v,rippleY:D,rippleSize:L,cb:x})},[n,_,E]),U=a.useCallback(()=>{$({},{pulsate:!0})},[$]),j=a.useCallback((d,M)=>{if(E.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,E.start(0,()=>{j(d,M)});return}h.current=null,p(x=>x.length>0?x.slice(1):x),g.current=M},[E]);return a.useImperativeHandle(r,()=>({pulsate:U,start:$,stop:j}),[U,$,j]),N.jsx(ot,H({className:C(m.root,t.root,o),ref:R},c,{children:N.jsx(oe,{component:null,exit:!0,children:u})}))});function rt(e){return _e("MuiButtonBase",e)}const at=he("MuiButtonBase",["root","disabled","focusVisible"]),lt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ut=e=>{const{disabled:s,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=Ue({root:["root",s&&"disabled",r&&"focusVisible"]},rt,n);return r&&l&&(o.root+=` ${l}`),o},ct=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${at.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),bt=a.forwardRef(function(s,r){const l=me({props:s,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:E="a",onBlur:h,onClick:R,onContextMenu:_,onDragLeave:$,onFocus:U,onFocusVisible:j,onKeyDown:d,onKeyUp:M,onMouseDown:x,onMouseLeave:S,onMouseUp:I,onTouchEnd:z,onTouchMove:y,onTouchStart:B,tabIndex:v=0,TouchRippleProps:D,touchRippleRef:L,type:k}=l,V=be(l,lt),O=a.useRef(null),T=a.useRef(null),ge=ue(T,L),{isFocusVisibleRef:ie,onFocus:Re,onBlur:Me,ref:xe}=We(),[w,A]=a.useState(!1);p&&w&&A(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{A(!0),O.current.focus()}}),[]);const[q,ye]=a.useState(!1);a.useEffect(()=>{ye(!0)},[]);const Te=q&&!f&&!p;a.useEffect(()=>{w&&b&&!f&&q&&T.current.pulsate()},[f,b,w,q]);function P(i,re,je=g){return Y(ae=>(re&&re(ae),!je&&T.current&&T.current[i](ae),!0))}const Ce=P("start",x),Ee=P("stop",_),ve=P("stop",$),Ve=P("stop",I),Pe=P("stop",i=>{w&&i.preventDefault(),S&&S(i)}),Be=P("start",B),De=P("stop",z),Le=P("stop",y),Se=P("stop",i=>{Me(i),ie.current===!1&&A(!1),h&&h(i)},!1),ke=Y(i=>{O.current||(O.current=i.currentTarget),Re(i),ie.current===!0&&(A(!0),j&&j(i)),U&&U(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),we=Y(i=>{b&&!Q.current&&w&&T.current&&i.key===" "&&(Q.current=!0,T.current.stop(i,()=>{T.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),d&&d(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),Fe=Y(i=>{b&&i.key===" "&&T.current&&w&&!i.defaultPrevented&&(Q.current=!1,T.current.stop(i,()=>{T.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let W=u;W==="button"&&(V.href||V.to)&&(W=E);const K={};W==="button"?(K.type=k===void 0?"button":k,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Ne=ue(r,xe,O),se=H({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:w}),$e=ut(se);return N.jsxs(ct,H({as:W,className:C($e.root,c),ownerState:se,onBlur:Se,onClick:R,onContextMenu:Ee,onFocus:ke,onKeyDown:we,onKeyUp:Fe,onMouseDown:Ce,onMouseLeave:Pe,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:De,onTouchMove:Le,onTouchStart:Be,ref:Ne,tabIndex:p?-1:v,type:k},K,V,{children:[o,Te?N.jsx(st,H({ref:ge,center:t},D)):null]}))});export{bt as B,oe as T};
