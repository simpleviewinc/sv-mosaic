import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as s}from"./index-CDs2tPxN.js";import{u as R,F as I}from"./formUtils-CJK8oCl3.js";import{d as _}from"./Add-4Hn9ciTE.js";import{d as B}from"./Create-oJ86cL9r.js";import{d as q}from"./Delete-DW5ub3Hx.js";import{D as z}from"./Drawers-DI88Xnnf.js";import{r as L}from"./storyUtils-ByV2Bsyv.js";import{M as H}from"./useMosaicTranslation-DFgKwIAM.js";import{u as $}from"./useMosaicSettings-DNVxb4wR.js";import{B as N}from"./Button-B_QyrzNG.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./useThemeProps-DZj2lB8w.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./index-B-yFm4aN.js";import"./Popper-CAohKvIp.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./ButtonBase-cV3lp3kg.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./useToggle-D8hNafRh.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./createSvgIcon-Ci5omaqv.js";import"./extends-CF3RwP-h.js";import"./styled-P6hUx81_.js";import"./emotion-unitless.esm-sScrWPmR.js";const h={id:"default",label:"All",type:"default",state:{limit:25,skip:0,filter:{},sort:{name:"title",dir:"asc"},display:"list",activeFilters:[],activeColumns:["image","title","categories","created"]}};({...h,state:{...h.state}});const G=[{name:"id",label:"ID"},{name:"description",label:"Description"},{name:"title",label:"Title"}],ee={title:"FormFields/FormFieldMatrix"},J=({onClose:l,onSave:p,title:g,fields:u,getFormValues:f})=>{const d=R(),{state:x}=d,w=()=>p(x.data);return n.jsx(I,{...d,buttons:[{label:"Cancel",onClick:l,color:"gray",variant:"outlined"},{label:"Save",onClick:w,color:"yellow",variant:"contained"}],title:g,fields:u,onBack:l,getFormValues:f})},a=({label:l,required:p,skeleton:g,disabled:u,instructionText:f,helperText:d})=>{const[x,w]=s.useState(!1),[y,T]=s.useState(null),b=R(),{state:i,methods:{setFieldValue:m},handleSubmit:V}=b,[j,v]=s.useState({drawers:[]}),M=s.useCallback(async t=>{v(e=>({...e,drawers:[...e.drawers,t]}))},[]),C=s.useCallback(()=>{w(!1),v(t=>({...t,drawers:[...t.drawers.slice(0,-1)]}))},[]),A=async t=>{var e,r;if(x){const o={id:i.data.formMatrix[y].id,title:t.title,description:t.description},c=[...i.data.formMatrix];c.splice(y,1,o),m({name:"formMatrix",value:c,touched:!0})}else{const c={id:"id"+Math.random().toString(16).slice(2),title:t.title,description:t.description};((r=(e=i.data)==null?void 0:e.formMatrix)==null?void 0:r.length)>0?m({name:"formMatrix",value:[...i.data.formMatrix,c],touched:!0}):m({name:"formMatrix",value:[c],touched:!0})}C()},D=()=>M({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}]}}),F={noResults:n.jsxs("div",{style:{padding:"1rem 0.5rem",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:10},children:[n.jsxs("div",{children:["Custom"," ",n.jsx("em",{children:"no results"})," ","component."]}),n.jsx(N,{variant:"outlined",color:"gray",label:"Create one",onClick:D})]}),columns:G,primaryActions:[{name:"edit",color:"black",variant:"icon",mIcon:B,onClick:async({data:t})=>{const e=i.data.formMatrix.filter(o=>o.id===t.id),r=i.data.formMatrix.map(o=>o.id).indexOf(t.id);T(r),w(!0),M({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}],getFormValues:async()=>({title:e[0].title,description:e[0].description})}})}},{name:"delete",color:"black",variant:"icon",mIcon:q,onClick:async({data:t})=>{const e=i.data.formMatrix.filter(r=>r.id!==t.id);m({name:"formMatrix",value:e,touched:!0})}}],sticky:!0,data:i.data.formMatrix,limit:25,onReorder:async t=>{const e=t.map(r=>i.data.formMatrix.find(o=>o.id===r));m({name:"formMatrix",value:e,touched:!0})},display:"list",activeColumns:["id","title","description"]},O=s.useMemo(()=>[{name:"formMatrix",label:l,type:"matrix",required:p,disabled:u,helperText:d,instructionText:f,inputSettings:{dataView:F,buttons:[{label:"Add",onClick:D,color:"teal",variant:"text",mIcon:_}]}}],[p,u,f,d,l,F,x,y]),P=$();return n.jsxs(n.Fragment,{children:[n.jsx(H.Provider,{value:P,children:n.jsx(I,{...b,buttons:L(V),title:"Matrix Field",fields:O,skeleton:g})}),n.jsx(z,{drawers:j.drawers,children:t=>n.jsx(J,{fields:t.config.fields,onClose:C,onSave:A,title:t.config.title,getFormValues:t.config.getFormValues})})]})};a.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};a.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};var k,S,E;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(E=(S=a.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const ne=["Playground"];export{a as Playground,ne as __namedExportsOrder,ee as default};
