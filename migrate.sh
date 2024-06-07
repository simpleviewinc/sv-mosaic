#!/bin/bash

LIB_DIRECTORY="./containers/lib"

mkdir -p $LIB_DIRECTORY

find . '(' \
        '(' \
            -path './.yarn' -o \
            -path './src/**/*.css' -o \
            -path './src/**/*.json' -o \
            -path './src/**/*.ts' -o \
            -path './src/**/*.tsx' -o \
            -path './.yarnrc.yml' -o \
            -path './package.json' -o \
            -path './tsconfig.cjs.json' -o \
            -path './tsconfig.esm.json' -o \
            -path './tsconfig.json' -o \
            -path './yarn.lock' \
        ')' \
        -a -not '(' \
            -name '*.stories.tsx' -o \
            -name '*.test.tsx' \
        ')' \
    ')' \
    -exec cp -r --parents \{\} $LIB_DIRECTORY \;

cd $LIB_DIRECTORY

yarn install

yarn remove \
    @babel/cli \
    @babel/core \
    @babel/plugin-transform-runtime \
    @babel/polyfill \
    @babel/preset-env \
    @babel/preset-react \
    @babel/preset-typescript \
    @babel/runtime \
    @hot-loader/react-dom \
    @storybook/addon-docs \
    @storybook/addon-knobs \
    @storybook/addon-storysource \
    @storybook/addon-viewport \
    @storybook/react \
    @testing-library/jest-dom \
    @testing-library/react \
    @types/jest \
    @types/testing-library__jest-dom \
    @types/testing-library__react \
    babel-loader \
    babel-plugin-module-resolver \
    css-loader \
    gh-pages \
    identity-obj-proxy \
    jest \
    jest-canvas-mock \
    jest-fail-on-console \
    mocha \
    postcss \
    react-hot-loader \
    release-it \
    style-loader \
    ts-jest \
    webpack \
    webpack-cli \
    webpack-dev-server \
    @date-io/date-fns

cat > Dockerfile <<- EOM
FROM node:18.18.2

RUN apt-get update
RUN apt-get -y install gettext-base jq
RUN corepack enable && yarn set version 3.1.1

COPY package.json /app/package.json
COPY .yarnrc.yml /app/.yarnrc.yml
COPY .yarn /app/.yarn
COPY yarn.lock /app/yarn.lock

RUN cd /app && yarn install

COPY src /app/src
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.cjs.json /app/tsconfig.cjs.json
COPY tsconfig.esm.json /app/tsconfig.esm.json

WORKDIR /app
EOM
