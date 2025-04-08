import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{r as s}from"./index-D0AnReJb.js";import{u as A,F as P}from"./Form-CgwovX7A.js";import{r as B}from"./renderButtons-BmHfsf_z.js";import{c as v}from"./commonFieldControl-LQDYMh-C.js";import{n as M}from"./index.browser-vcSNLBTf.js";const q={title:"FormFields/FormFieldUpload"},n=({label:m,hideLabel:d,required:p,disabled:c,instructionText:u,forceInstructionTooltip:f,helperText:g,limit:l,prepop:L,prepopData:C,timeToLoad:b,timeToDelete:U,thumbnailUrl:h,fileUrl:F,downloadUrl:w,error:o,accept:T,maxFileSize:t,maxTotalSize:a})=>{const _=A({data:L?C:{}}),{state:D,handleSubmit:R}=_,x=s.useCallback(async({file:e,onChunkComplete:k,onUploadComplete:E})=>{for(let r=0;r<10;r++)await new Promise(O=>setTimeout(()=>O(k({percent:(r+1)*.1})),b*1e3/10));if(e.name==="broken_file")throw new Error("This file is broken");if(o)throw new Error(o);await E({id:M(),name:e.name,size:e.size,thumbnailUrl:h||(["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):""),fileUrl:F||URL.createObjectURL(e),downloadUrl:w})},[b,h,F,w,o]),S=s.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),U*1e3))},[U]),N=s.useMemo(()=>[{name:"uploadField",label:m,hideLabel:d,type:"upload",required:p,disabled:c,helperText:g,instructionText:u,forceInstructionTooltip:f,inputSettings:{limit:l==="No limit"?void 0:Number(l),onFileAdd:x,onFileDelete:S,accept:T,maxFileSize:t?Number(t)*1e3:void 0,maxTotalSize:a?Number(a)*1e3:void 0}}],[m,d,p,c,g,u,f,l,x,S,T,t,a]);return i.jsxs(i.Fragment,{children:[i.jsx(P,{..._,buttons:B(R),title:"Upload Field",fields:N}),i.jsx("pre",{children:JSON.stringify(D,null,"  ")})]})};n.args={...v.args({prepopData:{uploadField:[{id:0,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",size:263e4,name:"antiques.jpg"},{id:1,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",size:760760,name:"beer-flight.jpg"},{id:2,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",size:167e5,name:"Bridges.jpg"}]}}),limit:"No limit",timeToLoad:2,timeToDelete:2,thumbnailUrl:"",fileUrl:"",downloadUrl:"",error:"",accept:[],maxFileSize:"",maxTotalSize:""};n.argTypes={...v.argTypes,limit:{name:"Upload Count Limit",control:{type:"select"},options:["No limit","1","2","3"]},timeToLoad:{name:"Seconds to Upload"},timeToDelete:{name:"Seconds to Delete"},thumbnailUrl:{name:"onUploadComplete Thumbnail URL"},fileUrl:{name:"onUploadComplete File URL"},downloadUrl:{name:"onUploadComplete Download URL"},error:{name:"Throw Upload Error"},accept:{name:"Accepted Extensions"},maxFileSize:{name:"Max File Size (KB)"},maxTotalSize:{name:"Max Total Size (KB)"}};var y,j,z;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(z=(j=n.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const I=["Playground"],W=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:I,default:q},Symbol.toStringTag,{value:"Module"}));export{W as s};
