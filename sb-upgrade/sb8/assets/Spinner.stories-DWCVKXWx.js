import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{S as t}from"./Spinner-Dq1xuCGl.js";import"./Typography-w5WZckx5.js";import{S as s}from"./SubtitleText-C2xUiS7C.js";import"./index-CDs2tPxN.js";import"./theme-tUuL1bpb.js";import"./useThemeProps-DZj2lB8w.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";const T={title:"Components/Spinner"},r=({spin:d,progress:g})=>e.jsx(t,{progress:d?void 0:g});r.args={spin:!0,progress:60};r.argTypes={spin:{name:"Spin Indefinitely"},progress:{name:"Progress"}};const n=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{tag:"h3",children:"Spinner that spins indifinitely"}),e.jsx(t,{}),e.jsx(s,{tag:"h3",children:"Spinner that spins indifinitely"}),e.jsx(t,{progress:60})]});var i,o,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
  spin,
  progress
}: typeof Playground.args): ReactElement => {
  return <Spinner progress={!spin ? progress : undefined} />;
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var a,m,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`(): ReactElement => {
  return <>
            <SubtitleText tag="h3">Spinner that spins indifinitely</SubtitleText>
            <Spinner />
            <SubtitleText tag="h3">Spinner that spins indifinitely</SubtitleText>
            <Spinner progress={60} />
        </>;
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const b=["Playground","KitchenSink"];export{n as KitchenSink,r as Playground,b as __namedExportsOrder,T as default};
