import{j as p}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{n as D}from"./index.browser-vcSNLBTf.js";import{m as r,a as V,b as I}from"./options-DEOzrsxm.js";import{u as M,F as U}from"./Form-DPJ23PVO.js";import{r as P}from"./renderButtons-BmHfsf_z.js";import{c as G,r as B,m as N}from"./numberTable-_IOpZUZY.js";import{O as q}from"./utils-BR2PSRFh.js";import{t as j}from"./testIds-Dso8kRSM.js";const K={title:"Components/Form"},z=async i=>{const d=`${i}_${r.length}`,n={label:i,value:d};return r.push(n),n},H={textField:"Text field from getFormValues",check:[{label:"Label 1",value:"label_1"},{label:"Label 2",value:"label_2"}],chipSelect:{label:"Label 1",value:"label_1"},dropdownSingle:{label:"The Dark Knight",value:"2008"},phoneSelect:"+15205751152",radio:{label:"Label 2",value:"label_2"},toggle:!0,color:"#a8001791",date:new Date,time:"16:30",address:[{id:1,address1:"8950 N. Oracle Road",city:"Tuczon",postalCode:"85704",country:{label:"United States",value:"US"},state:{label:"Arizona",value:"AZ"},types:[{label:"Physical",value:"physical"}]}],advancedSelection:[{label:"getFormValues 1",value:"getFormValues option 1"},{label:"getFormValues 2",value:"getFormValues option 2"},{label:"getFormValues 3",value:"getFormValues option 3"},{label:"getFormValues 4",value:"getFormValues option 4"}],mapCoordinates:{lat:48.858384,lng:2.294567},upload:[{id:"_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",name:"_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",size:499318,thumbnailUrl:"",fileUrl:""}],textEditor:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet augue augue.",numberTable:N},a=({showState:i,onBack:d,prepop:n,showSave:m,showCancel:b,required:e,disabled:l,showSections:u,collapsed:s,containerHeight:w})=>{const g=M({data:n?H:{}}),{state:x,methods:F,handleSubmit:h}=g,{reset:S}=F;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=q}),[]);const L=async({file:t,onChunkComplete:_,onUploadComplete:O})=>{for(let c=0;c<10;c++)await new Promise(E=>setTimeout(()=>E(_({percent:(c+1)*.1})),300));await O({id:D(),name:t.name,size:t.size,thumbnailUrl:["image/gif","image/jpeg","image/png"].includes(t.type)?URL.createObjectURL(t):"",fileUrl:URL.createObjectURL(t)})},k=async({id:t})=>{alert("DELETED FILE: "+t)},C=o.useMemo(()=>[{name:"textField",label:"Simple Text",type:"text",disabled:l,required:e},{name:"check",label:"Checkbox",type:"checkbox",disabled:l,required:e,inputSettings:{options:r}},{name:"chipSelect",label:"Chip single select",type:"chip",inputSettings:{options:[{label:"Label 1",value:"label_1"},{label:"Label 2",value:"label_2"},{label:"Very long label that should fit: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",value:"label_3"}]},disabled:l,required:e},{name:"dropdownSingle",label:"Dropdown single select",type:"dropdown",disabled:l,required:e,inputSettings:{options:[{label:"The Shawshank Redemption",value:"1994"},{label:"The Godfather",value:"1972"},{label:"The Godfather: Part II",value:"1974"},{label:"The Dark Knight",value:"2008"},{label:"12 Angry Men",value:"1957"},{label:"Schindler's List",value:"1993"},{label:"Pulp Fiction",value:"1994"},{label:"The Lord of the Rings: The Return of the King",value:"2003"},{label:"The Good, the Bad and the Ugly",value:"1966"},{label:"Fight Club",value:"1999"},{label:"The Lord of the Rings: The Fellowship of the Ring",value:"2001"},{label:"Star Wars: Episode V - The Empire Strikes Back",value:"1980"},{label:"Forrest Gump",value:"1994"},{label:"Inception",value:"2010"},{label:"The Lord of the Rings: The Two Towers",value:"2002"},{label:"One Flew Over the Cuckoo's Nest",value:"1975"},{label:"Goodfellas",value:"1990"},{label:"The Matrix",value:"1999"},{label:"Seven Samurai",value:"1954"},{label:"Star Wars: Episode IV - A New Hope",value:"1977"},{label:"City of God",value:"2002"},{label:"Se7en",value:"1995"}]}},{name:"phoneSelect",label:"Phone selection",type:"phone",disabled:l,required:e},{name:"radio",label:"Radio selection",type:"radio",disabled:l,required:e,inputSettings:{options:[{label:"Label 1",value:"label_1"},{label:"Label 2",value:"label_2"},{label:"Label 3",value:"label_3"}]}},{name:"toggle",label:"Toggle field",disabled:l,required:e,type:"toggle",inputSettings:{toggleLabel:"To the side"}},{name:"color",label:"Color selector example",disabled:l,required:e,type:"color"},{name:"date",label:"Single Date Picker",type:"date",disabled:l,required:e},{name:"time",label:"Single Time Picker",type:"time",disabled:l,required:e},{name:"address",label:"Address field",type:"address",inputSettings:{getOptionsCountries:I,getOptionsStates:V,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"},disabled:l,required:e},{name:"advancedSelection",label:"Advanced Selection field",type:"advancedSelection",disabled:l,required:e,inputSettings:{options:r,createNewOption:z}},{name:"textEditor",label:"Text Editor field",type:"textEditor",disabled:l,required:e},{name:"mapCoordinates",label:"Map Coordinates example",type:"mapCoordinates",disabled:l,required:e,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"upload",label:"Upload example",type:"upload",disabled:l,required:e,inputSettings:{onFileAdd:L,onFileDelete:k,limit:void 0}},{name:"numberTable",label:"Number Table",type:"numberTable",required:e,disabled:l,inputSettings:{rowTotalLabel:"TOTAL",columnTotalLabel:"No. Rooms",topLeftLabel:"Day",rows:B,columns:G}}],[l,e]),v=o.useMemo(()=>[{title:"Section 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna elit.",collapsed:s,fields:[[["textField"],["check"]],[["chipSelect"],["dropdownSingle"]],[["address"],[]],[["phoneSelect"],["radio"]]]},{title:"Section 2",description:"Vivamus facilisis dui id nunc ornare, eu pulvinar libero mattis. Fusce volutpat efficitur dui vitae egestas.",collapsed:s,fields:[[[],[],[]],[["toggle"],[],["mapCoordinates"]],[[]],[[],["advancedSelection"]]]},{title:"Section 3",description:"Phasellus egestas urna et ligula venenatis, at laoreet eros volutpat.",collapsed:s,fields:[[["color"],["date"],["time"]],[["textEditor"],[]]]}],[s]),A=o.useMemo(()=>v.slice(0,u),[v,u]),R=o.useMemo(()=>[{name:"reset",label:"Reset",onClick:()=>S(),color:"gray",variant:"outlined"},...P(h,{showCancel:b,showSave:m})],[h,S,b,m]);return p.jsxs("div",{style:{boxShadow:"0 1px 2px 0 rgb(0 0 0 / 0.05)",height:w},children:[i&&p.jsx("pre",{"data-testId":j.FORM_STATE,children:JSON.stringify(x,null,"  ")}),p.jsx(U,{...g,title:"Form Title",onBack:d?()=>alert("Cancelling, going back to previous site"):void 0,description:"Suspendisse condimentum iaculis velit id vestibulum.",fields:C,sections:u>0?A:void 0,buttons:R})]})};a.args={showState:!1,onBack:!1,prepop:!1,showSave:!0,showCancel:!0,required:!0,disabled:!1,showSections:0,collapsed:!1,containerHeight:"100vh",skeleton:!1};a.argTypes={showState:{name:"Show state"},onBack:{name:"Show Back Button"},prepop:{name:"Prepopulate"},showSave:{name:"Show Save Button"},showCancel:{name:"Show Cancel Button"},required:{name:"Required"},disabled:{name:"Disabled",description:"This disabled propery is passed down to the individual fields and does not represent the disabled property on the form state."},showSections:{name:"Show Sections"},collapsed:{name:"Collapsed"},containerHeight:{name:"Container Height"},skeleton:{name:"Skeleton"}};var f,y,T;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`({
  showState,
  onBack,
  prepop,
  showSave,
  showCancel,
  required,
  disabled,
  showSections,
  collapsed,
  containerHeight
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    methods,
    handleSubmit
  } = controller;
  const {
    reset
  } = methods;
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const onFileAdd = async ({
    file,
    onChunkComplete,
    onUploadComplete
  }) => {
    for (let i = 0; i < 10; i++) {
      await new Promise(resolve => setTimeout(() => resolve(onChunkComplete({
        percent: (i + 1) * 0.1
      })), 300));
    }
    await onUploadComplete({
      id: nanoid(),
      name: file.name,
      size: file.size,
      thumbnailUrl: ["image/gif", "image/jpeg", "image/png"].includes(file.type) ? URL.createObjectURL(file) : "",
      fileUrl: URL.createObjectURL(file)
    });
  };
  const onFileDelete = async ({
    id
  }) => {
    alert("DELETED FILE: " + id);
  };
  const fields = useMemo((): FieldDef[] => [{
    name: "textField",
    label: "Simple Text",
    type: "text",
    disabled,
    required
  }, {
    name: "check",
    label: "Checkbox",
    type: "checkbox",
    disabled,
    required,
    inputSettings: {
      options: mockOptions
    }
  }, {
    name: "chipSelect",
    label: "Chip single select",
    type: "chip",
    inputSettings: {
      options: [{
        label: "Label 1",
        value: "label_1"
      }, {
        label: "Label 2",
        value: "label_2"
      }, {
        label: "Very long label that should fit: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        value: "label_3"
      }]
    },
    disabled,
    required
  }, {
    name: "dropdownSingle",
    label: "Dropdown single select",
    type: "dropdown",
    disabled,
    required,
    inputSettings: {
      options: [{
        label: "The Shawshank Redemption",
        value: "1994"
      }, {
        label: "The Godfather",
        value: "1972"
      }, {
        label: "The Godfather: Part II",
        value: "1974"
      }, {
        label: "The Dark Knight",
        value: "2008"
      }, {
        label: "12 Angry Men",
        value: "1957"
      }, {
        label: "Schindler's List",
        value: "1993"
      }, {
        label: "Pulp Fiction",
        value: "1994"
      }, {
        label: "The Lord of the Rings: The Return of the King",
        value: "2003"
      }, {
        label: "The Good, the Bad and the Ugly",
        value: "1966"
      }, {
        label: "Fight Club",
        value: "1999"
      }, {
        label: "The Lord of the Rings: The Fellowship of the Ring",
        value: "2001"
      }, {
        label: "Star Wars: Episode V - The Empire Strikes Back",
        value: "1980"
      }, {
        label: "Forrest Gump",
        value: "1994"
      }, {
        label: "Inception",
        value: "2010"
      }, {
        label: "The Lord of the Rings: The Two Towers",
        value: "2002"
      }, {
        label: "One Flew Over the Cuckoo's Nest",
        value: "1975"
      }, {
        label: "Goodfellas",
        value: "1990"
      }, {
        label: "The Matrix",
        value: "1999"
      }, {
        label: "Seven Samurai",
        value: "1954"
      }, {
        label: "Star Wars: Episode IV - A New Hope",
        value: "1977"
      }, {
        label: "City of God",
        value: "2002"
      }, {
        label: "Se7en",
        value: "1995"
      }]
    }
  }, {
    name: "phoneSelect",
    label: "Phone selection",
    type: "phone",
    disabled,
    required
  }, {
    name: "radio",
    label: "Radio selection",
    type: "radio",
    disabled,
    required,
    inputSettings: {
      options: [{
        label: "Label 1",
        value: "label_1"
      }, {
        label: "Label 2",
        value: "label_2"
      }, {
        label: "Label 3",
        value: "label_3"
      }]
    }
  }, {
    name: "toggle",
    label: "Toggle field",
    disabled,
    required,
    type: "toggle",
    inputSettings: {
      toggleLabel: "To the side"
    }
  }, {
    name: "color",
    label: "Color selector example",
    disabled,
    required,
    type: "color"
  }, {
    name: "date",
    label: "Single Date Picker",
    type: "date",
    disabled,
    required
  }, {
    name: "time",
    label: "Single Time Picker",
    type: "time",
    disabled,
    required
  }, {
    name: "address",
    label: "Address field",
    type: "address",
    inputSettings: {
      getOptionsCountries,
      getOptionsStates,
      googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"
    },
    disabled,
    required
  }, {
    name: "advancedSelection",
    label: "Advanced Selection field",
    type: "advancedSelection",
    disabled,
    required,
    inputSettings: {
      options: mockOptions,
      createNewOption
    }
  }, {
    name: "textEditor",
    label: "Text Editor field",
    type: "textEditor",
    disabled,
    required
  }, {
    name: "mapCoordinates",
    label: "Map Coordinates example",
    type: "mapCoordinates",
    disabled,
    required,
    inputSettings: {
      googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"
    }
  }, {
    name: "upload",
    label: "Upload example",
    type: "upload",
    disabled,
    required,
    inputSettings: {
      onFileAdd,
      onFileDelete,
      limit: undefined
    }
  }, {
    name: "numberTable",
    label: "Number Table",
    type: "numberTable",
    required,
    disabled,
    inputSettings: {
      rowTotalLabel: "TOTAL",
      columnTotalLabel: "No. Rooms",
      topLeftLabel: "Day",
      rows: rows,
      columns: columns
    }
  }], [disabled, required]);
  const sections = useMemo(() => {
    return [{
      title: "Section 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna elit.",
      collapsed,
      fields: [
      // row 1
      [["textField"], ["check"]],
      // row 2
      [["chipSelect"], ["dropdownSingle"]], [["address"], []],
      // row 3
      [["phoneSelect"], ["radio"]]]
    }, {
      title: "Section 2",
      description: "Vivamus facilisis dui id nunc ornare, eu pulvinar libero mattis. Fusce volutpat efficitur dui vitae egestas.",
      collapsed,
      fields: [
      // row 1
      [[], [], []],
      // row 2
      [["toggle"], [], ["mapCoordinates"]], [[]],
      // row 3
      [[], ["advancedSelection"]]]
    }, {
      title: "Section 3",
      description: "Phasellus egestas urna et ligula venenatis, at laoreet eros volutpat.",
      collapsed,
      fields: [
      // row 1
      [["color"], ["date"], ["time"]],
      // row 2
      [["textEditor"], []]]
    }];
  }, [collapsed]);
  const sectionsAmount = useMemo(() => sections.slice(0, showSections), [sections, showSections]);
  const buttons = useMemo<ButtonProps[]>(() => [{
    name: "reset",
    label: "Reset",
    onClick: () => reset(),
    color: "gray",
    variant: "outlined"
  }, ...renderButtons(handleSubmit, {
    showCancel,
    showSave
  })], [handleSubmit, reset, showCancel, showSave]);
  return <div style={{
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    height: containerHeight
  }}>
            {showState && <pre data-testId={testIds.FORM_STATE}>{JSON.stringify(state, null, "  ")}</pre>}
            <Form {...controller} title="Form Title" onBack={onBack ? () => alert("Cancelling, going back to previous site") : undefined} description="Suspendisse condimentum iaculis velit id vestibulum." fields={fields} sections={showSections > 0 ? sectionsAmount : undefined} buttons={buttons} />
        </div>;
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const W=["Playground"],ae=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:W,default:K},Symbol.toStringTag,{value:"Module"}));export{ae as s};
