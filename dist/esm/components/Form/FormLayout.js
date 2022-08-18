import * as React from "react";
import { useMemo, memo, forwardRef } from "react";
import { generateLayout } from "./formUtils";
// Components
import Section from "./Section";
const FormLayout = forwardRef((props, ref) => {
    const { state, dispatch, fields, sections } = props;
    const sectionRef = ref;
    const layout = useMemo(() => {
        return generateLayout({ sections, fields });
    }, [sections, fields]);
    return (React.createElement(React.Fragment, null, layout === null || layout === void 0 ? void 0 : layout.map((section, i) => (React.createElement(Section, { ref: el => sectionRef.current[i] = el, key: `section-${i}`, title: section.title, sectionIdx: i, description: section.description, fieldsDef: fields, rows: section.fields, state: state, dispatch: dispatch })))));
});
FormLayout.displayName = "FormLayout";
export default memo(FormLayout);
