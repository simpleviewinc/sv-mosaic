import{T as O,h as R,i as _,j as D,a as K,g as I,s as L,_ as x,k as v,l as k,u as U,e as Z,b as A,d as F,f as H}from"./styled-D3QUOaTt.js";import{r as S}from"./index-P8U4y8pz.js";import{j as N}from"./jsx-runtime-DKBipoO1.js";function q(e){return Object.keys(e).length===0}function J(e=null){const n=S.useContext(O);return!n||q(n)?e:n}const Q=R();function X(e=Q){return J(e)}function Y(){const e=X(D);return e[_]||e}const T=S.createContext();function ee(e){return I("MuiGrid",e)}const ne=[0,1,2,3,4,5,6,7,8,9,10],te=["column-reverse","column","row-reverse","row"],re=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=K("MuiGrid",["root","container","item","zeroMinWidth",...ne.map(e=>`spacing-xs-${e}`),...te.map(e=>`direction-xs-${e}`),...re.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),ie=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function d(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function se({theme:e,ownerState:n}){let i;return e.breakpoints.keys.reduce((r,t)=>{let s={};if(n[t]&&(i=n[t]),!i)return r;if(i===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=v({values:n.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[t]:a;if(u==null)return r;const l=`${Math.round(i/u*1e8)/1e6}%`;let c={};if(n.container&&n.item&&n.columnSpacing!==0){const o=e.spacing(n.columnSpacing);if(o!=="0px"){const p=`calc(${l} + ${d(o)})`;c={flexBasis:p,maxWidth:p}}}s=x({flexBasis:l,flexGrow:0,maxWidth:l},c)}return e.breakpoints.values[t]===0?Object.assign(r,s):r[e.breakpoints.up(t)]=s,r},{})}function oe({theme:e,ownerState:n}){const i=v({values:n.direction,breakpoints:e.breakpoints.values});return k({theme:e},i,r=>{const t={flexDirection:r};return r.indexOf("column")===0&&(t[`& > .${h.item}`]={maxWidth:"none"}),t})}function j({breakpoints:e,values:n}){let i="";Object.keys(n).forEach(t=>{i===""&&n[t]!==0&&(i=t)});const r=Object.keys(e).sort((t,s)=>e[t]-e[s]);return r.slice(0,r.indexOf(i))}function ae({theme:e,ownerState:n}){const{container:i,rowSpacing:r}=n;let t={};if(i&&r!==0){const s=v({values:r,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=j({breakpoints:e.breakpoints.values,values:s})),t=k({theme:e},s,(u,l)=>{var c;const o=e.spacing(u);return o!=="0px"?{marginTop:`-${d(o)}`,[`& > .${h.item}`]:{paddingTop:d(o)}}:(c=a)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${h.item}`]:{paddingTop:0}}})}return t}function ce({theme:e,ownerState:n}){const{container:i,columnSpacing:r}=n;let t={};if(i&&r!==0){const s=v({values:r,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=j({breakpoints:e.breakpoints.values,values:s})),t=k({theme:e},s,(u,l)=>{var c;const o=e.spacing(u);return o!=="0px"?{width:`calc(100% + ${d(o)})`,marginLeft:`-${d(o)}`,[`& > .${h.item}`]:{paddingLeft:d(o)}}:(c=a)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${h.item}`]:{paddingLeft:0}}})}return t}function ue(e,n,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const r=[];return n.forEach(t=>{const s=e[t];Number(s)>0&&r.push(i[`spacing-${t}-${String(s)}`])}),r}const le=L("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e,{container:r,direction:t,item:s,spacing:a,wrap:u,zeroMinWidth:l,breakpoints:c}=i;let o=[];r&&(o=ue(a,c,n));const p=[];return c.forEach(f=>{const m=i[f];m&&p.push(n[`grid-${f}-${String(m)}`])}),[n.root,r&&n.container,s&&n.item,l&&n.zeroMinWidth,...o,t!=="row"&&n[`direction-xs-${String(t)}`],u!=="wrap"&&n[`wrap-xs-${String(u)}`],...p]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),oe,ae,ce,se);function pe(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return n.forEach(r=>{const t=e[r];if(Number(t)>0){const s=`spacing-${r}-${String(t)}`;i.push(s)}}),i}const fe=e=>{const{classes:n,container:i,direction:r,item:t,spacing:s,wrap:a,zeroMinWidth:u,breakpoints:l}=e;let c=[];i&&(c=pe(s,l));const o=[];l.forEach(f=>{const m=e[f];m&&o.push(`grid-${f}-${String(m)}`)});const p={root:["root",i&&"container",t&&"item",u&&"zeroMinWidth",...c,r!=="row"&&`direction-xs-${String(r)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...o]};return H(p,ee,n)},xe=S.forwardRef(function(n,i){const r=U({props:n,name:"MuiGrid"}),{breakpoints:t}=Y(),s=Z(r),{className:a,columns:u,columnSpacing:l,component:c="div",container:o=!1,direction:p="row",item:f=!1,rowSpacing:m,spacing:w=0,wrap:z="wrap",zeroMinWidth:B=!1}=s,b=A(s,ie),M=m||w,E=l||w,V=S.useContext(T),y=o?u||12:V,W={},C=x({},b);t.keys.forEach($=>{b[$]!=null&&(W[$]=b[$],delete C[$])});const G=x({},s,{columns:y,container:o,direction:p,item:f,rowSpacing:M,columnSpacing:E,wrap:z,zeroMinWidth:B,spacing:w},W,{breakpoints:t.keys}),P=fe(G);return N.jsx(T.Provider,{value:y,children:N.jsx(le,x({ownerState:G,className:F(P.root,a),as:c,ref:i},C))})});export{xe as G};
