import{j as n}from"./jsx-runtime-CexXSJP5.js";import{s as z,t as i}from"./theme-D4oZEIDo.js";import{s as u,b as r,a as w,g as U,r as _,c as k,f as E,u as F,_ as G,e as N}from"./useThemeProps-CM1XnGOG.js";import{r as l}from"./index-BP8_t0zE.js";import{S as O}from"./FormControlLabel-Cy6KcgOl.js";import{c as v}from"./createSvgIcon-Ctt9EnSd.js";import{c as q}from"./createChainedFunction-BO_9K8Jh.js";import{S as L}from"./StyledFormControl.styled-Buznl6wO.js";const D=v(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),T=v(n.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),V=u("span")({position:"relative",display:"flex"}),W=u(D)({transform:"scale(1)"}),Z=u(T)(({theme:o,ownerState:t})=>r({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function x(o){const{checked:t=!1,classes:e={},fontSize:a}=o,s=r({},o,{checked:t});return n.jsxs(V,{className:e.root,ownerState:s,children:[n.jsx(W,{fontSize:a,className:e.background,ownerState:s}),n.jsx(Z,{fontSize:a,className:e.dot,ownerState:s})]})}const A=l.createContext(void 0);function H(){return l.useContext(A)}function J(o){return U("MuiRadio",o)}const h=w("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),K=["checked","checkedIcon","color","icon","name","onChange","size"],Q=o=>{const{classes:t,color:e}=o,a={root:["root",`color${k(e)}`]};return r({},t,N(a,J,t))},X=u(O,{shouldForwardProp:o=>_(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[`color${k(e.color)}`]]}})(({theme:o,ownerState:t})=>r({color:(o.vars||o).palette.text.secondary,"&:hover":{backgroundColor:o.vars?`rgba(${t.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[t.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:E(t.color==="default"?o.palette.action.active:o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${h.checked}`]:{color:(o.vars||o).palette[t.color].main}},{[`&.${h.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function Y(o,t){return typeof t=="object"&&t!==null?o===t:String(o)===String(t)}const R=n.jsx(x,{checked:!0}),g=n.jsx(x,{}),oo=l.forwardRef(function(t,e){var a,s;const d=F({props:t,name:"MuiRadio"}),{checked:y,checkedIcon:S=R,color:I="primary",icon:b=g,name:j,onChange:$,size:p="medium"}=d,B=G(d,K),C=r({},d,{color:I,size:p}),M=Q(C),c=H();let f=y;const P=q($,c&&c.onChange);let m=j;return c&&(typeof f>"u"&&(f=Y(c.value,d.value)),typeof m>"u"&&(m=c.name)),n.jsx(X,r({type:"radio",icon:l.cloneElement(b,{fontSize:(a=g.props.fontSize)!=null?a:p}),checkedIcon:l.cloneElement(S,{fontSize:(s=R.props.fontSize)!=null?s:p}),ownerState:C,classes:M,name:m,checked:f,onChange:P,ref:e},B))}),to=z(oo)`
  &.MuiRadio-colorPrimary {
    color: ${i.newColors.almostBlack[100]};

    &.Mui-checked {
      color: ${i.newColors.simplyGold[100]};
    }
  }

  &.MuiRadio-colorPrimary,
  &.MuiRadio-colorPrimary.Mui-checked {
    &:hover {
      background-color: ${i.newColors.grey2[100]};
    }
  }

  &.MuiRadio-root {
    margin-right: 2px;
    padding: 10px;
  }

  & svg {
    height: ${i.fieldSpecs.selectors.dimentions};
    width: ${i.fieldSpecs.selectors.dimentions};
  }
`,uo=o=>{const{label:t,required:e,disabled:a,value:s}=o;return n.jsx(L,{label:t,labelPlacement:"end",value:s,disabled:a,control:n.jsx(to,{"data-testid":"radio-button-test",disabled:a,required:e})})};export{uo as R,A as a};
