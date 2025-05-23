FROM node:18.18.2

ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/netskope.crt
COPY netskope.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates

RUN apt-get update && apt-get -y install gettext-base jq

RUN corepack enable && yarn set version 3.1.1

COPY package.json /app/package.json
COPY .yarnrc.yml /app/.yarnrc.yml
COPY .yarn /app/.yarn
COPY yarn.lock /app/yarn.lock

COPY --from=mosaic:local /app/package.json /mosaic/package.json
COPY --from=mosaic:local /app/dist /mosaic/dist

RUN cd /app && yarn install

COPY index.ts /app/index.ts
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.cjs.json /app/tsconfig.cjs.json
COPY tsconfig.esm.json /app/tsconfig.esm.json

WORKDIR /app

CMD ["yarn", "start"]
