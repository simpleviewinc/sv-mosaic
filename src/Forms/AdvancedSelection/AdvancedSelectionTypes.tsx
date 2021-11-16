import { Option } from '@root/components/CheckboxList'

export interface AdvancedSelectionProps {
  options: { category: string, options: Option[] }[];
  inputTitle: string;
}
