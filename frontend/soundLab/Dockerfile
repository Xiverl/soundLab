# Этап сборки
FROM node:18.17.1-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Этап для запуска
FROM node:18.17.1-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist

CMD ["tail", "-f", "/dev/null"]