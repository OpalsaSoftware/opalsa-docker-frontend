# Etapa de construcción
FROM node:16 as build

WORKDIR /usr/src/app

# Copia los archivos de definición de paquetes
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Ejecuta el script de construcción
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copia la carpeta dist a Nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
