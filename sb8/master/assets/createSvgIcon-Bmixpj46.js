import{g as z,a as I,s as C,b as h,u as R,_ as w,d as S,e as b,f as j}from"./generateUtilityClasses-oWyMxXuq.js";import{r as g}from"./index-Btj5Fd67.js";import{j as v}from"./jsx-runtime-DiwAibxM.js";function N(e){return z("MuiSvgIcon",e)}I("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const A=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],B=e=>{const{color:o,fontSize:n,classes:i}=e,t={root:["root",o!=="inherit"&&`color${h(o)}`,`fontSize${h(n)}`]};return j(t,N,i)},M=C("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.color!=="inherit"&&o[`color${h(n.color)}`],o[`fontSize${h(n.fontSize)}`]]}})(({theme:e,ownerState:o})=>{var n,i,t,u,f,a,m,d,p,r,s,c,l;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:o.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(i=n.create)==null?void 0:i.call(n,"fill",{duration:(t=e.transitions)==null||(t=t.duration)==null?void 0:t.shorter}),fontSize:{inherit:"inherit",small:((u=e.typography)==null||(f=u.pxToRem)==null?void 0:f.call(u,20))||"1.25rem",medium:((a=e.typography)==null||(m=a.pxToRem)==null?void 0:m.call(a,24))||"1.5rem",large:((d=e.typography)==null||(p=d.pxToRem)==null?void 0:p.call(d,35))||"2.1875rem"}[o.fontSize],color:(r=(s=(e.vars||e).palette)==null||(s=s[o.color])==null?void 0:s.main)!=null?r:{action:(c=(e.vars||e).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(l=(e.vars||e).palette)==null||(l=l.action)==null?void 0:l.disabled,inherit:void 0}[o.color]}}),y=g.forwardRef(function(o,n){const i=R({props:o,name:"MuiSvgIcon"}),{children:t,className:u,color:f="inherit",component:a="svg",fontSize:m="medium",htmlColor:d,inheritViewBox:p=!1,titleAccess:r,viewBox:s="0 0 24 24"}=i,c=w(i,A),l=g.isValidElement(t)&&t.type==="svg",x=S({},i,{color:f,component:a,fontSize:m,instanceFontSize:o.fontSize,inheritViewBox:p,viewBox:s,hasSvgAsChild:l}),$={};p||($.viewBox=s);const _=B(x);return v.jsxs(M,S({as:a,className:b(_.root,u),focusable:"false",color:d,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:n},$,c,l&&t.props,{ownerState:x,children:[l?t.props.children:t,r?v.jsx("title",{children:r}):null]}))});y.muiName="SvgIcon";function V(e,o){function n(i,t){return v.jsx(y,S({"data-testid":`${o}Icon`,ref:t},i,{children:e}))}return n.muiName=y.muiName,g.memo(g.forwardRef(n))}export{y as S,V as c};
