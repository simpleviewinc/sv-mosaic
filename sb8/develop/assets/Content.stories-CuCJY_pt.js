import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as p}from"./index-BP8_t0zE.js";import{F as B,d as Z,e as nn,f as en,M as tn,T as on,g as an,C as sn,h as rn,t as $,i as I,b as O,a as U,c as z,j as D}from"./column_transforms-J6mLtyga.js";import{B as ln}from"./ButtonRow-OnULoQP7.js";import{T as cn,B as mn}from"./TooltipIcon-CO3K7ssQ.js";import{t as v}from"./testIds-BmLWG2HQ.js";import{u as un,T as dn}from"./Button-Dv6p7qil.js";import"./Typography-Br_RMLnS.js";import{S as fn}from"./SubtitleText-Vdwjg1jD.js";import{g as hn}from"./useToggle-lipGlewK.js";import{C as pn}from"./Chip-Da3idaCC.js";import{d as K}from"./Edit-cV2IGsVw.js";import{a as bn,g as gn,l as M,m as Cn,s as yn,c as H,u as vn,_ as wn,n as kn,b as _n,d as xn}from"./styled-DFznwKy7.js";import{_ as w}from"./extends-CF3RwP-h.js";import{T as Tn}from"./Typography-DIKutolL.js";import{u as Ln}from"./createSvgIcon-mhwmaBA2.js";function Fn({tooltip:n}){const{anchorProps:t,tooltipProps:o}=un();return e.jsxs(e.Fragment,{children:[e.jsx(cn,{...t}),e.jsx(dn,{...o,children:n})]})}const jn=({label:n,transforms:t,value:o,tooltip:a})=>{const r=p.useMemo(()=>o===void 0||o===""||Array.isArray(o)&&!o.length?e.jsx(mn,{}):t?t.reduce((l,m)=>m({data:l}),o):o,[t,o]);return e.jsxs(B,{"data-testid":v.CONTENT_FIELD,$margin:!0,children:[e.jsxs(Z,{children:[n,a&&e.jsx(Fn,{tooltip:a})]}),e.jsx(nn,{children:e.jsx(en,{children:r})})]})},k=n=>{const{fields:t,data:o,sections:a,title:r,buttons:l=[],variant:m}=n,u=m==="card",h=p.useMemo(()=>(a||t.map(({name:i,column:s})=>[[s||i]])).map((i,s)=>i.map((c,x)=>c.map(b=>{const g=t.find(({name:T,column:L})=>(L||T)===b);if(!g)throw new Error(`No field declared for field name '${b}'. (${a?`section ${s}, row ${x}`:`field ${s}`})`);if(hn(g.show,!0))return g}).filter(Boolean))).filter(i=>i.flat().length),[t,a]);return o?e.jsxs(tn,{className:u?"card-wrapper":"content-wrapper",children:[e.jsxs(on,{className:u?"title-bar":"",children:[e.jsx(fn,{maxLines:1,children:r}),l.length>0&&e.jsx(ln,{buttons:l,separator:!u})]}),e.jsx(an,{className:u?"card-content":"",children:h.map((d,i)=>e.jsx(sn,{className:u?"card-row":"",$columns:d.length,"data-testid":v.CONTENT_ROW,children:d.map(([s],c)=>s?p.createElement(jn,{...s,key:s.name,value:o[s.column||s.name],"data-testid":v.CONTENT_COL}):e.jsx(B,{"data-testid":v.CONTENT_FIELD},c))},`${i}-row`))})]}):null};function Sn(n){return gn("MuiLink",n)}const Dn=bn("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Mn=n=>q[n]||n,Vn=({theme:n,ownerState:t})=>{const o=Mn(t.color),a=M(n,`palette.${o}`,!1)||t.color,r=M(n,`palette.${o}Channel`);return"vars"in n&&r?`rgba(${r} / 0.4)`:Cn(a,.4)},Pn=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Wn=n=>{const{classes:t,component:o,focusVisible:a,underline:r}=n,l={root:["root",`underline${H(r)}`,o==="button"&&"button",a&&"focusVisible"]};return xn(l,Sn,t)},Rn=yn(Tn,{name:"MuiLink",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`underline${H(o.underline)}`],o.component==="button"&&t.button]}})(({theme:n,ownerState:t})=>w({},t.underline==="none"&&{textDecoration:"none"},t.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},t.underline==="always"&&w({textDecoration:"underline"},t.color!=="inherit"&&{textDecorationColor:Vn({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),t.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Dn.focusVisible}`]:{outline:"auto"}})),V=p.forwardRef(function(t,o){const a=vn({props:t,name:"MuiLink"}),{className:r,color:l="primary",component:m="a",onBlur:u,onFocus:h,TypographyClasses:d,underline:i="always",variant:s="inherit",sx:c}=a,x=wn(a,Pn),{isFocusVisibleRef:b,onBlur:g,onFocus:T,ref:L}=Ln(),[G,j]=p.useState(!1),J=kn(o,L),Q=C=>{g(C),b.current===!1&&j(!1),u&&u(C)},X=C=>{T(C),b.current===!0&&j(!0),h&&h(C)},S=w({},a,{color:l,component:m,focusVisible:G,underline:i,variant:s}),Y=Wn(S);return e.jsx(Rn,w({color:l,className:_n(Y.root,r),classes:d,component:m,onBlur:Q,onFocus:X,ref:J,ownerState:S,variant:s,sx:[...Object.keys(q).includes(l)?[]:[{color:l}],...Array.isArray(c)?c:[c]]},x))}),An={title:"Components/Content"},F=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],_={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:e.jsx(rn,{children:F==null?void 0:F.map(n=>e.jsx(pn,{label:n==null?void 0:n.label},`${n==null?void 0:n.label}-${n==null?void 0:n.value}`))}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],cars:[{id:1,make:"BMW",model:"M3"},{id:2,make:"Volkswagen",model:"Golf"}],multipleTransforms:"This is some text",fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit."},En={"Single Column":[[["tags"]],[["colorPicker"]],[["toggle"]],[["date"]],[["thumbnail"]],[["chipsAsValue"]],[["animals"]],[["cars"]],[["multipleTransforms"]]],"Two Columns":[[["tags"],["colorPicker"]],[["toggle"],["date"]],[["thumbnail"],["chipsAsValue"]],[["animals"],["cars"]],[["multipleTransforms"]]],"Three Columns":[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["thumbnail"]],[["animals"],["cars"],["chipsAsValue"]],[["multipleTransforms"]]]},f=({title:n,variant:t,sectionConfigKey:o,showButtons:a,showFirstRowItems:r,amountContent:l})=>{const[m,u]=p.useState(!1),h=()=>{u(!m)},d=[{name:"edit",label:"Edit",mIcon:K,color:"gray",variant:"icon",show:[a!=="undefined",Number(a)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:m?"Less Details":"More Details",onClick:h,show:[a!=="undefined",Number(a)>=2]}],i=[{name:"chips",label:"Chips using transform_chips()",tooltip:"This is a list of chips",transforms:[$()],column:"tags",show:r},{name:"toggle",label:"Toggle using transform_boolean()",tooltip:e.jsxs(e.Fragment,{children:["This came in as a boolean, but",e.jsx("br",{}),"will displayed as yes or no"]}),transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[U()],column:"colorPicker",show:r},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[z({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"animals",label:"Animals",transforms:[D({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"cars",label:"Cars",transforms:[D({columns:[{name:"make",label:"Make"},{name:"model",label:"Model"}]})]},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:c})=>e.jsx("div",{style:{color:"red"},children:c}),({data:c})=>e.jsx("div",{style:{fontSize:"2rem"},children:c})]}],s=En[o];return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:n,data:_,fields:i,sections:s.slice(0,m?void 0:2),buttons:d,variant:t}),l===2&&e.jsx(k,{title:"Second content",data:_,fields:i,sections:s,variant:t})]})};f.args={title:"Main Content Title",variant:"standard",sectionConfigKey:"Single Column",showButtons:"2",showFirstRowItems:!0,amountContent:1};f.argTypes={title:{name:"Title"},variant:{name:"Variant",options:["standard","card"],control:{type:"select"}},sectionConfigKey:{name:"Sections",options:["Single Column","Two Columns","Three Columns"],control:{type:"select"}},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},showFirstRowItems:{name:"Show first row"},amountContent:{name:"Amount of contents",options:[1,2],control:{type:"select"}}};const y=()=>{const n=[{name:"edit",label:"Edit",mIcon:K,color:"gray",variant:"icon",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:"More Details",onClick:()=>alert("More details")}],t=[{name:"chips",label:"Chips using transform_chips()",transforms:[$()],column:"tags"},{name:"toggle",label:e.jsx(V,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[U()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[z({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:a})=>e.jsx(V,{href:a,children:a})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],o=[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["colorPicker"]],[["thumbnail"],["chipsAsValue"],[]],[["undefinedValue"],["emptyStringValue"],["emptyArrayValue"]],[["fieldWithLongWord"],["fieldWithLongURL"],["fieldWithLongSentence"]]];return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Standard content",data:_,fields:t,sections:o,buttons:n}),e.jsx("br",{}),e.jsx(k,{title:"Card content",data:_,fields:t,sections:o,buttons:n,variant:"card"})]})};var P,W,R;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
    tooltip: <>This came in as a boolean, but<br />will displayed as yes or no</>,
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
    }}>{(data as string)}</div>, ({
      data
    }) => <div style={{
      fontSize: "2rem"
    }}>{(data as React.ReactNode)}</div>]
  }];
  const sections = sectionConfigs[sectionConfigKey];
  return <>
            <Content title={title} data={data} fields={fields} sections={sections.slice(0, showMore ? undefined : 2)} buttons={buttons} variant={variant} />
            {amountContent === 2 && <Content title="Second content" data={data} fields={fields} sections={sections} variant={variant} />}
        </>;
}`,...(R=(W=f.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var A,E,N;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`(): ReactElement => {
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
    }) => <Link href={(data as string)}>{(data as string)}</Link>]
  }, {
    name: "fieldWithLongSentence",
    label: "Long Sentence"
  }];
  const columns = [[["tags"], ["colorPicker"], []], [["toggle"], ["date"], ["colorPicker"]], [["thumbnail"], ["chipsAsValue"], []], [["undefinedValue"], ["emptyStringValue"], ["emptyArrayValue"]], [["fieldWithLongWord"], ["fieldWithLongURL"], ["fieldWithLongSentence"]]];
  return <>
            <Content title="Standard content" data={data} fields={fields} sections={columns} buttons={buttons} />
            <br />
            <Content title="Card content" data={data} fields={fields} sections={columns} buttons={buttons} variant="card" />
        </>;
}`,...(N=(E=y.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const Nn=["Playground","KitchenSink"],ee=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:y,Playground:f,__namedExportsOrder:Nn,default:An},Symbol.toStringTag,{value:"Module"}));export{f as P,ee as s};
