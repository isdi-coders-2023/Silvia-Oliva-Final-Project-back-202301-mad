#Backend Amigurumis
con Node.js, TypeScript y MongoDB
Este es un ejemplo de cómo crear un backend utilizando Node.js, TypeScript y MongoDB. En este proyecto se utilizan las siguientes tecnologías y herramientas:

Node.js: plataforma para desarrollar aplicaciones en JavaScript del lado del servidor.
TypeScript: un superconjunto de JavaScript que permite agregar tipado estático y otros recursos a JavaScript.
MongoDB: una base de datos NoSQL orientada a documentos.
Express: un framework de Node.js para construir aplicaciones web y APIs RESTful.
Mongoose: una librería de Node.js para conectarse a MongoDB y trabajar con ella de manera más sencilla.
Nodemon: una herramienta que reinicia automáticamente el servidor cuando se detectan cambios en el código.
Requisitos
Para ejecutar este proyecto, necesitarás tener instalado lo siguiente en tu sistema:

Node.js (v12 o superior).
MongoDB (v4 o superior).
Instalación
Clona este repositorio en tu ordenador:
bash
Copy code
git clone https://github.com/tu-usuario/backend-node-typescript-mongodb.git
Entra en la carpeta del proyecto:
bash
Copy code
cd backend-node-typescript-mongodb
Instala las dependencias:
Copy code
npm install
Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:
bash
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost:27017/tu-base-de-datos
Inicia el servidor:
sql
Copy code
npm start
Estructura del proyecto
El proyecto tiene la siguiente estructura de carpetas y archivos:

go
Copy code
├── src
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── app.ts
│ └── index.ts
│ ├── entities.ts
│ └── repository.ts
│ └── services.ts
│ └── interfaces.ts
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json
src/controllers: contiene los controladores de las diferentes rutas de la aplicación.
src/models: contiene los modelos de las entidades de la aplicación.
src/routes: contiene las definiciones de las rutas de la aplicación.
src/app.ts: archivo que inicializa la aplicación.
src/index.ts: archivo principal que inicia el servidor y se conecta a la base de datos.
.env.example: archivo con la definición de las variables de entorno que se deben incluir en el archivo .env.
.gitignore: archivo con la definición de los archivos y carpetas que se deben ignorar al subir el proyecto a un repositorio de git.
package-lock.json y package.json: archivos de configuración de las dependencias y scripts de la aplicación.
tsconfig.json: archivo de configuración de TypeScript.
Uso
La aplicación cuenta con las siguientes rutas:

usersRouter.get('/all', logged, controller.getAll.bind(controller));
usersRouter.get('/:id', logged, controller.getById.bind(controller));
usersRouter.post('/register', controller.register.bind(controller));
usersRouter.post('/login', controller.login.bind(controller));
usersRouter.delete('/:id', logged, controller.delete.bind(controller));

rutas de toys:

"/toy": cargar todos los muñecos (get)
toysRouter.get('/all', logged, controller.getAll.bind(controller));
"/toy /:id": cargar un muñeco(get)
toysRouter.get('/:id', logged, controller.getById.bind(controller));
"/toy/add": crear el nuevo muñeco (post)
toysRouter.post('/add', controller.create.bind(controller));
"/toy/change": modificar muñeco (path)
toysRouter.patch('/change', controller.update.bind(controller));
"/:id": borrar el nuevo muñeco(delete)
toysRouter.delete('/:id', logged, controller.delete.bind(controller));
