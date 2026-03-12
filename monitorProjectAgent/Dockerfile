# Stage 1: Build
FROM node:20 AS builder

WORKDIR ./

# Copy source code
COPY . .

# Install Dependancies
COPY ./package*.json ./
RUN npm ci
RUN npm list ; ls ; ls home


# Rn TS code
CMD ["npm", "run", "start"]
