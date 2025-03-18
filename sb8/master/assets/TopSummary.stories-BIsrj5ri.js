import{r as x,j as e}from"./jsx-runtime-DiwAibxM.js";import{g as C,r as h}from"./index-Btj5Fd67.js";import{B as u}from"./Button-BzJSDP1S.js";import{r as B}from"./styled-B22bUKEf.js";import{r as L}from"./createSvgIcon-X8Rx5IVC.js";import{E as S}from"./Edit-DPFw01BP.js";import{s as T}from"./styled-components.browser.esm-DIT4wwZk.js";import{t as b}from"./theme-D38K4W-Z.js";import{T as E}from"./TopSummary-C8DCZXx8.js";var c={},k;function N(){if(k)return c;k=1;var o=B();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var i=o(L()),a=x();return c.default=(0,i.default)((0,a.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Mail"),c}var $=N();const f=C($);var l={},g;function R(){if(g)return l;g=1;var o=B();Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=o(L()),a=x();return l.default=(0,i.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39"}),"Public"),l}var O=R();const m=C(O),d=T.p`
    font-family: ${b.museoFont};
    font-weight: ${b.fontWeight.light};
`,Q={title:"Components/TopSummary"},n=({title:o,showBack:i,img:a,showFavorite:A,showMainActions:s,showAdditionalActions:r,showDescription:P})=>{const[_,y]=h.useState(!1),D=[{label:"Button 1",mIcon:f,onClick:()=>alert("Button 1 Click"),color:"black",variant:"text",show:()=>Number(s)>0},{label:"Button 2",mIcon:f,onClick:()=>alert("Button 2 Click"),color:"black",variant:"text",show:()=>Number(s)>1},{label:"Button 3",mIcon:S,onClick:()=>alert("Button 3 Click"),color:"black",variant:"text",show:()=>Number(s)>2}],q=h.useMemo(()=>[{label:"Edit",onClick:function(){alert("EDIT CLICK")},show:r!=="undefined"&&Number(r)>0},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")},show:r!=="undefined"&&Number(r)>1}],[r]),t=[{label:"Text link",mIcon:m,href:"https://www.google.com/"},{label:"Text link",mIcon:m,href:"https://www.google.com/"},{label:"Text link",mIcon:m,href:"https://www.google.com/"}],M=[e.jsx(d,{children:"Information"},1),e.jsx(d,{children:"Information"},2),e.jsx(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque"},3),e.jsx(u,{attrs:{$linkButton:!0},color:"black",variant:"text",label:t[0].label,mIcon:t[0].mIcon,href:t[0].href,...t[0]},4),e.jsx(u,{attrs:{$linkButton:!0},color:"black",variant:"text",label:t[1].label,mIcon:t[1].mIcon,href:t[1].href,...t[1]},5),e.jsx(u,{attrs:{$linkButton:!0},color:"black",variant:"text",label:t[2].label,mIcon:t[2].mIcon,href:t[2].href,...t[2]},6)],j={checked:_,onClick:p=>{alert(`Star changed to ${p?"checked":"unchecked"}`),y(p)}};return e.jsx(E,{title:o,onBack:i?()=>alert("Cancelling, going back to previous site"):void 0,backLabel:"Go back",favorite:A&&j,img:a&&"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg",mainActions:s&&D,additionalActions:q,descriptionItems:P&&M})};n.args={title:"Laudantium est optio voluptas",showBack:!1,img:!1,showFavorite:!0,showMainActions:"3",showAdditionalActions:"2",showDescription:!0};n.argTypes={title:{name:"Title"},showBack:{name:"Show back button"},img:{name:"Show Image"},showFavorite:{name:"Show Favourite"},showMainActions:{name:"Main Action Count",control:{type:"select"},options:["1","2","3","0"]},showAdditionalActions:{name:"Additional Action Count",control:{type:"select"},options:["1","2","0","undefined"]},showDescription:{name:"Description Items"}};var w,v,I;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`({
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
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const F=["Playground"],Y=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:F,default:Q},Symbol.toStringTag,{value:"Module"}));export{n as P,Y as s};
