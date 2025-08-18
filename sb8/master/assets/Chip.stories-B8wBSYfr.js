import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{C as l}from"./Chip-CpsUtANy.js";import{u as k}from"./useStretchedWidthStory-CuY1g7oB.js";const x={title:"Components/Chip",parameters:{layout:"centered"}},i=({variant:t,deletable:h,clickable:p,label:m,disabled:C,selected:f,fullWidth:n})=>{k(n);const s={variant:t==="Undefined"?void 0:t,label:m,disabled:C,selected:f,fullWidth:n};return h?e.jsx(l,{...s,onDelete:()=>alert("Deleted")}):e.jsx(l,{...s,onClick:p?()=>alert("onClick"):null})};i.args={variant:"Undefined",deletable:!1,clickable:!1,label:"Label",disabled:!1,selected:!1,fullWidth:!1};i.argTypes={variant:{name:"Variant",options:["Undefined","primary","secondary","tertiary"],control:{type:"select"}},deletable:{name:"Deletable"},clickable:{name:"Clickable"},label:{name:"Label"},disabled:{name:"Disabled"},selected:{name:"Selected"},fullWidth:{name:"Full Width"}};const a=()=>{const t=()=>{alert("Clicked on delete icon")};return e.jsxs("div",{children:[e.jsx("h1",{children:"Chip"}),e.jsx("h2",{children:"Basic Chip with onClick"}),e.jsx(l,{label:"Label",disabled:!1,onClick:()=>alert("onClick")}),e.jsx(l,{label:"Label",disabled:!1,selected:!0,onClick:()=>alert("onClick")}),e.jsx("h2",{children:"Basic Chip without onClick"}),e.jsx(l,{label:"Label",disabled:!1}),e.jsx(l,{label:"Label",disabled:!1,selected:!0}),e.jsx("h2",{children:"Deletable Chip"}),e.jsx(l,{label:"Label",disabled:!1,onDelete:t}),e.jsx("h2",{children:"Disabled"}),e.jsx(l,{label:"Label",disabled:!0}),e.jsx(l,{label:"Label",selected:!0,disabled:!0}),e.jsx("h2",{children:"Chip with very long text"}),e.jsx(l,{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien purus, condimentum nec fringilla porttitor, bibendum vitae odio. Etiam tincidunt id ante eu cursus.",selected:!0,onDelete:t}),e.jsx(l,{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien purus, condimentum nec fringilla porttitor, bibendum vitae odio. Etiam tincidunt id ante eu cursus."})]})};var r,d,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`({
  variant,
  deletable,
  clickable,
  label,
  disabled,
  selected,
  fullWidth
}: typeof Playground.args): ReactElement => {
  useStretchedWidthStory(fullWidth);
  const common = {
    variant: variant === "Undefined" ? undefined : variant,
    label,
    disabled,
    selected,
    fullWidth
  };
  return deletable ? <Chip {...common} onDelete={() => alert("Deleted")} /> : <Chip {...common} onClick={clickable ? () => alert("onClick") : null} />;
}`,...(o=(d=i.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var c,u,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
  const handleDelete = () => {
    alert("Clicked on delete icon");
  };
  return <div>
            <h1>Chip</h1>
            <h2>Basic Chip with onClick</h2>
            <Chip label="Label" disabled={false} onClick={() => alert("onClick")} />
            <Chip label="Label" disabled={false} selected={true} onClick={() => alert("onClick")} />
            <h2>Basic Chip without onClick</h2>
            <Chip label="Label" disabled={false} />
            <Chip label="Label" disabled={false} selected={true} />
            <h2>Deletable Chip</h2>
            <Chip label="Label" disabled={false} onDelete={handleDelete} />
            <h2>Disabled</h2>
            <Chip label="Label" disabled={true} />
            <Chip label="Label" selected={true} disabled={true} />
            <h2>Chip with very long text</h2>
            <Chip label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien purus, condimentum nec fringilla porttitor, bibendum vitae odio. Etiam tincidunt id ante eu cursus." selected={true} onDelete={handleDelete} />
            <Chip label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien purus, condimentum nec fringilla porttitor, bibendum vitae odio. Etiam tincidunt id ante eu cursus." />
        </div>;
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const j=["Playground","KitchenSink"],v=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:a,Playground:i,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{i as P,v as s};
