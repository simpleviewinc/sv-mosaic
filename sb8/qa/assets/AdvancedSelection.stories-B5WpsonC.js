import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as _}from"./index-Btj5Fd67.js";import{n as C}from"./index.browser-vcSNLBTf.js";import{u as M,F as k}from"./Form-DsDAv5pr.js";import{r as H}from"./renderButtons-BmHfsf_z.js";import{c as j}from"./commonFieldControl-LQDYMh-C.js";import{m as u}from"./options-CuTclIsA.js";import{M as B,J as T,c as J}from"./MultiSelectHelper-CGd49yUO.js";const q={title:"FormFields/FormFieldAdvancedSelection"},t=({label:r,required:m,prepop:O,prepopData:i,disabled:o,instructionText:c,helperText:g,optionsOrigin:a,getOptionsLimit:s,createNewOptionsKnob:l,selectLimit:e})=>{const w=M({data:O?i:{}}),{state:b,handleSubmit:K}=w,v=u,S=new T(J),f=new B({api:S,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),E=async D=>{const L=C(),p={_id:L,tag:D,sort_tag:D,updated:new Date,created:new Date,id:L};u.push({label:p.tag,value:p.id});const R=[...await S.getData(),p];return await S.setData(R),{label:p.tag,value:p.id}},P=_.useMemo(()=>[{name:"advancedSelection",label:r,required:m,disabled:o,helperText:g,instructionText:c,type:"advancedSelection",inputSettings:{options:a==="Local"?v:void 0,getOptions:a==="DB"?f.getOptions.bind(f):void 0,getOptionsLimit:a==="DB"&&s?s:void 0,createNewOption:l?E:void 0,selectLimit:e}}],[r,m,o,g,c,s,v,a,l,e]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(b,null,"  ")}),n.jsx(k,{...w,buttons:H(K),title:"Advanced Selection Field",fields:P})]})};t.args={...j.args({prepopData:{advancedSelection:u.slice(0,3)}}),optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};t.argTypes={...j.argTypes,optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const d=()=>{const r=M(),{state:m,handleSubmit:O}=r,i=u,o=new T(J),c=new B({api:o,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),g=async s=>{const l=C(),e={_id:l,tag:s,sort_tag:s,updated:new Date,created:new Date,id:l};u.push({label:e.tag,value:e.id});const b=[...await o.getData(),e];return await o.setData(b),{label:e.tag,value:e.id}},a=_.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:i}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:c.getOptions.bind(c),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:i,getOptionsLimit:10,createNewOption:g}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:i,getOptionsLimit:10,selectLimit:2}}],[i]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(m,null,"  ")}),n.jsx(k,{...r,buttons:H(O),title:"Form Title",description:"Description",fields:a})]})};var h,y,N;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(N=(y=t.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var A,F,x;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(x=(F=d.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const I=["Playground","KitchenSink"],$=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:d,Playground:t,__namedExportsOrder:I,default:q},Symbol.toStringTag,{value:"Module"}));export{$ as s};
