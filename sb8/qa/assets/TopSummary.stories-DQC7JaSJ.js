import{r as M,j as o}from"./jsx-runtime-EKYJJIwR.js";import{g as E,r as e}from"./index-D0AnReJb.js";import{a as N,B as k}from"./Button-Dlaq5vsb.js";import{M as I,P as v}from"./Public-DZ4IpRPG.js";import{E as P}from"./Edit-Bk4AvtQF.js";import{M as $}from"./MoreVert-BAJenQd7.js";import{r as _}from"./identifier-DOqdnZ6L.js";import{r as q}from"./createSvgIcon-DDyBApXB.js";import{s as d}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as C}from"./sizes-DkIXWPpc.js";import{I as O}from"./Image-ZO9EpWKf.js";import{T as F}from"./TitleWrapper-D8cEbksV.js";import{B as A}from"./ButtonRow-DsoxFHT_.js";import{t as Q}from"./testIds-B6Pox1zA.js";var p={},B;function z(){if(B)return p;B=1;var i=_();Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var r=i(q()),s=M();return p.default=(0,r.default)((0,s.jsx)("path",{d:"m14.43 10-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"}),"StarRateRounded"),p}var K=z();const W=E(K);var h={},S;function G(){if(S)return h;S=1;var i=_();Object.defineProperty(h,"__esModule",{value:!0}),h.default=void 0;var r=i(q()),s=M();return h.default=(0,r.default)((0,s.jsx)("path",{d:"m19.65 9.04-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarBorderRounded"),h}var H=G();const J=E(H),U=d.div`
  background: white;
  border-bottom: 2px solid ${C.newColors.grey2[100]};
  padding: 24px 24px 16px 24px;
  display: flex;
  gap: 24px;
  align-items: center;

  .img-rounded {
    width: 71px;
    height: 71px;
    border: 2px solid ${C.newColors.grey2[100]};
    border-radius: 50%;
    opacity: 1;
  }
`,V=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
`,Y=d.div`
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
`,L=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  div:last-child {
    border: none;
  }
`;const X=d.div`
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
`,Z=i=>{const{title:r,onBack:s,backLabel:x,favorite:t,img:l,descriptionItems:a}=i,f=e.useMemo(()=>i.mainActions||[],[i.mainActions]),g=e.useMemo(()=>i.additionalActions||[],[i.additionalActions]),u=N(g,"show"),m=e.useMemo(()=>u.length>0?{intent:"secondary",variant:"text",tooltip:"More Actions",mIcon:$,menuItems:u,muiAttrs:{"data-testid":"btn-additional-action"}}:null,[u]),b=e.useMemo(()=>[...f.map(n=>({...n,attrs:{$smallText:!0},size:"small",muiAttrs:{"data-testid":"btn-main-action"}})),...m?[m]:[]],[f,m]);return e.createElement(U,{"data-testid":Q.TOP_SUMMARY},l&&e.createElement(O,{className:"img-rounded",src:l}),e.createElement(V,null,e.createElement(L,null,e.createElement(Y,null,e.createElement(F,{title:r,onBack:s,backLabel:x}),t&&e.createElement(e.Fragment,null,e.createElement(k,{className:`${t!=null&&t.checked?"checked":"unchecked"}`,intent:t!=null&&t.checked?"primary":"secondary",variant:"text",mIcon:t!=null&&t.checked?W:J,onClick:()=>t.onClick(!(t!=null&&t.checked)),tooltip:"Favorite"}))),e.createElement(A,{separator:!0,wrap:!0,buttons:b})),(a==null?void 0:a.length)&&e.createElement(L,null,e.createElement(A,{separator:!0,wrap:!0},a.map((n,w)=>e.createElement(X,{key:w,"data-testid":"description-item"},n))))))},ee=e.memo(Z),te={title:"Components/TopSummary"};function ne(){return o.jsxs("div",{children:[o.jsx("div",{children:o.jsx("strong",{children:"Pellentesque eget mollis augue"})}),o.jsx("div",{children:o.jsx("small",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})]})}const c=({titleType:i,title:r,showBack:s,img:x,showFavorite:t,showMainActions:l,showAdditionalActions:a,showDescription:f})=>{const[g,u]=e.useState(!1),m=[{label:"Button 1",mIcon:I,onClick:()=>alert("Button 1 Click"),intent:"secondary",variant:"text",show:()=>Number(l)>0},{label:"Button 2",mIcon:I,onClick:()=>alert("Button 2 Click"),intent:"secondary",variant:"text",show:()=>Number(l)>1},{label:"Button 3",mIcon:P,onClick:()=>alert("Button 3 Click"),intent:"secondary",variant:"text",show:()=>Number(l)>2}],b=e.useMemo(()=>[{label:"Edit",onClick:function(){alert("EDIT CLICK")},show:a!=="undefined"&&Number(a)>0},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")},show:a!=="undefined"&&Number(a)>1}],[a]),n=[{label:"Text link",mIcon:v,href:"https://www.google.com/"},{label:"Text link",mIcon:v,href:"https://www.google.com/"},{label:"Text link",mIcon:v,href:"https://www.google.com/"}],w=[o.jsx("p",{children:"Information"},1),o.jsx("p",{children:"Information"},2),o.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque"},3),o.jsx(k,{attrs:{$linkButton:!0},intent:"secondary",variant:"text",label:n[0].label,mIcon:n[0].mIcon,href:n[0].href,...n[0]},4),o.jsx(k,{attrs:{$linkButton:!0},intent:"secondary",variant:"text",label:n[1].label,mIcon:n[1].mIcon,href:n[1].href,...n[1]},5),o.jsx(k,{attrs:{$linkButton:!0},intent:"secondary",variant:"text",label:n[2].label,mIcon:n[2].mIcon,href:n[2].href,...n[2]},6)],D={checked:g,onClick:y=>{alert(`Star changed to ${y?"checked":"unchecked"}`),u(y)}};return o.jsx(ee,{title:i==="String"?r:o.jsx(ne,{}),onBack:s?()=>alert("Cancelling, going back to previous site"):void 0,backLabel:"Go back",favorite:t&&D,img:x&&"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg",mainActions:l&&m,additionalActions:b,descriptionItems:f&&w})};c.args={titleType:"String",title:"Laudantium est optio voluptas",showBack:!1,img:!1,showFavorite:!0,showMainActions:"3",showAdditionalActions:"2",showDescription:!0};c.argTypes={titleType:{name:"Title Type",options:["String","React Node"],control:{type:"select"}},title:{name:"Title"},showBack:{name:"Show back button"},img:{name:"Show Image"},showFavorite:{name:"Show Favourite"},showMainActions:{name:"Main Action Count",control:{type:"select"},options:["1","2","3","0"]},showAdditionalActions:{name:"Additional Action Count",control:{type:"select"},options:["1","2","0","undefined"]},showDescription:{name:"Description Items"}};var R,T,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`({
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
}`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const oe=["Playground"],ge=Object.freeze(Object.defineProperty({__proto__:null,Playground:c,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{c as P,ge as s};
