FROM node:slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 20500 (ensure your app runs on this port)
EXPOSE 10800

# Start the application
CMD ["npm", "start"]
