import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{r as s}from"./index-D0AnReJb.js";import{u as O,F as A}from"./Form-DPJ23PVO.js";import{r as P}from"./renderButtons-BmHfsf_z.js";import{c as j}from"./commonFieldControl-LQDYMh-C.js";import{n as B}from"./index.browser-vcSNLBTf.js";const M={title:"FormFields/FormFieldUpload"},n=({label:m,required:d,disabled:p,instructionText:c,helperText:u,limit:l,prepop:z,prepopData:C,timeToLoad:f,timeToDelete:g,thumbnailUrl:b,fileUrl:U,downloadUrl:F,error:o,acceptCsv:h,maxFileSize:t,maxTotalSize:a})=>{const w=O({data:z?C:{}}),{state:L,handleSubmit:D}=w,_=h.trim()?h.split(","):void 0,T=s.useCallback(async({file:e,onChunkComplete:N,onUploadComplete:k})=>{for(let r=0;r<10;r++)await new Promise(E=>setTimeout(()=>E(N({percent:(r+1)*.1})),f*1e3/10));if(e.name==="broken_file")throw new Error("This file is broken");if(o)throw new Error(o);await k({id:B(),name:e.name,size:e.size,thumbnailUrl:b||(["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):""),fileUrl:U||URL.createObjectURL(e),downloadUrl:F})},[f,b,U,F,o]),S=s.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),g*1e3))},[g]),R=s.useMemo(()=>[{name:"uploadField",label:m,type:"upload",required:d,disabled:p,helperText:u,instructionText:c,inputSettings:{limit:l==="No limit"?void 0:Number(l),onFileAdd:T,onFileDelete:S,accept:_,maxFileSize:t?Number(t)*1e3:void 0,maxTotalSize:a?Number(a)*1e3:void 0}}],[m,d,p,u,c,l,T,_,t,a,S]);return i.jsxs(i.Fragment,{children:[i.jsx(A,{...w,buttons:P(D),title:"Upload Field",fields:R}),i.jsx("pre",{children:JSON.stringify(L,null,"  ")})]})};n.args={...j.args({prepopData:{uploadField:[{id:0,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",size:263e4,name:"antiques.jpg"},{id:1,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",size:760760,name:"beer-flight.jpg"},{id:2,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",size:167e5,name:"Bridges.jpg"}]}}),limit:"No limit",timeToLoad:2,timeToDelete:2,thumbnailUrl:"",fileUrl:"",downloadUrl:"",error:"",acceptCsv:"",maxFileSize:"",maxTotalSize:""};n.argTypes={...j.argTypes,limit:{name:"Upload Count Limit",control:{type:"select"},options:["No limit","1","2","3"]},timeToLoad:{name:"Seconds to Upload"},timeToDelete:{name:"Seconds to Delete"},thumbnailUrl:{name:"onUploadComplete Thumbnail URL"},fileUrl:{name:"onUploadComplete File URL"},downloadUrl:{name:"onUploadComplete Download URL"},error:{name:"Throw Upload Error"},acceptCsv:{name:"Comma Separated Accepted Extensions"},maxFileSize:{name:"Max File Size (KB)"},maxTotalSize:{name:"Max Total Size (KB)"}};var x,v,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`({
  label,
  required,
  disabled,
  instructionText,
  helperText,
  limit,
  prepop,
  prepopData,
  timeToLoad,
  timeToDelete,
  thumbnailUrl,
  fileUrl,
  downloadUrl,
  error,
  acceptCsv,
  maxFileSize,
  maxTotalSize
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
  const accept = acceptCsv.trim() ? acceptCsv.split(",") : undefined;
  const onFileAdd: UploadFieldInputSettings["onFileAdd"] = useCallback(async ({
    file,
    onChunkComplete,
    onUploadComplete
  }) => {
    for (let i = 0; i < 10; i++) {
      await new Promise(resolve => setTimeout(() => resolve(onChunkComplete({
        percent: (i + 1) * 0.1
      })), timeToLoad * 1000 / 10));
    }
    if (file.name === "broken_file") {
      throw new Error("This file is broken");
    }
    if (error) {
      throw new Error(error);
    }
    await onUploadComplete({
      id: nanoid(),
      name: file.name,
      size: file.size,
      thumbnailUrl: thumbnailUrl || (["image/gif", "image/jpeg", "image/png"].includes(file.type) ? URL.createObjectURL(file) : ""),
      fileUrl: fileUrl || URL.createObjectURL(file),
      downloadUrl: downloadUrl
    });
  }, [timeToLoad, thumbnailUrl, fileUrl, downloadUrl, error]);
  const onFileDelete = useCallback(async () => {
    await new Promise(resolve => setTimeout(() => resolve(null), timeToDelete * 1000));
  }, [timeToDelete]);
  const fields = useMemo((): FieldDef[] => [{
    name: "uploadField",
    label,
    type: "upload",
    required,
    disabled,
    helperText,
    instructionText,
    inputSettings: {
      limit: limit === "No limit" ? undefined : Number(limit),
      onFileAdd,
      onFileDelete,
      accept,
      maxFileSize: maxFileSize ? Number(maxFileSize) * 1000 : undefined,
      maxTotalSize: maxTotalSize ? Number(maxTotalSize) * 1000 : undefined
    }
  }], [label, required, disabled, helperText, instructionText, limit, onFileAdd, accept, maxFileSize, maxTotalSize, onFileDelete]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Upload Field" fields={fields} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const q=["Playground"],V=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:q,default:M},Symbol.toStringTag,{value:"Module"}));export{V as s};
