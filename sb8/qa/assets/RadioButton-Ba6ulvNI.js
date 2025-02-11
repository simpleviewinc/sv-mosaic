import{j as n}from"./jsx-runtime-DiwAibxM.js";import{s as E,t as c}from"./theme-C7C0QMlu.js";import{s as p,o as v,d as r,a as N,g as U,b as u,j as _,u as F,_ as G,e as O,f as q}from"./generateUtilityClasses-oWyMxXuq.js";import{r as l}from"./index-Btj5Fd67.js";import{S as D}from"./FormControlLabel-DHn1WcqZ.js";import{c as y}from"./createSvgIcon-Bmixpj46.js";import{c as L}from"./createChainedFunction-BO_9K8Jh.js";import{S as V}from"./StyledFormControl.styled-i13hAbZe.js";const W=y(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Z=y(n.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),A=p("span",{shouldForwardProp:v})({position:"relative",display:"flex"}),H=p(W)({transform:"scale(1)"}),J=p(Z)(({theme:o,ownerState:e})=>r({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},e.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function z(o){const{checked:e=!1,classes:t={},fontSize:a}=o,s=r({},o,{checked:e});return n.jsxs(A,{className:t.root,ownerState:s,children:[n.jsx(H,{fontSize:a,className:t.background,ownerState:s}),n.jsx(J,{fontSize:a,className:t.dot,ownerState:s})]})}const K=l.createContext(void 0);function Q(){return l.useContext(K)}function T(o){return U("MuiRadio",o)}const g=N("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),X=["checked","checkedIcon","color","icon","name","onChange","size","className"],Y=o=>{const{classes:e,color:t,size:a}=o,s={root:["root",`color${u(t)}`,a!=="medium"&&`size${u(a)}`]};return r({},e,q(s,T,e))},oo=p(D,{shouldForwardProp:o=>v(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.size!=="medium"&&e[`size${u(t.size)}`],e[`color${u(t.color)}`]]}})(({theme:o,ownerState:e})=>r({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:_.alpha(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${g.checked}`]:{color:(o.vars||o).palette[e.color].main}},{[`&.${g.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function eo(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}const k=n.jsx(z,{checked:!0}),x=n.jsx(z,{}),to=l.forwardRef(function(e,t){var a,s;const d=F({props:e,name:"MuiRadio"}),{checked:S,checkedIcon:$=k,color:b="primary",icon:j=x,name:I,onChange:B,size:f="medium",className:M}=d,P=G(d,X),h=r({},d,{color:b,size:f}),R=Y(h),i=Q();let m=S;const w=L(B,i&&i.onChange);let C=I;return i&&(typeof m>"u"&&(m=eo(i.value,d.value)),typeof C>"u"&&(C=i.name)),n.jsx(oo,r({type:"radio",icon:l.cloneElement(j,{fontSize:(a=x.props.fontSize)!=null?a:f}),checkedIcon:l.cloneElement($,{fontSize:(s=k.props.fontSize)!=null?s:f}),ownerState:h,classes:R,name:C,checked:m,onChange:w,ref:t,className:O(R.root,M)},P))}),ao=E(to)`
  &.MuiRadio-colorPrimary {
    color: ${c.newColors.almostBlack[100]};

    &.Mui-checked {
      color: ${c.newColors.simplyGold[100]};
    }
  }

  &.MuiRadio-colorPrimary,
  &.MuiRadio-colorPrimary.Mui-checked {
    &:hover {
      background-color: ${c.newColors.grey2[100]};
    }
  }

  &.MuiRadio-root {
    margin-right: 2px;
    padding: 10px;
  }

  & svg {
    height: ${c.fieldSpecs.selectors.dimentions};
    width: ${c.fieldSpecs.selectors.dimentions};
  }
`,fo=o=>{const{label:e,required:t,disabled:a,value:s}=o;return n.jsx(V,{label:e,labelPlacement:"end",value:s,disabled:a,control:n.jsx(ao,{"data-testid":"radio-button-test",disabled:a,required:t})})};export{fo as R,K as a};
