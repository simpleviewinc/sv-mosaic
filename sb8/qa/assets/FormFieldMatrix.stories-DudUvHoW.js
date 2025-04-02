import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as o}from"./index-Btj5Fd67.js";import{u as R,F as j}from"./Form-DsDAv5pr.js";import{A as z}from"./Add-DNdhMQMf.js";import{C as q}from"./Create-Cnbs4xXs.js";import{D as L}from"./Delete-JquqLxtg.js";import{D as G}from"./Drawers-Be2smzkp.js";import{r as H}from"./renderButtons-BmHfsf_z.js";import{c as T}from"./commonFieldControl-LQDYMh-C.js";import{M as J}from"./useMosaicTranslation-C-FZRKWr.js";import{u as K}from"./useMosaicSettings-DhSkhEfg.js";import{B as N}from"./Button-DxOHnzJo.js";const k={id:"default",label:"All",type:"default",state:{limit:25,skip:0,filter:{},sort:{name:"title",dir:"asc"},display:"list",activeFilters:[],activeColumns:["image","title","categories","created"]}};({...k,state:{...k.state}});const Q=[{name:"id",label:"ID"},{name:"description",label:"Description"},{name:"title",label:"Title"}],U={title:"FormFields/FormFieldMatrix"},W=({onClose:l,onSave:u,title:g,fields:y,data:f})=>{const c=R({data:f||{}}),{state:p}=c,M=()=>u(p.data);return n.jsx(j,{...c,buttons:[{label:"Cancel",onClick:l,color:"gray",variant:"outlined"},{label:"Save",onClick:M,color:"yellow",variant:"contained"}],title:g,fields:y,onBack:l})},s=({label:l,required:u,prepop:g,prepopData:y,disabled:f,instructionText:c,helperText:p})=>{const[M,C]=o.useState(!1),[b,A]=o.useState(null),D=R({data:g?y:{}}),{state:a,methods:{setFieldValue:d},handleSubmit:O}=D,[V,v]=o.useState({drawers:[]}),w=o.useCallback(async e=>{v(t=>({...t,drawers:[...t.drawers,e]}))},[]),h=o.useCallback(()=>{C(!1),v(e=>({...e,drawers:[...e.drawers.slice(0,-1)]}))},[]),P=async e=>{var t,r;if(M){const i={id:a.data.formMatrix[b].id,title:e.title,description:e.description},m=[...a.data.formMatrix];m.splice(b,1,i),d({name:"formMatrix",value:m,touched:!0})}else{const m={id:"id"+Math.random().toString(16).slice(2),title:e.title,description:e.description};((r=(t=a.data)==null?void 0:t.formMatrix)==null?void 0:r.length)>0?d({name:"formMatrix",value:[...a.data.formMatrix,m],touched:!0}):d({name:"formMatrix",value:[m],touched:!0})}h()},x=o.useCallback(()=>w({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}]}}),[w]),S=o.useMemo(()=>({noResults:n.jsxs("div",{style:{padding:"1rem 0.5rem",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:10},children:[n.jsxs("div",{children:["Custom"," ",n.jsx("em",{children:"no results"})," ","component."]}),n.jsx(N,{variant:"outlined",color:"gray",label:"Create one",onClick:x})]}),columns:Q,primaryActions:[{name:"edit",color:"black",variant:"icon",mIcon:q,onClick:async({data:e})=>{const t=a.data.formMatrix.filter(i=>i.id===e.id),r=a.data.formMatrix.map(i=>i.id).indexOf(e.id);A(r),C(!0),w({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}],data:{title:t[0].title,description:t[0].description}}})}},{name:"delete",color:"black",variant:"icon",mIcon:L,onClick:async({data:e})=>{const t=a.data.formMatrix.filter(r=>r.id!==e.id);d({name:"formMatrix",value:t,touched:!0})}}],sticky:!0,data:a.data.formMatrix,limit:25,onReorder:async e=>{const t=e.map(r=>a.data.formMatrix.find(i=>i.id===r));d({name:"formMatrix",value:t,touched:!0})},display:"list",activeColumns:["id","title","description"]}),[w,x,d,a.data.formMatrix]),_=o.useMemo(()=>[{name:"formMatrix",label:l,type:"matrix",required:u,disabled:f,helperText:p,instructionText:c,inputSettings:{dataView:S,buttons:[{label:"Add",onClick:x,color:"teal",variant:"text",mIcon:z}]}}],[l,u,f,p,c,S,x]),B=K();return n.jsxs(n.Fragment,{children:[n.jsx(J.Provider,{value:B,children:n.jsx(j,{...D,buttons:H(O),title:"Matrix Field",fields:_})}),n.jsx(G,{drawers:V.drawers,children:e=>n.jsx(W,{fields:e.config.fields,onClose:h,onSave:P,title:e.config.title,data:e.config.data})})]})};s.args={...T.args({prepopData:{formMatrix:[{id:"ide6c8d48be717c8",title:"Dog",description:"A four legged animal with a tail that comes in a number of different breeds."}]}}),optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};s.argTypes={...T.argTypes,optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};var F,E,I;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  helperText
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
  }], [label, required, disabled, helperText, instructionText, gridConfig, onAddClick]);
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
}`,...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const X=["Playground"],le=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:X,default:U},Symbol.toStringTag,{value:"Module"}));export{le as s};
