import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{r as T}from"./index-D0AnReJb.js";import{n as C}from"./index.browser-vcSNLBTf.js";import{u as M,F as k}from"./index-S8NmCBW9.js";import{r as H}from"./renderButtons-BmHfsf_z.js";import{c as j}from"./commonFieldControl-LQDYMh-C.js";import{m as o}from"./options-DEOzrsxm.js";import{J,c as B,M as K}from"./MultiSelectHelper-RZIosFWT.js";const z={title:"FormFields/FormFieldAdvancedSelection"},t=({label:a,hideLabel:u,required:m,prepop:i,prepopData:s,disabled:r,instructionText:g,forceInstructionTooltip:O,helperText:c,optionsType:p,getOptionsLimit:e,createNewOptionsKnob:b,selectLimit:w})=>{const v=M({data:i?s:{}}),{state:E,handleSubmit:I}=v,y=o?o:[],S=new J(B),h=new K({api:S,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),P=async D=>{const f=C(),l={_id:f,tag:D,sort_tag:D,updated:new Date,created:new Date,id:f};o.push({label:l.tag,value:l.id});const q=[...await S.getData(),l];return await S.setData(q),{label:l.tag,value:l.id}},R=T.useMemo(()=>[{name:"advancedSelection",label:a,hideLabel:u,required:m,disabled:r,helperText:c,instructionText:g,forceInstructionTooltip:O,type:"advancedSelection",inputSettings:{...p==="Synchronous"?{options:y}:{getOptions:h.getOptions.bind(h),getOptionsLimit:e},createNewOption:b?P:void 0,selectLimit:w}}],[a,u,m,r,c,g,O,e,y,p,b,w]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(E,null,"  ")}),n.jsx(k,{...v,buttons:H(I),title:"Advanced Selection Field",fields:R})]})};t.args={...j.args({prepopData:{advancedSelection:o.slice(0,3)}}),optionsType:"Synchronous",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};t.argTypes={...j.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const d=()=>{const a=M(),{state:u,handleSubmit:m}=a,i=o?o:[],s=new J(B),r=new K({api:s,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),g=async c=>{const p=C(),e={_id:p,tag:c,sort_tag:c,updated:new Date,created:new Date,id:p};o.push({label:e.tag,value:e.id});const w=[...await s.getData(),e];return await s.setData(w),{label:e.tag,value:e.id}},O=T.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:i}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:r.getOptions.bind(r),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:i,getOptionsLimit:10,createNewOption:g}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:i,getOptionsLimit:10,selectLimit:2}}],[i]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(u,null,"  ")}),n.jsx(k,{...a,buttons:H(m),title:"Form Title",description:"Description",fields:O})]})};var L,N,A;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  optionsType,
  getOptionsLimit,
  createNewOptionsKnob,
  selectLimit
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
  const options: MosaicLabelValue[] = mockOptions ? mockOptions : [];
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
    mockOptions.push({
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
    hideLabel,
    required,
    disabled,
    helperText,
    instructionText,
    forceInstructionTooltip,
    type: "advancedSelection",
    inputSettings: {
      ...(optionsType === "Synchronous" ? {
        options
      } : {
        getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
        getOptionsLimit
      }),
      createNewOption: createNewOptionsKnob ? createNewOption : undefined,
      selectLimit
    }
  }], [label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip, getOptionsLimit, options, optionsType, createNewOptionsKnob, selectLimit]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Advanced Selection Field" fields={fields} />
        </>;
}`,...(A=(N=t.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var F,x,_;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const options = mockOptions ? mockOptions : [];
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
    mockOptions.push({
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
}`,...(_=(x=d.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const G=["Playground","KitchenSink"],ne=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:d,Playground:t,__namedExportsOrder:G,default:z},Symbol.toStringTag,{value:"Module"}));export{ne as s};
