import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{s as m}from"./styled-components.browser.esm-8MQ3dTkk.js";import{s as j,t as c}from"./theme-CtvfJOCv.js";import{P as Z,a as se}from"./Popper-CwZOyH_P.js";import{G as ie,B as k}from"./Button-BBNnoZZP.js";import{C as ae}from"./ClickAwayListener-DFiznkjI.js";import{d as le}from"./Add-ktkGHE_h.js";import{r as ce,i as pe}from"./createSvgIcon-DQitHYV2.js";import{m as ue,n as de,g as me,a as he,s as fe,u as xe,_ as ge,b as Ce,r as y,o as T,e as ve}from"./styled-BlYH_7wi.js";import{_ as w}from"./extends-CF3RwP-h.js";import{e as we}from"./extendSxProp-CzvbGhib.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./useThemeProps-Ds-LJhvX.js";import"./assertThisInitialized-CO-dlV3K.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./useToggle-lipGlewK.js";const be=j(Z)`
	&.MuiPaper-root {
		background-color: white;
		border: 1px solid ${c.newColors.grey2[100]};
		max-width: 620px;
		border-radius: 5px;
		box-shadow: 0px 2px 6px ${c.newColors.almostBlack[20]};
	}
`,Se={zIndex:2e3,"&[data-popper-placement*='bottom']":{"& .MuiPopper-arrow":{top:0,left:0,marginTop:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:`transparent transparent ${c.colors.white} transparent`}}},"&[data-popper-placement*='top']":{"& .MuiPopper-arrow":{bottom:0,left:0,marginBottom:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"1em 1em 0 1em",borderColor:`${c.colors.white} transparent transparent transparent`}}}},$e=j.div`
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
`,Ee=j.div`
	font-family: ${c.fontFamily};
	padding: 24px 32px;
`,je=j.hr`
	border-left: none;
	border-top: 1px solid ${c.newColors.grey2[100]};
	margin: 16px -32px;
`,W=e=>{const{anchorEl:n,className:s,topContent:o,bottomContent:r,open:i,onClose:l}=e,[a,p]=d.useState(null);return d.useEffect(()=>{if(!r&&!o)throw new Error("Popover component expected some content but none was provided.")},[r,o]),d.useEffect(()=>{if(i&&!n)throw new Error("Popover component requires an anchor element to position itself but none was provided.")},[n,i]),t.jsx(se,{className:s,sx:Se,placement:"bottom",modifiers:[{name:"flip",enabled:!0,options:{altBoundary:!0,rootBoundary:"viewport",padding:8}},{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!1,rootBoundary:"viewport",padding:8}},{name:"arrow",enabled:!0,options:{element:a}}],open:i,anchorEl:n,transition:!0,children:({TransitionProps:u})=>t.jsx(ie,{...u,timeout:350,children:t.jsx(Z,{sx:{boxShadow:"none"},children:t.jsx(ae,{onClickAway:l,children:t.jsxs(be,{children:[t.jsx($e,{ref:p,className:"MuiPopper-arrow"}),t.jsxs(Ee,{children:[o&&t.jsx("div",{children:o}),r&&o&&t.jsx(je,{"data-testid":"bottom-content-split"}),r&&t.jsx("div",{children:r})]})]})})})})})};function ke(){return ue(de)}const N=d.createContext();function ye(e){return me("MuiGrid",e)}const Be=[0,1,2,3,4,5,6,7,8,9,10],Pe=["column-reverse","column","row-reverse","row"],Te=["nowrap","wrap-reverse","wrap"],v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],M=he("MuiGrid",["root","container","item","zeroMinWidth",...Be.map(e=>`spacing-xs-${e}`),...Pe.map(e=>`direction-xs-${e}`),...Te.map(e=>`wrap-xs-${e}`),...v.map(e=>`grid-xs-${e}`),...v.map(e=>`grid-sm-${e}`),...v.map(e=>`grid-md-${e}`),...v.map(e=>`grid-lg-${e}`),...v.map(e=>`grid-xl-${e}`)]),We=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function C(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function Me({theme:e,ownerState:n}){let s;return e.breakpoints.keys.reduce((o,r)=>{let i={};if(n[r]&&(s=n[r]),!s)return o;if(s===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=y({values:n.columns,breakpoints:e.breakpoints.values}),a=typeof l=="object"?l[r]:l;if(a==null)return o;const p=`${Math.round(s/a*1e8)/1e6}%`;let u={};if(n.container&&n.item&&n.columnSpacing!==0){const h=e.spacing(n.columnSpacing);if(h!=="0px"){const f=`calc(${p} + ${C(h)})`;u={flexBasis:f,maxWidth:f}}}i=w({flexBasis:p,flexGrow:0,maxWidth:p},u)}return e.breakpoints.values[r]===0?Object.assign(o,i):o[e.breakpoints.up(r)]=i,o},{})}function Oe({theme:e,ownerState:n}){const s=y({values:n.direction,breakpoints:e.breakpoints.values});return T({theme:e},s,o=>{const r={flexDirection:o};return o.indexOf("column")===0&&(r[`& > .${M.item}`]={maxWidth:"none"}),r})}function Ae({theme:e,ownerState:n}){const{container:s,rowSpacing:o}=n;let r={};if(s&&o!==0){const i=y({values:o,breakpoints:e.breakpoints.values});r=T({theme:e},i,l=>{const a=e.spacing(l);return a!=="0px"?{marginTop:`-${C(a)}`,[`& > .${M.item}`]:{paddingTop:C(a)}}:{}})}return r}function Ge({theme:e,ownerState:n}){const{container:s,columnSpacing:o}=n;let r={};if(s&&o!==0){const i=y({values:o,breakpoints:e.breakpoints.values});r=T({theme:e},i,l=>{const a=e.spacing(l);return a!=="0px"?{width:`calc(100% + ${C(a)})`,marginLeft:`-${C(a)}`,[`& > .${M.item}`]:{paddingLeft:C(a)}}:{}})}return r}function ze(e,n,s={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[s[`spacing-xs-${String(e)}`]];const o=[];return n.forEach(r=>{const i=e[r];Number(i)>0&&o.push(s[`spacing-${r}-${String(i)}`])}),o}const Le=fe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e,{container:o,direction:r,item:i,spacing:l,wrap:a,zeroMinWidth:p,breakpoints:u}=s;let h=[];o&&(h=ze(l,u,n));const f=[];return u.forEach(x=>{const g=s[x];g&&f.push(n[`grid-${x}-${String(g)}`])}),[n.root,o&&n.container,i&&n.item,p&&n.zeroMinWidth,...h,r!=="row"&&n[`direction-xs-${String(r)}`],a!=="wrap"&&n[`wrap-xs-${String(a)}`],...f]}})(({ownerState:e})=>w({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Oe,Ae,Ge,Me);function Ne(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const s=[];return n.forEach(o=>{const r=e[o];if(Number(r)>0){const i=`spacing-${o}-${String(r)}`;s.push(i)}}),s}const Re=e=>{const{classes:n,container:s,direction:o,item:r,spacing:i,wrap:l,zeroMinWidth:a,breakpoints:p}=e;let u=[];s&&(u=Ne(i,p));const h=[];p.forEach(x=>{const g=e[x];g&&h.push(`grid-${x}-${String(g)}`)});const f={root:["root",s&&"container",r&&"item",a&&"zeroMinWidth",...u,o!=="row"&&`direction-xs-${String(o)}`,l!=="wrap"&&`wrap-xs-${String(l)}`,...h]};return ve(f,ye,n)},_e=d.forwardRef(function(n,s){const o=xe({props:n,name:"MuiGrid"}),{breakpoints:r}=ke(),i=we(o),{className:l,columns:a,columnSpacing:p,component:u="div",container:h=!1,direction:f="row",item:x=!1,rowSpacing:g,spacing:B=0,wrap:Y="wrap",zeroMinWidth:ee=!1}=i,P=ge(i,We),te=g||B,ne=p||B,oe=d.useContext(N),A=h?a||12:oe,G={},z=w({},P);r.keys.forEach(b=>{P[b]!=null&&(G[b]=P[b],delete z[b])});const L=w({},i,{columns:A,container:h,direction:f,item:x,rowSpacing:te,columnSpacing:ne,wrap:Y,zeroMinWidth:ee,spacing:B},G,{breakpoints:r.keys}),re=Re(L);return t.jsx(N.Provider,{value:A,children:t.jsx(Le,w({ownerState:L,className:Ce(re.root,l),as:u,ref:s},z))})});var O={},Ie=pe;Object.defineProperty(O,"__esModule",{value:!0});var J=O.default=void 0,He=Ie(ce()),Ve=t,De=(0,He.default)((0,Ve.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Place");J=O.default=De;const Bt={title:"Components/Popover"},qe=m.div`
    flex-grow: 1;
`,Ue=m.div`
    height: 400px;
    overflow: auto;
`,Fe=m(_e)`
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
`,Ze=t.jsxs("div",{children:[t.jsx(K,{children:"Title"}),t.jsx(Q,{children:"Subtitle"})]}),X=t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(k,{color:"teal",variant:"text",label:"Add",mIcon:le,onClick:()=>alert("Add button clicked")})}),S=()=>{const[e,n]=d.useState(null),[s,o]=d.useState(!1),r=a=>{n(a.currentTarget),o(!0)},i=()=>{o(!1)},l=a=>{if(!a)return;const p=a.parentElement;p.scrollTop=a.clientHeight/4};return t.jsx(qe,{children:t.jsx(Ue,{children:t.jsx(Fe,{container:!0,ref:l,children:t.jsxs("div",{children:[t.jsx(k,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),t.jsx(W,{anchorEl:e,topContent:Ze,bottomContent:X,onClose:i,open:s})]})})})})},Je=m.input`
    background-color: ${c.newColors.grey1[100]};
    border: ${c.borders.simplyGrey};
    height: 47px;
    border-radius: 0;
`,Ke=t.jsxs("div",{children:[t.jsx(Je,{}),t.jsx(K,{children:"Title"}),t.jsx(Q,{children:"Subtitle"})]}),$=()=>{const[e,n]=d.useState(null),[s,o]=d.useState(!1),r=l=>{n(l.currentTarget),o(!0)},i=()=>{o(!1)};return t.jsxs("div",{children:[t.jsx(k,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),t.jsx(W,{anchorEl:e,topContent:Ke,bottomContent:X,onClose:i,open:s})]})},Qe=m.span`
    color: ${c.newColors.almostBlack[100]};
    cursor: pointer;
    font-size: 16px;
    font-weight: ${c.fontWeight.semiBold};
    text-decoration: underline;
`,Xe=m.span`
    color: ${c.newColors.grey3[100]};
    font-size: 12px;
    margin-left: 4px;
`,Ye=t.jsxs("div",{children:[t.jsx(Qe,{onClick:()=>alert("Title clicked"),children:"Clickable Title"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[t.jsx(J,{sx:{width:12,color:c.newColors.grey3[100]}}),t.jsx(Xe,{children:"Subtitle"})]})]}),et=[{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"}],tt=m.span`
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
`,st=()=>t.jsxs("div",{children:[et.map((e,n)=>t.jsxs("div",{style:{display:"flex",fontSize:14},children:[t.jsxs(tt,{children:[e.label,":"]}),t.jsx(nt,{children:e.value})]},`${e.label}-${n}`)),t.jsx(ot,{children:"mail@gmail.com"}),t.jsx(rt,{onClick:()=>alert("Link clicked"),children:"www.link.com"})]}),E=()=>{const[e,n]=d.useState(null),[s,o]=d.useState(!1),r=l=>{n(l.currentTarget),o(!0)},i=()=>{o(!1)};return t.jsxs("div",{children:[t.jsx(k,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),t.jsx(W,{anchorEl:e,topContent:Ye,bottomContent:t.jsx(st,{}),onClose:i,open:s})]})};var R,_,I;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(F=(U=E.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};const Pt=["Playground","Input","TextAndLinks"];export{$ as Input,S as Playground,E as TextAndLinks,Pt as __namedExportsOrder,Bt as default};
