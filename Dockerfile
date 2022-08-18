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

COPY src /app/
COPY .storybook /app/
COPY scripts /app/
COPY tsconfig.json /app/
COPY tsconfig.cjs.json /app/
COPY tsconfig.esm.json /app/
COPY jest.config.js /app/
COPY webpack.config.js /app/

WORKDIR /app
