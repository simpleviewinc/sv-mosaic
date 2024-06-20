import{j as o}from"./jsx-runtime-qGIIFXMu.js";import{r as y}from"./index-CDs2tPxN.js";import{F as $,a as le,b as me,c as ce,M as ue,T as de,d as pe,C as he,e as fe,t as I,f as q,g as U,h as K,i as O,j as W}from"./column_transforms-GKQyVYDM.js";import{B as ge}from"./ButtonRow-BqlcWF3K.js";import{B as be}from"./ColorSelected-CdqgCvRo.js";import{t as z}from"./testIds-B75WQI-K.js";import{S as ye}from"./BodyText-gyiTNPhg.js";import{g as Ce}from"./useToggle-D8hNafRh.js";import{C as ve}from"./Chip-CJpy9ewu.js";import{d as H}from"./Edit-VnM4SwqJ.js";import{g as J,a as G,s as X,c as L,u as Q,_ as Y,b as Z,e as ee,f as S,h as we,j as Te}from"./styled-P6hUx81_.js";import{_ as f}from"./extends-CF3RwP-h.js";import{e as ke}from"./extendSxProp-Czae8Fw9.js";import{u as xe}from"./createSvgIcon-Ci5omaqv.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./theme-tUuL1bpb.js";import"./FormControlLabel-D6jwZlG2.js";import"./useThemeProps-DZj2lB8w.js";import"./formControlState-Bqc-R5cL.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useControlled-CJDj4WFd.js";import"./createSvgIcon-Ca3CxB0T.js";import"./reactTools-i2anJKce.js";import"./createSvgIcon-BGEpRDBf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-CWuiCQwo.js";import"./Image-CfthyymK.js";import"./formats-CDjt32hU.js";import"./Button-B_QyrzNG.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./Spinner-DZM1MKnU.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./emotion-unitless.esm-sScrWPmR.js";function _e(n){return J("MuiTypography",n)}G("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Le=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Me=n=>{const{align:e,gutterBottom:t,noWrap:a,paragraph:i,variant:r,classes:u}=n,l={root:["root",r,n.align!=="inherit"&&`align${L(e)}`,t&&"gutterBottom",a&&"noWrap",i&&"paragraph"]};return ee(l,_e,u)},Fe=X("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.variant&&e[t.variant],t.align!=="inherit"&&e[`align${L(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})(({theme:n,ownerState:e})=>f({margin:0},e.variant&&n.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),R={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},De={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},We=n=>De[n]||n,Se=y.forwardRef(function(e,t){const a=Q({props:e,name:"MuiTypography"}),i=We(a.color),r=ke(f({},a,{color:i})),{align:u="inherit",className:l,component:d,gutterBottom:p=!1,noWrap:c=!1,paragraph:s=!1,variant:m="body1",variantMapping:C=R}=r,g=Y(r,Le),h=f({},r,{align:u,color:i,className:l,component:d,gutterBottom:p,noWrap:c,paragraph:s,variant:m,variantMapping:C}),v=d||(s?"p":C[m]||R[m])||"span",w=Me(h);return o.jsx(Fe,f({as:v,ref:t,ownerState:h,className:Z(w.root,l)},g))}),ne=({label:n,transforms:e,value:t})=>{const a=y.useMemo(()=>t===void 0||t===""||Array.isArray(t)&&!t.length?o.jsx(be,{}):e?e.reduce((i,r)=>r({data:i}),t):t,[e,t]);return o.jsxs($,{"data-testid":z.CONTENT_FIELD,children:[o.jsx(le,{children:n}),o.jsx(me,{children:o.jsx(ce,{children:a})})]})};ne.__docgenInfo={description:`Checks if the field exists, can be shown and executes its transform function
if any otherwise it will render the data.`,methods:[],displayName:"ContentField",props:{name:{required:!0,tsType:{name:"string"},description:`The name of the field is used to check if
is a valid compared with the sections.`},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label is render above of the component."},transforms:{required:!1,tsType:{name:"Array",elements:[{name:"DataViewColumnTransform"}],raw:"DataViewColumnTransform[]"},description:`Functions which will receive raw data that will be use to render
a component.`},show:{required:!1,tsType:{name:"union",raw:"T | T[]",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]},{name:"Array",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]}],raw:"T[]"}]},description:`A value or array of values or function or array of functions that
controlls whether or not to display a field.`},column:{required:!1,tsType:{name:"string"},description:`If a column is given then it will be used as the name, hence
defaults to name.`},value:{required:!0,tsType:{name:"unknown"},description:""}}};const x=n=>{const{fields:e,data:t,sections:a,title:i,buttons:r=[],variant:u}=n,l=u==="card",d=y.useMemo(()=>(a||e.map(({name:c,column:s})=>[[s||c]])).map((c,s)=>c.map((m,C)=>m.map(g=>{const h=e.find(({name:v,column:w})=>(w||v)===g);if(!h)throw new Error(`No field declared for field name '${g}'. (${a?`section ${s}, row ${C}`:`field ${s}`})`);if(Ce(h.show,!0))return h}).filter(Boolean))).filter(c=>c.flat().length),[e,a]);return t?o.jsxs(ue,{className:l?"card-wrapper":"content-wrapper",children:[o.jsxs(de,{className:l?"title-bar":"",children:[o.jsx(ye,{maxLines:1,children:i}),r.length>0&&o.jsx(ge,{buttons:r,separator:!l})]}),o.jsx(pe,{className:l?"card-content":"",children:d.map((p,c)=>o.jsx(he,{className:l?"card-row":"",$columns:p.length,children:p.map(([s],m)=>s?y.createElement(ne,{...s,key:s.name,value:t[s.column||s.name]}):o.jsx($,{"data-testid":z.CONTENT_FIELD},m))},`${c}-row`))})]}):null};x.__docgenInfo={description:"",methods:[],displayName:"Content",props:{fields:{required:!0,tsType:{name:"Array",elements:[{name:"ContentFieldDef"}],raw:"ContentFieldDef[]"},description:"List of the definitions of the fields that will be render."},data:{required:!0,tsType:{name:"MosaicObject"},description:`Data that will be used by the transform function of each
field to generate the corresponding JSX element.`},sections:{required:!1,tsType:{name:'SectionDef["fields"]',raw:'SectionDef["fields"]'},description:`Includes the configuration of where each field is going to be
render. Fields will be render in a max of two columns.`},title:{required:!0,tsType:{name:"string"},description:"Name of the section or subsection."},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:`Configuration of the list of buttons that appear at the top
of the component.`},variant:{required:!1,tsType:{name:"union",raw:'"standard" | "card"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"card"'}]},description:`Variant of the component defines what styles should render
if "card" is passed, content component looks like a card component`}}};function Re(n){return J("MuiLink",n)}const Ve=G("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),te={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},je=n=>te[n]||n,Pe=({theme:n,ownerState:e})=>{const t=je(e.color),a=S(n,`palette.${t}`,!1)||e.color,i=S(n,`palette.${t}Channel`);return"vars"in n&&i?`rgba(${i} / 0.4)`:we(a,.4)},Ae=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Be=n=>{const{classes:e,component:t,focusVisible:a,underline:i}=n,r={root:["root",`underline${L(i)}`,t==="button"&&"button",a&&"focusVisible"]};return ee(r,Re,e)},Ne=X(Se,{name:"MuiLink",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[`underline${L(t.underline)}`],t.component==="button"&&e.button]}})(({theme:n,ownerState:e})=>f({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&f({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:Pe({theme:n,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ve.focusVisible}`]:{outline:"auto"}})),V=y.forwardRef(function(e,t){const a=Q({props:e,name:"MuiLink"}),{className:i,color:r="primary",component:u="a",onBlur:l,onFocus:d,TypographyClasses:p,underline:c="always",variant:s="inherit",sx:m}=a,C=Y(a,Ae),{isFocusVisibleRef:g,onBlur:h,onFocus:v,ref:w}=xe(),[oe,F]=y.useState(!1),ae=Te(t,w),re=T=>{h(T),g.current===!1&&F(!1),l&&l(T)},se=T=>{v(T),g.current===!0&&F(!0),d&&d(T)},D=f({},a,{color:r,component:u,focusVisible:oe,underline:c,variant:s}),ie=Be(D);return o.jsx(Ne,f({color:r,className:Z(ie.root,i),classes:p,component:u,onBlur:re,onFocus:se,ref:ae,ownerState:D,variant:s,sx:[...Object.keys(te).includes(r)?[]:[{color:r}],...Array.isArray(m)?m:[m]]},C))}),An={title:"Components/Content"},M=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],_={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:o.jsx(fe,{children:M==null?void 0:M.map(n=>o.jsx(ve,{label:n==null?void 0:n.label},`${n==null?void 0:n.label}-${n==null?void 0:n.value}`))}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],cars:[{id:1,make:"BMW",model:"M3"},{id:2,make:"Volkswagen",model:"Golf"}],multipleTransforms:"This is some text",fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit."},Ee={"Single Column":[[["tags"]],[["colorPicker"]],[["toggle"]],[["date"]],[["thumbnail"]],[["chipsAsValue"]],[["animals"]],[["cars"]],[["multipleTransforms"]]],"Two Columns":[[["tags"],["colorPicker"]],[["toggle"],["date"]],[["thumbnail"],["chipsAsValue"]],[["animals"],["cars"]],[["multipleTransforms"]]],"Three Columns":[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["thumbnail"]],[["animals"],["cars"],["chipsAsValue"]],[["multipleTransforms"]]]},b=({title:n,variant:e,sectionConfigKey:t,showButtons:a,showFirstRowItems:i,amountContent:r})=>{const[u,l]=y.useState(!1),d=()=>{l(!u)},p=[{name:"edit",label:"Edit",mIcon:H,color:"gray",variant:"icon",show:[a!=="undefined",Number(a)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:u?"Less Details":"More Details",onClick:d,show:[a!=="undefined",Number(a)>=2]}],c=[{name:"chips",label:"Chips using transform_chips()",transforms:[I()],column:"tags",show:i},{name:"toggle",label:"Toggle using transform_boolean()",transforms:[q()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[U()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[K()],column:"colorPicker",show:i},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[O({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"animals",label:"Animals",transforms:[W({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"cars",label:"Cars",transforms:[W({columns:[{name:"make",label:"Make"},{name:"model",label:"Model"}]})]},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:m})=>o.jsx("div",{style:{color:"red"},children:m}),({data:m})=>o.jsx("div",{style:{fontSize:"2rem"},children:m})]}],s=Ee[t];return o.jsxs(o.Fragment,{children:[o.jsx(x,{title:n,data:_,fields:c,sections:s.slice(0,u?void 0:2),buttons:p,variant:e}),r===2&&o.jsx(x,{title:"Second content",data:_,fields:c,sections:s,variant:e})]})};b.args={title:"Main Content Title",variant:"standard",sectionConfigKey:"Single Column",showButtons:"2",showFirstRowItems:!0,amountContent:1};b.argTypes={title:{name:"Title"},variant:{name:"Variant",options:["standard","card"],control:{type:"select"}},sectionConfigKey:{name:"Sections",options:["Single Column","Two Columns","Three Columns"],control:{type:"select"}},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},showFirstRowItems:{name:"Show first row"},amountContent:{name:"Amount of contents",options:[1,2],control:{type:"select"}}};const k=()=>{const n=[{name:"edit",label:"Edit",mIcon:H,color:"gray",variant:"icon",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:"More Details",onClick:()=>alert("More details")}],e=[{name:"chips",label:"Chips using transform_chips()",transforms:[I()],column:"tags"},{name:"toggle",label:o.jsx(V,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[q()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[U()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[K()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[O({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:a})=>o.jsx(V,{href:a,children:a})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],t=[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["colorPicker"]],[["thumbnail"],["chipsAsValue"],[]],[["undefinedValue"],["emptyStringValue"],["emptyArrayValue"]],[["fieldWithLongWord"],["fieldWithLongURL"],["fieldWithLongSentence"]]];return o.jsxs(o.Fragment,{children:[o.jsx(x,{title:"Standard content",data:_,fields:e,sections:t,buttons:n}),o.jsx("br",{}),o.jsx(x,{title:"Card content",data:_,fields:e,sections:t,buttons:n,variant:"card"})]})};b.__docgenInfo={description:"",methods:[],displayName:"Playground"};k.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var j,P,A;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var B,N,E;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(E=(N=k.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const Bn=["Playground","KitchenSink"];export{k as KitchenSink,b as Playground,Bn as __namedExportsOrder,An as default};
