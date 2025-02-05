import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as _}from"./index-Btj5Fd67.js";import{n as T}from"./index.browser-vcSNLBTf.js";import{u as C,F as H}from"./index-DC7k7Zpe.js";import{r as M}from"./renderButtons-BmHfsf_z.js";import{o as g}from"./options-DJM8a-gX.js";import{M as j,J as k,c as B}from"./MultiSelectHelper-DCrxHpN1.js";const E={title:"FormFields/FormFieldAdvancedSelection"},i=({label:s,required:m,skeleton:O,disabled:t,instructionText:o,helperText:r,optionsOrigin:a,getOptionsLimit:l,createNewOptionsKnob:c,selectLimit:p})=>{const e=C(),{state:S,handleSubmit:w}=e,v=g,b=new k(B),L=new j({api:b,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),J=async f=>{const D=T(),d={_id:D,tag:f,sort_tag:f,updated:new Date,created:new Date,id:D};g.push({label:d.tag,value:d.id});const q=[...await b.getData(),d];return await b.setData(q),{label:d.tag,value:d.id}},K=_.useMemo(()=>[{name:"advancedSelection",label:s,required:m,disabled:t,helperText:r,instructionText:o,type:"advancedSelection",inputSettings:{options:a==="Local"?v:void 0,getOptions:a==="DB"?L.getOptions.bind(L):void 0,getOptionsLimit:a==="DB"&&l?l:void 0,createNewOption:c?J:void 0,selectLimit:p}}],[s,m,t,r,o,l,v,a,c,p]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(S,null,"  ")}),n.jsx(H,{...e,buttons:M(w),title:"Advanced Selection Field",fields:K,skeleton:O})]})};i.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};i.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const u=()=>{const s=C(),{state:m,handleSubmit:O}=s,t=g,o=new k(B),r=new j({api:o,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),a=async c=>{const p=T(),e={_id:p,tag:c,sort_tag:c,updated:new Date,created:new Date,id:p};g.push({label:e.tag,value:e.id});const w=[...await o.getData(),e];return await o.setData(w),{label:e.tag,value:e.id}},l=_.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:t}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:r.getOptions.bind(r),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:t,getOptionsLimit:10,createNewOption:a}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:t,getOptionsLimit:10,selectLimit:2}}],[t]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(m,null,"  ")}),n.jsx(H,{...s,buttons:M(O),title:"Form Title",description:"Description",fields:l})]})};var y,h,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var N,A,F;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const I=["Playground","KitchenSink"],X=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:u,Playground:i,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{X as s};
