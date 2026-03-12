# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app


# Install Dependancies
COPY ./package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Run TS code
CMD ["npm", "run", "start"]

# Stage2: Production
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE ENV=production

COPY package*.json ./
RUN npm ci --omit=dev # Omit dev dependencies

COPY --from=builder /app/dist ./dist

EXPOSE 8080
CMD ["node", "dist/index.js"]
