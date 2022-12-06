FROM node:16.13.1

RUN apt-get update && \
    apt-get -y install gettext-base jq

# install desired version of yarn
RUN corepack enable && yarn set version 3.1.1

COPY package.json /app/package.json
COPY config/.yarnrc.yml /app/.yarnrc.yml
COPY .yarn /app/.yarn
COPY config/yarn.lock /app/yarn.lock
RUN cd /app && yarn install

COPY src /app/src
COPY scripts /app/scripts
COPY src/testing /app/testing
COPY config/.storybook /app/.storybook
COPY config/tsconfig.json /app/tsconfig.json
COPY config/tsconfig.cjs.json /app/tsconfig.cjs.json
COPY config/tsconfig.esm.json /app/tsconfig.esm.json
COPY config/webpack.config.js /app/webpack.config.js
COPY config/.eslintrc.json /app/.eslintrc.json
COPY config/.eslintignore /app/.eslintignore
COPY README.md /app/README.md

WORKDIR /app
