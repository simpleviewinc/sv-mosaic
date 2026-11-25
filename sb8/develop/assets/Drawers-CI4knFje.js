import{r as o,R as m}from"./index-wekxHvEx.js";import{c as k,p as u}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as w}from"./testIds-B6Pox1zA.js";import{D as A}from"./scrollbarStyles-Bv9JpEGT.js";import{B as D}from"./Popover-C7i3nYv0.js";function E(t,e){if(t.length===0)return[];const r=t[t.length-1];return t.map((n,a)=>{const i=a===t.length-1,g=a===t.length-2;return i&&n===!1&&e?"closing":i&&n===!0&&e?"opening":i&&n===!0?"open":g&&r===!0&&e?"stacking":g&&r===!1&&e?"unstacking":"stacked"})}const l=250,R=u`
	from {
	  	right: -75vw;
	}
	to {
	  	right: 0vw;
	}
  `,$=u`
	from {
	  	right: 0vw;
	}

	to {
	  	right: -75vw;
	}
  `,P=u`
	from {
	  	right: 0vw;
	}

	to {
	  	right: 25vw;
	}
  `,x=u`
	from {
	  	right: 25vw;
	}

	to {
	  	right: 0vw;
	}
  `,C=k.div`
	width: 75%;
	transform: none !important;
	transition: initial !important;
	right: -75vw;

	&.opening {
		animation: ${l}ms ease-out 0s 1 ${R};
		right: 0;
	}

	&.open {
	  	right: 0;
	}

	&.stacking {
		animation: ${l}ms ease-out 0s 1 ${P};
		right: 25vw;
	}

	&.stacked {
		right: 25vw;
	}

	&.unstacking {
		animation: ${l}ms ease-out 0s 1 ${x};
		right: 0vw;
	}

	&.closing {
		animation: ${l}ms ease-out 0s 1 ${$};
		right: -75vw;
	}
`,N={backdrop:{"data-testid":w.DRAWER_BACKDROP}};function V(t){const[e,r]=o.useState([]),[n,a]=o.useState(!1);o.useEffect(()=>{t.drawers.length===0&&e.length===0||(t.drawers.length>e.length?(r(s=>[...s,!0]),a(!0)):t.drawers.length<e.length&&e[e.length-1]===!0&&(r(s=>[...s.slice(0,-1),!1]),a(!0)))},[t.drawers,e]);const i=o.useCallback(()=>{a(!1)},[]),g=o.useCallback(()=>{r(s=>[...s.slice(0,-1)]),a(!1)},[]),d=o.useMemo(()=>E(e,n),[e,n]);return m.createElement(m.Fragment,null,e.map((s,c)=>{const f=d[c],v=t.drawers[c]&&!["closing","opening"].includes(f);return m.createElement(A,{key:c,open:s,anchor:"right",SlideProps:{appear:!0,onEntered:i,onExited:g},transitionDuration:l,PaperProps:{className:f,component:C},onClose:c===e.length-1?(S,p)=>{var h;p==="escapeKeyDown"&&((h=t.onClose)===null||h===void 0||h.call(t))}:void 0,slotProps:N,"data-testid":w.DRAWER},v?t.children(t.drawers[c]):null)}),m.createElement(D,{invisible:!0,open:n,sx:{zIndex:1300}}))}export{V as D};
