import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as d}from"./index-ePW8zFKp.js";import{n as k}from"./index.browser-vcSNLBTf.js";import{u as j,F as P}from"./index-C9DrSpxx.js";import{r as J}from"./renderButtons-DP0bGf4C.js";import{c as B}from"./commonFieldControl-LQDYMh-C.js";import{m}from"./options-DEOzrsxm.js";import{J as K,c as f,M as E}from"./MultiSelectHelper-DgYfTDKm.js";const Q={title:"FormFields/FormFieldAdvancedSelection"},n=({label:i,hideLabel:g,required:O,prepop:o,prepopData:a,disabled:s,instructionText:w,forceInstructionTooltip:b,helperText:r,optionsType:l,createNewOptionsKnob:e,selectLimit:y,itemsPerLoad:S,totalAvailableOptions:h})=>{const L=j({data:o?a:{}}),{state:I,handleSubmit:R}=L,[N,q]=d.useState(m),{categoriesApi:A,categoriesHelper:D}=d.useMemo(()=>{const c=new K(h>-1?f.slice(0,h):f),v=new E({api:c,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"});return{categoriesApi:c,categoriesHelper:v}},[h]),F=d.useCallback(async c=>{const v=k(),p={_id:v,tag:c,sort_tag:c,updated:new Date,created:new Date,id:v};q(G=>[...G,{label:p.tag,value:p.id}]);const V=[...await A.getData(),p];return await A.setData(V),{label:p.tag,value:p.id}},[A]),z=d.useMemo(()=>[{name:"advancedSelection",label:i,hideLabel:g,required:O,disabled:s,helperText:r,instructionText:w,forceInstructionTooltip:b,type:"advancedSelection",inputSettings:{...l==="Synchronous"?{options:N}:{getOptions:D.getOptions.bind(D),getOptionsLimit:S},createNewOption:e?F:void 0,selectLimit:y}}],[i,g,O,s,r,w,b,l,N,D,S,e,F,y]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(I,null,"  ")}),t.jsx(P,{...L,buttons:J(R),title:"Advanced Selection Field",fields:z})]})};n.args={...B.args({prepopData:{advancedSelection:m.slice(0,3)}}),optionsType:"Synchronous",createNewOptionsKnob:!0,selectLimit:-1,itemsPerLoad:5,totalAvailableOptions:-1};n.argTypes={...B.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"},itemsPerLoad:{name:"Items Per Load"},totalAvailableOptions:{name:"Total Available Options"}};const u=()=>{const i=j(),{state:g,handleSubmit:O}=i,o=m?m:[],a=new K(f),s=new E({api:a,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),w=async r=>{const l=k(),e={_id:l,tag:r,sort_tag:r,updated:new Date,created:new Date,id:l};m.push({label:e.tag,value:e.id});const S=[...await a.getData(),e];return await a.setData(S),{label:e.tag,value:e.id}},b=d.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:o}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:s.getOptions.bind(s),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:o,getOptionsLimit:10,createNewOption:w}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:o,getOptionsLimit:10,selectLimit:2}}],[o]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(g,null,"  ")}),t.jsx(P,{...i,buttons:J(O),title:"Form Title",description:"Description",fields:b})]})};var x,_,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`({
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
  createNewOptionsKnob,
  selectLimit,
  itemsPerLoad,
  totalAvailableOptions
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
  const [options, setOptions] = React.useState<MosaicLabelValue[]>(mockOptions);
  const {
    categoriesApi,
    categoriesHelper
  } = useMemo(() => {
    const categoriesApi = new JSONDB(totalAvailableOptions > -1 ? categories.slice(0, totalAvailableOptions) : categories);
    const categoriesHelper = new MultiSelectHelper({
      api: categoriesApi,
      labelColumn: "tag",
      valueColumn: "id",
      sortColumn: "sort_tag"
    });
    return {
      categoriesApi,
      categoriesHelper
    };
  }, [totalAvailableOptions]);
  const createNewOption = React.useCallback(async newOptionLabel => {
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
    setOptions(options => [...options, {
      label: newOption.tag,
      value: newOption.id
    }]);
    const data = await categoriesApi.getData();
    const newData = [...data, newOption];
    await categoriesApi.setData(newData);
    return {
      label: newOption.tag,
      value: newOption.id
    };
  }, [categoriesApi]);
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
        getOptionsLimit: itemsPerLoad
      }),
      createNewOption: createNewOptionsKnob ? createNewOption : undefined,
      selectLimit
    }
  }], [label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip, optionsType, options, categoriesHelper, itemsPerLoad, createNewOptionsKnob, createNewOption, selectLimit]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Advanced Selection Field" fields={fields} />
        </>;
}`,...(T=(_=n.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var C,H,M;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const U=["Playground","KitchenSink"],ie=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:u,Playground:n,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{ie as s};
