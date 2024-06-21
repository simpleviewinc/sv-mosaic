import{r as c}from"./index-BP8_t0zE.js";import{k as T,w as R,T as F,m as k}from"./useThemeProps-Ds-LJhvX.js";var _={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,x=o?Symbol.for("react.element"):60103,E=o?Symbol.for("react.portal"):60106,y=o?Symbol.for("react.fragment"):60107,m=o?Symbol.for("react.strict_mode"):60108,p=o?Symbol.for("react.profiler"):60114,d=o?Symbol.for("react.provider"):60109,S=o?Symbol.for("react.context"):60110,C=o?Symbol.for("react.async_mode"):60111,b=o?Symbol.for("react.concurrent_mode"):60111,v=o?Symbol.for("react.forward_ref"):60112,$=o?Symbol.for("react.suspense"):60113,z=o?Symbol.for("react.suspense_list"):60120,g=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,O=o?Symbol.for("react.block"):60121,j=o?Symbol.for("react.fundamental"):60117,L=o?Symbol.for("react.responder"):60118,q=o?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case x:switch(e=e.type,e){case C:case b:case y:case p:case m:case $:return e;default:switch(e=e&&e.$$typeof,e){case S:case v:case h:case g:case d:return e;default:return r}}case E:return r}}}function I(e){return n(e)===b}t.AsyncMode=C;t.ConcurrentMode=b;t.ContextConsumer=S;t.ContextProvider=d;t.Element=x;t.ForwardRef=v;t.Fragment=y;t.Lazy=h;t.Memo=g;t.Portal=E;t.Profiler=p;t.StrictMode=m;t.Suspense=$;t.isAsyncMode=function(e){return I(e)||n(e)===C};t.isConcurrentMode=I;t.isContextConsumer=function(e){return n(e)===S};t.isContextProvider=function(e){return n(e)===d};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===x};t.isForwardRef=function(e){return n(e)===v};t.isFragment=function(e){return n(e)===y};t.isLazy=function(e){return n(e)===h};t.isMemo=function(e){return n(e)===g};t.isPortal=function(e){return n(e)===E};t.isProfiler=function(e){return n(e)===p};t.isStrictMode=function(e){return n(e)===m};t.isSuspense=function(e){return n(e)===$};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===y||e===b||e===p||e===m||e===$||e===z||typeof e=="object"&&e!==null&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===d||e.$$typeof===S||e.$$typeof===v||e.$$typeof===j||e.$$typeof===L||e.$$typeof===q||e.$$typeof===O)};t.typeOf=n;_.exports=t;var G=_.exports,A=G,N={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},D={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P={};P[A.ForwardRef]=N;P[A.Memo]=D;var w=c.useInsertionEffect?c.useInsertionEffect:c.useLayoutEffect,B=R(function(e,r){var f=e.styles,i=T([f],void 0,c.useContext(F)),M=c.useRef();return w(function(){var u=r.key+"-global",s=new r.sheet.constructor({key:u,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),l=!1,a=document.querySelector('style[data-emotion="'+u+" "+i.name+'"]');return r.sheet.tags.length&&(s.before=r.sheet.tags[0]),a!==null&&(l=!0,a.setAttribute("data-emotion",u),s.hydrate([a])),M.current=[s,l],function(){s.flush()}},[r]),w(function(){var u=M.current,s=u[0],l=u[1];if(l){u[1]=!1;return}if(i.next!==void 0&&k(r,i.next,!0),s.tags.length){var a=s.tags[s.tags.length-1].nextElementSibling;s.before=a,s.flush()}r.insert("",i,s,!1)},[r,i.name]),null});function V(){for(var e=arguments.length,r=new Array(e),f=0;f<e;f++)r[f]=arguments[f];return T(r)}var H=function(){var r=V.apply(void 0,arguments),f="animation-"+r.name;return{name:f,styles:"@keyframes "+f+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};export{B as G,V as c,H as k};
