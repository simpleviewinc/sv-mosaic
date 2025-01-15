import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as h}from"./index-BP8_t0zE.js";import{d as y}from"./Create-CpnV7q0W.js";import{d as B}from"./Delete-Bd9yuHmM.js";import{d as k}from"./CloudDownload-BiNecmWM.js";import{B as r}from"./Button-DuMlbF8s.js";import{T as S}from"./Typography-Br_RMLnS.js";const j={title:"Components/Menu",parameters:{layout:"centered"}},s=[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5"},{label:"Item 6"}],n=({menuItemCount:t,showIcons:a,iconColor:m})=>{const g=s.map((c,x)=>({...c,show:t>=x+1,mIcon:a?y:void 0,color:m,onClick:function(){alert(`Clicked ${c.label}`)}}));return e.jsx(r,{label:"Open",color:"blue",variant:"contained",menuItems:g})};n.args={menuItemCount:s.length,showIcons:!1,iconColor:"black"};n.argTypes={menuItemCount:{name:"Number of menu items to show",control:{type:"range",min:0,max:s.length}},showIcons:{name:"Show Icons"},iconColor:{name:"Icon Color",control:{type:"select"},options:["black","blue","red","yellow","teal","gray","purple"]}};const o=()=>{const t=[{label:"Item A",mIcon:y,onClick:function(){alert("Item A")}},{label:"Item B",color:"blue",mIcon:k,onClick:function(){alert("Item B")}},{label:"Item C",color:"red",mIcon:B,onClick:function(){alert("Item C")}}];return e.jsx(r,{label:"Open",color:"blue",variant:"contained",menuItems:t})},l=()=>{const[t,a]=h.useState(""),m=[{label:"Item A",value:"item1"},{label:"Item B",color:"blue",value:"item2"},{label:"Item C",color:"red",value:"item3"}];return e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",gap:8},children:[e.jsxs(S,{variant:"title",children:["Current value:",t||"Not set"]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{label:"Set Value",color:"blue",variant:"contained",menuItems:m,menuOnChange:a,menuValue:t}),e.jsx(r,{label:"CLear",color:"red",variant:"contained",onClick:()=>a("")})]})]})};var u,i,I;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
  return <Button label="Open" color="blue" variant="contained" menuItems={menuItems} />;
}`,...(I=(i=n.parameters)==null?void 0:i.docs)==null?void 0:I.source}}};var d,p,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`(): ReactElement => {
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
  return <Button label="Open" color="blue" variant="contained" menuItems={menuItems} />;
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var C,v,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
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
            <Typography variant="title">
                Current value:
                {value || "Not set"}
            </Typography>
            <div style={{
      display: "flex",
      gap: 8
    }}>
                <Button label="Set Value" color="blue" variant="contained" menuItems={menuItems} menuOnChange={setValue} menuValue={value} />
                <Button label="CLear" color="red" variant="contained" onClick={() => setValue("")} />
            </div>
        </div>;
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const w=["Playground","WithIcons","Selectable"],D=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,Selectable:l,WithIcons:o,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{n as P,o as W,D as s};
