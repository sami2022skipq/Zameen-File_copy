# Use the official Node.js image with tag 18
FROM node:18.17

# Set the working directory inside the container
WORKDIR /app

# Set environment variables
ENV JWT_SECRET="ahmednazeer"
ENV JWT_LIFETIME="1d"
ENV MONGO_URL="mongodb+srv://f200282:Ahmed9211@cluster0.jtmatto.mongodb.net/zam?retryWrites=true&w=majority"
ENV PORT=5000

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port specified in the environment variable
EXPOSE $PORT

# Start the backend application
CMD ["npm", "start"]
