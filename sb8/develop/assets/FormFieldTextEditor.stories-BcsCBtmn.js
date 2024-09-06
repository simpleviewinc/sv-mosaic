import{j as s,r as A}from"./jsx-runtime-nGUw9YhZ.js";import{r as v}from"./index-BP8_t0zE.js";import{u as D,F as _,k as me,l as be}from"./formUtils-BDVJudHN.js";import"./Button-Dth3WPw1.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as K}from"./storyUtils-BoiXCagy.js";import{D as ee}from"./ColorSelected-C1Ge2OOe.js";import{t as fe}from"./theme-Cyujm90X.js";import{s as E}from"./styled-components.browser.esm-8MQ3dTkk.js";import{b as I,s as F,u as $,_ as T,d as N,i as q,g as V,a as G,t as ye,h as B,j as ge}from"./styled-BsTcxDz6.js";import{r as z,c as ke,d as Se}from"./createSvgIcon-B4P8-XBj.js";import{G as te}from"./Grid-daly-Baf.js";import{_ as u}from"./extends-CF3RwP-h.js";import{l as re,L as R,g as Ce,B as we}from"./listItemTextClasses-C4A0Wzjq.js";import{T as H}from"./Typography-CBUKMGJu.js";function Te(e){return typeof e=="string"}function Ie(e,t,r){return e===void 0||Te(e)?t:u({},t,{ownerState:u({},t.ownerState,r)})}function je(e,t=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!t.includes(n)).forEach(n=>{r[n]=e[n]}),r}function ne(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{t[r]=e[r]}),t}function Le(e){const{getSlotProps:t,additionalProps:r,externalSlotProps:n,externalForwardedProps:a,className:o}=e;if(!t){const m=I(r==null?void 0:r.className,o,a==null?void 0:a.className,n==null?void 0:n.className),g=u({},r==null?void 0:r.style,a==null?void 0:a.style,n==null?void 0:n.style),h=u({},r,a,n);return m.length>0&&(h.className=m),Object.keys(g).length>0&&(h.style=g),{props:h,internalRef:void 0}}const l=je(u({},a,n)),i=ne(n),p=ne(a),d=t(l),c=I(d==null?void 0:d.className,r==null?void 0:r.className,o,a==null?void 0:a.className,n==null?void 0:n.className),x=u({},d==null?void 0:d.style,r==null?void 0:r.style,a==null?void 0:a.style,n==null?void 0:n.style),f=u({},d,r,p,i);return c.length>0&&(f.className=c),Object.keys(x).length>0&&(f.style=x),{props:f,internalRef:d.ref}}function Fe(e,t,r){return typeof e=="function"?e(t,r):e}const Pe=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Me=e=>{const{classes:t,inset:r,primary:n,secondary:a,dense:o}=e;return N({root:["root",r&&"inset",o&&"dense",n&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},Ce,t)},Re=F("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${re.primary}`]:t.primary},{[`& .${re.secondary}`]:t.secondary},t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})(({ownerState:e})=>u({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),De=v.forwardRef(function(t,r){const n=$({props:t,name:"MuiListItemText"}),{children:a,className:o,disableTypography:l=!1,inset:i=!1,primary:p,primaryTypographyProps:d,secondary:c,secondaryTypographyProps:x}=n,f=T(n,Pe),{dense:m}=v.useContext(R);let g=p??a,h=c;const y=u({},n,{disableTypography:l,inset:i,primary:!!g,secondary:!!h,dense:m}),b=Me(y);return g!=null&&g.type!==H&&!l&&(g=s.jsx(H,u({variant:m?"body2":"body1",className:b.primary,component:d!=null&&d.variant?void 0:"span",display:"block"},d,{children:g}))),h!=null&&h.type!==H&&!l&&(h=s.jsx(H,u({variant:"body2",className:b.secondary,color:"text.secondary",display:"block"},x,{children:h}))),s.jsxs(Re,u({className:I(b.root,o),ownerState:y,ref:r},f,{children:[g,h]}))}),ve=E.div`
    width: 600px;
`,_e=E.div`
    position: relative;
`,Ee=E.img`
    border-radius: 4px;
    height: 200px;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    opacity: 0.8;

    ${({$selected:e})=>e&&`
        opacity: 1;
    `}
`,$e=E.div`
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    background: ${fe.colors.teal};
    border-radius: 3px;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;var Z={},Ne=q;Object.defineProperty(Z,"__esModule",{value:!0});var xe=Z.default=void 0,Oe=Ne(z()),Be=A();xe=Z.default=(0,Oe.default)((0,Be.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const He=["https://res.cloudinary.com/simpleview/image/upload/v1434723041/clients/grandrapids/CVB-Runners-Beach-852_2bbfa8b9-d45a-4590-8571-b6f06d39f9b9.jpg","https://res.cloudinary.com/simpleview/image/upload/v1434925582/clients/grandrapids/John%20Ball%20Zoo%2020_70aa697e-f0a8-4741-8497-9b2baad425b0.jpg","https://res.cloudinary.com/simpleview/image/upload/v1434726973/clients/grandrapids/GRAM_05f44299-99aa-478c-9325-ec0302767c62.jpg","https://res.cloudinary.com/simpleview/image/upload/v1435247801/clients/grandrapids/Aerial%20of%20Grand%20Rapids_e617e364-0615-43c6-8344-700c91b2ce6f.jpg","https://res.cloudinary.com/simpleview/image/upload/v1435689432/clients/grandrapids/Motorcoach%2C%20Lubbers%20Family%20Farm%20Group%20Tour_1e8a5b67-c6ff-4cdb-8c48-a3536fe0e8d0.jpg","https://res.cloudinary.com/simpleview/image/upload/v1434724739/clients/grandrapids/Ex%20Grand%20Rapids_Founders8670_ac26e944-36fb-47e1-946b-ce1f7380820a.jpg"];function Ae(e){const{fieldDef:t,value:r,error:n,methods:a,inputRef:o,disabled:l,skeleton:i,onChange:p}=e,{name:d}=t;return s.jsx(me,{fieldDef:t,value:r,error:n,id:d,methods:a,inputRef:o,disabled:l,skeleton:i,children:s.jsx(te,{container:!0,spacing:2,children:He.map(c=>s.jsx(te,{item:!0,xs:4,children:s.jsxs(_e,{children:[s.jsx(Ee,{src:c,onClick:()=>p(c),$selected:r===c}),r===c&&s.jsx($e,{children:s.jsx(xe,{})})]})},c))})})}function qe({onClose:e,updateImage:t,alt:r,src:n}){const a=D(),{handleSubmit:o}=a,l=v.useMemo(()=>[{name:"alt",type:"text",label:"Alternative Text"},{name:"src",type:Ae,label:"Image Source",required:!0}],[]),i=v.useMemo(()=>[{label:"Cancel",onClick:e,color:"gray",variant:"outlined"},{label:"Save",type:"submit",color:"yellow",variant:"contained"}],[e]),p=o(({data:c})=>{if(!t)throw new Error("Update image callback was not provided");t({src:c.src,alt:c.alt})}),d=v.useCallback(async()=>({alt:r,src:n}),[r,n]);return s.jsx(ve,{children:s.jsx(_,{title:"Select Image",fields:l,onBack:e,buttons:i,onSubmit:p,getFormValues:d,...a})})}var Y={},Ve=q;Object.defineProperty(Y,"__esModule",{value:!0});var J=Y.default=void 0,Ge=Ve(z()),ze=A();J=Y.default=(0,Ge.default)((0,ze.jsx)("path",{fillRule:"evenodd",d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3"}),"PushPin");var Q={},Ue=q;Object.defineProperty(Q,"__esModule",{value:!0});var he=Q.default=void 0,Je=Ue(z()),We=A();he=Q.default=(0,Je.default)((0,We.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"}),"CalendarMonth");var X={},Ke=q;Object.defineProperty(X,"__esModule",{value:!0});var W=X.default=void 0,Ze=Ke(z()),Ye=A();W=X.default=(0,Ze.default)((0,Ye.jsx)("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1z"}),"PermContactCalendar");function Qe(e){return V("MuiList",e)}G("MuiList",["root","padding","dense","subheader"]);const Xe=["children","className","component","dense","disablePadding","subheader"],et=e=>{const{classes:t,disablePadding:r,dense:n,subheader:a}=e;return N({root:["root",!r&&"padding",n&&"dense",a&&"subheader"]},Qe,t)},tt=F("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disablePadding&&t.padding,r.dense&&t.dense,r.subheader&&t.subheader]}})(({ownerState:e})=>u({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),rt=v.forwardRef(function(t,r){const n=$({props:t,name:"MuiList"}),{children:a,className:o,component:l="ul",dense:i=!1,disablePadding:p=!1,subheader:d}=n,c=T(n,Xe),x=v.useMemo(()=>({dense:i}),[i]),f=u({},n,{component:l,dense:i,disablePadding:p}),m=et(f);return s.jsx(R.Provider,{value:x,children:s.jsxs(tt,u({as:l,className:I(m.root,o),ref:r,ownerState:f},c,{children:[d,a]}))})});function nt(e){return V("MuiListItemButton",e)}const P=G("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),at=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],st=(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.alignItems==="flex-start"&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters]},ot=e=>{const{alignItems:t,classes:r,dense:n,disabled:a,disableGutters:o,divider:l,selected:i}=e,d=N({root:["root",n&&"dense",!o&&"gutters",l&&"divider",a&&"disabled",t==="flex-start"&&"alignItemsFlexStart",i&&"selected"]},nt,r);return u({},r,d)},it=F(we,{shouldForwardProp:e=>ye(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:st})(({theme:e,ownerState:t})=>u({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:B(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:B(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${P.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:B(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:B(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${P.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${P.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),lt=v.forwardRef(function(t,r){const n=$({props:t,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:o=!1,component:l="div",children:i,dense:p=!1,disableGutters:d=!1,divider:c=!1,focusVisibleClassName:x,selected:f=!1,className:m}=n,g=T(n,at),h=v.useContext(R),y=v.useMemo(()=>({dense:p||h.dense||!1,alignItems:a,disableGutters:d}),[a,h.dense,p,d]),b=v.useRef(null);ke(()=>{o&&b.current&&b.current.focus()},[o]);const w=u({},n,{alignItems:a,dense:y.dense,disableGutters:d,divider:c,selected:f}),k=ot(w),S=ge(b,r);return s.jsx(R.Provider,{value:y,children:s.jsx(it,u({ref:S,href:g.href||g.to,component:(g.href||g.to)&&l==="div"?"button":l,focusVisibleClassName:I(k.focusVisible,x),ownerState:w,className:I(k.root,m)},g,{classes:k,children:i}))})});function ct(e){return V("MuiListItemAvatar",e)}G("MuiListItemAvatar",["root","alignItemsFlexStart"]);const dt=["className"],ut=e=>{const{alignItems:t,classes:r}=e;return N({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},ct,r)},pt=F("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({ownerState:e})=>u({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),mt=v.forwardRef(function(t,r){const n=$({props:t,name:"MuiListItemAvatar"}),{className:a}=n,o=T(n,dt),l=v.useContext(R),i=u({},n,{alignItems:l.alignItems}),p=ut(i);return s.jsx(pt,u({className:I(p.root,a),ownerState:i,ref:r},o))}),ft=Se(s.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function gt(e){return V("MuiAvatar",e)}G("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const vt=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],xt=["component","slots","slotProps"],ht=["component"];function bt(e,t){const{className:r,elementType:n,ownerState:a,externalForwardedProps:o,getSlotOwnerState:l,internalForwardedProps:i}=t,p=T(t,vt),{component:d,slots:c={[e]:void 0},slotProps:x={[e]:void 0}}=o;T(o,xt);const f=c[e]||n,m=Fe(x[e],a),g=Le(u({className:r},p,{externalForwardedProps:void 0,externalSlotProps:m})),{props:{component:h},internalRef:y}=g,b=T(g.props,ht),w=ge(y,m==null?void 0:m.ref,t.ref),k=l?l(b):{},S=u({},a,k),C=h,O=Ie(f,u({},e==="root",!c[e]&&i,b,C&&{as:C},{ref:w}),S);return Object.keys(k).forEach(U=>{delete O[U]}),[f,O]}const yt=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],kt=e=>{const{classes:t,variant:r,colorDefault:n}=e;return N({root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]},gt,t)},St=F("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:u({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:u({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),Ct=F("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),wt=F(ft,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function Tt({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){const[a,o]=v.useState(!1);return v.useEffect(()=>{if(!r&&!n)return;o(!1);let l=!0;const i=new Image;return i.onload=()=>{l&&o("loaded")},i.onerror=()=>{l&&o("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=r,n&&(i.srcset=n),()=>{l=!1}},[e,t,r,n]),a}const It=v.forwardRef(function(t,r){const n=$({props:t,name:"MuiAvatar"}),{alt:a,children:o,className:l,component:i="div",slots:p={},slotProps:d={},imgProps:c,sizes:x,src:f,srcSet:m,variant:g="circular"}=n,h=T(n,yt);let y=null;const b=Tt(u({},c,{src:f,srcSet:m})),w=f||m,k=w&&b!=="error",S=u({},n,{colorDefault:!k,component:i,variant:g}),C=kt(S),[O,U]=bt("img",{className:C.img,elementType:Ct,externalForwardedProps:{slots:p,slotProps:{img:u({},c,d.img)}},additionalProps:{alt:a,src:f,srcSet:m,sizes:x},ownerState:S});return k?y=s.jsx(O,u({},U)):o||o===0?y=o:w&&a?y=a[0]:y=s.jsx(wt,{ownerState:S,className:C.fallback}),s.jsx(St,u({as:i,ownerState:S,className:I(C.root,l),ref:r},h,{children:y}))}),jt=E(It)`
    && {
        ${({$selected:e})=>e&&`
            background-color: ${fe.colors.teal};
        `}
    }
`,Lt=[{id:"bulletin/vacations-pass-the-value-test",title:"Vacations pass the value test",category:"Bulletin",Icon:J},{id:"bulletin/submit-special-offers-for-consumers-or-travel-advisors",title:"Submit Special Offers for Consumers or Travel Advisors",category:"Bulletin",Icon:J},{id:"leisure-event/my-4th-street-simple-event",title:"My 4th Street Simple Event",category:"Leisure Event",Icon:he},{id:"contact/anna-marie-yakubisin",title:"Anna Marie Yakubisin",category:"Contact",Icon:W},{id:"contact/mr-aaron-s-bilkins-junior",title:"Mr Aaron S Bilkins Junior",category:"Contact",Icon:W}];function Ft(e){const{fieldDef:t,value:r,error:n,methods:a,inputRef:o,disabled:l,skeleton:i,onChange:p}=e,{name:d}=t;return s.jsx(me,{fieldDef:t,value:r,error:n,id:d,methods:a,inputRef:o,disabled:l,skeleton:i,children:s.jsx(rt,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:Lt.map(({id:c,title:x,category:f,Icon:m})=>s.jsxs(lt,{onClick:()=>p(c),children:[s.jsx(mt,{children:s.jsx(jt,{$selected:c===r,children:s.jsx(m,{})})}),s.jsx(De,{primary:x,secondary:f})]},c))})})}function Pt({onClose:e,updateLink:t,url:r,newTab:n}){const a=D(),{handleSubmit:o}=a,l=v.useMemo(()=>[{name:"newTab",type:"toggle",label:"Open in New Tab"},{name:"url",type:Ft,label:"target",required:!0}],[]),i=v.useMemo(()=>[{label:"Cancel",onClick:e,color:"gray",variant:"outlined"},{label:"Save",type:"submit",color:"yellow",variant:"contained"}],[e]),p=o(({data:c})=>{if(!t)throw new Error("Update image callback was not provided");t({url:c.url,newTab:c.newTab})}),d=v.useCallback(async()=>({newTab:n,url:r}),[n,r]);return s.jsx(ve,{children:s.jsx(_,{title:"Select Page",fields:l,onBack:e,buttons:i,onSubmit:p,getFormValues:d,...a})})}const Mt={title:"FormFields/FormFieldTextEditor"},j=({label:e,disabled:t,required:r,skeleton:n,instructionText:a,helperText:o,spellcheck:l,direction:i,language:p,maxCharacters:d})=>{const c=D(),{state:x,handleSubmit:f}=c,m=v.useMemo(()=>[{name:"textEditor",label:e,type:"textEditor",required:r,inputSettings:{spellcheck:l,direction:i,language:p,maxCharacters:d},disabled:t,helperText:o,instructionText:a}],[i,r,t,e,o,a,d,l,p]);return s.jsxs(s.Fragment,{children:[s.jsx("pre",{children:JSON.stringify(x,null,"  ")}),s.jsx(_,{...c,title:"Text Editor Field",fields:m,buttons:K(f),skeleton:n})]})};j.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",spellcheck:!1,direction:"ltr",language:"en",maxCharacters:100};j.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},spellcheck:{name:"Direction",control:{type:"select"},options:["ltr","rtl"]},direction:{name:"Direction"},language:{name:"Language"},maxCharacters:{name:"Maximum Characters"}};const Rt=[{name:"spellCheck",label:"Text editor with spellcheck active",type:"textEditor",required:!1,inputSettings:{spellcheck:!0}},{name:"ltr",label:"Text editor with left to right direction",type:"textEditor",required:!1,inputSettings:{direction:"ltr"}},{name:"rtl",label:"Text editor with right to left direction",type:"textEditor",required:!1,inputSettings:{direction:"rtl"}},{name:"german",label:"Text editor in german (de) language",type:"textEditor",required:!1,inputSettings:{language:"de"}},{name:"maxChars",label:"Text editor with max character limit",type:"textEditor",required:!1,inputSettings:{maxCharacters:20}},{name:"disabled",label:"Disabled text editor",type:"textEditor",required:!1,disabled:!0}],M=()=>{const e=D(),{state:t,handleSubmit:r}=e;return s.jsxs(s.Fragment,{children:[s.jsx("pre",{children:JSON.stringify(t,null,"  ")}),s.jsx(_,{...e,title:"Text Editor Kitchen Sink",description:"This is a description example",fields:Rt,buttons:K(r)})]})},L=({label:e,disabled:t,required:r,skeleton:n,instructionText:a,helperText:o,spellcheck:l,maxCharacters:i,customImageHandler:p,customLinkHandler:d})=>{const c=D(),[x,f]=v.useState(null),[m,g]=v.useState(null),{state:h,handleSubmit:y}=c,b=()=>{f(null),g(null)},w=v.useMemo(()=>[{name:"textEditor",label:e,type:be,required:r,inputSettings:{onImage:p?({updateImage:k,...S})=>{f({...S,updateImage:C=>{k(C),b()}})}:void 0,onLink:d?({updateLink:k,...S})=>{g({...S,updateLink:C=>{k(C),b()}})}:void 0,maxCharacters:100},disabled:t,helperText:o,instructionText:a}],[r,t,e,o,a,i,l,p,d]);return s.jsxs(s.Fragment,{children:[s.jsx("pre",{children:JSON.stringify(h,null,"  ")}),s.jsx(_,{...c,title:"Text Editor Tiptap",fields:w,buttons:K(y),skeleton:n}),s.jsx(ee,{open:!!x,onClose:b,children:x&&s.jsx(qe,{onClose:b,...x})}),s.jsx(ee,{open:!!m,onClose:b,children:m&&s.jsx(Pt,{onClose:b,...m})})]})};L.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",spellcheck:!1,maxCharacters:100,customImageHandler:!1,customLinkHandler:!1};L.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},spellcheck:{name:"Direction",control:{type:"select"},options:["ltr","rtl"]},maxCharacters:{name:"Maximum Characters"},customImageHandler:{name:"Custom Image Handler"},customLinkHandler:{name:"Custom Link Handler"}};var ae,se,oe;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  instructionText,
  helperText,
  spellcheck,
  direction,
  language,
  maxCharacters
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "textEditor",
    label,
    type: "textEditor",
    required,
    inputSettings: {
      spellcheck,
      direction,
      language,
      maxCharacters
    },
    disabled,
    helperText,
    instructionText
  }], [direction, required, disabled, label, helperText, instructionText, maxCharacters, spellcheck, language]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} title="Text Editor Field" fields={fields} buttons={renderButtons(handleSubmit)} skeleton={skeleton} />
        </>;
}`,...(oe=(se=j.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,ce;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} title="Text Editor Kitchen Sink" description="This is a description example" fields={fields} buttons={renderButtons(handleSubmit)} />
        </>;
}`,...(ce=(le=M.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,pe;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  instructionText,
  helperText,
  spellcheck,
  maxCharacters,
  customImageHandler,
  customLinkHandler
}: typeof Tiptap.args): ReactElement => {
  const controller = useForm();
  const [mediaDrawer, setMediaDrawer] = useState<null | TextEditorOnImageParams>(null);
  const [linkDrawer, setLinkDrawer] = useState<null | TextEditorOnLinkParams>(null);
  const {
    state,
    handleSubmit
  } = controller;
  const onClose = () => {
    setMediaDrawer(null);
    setLinkDrawer(null);
  };
  const tiptapFields = useMemo((): FieldDef[] => [{
    name: "textEditor",
    label,
    type: FormFieldTextEditorTipTapFieldType,
    required,
    inputSettings: {
      onImage: customImageHandler ? ({
        updateImage,
        ...params
      }) => {
        setMediaDrawer({
          ...params,
          updateImage: params => {
            updateImage(params);
            onClose();
          }
        });
      } : undefined,
      onLink: customLinkHandler ? ({
        updateLink,
        ...params
      }) => {
        setLinkDrawer({
          ...params,
          updateLink: params => {
            updateLink(params);
            onClose();
          }
        });
      } : undefined,
      maxCharacters: 100
    },
    disabled,
    helperText,
    instructionText
  }], [required, disabled, label, helperText, instructionText, maxCharacters, spellcheck, customImageHandler, customLinkHandler]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} title="Text Editor Tiptap" fields={tiptapFields} buttons={renderButtons(handleSubmit)} skeleton={skeleton} />
            <Drawer open={Boolean(mediaDrawer)} onClose={onClose}>
                {mediaDrawer && <MediaGalleryDrawer onClose={onClose} {...mediaDrawer} />}
            </Drawer>
            <Drawer open={Boolean(linkDrawer)} onClose={onClose}>
                {linkDrawer && <LinkLibraryDrawer onClose={onClose} {...linkDrawer} />}
            </Drawer>
        </>;
}`,...(pe=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const Dt=["Playground","KitchenSink","Tiptap"],Kt=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:M,Playground:j,Tiptap:L,__namedExportsOrder:Dt,default:Mt},Symbol.toStringTag,{value:"Module"}));export{Kt as s};
