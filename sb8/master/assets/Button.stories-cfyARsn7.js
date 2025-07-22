import{r as z,j as n}from"./jsx-runtime-EKYJJIwR.js";import{g as T,r as K}from"./index-D0AnReJb.js";import{B as e}from"./Button-B-HROxGS.js";import{C as G}from"./Create-CiSRifbU.js";import{A as l}from"./Add-BJ5QuHLi.js";import{O as J}from"./OpenInNew-6tRCXUeX.js";import{r as E}from"./styled-Cb9FMILg.js";import{r as P}from"./createSvgIcon-DtczVsqP.js";import{C as N}from"./CloudDownload-D9naCuWK.js";import{u as U}from"./useToggle-CTbnrs6g.js";import{b as X,t as Y,a as Q,c as Z}from"./toggleOptions-1cXvXfFl.js";import"./Typography-DqP6CXHW.js";import{D as $}from"./DisplayText-DfbYD38Q.js";import{s as h}from"./styled-components.browser.esm-njFAddlw.js";import{B as nn}from"./BodyText-oRMinGv2.js";var d={},I;function tn(){if(I)return d;I=1;var a=E();Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var t=a(P()),s=z();return d.default=(0,t.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),d}var en=tn();const i=T(en);var c={},g;function on(){if(g)return c;g=1;var a=E();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var t=a(P()),s=z();return c.default=(0,t.default)((0,s.jsx)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"}),"FormatListBulletedOutlined"),c}var ln=on();const an=T(ln),rn=h.div`
	margin-bottom: 24px;
`,b=h.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	gap: 32px;
	margin-bottom: 16px;
`,o=h.div`
	align-items: center;
	display: flex;
	justify-content: center;
	flex: 1 0 auto;
`,sn=h($).attrs({size:"xs"})`
	margin-bottom: 12px;
`,dn={title:"Components/Button",parameters:{layout:"centered"}},cn=[{label:"Edit",mIcon:G,onClick:function(){alert("EDIT CLICK")}},{label:"Download",mIcon:N,onClick:function(){alert("DOWNLOAD CLICK")}}],r=({buttonIntent:a,buttonVariant:t,disabled:s,fullWidth:m,href:M,iconColor:A,iconPosition:k,label:R,labelText:S,menuItems:O,popover:_,popoverEvent:D,show:W,showIcon:F,size:q,tooltip:p})=>{const v=p?p==="string"?"Tooltip string":n.jsx("h2",{children:"Tooltip as an H2"}):void 0,H={name:"show",onClick:()=>alert("Clicked"),show:Y[W],intent:a,variant:t},V=U(H,"show");return K.useEffect(()=>{const x=document.createElement("style");x.innerHTML=".sb-show-main.sb-main-centered #storybook-root { padding: 0; }";const B=()=>{document.head.contains(x)&&document.head.removeChild(x)};return m?document.head.appendChild(x):B(),()=>{B()}},[m]),n.jsx("div",{style:{width:m?"100vw":void 0},children:V&&n.jsx(e,{label:R==="String"?S:n.jsx(an,{}),variant:t,intent:a,fullWidth:m,disabled:X[s],tooltip:v,size:q,mIcon:F?l:void 0,mIconColor:A,href:M?"https://www.google.com/":null,iconPosition:k,popover:_&&!v&&n.jsx("p",{children:"Popover Content"}),popoverEvent:D,menuItems:O&&cn})})};r.args={buttonIntent:"primary",buttonVariant:"contained",disabled:"Undefined",fullWidth:!1,href:!1,iconColor:"",iconPosition:"left",label:"String",labelText:"Text",menuItems:!1,popover:!1,popoverEvent:"onClick",show:"Undefined",showIcon:!1,size:"medium",tooltip:null};r.argTypes={buttonIntent:{options:["primary","secondary","tertiary","info","specialized","danger"],control:{type:"select"},name:"Intent"},buttonVariant:{options:["text","contained"],control:{type:"select"},name:"Variant"},disabled:{options:Z,control:{type:"select"},name:"Disabled"},fullWidth:{name:"Full Width"},href:{name:"URL (href)"},iconColor:{options:["black","blue","lightBlue","red","yellow","teal","gray","white"],control:{type:"select"},name:"Icon Color"},iconPosition:{options:["left","right"],control:{type:"select"},name:"Icon Position"},label:{options:["String","JSX"],control:{type:"select"},name:"Label"},labelText:{name:"Label Text"},menuItems:{name:"Menu Items"},popover:{name:"Popover"},popoverEvent:{options:["onClick","onHover"],control:{type:"select"},name:"Popover Event"},show:{options:Q,control:{type:"select"},name:"Show"},showIcon:{name:"Show Icon"},size:{options:["small","medium"],control:{type:"select"},name:"Size"},tooltip:{options:["string","JSX",null],control:{type:"select"},name:"Tooltip"}};const un={Primary:"primary",Secondary:"secondary",Tertiary:"tertiary",Info:"info",Danger:"danger",Specialized:"specialized"},u=()=>n.jsx("div",{children:Object.entries(un).map(([a,t])=>n.jsxs("div",{children:[n.jsx(sn,{children:a}),n.jsxs(rn,{children:[n.jsxs(b,{children:[n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:l})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:i,iconPosition:"right"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",mIcon:l})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:l})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:i,iconPosition:"right"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",mIcon:l})})]}),n.jsxs(b,{children:[n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:l,disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:i,iconPosition:"right",disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",mIcon:l,disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:l,disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:i,iconPosition:"right",disabled:!0})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",mIcon:l,disabled:!0})})]}),n.jsxs(b,{children:[n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:l,size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:i,iconPosition:"right",size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",mIcon:l,size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:l,size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:i,iconPosition:"right",size:"small"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",mIcon:l,size:"small"})})]}),n.jsxs(b,{children:[n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:l,size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",label:"Label",mIcon:i,iconPosition:"right",size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"contained",mIcon:l,size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:l,size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",label:"Label",mIcon:i,iconPosition:"right",size:"xsmall"})}),n.jsx(o,{children:n.jsx(e,{intent:t,variant:"text",mIcon:l,size:"xsmall"})})]})]}),n.jsxs(nn,{attrs:{style:{maxWidth:700,margin:"0 auto 15px",textAlign:"center"}},children:[n.jsx(n.Fragment,{children:"This is a body of text used to demonstrate a button with the inline size. This button can be nested amongst a large paragraph of text, but will inherit the font size, line height of the text that surrounds it. It works just like the one you see"})," ",n.jsx(e,{intent:t,variant:"text",label:"here",size:"inherit"}),". ",n.jsx(n.Fragment,{children:"You can even include an icon"})," ",n.jsx(e,{intent:t,variant:"text",label:"like this",size:"inherit",mIcon:J,href:"https://www.google.com",muiAttrs:{target:"_blank"}})," ","and it fits in there nice and snug."]})]},a))});var j,C,f;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
  const tooltipType = tooltip ? tooltip === "string" ? "Tooltip string" : <h2>Tooltip as an H2</h2> : undefined;
  const action = {
    name: "show",
    onClick: () => alert("Clicked"),
    show: toggleMap[show],
    intent: buttonIntent,
    variant: buttonVariant
  };
  const showButton = useToggle(action, "show");
  React.useEffect(() => {
    // When displaying the button full width, we need to remove Storybook's default padding
    const styleTag = document.createElement("style");
    styleTag.innerHTML = ".sb-show-main.sb-main-centered #storybook-root { padding: 0; }";
    const remove = () => {
      if (document.head.contains(styleTag)) {
        document.head.removeChild(styleTag);
      }
    };
    if (fullWidth) {
      document.head.appendChild(styleTag);
    } else {
      remove();
    }
    return () => {
      remove();
    };
  }, [fullWidth]);
  return <div style={{
    width: fullWidth ? "100vw" : undefined
  }}>
            {showButton && <Button label={label === "String" ? labelText : <FormatListBulletedOutlinedIcon />} variant={buttonVariant} intent={buttonIntent} fullWidth={fullWidth} disabled={toggleMapInverse[disabled]} tooltip={tooltipType} size={size} mIcon={showIcon ? AddIcon : undefined} mIconColor={iconColor} href={href ? "https://www.google.com/" : null} iconPosition={iconPosition} popover={popover && !tooltipType && <p>Popover Content</p>} popoverEvent={popoverEvent} menuItems={menuItems && dropdownWithIcons} />}
        </div>;
}`,...(f=(C=r.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var y,L,w;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(w=(L=u.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const mn=["Playground","KitchenSink"],Tn=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:u,Playground:r,__namedExportsOrder:mn,default:dn},Symbol.toStringTag,{value:"Module"}));export{r as P,Tn as s};
