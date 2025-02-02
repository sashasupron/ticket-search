# Step 1: Base image for development
FROM node:18 AS dev

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose the development port
EXPOSE 3000

# Command for development
CMD ["npm", "run", "dev"]

# Step 2: Build the application
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files and install production dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy the source code
COPY . .

# Build the Next.js application
RUN npm run build

# Step 3: Production image
FROM node:18 AS prod

# Set working directory
WORKDIR /app

# Copy built application and production dependencies from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY package.json next.config.js ./

# Expose the production port
EXPOSE 3000

# Command for production
CMD ["npm", "run", "start"]