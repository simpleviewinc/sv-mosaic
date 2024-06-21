import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as _}from"./index-CDs2tPxN.js";import{u as C,F as H}from"./formUtils-8tzQoWfa.js";import{a as s}from"./advancedSelectionUtils-Dc6CTSWK.js";import{r as T}from"./storyUtils-ByV2Bsyv.js";import{M,J as k,c as B}from"./MultiSelectHelper-B8WyU67N.js";import{n as j}from"./index.browser-vcSNLBTf.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const Vt={title:"FormFields/FormFieldAdvancedSelection"},a=({label:r,required:u,skeleton:O,disabled:n,instructionText:i,helperText:p,optionsOrigin:o,getOptionsLimit:l,createNewOptionsKnob:c,selectLimit:d})=>{const t=C(),{state:v,handleSubmit:w}=t,S=s?s:[],b=new k(B),D=new M({api:b,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),J=async L=>{const f=j(),m={_id:f,tag:L,sort_tag:L,updated:new Date,created:new Date,id:f};s.push({label:m.tag,value:m.id});const q=[...await b.getData(),m];return await b.setData(q),{label:m.tag,value:m.id}},K=_.useMemo(()=>[{name:"advancedSelection",label:r,required:u,disabled:n,helperText:p,instructionText:i,type:"advancedSelection",inputSettings:{options:o==="Local"?S:void 0,getOptions:o==="DB"?D.getOptions.bind(D):void 0,getOptionsLimit:o==="DB"&&l?l:void 0,createNewOption:c?J:void 0,selectLimit:d}}],[r,u,n,p,i,l,S,o,c,d]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(v,null,"  ")}),e.jsx(H,{...t,buttons:T(w),title:"Advanced Selection Field",fields:K,skeleton:O})]})};a.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};a.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const g=()=>{const r=C(),{state:u,handleSubmit:O}=r,n=s?s:[],i=new k(B),p=new M({api:i,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),o=async c=>{const d=j(),t={_id:d,tag:c,sort_tag:c,updated:new Date,created:new Date,id:d};s.push({label:t.tag,value:t.id});const w=[...await i.getData(),t];return await i.setData(w),{label:t.tag,value:t.id}},l=_.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:n}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:p.getOptions.bind(p),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:n,getOptionsLimit:10,createNewOption:o}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:n,getOptionsLimit:10,selectLimit:2}}],[n]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(u,null,"  ")}),e.jsx(H,{...r,buttons:T(O),title:"Form Title",description:"Description",fields:l})]})};var h,x,N;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(N=(x=a.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var y,A,F;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const zt=["Playground","KitchenSink"];export{g as KitchenSink,a as Playground,zt as __namedExportsOrder,Vt as default};
