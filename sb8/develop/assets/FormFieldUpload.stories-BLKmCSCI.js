import{j as l}from"./jsx-runtime-EKYJJIwR.js";import{r as p}from"./index-BcWw8SPZ.js";import{u as O,F as q}from"./index-DmNM1quz.js";import{r as G}from"./renderButtons-DP0bGf4C.js";import{c as L}from"./commonFieldControl-LQDYMh-C.js";import{n as J}from"./index.browser-vcSNLBTf.js";const K={title:"FormFields/FormFieldUpload"},n=({label:c,hideLabel:u,required:g,disabled:f,instructionText:h,forceInstructionTooltip:U,helperText:b,limit:t,prepop:N,prepopData:I,timeToLoad:w,timeToDelete:F,thumbnailUrl:T,fileUrl:_,downloadUrl:x,chunksToComplete:a,error:r,accept:S,maxFileSize:s,maxTotalSize:m})=>{const y=O({data:N?I:{}}),{state:E,handleSubmit:P}=y,v=p.useCallback(async({file:e,onChunkComplete:A,onUploadComplete:B})=>{for(let o=0;o<a;o++)await new Promise(i=>setTimeout(()=>i(A({percent:(o+1)*.1})),w*1e3/a));if(e.name==="broken_file")throw new Error("This file is broken");if(r)throw new Error(r);const z=["image/gif","image/jpeg","image/png"].includes(e.type),d=URL.createObjectURL(e),M=z?await new Promise(o=>{const i=new Image;i.onload=()=>o({width:i.width,height:i.height}),i.src=d}):void 0;await B({id:J(),name:e.name,size:e.size,dimensions:M,thumbnailUrl:T||(z?d:""),fileUrl:_||d,downloadUrl:x})},[w,T,_,x,a,r]),j=p.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),F*1e3))},[F]),R=p.useMemo(()=>[{name:"uploadField",label:c,hideLabel:u,type:"upload",required:g,disabled:f,helperText:b,instructionText:h,forceInstructionTooltip:U,inputSettings:{limit:t==="No limit"?void 0:Number(t),onFileAdd:v,onFileDelete:j,accept:S,maxFileSize:s?Number(s)*1e3:void 0,maxTotalSize:m?Number(m)*1e3:void 0}}],[c,u,g,f,b,h,U,t,v,j,S,s,m]);return l.jsxs(l.Fragment,{children:[l.jsx(q,{...y,buttons:G(P),title:"Upload Field",fields:R}),l.jsx("pre",{children:JSON.stringify(E,null,"  ")})]})};n.args={...L.args({prepopData:{uploadField:[{id:0,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",size:263e4,name:"antiques.jpg",dimensions:{width:1832,height:1081}},{id:1,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",size:760760,name:"beer-flight.jpg"},{id:2,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",size:167e5,name:"Bridges.jpg"}]}}),limit:"No limit",timeToLoad:2,timeToDelete:2,thumbnailUrl:"",fileUrl:"",downloadUrl:"",chunksToComplete:10,error:"",accept:[],maxFileSize:"",maxTotalSize:""};n.argTypes={...L.argTypes,limit:{name:"Upload Count Limit",control:{type:"select"},options:["No limit","1","2","3"]},timeToLoad:{name:"Seconds to Upload"},timeToDelete:{name:"Seconds to Delete"},thumbnailUrl:{name:"onUploadComplete Thumbnail URL"},fileUrl:{name:"onUploadComplete File URL"},downloadUrl:{name:"onUploadComplete Download URL"},chunksToComplete:{name:"Chunks to complete (out of 10)",control:{type:"number",min:0,max:10}},error:{name:"Throw Upload Error"},accept:{name:"Accepted Extensions"},maxFileSize:{name:"Max File Size (KB)"},maxTotalSize:{name:"Max Total Size (KB)"}};var C,k,D;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  limit,
  prepop,
  prepopData,
  timeToLoad,
  timeToDelete,
  thumbnailUrl,
  fileUrl,
  downloadUrl,
  chunksToComplete,
  error,
  accept,
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
  const onFileAdd: UploadFieldInputSettings["onFileAdd"] = useCallback(async ({
    file,
    onChunkComplete,
    onUploadComplete
  }) => {
    for (let i = 0; i < chunksToComplete; i++) {
      await new Promise(resolve => setTimeout(() => resolve(onChunkComplete({
        percent: (i + 1) * 0.1
      })), timeToLoad * 1000 / chunksToComplete));
    }
    if (file.name === "broken_file") {
      throw new Error("This file is broken");
    }
    if (error) {
      throw new Error(error);
    }
    const isImage = ["image/gif", "image/jpeg", "image/png"].includes(file.type);
    const uploadedFileUrl = URL.createObjectURL(file);
    const dimensions = !isImage ? undefined : await new Promise<UploadData["dimensions"]>(resolve => {
      const img = new Image();
      img.onload = () => resolve({
        width: img.width,
        height: img.height
      });
      img.src = uploadedFileUrl;
    });
    await onUploadComplete({
      id: nanoid(),
      name: file.name,
      size: file.size,
      dimensions,
      thumbnailUrl: thumbnailUrl || (isImage ? uploadedFileUrl : ""),
      fileUrl: fileUrl || uploadedFileUrl,
      downloadUrl: downloadUrl
    });
  }, [timeToLoad, thumbnailUrl, fileUrl, downloadUrl, chunksToComplete, error]);
  const onFileDelete = useCallback(async () => {
    await new Promise(resolve => setTimeout(() => resolve(null), timeToDelete * 1000));
  }, [timeToDelete]);
  const fields = useMemo((): FieldDef[] => [{
    name: "uploadField",
    label,
    hideLabel,
    type: "upload",
    required,
    disabled,
    helperText,
    instructionText,
    forceInstructionTooltip,
    inputSettings: {
      limit: limit === "No limit" ? undefined : Number(limit),
      onFileAdd,
      onFileDelete,
      accept,
      maxFileSize: maxFileSize ? Number(maxFileSize) * 1000 : undefined,
      maxTotalSize: maxTotalSize ? Number(maxTotalSize) * 1000 : undefined
    }
  }], [label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip, limit, onFileAdd, onFileDelete, accept, maxFileSize, maxTotalSize]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Upload Field" fields={fields} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(D=(k=n.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const H=["Playground"],$=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:H,default:K},Symbol.toStringTag,{value:"Module"}));export{$ as s};
