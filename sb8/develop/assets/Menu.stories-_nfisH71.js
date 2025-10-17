import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as h}from"./index-ePW8zFKp.js";import{C as y}from"./Create-Dh1EPE8A.js";import{D as c}from"./Delete-PukiRK_S.js";import{C as D}from"./CloudDownload-qrIBd4Y2.js";import{B as r}from"./Button-DrJO7SQT.js";import"./Typography-Bs-xuYxw.js";import{D as B}from"./DisplayText-DlqFHcnF.js";const S={title:"Components/Menu",parameters:{layout:"centered"}},s=[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5"},{label:"Item 6"}],n=({menuItemCount:t,showIcons:a,iconColor:m})=>{const x=s.map((i,k)=>({...i,show:t>=k+1,mIcon:a?y:void 0,color:m,onClick:function(){alert(`Clicked ${i.label}`)}}));return e.jsx(r,{label:"Open",intent:"info",variant:"contained",menuItems:x})};n.args={menuItemCount:s.length,showIcons:!1,iconColor:"black"};n.argTypes={menuItemCount:{name:"Number of menu items to show",control:{type:"range",min:0,max:s.length}},showIcons:{name:"Show Icons"},iconColor:{name:"Icon Color",control:{type:"select"},options:["black","blue","red","yellow","teal","gray","purple"]}};const o=()=>{const t=[{label:"Item A",mIcon:y,color:"black",onClick:function(){alert("Item A")}},{label:"Item B",color:"gold",mIcon:D,onClick:function(){alert("Item B")}},{label:"Item C",color:"gray",mIcon:c,onClick:function(){alert("Item C")}},{label:"Item D",color:"red",mIcon:c,onClick:function(){alert("Item D")}},{label:"Item E",color:"teal",mIcon:c,onClick:function(){alert("Item E")}}];return e.jsx(r,{label:"Open",intent:"info",variant:"contained",menuItems:t})},l=()=>{const[t,a]=h.useState(""),m=[{label:"Item A",value:"item1"},{label:"Item B",color:"teal",value:"item2"},{label:"Item C",color:"red",value:"item3"}];return e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",gap:8},children:[e.jsxs(B,{children:["Current value:"," ",t||"Not set"]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{label:"Set Value",intent:"info",variant:"contained",menuItems:m,menuOnChange:a,menuValue:t}),e.jsx(r,{label:"Clear",intent:"danger",variant:"contained",onClick:()=>a("")})]})]})};var u,I,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(d=(I=n.parameters)==null?void 0:I.docs)==null?void 0:d.source}}};var p,b,C;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`(): ReactElement => {
  const menuItems: ButtonProps["menuItems"] = [{
    label: "Item A",
    mIcon: CreateIcon,
    color: "black",
    onClick: function () {
      alert("Item A");
    }
  }, {
    label: "Item B",
    color: "gold",
    mIcon: CloudDownloadIcon,
    onClick: function () {
      alert("Item B");
    }
  }, {
    label: "Item C",
    color: "gray",
    mIcon: DeleteIcon,
    onClick: function () {
      alert("Item C");
    }
  }, {
    label: "Item D",
    color: "red",
    mIcon: DeleteIcon,
    onClick: function () {
      alert("Item D");
    }
  }, {
    label: "Item E",
    color: "teal",
    mIcon: DeleteIcon,
    onClick: function () {
      alert("Item E");
    }
  }];
  return <Button label="Open" intent="info" variant="contained" menuItems={menuItems} />;
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,v,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(): ReactElement => {
  const [value, setValue] = useState("");
  const menuItems: ButtonProps["menuItems"] = [{
    label: "Item A",
    value: "item1"
  }, {
    label: "Item B",
    color: "teal",
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
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const j=["Playground","WithIcons","Selectable"],R=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,Selectable:l,WithIcons:o,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{n as P,o as W,R as s};
