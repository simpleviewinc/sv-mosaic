import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as i}from"./index-CDs2tPxN.js";import{u as O,F as B}from"./formUtils-CJK8oCl3.js";import{r as V}from"./storyUtils-ByV2Bsyv.js";import{n as I}from"./index.browser-vcSNLBTf.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const Ge={title:"FormFields/FormFieldUpload"},M={uploadField:[{id:0,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",size:263e4,name:"antiques.jpg"},{id:1,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",size:760760,name:"beer-flight.jpg"},{id:2,fileUrl:"https://res.cloudinary.com/simpleview/image/upload/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",thumbnailUrl:"https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",size:167e5,name:"Bridges.jpg"}]},t=({label:s,required:p,skeleton:C,disabled:d,instructionText:c,helperText:u,limit:o,prepopulate:f,timeToLoad:g,timeToDelete:b,thumbnailUrl:U,fileUrl:F,downloadUrl:h,error:l,acceptCsv:x,maxFileSize:r,maxTotalSize:a})=>{const y=O(),{state:R,handleSubmit:k,methods:{reset:w}}=y,T=x.trim()?x.split(","):void 0,[N,_]=i.useState(!1);i.useEffect(()=>{f?(async()=>{w(),_(!0)})():_(!1)},[w,f]);const S=i.useCallback(async({file:e,onChunkComplete:P,onUploadComplete:q})=>{for(let m=0;m<10;m++)await new Promise(A=>setTimeout(()=>A(P({percent:(m+1)*.1})),g*1e3/10));if(e.name==="broken_file")throw new Error("This file is broken");if(l)throw new Error(l);await q({id:I(),name:e.name,size:e.size,thumbnailUrl:U||(["image/gif","image/jpeg","image/png"].includes(e.type)?URL.createObjectURL(e):""),fileUrl:F||URL.createObjectURL(e),downloadUrl:h})},[g,U,F,h,l]),v=i.useCallback(async()=>{await new Promise(e=>setTimeout(()=>e(null),b*1e3))},[b]),D=i.useCallback(async()=>({...M}),[]),E=i.useMemo(()=>[{name:"uploadField",label:s,type:"upload",required:p,disabled:d,helperText:u,instructionText:c,inputSettings:{limit:o==="No limit"?void 0:Number(o),onFileAdd:S,onFileDelete:v,accept:T,maxFileSize:r?Number(r)*1e3:void 0,maxTotalSize:a?Number(a)*1e3:void 0}}],[s,p,d,u,c,o,S,T,r,a,v]);return n.jsxs(n.Fragment,{children:[n.jsx(B,{...y,buttons:V(k),title:"Upload Field",fields:E,getFormValues:N&&D,skeleton:C}),n.jsx("pre",{children:JSON.stringify(R,null,"  ")})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",limit:"No limit",prepopulate:!1,timeToLoad:2,timeToDelete:2,thumbnailUrl:"",fileUrl:"",downloadUrl:"",error:"",acceptCsv:"",maxFileSize:"",maxTotalSize:""};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},limit:{name:"Upload Count Limit",control:{type:"select"},options:["No limit","1","2","3"]},prepopulate:{name:"Prepopulate"},timeToLoad:{name:"Seconds to Upload"},timeToDelete:{name:"Seconds to Delete"},thumbnailUrl:{name:"onUploadComplete Thumbnail URL"},fileUrl:{name:"onUploadComplete File URL"},downloadUrl:{name:"onUploadComplete Download URL"},error:{name:"Throw Upload Error"},acceptCsv:{name:"Comma Separated Accepted Extensions"},maxFileSize:{name:"Max File Size (KB)"},maxTotalSize:{name:"Max Total Size (KB)"}};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};var j,L,z;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
}`,...(z=(L=t.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const He=["Playground"];export{t as Playground,He as __namedExportsOrder,Ge as default};
