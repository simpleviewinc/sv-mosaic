import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as C}from"./index-DDfD_3TG.js";import{n as M}from"./index.browser-vcSNLBTf.js";import{u as k,F as H}from"./Form-947MsihE.js";import{r as T}from"./renderButtons-BmHfsf_z.js";import{c as j}from"./commonFieldControl-LQDYMh-C.js";import{m as i}from"./options-DEOzrsxm.js";import{J as B,c as J,M as K}from"./MultiSelectHelper-DXfrfLjw.js";const z={title:"FormFields/FormFieldAdvancedSelection"},o=({label:s,hideLabel:u,required:m,prepop:a,prepopData:r,disabled:c,instructionText:g,forceInstructionTooltip:O,helperText:l,optionsOrigin:n,getOptionsLimit:e,createNewOptionsKnob:b,selectLimit:w})=>{const S=k({data:a?r:{}}),{state:E,handleSubmit:I}=S,D=i?i:[],v=new B(J),f=new K({api:v,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),P=async L=>{const h=M(),p={_id:h,tag:L,sort_tag:L,updated:new Date,created:new Date,id:h};i.push({label:p.tag,value:p.id});const q=[...await v.getData(),p];return await v.setData(q),{label:p.tag,value:p.id}},R=C.useMemo(()=>[{name:"advancedSelection",label:s,hideLabel:u,required:m,disabled:c,helperText:l,instructionText:g,forceInstructionTooltip:O,type:"advancedSelection",inputSettings:{options:n==="Local"?D:void 0,getOptions:n==="DB"?f.getOptions.bind(f):void 0,getOptionsLimit:n==="DB"&&e?e:void 0,createNewOption:b?P:void 0,selectLimit:w}}],[s,u,m,c,l,g,O,e,D,n,b,w]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(E,null,"  ")}),t.jsx(H,{...S,buttons:T(I),title:"Advanced Selection Field",fields:R})]})};o.args={...j.args({prepopData:{advancedSelection:i.slice(0,3)}}),optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};o.argTypes={...j.argTypes,optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const d=()=>{const s=k(),{state:u,handleSubmit:m}=s,a=i?i:[],r=new B(J),c=new K({api:r,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),g=async l=>{const n=M(),e={_id:n,tag:l,sort_tag:l,updated:new Date,created:new Date,id:n};i.push({label:e.tag,value:e.id});const w=[...await r.getData(),e];return await r.setData(w),{label:e.tag,value:e.id}},O=C.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:a}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:c.getOptions.bind(c),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:a,getOptionsLimit:10,createNewOption:g}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:a,getOptionsLimit:10,selectLimit:2}}],[a]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(u,null,"  ")}),t.jsx(H,{...s,buttons:T(m),title:"Form Title",description:"Description",fields:O})]})};var y,N,A;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  optionsOrigin,
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
      options: optionsOrigin === "Local" ? options : undefined,
      getOptions: optionsOrigin === "DB" ? categoriesHelper.getOptions.bind(categoriesHelper) : undefined,
      getOptionsLimit: optionsOrigin === "DB" && getOptionsLimit ? getOptionsLimit : undefined,
      createNewOption: createNewOptionsKnob ? createNewOption : undefined,
      selectLimit
    }
  }], [label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip, getOptionsLimit, options, optionsOrigin, createNewOptionsKnob, selectLimit]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Advanced Selection Field" fields={fields} />
        </>;
}`,...(A=(N=o.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var F,x,_;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(_=(x=d.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const G=["Playground","KitchenSink"],te=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:d,Playground:o,__namedExportsOrder:G,default:z},Symbol.toStringTag,{value:"Module"}));export{te as s};
