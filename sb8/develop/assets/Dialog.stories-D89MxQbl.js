import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-wekxHvEx.js";import{D as g}from"./Dialog-BUtMvMHD.js";import{B as b}from"./Button-DIVFsLMo.js";const C={title:"Components/Dialog"},n=({dialogContent:l,dialogTitle:s,primaryBtnLabel:c,secondaryBtnLabel:p})=>{const[d,t]=y.useState(!1),u=()=>{t(!0)},a=()=>{t(!1)},m=[{label:p,onClick:a,intent:"secondary",variant:"contained"},{label:c,onClick:()=>{alert("The primary button was clicked"),t(!1)},intent:"primary",variant:"contained"}];return e.jsxs(e.Fragment,{children:[e.jsx(b,{intent:"primary",variant:"contained",onClick:u,label:"Open Dialog",muiAttrs:{disableRipple:!0}}),e.jsx(g,{dialogTitle:s,open:d,buttons:m,onClose:a,children:l})]})};n.args={dialogContent:`Assumenda maiores aut laudantium earum nesciunt. Nihil et deserunt in
sed numquam. Sed ut ex ex et eius sunt nisi eum adipisci. Animi quaerat
expedita. Aut quis quas minus sed asperiores dolores asperiores
excepturi. Non corporis qui doloremque ea voluptas voluptatem repellat.
Address Information`,dialogTitle:"Dialog title",primaryBtnLabel:"Apply",secondaryBtnLabel:"Cancel"};n.argTypes={dialogContent:{name:"Dialog Content"},dialogTitle:{name:"Dialog Title"},primaryBtnLabel:{name:"Primary Button Label"},secondaryBtnLabel:{name:"Secondary Button Label"}};var o,i,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
            <Dialog dialogTitle={dialogTitle} open={open} buttons={buttons} onClose={handleClose}>
                {dialogContent}
            </Dialog>
        </>;
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const f=["Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:f,default:C},Symbol.toStringTag,{value:"Module"}));export{n as P,A as s};
