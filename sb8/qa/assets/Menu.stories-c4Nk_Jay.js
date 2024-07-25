import{j as i}from"./jsx-runtime-nGUw9YhZ.js";import{d as I}from"./Create-CT6V4C-f.js";import{d as g}from"./Delete-DMwPTIDr.js";import{d as y}from"./CloudDownload-DWjulw-t.js";import{B as d}from"./Button-OJc5Vo8h.js";const h={title:"Components/Menu"},t=[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5"},{label:"Item 6"}],e=({menuItemCount:o,showIcons:p,iconColor:b})=>{const C=t.map((l,f)=>({...l,show:o>=f+1,mIcon:p?I:void 0,color:b,onClick:function(){alert(`Clicked ${l.label}`)}}));return i.jsx(d,{label:"Open",color:"blue",variant:"contained",menuItems:C})};e.args={menuItemCount:t.length,showIcons:!1,iconColor:"black"};e.argTypes={menuItemCount:{name:"Number of menu items to show",control:{type:"range",min:0,max:t.length}},showIcons:{name:"Show Icons"},iconColor:{name:"Icon Color",control:{type:"select"},options:["black","blue","red","yellow","teal","gray","purple"]}};const n=()=>{const o=[{label:"Item A",mIcon:I,onClick:function(){alert("Item A")}},{label:"Item B",color:"blue",mIcon:y,onClick:function(){alert("Item B")}},{label:"Item C",color:"red",mIcon:g,onClick:function(){alert("Item C")}}];return i.jsx(d,{label:"Open",color:"blue",variant:"contained",menuItems:o})};var r,a,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,s,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const k=["Playground","WithIcons"],O=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,WithIcons:n,__namedExportsOrder:k,default:h},Symbol.toStringTag,{value:"Module"}));export{e as P,n as W,O as s};
