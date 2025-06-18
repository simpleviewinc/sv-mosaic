import{j as a}from"./jsx-runtime-EKYJJIwR.js";import{R as s,r as v}from"./index-D0AnReJb.js";import{F as j,d as Z,e as ee,f as ne,M as te,T as oe,g as ae,C as se,t as B,h as I,b as O,a as $,c as U,i as M}from"./column_transforms-BNRs9cPg.js";import{B as re}from"./ButtonRow-gAFOvWL6.js";import{T as le,B as ie}from"./index-Cc5HBuF_.js";import{t as y}from"./testIds-Dso8kRSM.js";import{u as ce,T as me}from"./Button-mgz2aTYm.js";import"./Typography-DKFSDQw0.js";import{T as ue}from"./Text-9y4gMspU.js";import{g as de}from"./useToggle-CTbnrs6g.js";import{C as fe}from"./ChipList-BHKNfYFT.js";import{E as z}from"./Edit-D0rgg9wP.js";import{a as pe,g as he,l as S,m as be,u as ge,_ as Ce,n as ye,s as ve,c as we,b as K,d as ke}from"./styled-BWOE7yIf.js";import{_ as w}from"./extends-CF3RwP-h.js";import{u as Te}from"./createSvgIcon-CFLdSkGK.js";import{T as _e}from"./Typography-DFZHALTz.js";function Le({tooltip:t}){const{anchorProps:e,tooltipProps:n}=ce();return s.createElement(s.Fragment,null,s.createElement(le,{...e,"data-testid":y.CONTENT_TOOLTIP_ICON}),s.createElement(me,{...n},t))}const xe=({label:t,transforms:e,value:n,tooltip:o})=>{const l=v.useMemo(()=>n===void 0||n===""||Array.isArray(n)&&!n.length?s.createElement(ie,null):e?e.reduce((i,u)=>u({data:i}),n):n,[e,n]);return s.createElement(j,{"data-testid":y.CONTENT_FIELD,$margin:!0},s.createElement(Z,null,t,o&&s.createElement(Le,{tooltip:o})),s.createElement(ee,null,s.createElement(ne,null,l)))},k=t=>{const{fields:e,data:n,sections:o,title:l,buttons:i=[],variant:u}=t,d=u==="card",b=v.useMemo(()=>(o||e.map(({name:m,column:r})=>[r||m])).map((m,r)=>m.map((c,_)=>{const p=e.find(({name:L,column:x})=>(x||L)===c);if(c&&!p)throw new Error(`No field declared for field name '${c}'. (section ${r}, row ${_})`);if(!(p&&!de(p.show,!0)))return p})).filter(m=>m.flat().length),[e,o]);return n?s.createElement(te,{className:d?"card-wrapper":"content-wrapper","data-testid":y.CONTENT},s.createElement(oe,{className:d?"title-bar":""},s.createElement(ue,{maxLines:1,tag:"h3",size:"lg",weight:"medium"},l),i.length>0&&s.createElement(re,{buttons:i,separator:!d})),s.createElement(ae,{className:d?"card-content":""},b.map((f,m)=>s.createElement(se,{key:`${m}-row`,className:d?"card-row":"",$columns:f.length,"data-testid":y.CONTENT_ROW},f.map((r,c)=>r?s.createElement(xe,{...r,key:r.name,value:n[r.column||r.name]}):s.createElement(j,{key:c,"data-testid":y.CONTENT_FIELD})))))):null};function Ee(t){return he("MuiLink",t)}const Fe=pe("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),H={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Me=t=>H[t]||t,Se=({theme:t,ownerState:e})=>{const n=Me(e.color),o=S(t,`palette.${n}`,!1)||e.color,l=S(t,`palette.${n}Channel`);return"vars"in t&&l?`rgba(${l} / 0.4)`:be.alpha(o,.4)},De=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Pe=t=>{const{classes:e,component:n,focusVisible:o,underline:l}=t,i={root:["root",`underline${K(l)}`,n==="button"&&"button",o&&"focusVisible"]};return ke(i,Ee,e)},Ve=ve(_e,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`underline${K(n.underline)}`],n.component==="button"&&e.button]}})(({theme:t,ownerState:e})=>w({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&w({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:Se({theme:t,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Fe.focusVisible}`]:{outline:"auto"}})),D=v.forwardRef(function(e,n){const o=ge({props:e,name:"MuiLink"}),{className:l,color:i="primary",component:u="a",onBlur:d,onFocus:b,TypographyClasses:f,underline:m="always",variant:r="inherit",sx:c}=o,_=Ce(o,De),{isFocusVisibleRef:p,onBlur:L,onFocus:x,ref:q}=Te(),[G,E]=v.useState(!1),J=ye(n,q),Q=g=>{L(g),p.current===!1&&E(!1),d&&d(g)},X=g=>{x(g),p.current===!0&&E(!0),b&&b(g)},F=w({},o,{color:i,component:u,focusVisible:G,underline:m,variant:r}),Y=Pe(F);return a.jsx(Ve,w({color:i,className:we(Y.root,l),classes:f,component:u,onBlur:Q,onFocus:X,ref:J,ownerState:F,variant:r,sx:[...Object.keys(H).includes(i)?[]:[{color:i}],...Array.isArray(c)?c:[c]]},_))}),We={title:"Components/Content"},Re=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],T={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:a.jsx(fe,{options:Re}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],cars:[{id:1,make:"BMW",model:"M3"},{id:2,make:"Volkswagen",model:"Golf"}],multipleTransforms:"This is some text",fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit."},Ae={"Single Column":[["tags"],["colorPicker"],["toggle"],["date"],["thumbnail"],["chipsAsValue"],["animals"],["cars"],["multipleTransforms"]],"Two Columns":[["tags","colorPicker"],["toggle","date"],["thumbnail","chipsAsValue"],["animals","cars"],["multipleTransforms"]],"Three Columns":[["tags","colorPicker",void 0],["toggle","date","thumbnail"],["animals","cars","chipsAsValue"],["multipleTransforms"]]},h=({title:t,variant:e,sectionConfigKey:n,showButtons:o,showFirstRowItems:l,amountContent:i})=>{const[u,d]=v.useState(!1),b=()=>{d(!u)},f=[{name:"edit",label:"Edit",mIcon:z,color:"gray",variant:"icon",show:[o!=="undefined",Number(o)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:u?"Less Details":"More Details",onClick:b,show:[o!=="undefined",Number(o)>=2]}],m=[{name:"chips",label:"Chips using transform_chips()",tooltip:"This is a list of chips",transforms:[B()],column:"tags",show:l},{name:"toggle",label:"Toggle using transform_boolean()",tooltip:a.jsxs(a.Fragment,{children:["This came in as a boolean, but",a.jsx("br",{}),"will displayed as yes or no"]}),transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[$()],column:"colorPicker",show:l},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[U({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"animals",label:"Animals",transforms:[M({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"cars",label:"Cars",transforms:[M({columns:[{name:"make",label:"Make"},{name:"model",label:"Model"}]})]},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:c})=>a.jsx("div",{style:{color:"red"},children:c}),({data:c})=>a.jsx("div",{style:{fontSize:"2rem"},children:c})]}],r=Ae[n];return a.jsxs(a.Fragment,{children:[a.jsx(k,{title:t,data:T,fields:m,sections:r.slice(0,u?void 0:2),buttons:f,variant:e}),i===2&&a.jsx(k,{title:"Second content",data:T,fields:m,sections:r,variant:e})]})};h.args={title:"Main Content Title",variant:"standard",sectionConfigKey:"Single Column",showButtons:"2",showFirstRowItems:!0,amountContent:1};h.argTypes={title:{name:"Title"},variant:{name:"Variant",options:["standard","card"],control:{type:"select"}},sectionConfigKey:{name:"Sections",options:["Single Column","Two Columns","Three Columns"],control:{type:"select"}},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},showFirstRowItems:{name:"Show first row"},amountContent:{name:"Amount of contents",options:[1,2],control:{type:"select"}}};const C=()=>{const t=[{name:"edit",label:"Edit",mIcon:z,color:"gray",variant:"icon",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:"More Details",onClick:()=>alert("More details")}],e=[{name:"chips",label:"Chips using transform_chips()",transforms:[B()],column:"tags"},{name:"toggle",label:a.jsx(D,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[$()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[U({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:o})=>a.jsx(D,{href:o,children:o})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],n=[["tags","colorPicker",void 0],["toggle","date","colorPicker"],["thumbnail","chipsAsValue",void 0],["undefinedValue","emptyStringValue","emptyArrayValue"],["fieldWithLongWord","fieldWithLongURL","fieldWithLongSentence"]];return a.jsxs(a.Fragment,{children:[a.jsx(k,{title:"Standard content",data:T,fields:e,sections:n,buttons:t}),a.jsx("br",{}),a.jsx(k,{title:"Card content",data:T,fields:e,sections:n,buttons:t,variant:"card"})]})};var P,V,W;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
    label: "Edit",
    mIcon: EditIcon,
    color: "gray",
    variant: "icon",
    show: [showButtons !== "undefined", Number(showButtons) >= 1],
    onClick: function () {
      alert("Edit button clicked");
    }
  }, {
    name: "showDetails",
    color: "teal",
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
    label: "Edit",
    mIcon: EditIcon,
    color: "gray",
    variant: "icon",
    onClick: function () {
      alert("Edit button clicked");
    }
  }, {
    name: "showDetails",
    color: "teal",
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
}`,...(N=(A=C.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const Ne=["Playground","KitchenSink"],en=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:C,Playground:h,__namedExportsOrder:Ne,default:We},Symbol.toStringTag,{value:"Module"}));export{h as P,en as s};
