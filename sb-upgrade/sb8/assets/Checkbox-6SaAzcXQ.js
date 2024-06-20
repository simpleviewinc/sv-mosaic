import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{r as a}from"./index-CDs2tPxN.js";import{s as C,t as n}from"./theme-tUuL1bpb.js";import{S as w,F as U}from"./FormControlLabel-D6jwZlG2.js";import{a as j,g as z,s as B,r as F,c as f,b as i,f as S,u as T,_ as q,e as _}from"./useThemeProps-DZj2lB8w.js";import{c as p}from"./createSvgIcon-Ca3CxB0T.js";const L=p(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),N=p(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),R=p(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function H(e){return z("MuiCheckbox",e)}const m=j("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),E=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],O=e=>{const{classes:o,indeterminate:c,color:s}=e,l={root:["root",c&&"indeterminate",`color${f(s)}`]},r=_(l,H,o);return i({},o,r)},V=B(w,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:c}=e;return[o.root,c.indeterminate&&o.indeterminate,c.color!=="default"&&o[`color${f(c.color)}`]]}})(({theme:e,ownerState:o})=>i({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:S(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${m.checked}, &.${m.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${m.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),A=t.jsx(N,{}),G=t.jsx(L,{}),D=t.jsx(R,{}),W=a.forwardRef(function(o,c){var s,l;const r=T({props:o,name:"MuiCheckbox"}),{checkedIcon:v=A,color:y="primary",icon:I=G,indeterminate:d=!1,indeterminateIcon:u=D,inputProps:M,size:h="medium"}=r,$=q(r,E),b=d?u:I,k=d?u:v,x=i({},r,{color:y,indeterminate:d,size:h}),P=O(x);return t.jsx(V,i({type:"checkbox",inputProps:i({"data-indeterminate":d},M),icon:a.cloneElement(b,{fontSize:(s=b.props.fontSize)!=null?s:h}),checkedIcon:a.cloneElement(k,{fontSize:(l=k.props.fontSize)!=null?l:h}),ownerState:x,ref:c},$,{classes:P}))}),J=C(U)`
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
`,K=C(W)`
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
`,g=e=>{const o=a.useId(),c=e.id||o;return t.jsx(t.Fragment,{children:t.jsx(J,{label:e.label,labelPlacement:"end","data-testid":"label-test-id",value:e.value,disabled:e.disabled,htmlFor:c,control:t.jsx(K,{"data-testid":"checkbox-test-id",className:`
							custom-checkbox
							${e.checked?"checked":""}
							${e.className?e.className:""}
						`,edge:e.edge,checked:e.checked,onClick:e.onClick,indeterminate:e.indeterminate,id:c})})})},te=a.memo(g);g.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!0,tsType:{name:"boolean"},description:`Boolean value that indicates whether the\r
current checkbox is selected or not`},indeterminate:{required:!1,tsType:{name:'MUICheckboxProps["indeterminate"]',raw:'MUICheckboxProps["indeterminate"]'},description:`Material UI native prop for the checkbox:\r
Boolean value that when true renders the\r
checkbox as indeterminate`},className:{required:!1,tsType:{name:"string"},description:`Additional custom css class for styling\r
the component`},edge:{required:!1,tsType:{name:'MUICheckboxProps["edge"]',raw:'MUICheckboxProps["edge"]'},description:`Material UI native prop for the checkbox:\r
Negative margin given to the checkbox to\r
counteract the padding on one side`},onClick:{required:!1,tsType:{name:'MUICheckboxProps["onClick"]',raw:'MUICheckboxProps["onClick"]'},description:`Material UI native prop for the checkbox:\r
Function to be executed once the user clicks\r
on the checkbox`},label:{required:!1,tsType:{name:"string"},description:`Text to be shown next to the current\r
checkbox`},disabled:{required:!1,tsType:{name:"boolean"},description:`Boolean value that indicates whether the\r
current checkbox can be selected or not`},id:{required:!1,tsType:{name:"string"},description:`A unique ID that should be provided to the\r
checkbox and be referenced by a label.`}},composes:["MUICheckboxProps"]};export{te as C};
