import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as I,F as R}from"./Form-CgwovX7A.js";import{A as B}from"./Add-fnxyn5lZ.js";import{C as z}from"./Create-C3twQYnV.js";import{D as q}from"./Delete-BQJpjAkE.js";import{D as L}from"./Drawers-CwA35hsb.js";import{r as G}from"./renderButtons-BmHfsf_z.js";import{c as j}from"./commonFieldControl-LQDYMh-C.js";import{M as H}from"./useMosaicTranslation-CoWLI8L7.js";import{u as J}from"./useMosaicSettings-PoFK8XpM.js";import{B as K}from"./Button-DuPZ_syw.js";const N={state:{limit:25,skip:0,filter:{},sort:{name:"title",dir:"asc"},display:"list",activeFilters:[],activeColumns:["image","title","categories","created"]}};({...N.state});const Q=[{name:"id",label:"ID"},{name:"description",label:"Description"},{name:"title",label:"Title"}],U={title:"FormFields/FormFieldMatrix"},W=({onClose:l,onSave:u,title:g,fields:y,data:f})=>{const c=I({data:f||{}}),{state:p}=c,M=()=>u(p.data);return n.jsx(R,{...c,buttons:[{label:"Cancel",onClick:l,color:"gray",variant:"outlined"},{label:"Save",onClick:M,color:"yellow",variant:"contained"}],title:g,fields:y,onBack:l})},s=({label:l,required:u,prepop:g,prepopData:y,disabled:f,instructionText:c,helperText:p})=>{const[M,C]=o.useState(!1),[D,T]=o.useState(null),b=I({data:g?y:{}}),{state:a,methods:{setFieldValue:d},handleSubmit:A}=b,[O,v]=o.useState({drawers:[]}),w=o.useCallback(async e=>{v(t=>({...t,drawers:[...t.drawers,e]}))},[]),h=o.useCallback(()=>{C(!1),v(e=>({...e,drawers:[...e.drawers.slice(0,-1)]}))},[]),V=async e=>{var t,r;if(M){const i={id:a.data.formMatrix[D].id,title:e.title,description:e.description},m=[...a.data.formMatrix];m.splice(D,1,i),d({name:"formMatrix",value:m,touched:!0})}else{const m={id:"id"+Math.random().toString(16).slice(2),title:e.title,description:e.description};((r=(t=a.data)==null?void 0:t.formMatrix)==null?void 0:r.length)>0?d({name:"formMatrix",value:[...a.data.formMatrix,m],touched:!0}):d({name:"formMatrix",value:[m],touched:!0})}h()},x=o.useCallback(()=>w({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}]}}),[w]),S=o.useMemo(()=>({noResults:n.jsxs("div",{style:{padding:"1rem 0.5rem",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:10},children:[n.jsxs("div",{children:["Custom"," ",n.jsx("em",{children:"no results"})," ","component."]}),n.jsx(K,{variant:"outlined",color:"gray",label:"Create one",onClick:x})]}),columns:Q,primaryActions:[{name:"edit",color:"black",variant:"icon",mIcon:z,onClick:async({data:e})=>{const t=a.data.formMatrix.filter(i=>i.id===e.id),r=a.data.formMatrix.map(i=>i.id).indexOf(e.id);T(r),C(!0),w({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}],data:{title:t[0].title,description:t[0].description}}})}},{name:"delete",color:"black",variant:"icon",mIcon:q,onClick:async({data:e})=>{const t=a.data.formMatrix.filter(r=>r.id!==e.id);d({name:"formMatrix",value:t,touched:!0})}}],sticky:!0,data:a.data.formMatrix,limit:25,onReorder:async e=>{const t=e.map(r=>a.data.formMatrix.find(i=>i.id===r));d({name:"formMatrix",value:t,touched:!0})},display:"list",activeColumns:["id","title","description"]}),[w,x,d,a.data.formMatrix]),P=o.useMemo(()=>[{name:"formMatrix",label:l,type:"matrix",required:u,disabled:f,helperText:p,instructionText:c,inputSettings:{dataView:S,buttons:[{label:"Add",onClick:x,color:"teal",variant:"text",mIcon:B}]}}],[l,u,f,p,c,S,x]),_=J();return n.jsxs(n.Fragment,{children:[n.jsx(H.Provider,{value:_,children:n.jsx(R,{...b,buttons:G(A),title:"Matrix Field",fields:P})}),n.jsx(L,{drawers:O.drawers,children:e=>n.jsx(W,{fields:e.config.fields,onClose:h,onSave:V,title:e.config.title,data:e.config.data})})]})};s.args={...j.args({prepopData:{formMatrix:[{id:"ide6c8d48be717c8",title:"Dog",description:"A four legged animal with a tail that comes in a number of different breeds."}]}}),optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};s.argTypes={...j.argTypes,optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};var k,F,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(E=(F=s.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const X=["Playground"],le=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:X,default:U},Symbol.toStringTag,{value:"Module"}));export{le as s};
