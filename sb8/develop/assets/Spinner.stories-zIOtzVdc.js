import{j as e}from"./jsx-runtime-DiwAibxM.js";import{S as t}from"./Spinner-C0FunRuE.js";import"./Typography-D0-akgTt.js";import{S as s}from"./SubtitleText-DUUVrgUU.js";const g={title:"Components/Spinner"},r=({spin:d,progress:u})=>e.jsx(t,{progress:d?void 0:u});r.args={spin:!0,progress:60};r.argTypes={spin:{name:"Spin Indefinitely"},progress:{name:"Progress"}};const n=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{tag:"h3",children:"Spinner that spins indifinitely"}),e.jsx(t,{}),e.jsx(s,{tag:"h3",children:"Spinner that spins indifinitely"}),e.jsx(t,{progress:60})]});var i,o,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
  spin,
  progress
}: typeof Playground.args): ReactElement => {
  return <Spinner progress={!spin ? progress : undefined} />;
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var a,l,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`(): ReactElement => {
  return <>
            <SubtitleText tag="h3">Spinner that spins indifinitely</SubtitleText>
            <Spinner />
            <SubtitleText tag="h3">Spinner that spins indifinitely</SubtitleText>
            <Spinner progress={60} />
        </>;
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const m=["Playground","KitchenSink"],y=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:n,Playground:r,__namedExportsOrder:m,default:g},Symbol.toStringTag,{value:"Module"}));export{r as P,y as s};
