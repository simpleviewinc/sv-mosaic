import{r as c}from"./index-D0AnReJb.js";import{t as a,s as g}from"./sizes-BklZZmo4.js";import{S as P,F as B}from"./FormControlLabel-BKc7O7Lz.js";import{a as S,g as j,s as E,n as F,e as m,b as r,i as R,u as w,_ as L,d as _,f as H}from"./generateUtilityClasses-rDn4KRfY.js";import{c as x}from"./createSvgIcon-Dg0jtXvj.js";import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{t as N}from"./testIds-Dso8kRSM.js";const O=x(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=x(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=x(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function G(e){return j("MuiCheckbox",e)}const C=S("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),W=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],A=e=>{const{classes:o,indeterminate:t,color:i,size:l}=e,s={root:["root",t&&"indeterminate",`color${m(i)}`,`size${m(l)}`]},h=H(s,G,o);return r({},o,h)},D=E(P,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${m(t.size)}`],t.color!=="default"&&o[`color${m(t.color)}`]]}})(({theme:e,ownerState:o})=>r({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:R.alpha(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${C.checked}, &.${C.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${C.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),K=n.jsx(U,{}),X=n.jsx(O,{}),q=n.jsx(V,{}),J=c.forwardRef(function(o,t){var i,l;const s=w({props:o,name:"MuiCheckbox"}),{checkedIcon:h=K,color:$="primary",icon:y=X,indeterminate:d=!1,indeterminateIcon:k=q,inputProps:I,size:u="medium",className:z}=s,M=L(s,W),p=d?k:y,b=d?k:h,f=r({},s,{color:$,indeterminate:d,size:u}),v=A(f);return n.jsx(D,r({type:"checkbox",inputProps:r({"data-indeterminate":d},I),icon:c.cloneElement(p,{fontSize:(i=p.props.fontSize)!=null?i:u}),checkedIcon:c.cloneElement(b,{fontSize:(l=b.props.fontSize)!=null?l:u}),ownerState:f,ref:t,className:_(v.root,z)},M,{classes:v}))}),Q=g(B)`
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
						`,edge:e.edge,checked:e.checked,onClick:e.onClick,onChange:e.onChange,indeterminate:e.indeterminate,id:t})}))},se=c.memo(Y);export{se as C};
