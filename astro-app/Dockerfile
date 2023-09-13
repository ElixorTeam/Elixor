# Stage 1
FROM node:lts-alpine as base

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Stage 2
FROM base AS deps

COPY package.json pnpm-lock.yaml ./
RUN pnpm fetch --prod && pnpm i -r --offline --prod

# Stage 3
FROM base AS build

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm build && pnpm prune

# Stage 4
FROM base AS runner

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

CMD ["node", "./dist/server/entry.mjs"]