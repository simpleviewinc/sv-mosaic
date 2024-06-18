FROM node:18.18.2

RUN apt-get update && apt-get -y install gettext-base jq

COPY package.json /app/package.json

WORKDIR /app
