FROM mcr.microsoft.com/playwright:v1.56.1-jammy

ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/netskope.crt
COPY netskope.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates

RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml .npmrc ./
COPY packages/mosaic/package.json ./packages/mosaic/package.json
COPY packages/storybook/package.json ./packages/storybook/package.json
COPY packages/consumer-tests/package.json ./packages/consumer-tests/package.json
COPY packages/e2e/package.json ./packages/e2e/package.json

RUN pnpm install --frozen-lockfile --filter @simpleview/sv-mosaic-e2e...

COPY packages/mosaic ./packages/mosaic
COPY packages/e2e ./packages/e2e

# Mosaic exports resolve to dist/; build library only (not Storybook).
RUN pnpm --filter @simpleview/sv-mosaic build

WORKDIR /app/packages/e2e

COPY packages/e2e/scripts/start /app/packages/e2e/scripts/start
RUN chmod +x /app/packages/e2e/scripts/start
