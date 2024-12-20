# Stage 1: Build
FROM node:18-slim AS build

WORKDIR /var/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./ ./
RUN yarn build

# Stage 2: Production
FROM node:18-slim

WORKDIR /var/app

# Copy only the necessary files from the build stage
COPY --from=build /var/app /var/app
RUN yarn install --production --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "start"]
