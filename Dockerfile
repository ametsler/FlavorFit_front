# Шаг 1: Установка зависимостей и сборка
FROM node:22-slim AS builder
WORKDIR /app
COPY package.json ./
RUN npm install

# ДОБАВИТЬ: Перечислите переменные окружения, нужные вашему приложению при сборке
# ENV NEXT_PUBLIC_SERVER_URL="http://localhost:4200"
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Шаг 2: Финальный образ
FROM node:22-slim AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Безопасность: работаем не из-под root
RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs -m nodeapp

# Копируем только результаты автономной сборки standalone
COPY ./public ./public
COPY --from=builder --chown=nodeapp:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nodeapp:nodejs /app/.next/static ./.next/static

USER nodeapp

EXPOSE 3000

CMD ["node", "server.js"]
