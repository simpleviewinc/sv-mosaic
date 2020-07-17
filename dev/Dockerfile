FROM node:12.15.0

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN cd /app && npm install

WORKDIR /app