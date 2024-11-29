# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Build the application
RUN npm run build

# Install a lightweight HTTP server to serve the built app
RUN npm install -g serve

# Command to start the application
CMD ["serve", "-s", "dist", "-l", "5173"]
