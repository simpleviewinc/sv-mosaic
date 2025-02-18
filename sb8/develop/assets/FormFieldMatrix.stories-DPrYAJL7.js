import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as s}from"./index-Btj5Fd67.js";import{u as I,F as R}from"./index-TRTj_9gV.js";import{A as B}from"./Add-DNdhMQMf.js";import{C as z}from"./Create-Cnbs4xXs.js";import{D as q}from"./Delete-JquqLxtg.js";import{D as L}from"./Drawers-DusmYQAi.js";import{r as G}from"./renderButtons-BmHfsf_z.js";import{c as V}from"./commonFieldControl-DXwRxrKb.js";import{M as H}from"./useMosaicTranslation-DPUDh126.js";import{u as J}from"./useMosaicSettings-CnUp11V7.js";import{B as K}from"./Button-CRbkpCI2.js";const S={id:"default",label:"All",type:"default",state:{limit:25,skip:0,filter:{},sort:{name:"title",dir:"asc"},display:"list",activeFilters:[],activeColumns:["image","title","categories","created"]}};({...S,state:{...S.state}});const N=[{name:"id",label:"ID"},{name:"description",label:"Description"},{name:"title",label:"Title"}],Q={title:"FormFields/FormFieldMatrix"},U=({onClose:l,onSave:u,title:g,fields:f,getFormValues:p})=>{const d=I(),{state:x}=d,w=()=>u(x.data);return n.jsx(R,{...d,buttons:[{label:"Cancel",onClick:l,color:"gray",variant:"outlined"},{label:"Save",onClick:w,color:"yellow",variant:"contained"}],title:g,fields:f,onBack:l,getFormValues:p})},o=({label:l,required:u,skeleton:g,disabled:f,instructionText:p,helperText:d})=>{const[x,w]=s.useState(!1),[y,j]=s.useState(null),v=I(),{state:r,methods:{setFieldValue:c},handleSubmit:T}=v,[A,M]=s.useState({drawers:[]}),C=s.useCallback(async e=>{M(t=>({...t,drawers:[...t.drawers,e]}))},[]),b=s.useCallback(()=>{w(!1),M(e=>({...e,drawers:[...e.drawers.slice(0,-1)]}))},[]),O=async e=>{var t,i;if(x){const a={id:r.data.formMatrix[y].id,title:e.title,description:e.description},m=[...r.data.formMatrix];m.splice(y,1,a),c({name:"formMatrix",value:m,touched:!0})}else{const m={id:"id"+Math.random().toString(16).slice(2),title:e.title,description:e.description};((i=(t=r.data)==null?void 0:t.formMatrix)==null?void 0:i.length)>0?c({name:"formMatrix",value:[...r.data.formMatrix,m],touched:!0}):c({name:"formMatrix",value:[m],touched:!0})}b()},D=()=>C({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}]}}),F={noResults:n.jsxs("div",{style:{padding:"1rem 0.5rem",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:10},children:[n.jsxs("div",{children:["Custom"," ",n.jsx("em",{children:"no results"})," ","component."]}),n.jsx(K,{variant:"outlined",color:"gray",label:"Create one",onClick:D})]}),columns:N,primaryActions:[{name:"edit",color:"black",variant:"icon",mIcon:z,onClick:async({data:e})=>{const t=r.data.formMatrix.filter(a=>a.id===e.id),i=r.data.formMatrix.map(a=>a.id).indexOf(e.id);j(i),w(!0),C({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}],getFormValues:async()=>({title:t[0].title,description:t[0].description})}})}},{name:"delete",color:"black",variant:"icon",mIcon:q,onClick:async({data:e})=>{const t=r.data.formMatrix.filter(i=>i.id!==e.id);c({name:"formMatrix",value:t,touched:!0})}}],sticky:!0,data:r.data.formMatrix,limit:25,onReorder:async e=>{const t=e.map(i=>r.data.formMatrix.find(a=>a.id===i));c({name:"formMatrix",value:t,touched:!0})},display:"list",activeColumns:["id","title","description"]},P=s.useMemo(()=>[{name:"formMatrix",label:l,type:"matrix",required:u,disabled:f,helperText:d,instructionText:p,inputSettings:{dataView:F,buttons:[{label:"Add",onClick:D,color:"teal",variant:"text",mIcon:B}]}}],[u,f,p,d,l,F,x,y]),_=J();return n.jsxs(n.Fragment,{children:[n.jsx(H.Provider,{value:_,children:n.jsx(R,{...v,buttons:G(T),title:"Matrix Field",fields:P,skeleton:g})}),n.jsx(L,{drawers:A.drawers,children:e=>n.jsx(U,{fields:e.config.fields,onClose:b,onSave:O,title:e.config.title,getFormValues:e.config.getFormValues})})]})};o.args={...V.args,optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};o.argTypes={...V.argTypes,optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};var h,k,E;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const W=["Playground"],le=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:W,default:Q},Symbol.toStringTag,{value:"Module"}));export{le as s};
