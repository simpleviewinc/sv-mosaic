import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{R as a,r as T}from"./index-ePW8zFKp.js";import{s as h}from"./styled-components.browser.esm-CUKKF2J4.js";import{C as ne,t as I}from"./sizes-1ZdlMWGC.js";import{c as te}from"./containerQuery-NPnQgBq-.js";import{C as oe,T as ae}from"./StyledPopperPaper-D2kQT34B.js";import{B as V}from"./index-Jf7sHHIT.js";import{t as v}from"./testIds-B6Pox1zA.js";import{u as re,T as ie,g as se}from"./Button-BUa6dDgD.js";import"./Typography-Bs-xuYxw.js";import{T as le}from"./Text-cPxBJcyq.js";import{i as me}from"./ButtonRow-CKtT1B9L.js";import{C as ce,a as de,b as ue}from"./CardHeading-vMKjysYd.js";import{C as pe}from"./ChipList-Bh3gHNbK.js";import{t as M,b as U,d as z,a as H,c as Q,e as fe}from"./column_transforms-B27iFHdn.js";import{E as q}from"./Edit-FeaRtXtp.js";import{a as he,g as be,d as D,f as ge,u as ye,_ as Ce,h as ve,s as ke,c as Le,b as xe}from"./styled-CTz4Upzp.js";import{_ as E}from"./extends-CF3RwP-h.js";import{u as _e,c as K}from"./createSvgIcon-D3Hqnud2.js";import{T as Te}from"./Typography-D0HGZ7B5.js";const Ee=h.div`
	container-type: inline-size;
	container-name: ${ne.CONTENT};
`,we=h.dl(({$breakpoints:n})=>`
		display: grid;
		gap: 0 12px;
		width: 100%;
		margin: 0;
		grid-template-columns: repeat(1 ,minmax(0,1fr));

		${Object.entries(n).map(([t,o])=>`${te(t,"CONTENT")} {
			grid-template-columns: repeat(${o},minmax(0,1fr));
		}
		`).join(`
`)}
	`),G=h(oe).attrs({$gap:[2]})`
	${({$margin:n})=>n&&`
		margin-bottom: 24px;
	`}
`,Fe=h.dt`
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: ${I.weight.medium};
`,We=h.dd`
	margin: 0;
	width: 100%;
`,Ne=h.span`
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`,Se=h.span`
	color: ${I.color.gray[800]};
`;function Ve({tooltip:n}){const{anchorProps:e,tooltipProps:t}=re();return a.createElement(a.Fragment,null,a.createElement(ae,{...e,"data-testid":v.CONTENT_TOOLTIP_ICON}),a.createElement(ie,{...t},n))}const De=({label:n,transforms:e,value:t,tooltip:o})=>{const i=T.useMemo(()=>t===void 0||t===""||Array.isArray(t)&&!t.length?a.createElement(V,null):e?e.reduce((l,m)=>m({data:l}),t):t,[e,t]);return a.createElement(G,{"data-testid":v.CONTENT_FIELD,$margin:!0},a.createElement(Fe,null,a.createElement(le,{size:"md",line:"normal"},n),o&&a.createElement(Ve,{tooltip:o})),a.createElement(We,null,a.createElement(Ne,null,typeof i=="string"?a.createElement(Se,null,i):me(i)?i:a.createElement(V,null))))},N=n=>{const{fields:e,data:t,sections:o,title:i,buttons:l=[],columns:m}=n,d=T.useMemo(()=>{const p=[],b=o||e.map(({name:c,column:s})=>[s||c]);for(let c=0;c<b.length;c++){const s=b[c],{fields:u,breakpoints:F}=Array.isArray(s)?{fields:s,breakpoints:typeof m=="object"?m:{[typeof m=="string"?m:"md"]:s.length}}:s,g=[];for(let y=0;y<u.length;y++){const k=u[y],C=e.find(({name:W,column:_})=>(_||W)===k);if(k&&!C)throw new Error(`No field declared for field name '${k}'. (row ${c}, field ${y})`);C&&!se(C.show,!0)||g.push(C)}g&&p.push({fields:g,breakpoints:F})}return p},[e,o]);return t?a.createElement(ce,{"data-testid":v.CONTENT},a.createElement(de,{buttons:l},i),a.createElement(ue,null,a.createElement(Ee,{"data-testid":v.CONTENT_FIELD_LIST},d.map(({fields:p,breakpoints:b},c)=>a.createElement(we,{key:`${c}-row`,$breakpoints:b,"data-testid":v.CONTENT_ROW},p.map((s,u)=>s?a.createElement(De,{...s,key:s.name,value:t[s.column||s.name]}):a.createElement(G,{key:u,"data-testid":v.CONTENT_FIELD}))))))):null};function Ae(n){return be("MuiLink",n)}const Pe=he("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),J={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Re=n=>J[n]||n,je=({theme:n,ownerState:e})=>{const t=Re(e.color),o=D(n,`palette.${t}`,!1)||e.color,i=D(n,`palette.${t}Channel`);return"vars"in n&&i?`rgba(${i} / 0.4)`:ge.alpha(o,.4)},Oe=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Be=n=>{const{classes:e,component:t,focusVisible:o,underline:i}=n,l={root:["root",`underline${K(i)}`,t==="button"&&"button",o&&"focusVisible"]};return xe(l,Ae,e)},$e=ke(Te,{name:"MuiLink",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[`underline${K(t.underline)}`],t.component==="button"&&e.button]}})(({theme:n,ownerState:e})=>E({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&E({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:je({theme:n,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Pe.focusVisible}`]:{outline:"auto"}})),A=T.forwardRef(function(e,t){const o=ye({props:e,name:"MuiLink"}),{className:i,color:l="primary",component:m="a",onBlur:d,onFocus:p,TypographyClasses:b,underline:c="always",variant:s="inherit",sx:u}=o,F=Ce(o,Oe),{isFocusVisibleRef:g,onBlur:y,onFocus:k,ref:C}=_e(),[W,_]=T.useState(!1),X=ve(t,C),Y=L=>{y(L),g.current===!1&&_(!1),d&&d(L)},Z=L=>{k(L),g.current===!0&&_(!0),p&&p(L)},S=E({},o,{color:l,component:m,focusVisible:W,underline:c,variant:s}),ee=Be(S);return r.jsx($e,E({color:l,className:Le(ee.root,i),classes:b,component:m,onBlur:Y,onFocus:Z,ref:X,ownerState:S,variant:s,sx:[...Object.keys(J).includes(l)?[]:[{color:l}],...Array.isArray(u)?u:[u]]},F))}),Ie={title:"Components/Content",parameters:{layout:"centered"}},Me=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],w={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:r.jsx(pe,{options:Me}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit.",multipleTransforms:"This is some text",arrayOfNodes:[r.jsx("div",{children:"Foo"},1),r.jsx("div",{children:"Bar"},2)]},f=({title:n,sections:e,showButtons:t,columns:o,columnBreakpoints:i})=>{const l=[{name:"edit",tooltip:"Edit",mIcon:q,intent:"secondary",variant:"text",show:[t!=="undefined",Number(t)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",intent:"info",variant:"text",label:"Create Card",onClick:()=>alert("Create Card clicked"),show:[t!=="undefined",Number(t)>=2]}],m=[{name:"chips",label:"Chips using transform_chips()",tooltip:"This is a list of chips",transforms:[M()],column:"tags"},{name:"date",label:"Date using transform_dateFormat()",transforms:[U()]},{name:"toggle",label:"Toggle using transform_boolean()",tooltip:r.jsxs(r.Fragment,{children:["This came in as a boolean, but",r.jsx("br",{}),"will displayed as yes or no"]}),transforms:[z()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[H()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[Q({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Undefined Value"},{name:"emptyStringValue",label:"Empty String"},{name:"emptyArrayValue",label:"Empty Array"},{name:"animals",label:"Animals",transforms:[fe({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL"},{name:"fieldWithLongSentence",label:"Long Sentence"},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:d})=>r.jsx("div",{style:{color:"red"},children:d}),({data:d})=>r.jsx("div",{style:{fontSize:"2rem"},children:d})]},{name:"arrayOfNodes",label:"Array of Nodes"}];return r.jsx("div",{style:{maxWidth:"100%",width:1200},children:r.jsx(N,{title:n,data:w,fields:m,sections:e,buttons:l,columns:o!=="custom"?o:i})})};f.args={title:"Main Content Title",showButtons:"2",provideColumns:!1,columns:"md",columnBreakpoints:{md:2},sections:Object.keys(w).map(n=>[n])};f.argTypes={title:{name:"Title"},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},provideColumns:{name:"Provide Columns"},columns:{name:"Columns",options:["sm","md","lg","xl","2xl","custom"],control:{type:"select"},if:{arg:"provideColumns"}},columnBreakpoints:{name:"Column Breakpoints",if:{arg:"columns",eq:"custom"}},sections:{name:"Sections"}};const x=()=>{const n=[{name:"edit",tooltip:"Edit",mIcon:q,intent:"secondary",variant:"text",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",intent:"info",variant:"text",label:"More Details",onClick:()=>alert("More details")}],e=[{name:"chips",label:"Chips using transform_chips()",transforms:[M()],column:"tags"},{name:"toggle",label:r.jsx(A,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[z()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[U()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[H()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[Q({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:o})=>r.jsx(A,{href:o,children:o})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],t=[["tags","colorPicker",void 0],["toggle","date","colorPicker"],["thumbnail","chipsAsValue",void 0],["undefinedValue","emptyStringValue","emptyArrayValue"],["fieldWithLongWord","fieldWithLongURL","fieldWithLongSentence"]];return r.jsxs(r.Fragment,{children:[r.jsx(N,{title:"Standard content",data:w,fields:e,sections:t,buttons:n}),r.jsx("br",{}),r.jsx(N,{title:"Card content",data:w,fields:e,sections:t,buttons:n,variant:"card"})]})};var P,R,j;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
}`,...(j=(R=f.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var O,B,$;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`(): ReactElement => {
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
}`,...($=(B=x.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const Ue=["Playground","KitchenSink"],dn=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:x,Playground:f,__namedExportsOrder:Ue,default:Ie},Symbol.toStringTag,{value:"Module"}));export{dn as s};
