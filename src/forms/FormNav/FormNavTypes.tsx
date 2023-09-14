export interface Section {
  title?: string;
  id?: string;
}

export interface FormNavProps {
  activeSection?: number;
  sections: Section[];
  onSectionSelect?: (section: number) => void
}
