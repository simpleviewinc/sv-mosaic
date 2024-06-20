import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{S as s}from"./Spinner-DZM1MKnU.js";import{S as t}from"./BodyText-gyiTNPhg.js";import"./index-CDs2tPxN.js";import"./theme-tUuL1bpb.js";import"./useThemeProps-DZj2lB8w.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";const j={title:"Components/Spinner"},n=({spin:c,progress:g})=>e.jsx(s,{progress:c?void 0:g});n.args={spin:!0,progress:60};n.argTypes={spin:{name:"Spin Indefinitely"},progress:{name:"Progress"}};const r=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{tag:"h3",children:"Spinner that spins indifinitely"}),e.jsx(s,{}),e.jsx(t,{tag:"h3",children:"Spinner that spins indifinitely"}),e.jsx(s,{progress:60})]});n.__docgenInfo={description:"",methods:[],displayName:"Playground"};r.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var i,o,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`({
  spin,
  progress
}: typeof Playground.args): ReactElement => {
  return <Spinner progress={!spin ? progress : undefined} />;
}`,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var a,d,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): ReactElement => {
  return <>
            <SubtitleText tag="h3">Spinner that spins indifinitely</SubtitleText>
            <Spinner />
            <SubtitleText tag="h3">Spinner that spins indifinitely</SubtitleText>
            <Spinner progress={60} />
        </>;
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const _=["Playground","KitchenSink"];export{r as KitchenSink,n as Playground,_ as __namedExportsOrder,j as default};
