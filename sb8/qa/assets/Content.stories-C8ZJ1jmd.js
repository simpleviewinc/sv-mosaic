import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{R as a,r as T}from"./index-ePW8zFKp.js";import{s as h}from"./styled-components.browser.esm-CUKKF2J4.js";import{C as nn,t as $}from"./sizes-1ZdlMWGC.js";import{c as en}from"./containerQuery-NPnQgBq-.js";import{C as tn,T as on}from"./StyledPopperPaper-8Ep909Ba.js";import{B as an}from"./index-CIMlfb90.js";import{t as v}from"./testIds-B6Pox1zA.js";import{u as rn,T as sn,g as ln}from"./Button-DrJO7SQT.js";import"./Typography-Bs-xuYxw.js";import{T as mn}from"./Text-cPxBJcyq.js";import{i as cn}from"./ButtonRow-Bjtqzf8D.js";import{a as un,b as dn}from"./Card.styled-Ca0cjgnS.js";import{C as pn}from"./CardHeading-CqHeNOLX.js";import{C as fn}from"./ChipList-DaRpkRZU.js";import{t as I,b as M,d as U,a as z,c as H,e as hn}from"./column_transforms-CZdzQdP2.js";import{E as Q}from"./Edit-FeaRtXtp.js";import{a as bn,g as gn,d as D,f as yn,u as Cn,_ as vn,h as kn,s as Ln,c as _n,b as xn}from"./styled-CTz4Upzp.js";import{_ as E}from"./extends-CF3RwP-h.js";import{u as Tn,c as q}from"./createSvgIcon-D3Hqnud2.js";import{T as En}from"./Typography-D0HGZ7B5.js";const wn=h.div`
	container-type: inline-size;
	container-name: ${nn.CONTENT};
`,Fn=h.dl(({$breakpoints:e})=>`
		display: grid;
		gap: 0 12px;
		width: 100%;
		margin: 0;
		grid-template-columns: repeat(1 ,minmax(0,1fr));

		${Object.entries(e).map(([t,o])=>`${en(t,"CONTENT")} {
			grid-template-columns: repeat(${o},minmax(0,1fr));
		}
		`).join(`
`)}
	`),K=h(tn).attrs({$gap:[2]})`
	${({$margin:e})=>e&&`
		margin-bottom: 24px;
	`}
`,Wn=h.dt`
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: ${$.weight.medium};
`,Sn=h.dd`
	margin: 0;
	width: 100%;
`,Vn=h.span`
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`,Dn=h.span`
	color: ${$.color.gray[800]};
`;function Nn({tooltip:e}){const{anchorProps:n,tooltipProps:t}=rn();return a.createElement(a.Fragment,null,a.createElement(on,{...n,"data-testid":v.CONTENT_TOOLTIP_ICON}),a.createElement(sn,{...t},e))}const Pn=({label:e,transforms:n,value:t,tooltip:o})=>{const i=T.useMemo(()=>t===void 0||t===""||Array.isArray(t)&&!t.length?a.createElement(an,null):n?n.reduce((l,m)=>m({data:l}),t):t,[n,t]);return a.createElement(K,{"data-testid":v.CONTENT_FIELD,$margin:!0},a.createElement(Wn,null,a.createElement(mn,{size:"md",line:"normal"},e),o&&a.createElement(Nn,{tooltip:o})),a.createElement(Sn,null,a.createElement(Vn,null,typeof i=="string"?a.createElement(Dn,null,i):cn(i)?i:null)))},S=e=>{const{fields:n,data:t,sections:o,title:i,buttons:l=[],columns:m}=e,u=T.useMemo(()=>{const p=[],b=o||n.map(({name:c,column:s})=>[s||c]);for(let c=0;c<b.length;c++){const s=b[c],{fields:d,breakpoints:F}=Array.isArray(s)?{fields:s,breakpoints:typeof m=="object"?m:{[typeof m=="string"?m:"md"]:s.length}}:s,g=[];for(let y=0;y<d.length;y++){const k=d[y],C=n.find(({name:W,column:x})=>(x||W)===k);if(k&&!C)throw new Error(`No field declared for field name '${k}'. (row ${c}, field ${y})`);C&&!ln(C.show,!0)||g.push(C)}g&&p.push({fields:g,breakpoints:F})}return p},[n,o]);return t?a.createElement(un,{"data-testid":v.CONTENT},a.createElement(pn,{buttons:l},i),a.createElement(dn,null,a.createElement(wn,{"data-testid":v.CONTENT_FIELD_LIST},u.map(({fields:p,breakpoints:b},c)=>a.createElement(Fn,{key:`${c}-row`,$breakpoints:b,"data-testid":v.CONTENT_ROW},p.map((s,d)=>s?a.createElement(Pn,{...s,key:s.name,value:t[s.column||s.name]}):a.createElement(K,{key:d,"data-testid":v.CONTENT_FIELD}))))))):null};function Rn(e){return gn("MuiLink",e)}const An=bn("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),G={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},jn=e=>G[e]||e,Bn=({theme:e,ownerState:n})=>{const t=jn(n.color),o=D(e,`palette.${t}`,!1)||n.color,i=D(e,`palette.${t}Channel`);return"vars"in e&&i?`rgba(${i} / 0.4)`:yn.alpha(o,.4)},On=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],$n=e=>{const{classes:n,component:t,focusVisible:o,underline:i}=e,l={root:["root",`underline${q(i)}`,t==="button"&&"button",o&&"focusVisible"]};return xn(l,Rn,n)},In=Ln(En,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${q(t.underline)}`],t.component==="button"&&n.button]}})(({theme:e,ownerState:n})=>E({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&E({textDecoration:"underline"},n.color!=="inherit"&&{textDecorationColor:Bn({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${An.focusVisible}`]:{outline:"auto"}})),N=T.forwardRef(function(n,t){const o=Cn({props:n,name:"MuiLink"}),{className:i,color:l="primary",component:m="a",onBlur:u,onFocus:p,TypographyClasses:b,underline:c="always",variant:s="inherit",sx:d}=o,F=vn(o,On),{isFocusVisibleRef:g,onBlur:y,onFocus:k,ref:C}=Tn(),[W,x]=T.useState(!1),J=kn(t,C),X=L=>{y(L),g.current===!1&&x(!1),u&&u(L)},Y=L=>{k(L),g.current===!0&&x(!0),p&&p(L)},V=E({},o,{color:l,component:m,focusVisible:W,underline:c,variant:s}),Z=$n(V);return r.jsx(In,E({color:l,className:_n(Z.root,i),classes:b,component:m,onBlur:X,onFocus:Y,ref:J,ownerState:V,variant:s,sx:[...Object.keys(G).includes(l)?[]:[{color:l}],...Array.isArray(d)?d:[d]]},F))}),Mn={title:"Components/Content",parameters:{layout:"centered"}},Un=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],w={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:r.jsx(fn,{options:Un}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit.",multipleTransforms:"This is some text"},f=({title:e,sections:n,showButtons:t,columns:o,columnBreakpoints:i})=>{const l=[{name:"edit",tooltip:"Edit",mIcon:Q,intent:"secondary",variant:"text",show:[t!=="undefined",Number(t)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",intent:"info",variant:"text",label:"Create Card",onClick:()=>alert("Create Card clicked"),show:[t!=="undefined",Number(t)>=2]}],m=[{name:"chips",label:"Chips using transform_chips()",tooltip:"This is a list of chips",transforms:[I()],column:"tags"},{name:"date",label:"Date using transform_dateFormat()",transforms:[M()]},{name:"toggle",label:"Toggle using transform_boolean()",tooltip:r.jsxs(r.Fragment,{children:["This came in as a boolean, but",r.jsx("br",{}),"will displayed as yes or no"]}),transforms:[U()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[z()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[H({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Undefined Value"},{name:"emptyStringValue",label:"Empty String"},{name:"emptyArrayValue",label:"Empty Array"},{name:"animals",label:"Animals",transforms:[hn({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL"},{name:"fieldWithLongSentence",label:"Long Sentence"},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:u})=>r.jsx("div",{style:{color:"red"},children:u}),({data:u})=>r.jsx("div",{style:{fontSize:"2rem"},children:u})]}];return r.jsx("div",{style:{maxWidth:"100%",width:1200},children:r.jsx(S,{title:e,data:w,fields:m,sections:n,buttons:l,columns:o!=="custom"?o:i})})};f.args={title:"Main Content Title",showButtons:"2",provideColumns:!1,columns:"md",columnBreakpoints:{md:2},sections:Object.keys(w).map(e=>[e])};f.argTypes={title:{name:"Title"},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},provideColumns:{name:"Provide Columns"},columns:{name:"Columns",options:["sm","md","lg","xl","2xl","custom"],control:{type:"select"},if:{arg:"provideColumns"}},columnBreakpoints:{name:"Column Breakpoints",if:{arg:"columns",eq:"custom"}},sections:{name:"Sections"}};const _=()=>{const e=[{name:"edit",tooltip:"Edit",mIcon:Q,intent:"secondary",variant:"text",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",intent:"info",variant:"text",label:"More Details",onClick:()=>alert("More details")}],n=[{name:"chips",label:"Chips using transform_chips()",transforms:[I()],column:"tags"},{name:"toggle",label:r.jsx(N,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[U()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[M()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[z()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[H({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:o})=>r.jsx(N,{href:o,children:o})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],t=[["tags","colorPicker",void 0],["toggle","date","colorPicker"],["thumbnail","chipsAsValue",void 0],["undefinedValue","emptyStringValue","emptyArrayValue"],["fieldWithLongWord","fieldWithLongURL","fieldWithLongSentence"]];return r.jsxs(r.Fragment,{children:[r.jsx(S,{title:"Standard content",data:w,fields:n,sections:t,buttons:e}),r.jsx("br",{}),r.jsx(S,{title:"Card content",data:w,fields:n,sections:t,buttons:e,variant:"card"})]})};var P,R,A;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
  }];
  return <div style={{
    maxWidth: "100%",
    width: 1200
  }}>
            <Content title={title} data={data} fields={fields} sections={sections} buttons={buttons} columns={columns !== "custom" ? columns : columnBreakpoints} />
        </div>;
}`,...(A=(R=f.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var j,B,O;_.parameters={..._.parameters,docs:{...(j=_.parameters)==null?void 0:j.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(O=(B=_.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const zn=["Playground","KitchenSink"],de=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:_,Playground:f,__namedExportsOrder:zn,default:Mn},Symbol.toStringTag,{value:"Module"}));export{de as s};
