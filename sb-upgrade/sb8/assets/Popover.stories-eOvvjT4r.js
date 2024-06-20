import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{r as u}from"./index-CDs2tPxN.js";import{s as m}from"./styled-components.browser.esm-C-l0uCre.js";import{s as $,t as c}from"./theme-tUuL1bpb.js";import{P as J,a as se}from"./Popper-CAohKvIp.js";import{G as ie,B as k}from"./Button-B_QyrzNG.js";import{C as ae}from"./ClickAwayListener-BvBAfXuM.js";import{d as le}from"./Add-4Hn9ciTE.js";import{r as ce,i as pe}from"./createSvgIcon-Ci5omaqv.js";import{m as de,n as ue,g as me,a as he,s as fe,u as xe,_ as ge,b as ve,r as j,o as W,e as Ce}from"./styled-P6hUx81_.js";import{_ as S}from"./extends-CF3RwP-h.js";import{e as we}from"./extendSxProp-Czae8Fw9.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./useThemeProps-DZj2lB8w.js";import"./assertThisInitialized-DcNg8fFv.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./useToggle-D8hNafRh.js";const be=$(J)`
	&.MuiPaper-root {
		background-color: white;
		border: 1px solid ${c.newColors.grey2[100]};
		max-width: 620px;
		border-radius: 5px;
		box-shadow: 0px 2px 6px ${c.newColors.almostBlack[20]};
	}
`,ye={zIndex:2e3,"&[data-popper-placement*='bottom']":{"& .MuiPopper-arrow":{top:0,left:0,marginTop:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:`transparent transparent ${c.colors.white} transparent`}}},"&[data-popper-placement*='top']":{"& .MuiPopper-arrow":{bottom:0,left:0,marginBottom:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"1em 1em 0 1em",borderColor:`${c.colors.white} transparent transparent transparent`}}}},Se=$.div`
	position: absolute;
	font-size: 7px;
	width: 3em;
	height: 3em;
	&:before {
		content: "";
		margin: auto;
		display: block;
		width: 0;
		height: 0;
		border-style: solid;
  }
`,Ee=$.div`
	font-family: ${c.fontFamily};
	padding: 24px 32px;
`,$e=$.hr`
	border-left: none;
	border-top: 1px solid ${c.newColors.grey2[100]};
	margin: 16px -32px;
`,T=e=>{const{anchorEl:n,className:s,topContent:o,bottomContent:r,open:i,onClose:l}=e,[a,p]=u.useState(null);return u.useEffect(()=>{if(!r&&!o)throw new Error("Popover component expected some content but none was provided.")},[r,o]),u.useEffect(()=>{if(i&&!n)throw new Error("Popover component requires an anchor element to position itself but none was provided.")},[n,i]),t.jsx(se,{className:s,sx:ye,placement:"bottom",modifiers:[{name:"flip",enabled:!0,options:{altBoundary:!0,rootBoundary:"viewport",padding:8}},{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!1,rootBoundary:"viewport",padding:8}},{name:"arrow",enabled:!0,options:{element:a}}],open:i,anchorEl:n,transition:!0,children:({TransitionProps:d})=>t.jsx(ie,{...d,timeout:350,children:t.jsx(J,{sx:{boxShadow:"none"},children:t.jsx(ae,{onClickAway:l,children:t.jsxs(be,{children:[t.jsx(Se,{ref:p,className:"MuiPopper-arrow"}),t.jsxs(Ee,{children:[o&&t.jsx("div",{children:o}),r&&o&&t.jsx($e,{"data-testid":"bottom-content-split"}),r&&t.jsx("div",{children:r})]})]})})})})})};T.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{anchorEl:{required:!0,tsType:{name:'PopperProps["anchorEl"]',raw:'PopperProps["anchorEl"]'},description:`An HTML element, or a function that returns one.
It's used to set the position of the popover. This
prop is required because the reference of the element
is needed to display the pointing arrow`},bottomContent:{required:!1,tsType:{name:"JSX.Element"},description:"Content displayed at the bottom of the Popover"},className:{required:!1,tsType:{name:"string"},description:"Used for adding or overriding styles."},topContent:{required:!1,tsType:{name:"JSX.Element"},description:"Content displayed at the top of the Popover"},open:{required:!0,tsType:{name:"boolean"},description:"If true, the component is shown."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the component requests to be closed."}}};function ke(){return de(ue)}const I=u.createContext();function je(e){return me("MuiGrid",e)}const Te=[0,1,2,3,4,5,6,7,8,9,10],Pe=["column-reverse","column","row-reverse","row"],Be=["nowrap","wrap-reverse","wrap"],C=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],M=he("MuiGrid",["root","container","item","zeroMinWidth",...Te.map(e=>`spacing-xs-${e}`),...Pe.map(e=>`direction-xs-${e}`),...Be.map(e=>`wrap-xs-${e}`),...C.map(e=>`grid-xs-${e}`),...C.map(e=>`grid-sm-${e}`),...C.map(e=>`grid-md-${e}`),...C.map(e=>`grid-lg-${e}`),...C.map(e=>`grid-xl-${e}`)]),We=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function v(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function Me({theme:e,ownerState:n}){let s;return e.breakpoints.keys.reduce((o,r)=>{let i={};if(n[r]&&(s=n[r]),!s)return o;if(s===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=j({values:n.columns,breakpoints:e.breakpoints.values}),a=typeof l=="object"?l[r]:l;if(a==null)return o;const p=`${Math.round(s/a*1e8)/1e6}%`;let d={};if(n.container&&n.item&&n.columnSpacing!==0){const h=e.spacing(n.columnSpacing);if(h!=="0px"){const f=`calc(${p} + ${v(h)})`;d={flexBasis:f,maxWidth:f}}}i=S({flexBasis:p,flexGrow:0,maxWidth:p},d)}return e.breakpoints.values[r]===0?Object.assign(o,i):o[e.breakpoints.up(r)]=i,o},{})}function Ae({theme:e,ownerState:n}){const s=j({values:n.direction,breakpoints:e.breakpoints.values});return W({theme:e},s,o=>{const r={flexDirection:o};return o.indexOf("column")===0&&(r[`& > .${M.item}`]={maxWidth:"none"}),r})}function Oe({theme:e,ownerState:n}){const{container:s,rowSpacing:o}=n;let r={};if(s&&o!==0){const i=j({values:o,breakpoints:e.breakpoints.values});r=W({theme:e},i,l=>{const a=e.spacing(l);return a!=="0px"?{marginTop:`-${v(a)}`,[`& > .${M.item}`]:{paddingTop:v(a)}}:{}})}return r}function _e({theme:e,ownerState:n}){const{container:s,columnSpacing:o}=n;let r={};if(s&&o!==0){const i=j({values:o,breakpoints:e.breakpoints.values});r=W({theme:e},i,l=>{const a=e.spacing(l);return a!=="0px"?{width:`calc(100% + ${v(a)})`,marginLeft:`-${v(a)}`,[`& > .${M.item}`]:{paddingLeft:v(a)}}:{}})}return r}function Ge(e,n,s={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[s[`spacing-xs-${String(e)}`]];const o=[];return n.forEach(r=>{const i=e[r];Number(i)>0&&o.push(s[`spacing-${r}-${String(i)}`])}),o}const Ne=fe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e,{container:o,direction:r,item:i,spacing:l,wrap:a,zeroMinWidth:p,breakpoints:d}=s;let h=[];o&&(h=Ge(l,d,n));const f=[];return d.forEach(x=>{const g=s[x];g&&f.push(n[`grid-${x}-${String(g)}`])}),[n.root,o&&n.container,i&&n.item,p&&n.zeroMinWidth,...h,r!=="row"&&n[`direction-xs-${String(r)}`],a!=="wrap"&&n[`wrap-xs-${String(a)}`],...f]}})(({ownerState:e})=>S({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Ae,Oe,_e,Me);function Ie(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const s=[];return n.forEach(o=>{const r=e[o];if(Number(r)>0){const i=`spacing-${o}-${String(r)}`;s.push(i)}}),s}const Le=e=>{const{classes:n,container:s,direction:o,item:r,spacing:i,wrap:l,zeroMinWidth:a,breakpoints:p}=e;let d=[];s&&(d=Ie(i,p));const h=[];p.forEach(x=>{const g=e[x];g&&h.push(`grid-${x}-${String(g)}`)});const f={root:["root",s&&"container",r&&"item",a&&"zeroMinWidth",...d,o!=="row"&&`direction-xs-${String(o)}`,l!=="wrap"&&`wrap-xs-${String(l)}`,...h]};return Ce(f,je,n)},ze=u.forwardRef(function(n,s){const o=xe({props:n,name:"MuiGrid"}),{breakpoints:r}=ke(),i=we(o),{className:l,columns:a,columnSpacing:p,component:d="div",container:h=!1,direction:f="row",item:x=!1,rowSpacing:g,spacing:P=0,wrap:Y="wrap",zeroMinWidth:ee=!1}=i,B=ge(i,We),te=g||P,ne=p||P,oe=u.useContext(I),O=h?a||12:oe,_={},G=S({},B);r.keys.forEach(E=>{B[E]!=null&&(_[E]=B[E],delete G[E])});const N=S({},i,{columns:O,container:h,direction:f,item:x,rowSpacing:te,columnSpacing:ne,wrap:Y,zeroMinWidth:ee,spacing:P},_,{breakpoints:r.keys}),re=Le(N);return t.jsx(I.Provider,{value:O,children:t.jsx(Ne,S({ownerState:N,className:ve(re.root,l),as:d,ref:s},G))})});var A={},Re=pe;Object.defineProperty(A,"__esModule",{value:!0});var X=A.default=void 0,qe=Re(ce()),He=t,Ve=(0,qe.default)((0,He.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Place");X=A.default=Ve;const Tt={title:"Components/Popover"},De=m.div`
    flex-grow: 1;
`,Ue=m.div`
    height: 400px;
    overflow: auto;
`,Fe=m(ze)`
    position: relative;
    background-color: ${c.newColors.grey1[100]};
    height: 150%;
    align-items: center;
    justify-content: center;
`,Z=m.p`
    color: ${c.newColors.almostBlack[100]};
    font-weight: ${c.fontWeight.semiBold};
    font-size: 16px;
    margin-bottom: 8px;
`,K=m.span`
    color: ${c.newColors.grey3[100]};
    font-size: 12px;
`,Je=t.jsxs("div",{children:[t.jsx(Z,{children:"Title"}),t.jsx(K,{children:"Subtitle"})]}),Q=t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(k,{color:"teal",variant:"text",label:"Add",mIcon:le,onClick:()=>alert("Add button clicked")})}),w=()=>{const[e,n]=u.useState(null),[s,o]=u.useState(!1),r=a=>{n(a.currentTarget),o(!0)},i=()=>{o(!1)},l=a=>{if(!a)return;const p=a.parentElement;p.scrollTop=a.clientHeight/4};return t.jsx(De,{children:t.jsx(Ue,{children:t.jsx(Fe,{container:!0,ref:l,children:t.jsxs("div",{children:[t.jsx(k,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),t.jsx(T,{anchorEl:e,topContent:Je,bottomContent:Q,onClose:i,open:s})]})})})})},Xe=m.input`
    background-color: ${c.newColors.grey1[100]};
    border: ${c.borders.simplyGrey};
    height: 47px;
    border-radius: 0;
`,Ze=t.jsxs("div",{children:[t.jsx(Xe,{}),t.jsx(Z,{children:"Title"}),t.jsx(K,{children:"Subtitle"})]}),b=()=>{const[e,n]=u.useState(null),[s,o]=u.useState(!1),r=l=>{n(l.currentTarget),o(!0)},i=()=>{o(!1)};return t.jsxs("div",{children:[t.jsx(k,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),t.jsx(T,{anchorEl:e,topContent:Ze,bottomContent:Q,onClose:i,open:s})]})},Ke=m.span`
    color: ${c.newColors.almostBlack[100]};
    cursor: pointer;
    font-size: 16px;
    font-weight: ${c.fontWeight.semiBold};
    text-decoration: underline;
`,Qe=m.span`
    color: ${c.newColors.grey3[100]};
    font-size: 12px;
    margin-left: 4px;
`,Ye=t.jsxs("div",{children:[t.jsx(Ke,{onClick:()=>alert("Title clicked"),children:"Clickable Title"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[t.jsx(X,{sx:{width:12,color:c.newColors.grey3[100]}}),t.jsx(Qe,{children:"Subtitle"})]})]}),et=[{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"}],tt=m.span`
    color: ${c.newColors.grey4[100]};
    margin-right: 8px;
`,nt=m.span`
    color: ${c.newColors.grey3[100]};
`,ot=m.span`
    display: block;
    color: ${c.newColors.almostBlack[100]};
    font-weight: ${c.fontWeight.semiBold};
    font-size: 14px;
    margin: 16px 0;
`,rt=m.span`
    color: ${c.newColors.realTeal[100]};
    cursor: pointer;
    font-weight: ${c.fontWeight.semiBold};
    font-size: 14px;
`,st=()=>t.jsxs("div",{children:[et.map((e,n)=>t.jsxs("div",{style:{display:"flex",fontSize:14},children:[t.jsxs(tt,{children:[e.label,":"]}),t.jsx(nt,{children:e.value})]},`${e.label}-${n}`)),t.jsx(ot,{children:"mail@gmail.com"}),t.jsx(rt,{onClick:()=>alert("Link clicked"),children:"www.link.com"})]}),y=()=>{const[e,n]=u.useState(null),[s,o]=u.useState(!1),r=l=>{n(l.currentTarget),o(!0)},i=()=>{o(!1)};return t.jsxs("div",{children:[t.jsx(k,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),t.jsx(T,{anchorEl:e,topContent:Ye,bottomContent:t.jsx(st,{}),onClose:i,open:s})]})};w.__docgenInfo={description:"",methods:[],displayName:"Playground"};b.__docgenInfo={description:"",methods:[],displayName:"Input"};y.__docgenInfo={description:"",methods:[],displayName:"TextAndLinks"};var L,z,R;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`(): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const centerScroll = element => {
    if (!element) {
      return;
    }
    const container = element.parentElement;
    container.scrollTop = element.clientHeight / 4;
  };
  return <ExampleWrapper>
            <Wrapper>
                <StyledGrid container ref={centerScroll}>
                    <div>
                        <Button color="yellow" variant="contained" label="Open Popover" onClick={handleClick} />
                        <Popover anchorEl={anchorEl} topContent={ExampleTopContent} bottomContent={ButtonBottomContent} onClose={handleClose} open={open} />
                    </div>
                </StyledGrid>
            </Wrapper>
        </ExampleWrapper>;
}`,...(R=(z=w.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var q,H,V;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`(): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <div>
            <Button color="yellow" variant="contained" label="Open Popover" onClick={handleClick} />
            <Popover anchorEl={anchorEl} topContent={withInputTopContent} bottomContent={ButtonBottomContent} onClose={handleClose} open={open} />
        </div>;
}`,...(V=(H=b.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var D,U,F;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`(): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <div>
            <Button color="yellow" variant="contained" label="Open Popover" onClick={handleClick} />
            <Popover anchorEl={anchorEl} topContent={TopContent} bottomContent={<BottomContent />} onClose={handleClose} open={open} />
        </div>;
}`,...(F=(U=y.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};const Pt=["Playground","Input","TextAndLinks"];export{b as Input,w as Playground,y as TextAndLinks,Pt as __namedExportsOrder,Tt as default};
