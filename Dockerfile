FROM node:16.13.1

RUN apt-get update && \
    apt-get -y install gettext-base jq

# install desired version of yarn
RUN corepack enable && yarn set version 3.1.1

COPY package.json /app/package.json
COPY .yarnrc.yml /app/.yarnrc.yml
COPY .yarn /app/.yarn
COPY yarn.lock /app/yarn.lock
RUN cd /app && yarn install

COPY src /app/src
COPY .storybook /app/.storybook
COPY scripts /app/scripts
COPY testing /app/testing
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.cjs.json /app/tsconfig.cjs.json
COPY tsconfig.esm.json /app/tsconfig.esm.json
COPY jest.config.js /app/jest.config.js
COPY webpack.config.js /app/webpack.config.js
# COPY --chmod=0600 src/ssh_config /root/.ssh/config

WORKDIR /app
