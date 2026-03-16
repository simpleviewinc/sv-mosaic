import{r}from"./index-CDlOlYQx.js";import{t as R}from"./sizes-BeWafy6f.js";import{c as p}from"./styled-components.browser.esm-CsHOGV45.js";import{u as x,B as $}from"./Button-DiGzPWWk.js";import{t as m}from"./testIds-B6Pox1zA.js";import{c as B,b as f,k as g}from"./identifier-D-VlK421.js";import{g as E,a as S,u as U,s as A,c as M,m as T}from"./createSimplePaletteValueFilter-CQDqkEyb.js";import{j}from"./jsx-runtime-D_zvdyIk.js";const N=p.div`
	display: flex;
	align-items: center;

	${({$wrap:t})=>t&&`
		flex-wrap: wrap;
	`}
`,W=p.div`
	display: flex;
	align-items: center;

	${({$separator:t})=>`
		& + &{
			margin-left: 8px;
		}

		${t&&`
			&:not(:first-child)::before{
				content: ' ';
				height: 1.4em;
				border-left: 2px solid ${R.color.gray[100]};
				margin-right: 8px;
			}
		`}
	`}
`;function O(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}function I(t){return E("MuiSkeleton",t)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const K=t=>{const{classes:e,variant:n,animation:a,hasChildren:o,width:s,height:i}=t;return M({root:["root",n,a,o&&"withChildren",o&&!s&&"fitContent",o&&!i&&"heightAuto"]},I,e)},c=g`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,u=g`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,D=typeof c!="string"?f`
        animation: ${c} 2s ease-in-out 0.5s infinite;
      `:null,L=typeof u!="string"?f`
        &::after {
          animation: ${u} 2s linear 0.5s infinite;
        }
      `:null,V=A("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(T(({theme:t})=>{const e=O(t.shape.borderRadius)||"px",n=X(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:a})=>a.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:a})=>a.hasChildren&&!a.width,style:{maxWidth:"fit-content"}},{props:({ownerState:a})=>a.hasChildren&&!a.height,style:{height:"auto"}},{props:{animation:"pulse"},style:D||{animation:`${c} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:L||{"&::after":{animation:`${u} 2s linear 0.5s infinite`}}}]}})),_=r.forwardRef(function(e,n){const a=U({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:s,component:i="span",height:l,style:w,variant:v="text",width:k,...h}=a,d={...a,animation:o,component:i,variant:v,hasChildren:!!h.children},C=K(d);return j.jsx(V,{as:i,ref:n,className:B(C.root,s),ownerState:d,...h,style:{width:k,height:l,...w}})});function et(t){return!(t===null||typeof t!="object"||!("value"in t)||!("label"in t))}function y(t){return typeof t=="object"&&t!==null&&"key"in t}function nt(t){const e=typeof t;return e==="string"||e==="number"||e==="boolean"||t===null||t===void 0||Array.isArray(t)||e==="object"&&y(t)}function b({className:t,wrap:e,children:n,separator:a,skeleton:o,...s}){return n.length?r.createElement(N,{className:t,$wrap:e,"data-testid":m.BUTTON_ROW,role:"toolbar",...s},n.map(({item:i,key:l})=>r.createElement(W,{key:l,$separator:a},o?r.createElement(_,{variant:"rectangular",width:120,height:36,"data-testid":m.BUTTON_SKELETON}):i))):null}function F(t){const e=x(t.buttons,"show"),n=r.useMemo(()=>e.map((a,o)=>({item:r.createElement($,{...a}),key:a.id||[a.label,a.name].filter(Boolean).join("-")||o})),[e]);return r.createElement(b,{...t},n)}function P(t){const e=r.useMemo(()=>r.Children.toArray(t.children).map((n,a)=>({item:n,key:y(n)?n.key:a})),[t.children]);return r.createElement(b,{...t},e)}function q(t){if(t.children&&t.buttons)throw new Error("ButtonRow cannot receive both children and a buttons prop");return t.buttons?r.createElement(F,{...t}):r.createElement(P,{...t})}const at=r.memo(q);export{at as B,_ as S,et as a,nt as i};
