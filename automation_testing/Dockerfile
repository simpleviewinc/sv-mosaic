FROM node:16.13.1

RUN apt-get update && \
    apt-get -y install gettext-base jq libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev libcups2 libwayland-client0 libxcomposite-dev libxdamage-dev libxrandr-dev

COPY package.json /app/package.json
RUN cd /app && npm install && npx playwright install

COPY pages /app/pages
COPY tests /app/tests
COPY utils /app/utils
COPY sv-mosaic.config.ts /app/sv-mosaic.config.ts
COPY README.md /app/README.md

WORKDIR /app
