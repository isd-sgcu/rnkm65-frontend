FROM node:16.15-alpine AS build
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

FROM node:16.15-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./
COPY --from=build /app/next-i18next.config.js ./
COPY --from=build /app/node_modules ./
RUN npm install --production
EXPOSE 3000
CMD ["npm","run", "start"]