# using a base image to build
FROM node:21.1.0-alpine3.17 as build

# define how to build
WORKDIR /app
COPY . .
RUN npm install \
 && npm run build

# use nginx image to host
FROM nginx:1.25.3-alpine-slim
COPY --from=build /app/dist/bow-ui /usr/share/nginx/html