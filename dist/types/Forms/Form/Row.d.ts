import { FieldDef } from '@root/components/Field';
import * as React from 'react';
interface RowPropTypes {
    row: (string | FieldDef)[][];
    state: any;
    fieldsDef: FieldDef[];
    dispatch: any;
}
declare const _default: React.MemoExoticComponent<(props: RowPropTypes) => JSX.Element>;
export default _default;
