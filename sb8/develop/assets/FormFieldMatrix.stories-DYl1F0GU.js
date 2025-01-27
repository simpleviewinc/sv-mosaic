import{j as n}from"./jsx-runtime-DKBipoO1.js";import{r as s}from"./index-P8U4y8pz.js";import{u as I,F as R}from"./Form-BRiCKpcY.js";import{A as _}from"./Add-lnUrTMVS.js";import{C as B}from"./Create-DJ69M9qa.js";import{D as q}from"./Delete-Cax0v_wN.js";import{D as z}from"./Drawers-CshoXEIe.js";import{r as L}from"./renderButtons-BmHfsf_z.js";import{M as H}from"./useMosaicTranslation-DYaYF2Hb.js";import{u as G}from"./useMosaicSettings-aMbqxzzV.js";import{B as J}from"./Button-BBMCWwxG.js";const S={id:"default",label:"All",type:"default",state:{limit:25,skip:0,filter:{},sort:{name:"title",dir:"asc"},display:"list",activeFilters:[],activeColumns:["image","title","categories","created"]}};({...S,state:{...S.state}});const K=[{name:"id",label:"ID"},{name:"description",label:"Description"},{name:"title",label:"Title"}],N={title:"FormFields/FormFieldMatrix"},Q=({onClose:l,onSave:u,title:g,fields:f,getFormValues:p})=>{const d=I(),{state:x}=d,w=()=>u(x.data);return n.jsx(R,{...d,buttons:[{label:"Cancel",onClick:l,color:"gray",variant:"outlined"},{label:"Save",onClick:w,color:"yellow",variant:"contained"}],title:g,fields:f,onBack:l,getFormValues:p})},o=({label:l,required:u,skeleton:g,disabled:f,instructionText:p,helperText:d})=>{const[x,w]=s.useState(!1),[y,T]=s.useState(null),b=I(),{state:i,methods:{setFieldValue:c},handleSubmit:V}=b,[j,v]=s.useState({drawers:[]}),M=s.useCallback(async e=>{v(t=>({...t,drawers:[...t.drawers,e]}))},[]),C=s.useCallback(()=>{w(!1),v(e=>({...e,drawers:[...e.drawers.slice(0,-1)]}))},[]),A=async e=>{var t,r;if(x){const a={id:i.data.formMatrix[y].id,title:e.title,description:e.description},m=[...i.data.formMatrix];m.splice(y,1,a),c({name:"formMatrix",value:m,touched:!0})}else{const m={id:"id"+Math.random().toString(16).slice(2),title:e.title,description:e.description};((r=(t=i.data)==null?void 0:t.formMatrix)==null?void 0:r.length)>0?c({name:"formMatrix",value:[...i.data.formMatrix,m],touched:!0}):c({name:"formMatrix",value:[m],touched:!0})}C()},D=()=>M({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}]}}),F={noResults:n.jsxs("div",{style:{padding:"1rem 0.5rem",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:10},children:[n.jsxs("div",{children:["Custom"," ",n.jsx("em",{children:"no results"})," ","component."]}),n.jsx(J,{variant:"outlined",color:"gray",label:"Create one",onClick:D})]}),columns:K,primaryActions:[{name:"edit",color:"black",variant:"icon",mIcon:B,onClick:async({data:e})=>{const t=i.data.formMatrix.filter(a=>a.id===e.id),r=i.data.formMatrix.map(a=>a.id).indexOf(e.id);T(r),w(!0),M({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}],getFormValues:async()=>({title:t[0].title,description:t[0].description})}})}},{name:"delete",color:"black",variant:"icon",mIcon:q,onClick:async({data:e})=>{const t=i.data.formMatrix.filter(r=>r.id!==e.id);c({name:"formMatrix",value:t,touched:!0})}}],sticky:!0,data:i.data.formMatrix,limit:25,onReorder:async e=>{const t=e.map(r=>i.data.formMatrix.find(a=>a.id===r));c({name:"formMatrix",value:t,touched:!0})},display:"list",activeColumns:["id","title","description"]},O=s.useMemo(()=>[{name:"formMatrix",label:l,type:"matrix",required:u,disabled:f,helperText:d,instructionText:p,inputSettings:{dataView:F,buttons:[{label:"Add",onClick:D,color:"teal",variant:"text",mIcon:_}]}}],[u,f,p,d,l,F,x,y]),P=G();return n.jsxs(n.Fragment,{children:[n.jsx(H.Provider,{value:P,children:n.jsx(R,{...b,buttons:L(V),title:"Matrix Field",fields:O,skeleton:g})}),n.jsx(z,{drawers:j.drawers,children:e=>n.jsx(Q,{fields:e.config.fields,onClose:C,onSave:A,title:e.config.title,getFormValues:e.config.getFormValues})})]})};o.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};o.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};var h,k,E;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText
}: typeof Playground.args): ReactElement => {
  const [isEditing, setIsEditing] = useState(false);
  const [indexEdit, setIndexEdit] = useState(null);
  const controller = useForm();
  const {
    state,
    methods: {
      setFieldValue
    },
    handleSubmit
  } = controller;
  const [drawerState, setDrawerState] = useState({
    drawers: []
  });
  const addDrawer = useCallback(async drawerDef => {
    setDrawerState(state => ({
      ...state,
      drawers: [...state.drawers, drawerDef]
    }));
  }, []);
  const removeDrawer = useCallback(() => {
    setIsEditing(false);
    setDrawerState(state => ({
      ...state,
      drawers: [...state.drawers.slice(0, -1)]
    }));
  }, []);
  const addOrEdit = async data => {
    if (!isEditing) {
      const id = "id" + Math.random().toString(16).slice(2);
      const newRow = {
        id: id,
        title: data.title,
        description: data.description
      };
      if (state.data?.formMatrix?.length > 0) {
        setFieldValue({
          name: "formMatrix",
          value: [...state.data.formMatrix, newRow],
          touched: true
        });
      } else {
        setFieldValue({
          name: "formMatrix",
          value: [newRow],
          touched: true
        });
      }
    } else {
      const editedRow = {
        id: state.data.formMatrix[indexEdit].id,
        title: data.title,
        description: data.description
      };
      const currentRows = [...state.data.formMatrix];
      currentRows.splice(indexEdit, 1, editedRow);
      setFieldValue({
        name: "formMatrix",
        value: currentRows,
        touched: true
      });
    }
    removeDrawer();
  };
  const onAddClick = () => addDrawer({
    config: {
      type: "form",
      title: "Drawer Form",
      fields: [{
        name: "title",
        label: "Title",
        type: "text"
      }, {
        name: "description",
        label: "Description",
        type: "text"
      }]
    }
  });
  const gridConfig: DataViewProps = {
    noResults: <div style={{
      padding: "1rem 0.5rem",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }}>
                <div>
                    Custom
                    {" "}
                    <em>no results</em>
                    {" "}
                    component.
                </div>
                <Button variant="outlined" color="gray" label="Create one" onClick={onAddClick} />
            </div>,
    columns: listColumns,
    primaryActions: [{
      name: "edit",
      color: "black",
      variant: "icon",
      mIcon: CreateIcon,
      onClick: async ({
        data
      }) => {
        const rowToEdit = state.data.formMatrix.filter(row => row.id === data.id);
        const pos = state.data.formMatrix.map(e => e.id).indexOf(data.id);
        setIndexEdit(pos);
        setIsEditing(true);
        addDrawer({
          config: {
            type: "form",
            title: "Drawer Form",
            fields: [{
              name: "title",
              label: "Title",
              type: "text"
            }, {
              name: "description",
              label: "Description",
              type: "text"
            }],
            getFormValues: async () => ({
              title: rowToEdit[0].title,
              description: rowToEdit[0].description
            })
          }
        });
      }
    }, {
      name: "delete",
      color: "black",
      variant: "icon",
      mIcon: DeleteIcon,
      onClick: async ({
        data
      }) => {
        const filteredRows = state.data.formMatrix.filter(row => row.id !== data.id);
        setFieldValue({
          name: "formMatrix",
          value: filteredRows,
          touched: true
        });
      }
    }],
    sticky: true,
    data: state.data.formMatrix,
    limit: 25,
    onReorder: async newRows => {
      const rows = newRows.map(row => state.data.formMatrix.find(element => element.id === row));
      setFieldValue({
        name: "formMatrix",
        value: rows,
        touched: true
      });
    },
    display: "list",
    activeColumns: ["id", "title", "description"]
  };
  const fields: FieldDef[] = useMemo(() => [{
    name: "formMatrix",
    label,
    type: "matrix",
    required,
    disabled,
    helperText,
    instructionText,
    inputSettings: {
      dataView: gridConfig,
      buttons: [{
        label: "Add",
        onClick: onAddClick,
        color: "teal",
        variant: "text",
        mIcon: AddIcon
      }]
    }
  }], [required, disabled, instructionText, helperText, label, gridConfig, isEditing, indexEdit]);
  const mosaicSettings = useMosaicSettings();
  return <>
            <MosaicContext.Provider value={mosaicSettings}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Matrix Field" fields={fields} skeleton={skeleton} />
            </MosaicContext.Provider>
            <Drawers drawers={drawerState.drawers}>
                {drawerDef => {
        return <DrawerEditForm fields={drawerDef.config.fields} onClose={removeDrawer} onSave={addOrEdit} title={drawerDef.config.title} getFormValues={drawerDef.config.getFormValues} />;
      }}
            </Drawers>
        </>;
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const U=["Playground"],oe=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:U,default:N},Symbol.toStringTag,{value:"Module"}));export{oe as s};
