import{r as a,R as N}from"./index-wekxHvEx.js";import{c as z}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as i}from"./sizes-BeWafy6f.js";import{c as q}from"./identifier-Bq1wI7MV.js";import{S as Y}from"./SwitchBase-DgSlJAjj.js";import{c as D}from"./createSvgIcon-h9rIBQiG.js";import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{s as S,r as T,m as H,a as L,g as Z,c as v,d as O,u as _,b as A}from"./createSimplePaletteValueFilter-BVevyrl8.js";import{u as oo}from"./formControlState-Qaq2QphE.js";import{u as eo,a as to}from"./useSlot-VZdH5auH.js";import{c as ro}from"./createChainedFunction-BO_9K8Jh.js";import{S as ao,a as so}from"./StyledOptionFormControl-B1Oz8mMA.js";import{u as no}from"./useControlled-Mt41fVm8.js";import{u as io}from"./useId-69YouNVI.js";import{F as lo}from"./FormGroup-BzWjA99g.js";const co=D(l.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),uo=D(l.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),po=S("span",{name:"MuiRadioButtonIcon",shouldForwardProp:T})({position:"relative",display:"flex"}),fo=S(co,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),mo=S(uo,{name:"MuiRadioButtonIcon"})(H(({theme:o})=>({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}}]})));function J(o){const{checked:e=!1,classes:t={},fontSize:r}=o,s={...o,checked:e};return l.jsxs(po,{className:t.root,ownerState:s,children:[l.jsx(fo,{fontSize:r,className:t.background,ownerState:s}),l.jsx(mo,{fontSize:r,className:t.dot,ownerState:s})]})}const K=a.createContext(void 0);function Ro(){return a.useContext(K)}function bo(o){return Z("MuiRadio",o)}const U=L("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),go=o=>{const{classes:e,color:t,size:r}=o,s={root:["root",`color${v(t)}`,r!=="medium"&&`size${v(r)}`]};return{...e,...A(s,bo,e)}},yo=S(Y,{shouldForwardProp:o=>T(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.size!=="medium"&&e[`size${v(t.size)}`],e[`color${v(t.color)}`]]}})(H(({theme:o})=>({color:(o.vars||o).palette.text.secondary,[`&.${U.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:o.alpha((o.vars||o).palette.action.active,(o.vars||o).palette.action.hoverOpacity)}}},...Object.entries(o.palette).filter(O()).map(([e])=>({props:{color:e,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:o.alpha((o.vars||o).palette[e].main,(o.vars||o).palette.action.hoverOpacity)}}})),...Object.entries(o.palette).filter(O()).map(([e])=>({props:{color:e,disabled:!1},style:{[`&.${U.checked}`]:{color:(o.vars||o).palette[e].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function Co(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}const ho=l.jsx(J,{checked:!0}),xo=l.jsx(J,{}),vo=a.forwardRef(function(e,t){const r=_({props:e,name:"MuiRadio"}),{checked:s,checkedIcon:c=ho,color:d="primary",icon:g=xo,name:u,onChange:k,size:p="medium",className:f,disabled:P,disableRipple:y=!1,slots:m={},slotProps:C={},inputProps:h,...I}=r,n=oo();let R=P;n&&typeof R>"u"&&(R=n.disabled),R??(R=!1);const w={...r,disabled:R,disableRipple:y,color:d,size:p},B=go(w),b=Ro();let $=s;const Q=ro(k,b&&b.onChange);let j=u;b&&(typeof $>"u"&&($=Co(b.value,r.value)),typeof j>"u"&&(j=b.name));const M=C.input??h,[W,X]=eo("root",{ref:t,elementType:yo,className:q(B.root,f),shouldForwardComponentProp:!0,externalForwardedProps:{slots:m,slotProps:C,...I},getSlotProps:x=>({...x,onChange:(F,...E)=>{var G;(G=x.onChange)==null||G.call(x,F,...E),Q(F,...E)}}),ownerState:w,additionalProps:{type:"radio",icon:a.cloneElement(g,{fontSize:g.props.fontSize??p}),checkedIcon:a.cloneElement(c,{fontSize:c.props.fontSize??p}),disabled:R,name:j,checked:$,slots:m,slotProps:{input:typeof M=="function"?M(w):M}}});return l.jsx(W,{...X,classes:B})}),So=z(vo)`
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
`,Po=z.span`
	width: 8px;
	height: 8px;
	background-color: currentColor;
	border-radius: ${i.rounded.full};
`,V=({checked:o})=>N.createElement(ko,null,o&&N.createElement(Po,null)),Ho=o=>{const{label:e,required:t,disabled:r,value:s,checked:c}=o,d=o["aria-describedby"];return a.createElement(ao,{label:e&&a.createElement(so,{disabled:r,required:t},o.label),disableTypography:!0,labelPlacement:"end",value:s,disabled:r,control:a.createElement(So,{"data-testid":"radio-button-test",disabled:r,checked:c,icon:a.createElement(V,null),checkedIcon:a.createElement(V,{checked:!0}),disableRipple:!0,inputProps:{required:t,"aria-describedby":d}})})};function Io(o){return Z("MuiRadioGroup",o)}L("MuiRadioGroup",["root","row","error"]);const wo=o=>{const{classes:e,row:t,error:r}=o;return A({root:["root",t&&"row",r&&"error"]},Io,e)},Lo=a.forwardRef(function(e,t){const{actions:r,children:s,className:c,defaultValue:d,name:g,onChange:u,value:k,...p}=e,f=a.useRef(null),P=wo(e),[y,m]=no({controlled:k,default:d,name:"RadioGroup"});a.useImperativeHandle(r,()=>({focus:()=>{let n=f.current.querySelector("input:not(:disabled):checked");n||(n=f.current.querySelector("input:not(:disabled)")),n&&n.focus()}}),[]);const C=to(t,f),h=io(g),I=a.useMemo(()=>({name:h,onChange(n){m(n.target.value),u&&u(n,n.target.value)},value:y}),[h,u,m,y]);return l.jsx(K.Provider,{value:I,children:l.jsx(lo,{role:"radiogroup",ref:C,className:q(P.root,c),...p,children:s})})});export{Lo as R,Ho as a};
