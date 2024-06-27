import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as t}from"./index-BP8_t0zE.js";import{u as P,F as B}from"./formUtils-CayaUY58.js";import{r as V}from"./storyUtils-ByV2Bsyv.js";import{n as M}from"./index.browser-vcSNLBTf.js";import"./FormFieldText.styled-DKoDye3Y.js";import"./theme-CtvfJOCv.js";import"./Button-CDqJWCGq.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-Dhd-ubYC.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-i3PhXCTq.js";import"./Spinner-D_slr9_p.js";import"./Chip-wSpTF7XV.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-osRV5K3v.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BeNizQJS.js";import"./TitleWrapper-DJn4aB1e.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-Dv9SgNkb.js";import"./MenuSelect-CGQLQZS-.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dtcy1NrH.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-LbExvKVl.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";const Je={title:"FormFields/FormFieldUpload"},I={uploadField:[{id:0,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",size:263e4,name:"antiques.jpg"},{id:1,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",size:760760,name:"beer-flight.jpg"},{id:2,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",size:167e5,name:"Bridges.jpg"}]},i=({label:s,required:p,skeleton:C,disabled:d,instructionText:c,helperText:u,limit:o,prepopulate:f,timeToLoad:g,timeToDelete:b,thumbnailUrl:U,fileUrl:F,downloadUrl:h,error:r,acceptCsv:x,maxFileSize:l,maxTotalSize:a})=>{const w=P(),{state:R,handleSubmit:k,methods:{reset:T}}=w,y=x.trim()?x.split(","):void 0,[D,S]=t.useState(!1);t.useEffect(()=>{f?(async()=>{T(),S(!0)})():S(!1)},[T,f]);const _=t.useCallback(async({file:e,onChunkComplete:q,onUploadComplete:A})=>{for(let m=0;m<10;m++)await new Promise(O=>setTimeout(()=>O(q({percent:(m+1)*.1})),g*1e3/10));if(e.name==="broken_file")throw new Error("This file is broken");if(r)throw new Error(r);await A({id:M(),name:e.name,size:e.size,thumbnailUrl:U||(["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):""),fileUrl:F||URL.createObjectURL(e),downloadUrl:h})},[g,U,F,h,r]),v=t.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),b*1e3))},[b]),E=t.useCallback(async()=>({...I}),[]),N=t.useMemo(()=>[{name:"uploadField",label:s,type:"upload",required:p,disabled:d,helperText:u,instructionText:c,inputSettings:{limit:o==="No limit"?void 0:Number(o),onFileAdd:_,onFileDelete:v,accept:y,maxFileSize:l?Number(l)*1e3:void 0,maxTotalSize:a?Number(a)*1e3:void 0}}],[s,p,d,u,c,o,_,y,l,a,v]);return n.jsxs(n.Fragment,{children:[n.jsx(B,{...w,buttons:V(k),title:"Upload Field",fields:N,getFormValues:D&&E,skeleton:C}),n.jsx("pre",{children:JSON.stringify(R,null,"  ")})]})};i.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",limit:"No limit",prepopulate:!1,timeToLoad:2,timeToDelete:2,thumbnailUrl:"",fileUrl:"",downloadUrl:"",error:"",acceptCsv:"",maxFileSize:"",maxTotalSize:""};i.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},limit:{name:"Upload Count Limit",control:{type:"select"},options:["No limit","1","2","3"]},prepopulate:{name:"Prepopulate"},timeToLoad:{name:"Seconds to Upload"},timeToDelete:{name:"Seconds to Delete"},thumbnailUrl:{name:"onUploadComplete Thumbnail URL"},fileUrl:{name:"onUploadComplete File URL"},downloadUrl:{name:"onUploadComplete Download URL"},error:{name:"Throw Upload Error"},acceptCsv:{name:"Comma Separated Accepted Extensions"},maxFileSize:{name:"Max File Size (KB)"},maxTotalSize:{name:"Max Total Size (KB)"}};var j,L,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
    prepopulate ? resetForm() : setLoadReady(false);
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
}`,...(z=(L=i.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const Ke=["Playground"];export{i as Playground,Ke as __namedExportsOrder,Je as default};
