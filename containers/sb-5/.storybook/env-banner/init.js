import { escapeRegex } from "./escapeRegExp";
import { version } from "../../package.json";
import { environments } from "./environments";

const state = {
    added: false,
};

export function init() {
    if (state.added) {
        return;
    }

    const { body } = document;
    const banner = document.createElement("div");
    banner.classList.add("env-banner");
    body.appendChild(banner);

    for(const { location, name } of environments) {
        const regex = new RegExp(escapeRegex(location));
        if (!regex.test(window.location.href)){
            continue;
        }

        body.setAttribute("data-env", name);
        banner.innerHTML = `${name} - Mosaic v${version}`

    }

    state.added = true;
}
