import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{s as m}from"./styled-components.browser.esm-C-l0uCre.js";import{C as l}from"./Chip-CJpy9ewu.js";import{t as C}from"./theme-tUuL1bpb.js";import"./index-CDs2tPxN.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useThemeProps-DZj2lB8w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";const N={title:"Components/Chip"},f=m.div`
    font-family: ${C.fontFamily};
`,i=({deletable:a,clickable:h,label:n,disabled:s,selected:r})=>a?e.jsx(l,{label:n,disabled:s,selected:r,onDelete:()=>alert("Deleted")}):e.jsx(l,{label:n,disabled:s,selected:r,onClick:h?()=>alert("onClick"):null});i.args={deletable:!1,clickable:!1,label:"Label",disabled:!1,selected:!1};const t=()=>{const a=()=>{alert("Clicked on delete icon")};return e.jsxs(f,{children:[e.jsx("h1",{children:"Chip"}),e.jsx("h2",{children:"Basic Chip with onClick"}),e.jsx(l,{label:"Label",disabled:!1,onClick:()=>alert("onClick")}),e.jsx(l,{label:"Label",disabled:!1,selected:!0,onClick:()=>alert("onClick")}),e.jsx("h2",{children:"Basic Chip without onClick"}),e.jsx(l,{label:"Label",disabled:!1}),e.jsx(l,{label:"Label",disabled:!1,selected:!0}),e.jsx("h2",{children:"Deletable Chip"}),e.jsx(l,{label:"Label",disabled:!1,onDelete:a}),e.jsx("h2",{children:"Disabled"}),e.jsx(l,{label:"Label",disabled:!0}),e.jsx(l,{label:"Label",selected:!0,disabled:!0}),e.jsx("h2",{children:"Chip with very long text"}),e.jsx(l,{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien purus, condimentum nec fringilla porttitor, bibendum vitae odio. Etiam tincidunt id ante eu cursus.",selected:!0,onDelete:a}),e.jsx(l,{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien purus, condimentum nec fringilla porttitor, bibendum vitae odio. Etiam tincidunt id ante eu cursus."})]})};i.__docgenInfo={description:"",methods:[],displayName:"Playground"};t.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var o,d,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`({
  deletable,
  clickable,
  label,
  disabled,
  selected
}: typeof Playground.args): ReactElement => {
  return deletable ? <Chip label={label} disabled={disabled} selected={selected} onDelete={() => alert("Deleted")} /> : <Chip label={label} disabled={disabled} selected={selected} onClick={clickable ? () => alert("onClick") : null} />;
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`(): ReactElement => {
  const handleDelete = () => {
    alert("Clicked on delete icon");
  };
  return <KitchenSinkContainerChip>
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
        </KitchenSinkContainerChip>;
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const F=["Playground","KitchenSink"];export{t as KitchenSink,i as Playground,F as __namedExportsOrder,N as default};
