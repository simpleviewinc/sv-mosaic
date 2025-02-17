import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as m}from"./index-Btj5Fd67.js";import{D as g}from"./Dialog-D-UDZ0Lf.js";import{B as y}from"./Button-CRbkpCI2.js";const b={title:"Components/Dialog"},e=({dialogContent:r,dialogTitle:i,primaryBtnLabel:s,secondaryBtnLabel:c})=>{const[p,t]=m.useState(!1),u=()=>{t(!0)},d=[{label:c,onClick:()=>{t(!1)},color:"gray",variant:"outlined"},{label:s,onClick:()=>{alert("The primary button was clicked"),t(!1)},color:"yellow",variant:"contained"}];return n.jsxs(n.Fragment,{children:[n.jsx(y,{color:"yellow",variant:"contained",onClick:u,label:"Open Dialog",muiAttrs:{disableRipple:!0}}),n.jsx(g,{dialogTitle:i,open:p,buttons:d,children:r})]})};e.args={dialogContent:`Assumenda maiores aut laudantium earum nesciunt. Nihil et deserunt in
sed numquam. Sed ut ex ex et eius sunt nisi eum adipisci. Animi quaerat
expedita. Aut quis quas minus sed asperiores dolores asperiores
excepturi. Non corporis qui doloremque ea voluptas voluptatem repellat.
Address Information`,dialogTitle:"Dialog title",primaryBtnLabel:"Apply",secondaryBtnLabel:"Cancel"};e.argTypes={dialogContent:{name:"Dialog Content"},dialogTitle:{name:"Dialog Title"},primaryBtnLabel:{name:"Primary Button Label"},secondaryBtnLabel:{name:"Secondary Button Label"}};var a,o,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const C=["Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{e as P,A as s};
