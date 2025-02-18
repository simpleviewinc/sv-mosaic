import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as g}from"./index-Btj5Fd67.js";import{F as G,d as on,e as an,f as sn,M as rn,T as ln,g as cn,C as mn,h as un,t as W,i as V,b as j,a as D,c as P,j as E}from"./column_transforms-BS8t_7-7.js";import{B as dn}from"./ButtonRow-BXJCCKLJ.js";import{T as fn,B as hn}from"./index-TRTj_9gV.js";import{t as w}from"./testIds-fiKIunms.js";import{u as pn,T as gn}from"./Button-CRbkpCI2.js";import"./Typography-D0-akgTt.js";import{S as bn}from"./SubtitleText-DUUVrgUU.js";import{g as yn}from"./useToggle-B3mbTfSB.js";import{C as Cn}from"./Chip-C_h72JNQ.js";import{E as M}from"./Edit-DPFw01BP.js";import{a as vn,g as kn,l as N,m as wn,s as Ln,c as Y,u as _n,_ as xn,n as Tn,b as Sn,d as Fn}from"./styled-B22bUKEf.js";import{_ as L}from"./extends-CF3RwP-h.js";import{T as Wn}from"./Typography-BmS9EF37.js";import{u as Vn}from"./createSvgIcon-X8Rx5IVC.js";function jn({tooltip:e}){const{anchorProps:t,tooltipProps:o}=pn();return n.jsxs(n.Fragment,{children:[n.jsx(fn,{...t,"data-testid":w.CONTENT_TOOLTIP_ICON}),n.jsx(gn,{...o,children:e})]})}const Dn=({label:e,transforms:t,value:o,tooltip:a})=>{const s=g.useMemo(()=>o===void 0||o===""||Array.isArray(o)&&!o.length?n.jsx(hn,{}):t?t.reduce((l,m)=>m({data:l}),o):o,[t,o]);return n.jsxs(G,{"data-testid":w.CONTENT_FIELD,$margin:!0,children:[n.jsxs(on,{children:[e,a&&n.jsx(jn,{tooltip:a})]}),n.jsx(an,{children:n.jsx(sn,{children:s})})]})};function Pn(e){let t=!1;const o=e.map(a=>a.map(s=>Array.isArray(s)?(t=!0,s[0]):s));return t&&console.warn("Providing content sections as string[][][] is deprecated and support will be removed in future releases. You should now define your sections as string[][]"),o}const b=e=>{const{fields:t,data:o,sections:a,title:s,buttons:l=[],variant:m}=e,u=m==="card",p=g.useMemo(()=>(a?Pn(a):t.map(({name:c,column:r})=>[r||c])).map((c,r)=>c.map((i,x)=>{const f=t.find(({name:T,column:S})=>(S||T)===i);if(i&&!f)throw new Error(`No field declared for field name '${i}'. (section ${r}, row ${x})`);if(!(f&&!yn(f.show,!0)))return f})).filter(c=>c.flat().length),[t,a]);return o?n.jsxs(rn,{className:u?"card-wrapper":"content-wrapper","data-testid":w.CONTENT,children:[n.jsxs(ln,{className:u?"title-bar":"",children:[n.jsx(bn,{maxLines:1,children:s}),l.length>0&&n.jsx(dn,{buttons:l,separator:!u})]}),n.jsx(cn,{className:u?"card-content":"",children:p.map((d,c)=>n.jsx(mn,{className:u?"card-row":"",$columns:d.length,"data-testid":w.CONTENT_ROW,children:d.map((r,i)=>r?g.createElement(Dn,{...r,key:r.name,value:o[r.column||r.name]}):n.jsx(G,{"data-testid":w.CONTENT_FIELD},i))},`${c}-row`))})]}):null};function Mn(e){return kn("MuiLink",e)}const An=vn("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),J={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Rn=e=>J[e]||e,En=({theme:e,ownerState:t})=>{const o=Rn(t.color),a=N(e,`palette.${o}`,!1)||t.color,s=N(e,`palette.${o}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:wn.alpha(a,.4)},Nn=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],In=e=>{const{classes:t,component:o,focusVisible:a,underline:s}=e,l={root:["root",`underline${Y(s)}`,o==="button"&&"button",a&&"focusVisible"]};return Fn(l,Mn,t)},Bn=Ln(Wn,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`underline${Y(o.underline)}`],o.component==="button"&&t.button]}})(({theme:e,ownerState:t})=>L({},t.underline==="none"&&{textDecoration:"none"},t.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},t.underline==="always"&&L({textDecoration:"underline"},t.color!=="inherit"&&{textDecorationColor:En({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),t.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${An.focusVisible}`]:{outline:"auto"}})),_=g.forwardRef(function(t,o){const a=_n({props:t,name:"MuiLink"}),{className:s,color:l="primary",component:m="a",onBlur:u,onFocus:p,TypographyClasses:d,underline:c="always",variant:r="inherit",sx:i}=a,x=xn(a,Nn),{isFocusVisibleRef:f,onBlur:T,onFocus:S,ref:Q}=Vn(),[X,A]=g.useState(!1),Z=Tn(o,Q),nn=C=>{T(C),f.current===!1&&A(!1),u&&u(C)},en=C=>{S(C),f.current===!0&&A(!0),p&&p(C)},R=L({},a,{color:l,component:m,focusVisible:X,underline:c,variant:r}),tn=In(R);return n.jsx(Bn,L({color:l,className:Sn(tn.root,s),classes:d,component:m,onBlur:nn,onFocus:en,ref:Z,ownerState:R,variant:r,sx:[...Object.keys(J).includes(l)?[]:[{color:l}],...Array.isArray(i)?i:[i]]},x))}),Un={title:"Components/Content"},F=[{label:"Chip as value 1",value:"chip_value1"},{label:"Chip as value 2",value:"chip_value2"},{label:"Chip as value 3",value:"chip_value3"}],y={tags:[{label:"Chip 1",value:"chip-1"},{label:"Chip 2",value:"chip-2"},{label:"Chip 3",value:"chip-3"},{label:"Chip 4",value:"chip-4"}],date:new Date("December 17, 1995 03:24:00"),toggle:!1,colorPicker:"#a8001791",thumbnail:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",chipsAsValue:n.jsx(un,{children:F==null?void 0:F.map(e=>n.jsx(Cn,{label:e==null?void 0:e.label},`${e==null?void 0:e.label}-${e==null?void 0:e.value}`))}),undefinedValue:void 0,emptyStringValue:"",emptyArrayValue:[],animals:[{id:1,species:"Dog",color:"Brown"},{id:2,species:"Cat",color:"White"}],cars:[{id:1,make:"BMW",model:"M3"},{id:2,make:"Volkswagen",model:"Golf"}],multipleTransforms:"This is some text",fieldWithLongWord:"Pneumonoultramicroscopicsilicovolcanoconiosis",fieldWithLongURL:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/story/components-content--kitchen-sink",fieldWithLongSentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis diam non imperdiet luctus. Morbi in augue leo. Vestibulum non tellus in elit molestie pretium sollicitudin eget purus. Mauris varius, est sed placerat ornare, nulla libero consequat nisi, id tempor nibh felis non velit."},On={"Single Column":[[["tags"]],[["colorPicker"]],[["toggle"]],[["date"]],[["thumbnail"]],[["chipsAsValue"]],[["animals"]],[["cars"]],[["multipleTransforms"]]],"Two Columns":[[["tags"],["colorPicker"]],[["toggle"],["date"]],[["thumbnail"],["chipsAsValue"]],[["animals"],["cars"]],[["multipleTransforms"]]],"Three Columns":[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["thumbnail"]],[["animals"],["cars"],["chipsAsValue"]],[["multipleTransforms"]]]},h=({title:e,variant:t,sectionConfigKey:o,showButtons:a,showFirstRowItems:s,amountContent:l})=>{const[m,u]=g.useState(!1),p=()=>{u(!m)},d=[{name:"edit",label:"Edit",mIcon:M,color:"gray",variant:"icon",show:[a!=="undefined",Number(a)>=1],onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:m?"Less Details":"More Details",onClick:p,show:[a!=="undefined",Number(a)>=2]}],c=[{name:"chips",label:"Chips using transform_chips()",tooltip:"This is a list of chips",transforms:[W()],column:"tags",show:s},{name:"toggle",label:"Toggle using transform_boolean()",tooltip:n.jsxs(n.Fragment,{children:["This came in as a boolean, but",n.jsx("br",{}),"will displayed as yes or no"]}),transforms:[V()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[j()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[D()],column:"colorPicker",show:s},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[P({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"animals",label:"Animals",transforms:[E({columns:[{name:"species",label:"Species"},{name:"color",label:"Color"}]})]},{name:"cars",label:"Cars",transforms:[E({columns:[{name:"make",label:"Make"},{name:"model",label:"Model"}]})]},{name:"multipleTransforms",label:"Multiple Transforms",transforms:[({data:i})=>n.jsx("div",{style:{color:"red"},children:i}),({data:i})=>n.jsx("div",{style:{fontSize:"2rem"},children:i})]}],r=On[o];return n.jsxs(n.Fragment,{children:[n.jsx(b,{title:e,data:y,fields:c,sections:r.slice(0,m?void 0:2),buttons:d,variant:t}),l===2&&n.jsx(b,{title:"Second content",data:y,fields:c,sections:r,variant:t})]})};h.args={title:"Main Content Title",variant:"standard",sectionConfigKey:"Single Column",showButtons:"2",showFirstRowItems:!0,amountContent:1};h.argTypes={title:{name:"Title"},variant:{name:"Variant",options:["standard","card"],control:{type:"select"}},sectionConfigKey:{name:"Sections",options:["Single Column","Two Columns","Three Columns"],control:{type:"select"}},showButtons:{name:"Buttons",options:["1","2","0","undefined"],control:{type:"select"}},showFirstRowItems:{name:"Show first row"},amountContent:{name:"Amount of contents",options:[1,2],control:{type:"select"}}};const v=()=>{const e=[{name:"edit",label:"Edit",mIcon:M,color:"gray",variant:"icon",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:"More Details",onClick:()=>alert("More details")}],t=[{name:"chips",label:"Chips using transform_chips()",transforms:[W()],column:"tags"},{name:"toggle",label:n.jsx(_,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[V()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[j()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[D()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[P({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:a})=>n.jsx(_,{href:a,children:a})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],o=[["tags","colorPicker",void 0],["toggle","date","colorPicker"],["thumbnail","chipsAsValue",void 0],["undefinedValue","emptyStringValue","emptyArrayValue"],["fieldWithLongWord","fieldWithLongURL","fieldWithLongSentence"]];return n.jsxs(n.Fragment,{children:[n.jsx(b,{title:"Standard content",data:y,fields:t,sections:o,buttons:e}),n.jsx("br",{}),n.jsx(b,{title:"Card content",data:y,fields:t,sections:o,buttons:e,variant:"card"})]})},k=()=>{const e=[{name:"edit",label:"Edit",mIcon:M,color:"gray",variant:"icon",onClick:function(){alert("Edit button clicked")}},{name:"showDetails",color:"teal",variant:"text",label:"More Details",onClick:()=>alert("More details")}],t=[{name:"chips",label:"Chips using transform_chips()",transforms:[W()],column:"tags"},{name:"toggle",label:n.jsx(_,{href:"#",children:"Toggle using transform_boolean()"}),transforms:[V()]},{name:"date",label:"Date using transform_dateFormat()",transforms:[j()]},{name:"color",label:"Color using transform_colorPicker()",transforms:[D()],column:"colorPicker"},{name:"thumbnail",label:"Thumbnail using transform_thumbnail()",transforms:[P({width:150,height:150})]},{name:"chipsAsValue",label:"Chips with no transform only value"},{name:"undefinedValue",label:"Field with undefined value"},{name:"emptyStringValue",label:"Field with empty string value"},{name:"emptyArrayValue",label:"Field with empty array value"},{name:"fieldWithLongWord",label:"Long Word"},{name:"fieldWithLongURL",label:"Long URL",transforms:[({data:a})=>n.jsx(_,{href:a,children:a})]},{name:"fieldWithLongSentence",label:"Long Sentence"}],o=[[["tags"],["colorPicker"],[]],[["toggle"],["date"],["colorPicker"]],[["thumbnail"],["chipsAsValue"],[]],[["undefinedValue"],["emptyStringValue"],["emptyArrayValue"]],[["fieldWithLongWord"],["fieldWithLongURL"],["fieldWithLongSentence"]]];return n.jsxs(n.Fragment,{children:[n.jsx(b,{title:"Standard content",data:y,fields:t,sections:o,buttons:e}),n.jsx("br",{}),n.jsx(b,{title:"Card content",data:y,fields:t,sections:o,buttons:e,variant:"card"})]})};var I,B,U;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`({
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
}`,...(U=(B=h.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var O,$,K;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(K=($=v.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var z,H,q;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`(): ReactElement => {
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
  const columns = [[["tags"], ["colorPicker"], []], [["toggle"], ["date"], ["colorPicker"]], [["thumbnail"], ["chipsAsValue"], []], [["undefinedValue"], ["emptyStringValue"], ["emptyArrayValue"]], [["fieldWithLongWord"], ["fieldWithLongURL"], ["fieldWithLongSentence"]]];
  return <>
            <Content title="Standard content" data={data} fields={fields} sections={columns} buttons={buttons} />
            <br />
            <Content title="Card content" data={data} fields={fields} sections={columns} buttons={buttons} variant="card" />
        </>;
}`,...(q=(H=k.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};const $n=["Playground","KitchenSink","KitchenSinkDeprecated"],re=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:v,KitchenSinkDeprecated:k,Playground:h,__namedExportsOrder:$n,default:Un},Symbol.toStringTag,{value:"Module"}));export{h as P,re as s};
