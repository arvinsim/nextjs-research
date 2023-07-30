FROM node:18-alpine AS base

WORKDIR /app

COPY --link package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD ["node", ".next/standalone/server.js"]
