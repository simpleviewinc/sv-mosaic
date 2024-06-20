import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{s as v,t as s}from"./theme-tUuL1bpb.js";import{a as f,g as S,s as w,c as d,b as p,f as k,l as $,h as C,u as M,_ as x,d as T,e as P}from"./useThemeProps-DZj2lB8w.js";import{r as B}from"./index-CDs2tPxN.js";import{S as z}from"./FormControlLabel-D6jwZlG2.js";import{S as I}from"./StyledFormControl.styled-CrNYvyVp.js";import{t as F}from"./testIds-B75WQI-K.js";function R(o){return S("MuiSwitch",o)}const t=f("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),j=["className","color","edge","size","sx"],q=o=>{const{classes:e,edge:r,size:a,color:h,checked:u,disabled:c}=o,l={root:["root",r&&`edge${d(r)}`,`size${d(a)}`],switchBase:["switchBase",`color${d(h)}`,u&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},i=P(l,R,e);return p({},e,i)},G=w("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,r.edge&&e[`edge${d(r.edge)}`],e[`size${d(r.size)}`]]}})(({ownerState:o})=>p({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},o.edge==="start"&&{marginLeft:-8},o.edge==="end"&&{marginRight:-8},o.size==="small"&&{width:40,height:24,padding:7,[`& .${t.thumb}`]:{width:16,height:16},[`& .${t.switchBase}`]:{padding:4,[`&.${t.checked}`]:{transform:"translateX(16px)"}}})),L=w(z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.switchBase,{[`& .${t.input}`]:e.input},r.color!=="default"&&e[`color${d(r.color)}`]]}})(({theme:o})=>({position:"absolute",top:0,left:0,zIndex:1,color:o.vars?o.vars.palette.Switch.defaultColor:`${o.palette.mode==="light"?o.palette.common.white:o.palette.grey[300]}`,transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest}),[`&.${t.checked}`]:{transform:"translateX(20px)"},[`&.${t.disabled}`]:{color:o.vars?o.vars.palette.Switch.defaultDisabledColor:`${o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[600]}`},[`&.${t.checked} + .${t.track}`]:{opacity:.5},[`&.${t.disabled} + .${t.track}`]:{opacity:o.vars?o.vars.opacity.switchTrackDisabled:`${o.palette.mode==="light"?.12:.2}`},[`& .${t.input}`]:{left:"-100%",width:"300%"}}),({theme:o,ownerState:e})=>p({"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:k(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${t.checked}`]:{color:(o.vars||o).palette[e.color].main,"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:k(o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${t.disabled}`]:{color:o.vars?o.vars.palette.Switch[`${e.color}DisabledColor`]:`${o.palette.mode==="light"?$(o.palette[e.color].main,.62):C(o.palette[e.color].main,.55)}`}},[`&.${t.checked} + .${t.track}`]:{backgroundColor:(o.vars||o).palette[e.color].main}})),N=w("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(o,e)=>e.track})(({theme:o})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:o.transitions.create(["opacity","background-color"],{duration:o.transitions.duration.shortest}),backgroundColor:o.vars?o.vars.palette.common.onBackground:`${o.palette.mode==="light"?o.palette.common.black:o.palette.common.white}`,opacity:o.vars?o.vars.opacity.switchTrack:`${o.palette.mode==="light"?.38:.3}`})),O=w("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(o,e)=>e.thumb})(({theme:o})=>({boxShadow:(o.vars||o).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),U=B.forwardRef(function(e,r){const a=M({props:e,name:"MuiSwitch"}),{className:h,color:u="primary",edge:c=!1,size:l="medium",sx:i}=a,y=x(a,j),g=p({},a,{color:u,edge:c,size:l}),m=q(g),b=n.jsx(O,{className:m.thumb,ownerState:g});return n.jsxs(G,{className:T(m.root,h),sx:i,ownerState:g,children:[n.jsx(L,p({type:"checkbox",icon:b,checkedIcon:b,ref:r,ownerState:g},y,{classes:p({},m,{root:m.switchBase})})),n.jsx(N,{className:m.track,ownerState:g})]})}),_=v(U)`
  margin-right: 2px;
  && {
    width: 60px;
    height: 40px;
  }

  .MuiSwitch-colorPrimary,
  .MuiSwitch-colorPrimary.Mui-disabled {
    color: white;
  }

  .MuiSwitch-colorPrimary.Mui-checked,
  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked {
    color: ${s.newColors.simplyGold[100]};
  }

  .MuiSwitch-colorPrimary {
    padding: 10px;

    &:hover {
      background-color: ${s.newColors.simplyGrey[20]};
    }
  }

  .MuiSwitch-colorPrimary {
    &.Mui-checked {
      &:hover {
        background-color: ${s.newColors.simplyGold[20]};
      }
    }
  }

  .MuiSwitch-track {
    background-color: ${s.newColors.simplyGrey[100]};
    opacity: 1;
    height: 14px;
    width: 34px;
    margin: auto 0px;
  }

  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
    background-color: ${s.newColors.simplyGold[40]};
    opacity: 1;
  }

  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked + .MuiSwitch-track {
    background-color: ${s.newColors.simplyGold[40]};
  }

  .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {
    background-color: ${s.newColors.simplyGrey[100]};
    opacity: 0.5;
  }
`,E=o=>{const{checked:e,label:r,labelPlacement:a="end",required:h=!1,disabled:u=!1,onChange:c,onBlur:l}=o;return n.jsx(I,{label:r,labelPlacement:a,disabled:u,"data-testid":F.TOGGLE,control:n.jsx(_,{onBlur:i=>l&&l(i.target.checked),checked:!!e,onChange:i=>c&&c(i.target.checked),required:h})})};E.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"If true, the component is checked"},disabled:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the toggle switch is disabled."},label:{required:!0,tsType:{name:"string"},description:"Significant name related to its toggle switch."},labelPlacement:{required:!1,tsType:{name:'MUIFormControlLabelProps["labelPlacement"]',raw:'MUIFormControlLabelProps["labelPlacement"]'},description:"The position of the label."},required:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the toggle switch is required or not."},onChange:{required:!1,tsType:{name:'MosaicFieldProps["onChange"]',raw:'MosaicFieldProps<"toggle", ToggleInputSettings, boolean>["onChange"]'},description:"Change function inherit from the FormFieldToggle parent component."},onBlur:{required:!1,tsType:{name:'MosaicFieldProps["onBlur"]',raw:'MosaicFieldProps<"toggle", ToggleInputSettings, boolean>["onBlur"]'},description:"OnBlur function inherit from the FormFieldToggle parent component."}}};export{E as T};
