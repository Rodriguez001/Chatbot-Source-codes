FROM node:18 AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

FROM node:18-alpine

WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/.next ./.next

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
