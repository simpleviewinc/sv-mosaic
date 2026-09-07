import{r as f,R as m}from"./index-wekxHvEx.js";import{C as S}from"./Checkbox-CCK0f4bK.js";import{C as x,t as B}from"./sizes-BeWafy6f.js";import{c as N}from"./containerQuery-DwQ6QvMu.js";import{c as h}from"./styled-components.browser.esm-DDzsJbQW.js";import{C as T}from"./StyledPopperPaper-eorsSgGN.js";import"./TooltipIcon-CPXCaul4.js";import{F as w}from"./FormGroup-BzWjA99g.js";function F(a,r,e=t=>t){const t=[];for(const o of a)r.some(s=>e(o)===e(s))||t.push(o);for(const o of r)a.some(s=>e(o)===e(s))||t.push(o);return t}function g(a,r){if(r<1)throw new Error(`Chunk size should be more than 0, provided ${r}`);const e=[],t=Math.ceil(a.length/r);for(let o=0;o<r;o++){const s=a.slice(o*t,(o+1)*t);if(!s.length)return e;e.push(s)}return e}const G=h(w)`
	container-type: inline-size;
	container-name: ${x.CHECKBOX_LIST};
`,L=h.div`
	${N("md","CHECKBOX_LIST")} {
		display: grid;
		grid-template-columns: repeat(3,minmax(0,1fr));
	}
`,O=h(T)`
	gap: ${B.spacing(1)};
`,A=a=>{const r=f.useId(),{className:e,checked:t,disabled:o,id:s=r,onBlur:k,onChange:C,options:n,style:E,itemsPerColumn:c=8}=a,y=f.useCallback(({target:d})=>{const{value:u}=d,l=n.find(i=>i.value===u);if(!l)return;const p=F(t||[],[l],i=>i.value);C(p)},[t,C,n]),I=f.useMemo(()=>c<1?[n]:n.length>c*2?g(n,3):n.length>c?g(n,2):[n],[c,n]);return m.createElement(G,{className:`${e??""} listItem`,onBlur:k,style:E},m.createElement(L,null,I.map((d,u)=>m.createElement(O,{key:u},(d||[]).map(({value:l,label:p,description:i,ariaLabel:$},v)=>m.createElement("div",{key:l},m.createElement(S,{checked:(t||[]).some(b=>b.value===l),label:p,description:i,"aria-label":$,disabled:o,id:`${s}-${u}-${v}`,onChange:y,value:l})))))))};export{A as C};
