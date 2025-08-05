import{r as w,j as t}from"./jsx-runtime-EKYJJIwR.js";import{B as e}from"./Button-BOlAo_yO.js";import{C as q}from"./Create-CiSRifbU.js";import{A as l}from"./Add-BJ5QuHLi.js";import{O as H}from"./OpenInNew-6tRCXUeX.js";import{g as z}from"./index-D0AnReJb.js";import{r as y}from"./styled-Cb9FMILg.js";import{r as P}from"./createSvgIcon-DtczVsqP.js";import{C as V}from"./CloudDownload-D9naCuWK.js";import{u as K}from"./useToggle-CTbnrs6g.js";import{b as G,t as J,a as N,c as U}from"./toggleOptions-1cXvXfFl.js";import{u as X}from"./useStretchedWidthStory-CuY1g7oB.js";import"./Typography-DBsSg8HG.js";import{D as Y}from"./DisplayText-Ip6DAA4t.js";import{s as x}from"./styled-components.browser.esm-njFAddlw.js";import{B as Q}from"./BodyText-BXaYeOOB.js";var c={},B;function Z(){if(B)return c;B=1;var i=y();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var n=i(P()),s=w();return c.default=(0,n.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),c}var $=Z();const a=z($);var d={},v;function tt(){if(v)return d;v=1;var i=y();Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var n=i(P()),s=w();return d.default=(0,n.default)((0,s.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"}),"FormatListBulletedOutlined"),d}var nt=tt();const et=z(nt),ot=x.div`
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
`,lt=x(Y).attrs({size:"xs"})`
	margin-bottom: 12px;
`,it={title:"Components/Button",parameters:{layout:"centered"}},at=[{label:"Edit",mIcon:q,onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:V,onClick:function(){alert("DOWNLOAD CLICK")}}],r=({buttonIntent:i,buttonVariant:n,disabled:s,fullWidth:b,href:E,iconColor:T,iconPosition:M,label:S,labelText:A,menuItems:O,popover:R,popoverEvent:k,show:_,showIcon:D,size:W,tooltip:p})=>{X(b);const h=p?p==="string"?"Tooltip string":t.jsx("h2",{children:"Tooltip as an H2"}):void 0,F={name:"show",onClick:()=>alert("Clicked"),show:J[_],intent:i,variant:n};return K(F,"show")?t.jsx(e,{label:S==="String"?A:t.jsx(et,{}),variant:n,intent:i,fullWidth:b,disabled:G[s],tooltip:h,size:W,mIcon:D?l:void 0,mIconColor:T,href:E?"https://www.google.com/":null,iconPosition:M,popover:R&&!h&&t.jsx("p",{children:"Popover Content"}),popoverEvent:k,menuItems:O&&at}):null};r.args={buttonIntent:"primary",buttonVariant:"contained",disabled:"Undefined",fullWidth:!1,href:!1,iconColor:"",iconPosition:"left",label:"String",labelText:"Text",menuItems:!1,popover:!1,popoverEvent:"onClick",show:"Undefined",showIcon:!1,size:"medium",tooltip:null};r.argTypes={buttonIntent:{options:["primary","secondary","tertiary","info","specialized","danger"],control:{type:"select"},name:"Intent"},buttonVariant:{options:["text","contained"],control:{type:"select"},name:"Variant"},disabled:{options:U,control:{type:"select"},name:"Disabled"},fullWidth:{name:"Full Width"},href:{name:"URL (href)"},iconColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Icon Color"},iconPosition:{options:["left","right"],control:{type:"select"},name:"Icon Position"},label:{options:["String","JSX"],control:{type:"select"},name:"Label"},labelText:{name:"Label Text"},menuItems:{name:"Menu Items"},popover:{name:"Popover"},popoverEvent:{options:["onClick","onHover"],control:{type:"select"},name:"Popover Event"},show:{options:N,control:{type:"select"},name:"Show"},showIcon:{name:"Show Icon"},size:{options:["small","medium"],control:{type:"select"},name:"Size"},tooltip:{options:["string","JSX",null],control:{type:"select"},name:"Tooltip"}};const rt={Primary:"primary",Secondary:"secondary",Tertiary:"tertiary",Info:"info",Danger:"danger",Specialized:"specialized"},u=()=>t.jsx("div",{children:Object.entries(rt).map(([i,n])=>t.jsxs("div",{children:[t.jsx(lt,{children:i}),t.jsxs(ot,{children:[t.jsxs(m,{children:[t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",mIcon:l})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",mIcon:a,iconPosition:"right"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",mIcon:l})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",mIcon:l})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",mIcon:a,iconPosition:"right"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",mIcon:l})})]}),t.jsxs(m,{children:[t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",disabled:!0})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",mIcon:l,disabled:!0})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",mIcon:a,iconPosition:"right",disabled:!0})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",mIcon:l,disabled:!0})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",disabled:!0})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",mIcon:l,disabled:!0})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",mIcon:a,iconPosition:"right",disabled:!0})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",mIcon:l,disabled:!0})})]}),t.jsxs(m,{children:[t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",size:"small"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",mIcon:l,size:"small"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",mIcon:a,iconPosition:"right",size:"small"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",mIcon:l,size:"small"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",size:"small"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",mIcon:l,size:"small"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",mIcon:a,iconPosition:"right",size:"small"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",mIcon:l,size:"small"})})]}),t.jsxs(m,{children:[t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",size:"xsmall"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",mIcon:l,size:"xsmall"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",label:"Label",mIcon:a,iconPosition:"right",size:"xsmall"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"contained",mIcon:l,size:"xsmall"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",size:"xsmall"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",mIcon:l,size:"xsmall"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",label:"Label",mIcon:a,iconPosition:"right",size:"xsmall"})}),t.jsx(o,{children:t.jsx(e,{intent:n,variant:"text",mIcon:l,size:"xsmall"})})]})]}),t.jsxs(Q,{attrs:{style:{maxWidth:700,margin:"0 auto 15px",textAlign:"center"}},children:[t.jsx(t.Fragment,{children:"This is a body of text used to demonstrate a button with the inline size. This button can be nested amongst a large paragraph of text, but will inherit the font size, line height of the text that surrounds it. It works just like the one you see"})," ",t.jsx(e,{intent:n,variant:"text",label:"here",size:"inherit"}),". ",t.jsx(t.Fragment,{children:"You can even include an icon"})," ",t.jsx(e,{intent:n,variant:"text",label:"like this",size:"inherit",mIcon:H,href:"https://www.google.com",muiAttrs:{target:"_blank"}})," ","and it fits in there nice and snug."]})]},i))});var I,g,j;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`({
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
  tooltip
}: typeof Playground.args): ReactElement => {
  useStretchedWidthStory(fullWidth);
  const tooltipType = tooltip ? tooltip === "string" ? "Tooltip string" : <h2>Tooltip as an H2</h2> : undefined;
  const action = {
    name: "show",
    onClick: () => alert("Clicked"),
    show: toggleMap[show],
    intent: buttonIntent,
    variant: buttonVariant
  };
  const showButton = useToggle(action, "show");
  if (!showButton) {
    return null;
  }
  return <Button label={label === "String" ? labelText : <FormatListBulletedOutlinedIcon />} variant={buttonVariant} intent={buttonIntent} fullWidth={fullWidth} disabled={toggleMapInverse[disabled]} tooltip={tooltipType} size={size} mIcon={showIcon ? AddIcon : undefined} mIconColor={iconColor} href={href ? "https://www.google.com/" : null} iconPosition={iconPosition} popover={popover && !tooltipType && <p>Popover Content</p>} popoverEvent={popoverEvent} menuItems={menuItems && dropdownWithIcons} />;
}`,...(j=(g=r.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var C,f,L;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(L=(f=u.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};const st=["Playground","KitchenSink"],zt=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:u,Playground:r,__namedExportsOrder:st,default:it},Symbol.toStringTag,{value:"Module"}));export{r as P,zt as s};
