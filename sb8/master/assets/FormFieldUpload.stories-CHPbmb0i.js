import{j as l}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-D0AnReJb.js";import{u as M,F as O}from"./index-CLK0-CYa.js";import{r as q}from"./renderButtons-DP0bGf4C.js";import{c as L}from"./commonFieldControl-LQDYMh-C.js";import{n as G}from"./index.browser-vcSNLBTf.js";const J={title:"FormFields/FormFieldUpload"},n=({label:p,hideLabel:c,required:u,disabled:g,instructionText:f,forceInstructionTooltip:h,helperText:U,limit:t,prepop:N,prepopData:I,timeToLoad:b,timeToDelete:w,thumbnailUrl:F,fileUrl:T,downloadUrl:_,error:a,accept:x,maxFileSize:r,maxTotalSize:s})=>{const S=M({data:N?I:{}}),{state:k,handleSubmit:E}=S,y=m.useCallback(async({file:e,onChunkComplete:R,onUploadComplete:A})=>{for(let o=0;o<10;o++)await new Promise(i=>setTimeout(()=>i(R({percent:(o+1)*.1})),b*1e3/10));if(e.name==="broken_file")throw new Error("This file is broken");if(a)throw new Error(a);const j=["image/gif","image/jpeg","image/png"].includes(e.type),d=URL.createObjectURL(e),B=j?await new Promise(o=>{const i=new Image;i.onload=()=>o({width:i.width,height:i.height}),i.src=d}):void 0;await A({id:G(),name:e.name,size:e.size,dimensions:B,thumbnailUrl:F||(j?d:""),fileUrl:T||d,downloadUrl:_})},[b,F,T,_,a]),v=m.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),w*1e3))},[w]),P=m.useMemo(()=>[{name:"uploadField",label:p,hideLabel:c,type:"upload",required:u,disabled:g,helperText:U,instructionText:f,forceInstructionTooltip:h,inputSettings:{limit:t==="No limit"?void 0:Number(t),onFileAdd:y,onFileDelete:v,accept:x,maxFileSize:r?Number(r)*1e3:void 0,maxTotalSize:s?Number(s)*1e3:void 0}}],[p,c,u,g,U,f,h,t,y,v,x,r,s]);return l.jsxs(l.Fragment,{children:[l.jsx(O,{...S,buttons:q(E),title:"Upload Field",fields:P}),l.jsx("pre",{children:JSON.stringify(k,null,"  ")})]})};n.args={...L.args({prepopData:{uploadField:[{id:0,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",size:263e4,name:"antiques.jpg",dimensions:{width:1832,height:1081}},{id:1,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",size:760760,name:"beer-flight.jpg"},{id:2,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",size:167e5,name:"Bridges.jpg"}]}}),limit:"No limit",timeToLoad:2,timeToDelete:2,thumbnailUrl:"",fileUrl:"",downloadUrl:"",error:"",accept:[],maxFileSize:"",maxTotalSize:""};n.argTypes={...L.argTypes,limit:{name:"Upload Count Limit",control:{type:"select"},options:["No limit","1","2","3"]},timeToLoad:{name:"Seconds to Upload"},timeToDelete:{name:"Seconds to Delete"},thumbnailUrl:{name:"onUploadComplete Thumbnail URL"},fileUrl:{name:"onUploadComplete File URL"},downloadUrl:{name:"onUploadComplete Download URL"},error:{name:"Throw Upload Error"},accept:{name:"Accepted Extensions"},maxFileSize:{name:"Max File Size (KB)"},maxTotalSize:{name:"Max Total Size (KB)"}};var z,C,D;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`({
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
  }, [timeToLoad, thumbnailUrl, fileUrl, downloadUrl, error]);
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
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const K=["Playground"],Z=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{Z as s};
