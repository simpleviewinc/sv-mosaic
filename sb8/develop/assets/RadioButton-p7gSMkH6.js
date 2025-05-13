import{r}from"./index-D0AnReJb.js";import{t as l,s as w}from"./sizes-BklZZmo4.js";import{b as i,s as p,n as x,a as N,g as U,e as u,i as _,u as F,_ as G,d as q,f as O}from"./generateUtilityClasses-rDn4KRfY.js";import{S as D}from"./FormControlLabel-BKc7O7Lz.js";import{c as y}from"./createSvgIcon-Dg0jtXvj.js";import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{c as L}from"./createChainedFunction-BO_9K8Jh.js";import{S as V}from"./StyledFormControl.styled-BMW4FUOw.js";const W=y(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Z=y(n.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),A=p("span",{shouldForwardProp:x})({position:"relative",display:"flex"}),H=p(W)({transform:"scale(1)"}),J=p(Z)(({theme:o,ownerState:e})=>i({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},e.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function b(o){const{checked:e=!1,classes:t={},fontSize:a}=o,s=i({},o,{checked:e});return n.jsxs(A,{className:t.root,ownerState:s,children:[n.jsx(H,{fontSize:a,className:t.background,ownerState:s}),n.jsx(J,{fontSize:a,className:t.dot,ownerState:s})]})}const K=r.createContext(void 0);function Q(){return r.useContext(K)}function T(o){return U("MuiRadio",o)}const g=N("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),X=["checked","checkedIcon","color","icon","name","onChange","size","className"],Y=o=>{const{classes:e,color:t,size:a}=o,s={root:["root",`color${u(t)}`,a!=="medium"&&`size${u(a)}`]};return i({},e,O(s,T,e))},oo=p(D,{shouldForwardProp:o=>x(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.size!=="medium"&&e[`size${u(t.size)}`],e[`color${u(t.color)}`]]}})(({theme:o,ownerState:e})=>i({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:_.alpha(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${g.checked}`]:{color:(o.vars||o).palette[e.color].main}},{[`&.${g.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function eo(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}const k=n.jsx(b,{checked:!0}),v=n.jsx(b,{}),to=r.forwardRef(function(e,t){var a,s;const d=F({props:e,name:"MuiRadio"}),{checked:z,checkedIcon:S=k,color:$="primary",icon:I=v,name:B,onChange:M,size:f="medium",className:P}=d,j=G(d,X),h=i({},d,{color:$,size:f}),R=Y(h),c=Q();let m=z;const E=L(M,c&&c.onChange);let C=B;return c&&(typeof m>"u"&&(m=eo(c.value,d.value)),typeof C>"u"&&(C=c.name)),n.jsx(oo,i({type:"radio",icon:r.cloneElement(I,{fontSize:(a=v.props.fontSize)!=null?a:f}),checkedIcon:r.cloneElement(S,{fontSize:(s=k.props.fontSize)!=null?s:f}),ownerState:h,classes:R,name:C,checked:m,onChange:E,ref:t,className:q(R.root,P)},j))}),ao=w(to)`
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
`,fo=o=>{const{label:e,required:t,disabled:a,value:s}=o;return r.createElement(V,{label:e,labelPlacement:"end",value:s,disabled:a,control:r.createElement(ao,{"data-testid":"radio-button-test",disabled:a,required:t})})};export{fo as R,K as a};
