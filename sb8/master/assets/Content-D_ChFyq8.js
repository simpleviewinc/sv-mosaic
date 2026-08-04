import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-ikABDTSQ.js";import{M as r}from"./index-C9a0Jk_9.js";import{s as l}from"./Content.stories-aQV5h-8J.js";import{H as o}from"./Header-BfJNDvSc.js";import"./index-CDlOlYQx.js";import"./iframe-D5bs3z5S.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./sizes-BeWafy6f.js";import"./containerQuery-DwQ6QvMu.js";import"./StyledPopperPaper-CblYxRKp.js";import"./useTooltip-Hifh6sld.js";import"./index-fPYtWVub.js";import"./identifier-D-VlK421.js";import"./createSimplePaletteValueFilter-BR9nxWVt.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./Popover-CfJhcp6M.js";import"./ButtonBase-CSsk5_gr.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./TooltipIcon-if6WdNgf.js";import"./createSvgIcon-BOHM49HM.js";import"./index-CEvXTbTM.js";import"./MosaicContext-OO7tZJdO.js";import"./TitleWrapper-DJ3oxuZn.js";import"./Button-J6Kw363Y.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-aPK7NacD.js";import"./ChevronLeft-BrbIZV1W.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-y0O1VC79.js";import"./testIds-B6Pox1zA.js";import"./DataViewFilterDropdownButtons-CBDNlFNO.js";import"./FormFieldText.styled-D7KmSwYO.js";import"./formControlState-CJTic6Sf.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-DylK-kVm.js";import"./ExpandMore-D30LWCsE.js";import"./Chip-BvxPiOpy.js";import"./DataViewPrimaryFilter.styled-BC5S4hgN.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DnLdQwbM.js";import"./PageHeader-DIWebNsC.js";import"./Spinner-By1vTLAu.js";import"./CheckboxList-D9FFWuZY.js";import"./Checkbox-DXOuBkLC.js";import"./SwitchBase-BlAgGKJx.js";import"./StyledOptionFormControl-BaE74fbD.js";import"./FormGroup-DqpNDYHy.js";import"./MoreVert-BYQ12PEe.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-BkXc3b2-.js";import"./Snackbar-kq0Zn7SC.js";import"./Close-BouFTol8.js";import"./ChipList-BnPd1b7I.js";import"./RadioGroup-LpJpC3lq.js";import"./Toggle-Cchzb_ud.js";import"./Dialog-CB9M2CMQ.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-BGXzeqiu.js";import"./CardHeading-COwA42ZW.js";import"./column_transforms-Dd2MSnmW.js";import"./Image-DWVfwFkh.js";import"./Edit-Cxoz7qzE.js";import"./createSvgIcon-BczN9R-D.js";import"./emotion-unitless.esm-x5IvBceT.js";import"./Typography-BLRcpb5B.js";import"./useThemeWithoutDefault-BnsPvbh0.js";import"./styled-components.browser.esm-Cbu7rhRc.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
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
`]})]})}function Ne(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{Ne as default};
