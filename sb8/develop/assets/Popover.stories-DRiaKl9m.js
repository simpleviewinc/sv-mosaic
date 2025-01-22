import{j as e,r as I}from"./jsx-runtime-DKBipoO1.js";import{r as c,g as W}from"./index-P8U4y8pz.js";import{s as l}from"./styled-components.browser.esm-D5YpO4mE.js";import{s as f,t}from"./theme-BWODkkBA.js";import{P as $,a as _}from"./Popper-Cd5SEDCW.js";import{G as R,B as C}from"./Button-BBMCWwxG.js";import{C as z}from"./ClickAwayListener-6W73t1nN.js";import{A as H}from"./Add-lnUrTMVS.js";import{r as q}from"./styled-D3QUOaTt.js";import{r as G}from"./createSvgIcon-C4HEQ44R.js";import{G as D}from"./Grid-RTt9p_x_.js";const F=f($)`
	&.MuiPaper-root {
		background-color: white;
		border: 1px solid ${t.newColors.grey2[100]};
		max-width: 620px;
		border-radius: 5px;
		box-shadow: 0px 2px 6px ${t.newColors.almostBlack[20]};
	}
`,N={zIndex:2e3,"&[data-popper-placement*='bottom']":{"& .MuiPopper-arrow":{top:0,left:0,marginTop:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:`transparent transparent ${t.colors.white} transparent`}}},"&[data-popper-placement*='top']":{"& .MuiPopper-arrow":{bottom:0,left:0,marginBottom:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"1em 1em 0 1em",borderColor:`${t.colors.white} transparent transparent transparent`}}}},J=f.div`
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
`,V=f.div`
	font-family: ${t.fontFamily};
	padding: 24px 32px;
`,K=f.hr`
	border-left: none;
	border-top: 1px solid ${t.newColors.grey2[100]};
	margin: 16px -32px;
`,b=o=>{const{anchorEl:r,className:a,topContent:n,bottomContent:s,open:i,onClose:p}=o,[d,v]=c.useState(null);return c.useEffect(()=>{if(!s&&!n)throw new Error("Popover component expected some content but none was provided.")},[s,n]),c.useEffect(()=>{if(i&&!r)throw new Error("Popover component requires an anchor element to position itself but none was provided.")},[r,i]),e.jsx(_,{className:a,sx:N,placement:"bottom",modifiers:[{name:"flip",enabled:!0,options:{altBoundary:!0,rootBoundary:"viewport",padding:8}},{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!1,rootBoundary:"viewport",padding:8}},{name:"arrow",enabled:!0,options:{element:d}}],open:i,anchorEl:r,transition:!0,children:({TransitionProps:M})=>e.jsx(R,{...M,timeout:350,children:e.jsx($,{sx:{boxShadow:"none"},children:e.jsx(z,{onClickAway:p,children:e.jsxs(F,{children:[e.jsx(J,{ref:v,className:"MuiPopper-arrow"}),e.jsxs(V,{children:[n&&e.jsx("div",{children:n}),s&&n&&e.jsx(K,{"data-testid":"bottom-content-split"}),s&&e.jsx("div",{children:s})]})]})})})})})};var u={},g;function Q(){if(g)return u;g=1;var o=q();Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var r=o(G()),a=I();return u.default=(0,r.default)((0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place"),u}var U=Q();const X=W(U),Y={title:"Components/Popover"},Z=l.div`
    flex-grow: 1;
`,ee=l.div`
    height: 400px;
    overflow: auto;
`,te=l(D)`
    position: relative;
    background-color: ${t.newColors.grey1[100]};
    height: 150%;
    align-items: center;
    justify-content: center;
`,A=l.p`
    color: ${t.newColors.almostBlack[100]};
    font-weight: ${t.fontWeight.semiBold};
    font-size: 16px;
    margin-bottom: 8px;
`,O=l.span`
    color: ${t.newColors.grey3[100]};
    font-size: 12px;
`,ne=e.jsxs("div",{children:[e.jsx(A,{children:"Title"}),e.jsx(O,{children:"Subtitle"})]}),L=e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(C,{color:"teal",variant:"text",label:"Add",mIcon:H,onClick:()=>alert("Add button clicked")})}),m=()=>{const[o,r]=c.useState(null),[a,n]=c.useState(!1),s=d=>{r(d.currentTarget),n(!0)},i=()=>{n(!1)},p=d=>{if(!d)return;const v=d.parentElement;v.scrollTop=d.clientHeight/4};return e.jsx(Z,{children:e.jsx(ee,{children:e.jsx(te,{container:!0,ref:p,children:e.jsxs("div",{children:[e.jsx(C,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(b,{anchorEl:o,topContent:ne,bottomContent:L,onClose:i,open:a})]})})})})},oe=l.input`
    background-color: ${t.newColors.grey1[100]};
    border: ${t.borders.simplyGrey};
    height: 47px;
    border-radius: 0;
`,re=e.jsxs("div",{children:[e.jsx(oe,{}),e.jsx(A,{children:"Title"}),e.jsx(O,{children:"Subtitle"})]}),h=()=>{const[o,r]=c.useState(null),[a,n]=c.useState(!1),s=p=>{r(p.currentTarget),n(!0)},i=()=>{n(!1)};return e.jsxs("div",{children:[e.jsx(C,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(b,{anchorEl:o,topContent:re,bottomContent:L,onClose:i,open:a})]})},le=l.span`
    color: ${t.newColors.almostBlack[100]};
    cursor: pointer;
    font-size: 16px;
    font-weight: ${t.fontWeight.semiBold};
    text-decoration: underline;
`,se=l.span`
    color: ${t.newColors.grey3[100]};
    font-size: 12px;
    margin-left: 4px;
`,ae=e.jsxs("div",{children:[e.jsx(le,{onClick:()=>alert("Title clicked"),children:"Clickable Title"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[e.jsx(X,{sx:{width:12,color:t.newColors.grey3[100]}}),e.jsx(se,{children:"Subtitle"})]})]}),ie=[{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"}],ce=l.span`
    color: ${t.newColors.grey4[100]};
    margin-right: 8px;
`,pe=l.span`
    color: ${t.newColors.grey3[100]};
`,de=l.span`
    display: block;
    color: ${t.newColors.almostBlack[100]};
    font-weight: ${t.fontWeight.semiBold};
    font-size: 14px;
    margin: 16px 0;
`,ue=l.span`
    color: ${t.newColors.realTeal[100]};
    cursor: pointer;
    font-weight: ${t.fontWeight.semiBold};
    font-size: 14px;
`,me=()=>e.jsxs("div",{children:[ie.map((o,r)=>e.jsxs("div",{style:{display:"flex",fontSize:14},children:[e.jsxs(ce,{children:[o.label,":"]}),e.jsx(pe,{children:o.value})]},`${o.label}-${r}`)),e.jsx(de,{children:"mail@gmail.com"}),e.jsx(ue,{onClick:()=>alert("Link clicked"),children:"www.link.com"})]}),x=()=>{const[o,r]=c.useState(null),[a,n]=c.useState(!1),s=p=>{r(p.currentTarget),n(!0)},i=()=>{n(!1)};return e.jsxs("div",{children:[e.jsx(C,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(b,{anchorEl:o,topContent:ae,bottomContent:e.jsx(me,{}),onClose:i,open:a})]})};var w,j,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(E=(j=m.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var y,k,S;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(S=(k=h.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var P,B,T;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(T=(B=x.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const he=["Playground","Input","TextAndLinks"],Se=Object.freeze(Object.defineProperty({__proto__:null,Input:h,Playground:m,TextAndLinks:x,__namedExportsOrder:he,default:Y},Symbol.toStringTag,{value:"Module"}));export{m as P,Se as s};
