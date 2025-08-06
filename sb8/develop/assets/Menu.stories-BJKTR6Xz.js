import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as h}from"./index-D0AnReJb.js";import{C as g}from"./Create-CiSRifbU.js";import{D as B}from"./Delete-uzHJ4pI6.js";import{C as k}from"./CloudDownload-D9naCuWK.js";import{B as r}from"./Button-BdEZ7jiv.js";import"./Typography-CZQzWHyE.js";import{D as S}from"./DisplayText-DLjAy6kH.js";const j={title:"Components/Menu",parameters:{layout:"centered"}},m=[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5"},{label:"Item 6"}],n=({menuItemCount:t,showIcons:a,iconColor:s})=>{const y=m.map((c,x)=>({...c,show:t>=x+1,mIcon:a?g:void 0,color:s,onClick:function(){alert(`Clicked ${c.label}`)}}));return e.jsx(r,{label:"Open",intent:"info",variant:"contained",menuItems:y})};n.args={menuItemCount:m.length,showIcons:!1,iconColor:"black"};n.argTypes={menuItemCount:{name:"Number of menu items to show",control:{type:"range",min:0,max:m.length}},showIcons:{name:"Show Icons"},iconColor:{name:"Icon Color",control:{type:"select"},options:["black","blue","red","yellow","teal","gray","purple"]}};const o=()=>{const t=[{label:"Item A",mIcon:g,onClick:function(){alert("Item A")}},{label:"Item B",color:"blue",mIcon:k,onClick:function(){alert("Item B")}},{label:"Item C",color:"red",mIcon:B,onClick:function(){alert("Item C")}}];return e.jsx(r,{label:"Open",intent:"info",variant:"contained",menuItems:t})},l=()=>{const[t,a]=h.useState(""),s=[{label:"Item A",value:"item1"},{label:"Item B",color:"blue",value:"item2"},{label:"Item C",color:"red",value:"item3"}];return e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",gap:8},children:[e.jsxs(S,{children:["Current value:"," ",t||"Not set"]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{label:"Set Value",intent:"info",variant:"contained",menuItems:s,menuOnChange:a,menuValue:t}),e.jsx(r,{label:"Clear",intent:"danger",variant:"contained",onClick:()=>a("")})]})]})};var i,u,I;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`({
  menuItemCount,
  showIcons,
  iconColor
}: typeof Playground.args): ReactElement => {
  const menuItems: ButtonProps["menuItems"] = menuItemsLibrary.map((val, index) => {
    return {
      ...val,
      show: menuItemCount >= index + 1,
      mIcon: showIcons ? CreateIcon : undefined,
      color: iconColor,
      onClick: function () {
        alert(\`Clicked \${val.label}\`);
      }
    };
  });
  return <Button label="Open" intent="info" variant="contained" menuItems={menuItems} />;
}`,...(I=(u=n.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var d,p,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`(): ReactElement => {
  const menuItems: ButtonProps["menuItems"] = [{
    label: "Item A",
    mIcon: CreateIcon,
    onClick: function () {
      alert("Item A");
    }
  }, {
    label: "Item B",
    color: "blue",
    mIcon: CloudDownloadIcon,
    onClick: function () {
      alert("Item B");
    }
  }, {
    label: "Item C",
    color: "red",
    mIcon: DeleteIcon,
    onClick: function () {
      alert("Item C");
    }
  }];
  return <Button label="Open" intent="info" variant="contained" menuItems={menuItems} />;
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var C,f,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
  const [value, setValue] = useState("");
  const menuItems: ButtonProps["menuItems"] = [{
    label: "Item A",
    value: "item1"
  }, {
    label: "Item B",
    color: "blue",
    value: "item2"
  }, {
    label: "Item C",
    color: "red",
    value: "item3"
  }];
  return <div style={{
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 8
  }}>
            <DisplayText>
                Current value:
                {" "}
                {value || "Not set"}
            </DisplayText>
            <div style={{
      display: "flex",
      gap: 8
    }}>
                <Button label="Set Value" intent="info" variant="contained" menuItems={menuItems} menuOnChange={setValue} menuValue={value} />
                <Button label="Clear" intent="danger" variant="contained" onClick={() => setValue("")} />
            </div>
        </div>;
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const w=["Playground","WithIcons","Selectable"],R=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,Selectable:l,WithIcons:o,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{n as P,o as W,R as s};
