FROM node:18.18.2

RUN apt-get update && \
    apt-get -y install gettext-base jq

COPY package.json /app/containers/mosaic-sb7/package.json

RUN cd /app/containers/mosaic-sb7 && npm install

COPY .storybook /app/containers/mosaic-sb7/.storybook
COPY tsconfig.json /app/containers/mosaic-sb7/tsconfig.json
COPY tsconfig.node.json /app/containers/mosaic-sb7/tsconfig.node.json
COPY vite.config.ts /app/containers/mosaic-sb7/vite.config.ts

WORKDIR /app/containers/mosaic-sb7
