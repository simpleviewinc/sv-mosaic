import{r as i,R as g}from"./index-D0AnReJb.js";import{s as p,c as u}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as f}from"./testIds-DLbO0bd9.js";import{D as v}from"./toNumber-DuWhFW-p.js";import{B as k}from"./Popper-DKTKzQfx.js";function A(t,e){if(t.length===0)return[];const r=t[t.length-1];return t.map((n,s)=>{const o=s===t.length-1,l=s===t.length-2;return o&&n===!1&&e?"closing":o&&n===!0&&e?"opening":o&&n===!0?"open":l&&r===!0&&e?"stacking":l&&r===!1&&e?"unstacking":"stacked"})}const c=250,E=u`
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
  `,R=u`
	from {
	  	right: 0vw;
	}

	to {
	  	right: 25vw;
	}
  `,$=u`
	from {
	  	right: 25vw;
	}

	to {
	  	right: 0vw;
	}
  `,P=p.div`
	width: 75%;
	transform: none !important;
	transition: initial !important;
	right: -75vw;

	&.opening {
		animation: ${c}ms ease-out 0s 1 ${E};
		right: 0;
	}

	&.open {
	  	right: 0;
	}

	&.stacking {
		animation: ${c}ms ease-out 0s 1 ${R};
		right: 25vw;
	}

	&.stacked {
		right: 25vw;
	}

	&.unstacking {
		animation: ${c}ms ease-out 0s 1 ${$};
		right: 0vw;
	}

	&.closing {
		animation: ${c}ms ease-out 0s 1 ${D};
		right: -75vw;
	}
`,x={backdrop:{"data-testid":f.DRAWER_BACKDROP}};function O(t){const[e,r]=i.useState([]),[n,s]=i.useState(!1);i.useEffect(()=>{t.drawers.length===0&&e.length===0||(t.drawers.length>e.length?(r(a=>[...a,!0]),s(!0)):t.drawers.length<e.length&&e[e.length-1]===!0&&(r(a=>[...a.slice(0,-1),!1]),s(!0)))},[t.drawers,e]);const o=i.useCallback(()=>{s(!1)},[]),l=i.useCallback(()=>{r(a=>[...a.slice(0,-1)]),s(!1)},[]),h=i.useMemo(()=>A(e,n),[e,n]);return g.createElement(g.Fragment,null,e.map((a,m)=>{const d=h[m],w=t.drawers[m]&&!["closing","opening"].includes(d);return g.createElement(v,{key:m,open:a,anchor:"right",SlideProps:{appear:!0,onEntered:o,onExited:l},transitionDuration:c,PaperProps:{className:d,component:P},slotProps:x,"data-testid":f.DRAWER},w?t.children(t.drawers[m]):null)}),g.createElement(k,{invisible:!0,open:n,sx:{zIndex:1300}}))}export{O as D};
