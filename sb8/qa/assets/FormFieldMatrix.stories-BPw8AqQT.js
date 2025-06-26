import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as T,F as j}from"./index-BzvhE4oF.js";import{A as q}from"./Add-DyToAZcG.js";import{C as G}from"./Create-VEUHusTL.js";import{D as H}from"./Delete-C5h5ALy4.js";import{D as J}from"./Drawers-C2K8RuPy.js";import{r as K}from"./renderButtons-BmHfsf_z.js";import{c as A}from"./commonFieldControl-LQDYMh-C.js";import{M as N}from"./useMosaicTranslation-CoWLI8L7.js";import{u as Q}from"./useMosaicSettings-PoFK8XpM.js";import{B as U}from"./Button-Cu24UfKA.js";const W={state:{limit:25,skip:0,filter:{},sort:{name:"title",dir:"asc"},display:"list",activeFilters:[],activeColumns:["image","title","categories","created"]}};({...W.state});const X=[{name:"id",label:"ID"},{name:"description",label:"Description"},{name:"title",label:"Title"}],Y={title:"FormFields/FormFieldMatrix"},Z=({onClose:l,onSave:u,title:f,fields:y,data:M})=>{const c=T({data:M||{}}),{state:p}=c,w=()=>u(p.data);return n.jsx(j,{...c,buttons:[{label:"Cancel",onClick:l,color:"gray",variant:"outlined"},{label:"Save",onClick:w,color:"yellow",variant:"contained"}],title:f,fields:y,onBack:l})},s=({label:l,hideLabel:u,required:f,prepop:y,prepopData:M,disabled:c,instructionText:p,forceInstructionTooltip:w,helperText:b,size:C})=>{const[O,D]=o.useState(!1),[v,V]=o.useState(null),S=T({data:y?M:{}}),{state:a,methods:{setFieldValue:d},handleSubmit:P}=S,[_,h]=o.useState({drawers:[]}),x=o.useCallback(async e=>{h(t=>({...t,drawers:[...t.drawers,e]}))},[]),k=o.useCallback(()=>{D(!1),h(e=>({...e,drawers:[...e.drawers.slice(0,-1)]}))},[]),z=async e=>{var t,r;if(O){const i={id:a.data.formMatrix[v].id,title:e.title,description:e.description},m=[...a.data.formMatrix];m.splice(v,1,i),d({name:"formMatrix",value:m,touched:!0})}else{const m={id:"id"+Math.random().toString(16).slice(2),title:e.title,description:e.description};((r=(t=a.data)==null?void 0:t.formMatrix)==null?void 0:r.length)>0?d({name:"formMatrix",value:[...a.data.formMatrix,m],touched:!0}):d({name:"formMatrix",value:[m],touched:!0})}k()},g=o.useCallback(()=>x({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}]}}),[x]),F=o.useMemo(()=>({noResults:n.jsxs("div",{style:{padding:"1rem 0.5rem",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:10},children:[n.jsxs("div",{children:["Custom"," ",n.jsx("em",{children:"no results"})," ","component."]}),n.jsx(U,{variant:"outlined",color:"gray",label:"Create one",onClick:g})]}),columns:X,primaryActions:[{name:"edit",color:"black",variant:"icon",mIcon:G,onClick:async({data:e})=>{const t=a.data.formMatrix.filter(i=>i.id===e.id),r=a.data.formMatrix.map(i=>i.id).indexOf(e.id);V(r),D(!0),x({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}],data:{title:t[0].title,description:t[0].description}}})}},{name:"delete",color:"black",variant:"icon",mIcon:H,onClick:async({data:e})=>{const t=a.data.formMatrix.filter(r=>r.id!==e.id);d({name:"formMatrix",value:t,touched:!0})}}],sticky:!0,data:a.data.formMatrix,limit:25,onReorder:async e=>{const t=e.map(r=>a.data.formMatrix.find(i=>i.id===r));d({name:"formMatrix",value:t,touched:!0})},display:"list",activeColumns:["id","title","description"]}),[x,g,d,a.data.formMatrix]),B=o.useMemo(()=>[{name:"formMatrix",label:l,hideLabel:u,type:"matrix",required:f,disabled:c,helperText:b,instructionText:p,forceInstructionTooltip:w,size:C,inputSettings:{dataView:F,buttons:[{label:"Add",onClick:g,color:"teal",variant:"text",mIcon:q}]}}],[l,u,f,c,b,p,w,C,F,g]),L=Q();return n.jsxs(n.Fragment,{children:[n.jsx(N.Provider,{value:L,children:n.jsx(j,{...S,buttons:K(P),title:"Matrix Field",fields:B})}),n.jsx(J,{drawers:_.drawers,children:e=>n.jsx(Z,{fields:e.config.fields,onClose:k,onSave:z,title:e.config.title,data:e.config.data})})]})};s.args={...A.args({prepopData:{formMatrix:[{id:"ide6c8d48be717c8",title:"Dog",description:"A four legged animal with a tail that comes in a number of different breeds."}]}}),optionsOrigin:"Local",size:"sm"};s.argTypes={...A.argTypes,optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]}};var E,I,R;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  size
}: typeof Playground.args): ReactElement => {
  const [isEditing, setIsEditing] = useState(false);
  const [indexEdit, setIndexEdit] = useState(null);
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
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
  const onAddClick = useCallback(() => addDrawer({
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
  }), [addDrawer]);
  const gridConfig = useMemo<DataViewProps>(() => ({
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
            data: {
              title: rowToEdit[0].title,
              description: rowToEdit[0].description
            }
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
  }), [addDrawer, onAddClick, setFieldValue, state.data.formMatrix]);
  const fields: FieldDef[] = useMemo(() => [{
    name: "formMatrix",
    label,
    hideLabel,
    type: "matrix",
    required,
    disabled,
    helperText,
    instructionText,
    forceInstructionTooltip,
    size,
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
  }], [label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip, size, gridConfig, onAddClick]);
  const mosaicSettings = useMosaicSettings();
  return <>
            <MosaicContext.Provider value={mosaicSettings}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Matrix Field" fields={fields} />
            </MosaicContext.Provider>
            <Drawers drawers={drawerState.drawers}>
                {drawerDef => {
        return <DrawerEditForm fields={drawerDef.config.fields} onClose={removeDrawer} onSave={addOrEdit} title={drawerDef.config.title} data={drawerDef.config.data} />;
      }}
            </Drawers>
        </>;
}`,...(R=(I=s.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const $=["Playground"],ue=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:$,default:Y},Symbol.toStringTag,{value:"Module"}));export{ue as s};
