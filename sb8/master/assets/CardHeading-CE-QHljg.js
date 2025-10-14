import{r as a}from"./index-D0AnReJb.js";import{t as i}from"./testIds-B6Pox1zA.js";import{s as r}from"./styled-components.browser.esm-8X0uN6v9.js";import{t}from"./sizes-DkIXWPpc.js";import{B as g}from"./ButtonRow-DsoxFHT_.js";import{R as s}from"./StyledPopperPaper-BODJ-ail.js";import"./Typography-CZQzWHyE.js";import{T as p}from"./Text-BjwqtcAz.js";import{B as l}from"./Badge-D14GCFVi.js";import{E as $}from"./stable-BFc8HSVh.js";const B=r.div`
	--card-shadow: ${({$collapsed:o})=>o?"var(--mos-shadow-sm)":"var(--mos-shadow-lg)"};

	border-radius: ${t.rounded.md};
	width: 100%;
	box-shadow: var(--mos-border-light), var(--card-shadow);
`,f=r(s).attrs({$align:"center"})`
  	background: ${t.color.gray[50]};
	border-radius: ${t.rounded.md};
	padding: ${t.spacing(0,5)};
	gap: ${t.spacing(2)};
	height: 48px;

	${({$collapsed:o})=>o?"":`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	`}
`,h=r(s).attrs({$align:"center"})`
	gap: ${t.spacing(2)};

	& .MuiSvgIcon-root {
		color: ${t.color.gray[600]};
		font-size: ${t.fontSize.icon.sm};
	}
`,u=r(g)`
	margin-left: auto;
`,I=r.div`
	padding: ${t.spacing(4,5,0)};
	border-top: 1px solid ${t.color.gray[300]};
`,_=r.div`
	padding: ${t.spacing(0,2,4)};

	&:not(:first-child) {
		padding-top: ${t.spacing(4)};
		border-top: 1px solid ${t.color.gray[200]};
	}
`,z=r(s).attrs({$align:"center",$justify:"center"})`
	border-top: 1px solid ${t.color.gray[200]};
	padding: ${t.spacing(3,0)};
	margin: ${t.spacing(0,5)};
`;function D({children:o,buttons:d=$,collapsed:m,count:e,icon:n,showZeroCount:c}){return a.createElement(f,{"data-testid":i.CARD_HEADING,$collapsed:m},a.createElement(h,null,n&&a.createElement(n,{"data-testid":i.CARD_TITLE_ICON}),a.createElement(p,{maxLines:1,tag:"h3",size:"xl",line:"xtight",weight:"medium"},o)),e!==void 0&&(e!==0||c)&&a.createElement(l,{attrs:{"data-testid":i.CARD_COUNT},size:"sm",variant:"dark"},e),d.length>0&&a.createElement(u,{buttons:d}))}export{B as C,D as a,I as b,_ as c,z as d};
