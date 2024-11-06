# A Dockerfile is a text document with a series of commands used to build a Docker image

# Use a Node.js image to build the app
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ./moss-test-app/package.json .
RUN npm install

# Copy the rest of the application code and build
COPY ./moss-test-app .
RUN npm run build

# Use a lightweight server for serving static files
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the default port
EXPOSE 80
