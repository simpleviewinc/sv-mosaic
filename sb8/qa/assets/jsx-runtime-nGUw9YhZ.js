import{r as v}from"./index-BP8_t0zE.js";var u={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function y(){if(f)return t;f=1;var a=v,x=Symbol.for("react.element"),R=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function s(n,r,p){var e,o={},i=null,_=null;p!==void 0&&(i=""+p),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)c.call(r,e)&&!d.hasOwnProperty(e)&&(o[e]=r[e]);if(n&&n.defaultProps)for(e in r=n.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:x,type:n,key:i,ref:_,props:o,_owner:l.current}}return t.Fragment=R,t.jsx=s,t.jsxs=s,t}var m;function E(){return m||(m=1,u.exports=y()),u.exports}var j=E();export{j,E as r};
