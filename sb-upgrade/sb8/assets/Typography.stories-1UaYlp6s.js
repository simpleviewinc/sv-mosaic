import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{t as l}from"./theme-tUuL1bpb.js";import{T as B,a as s,S as L,B as a}from"./BodyText-gyiTNPhg.js";import{s as o}from"./styled-components.browser.esm-C-l0uCre.js";import"./index-CDs2tPxN.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-unitless.esm-sScrWPmR.js";const H=["a","div","h1","h2","h3","h4","h5","h6","p","pre","small","span","strong","sub","sup"],D={title:"Components/Typography"},i="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, nulla et iaculis semper, turpis massa faucibus sem, et egestas purus leo ut mauris. Nam ac ex porttitor, tempus eros eu, rhoncus libero. Integer risus lacus, ultrices at turpis id, suscipit vulputate nulla. Cras tincidunt ante quis mi accumsan.",c=i.substring(0,93),d="https://www.google.com/?q=46503807498226023045874012183575071093022671901587285495525521941359381308429902926377654197863336467166861936857990937433143015269066983394795324415786553093224671668619368579909374331430152690669833947",v=["title","subtitle","body"],M=["black","blue","lightBlue","red","yellow","teal","gray","white"],_=["-moz-initial","-moz-pre-wrap","break-spaces","inherit","initial","normal","nowrap","pre","pre-line","pre-wrap","revert","revert-layer"],A=o.div`
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4rem 2rem 0;
    min-height: 100vh
`,C=o.div`
    background: white;
    padding: 1rem 4rem 4rem;
    width: 980px;
    max-width: 100%;
    border: 1px solid #e5e5e5;
    border-bottom: 0;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    flex-grow: 1;
`,n=o.h2`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 16px;
    font-weight: ${l.fontWeight.light};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${l.colors.simplyGray};
    margin: 2rem -12px;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    &::after{
        content: " ";
        flex-grow: 1;
        border-top: 1px solid ${l.newColors.grey2[100]};
        margin-left: 16px;
        margin-top: 4px;
    }
`,I=o(a)`
    && {
        font-size: 12px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
`;function t({variant:y,tag:b,maxLines:f,whiteSpace:w,breakAll:T,title:S,children:j,color:k}){return e.jsx(B,{variant:y,tag:b,maxLines:f,whiteSpace:w,breakAll:T,title:S,children:j,color:k})}t.args={variant:"title",tag:"div",maxLines:0,whiteSpace:"normal",breakAll:!1,title:"",children:"Lorem ipsum",color:"black"};t.argTypes={variant:{name:"Variant",control:{type:"select"},options:v},tag:{name:"Tag",control:{type:"select"},options:H},maxLines:{name:"Maximum Lines"},whiteSpace:{name:"White Space Style",control:{type:"select"},options:_},breakAll:{name:"Break All Style"},title:{name:"Title"},children:{name:"Children"},color:{name:"Colour",control:{type:"select"},options:M}};function r(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsxs(C,{children:[e.jsx(n,{children:"Standard Title"}),e.jsx(s,{children:c}),e.jsx(n,{children:"Title rendered as a h2 element"}),e.jsx(s,{tag:"h2",children:c}),e.jsx(n,{children:"Title with a maximum number of lines"}),e.jsx(s,{children:i,maxLines:1}),e.jsx(n,{children:"Subtitle"}),e.jsx(L,{children:c}),e.jsx(n,{children:"Body"}),e.jsx(a,{children:i}),e.jsx(n,{children:"Body with an alternate colour and a maximum number of lines"}),e.jsx(a,{children:i,maxLines:2,color:"red"}),e.jsx(n,{children:"Body with a maximum number of lines and breakable characters"}),e.jsx(a,{children:d,maxLines:1,breakAll:!0}),e.jsx(n,{children:"Body with custom styling"}),e.jsx(I,{children:d,maxLines:1,breakAll:!0})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:".sb-show-main{margin: 0}"}})]})}t.__docgenInfo={description:"",methods:[],displayName:"Playground"};r.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`function Playground({
  variant,
  tag,
  maxLines,
  whiteSpace,
  breakAll,
  title,
  children,
  color
}: typeof Playground.args): ReactElement {
  return <Typography variant={variant} tag={tag} maxLines={maxLines} whiteSpace={whiteSpace} breakAll={breakAll} title={title} children={children} color={color} />;
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,g,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`function KitchenSink(): ReactElement {
  return <>
            <BackDrop>
                <Wrapper>

                    <Heading>Standard Title</Heading>
                    <TitleText children={contentShort} />

                    <Heading>Title rendered as a h2 element</Heading>
                    <TitleText tag="h2" children={contentShort} />

                    <Heading>Title with a maximum number of lines</Heading>
                    <TitleText children={content} maxLines={1} />

                    <Heading>Subtitle</Heading>
                    <SubtitleText children={contentShort} />

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
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const F=["Playground","KitchenSink"];export{r as KitchenSink,t as Playground,F as __namedExportsOrder,D as default};
