# Use an official Node.js runtime as the base image
FROM alpine:3.20

ENV NODE_VERSION 20.16.0


# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build


# Set the command to serve the build folder
CMD ["npm",  "start"]

# Expose port 3000 to be accessible from outside the container
EXPOSE 3000
