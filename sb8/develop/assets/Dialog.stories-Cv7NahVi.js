import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as u}from"./index-BP8_t0zE.js";import{D as g}from"./Dialog-DGV3Cnhk.js";import{B as y}from"./Button-DMdypOK9.js";import"./theme-CtvfJOCv.js";import"./useThemeProps-Ds-LJhvX.js";import"./Popper-CwZOyH_P.js";import"./assertThisInitialized-CO-dlV3K.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useId-BlXdlps1.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./useToggle-lipGlewK.js";const S={title:"Components/Dialog"},e=({dialogContent:l,dialogTitle:i,primaryBtnLabel:s,secondaryBtnLabel:p})=>{const[c,t]=u.useState(!1),m=()=>{t(!0)},d=[{label:p,onClick:()=>{t(!1)},color:"gray",variant:"outlined"},{label:s,onClick:()=>{alert("The primary button was clicked"),t(!1)},color:"yellow",variant:"contained"}];return n.jsxs(n.Fragment,{children:[n.jsx(y,{color:"yellow",variant:"contained",onClick:m,label:"Open Dialog",muiAttrs:{disableRipple:!0}}),n.jsx(g,{dialogTitle:i,open:c,buttons:d,children:l})]})};e.args={dialogContent:`Assumenda maiores aut laudantium earum nesciunt. Nihil et deserunt in
sed numquam. Sed ut ex ex et eius sunt nisi eum adipisci. Animi quaerat
expedita. Aut quis quas minus sed asperiores dolores asperiores
excepturi. Non corporis qui doloremque ea voluptas voluptatem repellat.
Address Information`,dialogTitle:"Dialog title",primaryBtnLabel:"Apply",secondaryBtnLabel:"Cancel"};e.argTypes={dialogContent:{name:"Dialog Content"},dialogTitle:{name:"Dialog Title"},primaryBtnLabel:{name:"Primary Button Label"},secondaryBtnLabel:{name:"Secondary Button Label"}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const E=["Playground"];export{e as Playground,E as __namedExportsOrder,S as default};
