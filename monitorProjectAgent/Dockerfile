# Stage 1: Build
FROM node:20 AS builder

WORKDIR ./

# Install Dependancies
COPY ./package*.json ./
RUN npm ci
RUN npm list ; ls ; ls ./


# Copy source code
COPY . .

# Rn TS code
CMD ["npm", "run", "start"]
