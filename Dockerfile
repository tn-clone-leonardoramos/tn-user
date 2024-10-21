FROM node:20-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

# Fase de desarrollo
FROM base AS development

# Instala las dependencias de desarrollo
RUN npm install

# Expone el puerto donde corre la app
EXPOSE 3000

# Comando para ejecutar en modo desarrollo
CMD ["npm", "run", "start:dev"]

# Fase de producción
FROM base AS production

# Compila el proyecto
RUN npm run build

# Instala solo las dependencias necesarias para producción
RUN npm ci --only=production

# Exponemos el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar en modo producción
CMD ["npm", "run", "start:prod"]
