import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as a}from"./index-BP8_t0zE.js";import{u as R,F as I}from"./formUtils-CayaUY58.js";import{d as B}from"./Add-DDRv9oNH.js";import{d as _}from"./Create-CT6V4C-f.js";import{d as q}from"./Delete-DMwPTIDr.js";import{D as z}from"./Drawers-Dz-SJSq_.js";import{r as L}from"./storyUtils-ByV2Bsyv.js";import{M as H}from"./useMosaicTranslation-DzvJLSut.js";import{u as $}from"./useMosaicSettings-BpNQoq4J.js";import{B as G}from"./Button-CDqJWCGq.js";import"./FormFieldText.styled-DKoDye3Y.js";import"./theme-CtvfJOCv.js";import"./useThemeProps-Ds-LJhvX.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-CO-dlV3K.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-BxmsGmlx.js";import"./Popper-Cx7DIS0Z.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./DataViewFilterMultiselectDropdownContent-Dhd-ubYC.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./ButtonBase-BVb7KZlV.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-i3PhXCTq.js";import"./useToggle-lipGlewK.js";import"./Spinner-D_slr9_p.js";import"./Chip-wSpTF7XV.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-osRV5K3v.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BeNizQJS.js";import"./TitleWrapper-DJn4aB1e.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-Dv9SgNkb.js";import"./MenuSelect-CGQLQZS-.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dtcy1NrH.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-LbExvKVl.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./createSvgIcon-DzRyHCtm.js";import"./extends-CF3RwP-h.js";import"./styled-BlYH_7wi.js";import"./emotion-unitless.esm-sScrWPmR.js";const h={id:"default",label:"All",type:"default",state:{limit:25,skip:0,filter:{},sort:{name:"title",dir:"asc"},display:"list",activeFilters:[],activeColumns:["image","title","categories","created"]}};({...h,state:{...h.state}});const J=[{name:"id",label:"ID"},{name:"description",label:"Description"},{name:"title",label:"Title"}],ie={title:"FormFields/FormFieldMatrix"},K=({onClose:l,onSave:p,title:g,fields:u,getFormValues:f})=>{const d=R(),{state:x}=d,w=()=>p(x.data);return n.jsx(I,{...d,buttons:[{label:"Cancel",onClick:l,color:"gray",variant:"outlined"},{label:"Save",onClick:w,color:"yellow",variant:"contained"}],title:g,fields:u,onBack:l,getFormValues:f})},s=({label:l,required:p,skeleton:g,disabled:u,instructionText:f,helperText:d})=>{const[x,w]=a.useState(!1),[y,T]=a.useState(null),b=R(),{state:i,methods:{setFieldValue:m},handleSubmit:V}=b,[j,v]=a.useState({drawers:[]}),M=a.useCallback(async t=>{v(e=>({...e,drawers:[...e.drawers,t]}))},[]),C=a.useCallback(()=>{w(!1),v(t=>({...t,drawers:[...t.drawers.slice(0,-1)]}))},[]),A=async t=>{var e,r;if(x){const o={id:i.data.formMatrix[y].id,title:t.title,description:t.description},c=[...i.data.formMatrix];c.splice(y,1,o),m({name:"formMatrix",value:c,touched:!0})}else{const c={id:"id"+Math.random().toString(16).slice(2),title:t.title,description:t.description};((r=(e=i.data)==null?void 0:e.formMatrix)==null?void 0:r.length)>0?m({name:"formMatrix",value:[...i.data.formMatrix,c],touched:!0}):m({name:"formMatrix",value:[c],touched:!0})}C()},D=()=>M({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}]}}),F={noResults:n.jsxs("div",{style:{padding:"1rem 0.5rem",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:10},children:[n.jsxs("div",{children:["Custom"," ",n.jsx("em",{children:"no results"})," ","component."]}),n.jsx(G,{variant:"outlined",color:"gray",label:"Create one",onClick:D})]}),columns:J,primaryActions:[{name:"edit",color:"black",variant:"icon",mIcon:_,onClick:async({data:t})=>{const e=i.data.formMatrix.filter(o=>o.id===t.id),r=i.data.formMatrix.map(o=>o.id).indexOf(t.id);T(r),w(!0),M({config:{type:"form",title:"Drawer Form",fields:[{name:"title",label:"Title",type:"text"},{name:"description",label:"Description",type:"text"}],getFormValues:async()=>({title:e[0].title,description:e[0].description})}})}},{name:"delete",color:"black",variant:"icon",mIcon:q,onClick:async({data:t})=>{const e=i.data.formMatrix.filter(r=>r.id!==t.id);m({name:"formMatrix",value:e,touched:!0})}}],sticky:!0,data:i.data.formMatrix,limit:25,onReorder:async t=>{const e=t.map(r=>i.data.formMatrix.find(o=>o.id===r));m({name:"formMatrix",value:e,touched:!0})},display:"list",activeColumns:["id","title","description"]},O=a.useMemo(()=>[{name:"formMatrix",label:l,type:"matrix",required:p,disabled:u,helperText:d,instructionText:f,inputSettings:{dataView:F,buttons:[{label:"Add",onClick:D,color:"teal",variant:"text",mIcon:B}]}}],[p,u,f,d,l,F,x,y]),P=$();return n.jsxs(n.Fragment,{children:[n.jsx(H.Provider,{value:P,children:n.jsx(I,{...b,buttons:L(V),title:"Matrix Field",fields:O,skeleton:g})}),n.jsx(z,{drawers:j.drawers,children:t=>n.jsx(K,{fields:t.config.fields,onClose:C,onSave:A,title:t.config.title,getFormValues:t.config.getFormValues})})]})};s.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};s.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};var k,S,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const re=["Playground"];export{s as Playground,re as __namedExportsOrder,ie as default};
