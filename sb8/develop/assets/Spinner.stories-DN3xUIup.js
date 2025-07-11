import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{S as s}from"./Spinner-CI5raFHi.js";import"./index-D0AnReJb.js";import"./Typography-Csn3cM8V.js";import{T as t}from"./Text-4ZxjQQL-.js";const l={title:"Components/Spinner"},r=({spin:g,progress:d})=>e.jsx(s,{progress:g?void 0:d});r.args={spin:!0,progress:60};r.argTypes={spin:{name:"Spin Indefinitely"},progress:{name:"Progress"}};const n=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{tag:"h3",children:"Spinner that spins indifinitely"}),e.jsx(s,{}),e.jsx(t,{tag:"h3",children:"Spinner that reaches 60%"}),e.jsx(s,{progress:60})]});var o,i,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`({
  spin,
  progress
}: typeof Playground.args): ReactElement => {
  return <Spinner progress={!spin ? progress : undefined} />;
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,c,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`(): ReactElement => {
  return <>
            <Text tag="h3">Spinner that spins indifinitely</Text>
            <Spinner />
            <Text tag="h3">Spinner that reaches 60%</Text>
            <Spinner progress={60} />
        </>;
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const u=["Playground","KitchenSink"],y=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:n,Playground:r,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{r as P,y as s};
