FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --include=dev

COPY . .
RUN npm run build

FROM node:20-slim AS app

WORKDIR /app

COPY --from=builder /app/dist/index.js .

ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]