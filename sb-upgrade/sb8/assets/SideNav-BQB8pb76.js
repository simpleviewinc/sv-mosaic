import{j as i}from"./jsx-runtime-qGIIFXMu.js";import{r as v}from"./index-CDs2tPxN.js";import{s as l,t as o}from"./theme-tUuL1bpb.js";import{c as m}from"./containerQuery-BObFYVCA.js";import{u as k}from"./useToggle-D8hNafRh.js";const w=l.nav`
	${({$collapse:e})=>e?`
		border-bottom: 2px solid ${o.newColors.grey2[100]};
		padding: 0 24px;

		${m(e.minWidth,e.name)}  {
			border-bottom: 0;
			border-right: 2px solid ${o.newColors.grey2[100]};
			width: 196px;
			min-width: 196px;
			padding: 0;
			overflow: auto;
		}
	`:`
		border-right: 2px solid ${o.newColors.grey2[100]};
		width: 196px;
		min-width: 196px;
		overflow: auto;
	`}
`,y=l.div`
  	font-family: ${o.fontFamily};
`,b=l.div`
	display: flex;
	border-bottom: 2px solid ${o.newColors.grey2[100]};

	&:last-child{
		border-bottom: 0;
	}

	${({$collapse:e})=>e?`
		gap: 40px;
		border-bottom: 0;

		${m(e.minWidth,e.name)} {
			flex-direction: column;
			gap: 0;
		}
	`:`
		flex-direction: column;
	`}
`,x=l.a`
	cursor: pointer;
	padding-bottom: 16px;
	display: flex;
	align-items: center;
	gap: 8px;
	text-decoration: none;

	${({$isActive:e})=>e&&`
		font-weight: ${o.fontWeight.semiBold};
	`}

	${({$collapse:e})=>e?`
		border-bottom: 4px solid transparent;
	`:`
		border-left: 3px solid transparent;
		padding: 12px 20px;
	`};

	${({$collapse:e,$isActive:t})=>e&&t&&`
		border-bottom-color: ${o.newColors.simplyGold[100]};
	`};

	${({$collapse:e,$isActive:t})=>!e&&t&&`
		background-color: ${o.newColors.grey2[100]};
		border-left-color: ${o.newColors.simplyGold[100]};
	`};

	${({$collapse:e})=>e&&`
		${m(e.minWidth,e.name)} {
			align-items: center;
			border-bottom: 0;
			border-left: 3px solid transparent;
			display: flex;
			padding: 12px 20px;
		}
	`}

	${({$collapse:e,$isActive:t})=>e&&t&&`
		${m(e.minWidth,e.name)} {
			background-color: ${o.newColors.grey2[100]};
			border-left-color: ${o.newColors.simplyGold[100]};
		}
	`}

	.MuiSvgIcon-root:first-child {
		color: ${o.newColors.almostBlack[100]};
		width: 16px;
		margin: -2px 0;
	}

	&:hover {
		.MuiSvgIcon-root:not(:first-child) {
			display: block;
			color: ${o.newColors.grey3[100]};
			margin: -2px -12px -2px auto;
			width: 16px;
		}
	}

	.MuiSvgIcon-root:not(:first-child) {
		display: none;
	}
`,C=l.span`
	color: ${o.newColors.almostBlack[100]};
	font-size: 14px;
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 20px;
`,N=l.span`
	color: ${o.newColors.grey4[100]};
	font-size: 10px;
	font-weight: ${o.fontWeight.semiBold};
`,T=l.div`
	align-items: center;
	background-color: ${o.newColors.simplyGold[100]};
	border-radius: 20px;
	display: flex;
	height: 20px;
	justify-content: center;
	min-width: 20px;
`,$=({items:e,collapse:t,onLinkClicked:u,active:s})=>{const p=k(e,"show",!0);return p.length?i.jsx(b,{"data-testid":"section-wrapper",$collapse:t,children:p.map((n,h)=>{var a,g;const c=n.icon,r=(a=n==null?void 0:n.action)==null?void 0:a.icon;return v.createElement(x,{...n.attrs,$isActive:n.name===s,onClick:d=>u({item:n,event:d}),$collapse:t,key:`${n.label}-${h}`,className:n.name===s&&"highlight"},n.icon&&i.jsx(c,{}),i.jsx(C,{children:n.label}),(n==null?void 0:n.badge)&&i.jsx(T,{children:i.jsx(N,{children:n.badge})}),((g=n==null?void 0:n.action)==null?void 0:g.icon)&&i.jsx(r,{onClick:n.action.onClick}))})}):null},f=e=>{const{items:t,active:u,onNav:s,className:p,collapse:n}=e,h=v.useCallback(c=>{const{item:r,event:a}=c;if(a.ctrlKey||a.metaKey||a.shiftKey||a.altKey)return;const d=r.onNav!==void 0?r.onNav:s;d!==!1&&a.preventDefault(),typeof d=="function"&&d({item:r,event:a})},[s]);return i.jsx(w,{className:p,$collapse:n,children:i.jsx(y,{children:t.map((c,r)=>i.jsx($,{items:c,onLinkClicked:h,active:u,collapse:n},r))})})},q=v.memo(f);f.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	/**
	 * Each link could have an optional action which consists of an
	 * icon that will be displayed when hovering over the link and
	 * an onClick callback
	 */
	action?: { icon: SvgIconComponent; onClick: () => void };
	/**
	 * Anchor element attributes.
	 */
	attrs?: AnchorHTMLAttributes<HTMLAnchorElement>;
	/**
	 * Optional descriptive mark of the link.
	 */
	badge?: string;
	/**
	 * Optional link left icon.
	 */
	icon?: SvgIconComponent;
	/**
	 * Label that names the link.
	 */
	label: string;
	/**
	 * Name of the item. It is used to set it as active when is clicked.
	*/
	name: string;
	/**
	 * Callback that each link will execute on an onClick event.
	 */
	onNav?: false | SideNavOnNav;
	/**
	 * MosaicToggle to evaluate whether or not to show this item
	 */
	show?: MosaicToggle;
}`,signature:{properties:[{key:"action",value:{name:"signature",type:"object",raw:"{ icon: SvgIconComponent; onClick: () => void }",signature:{properties:[{key:"icon",value:{name:"SvgIcon",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1},description:`Each link could have an optional action which consists of an
icon that will be displayed when hovering over the link and
an onClick callback`},{key:"attrs",value:{name:"AnchorHTMLAttributes",elements:[{name:"HTMLAnchorElement"}],raw:"AnchorHTMLAttributes<HTMLAnchorElement>",required:!1},description:"Anchor element attributes."},{key:"badge",value:{name:"string",required:!1},description:"Optional descriptive mark of the link."},{key:"icon",value:{name:"SvgIcon",required:!1},description:"Optional link left icon."},{key:"label",value:{name:"string",required:!0},description:"Label that names the link."},{key:"name",value:{name:"string",required:!0},description:"Name of the item. It is used to set it as active when is clicked."},{key:"onNav",value:{name:"union",raw:"false | SideNavOnNav",elements:[{name:"literal",value:"false"},{name:"SideNavOnNav"}],required:!1},description:"Callback that each link will execute on an onClick event."},{key:"show",value:{name:"union",raw:"T | T[]",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]},{name:"Array",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]}],raw:"T[]"}],required:!1},description:"MosaicToggle to evaluate whether or not to show this item"}]}}],raw:"Item[]"}],raw:"Item[][]"},description:"List of lists of links, each list represents a section of links"},active:{required:!1,tsType:{name:"string"},description:"Optional, active link from Links array"},onNav:{required:!1,tsType:{name:"SideNavOnNav"},description:"Optional, handler for when the user clicks an item"},className:{required:!1,tsType:{name:"string"},description:""},collapse:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
	name?: keyof typeof CONTAINERS;\r
	minWidth: keyof typeof BREAKPOINTS;\r
}`,signature:{properties:[{key:"name",value:{name:"union",raw:"keyof typeof CONTAINERS",elements:[{name:"literal",value:"ASSET_CARD"},{name:"literal",value:"FORM"},{name:"literal",value:"FORM_COL"}],required:!1}},{key:"minWidth",value:{name:"union",raw:"keyof typeof BREAKPOINTS",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:'"2xl"'},{name:"literal",value:"mobile"},{name:"literal",value:"topComponent"}],required:!0}}]}},description:""}}};export{q as S};
