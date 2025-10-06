import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as r}from"./index-BwDDMXeo.js";import{d as l,M as c}from"./index-ErwLhiuT.js";import{s as a}from"./Content.stories-7_PIdl4M.js";import{t}from"./sizes-DkIXWPpc.js";import"./index-D0AnReJb.js";import{s as d}from"./styled-components.browser.esm-njFAddlw.js";import"./iframe-Dgo-5i4d.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./containerQuery-CYj0-5X2.js";import"./StyledPopperPaper-BODJ-ail.js";import"./identifier-DOqdnZ6L.js";import"./createSvgIcon-DDyBApXB.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./ButtonBase-O4ZQd6U4.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Popper-CeYJ7yNz.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-B3jGg_If.js";import"./ExpandMore-Ca3pe8z0.js";import"./MosaicContext-Y61KIvFP.js";import"./FormFieldText.styled-DQ22Tenv.js";import"./formControlState-BI4toe_X.js";import"./Button-Dlaq5vsb.js";import"./index-CYsLg4TE.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-D8cEbksV.js";import"./ChevronLeft-Bjv82Anv.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-DsoxFHT_.js";import"./DataViewFilterDropdownButtons-bgrEEUrv.js";import"./index-Dmgma1UG.js";import"./Chip-16cSQUDZ.js";import"./DataViewPrimaryFilter.styled-Ej2pGgIE.js";import"./Badge-D14GCFVi.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-BJ1qYTpx.js";import"./PageHeader-DTKSoW5K.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-DFjk1mlV.js";import"./Checkbox-Cg_T_WRa.js";import"./StyledOptionFormControl-Br1jmfxi.js";import"./MoreVert-BAJenQd7.js";import"./stable-BFc8HSVh.js";import"./throws-DLZ75Q5e.js";import"./formats-CMvQHWsT.js";import"./Snackbar-YB8AgySY.js";import"./Close-DizofMnI.js";import"./ClickAwayListener-Cp7Ry44a.js";import"./ChipList-Dk1_tgce.js";import"./RadioButton-DplP-WlB.js";import"./Toggle-BnqnqUHF.js";import"./Dialog-CJUzIf8Q.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-tVV9ac9c.js";import"./CardHeading-CE-QHljg.js";import"./column_transforms-BIAMYRXB.js";import"./Image-ZO9EpWKf.js";import"./Edit-Bk4AvtQF.js";import"./styled-Cb9FMILg.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./createSvgIcon-DtczVsqP.js";import"./Typography-CW8rULec.js";const p=d.header`
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
`]})]})}function Oe(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{Oe as default};
