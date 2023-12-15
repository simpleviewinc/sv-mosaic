FROM node:18.18.2

RUN apt-get update && \
    apt-get -y install gettext-base jq

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN cd /app && npm install

COPY .storybook /app/.storybook
COPY src /app/src
COPY docs-sb7 /app/docs-sb7
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.node.json /app/tsconfig.node.json
COPY vite.config.ts /app/vite.config.ts

WORKDIR /app
