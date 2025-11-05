import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-ePW8zFKp.js";import{D as y}from"./Dialog-Bnn_xCj4.js";import{B as g}from"./Button-BUa6dDgD.js";const b={title:"Components/Dialog"},n=({dialogContent:r,dialogTitle:l,primaryBtnLabel:s,secondaryBtnLabel:c})=>{const[p,t]=m.useState(!1),d=()=>{t(!0)},u=[{label:c,onClick:()=>{t(!1)},intent:"secondary",variant:"contained"},{label:s,onClick:()=>{alert("The primary button was clicked"),t(!1)},intent:"primary",variant:"contained"}];return e.jsxs(e.Fragment,{children:[e.jsx(g,{intent:"primary",variant:"contained",onClick:d,label:"Open Dialog",muiAttrs:{disableRipple:!0}}),e.jsx(y,{dialogTitle:l,open:p,buttons:u,children:r})]})};n.args={dialogContent:`Assumenda maiores aut laudantium earum nesciunt. Nihil et deserunt in
sed numquam. Sed ut ex ex et eius sunt nisi eum adipisci. Animi quaerat
expedita. Aut quis quas minus sed asperiores dolores asperiores
excepturi. Non corporis qui doloremque ea voluptas voluptatem repellat.
Address Information`,dialogTitle:"Dialog title",primaryBtnLabel:"Apply",secondaryBtnLabel:"Cancel"};n.argTypes={dialogContent:{name:"Dialog Content"},dialogTitle:{name:"Dialog Title"},primaryBtnLabel:{name:"Primary Button Label"},secondaryBtnLabel:{name:"Secondary Button Label"}};var a,o,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
    intent: "secondary",
    variant: "contained"
  }, {
    label: primaryBtnLabel,
    onClick: primaryAction,
    intent: "primary",
    variant: "contained"
  }];
  return <>
            <Button intent="primary" variant="contained" onClick={handleClickOpen} label="Open Dialog" muiAttrs={{
      disableRipple: true
    }} />
            <Dialog dialogTitle={dialogTitle} open={open} buttons={buttons}>
                {dialogContent}
            </Dialog>
        </>;
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const C=["Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{n as P,A as s};
