import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as s}from"./index-3-_tf5dF.js";import{M as o}from"./index-Rr1P_Ni1.js";import"./index-BP8_t0zE.js";import"./iframe-BUFmTAhX.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Utils/Hooks/useToggle"}),`
`,t.jsx(e.h1,{id:"usetoggle",children:"useToggle"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"useToggle"})," and ",t.jsx(e.code,{children:"useWrappedToggle"})," hooks can be used to evaluate a ",t.jsx(e.code,{children:"MosaicToggle"}),` and return a boolean or filtered list depending on what is required.
It takes a single item or array of items containing a toggle property that is of type `,t.jsx(e.code,{children:"MosaicToggle"}),`. It returns either true or false if a single item is
provided, or the filtered array if an array is provided.`]}),`
`,t.jsxs(e.p,{children:["If an array-based ",t.jsx(e.code,{children:"MosaicToggle"})," is provided, the resulting toggle is based on whether or not the ",t.jsx(e.code,{children:"defaultToggle"})," property is true or false. If ",t.jsx(e.code,{children:"true"}),`,
the resulting toggle will be `,t.jsx(e.code,{children:"true"})," if ",t.jsx(e.strong,{children:"all"})," of the evaluated array items are true. If ",t.jsx(e.code,{children:"false"}),`, that will be inverted and the resulting toggle will be
`,t.jsx(e.code,{children:"true"})," if ",t.jsx(e.strong,{children:"at least one"})," of the evaluated array items are true."]}),`
`,t.jsx(e.h2,{id:"parameters",children:"Parameters"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"name"}),t.jsx(e.th,{children:"required"}),t.jsx(e.th,{children:"type"}),t.jsx(e.th,{children:"description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"items"}),t.jsx(e.td,{children:"✅"}),t.jsxs(e.td,{children:[t.jsx(e.code,{children:"T"})," or ",t.jsx(e.code,{children:"T[]"})]}),t.jsx(e.td,{children:"The item or items containing the show property"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"key"}),t.jsx(e.td,{children:"✅"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"keyof T"})}),t.jsx(e.td,{children:"The property that holds a valid toggle boolean/callback/array"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"defaultToggle"}),t.jsx(e.td,{}),t.jsx(e.td,{children:t.jsx(e.code,{children:"boolean"})}),t.jsxs(e.td,{children:["What the result should fall back to when the toggle property is undefined. Default ",t.jsx(e.code,{children:"true"}),"."]})]})]})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { useToggle } from "@simpleview/sv-mosaic/utils";
import { MosaicToggle } from "@simpleview/sv-mosaic-types";

interface ListItemProps {
	title: string;
	show: MosaicToggle;
}

function List() {
	const [numberToShow, setNumberToShow] = useState(1);

	const items: ListItemProps[] = useMemo(() => [
		{
			title: "Dog",
			show: () => numberToShow > 0,
		},
		{
			title: "Cat",
			show: () => numberToShow > 1,
		},
		{
			title: "Turtle",
			show: () => numberToShow > 2,
		},
	], [numberToShow]);

	const itemsToShow = useToggle(items, "show", true);

	return (
		<ul>
			<input
				value={numberToShow}
				onChange={({ target: { value } }) => setNumberToShow(Number(value))}
				type="number"
			/>
			{itemsToShow.map(({ title }) => (
				<li key={title}>{title}</li>
			))}
		</ul>
	);
}
`})}),`
`,t.jsx(e.h1,{id:"usewrappedtoggle",children:"useWrappedToggle"}),`
`,t.jsxs(e.p,{children:["The same as ",t.jsx(e.code,{children:"useToggle"}),` but also accepts a context against which to test any toggle callbacks. The context will be provided as the first parameter to
the toggle callbacks at the time of each test.`]}),`
`,t.jsx(e.h2,{id:"parameters-1",children:"Parameters"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"name"}),t.jsx(e.th,{children:"required"}),t.jsx(e.th,{children:"type"}),t.jsx(e.th,{children:"description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"items"}),t.jsx(e.td,{children:"✅"}),t.jsxs(e.td,{children:[t.jsx(e.code,{children:"T"})," or ",t.jsx(e.code,{children:"T[]"})]}),t.jsx(e.td,{children:"The item or items containing the show property"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"params"}),t.jsx(e.td,{children:"✅"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"P"})}),t.jsx(e.td,{children:"The context to be provided to any toggle callbacks"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"key"}),t.jsx(e.td,{children:"✅"}),t.jsx(e.td,{children:t.jsx(e.code,{children:"keyof T"})}),t.jsx(e.td,{children:"The property that holds a valid toggle boolean/callback/array"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:"defaultToggle"}),t.jsx(e.td,{}),t.jsx(e.td,{children:t.jsx(e.code,{children:"boolean"})}),t.jsxs(e.td,{children:["What the result should fall back to when the toggle property is undefined. Default ",t.jsx(e.code,{children:"true"}),"."]})]})]})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { useToggle } from "@simpleview/sv-mosaic/utils";
import { MosaicToggle } from "@simpleview/sv-mosaic-types";

interface ListItemProps {
	title: string;
	show: MosaicToggle<number>;
}

function List() {
	const [numberToShow, setNumberToShow] = useState(1);

	const items: ListItemProps[] = useMemo(() => [
		{
			title: "Dog",
			show: ({ numberToShow }) => numberToShow > 0,
		},
		{
			title: "Cat",
			show: ({ numberToShow }) => numberToShow > 1,
		},
		{
			title: "Turtle",
			show: ({ numberToShow }) => numberToShow > 2,
		},
	], []);

    const wrappedParams = useMemo(() => ({ numberToShow }), [numberToShow]);
	const itemsToShow = useWrappedToggle(items, wrappedParams, "show", true);

	return (
		<ul>
			<input
				value={numberToShow}
				onChange={({ target: { value } }) => setNumberToShow(Number(value))}
				type="number"
			/>
			{itemsToShow.map(({ title }) => (
				<li key={title}>{title}</li>
			))}
		</ul>
	);
}
`})})]})}function w(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{w as default};
