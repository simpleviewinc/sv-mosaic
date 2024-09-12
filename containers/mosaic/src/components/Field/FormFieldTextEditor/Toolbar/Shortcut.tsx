import type { ReactElement } from "react";

import React from "react";

import type { ShortcutDef } from "../FormFieldTextEditorTypes";

interface ShortcutProps {
	shortcut: ShortcutDef;
}

export function Shortcut({ shortcut }: ShortcutProps): ReactElement {
	const isMac = window.navigator.userAgent.toUpperCase().includes("MAC");
	const shortcutText = isMac ? shortcut.mac : shortcut.pc;

	return <>{shortcutText}</>;
}
