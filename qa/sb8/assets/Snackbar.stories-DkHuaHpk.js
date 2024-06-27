import{r as b,j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as k}from"./index-BP8_t0zE.js";import{S as w}from"./Snackbar-LbExvKVl.js";import{B as g}from"./Button-CDqJWCGq.js";import{r as v,i as S}from"./createSvgIcon-DzRyHCtm.js";import"./theme-CtvfJOCv.js";import"./Close-CFi9yJil.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useThemeProps-Ds-LJhvX.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-CO-dlV3K.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ClickAwayListener-BOIWMbZr.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./useToggle-lipGlewK.js";import"./extends-CF3RwP-h.js";import"./styled-BlYH_7wi.js";import"./emotion-unitless.esm-sScrWPmR.js";var t={},x=S;Object.defineProperty(t,"__esModule",{value:!0});var c=t.default=void 0,O=x(v()),_=b(),y=(0,O.default)((0,_.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");c=t.default=y;const Z={title:"Components/Snackbar"},e=({label:l,autoHideDuration:s,showAction:p,showIcon:u})=>{const[m,o]=k.useState(!1),d=()=>{o(!0)},f=(A,C)=>{C!=="clickaway"&&o(!1)},h={label:"Create new account",function:()=>{alert("Created account")}};return n.jsxs(n.Fragment,{children:[n.jsx(g,{color:"yellow",variant:"contained",label:"Open snackbar",onClick:d,muiAttrs:{disableRipple:!0}}),n.jsx(w,{action:p&&h,autoHideDuration:s,label:l,leadingIcon:u&&c,open:m,onClose:f})]})};e.args={label:"Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form.",autoHideDuration:4e3,showAction:!1,showIcon:!1};e.argTypes={label:{name:"Label"},autoHideDuration:{name:"Auto-hide Duration"},showAction:{name:"Show Action"},showIcon:{name:"Show Icon"}};var a,r,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const $=["Playground"];export{e as Playground,$ as __namedExportsOrder,Z as default};
