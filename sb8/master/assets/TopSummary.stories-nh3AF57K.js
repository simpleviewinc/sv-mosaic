import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as i}from"./index-BP8_t0zE.js";import{B as h}from"./Button-BBNnoZZP.js";import{r as M,i as P}from"./createSvgIcon-DQitHYV2.js";import{d as E}from"./Edit-CLLkdxQ3.js";import{s as O}from"./styled-components.browser.esm-8MQ3dTkk.js";import{s,t as l}from"./theme-CtvfJOCv.js";import{d as z}from"./MoreVert-DQju6pbX.js";import{r as T,i as R}from"./createSvgIcon-CQgce1KM.js";import{I as F}from"./Image-DvId9fRZ.js";import{T as Q}from"./TitleWrapper-DkQZJitR.js";import{B}from"./ButtonRow-BZVmEtFA.js";import{u as K}from"./useToggle-lipGlewK.js";import{t as W}from"./testIds-B75WQI-K.js";var C={},H=P;Object.defineProperty(C,"__esModule",{value:!0});var I=C.default=void 0,V=H(M()),G=e,U=(0,V.default)((0,G.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");I=C.default=U;var _={},Y=P;Object.defineProperty(_,"__esModule",{value:!0});var f=_.default=void 0,J=Y(M()),X=e,Z=(0,J.default)((0,X.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public");f=_.default=Z;const ee=s.div`
  background: white;
  border-bottom: 2px solid ${l.newColors.grey2[100]};
  color: ${l.newColors.almostBlack[100]};
  font-family: ${l.fontFamily};
  padding: 24px 24px 16px 24px;
  display: flex;
  gap: 24px;
  align-items: center;

  .img-rounded {
    width: 71px;
    height: 71px;
    border: 2px solid ${l.newColors.grey2[100]};
    border-radius: 50%;
    opacity: 1;
  }
`,te=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
`,ne=s.div`
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
`,$=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;s.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  div:last-child {
    border: none;
  }
`;const oe=s.div`
  & p,
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin: 0px;
    font-size: 14px;
    max-width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;var y={},ae=R;Object.defineProperty(y,"__esModule",{value:!0});var q=y.default=void 0,ie=ae(T()),re=e,le=(0,ie.default)((0,re.jsx)("path",{d:"m14.43 10-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"}),"StarRateRounded");q=y.default=le;var A={},se=R;Object.defineProperty(A,"__esModule",{value:!0});var N=A.default=void 0,ce=se(T()),de=e,ue=(0,ce.default)((0,de.jsx)("path",{d:"m19.65 9.04-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorderRounded");N=A.default=ue;const me=a=>{const{title:k,onBack:b,backLabel:x,favorite:t,img:o,descriptionItems:m}=a,p=i.useMemo(()=>a.mainActions||[],[a.mainActions]),g=i.useMemo(()=>a.additionalActions||[],[a.additionalActions]),c=K(g,"show"),d=i.useMemo(()=>c.length>0?{color:"black",variant:"icon",label:"Edit",mIcon:z,menuItems:c,muiAttrs:{"data-testid":"btn-additional-action"}}:null,[c]),n=i.useMemo(()=>[...p.map(u=>({...u,attrs:{$smallText:!0},size:"small",muiAttrs:{"data-testid":"btn-main-action"}})),...d?[d]:[]],[p,d]);return e.jsxs(ee,{"data-testid":W.TOP_SUMMARY,children:[o&&e.jsx(F,{className:"img-rounded",src:o}),e.jsxs(te,{children:[e.jsxs($,{children:[e.jsxs(ne,{children:[e.jsx(Q,{title:k,onBack:b,backLabel:x}),t&&e.jsx(e.Fragment,{children:e.jsx(h,{className:`${t!=null&&t.checked?"checked":"unchecked"}`,color:`${t!=null&&t.checked?"yellow":"gray"}`,variant:"icon",mIcon:t!=null&&t.checked?q:N,onClick:()=>t.onClick(!(t!=null&&t.checked))})})]}),e.jsx(B,{separator:!0,wrap:!0,buttons:n})]}),e.jsx($,{children:m&&e.jsx(B,{separator:!0,wrap:!0,children:m.map((u,w)=>e.jsx(oe,{"data-testid":"description-item",children:u},w))})})]})]})},pe=i.memo(me),v=O.p`
    font-family: ${l.museoFont};
    font-weight: ${l.fontWeight.light};
`,he={title:"Components/TopSummary"},r=({title:a,showBack:k,img:b,showFavorite:x,showMainActions:t,showAdditionalActions:o,showDescription:m})=>{const[p,g]=i.useState(!1),c=[{label:"Button 1",mIcon:I,onClick:()=>alert("Button 1 Click"),color:"black",variant:"text",show:()=>Number(t)>0},{label:"Button 2",mIcon:I,onClick:()=>alert("Button 2 Click"),color:"black",variant:"text",show:()=>Number(t)>1},{label:"Button 3",mIcon:E,onClick:()=>alert("Button 3 Click"),color:"black",variant:"text",show:()=>Number(t)>2}],d=i.useMemo(()=>[{label:"Edit",onClick:function(){alert("EDIT CLICK")},show:o!=="undefined"&&Number(o)>0},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")},show:o!=="undefined"&&Number(o)>1}],[o]),n=[{label:"Text link",mIcon:f,href:"https://www.google.com/"},{label:"Text link",mIcon:f,href:"https://www.google.com/"},{label:"Text link",mIcon:f,href:"https://www.google.com/"}],u=[e.jsx(v,{children:"Information"},1),e.jsx(v,{children:"Information"},2),e.jsx(v,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque"},3),e.jsx(h,{attrs:{$linkButton:!0},color:"black",variant:"text",label:n[0].label,mIcon:n[0].mIcon,href:n[0].href,...n[0]},4),e.jsx(h,{attrs:{$linkButton:!0},color:"black",variant:"text",label:n[1].label,mIcon:n[1].mIcon,href:n[1].href,...n[1]},5),e.jsx(h,{attrs:{$linkButton:!0},color:"black",variant:"text",label:n[2].label,mIcon:n[2].mIcon,href:n[2].href,...n[2]},6)],w={checked:p,onClick:j=>{alert(`Star changed to ${j?"checked":"unchecked"}`),g(j)}};return e.jsx(pe,{title:a,onBack:k?()=>alert("Cancelling, going back to previous site"):void 0,backLabel:"Go back",favorite:x&&w,img:b&&"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg",mainActions:t&&c,additionalActions:d,descriptionItems:m&&u})};r.args={title:"Laudantium est optio voluptas",showBack:!1,img:!1,showFavorite:!0,showMainActions:"3",showAdditionalActions:"2",showDescription:!0};r.argTypes={title:{name:"Title"},showBack:{name:"Show back button"},img:{name:"Show Image"},showFavorite:{name:"Show Favourite"},showMainActions:{name:"Main Action Count",control:{type:"select"},options:["1","2","3","0"]},showAdditionalActions:{name:"Additional Action Count",control:{type:"select"},options:["1","2","0","undefined"]},showDescription:{name:"Description Items"}};var L,S,D;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
    color: "black",
    variant: "text",
    show: () => Number(showMainActions) > 0
  }, {
    label: "Button 2",
    mIcon: Mail,
    onClick: () => alert("Button 2 Click"),
    color: "black",
    variant: "text",
    show: () => Number(showMainActions) > 1
  }, {
    label: "Button 3",
    mIcon: Edit,
    onClick: () => alert("Button 3 Click"),
    color: "black",
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
  const descriptionItems = [<DescriptionItemParagraph key={1}>Information</DescriptionItemParagraph>, <DescriptionItemParagraph key={2}>Information</DescriptionItemParagraph>, <DescriptionItemParagraph key={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque</DescriptionItemParagraph>, <Button key={4} attrs={{
    $linkButton: true
  }} color="black" variant="text" label={textLinks[0].label} mIcon={textLinks[0].mIcon} href={textLinks[0].href} {...textLinks[0]} />, <Button key={5} attrs={{
    $linkButton: true
  }} color="black" variant="text" label={textLinks[1].label} mIcon={textLinks[1].mIcon} href={textLinks[1].href} {...textLinks[1]} />, <Button key={6} attrs={{
    $linkButton: true
  }} color="black" variant="text" label={textLinks[2].label} mIcon={textLinks[2].mIcon} href={textLinks[2].href} {...textLinks[2]} />];
  const favorite = {
    checked: checked,
    onClick: val => {
      alert(\`Star changed to \${val ? "checked" : "unchecked"}\`);
      setChecked(val);
    }
  };
  return <TopSummary title={title} onBack={showBack ? () => alert("Cancelling, going back to previous site") : undefined} backLabel="Go back" favorite={showFavorite && favorite} img={img && "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg"} mainActions={showMainActions && mainActions} additionalActions={additionalActions} descriptionItems={showDescription && descriptionItems} />;
}`,...(D=(S=r.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const fe=["Playground"],Le=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:fe,default:he},Symbol.toStringTag,{value:"Module"}));export{r as P,Le as s};
