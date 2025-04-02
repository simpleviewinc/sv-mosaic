import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as _}from"./index-D0AnReJb.js";import{n as C}from"./index.browser-vcSNLBTf.js";import{u as M,F as k}from"./Form-CgwovX7A.js";import{r as H}from"./renderButtons-BmHfsf_z.js";import{c as j}from"./commonFieldControl-LQDYMh-C.js";import{m as i}from"./options-DEOzrsxm.js";import{J as B,c as T,M as J}from"./MultiSelectHelper-Dmnv7bOq.js";const q={title:"FormFields/FormFieldAdvancedSelection"},n=({label:c,required:u,prepop:O,prepopData:o,disabled:a,instructionText:l,helperText:g,optionsOrigin:s,getOptionsLimit:r,createNewOptionsKnob:p,selectLimit:e})=>{const w=M({data:O?o:{}}),{state:b,handleSubmit:K}=w,S=i?i:[],v=new B(T),D=new J({api:v,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),E=async f=>{const L=C(),d={_id:L,tag:f,sort_tag:f,updated:new Date,created:new Date,id:L};i.push({label:d.tag,value:d.id});const R=[...await v.getData(),d];return await v.setData(R),{label:d.tag,value:d.id}},P=_.useMemo(()=>[{name:"advancedSelection",label:c,required:u,disabled:a,helperText:g,instructionText:l,type:"advancedSelection",inputSettings:{options:s==="Local"?S:void 0,getOptions:s==="DB"?D.getOptions.bind(D):void 0,getOptionsLimit:s==="DB"&&r?r:void 0,createNewOption:p?E:void 0,selectLimit:e}}],[c,u,a,g,l,r,S,s,p,e]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(b,null,"  ")}),t.jsx(k,{...w,buttons:H(K),title:"Advanced Selection Field",fields:P})]})};n.args={...j.args({prepopData:{advancedSelection:i.slice(0,3)}}),optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};n.argTypes={...j.argTypes,optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const m=()=>{const c=M(),{state:u,handleSubmit:O}=c,o=i?i:[],a=new B(T),l=new J({api:a,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),g=async r=>{const p=C(),e={_id:p,tag:r,sort_tag:r,updated:new Date,created:new Date,id:p};i.push({label:e.tag,value:e.id});const b=[...await a.getData(),e];return await a.setData(b),{label:e.tag,value:e.id}},s=_.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:o}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:l.getOptions.bind(l),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:o,getOptionsLimit:10,createNewOption:g}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:o,getOptionsLimit:10,selectLimit:2}}],[o]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(u,null,"  ")}),t.jsx(k,{...c,buttons:H(O),title:"Form Title",description:"Description",fields:s})]})};var h,y,N;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Advanced Selection Field" fields={fields} />
        </>;
}`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var A,F,x;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(x=(F=m.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const I=["Playground","KitchenSink"],$=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:m,Playground:n,__namedExportsOrder:I,default:q},Symbol.toStringTag,{value:"Module"}));export{$ as s};
