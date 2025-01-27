import{j as s}from"./jsx-runtime-DKBipoO1.js";import{r as l}from"./index-P8U4y8pz.js";import{s as v,t as O}from"./theme-BWODkkBA.js";import{B as E}from"./Button-BBMCWwxG.js";import{u as M}from"./useToggle-L-Qovzra.js";import{t as f}from"./testIds-DZf96GK8.js";import{m,n as S,a as U,g as T,k as C,s as A,d as h,h as g,u as W,_ as N,e as I,f as X}from"./generateUtilityClasses-1sHYEbWh.js";function F(t,n=0,a=1){return S(t,n,a)}function K(t){t=t.slice(1);const n=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let a=t.match(n);return a&&a[0].length===1&&(a=a.map(e=>e+e)),a?`rgb${a.length===4?"a":""}(${a.map((e,r)=>r<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function $(t){if(t.type)return t;if(t.charAt(0)==="#")return $(K(t));const n=t.indexOf("("),a=t.substring(0,n);if(["rgb","rgba","hsl","hsla","color"].indexOf(a)===-1)throw new Error(m(9,t));let e=t.substring(n+1,t.length-1),r;if(a==="color"){if(e=e.split(" "),r=e.shift(),e.length===4&&e[3].charAt(0)==="/"&&(e[3]=e[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r)===-1)throw new Error(m(10,r))}else e=e.split(",");return e=e.map(i=>parseFloat(i)),{type:a,values:e,colorSpace:r}}function D(t){const{type:n,colorSpace:a}=t;let{values:e}=t;return n.indexOf("rgb")!==-1?e=e.map((r,i)=>i<3?parseInt(r,10):r):n.indexOf("hsl")!==-1&&(e[1]=`${e[1]}%`,e[2]=`${e[2]}%`),n.indexOf("color")!==-1?e=`${a} ${e.join(" ")}`:e=`${e.join(", ")}`,`${n}(${e})`}function L(t,n){return t=$(t),n=F(n),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${n}`:t.values[3]=n,D(t)}function P(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function V(t){return parseFloat(t)}const q=v.div`
	display: flex;
	align-items: center;

	${({$wrap:t})=>t&&`
		flex-wrap: wrap;
	`}
`,z=v.div`
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
				border-left: 2px solid ${O.newColors.grey2[100]};
				margin-right: 8px;
			}
		`}
	`}
`;function G(t){return T("MuiSkeleton",t)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const H=["animation","className","component","height","style","variant","width"];let u=t=>t,b,x,w,y;const J=t=>{const{classes:n,variant:a,animation:e,hasChildren:r,width:i,height:o}=t;return X({root:["root",a,e,r&&"withChildren",r&&!i&&"fitContent",r&&!o&&"heightAuto"]},G,n)},Q=C(b||(b=u`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Y=C(x||(x=u`
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
`)),Z=A("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:a}=t;return[n.root,n[a.variant],a.animation!==!1&&n[a.animation],a.hasChildren&&n.withChildren,a.hasChildren&&!a.width&&n.fitContent,a.hasChildren&&!a.height&&n.heightAuto]}})(({theme:t,ownerState:n})=>{const a=P(t.shape.borderRadius)||"px",e=V(t.shape.borderRadius);return h({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:L(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},n.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${e}${a}/${Math.round(e/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},n.variant==="circular"&&{borderRadius:"50%"},n.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&g(w||(w=u`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Q),({ownerState:t,theme:n})=>t.animation==="wave"&&g(y||(y=u`
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
    `),Y,(n.vars||n).palette.action.hover)),tt=l.forwardRef(function(n,a){const e=W({props:n,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:o="span",height:d,style:R,variant:j="text",width:B}=e,c=N(e,H),p=h({},e,{animation:r,component:o,variant:j,hasChildren:!!c.children}),_=J(p);return s.jsx(Z,h({as:o,ref:a,className:I(_.root,i),ownerState:p},c,{style:h({width:B,height:d},R)}))});function k({className:t,wrap:n,children:a,separator:e,skeleton:r}){return a.length?s.jsx(q,{className:t,$wrap:n,"data-testid":f.BUTTON_ROW,role:"toolbar",children:a.map(({item:i,key:o})=>s.jsx(z,{$separator:e,children:r?s.jsx(tt,{variant:"rectangular",width:120,height:36,"data-testid":f.BUTTON_SKELETON}):i},o))}):null}function et(t){const n=M(t.buttons,"show"),a=l.useMemo(()=>n.map((e,r)=>({item:s.jsx(E,{...e}),key:e.id||[e.label,e.name].filter(Boolean).join("-")||r})),[n]);return s.jsx(k,{...t,children:a})}function nt(t){return typeof t=="object"&&t!==null&&"key"in t}function at(t){const n=l.useMemo(()=>l.Children.toArray(t.children).map((a,e)=>({item:a,key:nt(a)?a.key:e})),[t.children]);return s.jsx(k,{...t,children:n})}function rt(t){if(t.children&&t.buttons)throw new Error("ButtonRow cannot receive both children and a buttons prop");return t.buttons?s.jsx(et,{...t}):s.jsx(at,{...t})}const ct=l.memo(rt);export{ct as B,tt as S,L as a};
