import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as _}from"./index-BP8_t0zE.js";import{u as T,F as C}from"./formUtils-BfbmhTFo.js";import{a as s}from"./advancedSelectionUtils-Dc6CTSWK.js";import{r as H}from"./storyUtils-ByV2Bsyv.js";import{M,J as j,c as k}from"./MultiSelectHelper-41W_69hc.js";import{n as B}from"./index.browser-vcSNLBTf.js";const E={title:"FormFields/FormFieldAdvancedSelection"},i=({label:l,required:g,skeleton:O,disabled:n,instructionText:o,helperText:r,optionsOrigin:a,getOptionsLimit:c,createNewOptionsKnob:p,selectLimit:d})=>{const e=T(),{state:S,handleSubmit:w}=e,v=s?s:[],b=new j(k),f=new M({api:b,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),J=async D=>{const L=B(),u={_id:L,tag:D,sort_tag:D,updated:new Date,created:new Date,id:L};s.push({label:u.tag,value:u.id});const q=[...await b.getData(),u];return await b.setData(q),{label:u.tag,value:u.id}},K=_.useMemo(()=>[{name:"advancedSelection",label:l,required:g,disabled:n,helperText:r,instructionText:o,type:"advancedSelection",inputSettings:{options:a==="Local"?v:void 0,getOptions:a==="DB"?f.getOptions.bind(f):void 0,getOptionsLimit:a==="DB"&&c?c:void 0,createNewOption:p?J:void 0,selectLimit:d}}],[l,g,n,r,o,c,v,a,p,d]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(S,null,"  ")}),t.jsx(C,{...e,buttons:H(w),title:"Advanced Selection Field",fields:K,skeleton:O})]})};i.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};i.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const m=()=>{const l=T(),{state:g,handleSubmit:O}=l,n=s?s:[],o=new j(k),r=new M({api:o,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),a=async p=>{const d=B(),e={_id:d,tag:p,sort_tag:p,updated:new Date,created:new Date,id:d};s.push({label:e.tag,value:e.id});const w=[...await o.getData(),e];return await o.setData(w),{label:e.tag,value:e.id}},c=_.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:n}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:r.getOptions.bind(r),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:n,getOptionsLimit:10,createNewOption:a}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:n,getOptionsLimit:10,selectLimit:2}}],[n]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(g,null,"  ")}),t.jsx(C,{...l,buttons:H(O),title:"Form Title",description:"Description",fields:c})]})};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var N,A,F;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const I=["Playground","KitchenSink"],X=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:m,Playground:i,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{X as s};
