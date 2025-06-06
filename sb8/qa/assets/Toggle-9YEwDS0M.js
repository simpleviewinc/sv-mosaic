import{r as m}from"./index-D0AnReJb.js";import{t as s,s as v}from"./sizes-BklZZmo4.js";import{a as $,g as x,s as k,e as n,i as w,u as M,_ as f,b,d as C,f as z}from"./generateUtilityClasses-rDn4KRfY.js";import{S as B}from"./FormControlLabel-BKc7O7Lz.js";import{j as g}from"./jsx-runtime-EKYJJIwR.js";import{S as P}from"./StyledFormControl.styled-BMW4FUOw.js";import{t as R}from"./testIds-Dso8kRSM.js";function j(t){return x("MuiSwitch",t)}const o=$("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),G=["className","color","edge","size","sx"],T=t=>{const{classes:a,edge:e,size:r,color:d,checked:p,disabled:c}=t,l={root:["root",e&&`edge${n(e)}`,`size${n(r)}`],switchBase:["switchBase",`color${n(d)}`,p&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},i=z(l,j,a);return b({},a,i)},E=k("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,e.edge&&a[`edge${n(e.edge)}`],a[`size${n(e.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${o.thumb}`]:{width:16,height:16},[`& .${o.switchBase}`]:{padding:4,[`&.${o.checked}`]:{transform:"translateX(16px)"}}}}]}),O=k(B,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.switchBase,{[`& .${o.input}`]:a.input},e.color!=="default"&&a[`color${n(e.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${o.checked}`]:{transform:"translateX(20px)"},[`&.${o.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${o.checked} + .${o.track}`]:{opacity:.5},[`&.${o.disabled} + .${o.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${o.input}`]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:w.alpha(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,a])=>a.main&&a.light).map(([a])=>({props:{color:a},style:{[`&.${o.checked}`]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:w.alpha(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a}DisabledColor`]:`${t.palette.mode==="light"?w.lighten(t.palette[a].main,.62):w.darken(t.palette[a].main,.55)}`}},[`&.${o.checked} + .${o.track}`]:{backgroundColor:(t.vars||t).palette[a].main}}}))]})),I=k("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),N=k("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),D=m.forwardRef(function(a,e){const r=M({props:a,name:"MuiSwitch"}),{className:d,color:p="primary",edge:c=!1,size:l="medium",sx:i}=r,y=f(r,G),u=b({},r,{color:p,edge:c,size:l}),h=T(u),S=g.jsx(N,{className:h.thumb,ownerState:u});return g.jsxs(E,{className:C(h.root,d),sx:i,ownerState:u,children:[g.jsx(O,b({type:"checkbox",icon:S,checkedIcon:S,ref:e,ownerState:u},y,{classes:b({},h,{root:h.switchBase})})),g.jsx(I,{className:h.track,ownerState:u})]})}),L=v(D)`
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
`,H=t=>{const{checked:a,label:e,labelPlacement:r="end",required:d=!1,disabled:p=!1,onChange:c,onBlur:l}=t;return m.createElement(P,{label:e,labelPlacement:r,disabled:p,"data-testid":R.TOGGLE,control:m.createElement(L,{onBlur:i=>l&&l(i.target.checked),checked:!!a,onChange:i=>c&&c(i.target.checked),required:d})})};export{H as T};
