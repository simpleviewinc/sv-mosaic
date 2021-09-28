export interface FormState {
	data: Record<string, any>;
	touched: Record<string, boolean>;
	errors: Record<string, string>;
}