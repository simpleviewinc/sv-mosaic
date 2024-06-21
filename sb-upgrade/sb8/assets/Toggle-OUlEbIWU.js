import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{s as y,t as e}from"./theme-tUuL1bpb.js";import{a as $,g as S,s as k,c as d,b as p,f as m,l as x,h as C,u as M,_ as f,d as z,e as B}from"./useThemeProps-DZj2lB8w.js";import{r as P}from"./index-CDs2tPxN.js";import{S as R}from"./FormControlLabel-D6jwZlG2.js";import{S as j}from"./StyledFormControl.styled-CrNYvyVp.js";import{t as T}from"./testIds-B75WQI-K.js";function G(o){return S("MuiSwitch",o)}const t=$("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),I=["className","color","edge","size","sx"],N=o=>{const{classes:a,edge:r,size:i,color:u,checked:h,disabled:c}=o,l={root:["root",r&&`edge${d(r)}`,`size${d(i)}`],switchBase:["switchBase",`color${d(u)}`,h&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},s=B(l,G,a);return p({},a,s)},O=k("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.root,r.edge&&a[`edge${d(r.edge)}`],a[`size${d(r.size)}`]]}})(({ownerState:o})=>p({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},o.edge==="start"&&{marginLeft:-8},o.edge==="end"&&{marginRight:-8},o.size==="small"&&{width:40,height:24,padding:7,[`& .${t.thumb}`]:{width:16,height:16},[`& .${t.switchBase}`]:{padding:4,[`&.${t.checked}`]:{transform:"translateX(16px)"}}})),E=k(R,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(o,a)=>{const{ownerState:r}=o;return[a.switchBase,{[`& .${t.input}`]:a.input},r.color!=="default"&&a[`color${d(r.color)}`]]}})(({theme:o})=>({position:"absolute",top:0,left:0,zIndex:1,color:o.vars?o.vars.palette.Switch.defaultColor:`${o.palette.mode==="light"?o.palette.common.white:o.palette.grey[300]}`,transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest}),[`&.${t.checked}`]:{transform:"translateX(20px)"},[`&.${t.disabled}`]:{color:o.vars?o.vars.palette.Switch.defaultDisabledColor:`${o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[600]}`},[`&.${t.checked} + .${t.track}`]:{opacity:.5},[`&.${t.disabled} + .${t.track}`]:{opacity:o.vars?o.vars.opacity.switchTrackDisabled:`${o.palette.mode==="light"?.12:.2}`},[`& .${t.input}`]:{left:"-100%",width:"300%"}}),({theme:o,ownerState:a})=>p({"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:m(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.color!=="default"&&{[`&.${t.checked}`]:{color:(o.vars||o).palette[a.color].main,"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:m(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${t.disabled}`]:{color:o.vars?o.vars.palette.Switch[`${a.color}DisabledColor`]:`${o.palette.mode==="light"?x(o.palette[a.color].main,.62):C(o.palette[a.color].main,.55)}`}},[`&.${t.checked} + .${t.track}`]:{backgroundColor:(o.vars||o).palette[a.color].main}})),L=k("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(o,a)=>a.track})(({theme:o})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:o.transitions.create(["opacity","background-color"],{duration:o.transitions.duration.shortest}),backgroundColor:o.vars?o.vars.palette.common.onBackground:`${o.palette.mode==="light"?o.palette.common.black:o.palette.common.white}`,opacity:o.vars?o.vars.opacity.switchTrack:`${o.palette.mode==="light"?.38:.3}`})),U=k("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(o,a)=>a.thumb})(({theme:o})=>({boxShadow:(o.vars||o).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),_=P.forwardRef(function(a,r){const i=M({props:a,name:"MuiSwitch"}),{className:u,color:h="primary",edge:c=!1,size:l="medium",sx:s}=i,v=f(i,I),g=p({},i,{color:h,edge:c,size:l}),w=N(g),b=n.jsx(U,{className:w.thumb,ownerState:g});return n.jsxs(O,{className:z(w.root,u),sx:s,ownerState:g,children:[n.jsx(E,p({type:"checkbox",icon:b,checkedIcon:b,ref:r,ownerState:g},v,{classes:p({},w,{root:w.switchBase})})),n.jsx(L,{className:w.track,ownerState:g})]})}),D=y(_)`
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
    color: ${e.newColors.simplyGold[100]};
  }

  .MuiSwitch-colorPrimary {
    padding: 10px;

    &:hover {
      background-color: ${e.newColors.simplyGrey[20]};
    }
  }

  .MuiSwitch-colorPrimary {
    &.Mui-checked {
      &:hover {
        background-color: ${e.newColors.simplyGold[20]};
      }
    }
  }

  .MuiSwitch-track {
    background-color: ${e.newColors.simplyGrey[100]};
    opacity: 1;
    height: 14px;
    width: 34px;
    margin: auto 0px;
  }

  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
    background-color: ${e.newColors.simplyGold[40]};
    opacity: 1;
  }

  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked + .MuiSwitch-track {
    background-color: ${e.newColors.simplyGold[40]};
  }

  .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {
    background-color: ${e.newColors.simplyGrey[100]};
    opacity: 0.5;
  }
`,K=o=>{const{checked:a,label:r,labelPlacement:i="end",required:u=!1,disabled:h=!1,onChange:c,onBlur:l}=o;return n.jsx(j,{label:r,labelPlacement:i,disabled:h,"data-testid":T.TOGGLE,control:n.jsx(D,{onBlur:s=>l&&l(s.target.checked),checked:!!a,onChange:s=>c&&c(s.target.checked),required:u})})};export{K as T};
