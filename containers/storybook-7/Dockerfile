FROM node:18.18.2

RUN apt-get update && \
    apt-get -y install gettext-base jq

COPY package.json /app/containers/storybook-7/package.json
COPY package-lock.json /app/containers/storybook-7/package-lock.json

RUN cd /app/containers/storybook-7 && npm install

COPY .storybook /app/containers/storybook-7/.storybook
COPY src /app/containers/storybook-7/src
COPY docs-sb7 /app/containers/storybook-7/docs-sb7
COPY tsconfig.json /app/containers/storybook-7/tsconfig.json
COPY tsconfig.node.json /app/containers/storybook-7/tsconfig.node.json
COPY vite.config.ts /app/containers/storybook-7/vite.config.ts

WORKDIR /app/containers/storybook-7
