/// <reference types="react" />
interface Option {
    label: string;
    value: string;
}
export interface CheckboxListProps {
    checked: string[];
    options: Option[];
    onChange(checked: string[]): void;
}
declare function CheckboxList(props: CheckboxListProps): JSX.Element;
export default CheckboxList;
