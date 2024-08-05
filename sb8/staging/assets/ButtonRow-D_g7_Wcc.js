import{j as i}from"./jsx-runtime-nGUw9YhZ.js";import{r as l}from"./index-BP8_t0zE.js";import{s as x,t as $}from"./theme-D4oZEIDo.js";import{B}from"./Button-D45VzSit.js";import{u as _}from"./useToggle-lipGlewK.js";import{g as M,a as S,s as U,b as h,f as A,u as W,_ as E,d as X,e as N}from"./useThemeProps-CM1XnGOG.js";import{k as v,c as f}from"./emotion-react.browser.esm-HRrwnANE.js";function T(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function F(t){return parseFloat(t)}const K=x.div`
	display: flex;
	align-items: center;

	${({$wrap:t})=>t&&`
		flex-wrap: wrap;
	`}
`,P=x.div`
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
`;function D(t){return M("MuiSkeleton",t)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const I=["animation","className","component","height","style","variant","width"];let u=t=>t,p,g,b,w;const L=t=>{const{classes:e,variant:n,animation:o,hasChildren:a,width:r,height:s}=t;return N({root:["root",n,o,a&&"withChildren",a&&!r&&"fitContent",a&&!s&&"heightAuto"]},D,e)},O=v(p||(p=u`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),V=v(g||(g=u`
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
`)),q=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const n=T(t.shape.borderRadius)||"px",o=F(t.shape.borderRadius);return h({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:A(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&f(b||(b=u`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),O),({ownerState:t,theme:e})=>t.animation==="wave"&&f(w||(w=u`
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
    `),V,(e.vars||e).palette.action.hover)),z=l.forwardRef(function(e,n){const o=W({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:r,component:s="span",height:d,style:k,variant:C="text",width:R}=o,c=E(o,I),m=h({},o,{animation:a,component:s,variant:C,hasChildren:!!c.children}),j=L(m);return i.jsx(q,h({as:s,ref:n,className:X(j.root,r),ownerState:m},c,{style:h({width:R,height:d},k)}))});function y({className:t,wrap:e,children:n,separator:o,skeleton:a}){return n.length?i.jsx(K,{className:t,$wrap:e,"data-testid":"button-row",role:"toolbar",children:n.map(({item:r,key:s})=>i.jsx(P,{$separator:o,children:a?i.jsx(z,{variant:"rectangular",width:120,height:36}):r},s))}):null}function G(t){const e=l.useMemo(()=>t.buttons||[],[t.buttons]),n=_(e,"show"),o=l.useMemo(()=>n.map((a,r)=>({item:i.jsx(B,{...a}),key:a.id||[a.label,a.name].filter(Boolean).join("-")||r})),[n]);return i.jsx(y,{...t,children:o})}function H(t){return typeof t=="object"&&t!==null&&"key"in t}function J(t){const e=l.useMemo(()=>l.Children.toArray(t.children).map((n,o)=>({item:n,key:H(n)?n.key:o})),[t.children]);return i.jsx(y,{...t,children:e})}function Q(t){if(t.children&&t.buttons)throw new Error("ButtonRow cannot receive both children and a buttons prop");return t.buttons?i.jsx(G,{...t}):i.jsx(J,{...t})}const it=l.memo(Q);export{it as B,z as S};
