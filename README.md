# Secuencia432-TremendoTerritorio
API backend para la plataforma Tremendo Territorio, desarrollada con Node.js, Express y TypeScript.

## Descripción del Proyecto
Este proyecto proporciona la API REST que alimenta la plataforma Tremendo Territorio. Maneja la autenticación de usuarios, gestión de datos y todas las operaciones del backend necesarias para el funcionamiento de la aplicación.

## Características principales:
API REST desarrollada con Express.js y TypeScript
Autenticación JWT con bcrypt para encriptación de contraseñas
Conexión a base de datos MySQL
CORS configurado para peticiones cross-origin
Arquitectura escalable y mantenible

## Instalación y Configuración
###Prerrequisitos

Node.js (versión 18 o superior)
npm o yarn
MySQL (versión 8.0 o superior)
Git

### Pasos de instalación

#### Clonar el repositorio:
bashgit clone https://github.com/tu-organizacion/tremendo-territorio-backend.git
cd tremendo-territorio-backend

#### Instalar dependencias:
bashnpm install

#### Configurar variables de entorno:
Crear un archivo .env en la raíz del proyecto:
env# Base de datos
DB_HOST=localhost
DB_PORT=3306
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=tremendo_territorio

# JWT
JWT_SECRET=tu_clave_secreta_muy_segura
JWT_EXPIRES_IN=24h

# Servidor
PORT=3000
NODE_ENV=development

#### Configurar la base de datos:
bash# Crear la base de datos en MySQL
mysql -u root -p
CREATE DATABASE tremendo_territorio;

#### Compilar el proyecto:
bashnpm run build
