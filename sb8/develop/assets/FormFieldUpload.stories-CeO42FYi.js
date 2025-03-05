import{j as l}from"./jsx-runtime-DiwAibxM.js";import{r as t}from"./index-Btj5Fd67.js";import{u as M,F as V}from"./index-B0t4kTeH.js";import{r as q}from"./renderButtons-BmHfsf_z.js";import{c as L}from"./commonFieldControl-DXwRxrKb.js";import{n as I}from"./index.browser-vcSNLBTf.js";const G={title:"FormFields/FormFieldUpload"},J={uploadField:[{id:0,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",size:263e4,name:"antiques.jpg"},{id:1,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",size:760760,name:"beer-flight.jpg"},{id:2,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",size:167e5,name:"Bridges.jpg"}]},n=({label:m,required:d,skeleton:R,disabled:c,instructionText:p,helperText:u,limit:i,prepop:f,timeToLoad:g,timeToDelete:b,thumbnailUrl:U,fileUrl:F,downloadUrl:h,error:o,acceptCsv:y,maxFileSize:a,maxTotalSize:r})=>{const w=M(),{state:k,handleSubmit:E,methods:{reset:_}}=w,S=y.trim()?y.split(","):void 0,[N,T]=t.useState(!1);t.useEffect(()=>{f?(async()=>{_(),T(!0)})():T(!1)},[_,f]);const x=t.useCallback(async({file:e,onChunkComplete:A,onUploadComplete:P})=>{for(let s=0;s<10;s++)await new Promise(B=>setTimeout(()=>B(A({percent:(s+1)*.1})),g*1e3/10));if(e.name==="broken_file")throw new Error("This file is broken");if(o)throw new Error(o);await P({id:I(),name:e.name,size:e.size,thumbnailUrl:U||(["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):""),fileUrl:F||URL.createObjectURL(e),downloadUrl:h})},[g,U,F,h,o]),j=t.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),b*1e3))},[b]),D=t.useCallback(async()=>({...J}),[]),O=t.useMemo(()=>[{name:"uploadField",label:m,type:"upload",required:d,disabled:c,helperText:u,instructionText:p,inputSettings:{limit:i==="No limit"?void 0:Number(i),onFileAdd:x,onFileDelete:j,accept:S,maxFileSize:a?Number(a)*1e3:void 0,maxTotalSize:r?Number(r)*1e3:void 0}}],[m,d,c,u,p,i,x,S,a,r,j]);return l.jsxs(l.Fragment,{children:[l.jsx(V,{...w,buttons:q(E),title:"Upload Field",fields:O,getFormValues:N&&D,skeleton:R}),l.jsx("pre",{children:JSON.stringify(k,null,"  ")})]})};n.args={...L.args,limit:"No limit",timeToLoad:2,timeToDelete:2,thumbnailUrl:"",fileUrl:"",downloadUrl:"",error:"",acceptCsv:"",maxFileSize:"",maxTotalSize:""};n.argTypes={...L.argTypes,limit:{name:"Upload Count Limit",control:{type:"select"},options:["No limit","1","2","3"]},timeToLoad:{name:"Seconds to Upload"},timeToDelete:{name:"Seconds to Delete"},thumbnailUrl:{name:"onUploadComplete Thumbnail URL"},fileUrl:{name:"onUploadComplete File URL"},downloadUrl:{name:"onUploadComplete Download URL"},error:{name:"Throw Upload Error"},acceptCsv:{name:"Comma Separated Accepted Extensions"},maxFileSize:{name:"Max File Size (KB)"},maxTotalSize:{name:"Max Total Size (KB)"}};var z,C,v;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  limit,
  prepop,
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
  const controller = useForm();
  const {
    state,
    handleSubmit,
    methods: {
      reset
    }
  } = controller;
  const accept = acceptCsv.trim() ? acceptCsv.split(",") : undefined;
  const [loadReady, setLoadReady] = useState(false);
  useEffect(() => {
    const resetForm = async () => {
      reset();
      setLoadReady(true);
    };
    if (prepop) {
      resetForm();
    } else {
      setLoadReady(false);
    }
  }, [reset, prepop]);
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
  const getFormValues = useCallback(async () => ({
    ...initialValues
  }), []);
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Upload Field" fields={fields} getFormValues={loadReady && getFormValues} skeleton={skeleton} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const K=["Playground"],$=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{$ as s};
