# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --ignore-scripts

# Copy the rest of the application files
COPY ./public /public
COPY ./src /src
COPY ./vite.config.js ./vite.config.js
COPY ./sonar-project.properties sonar-project.properties
COPY ./package.json ./package.json
COPY ./eslint.config.js eslint.config.js
COPY ./index.html index.html
COPY ./babel.config.json babel.config.json

# Expose the port the app runs on
EXPOSE 5173

# Build the application
RUN npm run build

# Install a lightweight HTTP server to serve the built app
RUN npm install -g serve

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot

USER nonroot

# Command to start the application
CMD ["serve", "-s", "dist", "-l", "5173"]
