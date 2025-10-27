FROM node:20-slim AS builder

WORKDIR /projectAgent/projectAgent-Node

COPY package*.json ./
RUN npm ci --include=dev

COPY . .
RUN npm run build

FROM node:20-slim AS app

WORKDIR /projectAgent/projectAgent-Node

COPY --from=builder /projectAgent/projectAgent-Node/dist/index.cjs .

ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]