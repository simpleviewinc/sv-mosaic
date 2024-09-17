import{j as s}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{s as y,t as M}from"./theme-Cyujm90X.js";import{B as _}from"./Button-nZpOdxAh.js";import{u as S}from"./useToggle-lipGlewK.js";import{n as p,o as E,g as A,a as O,k as v,s as U,d as h,h as m,u as W,_ as I,e as X,f as F}from"./generateUtilityClasses-Bq4SLC4n.js";function N(t,e=0,r=1){return E(t,e,r)}function T(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let r=t.match(e);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,a)=>a<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function C(t){if(t.type)return t;if(t.charAt(0)==="#")return C(T(t));const e=t.indexOf("("),r=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(p(9,t));let n=t.substring(e+1,t.length-1),a;if(r==="color"){if(n=n.split(" "),a=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a)===-1)throw new Error(p(10,a))}else n=n.split(",");return n=n.map(i=>parseFloat(i)),{type:r,values:n,colorSpace:a}}function D(t){const{type:e,colorSpace:r}=t;let{values:n}=t;return e.indexOf("rgb")!==-1?n=n.map((a,i)=>i<3?parseInt(a,10):a):e.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),e.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${e}(${n})`}function K(t,e){return t=C(t),e=N(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,D(t)}function P(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function L(t){return parseFloat(t)}const V=y.div`
	display: flex;
	align-items: center;

	${({$wrap:t})=>t&&`
		flex-wrap: wrap;
	`}
`,q=y.div`
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
				border-left: 2px solid ${M.newColors.grey2[100]};
				margin-right: 8px;
			}
		`}
	`}
`;function z(t){return A("MuiSkeleton",t)}O("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const G=["animation","className","component","height","style","variant","width"];let u=t=>t,g,b,x,w;const H=t=>{const{classes:e,variant:r,animation:n,hasChildren:a,width:i,height:o}=t;return F({root:["root",r,n,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]},z,e)},J=v(g||(g=u`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Q=v(b||(b=u`
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
`)),Y=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],r.animation!==!1&&e[r.animation],r.hasChildren&&e.withChildren,r.hasChildren&&!r.width&&e.fitContent,r.hasChildren&&!r.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const r=P(t.shape.borderRadius)||"px",n=L(t.shape.borderRadius);return h({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:K(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(x||(x=u`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),J),({ownerState:t,theme:e})=>t.animation==="wave"&&m(w||(w=u`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
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
    `),Q,(e.vars||e).palette.action.hover)),Z=l.forwardRef(function(e,r){const n=W({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:i,component:o="span",height:d,style:k,variant:R="text",width:j}=n,c=I(n,G),f=h({},n,{animation:a,component:o,variant:R,hasChildren:!!c.children}),B=H(f);return s.jsx(Y,h({as:o,ref:r,className:X(B.root,i),ownerState:f},c,{style:h({width:j,height:d},k)}))});function $({className:t,wrap:e,children:r,separator:n,skeleton:a}){return r.length?s.jsx(V,{className:t,$wrap:e,"data-testid":"button-row",role:"toolbar",children:r.map(({item:i,key:o})=>s.jsx(q,{$separator:n,children:a?s.jsx(Z,{variant:"rectangular",width:120,height:36}):i},o))}):null}function tt(t){const e=l.useMemo(()=>t.buttons||[],[t.buttons]),r=S(e,"show"),n=l.useMemo(()=>r.map((a,i)=>({item:s.jsx(_,{...a}),key:a.id||[a.label,a.name].filter(Boolean).join("-")||i})),[r]);return s.jsx($,{...t,children:n})}function et(t){return typeof t=="object"&&t!==null&&"key"in t}function nt(t){const e=l.useMemo(()=>l.Children.toArray(t.children).map((r,n)=>({item:r,key:et(r)?r.key:n})),[t.children]);return s.jsx($,{...t,children:e})}function rt(t){if(t.children&&t.buttons)throw new Error("ButtonRow cannot receive both children and a buttons prop");return t.buttons?s.jsx(tt,{...t}):s.jsx(nt,{...t})}const ut=l.memo(rt);export{ut as B,Z as S,K as a};
