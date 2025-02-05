import{j as l}from"./jsx-runtime-DiwAibxM.js";import{r as t}from"./index-Btj5Fd67.js";import{u as A,F as B}from"./Form-DCJEJ9uH.js";import{r as M}from"./renderButtons-BmHfsf_z.js";import{n as V}from"./index.browser-vcSNLBTf.js";const I={title:"FormFields/FormFieldUpload"},G={uploadField:[{id:0,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",size:263e4,name:"antiques.jpg"},{id:1,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",size:760760,name:"beer-flight.jpg"},{id:2,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",size:167e5,name:"Bridges.jpg"}]},n=({label:d,required:m,skeleton:C,disabled:c,instructionText:p,helperText:u,limit:a,prepopulate:f,timeToLoad:g,timeToDelete:b,thumbnailUrl:U,fileUrl:F,downloadUrl:h,error:i,acceptCsv:x,maxFileSize:o,maxTotalSize:r})=>{const y=A(),{state:R,handleSubmit:k,methods:{reset:T}}=y,w=x.trim()?x.split(","):void 0,[D,_]=t.useState(!1);t.useEffect(()=>{f?(async()=>{T(),_(!0)})():_(!1)},[T,f]);const S=t.useCallback(async({file:e,onChunkComplete:O,onUploadComplete:P})=>{for(let s=0;s<10;s++)await new Promise(q=>setTimeout(()=>q(O({percent:(s+1)*.1})),g*1e3/10));if(e.name==="broken_file")throw new Error("This file is broken");if(i)throw new Error(i);await P({id:V(),name:e.name,size:e.size,thumbnailUrl:U||(["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):""),fileUrl:F||URL.createObjectURL(e),downloadUrl:h})},[g,U,F,h,i]),j=t.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),b*1e3))},[b]),E=t.useCallback(async()=>({...G}),[]),N=t.useMemo(()=>[{name:"uploadField",label:d,type:"upload",required:m,disabled:c,helperText:u,instructionText:p,inputSettings:{limit:a==="No limit"?void 0:Number(a),onFileAdd:S,onFileDelete:j,accept:w,maxFileSize:o?Number(o)*1e3:void 0,maxTotalSize:r?Number(r)*1e3:void 0}}],[d,m,c,u,p,a,S,w,o,r,j]);return l.jsxs(l.Fragment,{children:[l.jsx(B,{...y,buttons:M(k),title:"Upload Field",fields:N,getFormValues:D&&E,skeleton:C}),l.jsx("pre",{children:JSON.stringify(R,null,"  ")})]})};n.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",limit:"No limit",prepopulate:!1,timeToLoad:2,timeToDelete:2,thumbnailUrl:"",fileUrl:"",downloadUrl:"",error:"",acceptCsv:"",maxFileSize:"",maxTotalSize:""};n.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},limit:{name:"Upload Count Limit",control:{type:"select"},options:["No limit","1","2","3"]},prepopulate:{name:"Prepopulate"},timeToLoad:{name:"Seconds to Upload"},timeToDelete:{name:"Seconds to Delete"},thumbnailUrl:{name:"onUploadComplete Thumbnail URL"},fileUrl:{name:"onUploadComplete File URL"},downloadUrl:{name:"onUploadComplete Download URL"},error:{name:"Throw Upload Error"},acceptCsv:{name:"Comma Separated Accepted Extensions"},maxFileSize:{name:"Max File Size (KB)"},maxTotalSize:{name:"Max Total Size (KB)"}};var z,L,v;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  limit,
  prepopulate,
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

  // One line change

  const accept = acceptCsv.trim() ? acceptCsv.split(",") : undefined;
  const [loadReady, setLoadReady] = useState(false);
  useEffect(() => {
    const resetForm = async () => {
      reset();
      setLoadReady(true);
    };
    if (prepopulate) {
      resetForm();
    } else {
      setLoadReady(false);
    }
  }, [reset, prepopulate]);
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
}`,...(v=(L=n.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const H=["Playground"],Y=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:H,default:I},Symbol.toStringTag,{value:"Module"}));export{Y as s};
