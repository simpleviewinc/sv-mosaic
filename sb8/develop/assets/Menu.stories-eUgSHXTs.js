import{j as i}from"./jsx-runtime-nGUw9YhZ.js";import{d as p}from"./Create-CT6V4C-f.js";import{d as f}from"./Delete-DMwPTIDr.js";import{d as C}from"./CloudDownload-DWjulw-t.js";import{B as I}from"./Button-uCo3N7IM.js";const g={title:"Components/Menu"},o=[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5"},{label:"Item 6"}],e=({menuItemCount:t})=>{const d=o.map((r,b)=>({...r,show:t>=b+1,onClick:function(){alert(`Clicked ${r.label}`)}}));return i.jsx(I,{label:"Open",color:"blue",variant:"contained",menuItems:d})};e.args={menuItemCount:o.length};e.argTypes={menuItemCount:{name:"Number of menu items to show",control:{type:"range",min:0,max:o.length}}};const n=()=>{const t=[{label:"Item A",mIcon:p,onClick:function(){alert("Item A")}},{label:"Item B",color:"blue",mIcon:C,onClick:function(){alert("Item B")}},{label:"Item C",color:"red",mIcon:f,onClick:function(){alert("Item C")}}];return i.jsx(I,{label:"Open",color:"blue",variant:"contained",menuItems:t})};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  menuItemCount
}: typeof Playground.args): ReactElement => {
  const menuItems: ButtonProps["menuItems"] = menuItemsLibrary.map((val, index) => {
    return {
      ...val,
      show: menuItemCount >= index + 1,
      onClick: function () {
        alert(\`Clicked \${val.label}\`);
      }
    };
  });
  return <Button label="Open" color="blue" variant="contained" menuItems={menuItems} />;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var s,c,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const k=["Playground","WithIcons"],v=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,WithIcons:n,__namedExportsOrder:k,default:g},Symbol.toStringTag,{value:"Module"}));export{e as P,n as W,v as s};
