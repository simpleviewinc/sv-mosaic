import{j as a}from"./jsx-runtime-EKYJJIwR.js";import{R as s,r as v}from"./index-D0AnReJb.js";import{F as j,d as Z,e as nn,f as en,M as tn,T as on,g as an,C as sn,t as B,h as I,b as O,a as $,c as U,i as M}from"./column_transforms-DL3qq95c.js";import{B as rn}from"./ButtonRow-BcTDDHHE.js";import{B as ln}from"./index-IA84N_EK.js";import{t as y}from"./testIds-oQNwr1rf.js";import{T as cn}from"./StyledPopperPaper-BODJ-ail.js";import{u as mn,T as un,g as dn}from"./Button-Dlaq5vsb.js";import"./Typography-CZQzWHyE.js";import{T as fn}from"./Text-BjwqtcAz.js";import{C as pn}from"./ChipList-CT9ZnIEN.js";import{E as z}from"./Edit-Bk4AvtQF.js";import{a as hn,g as bn,k as S,l as gn,u as Cn,_ as yn,m as vn,s as wn,c as kn,b as Tn}from"./styled-Cb9FMILg.js";import{_ as w}from"./extends-CF3RwP-h.js";import{u as _n,c as K}from"./createSvgIcon-DtczVsqP.js";import{T as Ln}from"./Typography-CW8rULec.js";function xn({tooltip:t}){const{anchorProps:n,tooltipProps:e}=mn();return s.createElement(s.Fragment,null,s.createElement(cn,{...n,"data-testid":y.CONTENT_TOOLTIP_ICON}),s.createElement(un,{...e},t))}const En=({label:t,transforms:n,value:e,tooltip:o})=>{const i=v.useMemo(()=>e===void 0||e===""||Array.isArray(e)&&!e.length?s.createElement(ln,null):n?n.reduce((l,u)=>u({data:l}),e):e,[n,e]);return s.createElement(j,{"data-testid":y.CONTENT_FIELD,$margin:!0},s.createElement(Z,null,t,o&&s.createElement(xn,{tooltip:o})),s.createElement(nn,null,s.createElement(en,null,i)))},k=t=>{const{fields:n,data:e,sections:o,title:i,buttons:l=[],variant:u}=t,d=u==="card",b=v.useMemo(()=>(o||n.map(({name:m,column:r})=>[r||m])).map((m,r)=>m.map((c,_)=>{const p=n.find(({name:L,column:x})=>(x||L)===c);if(c&&!p)throw new Error(`No field declared for field name '${c}'. (section ${r}, row ${_})`);if(!(p&&!dn(p.show,!0)))return p})).filter(m=>m.flat().length),[n,o]);return e?s.createElement(tn,{className:d?"card-wrapper":"content-wrapper","data-testid":y.CONTENT},s.createElement(on,{className:d?"title-bar":""},s.createElement(fn,{maxLines:1,tag:"h3",size:"lg",weight:"medium"},i),l.length>0&&s.createElement(rn,{buttons:l,separator:!d})),s.createElement(an,{className:d?"card-content":""},b.map((f,m)=>s.createElement(sn,{key:`${m}-row`,className:d?"card-row":"",$columns:f.length,"data-testid":y.CONTENT_ROW},f.map((r,c)=>r?s.createElement(En,{...r,key:r.name,value:e[r.column||r.name]}):s.createElement(j,{key:c,"data-testid":y.CONTENT_FIELD})))))):null};function Fn(t){return bn("MuiLink",t)}const Mn=hn("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),H={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Sn=t=>H[t]||t,Dn=({theme:t,ownerState:n})=>{const e=Sn(n.color),o=S(t,`palette.${e}`,!1)||n.color,i=S(t,`palette.${e}Channel`);return"vars"in t&&i?`rgba(${i} / 0.4)`:gn.alpha(o,.4)},Pn=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Vn=t=>{const{classes:n,component:e,focusVisible:o,underline:i}=t,l={root:["root",`underline${K(i)}`,e==="button"&&"button",o&&"focusVisible"]};return Tn(l,Fn,n)},Wn=wn(Ln,{name:"MuiLink",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.root,n[`underline${K(e.underline)}`],e.component==="button"&&n.button]}})(({theme:t,ownerState:n})=>w({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&w({textDecoration:"underline"},n.color!=="inherit"&&{textDecorationColor:Dn({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Mn.focusVisible}`]:{outline:"auto"}})),D=v.forwardRef(function(n,e){const o=Cn({props:n,name:"MuiLink"}),{className:i,color:l="primary",component:u="a",onBlur:d,onFocus:b,TypographyClasses:f,underline:m="always",variant:r="inherit",sx:c}=o,_=yn(o,Pn),{isFocusVisibleRef:p,onBlur:L,onFocus:x,ref:q}=_n(),[G,E]=v.useState(!1),J=vn(e,q),Q=g=>{L(g),p.current===!1&&E(!1),d&&d(g)},X=g=>{x(g),p.current===!0&&E(!0),b&&b(g)},F=w({},o,{color:l,component:u,focusVisible:G,underline:m,variant:r}),Y=Vn(F);return a.jsx(Wn,w({color:l,className:kn(Y.root,i),classes:f,component:u,onBlur:Q,onFocus:X,ref:J,ownerState:F,variant:r,sx:[...Object.keys(H).includes(l)?[]:[{color:l}],...Array.isArray(c)?c:[c]]},_))}),Rn={title:"Components/Content"},An=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],T={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:a.jsx(pn,{options:An}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],cars:[{id:1,make:"BMW",model:"M3"},{id:2,make:"Volkswagen",model:"Golf"}],multipleTransforms:"This is some text",fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit."},Nn={"Single Column":[["tags"],["colorPicker"],["toggle"],["date"],["thumbnail"],["chipsAsValue"],["animals"],["cars"],["multipleTransforms"]],"Two Columns":[["tags","colorPicker"],["toggle","date"],["thumbnail","chipsAsValue"],["animals","cars"],["multipleTransforms"]],"Three Columns":[["tags","colorPicker",void 0],["toggle","date","thumbnail"],["animals","cars","chipsAsValue"],["multipleTransforms"]]},h=({title:t,variant:n,sectionConfigKey:e,showButtons:o,showFirstRowItems:i,amountContent:l})=>{const[u,d]=v.useState(!1),b=()=>{d(!u)},f=[{name:"edit",tooltip:"Edit",mIcon:z,intent:"secondary",variant:"text",show:[o!=="undefined",Number(o)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",intent:"info",variant:"text",label:u?"Less Details":"More Details",onClick:b,show:[o!=="undefined",Number(o)>=2]}],m=[{name:"chips",label:"Chips using transform_chips()",tooltip:"This is a list of chips",transforms:[B()],column:"tags",show:i},{name:"toggle",label:"Toggle using transform_boolean()",tooltip:a.jsxs(a.Fragment,{children:["This came in as a boolean, but",a.jsx("br",{}),"will displayed as yes or no"]}),transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[$()],column:"colorPicker",show:i},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[U({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"animals",label:"Animals",transforms:[M({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"cars",label:"Cars",transforms:[M({columns:[{name:"make",label:"Make"},{name:"model",label:"Model"}]})]},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:c})=>a.jsx("div",{style:{color:"red"},children:c}),({data:c})=>a.jsx("div",{style:{fontSize:"2rem"},children:c})]}],r=Nn[e];return a.jsxs(a.Fragment,{children:[a.jsx(k,{title:t,data:T,fields:m,sections:r.slice(0,u?void 0:2),buttons:f,variant:n}),l===2&&a.jsx(k,{title:"Second content",data:T,fields:m,sections:r,variant:n})]})};h.args={title:"Main Content Title",variant:"standard",sectionConfigKey:"Single Column",showButtons:"2",showFirstRowItems:!0,amountContent:1};h.argTypes={title:{name:"Title"},variant:{name:"Variant",options:["standard","card"],control:{type:"select"}},sectionConfigKey:{name:"Sections",options:["Single Column","Two Columns","Three Columns"],control:{type:"select"}},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},showFirstRowItems:{name:"Show first row"},amountContent:{name:"Amount of contents",options:[1,2],control:{type:"select"}}};const C=()=>{const t=[{name:"edit",tooltip:"Edit",mIcon:z,intent:"secondary",variant:"text",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",intent:"info",variant:"text",label:"More Details",onClick:()=>alert("More details")}],n=[{name:"chips",label:"Chips using transform_chips()",transforms:[B()],column:"tags"},{name:"toggle",label:a.jsx(D,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[$()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[U({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:o})=>a.jsx(D,{href:o,children:o})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],e=[["tags","colorPicker",void 0],["toggle","date","colorPicker"],["thumbnail","chipsAsValue",void 0],["undefinedValue","emptyStringValue","emptyArrayValue"],["fieldWithLongWord","fieldWithLongURL","fieldWithLongSentence"]];return a.jsxs(a.Fragment,{children:[a.jsx(k,{title:"Standard content",data:T,fields:n,sections:e,buttons:t}),a.jsx("br",{}),a.jsx(k,{title:"Card content",data:T,fields:n,sections:e,buttons:t,variant:"card"})]})};var P,V,W;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`({
  title,
  variant,
  sectionConfigKey,
  showButtons,
  showFirstRowItems,
  amountContent
}: typeof Playground.args): ReactElement => {
  const [showMore, setShowMore] = useState(false);

  /**
   * Toggles the state use to show or hide the content.
   */
  const showDetails = () => {
    setShowMore(!showMore);
  };
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
    label: showMore ? "Less Details" : "More Details",
    onClick: showDetails,
    show: [showButtons !== "undefined", Number(showButtons) >= 2]
  }];
  const fields: ContentFieldDef[] = [{
    name: "chips",
    label: "Chips using transform_chips()",
    tooltip: "This is a list of chips",
    transforms: [transform_chips()],
    column: "tags",
    show: showFirstRowItems
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
    name: "date",
    label: "Date using transform_dateFormat()",
    transforms: [transform_dateFormat()]
  }, {
    name: "color",
    label: "Color using transform_colorPicker()",
    transforms: [transform_colorPicker()],
    column: "colorPicker",
    show: showFirstRowItems
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
    name: "cars",
    label: "Cars",
    transforms: [transform_dataview({
      columns: [{
        name: "make",
        label: "Make"
      }, {
        name: "model",
        label: "Model"
      }]
    })]
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
  const sections = sectionConfigs[sectionConfigKey];
  return <>
            <Content title={title} data={data} fields={fields} sections={sections.slice(0, showMore ? undefined : 2)} buttons={buttons} variant={variant} />
            {amountContent === 2 && <Content title="Second content" data={data} fields={fields} sections={sections} variant={variant} />}
        </>;
}`,...(W=(V=h.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var R,A,N;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(N=(A=C.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const jn=["Playground","KitchenSink"],ee=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:C,Playground:h,__namedExportsOrder:jn,default:Rn},Symbol.toStringTag,{value:"Module"}));export{h as P,ee as s};
