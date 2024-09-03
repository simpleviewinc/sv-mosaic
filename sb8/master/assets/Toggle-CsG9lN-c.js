import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{s as y,t as s}from"./theme-D4oZEIDo.js";import{a as v,g as $,s as b,b as d,i as m,l as x,j as f,u as C,_ as M,d as g,e as z,f as B}from"./generateUtilityClasses-BPeOZGYv.js";import{r as j}from"./index-BP8_t0zE.js";import{S as P}from"./FormControlLabel-DBnW5Tz0.js";import{S as R}from"./StyledFormControl.styled-DtM0hwgT.js";import{t as G}from"./testIds-BYqMnK8Q.js";function T(t){return $("MuiSwitch",t)}const a=v("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),_=["className","color","edge","size","sx"],O=t=>{const{classes:o,edge:r,size:i,color:p,checked:u,disabled:c}=t,l={root:["root",r&&`edge${d(r)}`,`size${d(i)}`],switchBase:["switchBase",`color${d(p)}`,u&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},e=B(l,T,o);return g({},o,e)},I=b("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,r.edge&&o[`edge${d(r.edge)}`],o[`size${d(r.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${a.thumb}`]:{width:16,height:16},[`& .${a.switchBase}`]:{padding:4,[`&.${a.checked}`]:{transform:"translateX(16px)"}}}}]}),N=b(P,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.switchBase,{[`& .${a.input}`]:o.input},r.color!=="default"&&o[`color${d(r.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${a.checked}`]:{transform:"translateX(20px)"},[`&.${a.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${a.checked} + .${a.track}`]:{opacity:.5},[`&.${a.disabled} + .${a.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${a.input}`]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:m(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{color:o},style:{[`&.${a.checked}`]:{color:(t.vars||t).palette[o].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:m(t.palette[o].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${o}DisabledColor`]:`${t.palette.mode==="light"?x(t.palette[o].main,.62):f(t.palette[o].main,.55)}`}},[`&.${a.checked} + .${a.track}`]:{backgroundColor:(t.vars||t).palette[o].main}}}))]})),D=b("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,o)=>o.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),E=b("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,o)=>o.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),L=j.forwardRef(function(o,r){const i=C({props:o,name:"MuiSwitch"}),{className:p,color:u="primary",edge:c=!1,size:l="medium",sx:e}=i,S=M(i,_),h=g({},i,{color:u,edge:c,size:l}),w=O(h),k=n.jsx(E,{className:w.thumb,ownerState:h});return n.jsxs(I,{className:z(w.root,p),sx:e,ownerState:h,children:[n.jsx(N,g({type:"checkbox",icon:k,checkedIcon:k,ref:r,ownerState:h},S,{classes:g({},w,{root:w.switchBase})})),n.jsx(D,{className:w.track,ownerState:h})]})}),U=y(L)`
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
`,K=t=>{const{checked:o,label:r,labelPlacement:i="end",required:p=!1,disabled:u=!1,onChange:c,onBlur:l}=t;return n.jsx(R,{label:r,labelPlacement:i,disabled:u,"data-testid":G.TOGGLE,control:n.jsx(U,{onBlur:e=>l&&l(e.target.checked),checked:!!o,onChange:e=>c&&c(e.target.checked),required:p})})};export{K as T};
