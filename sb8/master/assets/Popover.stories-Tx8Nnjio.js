import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{s as m}from"./styled-components.browser.esm-8MQ3dTkk.js";import{s as y,t as c}from"./theme-CtvfJOCv.js";import{P as Z,a as se}from"./Popper-CwZOyH_P.js";import{G as ie,B as E}from"./Button-BBNnoZZP.js";import{C as ae}from"./ClickAwayListener-DFiznkjI.js";import{d as le}from"./Add-ktkGHE_h.js";import{r as ce,i as pe}from"./createSvgIcon-DQitHYV2.js";import{m as ue,n as de,g as me,a as fe,s as he,u as xe,_ as ge,b as ve,r as k,o as T,e as Ce}from"./styled-BlYH_7wi.js";import{_ as $}from"./extends-CF3RwP-h.js";import{e as we}from"./extendSxProp-CzvbGhib.js";const be=y(Z)`
	&.MuiPaper-root {
		background-color: white;
		border: 1px solid ${c.newColors.grey2[100]};
		max-width: 620px;
		border-radius: 5px;
		box-shadow: 0px 2px 6px ${c.newColors.almostBlack[20]};
	}
`,Se={zIndex:2e3,"&[data-popper-placement*='bottom']":{"& .MuiPopper-arrow":{top:0,left:0,marginTop:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:`transparent transparent ${c.colors.white} transparent`}}},"&[data-popper-placement*='top']":{"& .MuiPopper-arrow":{bottom:0,left:0,marginBottom:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"1em 1em 0 1em",borderColor:`${c.colors.white} transparent transparent transparent`}}}},$e=y.div`
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
`,je=y.div`
	font-family: ${c.fontFamily};
	padding: 24px 32px;
`,ye=y.hr`
	border-left: none;
	border-top: 1px solid ${c.newColors.grey2[100]};
	margin: 16px -32px;
`,W=e=>{const{anchorEl:n,className:s,topContent:o,bottomContent:r,open:i,onClose:l}=e,[a,p]=d.useState(null);return d.useEffect(()=>{if(!r&&!o)throw new Error("Popover component expected some content but none was provided.")},[r,o]),d.useEffect(()=>{if(i&&!n)throw new Error("Popover component requires an anchor element to position itself but none was provided.")},[n,i]),t.jsx(se,{className:s,sx:Se,placement:"bottom",modifiers:[{name:"flip",enabled:!0,options:{altBoundary:!0,rootBoundary:"viewport",padding:8}},{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!1,rootBoundary:"viewport",padding:8}},{name:"arrow",enabled:!0,options:{element:a}}],open:i,anchorEl:n,transition:!0,children:({TransitionProps:u})=>t.jsx(ie,{...u,timeout:350,children:t.jsx(Z,{sx:{boxShadow:"none"},children:t.jsx(ae,{onClickAway:l,children:t.jsxs(be,{children:[t.jsx($e,{ref:p,className:"MuiPopper-arrow"}),t.jsxs(je,{children:[o&&t.jsx("div",{children:o}),r&&o&&t.jsx(ye,{"data-testid":"bottom-content-split"}),r&&t.jsx("div",{children:r})]})]})})})})})};function Ee(){return ue(de)}const L=d.createContext();function ke(e){return me("MuiGrid",e)}const Pe=[0,1,2,3,4,5,6,7,8,9,10],Be=["column-reverse","column","row-reverse","row"],Te=["nowrap","wrap-reverse","wrap"],C=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],M=fe("MuiGrid",["root","container","item","zeroMinWidth",...Pe.map(e=>`spacing-xs-${e}`),...Be.map(e=>`direction-xs-${e}`),...Te.map(e=>`wrap-xs-${e}`),...C.map(e=>`grid-xs-${e}`),...C.map(e=>`grid-sm-${e}`),...C.map(e=>`grid-md-${e}`),...C.map(e=>`grid-lg-${e}`),...C.map(e=>`grid-xl-${e}`)]),We=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function v(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function Me({theme:e,ownerState:n}){let s;return e.breakpoints.keys.reduce((o,r)=>{let i={};if(n[r]&&(s=n[r]),!s)return o;if(s===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=k({values:n.columns,breakpoints:e.breakpoints.values}),a=typeof l=="object"?l[r]:l;if(a==null)return o;const p=`${Math.round(s/a*1e8)/1e6}%`;let u={};if(n.container&&n.item&&n.columnSpacing!==0){const f=e.spacing(n.columnSpacing);if(f!=="0px"){const h=`calc(${p} + ${v(f)})`;u={flexBasis:h,maxWidth:h}}}i=$({flexBasis:p,flexGrow:0,maxWidth:p},u)}return e.breakpoints.values[r]===0?Object.assign(o,i):o[e.breakpoints.up(r)]=i,o},{})}function Oe({theme:e,ownerState:n}){const s=k({values:n.direction,breakpoints:e.breakpoints.values});return T({theme:e},s,o=>{const r={flexDirection:o};return o.indexOf("column")===0&&(r[`& > .${M.item}`]={maxWidth:"none"}),r})}function Ae({theme:e,ownerState:n}){const{container:s,rowSpacing:o}=n;let r={};if(s&&o!==0){const i=k({values:o,breakpoints:e.breakpoints.values});r=T({theme:e},i,l=>{const a=e.spacing(l);return a!=="0px"?{marginTop:`-${v(a)}`,[`& > .${M.item}`]:{paddingTop:v(a)}}:{}})}return r}function Ge({theme:e,ownerState:n}){const{container:s,columnSpacing:o}=n;let r={};if(s&&o!==0){const i=k({values:o,breakpoints:e.breakpoints.values});r=T({theme:e},i,l=>{const a=e.spacing(l);return a!=="0px"?{width:`calc(100% + ${v(a)})`,marginLeft:`-${v(a)}`,[`& > .${M.item}`]:{paddingLeft:v(a)}}:{}})}return r}function ze(e,n,s={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[s[`spacing-xs-${String(e)}`]];const o=[];return n.forEach(r=>{const i=e[r];Number(i)>0&&o.push(s[`spacing-${r}-${String(i)}`])}),o}const _e=he("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e,{container:o,direction:r,item:i,spacing:l,wrap:a,zeroMinWidth:p,breakpoints:u}=s;let f=[];o&&(f=ze(l,u,n));const h=[];return u.forEach(x=>{const g=s[x];g&&h.push(n[`grid-${x}-${String(g)}`])}),[n.root,o&&n.container,i&&n.item,p&&n.zeroMinWidth,...f,r!=="row"&&n[`direction-xs-${String(r)}`],a!=="wrap"&&n[`wrap-xs-${String(a)}`],...h]}})(({ownerState:e})=>$({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Oe,Ae,Ge,Me);function Le(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const s=[];return n.forEach(o=>{const r=e[o];if(Number(r)>0){const i=`spacing-${o}-${String(r)}`;s.push(i)}}),s}const Ne=e=>{const{classes:n,container:s,direction:o,item:r,spacing:i,wrap:l,zeroMinWidth:a,breakpoints:p}=e;let u=[];s&&(u=Le(i,p));const f=[];p.forEach(x=>{const g=e[x];g&&f.push(`grid-${x}-${String(g)}`)});const h={root:["root",s&&"container",r&&"item",a&&"zeroMinWidth",...u,o!=="row"&&`direction-xs-${String(o)}`,l!=="wrap"&&`wrap-xs-${String(l)}`,...f]};return Ce(h,ke,n)},Re=d.forwardRef(function(n,s){const o=xe({props:n,name:"MuiGrid"}),{breakpoints:r}=Ee(),i=we(o),{className:l,columns:a,columnSpacing:p,component:u="div",container:f=!1,direction:h="row",item:x=!1,rowSpacing:g,spacing:P=0,wrap:Y="wrap",zeroMinWidth:ee=!1}=i,B=ge(i,We),te=g||P,ne=p||P,oe=d.useContext(L),A=f?a||12:oe,G={},z=$({},B);r.keys.forEach(j=>{B[j]!=null&&(G[j]=B[j],delete z[j])});const _=$({},i,{columns:A,container:f,direction:h,item:x,rowSpacing:te,columnSpacing:ne,wrap:Y,zeroMinWidth:ee,spacing:P},G,{breakpoints:r.keys}),re=Ne(_);return t.jsx(L.Provider,{value:A,children:t.jsx(_e,$({ownerState:_,className:ve(re.root,l),as:u,ref:s},z))})});var O={},Ie=pe;Object.defineProperty(O,"__esModule",{value:!0});var J=O.default=void 0,He=Ie(ce()),Ve=t,De=(0,He.default)((0,Ve.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Place");J=O.default=De;const qe={title:"Components/Popover"},Ue=m.div`
    flex-grow: 1;
`,Fe=m.div`
    height: 400px;
    overflow: auto;
`,Ze=m(Re)`
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
`,Je=t.jsxs("div",{children:[t.jsx(K,{children:"Title"}),t.jsx(Q,{children:"Subtitle"})]}),X=t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(E,{color:"teal",variant:"text",label:"Add",mIcon:le,onClick:()=>alert("Add button clicked")})}),w=()=>{const[e,n]=d.useState(null),[s,o]=d.useState(!1),r=a=>{n(a.currentTarget),o(!0)},i=()=>{o(!1)},l=a=>{if(!a)return;const p=a.parentElement;p.scrollTop=a.clientHeight/4};return t.jsx(Ue,{children:t.jsx(Fe,{children:t.jsx(Ze,{container:!0,ref:l,children:t.jsxs("div",{children:[t.jsx(E,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),t.jsx(W,{anchorEl:e,topContent:Je,bottomContent:X,onClose:i,open:s})]})})})})},Ke=m.input`
    background-color: ${c.newColors.grey1[100]};
    border: ${c.borders.simplyGrey};
    height: 47px;
    border-radius: 0;
`,Qe=t.jsxs("div",{children:[t.jsx(Ke,{}),t.jsx(K,{children:"Title"}),t.jsx(Q,{children:"Subtitle"})]}),b=()=>{const[e,n]=d.useState(null),[s,o]=d.useState(!1),r=l=>{n(l.currentTarget),o(!0)},i=()=>{o(!1)};return t.jsxs("div",{children:[t.jsx(E,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),t.jsx(W,{anchorEl:e,topContent:Qe,bottomContent:X,onClose:i,open:s})]})},Xe=m.span`
    color: ${c.newColors.almostBlack[100]};
    cursor: pointer;
    font-size: 16px;
    font-weight: ${c.fontWeight.semiBold};
    text-decoration: underline;
`,Ye=m.span`
    color: ${c.newColors.grey3[100]};
    font-size: 12px;
    margin-left: 4px;
`,et=t.jsxs("div",{children:[t.jsx(Xe,{onClick:()=>alert("Title clicked"),children:"Clickable Title"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[t.jsx(J,{sx:{width:12,color:c.newColors.grey3[100]}}),t.jsx(Ye,{children:"Subtitle"})]})]}),tt=[{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"}],nt=m.span`
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
`,it=()=>t.jsxs("div",{children:[tt.map((e,n)=>t.jsxs("div",{style:{display:"flex",fontSize:14},children:[t.jsxs(nt,{children:[e.label,":"]}),t.jsx(ot,{children:e.value})]},`${e.label}-${n}`)),t.jsx(rt,{children:"mail@gmail.com"}),t.jsx(st,{onClick:()=>alert("Link clicked"),children:"www.link.com"})]}),S=()=>{const[e,n]=d.useState(null),[s,o]=d.useState(!1),r=l=>{n(l.currentTarget),o(!0)},i=()=>{o(!1)};return t.jsxs("div",{children:[t.jsx(E,{color:"yellow",variant:"contained",label:"Open Popover",onClick:r}),t.jsx(W,{anchorEl:e,topContent:et,bottomContent:t.jsx(it,{}),onClose:i,open:s})]})};var N,R,I;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(I=(R=w.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var H,V,D;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(D=(V=b.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,U,F;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(F=(U=S.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};const at=["Playground","Input","TextAndLinks"],wt=Object.freeze(Object.defineProperty({__proto__:null,Input:b,Playground:w,TextAndLinks:S,__namedExportsOrder:at,default:qe},Symbol.toStringTag,{value:"Module"}));export{w as P,wt as s};
