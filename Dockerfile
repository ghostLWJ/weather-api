FROM node:16.13.0-alpine as build

WORKDIR /app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000