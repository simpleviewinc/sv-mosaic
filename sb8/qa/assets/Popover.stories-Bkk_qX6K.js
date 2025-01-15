import{j as e,r as _}from"./jsx-runtime-nGUw9YhZ.js";import{r as i}from"./index-BP8_t0zE.js";import{s as o}from"./styled-components.browser.esm-8MQ3dTkk.js";import{s as x,t}from"./theme-DRtZtbPc.js";import{P,a as W}from"./Popper-BWFpCfKc.js";import{G as z,B as f}from"./Button-DuMlbF8s.js";import{C as I}from"./ClickAwayListener-DnjBLK-5.js";import{d as R}from"./Add-DakDrsh-.js";import{i as H}from"./styled-hJgfyZIG.js";import{r as G}from"./createSvgIcon-DE5yaevU.js";import{G as q}from"./Grid-Ce_RILgk.js";const D=x(P)`
	&.MuiPaper-root {
		background-color: white;
		border: 1px solid ${t.newColors.grey2[100]};
		max-width: 620px;
		border-radius: 5px;
		box-shadow: 0px 2px 6px ${t.newColors.almostBlack[20]};
	}
`,N={zIndex:2e3,"&[data-popper-placement*='bottom']":{"& .MuiPopper-arrow":{top:0,left:0,marginTop:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:`transparent transparent ${t.colors.white} transparent`}}},"&[data-popper-placement*='top']":{"& .MuiPopper-arrow":{bottom:0,left:0,marginBottom:"-0.9em",width:"3em",height:"1em","&::before":{borderWidth:"1em 1em 0 1em",borderColor:`${t.colors.white} transparent transparent transparent`}}}},F=x.div`
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
`,J=x.div`
	font-family: ${t.fontFamily};
	padding: 24px 32px;
`,V=x.hr`
	border-left: none;
	border-top: 1px solid ${t.newColors.grey2[100]};
	margin: 16px -32px;
`,v=r=>{const{anchorEl:l,className:c,topContent:n,bottomContent:s,open:a,onClose:p}=r,[d,C]=i.useState(null);return i.useEffect(()=>{if(!s&&!n)throw new Error("Popover component expected some content but none was provided.")},[s,n]),i.useEffect(()=>{if(a&&!l)throw new Error("Popover component requires an anchor element to position itself but none was provided.")},[l,a]),e.jsx(W,{className:c,sx:N,placement:"bottom",modifiers:[{name:"flip",enabled:!0,options:{altBoundary:!0,rootBoundary:"viewport",padding:8}},{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!1,rootBoundary:"viewport",padding:8}},{name:"arrow",enabled:!0,options:{element:d}}],open:a,anchorEl:l,transition:!0,children:({TransitionProps:M})=>e.jsx(z,{...M,timeout:350,children:e.jsx(P,{sx:{boxShadow:"none"},children:e.jsx(I,{onClickAway:p,children:e.jsxs(D,{children:[e.jsx(F,{ref:C,className:"MuiPopper-arrow"}),e.jsxs(J,{children:[n&&e.jsx("div",{children:n}),s&&n&&e.jsx(V,{"data-testid":"bottom-content-split"}),s&&e.jsx("div",{children:s})]})]})})})})})};var b={},K=H;Object.defineProperty(b,"__esModule",{value:!0});var $=b.default=void 0,Q=K(G()),U=_();$=b.default=(0,Q.default)((0,U.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place");const X={title:"Components/Popover"},Y=o.div`
    flex-grow: 1;
`,Z=o.div`
    height: 400px;
    overflow: auto;
`,ee=o(q)`
    position: relative;
    background-color: ${t.newColors.grey1[100]};
    height: 150%;
    align-items: center;
    justify-content: center;
`,O=o.p`
    color: ${t.newColors.almostBlack[100]};
    font-weight: ${t.fontWeight.semiBold};
    font-size: 16px;
    margin-bottom: 8px;
`,A=o.span`
    color: ${t.newColors.grey3[100]};
    font-size: 12px;
`,te=e.jsxs("div",{children:[e.jsx(O,{children:"Title"}),e.jsx(A,{children:"Subtitle"})]}),L=e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(f,{color:"teal",variant:"text",label:"Add",mIcon:R,onClick:()=>alert("Add button clicked")})}),u=()=>{const[r,l]=i.useState(null),[c,n]=i.useState(!1),s=d=>{l(d.currentTarget),n(!0)},a=()=>{n(!1)},p=d=>{if(!d)return;const C=d.parentElement;C.scrollTop=d.clientHeight/4};return e.jsx(Y,{children:e.jsx(Z,{children:e.jsx(ee,{container:!0,ref:p,children:e.jsxs("div",{children:[e.jsx(f,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(v,{anchorEl:r,topContent:te,bottomContent:L,onClose:a,open:c})]})})})})},ne=o.input`
    background-color: ${t.newColors.grey1[100]};
    border: ${t.borders.simplyGrey};
    height: 47px;
    border-radius: 0;
`,oe=e.jsxs("div",{children:[e.jsx(ne,{}),e.jsx(O,{children:"Title"}),e.jsx(A,{children:"Subtitle"})]}),m=()=>{const[r,l]=i.useState(null),[c,n]=i.useState(!1),s=p=>{l(p.currentTarget),n(!0)},a=()=>{n(!1)};return e.jsxs("div",{children:[e.jsx(f,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(v,{anchorEl:r,topContent:oe,bottomContent:L,onClose:a,open:c})]})},re=o.span`
    color: ${t.newColors.almostBlack[100]};
    cursor: pointer;
    font-size: 16px;
    font-weight: ${t.fontWeight.semiBold};
    text-decoration: underline;
`,le=o.span`
    color: ${t.newColors.grey3[100]};
    font-size: 12px;
    margin-left: 4px;
`,se=e.jsxs("div",{children:[e.jsx(re,{onClick:()=>alert("Title clicked"),children:"Clickable Title"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[e.jsx($,{sx:{width:12,color:t.newColors.grey3[100]}}),e.jsx(le,{children:"Subtitle"})]})]}),ae=[{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"}],ie=o.span`
    color: ${t.newColors.grey4[100]};
    margin-right: 8px;
`,ce=o.span`
    color: ${t.newColors.grey3[100]};
`,pe=o.span`
    display: block;
    color: ${t.newColors.almostBlack[100]};
    font-weight: ${t.fontWeight.semiBold};
    font-size: 14px;
    margin: 16px 0;
`,de=o.span`
    color: ${t.newColors.realTeal[100]};
    cursor: pointer;
    font-weight: ${t.fontWeight.semiBold};
    font-size: 14px;
`,ue=()=>e.jsxs("div",{children:[ae.map((r,l)=>e.jsxs("div",{style:{display:"flex",fontSize:14},children:[e.jsxs(ie,{children:[r.label,":"]}),e.jsx(ce,{children:r.value})]},`${r.label}-${l}`)),e.jsx(pe,{children:"mail@gmail.com"}),e.jsx(de,{onClick:()=>alert("Link clicked"),children:"www.link.com"})]}),h=()=>{const[r,l]=i.useState(null),[c,n]=i.useState(!1),s=p=>{l(p.currentTarget),n(!0)},a=()=>{n(!1)};return e.jsxs("div",{children:[e.jsx(f,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(v,{anchorEl:r,topContent:se,bottomContent:e.jsx(ue,{}),onClose:a,open:c})]})};var g,w,j;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(j=(w=u.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var E,y,k;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(k=(y=m.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,B,T;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(T=(B=h.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const me=["Playground","Input","TextAndLinks"],ke=Object.freeze(Object.defineProperty({__proto__:null,Input:m,Playground:u,TextAndLinks:h,__namedExportsOrder:me,default:X},Symbol.toStringTag,{value:"Module"}));export{u as P,ke as s};
