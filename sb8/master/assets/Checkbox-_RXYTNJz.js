import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r}from"./index-BP8_t0zE.js";import{s as b,t as n}from"./theme-D4oZEIDo.js";import{S as P,F as j}from"./FormControlLabel-Cy6KcgOl.js";import{a as z,g as S,s as B,r as F,c as f,b as s,f as w,u as L,_ as R,e as _}from"./useThemeProps-CM1XnGOG.js";import{c as u}from"./createSvgIcon-Ctt9EnSd.js";const H=u(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),E=u(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),O=u(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function U(e){return S("MuiCheckbox",e)}const h=z("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),V=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],N=e=>{const{classes:o,indeterminate:c,color:i}=e,l={root:["root",c&&"indeterminate",`color${f(i)}`]},a=_(l,U,o);return s({},o,a)},G=B(P,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:c}=e;return[o.root,c.indeterminate&&o.indeterminate,c.color!=="default"&&o[`color${f(c.color)}`]]}})(({theme:e,ownerState:o})=>s({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:w(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${h.checked}, &.${h.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${h.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),T=t.jsx(E,{}),W=t.jsx(H,{}),q=t.jsx(O,{}),A=r.forwardRef(function(o,c){var i,l;const a=L({props:o,name:"MuiCheckbox"}),{checkedIcon:v=T,color:g="primary",icon:y=W,indeterminate:d=!1,indeterminateIcon:x=q,inputProps:$,size:m="medium"}=a,I=R(a,V),k=d?x:y,p=d?x:v,C=s({},a,{color:g,indeterminate:d,size:m}),M=N(C);return t.jsx(G,s({type:"checkbox",inputProps:s({"data-indeterminate":d},$),icon:r.cloneElement(k,{fontSize:(i=k.props.fontSize)!=null?i:m}),checkedIcon:r.cloneElement(p,{fontSize:(l=p.props.fontSize)!=null?l:m}),ownerState:C,ref:c},I,{classes:M}))}),D=b(j)`
  &.MuiFormControlLabel-root {
    margin-left: 0px;
    margin-right: 0px;
    align-items: flex-start;
    color: ${n.newColors.grey4[100]};
  }

  & > span.checked,
  & > span.MuiCheckbox-indeterminate {
    color: ${n.newColors.simplyGold[100]};
    opacity: ${e=>e.disabled?"50%":"100%"};
  }

  & .MuiFormControlLabel-label {
    font-family: ${n.fontFamily};
    max-width: 414px;
    align-self: center;
  }
`,J=b(A)`
  &.MuiCheckbox-colorPrimary {
    color: ${n.newColors.almostBlack[100]};

    &.Mui-checked {
      color: ${n.newColors.simplyGold[100]};
    }
  }

  &.MuiCheckbox-colorPrimary,
  &.MuiCheckbox-colorPrimary.Mui-checked {
    &:hover {
      background-color: ${n.newColors.grey2[100]};
    }
  }

  &.custom-checkbox {
    padding: 10px;
    margin-right: 2px;
  }

  & svg {
    height: ${n.fieldSpecs.selectors.dimentions};
    width: ${n.fieldSpecs.selectors.dimentions};
  }
`,K=e=>{const o=r.useId(),c=e.id||o;return t.jsx(t.Fragment,{children:t.jsx(D,{label:e.label,labelPlacement:"end","data-testid":"label-test-id",value:e.value,disabled:e.disabled,htmlFor:c,control:t.jsx(J,{"data-testid":"checkbox-test-id",className:`
							custom-checkbox
							${e.checked?"checked":""}
							${e.className?e.className:""}
						`,edge:e.edge,checked:e.checked,onClick:e.onClick,indeterminate:e.indeterminate,id:c})})})},te=r.memo(K);export{te as C};
