import{j as r,r as ie}from"./jsx-runtime-nGUw9YhZ.js";import{r as m}from"./index-BP8_t0zE.js";import{s as f}from"./styled-components.browser.esm-8MQ3dTkk.js";import{s as $,t as c}from"./theme-D4oZEIDo.js";import{P as F,c as ae}from"./Popper-XtJavzF_.js";import{G as le,B as E}from"./Button-DtrbI49b.js";import{C as ce}from"./ClickAwayListener-DdjayeQ_.js";import{d as pe}from"./Add-CR2wy60N.js";import{T as ue,m as de,n as me,o as fe,g as he,a as xe,s as ge,u as ve,e as Ce,_ as be,b as we,r as T,p as O,d as ye,i as Se}from"./styled-BxbdA4OB.js";import{r as ke}from"./createSvgIcon-B0oOJ-Fw.js";import{_ as S}from"./extends-CF3RwP-h.js";function je(e){return Object.keys(e).length===0}function $e(e=null){const t=m.useContext(ue);return!t||je(t)?e:t}const Ee=de();function Te(e=Ee){return $e(e)}const Be=$(F)`
	&.MuiPaper-root {
		background-color: white;
		border: 1px solid ${c.newColors.grey2[100]};
		max-width: 620px;
		border-radius: 5px;
		box-shadow: 0px 2px 6px ${c.newColors.almostBlack[20]};
	}
`,Pe={zIndex:2e3,"&[data-popper-placement*='bottom']":{"& .MuiPopper-arrow":{top:0,left:0,marginTop:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:`transparent transparent ${c.colors.white} transparent`}}},"&[data-popper-placement*='top']":{"& .MuiPopper-arrow":{bottom:0,left:0,marginBottom:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"1em 1em 0 1em",borderColor:`${c.colors.white} transparent transparent transparent`}}}},Oe=$.div`
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
`,We=$.div`
	font-family: ${c.fontFamily};
	padding: 24px 32px;
`,Me=$.hr`
	border-left: none;
	border-top: 1px solid ${c.newColors.grey2[100]};
	margin: 16px -32px;
`,W=e=>{const{anchorEl:t,className:i,topContent:n,bottomContent:o,open:s,onClose:a}=e,[l,u]=m.useState(null);return m.useEffect(()=>{if(!o&&!n)throw new Error("Popover component expected some content but none was provided.")},[o,n]),m.useEffect(()=>{if(s&&!t)throw new Error("Popover component requires an anchor element to position itself but none was provided.")},[t,s]),r.jsx(ae,{className:i,sx:Pe,placement:"bottom",modifiers:[{name:"flip",enabled:!0,options:{altBoundary:!0,rootBoundary:"viewport",padding:8}},{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!1,rootBoundary:"viewport",padding:8}},{name:"arrow",enabled:!0,options:{element:l}}],open:s,anchorEl:t,transition:!0,children:({TransitionProps:d})=>r.jsx(le,{...d,timeout:350,children:r.jsx(F,{sx:{boxShadow:"none"},children:r.jsx(ce,{onClickAway:a,children:r.jsxs(Be,{children:[r.jsx(Oe,{ref:u,className:"MuiPopper-arrow"}),r.jsxs(We,{children:[n&&r.jsx("div",{children:n}),o&&n&&r.jsx(Me,{"data-testid":"bottom-content-split"}),o&&r.jsx("div",{children:o})]})]})})})})})};function ze(){const e=Te(fe);return e[me]||e}const L=m.createContext();function Ae(e){return he("MuiGrid",e)}const Ge=[0,1,2,3,4,5,6,7,8,9,10],_e=["column-reverse","column","row-reverse","row"],Le=["nowrap","wrap-reverse","wrap"],C=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],k=xe("MuiGrid",["root","container","item","zeroMinWidth",...Ge.map(e=>`spacing-xs-${e}`),..._e.map(e=>`direction-xs-${e}`),...Le.map(e=>`wrap-xs-${e}`),...C.map(e=>`grid-xs-${e}`),...C.map(e=>`grid-sm-${e}`),...C.map(e=>`grid-md-${e}`),...C.map(e=>`grid-lg-${e}`),...C.map(e=>`grid-xl-${e}`)]),Ne=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function v(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function Re({theme:e,ownerState:t}){let i;return e.breakpoints.keys.reduce((n,o)=>{let s={};if(t[o]&&(i=t[o]),!i)return n;if(i===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=T({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof a=="object"?a[o]:a;if(l==null)return n;const u=`${Math.round(i/l*1e8)/1e6}%`;let d={};if(t.container&&t.item&&t.columnSpacing!==0){const p=e.spacing(t.columnSpacing);if(p!=="0px"){const h=`calc(${u} + ${v(p)})`;d={flexBasis:h,maxWidth:h}}}s=S({flexBasis:u,flexGrow:0,maxWidth:u},d)}return e.breakpoints.values[o]===0?Object.assign(n,s):n[e.breakpoints.up(o)]=s,n},{})}function Ie({theme:e,ownerState:t}){const i=T({values:t.direction,breakpoints:e.breakpoints.values});return O({theme:e},i,n=>{const o={flexDirection:n};return n.indexOf("column")===0&&(o[`& > .${k.item}`]={maxWidth:"none"}),o})}function Z({breakpoints:e,values:t}){let i="";Object.keys(t).forEach(o=>{i===""&&t[o]!==0&&(i=o)});const n=Object.keys(e).sort((o,s)=>e[o]-e[s]);return n.slice(0,n.indexOf(i))}function Ve({theme:e,ownerState:t}){const{container:i,rowSpacing:n}=t;let o={};if(i&&n!==0){const s=T({values:n,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=Z({breakpoints:e.breakpoints.values,values:s})),o=O({theme:e},s,(l,u)=>{var d;const p=e.spacing(l);return p!=="0px"?{marginTop:`-${v(p)}`,[`& > .${k.item}`]:{paddingTop:v(p)}}:(d=a)!=null&&d.includes(u)?{}:{marginTop:0,[`& > .${k.item}`]:{paddingTop:0}}})}return o}function He({theme:e,ownerState:t}){const{container:i,columnSpacing:n}=t;let o={};if(i&&n!==0){const s=T({values:n,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=Z({breakpoints:e.breakpoints.values,values:s})),o=O({theme:e},s,(l,u)=>{var d;const p=e.spacing(l);return p!=="0px"?{width:`calc(100% + ${v(p)})`,marginLeft:`-${v(p)}`,[`& > .${k.item}`]:{paddingLeft:v(p)}}:(d=a)!=null&&d.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${k.item}`]:{paddingLeft:0}}})}return o}function De(e,t,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const n=[];return t.forEach(o=>{const s=e[o];Number(s)>0&&n.push(i[`spacing-${o}-${String(s)}`])}),n}const Ke=ge("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e,{container:n,direction:o,item:s,spacing:a,wrap:l,zeroMinWidth:u,breakpoints:d}=i;let p=[];n&&(p=De(a,d,t));const h=[];return d.forEach(x=>{const g=i[x];g&&h.push(t[`grid-${x}-${String(g)}`])}),[t.root,n&&t.container,s&&t.item,u&&t.zeroMinWidth,...p,o!=="row"&&t[`direction-xs-${String(o)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],...h]}})(({ownerState:e})=>S({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Ie,Ve,He,Re);function qe(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return t.forEach(n=>{const o=e[n];if(Number(o)>0){const s=`spacing-${n}-${String(o)}`;i.push(s)}}),i}const Ue=e=>{const{classes:t,container:i,direction:n,item:o,spacing:s,wrap:a,zeroMinWidth:l,breakpoints:u}=e;let d=[];i&&(d=qe(s,u));const p=[];u.forEach(x=>{const g=e[x];g&&p.push(`grid-${x}-${String(g)}`)});const h={root:["root",i&&"container",o&&"item",l&&"zeroMinWidth",...d,n!=="row"&&`direction-xs-${String(n)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...p]};return ye(h,Ae,t)},Fe=m.forwardRef(function(t,i){const n=ve({props:t,name:"MuiGrid"}),{breakpoints:o}=ze(),s=Ce(n),{className:a,columns:l,columnSpacing:u,component:d="div",container:p=!1,direction:h="row",item:x=!1,rowSpacing:g,spacing:B=0,wrap:ee="wrap",zeroMinWidth:te=!1}=s,P=be(s,Ne),ne=g||B,oe=u||B,re=m.useContext(L),z=p?l||12:re,A={},G=S({},P);o.keys.forEach(j=>{P[j]!=null&&(A[j]=P[j],delete G[j])});const _=S({},s,{columns:z,container:p,direction:h,item:x,rowSpacing:ne,columnSpacing:oe,wrap:ee,zeroMinWidth:te,spacing:B},A,{breakpoints:o.keys}),se=Ue(_);return r.jsx(L.Provider,{value:z,children:r.jsx(Ke,S({ownerState:_,className:we(se.root,a),as:d,ref:i},G))})});var M={},Ze=Se;Object.defineProperty(M,"__esModule",{value:!0});var J=M.default=void 0,Je=Ze(ke()),Qe=ie();J=M.default=(0,Je.default)((0,Qe.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place");const Xe={title:"Components/Popover"},Ye=f.div`
    flex-grow: 1;
`,et=f.div`
    height: 400px;
    overflow: auto;
`,tt=f(Fe)`
    position: relative;
    background-color: ${c.newColors.grey1[100]};
    height: 150%;
    align-items: center;
    justify-content: center;
`,Q=f.p`
    color: ${c.newColors.almostBlack[100]};
    font-weight: ${c.fontWeight.semiBold};
    font-size: 16px;
    margin-bottom: 8px;
`,X=f.span`
    color: ${c.newColors.grey3[100]};
    font-size: 12px;
`,nt=r.jsxs("div",{children:[r.jsx(Q,{children:"Title"}),r.jsx(X,{children:"Subtitle"})]}),Y=r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(E,{color:"teal",variant:"text",label:"Add",mIcon:pe,onClick:()=>alert("Add button clicked")})}),b=()=>{const[e,t]=m.useState(null),[i,n]=m.useState(!1),o=l=>{t(l.currentTarget),n(!0)},s=()=>{n(!1)},a=l=>{if(!l)return;const u=l.parentElement;u.scrollTop=l.clientHeight/4};return r.jsx(Ye,{children:r.jsx(et,{children:r.jsx(tt,{container:!0,ref:a,children:r.jsxs("div",{children:[r.jsx(E,{color:"yellow",variant:"contained",label:"Open Popover",onClick:o}),r.jsx(W,{anchorEl:e,topContent:nt,bottomContent:Y,onClose:s,open:i})]})})})})},ot=f.input`
    background-color: ${c.newColors.grey1[100]};
    border: ${c.borders.simplyGrey};
    height: 47px;
    border-radius: 0;
`,rt=r.jsxs("div",{children:[r.jsx(ot,{}),r.jsx(Q,{children:"Title"}),r.jsx(X,{children:"Subtitle"})]}),w=()=>{const[e,t]=m.useState(null),[i,n]=m.useState(!1),o=a=>{t(a.currentTarget),n(!0)},s=()=>{n(!1)};return r.jsxs("div",{children:[r.jsx(E,{color:"yellow",variant:"contained",label:"Open Popover",onClick:o}),r.jsx(W,{anchorEl:e,topContent:rt,bottomContent:Y,onClose:s,open:i})]})},st=f.span`
    color: ${c.newColors.almostBlack[100]};
    cursor: pointer;
    font-size: 16px;
    font-weight: ${c.fontWeight.semiBold};
    text-decoration: underline;
`,it=f.span`
    color: ${c.newColors.grey3[100]};
    font-size: 12px;
    margin-left: 4px;
`,at=r.jsxs("div",{children:[r.jsx(st,{onClick:()=>alert("Title clicked"),children:"Clickable Title"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[r.jsx(J,{sx:{width:12,color:c.newColors.grey3[100]}}),r.jsx(it,{children:"Subtitle"})]})]}),lt=[{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"}],ct=f.span`
    color: ${c.newColors.grey4[100]};
    margin-right: 8px;
`,pt=f.span`
    color: ${c.newColors.grey3[100]};
`,ut=f.span`
    display: block;
    color: ${c.newColors.almostBlack[100]};
    font-weight: ${c.fontWeight.semiBold};
    font-size: 14px;
    margin: 16px 0;
`,dt=f.span`
    color: ${c.newColors.realTeal[100]};
    cursor: pointer;
    font-weight: ${c.fontWeight.semiBold};
    font-size: 14px;
`,mt=()=>r.jsxs("div",{children:[lt.map((e,t)=>r.jsxs("div",{style:{display:"flex",fontSize:14},children:[r.jsxs(ct,{children:[e.label,":"]}),r.jsx(pt,{children:e.value})]},`${e.label}-${t}`)),r.jsx(ut,{children:"mail@gmail.com"}),r.jsx(dt,{onClick:()=>alert("Link clicked"),children:"www.link.com"})]}),y=()=>{const[e,t]=m.useState(null),[i,n]=m.useState(!1),o=a=>{t(a.currentTarget),n(!0)},s=()=>{n(!1)};return r.jsxs("div",{children:[r.jsx(E,{color:"yellow",variant:"contained",label:"Open Popover",onClick:o}),r.jsx(W,{anchorEl:e,topContent:at,bottomContent:r.jsx(mt,{}),onClose:s,open:i})]})};var N,R,I;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(I=(R=b.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var V,H,D;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(D=(H=w.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var K,q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(U=(q=y.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};const ft=["Playground","Input","TextAndLinks"],$t=Object.freeze(Object.defineProperty({__proto__:null,Input:w,Playground:b,TextAndLinks:y,__namedExportsOrder:ft,default:Xe},Symbol.toStringTag,{value:"Module"}));export{b as P,$t as s};
