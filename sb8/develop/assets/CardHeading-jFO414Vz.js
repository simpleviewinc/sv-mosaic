import{r as o}from"./index-ePW8zFKp.js";import{t as s}from"./testIds-B6Pox1zA.js";import{s as a}from"./styled-components.browser.esm-CUKKF2J4.js";import{t}from"./sizes-1ZdlMWGC.js";import{R as i}from"./StyledPopperPaper-D2kQT34B.js";import"./Typography-Bs-xuYxw.js";import{T as u}from"./Text-cPxBJcyq.js";import{B as b}from"./Badge-BWKQiQcj.js";import{E as f}from"./stable-BFc8HSVh.js";import{B as h}from"./ButtonRow-CKtT1B9L.js";const m=a(i).attrs({$align:"center"})`
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
	background: ${t.color.white};

	${r?`
		padding: ${t.spacing(3,4,e?3:0)};
	`:`
		padding: ${t.spacing(4,5,e?4:0)};
	`}

`),D=a.div`
	--card-shadow: ${({$collapsed:r})=>r?"var(--mos-shadow-sm)":"var(--mos-shadow-lg)"};

	align-items: stretch;
	border-radius: ${t.rounded.md};
	box-shadow: var(--mos-border-light), var(--card-shadow);
	display: flex;
	flex-direction: column;
	transition: box-shadow cubic-bezier(0.4, 0, 0.2, 1) 300ms;

	& ${E}:first-child {
		border-top-left-radius: ${t.rounded.md};
		border-top-right-radius: ${t.rounded.md};
	}
`,k=a.div`
	padding: ${t.spacing(0,2,4)};

	&:not(:first-child) {
		padding-top: ${t.spacing(4)};
	}

	&:not(:last-child) {
		border-bottom: 1px solid ${t.color.gray[200]};
	}
`,H=a(i).attrs({$align:"center",$justify:"center"})`
	border-top: 1px solid ${t.color.gray[200]};

	${({$compact:r})=>r?`
		padding: ${t.spacing(2,0)};
		margin: ${t.spacing(0,4)};
	`:`
		padding: ${t.spacing(3,0)};
		margin: ${t.spacing(0,5)};
	`}

	margin-top: auto;

	${m} + & {
		border-top: 0;
	}
`;function N({children:r,buttons:e=f,blunt:p,count:d,icon:n,showZeroCount:$,compact:c,endSlot:g,onClick:l}){return o.createElement(m,{"data-testid":s.CARD_HEADING,$blunt:p,$compact:c,as:l&&"button",onClick:l},o.createElement(x,null,n&&o.createElement(n,{"data-testid":s.CARD_TITLE_ICON}),o.createElement(u,{maxLines:1,tag:"h3",size:c?"lg":"xl",line:"xtight",weight:"medium"},r)),d!==void 0&&(d!==0||$)&&o.createElement(b,{attrs:{"data-testid":s.CARD_COUNT},size:"sm",variant:"dark"},d),(e.length>0||g)&&o.createElement(C,null,e.length>0&&o.createElement(h,{buttons:e}),g))}export{D as C,N as a,E as b,k as c,H as d};
