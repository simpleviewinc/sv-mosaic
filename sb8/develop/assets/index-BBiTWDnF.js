import{r as u,R as t}from"./index-D0AnReJb.js";import{s as m}from"./styled-components.browser.esm-B06rF3P8.js";import{u as T,f as D,F as _,g as C,h as x}from"./index-ImAHDg63.js";import{D as b}from"./DataViewPrimaryFilter-NURcwxSO.js";import{B as y,t as A}from"./sizes-HwDk6ODv.js";import{t as h}from"./testIds-Dso8kRSM.js";import{a as F,D as w}from"./FormFieldText.styled-1uP8QWr0.js";import{a as O}from"./Button-Bb1YkNRl.js";import{a as v}from"./formats-CMvQHWsT.js";import{a as V}from"./useMosaicTranslation-CoWLI8L7.js";const I=m.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${y.sm};
`,R=m.div`
	display: flex;
	flex-direction: row;
`,k=m.div`
	display: flex;
	flex-direction: column;
`,N=m.ul`
	border-right: 2px solid ${A.newColors.grey2[100]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,$=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:y.sm}];function B(e){const l=T({data:{rangeStart:"rangeStart"in e?e.rangeStart:void 0,rangeEnd:"rangeEnd"in e?e.rangeEnd:void 0}}),{state:o,methods:{setFormValues:r}}=l,{rangeStart:d,rangeEnd:n}=o.data,[S,g]=u.useState("selectedOption"in e?e.selectedOption:void 0),i=u.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:n},validators:[{fn:D,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:d},validators:[{fn:D,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[n,d]),a=u.useCallback(c=>{e.onChange({option:c}),e.onClose()},[e.onChange,e.onClose]),s=u.useCallback(()=>{r({values:{rangeStart:void 0,rangeEnd:void 0},validate:!0}),g(void 0)},[r]),f=u.useCallback(()=>{!d&&!n?e.onChange(void 0):e.onChange({rangeStart:d,rangeEnd:n}),e.onClose()},[e.onChange,e.onClose,d,n]),E=Object.values(o.errors).filter(Boolean).length>0;return t.createElement(R,{"data-testid":h.DATA_VIEW_FILTER_DATE_CONTENT},"options"in e&&e.options&&t.createElement(k,null,t.createElement(N,{"data-testid":h.DATA_VIEW_FILTER_DATE_OPTIONS},e.options.map(c=>t.createElement(O,{key:c.value,label:c.label,selected:S===c.value,color:"blue",onClick:()=>a(c.value),truncateText:!0,title:!0})))),t.createElement(I,null,t.createElement("div",{"data-testid":"dataview-filter-date-inputs"},t.createElement(_,{...l,fields:i,sections:$,fullHeight:!1,spacing:"compact"})),t.createElement(F,{onApply:f,onClear:s,disableApply:E})))}const L=m.span``;function X(e){var l,o,r;const[d,n]=u.useState(null),S=function(a){n(a.currentTarget)},g=function(){n(null)};let i;if(e.data){if("rangeStart"in e.data||"rangeEnd"in e.data){const a=e.data.rangeStart!==void 0,s=e.data.rangeEnd!==void 0,f=a?C(e.data.rangeStart,v):void 0,E=s?C(e.data.rangeEnd,v):void 0;x(e.data.rangeStart,e.data.rangeEnd)?i=f:a&&s?i=`${f} - ${E}`:a?i=`from ${f}`:i=`to ${E}`}else if("option"in e.data&&e.data.option!==void 0&&e.args.options!==void 0){const a=e.args.options.find(({value:s})=>"option"in e.data&&s===e.data.option);a&&(i=a.label)}}return t.createElement(L,null,t.createElement(b,{label:e.label,value:i,onClick:S}),t.createElement(w,{anchorEl:d,onClose:g},t.createElement(B,{onClose:g,onChange:e.onChange,rangeStart:e.data&&"rangeStart"in e.data?(l=e.data)===null||l===void 0?void 0:l.rangeStart:void 0,rangeEnd:e.data&&"rangeEnd"in e.data?(o=e.data)===null||o===void 0?void 0:o.rangeEnd:void 0,options:e.args.options,selectedOption:e.data&&"option"in e.data?(r=e.data)===null||r===void 0?void 0:r.option:void 0,minDate:e==null?void 0:e.args.minDate})))}const M={choose_a_date___:"Choose a date..."},W={en:M};V({prefix:"DataViewFilterDate",bundle:W});export{X as D};
