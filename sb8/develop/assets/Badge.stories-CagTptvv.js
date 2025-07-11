import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{R as d}from"./index-D0AnReJb.js";import{s as l}from"./styled-components.browser.esm-EkLDtEIi.js";import{t as r}from"./sizes-o2d97SRj.js";import"./Typography-Csn3cM8V.js";import{T as g}from"./Text-4ZxjQQL-.js";const a={light:{background:r.color.gray[100],color:r.color.black},dark:{background:r.color.gray[300],color:r.color.black},darkest:{background:r.color.black,color:r.color.white}},m=l(g).attrs({size:"md",weight:"medium",line:"tight"})`
	border-radius: ${r.rounded.md};
	padding: ${r.spacing(.5,1)};
	min-width: 22px;
	text-align: center;
	display: inline-block;

	${({$variant:t})=>`
		background-color: ${a[t].background};
		color: ${a[t].color};
	`}
`;function p({children:t,variant:e="light"}){return d.createElement(m,{$variant:e},t)}const f={title:"Components/Badge",parameters:{layout:"centered"}},o=({text:t,variant:e})=>i.jsx(p,{variant:e,children:t});o.args={text:"15",variant:"light"};o.argTypes={text:{name:"Text"},variant:{name:"Variant",options:["light","dark","darkest"],control:{type:"select"}}};var n,c,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
  text,
  variant
}: typeof Playground.args): ReactElement => {
  return <Badge variant={variant}>{text}</Badge>;
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const B=["Playground"];export{o as Playground,B as __namedExportsOrder,f as default};
