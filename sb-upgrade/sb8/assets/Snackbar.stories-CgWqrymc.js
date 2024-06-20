import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as b}from"./index-CDs2tPxN.js";import{S as k}from"./Snackbar-Dr5-fbso.js";import{B as g}from"./Button-B_QyrzNG.js";import{r as w,i as v}from"./createSvgIcon-Ci5omaqv.js";import"./theme-tUuL1bpb.js";import"./Close-CGoSL4st.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useThemeProps-DZj2lB8w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ClickAwayListener-BvBAfXuM.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./useToggle-D8hNafRh.js";import"./extends-CF3RwP-h.js";import"./styled-P6hUx81_.js";import"./emotion-unitless.esm-sScrWPmR.js";var o={},S=v;Object.defineProperty(o,"__esModule",{value:!0});var c=o.default=void 0,O=S(w()),_=n,x=(0,O.default)((0,_.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");c=o.default=x;const Y={title:"Components/Snackbar"},e=({label:l,autoHideDuration:s,showAction:p,showIcon:u})=>{const[m,t]=b.useState(!1),d=()=>{t(!0)},f=(y,C)=>{C!=="clickaway"&&t(!1)},h={label:"Create new account",function:()=>{alert("Created account")}};return n.jsxs(n.Fragment,{children:[n.jsx(g,{color:"yellow",variant:"contained",label:"Open snackbar",onClick:d,muiAttrs:{disableRipple:!0}}),n.jsx(k,{action:p&&h,autoHideDuration:s,label:l,leadingIcon:u&&c,open:m,onClose:f})]})};e.args={label:"Good communication and feedback from the different actions will provide a much better experience. A toaster for creating a form, for example, or dialog to alert are part of the components when making a form.",autoHideDuration:4e3,showAction:!1,showIcon:!1};e.argTypes={label:{name:"Label"},autoHideDuration:{name:"Auto-hide Duration"},showAction:{name:"Show Action"},showIcon:{name:"Show Icon"}};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var a,r,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Z=["Playground"];export{e as Playground,Z as __namedExportsOrder,Y as default};
