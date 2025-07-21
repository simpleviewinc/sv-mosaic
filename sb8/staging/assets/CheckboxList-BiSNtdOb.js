import{r as x,g as S,R as u}from"./index-D0AnReJb.js";import{C as $}from"./Checkbox-CcPIMNpv.js";import{t as C,C as b}from"./sizes-xhpoGYFi.js";import{c as _}from"./containerQuery-eQe_EJj5.js";import{s as i}from"./styled-components.browser.esm-D9jdcGim.js";import{a as I,_ as G,r as O}from"./identifier-P2c7yk_w.js";import{r as j}from"./createSvgIcon-1nOp1Fw5.js";import{j as M,r as q}from"./jsx-runtime-EKYJJIwR.js";import{g as D,a as N,s as T,u as B,c as P,b as z}from"./generateUtilityClasses-Cqx37_87.js";import{u as L,f as U}from"./formControlState-DKpu4qdP.js";function W(e,r,o=t=>t){const t=[];for(const s of e)r.some(a=>o(s)===o(a))||t.push(s);for(const s of r)e.some(a=>o(s)===o(a))||t.push(s);return t}function y(e,r){if(r<1)throw new Error(`Chunk size should be more than 0, provided ${r}`);const o=[],t=Math.ceil(e.length/r);for(let s=0;s<r;s++){const a=e.slice(s*t,(s+1)*t);if(!a.length)return o;o.push(a)}return o}function H(e){return D("MuiFormGroup",e)}N("MuiFormGroup",["root","row","error"]);const K=["className","row"],X=e=>{const{classes:r,row:o,error:t}=e;return z({root:["root",o&&"row",t&&"error"]},H,r)},A=T("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,o.row&&r.row]}})(({ownerState:e})=>I({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),J=x.forwardRef(function(r,o){const t=B({props:r,name:"MuiFormGroup"}),{className:s,row:a=!1}=t,w=G(t,K),d=L(),n=U({props:t,muiFormControl:d,states:["error"]}),f=I({},t,{row:a,error:n.error}),l=X(f);return M.jsx(A,I({className:P(l.root,s),ownerState:f,ref:o},w))}),fe=i.div`
  height: 100vh;

  &.mapCoordinates,
  &.address {
    width: 1060px;
  }

  &.mapCoordinates {
    @media (max-width: ${C.breakpoints.mobile}) {
      width: 100vw;
    }
  }

  &.advancedSelection {
    & .checkbox-list-field-wrapper div:first-child {
      width: 100% !important;
    }
    & .topBlock {
      max-width: 800px;
      min-height: calc(100vh - 110px);
      min-width: 600px;
      padding-left: 16px;
      width: 50vw;

      .options {
        width: 70%;
      }

      .selected {
        width: 30%;
      }
    }

    & .topBlock hr {
      margin: -16px 0px 0px 0px;
    }
  }
`;var p={},R;function Q(){if(R)return p;R=1;var e=O();Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var r=e(j()),o=q();return p.default=(0,r.default)((0,o.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined"),p}var V=Q();const Y=S(V),he=i(Y)`
  && {
	fill: ${C.newColors.realTeal[100]};
	width: 24px;
	height: 24px;
  }
`,Z=i.div`
	display: flex;

	${({$align:e})=>e&&`
		align-items: ${e};
	`}

	${({$justify:e})=>e&&`
		justify-content: ${e};
	`}

	${({$gap:e})=>e&&`
		gap: ${C.spacing(...e)};
	`}
`,ee=i(Z)`
	flex-direction: column;
`,oe=i(J)`
	container-type: inline-size;
	container-name: ${b.CHECKBOX_LIST};
`,te=i.div`
	${_("md","CHECKBOX_LIST")} {
		display: grid;
		grid-template-columns: repeat(3,minmax(0,1fr));
	}
`,re=i(ee)`
	gap: ${C.spacing(1)};
`,xe=e=>{const r=x.useId(),{className:o,checked:t,disabled:s,id:a=r,onBlur:w,onChange:d,options:n,style:f,itemsPerColumn:l=8}=e,k=x.useCallback(({target:v})=>{const{value:h}=v,c=n.find(m=>m.value===h);if(!c)return;const g=W(t||[],[c],m=>m.value);d(g)},[t,d,n]),F=x.useMemo(()=>l<1?[n]:n.length>l*2?y(n,3):n.length>l?y(n,2):[n],[l,n]);return u.createElement(oe,{className:`${o??""} listItem`,onBlur:w,style:f},u.createElement(te,null,F.map((v,h)=>u.createElement(re,{key:h},(v||[]).map(({value:c,label:g},m)=>u.createElement("div",{key:c},u.createElement($,{checked:(t||[]).some(E=>E.value===c),label:g,disabled:s,id:`${a}-${h}-${m}`,onChange:k,value:c})))))))};export{xe as C,J as F,Z as R,he as T,ee as a,fe as b};
