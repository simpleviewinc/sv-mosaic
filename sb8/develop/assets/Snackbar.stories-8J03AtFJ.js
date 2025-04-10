import{r as b,j as t}from"./jsx-runtime-EKYJJIwR.js";import{g as k,r as g}from"./index-DDfD_3TG.js";import{S as O}from"./Snackbar-Bslrzt6A.js";import{B as w}from"./Button-_6SRCSsN.js";import{r as v}from"./styled-DItYIteU.js";import{r as S}from"./createSvgIcon-MGjginG7.js";var n={},i;function x(){if(i)return n;i=1;var o=v();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(S()),r=b();return n.default=(0,a.default)((0,r.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline"),n}var _=x();const y=k(_),I={title:"Components/Snackbar"},e=({label:o,autoHideDuration:a,showAction:r,showIcon:p})=>{const[d,c]=g.useState(!1),m=()=>{c(!0)},f=(A,C)=>{C!=="clickaway"&&c(!1)},h={label:"Create new account",function:()=>{alert("Created account")}};return t.jsxs(t.Fragment,{children:[t.jsx(w,{color:"yellow",variant:"contained",label:"Open snackbar",onClick:m,muiAttrs:{disableRipple:!0}}),t.jsx(O,{action:r&&h,autoHideDuration:a,label:o,leadingIcon:p&&y,open:d,onClose:f})]})};e.args={label:"Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form.",autoHideDuration:4e3,showAction:!1,showIcon:!1};e.argTypes={label:{name:"Label"},autoHideDuration:{name:"Auto-hide Duration"},showAction:{name:"Show Action"},showIcon:{name:"Show Icon"}};var l,s,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  label,
  autoHideDuration,
  showAction,
  showIcon
}: typeof Playground.args): ReactElement => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (_event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const action: SnackbarAction = {
    label: "Create new account",
    function: () => {
      alert("Created account");
    }
  };
  return <>
            <Button color="yellow" variant="contained" label="Open snackbar" onClick={handleClickOpen} muiAttrs={{
      disableRipple: true
    }} />
            <Snackbar action={showAction && action} autoHideDuration={autoHideDuration} label={label} leadingIcon={showIcon && CheckCircleOutlineIcon} open={open} onClose={handleClose} />
        </>;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const j=["Playground"],M=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:j,default:I},Symbol.toStringTag,{value:"Module"}));export{e as P,M as s};
