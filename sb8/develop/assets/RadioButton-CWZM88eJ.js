import{r as n}from"./index-D0AnReJb.js";import{s as w}from"./styled-components.browser.esm-EkLDtEIi.js";import{t as l}from"./sizes-o2d97SRj.js";import{a as i,b as u,d as N,_ as U}from"./identifier-cQ2cb48K.js";import{s as p,r as x,a as _,g as F,u as G,c as q,b as O}from"./generateUtilityClasses-B-SuhQrp.js";import{S as D}from"./FormControlLabel-9JumqQgw.js";import{c as y}from"./createSvgIcon-BqayHko4.js";import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{c as L}from"./createChainedFunction-BO_9K8Jh.js";import{S as V}from"./StyledFormControl.styled-50iZRKTb.js";const W=y(r.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Z=y(r.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),A=p("span",{shouldForwardProp:x})({position:"relative",display:"flex"}),H=p(W)({transform:"scale(1)"}),J=p(Z)(({theme:o,ownerState:e})=>i({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},e.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function b(o){const{checked:e=!1,classes:t={},fontSize:a}=o,s=i({},o,{checked:e});return r.jsxs(A,{className:t.root,ownerState:s,children:[r.jsx(H,{fontSize:a,className:t.background,ownerState:s}),r.jsx(J,{fontSize:a,className:t.dot,ownerState:s})]})}const K=n.createContext(void 0);function Q(){return n.useContext(K)}function T(o){return F("MuiRadio",o)}const g=_("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),X=["checked","checkedIcon","color","icon","name","onChange","size","className"],Y=o=>{const{classes:e,color:t,size:a}=o,s={root:["root",`color${u(t)}`,a!=="medium"&&`size${u(a)}`]};return i({},e,O(s,T,e))},oo=p(D,{shouldForwardProp:o=>x(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.size!=="medium"&&e[`size${u(t.size)}`],e[`color${u(t.color)}`]]}})(({theme:o,ownerState:e})=>i({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:N.alpha(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${g.checked}`]:{color:(o.vars||o).palette[e.color].main}},{[`&.${g.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function eo(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}const k=r.jsx(b,{checked:!0}),v=r.jsx(b,{}),to=n.forwardRef(function(e,t){var a,s;const d=G({props:e,name:"MuiRadio"}),{checked:z,checkedIcon:S=k,color:$="primary",icon:I=v,name:B,onChange:M,size:m="medium",className:P}=d,j=U(d,X),h=i({},d,{color:$,size:m}),R=Y(h),c=Q();let f=z;const E=L(M,c&&c.onChange);let C=B;return c&&(typeof f>"u"&&(f=eo(c.value,d.value)),typeof C>"u"&&(C=c.name)),r.jsx(oo,i({type:"radio",icon:n.cloneElement(I,{fontSize:(a=v.props.fontSize)!=null?a:m}),checkedIcon:n.cloneElement(S,{fontSize:(s=k.props.fontSize)!=null?s:m}),ownerState:h,classes:R,name:C,checked:f,onChange:E,ref:t,className:q(R.root,P)},j))}),ao=w(to)`
  &.MuiRadio-colorPrimary {
    color: ${l.newColors.almostBlack[100]};

    &.Mui-checked {
      color: ${l.newColors.simplyGold[100]};
    }
  }

  &.MuiRadio-colorPrimary,
  &.MuiRadio-colorPrimary.Mui-checked {
    &:hover {
      background-color: ${l.newColors.grey2[100]};
    }
  }

  &.MuiRadio-root {
    margin-right: 2px;
    padding: 10px;
  }

  & svg {
    height: ${l.fieldSpecs.selectors.dimentions};
    width: ${l.fieldSpecs.selectors.dimentions};
  }
`,Co=o=>{const{label:e,required:t,disabled:a,value:s}=o;return n.createElement(V,{label:e,labelPlacement:"end",value:s,disabled:a,control:n.createElement(ao,{"data-testid":"radio-button-test",disabled:a,required:t})})};export{Co as R,K as a};
