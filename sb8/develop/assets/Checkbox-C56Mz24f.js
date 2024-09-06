import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as s}from"./index-BP8_t0zE.js";import{s as $,t as a}from"./theme-Cyujm90X.js";import{S as j,F as P}from"./FormControlLabel-D-Q_BSJi.js";import{a as S,g as B,s as F,p as w,b as m,d as i,j as L,u as _,_ as N,e as R,f as H}from"./generateUtilityClasses-DQAffLtG.js";import{c as k}from"./createSvgIcon-DV_hUcxO.js";const E=k(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),O=k(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),U=k(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function V(e){return B("MuiCheckbox",e)}const x=S("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),G=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],D=e=>{const{classes:o,indeterminate:c,color:r,size:l}=e,n={root:["root",c&&"indeterminate",`color${m(r)}`,`size${m(l)}`]},h=H(n,V,o);return i({},o,h)},W=F(j,{shouldForwardProp:e=>w(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:c}=e;return[o.root,c.indeterminate&&o.indeterminate,o[`size${m(c.size)}`],c.color!=="default"&&o[`color${m(c.color)}`]]}})(({theme:e,ownerState:o})=>i({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:L(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${x.checked}, &.${x.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${x.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),q=t.jsx(O,{}),A=t.jsx(E,{}),J=t.jsx(U,{}),K=s.forwardRef(function(o,c){var r,l;const n=_({props:o,name:"MuiCheckbox"}),{checkedIcon:h=q,color:g="primary",icon:y=A,indeterminate:d=!1,indeterminateIcon:p=J,inputProps:I,size:u="medium",className:z}=n,M=N(n,G),C=d?p:y,b=d?p:h,f=i({},n,{color:g,indeterminate:d,size:u}),v=D(f);return t.jsx(W,i({type:"checkbox",inputProps:i({"data-indeterminate":d},I),icon:s.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:u}),checkedIcon:s.cloneElement(b,{fontSize:(l=b.props.fontSize)!=null?l:u}),ownerState:f,ref:c,className:R(v.root,z)},M,{classes:v}))}),Q=$(P)`
  &.MuiFormControlLabel-root {
    margin-left: 0px;
    margin-right: 0px;
    align-items: flex-start;
    color: ${a.newColors.grey4[100]};
  }

  & > span.checked,
  & > span.MuiCheckbox-indeterminate {
    color: ${a.newColors.simplyGold[100]};
    opacity: ${e=>e.disabled?"50%":"100%"};
  }

  & .MuiFormControlLabel-label {
    font-family: ${a.fontFamily};
    max-width: 414px;
    align-self: center;
  }
`,T=$(K)`
  &.MuiCheckbox-colorPrimary {
    color: ${a.newColors.almostBlack[100]};

    &.Mui-checked {
      color: ${a.newColors.simplyGold[100]};
    }
  }

  &.MuiCheckbox-colorPrimary,
  &.MuiCheckbox-colorPrimary.Mui-checked {
    &:hover {
      background-color: ${a.newColors.grey2[100]};
    }
  }

  &.custom-checkbox {
    padding: 10px;
    margin-right: 2px;
  }

  & svg {
    height: ${a.fieldSpecs.selectors.dimentions};
    width: ${a.fieldSpecs.selectors.dimentions};
  }
`,X=e=>{const o=s.useId(),c=e.id||o;return t.jsx(t.Fragment,{children:t.jsx(Q,{label:e.label,labelPlacement:"end","data-testid":"label-test-id",value:e.value,disabled:e.disabled,htmlFor:c,control:t.jsx(T,{"data-testid":"checkbox-test-id",className:`
							custom-checkbox
							${e.checked?"checked":""}
							${e.className?e.className:""}
						`,edge:e.edge,checked:e.checked,onClick:e.onClick,indeterminate:e.indeterminate,id:c})})})},ae=s.memo(X);export{ae as C};
