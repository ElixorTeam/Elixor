# Stage 1
FROM node:lts-alpine as base

# Stage 2
FROM base AS deps

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm i --prefer-offline --frozen-lockfile

# Stage 3
FROM base AS build

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm run build && pnpm prune --prod

# Stage 4
FROM base AS runner

ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app/dist ./
EXPOSE 3000

CMD ["node", "./server/entry.mjs"]