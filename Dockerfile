FROM node:18-slim

# Install PM2 globally (optional if you use PM2 to run the app in production)
RUN npm install -g pm2@4

# Set working directory
WORKDIR /var/app

# Copy package files and install dependencies
COPY package.json /var/app/package.json

# Install dependencies using Yarn
RUN yarn

# Copy the rest of the application files
COPY ./ /var/app

# Build the application
RUN yarn build

# Optionally expose a volume for logs (commented out)
# VOLUME [ "/var/app/log" ]
# VOLUME [ "/root/.pm2/logs" ]

# Command to start the app in development mode
CMD ["yarn", "dev"]
