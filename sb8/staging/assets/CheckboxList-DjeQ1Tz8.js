import{r as p,R as c}from"./index-wekxHvEx.js";import{C as B}from"./Checkbox-qRBC831Z.js";import{C as x,t as N}from"./sizes-BeWafy6f.js";import{c as T}from"./containerQuery-DwQ6QvMu.js";import{c as h}from"./styled-components.browser.esm-DDzsJbQW.js";import{C as w}from"./StyledPopperPaper-eorsSgGN.js";import"./TooltipIcon-CPXCaul4.js";import{F}from"./FormGroup-BzWjA99g.js";function G(s,o,e=t=>t){const t=[];for(const r of s)o.some(a=>e(r)===e(a))||t.push(r);for(const r of o)s.some(a=>e(r)===e(a))||t.push(r);return t}function g(s,o){if(o<1)throw new Error(`Chunk size should be more than 0, provided ${o}`);const e=[],t=Math.ceil(s.length/o);for(let r=0;r<o;r++){const a=s.slice(r*t,(r+1)*t);if(!a.length)return e;e.push(a)}return e}const L=h(F)`
	container-type: inline-size;
	container-name: ${x.CHECKBOX_LIST};
`,O=h.div`
	${T("md","CHECKBOX_LIST")} {
		display: grid;
		grid-template-columns: repeat(3,minmax(0,1fr));
	}
`,R=h(w)`
	gap: ${N.spacing(1)};
`,Q=s=>{const o=p.useId(),{className:e,checked:t,disabled:r,id:a=o,onBlur:b,onChange:C,options:n,style:y,itemsPerColumn:m=8}=s,k=s["aria-describedby"],E=p.useCallback(({target:d})=>{const{value:u}=d,i=n.find(l=>l.value===u);if(!i)return;const f=G(t||[],[i],l=>l.value);C(f)},[t,C,n]),I=p.useMemo(()=>m<1?[n]:n.length>m*2?g(n,3):n.length>m?g(n,2):[n],[m,n]);return c.createElement(L,{className:`${e??""} listItem`,onBlur:b,style:y},c.createElement(O,null,I.map((d,u)=>c.createElement(R,{key:u},(d||[]).map(({value:i,label:f,description:l,ariaLabel:$},v)=>c.createElement("div",{key:i},c.createElement(B,{checked:(t||[]).some(S=>S.value===i),label:f,description:l,"aria-label":$,disabled:r,id:`${a}-${u}-${v}`,onChange:E,value:i,"aria-describedby":k})))))))};export{Q as C};
