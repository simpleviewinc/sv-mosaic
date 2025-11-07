FROM mcr.microsoft.com/playwright:v1.56.1-jammy

ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/netskope.crt
COPY netskope.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN cd /app && npm install

COPY playwright.config.ts /app/playwright.config.ts
COPY tsconfig.json /app/tsconfig.json
COPY pages /app/pages
COPY tests /app/tests
COPY utils /app/utils
COPY fixtures.ts /app/fixtures.ts

WORKDIR /app

COPY scripts /app/scripts
RUN chmod +x /app/scripts/start
