import{j as m}from"./jsx-runtime-qGIIFXMu.js";import{r as i}from"./index-CDs2tPxN.js";import{c as u,s as d}from"./theme-tUuL1bpb.js";import{D as p}from"./ChevronRight-BWG-u8Bq.js";import{B as v}from"./Popper-CAohKvIp.js";function k(t,n){if(t.length===0)return[];const a=t[t.length-1];return t.map((e,s)=>{const o=s===t.length-1,l=s===t.length-2;return o&&e===!1&&n?"closing":o&&e===!0&&n?"opening":o&&e===!0?"open":l&&a===!0&&n?"stacking":l&&a===!1&&n?"unstacking":"stacked"})}const c=250,x=u`
	from {
	  	right: -75vw;
	}
	to {
	  	right: 0vw;
	}
  `,A=u`
	from {
	  	right: 0vw;
	}

	to {
	  	right: -75vw;
	}
  `,$=u`
	from {
	  	right: 0vw;
	}

	to {
	  	right: 25vw;
	}
  `,D=u`
	from {
	  	right: 25vw;
	}

	to {
	  	right: 0vw;
	}
  `,N=d.div`
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
		animation: ${c}ms ease-out 0s 1 ${$};
		right: 25vw;
	}

	&.stacked {
		right: 25vw;
	}

	&.unstacking {
		animation: ${c}ms ease-out 0s 1 ${D};
		right: 0vw;
	}

	&.closing {
		animation: ${c}ms ease-out 0s 1 ${A};
		right: -75vw;
	}
`;function B(t){const[n,a]=i.useState([]),[e,s]=i.useState(!1);i.useEffect(()=>{t.drawers.length===0&&n.length===0||(t.drawers.length>n.length?(a(r=>[...r,!0]),s(!0)):t.drawers.length<n.length&&n[n.length-1]===!0&&(a(r=>[...r.slice(0,-1),!1]),s(!0)))},[t.drawers,n]);const o=i.useCallback(()=>{s(!1)},[]),l=i.useCallback(()=>{a(r=>[...r.slice(0,-1)]),s(!1)},[]),h=i.useMemo(()=>k(n,e),[n,e]);return m.jsxs(m.Fragment,{children:[n.map((r,g)=>{const f=h[g],w=t.drawers[g]&&!["closing","opening"].includes(f);return m.jsx(p,{open:r,anchor:"right",SlideProps:{appear:!0,onEntered:o,onExited:l},transitionDuration:c,PaperProps:{className:f,component:N},children:w?t.children(t.drawers[g]):null},g)}),m.jsx(v,{invisible:!0,open:e,sx:{zIndex:1300}})]})}export{B as D};
