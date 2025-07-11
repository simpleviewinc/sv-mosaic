import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as l}from"./index-D0AnReJb.js";import{n as C}from"./index.browser-vcSNLBTf.js";import{u as M,F as H}from"./index-k1Pd4Kly.js";import{r as j}from"./renderButtons-BmHfsf_z.js";import{c as R}from"./commonFieldControl-LQDYMh-C.js";import{m as u}from"./options-DEOzrsxm.js";import{J as k,c as J,M as B}from"./MultiSelectHelper-RZIosFWT.js";const V={title:"FormFields/FormFieldAdvancedSelection"},n=({label:i,hideLabel:m,required:g,prepop:o,prepopData:a,disabled:s,instructionText:O,forceInstructionTooltip:w,helperText:r,optionsType:c,getOptionsLimit:e,createNewOptionsKnob:S,selectLimit:b})=>{const y=M({data:o?a:{}}),{state:K,handleSubmit:E}=y,[f,I]=l.useState(u),v=l.useRef(new k(J)),h=l.useRef(new B({api:v.current,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"})),P=async D=>{const L=C(),p={_id:L,tag:D,sort_tag:D,updated:new Date,created:new Date,id:L};I(G=>[...G,{label:p.tag,value:p.id}]);const z=[...await v.current.getData(),p];return await v.current.setData(z),{label:p.tag,value:p.id}},q=l.useMemo(()=>[{name:"advancedSelection",label:i,hideLabel:m,required:g,disabled:s,helperText:r,instructionText:O,forceInstructionTooltip:w,type:"advancedSelection",inputSettings:{...c==="Synchronous"?{options:f}:{getOptions:h.current.getOptions.bind(h.current),getOptionsLimit:e},createNewOption:S?P:void 0,selectLimit:b}}],[i,m,g,s,r,O,w,e,f,c,S,b]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(K,null,"  ")}),t.jsx(H,{...y,buttons:j(E),title:"Advanced Selection Field",fields:q})]})};n.args={...R.args({prepopData:{advancedSelection:u.slice(0,3)}}),optionsType:"Synchronous",getOptionsLimit:5,createNewOptionsKnob:!0,selectLimit:-1};n.argTypes={...R.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},getOptionsLimit:{name:"Get Options Limit"},createNewOptionsKnob:{name:"Create New Option"},selectLimit:{name:"Select Limit"}};const d=()=>{const i=M(),{state:m,handleSubmit:g}=i,o=u?u:[],a=new k(J),s=new B({api:a,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),O=async r=>{const c=C(),e={_id:c,tag:r,sort_tag:r,updated:new Date,created:new Date,id:c};u.push({label:e.tag,value:e.id});const b=[...await a.getData(),e];return await a.setData(b),{label:e.tag,value:e.id}},w=l.useMemo(()=>[{name:"checkboxOptions",label:"Advanced selection with options prop",type:"advancedSelection",inputSettings:{options:o}},{name:"getOptions",label:"Advanced selection with getOptions prop",type:"advancedSelection",inputSettings:{getOptions:s.getOptions.bind(s),getOptionsLimit:5}},{name:"createNewOption",label:"Advanced selection with createNewOption prop",type:"advancedSelection",inputSettings:{options:o,getOptionsLimit:10,createNewOption:O}},{name:"selectLimitOfOptions",label:"Advanced selection with selectLimit prop (Max 2 options)",type:"advancedSelection",inputSettings:{options:o,getOptionsLimit:10,selectLimit:2}}],[o]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(m,null,"  ")}),t.jsx(H,{...i,buttons:j(g),title:"Form Title",description:"Description",fields:w})]})};var N,A,F;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`({
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
  const [options, setOptions] = React.useState<MosaicLabelValue[]>(mockOptions);
  const categoriesApi = React.useRef(new JSONDB(categories));
  const categoriesHelper = React.useRef(new MultiSelectHelper({
    api: categoriesApi.current,
    labelColumn: "tag",
    valueColumn: "id",
    sortColumn: "sort_tag"
  }));
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
    setOptions(options => [...options, {
      label: newOption.tag,
      value: newOption.id
    }]);
    const data = await categoriesApi.current.getData();
    const newData = [...data, newOption];
    await categoriesApi.current.setData(newData);
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
        getOptions: categoriesHelper.current.getOptions.bind(categoriesHelper.current),
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
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var x,_,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(T=(_=d.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const Q=["Playground","KitchenSink"],oe=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:d,Playground:n,__namedExportsOrder:Q,default:V},Symbol.toStringTag,{value:"Module"}));export{oe as s};
