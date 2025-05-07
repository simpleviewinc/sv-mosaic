import type { ReactNode } from "react";

import React, { useState } from "react";

function Example({ component: Component, children }: { component: () => ReactNode; children: string }) {
	const [codeView, setCodeView] = useState(false);

	return (
		<>
			<button type="button" onClick={() => setCodeView(!codeView)}>
				View
				{" "}
				{codeView ? "preview" : "code"}
			</button>
			{codeView ? (
				<pre>{children}</pre>
			) : (
				<Component />
			)}
		</>
	);
}

export default Example;
