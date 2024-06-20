FROM mcr.microsoft.com/playwright:v1.44.0

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN cd /app && npm install

COPY playwright.config.ts /app/playwright.config.ts
COPY tsconfig.json /app/tsconfig.json
COPY scripts /app/scripts
COPY pages /app/pages
COPY tests /app/tests
COPY utils /app/utils

WORKDIR /app
