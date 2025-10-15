# 📚 Biblioteca API

API GraphQL construida con **Node.js v20**, **Apollo Server** y **MongoDB**, diseñada para gestionar libros y usuarios.

---

## Características

- API GraphQL basada en Apollo Server.  
- Base de datos MongoDB con Mongoose.  
- Servicio de MongoDB con Docker.
- Variables de entorno.

---

## Requisitos

Estas son las herramientas que se requieren para ejecutar el proyecto:

- [Node.js v20+](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [npm](https://www.npmjs.com/)

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto basado en el archivo `.env.example`:

```bash
cp .env.example .env
```

---

## Instalar dependencias

Instalar las dependencias del proyecto:

```bash
npm install
```

---

## Levantar el proyecto

Ejecutar en la raíz del proyecto el siguiente comando para inicializar el conteneder de Docker:

```bash
docker compose up -d
```

Luego, ejecutar el siguiente comando para levantar el servidor de Apollo Server:

```bash
npm run dev
```

Si todo está correcto, verás un mensaje indicando que el servidor está corriendo en el puerto 4000 y que se está conectando a la base de datos:
```bash
MongoDB connected!
Server running at http://localhost:4000/
```

---

## Notas

Si ya cuentas con una instancia de MongoDB en tu máquina, puedes cambiar la URL de la base de datos en el archivo `.env` para que apunte a tu instancia.

---

## Tests

Para ejecutar los tests, ejecuta el siguiente comando:

```bash
npm run test
```

---