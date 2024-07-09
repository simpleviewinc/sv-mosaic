import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as C}from"./index-BP8_t0zE.js";import{S as k}from"./Snackbar-BbTrOH4B.js";import{B as g}from"./Button-BBNnoZZP.js";import{r as w,i as v}from"./createSvgIcon-DQitHYV2.js";var a={},S=v;Object.defineProperty(a,"__esModule",{value:!0});var l=a.default=void 0,O=S(w()),_=n,x=(0,O.default)((0,_.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");l=a.default=x;const y={title:"Components/Snackbar"},e=({label:s,autoHideDuration:i,showAction:u,showIcon:d})=>{const[p,t]=C.useState(!1),m=()=>{t(!0)},f=(A,b)=>{b!=="clickaway"&&t(!1)},h={label:"Create new account",function:()=>{alert("Created account")}};return n.jsxs(n.Fragment,{children:[n.jsx(g,{color:"yellow",variant:"contained",label:"Open snackbar",onClick:m,muiAttrs:{disableRipple:!0}}),n.jsx(k,{action:u&&h,autoHideDuration:i,label:s,leadingIcon:d&&l,open:p,onClose:f})]})};e.args={label:"Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form.",autoHideDuration:4e3,showAction:!1,showIcon:!1};e.argTypes={label:{name:"Label"},autoHideDuration:{name:"Auto-hide Duration"},showAction:{name:"Show Action"},showIcon:{name:"Show Icon"}};var o,r,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const j=["Playground"],H=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:j,default:y},Symbol.toStringTag,{value:"Module"}));export{e as P,H as s};
