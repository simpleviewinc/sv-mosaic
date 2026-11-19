import{r as a,R as N}from"./index-wekxHvEx.js";import{c as z}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as i}from"./sizes-BeWafy6f.js";import{a as q}from"./identifier-DEb8G0aq.js";import{S as Y}from"./SwitchBase-D6K8Fkjn.js";import{c as D}from"./createSvgIcon-TbZ0fr-h.js";import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{s as k,r as T,m as H,a as Z,g as A,c as v,u as _,b as J}from"./generateUtilityClasses-NbEjrlIW.js";import{a as oo,u as eo}from"./useFormControl-p_2RyLus.js";import{c as O}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{u as to}from"./ButtonBase-C7cXrk-H.js";import{c as ro}from"./createChainedFunction-BO_9K8Jh.js";import{O as ao}from"./OptionField-R5YykxyG.js";import{u as so}from"./mergeSlotProps-DU4484Lo.js";import{u as no}from"./useId-69YouNVI.js";import{F as io}from"./FormGroup-BOW51rb4.js";const lo=D(l.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),co=D(l.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),uo=k("span",{name:"MuiRadioButtonIcon",shouldForwardProp:T})({position:"relative",display:"flex"}),po=k(lo,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),fo=k(co,{name:"MuiRadioButtonIcon"})(H(({theme:o})=>({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}}]})));function K(o){const{checked:e=!1,classes:t={},fontSize:r}=o,s={...o,checked:e};return l.jsxs(uo,{className:t.root,ownerState:s,children:[l.jsx(po,{fontSize:r,className:t.background,ownerState:s}),l.jsx(fo,{fontSize:r,className:t.dot,ownerState:s})]})}const L=a.createContext(void 0);function mo(){return a.useContext(L)}function Ro(o){return A("MuiRadio",o)}const U=Z("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),bo=o=>{const{classes:e,color:t,size:r}=o,s={root:["root",`color${v(t)}`,r!=="medium"&&`size${v(r)}`]};return{...e,...J(s,Ro,e)}},go=k(Y,{shouldForwardProp:o=>T(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.size!=="medium"&&e[`size${v(t.size)}`],e[`color${v(t.color)}`]]}})(H(({theme:o})=>({color:(o.vars||o).palette.text.secondary,[`&.${U.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:o.alpha((o.vars||o).palette.action.active,(o.vars||o).palette.action.hoverOpacity)}}},...Object.entries(o.palette).filter(O()).map(([e])=>({props:{color:e,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:o.alpha((o.vars||o).palette[e].main,(o.vars||o).palette.action.hoverOpacity)}}})),...Object.entries(o.palette).filter(O()).map(([e])=>({props:{color:e,disabled:!1},style:{[`&.${U.checked}`]:{color:(o.vars||o).palette[e].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function Co(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}const ho=l.jsx(K,{checked:!0}),yo=l.jsx(K,{}),xo=a.forwardRef(function(e,t){const r=_({props:e,name:"MuiRadio"}),{checked:s,checkedIcon:d=ho,color:u="primary",icon:c=yo,name:p,onChange:S,size:f="medium",className:m,disabled:P,disableRipple:C=!1,slots:R={},slotProps:h={},inputProps:y,...I}=r,n=oo();let b=P;n&&typeof b>"u"&&(b=n.disabled),b??(b=!1);const w={...r,disabled:b,disableRipple:C,color:u,size:f},B=bo(w),g=mo();let $=s;const Q=ro(S,g&&g.onChange);let j=p;g&&(typeof $>"u"&&($=Co(g.value,r.value)),typeof j>"u"&&(j=g.name));const M=h.input??y,[W,X]=to("root",{ref:t,elementType:go,className:q(B.root,m),shouldForwardComponentProp:!0,externalForwardedProps:{slots:R,slotProps:h,...I},getSlotProps:x=>({...x,onChange:(F,...E)=>{var G;(G=x.onChange)==null||G.call(x,F,...E),Q(F,...E)}}),ownerState:w,additionalProps:{type:"radio",icon:a.cloneElement(c,{fontSize:c.props.fontSize??f}),checkedIcon:a.cloneElement(d,{fontSize:d.props.fontSize??f}),disabled:b,name:j,checked:$,slots:R,slotProps:{input:typeof M=="function"?M(w):M}}});return l.jsx(W,{...X,classes:B})}),vo=z(xo)`
	padding: ${i.spacing(2)};
	color: ${i.color.black};

	svg {
		width: 18px;
		height: 18px;
	}

	&:hover {
		background-color: ${i.color.translucent.grey[100]};
	}

	&.Mui-disabled {
		color: ${i.color.gray[400]};
	}

	&.Mui-checked {
		color: ${i.color.gold[500]};

		&.Mui-disabled {
			color: ${i.color.gold[200]};
		}

		&:hover {
			background-color: ${i.color.translucent.gold[100]};
		}
	}

	&.Mui-focusVisible {
		outline: 2px solid ${i.color.gray[700]};
		outline-offset: -2px;
	}
`,ko=z.span`
	margin-top: -1px;
	width: 16px;
	height: 16px;
	border: 2px solid currentColor;
	border-radius: ${i.rounded.full};
	display: flex;
	align-items: center;
	justify-content: center;
`,So=z.span`
	width: 8px;
	height: 8px;
	background-color: currentColor;
	border-radius: ${i.rounded.full};
`,V=({checked:o})=>N.createElement(ko,null,o&&N.createElement(So,null)),Ho=o=>{const{label:e,required:t,disabled:r,value:s,checked:d}=o,u=o["aria-describedby"],c=a.useId();return a.createElement(ao,{id:c,label:e,disabled:r,required:t,control:a.createElement(vo,{"data-testid":"radio-button-test",disabled:r,checked:d,icon:a.createElement(V,null),checkedIcon:a.createElement(V,{checked:!0}),disableRipple:!0,id:c,value:s,inputProps:{required:t,"aria-label":e||void 0,"aria-describedby":u}})})};function Po(o){return A("MuiRadioGroup",o)}Z("MuiRadioGroup",["root","row","error"]);const Io=o=>{const{classes:e,row:t,error:r}=o;return J({root:["root",t&&"row",r&&"error"]},Po,e)},Zo=a.forwardRef(function(e,t){const{actions:r,children:s,className:d,defaultValue:u,name:c,onChange:p,value:S,...f}=e,m=a.useRef(null),P=Io(e),[C,R]=eo({controlled:S,default:u,name:"RadioGroup"});a.useImperativeHandle(r,()=>({focus:()=>{let n=m.current.querySelector("input:not(:disabled):checked");n||(n=m.current.querySelector("input:not(:disabled)")),n&&n.focus()}}),[]);const h=so(t,m),y=no(c),I=a.useMemo(()=>({name:y,onChange(n){R(n.target.value),p&&p(n,n.target.value)},value:C}),[y,p,R,C]);return l.jsx(L.Provider,{value:I,children:l.jsx(io,{role:"radiogroup",ref:h,className:q(P.root,d),...f,children:s})})});export{Zo as R,Ho as a};
