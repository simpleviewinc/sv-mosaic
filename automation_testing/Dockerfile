FROM node:16.13.1

RUN apt-get update && \
    apt-get -y install gettext-base jq

COPY package.json /app/package.json
RUN cd /app && npm install && npx playwright install

COPY pages /app/pages
COPY tests /app/tests
COPY utils /app/utils
COPY sv-mosaic.config.ts /app/sv-mosaic.config.ts
COPY README.md /app/README.md

WORKDIR /app
