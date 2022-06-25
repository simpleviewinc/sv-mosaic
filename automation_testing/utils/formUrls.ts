import { env, components } from "../utils/urls/environments";

const url = (component: string): string => {
	return `${env[process.env.ENV]}?id=${components[component]}`;
}

export { url }