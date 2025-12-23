FROM node:22-slim

WORKDIR /usr/src/app

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./

COPY prisma ./prisma
COPY prisma.config.ts ./prisma.config.ts

RUN npm ci

COPY . .

CMD ["sh", "-c", "npm run db:deploy && npm run dev"]
