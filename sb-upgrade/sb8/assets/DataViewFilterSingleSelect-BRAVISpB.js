import{j as a}from"./jsx-runtime-qGIIFXMu.js";import{r as c}from"./index-CDs2tPxN.js";import{s as h}from"./theme-tUuL1bpb.js";import{D as v}from"./DataViewPrimaryFilter-BcJhbbuH.js";import{b as y}from"./Button-B_QyrzNG.js";import{M as V}from"./MenuSelect-Bs7eM6mM.js";function d(e){return a.jsx(y,{anchorEl:e.anchorEl,open:!!e.anchorEl,onClose:e.onClose,children:e.children})}d.__docgenInfo={description:"",methods:[],displayName:"DataViewFilterSingleSelectContent",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},anchorEl:{required:!1,tsType:{name:"HTMLElement"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S=h.span``;function D(e){var l,u;const[n,r]=c.useState({anchorEl:null,selected:void 0,options:[]});if(e.args.required&&!e.data.value)throw new Error("Invalid use-case, a value is required but none was provided");const i=(l=e.data)==null?void 0:l.value;c.useEffect(()=>{let t=!0;async function g(){const w=await e.args.getSelected(i),f=await e.args.getOptions();r({...n,options:f.docs,selected:w})}return t&&g(),()=>{t=!1}},[e.data]);const m=function(t){r({...n,anchorEl:t.currentTarget})},o=function(){r({...n,anchorEl:null})};let s;n.selected!==void 0&&(s=n.selected.label);const p=function(t){t===""||t===void 0?e.onChange(void 0):e.onChange({value:t}),o()};return a.jsxs(S,{children:[a.jsx(v,{label:e.label,value:s,onClick:m}),a.jsx(d,{onClose:o,anchorEl:n.anchorEl,children:a.jsx(V,{placeholder:(u=e.args)!=null&&u.required?void 0:"Any...",value:i,options:n.options,onChange:p})})]})}D.__docgenInfo={description:"",methods:[],displayName:"DataViewFilterSingleSelect",props:{label:{required:!0,tsType:{name:"string"},description:""},args:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
	getOptions(): Promise<DataViewFilterGetOptionsReturn> | DataViewFilterGetOptionsReturn;\r
	getSelected(id: string): Promise<MosaicLabelValue> | MosaicLabelValue;\r
	required?: boolean;\r
}`,signature:{properties:[{key:"getOptions",value:{name:"union",raw:"Promise<DataViewFilterGetOptionsReturn> | DataViewFilterGetOptionsReturn",elements:[{name:"Promise",elements:[{name:"DataViewFilterGetOptionsReturn"}],raw:"Promise<DataViewFilterGetOptionsReturn>"},{name:"DataViewFilterGetOptionsReturn"}],required:!0}},{key:"getSelected",value:{name:"union",raw:"Promise<MosaicLabelValue> | MosaicLabelValue",elements:[{name:"Promise",elements:[{name:"MosaicLabelValue"}],raw:"Promise<MosaicLabelValue>"},{name:"MosaicLabelValue"}],required:!0}},{key:"required",value:{name:"boolean",required:!1}}]}},description:""},data:{required:!0,tsType:{name:"DataViewFilterSingleSelectData"},description:""},onChange:{required:!0,tsType:{name:"unknown"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{D};
