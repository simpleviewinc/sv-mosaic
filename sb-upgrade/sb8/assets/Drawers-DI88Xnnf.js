import{j as l}from"./jsx-runtime-qGIIFXMu.js";import{r as i}from"./index-CDs2tPxN.js";import{c as g,s as f}from"./theme-tUuL1bpb.js";import{D as p}from"./ChevronRight-BWG-u8Bq.js";import{B as v}from"./Popper-CAohKvIp.js";function k(t,e){if(t.length===0)return[];const a=t[t.length-1];return t.map((n,r)=>{const o=r===t.length-1,m=r===t.length-2;return o&&n===!1&&e?"closing":o&&n===!0&&e?"opening":o&&n===!0?"open":m&&a===!0&&e?"stacking":m&&a===!1&&e?"unstacking":"stacked"})}const c=250,x=g`
	from {
	  	right: -75vw;
	}
	to {
	  	right: 0vw;
	}
  `,A=g`
	from {
	  	right: 0vw;
	}

	to {
	  	right: -75vw;
	}
  `,D=g`
	from {
	  	right: 0vw;
	}

	to {
	  	right: 25vw;
	}
  `,N=g`
	from {
	  	right: 25vw;
	}

	to {
	  	right: 0vw;
	}
  `,T=f.div`
	width: 75%;
	transform: none !important;
	transition: initial !important;
	right: -75vw;

	&.opening {
		animation: ${c}ms ease-out 0s 1 ${x};
		right: 0;
	}

	&.open {
	  	right: 0;
	}

	&.stacking {
		animation: ${c}ms ease-out 0s 1 ${D};
		right: 25vw;
	}

	&.stacked {
		right: 25vw;
	}

	&.unstacking {
		animation: ${c}ms ease-out 0s 1 ${N};
		right: 0vw;
	}

	&.closing {
		animation: ${c}ms ease-out 0s 1 ${A};
		right: -75vw;
	}
`;function $(t){const[e,a]=i.useState([]),[n,r]=i.useState(!1);i.useEffect(()=>{t.drawers.length===0&&e.length===0||(t.drawers.length>e.length?(a(s=>[...s,!0]),r(!0)):t.drawers.length<e.length&&e[e.length-1]===!0&&(a(s=>[...s.slice(0,-1),!1]),r(!0)))},[t.drawers,e]);const o=i.useCallback(()=>{r(!1)},[]),m=i.useCallback(()=>{a(s=>[...s.slice(0,-1)]),r(!1)},[]),h=i.useMemo(()=>k(e,n),[e,n]);return l.jsxs(l.Fragment,{children:[e.map((s,u)=>{const d=h[u],w=t.drawers[u]&&!["closing","opening"].includes(d);return l.jsx(p,{open:s,anchor:"right",SlideProps:{appear:!0,onEntered:o,onExited:m},transitionDuration:c,PaperProps:{className:d,component:T},children:w?t.children(t.drawers[u]):null},u)}),l.jsx(v,{invisible:!0,open:n,sx:{zIndex:1300}})]})}$.__docgenInfo={description:"",methods:[],displayName:"Drawers",props:{drawers:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(drawerDef: T) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"drawerDef"}],return:{name:"ReactNode"}}},description:""}}};export{$ as D};
