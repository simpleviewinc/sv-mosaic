import * as React from 'react';
import { FieldDef } from '@root/components/Field';
interface SectionPropTypes {
    title: string;
    description: string | JSX.Element;
    fieldsDef: FieldDef[];
    fieldsLayoutPos: (string | FieldDef)[][][];
    dispatch: any;
    state: any;
}
declare const _default: React.MemoExoticComponent<(props: SectionPropTypes) => JSX.Element>;
export default _default;
