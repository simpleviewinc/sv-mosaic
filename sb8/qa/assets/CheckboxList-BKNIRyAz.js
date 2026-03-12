import{r as f,R as m}from"./index-CDlOlYQx.js";import{C as S}from"./Checkbox-65JO9dLp.js";import{C as b,t as x}from"./sizes-BeWafy6f.js";import{c as B}from"./containerQuery-DwQ6QvMu.js";import{c as h}from"./styled-components.browser.esm-CsHOGV45.js";import{C as N}from"./StyledPopperPaper-B1C6YiGY.js";import"./TooltipIcon-CCmwqh__.js";import{F as T}from"./FormGroup-DKw7Nhjc.js";function w(a,r,e=t=>t){const t=[];for(const o of a)r.some(s=>e(o)===e(s))||t.push(o);for(const o of r)a.some(s=>e(o)===e(s))||t.push(o);return t}function g(a,r){if(r<1)throw new Error(`Chunk size should be more than 0, provided ${r}`);const e=[],t=Math.ceil(a.length/r);for(let o=0;o<r;o++){const s=a.slice(o*t,(o+1)*t);if(!s.length)return e;e.push(s)}return e}const F=h(T)`
	container-type: inline-size;
	container-name: ${b.CHECKBOX_LIST};
`,G=h.div`
	${B("md","CHECKBOX_LIST")} {
		display: grid;
		grid-template-columns: repeat(3,minmax(0,1fr));
	}
`,L=h(N)`
	gap: ${x.spacing(1)};
`,_=a=>{const r=f.useId(),{className:e,checked:t,disabled:o,id:s=r,onBlur:k,onChange:C,options:n,style:E,itemsPerColumn:c=8}=a,y=f.useCallback(({target:d})=>{const{value:u}=d,i=n.find(l=>l.value===u);if(!i)return;const p=w(t||[],[i],l=>l.value);C(p)},[t,C,n]),I=f.useMemo(()=>c<1?[n]:n.length>c*2?g(n,3):n.length>c?g(n,2):[n],[c,n]);return m.createElement(F,{className:`${e??""} listItem`,onBlur:k,style:E},m.createElement(G,null,I.map((d,u)=>m.createElement(L,{key:u},(d||[]).map(({value:i,label:p,description:l},$)=>m.createElement("div",{key:i},m.createElement(S,{checked:(t||[]).some(v=>v.value===i),label:p,description:l,disabled:o,id:`${s}-${u}-${$}`,onChange:y,value:i})))))))};export{_ as C};
