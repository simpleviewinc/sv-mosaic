import{r as C,j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as Y}from"./index-BP8_t0zE.js";import{B as o}from"./Button-DuMlbF8s.js";import{d as i}from"./Create-CpnV7q0W.js";import{d as s}from"./Delete-Bd9yuHmM.js";import{d as e}from"./Add-DakDrsh-.js";import{d as r}from"./CloudDownload-BiNecmWM.js";import{i as I}from"./styled-hJgfyZIG.js";import{r as m}from"./createSvgIcon-DE5yaevU.js";import{d as z}from"./Help-ICrZiAq7.js";import{B as t}from"./ButtonRow-CP4CrsnB.js";import{u as Z}from"./useToggle-lipGlewK.js";import{b as nn,c as on,a as ln,t as en}from"./toggleOptions-1cXvXfFl.js";var H={},tn=I;Object.defineProperty(H,"__esModule",{value:!0});var a=H.default=void 0,an=tn(m()),cn=C();a=H.default=(0,an.default)((0,cn.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");var g={},rn=I;Object.defineProperty(g,"__esModule",{value:!0});var d=g.default=void 0,dn=rn(m()),sn=C();d=g.default=(0,dn.default)((0,sn.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");var f={},un=I;Object.defineProperty(f,"__esModule",{value:!0});var x=f.default=void 0,vn=un(m()),bn=C();x=f.default=(0,vn.default)((0,bn.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMoreOutlined");var D={},kn=I;Object.defineProperty(D,"__esModule",{value:!0});var k=D.default=void 0,Cn=kn(m()),In=C();k=D.default=(0,Cn.default)((0,In.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"}),"FormatListBulletedOutlined");var y={},mn=I;Object.defineProperty(y,"__esModule",{value:!0});var h=y.default=void 0,xn=mn(m()),hn=C();h=y.default=(0,xn.default)((0,hn.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z"}),"GridOnOutlined");const pn={title:"Components/Button"},w=[{label:"Edit",mIcon:i,onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:r,onClick:function(){alert("DOWNLOAD CLICK")}}],u=({backgroundColor:p,buttonColor:l,buttonVariant:c,disabled:j,fullWidth:B,href:v,iconColor:_,iconPosition:$,label:W,labelText:K,menuItems:V,popover:q,popoverEvent:F,show:N,showIcon:G,size:J,smallText:U,tooltip:S})=>{const T=c==="icon"||G,A=S?S==="string"?"Tooltip string":n.jsx("h2",{children:"Tooltip as an H2"}):void 0,X={name:"show",onClick:()=>alert("Clicked"),show:en[N],color:l,variant:c},Q=Z(X,"show");return n.jsx("div",{style:{backgroundColor:p==="light"?"white":"#333",padding:20},children:Q&&n.jsx(o,{attrs:{$smallText:U},label:W==="String"?K:n.jsx(k,{}),variant:c,color:l,fullWidth:B,disabled:nn[j],tooltip:A,size:J,mIcon:T&&e,mIconColor:T&&_,href:v?"https://www.google.com/":null,iconPosition:$,popover:q&&!A&&n.jsx("p",{children:"Popover Content"}),popoverEvent:F,menuItems:V&&w})})};u.args={backgroundColor:"light",buttonColor:"black",buttonVariant:"contained",disabled:"Undefined",fullWidth:!1,href:!1,iconColor:"",iconPosition:"left",label:"String",labelText:"Text",menuItems:!1,popover:!1,popoverEvent:"onClick",show:"Undefined",showIcon:!1,size:"medium",smallText:!1,tooltip:null};u.argTypes={backgroundColor:{options:["light","dark"],control:{type:"select"},name:"Background Color"},buttonColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Color"},buttonVariant:{options:["text","outlined","contained","icon"],control:{type:"select"},name:"Variant"},disabled:{options:on,control:{type:"select"},name:"Disabled"},fullWidth:{name:"Full Width"},href:{name:"URL (href)"},iconColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Icon Color"},iconPosition:{options:["left","right"],control:{type:"select"},name:"Icon Position"},label:{options:["String","JSX"],control:{type:"select"},name:"Label"},labelText:{name:"Label Text"},menuItems:{name:"Menu Items"},popover:{name:"Popover"},popoverEvent:{options:["onClick","onHover"],control:{type:"select"},name:"Popover Event"},show:{options:ln,control:{type:"select"},name:"Show"},showIcon:{name:"Show Icon"},size:{options:["small","medium"],control:{type:"select"},name:"Size"},smallText:{name:"Small Text"},tooltip:{options:["string","JSX",null],control:{type:"select"},name:"Tooltip"}};const b=()=>{const[,p]=Y.useState(null);function l(){alert("yes")}const c=function(v){p(v.currentTarget)},j=[{label:"Edit",mIcon:i,color:"blue",onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:r,color:"blue",onClick:function(){alert("DOWNLOAD CLICK")}},{label:"Delete",mIcon:s,color:"red",onClick:function(){alert("DELETE CLICK")}},{label:"Cancel",mIcon:d,onClick:function(){alert("CANCEL CLICK")}}],B=[{label:"Edit",onClick:function(){alert("EDIT CLICK")}},{label:"Download",onClick:function(){alert("DOWNLOAD CLICK")}}];return n.jsxs("div",{children:[n.jsx("h1",{children:"Buttons!"}),n.jsx("h2",{children:"Contained"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"contained",label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"contained",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"lightBlue",variant:"contained",label:"Save",onClick:l}),n.jsx(o,{color:"lightBlue",variant:"contained",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"contained",label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"contained",label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"contained",label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"contained",label:"Cancel",mIcon:d,onClick:l}),n.jsx(o,{color:"yellow",variant:"contained",label:"Save",onClick:l}),n.jsx(o,{color:"yellow",variant:"contained",label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Contained - disabled"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"contained",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"contained",disabled:!0,label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"lightBlue",variant:"contained",disabled:!0,label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"contained",disabled:!0,label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"contained",disabled:!0,label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"contained",disabled:!0,label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"contained",disabled:!0,label:"Cancel",mIcon:d,onClick:l}),n.jsx(o,{color:"yellow",variant:"contained",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"yellow",variant:"contained",disabled:!0,label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Outlined"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"outlined",label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"outlined",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"outlined",label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"outlined",label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"outlined",label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"outlined",label:"Cancel",mIcon:d,onClick:l}),n.jsx(o,{color:"gray",variant:"outlined",label:"Save",onClick:l}),n.jsx(o,{color:"gray",variant:"outlined",label:"Add",mIcon:e,onClick:l}),n.jsx(o,{color:"teal",variant:"outlined",label:"Save",onClick:l}),n.jsx(o,{color:"teal",variant:"outlined",label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Outlined - disabled"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"outlined",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"outlined",disabled:!0,label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"outlined",disabled:!0,label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"outlined",disabled:!0,label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"outlined",disabled:!0,label:"Cancel",mIcon:d,onClick:l}),n.jsx(o,{color:"gray",variant:"outlined",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"gray",variant:"outlined",disabled:!0,label:"Add",mIcon:e,onClick:l}),n.jsx(o,{color:"teal",variant:"outlined",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"teal",variant:"outlined",disabled:!0,label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Text"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"text",label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"text",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"text",label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"text",label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"text",label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"text",label:"Cancel",mIcon:d,onClick:l}),n.jsx(o,{color:"teal",variant:"text",label:"Save",onClick:l}),n.jsx(o,{color:"teal",variant:"text",label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Text - disabled"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"text",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"blue",variant:"text",disabled:!0,label:"Save",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"text",disabled:!0,label:"Delete",onClick:l}),n.jsx(o,{color:"red",variant:"text",disabled:!0,label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{color:"black",variant:"text",disabled:!0,label:"Cancel",onClick:l}),n.jsx(o,{color:"black",variant:"text",disabled:!0,label:"Cancel",mIcon:d,onClick:l}),n.jsx(o,{color:"teal",variant:"text",disabled:!0,label:"Save",onClick:l}),n.jsx(o,{color:"teal",variant:"text",disabled:!0,label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Small Text"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"blue",variant:"text",label:"Save",mIcon:e,onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"red",variant:"text",label:"Delete",mIcon:s,onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"black",variant:"text",label:"Cancel",mIcon:d,onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Save",onClick:l}),n.jsx(o,{attrs:{$smallText:!0},color:"teal",variant:"text",label:"Add",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Icon Positions"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"contained",label:"Save",iconPosition:"left",mIcon:e,onClick:l}),n.jsx(o,{color:"blue",variant:"contained",label:"Save",iconPosition:"right",mIcon:e,onClick:l})]})}),n.jsx("h2",{children:"Multi-Icon buttons"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",label:n.jsx(k,{}),variant:"contained",iconPosition:"right",mIcon:x,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(h,{}),variant:"contained",iconPosition:"right",mIcon:a,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(k,{}),variant:"outlined",iconPosition:"right",mIcon:x,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(h,{}),variant:"outlined",iconPosition:"right",mIcon:a,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(k,{}),variant:"text",iconPosition:"right",mIcon:x,onClick:l}),n.jsx(o,{color:"blue",label:n.jsx(h,{}),variant:"text",iconPosition:"right",mIcon:a,onClick:l})]})}),n.jsx("h2",{children:"Icon Buttons"}),n.jsxs("div",{children:[n.jsx(o,{color:"blue",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",mIcon:i,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",mIcon:a,onClick:c}),n.jsx(o,{color:"red",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"icon",mIcon:i,onClick:l}),n.jsx(o,{color:"red",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"red",variant:"icon",mIcon:a,onClick:c}),n.jsx(o,{color:"black",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"black",variant:"icon",mIcon:i,onClick:l}),n.jsx(o,{color:"black",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"black",variant:"icon",mIcon:a,onClick:c}),n.jsx(o,{color:"gray",variant:"icon",mIcon:i,onClick:l}),n.jsx(o,{color:"gray",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"gray",variant:"icon",mIcon:a,onClick:c}),n.jsx(o,{color:"teal",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"teal",variant:"icon",mIcon:i,onClick:l}),n.jsx(o,{color:"teal",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"teal",variant:"icon",mIcon:a,onClick:c}),n.jsx(o,{color:"yellow",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"yellow",variant:"icon",mIcon:i,onClick:l}),n.jsx(o,{color:"yellow",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"yellow",variant:"icon",mIcon:a,onClick:c}),n.jsxs("div",{style:{background:"black",display:"inline-block"},children:[n.jsx(o,{color:"white",variant:"icon",mIcon:e,onClick:l}),n.jsx(o,{color:"white",variant:"icon",mIcon:i,onClick:l}),n.jsx(o,{color:"white",variant:"icon",mIcon:r,onClick:l}),n.jsx(o,{color:"white",variant:"icon",mIcon:a,onClick:c})]})]}),n.jsx("h2",{children:"Icon Buttons - disabled"}),n.jsxs("div",{children:[n.jsx(o,{color:"blue",variant:"icon",disabled:!0,mIcon:e,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",disabled:!0,mIcon:i,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",disabled:!0,mIcon:r,onClick:l}),n.jsx(o,{color:"blue",variant:"icon",disabled:!0,mIcon:a,onClick:c}),n.jsx(o,{color:"red",variant:"icon",disabled:!0,mIcon:e,onClick:l}),n.jsx(o,{color:"red",variant:"icon",disabled:!0,mIcon:i,onClick:l}),n.jsx(o,{color:"red",variant:"icon",disabled:!0,mIcon:r,onClick:l}),n.jsx(o,{color:"red",variant:"icon",disabled:!0,mIcon:a,onClick:c}),n.jsx(o,{color:"black",variant:"icon",disabled:!0,mIcon:e,onClick:l}),n.jsx(o,{color:"black",variant:"icon",disabled:!0,mIcon:i,onClick:l}),n.jsx(o,{color:"black",variant:"icon",disabled:!0,mIcon:r,onClick:l}),n.jsx(o,{color:"black",variant:"icon",disabled:!0,mIcon:a,onClick:c})]}),n.jsx("h2",{children:"Button Sizes"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"contained",label:"Small",size:"small"}),n.jsx(o,{color:"blue",variant:"contained",label:"Medium (default)"})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"outlined",label:"Small",size:"small",mIcon:e}),n.jsx(o,{color:"blue",variant:"outlined",label:"Medium (default)",mIcon:e})]})}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"black",variant:"icon",size:"small",mIcon:e}),n.jsx(o,{color:"black",variant:"icon",mIcon:e})]})}),n.jsx("h2",{children:"Buttons that open menus"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"outlined",label:"Dropdown with Icons",menuItems:w}),n.jsx(o,{color:"blue",variant:"outlined",label:"Dropdown with text",menuItems:B}),n.jsx(o,{color:"blue",variant:"outlined",label:"Dropdown with colored icons",menuItems:j}),n.jsx(o,{color:"blue",variant:"icon",mIcon:a,menuItems:w})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on click"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),label:"With Popover"}),n.jsx(o,{color:"blue",variant:"icon",mIcon:z,popover:n.jsx("p",{children:"Helper Text"}),popoverEvent:"onClick"})]})}),n.jsx("h2",{children:"Buttons that triggers Popover on hover"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"blue",variant:"outlined",popover:n.jsx("p",{children:"Popover Content"}),popoverEvent:"onHover",label:"With Popover"}),n.jsx(o,{color:"blue",variant:"icon",mIcon:z,popoverEvent:"onHover",popover:n.jsx("p",{children:"Helper Text"})})]})}),n.jsx("h2",{children:"Buttons with custom attrs"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"black",variant:"outlined",label:"With data attribute",attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}}),n.jsx(o,{color:"black",variant:"icon",mIcon:e,attrs:{"data-foo":"foo value"},muiAttrs:{"data-bar":"bar value"}})]})}),n.jsx("h2",{children:"Buttons with tooltips"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"black",variant:"outlined",label:"One",tooltip:"I can haz a tooltip"}),n.jsx(o,{color:"black",variant:"outlined",label:"Two",tooltip:"I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long. I can haz a tooltip. That's really really long."})]})}),n.jsx("h2",{children:"Buttons with href that turn into a tags"}),n.jsx("div",{children:n.jsxs(t,{children:[n.jsx(o,{color:"black",variant:"outlined",label:"With Link",href:"https://www.google.com/"}),n.jsx(o,{color:"black",variant:"outlined",label:"With Link and click handler",href:"https://www.bing.com/",onClick:function(v){v.preventDefault(),alert("Click handler")}}),n.jsx(o,{color:"blue",variant:"icon",mIcon:e,onClick:l,size:"small",href:"https://www.google.com/"})]})})]})};var R,P,L;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`({
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
}`,...(L=(P=u.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var O,M,E;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(E=(M=b.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const jn=["Playground","KitchenSink"],Ln=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:b,Playground:u,__namedExportsOrder:jn,default:pn},Symbol.toStringTag,{value:"Module"}));export{u as P,Ln as s};
