import{r as c}from"./index-D0AnReJb.js";import{s as g}from"./styled-components.browser.esm-B06rF3P8.js";import{t as a}from"./sizes-HwDk6ODv.js";import{S as P,F as B}from"./FormControlLabel-DHYheffG.js";import{b as m,a as s,e as S,_ as j}from"./DefaultPropsProvider-DAx12mnL.js";import{a as E,g as F,s as R,r as w,u as L,c as _,b as H}from"./generateUtilityClasses-B-YHycAP.js";import{c as C}from"./createSvgIcon-Dpio520k.js";import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{t as N}from"./testIds-Dso8kRSM.js";const O=C(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=C(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=C(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function G(e){return F("MuiCheckbox",e)}const p=E("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),W=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],A=e=>{const{classes:o,indeterminate:t,color:i,size:l}=e,r={root:["root",t&&"indeterminate",`color${m(i)}`,`size${m(l)}`]},h=H(r,G,o);return s({},o,h)},D=R(P,{shouldForwardProp:e=>w(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${m(t.size)}`],t.color!=="default"&&o[`color${m(t.color)}`]]}})(({theme:e,ownerState:o})=>s({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:S.alpha(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${p.checked}, &.${p.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${p.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),K=n.jsx(U,{}),X=n.jsx(O,{}),q=n.jsx(V,{}),J=c.forwardRef(function(o,t){var i,l;const r=L({props:o,name:"MuiCheckbox"}),{checkedIcon:h=K,color:$="primary",icon:I=X,indeterminate:d=!1,indeterminateIcon:x=q,inputProps:y,size:u="medium",className:z}=r,M=j(r,W),k=d?x:I,b=d?x:h,f=s({},r,{color:$,indeterminate:d,size:u}),v=A(f);return n.jsx(D,s({type:"checkbox",inputProps:s({"data-indeterminate":d},y),icon:c.cloneElement(k,{fontSize:(i=k.props.fontSize)!=null?i:u}),checkedIcon:c.cloneElement(b,{fontSize:(l=b.props.fontSize)!=null?l:u}),ownerState:f,ref:t,className:_(v.root,z)},M,{classes:v}))}),Q=g(B)`
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
    max-width: 414px;
    align-self: center;
  }
`,T=g(J)`
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
`,Y=e=>{const o=c.useId(),t=e.id||o;return c.createElement(c.Fragment,null,c.createElement(Q,{label:e.label,labelPlacement:"end","data-testid":"label-test-id",value:e.value,disabled:e.disabled,htmlFor:t,control:c.createElement(T,{"data-testid":N.CHECKBOX_WRAPPER,className:`
							custom-checkbox
							${e.checked?"checked":""}
							${e.className?e.className:""}
						`,edge:e.edge,checked:e.checked,onClick:e.onClick,onChange:e.onChange,indeterminate:e.indeterminate,id:t})}))},ie=c.memo(Y);export{ie as C};
