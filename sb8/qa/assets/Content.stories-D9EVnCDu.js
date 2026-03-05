import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as a,r as E}from"./index-CDlOlYQx.js";import{c as b}from"./styled-components.browser.esm-CsHOGV45.js";import{C as X,t as I}from"./sizes-BeWafy6f.js";import{c as Y}from"./containerQuery-DwQ6QvMu.js";import{C as Z}from"./StyledPopperPaper-B1C6YiGY.js";import{T as ee}from"./TooltipIcon-CCmwqh__.js";import{B as N}from"./index-CLN1Uqsu.js";import{t as L}from"./testIds-B6Pox1zA.js";import{u as ne,T as te}from"./useTooltip-CvILwQ8N.js";import"./Typography-Bp-nXGcB.js";import{T as oe}from"./Text-B-CII8XP.js";import{i as ae}from"./ButtonRow-Cf2fXVyQ.js";import{g as re}from"./Button-DiGzPWWk.js";import{C as le,a as ie,b as se}from"./CardHeading-c7RPWGjr.js";import{C as ce}from"./ChipList-DMumVwBB.js";import{t as M,b as U,g as z,a as H,c as Q,h as me}from"./column_transforms-Dws3ATfH.js";import{E as q}from"./Edit-Byrv8R9l.js";import{a as de,g as ue,e as k,f as pe,u as fe,s as he,c as be,b as K,d as ge}from"./DefaultPropsProvider-t4VZgs2P.js";import{u as ye,T as Ce,c as ve,i as D}from"./Typography-BhjR1TGn.js";import{m as ke}from"./createSvgIcon-v5cQwfe7.js";const Le=b.div`
	container-type: inline-size;
	container-name: ${X.CONTENT};
`,xe=b.dl(({$breakpoints:e})=>`
		display: grid;
		gap: 0 12px;
		width: 100%;
		margin: 0;
		grid-template-columns: repeat(1 ,minmax(0,1fr));

		${Object.entries(e).map(([n,o])=>`${Y(n,"CONTENT")} {
			grid-template-columns: repeat(${o},minmax(0,1fr));
		}
		`).join(`
`)}
	`),G=b(Z).attrs({$gap:[2]})`
	${({$margin:e})=>e&&`
		margin-bottom: 24px;
	`}
`,we=b.dt`
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: ${I.weight.medium};
`,Te=b.dd`
	margin: 0;
	width: 100%;
`,_e=b.span`
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`,Ee=b.span`
	color: ${I.color.gray[800]};
`;function Se({tooltip:e}){const{anchorProps:t,tooltipProps:n}=ne();return a.createElement(a.Fragment,null,a.createElement(ee,{...t,"data-testid":L.CONTENT_TOOLTIP_ICON}),a.createElement(te,{...n},e))}const We=({label:e,transforms:t,value:n,tooltip:o})=>{const l=E.useMemo(()=>n===void 0||n===""||Array.isArray(n)&&!n.length?a.createElement(N,null):t?t.reduce((c,i)=>i({data:c}),n):n,[t,n]);return a.createElement(G,{"data-testid":L.CONTENT_FIELD,$margin:!0},a.createElement(we,null,a.createElement(oe,{size:"md",line:"normal"},e),o&&a.createElement(Se,{tooltip:o})),a.createElement(Te,null,a.createElement(_e,null,typeof l=="string"?a.createElement(Ee,null,l):ae(l)?l:a.createElement(N,null))))},F=e=>{const{fields:t,data:n,sections:o,title:l,buttons:c=[],columns:i}=e,d=E.useMemo(()=>{const u=[],p=o||t.map(({name:m,column:s})=>[s||m]);for(let m=0;m<p.length;m++){const s=p[m],{fields:f,breakpoints:x}=Array.isArray(s)?{fields:s,breakpoints:typeof i=="object"?i:{[typeof i=="string"?i:"md"]:s.length}}:s,g=[];for(let y=0;y<f.length;y++){const C=f[y],v=t.find(({name:W,column:w})=>(w||W)===C);if(C&&!v)throw new Error(`No field declared for field name '${C}'. (row ${m}, field ${y})`);v&&!re(v.show,!0)||g.push(v)}g&&u.push({fields:g,breakpoints:x})}return u},[t,o]);return n?a.createElement(le,{"data-testid":L.CONTENT},a.createElement(ie,{buttons:c},l),a.createElement(se,null,a.createElement(Le,{"data-testid":L.CONTENT_FIELD_LIST},d.map(({fields:u,breakpoints:p},m)=>a.createElement(xe,{key:`${m}-row`,$breakpoints:p,"data-testid":L.CONTENT_ROW},u.map((s,f)=>s?a.createElement(We,{...s,key:s.name,value:n[s.column||s.name]}):a.createElement(G,{key:f,"data-testid":L.CONTENT_FIELD}))))))):null};function Fe(e){return ue("MuiLink",e)}const Ne=de("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),De=({theme:e,ownerState:t})=>{const n=t.color;if("colorSpace"in e&&e.colorSpace){const c=k(e,`palette.${n}.main`)||k(e,`palette.${n}`)||t.color;return e.alpha(c,.4)}const o=k(e,`palette.${n}.main`,!1)||k(e,`palette.${n}`,!1)||t.color,l=k(e,`palette.${n}.mainChannel`)||k(e,`palette.${n}Channel`);return"vars"in e&&l?`rgba(${l} / 0.4)`:pe(o,.4)},V={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Ve=e=>{const{classes:t,component:n,focusVisible:o,underline:l}=e,c={root:["root",`underline${K(l)}`,n==="button"&&"button",o&&"focusVisible"]};return ge(c,Fe,t)},Pe=he(Ce,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${K(n.underline)}`],n.component==="button"&&t.button]}})(ke(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:t,ownerState:n})=>t==="always"&&n.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},{props:({underline:t,ownerState:n})=>t==="always"&&n.color==="inherit",style:e.colorSpace?{textDecorationColor:e.alpha("currentColor",.4)}:null},...Object.entries(e.palette).filter(ve()).map(([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":e.alpha((e.vars||e).palette[t].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.alpha((e.vars||e).palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.alpha((e.vars||e).palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ne.focusVisible}`]:{outline:"auto"}}}]}))),P=E.forwardRef(function(t,n){const o=fe({props:t,name:"MuiLink"}),l=ye(),{className:c,color:i="primary",component:d="a",onBlur:u,onFocus:p,TypographyClasses:m,underline:s="always",variant:f="inherit",sx:x,...g}=o,[y,C]=E.useState(!1),v=T=>{D(T.target)||C(!1),u&&u(T)},W=T=>{D(T.target)&&C(!0),p&&p(T)},w={...o,color:i,component:d,focusVisible:y,underline:s,variant:f},J=Ve(w);return r.jsx(Pe,{color:i,className:be(J.root,c),classes:m,component:d,onBlur:v,onFocus:W,ref:n,ownerState:w,variant:f,...g,sx:[...V[i]===void 0?[{color:i}]:[],...Array.isArray(x)?x:[x]],style:{...g.style,...s==="always"&&i!=="inherit"&&!V[i]&&{"--Link-underlineColor":De({theme:l,ownerState:w})}}})}),Ae={title:"Components/Content",parameters:{layout:"centered"}},Re=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],S={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:r.jsx(ce,{options:Re}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit.",multipleTransforms:"This is some text",arrayOfNodes:[r.jsx("div",{children:"Foo"},1),r.jsx("div",{children:"Bar"},2)]},h=({title:e,sections:t,showButtons:n,columns:o,columnBreakpoints:l})=>{const c=[{name:"edit",tooltip:"Edit",mIcon:q,intent:"secondary",variant:"text",show:[n!=="undefined",Number(n)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",intent:"info",variant:"text",label:"Create Card",onClick:()=>alert("Create Card clicked"),show:[n!=="undefined",Number(n)>=2]}],i=[{name:"chips",label:"Chips using transform_chips()",tooltip:"This is a list of chips",transforms:[M()],column:"tags"},{name:"date",label:"Date using transform_dateFormat()",transforms:[U()]},{name:"toggle",label:"Toggle using transform_boolean()",tooltip:r.jsxs(r.Fragment,{children:["This came in as a boolean, but",r.jsx("br",{}),"will displayed as yes or no"]}),transforms:[z()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[H()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[Q({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Undefined Value"},{name:"emptyStringValue",label:"Empty String"},{name:"emptyArrayValue",label:"Empty Array"},{name:"animals",label:"Animals",transforms:[me({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL"},{name:"fieldWithLongSentence",label:"Long Sentence"},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:d})=>r.jsx("div",{style:{color:"red"},children:d}),({data:d})=>r.jsx("div",{style:{fontSize:"2rem"},children:d})]},{name:"arrayOfNodes",label:"Array of Nodes"}];return r.jsx("div",{style:{maxWidth:"100%",width:1200},children:r.jsx(F,{title:e,data:S,fields:i,sections:t,buttons:c,columns:o!=="custom"?o:l})})};h.args={title:"Main Content Title",showButtons:"2",provideColumns:!1,columns:"md",columnBreakpoints:{md:2},sections:Object.keys(S).map(e=>[e])};h.argTypes={title:{name:"Title"},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},provideColumns:{name:"Provide Columns"},columns:{name:"Columns",options:["sm","md","lg","xl","2xl","custom"],control:{type:"select"},if:{arg:"provideColumns"}},columnBreakpoints:{name:"Column Breakpoints",if:{arg:"columns",eq:"custom"}},sections:{name:"Sections"}};const _=()=>{const e=[{name:"edit",tooltip:"Edit",mIcon:q,intent:"secondary",variant:"text",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",intent:"info",variant:"text",label:"More Details",onClick:()=>alert("More details")}],t=[{name:"chips",label:"Chips using transform_chips()",transforms:[M()],column:"tags"},{name:"toggle",label:r.jsx(P,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[z()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[U()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[H()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[Q({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:o})=>r.jsx(P,{href:o,children:o})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],n=[["tags","colorPicker",void 0],["toggle","date","colorPicker"],["thumbnail","chipsAsValue",void 0],["undefinedValue","emptyStringValue","emptyArrayValue"],["fieldWithLongWord","fieldWithLongURL","fieldWithLongSentence"]];return r.jsxs(r.Fragment,{children:[r.jsx(F,{title:"Standard content",data:S,fields:t,sections:n,buttons:e}),r.jsx("br",{}),r.jsx(F,{title:"Card content",data:S,fields:t,sections:n,buttons:e,variant:"card"})]})};var A,R,j;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`({
  title,
  sections,
  showButtons,
  columns,
  columnBreakpoints
}: typeof Playground.args): ReactElement => {
  const buttons: ButtonProps[] = [{
    name: "edit",
    tooltip: "Edit",
    mIcon: EditIcon,
    intent: "secondary",
    variant: "text",
    show: [showButtons !== "undefined", Number(showButtons) >= 1],
    onClick: function () {
      alert("Edit button clicked");
    }
  }, {
    name: "showDetails",
    intent: "info",
    variant: "text",
    label: "Create Card",
    onClick: () => alert("Create Card clicked"),
    show: [showButtons !== "undefined", Number(showButtons) >= 2]
  }];
  const fields: ContentFieldDef[] = [{
    name: "chips",
    label: "Chips using transform_chips()",
    tooltip: "This is a list of chips",
    transforms: [transform_chips()],
    column: "tags"
  }, {
    name: "date",
    label: "Date using transform_dateFormat()",
    transforms: [transform_dateFormat()]
  }, {
    name: "toggle",
    label: "Toggle using transform_boolean()",
    tooltip: <>
                    This came in as a boolean, but
                    <br />
                    will displayed as yes or no
                </>,
    transforms: [transform_boolean()]
  }, {
    name: "color",
    label: "Color using transform_colorPicker()",
    transforms: [transform_colorPicker()],
    column: "colorPicker"
  }, {
    name: "thumbnail",
    label: "Thumbnail using transform_thumbnail()",
    transforms: [transform_thumbnail({
      width: 150,
      height: 150
    })]
  }, {
    name: "chipsAsValue",
    label: "Chips with no transform only value"
  }, {
    name: "undefinedValue",
    label: "Undefined Value"
  }, {
    name: "emptyStringValue",
    label: "Empty String"
  }, {
    name: "emptyArrayValue",
    label: "Empty Array"
  }, {
    name: "animals",
    label: "Animals",
    transforms: [transform_dataview({
      columns: [{
        name: "species",
        label: "Species"
      }, {
        name: "color",
        label: "Color"
      }]
    })]
  }, {
    name: "fieldWithLongWord",
    label: "Long Word"
  }, {
    name: "fieldWithLongURL",
    label: "Long URL"
  }, {
    name: "fieldWithLongSentence",
    label: "Long Sentence"
  }, {
    name: "multipleTransforms",
    label: "Multiple Transforms",
    transforms: [({
      data
    }) => <div style={{
      color: "red"
    }}>{data as string}</div>, ({
      data
    }) => <div style={{
      fontSize: "2rem"
    }}>{data as React.ReactNode}</div>]
  }, {
    name: "arrayOfNodes",
    label: "Array of Nodes"
  }];
  return <div style={{
    maxWidth: "100%",
    width: 1200
  }}>
            <Content title={title} data={data} fields={fields} sections={sections} buttons={buttons} columns={columns !== "custom" ? columns : columnBreakpoints} />
        </div>;
}`,...(j=(R=h.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var $,O,B;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`(): ReactElement => {
  const buttons: ButtonProps[] = [{
    name: "edit",
    tooltip: "Edit",
    mIcon: EditIcon,
    intent: "secondary",
    variant: "text",
    onClick: function () {
      alert("Edit button clicked");
    }
  }, {
    name: "showDetails",
    intent: "info",
    variant: "text",
    label: "More Details",
    onClick: () => alert("More details")
  }];
  const fields: ContentFieldDef[] = [{
    name: "chips",
    label: "Chips using transform_chips()",
    transforms: [transform_chips()],
    column: "tags"
  }, {
    name: "toggle",
    label: <Link href="#">Toggle using transform_boolean()</Link>,
    transforms: [transform_boolean()]
  }, {
    name: "date",
    label: "Date using transform_dateFormat()",
    transforms: [transform_dateFormat()]
  }, {
    name: "color",
    label: "Color using transform_colorPicker()",
    transforms: [transform_colorPicker()],
    column: "colorPicker"
  }, {
    name: "thumbnail",
    label: "Thumbnail using transform_thumbnail()",
    transforms: [transform_thumbnail({
      width: 150,
      height: 150
    })]
  }, {
    name: "chipsAsValue",
    label: "Chips with no transform only value"
  }, {
    name: "undefinedValue",
    label: "Field with undefined value"
  }, {
    name: "emptyStringValue",
    label: "Field with empty string value"
  }, {
    name: "emptyArrayValue",
    label: "Field with empty array value"
  }, {
    name: "fieldWithLongWord",
    label: "Long Word"
  }, {
    name: "fieldWithLongURL",
    label: "Long URL",
    transforms: [({
      data
    }) => <Link href={data as string}>{data as string}</Link>]
  }, {
    name: "fieldWithLongSentence",
    label: "Long Sentence"
  }];
  const columns = [["tags", "colorPicker", undefined], ["toggle", "date", "colorPicker"], ["thumbnail", "chipsAsValue", undefined], ["undefinedValue", "emptyStringValue", "emptyArrayValue"], ["fieldWithLongWord", "fieldWithLongURL", "fieldWithLongSentence"]];
  return <>
            <Content title="Standard content" data={data} fields={fields} sections={columns} buttons={buttons} />
            <br />
            <Content title="Card content" data={data} fields={fields} sections={columns} buttons={buttons} variant="card" />
        </>;
}`,...(B=(O=_.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const je=["Playground","KitchenSink"],rn=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:_,Playground:h,__namedExportsOrder:je,default:Ae},Symbol.toStringTag,{value:"Module"}));export{rn as s};
