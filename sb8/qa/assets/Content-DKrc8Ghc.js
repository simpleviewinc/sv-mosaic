import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as r}from"./index-DhUyNoj3.js";import{d as l,M as c}from"./index-BgLiI90r.js";import{s as a}from"./Content.stories-C4-J7Cb8.js";import{t}from"./sizes-1ZdlMWGC.js";import"./index-ePW8zFKp.js";import{s as d}from"./styled-components.browser.esm-ChbXZP2t.js";import"./iframe-bi4UEN3T.js";import"../sb-preview/runtime.js";import"./index-DnRBG-o-.js";import"./index-CKydZLen.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-CZ_faPKH.js";import"./_baseForOwn-CCkfl5oU.js";import"./index-CGmM_oJM.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-CUKKF2J4.js";import"./containerQuery-NPnQgBq-.js";import"./StyledPopperPaper-8Ep909Ba.js";import"./identifier-vWKndVvV.js";import"./createSvgIcon-DOp_2lHr.js";import"./createSvgIcon-JtMyjPpt.js";import"./generateUtilityClasses-CUUJXLh7.js";import"./ButtonBase-YTDCQqeW.js";import"./useIsFocusVisible-BxLBCNny.js";import"./ownerWindow-DvT1GKkC.js";import"./Popper-DP0cm8Rf.js";import"./useTheme-DTRH4aGG.js";import"./useThemeWithoutDefault-Dj6yTNm1.js";import"./index-YAzqtmUw.js";import"./ExpandMore-DTgjfsqJ.js";import"./MosaicContext-CjWw6F81.js";import"./FormFieldText.styled-Bk8NGAsC.js";import"./formControlState-kJY1j3p4.js";import"./Button-DrJO7SQT.js";import"./index-Ca1iOyRL.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-DmKVz7XJ.js";import"./ChevronLeft-Bppxtp-L.js";import"./Typography-Bs-xuYxw.js";import"./DisplayText-DlqFHcnF.js";import"./ButtonRow-YhuqC_GR.js";import"./DataViewFilterDropdownButtons-C_RCg-Qn.js";import"./index-Bh5Vkqmp.js";import"./Chip-0jtXmB96.js";import"./DataViewPrimaryFilter.styled-BsgbKxfV.js";import"./Badge-BWKQiQcj.js";import"./Text-cPxBJcyq.js";import"./PickerPanel-G-RBUfJL.js";import"./PageHeader-CGRiWJUd.js";import"./Spinner-Bi6mQivf.js";import"./CheckboxList-Dy-kOrHq.js";import"./Checkbox-DHQwFOa3.js";import"./SwitchBase-BYEDHepN.js";import"./StyledOptionFormControl-Ca00866Q.js";import"./MoreVert-BnBEmsSM.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CXoQvajJ.js";import"./Snackbar-CXJOSA6g.js";import"./Close-Da-iw-_d.js";import"./ChipList-DaRpkRZU.js";import"./RadioButton-C4xgaHsm.js";import"./Toggle-Bi6du1gm.js";import"./Dialog-oPs8S-ZP.js";import"./ThemeProvider-B65WN4y2.js";import"./SideNav-BHwtuPtb.js";import"./Card.styled-Cfnm8QOk.js";import"./CardHeading-BZzm19Ep.js";import"./column_transforms-BhjIzWuV.js";import"./Image-BwhqfX1M.js";import"./Edit-FeaRtXtp.js";import"./styled-CTz4Upzp.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./createSvgIcon-D3Hqnud2.js";import"./Typography-D0HGZ7B5.js";const p=d.header`
	align-items: center;
	display: flex;
	gap: 8px;
`;function o({title:i,required:n}){return e.jsxs(p,{children:[e.jsx(l,{children:`### \`${i}\``}),n?e.jsx("span",{style:{color:t.color.red[600]},children:"Required"}):e.jsx("span",{style:{color:t.color.gray[600]},children:"Optional"})]})}function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(n.h1,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Content"})," helps to show the primary information from each specific record, with the possibility to add new subsections separate from the main form."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Content/ContentTypes.ts",rel:"nofollow",children:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Content/ContentTypes.ts"})}),`
`,e.jsx(o,{title:"title",required:!0}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"string"})}),`
`,e.jsx(n.p,{children:"Name of the section or subsection."}),`
`,e.jsx(o,{title:"fields",required:!0}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"ContentFieldDef[]"})}),`
`,e.jsxs(n.p,{children:["Array of field definitions that control how content data is displayed. Each field definition specifies the field name and label for display, optional data transformations to format values, conditional visibility rules, column mapping for data extraction, and optional tooltip content. Fields are rendered in the order defined in this array, unless overridden by the ",e.jsx(n.code,{children:"sections"})," prop which can regroup and reorder field display."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const fields: ContentFieldDef[] = [
  {
    name: "title",
    label: "Title",
    transforms: (title) => <h3>{title}</h3> // Render the title in a h3 element
  },
  {
    name: "status",
    label: "Status",
    show: [userCan("readStatus"), hasStatus],
    transforms: (status) => <Chip>{status}</Chip> // Render the status inside a chip
  },
  {
    name: "description",
    label: "Description",
    tooltip: "Additional details about this item",
    column: "desc" // Maps to data.desc instead of data.description
  }
];
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"ContentFieldDef Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name"})," - ",e.jsx(n.code,{children:"string"})," required - The name of the field used to check validity compared with the sections and for data mapping."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"})," - ",e.jsx(n.code,{children:"ReactNode"})," required - Label that is rendered above the component generated by the transforms functions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"tooltip"})," - ",e.jsx(n.code,{children:"ReactNode"})," optional - If provided, will render a tooltip icon alongside the content item's label."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"transforms"})," - ",e.jsx(n.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/DataView/DataViewTypes.ts",rel:"nofollow",children:e.jsx(n.code,{children:"DataViewColumnTransform[]"})})," optional - Functions which will receive raw data and transform it into a rendered component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"show"})," - ",e.jsx(n.a,{href:"/docs/components-form-readme--page#MosaicToggle-t-type",children:e.jsx(n.code,{children:"MosaicToggle"})})," optional - A value, array of values, function, or array of functions that controls whether or not to display a field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"column"})," - ",e.jsx(n.code,{children:"string"})," optional - If provided, will be used as the data key instead of the field name for data extraction."]}),`
`]}),`
`,e.jsx(o,{title:"data",required:!0}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"MosaicObject"})}),`
`,e.jsx(n.p,{children:"Data that will be used by the transform function of each field to generate the corresponding JSX element."}),`
`,e.jsx(o,{title:"sections"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"(string[] | ContentRow)[]"})}),`
`,e.jsx(n.p,{children:"Defines the layout and grouping of fields into rows and columns. Can be either:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Array of string arrays - Simple field grouping where each inner array represents a row"}),`
`,e.jsxs(n.li,{children:["Array of ",e.jsx(n.code,{children:"ContentRow"})," objects - Advanced configuration with custom breakpoints per row"]}),`
`,e.jsxs(n.li,{children:["Mixed array - Combination of both simple arrays and ",e.jsx(n.code,{children:"ContentRow"})," objects"]}),`
`]}),`
`,e.jsxs(n.p,{children:["If not provided, defaults to displaying all fields in a single column layout. The responsive behavior is controlled by the ",e.jsx(n.code,{children:"columns"})," prop, but individual rows can override this with their own ",e.jsx(n.code,{children:"breakpoints"})," configuration."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Simple layout example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`sections={[
  ["field1"],           // Single field row
  ["field2", "field3"], // Two fields in one row
  ["field4", "field5", "field6"] // Three fields in one row
]}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Advanced layout with custom breakpoints per row:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`sections={[
  ["field1"], // Uses global columns setting
  {
    fields: ["field2", "field3", "field4"],
    breakpoints: { sm: 1, md: 2, lg: 3 } // Custom responsive behavior
  }
]}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Mixed configuration:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`sections={[
  ["title", "subtitle"], // Simple row
  {
    fields: ["stat1", "stat2", "stat3", "stat4"],
    breakpoints: { md: 2, lg: 4 } // Statistics in responsive grid
  },
  ["description"] // Full-width description
]}
`})}),`
`,e.jsx(o,{title:"columns"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"keyof typeof BREAKPOINTS | BreakpointColumns"})}),`
`,e.jsx(n.p,{children:"Controls the responsive layout behavior of content fields. Can be either:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A breakpoint name (",e.jsx(n.code,{children:'"sm" | "md" | "lg" | "xl" | "2xl"'}),") - Fields will display as columns starting at this breakpoint. Below this breakpoint, fields stack vertically."]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"BreakpointColumns"})," object for granular control - Specify exact number of columns at different breakpoints."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Default:"})," ",e.jsx(n.code,{children:'"md"'})," - Fields display as columns starting at medium breakpoint (768px)"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Simple breakpoint example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`columns="lg" // Fields become columns at large screens and above
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Granular control example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`columns={{
  sm: 1, // 1 column on small screens
  md: 2, // 2 columns on medium screens
  lg: 3  // 3 columns on large screens
}}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Integration with sections:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Global columns setting
columns="md"
sections={[
  ["field1", "field2"], // Uses columns prop settings
  {
    fields: ["field3", "field4", "field5"],
    breakpoints: { md: 2, lg: 3 } // Override for this row only
  }
]}
`})}),`
`,e.jsx(o,{title:"buttons"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ButtonProps[]"})," ",e.jsx(n.strong,{children:"optional"})," - Array of buttons that will be display on the top-right corner of the component."]}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Content/ContentTypes.ts#L8",rel:"nofollow",children:"ContentFieldDef"})," - Interface defining the structure of field definitions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/DataView/DataViewTypes.ts",rel:"nofollow",children:"DataViewColumnTransform"})," - Transform functions for data formatting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/types/MosaicToggle.ts",rel:"nofollow",children:"MosaicToggle"})," - Type for conditional visibility control"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/Content/ContentTypes.ts#L31",rel:"nofollow",children:"BreakpointColumns"})," - Type for responsive column configuration"]}),`
`]})]})}function Ee(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{Ee as default};
