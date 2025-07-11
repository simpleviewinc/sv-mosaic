import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{t as r}from"./sizes-o2d97SRj.js";import"./index-D0AnReJb.js";import{T as B}from"./Typography-Csn3cM8V.js";import{D as l}from"./DisplayText-DsKn3JO_.js";import{T as H}from"./Text-4ZxjQQL-.js";import{B as a}from"./BodyText-xV26Tz9R.js";import{s}from"./styled-components.browser.esm-njFAddlw.js";const L=["a","div","h1","h2","h3","h4","h5","h6","p","pre","small","span","strong","sub","sup"],z={title:"Components/Typography"},o="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, nulla et iaculis semper, turpis massa faucibus sem, et egestas purus leo ut mauris. Nam ac ex porttitor, tempus eros eu, rhoncus libero. Integer risus lacus, ultrices at turpis id, suscipit vulputate nulla. Cras tincidunt ante quis mi accumsan.",c=o.substring(0,93),m="https://www.google.com/?q=46503807498226023045874012183575071093022671901587285495525521941359381308429902926377654197863336467166861936857990937433143015269066983394795324415786553093224671668619368579909374331430152690669833947",_=["display","text","body"],A=["-moz-initial","-moz-pre-wrap","break-spaces","inherit","initial","normal","nowrap","pre","pre-line","pre-wrap","revert","revert-layer"],D=["2xl","xl","lg","md","sm","xs"],M=s.div`
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4rem 2rem 0;
    min-height: 100vh
`,P=s.div`
    background: white;
    padding: 1rem 4rem 4rem;
    width: 980px;
    max-width: 100%;
    border: 1px solid #e5e5e5;
    border-bottom: 0;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    flex-grow: 1;
`,n=s.h2`
    font-family: ${r.family.mono};
    font-size: 16px;
    font-weight: ${r.weight.regular};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${r.colors.simplyGray};
    margin: 2rem -12px;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    &::after{
        content: " ";
        flex-grow: 1;
        border-top: 1px solid ${r.newColors.grey2[100]};
        margin-left: 16px;
        margin-top: 4px;
    }
`,C=s(a)`
    && {
        font-size: 12px;
        font-family: ${r.family.mono};
    }
`;function t({variant:y,tag:f,maxLines:b,whiteSpace:w,breakAll:S,title:T,children:j,color:k,size:v}){return e.jsx(B,{variant:y,tag:f,maxLines:b,whiteSpace:w,breakAll:S,title:T,children:j,color:k,size:v})}t.args={variant:"display",tag:"div",maxLines:0,whiteSpace:"normal",breakAll:!1,title:"",children:"Lorem ipsum",color:"black",provideSize:!1,size:"md"};t.argTypes={variant:{name:"Variant",control:{type:"select"},options:_},tag:{name:"Tag",control:{type:"select"},options:L},maxLines:{name:"Maximum Lines"},whiteSpace:{name:"White Space Style",control:{type:"select"},options:A},breakAll:{name:"Break All Style"},title:{name:"Title"},children:{name:"Children"},color:{name:"Color"},provideSize:{name:"Provide Size"},size:{name:"Size",control:{type:"select"},options:D,if:{arg:"provideSize"}}};function i(){return e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsxs(P,{children:[e.jsx(n,{children:"Standard Title"}),e.jsx(l,{children:c}),e.jsx(n,{children:"Title rendered as a h2 element"}),e.jsx(l,{tag:"h2",children:c}),e.jsx(n,{children:"Title with a maximum number of lines"}),e.jsx(l,{children:o,maxLines:1}),e.jsx(n,{children:"Subtitle"}),e.jsx(H,{children:c}),e.jsx(n,{children:"Body"}),e.jsx(a,{children:o}),e.jsx(n,{children:"Body with an alternate colour and a maximum number of lines"}),e.jsx(a,{children:o,maxLines:2,color:"red"}),e.jsx(n,{children:"Body with a maximum number of lines and breakable characters"}),e.jsx(a,{children:m,maxLines:1,breakAll:!0}),e.jsx(n,{children:"Body with custom styling"}),e.jsx(C,{children:m,maxLines:1,breakAll:!0})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:".sb-show-main{margin: 0}"}})]})}var d,p,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`function Playground({
  variant,
  tag,
  maxLines,
  whiteSpace,
  breakAll,
  title,
  children,
  color,
  size
}: typeof Playground.args): ReactElement {
  return <Typography variant={variant} tag={tag} maxLines={maxLines} whiteSpace={whiteSpace} breakAll={breakAll} title={title} children={children} color={color} size={size} />;
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,x,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`function KitchenSink(): ReactElement {
  return <>
            <BackDrop>
                <Wrapper>

                    <Heading>Standard Title</Heading>
                    <DisplayText children={contentShort} />

                    <Heading>Title rendered as a h2 element</Heading>
                    <DisplayText tag="h2" children={contentShort} />

                    <Heading>Title with a maximum number of lines</Heading>
                    <DisplayText children={content} maxLines={1} />

                    <Heading>Subtitle</Heading>
                    <Text children={contentShort} />

                    <Heading>Body</Heading>
                    <BodyText children={content} />

                    <Heading>Body with an alternate colour and a maximum number of lines</Heading>
                    <BodyText children={content} maxLines={2} color="red" />

                    <Heading>Body with a maximum number of lines and breakable characters</Heading>
                    <BodyText children={contentUrl} maxLines={1} breakAll />

                    <Heading>Body with custom styling</Heading>
                    <MyBodyText children={contentUrl} maxLines={1} breakAll />

                </Wrapper>
            </BackDrop>
            <style dangerouslySetInnerHTML={{
      __html: ".sb-show-main{margin: 0}"
    }} />
        </>;
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const $=["Playground","KitchenSink"],F=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:i,Playground:t,__namedExportsOrder:$,default:z},Symbol.toStringTag,{value:"Module"}));export{F as s};
