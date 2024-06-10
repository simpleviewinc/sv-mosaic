import PageHeader from "@root/components/PageHeader";
import * as React from "react";
import { useContext } from "react";
import AppContext from "./AppContext";

function Grid() {
	const appContext = useContext(AppContext);

	return (
		<>
			<PageHeader title="Grid" onBack={appContext.removeDrawer} />
			<p>Grid</p>
		</>
	);
}

export default Grid;
