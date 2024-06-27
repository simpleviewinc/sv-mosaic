import{j as n,r as se}from"./jsx-runtime-nGUw9YhZ.js";import{r as d}from"./index-BP8_t0zE.js";import{s as m}from"./styled-components.browser.esm-8MQ3dTkk.js";import{s as j,t as c}from"./theme-CtvfJOCv.js";import{P as J,a as ie}from"./Popper-Cx7DIS0Z.js";import{G as ae,B as k}from"./Button-CDqJWCGq.js";import{C as le}from"./ClickAwayListener-BOIWMbZr.js";import{d as ce}from"./Add-DDRv9oNH.js";import{r as pe,i as ue}from"./createSvgIcon-DzRyHCtm.js";import{m as de,n as me,g as he,a as fe,s as xe,u as ge,_ as Ce,b as ve,r as y,o as T,e as we}from"./styled-BlYH_7wi.js";import{_ as w}from"./extends-CF3RwP-h.js";import{e as be}from"./extendSxProp-CzvbGhib.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./useThemeProps-Ds-LJhvX.js";import"./assertThisInitialized-CO-dlV3K.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./useToggle-lipGlewK.js";const Se=j(J)`
	&.MuiPaper-root {
		background-color: white;
		border: 1px solid ${c.newColors.grey2[100]};
		max-width: 620px;
		border-radius: 5px;
		box-shadow: 0px 2px 6px ${c.newColors.almostBlack[20]};
	}
`,$e={zIndex:2e3,"&[data-popper-placement*='bottom']":{"& .MuiPopper-arrow":{top:0,left:0,marginTop:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:`transparent transparent ${c.colors.white} transparent`}}},"&[data-popper-placement*='top']":{"& .MuiPopper-arrow":{bottom:0,left:0,marginBottom:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"1em 1em 0 1em",borderColor:`${c.colors.white} transparent transparent transparent`}}}},Ee=j.div`
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
`,je=j.div`
	font-family: ${c.fontFamily};
	padding: 24px 32px;
`,ke=j.hr`
	border-left: none;
	border-top: 1px solid ${c.newColors.grey2[100]};
	margin: 16px -32px;
`,W=e=>{const{anchorEl:t,className:s,topContent:o,bottomContent:r,open:i,onClose:l}=e,[a,p]=d.useState(null);return d.useEffect(()=>{if(!r&&!o)throw new Error("Popover component expected some content but none was provided.")},[r,o]),d.useEffect(()=>{if(i&&!t)throw new Error("Popover component requires an anchor element to position itself but none was provided.")},[t,i]),n.jsx(ie,{className:s,sx:$e,placement:"bottom",modifiers:[{name:"flip",enabled:!0,options:{altBoundary:!0,rootBoundary:"viewport",padding:8}},{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!1,rootBoundary:"viewport",padding:8}},{name:"arrow",enabled:!0,options:{element:a}}],open:i,anchorEl:t,transition:!0,children:({TransitionProps:u})=>n.jsx(ae,{...u,timeout:350,children:n.jsx(J,{sx:{boxShadow:"none"},children:n.jsx(le,{onClickAway:l,children:n.jsxs(Se,{children:[n.jsx(Ee,{ref:p,className:"MuiPopper-arrow"}),n.jsxs(je,{children:[o&&n.jsx("div",{children:o}),r&&o&&n.jsx(ke,{"data-testid":"bottom-content-split"}),r&&n.jsx("div",{children:r})]})]})})})})})};function ye(){return de(me)}const N=d.createContext();function Be(e){return he("MuiGrid",e)}const Pe=[0,1,2,3,4,5,6,7,8,9,10],Te=["column-reverse","column","row-reverse","row"],We=["nowrap","wrap-reverse","wrap"],v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],M=fe("MuiGrid",["root","container","item","zeroMinWidth",...Pe.map(e=>`spacing-xs-${e}`),...Te.map(e=>`direction-xs-${e}`),...We.map(e=>`wrap-xs-${e}`),...v.map(e=>`grid-xs-${e}`),...v.map(e=>`grid-sm-${e}`),...v.map(e=>`grid-md-${e}`),...v.map(e=>`grid-lg-${e}`),...v.map(e=>`grid-xl-${e}`)]),Me=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function C(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function Oe({theme:e,ownerState:t}){let s;return e.breakpoints.keys.reduce((o,r)=>{let i={};if(t[r]&&(s=t[r]),!s)return o;if(s===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=y({values:t.columns,breakpoints:e.breakpoints.values}),a=typeof l=="object"?l[r]:l;if(a==null)return o;const p=`${Math.round(s/a*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const h=e.spacing(t.columnSpacing);if(h!=="0px"){const f=`calc(${p} + ${C(h)})`;u={flexBasis:f,maxWidth:f}}}i=w({flexBasis:p,flexGrow:0,maxWidth:p},u)}return e.breakpoints.values[r]===0?Object.assign(o,i):o[e.breakpoints.up(r)]=i,o},{})}function Ae({theme:e,ownerState:t}){const s=y({values:t.direction,breakpoints:e.breakpoints.values});return T({theme:e},s,o=>{const r={flexDirection:o};return o.indexOf("column")===0&&(r[`& > .${M.item}`]={maxWidth:"none"}),r})}function Ge({theme:e,ownerState:t}){const{container:s,rowSpacing:o}=t;let r={};if(s&&o!==0){const i=y({values:o,breakpoints:e.breakpoints.values});r=T({theme:e},i,l=>{const a=e.spacing(l);return a!=="0px"?{marginTop:`-${C(a)}`,[`& > .${M.item}`]:{paddingTop:C(a)}}:{}})}return r}function ze({theme:e,ownerState:t}){const{container:s,columnSpacing:o}=t;let r={};if(s&&o!==0){const i=y({values:o,breakpoints:e.breakpoints.values});r=T({theme:e},i,l=>{const a=e.spacing(l);return a!=="0px"?{width:`calc(100% + ${C(a)})`,marginLeft:`-${C(a)}`,[`& > .${M.item}`]:{paddingLeft:C(a)}}:{}})}return r}function Le(e,t,s={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[s[`spacing-xs-${String(e)}`]];const o=[];return t.forEach(r=>{const i=e[r];Number(i)>0&&o.push(s[`spacing-${r}-${String(i)}`])}),o}const Ne=xe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{container:o,direction:r,item:i,spacing:l,wrap:a,zeroMinWidth:p,breakpoints:u}=s;let h=[];o&&(h=Le(l,u,t));const f=[];return u.forEach(x=>{const g=s[x];g&&f.push(t[`grid-${x}-${String(g)}`])}),[t.root,o&&t.container,i&&t.item,p&&t.zeroMinWidth,...h,r!=="row"&&t[`direction-xs-${String(r)}`],a!=="wrap"&&t[`wrap-xs-${String(a)}`],...f]}})(({ownerState:e})=>w({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Ae,Ge,ze,Oe);function Re(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const s=[];return t.forEach(o=>{const r=e[o];if(Number(r)>0){const i=`spacing-${o}-${String(r)}`;s.push(i)}}),s}const _e=e=>{const{classes:t,container:s,direction:o,item:r,spacing:i,wrap:l,zeroMinWidth:a,breakpoints:p}=e;let u=[];s&&(u=Re(i,p));const h=[];p.forEach(x=>{const g=e[x];g&&h.push(`grid-${x}-${String(g)}`)});const f={root:["root",s&&"container",r&&"item",a&&"zeroMinWidth",...u,o!=="row"&&`direction-xs-${String(o)}`,l!=="wrap"&&`wrap-xs-${String(l)}`,...h]};return we(f,Be,t)},Ie=d.forwardRef(function(t,s){const o=ge({props:t,name:"MuiGrid"}),{breakpoints:r}=ye(),i=be(o),{className:l,columns:a,columnSpacing:p,component:u="div",container:h=!1,direction:f="row",item:x=!1,rowSpacing:g,spacing:B=0,wrap:Y="wrap",zeroMinWidth:ee=!1}=i,P=Ce(i,Me),te=g||B,ne=p||B,oe=d.useContext(N),A=h?a||12:oe,G={},z=w({},P);r.keys.forEach(b=>{P[b]!=null&&(G[b]=P[b],delete z[b])});const L=w({},i,{columns:A,container:h,direction:f,item:x,rowSpacing:te,columnSpacing:ne,wrap:Y,zeroMinWidth:ee,spacing:B},G,{breakpoints:r.keys}),re=_e(L);return n.jsx(N.Provider,{value:A,children:n.jsx(Ne,w({ownerState:L,className:ve(re.root,l),as:u,ref:s},z))})});var O={},He=ue;Object.defineProperty(O,"__esModule",{value:!0});var Z=O.default=void 0,Ve=He(pe()),De=se(),qe=(0,Ve.default)((0,De.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Place");Z=O.default=qe;const Pt={title:"Components/Popover"},Ue=m.div`
    flex-grow: 1;
`,Fe=m.div`
    height: 400px;
    overflow: auto;
`,Je=m(Ie)`
    position: relative;
    background-color: ${c.newColors.grey1[100]};
    height: 150%;
    align-items: center;
    justify-content: center;
`,K=m.p`
    color: ${c.newColors.almostBlack[100]};
    font-weight: ${c.fontWeight.semiBold};
    font-size: 16px;
    margin-bottom: 8px;
`,Q=m.span`
    color: ${c.newColors.grey3[100]};
    font-size: 12px;
`,Ze=n.jsxs("div",{children:[n.jsx(K,{children:"Title"}),n.jsx(Q,{children:"Subtitle"})]}),X=n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(k,{color:"teal",variant:"text",label:"Add",mIcon:ce,onClick:()=>alert("Add button clicked")})}),S=()=>{const[e,t]=d.useState(null),[s,o]=d.useState(!1),r=a=>{t(a.currentTarget),o(!0)},i=()=>{o(!1)},l=a=>{if(!a)return;const p=a.parentElement;p.scrollTop=a.clientHeight/4};return n.jsx(Ue,{children:n.jsx(Fe,{children:n.jsx(Je,{container:!0,ref:l,children:n.jsxs("div",{children:[n.jsx(k,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),n.jsx(W,{anchorEl:e,topContent:Ze,bottomContent:X,onClose:i,open:s})]})})})})},Ke=m.input`
    background-color: ${c.newColors.grey1[100]};
    border: ${c.borders.simplyGrey};
    height: 47px;
    border-radius: 0;
`,Qe=n.jsxs("div",{children:[n.jsx(Ke,{}),n.jsx(K,{children:"Title"}),n.jsx(Q,{children:"Subtitle"})]}),$=()=>{const[e,t]=d.useState(null),[s,o]=d.useState(!1),r=l=>{t(l.currentTarget),o(!0)},i=()=>{o(!1)};return n.jsxs("div",{children:[n.jsx(k,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),n.jsx(W,{anchorEl:e,topContent:Qe,bottomContent:X,onClose:i,open:s})]})},Xe=m.span`
    color: ${c.newColors.almostBlack[100]};
    cursor: pointer;
    font-size: 16px;
    font-weight: ${c.fontWeight.semiBold};
    text-decoration: underline;
`,Ye=m.span`
    color: ${c.newColors.grey3[100]};
    font-size: 12px;
    margin-left: 4px;
`,et=n.jsxs("div",{children:[n.jsx(Xe,{onClick:()=>alert("Title clicked"),children:"Clickable Title"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[n.jsx(Z,{sx:{width:12,color:c.newColors.grey3[100]}}),n.jsx(Ye,{children:"Subtitle"})]})]}),tt=[{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"}],nt=m.span`
    color: ${c.newColors.grey4[100]};
    margin-right: 8px;
`,ot=m.span`
    color: ${c.newColors.grey3[100]};
`,rt=m.span`
    display: block;
    color: ${c.newColors.almostBlack[100]};
    font-weight: ${c.fontWeight.semiBold};
    font-size: 14px;
    margin: 16px 0;
`,st=m.span`
    color: ${c.newColors.realTeal[100]};
    cursor: pointer;
    font-weight: ${c.fontWeight.semiBold};
    font-size: 14px;
`,it=()=>n.jsxs("div",{children:[tt.map((e,t)=>n.jsxs("div",{style:{display:"flex",fontSize:14},children:[n.jsxs(nt,{children:[e.label,":"]}),n.jsx(ot,{children:e.value})]},`${e.label}-${t}`)),n.jsx(rt,{children:"mail@gmail.com"}),n.jsx(st,{onClick:()=>alert("Link clicked"),children:"www.link.com"})]}),E=()=>{const[e,t]=d.useState(null),[s,o]=d.useState(!1),r=l=>{t(l.currentTarget),o(!0)},i=()=>{o(!1)};return n.jsxs("div",{children:[n.jsx(k,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),n.jsx(W,{anchorEl:e,topContent:et,bottomContent:n.jsx(it,{}),onClose:i,open:s})]})};var R,_,I;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(I=(_=S.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var H,V,D;$.parameters={...$.parameters,docs:{...(H=$.parameters)==null?void 0:H.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(D=(V=$.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,U,F;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(F=(U=E.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};const Tt=["Playground","Input","TextAndLinks"];export{$ as Input,S as Playground,E as TextAndLinks,Tt as __namedExportsOrder,Pt as default};
