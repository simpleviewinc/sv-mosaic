import{j as o}from"./jsx-runtime-nGUw9YhZ.js";import{r as y}from"./index-BP8_t0zE.js";import{F as I,d as ln,e as cn,f as mn,M as un,T as dn,g as pn,C as hn,h as fn,t as U,i as O,b as z,a as K,c as H,j}from"./column_transforms-Db8YCDZ3.js";import{B as gn}from"./ButtonRow-C8Oxm-Sd.js";import{B as bn}from"./Blank-JgbFIOSE.js";import{t as k}from"./testIds-BYqMnK8Q.js";import"./Typography-BZ6FG2aM.js";import{S as yn}from"./SubtitleText-DLLK2BRy.js";import{g as Cn}from"./useToggle-lipGlewK.js";import"./useMosaicTranslation-COKC524W.js";import{C as vn}from"./Chip-ClM3atSE.js";import{d as q}from"./Edit-Cgzlo05B.js";import{g as G,a as J,s as Q,c as M,u as X,e as wn,_ as Y,b as Z,d as nn,f as S,h as xn,j as _n}from"./styled-BxbdA4OB.js";import{_ as f}from"./extends-CF3RwP-h.js";import{u as kn}from"./createSvgIcon-B0oOJ-Fw.js";function Tn(e){return G("MuiTypography",e)}J("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Ln=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Mn=e=>{const{align:n,gutterBottom:t,noWrap:a,paragraph:i,variant:r,classes:u}=e,l={root:["root",r,e.align!=="inherit"&&`align${M(n)}`,t&&"gutterBottom",a&&"noWrap",i&&"paragraph"]};return nn(l,Tn,u)},Fn=Q("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.variant&&n[t.variant],t.align!=="inherit"&&n[`align${M(t.align)}`],t.noWrap&&n.noWrap,t.gutterBottom&&n.gutterBottom,t.paragraph&&n.paragraph]}})(({theme:e,ownerState:n})=>f({margin:0},n.variant==="inherit"&&{font:"inherit"},n.variant!=="inherit"&&e.typography[n.variant],n.align!=="inherit"&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})),V={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Wn={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Dn=e=>Wn[e]||e,jn=y.forwardRef(function(n,t){const a=X({props:n,name:"MuiTypography"}),i=Dn(a.color),r=wn(f({},a,{color:i})),{align:u="inherit",className:l,component:d,gutterBottom:p=!1,noWrap:m=!1,paragraph:s=!1,variant:c="body1",variantMapping:C=V}=r,g=Y(r,Ln),h=f({},r,{align:u,color:i,className:l,component:d,gutterBottom:p,noWrap:m,paragraph:s,variant:c,variantMapping:C}),v=d||(s?"p":C[c]||V[c])||"span",w=Mn(h);return o.jsx(Fn,f({as:v,ref:t,ownerState:h,className:Z(w.root,l)},g))}),Sn=({label:e,transforms:n,value:t})=>{const a=y.useMemo(()=>t===void 0||t===""||Array.isArray(t)&&!t.length?o.jsx(bn,{}):n?n.reduce((i,r)=>r({data:i}),t):t,[n,t]);return o.jsxs(I,{"data-testid":k.CONTENT_FIELD,$margin:!0,children:[o.jsx(ln,{children:e}),o.jsx(cn,{children:o.jsx(mn,{children:a})})]})},T=e=>{const{fields:n,data:t,sections:a,title:i,buttons:r=[],variant:u}=e,l=u==="card",d=y.useMemo(()=>(a||n.map(({name:m,column:s})=>[[s||m]])).map((m,s)=>m.map((c,C)=>c.map(g=>{const h=n.find(({name:v,column:w})=>(w||v)===g);if(!h)throw new Error(`No field declared for field name '${g}'. (${a?`section ${s}, row ${C}`:`field ${s}`})`);if(Cn(h.show,!0))return h}).filter(Boolean))).filter(m=>m.flat().length),[n,a]);return t?o.jsxs(un,{className:l?"card-wrapper":"content-wrapper",children:[o.jsxs(dn,{className:l?"title-bar":"",children:[o.jsx(yn,{maxLines:1,children:i}),r.length>0&&o.jsx(gn,{buttons:r,separator:!l})]}),o.jsx(pn,{className:l?"card-content":"",children:d.map((p,m)=>o.jsx(hn,{className:l?"card-row":"",$columns:p.length,"data-testid":k.CONTENT_ROW,children:p.map(([s],c)=>s?y.createElement(Sn,{...s,key:s.name,value:t[s.column||s.name],"data-testid":k.CONTENT_COL}):o.jsx(I,{"data-testid":k.CONTENT_FIELD},c))},`${m}-row`))})]}):null};function Vn(e){return G("MuiLink",e)}const Pn=J("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),en={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Rn=e=>en[e]||e,Bn=({theme:e,ownerState:n})=>{const t=Rn(n.color),a=S(e,`palette.${t}`,!1)||n.color,i=S(e,`palette.${t}Channel`);return"vars"in e&&i?`rgba(${i} / 0.4)`:xn(a,.4)},An=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Nn=e=>{const{classes:n,component:t,focusVisible:a,underline:i}=e,r={root:["root",`underline${M(i)}`,t==="button"&&"button",a&&"focusVisible"]};return nn(r,Vn,n)},En=Q(jn,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${M(t.underline)}`],t.component==="button"&&n.button]}})(({theme:e,ownerState:n})=>f({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&f({textDecoration:"underline"},n.color!=="inherit"&&{textDecorationColor:Bn({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Pn.focusVisible}`]:{outline:"auto"}})),P=y.forwardRef(function(n,t){const a=X({props:n,name:"MuiLink"}),{className:i,color:r="primary",component:u="a",onBlur:l,onFocus:d,TypographyClasses:p,underline:m="always",variant:s="inherit",sx:c}=a,C=Y(a,An),{isFocusVisibleRef:g,onBlur:h,onFocus:v,ref:w}=kn(),[tn,W]=y.useState(!1),on=_n(t,w),an=x=>{h(x),g.current===!1&&W(!1),l&&l(x)},rn=x=>{v(x),g.current===!0&&W(!0),d&&d(x)},D=f({},a,{color:r,component:u,focusVisible:tn,underline:m,variant:s}),sn=Nn(D);return o.jsx(En,f({color:r,className:Z(sn.root,i),classes:p,component:u,onBlur:an,onFocus:rn,ref:on,ownerState:D,variant:s,sx:[...Object.keys(en).includes(r)?[]:[{color:r}],...Array.isArray(c)?c:[c]]},C))}),$n={title:"Components/Content"},F=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],L={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:o.jsx(fn,{children:F==null?void 0:F.map(e=>o.jsx(vn,{label:e==null?void 0:e.label},`${e==null?void 0:e.label}-${e==null?void 0:e.value}`))}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],cars:[{id:1,make:"BMW",model:"M3"},{id:2,make:"Volkswagen",model:"Golf"}],multipleTransforms:"This is some text",fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit."},In={"Single Column":[[["tags"]],[["colorPicker"]],[["toggle"]],[["date"]],[["thumbnail"]],[["chipsAsValue"]],[["animals"]],[["cars"]],[["multipleTransforms"]]],"Two Columns":[[["tags"],["colorPicker"]],[["toggle"],["date"]],[["thumbnail"],["chipsAsValue"]],[["animals"],["cars"]],[["multipleTransforms"]]],"Three Columns":[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["thumbnail"]],[["animals"],["cars"],["chipsAsValue"]],[["multipleTransforms"]]]},b=({title:e,variant:n,sectionConfigKey:t,showButtons:a,showFirstRowItems:i,amountContent:r})=>{const[u,l]=y.useState(!1),d=()=>{l(!u)},p=[{name:"edit",label:"Edit",mIcon:q,color:"gray",variant:"icon",show:[a!=="undefined",Number(a)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:u?"Less Details":"More Details",onClick:d,show:[a!=="undefined",Number(a)>=2]}],m=[{name:"chips",label:"Chips using transform_chips()",transforms:[U()],column:"tags",show:i},{name:"toggle",label:"Toggle using transform_boolean()",transforms:[O()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[z()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[K()],column:"colorPicker",show:i},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[H({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"animals",label:"Animals",transforms:[j({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"cars",label:"Cars",transforms:[j({columns:[{name:"make",label:"Make"},{name:"model",label:"Model"}]})]},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:c})=>o.jsx("div",{style:{color:"red"},children:c}),({data:c})=>o.jsx("div",{style:{fontSize:"2rem"},children:c})]}],s=In[t];return o.jsxs(o.Fragment,{children:[o.jsx(T,{title:e,data:L,fields:m,sections:s.slice(0,u?void 0:2),buttons:p,variant:n}),r===2&&o.jsx(T,{title:"Second content",data:L,fields:m,sections:s,variant:n})]})};b.args={title:"Main Content Title",variant:"standard",sectionConfigKey:"Single Column",showButtons:"2",showFirstRowItems:!0,amountContent:1};b.argTypes={title:{name:"Title"},variant:{name:"Variant",options:["standard","card"],control:{type:"select"}},sectionConfigKey:{name:"Sections",options:["Single Column","Two Columns","Three Columns"],control:{type:"select"}},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},showFirstRowItems:{name:"Show first row"},amountContent:{name:"Amount of contents",options:[1,2],control:{type:"select"}}};const _=()=>{const e=[{name:"edit",label:"Edit",mIcon:q,color:"gray",variant:"icon",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:"More Details",onClick:()=>alert("More details")}],n=[{name:"chips",label:"Chips using transform_chips()",transforms:[U()],column:"tags"},{name:"toggle",label:o.jsx(P,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[O()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[z()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[K()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[H({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:a})=>o.jsx(P,{href:a,children:a})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],t=[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["colorPicker"]],[["thumbnail"],["chipsAsValue"],[]],[["undefinedValue"],["emptyStringValue"],["emptyArrayValue"]],[["fieldWithLongWord"],["fieldWithLongURL"],["fieldWithLongSentence"]]];return o.jsxs(o.Fragment,{children:[o.jsx(T,{title:"Standard content",data:L,fields:n,sections:t,buttons:e}),o.jsx("br",{}),o.jsx(T,{title:"Card content",data:L,fields:n,sections:t,buttons:e,variant:"card"})]})};var R,B,A;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`({
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
    transforms: [transform_chips()],
    column: "tags",
    show: showFirstRowItems
  }, {
    name: "toggle",
    label: "Toggle using transform_boolean()",
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
}`,...(A=(B=b.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var N,E,$;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`(): ReactElement => {
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
}`,...($=(E=_.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const Un=["Playground","KitchenSink"],ae=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:_,Playground:b,__namedExportsOrder:Un,default:$n},Symbol.toStringTag,{value:"Module"}));export{b as P,ae as s};
