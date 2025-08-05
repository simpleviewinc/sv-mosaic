import{s as r}from"./styled-components.browser.esm-C5LJ_neh.js";import{t as e}from"./sizes-_ON_TzAH.js";import{g as n}from"./index-D0AnReJb.js";import{r as d}from"./identifier-Bktyv6O_.js";import{r as p}from"./createSvgIcon-D5aI0OD-.js";import{r as l}from"./jsx-runtime-EKYJJIwR.js";import{b as c,P as m}from"./Popper-D9JYON0d.js";import{P as u}from"./Popover-DMfUH9d_.js";const S=r.div`
  height: 100vh;

  &.mapCoordinates,
  &.address {
    width: 1060px;
  }

  &.mapCoordinates {
    @media (max-width: ${e.breakpoints.mobile}) {
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
`;var i={},s;function f(){if(s)return i;s=1;var o=d();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=o(p()),a=l();return i.default=(0,t.default)((0,a.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined"),i}var x=f();const h=n(x),k=r(h)`
  && {
	fill: ${e.color.gray[500]};
	width: 18px;
	height: 18px;
  }
`,g=r.div`
	display: flex;

	${({$align:o})=>o&&`
		align-items: ${o};
	`}

	${({$justify:o})=>o&&`
		justify-content: ${o};
	`}

	${({$wrap:o})=>o&&`
		flex-wrap: ${o};
	`}

	${({$gap:o})=>o&&`
		gap: ${e.spacing(...o)};
	`}
`,q=r(g)`
	flex-direction: column;
`,C=r(c).attrs({popperOptions:{modifiers:[{name:"offset",options:{offset:[0,parseInt(e.spacing(2),10)]}}]}})`
	z-index: 1300;

	${({$width:o,anchorEl:t})=>typeof o=="number"?`
		width: ${o}px;
	`:typeof o=="string"?`
		width: ${o};
	`:t&&"clientWidth"in t?`
		width: ${t.clientWidth}px;
	`:""}
`,M=r.ul`
	padding: ${e.spacing(2)};
	margin: 0;

	> .Mos-listboxOption {
		border-radius: ${e.rounded.md};
		cursor: pointer;
		font-size: ${e.fontSize.text.lg};
		line-height: ${e.line.tight};
		padding: ${e.spacing(2,3)};
		align-items: baseline;
		display: flex;
		gap: ${e.spacing(3)};

		&.Mui-focused {
			background-color: ${e.color.gray[100]};
		}

		&.Mui-focusVisible {
			background-color: ${e.color.gray[200]};
		}

		&[aria-selected="true"] {
			background-color: ${e.color.teal[50]};

			&.Mui-focused {
				background-color: ${e.color.teal[100]};
			}
		}

		+ li {
			margin-top: 1px;
		}
	}
`,R=r.li.attrs(o=>({...o,className:`${o.className||""} Mos-listboxOption`}))``,j=r(m)(({$hideShadow:o,$hideBorder:t})=>{const a=[!t&&"var(--mos-border-light)",!o&&"0 34px 60px 0 rgba(0, 0, 0, 0.15)",!o&&"var(--mos-shadow-xl)"].filter(Boolean).join(",");return`
		border-radius: ${e.rounded.md};
		box-shadow: ${a||"0 0"};
	`});r(u)`
	border-radius: ${e.rounded.md};
	box-shadow:
		var(--mos-border-light),
		0 34px 60px 0 rgba(0, 0, 0, 0.15),
		var(--mos-shadow-xl);
`;export{q as C,S as F,g as R,C as S,k as T,j as a,M as b,R as c};
