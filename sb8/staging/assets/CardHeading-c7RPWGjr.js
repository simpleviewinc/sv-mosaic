import{r as o}from"./index-CDlOlYQx.js";import{t as n}from"./testIds-B6Pox1zA.js";import{c as a}from"./styled-components.browser.esm-CsHOGV45.js";import{t}from"./sizes-BeWafy6f.js";import{R as i}from"./StyledPopperPaper-B1C6YiGY.js";import"./TooltipIcon-CCmwqh__.js";import"./Typography-Bp-nXGcB.js";import{T as u}from"./Text-B-CII8XP.js";import{B as b}from"./Badge-OO3YKMxk.js";import{E as f}from"./stable-BFc8HSVh.js";import{B as h}from"./ButtonRow-Cf2fXVyQ.js";const g=a(i).attrs({$align:"center"})`
  	background: ${t.color.gray[50]};
	border-radius: ${t.rounded.md};
	gap: ${t.spacing(2)};
	width: 100%;

	${({$compact:r})=>`
		padding: ${t.spacing(0,r?4:5)};
		height: ${r?"42":"48"}px;
	`}

	${({$blunt:r=!0})=>r?`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom: 1px solid ${t.color.gray[300]};
	`:""}

	${({as:r})=>r!=="button"?"":`
		cursor: pointer;

		&:focus-visible {
			outline: 2px solid ${t.color.gray[700]};
			outline-offset: 3px;
		}
	`}
`,x=a(i).attrs({$align:"center"})`
	gap: ${t.spacing(2)};

	& .MuiSvgIcon-root {
		color: ${t.color.gray[600]};
		font-size: ${t.fontSize.icon.sm};
	}
`,C=a(i).attrs({$align:"center"})`
	margin-left: auto;
`,E=a.div(({$compact:r,$paddingBottom:e})=>`
	${r?`
		padding: ${t.spacing(3,4,e?3:0)};
	`:`
		padding: ${t.spacing(4,5,e?4:0)};
	`}

`),k=a.div`
	--card-shadow: ${({$collapsed:r})=>r?"var(--mos-shadow-sm)":"var(--mos-shadow-lg)"};

	align-items: stretch;
	background-color: ${t.color.white};
	border-radius: ${t.rounded.md};
	box-shadow: var(--mos-border-light), var(--card-shadow);
	display: flex;
	flex-direction: column;
	transition: box-shadow cubic-bezier(0.4, 0, 0.2, 1) 300ms;

	& ${E}:first-child {
		border-top-left-radius: ${t.rounded.md};
		border-top-right-radius: ${t.rounded.md};
	}
`,H=a.div`
	padding: ${t.spacing(0,2,4)};

	&:not(:first-child) {
		padding-top: ${t.spacing(4)};
	}

	&:not(:last-child) {
		border-bottom: 1px solid ${t.color.gray[200]};
	}
`,N=a(i).attrs({$align:"center",$justify:"center"})`
	border-top: 1px solid ${t.color.gray[200]};

	${({$compact:r})=>r?`
		padding: ${t.spacing(2,0)};
		margin: ${t.spacing(0,4)};
	`:`
		padding: ${t.spacing(3,0)};
		margin: ${t.spacing(0,5)};
	`}

	margin-top: auto;

	${g} + & {
		border-top: 0;
	}
`;function L({children:r,buttons:e=f,blunt:p,count:d,icon:s,showZeroCount:$,compact:c,endSlot:l,onClick:m}){return o.createElement(g,{"data-testid":n.CARD_HEADING,$blunt:p,$compact:c,as:m&&"button",onClick:m},o.createElement(x,null,s&&o.createElement(s,{"data-testid":n.CARD_TITLE_ICON}),o.createElement(u,{maxLines:1,tag:"h3",size:c?"lg":"xl",line:"xtight",weight:"medium"},r)),d!==void 0&&(d!==0||$)&&o.createElement(b,{attrs:{"data-testid":n.CARD_COUNT},size:"sm",variant:"dark"},d),(e.length>0||l)&&o.createElement(C,null,e.length>0&&o.createElement(h,{buttons:e}),l))}export{k as C,L as a,E as b,H as c,N as d};
