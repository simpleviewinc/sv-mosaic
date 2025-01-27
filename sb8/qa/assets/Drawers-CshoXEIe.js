import{j as g}from"./jsx-runtime-DKBipoO1.js";import{r as i}from"./index-P8U4y8pz.js";import{c as u,s as p}from"./theme-BWODkkBA.js";import{t as f}from"./testIds-DZf96GK8.js";import{D as v}from"./ChevronRight-CLpIxDpq.js";import{B as k}from"./Popper-Cd5SEDCW.js";function A(t,n){if(t.length===0)return[];const a=t[t.length-1];return t.map((e,s)=>{const o=s===t.length-1,l=s===t.length-2;return o&&e===!1&&n?"closing":o&&e===!0&&n?"opening":o&&e===!0?"open":l&&a===!0&&n?"stacking":l&&a===!1&&n?"unstacking":"stacked"})}const c=250,x=u`
	from {
	  	right: -75vw;
	}
	to {
	  	right: 0vw;
	}
  `,D=u`
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
  `,E=u`
	from {
	  	right: 25vw;
	}

	to {
	  	right: 0vw;
	}
  `,R=p.div`
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
		animation: ${c}ms ease-out 0s 1 ${E};
		right: 0vw;
	}

	&.closing {
		animation: ${c}ms ease-out 0s 1 ${D};
		right: -75vw;
	}
`,N={backdrop:{"data-testid":f.DRAWER_BACKDROP}};function O(t){const[n,a]=i.useState([]),[e,s]=i.useState(!1);i.useEffect(()=>{t.drawers.length===0&&n.length===0||(t.drawers.length>n.length?(a(r=>[...r,!0]),s(!0)):t.drawers.length<n.length&&n[n.length-1]===!0&&(a(r=>[...r.slice(0,-1),!1]),s(!0)))},[t.drawers,n]);const o=i.useCallback(()=>{s(!1)},[]),l=i.useCallback(()=>{a(r=>[...r.slice(0,-1)]),s(!1)},[]),h=i.useMemo(()=>A(n,e),[n,e]);return g.jsxs(g.Fragment,{children:[n.map((r,m)=>{const d=h[m],w=t.drawers[m]&&!["closing","opening"].includes(d);return g.jsx(v,{open:r,anchor:"right",SlideProps:{appear:!0,onEntered:o,onExited:l},transitionDuration:c,PaperProps:{className:d,component:R},slotProps:N,"data-testid":f.DRAWER,children:w?t.children(t.drawers[m]):null},m)}),g.jsx(k,{invisible:!0,open:e,sx:{zIndex:1300}})]})}export{O as D};
