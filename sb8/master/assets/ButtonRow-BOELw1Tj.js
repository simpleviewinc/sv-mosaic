import{r as i}from"./index-D0AnReJb.js";import{s as x,t as j}from"./sizes-BklZZmo4.js";import{B as O}from"./Button-DWbCZful.js";import{u as M}from"./useToggle-CTbnrs6g.js";import{t as f}from"./testIds-Dso8kRSM.js";import{l as p,m as S,g as U,a as N,u as T,_ as A,b as l,s as W,d as I,f as X,h as m,k as v}from"./generateUtilityClasses-rDn4KRfY.js";import{j as F}from"./jsx-runtime-EKYJJIwR.js";function K(t,e=0,a=1){return S(t,e,a)}function L(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let a=t.match(e);return a&&a[0].length===1&&(a=a.map(n=>n+n)),a?`rgb${a.length===4?"a":""}(${a.map((n,r)=>r<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function k(t){if(t.type)return t;if(t.charAt(0)==="#")return k(L(t));const e=t.indexOf("("),a=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(a)===-1)throw new Error(p(9,t));let n=t.substring(e+1,t.length-1),r;if(a==="color"){if(n=n.split(" "),r=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r)===-1)throw new Error(p(10,r))}else n=n.split(",");return n=n.map(s=>parseFloat(s)),{type:a,values:n,colorSpace:r}}function D(t){const{type:e,colorSpace:a}=t;let{values:n}=t;return e.indexOf("rgb")!==-1?n=n.map((r,s)=>s<3?parseInt(r,10):r):e.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),e.indexOf("color")!==-1?n=`${a} ${n.join(" ")}`:n=`${n.join(", ")}`,`${e}(${n})`}function P(t,e){return t=k(t),e=K(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,D(t)}function V(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function q(t){return parseFloat(t)}const z=x.div`
	display: flex;
	align-items: center;

	${({$wrap:t})=>t&&`
		flex-wrap: wrap;
	`}
`,G=x.div`
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
				border-left: 2px solid ${j.newColors.grey2[100]};
				margin-right: 8px;
			}
		`}
	`}
`;function H(t){return U("MuiSkeleton",t)}N("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const J=["animation","className","component","height","style","variant","width"];let u=t=>t,g,b,y,w;const Q=t=>{const{classes:e,variant:a,animation:n,hasChildren:r,width:s,height:o}=t;return X({root:["root",a,n,r&&"withChildren",r&&!s&&"fitContent",r&&!o&&"heightAuto"]},H,e)},Y=v(g||(g=u`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Z=v(b||(b=u`
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
`)),tt=W("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=V(t.shape.borderRadius)||"px",n=q(t.shape.borderRadius);return l({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:P(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&m(y||(y=u`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Y),({ownerState:t,theme:e})=>t.animation==="wave"&&m(w||(w=u`
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
    `),Z,(e.vars||e).palette.action.hover)),et=i.forwardRef(function(e,a){const n=T({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:o="span",height:h,style:R,variant:E="text",width:B}=n,c=A(n,J),d=l({},n,{animation:r,component:o,variant:E,hasChildren:!!c.children}),_=Q(d);return F.jsx(tt,l({as:o,ref:a,className:I(_.root,s),ownerState:d},c,{style:l({width:B,height:h},R)}))});function dt(t){return!(t===null||typeof t!="object"||!("value"in t)||!("label"in t))}function C(t){return typeof t=="object"&&t!==null&&"key"in t}function ft(t){const e=typeof t;return e==="string"||e==="number"||e==="boolean"||t===null||t===void 0||e==="object"&&C(t)}function $({className:t,wrap:e,children:a,separator:n,skeleton:r}){return a.length?i.createElement(z,{className:t,$wrap:e,"data-testid":f.BUTTON_ROW,role:"toolbar"},a.map(({item:s,key:o})=>i.createElement(G,{key:o,$separator:n},r?i.createElement(et,{variant:"rectangular",width:120,height:36,"data-testid":f.BUTTON_SKELETON}):s))):null}function nt(t){const e=M(t.buttons,"show"),a=i.useMemo(()=>e.map((n,r)=>({item:i.createElement(O,{...n}),key:n.id||[n.label,n.name].filter(Boolean).join("-")||r})),[e]);return i.createElement($,{...t},a)}function at(t){const e=i.useMemo(()=>i.Children.toArray(t.children).map((a,n)=>({item:a,key:C(a)?a.key:n})),[t.children]);return i.createElement($,{...t},e)}function rt(t){if(t.children&&t.buttons)throw new Error("ButtonRow cannot receive both children and a buttons prop");return t.buttons?i.createElement(nt,{...t}):i.createElement(at,{...t})}const pt=i.memo(rt);export{pt as B,et as S,ft as a,P as b,dt as i};
