# Use the official Node.js image as a parent image
FROM node:18.13 AS build
WORKDIR /app
COPY package*.json ./
COPY angular.json ./
COPY tsconfig*.json ./
COPY src ./src
RUN npm install --legacy-peer-deps
RUN npm run build -- --project=CVMFront --configuration production

# Use the official Nginx image to serve the app
FROM nginx:alpine
COPY --from=build /app/dist/CVMFront /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]