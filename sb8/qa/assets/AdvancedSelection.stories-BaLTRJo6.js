import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as _}from"./index-Btj5Fd67.js";import{n as C}from"./index.browser-vcSNLBTf.js";import{u as M,F as H}from"./index-BGhy33fP.js";import{r as j}from"./renderButtons-BmHfsf_z.js";import{c as B}from"./commonFieldControl-DXwRxrKb.js";import{o as m}from"./options-DJM8a-gX.js";import{M as T,J,c as k}from"./MultiSelectHelper-CL7Ag2Zs.js";const R={title:"FormFields/FormFieldAdvancedSelection"},i=({label:s,required:g,skeleton:O,disabled:t,instructionText:o,helperText:r,optionsOrigin:a,getOptionsLimit:l,createNewOptionsKnob:c,selectLimit:p})=>{const e=M(),{state:S,handleSubmit:w}=e,v=m,b=new J(k),L=new T({api:b,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),K=async f=>{const y=C(),d={_id:y,tag:f,sort_tag:f,updated:new Date,created:new Date,id:y};m.push({label:d.tag,value:d.id});const P=[...await b.getData(),d];return await b.setData(P),{label:d.tag,value:d.id}},E=_.useMemo(()=>[{name:"advancedSelection",label:s,required:g,disabled:t,helperText:r,instructionText:o,type:"advancedSelection",inputSettings:{options:a==="Local"?v:void 0,getOptions:a==="DB"?L.getOptions.bind(L):void 0,getOptionsLimit:a==="DB"&&l?l:void 0,createNewOption:c?K:void 0,selectLimit:p}}],[s,g,t,r,o,l,v,a,c,p]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(S,null,"  ")}),n.jsx(H,{...e,buttons:j(w),title:"Advanced Selection Field",fields:E,skeleton:O})]})};i.args={...B.args,optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};i.argTypes={...B.argTypes,optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const u=()=>{const s=M(),{state:g,handleSubmit:O}=s,t=m,o=new J(k),r=new T({api:o,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),a=async c=>{const p=C(),e={_id:p,tag:c,sort_tag:c,updated:new Date,created:new Date,id:p};m.push({label:e.tag,value:e.id});const w=[...await o.getData(),e];return await o.setData(w),{label:e.tag,value:e.id}},l=_.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:t}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:r.getOptions.bind(r),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:t,getOptionsLimit:10,createNewOption:a}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:t,getOptionsLimit:10,selectLimit:2}}],[t]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(g,null,"  ")}),n.jsx(H,{...s,buttons:j(O),title:"Form Title",description:"Description",fields:l})]})};var D,h,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`({
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
  const options: MosaicLabelValue[] = optionsLibrary ? optionsLibrary : [];
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
      _id: value,
      tag: newOptionLabel,
      sort_tag: newOptionLabel,
      updated: new Date(),
      created: new Date(),
      id: value
    };

    //Insert to db
    optionsLibrary.push({
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
}`,...(N=(h=i.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var A,F,x;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const options = optionsLibrary ? optionsLibrary : [];
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
      _id: value,
      tag: newOptionLabel,
      sort_tag: newOptionLabel,
      updated: new Date(),
      created: new Date(),
      id: value
    };

    //Insert to db
    optionsLibrary.push({
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
}`,...(x=(F=u.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const q=["Playground","KitchenSink"],Z=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:u,Playground:i,__namedExportsOrder:q,default:R},Symbol.toStringTag,{value:"Module"}));export{Z as s};
