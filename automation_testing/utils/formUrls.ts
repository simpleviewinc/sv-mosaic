import { env, components } from '../utils/urls/environments';

const url = (component) => {
    return env[process.env.ENV] + "?id=" + components[component];
}

export { url }