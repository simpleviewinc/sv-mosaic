FROM node:18.18.2

ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/netskope.crt
COPY netskope.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates

RUN apt-get update && \
    apt-get -y install gettext-base jq

RUN corepack enable && yarn set version 3.1.1

COPY --from=mosaic:local /app/package.json /mosaic/package.json
COPY --from=mosaic:local /app/dist /mosaic/dist
COPY --from=mosaic:local /app/node_modules /mosaic/node_modules
COPY package.json /app/package.json
COPY .yarnrc.yml /app/.yarnrc.yml
COPY .yarn /app/.yarn
COPY yarn.lock /app/yarn.lock

RUN cd /app && yarn install

COPY scripts /app/scripts
RUN chmod +x /app/scripts/publish-init
COPY stories /app/stories
COPY utils /app/utils
COPY .storybook /app/.storybook
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.node.json /app/tsconfig.node.json
COPY vite.config.ts /app/vite.config.ts

WORKDIR /app

RUN yarn run build
