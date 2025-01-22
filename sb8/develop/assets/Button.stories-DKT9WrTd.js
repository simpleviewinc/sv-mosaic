import{r as p,j as o}from"./jsx-runtime-DKBipoO1.js";import{g as j,r as to}from"./index-P8U4y8pz.js";import{B as l}from"./Button-BBMCWwxG.js";import{C as r}from"./Create-DJ69M9qa.js";import{D as s}from"./Delete-Cax0v_wN.js";import{A as e}from"./Add-lnUrTMVS.js";import{C as d}from"./CloudDownload-DYAcdfzo.js";import{r as B}from"./styled-D3QUOaTt.js";import{r as w}from"./createSvgIcon-C4HEQ44R.js";import{H as O}from"./Help-9koMtQrv.js";import{B as a}from"./ButtonRow-BY0Hsyx3.js";import{u as ao}from"./useToggle-L-Qovzra.js";import{b as co,c as io,a as ro,t as so}from"./toggleOptions-1cXvXfFl.js";var k={},R;function uo(){if(R)return k;R=1;var i=B();Object.defineProperty(k,"__esModule",{value:!0}),k.default=void 0;var n=i(w()),t=p();return k.default=(0,n.default)((0,t.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz"),k}var vo=uo();const c=j(vo);var I={},L;function bo(){if(L)return I;L=1;var i=B();Object.defineProperty(I,"__esModule",{value:!0}),I.default=void 0;var n=i(w()),t=p();return I.default=(0,n.default)((0,t.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),I}var ko=bo();const u=j(ko);var C={},E;function Io(){if(E)return C;E=1;var i=B();Object.defineProperty(C,"__esModule",{value:!0}),C.default=void 0;var n=i(w()),t=p();return C.default=(0,n.default)((0,t.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMoreOutlined"),C}var Co=Io();const D=j(Co);var m={},M;function mo(){if(M)return m;M=1;var i=B();Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var n=i(w()),t=p();return m.default=(0,n.default)((0,t.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"}),"FormatListBulletedOutlined"),m}var xo=mo();const H=j(xo);var x={},P;function ho(){if(P)return x;P=1;var i=B();Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var n=i(w()),t=p();return x.default=(0,n.default)((0,t.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z"}),"GridOnOutlined"),x}var po=ho();const y=j(po),jo={title:"Components/Button"},S=[{label:"Edit",mIcon:r,onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:d,onClick:function(){alert("DOWNLOAD CLICK")}}],v=({backgroundColor:i,buttonColor:n,buttonVariant:t,disabled:f,fullWidth:g,href:b,iconColor:V,iconPosition:G,label:N,labelText:J,menuItems:U,popover:X,popoverEvent:Q,show:Y,showIcon:Z,size:oo,smallText:lo,tooltip:T})=>{const A=t==="icon"||Z,z=T?T==="string"?"Tooltip string":o.jsx("h2",{children:"Tooltip as an H2"}):void 0,no={name:"show",onClick:()=>alert("Clicked"),show:so[Y],color:n,variant:t},eo=ao(no,"show");return o.jsx("div",{style:{backgroundColor:i==="light"?"white":"#333",padding:20},children:eo&&o.jsx(l,{attrs:{$smallText:lo},label:N==="String"?J:o.jsx(H,{}),variant:t,color:n,fullWidth:g,disabled:co[f],tooltip:z,size:oo,mIcon:A&&e,mIconColor:A&&V,href:b?"https://www.google.com/":null,iconPosition:G,popover:X&&!z&&o.jsx("p",{children:"Popover Content"}),popoverEvent:Q,menuItems:U&&S})})};v.args={backgroundColor:"light",buttonColor:"black",buttonVariant:"contained",disabled:"Undefined",fullWidth:!1,href:!1,iconColor:"",iconPosition:"left",label:"String",labelText:"Text",menuItems:!1,popover:!1,popoverEvent:"onClick",show:"Undefined",showIcon:!1,size:"medium",smallText:!1,tooltip:null};v.argTypes={backgroundColor:{options:["light","dark"],control:{type:"select"},name:"Background Color"},buttonColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Color"},buttonVariant:{options:["text","outlined","contained","icon"],control:{type:"select"},name:"Variant"},disabled:{options:io,control:{type:"select"},name:"Disabled"},fullWidth:{name:"Full Width"},href:{name:"URL (href)"},iconColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Icon Color"},iconPosition:{options:["left","right"],control:{type:"select"},name:"Icon Position"},label:{options:["String","JSX"],control:{type:"select"},name:"Label"},labelText:{name:"Label Text"},menuItems:{name:"Menu Items"},popover:{name:"Popover"},popoverEvent:{options:["onClick","onHover"],control:{type:"select"},name:"Popover Event"},show:{options:ro,control:{type:"select"},name:"Show"},showIcon:{name:"Show Icon"},size:{options:["small","medium"],control:{type:"select"},name:"Size"},smallText:{name:"Small Text"},tooltip:{options:["string","JSX",null],control:{type:"select"},name:"Tooltip"}};const h=()=>{const[,i]=to.useState(null);function n(){alert("yes")}const t=function(b){i(b.currentTarget)},f=[{label:"Edit",mIcon:r,color:"blue",onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:d,color:"blue",onClick:function(){alert("DOWNLOAD CLICK")}},{label:"Delete",mIcon:s,color:"red",onClick:function(){alert("DELETE CLICK")}},{label:"Cancel",mIcon:u,onClick:function(){alert("CANCEL CLICK")}}],g=[{label:"Edit",onClick:function(){alert("EDIT CLICK")}},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")}}];return o.jsxs("div",{children:[o.jsx("h1",{children:"Buttons!"}),o.jsx("h2",{children:"Contained"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"contained",label:"Save",onClick:n}),o.jsx(l,{color:"blue",variant:"contained",label:"Save",mIcon:e,onClick:n}),o.jsx(l,{color:"lightBlue",variant:"contained",label:"Save",onClick:n}),o.jsx(l,{color:"lightBlue",variant:"contained",label:"Save",mIcon:e,onClick:n}),o.jsx(l,{color:"red",variant:"contained",label:"Delete",onClick:n}),o.jsx(l,{color:"red",variant:"contained",label:"Delete",mIcon:s,onClick:n}),o.jsx(l,{color:"black",variant:"contained",label:"Cancel",onClick:n}),o.jsx(l,{color:"black",variant:"contained",label:"Cancel",mIcon:u,onClick:n}),o.jsx(l,{color:"yellow",variant:"contained",label:"Save",onClick:n}),o.jsx(l,{color:"yellow",variant:"contained",label:"Add",mIcon:e,onClick:n})]})}),o.jsx("h2",{children:"Contained - disabled"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"contained",disabled:!0,label:"Save",onClick:n}),o.jsx(l,{color:"blue",variant:"contained",disabled:!0,label:"Save",mIcon:e,onClick:n}),o.jsx(l,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",onClick:n}),o.jsx(l,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",mIcon:e,onClick:n}),o.jsx(l,{color:"red",variant:"contained",disabled:!0,label:"Delete",onClick:n}),o.jsx(l,{color:"red",variant:"contained",disabled:!0,label:"Delete",mIcon:s,onClick:n}),o.jsx(l,{color:"black",variant:"contained",disabled:!0,label:"Cancel",onClick:n}),o.jsx(l,{color:"black",variant:"contained",disabled:!0,label:"Cancel",mIcon:u,onClick:n}),o.jsx(l,{color:"yellow",variant:"contained",disabled:!0,label:"Save",onClick:n}),o.jsx(l,{color:"yellow",variant:"contained",disabled:!0,label:"Add",mIcon:e,onClick:n})]})}),o.jsx("h2",{children:"Outlined"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"outlined",label:"Save",onClick:n}),o.jsx(l,{color:"blue",variant:"outlined",label:"Save",mIcon:e,onClick:n}),o.jsx(l,{color:"red",variant:"outlined",label:"Delete",onClick:n}),o.jsx(l,{color:"red",variant:"outlined",label:"Delete",mIcon:s,onClick:n}),o.jsx(l,{color:"black",variant:"outlined",label:"Cancel",onClick:n}),o.jsx(l,{color:"black",variant:"outlined",label:"Cancel",mIcon:u,onClick:n}),o.jsx(l,{color:"gray",variant:"outlined",label:"Save",onClick:n}),o.jsx(l,{color:"gray",variant:"outlined",label:"Add",mIcon:e,onClick:n}),o.jsx(l,{color:"teal",variant:"outlined",label:"Save",onClick:n}),o.jsx(l,{color:"teal",variant:"outlined",label:"Add",mIcon:e,onClick:n})]})}),o.jsx("h2",{children:"Outlined - disabled"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"outlined",disabled:!0,label:"Save",onClick:n}),o.jsx(l,{color:"blue",variant:"outlined",disabled:!0,label:"Save",mIcon:e,onClick:n}),o.jsx(l,{color:"red",variant:"outlined",disabled:!0,label:"Delete",onClick:n}),o.jsx(l,{color:"red",variant:"outlined",disabled:!0,label:"Delete",mIcon:s,onClick:n}),o.jsx(l,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",onClick:n}),o.jsx(l,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",mIcon:u,onClick:n}),o.jsx(l,{color:"gray",variant:"outlined",disabled:!0,label:"Save",onClick:n}),o.jsx(l,{color:"gray",variant:"outlined",disabled:!0,label:"Add",mIcon:e,onClick:n}),o.jsx(l,{color:"teal",variant:"outlined",disabled:!0,label:"Save",onClick:n}),o.jsx(l,{color:"teal",variant:"outlined",disabled:!0,label:"Add",mIcon:e,onClick:n})]})}),o.jsx("h2",{children:"Text"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"text",label:"Save",onClick:n}),o.jsx(l,{color:"blue",variant:"text",label:"Save",mIcon:e,onClick:n}),o.jsx(l,{color:"red",variant:"text",label:"Delete",onClick:n}),o.jsx(l,{color:"red",variant:"text",label:"Delete",mIcon:s,onClick:n}),o.jsx(l,{color:"black",variant:"text",label:"Cancel",onClick:n}),o.jsx(l,{color:"black",variant:"text",label:"Cancel",mIcon:u,onClick:n}),o.jsx(l,{color:"teal",variant:"text",label:"Save",onClick:n}),o.jsx(l,{color:"teal",variant:"text",label:"Add",mIcon:e,onClick:n})]})}),o.jsx("h2",{children:"Text - disabled"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"text",disabled:!0,label:"Save",onClick:n}),o.jsx(l,{color:"blue",variant:"text",disabled:!0,label:"Save",mIcon:e,onClick:n}),o.jsx(l,{color:"red",variant:"text",disabled:!0,label:"Delete",onClick:n}),o.jsx(l,{color:"red",variant:"text",disabled:!0,label:"Delete",mIcon:s,onClick:n}),o.jsx(l,{color:"black",variant:"text",disabled:!0,label:"Cancel",onClick:n}),o.jsx(l,{color:"black",variant:"text",disabled:!0,label:"Cancel",mIcon:u,onClick:n}),o.jsx(l,{color:"teal",variant:"text",disabled:!0,label:"Save",onClick:n}),o.jsx(l,{color:"teal",variant:"text",disabled:!0,label:"Add",mIcon:e,onClick:n})]})}),o.jsx("h2",{children:"Small Text"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",onClick:n}),o.jsx(l,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",mIcon:e,onClick:n}),o.jsx(l,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",onClick:n}),o.jsx(l,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",mIcon:s,onClick:n}),o.jsx(l,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",onClick:n}),o.jsx(l,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",mIcon:u,onClick:n}),o.jsx(l,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Save",onClick:n}),o.jsx(l,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Add",mIcon:e,onClick:n})]})}),o.jsx("h2",{children:"Icon Positions"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"contained",label:"Save",iconPosition:"left",mIcon:e,onClick:n}),o.jsx(l,{color:"blue",variant:"contained",label:"Save",iconPosition:"right",mIcon:e,onClick:n})]})}),o.jsx("h2",{children:"Multi-Icon buttons"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",label:o.jsx(H,{}),variant:"contained",iconPosition:"right",mIcon:D,onClick:n}),o.jsx(l,{color:"blue",label:o.jsx(y,{}),variant:"contained",iconPosition:"right",mIcon:c,onClick:n}),o.jsx(l,{color:"blue",label:o.jsx(H,{}),variant:"outlined",iconPosition:"right",mIcon:D,onClick:n}),o.jsx(l,{color:"blue",label:o.jsx(y,{}),variant:"outlined",iconPosition:"right",mIcon:c,onClick:n}),o.jsx(l,{color:"blue",label:o.jsx(H,{}),variant:"text",iconPosition:"right",mIcon:D,onClick:n}),o.jsx(l,{color:"blue",label:o.jsx(y,{}),variant:"text",iconPosition:"right",mIcon:c,onClick:n})]})}),o.jsx("h2",{children:"Icon Buttons"}),o.jsxs("div",{children:[o.jsx(l,{color:"blue",variant:"icon",mIcon:e,onClick:n}),o.jsx(l,{color:"blue",variant:"icon",mIcon:r,onClick:n}),o.jsx(l,{color:"blue",variant:"icon",mIcon:d,onClick:n}),o.jsx(l,{color:"blue",variant:"icon",mIcon:c,onClick:t}),o.jsx(l,{color:"red",variant:"icon",mIcon:e,onClick:n}),o.jsx(l,{color:"red",variant:"icon",mIcon:r,onClick:n}),o.jsx(l,{color:"red",variant:"icon",mIcon:d,onClick:n}),o.jsx(l,{color:"red",variant:"icon",mIcon:c,onClick:t}),o.jsx(l,{color:"black",variant:"icon",mIcon:e,onClick:n}),o.jsx(l,{color:"black",variant:"icon",mIcon:r,onClick:n}),o.jsx(l,{color:"black",variant:"icon",mIcon:d,onClick:n}),o.jsx(l,{color:"black",variant:"icon",mIcon:c,onClick:t}),o.jsx(l,{color:"gray",variant:"icon",mIcon:r,onClick:n}),o.jsx(l,{color:"gray",variant:"icon",mIcon:d,onClick:n}),o.jsx(l,{color:"gray",variant:"icon",mIcon:c,onClick:t}),o.jsx(l,{color:"teal",variant:"icon",mIcon:e,onClick:n}),o.jsx(l,{color:"teal",variant:"icon",mIcon:r,onClick:n}),o.jsx(l,{color:"teal",variant:"icon",mIcon:d,onClick:n}),o.jsx(l,{color:"teal",variant:"icon",mIcon:c,onClick:t}),o.jsx(l,{color:"yellow",variant:"icon",mIcon:e,onClick:n}),o.jsx(l,{color:"yellow",variant:"icon",mIcon:r,onClick:n}),o.jsx(l,{color:"yellow",variant:"icon",mIcon:d,onClick:n}),o.jsx(l,{color:"yellow",variant:"icon",mIcon:c,onClick:t}),o.jsxs("div",{style:{background:"black",display:"inline-block"},children:[o.jsx(l,{color:"white",variant:"icon",mIcon:e,onClick:n}),o.jsx(l,{color:"white",variant:"icon",mIcon:r,onClick:n}),o.jsx(l,{color:"white",variant:"icon",mIcon:d,onClick:n}),o.jsx(l,{color:"white",variant:"icon",mIcon:c,onClick:t})]})]}),o.jsx("h2",{children:"Icon Buttons - disabled"}),o.jsxs("div",{children:[o.jsx(l,{color:"blue",variant:"icon",disabled:!0,mIcon:e,onClick:n}),o.jsx(l,{color:"blue",variant:"icon",disabled:!0,mIcon:r,onClick:n}),o.jsx(l,{color:"blue",variant:"icon",disabled:!0,mIcon:d,onClick:n}),o.jsx(l,{color:"blue",variant:"icon",disabled:!0,mIcon:c,onClick:t}),o.jsx(l,{color:"red",variant:"icon",disabled:!0,mIcon:e,onClick:n}),o.jsx(l,{color:"red",variant:"icon",disabled:!0,mIcon:r,onClick:n}),o.jsx(l,{color:"red",variant:"icon",disabled:!0,mIcon:d,onClick:n}),o.jsx(l,{color:"red",variant:"icon",disabled:!0,mIcon:c,onClick:t}),o.jsx(l,{color:"black",variant:"icon",disabled:!0,mIcon:e,onClick:n}),o.jsx(l,{color:"black",variant:"icon",disabled:!0,mIcon:r,onClick:n}),o.jsx(l,{color:"black",variant:"icon",disabled:!0,mIcon:d,onClick:n}),o.jsx(l,{color:"black",variant:"icon",disabled:!0,mIcon:c,onClick:t})]}),o.jsx("h2",{children:"Button Sizes"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"contained",label:"Small",size:"small"}),o.jsx(l,{color:"blue",variant:"contained",label:"Medium (default)"})]})}),o.jsx("br",{}),o.jsx("br",{}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"outlined",label:"Small",size:"small",mIcon:e}),o.jsx(l,{color:"blue",variant:"outlined",label:"Medium (default)",mIcon:e})]})}),o.jsx("br",{}),o.jsx("br",{}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"black",variant:"icon",size:"small",mIcon:e}),o.jsx(l,{color:"black",variant:"icon",mIcon:e})]})}),o.jsx("h2",{children:"Buttons that open menus"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"outlined",label:"Dropdown with Icons",menuItems:S}),o.jsx(l,{color:"blue",variant:"outlined",label:"Dropdown with text",menuItems:g}),o.jsx(l,{color:"blue",variant:"outlined",label:"Dropdown with colored icons",menuItems:f}),o.jsx(l,{color:"blue",variant:"icon",mIcon:c,menuItems:S})]})}),o.jsx("h2",{children:"Buttons that triggers Popover on click"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"outlined",popover:o.jsx("p",{children:"Popover Content"}),label:"With Popover"}),o.jsx(l,{color:"blue",variant:"icon",mIcon:O,popover:o.jsx("p",{children:"Helper Text"}),popoverEvent:"onClick"})]})}),o.jsx("h2",{children:"Buttons that triggers Popover on hover"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"blue",variant:"outlined",popover:o.jsx("p",{children:"Popover Content"}),popoverEvent:"onHover",label:"With Popover"}),o.jsx(l,{color:"blue",variant:"icon",mIcon:O,popoverEvent:"onHover",popover:o.jsx("p",{children:"Helper Text"})})]})}),o.jsx("h2",{children:"Buttons with custom attrs"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"black",variant:"outlined",label:"With data attribute",attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}}),o.jsx(l,{color:"black",variant:"icon",mIcon:e,attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}})]})}),o.jsx("h2",{children:"Buttons with tooltips"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"black",variant:"outlined",label:"One",tooltip:"I can haz a tooltip"}),o.jsx(l,{color:"black",variant:"outlined",label:"Two",tooltip:"I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long."})]})}),o.jsx("h2",{children:"Buttons with href that turn into a tags"}),o.jsx("div",{children:o.jsxs(a,{children:[o.jsx(l,{color:"black",variant:"outlined",label:"With Link",href:"https://www.google.com/"}),o.jsx(l,{color:"black",variant:"outlined",label:"With Link and click handler",href:"https://www.bing.com/",onClick:function(b){b.preventDefault(),alert("Click handler")}}),o.jsx(l,{color:"blue",variant:"icon",mIcon:e,onClick:n,size:"small",href:"https://www.google.com/"})]})})]})};var _,W,q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`({
  backgroundColor,
  buttonColor,
  buttonVariant,
  disabled,
  fullWidth,
  href,
  iconColor,
  iconPosition,
  label,
  labelText,
  menuItems,
  popover,
  popoverEvent,
  show,
  showIcon,
  size,
  smallText,
  tooltip
}: typeof Playground.args): ReactElement => {
  const useIcon = buttonVariant === "icon" || showIcon;
  const tooltipType = tooltip ? tooltip === "string" ? "Tooltip string" : <h2>Tooltip as an H2</h2> : undefined;
  const action = {
    name: "show",
    onClick: () => alert("Clicked"),
    show: toggleMap[show],
    color: buttonColor,
    variant: buttonVariant
  };
  const showButton = useToggle(action, "show");
  return <div style={{
    backgroundColor: backgroundColor === "light" ? "white" : "#333",
    padding: 20
  }}>
            {showButton && <Button attrs={{
      $smallText: smallText
    }} label={label === "String" ? labelText : <FormatListBulletedOutlinedIcon />} variant={buttonVariant} color={buttonColor} fullWidth={fullWidth} disabled={toggleMapInverse[disabled]} tooltip={tooltipType} size={size} mIcon={useIcon && AddIcon} mIconColor={useIcon && iconColor} href={href ? "https://www.google.com/" : null} iconPosition={iconPosition} popover={popover && !tooltipType && <p>Popover Content</p>} popoverEvent={popoverEvent} menuItems={menuItems && dropdownWithIcons} />}
        </div>;
}`,...(q=(W=v.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var $,K,F;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`(): ReactElement => {
  const [, setAnchorEl] = useState(null);
  function clickHandler() {
    alert("yes");
  }
  const openDropdown = function (event) {
    setAnchorEl(event.currentTarget);
  };
  const dropdownWithColoredIcons: ButtonProps["menuItems"] = [{
    label: "Edit",
    mIcon: CreateIcon,
    color: "blue",
    onClick: function () {
      alert("EDIT CLICK");
    }
  }, {
    label: "Download",
    mIcon: CloudDownloadIcon,
    color: "blue",
    onClick: function () {
      alert("DOWNLOAD CLICK");
    }
  }, {
    label: "Delete",
    mIcon: DeleteIcon,
    color: "red",
    onClick: function () {
      alert("DELETE CLICK");
    }
  }, {
    label: "Cancel",
    mIcon: ChevronLeftIcon,
    onClick: function () {
      alert("CANCEL CLICK");
    }
  }];
  const dropdownWithText: ButtonProps["menuItems"] = [{
    label: "Edit",
    onClick: function () {
      alert("EDIT CLICK");
    }
  }, {
    label: "Download",
    onClick: function () {
      alert("DOWNLOAD CLICK");
    }
  }];
  return <div>
            <h1>Buttons!</h1>
            <h2>Contained</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="contained" label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="lightBlue" variant="contained" label="Save" onClick={clickHandler} />
                    <Button color="lightBlue" variant="contained" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="contained" label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="contained" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="contained" label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="contained" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="yellow" variant="contained" label="Save" onClick={clickHandler} />
                    <Button color="yellow" variant="contained" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Contained - disabled</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="contained" disabled label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="contained" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="lightBlue" variant="contained" disabled label="Save" onClick={clickHandler} />
                    <Button color="lightBlue" variant="contained" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="contained" disabled label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="contained" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="contained" disabled label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="contained" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="yellow" variant="contained" disabled label="Save" onClick={clickHandler} />
                    <Button color="yellow" variant="contained" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Outlined</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="outlined" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="outlined" label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="outlined" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="outlined" label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="outlined" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="gray" variant="outlined" label="Save" onClick={clickHandler} />
                    <Button color="gray" variant="outlined" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="teal" variant="outlined" label="Save" onClick={clickHandler} />
                    <Button color="teal" variant="outlined" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Outlined - disabled</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" disabled label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="outlined" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="outlined" disabled label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="outlined" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="outlined" disabled label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="outlined" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="gray" variant="outlined" disabled label="Save" onClick={clickHandler} />
                    <Button color="gray" variant="outlined" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="teal" variant="outlined" disabled label="Save" onClick={clickHandler} />
                    <Button color="teal" variant="outlined" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Text</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="text" label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="text" label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="text" label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="teal" variant="text" label="Save" onClick={clickHandler} />
                    <Button color="teal" variant="text" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Text - disabled</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="text" disabled label="Save" onClick={clickHandler} />
                    <Button color="blue" variant="text" disabled label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="red" variant="text" disabled label="Delete" onClick={clickHandler} />
                    <Button color="red" variant="text" disabled label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button color="black" variant="text" disabled label="Cancel" onClick={clickHandler} />
                    <Button color="black" variant="text" disabled label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button color="teal" variant="text" disabled label="Save" onClick={clickHandler} />
                    <Button color="teal" variant="text" disabled label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Small Text</h2>
            <div>
                <ButtonRow>
                    <Button attrs={{
          $smallText: true
        }} color="blue" variant="text" label="Save" onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="blue" variant="text" label="Save" mIcon={AddIcon} onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="red" variant="text" label="Delete" onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="red" variant="text" label="Delete" mIcon={DeleteIcon} onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="black" variant="text" label="Cancel" onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="black" variant="text" label="Cancel" mIcon={ChevronLeftIcon} onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="teal" variant="text" label="Save" onClick={clickHandler} />
                    <Button attrs={{
          $smallText: true
        }} color="teal" variant="text" label="Add" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Icon Positions</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="contained" label="Save" iconPosition="left" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="blue" variant="contained" label="Save" iconPosition="right" mIcon={AddIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Multi-Icon buttons</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" label={<FormatListBulletedOutlinedIcon />} variant="contained" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler} />
                    <Button color="blue" label={<GridOnOutlinedIcon />} variant="contained" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler} />
                    <Button color="blue" label={<FormatListBulletedOutlinedIcon />} variant="outlined" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler} />
                    <Button color="blue" label={<GridOnOutlinedIcon />} variant="outlined" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler} />
                    <Button color="blue" label={<FormatListBulletedOutlinedIcon />} variant="text" iconPosition="right" mIcon={ExpandMoreOutlinedIcon} onClick={clickHandler} />
                    <Button color="blue" label={<GridOnOutlinedIcon />} variant="text" iconPosition="right" mIcon={MoreHorizIcon} onClick={clickHandler} />
                </ButtonRow>
            </div>

            <h2>Icon Buttons</h2>
            <div>
                <Button color="blue" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="red" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="black" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="gray" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="gray" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="gray" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="teal" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="teal" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="teal" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="teal" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="yellow" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                <Button color="yellow" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="yellow" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="yellow" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                <div style={{
        background: "black",
        display: "inline-block"
      }}>
                    <Button color="white" variant="icon" mIcon={AddIcon} onClick={clickHandler} />
                    <Button color="white" variant="icon" mIcon={CreateIcon} onClick={clickHandler} />
                    <Button color="white" variant="icon" mIcon={CloudDownloadIcon} onClick={clickHandler} />
                    <Button color="white" variant="icon" mIcon={MoreHorizIcon} onClick={openDropdown} />
                </div>
            </div>

            <h2>Icon Buttons - disabled</h2>
            <div>
                <Button color="blue" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="blue" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="red" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="red" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown} />
                <Button color="black" variant="icon" disabled mIcon={AddIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" disabled mIcon={CreateIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" disabled mIcon={CloudDownloadIcon} onClick={clickHandler} />
                <Button color="black" variant="icon" disabled mIcon={MoreHorizIcon} onClick={openDropdown} />
            </div>

            <h2>Button Sizes</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="contained" label="Small" size="small" />
                    <Button color="blue" variant="contained" label="Medium (default)" />
                </ButtonRow>
            </div>
            <br />
            <br />
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" label="Small" size="small" mIcon={AddIcon} />
                    <Button color="blue" variant="outlined" label="Medium (default)" mIcon={AddIcon} />
                </ButtonRow>
            </div>
            <br />
            <br />
            <div>
                <ButtonRow>
                    <Button color="black" variant="icon" size="small" mIcon={AddIcon} />
                    <Button color="black" variant="icon" mIcon={AddIcon} />
                </ButtonRow>
            </div>

            <h2>Buttons that open menus</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" label="Dropdown with Icons" menuItems={dropdownWithIcons} />
                    <Button color="blue" variant="outlined" label="Dropdown with text" menuItems={dropdownWithText} />
                    <Button color="blue" variant="outlined" label="Dropdown with colored icons" menuItems={dropdownWithColoredIcons} />
                    <Button color="blue" variant="icon" mIcon={MoreHorizIcon} menuItems={dropdownWithIcons} />
                </ButtonRow>
            </div>

            <h2>Buttons that triggers Popover on click</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" popover={<p>Popover Content</p>} label="With Popover" />
                    <Button color="blue" variant="icon" mIcon={HelpIcon} popover={<p>Helper Text</p>} popoverEvent="onClick" />
                </ButtonRow>
            </div>

            <h2>Buttons that triggers Popover on hover</h2>
            <div>
                <ButtonRow>
                    <Button color="blue" variant="outlined" popover={<p>Popover Content</p>} popoverEvent="onHover" label="With Popover" />
                    <Button color="blue" variant="icon" mIcon={HelpIcon} popoverEvent="onHover" popover={<p>Helper Text</p>} />
                </ButtonRow>
            </div>

            <h2>Buttons with custom attrs</h2>
            <div>
                <ButtonRow>
                    <Button color="black" variant="outlined" label="With data attribute" attrs={{
          "data-foo": "foo value"
        }} muiAttrs={{
          "data-bar": "bar value"
        }} />
                    <Button color="black" variant="icon" mIcon={AddIcon} attrs={{
          "data-foo": "foo value"
        }} muiAttrs={{
          "data-bar": "bar value"
        }} />
                </ButtonRow>
            </div>

            <h2>Buttons with tooltips</h2>
            <div>
                <ButtonRow>
                    <Button color="black" variant="outlined" label="One" tooltip="I can haz a tooltip" />
                    <Button color="black" variant="outlined" label="Two" tooltip="I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long." />
                </ButtonRow>
            </div>

            <h2>Buttons with href that turn into a tags</h2>
            <div>
                <ButtonRow>
                    <Button color="black" variant="outlined" label="With Link" href="https://www.google.com/" />
                    <Button color="black" variant="outlined" label="With Link and click handler" href="https://www.bing.com/" onClick={function (e) {
          e.preventDefault();
          alert("Click handler");
        }} />
                    <Button color="blue" variant="icon" mIcon={AddIcon} onClick={clickHandler} size="small" href="https://www.google.com/" />
                </ButtonRow>
            </div>
        </div>;
}`,...(F=(K=h.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};const Bo=["Playground","KitchenSink"],Eo=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:h,Playground:v,__namedExportsOrder:Bo,default:jo},Symbol.toStringTag,{value:"Module"}));export{v as P,Eo as s};
