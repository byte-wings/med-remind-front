# Use the official Node.js image as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the application
RUN npm run build

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Expose port 5000 to the outside world
EXPOSE 5000

# Start the server
CMD ["serve", "-s", "build", "-l", "5000"]
