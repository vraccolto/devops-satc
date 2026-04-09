FROM node:20-alpine
Workdir /app
COPY . .
workdir /app/agendamentos
RUN npm install
RUN npm run build
expose 4173
CMD ["npm","run","preview"]