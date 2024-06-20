import{j as r}from"./jsx-runtime-qGIIFXMu.js";import{r as l}from"./index-CDs2tPxN.js";import{s as y,t as $}from"./theme-tUuL1bpb.js";import{B as _}from"./Button-B_QyrzNG.js";import{u as T}from"./useToggle-D8hNafRh.js";import{g as M,a as N,s as S,b as d,f as U,u as q,_ as A,d as W,e as E}from"./useThemeProps-DZj2lB8w.js";import{k as x,c as p}from"./emotion-react.browser.esm-DWdb6uBJ.js";function P(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}const F=y.div`
	display: flex;
	align-items: center;

	${({$wrap:t})=>t&&`
		flex-wrap: wrap;
	`}
`,I=y.div`
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
				border-left: 2px solid ${$.newColors.grey2[100]};
				margin-right: 8px;
			}
		`}
	`}
`;function K(t){return M("MuiSkeleton",t)}N("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const D=["animation","className","component","height","style","variant","width"];let c=t=>t,f,g,b,w;const L=t=>{const{classes:e,variant:n,animation:o,hasChildren:a,width:i,height:s}=t;return E({root:["root",n,o,a&&"withChildren",a&&!i&&"fitContent",a&&!s&&"heightAuto"]},K,e)},O=x(f||(f=c`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),V=x(g||(g=c`
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
`)),z=S("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const n=P(t.shape.borderRadius)||"px",o=X(t.shape.borderRadius);return d({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:U(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&p(b||(b=c`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),O),({ownerState:t,theme:e})=>t.animation==="wave"&&p(w||(w=c`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),V,(e.vars||e).palette.action.hover)),G=l.forwardRef(function(e,n){const o=q({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:i,component:s="span",height:u,style:R,variant:C="text",width:B}=o,h=A(o,D),m=d({},o,{animation:a,component:s,variant:C,hasChildren:!!h.children}),j=L(m);return r.jsx(z,d({as:s,ref:n,className:W(j.root,i),ownerState:m},h,{style:d({width:B,height:u},R)}))});function v({className:t,wrap:e,children:n,separator:o,skeleton:a}){return n.length?r.jsx(F,{className:t,$wrap:e,"data-testid":"button-row",role:"toolbar",children:n.map(({item:i,key:s})=>r.jsx(I,{$separator:o,children:a?r.jsx(G,{variant:"rectangular",width:120,height:36}):i},s))}):null}function H(t){const e=l.useMemo(()=>t.buttons||[],[t.buttons]),n=T(e,"show"),o=l.useMemo(()=>n.map((a,i)=>({item:r.jsx(_,{...a}),key:a.id||[a.label,a.name].filter(Boolean).join("-")||i})),[n]);return r.jsx(v,{...t,children:o})}function J(t){return typeof t=="object"&&t!==null&&"key"in t}function Q(t){const e=l.useMemo(()=>l.Children.toArray(t.children).map((n,o)=>({item:n,key:J(n)?n.key:o})),[t.children]);return r.jsx(v,{...t,children:e})}function k(t){if(t.children&&t.buttons)throw new Error("ButtonRow cannot receive both children and a buttons prop");return t.buttons?r.jsx(H,{...t}):r.jsx(Q,{...t})}const rt=l.memo(k);k.__docgenInfo={description:"",methods:[],displayName:"ButtonRow",props:{buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},separator:{required:!1,tsType:{name:"boolean"},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:""},skeleton:{required:!1,tsType:{name:"boolean"},description:""}}};export{rt as B,G as S};
