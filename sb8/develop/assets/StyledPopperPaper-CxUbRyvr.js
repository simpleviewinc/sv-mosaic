import{s as i}from"./styled-components.browser.esm-iTa7G-AD.js";import{B as a,t}from"./sizes-1ZdlMWGC.js";import"./index-BcWw8SPZ.js";import{P as s}from"./useTooltip-Ca_MnstU.js";import{P as p,a as d}from"./Popover-BsgnjFRv.js";const h=i.div`
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
`,n=i.div`
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
		gap: ${t.spacing(...o)};
	`}
`,b=i(n)`
	flex-direction: column;
`,f=i(s).attrs({popperOptions:{modifiers:[{name:"offset",options:{offset:[0,parseInt(t.spacing(2),10)]}}]}})`
	z-index: 1300;

	${({$width:o,anchorEl:e})=>typeof o=="number"?`
		width: ${o}px;
	`:typeof o=="string"?`
		width: ${o};
	`:e&&"clientWidth"in e?`
		width: ${e.clientWidth}px;
	`:""}
`,u=i.ul`
	padding: ${t.spacing(2)};
	margin: 0;

	> .Mos-listboxOption {
		border-radius: ${t.rounded.md};
		cursor: pointer;
		font-size: ${t.fontSize.text.lg};
		line-height: ${t.line.tight};
		padding: ${t.spacing(2,3)};
		align-items: baseline;
		display: flex;
		gap: ${t.spacing(3)};

		&.Mui-focused {
			background-color: ${t.color.gray[100]};
		}

		&.Mui-focusVisible {
			background-color: ${t.color.gray[200]};
		}

		&[aria-selected="true"] {
			background-color: ${t.color.teal[50]};

			&.Mui-focused {
				background-color: ${t.color.teal[100]};
			}
		}

		+ li {
			margin-top: 1px;
		}
	}
`,$=i.li.attrs(o=>({...o,className:`${o.className||""} Mos-listboxOption`}))``,w=i(p)(({$hideShadow:o,$hideBorder:e})=>{const r=[!e&&"var(--mos-border-light)",!o&&"0 34px 60px 0 rgba(0, 0, 0, 0.15)",!o&&"var(--mos-shadow-xl)"].filter(Boolean).join(",");return`
		border-radius: ${t.rounded.md};
		box-shadow: ${r||"0 0"};
	`}),v=i(d)`
	border-radius: ${t.rounded.md};
	box-shadow:
		var(--mos-border-light),
		0 34px 60px 0 rgba(0, 0, 0, 0.15),
		var(--mos-shadow-xl);
`;export{b as C,h as F,n as R,f as S,w as a,u as b,$ as c,v as d};
