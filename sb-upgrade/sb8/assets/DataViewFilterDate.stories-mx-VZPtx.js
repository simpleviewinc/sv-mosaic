import{j as s}from"./jsx-runtime-qGIIFXMu.js";import{r as _}from"./index-CDs2tPxN.js";import{D as m}from"./index-B-tuydVl.js";import"./theme-tUuL1bpb.js";import"./ColorSelected-CdqgCvRo.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./useThemeProps-DZj2lB8w.js";import"./formControlState-Bqc-R5cL.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useControlled-CJDj4WFd.js";import"./createSvgIcon-Ca3CxB0T.js";import"./reactTools-i2anJKce.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./createSvgIcon-BGEpRDBf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-CWuiCQwo.js";import"./Button-B_QyrzNG.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./useToggle-D8hNafRh.js";import"./debounce-Dt4LOG5H.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./formUtils-CJK8oCl3.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const fe={title:"Components/DataViewFilterDate"},b=[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Tomorrow",value:"tomorrow"},{label:"A really really long time ago",value:"a_really_really_long_time_ago"},{label:"Last year",value:"last_year"},{label:"Last 2 years",value:"last_2_years"},{label:"Last 3 years",value:"last_3_years"},{label:"Last 4 years",value:"last_4_years"},{label:"Last 5 years",value:"last_5_years"},{label:"Last 6 years",value:"last_6_years"},{label:"Last 7 years",value:"last_7_years"},{label:"Last 8 years",value:"last_8_years"},{label:"Last 9 years",value:"last_9_years"}],t=({showOptions:a})=>{const[l,i]=_.useState({}),r=b.slice(0,a),n=function(p){i(p)},e=()=>{};return s.jsx(m,{label:"Date filter example",data:l,args:{options:a>0?r:void 0},onRemove:e,onChange:n})};t.args={showOptions:0};t.argTypes={showOptions:{name:"Number of options to show",control:{type:"range",min:0,max:b.length}}};const o=()=>{const[a,l]=_.useState({regular:{},options:{}}),i=[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Tomorrow",value:"tomorrow"},{label:"Last year",value:"last_year"},{label:"Last 2 years",value:"last_2_years"},{label:"Last 3 years",value:"last_3_years"}],r=function(e,p){const f={...a,[e]:p};l(f)},n=()=>{};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[s.jsx(m,{label:"Regular Date filter",data:a.regular,onRemove:n,onChange:e=>r("regular",e),args:{options:void 0}}),s.jsx(m,{label:"Date filter with options",data:a.options,args:{options:i},onRemove:n,onChange:e=>r("options",e)})]})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var y,d,u;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`({
  showOptions
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState({});
  const options = optionLibrary.slice(0, showOptions);
  const onChange = function (data) {
    setState(data);
  };
  const onRemove = () => undefined;
  return <DataViewFilterDate label="Date filter example" data={state} args={{
    options: showOptions > 0 ? options : undefined
  }} onRemove={onRemove} onChange={onChange} />;
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,g,v;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
  const [state, setState] = useState({
    regular: {},
    options: {}
  });
  const options: MosaicLabelValue[] = [{
    label: "Today",
    value: "today"
  }, {
    label: "Yesterday",
    value: "yesterday"
  }, {
    label: "Tomorrow",
    value: "tomorrow"
  }, {
    label: "Last year",
    value: "last_year"
  }, {
    label: "Last 2 years",
    value: "last_2_years"
  }, {
    label: "Last 3 years",
    value: "last_3_years"
  }];
  const onChange = function (type, data) {
    const newState = {
      ...state,
      [type]: data
    };
    setState(newState);
  };
  const onRemove = () => undefined;
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
            <DataViewFilterDate label="Regular Date filter" data={state.regular} onRemove={onRemove} onChange={data => onChange("regular", data)} args={{
      options: undefined
    }} />
            <DataViewFilterDate label="Date filter with options" data={state.options} args={{
      options
    }} onRemove={onRemove} onChange={data => onChange("options", data)} />
        </div>;
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const he=["Playground","KitchenSink"];export{o as KitchenSink,t as Playground,he as __namedExportsOrder,fe as default};
