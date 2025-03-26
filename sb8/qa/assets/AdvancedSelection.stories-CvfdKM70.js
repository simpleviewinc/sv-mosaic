import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as _}from"./index-Btj5Fd67.js";import{n as k}from"./index.browser-vcSNLBTf.js";import{u as C,F as M}from"./Form-B7P8EMV6.js";import{r as H}from"./renderButtons-BmHfsf_z.js";import{c as j}from"./commonFieldControl-DXwRxrKb.js";import{m as g}from"./options-C_LXlRBD.js";import{M as B,J as T,c as J}from"./MultiSelectHelper-BhM7i-wS.js";const R={title:"FormFields/FormFieldAdvancedSelection"},i=({label:s,required:m,skeleton:O,disabled:t,instructionText:o,helperText:r,optionsOrigin:a,getOptionsLimit:l,createNewOptionsKnob:c,selectLimit:p})=>{const e=C(),{state:S,handleSubmit:w}=e,v=g,b=new T(J),f=new B({api:b,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),K=async D=>{const L=k(),d={_id:L,tag:D,sort_tag:D,updated:new Date,created:new Date,id:L};g.push({label:d.tag,value:d.id});const P=[...await b.getData(),d];return await b.setData(P),{label:d.tag,value:d.id}},E=_.useMemo(()=>[{name:"advancedSelection",label:s,required:m,disabled:t,helperText:r,instructionText:o,type:"advancedSelection",inputSettings:{options:a==="Local"?v:void 0,getOptions:a==="DB"?f.getOptions.bind(f):void 0,getOptionsLimit:a==="DB"&&l?l:void 0,createNewOption:c?K:void 0,selectLimit:p}}],[s,m,t,r,o,l,v,a,c,p]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(S,null,"  ")}),n.jsx(M,{...e,buttons:H(w),title:"Advanced Selection Field",fields:E,skeleton:O})]})};i.args={...j.args,optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};i.argTypes={...j.argTypes,optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const u=()=>{const s=C(),{state:m,handleSubmit:O}=s,t=g,o=new T(J),r=new B({api:o,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),a=async c=>{const p=k(),e={_id:p,tag:c,sort_tag:c,updated:new Date,created:new Date,id:p};g.push({label:e.tag,value:e.id});const w=[...await o.getData(),e];return await o.setData(w),{label:e.tag,value:e.id}},l=_.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:t}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:r.getOptions.bind(r),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:t,getOptionsLimit:10,createNewOption:a}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:t,getOptionsLimit:10,selectLimit:2}}],[t]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(m,null,"  ")}),n.jsx(M,{...s,buttons:H(O),title:"Form Title",description:"Description",fields:l})]})};var h,y,N;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Advanced Selection Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(N=(y=i.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var A,F,x;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(x=(F=u.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const q=["Playground","KitchenSink"],Z=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:u,Playground:i,__namedExportsOrder:q,default:R},Symbol.toStringTag,{value:"Module"}));export{Z as s};
