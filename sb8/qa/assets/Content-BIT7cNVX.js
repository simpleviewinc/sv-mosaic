import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as s}from"./index-CrRX5TgX.js";import{M as r}from"./index-BNyc9wrq.js";import{s as l}from"./Content.stories-CTaZTwda.js";import{H as o}from"./Header-BN-HQkCi.js";import"./index-lnx8lKqn.js";import"./iframe-Iwsvkr5j.js";import"./index-DJZ3_iYS.js";import"./index-BySu-MVC.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-DqsT1pAc.js";import"./sizes-BcVUBVYw.js";import"./containerQuery-BGTno4Nd.js";import"./StyledPopperPaper-DUCM88TM.js";import"./useTooltip-DxGcUIuP.js";import"./useThemeWithoutDefault-DtYdwAl6.js";import"./identifier-DL_MWCt5.js";import"./generateUtilityClasses-BXdgOgaD.js";import"./useIsFocusVisible-CUUNsth7.js";import"./Popover-BteNYKgc.js";import"./ButtonBase-CvKKHeWu.js";import"./TooltipIcon-CIvFjYBP.js";import"./createSvgIcon-DtmGrA-N.js";import"./index-BOIGrpkG.js";import"./ExpandMore-BWMeOleT.js";import"./MosaicContext-Bd_KQqXt.js";import"./FormFieldText.styled-C8FVpgqR.js";import"./formControlState-DQjLAsCB.js";import"./Button-CNe7umd6.js";import"./index-BXfeNjdK.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-BzZp6KFF.js";import"./ChevronLeft-vDd10AKU.js";import"./Typography-BDSgj_cw.js";import"./DisplayText-DNcU0R6O.js";import"./ButtonRow-BvtHToaG.js";import"./DataViewFilterDropdownButtons-rxxLPn9R.js";import"./index-WeqoMoTB.js";import"./Chip-CbNdHOhT.js";import"./DataViewPrimaryFilter.styled-CBPEvKLp.js";import"./Badge-QaR-AhQl.js";import"./Text-6QT-9GAX.js";import"./PickerPanel-BfvGlJ8s.js";import"./PageHeader-nP7hDafL.js";import"./Spinner-9l6dePBI.js";import"./CheckboxList-6gebeIaX.js";import"./Checkbox-Bd_VDYHl.js";import"./SwitchBase-gKBphwxl.js";import"./StyledOptionFormControl-IcAt2LqD.js";import"./MoreVert-Dnd0CSMf.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CKhuYVYb.js";import"./Snackbar-C_CrhD95.js";import"./Close-R1hfxO-H.js";import"./ChipList-_8tC_zVn.js";import"./RadioButton-G3onKhzu.js";import"./Toggle-DL53UmwG.js";import"./Dialog-64i6eqDA.js";import"./ThemeProvider-D5DIG-lM.js";import"./SideNav-DjxcEScw.js";import"./CardHeading-C9sAxKWr.js";import"./column_transforms-BZPk99qd.js";import"./Image-BHDuopR6.js";import"./Edit-MAUxcpSQ.js";import"./styled-DYj8iMuw.js";import"./createSvgIcon-B6PxcMCt.js";import"./Typography-CfVRa8T8.js";import"./styled-components.browser.esm-DTJAru-v.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
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
`]})]})}function Ce(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{Ce as default};
