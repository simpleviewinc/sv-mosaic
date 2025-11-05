import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-ePW8zFKp.js";import{u as T,F as j}from"./index--_cQQTL2.js";import{A as q}from"./Add-C0p6k_sx.js";import{C as G}from"./Create-Dh1EPE8A.js";import{D as H}from"./Delete-PukiRK_S.js";import{D as J}from"./Drawers-BUJTgr0O.js";import{r as K}from"./renderButtons-DP0bGf4C.js";import{c as A}from"./commonFieldControl-LQDYMh-C.js";import{M as N}from"./MosaicContext-CjWw6F81.js";import{u as Q}from"./useMosaicSettings-vwBcn7Hr.js";import{B as U}from"./Button-BUa6dDgD.js";const W={state:{limit:25,skip:0,filter:{},sort:{name:"title",dir:"asc"},display:"list",activeFilters:[],activeColumns:["image","title","categories","created"]}};({...W.state});const X=[{name:"id",label:"ID"},{name:"description",label:"Description"},{name:"title",label:"Title"}],Y={title:"FormFields/FormFieldMatrix"},Z=({onClose:l,onSave:u,title:f,fields:y,data:M})=>{const c=T({data:M||{}}),{state:p}=c,x=()=>u(p.data);return n.jsx(j,{...c,buttons:[{label:"Cancel",onClick:l,intent:"secondary",variant:"contained"},{label:"Save",onClick:x,intent:"primary",variant:"contained"}],title:f,fields:y,onBack:l})},s=({label:l,hideLabel:u,required:f,prepop:y,prepopData:M,disabled:c,instructionText:p,forceInstructionTooltip:x,helperText:D,size:C})=>{const[O,v]=o.useState(!1),[b,V]=o.useState(null),S=T({data:y?M:{}}),{state:i,methods:{setFieldValue:d},handleSubmit:P}=S,[_,h]=o.useState({drawers:[]}),w=o.useCallback(async t=>{h(e=>({...e,drawers:[...e.drawers,t]}))},[]),F=o.useCallback(()=>{v(!1),h(t=>({...t,drawers:[...t.drawers.slice(0,-1)]}))},[]),z=async t=>{var e,a;if(O){const r={id:i.data.formMatrix[b].id,title:t.title,description:t.description},m=[...i.data.formMatrix];m.splice(b,1,r),d({name:"formMatrix",value:m,touched:!0})}else{const m={id:"id"+Math.random().toString(16).slice(2),title:t.title,description:t.description};((a=(e=i.data)==null?void 0:e.formMatrix)==null?void 0:a.length)>0?d({name:"formMatrix",value:[...i.data.formMatrix,m],touched:!0}):d({name:"formMatrix",value:[m],touched:!0})}F()},g=o.useCallback(()=>w({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}]}}),[w]),E=o.useMemo(()=>({noResults:n.jsxs("div",{style:{padding:"1rem 0.5rem",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:10},children:[n.jsxs("div",{children:["Custom"," ",n.jsx("em",{children:"no results"})," ","component."]}),n.jsx(U,{variant:"contained",intent:"secondary",label:"Create one",onClick:g})]}),columns:X,primaryActions:[{name:"edit",intent:"secondary",variant:"text",tooltip:"Edit",mIcon:G,onClick:async({data:t})=>{const e=i.data.formMatrix.filter(r=>r.id===t.id),a=i.data.formMatrix.map(r=>r.id).indexOf(t.id);V(a),v(!0),w({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}],data:{title:e[0].title,description:e[0].description}}})}},{name:"delete",intent:"secondary",variant:"text",tooltip:"Delete",mIcon:H,onClick:async({data:t})=>{const e=i.data.formMatrix.filter(a=>a.id!==t.id);d({name:"formMatrix",value:e,touched:!0})}}],sticky:!0,data:i.data.formMatrix,limit:25,onReorder:async t=>{const e=t.map(a=>i.data.formMatrix.find(r=>r.id===a));d({name:"formMatrix",value:e,touched:!0})},display:"list",activeColumns:["id","title","description"]}),[w,g,d,i.data.formMatrix]),B=o.useMemo(()=>[{name:"formMatrix",label:l,hideLabel:u,type:"matrix",required:f,disabled:c,helperText:D,instructionText:p,forceInstructionTooltip:x,size:C,inputSettings:{dataView:E,buttons:[{label:"Add",onClick:g,intent:"info",variant:"text",mIcon:q}]}}],[l,u,f,c,D,p,x,C,E,g]),L=Q();return n.jsxs(n.Fragment,{children:[n.jsx(N.Provider,{value:L,children:n.jsx(j,{...S,buttons:K(P),title:"Matrix Field",fields:B})}),n.jsx(J,{drawers:_.drawers,children:t=>n.jsx(Z,{fields:t.config.fields,onClose:F,onSave:z,title:t.config.title,data:t.config.data})})]})};s.args={...A.args({prepopData:{formMatrix:[{id:"ide6c8d48be717c8",title:"Dog",description:"A four legged animal with a tail that comes in a number of different breeds."}]}}),optionsOrigin:"Local",size:"sm"};s.argTypes={...A.argTypes,optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]}};var k,I,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
                <Button variant="contained" intent="secondary" label="Create one" onClick={onAddClick} />
            </div>,
    columns: listColumns,
    primaryActions: [{
      name: "edit",
      intent: "secondary",
      variant: "text",
      tooltip: "Edit",
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
      intent: "secondary",
      variant: "text",
      tooltip: "Delete",
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
        intent: "info",
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
}`,...(R=(I=s.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const $=["Playground"],ut=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:$,default:Y},Symbol.toStringTag,{value:"Module"}));export{ut as s};
