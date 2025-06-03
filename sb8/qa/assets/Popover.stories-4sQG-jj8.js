import{r as I,j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as n,g as _}from"./index-D0AnReJb.js";import{s as a}from"./styled-components.browser.esm-njFAddlw.js";import{t}from"./sizes-HwDk6ODv.js";import{s as C}from"./styled-components.browser.esm-B06rF3P8.js";import{P as A,a as R}from"./Popper-DwGs7ij-.js";import{G as H,B as f}from"./Button-Bb1YkNRl.js";import{C as W}from"./ClickAwayListener-Dkkr5f_-.js";import{A as q}from"./Add-DyToAZcG.js";import{r as z}from"./styled-BWOE7yIf.js";import{r as G}from"./createSvgIcon-CFLdSkGK.js";import{G as D}from"./Grid-BbIy_5I8.js";const N=C(A)`
	&.MuiPaper-root {
		background-color: white;
		border: 1px solid ${t.newColors.grey2[100]};
		max-width: 620px;
		border-radius: 5px;
		box-shadow: 0px 2px 6px ${t.newColors.almostBlack[20]};
	}
`,F={zIndex:2e3,"&[data-popper-placement*='bottom']":{"& .MuiPopper-arrow":{top:0,left:0,marginTop:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:`transparent transparent ${t.colors.white} transparent`}}},"&[data-popper-placement*='top']":{"& .MuiPopper-arrow":{bottom:0,left:0,marginBottom:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"1em 1em 0 1em",borderColor:`${t.colors.white} transparent transparent transparent`}}}},J=C.div`
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
`,V=C.div`
	padding: 24px 32px;
`,K=C.hr`
	border-left: none;
	border-top: 1px solid ${t.newColors.grey2[100]};
	margin: 16px -32px;
`,b=r=>{const{anchorEl:l,className:i,topContent:o,bottomContent:s,open:c,onClose:p}=r,[d,v]=n.useState(null);return n.useEffect(()=>{if(!s&&!o)throw new Error("Popover component expected some content but none was provided.")},[s,o]),n.useEffect(()=>{if(c&&!l)throw new Error("Popover component requires an anchor element to position itself but none was provided.")},[l,c]),n.createElement(R,{className:i,sx:F,placement:"bottom",modifiers:[{name:"flip",enabled:!0,options:{altBoundary:!0,rootBoundary:"viewport",padding:8}},{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!1,rootBoundary:"viewport",padding:8}},{name:"arrow",enabled:!0,options:{element:d}}],open:c,anchorEl:l,transition:!0},({TransitionProps:M})=>n.createElement(H,{...M,timeout:350},n.createElement(A,{sx:{boxShadow:"none"}},n.createElement(W,{onClickAway:p},n.createElement(N,null,n.createElement(J,{ref:v,className:"MuiPopper-arrow"}),n.createElement(V,null,o&&n.createElement("div",null,o),s&&o&&n.createElement(K,{"data-testid":"bottom-content-split"}),s&&n.createElement("div",null,s)))))))};var u={},w;function Q(){if(w)return u;w=1;var r=z();Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var l=r(G()),i=I();return u.default=(0,l.default)((0,i.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place"),u}var U=Q();const X=_(U),Y={title:"Components/Popover"},Z=a.div`
    flex-grow: 1;
`,ee=a.div`
    height: 400px;
    overflow: auto;
`,te=a(D)`
    position: relative;
    background-color: ${t.newColors.grey1[100]};
    height: 150%;
    align-items: center;
    justify-content: center;
`,O=a.p`
    color: ${t.newColors.almostBlack[100]};
    font-weight: ${t.weight.medium};
    font-size: 16px;
    margin-bottom: 8px;
`,$=a.span`
    color: ${t.newColors.grey3[100]};
    font-size: 12px;
`,ne=e.jsxs("div",{children:[e.jsx(O,{children:"Title"}),e.jsx($,{children:"Subtitle"})]}),L=e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(f,{color:"teal",variant:"text",label:"Add",mIcon:q,onClick:()=>alert("Add button clicked")})}),m=()=>{const[r,l]=n.useState(null),[i,o]=n.useState(!1),s=d=>{l(d.currentTarget),o(!0)},c=()=>{o(!1)},p=d=>{if(!d)return;const v=d.parentElement;v.scrollTop=d.clientHeight/4};return e.jsx(Z,{children:e.jsx(ee,{children:e.jsx(te,{container:!0,ref:p,children:e.jsxs("div",{children:[e.jsx(f,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(b,{anchorEl:r,topContent:ne,bottomContent:L,onClose:c,open:i})]})})})})},oe=a.input`
    background-color: ${t.newColors.grey1[100]};
    border: ${t.borders.simplyGrey};
    height: 47px;
    border-radius: 0;
`,re=e.jsxs("div",{children:[e.jsx(oe,{}),e.jsx(O,{children:"Title"}),e.jsx($,{children:"Subtitle"})]}),h=()=>{const[r,l]=n.useState(null),[i,o]=n.useState(!1),s=p=>{l(p.currentTarget),o(!0)},c=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx(f,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(b,{anchorEl:r,topContent:re,bottomContent:L,onClose:c,open:i})]})},le=a.span`
    color: ${t.newColors.almostBlack[100]};
    cursor: pointer;
    font-size: 16px;
    font-weight: ${t.weight.medium};
    text-decoration: underline;
`,ae=a.span`
    color: ${t.newColors.grey3[100]};
    font-size: 12px;
    margin-left: 4px;
`,se=e.jsxs("div",{children:[e.jsx(le,{onClick:()=>alert("Title clicked"),children:"Clickable Title"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[e.jsx(X,{sx:{width:12,color:t.newColors.grey3[100]}}),e.jsx(ae,{children:"Subtitle"})]})]}),ie=[{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"}],ce=a.span`
    color: ${t.newColors.grey4[100]};
    margin-right: 8px;
`,pe=a.span`
    color: ${t.newColors.grey3[100]};
`,de=a.span`
    display: block;
    color: ${t.newColors.almostBlack[100]};
    font-weight: ${t.weight.medium};
    margin: 16px 0;
`,ue=a.span`
    color: ${t.newColors.realTeal[100]};
    cursor: pointer;
    font-weight: ${t.weight.medium};
`,me=()=>e.jsxs("div",{children:[ie.map((r,l)=>e.jsxs("div",{style:{display:"flex",fontSize:14},children:[e.jsxs(ce,{children:[r.label,":"]}),e.jsx(pe,{children:r.value})]},`${r.label}-${l}`)),e.jsx(de,{children:"mail@gmail.com"}),e.jsx(ue,{onClick:()=>alert("Link clicked"),children:"www.link.com"})]}),x=()=>{const[r,l]=n.useState(null),[i,o]=n.useState(!1),s=p=>{l(p.currentTarget),o(!0)},c=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx(f,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(b,{anchorEl:r,topContent:se,bottomContent:e.jsx(me,{}),onClose:c,open:i})]})};var g,E,y;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(y=(E=m.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var j,k,S;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(S=(k=h.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var P,T,B;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(B=(T=x.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const he=["Playground","Input","TextAndLinks"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Input:h,Playground:m,TextAndLinks:x,__namedExportsOrder:he,default:Y},Symbol.toStringTag,{value:"Module"}));export{m as P,Pe as s};
