import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{F as B,d as Z,e as nn,f as en,M as tn,T as on,g as an,C as sn,h as rn,t as $,i as I,b as O,a as U,c as z,j as M}from"./column_transforms-m7H19sAe.js";import{B as ln}from"./ButtonRow-mHN3ze0L.js";import{B as cn}from"./Blank-Ci2z0OwS.js";import{t as v}from"./testIds-BmLWG2HQ.js";import"./Typography-cUIkDVC5.js";import{S as mn}from"./SubtitleText-BtBCMBDH.js";import{g as un}from"./useToggle-lipGlewK.js";import"./useMosaicTranslation-CZCb37QS.js";import{C as dn}from"./Chip-CULEVs9E.js";import{d as K}from"./Edit-CtFPV4gK.js";import{a as fn,g as hn,f as j,h as pn,s as bn,c as H,u as gn,_ as Cn,j as yn,b as vn,d as wn}from"./styled-gS_TAqI6.js";import{_ as w}from"./extends-CF3RwP-h.js";import{T as kn}from"./Typography-DkBsxHpZ.js";import{u as _n}from"./createSvgIcon-XOQqy_xK.js";const xn=({label:n,transforms:e,value:o})=>{const a=p.useMemo(()=>o===void 0||o===""||Array.isArray(o)&&!o.length?t.jsx(cn,{}):e?e.reduce((r,l)=>l({data:r}),o):o,[e,o]);return t.jsxs(B,{"data-testid":v.CONTENT_FIELD,$margin:!0,children:[t.jsx(Z,{children:n}),t.jsx(nn,{children:t.jsx(en,{children:a})})]})},k=n=>{const{fields:e,data:o,sections:a,title:r,buttons:l=[],variant:u}=n,m=u==="card",h=p.useMemo(()=>(a||e.map(({name:i,column:s})=>[[s||i]])).map((i,s)=>i.map((c,x)=>c.map(b=>{const g=e.find(({name:L,column:T})=>(T||L)===b);if(!g)throw new Error(`No field declared for field name '${b}'. (${a?`section ${s}, row ${x}`:`field ${s}`})`);if(un(g.show,!0))return g}).filter(Boolean))).filter(i=>i.flat().length),[e,a]);return o?t.jsxs(tn,{className:m?"card-wrapper":"content-wrapper",children:[t.jsxs(on,{className:m?"title-bar":"",children:[t.jsx(mn,{maxLines:1,children:r}),l.length>0&&t.jsx(ln,{buttons:l,separator:!m})]}),t.jsx(an,{className:m?"card-content":"",children:h.map((d,i)=>t.jsx(sn,{className:m?"card-row":"",$columns:d.length,"data-testid":v.CONTENT_ROW,children:d.map(([s],c)=>s?p.createElement(xn,{...s,key:s.name,value:o[s.column||s.name],"data-testid":v.CONTENT_COL}):t.jsx(B,{"data-testid":v.CONTENT_FIELD},c))},`${i}-row`))})]}):null};function Ln(n){return hn("MuiLink",n)}const Tn=fn("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Fn=n=>q[n]||n,Sn=({theme:n,ownerState:e})=>{const o=Fn(e.color),a=j(n,`palette.${o}`,!1)||e.color,r=j(n,`palette.${o}Channel`);return"vars"in n&&r?`rgba(${r} / 0.4)`:pn(a,.4)},Dn=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Mn=n=>{const{classes:e,component:o,focusVisible:a,underline:r}=n,l={root:["root",`underline${H(r)}`,o==="button"&&"button",a&&"focusVisible"]};return wn(l,Ln,e)},jn=bn(kn,{name:"MuiLink",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:o}=n;return[e.root,e[`underline${H(o.underline)}`],o.component==="button"&&e.button]}})(({theme:n,ownerState:e})=>w({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&w({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:Sn({theme:n,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Tn.focusVisible}`]:{outline:"auto"}})),V=p.forwardRef(function(e,o){const a=gn({props:e,name:"MuiLink"}),{className:r,color:l="primary",component:u="a",onBlur:m,onFocus:h,TypographyClasses:d,underline:i="always",variant:s="inherit",sx:c}=a,x=Cn(a,Dn),{isFocusVisibleRef:b,onBlur:g,onFocus:L,ref:T}=_n(),[G,S]=p.useState(!1),J=yn(o,T),Q=C=>{g(C),b.current===!1&&S(!1),m&&m(C)},X=C=>{L(C),b.current===!0&&S(!0),h&&h(C)},D=w({},a,{color:l,component:u,focusVisible:G,underline:i,variant:s}),Y=Mn(D);return t.jsx(jn,w({color:l,className:vn(Y.root,r),classes:d,component:u,onBlur:Q,onFocus:X,ref:J,ownerState:D,variant:s,sx:[...Object.keys(q).includes(l)?[]:[{color:l}],...Array.isArray(c)?c:[c]]},x))}),Vn={title:"Components/Content"},F=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],_={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:t.jsx(rn,{children:F==null?void 0:F.map(n=>t.jsx(dn,{label:n==null?void 0:n.label},`${n==null?void 0:n.label}-${n==null?void 0:n.value}`))}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],cars:[{id:1,make:"BMW",model:"M3"},{id:2,make:"Volkswagen",model:"Golf"}],multipleTransforms:"This is some text",fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit."},Wn={"Single Column":[[["tags"]],[["colorPicker"]],[["toggle"]],[["date"]],[["thumbnail"]],[["chipsAsValue"]],[["animals"]],[["cars"]],[["multipleTransforms"]]],"Two Columns":[[["tags"],["colorPicker"]],[["toggle"],["date"]],[["thumbnail"],["chipsAsValue"]],[["animals"],["cars"]],[["multipleTransforms"]]],"Three Columns":[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["thumbnail"]],[["animals"],["cars"],["chipsAsValue"]],[["multipleTransforms"]]]},f=({title:n,variant:e,sectionConfigKey:o,showButtons:a,showFirstRowItems:r,amountContent:l})=>{const[u,m]=p.useState(!1),h=()=>{m(!u)},d=[{name:"edit",label:"Edit",mIcon:K,color:"gray",variant:"icon",show:[a!=="undefined",Number(a)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:u?"Less Details":"More Details",onClick:h,show:[a!=="undefined",Number(a)>=2]}],i=[{name:"chips",label:"Chips using transform_chips()",transforms:[$()],column:"tags",show:r},{name:"toggle",label:"Toggle using transform_boolean()",transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[U()],column:"colorPicker",show:r},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[z({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"animals",label:"Animals",transforms:[M({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"cars",label:"Cars",transforms:[M({columns:[{name:"make",label:"Make"},{name:"model",label:"Model"}]})]},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:c})=>t.jsx("div",{style:{color:"red"},children:c}),({data:c})=>t.jsx("div",{style:{fontSize:"2rem"},children:c})]}],s=Wn[o];return t.jsxs(t.Fragment,{children:[t.jsx(k,{title:n,data:_,fields:i,sections:s.slice(0,u?void 0:2),buttons:d,variant:e}),l===2&&t.jsx(k,{title:"Second content",data:_,fields:i,sections:s,variant:e})]})};f.args={title:"Main Content Title",variant:"standard",sectionConfigKey:"Single Column",showButtons:"2",showFirstRowItems:!0,amountContent:1};f.argTypes={title:{name:"Title"},variant:{name:"Variant",options:["standard","card"],control:{type:"select"}},sectionConfigKey:{name:"Sections",options:["Single Column","Two Columns","Three Columns"],control:{type:"select"}},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},showFirstRowItems:{name:"Show first row"},amountContent:{name:"Amount of contents",options:[1,2],control:{type:"select"}}};const y=()=>{const n=[{name:"edit",label:"Edit",mIcon:K,color:"gray",variant:"icon",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:"More Details",onClick:()=>alert("More details")}],e=[{name:"chips",label:"Chips using transform_chips()",transforms:[$()],column:"tags"},{name:"toggle",label:t.jsx(V,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[I()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[O()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[U()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[z({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:a})=>t.jsx(V,{href:a,children:a})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],o=[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["colorPicker"]],[["thumbnail"],["chipsAsValue"],[]],[["undefinedValue"],["emptyStringValue"],["emptyArrayValue"]],[["fieldWithLongWord"],["fieldWithLongURL"],["fieldWithLongSentence"]]];return t.jsxs(t.Fragment,{children:[t.jsx(k,{title:"Standard content",data:_,fields:e,sections:o,buttons:n}),t.jsx("br",{}),t.jsx(k,{title:"Card content",data:_,fields:e,sections:o,buttons:n,variant:"card"})]})};var W,P,R;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
}`,...(R=(P=f.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var A,E,N;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(N=(E=y.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const Pn=["Playground","KitchenSink"],Xn=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:y,Playground:f,__namedExportsOrder:Pn,default:Vn},Symbol.toStringTag,{value:"Module"}));export{f as P,Xn as s};
