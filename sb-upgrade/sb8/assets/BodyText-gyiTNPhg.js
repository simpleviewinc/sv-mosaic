import{j as l}from"./jsx-runtime-qGIIFXMu.js";import{n as i,t,s as y}from"./theme-tUuL1bpb.js";const f=i`
	margin: 0;
	padding: 0;
	font-size: inherit;
	font-weight: inherit;
    line-height: 1.5em;

    ${({$maxLines:e,$breakAll:r,$color:o,$whiteSpace:a})=>[e&&`
				display: -webkit-box;
				-webkit-line-clamp: ${e};
				-webkit-box-orient: vertical;
				overflow: hidden;
			`,r&&`
				word-break: break-all;
			`,o&&`
				color: ${t.colors[o]};
			`,a&&`
				white-space: ${a};
			`].filter(Boolean).join(`
`)}
`,h={title:i`
        font-family: ${t.museoFont};
        font-size: 28px;
        font-weight: ${t.fontWeight.light};
		color: ${t.newColors.almostBlack[100]};
        line-height: 1.2em;
	`,subtitle:i`
        font-family: ${t.fontFamily};
        font-size: 16px;
		font-weight: 500;
		color: ${t.newColors.almostBlack[100]};
	`,body:i`
        font-family: ${t.fontFamily};
        font-size: 16px;
	`,none:i``},g=y.div`
	${f}
	${({$variant:e})=>e?h[e]:""}
`,b={title:"h1",subtitle:"h3",body:"div",none:"span"};function n({children:e,attrs:r={},tag:o,variant:a="none",maxLines:s,color:d,breakAll:u,className:m,title:p}){const c=o||b[a];return l.jsx(g,{...r,className:m,$variant:a,$maxLines:s,$color:d,$breakAll:u,title:p!==void 0?p:typeof e=="string"?e:void 0,as:c,children:e})}n.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:'"title" | "subtitle" | "body" | "none"',elements:[{name:"literal",value:'"title"'},{name:"literal",value:'"subtitle"'},{name:"literal",value:'"body"'},{name:"literal",value:'"none"'}]},description:"Controls the look of the typography",defaultValue:{value:'"none"',computed:!1}},tag:{required:!1,tsType:{name:"string"},description:"The HTML element to use."},maxLines:{required:!1,tsType:{name:"number"},description:"If provided, text will be truncated at the given number of lines"},whiteSpace:{required:!1,tsType:{name:'Properties["whiteSpace"]',raw:'Properties["whiteSpace"]'},description:'The "white-space" CSS style'},breakAll:{required:!1,tsType:{name:"boolean"},description:'Utilises "word-break: break-all" - useful for displaying long strings with no breaking characters like URLs'},children:{required:!0,tsType:{name:"ReactNode"},description:"The content, usually text, of the Typography component"},className:{required:!1,tsType:{name:"string"},description:"Pass custom classes to the wrapping element"},title:{required:!1,tsType:{name:"string"},description:"Provides a title attribute to the Typography element"},attrs:{required:!1,tsType:{name:"MosaicObject"},description:"Additional attributes to be provided to the Typography element",defaultValue:{value:"{}",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"black" | "blue" | "lightBlue" | "red" | "yellow" | "teal" | "gray" | "white"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"lightBlue"'},{name:"literal",value:'"red"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"white"'}]},description:"The text colour of the typography"}}};const T=e=>l.jsx(n,{...e,variant:"title"});T.__docgenInfo={description:"",methods:[],displayName:"TitleText"};const v=e=>l.jsx(n,{...e,variant:"subtitle"});v.__docgenInfo={description:"",methods:[],displayName:"SubtitleText"};const w=e=>l.jsx(n,{...e,variant:"body"});w.__docgenInfo={description:"",methods:[],displayName:"BodyText"};export{w as B,v as S,n as T,T as a};
