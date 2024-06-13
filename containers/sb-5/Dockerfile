FROM node:18.18.2

RUN apt-get update && \
    apt-get -y install gettext-base jq

RUN corepack enable && yarn set version 3.1.1

COPY package.json /app/package.json
COPY .yarnrc.yml /app/.yarnrc.yml
COPY .yarn /app/.yarn
COPY yarn.lock /app/yarn.lock

RUN cd /app && yarn install

COPY src /app/src
COPY .storybook /app/.storybook
COPY tsconfig.json /app/tsconfig.json
COPY webpack.config.js /app/webpack.config.js

WORKDIR /app
