import{r as w,j as n}from"./jsx-runtime-EKYJJIwR.js";import{B as e}from"./Button-CIsIgYW9.js";import{C as G}from"./Create-VEUHusTL.js";import{A as l}from"./Add-DyToAZcG.js";import{O as J}from"./OpenInNew-BtmngEfl.js";import{g as z}from"./index-D0AnReJb.js";import{r as y}from"./styled-BWOE7yIf.js";import{r as T}from"./createSvgIcon-CFLdSkGK.js";import{C as N}from"./CloudDownload-CJZuuh6U.js";import{u as U}from"./useToggle-CTbnrs6g.js";import{b as X,t as Y,a as $,c as Q}from"./toggleOptions-1cXvXfFl.js";import"./Typography-Csn3cM8V.js";import{D as Z}from"./DisplayText-DsKn3JO_.js";import{s as x}from"./styled-components.browser.esm-njFAddlw.js";import{B as nn}from"./BodyText-xV26Tz9R.js";var c={},v;function tn(){if(v)return c;v=1;var a=y();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var t=a(T()),r=w();return c.default=(0,t.default)((0,r.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),c}var en=tn();const i=z(en);var d={},B;function on(){if(B)return d;B=1;var a=y();Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var t=a(T()),r=w();return d.default=(0,t.default)((0,r.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"}),"FormatListBulletedOutlined"),d}var ln=on();const an=z(ln),rn=x.div`
	margin-bottom: 24px;
`,m=x.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	gap: 32px;
	margin-bottom: 16px;
`,o=x.div`
	align-items: center;
	display: flex;
	justify-content: center;
	flex: 1 0 auto;
`,sn=x(Z).attrs({size:"xs"})`
	margin-bottom: 12px;
`,cn={title:"Components/Button",parameters:{layout:"centered"}},dn=[{label:"Edit",mIcon:G,onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:N,onClick:function(){alert("DOWNLOAD CLICK")}}],s=({backgroundColor:a,buttonIntent:t,buttonVariant:r,disabled:P,fullWidth:E,href:k,iconColor:M,iconPosition:A,label:S,labelText:O,menuItems:R,popover:_,popoverEvent:D,show:F,showIcon:W,size:q,smallText:H,tooltip:b})=>{const p=r==="icon"||W,h=b?b==="string"?"Tooltip string":n.jsx("h2",{children:"Tooltip as an H2"}):void 0,V={name:"show",onClick:()=>alert("Clicked"),show:Y[F],intent:t,variant:r},K=U(V,"show");return n.jsx("div",{style:{backgroundColor:a==="light"?"white":"#333",padding:20},children:K&&n.jsx(e,{attrs:{$smallText:H},label:S==="String"?O:n.jsx(an,{}),variant:r,intent:t,fullWidth:E,disabled:X[P],tooltip:h,size:q,mIcon:p&&l,mIconColor:p&&M,href:k?"https://www.google.com/":null,iconPosition:A,popover:_&&!h&&n.jsx("p",{children:"Popover Content"}),popoverEvent:D,menuItems:R&&dn})})};s.args={backgroundColor:"light",buttonIntent:"primary",buttonVariant:"contained",disabled:"Undefined",fullWidth:!1,href:!1,iconColor:"",iconPosition:"left",label:"String",labelText:"Text",menuItems:!1,popover:!1,popoverEvent:"onClick",show:"Undefined",showIcon:!1,size:"medium",smallText:!1,tooltip:null};s.argTypes={backgroundColor:{options:["light","dark"],control:{type:"select"},name:"Background Color"},buttonIntent:{options:["primary","secondary","tertiary","info","specialized","danger"],control:{type:"select"},name:"Intent"},buttonVariant:{options:["text","contained"],control:{type:"select"},name:"Variant"},disabled:{options:Q,control:{type:"select"},name:"Disabled"},fullWidth:{name:"Full Width"},href:{name:"URL (href)"},iconColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Icon Color"},iconPosition:{options:["left","right"],control:{type:"select"},name:"Icon Position"},label:{options:["String","JSX"],control:{type:"select"},name:"Label"},labelText:{name:"Label Text"},menuItems:{name:"Menu Items"},popover:{name:"Popover"},popoverEvent:{options:["onClick","onHover"],control:{type:"select"},name:"Popover Event"},show:{options:$,control:{type:"select"},name:"Show"},showIcon:{name:"Show Icon"},size:{options:["small","medium"],control:{type:"select"},name:"Size"},smallText:{name:"Small Text"},tooltip:{options:["string","JSX",null],control:{type:"select"},name:"Tooltip"}};const un={Primary:"primary",Secondary:"secondary",Tertiary:"tertiary",Info:"info",Danger:"danger",Specialized:"specialized"},u=()=>n.jsx("div",{children:Object.entries(un).map(([a,t])=>n.jsxs("div",{children:[n.jsx(sn,{children:a}),n.jsxs(rn,{children:[n.jsxs(m,{children:[n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:l})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:i,iconPosition:"right"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",mIcon:l})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:l})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:i,iconPosition:"right"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",mIcon:l})})]}),n.jsxs(m,{children:[n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:l,disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:i,iconPosition:"right",disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",mIcon:l,disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:l,disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:i,iconPosition:"right",disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",mIcon:l,disabled:!0})})]}),n.jsxs(m,{children:[n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:l,size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:i,iconPosition:"right",size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",mIcon:l,size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:l,size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:i,iconPosition:"right",size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",mIcon:l,size:"small"})})]}),n.jsxs(m,{children:[n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:l,size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:i,iconPosition:"right",size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",mIcon:l,size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:l,size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:i,iconPosition:"right",size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",mIcon:l,size:"xsmall"})})]})]}),n.jsxs(nn,{attrs:{style:{maxWidth:700,margin:"0 auto 15px",textAlign:"center"}},children:[n.jsx(n.Fragment,{children:"This is a body of text used to demonstrate a button with the inline size. This button can be nested amongst a large paragraph of text, but will inherit the font size, line height of the text that surrounds it. It works just like the one you see"})," ",n.jsx(e,{intent:t,variant:"text",label:"here",size:"inherit"}),". ",n.jsx(n.Fragment,{children:"You can even include an icon"})," ",n.jsx(e,{intent:t,variant:"text",label:"like this",size:"inherit",mIcon:J,href:"https://www.google.com",muiAttrs:{target:"_blank"}})," ","and it fits in there nice and snug."]})]},a))});var I,g,C;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`({
  backgroundColor,
  buttonIntent,
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
    intent: buttonIntent,
    variant: buttonVariant
  };
  const showButton = useToggle(action, "show");
  return <div style={{
    backgroundColor: backgroundColor === "light" ? "white" : "#333",
    padding: 20
  }}>
            {showButton && <Button attrs={{
      $smallText: smallText
    }} label={label === "String" ? labelText : <FormatListBulletedOutlinedIcon />} variant={buttonVariant} intent={buttonIntent} fullWidth={fullWidth} disabled={toggleMapInverse[disabled]} tooltip={tooltipType} size={size} mIcon={useIcon && AddIcon} mIconColor={useIcon && iconColor} href={href ? "https://www.google.com/" : null} iconPosition={iconPosition} popover={popover && !tooltipType && <p>Popover Content</p>} popoverEvent={popoverEvent} menuItems={menuItems && dropdownWithIcons} />}
        </div>;
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var j,f,L;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`(): ReactElement => {
  return <div>
            {Object.entries(buttonIntents).map(([header, intent]) => <div key={header}>
                    <ButtonHeading>{header}</ButtonHeading>
                    <ButtonGrid>
                        <ButtonRow>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" mIcon={AddIcon} />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" mIcon={ExpandMoreIcon} iconPosition="right" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" mIcon={AddIcon} />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" mIcon={AddIcon} />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" mIcon={ExpandMoreIcon} iconPosition="right" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" mIcon={AddIcon} />
                            </ButtonCell>
                        </ButtonRow>
                        <ButtonRow>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" disabled />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" mIcon={AddIcon} disabled />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" mIcon={ExpandMoreIcon} iconPosition="right" disabled />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" mIcon={AddIcon} disabled />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" disabled />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" mIcon={AddIcon} disabled />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" mIcon={ExpandMoreIcon} iconPosition="right" disabled />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" mIcon={AddIcon} disabled />
                            </ButtonCell>
                        </ButtonRow>
                        <ButtonRow>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" size="small" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" mIcon={AddIcon} size="small" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" mIcon={ExpandMoreIcon} iconPosition="right" size="small" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" mIcon={AddIcon} size="small" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" size="small" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" mIcon={AddIcon} size="small" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" mIcon={ExpandMoreIcon} iconPosition="right" size="small" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" mIcon={AddIcon} size="small" />
                            </ButtonCell>
                        </ButtonRow>
                        <ButtonRow>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" size="xsmall" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" mIcon={AddIcon} size="xsmall" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" label="Label" mIcon={ExpandMoreIcon} iconPosition="right" size="xsmall" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="contained" mIcon={AddIcon} size="xsmall" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" size="xsmall" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" mIcon={AddIcon} size="xsmall" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" label="Label" mIcon={ExpandMoreIcon} iconPosition="right" size="xsmall" />
                            </ButtonCell>
                            <ButtonCell>
                                <Button intent={intent} variant="text" mIcon={AddIcon} size="xsmall" />
                            </ButtonCell>
                        </ButtonRow>
                    </ButtonGrid>
                    <BodyText attrs={{
        style: {
          maxWidth: 700,
          margin: "0 auto 15px",
          textAlign: "center"
        }
      }}>
                        <>This is a body of text used to demonstrate a button with the inline size. This button can be nested amongst a large paragraph of text, but will inherit the font size, line height of the text that surrounds it. It works just like the one you see</>
                        {" "}
                        <Button intent={intent} variant="text" label="here" size="inherit" />
                        {". "}
                        <>You can even include an icon</>
                        {" "}
                        <Button intent={intent} variant="text" label="like this" size="inherit" mIcon={OpenInNewIcon} href="https://www.google.com" muiAttrs={{
          target: "_blank"
        }} />
                        {" "}
                        and it fits in there nice and snug.
                    </BodyText>
                </div>)}
        </div>;
}`,...(L=(f=u.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};const mn=["Playground","KitchenSink"],Tn=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:u,Playground:s,__namedExportsOrder:mn,default:cn},Symbol.toStringTag,{value:"Module"}));export{s as P,Tn as s};
