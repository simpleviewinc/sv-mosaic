import{s as a}from"./styled-components.browser.esm-CUKKF2J4.js";import{t as o}from"./sizes-1ZdlMWGC.js";import"./index-ePW8zFKp.js";import{B as d}from"./ButtonRow-Bjtqzf8D.js";import{R as t}from"./StyledPopperPaper-8Ep909Ba.js";const e=a.div`
	--card-shadow: ${({$collapsed:r})=>r?"var(--mos-shadow-sm)":"var(--mos-shadow-lg)"};

	border-radius: ${o.rounded.md};
	box-shadow: var(--mos-border-light), var(--card-shadow);
`,$=a(t).attrs({$align:"center"})`
  	background: ${o.color.gray[50]};
	border-radius: ${o.rounded.md};
	border-bottom: 1px solid ${o.color.gray[300]};
	gap: ${o.spacing(2)};

	${({$compact:r})=>`
		padding: ${o.spacing(0,r?4:5)};
		height: ${r?"42":"48"}px;
	`}

	${({$collapsed:r})=>r?"":`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	`}
`,m=a(t).attrs({$align:"center"})`
	gap: ${o.spacing(2)};

	& .MuiSvgIcon-root {
		color: ${o.color.gray[600]};
		font-size: ${o.fontSize.icon.sm};
	}
`,l=a(d)`
	margin-left: auto;
`,b=a.div(({$compact:r,$paddingBottom:s})=>`
	${r?`
		padding: ${o.spacing(3,4,s?3:0)};
	`:`
		padding: ${o.spacing(4,5,s?4:0)};
	`}

`),u=a.div`
	padding: ${o.spacing(0,2,4)};

	&:not(:first-child) {
		padding-top: ${o.spacing(4)};
		border-top: 1px solid ${o.color.gray[200]};
	}
`,h=a(t).attrs({$align:"center",$justify:"center"})`
	border-top: 1px solid ${o.color.gray[200]};

	${({$compact:r})=>r?`
		padding: ${o.spacing(2,0)};
		margin: ${o.spacing(0,4)};
	`:`
		padding: ${o.spacing(3,0)};
		margin: ${o.spacing(0,5)};
	`}
`;export{l as C,$ as H,m as T,e as a,b,u as c,h as d};
