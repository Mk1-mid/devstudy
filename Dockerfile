# Usar imagen oficial de Node.js
FROM node:20-slim

# Instalar Python 3
RUN apt-get update && \
    apt-get install -y python3 && \
    rm -rf /var/lib/apt/lists/* && \
    alternatives --install /usr/bin/python python /usr/bin/python3 1

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias de Node.js
RUN npm install --production

# Copiar resto del código
COPY . .

# Exponer puerto (Railway asignará dinámicamente via PORT env var)
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
