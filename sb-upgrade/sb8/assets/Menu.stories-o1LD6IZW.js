import{j as u}from"./jsx-runtime-qGIIFXMu.js";import{d as b}from"./Create-oJ86cL9r.js";import{d as f}from"./Delete-DW5ub3Hx.js";import{d as C}from"./CloudDownload-DDjM78dA.js";import{B as I}from"./Button-B_QyrzNG.js";import"./index-CDs2tPxN.js";import"./createSvgIcon-Ci5omaqv.js";import"./extends-CF3RwP-h.js";import"./styled-P6hUx81_.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./theme-tUuL1bpb.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";const S={title:"Components/Menu"},o=[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5"},{label:"Item 6"}],e=({menuItemCount:t})=>{const p=o.map((r,d)=>({...r,show:t>=d+1,onClick:function(){alert(`Clicked ${r.label}`)}}));return u.jsx(I,{label:"Open",color:"blue",variant:"contained",menuItems:p})};e.args={menuItemCount:o.length};e.argTypes={menuItemCount:{name:"Number of menu items to show",control:{type:"range",min:0,max:o.length}}};const n=()=>{const t=[{label:"Item A",mIcon:b,onClick:function(){alert("Item A")}},{label:"Item B",color:"blue",mIcon:C,onClick:function(){alert("Item B")}},{label:"Item C",color:"red",mIcon:f,onClick:function(){alert("Item C")}}];return u.jsx(I,{label:"Open",color:"blue",variant:"contained",menuItems:t})};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};n.__docgenInfo={description:"",methods:[],displayName:"withIcons"};var m,a,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var s,c,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const T=["Playground","withIcons"];export{e as Playground,T as __namedExportsOrder,S as default,n as withIcons};
