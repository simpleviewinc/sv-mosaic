import{r as k}from"./index-D0AnReJb.js";import{s as v}from"./styled-components.browser.esm-B06rF3P8.js";import{t as s}from"./sizes-HwDk6ODv.js";import{b as n,d as w,_ as $,a as b}from"./DefaultPropsProvider-BwNoCFE_.js";import{a as x,g as f,s as m,u as M,c as C,b as z}from"./generateUtilityClasses-42_at76R.js";import{S as B}from"./FormControlLabel-FaPuCwUU.js";import{j as g}from"./jsx-runtime-EKYJJIwR.js";import{S as P}from"./StyledFormControl.styled-CW3JaFWW.js";import{t as R}from"./testIds-Dso8kRSM.js";function j(t){return f("MuiSwitch",t)}const a=x("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),G=["className","color","edge","size","sx"],T=t=>{const{classes:o,edge:r,size:e,color:d,checked:p,disabled:c}=t,l={root:["root",r&&`edge${n(r)}`,`size${n(e)}`],switchBase:["switchBase",`color${n(d)}`,p&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},i=z(l,j,o);return b({},o,i)},E=m("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.edge&&o[`edge${n(r.edge)}`],o[`size${n(r.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${a.thumb}`]:{width:16,height:16},[`& .${a.switchBase}`]:{padding:4,[`&.${a.checked}`]:{transform:"translateX(16px)"}}}}]}),O=m(B,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.switchBase,{[`& .${a.input}`]:o.input},r.color!=="default"&&o[`color${n(r.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${a.checked}`]:{transform:"translateX(20px)"},[`&.${a.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${a.checked} + .${a.track}`]:{opacity:.5},[`&.${a.disabled} + .${a.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${a.input}`]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:w.alpha(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{color:o},style:{[`&.${a.checked}`]:{color:(t.vars||t).palette[o].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:w.alpha(t.palette[o].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${o}DisabledColor`]:`${t.palette.mode==="light"?w.lighten(t.palette[o].main,.62):w.darken(t.palette[o].main,.55)}`}},[`&.${a.checked} + .${a.track}`]:{backgroundColor:(t.vars||t).palette[o].main}}}))]})),I=m("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,o)=>o.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),N=m("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,o)=>o.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),D=k.forwardRef(function(o,r){const e=M({props:o,name:"MuiSwitch"}),{className:d,color:p="primary",edge:c=!1,size:l="medium",sx:i}=e,y=$(e,G),u=b({},e,{color:p,edge:c,size:l}),h=T(u),S=g.jsx(N,{className:h.thumb,ownerState:u});return g.jsxs(E,{className:C(h.root,d),sx:i,ownerState:u,children:[g.jsx(O,b({type:"checkbox",icon:S,checkedIcon:S,ref:r,ownerState:u},y,{classes:b({},h,{root:h.switchBase})})),g.jsx(I,{className:h.track,ownerState:u})]})}),L=v(D)`
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
`,K=t=>{const{checked:o,label:r,labelPlacement:e="end",required:d=!1,disabled:p=!1,onChange:c,onBlur:l}=t;return k.createElement(P,{label:r,labelPlacement:e,disabled:p,"data-testid":R.TOGGLE,control:k.createElement(L,{onBlur:i=>l&&l(i.target.checked),checked:!!o,onChange:i=>c&&c(i.target.checked),required:d})})};export{K as T};
