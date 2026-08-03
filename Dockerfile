FROM node:24.18.1

ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/netskope.crt
COPY netskope.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates

RUN apt-get update && apt-get -y install gettext-base jq \
	&& rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ./
COPY packages/mosaic/package.json ./packages/mosaic/package.json
COPY packages/storybook/package.json ./packages/storybook/package.json
COPY packages/consumer-tests/package.json ./packages/consumer-tests/package.json
COPY packages/e2e/package.json ./packages/e2e/package.json

RUN pnpm install --frozen-lockfile

COPY packages/mosaic ./packages/mosaic
COPY packages/storybook ./packages/storybook
COPY packages/consumer-tests ./packages/consumer-tests
COPY packages/e2e ./packages/e2e
COPY tsconfig.json ./tsconfig.json

RUN pnpm --filter @simpleview/sv-mosaic build \
	&& pnpm --filter @simpleview/sv-mosaic-storybook build

WORKDIR /app
