FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY ./ClientApp/ /app
RUN npm install
RUN npm install @angular/cli
EXPOSE 4200