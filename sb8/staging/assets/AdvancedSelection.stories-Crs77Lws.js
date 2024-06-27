import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as _}from"./index-BP8_t0zE.js";import{u as C,F as H}from"./formUtils-Cwo6y43K.js";import{a as s}from"./advancedSelectionUtils-Dc6CTSWK.js";import{r as T}from"./storyUtils-ByV2Bsyv.js";import{M,J as k,c as B}from"./MultiSelectHelper-BdWY0uiH.js";import{n as j}from"./index.browser-vcSNLBTf.js";import"./FormFieldText.styled-ThfS-v4H.js";import"./theme-CtvfJOCv.js";import"./Button-DMdypOK9.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-fIPREOsz.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-Bf0hMbCe.js";import"./Spinner-BPM3b5sV.js";import"./Chip-CChbwJpA.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-54UVCBuA.js";import"./TitleWrapper-iXKWJO9P.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-Ck68ugi1.js";import"./MenuSelect-B7Q44GLs.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-DGV3Cnhk.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-DH51ksEg.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const Vt={title:"FormFields/FormFieldAdvancedSelection"},a=({label:r,required:u,skeleton:O,disabled:n,instructionText:i,helperText:p,optionsOrigin:o,getOptionsLimit:l,createNewOptionsKnob:c,selectLimit:d})=>{const t=C(),{state:v,handleSubmit:w}=t,S=s?s:[],b=new k(B),D=new M({api:b,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),J=async L=>{const f=j(),m={_id:f,tag:L,sort_tag:L,updated:new Date,created:new Date,id:f};s.push({label:m.tag,value:m.id});const q=[...await b.getData(),m];return await b.setData(q),{label:m.tag,value:m.id}},K=_.useMemo(()=>[{name:"advancedSelection",label:r,required:u,disabled:n,helperText:p,instructionText:i,type:"advancedSelection",inputSettings:{options:o==="Local"?S:void 0,getOptions:o==="DB"?D.getOptions.bind(D):void 0,getOptionsLimit:o==="DB"&&l?l:void 0,createNewOption:c?J:void 0,selectLimit:d}}],[r,u,n,p,i,l,S,o,c,d]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(v,null,"  ")}),e.jsx(H,{...t,buttons:T(w),title:"Advanced Selection Field",fields:K,skeleton:O})]})};a.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};a.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const g=()=>{const r=C(),{state:u,handleSubmit:O}=r,n=s?s:[],i=new k(B),p=new M({api:i,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),o=async c=>{const d=j(),t={_id:d,tag:c,sort_tag:c,updated:new Date,created:new Date,id:d};s.push({label:t.tag,value:t.id});const w=[...await i.getData(),t];return await i.setData(w),{label:t.tag,value:t.id}},l=_.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:n}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:p.getOptions.bind(p),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:n,getOptionsLimit:10,createNewOption:o}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:n,getOptionsLimit:10,selectLimit:2}}],[n]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(u,null,"  ")}),e.jsx(H,{...r,buttons:T(O),title:"Form Title",description:"Description",fields:l})]})};var h,x,N;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
