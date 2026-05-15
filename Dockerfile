# Шаг 1: Установка зависимостей через Bun (использует ваш bun.lock)
FROM oven/bun:1.3.11-slim AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Шаг 2: Сборка приложения через Node.js
FROM node:20-slim AS builder
WORKDIR /app
# Копируем node_modules, установленные Bun-ом
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ДОБАВИТЬ: Перечислите переменные окружения, нужные вашему приложению при сборке
# ENV NEXT_PUBLIC_SERVER_URL="http://localhost:4200"

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Шаг 3: Финальный образ на Bun
FROM oven/bun:1.3.11-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Безопасность: работаем не из-под root
RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs -m bunapp

# Копируем только результаты автономной сборки standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=bunapp:nodejs /app/.next/standalone ./
COPY --from=builder --chown=bunapp:nodejs /app/.next/static ./.next/static

USER bunapp

EXPOSE 3000

# Запуск Next.js через рантайм Bun
CMD ["bun", "server.js"]
