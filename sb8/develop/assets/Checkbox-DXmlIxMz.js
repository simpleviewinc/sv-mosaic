import{j as c}from"./jsx-runtime-nGUw9YhZ.js";import{r as s}from"./index-BP8_t0zE.js";import{s as $,t as a}from"./theme-DRtZtbPc.js";import{S as P,F as j}from"./FormControlLabel-n1qioM9o.js";import{a as B,g as S,s as F,p as R,b as m,d as r,j as _,u as w,_ as L,e as E,f as H}from"./generateUtilityClasses-DAcHHM0W.js";import{c as p}from"./createSvgIcon-CPgMIgId.js";import{t as N}from"./testIds-wFnuQL-c.js";const O=p(c.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=p(c.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=p(c.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function G(e){return S("MuiCheckbox",e)}const x=B("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),W=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],A=e=>{const{classes:o,indeterminate:t,color:i,size:l}=e,n={root:["root",t&&"indeterminate",`color${m(i)}`,`size${m(l)}`]},h=H(n,G,o);return r({},o,h)},D=F(P,{shouldForwardProp:e=>R(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${m(t.size)}`],t.color!=="default"&&o[`color${m(t.color)}`]]}})(({theme:e,ownerState:o})=>r({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:_(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${x.checked}, &.${x.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${x.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),K=c.jsx(U,{}),X=c.jsx(O,{}),q=c.jsx(V,{}),J=s.forwardRef(function(o,t){var i,l;const n=w({props:o,name:"MuiCheckbox"}),{checkedIcon:h=K,color:g="primary",icon:y=X,indeterminate:d=!1,indeterminateIcon:k=q,inputProps:I,size:u="medium",className:z}=n,M=L(n,W),C=d?k:y,b=d?k:h,f=r({},n,{color:g,indeterminate:d,size:u}),v=A(f);return c.jsx(D,r({type:"checkbox",inputProps:r({"data-indeterminate":d},I),icon:s.cloneElement(C,{fontSize:(i=C.props.fontSize)!=null?i:u}),checkedIcon:s.cloneElement(b,{fontSize:(l=b.props.fontSize)!=null?l:u}),ownerState:f,ref:t,className:E(v.root,z)},M,{classes:v}))}),Q=$(j)`
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
`,T=$(J)`
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
`,Y=e=>{const o=s.useId(),t=e.id||o;return c.jsx(c.Fragment,{children:c.jsx(Q,{label:e.label,labelPlacement:"end","data-testid":"label-test-id",value:e.value,disabled:e.disabled,htmlFor:t,control:c.jsx(T,{"data-testid":N.CHECKBOX_WRAPPER,className:`
							custom-checkbox
							${e.checked?"checked":""}
							${e.className?e.className:""}
						`,edge:e.edge,checked:e.checked,onClick:e.onClick,indeterminate:e.indeterminate,id:t})})})},se=s.memo(Y);export{se as C};
