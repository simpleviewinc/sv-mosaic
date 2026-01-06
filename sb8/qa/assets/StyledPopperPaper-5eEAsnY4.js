import{s as e}from"./styled-components.browser.esm-iTa7G-AD.js";import{B as a,t as r}from"./sizes-1ZdlMWGC.js";import"./index-BcWw8SPZ.js";import{P as i}from"./useTooltip-Ca_MnstU.js";import{P as p,a as d}from"./Popover-BsgnjFRv.js";const b=e.div`
	height: 100vh;

	&.mapCoordinates,
	&.address {
		width: 1060px;
	}

	&.mapCoordinates {
		@media (max-width: ${a.sm}px) {
			width: 100vw;
		}
	}
`,n=e.div`
	all: unset;
	box-sizing: border-box;
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
		gap: ${r.spacing(...o)};
	`}
`,u=e(n)`
	flex-direction: column;
`,f=e(i).attrs({popperOptions:{modifiers:[{name:"offset",options:{offset:[0,parseInt(r.spacing(2),10)]}}]}})`
	z-index: 1300;

	${({$width:o,anchorEl:s})=>typeof o=="number"?`
		width: ${o}px;
	`:typeof o=="string"?`
		width: ${o};
	`:s&&"clientWidth"in s?`
		width: ${s.clientWidth}px;
	`:""}
`,$=e.ul`
	padding: ${r.spacing(2)};
	margin: 0;

	> .Mos-listboxOption {
		border-radius: ${r.rounded.md};
		cursor: pointer;
		font-size: ${r.fontSize.text.lg};
		line-height: ${r.line.tight};
		padding: ${r.spacing(2,3)};
		align-items: baseline;
		display: flex;
		gap: ${r.spacing(3)};

		&.Mui-focused {
			background-color: ${r.color.gray[100]};
		}

		&.Mui-focusVisible {
			background-color: ${r.color.gray[200]};
		}

		&[aria-selected="true"] {
			background-color: ${r.color.teal[50]};

			&.Mui-focused {
				background-color: ${r.color.teal[100]};
			}
		}

		+ li {
			margin-top: 1px;
		}
	}
`,h=e.li.attrs(o=>({...o,className:`${o.className||""} Mos-listboxOption`}))``,P=e(p)(({$hideShadow:o,$hideBorder:s})=>{const t=[!s&&"var(--mos-border-light)",!o&&"0 34px 60px 0 rgba(0, 0, 0, 0.15)",!o&&"var(--mos-shadow-xl)"].filter(Boolean).join(",");return`
		border-radius: ${r.rounded.md};
		box-shadow: ${t||"0 0"};
	`}),y=e(d)`
	border-radius: ${r.rounded.md};
	box-shadow:
		var(--mos-border-light),
		0 34px 60px 0 rgba(0, 0, 0, 0.15),
		var(--mos-shadow-xl);
`;export{u as C,b as F,n as R,f as S,P as a,$ as b,h as c,y as d};
