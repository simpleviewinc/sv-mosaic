#!/bin/bash

mkdir -p containers/lib

find . '(' \
        '(' \
            -path './.yarn' -o \
            -path './src/**/*.tsx' -o \
            -path './src/**/*.ts' -o \
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
    -exec cp -r --parents \{\} ./containers/lib \;

cd ./containers/lib
yarn install
