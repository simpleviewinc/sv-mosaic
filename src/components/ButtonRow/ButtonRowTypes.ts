import { ButtonProps } from "../Button";

export interface ButtonRowProps {
	buttons?: ButtonProps[]
	children?: React.ReactNode
	className?: string
	separator?: boolean
	gap?: "small" | "large"
	wrap?: boolean
}
