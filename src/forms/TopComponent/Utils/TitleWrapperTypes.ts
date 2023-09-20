export type TitleWrapperProps = {
	title: string;
	description?: string;
	onBack?: (() => void) | ((e: any) => void)
    backLabel?: string
}
