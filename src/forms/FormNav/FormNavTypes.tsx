export interface Section {
  title?: string;
  id?: string;
}

export interface FormNavProps {
  sections: Section[];
  sectionsRefs?: HTMLDivElement[] | [];
  formContentRef?: any;
	view?: any; // Update to context
}
