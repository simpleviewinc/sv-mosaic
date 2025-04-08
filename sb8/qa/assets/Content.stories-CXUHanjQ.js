import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as b}from"./index-D0AnReJb.js";import{F as N,b as Z,c as nn,d as en,M as tn,T as on,e as an,f as sn,a as rn}from"./Content.styled-C2-VlkM9.js";import{B as ln}from"./ButtonRow-CMfkAXvR.js";import{T as cn,B as mn}from"./Form-CgwovX7A.js";import{t as y}from"./testIds-Dso8kRSM.js";import{u as un,T as dn}from"./Button-DuPZ_syw.js";import"./Typography-CID4xQqz.js";import{S as fn}from"./SubtitleText-Bh4fpen4.js";import{g as hn}from"./useToggle-RmkKdcfw.js";import{C as pn}from"./Chip-Q_76qCVq.js";import{t as B,d as I,b as O,a as $,c as U,e as S}from"./column_transforms-CmIdK9K0.js";import{E as z}from"./Edit-CYdoYcNL.js";import{a as bn,g as gn,m as M,n as Cn,u as yn,b as vn,o as wn,_ as v,s as kn,c as xn,d as K,f as Tn}from"./styled-D_JiKFWz.js";import{u as _n}from"./createSvgIcon-DgkyijZl.js";import{T as Ln}from"./Typography-BFdiI4ZE.js";function Fn({tooltip:n}){const{anchorProps:t,tooltipProps:o}=un();return e.jsxs(e.Fragment,{children:[e.jsx(cn,{...t,"data-testid":y.CONTENT_TOOLTIP_ICON}),e.jsx(dn,{...o,children:n})]})}const jn=({label:n,transforms:t,value:o,tooltip:a})=>{const r=b.useMemo(()=>o===void 0||o===""||Array.isArray(o)&&!o.length?e.jsx(mn,{}):t?t.reduce((l,m)=>m({data:l}),o):o,[t,o]);return e.jsxs(N,{"data-testid":y.CONTENT_FIELD,$margin:!0,children:[e.jsxs(Z,{children:[n,a&&e.jsx(Fn,{tooltip:a})]}),e.jsx(nn,{children:e.jsx(en,{children:r})})]})},w=n=>{const{fields:t,data:o,sections:a,title:r,buttons:l=[],variant:m}=n,u=m==="card",p=b.useMemo(()=>(a||t.map(({name:c,column:s})=>[s||c])).map((c,s)=>c.map((i,x)=>{const f=t.find(({name:T,column:_})=>(_||T)===i);if(i&&!f)throw new Error(`No field declared for field name '${i}'. (section ${s}, row ${x})`);if(!(f&&!hn(f.show,!0)))return f})).filter(c=>c.flat().length),[t,a]);return o?e.jsxs(tn,{className:u?"card-wrapper":"content-wrapper","data-testid":y.CONTENT,children:[e.jsxs(on,{className:u?"title-bar":"",children:[e.jsx(fn,{maxLines:1,children:r}),l.length>0&&e.jsx(ln,{buttons:l,separator:!u})]}),e.jsx(an,{className:u?"card-content":"",children:p.map((d,c)=>e.jsx(sn,{className:u?"card-row":"",$columns:d.length,"data-testid":y.CONTENT_ROW,children:d.map((s,i)=>s?b.createElement(jn,{...s,key:s.name,value:o[s.column||s.name]}):e.jsx(N,{"data-testid":y.CONTENT_FIELD},i))},`${c}-row`))})]}):null};function Sn(n){return gn("MuiLink",n)}const Mn=bn("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),H={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Dn=n=>H[n]||n,Pn=({theme:n,ownerState:t})=>{const o=Dn(t.color),a=M(n,`palette.${o}`,!1)||t.color,r=M(n,`palette.${o}Channel`);return"vars"in n&&r?`rgba(${r} / 0.4)`:Cn.alpha(a,.4)},Vn=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Wn=n=>{const{classes:t,component:o,focusVisible:a,underline:r}=n,l={root:["root",`underline${K(r)}`,o==="button"&&"button",a&&"focusVisible"]};return Tn(l,Sn,t)},Rn=kn(Ln,{name:"MuiLink",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`underline${K(o.underline)}`],o.component==="button"&&t.button]}})(({theme:n,ownerState:t})=>v({},t.underline==="none"&&{textDecoration:"none"},t.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},t.underline==="always"&&v({textDecoration:"underline"},t.color!=="inherit"&&{textDecorationColor:Pn({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),t.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Mn.focusVisible}`]:{outline:"auto"}})),D=b.forwardRef(function(t,o){const a=yn({props:t,name:"MuiLink"}),{className:r,color:l="primary",component:m="a",onBlur:u,onFocus:p,TypographyClasses:d,underline:c="always",variant:s="inherit",sx:i}=a,x=vn(a,Vn),{isFocusVisibleRef:f,onBlur:T,onFocus:_,ref:q}=_n(),[G,F]=b.useState(!1),J=wn(o,q),Q=g=>{T(g),f.current===!1&&F(!1),u&&u(g)},X=g=>{_(g),f.current===!0&&F(!0),p&&p(g)},j=v({},a,{color:l,component:m,focusVisible:G,underline:c,variant:s}),Y=Wn(j);return e.jsx(Rn,v({color:l,className:xn(Y.root,r),classes:d,component:m,onBlur:Q,onFocus:X,ref:J,ownerState:j,variant:s,sx:[...Object.keys(H).includes(l)?[]:[{color:l}],...Array.isArray(i)?i:[i]]},x))}),En={title:"Components/Content"},L=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],k={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:e.jsx(rn,{children:L==null?void 0:L.map(n=>e.jsx(pn,{label:n==null?void 0:n.label},`${n==null?void 0:n.label}-${n==null?void 0:n.value}`))}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],cars:[{id:1,make:"BMW",model:"M3"},{id:2,make:"Volkswagen",model:"Golf"}],multipleTransforms:"This is some text",fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit."},An={"Single Column":[["tags"],["colorPicker"],["toggle"],["date"],["thumbnail"],["chipsAsValue"],["animals"],["cars"],["multipleTransforms"]],"Two Columns":[["tags","colorPicker"],["toggle","date"],["thumbnail","chipsAsValue"],["animals","cars"],["multipleTransforms"]],"Three Columns":[["tags","colorPicker",void 0],["toggle","date","thumbnail"],["animals","cars","chipsAsValue"],["multipleTransforms"]]},h=({title:n,variant:t,sectionConfigKey:o,showButtons:a,showFirstRowItems:r,amountContent:l})=>{const[m,u]=b.useState(!1),p=()=>{u(!m)},d=[{name:"edit",label:"Edit",mIcon:z,color:"gray",variant:"icon",show:[a!=="undefined",Number(a)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:m?"Less Details":"More Details",onClick:p,show:[a!=="undefined",Number(a)>=2]}],c=[{name:"chips",label:"Chips using transform_chips()",tooltip:"This is a list of chips",transforms:[B()],column:"tags",show:r},{name:"toggle",label:"Toggle using transform_boolean()",tooltip:e.jsxs(e.Fragment,{children:["This came in as a boolean, but",e.jsx("br",{}),"will displayed as yes or no"]}),transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[$()],column:"colorPicker",show:r},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[U({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"animals",label:"Animals",transforms:[S({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"cars",label:"Cars",transforms:[S({columns:[{name:"make",label:"Make"},{name:"model",label:"Model"}]})]},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:i})=>e.jsx("div",{style:{color:"red"},children:i}),({data:i})=>e.jsx("div",{style:{fontSize:"2rem"},children:i})]}],s=An[o];return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:n,data:k,fields:c,sections:s.slice(0,m?void 0:2),buttons:d,variant:t}),l===2&&e.jsx(w,{title:"Second content",data:k,fields:c,sections:s,variant:t})]})};h.args={title:"Main Content Title",variant:"standard",sectionConfigKey:"Single Column",showButtons:"2",showFirstRowItems:!0,amountContent:1};h.argTypes={title:{name:"Title"},variant:{name:"Variant",options:["standard","card"],control:{type:"select"}},sectionConfigKey:{name:"Sections",options:["Single Column","Two Columns","Three Columns"],control:{type:"select"}},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},showFirstRowItems:{name:"Show first row"},amountContent:{name:"Amount of contents",options:[1,2],control:{type:"select"}}};const C=()=>{const n=[{name:"edit",label:"Edit",mIcon:z,color:"gray",variant:"icon",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:"More Details",onClick:()=>alert("More details")}],t=[{name:"chips",label:"Chips using transform_chips()",transforms:[B()],column:"tags"},{name:"toggle",label:e.jsx(D,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[$()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[U({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:a})=>e.jsx(D,{href:a,children:a})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],o=[["tags","colorPicker",void 0],["toggle","date","colorPicker"],["thumbnail","chipsAsValue",void 0],["undefinedValue","emptyStringValue","emptyArrayValue"],["fieldWithLongWord","fieldWithLongURL","fieldWithLongSentence"]];return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Standard content",data:k,fields:t,sections:o,buttons:n}),e.jsx("br",{}),e.jsx(w,{title:"Card content",data:k,fields:t,sections:o,buttons:n,variant:"card"})]})};var P,V,W;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
}`,...(W=(V=h.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var R,E,A;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(A=(E=C.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const Nn=["Playground","KitchenSink"],ee=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:C,Playground:h,__namedExportsOrder:Nn,default:En},Symbol.toStringTag,{value:"Module"}));export{h as P,ee as s};
