import{j as e,r as $}from"./jsx-runtime-DiwAibxM.js";import{r as i,g as M}from"./index-Btj5Fd67.js";import{s as l}from"./styled-components.browser.esm-DIT4wwZk.js";import{t}from"./theme-D38K4W-Z.js";import{P as I,S as _,A as R,C as W,a as H}from"./Popover.styled-DIA1xMK6.js";import{a as q,P as z}from"./Popper-BV6MzckQ.js";import{G,B as C}from"./Button-BzJSDP1S.js";import{C as D}from"./ClickAwayListener-DoPvkzLf.js";import{A as N}from"./Add-DNdhMQMf.js";import{r as F}from"./styled-B22bUKEf.js";import{r as J}from"./createSvgIcon-X8Rx5IVC.js";import{G as V}from"./Grid-BnW5Iqdi.js";const v=o=>{const{anchorEl:r,className:a,topContent:n,bottomContent:s,open:c,onClose:p}=o,[d,f]=i.useState(null);return i.useEffect(()=>{if(!s&&!n)throw new Error("Popover component expected some content but none was provided.")},[s,n]),i.useEffect(()=>{if(c&&!r)throw new Error("Popover component requires an anchor element to position itself but none was provided.")},[r,c]),e.jsx(q,{className:a,sx:I,placement:"bottom",modifiers:[{name:"flip",enabled:!0,options:{altBoundary:!0,rootBoundary:"viewport",padding:8}},{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!1,rootBoundary:"viewport",padding:8}},{name:"arrow",enabled:!0,options:{element:d}}],open:c,anchorEl:r,transition:!0,children:({TransitionProps:L})=>e.jsx(G,{...L,timeout:350,children:e.jsx(z,{sx:{boxShadow:"none"},children:e.jsx(D,{onClickAway:p,children:e.jsxs(_,{children:[e.jsx(R,{ref:f,className:"MuiPopper-arrow"}),e.jsxs(W,{children:[n&&e.jsx("div",{children:n}),s&&n&&e.jsx(H,{"data-testid":"bottom-content-split"}),s&&e.jsx("div",{children:s})]})]})})})})})};var u={},j;function K(){if(j)return u;j=1;var o=F();Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var r=o(J()),a=$();return u.default=(0,r.default)((0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place"),u}var Q=K();const U=M(Q),X={title:"Components/Popover"},Y=l.div`
    flex-grow: 1;
`,Z=l.div`
    height: 400px;
    overflow: auto;
`,ee=l(V)`
    position: relative;
    background-color: ${t.newColors.grey1[100]};
    height: 150%;
    align-items: center;
    justify-content: center;
`,B=l.p`
    color: ${t.newColors.almostBlack[100]};
    font-weight: ${t.fontWeight.semiBold};
    font-size: 16px;
    margin-bottom: 8px;
`,A=l.span`
    color: ${t.newColors.grey3[100]};
    font-size: 12px;
`,te=e.jsxs("div",{children:[e.jsx(B,{children:"Title"}),e.jsx(A,{children:"Subtitle"})]}),O=e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(C,{color:"teal",variant:"text",label:"Add",mIcon:N,onClick:()=>alert("Add button clicked")})}),m=()=>{const[o,r]=i.useState(null),[a,n]=i.useState(!1),s=d=>{r(d.currentTarget),n(!0)},c=()=>{n(!1)},p=d=>{if(!d)return;const f=d.parentElement;f.scrollTop=d.clientHeight/4};return e.jsx(Y,{children:e.jsx(Z,{children:e.jsx(ee,{container:!0,ref:p,children:e.jsxs("div",{children:[e.jsx(C,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(v,{anchorEl:o,topContent:te,bottomContent:O,onClose:c,open:a})]})})})})},ne=l.input`
    background-color: ${t.newColors.grey1[100]};
    border: ${t.borders.simplyGrey};
    height: 47px;
    border-radius: 0;
`,oe=e.jsxs("div",{children:[e.jsx(ne,{}),e.jsx(B,{children:"Title"}),e.jsx(A,{children:"Subtitle"})]}),h=()=>{const[o,r]=i.useState(null),[a,n]=i.useState(!1),s=p=>{r(p.currentTarget),n(!0)},c=()=>{n(!1)};return e.jsxs("div",{children:[e.jsx(C,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(v,{anchorEl:o,topContent:oe,bottomContent:O,onClose:c,open:a})]})},re=l.span`
    color: ${t.newColors.almostBlack[100]};
    cursor: pointer;
    font-size: 16px;
    font-weight: ${t.fontWeight.semiBold};
    text-decoration: underline;
`,le=l.span`
    color: ${t.newColors.grey3[100]};
    font-size: 12px;
    margin-left: 4px;
`,se=e.jsxs("div",{children:[e.jsx(re,{onClick:()=>alert("Title clicked"),children:"Clickable Title"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginTop:10},children:[e.jsx(U,{sx:{width:12,color:t.newColors.grey3[100]}}),e.jsx(le,{children:"Subtitle"})]})]}),ae=[{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"},{label:"Label",value:"Aperiam ut sapiente ut exercitationemat"}],ce=l.span`
    color: ${t.newColors.grey4[100]};
    margin-right: 8px;
`,ie=l.span`
    color: ${t.newColors.grey3[100]};
`,pe=l.span`
    display: block;
    color: ${t.newColors.almostBlack[100]};
    font-weight: ${t.fontWeight.semiBold};
    font-size: 14px;
    margin: 16px 0;
`,de=l.span`
    color: ${t.newColors.realTeal[100]};
    cursor: pointer;
    font-weight: ${t.fontWeight.semiBold};
    font-size: 14px;
`,ue=()=>e.jsxs("div",{children:[ae.map((o,r)=>e.jsxs("div",{style:{display:"flex",fontSize:14},children:[e.jsxs(ce,{children:[o.label,":"]}),e.jsx(ie,{children:o.value})]},`${o.label}-${r}`)),e.jsx(pe,{children:"mail@gmail.com"}),e.jsx(de,{onClick:()=>alert("Link clicked"),children:"www.link.com"})]}),x=()=>{const[o,r]=i.useState(null),[a,n]=i.useState(!1),s=p=>{r(p.currentTarget),n(!0)},c=()=>{n(!1)};return e.jsxs("div",{children:[e.jsx(C,{color:"yellow",variant:"contained",label:"Open Popover",onClick:s}),e.jsx(v,{anchorEl:o,topContent:se,bottomContent:e.jsx(ue,{}),onClose:c,open:a})]})};var g,E,b;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(b=(E=m.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var w,y,S;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(S=(y=h.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,P,T;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(T=(P=x.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const me=["Playground","Input","TextAndLinks"],ke=Object.freeze(Object.defineProperty({__proto__:null,Input:h,Playground:m,TextAndLinks:x,__namedExportsOrder:me,default:X},Symbol.toStringTag,{value:"Module"}));export{m as P,ke as s};
