import{c as t}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as o}from"./sizes-BeWafy6f.js";import"./index-wekxHvEx.js";import{R as a}from"./StyledPopperPaper-eorsSgGN.js";import"./TooltipIcon-CPXCaul4.js";const d=t(a).attrs({$align:"center"})`
  	background: ${o.color.gray[50]};
	border-radius: ${o.rounded.md};
	gap: ${o.spacing(2)};
	width: 100%;

	${({$compact:r})=>`
		padding: ${o.spacing(0,r?4:5)};
		height: ${r?"42":"48"}px;
	`}

	${({$blunt:r=!0})=>r?`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom: 1px solid ${o.color.gray[300]};
	`:""}

	${({as:r})=>r!=="button"?"":`
		cursor: pointer;

		&:focus-visible {
			outline: 2px solid ${o.color.gray[700]};
			outline-offset: 3px;
		}
	`}
`,l=t(a).attrs({$align:"center"})`
	gap: ${o.spacing(2)};

	& .MuiSvgIcon-root {
		color: ${o.color.gray[600]};
		font-size: ${o.fontSize.icon.sm};
	}
`,$=t(a).attrs({$align:"center"})`
	margin-left: auto;
`,s=t.div(({$compact:r,$paddingBottom:i})=>`
	${r?`
		padding: ${o.spacing(3,4,i?3:0)};
	`:`
		padding: ${o.spacing(4,5,i?4:0)};
	`}

`),m=t.div`
	--card-shadow: ${({$collapsed:r})=>r?"var(--mos-shadow-sm)":"var(--mos-shadow-lg)"};

	align-items: stretch;
	background-color: ${o.color.white};
	border-radius: ${o.rounded.md};
	box-shadow: var(--mos-border-light), var(--card-shadow);
	display: flex;
	flex-direction: column;
	transition: box-shadow cubic-bezier(0.4, 0, 0.2, 1) 300ms;

	& ${s}:first-child {
		border-top-left-radius: ${o.rounded.md};
		border-top-right-radius: ${o.rounded.md};
	}
`,b=t.div`
	padding: ${o.spacing(0,2,4)};

	&:not(:first-child) {
		padding-top: ${o.spacing(4)};
	}

	&:not(:last-child) {
		border-bottom: 1px solid ${o.color.gray[200]};
	}
`,u=t(a).attrs({$align:"center",$justify:"center"})`
	border-top: 1px solid ${o.color.gray[200]};

	${({$compact:r})=>r?`
		padding: ${o.spacing(2,0)};
		margin: ${o.spacing(0,4)};
	`:`
		padding: ${o.spacing(3,0)};
		margin: ${o.spacing(0,5)};
	`}

	margin-top: auto;

	${d} + & {
		border-top: 0;
	}
`;export{$ as C,d as H,l as T,m as a,s as b,b as c,u as d};
