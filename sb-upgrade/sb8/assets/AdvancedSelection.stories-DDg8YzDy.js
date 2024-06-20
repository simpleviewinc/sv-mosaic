import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as _}from"./index-CDs2tPxN.js";import{u as C,F as H}from"./formUtils-CJK8oCl3.js";import{a as s}from"./advancedSelectionUtils-Dc6CTSWK.js";import{r as T}from"./storyUtils-ByV2Bsyv.js";import{M as k,J as M,c as B}from"./MultiSelectHelper-DF8Zxo5z.js";import{n as j}from"./index.browser-vcSNLBTf.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const Rt={title:"FormFields/FormFieldAdvancedSelection"},i=({label:r,required:g,skeleton:O,disabled:n,instructionText:o,helperText:p,optionsOrigin:a,getOptionsLimit:l,createNewOptionsKnob:c,selectLimit:d})=>{const t=C(),{state:S,handleSubmit:w}=t,v=s?s:[],b=new M(B),f=new k({api:b,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),J=async D=>{const L=j(),m={_id:L,tag:D,sort_tag:D,updated:new Date,created:new Date,id:L};s.push({label:m.tag,value:m.id});const I=[...await b.getData(),m];return await b.setData(I),{label:m.tag,value:m.id}},K=_.useMemo(()=>[{name:"advancedSelection",label:r,required:g,disabled:n,helperText:p,instructionText:o,type:"advancedSelection",inputSettings:{options:a==="Local"?v:void 0,getOptions:a==="DB"?f.getOptions.bind(f):void 0,getOptionsLimit:a==="DB"&&l?l:void 0,createNewOption:c?J:void 0,selectLimit:d}}],[r,g,n,p,o,l,v,a,c,d]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(S,null,"  ")}),e.jsx(H,{...t,buttons:T(w),title:"Advanced Selection Field",fields:K,skeleton:O})]})};i.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};i.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const u=()=>{const r=C(),{state:g,handleSubmit:O}=r,n=s?s:[],o=new M(B),p=new k({api:o,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),a=async c=>{const d=j(),t={_id:d,tag:c,sort_tag:c,updated:new Date,created:new Date,id:d};s.push({label:t.tag,value:t.id});const w=[...await o.getData(),t];return await o.setData(w),{label:t.tag,value:t.id}},l=_.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:n}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:p.getOptions.bind(p),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:n,getOptionsLimit:10,createNewOption:a}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:n,getOptionsLimit:10,selectLimit:2}}],[n]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(g,null,"  ")}),e.jsx(H,{...r,buttons:T(O),title:"Form Title",description:"Description",fields:l})]})};i.__docgenInfo={description:"",methods:[],displayName:"Playground"};u.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  optionsOrigin,
  getOptionsLimit,
  createNewOptionsKnob,
  selectLimit
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const options: MosaicLabelValue[] = additionalOptions ? additionalOptions : [];
  const categoriesApi = new JSONDB(categories);
  const categoriesHelper = new MultiSelectHelper({
    api: categoriesApi,
    labelColumn: "tag",
    valueColumn: "id",
    sortColumn: "sort_tag"
  });
  const createNewOption = async newOptionLabel => {
    const value = nanoid();
    const newOption = {
      "_id": value,
      "tag": newOptionLabel,
      "sort_tag": newOptionLabel,
      "updated": new Date(),
      "created": new Date(),
      "id": value
    };

    //Insert to db
    additionalOptions.push({
      label: newOption.tag,
      value: newOption.id
    });
    const data = await categoriesApi.getData();
    const newData = [...data, newOption];
    await categoriesApi.setData(newData);
    return {
      label: newOption.tag,
      value: newOption.id
    };
  };
  const fields = useMemo((): FieldDef[] => [{
    name: "advancedSelection",
    label,
    required,
    disabled,
    helperText,
    instructionText,
    type: "advancedSelection",
    inputSettings: {
      options: optionsOrigin === "Local" ? options : undefined,
      getOptions: optionsOrigin === "DB" ? categoriesHelper.getOptions.bind(categoriesHelper) : undefined,
      getOptionsLimit: optionsOrigin === "DB" && getOptionsLimit ? getOptionsLimit : undefined,
      createNewOption: createNewOptionsKnob ? createNewOption : undefined,
      selectLimit
    }
  }], [label, required, disabled, helperText, instructionText, getOptionsLimit, options, optionsOrigin, createNewOptionsKnob, selectLimit]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Advanced Selection Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var N,A,F;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const options = additionalOptions ? additionalOptions : [];
  const categoriesApi = new JSONDB(categories);
  const categoriesHelper = new MultiSelectHelper({
    api: categoriesApi,
    labelColumn: "tag",
    valueColumn: "id",
    sortColumn: "sort_tag"
  });
  const createNewOption = async newOptionLabel => {
    const value = nanoid();
    const newOption = {
      "_id": value,
      "tag": newOptionLabel,
      "sort_tag": newOptionLabel,
      "updated": new Date(),
      "created": new Date(),
      "id": value
    };

    //Insert to db
    additionalOptions.push({
      label: newOption.tag,
      value: newOption.id
    });
    const data = await categoriesApi.getData();
    const newData = [...data, newOption];
    await categoriesApi.setData(newData);
    return {
      label: newOption.tag,
      value: newOption.id
    };
  };
  const fields: FieldDef[] = useMemo(() => [{
    name: "checkboxOptions",
    label: "Advanced selection with options prop",
    type: "advancedSelection",
    inputSettings: {
      options
    }
  }, {
    name: "getOptions",
    label: "Advanced selection with getOptions prop",
    type: "advancedSelection",
    inputSettings: {
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getOptionsLimit: 5
    }
  }, {
    name: "createNewOption",
    label: "Advanced selection with createNewOption prop",
    type: "advancedSelection",
    inputSettings: {
      options,
      getOptionsLimit: 10,
      createNewOption
    }
  }, {
    name: "selectLimitOfOptions",
    label: "Advanced selection with selectLimit prop (Max 2 options)",
    type: "advancedSelection",
    inputSettings: {
      options,
      getOptionsLimit: 10,
      selectLimit: 2
    }
  }], [options]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="Description" fields={fields} />
        </>;
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const Gt=["Playground","KitchenSink"];export{u as KitchenSink,i as Playground,Gt as __namedExportsOrder,Rt as default};
