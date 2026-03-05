import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CDlOlYQx.js";import{S as b}from"./Snackbar-Bo2ZVk08.js";import{B as C}from"./Button-DiGzPWWk.js";import{c as k}from"./createSvgIcon-v5cQwfe7.js";const g=k(n.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),w={title:"Components/Snackbar"},e=({label:c,autoHideDuration:s,showAction:i,showIcon:l})=>{const[u,t]=h.useState(!1),p=()=>{t(!0)},d=(O,f)=>{f!=="clickaway"&&t(!1)},m={label:"Create new account",function:()=>{alert("Created account")}};return n.jsxs(n.Fragment,{children:[n.jsx(C,{intent:"primary",variant:"contained",label:"Open snackbar",onClick:p,muiAttrs:{disableRipple:!0}}),n.jsx(b,{action:i&&m,autoHideDuration:s,label:c,leadingIcon:l&&g,open:u,onClose:d})]})};e.args={label:"Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form.",autoHideDuration:4e3,showAction:!1,showIcon:!1};e.argTypes={label:{name:"Label"},autoHideDuration:{name:"Auto-hide Duration"},showAction:{name:"Show Action"},showIcon:{name:"Show Icon"}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
            <Button intent="primary" variant="contained" label="Open snackbar" onClick={handleClickOpen} muiAttrs={{
      disableRipple: true
    }} />
            <Snackbar action={showAction && action} autoHideDuration={autoHideDuration} label={label} leadingIcon={showIcon && CheckCircleOutlineIcon} open={open} onClose={handleClose} />
        </>;
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const S=["Playground"],j=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:S,default:w},Symbol.toStringTag,{value:"Module"}));export{e as P,j as s};
