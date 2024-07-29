# Use an official Node.js runtime as the base image
FROM node:20.12.2

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
