import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-CDlOlYQx.js";import{u as S,B as p}from"./Button-DiGzPWWk.js";import{M as y,P as x}from"./Public-DXRr9G2x.js";import{E}from"./Edit-Cxoz7qzE.js";import{M as j}from"./MoreVert-BuMRkz_g.js";import{c as T}from"./createSvgIcon-CpiYeT0y.js";import{c as l}from"./styled-components.browser.esm-CsHOGV45.js";import{t as u}from"./sizes-BeWafy6f.js";import{I as N}from"./Image-DWVfwFkh.js";import{T as _}from"./TitleWrapper-D9Xlm0gk.js";import{B as I}from"./ButtonRow-Cf2fXVyQ.js";import{t as $}from"./testIds-B6Pox1zA.js";const P=T(i.jsx("path",{d:"m14.43 10-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"})),q=T(i.jsx("path",{d:"m19.65 9.04-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"})),D=l.div`
	border-bottom: 1px solid ${u.color.gray[300]};
	padding: ${u.spacing(5,6)};
	display: flex;
	gap: ${u.spacing(5)};
	align-items: center;

	.img-rounded {
		width: 71px;
		height: 71px;
		border: 2px solid ${u.color.gray[100]};
		border-radius: 50%;
		opacity: 1;
	}
`,R=l.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
	flex-wrap: wrap;
`,O=l.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	& h1 {
		max-width: 650px;
	}

	& .checked,
	.unchecked {
		margin-left: 6px;
	}
`,A=l.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
`;l.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	div:last-child {
    	border: none;
	}
`;const Q=l.div`
	& p,
	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6 {
		margin: 0px;
		max-width: 280px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`,F=a=>{const{title:h,onBack:k,backLabel:g,favorite:e,img:s,descriptionItems:o}=a,m=t.useMemo(()=>a.mainActions||[],[a.mainActions]),b=t.useMemo(()=>a.additionalActions||[],[a.additionalActions]),r=S(b,"show"),d=t.useMemo(()=>r.length>0?{intent:"secondary",variant:"text",tooltip:"More Actions",mIcon:j,menuItems:r,muiAttrs:{"data-testid":"btn-additional-action"}}:null,[r]),w=t.useMemo(()=>[...m.map(n=>({...n,attrs:{$smallText:!0},size:"small",muiAttrs:{"data-testid":"btn-main-action"}})),...d?[d]:[]],[m,d]);return t.createElement(D,{"data-testid":$.TOP_SUMMARY},s&&t.createElement(N,{className:"img-rounded",src:s}),t.createElement(R,null,t.createElement(A,null,t.createElement(O,null,t.createElement(_,{title:h,onBack:k,backLabel:g}),e&&t.createElement(t.Fragment,null,t.createElement(p,{className:`${e!=null&&e.checked?"checked":"unchecked"}`,intent:e!=null&&e.checked?"primary":"secondary",variant:"text",mIcon:e!=null&&e.checked?P:q,onClick:()=>e.onClick(!(e!=null&&e.checked)),tooltip:"Favorite"}))),t.createElement(I,{separator:!0,wrap:!0,buttons:w})),(o==null?void 0:o.length)&&t.createElement(A,null,t.createElement(I,{separator:!0,wrap:!0},o.map((n,f)=>t.createElement(Q,{key:f,"data-testid":"description-item"},n))))))},z=t.memo(F),K={title:"Components/TopSummary"};function W(){return i.jsxs("div",{children:[i.jsx("div",{children:i.jsx("strong",{children:"Pellentesque eget mollis augue"})}),i.jsx("div",{children:i.jsx("small",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})]})}const c=({titleType:a,title:h,showBack:k,img:g,showFavorite:e,showMainActions:s,showAdditionalActions:o,showDescription:m})=>{const[b,r]=t.useState(!1),d=[{label:"Button 1",mIcon:y,onClick:()=>alert("Button 1 Click"),intent:"secondary",variant:"text",show:()=>Number(s)>0},{label:"Button 2",mIcon:y,onClick:()=>alert("Button 2 Click"),intent:"secondary",variant:"text",show:()=>Number(s)>1},{label:"Button 3",mIcon:E,onClick:()=>alert("Button 3 Click"),intent:"secondary",variant:"text",show:()=>Number(s)>2}],w=t.useMemo(()=>[{label:"Edit",onClick:function(){alert("EDIT CLICK")},show:o!=="undefined"&&Number(o)>0},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")},show:o!=="undefined"&&Number(o)>1}],[o]),n=[{label:"Text link",mIcon:x,href:"https://www.google.com/"},{label:"Text link",mIcon:x,href:"https://www.google.com/"},{label:"Text link",mIcon:x,href:"https://www.google.com/"}],f=[i.jsx("p",{children:"Information"},1),i.jsx("p",{children:"Information"},2),i.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque"},3),i.jsx(p,{attrs:{$linkButton:!0},intent:"secondary",variant:"text",label:n[0].label,mIcon:n[0].mIcon,href:n[0].href,...n[0]},4),i.jsx(p,{attrs:{$linkButton:!0},intent:"secondary",variant:"text",label:n[1].label,mIcon:n[1].mIcon,href:n[1].href,...n[1]},5),i.jsx(p,{attrs:{$linkButton:!0},intent:"secondary",variant:"text",label:n[2].label,mIcon:n[2].mIcon,href:n[2].href,...n[2]},6)],M={checked:b,onClick:v=>{alert(`Star changed to ${v?"checked":"unchecked"}`),r(v)}};return i.jsx(z,{title:a==="String"?h:i.jsx(W,{}),onBack:k?()=>alert("Cancelling, going back to previous site"):void 0,backLabel:"Go back",favorite:e&&M,img:g&&"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg",mainActions:s&&d,additionalActions:w,descriptionItems:m&&f})};c.args={titleType:"String",title:"Laudantium est optio voluptas",showBack:!1,img:!1,showFavorite:!0,showMainActions:"3",showAdditionalActions:"2",showDescription:!0};c.argTypes={titleType:{name:"Title Type",options:["String","React Node"],control:{type:"select"}},title:{name:"Title"},showBack:{name:"Show back button"},img:{name:"Show Image"},showFavorite:{name:"Show Favourite"},showMainActions:{name:"Main Action Count",control:{type:"select"},options:["1","2","3","0"]},showAdditionalActions:{name:"Additional Action Count",control:{type:"select"},options:["1","2","0","undefined"]},showDescription:{name:"Description Items"}};var C,B,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`({
  titleType,
  title,
  showBack,
  img,
  showFavorite,
  showMainActions,
  showAdditionalActions,
  showDescription
}: typeof Playground.args): ReactElement => {
  const [checked, setChecked] = useState<boolean>(false);
  const mainActions: ButtonProps[] = [{
    label: "Button 1",
    mIcon: Mail,
    onClick: () => alert("Button 1 Click"),
    intent: "secondary",
    variant: "text",
    show: () => Number(showMainActions) > 0
  }, {
    label: "Button 2",
    mIcon: Mail,
    onClick: () => alert("Button 2 Click"),
    intent: "secondary",
    variant: "text",
    show: () => Number(showMainActions) > 1
  }, {
    label: "Button 3",
    mIcon: Edit,
    onClick: () => alert("Button 3 Click"),
    intent: "secondary",
    variant: "text",
    show: () => Number(showMainActions) > 2
  }];
  const additionalActions: MenuItemProps[] = useMemo(() => [{
    label: "Edit",
    onClick: function () {
      alert("EDIT CLICK");
    },
    show: showAdditionalActions !== "undefined" && Number(showAdditionalActions) > 0
  }, {
    label: "Download",
    onClick: function () {
      alert("DOWNLOAD CLICK");
    },
    show: showAdditionalActions !== "undefined" && Number(showAdditionalActions) > 1
  }], [showAdditionalActions]);
  const textLinks = [{
    label: "Text link",
    mIcon: Public,
    href: "https://www.google.com/"
  }, {
    label: "Text link",
    mIcon: Public,
    href: "https://www.google.com/"
  }, {
    label: "Text link",
    mIcon: Public,
    href: "https://www.google.com/"
  }];
  const descriptionItems = [<p key={1}>Information</p>, <p key={2}>Information</p>, <p key={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque</p>, <Button key={4} attrs={{
    $linkButton: true
  }} intent="secondary" variant="text" label={textLinks[0].label} mIcon={textLinks[0].mIcon} href={textLinks[0].href} {...textLinks[0]} />, <Button key={5} attrs={{
    $linkButton: true
  }} intent="secondary" variant="text" label={textLinks[1].label} mIcon={textLinks[1].mIcon} href={textLinks[1].href} {...textLinks[1]} />, <Button key={6} attrs={{
    $linkButton: true
  }} intent="secondary" variant="text" label={textLinks[2].label} mIcon={textLinks[2].mIcon} href={textLinks[2].href} {...textLinks[2]} />];
  const favorite = {
    checked: checked,
    onClick: val => {
      alert(\`Star changed to \${val ? "checked" : "unchecked"}\`);
      setChecked(val);
    }
  };
  return <TopSummary title={titleType === "String" ? title : <MockTitleReactNode />} onBack={showBack ? () => alert("Cancelling, going back to previous site") : undefined} backLabel="Go back" favorite={showFavorite && favorite} img={img && "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg"} mainActions={showMainActions && mainActions} additionalActions={additionalActions} descriptionItems={showDescription && descriptionItems} />;
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const G=["Playground"],st=Object.freeze(Object.defineProperty({__proto__:null,Playground:c,__namedExportsOrder:G,default:K},Symbol.toStringTag,{value:"Module"}));export{c as P,st as s};
