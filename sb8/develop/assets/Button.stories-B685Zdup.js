import{r as p,j as n}from"./jsx-runtime-EKYJJIwR.js";import{g as j,r as tn}from"./index-D0AnReJb.js";import{B as o}from"./Button-DaAMSO0F.js";import{C as r}from"./Create-VEUHusTL.js";import{D as s}from"./Delete-C5h5ALy4.js";import{A as e}from"./Add-DyToAZcG.js";import{C as d}from"./CloudDownload-CJZuuh6U.js";import{r as B}from"./styled-BWOE7yIf.js";import{r as w}from"./createSvgIcon-CFLdSkGK.js";import{H as O}from"./Help-DsoPPS02.js";import{B as a}from"./ButtonRow-C029PRKt.js";import{u as an}from"./useToggle-CTbnrs6g.js";import{b as cn,t as rn,a as dn,c as sn}from"./toggleOptions-1cXvXfFl.js";var k={},R;function un(){if(R)return k;R=1;var i=B();Object.defineProperty(k,"__esModule",{value:!0}),k.default=void 0;var l=i(w()),t=p();return k.default=(0,l.default)((0,t.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz"),k}var vn=un();const c=j(vn);var I={},L;function bn(){if(L)return I;L=1;var i=B();Object.defineProperty(I,"__esModule",{value:!0}),I.default=void 0;var l=i(w()),t=p();return I.default=(0,l.default)((0,t.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),I}var kn=bn();const u=j(kn);var C={},E;function In(){if(E)return C;E=1;var i=B();Object.defineProperty(C,"__esModule",{value:!0}),C.default=void 0;var l=i(w()),t=p();return C.default=(0,l.default)((0,t.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMoreOutlined"),C}var Cn=In();const D=j(Cn);var m={},M;function mn(){if(M)return m;M=1;var i=B();Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var l=i(w()),t=p();return m.default=(0,l.default)((0,t.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"}),"FormatListBulletedOutlined"),m}var xn=mn();const H=j(xn);var x={},P;function hn(){if(P)return x;P=1;var i=B();Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var l=i(w()),t=p();return x.default=(0,l.default)((0,t.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z"}),"GridOnOutlined"),x}var pn=hn();const y=j(pn),jn={title:"Components/Button"},S=[{label:"Edit",mIcon:r,onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:d,onClick:function(){alert("DOWNLOAD CLICK")}}],v=({backgroundColor:i,buttonColor:l,buttonVariant:t,disabled:g,fullWidth:f,href:b,iconColor:V,iconPosition:G,label:N,labelText:J,menuItems:U,popover:X,popoverEvent:Q,show:Y,showIcon:Z,size:nn,smallText:on,tooltip:T})=>{const A=t==="icon"||Z,z=T?T==="string"?"Tooltip string":n.jsx("h2",{children:"Tooltip as an H2"}):void 0,ln={name:"show",onClick:()=>alert("Clicked"),show:rn[Y],color:l,variant:t},en=an(ln,"show");return n.jsx("div",{style:{backgroundColor:i==="light"?"white":"#333",padding:20},children:en&&n.jsx(o,{attrs:{$smallText:on},label:N==="String"?J:n.jsx(H,{}),variant:t,color:l,fullWidth:f,disabled:cn[g],tooltip:z,size:nn,mIcon:A&&e,mIconColor:A&&V,href:b?"https://www.google.com/":null,iconPosition:G,popover:X&&!z&&n.jsx("p",{children:"Popover Content"}),popoverEvent:Q,menuItems:U&&S})})};v.args={backgroundColor:"light",buttonColor:"black",buttonVariant:"contained",disabled:"Undefined",fullWidth:!1,href:!1,iconColor:"",iconPosition:"left",label:"String",labelText:"Text",menuItems:!1,popover:!1,popoverEvent:"onClick",show:"Undefined",showIcon:!1,size:"medium",smallText:!1,tooltip:null};v.argTypes={backgroundColor:{options:["light","dark"],control:{type:"select"},name:"Background Color"},buttonColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Color"},buttonVariant:{options:["text","outlined","contained","icon"],control:{type:"select"},name:"Variant"},disabled:{options:sn,control:{type:"select"},name:"Disabled"},fullWidth:{name:"Full Width"},href:{name:"URL (href)"},iconColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Icon Color"},iconPosition:{options:["left","right"],control:{type:"select"},name:"Icon Position"},label:{options:["String","JSX"],control:{type:"select"},name:"Label"},labelText:{name:"Label Text"},menuItems:{name:"Menu Items"},popover:{name:"Popover"},popoverEvent:{options:["onClick","onHover"],control:{type:"select"},name:"Popover Event"},show:{options:dn,control:{type:"select"},name:"Show"},showIcon:{name:"Show Icon"},size:{options:["small","medium"],control:{type:"select"},name:"Size"},smallText:{name:"Small Text"},tooltip:{options:["string","JSX",null],control:{type:"select"},name:"Tooltip"}};const h=()=>{const[,i]=tn.useState(null);function l(){alert("yes")}const t=function(b){i(b.currentTarget)},g=[{label:"Edit",mIcon:r,color:"blue",onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:d,color:"blue",onClick:function(){alert("DOWNLOAD CLICK")}},{label:"Delete",mIcon:s,color:"red",onClick:function(){alert("DELETE CLICK")}},{label:"Cancel",mIcon:u,onClick:function(){alert("CANCEL CLICK")}}],f=[{label:"Edit",onClick:function(){alert("EDIT CLICK")}},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")}}];return n.jsxs("div",{children:[n.jsx("h1",{children:"Buttons!"}),n.jsx("h2",{children:"Contained"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"contained",label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"contained",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"lightBlue",variant:"contained",label:"Save",onClick:l}),n.jsx(o,{color:"lightBlue",variant:"contained",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"contained",label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"contained",label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"contained",label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"contained",label:"Cancel",mIcon:u,onClick:l}),n.jsx(o,{color:"yellow",variant:"contained",label:"Save",onClick:l}),n.jsx(o,{color:"yellow",variant:"contained",label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Contained - disabled"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"contained",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"contained",disabled:!0,label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"contained",disabled:!0,label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"contained",disabled:!0,label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"contained",disabled:!0,label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"contained",disabled:!0,label:"Cancel",mIcon:u,onClick:l}),n.jsx(o,{color:"yellow",variant:"contained",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"yellow",variant:"contained",disabled:!0,label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Outlined"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"outlined",label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"outlined",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"outlined",label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"outlined",label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"outlined",label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"outlined",label:"Cancel",mIcon:u,onClick:l}),n.jsx(o,{color:"gray",variant:"outlined",label:"Save",onClick:l}),n.jsx(o,{color:"gray",variant:"outlined",label:"Add",mIcon:e,onClick:l}),n.jsx(o,{color:"teal",variant:"outlined",label:"Save",onClick:l}),n.jsx(o,{color:"teal",variant:"outlined",label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Outlined - disabled"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"outlined",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"outlined",disabled:!0,label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"outlined",disabled:!0,label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"outlined",disabled:!0,label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",mIcon:u,onClick:l}),n.jsx(o,{color:"gray",variant:"outlined",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"gray",variant:"outlined",disabled:!0,label:"Add",mIcon:e,onClick:l}),n.jsx(o,{color:"teal",variant:"outlined",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"teal",variant:"outlined",disabled:!0,label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Text"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"text",label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"text",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"text",label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"text",label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"text",label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"text",label:"Cancel",mIcon:u,onClick:l}),n.jsx(o,{color:"teal",variant:"text",label:"Save",onClick:l}),n.jsx(o,{color:"teal",variant:"text",label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Text - disabled"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"text",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"text",disabled:!0,label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"text",disabled:!0,label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"text",disabled:!0,label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"text",disabled:!0,label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"text",disabled:!0,label:"Cancel",mIcon:u,onClick:l}),n.jsx(o,{color:"teal",variant:"text",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"teal",variant:"text",disabled:!0,label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Small Text"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",mIcon:u,onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Save",onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Icon Positions"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"contained",label:"Save",iconPosition:"left",mIcon:e,onClick:l}),n.jsx(o,{color:"blue",variant:"contained",label:"Save",iconPosition:"right",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Multi-Icon buttons"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",label:n.jsx(H,{}),variant:"contained",iconPosition:"right",mIcon:D,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(y,{}),variant:"contained",iconPosition:"right",mIcon:c,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(H,{}),variant:"outlined",iconPosition:"right",mIcon:D,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(y,{}),variant:"outlined",iconPosition:"right",mIcon:c,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(H,{}),variant:"text",iconPosition:"right",mIcon:D,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(y,{}),variant:"text",iconPosition:"right",mIcon:c,onClick:l})]})}),n.jsx("h2",{children:"Icon Buttons"}),n.jsxs("div",{children:[n.jsx(o,{color:"blue",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",mIcon:d,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",mIcon:c,onClick:t}),n.jsx(o,{color:"red",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"red",variant:"icon",mIcon:d,onClick:l}),n.jsx(o,{color:"red",variant:"icon",mIcon:c,onClick:t}),n.jsx(o,{color:"black",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"black",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"black",variant:"icon",mIcon:d,onClick:l}),n.jsx(o,{color:"black",variant:"icon",mIcon:c,onClick:t}),n.jsx(o,{color:"gray",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"gray",variant:"icon",mIcon:d,onClick:l}),n.jsx(o,{color:"gray",variant:"icon",mIcon:c,onClick:t}),n.jsx(o,{color:"teal",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"teal",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"teal",variant:"icon",mIcon:d,onClick:l}),n.jsx(o,{color:"teal",variant:"icon",mIcon:c,onClick:t}),n.jsx(o,{color:"yellow",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"yellow",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"yellow",variant:"icon",mIcon:d,onClick:l}),n.jsx(o,{color:"yellow",variant:"icon",mIcon:c,onClick:t}),n.jsxs("div",{style:{background:"black",display:"inline-block"},children:[n.jsx(o,{color:"white",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"white",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"white",variant:"icon",mIcon:d,onClick:l}),n.jsx(o,{color:"white",variant:"icon",mIcon:c,onClick:t})]})]}),n.jsx("h2",{children:"Icon Buttons - disabled"}),n.jsxs("div",{children:[n.jsx(o,{color:"blue",variant:"icon",disabled:!0,mIcon:e,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",disabled:!0,mIcon:r,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",disabled:!0,mIcon:d,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",disabled:!0,mIcon:c,onClick:t}),n.jsx(o,{color:"red",variant:"icon",disabled:!0,mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"icon",disabled:!0,mIcon:r,onClick:l}),n.jsx(o,{color:"red",variant:"icon",disabled:!0,mIcon:d,onClick:l}),n.jsx(o,{color:"red",variant:"icon",disabled:!0,mIcon:c,onClick:t}),n.jsx(o,{color:"black",variant:"icon",disabled:!0,mIcon:e,onClick:l}),n.jsx(o,{color:"black",variant:"icon",disabled:!0,mIcon:r,onClick:l}),n.jsx(o,{color:"black",variant:"icon",disabled:!0,mIcon:d,onClick:l}),n.jsx(o,{color:"black",variant:"icon",disabled:!0,mIcon:c,onClick:t})]}),n.jsx("h2",{children:"Button Sizes"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"contained",label:"Small",size:"small"}),n.jsx(o,{color:"blue",variant:"contained",label:"Medium (default)"})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"outlined",label:"Small",size:"small",mIcon:e}),n.jsx(o,{color:"blue",variant:"outlined",label:"Medium (default)",mIcon:e})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"black",variant:"icon",size:"small",mIcon:e}),n.jsx(o,{color:"black",variant:"icon",mIcon:e})]})}),n.jsx("h2",{children:"Buttons that open menus"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"outlined",label:"Dropdown with Icons",menuItems:S}),n.jsx(o,{color:"blue",variant:"outlined",label:"Dropdown with text",menuItems:f}),n.jsx(o,{color:"blue",variant:"outlined",label:"Dropdown with colored icons",menuItems:g}),n.jsx(o,{color:"blue",variant:"icon",mIcon:c,menuItems:S})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on click"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),label:"With Popover"}),n.jsx(o,{color:"blue",variant:"icon",mIcon:O,popover:n.jsx("p",{children:"Helper Text"}),popoverEvent:"onClick"})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on hover"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),popoverEvent:"onHover",label:"With Popover"}),n.jsx(o,{color:"blue",variant:"icon",mIcon:O,popoverEvent:"onHover",popover:n.jsx("p",{children:"Helper Text"})})]})}),n.jsx("h2",{children:"Buttons with custom attrs"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"black",variant:"outlined",label:"With data attribute",attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}}),n.jsx(o,{color:"black",variant:"icon",mIcon:e,attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}})]})}),n.jsx("h2",{children:"Buttons with tooltips"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"black",variant:"outlined",label:"One",tooltip:"I can haz a tooltip"}),n.jsx(o,{color:"black",variant:"outlined",label:"Two",tooltip:"I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long."})]})}),n.jsx("h2",{children:"Buttons with href that turn into a tags"}),n.jsx("div",{children:n.jsxs(a,{children:[n.jsx(o,{color:"black",variant:"outlined",label:"With Link",href:"https://www.google.com/"}),n.jsx(o,{color:"black",variant:"outlined",label:"With Link and click handler",href:"https://www.bing.com/",onClick:function(b){b.preventDefault(),alert("Click handler")}}),n.jsx(o,{color:"blue",variant:"icon",mIcon:e,onClick:l,size:"small",href:"https://www.google.com/"})]})})]})};var _,W,q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
}`,...(F=(K=h.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};const Bn=["Playground","KitchenSink"],En=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:h,Playground:v,__namedExportsOrder:Bn,default:jn},Symbol.toStringTag,{value:"Module"}));export{v as P,En as s};
