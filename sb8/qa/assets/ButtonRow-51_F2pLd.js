import{j as s}from"./jsx-runtime-DiwAibxM.js";import{r as l}from"./index-Btj5Fd67.js";import{s as v,t as E}from"./theme-D38K4W-Z.js";import{B as M}from"./Button-D32bI-Hq.js";import{u as S}from"./useToggle-B3mbTfSB.js";import{t as p}from"./testIds-fiKIunms.js";import{m,n as U,a as T,g as A,k as C,s as N,d as u,h as g,u as W,_ as I,e as X,f as F}from"./generateUtilityClasses-8vC7aVzu.js";function K(t,e=0,r=1){return U(t,e,r)}function L(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let r=t.match(e);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,a)=>a<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function $(t){if(t.type)return t;if(t.charAt(0)==="#")return $(L(t));const e=t.indexOf("("),r=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(m(9,t));let n=t.substring(e+1,t.length-1),a;if(r==="color"){if(n=n.split(" "),a=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a)===-1)throw new Error(m(10,a))}else n=n.split(",");return n=n.map(i=>parseFloat(i)),{type:r,values:n,colorSpace:a}}function D(t){const{type:e,colorSpace:r}=t;let{values:n}=t;return e.indexOf("rgb")!==-1?n=n.map((a,i)=>i<3?parseInt(a,10):a):e.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),e.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${e}(${n})`}function P(t,e){return t=$(t),e=K(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,D(t)}function V(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function q(t){return parseFloat(t)}const z=v.div`
	display: flex;
	align-items: center;

	${({$wrap:t})=>t&&`
		flex-wrap: wrap;
	`}
`,G=v.div`
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
				border-left: 2px solid ${E.newColors.grey2[100]};
				margin-right: 8px;
			}
		`}
	`}
`;function H(t){return A("MuiSkeleton",t)}T("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const J=["animation","className","component","height","style","variant","width"];let h=t=>t,b,x,w,y;const Q=t=>{const{classes:e,variant:r,animation:n,hasChildren:a,width:i,height:o}=t;return F({root:["root",r,n,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]},H,e)},Y=C(b||(b=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Z=C(x||(x=h`
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
`)),tt=N("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],r.animation!==!1&&e[r.animation],r.hasChildren&&e.withChildren,r.hasChildren&&!r.width&&e.fitContent,r.hasChildren&&!r.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const r=V(t.shape.borderRadius)||"px",n=q(t.shape.borderRadius);return u({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:P(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&g(w||(w=h`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Y),({ownerState:t,theme:e})=>t.animation==="wave"&&g(y||(y=h`
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
    `),Z,(e.vars||e).palette.action.hover)),et=l.forwardRef(function(e,r){const n=W({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:i,component:o="span",height:d,style:j,variant:B="text",width:_}=n,c=I(n,J),f=u({},n,{animation:a,component:o,variant:B,hasChildren:!!c.children}),O=Q(f);return s.jsx(tt,u({as:o,ref:r,className:X(O.root,i),ownerState:f},c,{style:u({width:_,height:d},j)}))});function ct(t){return!(t===null||typeof t!="object"||!("value"in t)||!("label"in t))}function k(t){return typeof t=="object"&&t!==null&&"key"in t}function ft(t){const e=typeof t;return e==="string"||e==="number"||e==="boolean"||t===null||t===void 0||e==="object"&&k(t)}function R({className:t,wrap:e,children:r,separator:n,skeleton:a}){return r.length?s.jsx(z,{className:t,$wrap:e,"data-testid":p.BUTTON_ROW,role:"toolbar",children:r.map(({item:i,key:o})=>s.jsx(G,{$separator:n,children:a?s.jsx(et,{variant:"rectangular",width:120,height:36,"data-testid":p.BUTTON_SKELETON}):i},o))}):null}function nt(t){const e=S(t.buttons,"show"),r=l.useMemo(()=>e.map((n,a)=>({item:s.jsx(M,{...n}),key:n.id||[n.label,n.name].filter(Boolean).join("-")||a})),[e]);return s.jsx(R,{...t,children:r})}function rt(t){const e=l.useMemo(()=>l.Children.toArray(t.children).map((r,n)=>({item:r,key:k(r)?r.key:n})),[t.children]);return s.jsx(R,{...t,children:e})}function at(t){if(t.children&&t.buttons)throw new Error("ButtonRow cannot receive both children and a buttons prop");return t.buttons?s.jsx(nt,{...t}):s.jsx(rt,{...t})}const pt=l.memo(at);export{pt as B,et as S,ft as a,P as b,ct as i};
