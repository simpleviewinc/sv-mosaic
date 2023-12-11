FROM node:18.18.2

RUN apt-get update && \
    apt-get -y install gettext-base jq

RUN corepack enable && yarn set version 3.1.1

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN cd /app && yarn install

WORKDIR /app

CMD ["yarn", "ci:storybook"]
