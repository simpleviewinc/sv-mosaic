import{r as g,g as P,R as u}from"./index-D0AnReJb.js";import{C as R}from"./Checkbox-_0JQhlIl.js";import{t as s,C as F}from"./sizes-_ON_TzAH.js";import{c as O}from"./containerQuery-Byjr_VO4.js";import{s as a}from"./styled-components.browser.esm-C5LJ_neh.js";import{a as C,_ as M,r as E}from"./identifier-Bktyv6O_.js";import{r as _}from"./createSvgIcon-D5aI0OD-.js";import{j as G,r as j}from"./jsx-runtime-EKYJJIwR.js";import{b as N,P as q}from"./Popper-B65p2oiP.js";import{a as z}from"./Popover-B_lFWVkj.js";import{g as B,a as D,s as L,u as T,c as W,b as U}from"./generateUtilityClasses-D4jmUuEZ.js";import{u as H,f as K}from"./formControlState-BI4toe_X.js";function X(o,e,r=t=>t){const t=[];for(const n of o)e.some(l=>r(n)===r(l))||t.push(n);for(const n of e)o.some(l=>r(n)===r(l))||t.push(n);return t}function $(o,e){if(e<1)throw new Error(`Chunk size should be more than 0, provided ${e}`);const r=[],t=Math.ceil(o.length/e);for(let n=0;n<e;n++){const l=o.slice(n*t,(n+1)*t);if(!l.length)return r;r.push(l)}return r}function A(o){return B("MuiFormGroup",o)}D("MuiFormGroup",["root","row","error"]);const J=["className","row"],Q=o=>{const{classes:e,row:r,error:t}=o;return U({root:["root",r&&"row",t&&"error"]},A,e)},V=L("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,r.row&&e.row]}})(({ownerState:o})=>C({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),Y=g.forwardRef(function(e,r){const t=T({props:e,name:"MuiFormGroup"}),{className:n,row:l=!1}=t,w=M(t,J),f=H(),i=K({props:t,muiFormControl:f,states:["error"]}),h=C({},t,{row:l,error:i.error}),c=Q(h);return G.jsx(V,C({className:W(c.root,n),ownerState:h,ref:r},w))}),bo=a.div`
  height: 100vh;

  &.mapCoordinates,
  &.address {
    width: 1060px;
  }

  &.mapCoordinates {
    @media (max-width: ${s.breakpoints.mobile}) {
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
`;var m={},y;function Z(){if(y)return m;y=1;var o=E();Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var e=o(_()),r=j();return m.default=(0,e.default)((0,r.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined"),m}var oo=Z();const eo=P(oo),Co=a(eo)`
  && {
	fill: ${s.color.gray[500]};
	width: 18px;
	height: 18px;
  }
`,ro=a.div`
	display: flex;

	${({$align:o})=>o&&`
		align-items: ${o};
	`}

	${({$justify:o})=>o&&`
		justify-content: ${o};
	`}

	${({$gap:o})=>o&&`
		gap: ${s.spacing(...o)};
	`}
`,to=a(ro)`
	flex-direction: column;
`,$o=a(N).attrs({popperOptions:{modifiers:[{name:"offset",options:{offset:[0,parseInt(s.spacing(2),10)]}}]}})`
	z-index: 1300;

	${({$width:o,anchorEl:e})=>o!==void 0?`
		width: ${o}px;
	`:e&&"clientWidth"in e?`
		width: ${e.clientWidth}px;
	`:""}
`,yo=a.ul`
	padding: ${s.spacing(2)};
	margin: 0;

	> .Mos-listboxOption {
		border-radius: ${s.rounded.md};
		cursor: pointer;
		font-size: ${s.fontSize.text.lg};
		line-height: ${s.line.tight};
		padding: ${s.spacing(2,3)};
		align-items: baseline;
		display: flex;
		gap: ${s.spacing(3)};

		&.Mui-focused {
			background-color: ${s.color.gray[100]};
		}

		&.Mui-focusVisible {
			background-color: ${s.color.gray[200]};
		}

		&[aria-selected="true"] {
			background-color: ${s.color.teal[50]};

			&.Mui-focused {
				background-color: ${s.color.teal[100]};
			}
		}

		+ li {
			margin-top: 1px;
		}
	}
`,Io=a.li.attrs(o=>({...o,className:`${o.className||""} Mos-listboxOption`}))``,So=a(q)(({$hideShadow:o,$hideBorder:e})=>{const r=[!e&&"var(--mos-border-light)",!o&&"0 34px 60px 0 rgba(0, 0, 0, 0.15)",!o&&"var(--mos-shadow-xl)"].filter(Boolean).join(",");return`
		border-radius: ${s.rounded.md};
		box-shadow: ${r||"0 0"};
	`});a(z)`
	border-radius: ${s.rounded.md};
	box-shadow:
		var(--mos-border-light),
		0 34px 60px 0 rgba(0, 0, 0, 0.15),
		var(--mos-shadow-xl);
`;const so=a(Y)`
	container-type: inline-size;
	container-name: ${F.CHECKBOX_LIST};
`,no=a.div`
	${O("md","CHECKBOX_LIST")} {
		display: grid;
		grid-template-columns: repeat(3,minmax(0,1fr));
	}
`,ao=a(to)`
	gap: ${s.spacing(1)};
`,ko=o=>{const e=g.useId(),{className:r,checked:t,disabled:n,id:l=e,onBlur:w,onChange:f,options:i,style:h,itemsPerColumn:c=8}=o,I=g.useCallback(({target:v})=>{const{value:x}=v,d=i.find(p=>p.value===x);if(!d)return;const b=X(t||[],[d],p=>p.value);f(b)},[t,f,i]),S=g.useMemo(()=>c<1?[i]:i.length>c*2?$(i,3):i.length>c?$(i,2):[i],[c,i]);return u.createElement(so,{className:`${r??""} listItem`,onBlur:w,style:h},u.createElement(no,null,S.map((v,x)=>u.createElement(ao,{key:x},(v||[]).map(({value:d,label:b},p)=>u.createElement("div",{key:d},u.createElement(R,{checked:(t||[]).some(k=>k.value===d),label:b,disabled:n,id:`${l}-${x}-${p}`,onChange:I,value:d})))))))};export{ko as C,Y as F,ro as R,So as S,Co as T,to as a,$o as b,yo as c,Io as d,bo as e};
