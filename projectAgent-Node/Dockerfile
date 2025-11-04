FROM node:20-slim AS builder

WORKDIR /projectAgent/projectAgent-Node

RUN rm -fr ./node_modules/

COPY package*.json ./
RUN npm ci --include=dev

COPY . .
RUN pwd; ls -a; cat ./package.json; npm list dotenv; npm run; npm run build;

FROM node:20-slim AS app

WORKDIR /projectAgent/projectAgent-Node

COPY --from=builder /projectAgent/projectAgent-Node/dist/index.cjs .

ENV PORT=8080
EXPOSE 8080

#CMD ["npm", "run", "dev"]
CMD ["node", "index.cjs"]
