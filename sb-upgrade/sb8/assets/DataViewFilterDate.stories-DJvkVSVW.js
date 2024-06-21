import{j as s}from"./jsx-runtime-qGIIFXMu.js";import{r as b}from"./index-CDs2tPxN.js";import{D as m}from"./index-DmVUeKmR.js";import"./theme-tUuL1bpb.js";import"./ColorSelected-C5oUGWlB.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./useThemeProps-DZj2lB8w.js";import"./formControlState-Bqc-R5cL.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useControlled-CJDj4WFd.js";import"./createSvgIcon-Ca3CxB0T.js";import"./reactTools-i2anJKce.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./createSvgIcon-BGEpRDBf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-CWuiCQwo.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./Button-jXQJtfPH.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./formUtils-8tzQoWfa.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./DataViewPrimaryFilter-DONY8g58.js";const Dt={title:"Components/DataViewFilterDate"},_=[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Tomorrow",value:"tomorrow"},{label:"A really really long time ago",value:"a_really_really_long_time_ago"},{label:"Last year",value:"last_year"},{label:"Last 2 years",value:"last_2_years"},{label:"Last 3 years",value:"last_3_years"},{label:"Last 4 years",value:"last_4_years"},{label:"Last 5 years",value:"last_5_years"},{label:"Last 6 years",value:"last_6_years"},{label:"Last 7 years",value:"last_7_years"},{label:"Last 8 years",value:"last_8_years"},{label:"Last 9 years",value:"last_9_years"}],a=({showOptions:e})=>{const[l,i]=b.useState({}),o=_.slice(0,e),r=function(p){i(p)},t=()=>{};return s.jsx(m,{label:"Date filter example",data:l,args:{options:e>0?o:void 0},onRemove:t,onChange:r})};a.args={showOptions:0};a.argTypes={showOptions:{name:"Number of options to show",control:{type:"range",min:0,max:_.length}}};const n=()=>{const[e,l]=b.useState({regular:{},options:{}}),i=[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Tomorrow",value:"tomorrow"},{label:"Last year",value:"last_year"},{label:"Last 2 years",value:"last_2_years"},{label:"Last 3 years",value:"last_3_years"}],o=function(t,p){const f={...e,[t]:p};l(f)},r=()=>{};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[s.jsx(m,{label:"Regular Date filter",data:e.regular,onRemove:r,onChange:t=>o("regular",t),args:{options:void 0}}),s.jsx(m,{label:"Date filter with options",data:e.options,args:{options:i},onRemove:r,onChange:t=>o("options",t)})]})};var u,y,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var c,g,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const xt=["Playground","KitchenSink"];export{n as KitchenSink,a as Playground,xt as __namedExportsOrder,Dt as default};
