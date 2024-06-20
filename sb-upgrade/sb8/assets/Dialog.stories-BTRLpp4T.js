import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as u}from"./index-CDs2tPxN.js";import{D as g}from"./Dialog-D4zKyLjY.js";import{B as y}from"./Button-B_QyrzNG.js";import"./theme-tUuL1bpb.js";import"./useThemeProps-DZj2lB8w.js";import"./Popper-CAohKvIp.js";import"./assertThisInitialized-DcNg8fFv.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-CWuiCQwo.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./useToggle-D8hNafRh.js";const S={title:"Components/Dialog"},e=({dialogContent:l,dialogTitle:i,primaryBtnLabel:s,secondaryBtnLabel:p})=>{const[c,t]=u.useState(!1),d=()=>{t(!0)},m=[{label:p,onClick:()=>{t(!1)},color:"gray",variant:"outlined"},{label:s,onClick:()=>{alert("The primary button was clicked"),t(!1)},color:"yellow",variant:"contained"}];return n.jsxs(n.Fragment,{children:[n.jsx(y,{color:"yellow",variant:"contained",onClick:d,label:"Open Dialog",muiAttrs:{disableRipple:!0}}),n.jsx(g,{dialogTitle:i,open:c,buttons:m,children:l})]})};e.args={dialogContent:`Assumenda maiores aut laudantium earum nesciunt. Nihil et deserunt in
sed numquam. Sed ut ex ex et eius sunt nisi eum adipisci. Animi quaerat
expedita. Aut quis quas minus sed asperiores dolores asperiores
excepturi. Non corporis qui doloremque ea voluptas voluptatem repellat.
Address Information`,dialogTitle:"Dialog title",primaryBtnLabel:"Apply",secondaryBtnLabel:"Cancel"};e.argTypes={dialogContent:{name:"Dialog Content"},dialogTitle:{name:"Dialog Title"},primaryBtnLabel:{name:"Primary Button Label"},secondaryBtnLabel:{name:"Secondary Button Label"}};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  dialogContent,
  dialogTitle,
  primaryBtnLabel,
  secondaryBtnLabel
}: typeof Playground.args): ReactElement => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const primaryAction = () => {
    alert("The primary button was clicked");
    setOpen(false);
  };
  const buttons: ButtonProps[] = [{
    label: secondaryBtnLabel,
    onClick: handleClose,
    color: "gray",
    variant: "outlined"
  }, {
    label: primaryBtnLabel,
    onClick: primaryAction,
    color: "yellow",
    variant: "contained"
  }];
  return <>
            <Button color="yellow" variant="contained" onClick={handleClickOpen} label="Open Dialog" muiAttrs={{
      disableRipple: true
    }} />
            <Dialog dialogTitle={dialogTitle} open={open} buttons={buttons}>
                {dialogContent}
            </Dialog>
        </>;
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const _=["Playground"];export{e as Playground,_ as __namedExportsOrder,S as default};
