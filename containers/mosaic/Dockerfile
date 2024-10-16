FROM node:18.18.2

RUN apt-get update && apt-get -y install gettext-base jq

RUN corepack enable && yarn set version 3.1.1

COPY package.json /app/package.json
COPY .yarnrc.yml /app/.yarnrc.yml
COPY .yarn /app/.yarn
COPY yarn.lock /app/yarn.lock

RUN cd /app && yarn install

COPY scripts /app/scripts
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.cjs.json /app/tsconfig.cjs.json
COPY tsconfig.esm.json /app/tsconfig.esm.json
COPY .eslintignore /app/.eslintignore
COPY .eslintrc.ci.js /app/.eslintrc.ci.js
COPY .eslintrc.js /app/.eslintrc.js
COPY src /app/src

WORKDIR /app

RUN yarn run build
