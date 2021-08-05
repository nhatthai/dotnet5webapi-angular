FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY ./ClientApp/package.json /app
RUN npm install
COPY ./ClientApp/ /app
RUN npm start