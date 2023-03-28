#Amigurumis back
Implementation

node.js: https://nodejs.org/en
express: https://expressjs.com/
mongodb: https://www.mongodb.com
Typescript: https://www.typescriptlang.org/
Jest: https://jestjs.io/
the structure of the project is class oriented and was designed in DDD(Domain, Driven, Design) in order to respect SOLID, KISS and DRY principals.

End Points
Users endpoints:

TOys endpoint:
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

Responsabilidades del Back-end
En este repositorio se encuentra el código fuente del back-end de la aplicación. Las responsabilidades de cada una de las carpetas son las siguientes:

Config
En la carpeta "Config" se encuentran los archivos de configuración del proyecto. Estos archivos contienen información como la configuración de la base de datos, la configuración de la autenticación, la configuración de las rutas, entre otros.

Controller
En la carpeta "Controller" se encuentran los controladores que manejan las solicitudes de la API. Los controladores son responsables de recibir las solicitudes entrantes, coordinar la respuesta del servidor y comunicarse con los servicios necesarios para responder a la solicitud.

Model
En la carpeta "Model" se encuentra el modelo de la base de datos. El modelo define la estructura de la base de datos y los esquemas de validación de los datos que se almacenan en ella.

Router
En la carpeta "Router" se encuentra el enrutador, que es responsable de recibir las solicitudes entrantes y enrutarlas a la función de controlador correspondiente.

Services
En la carpeta "Services" se encuentran los servicios, que son responsables de procesar las solicitudes entrantes y producir una respuesta adecuada. También se encargan de subir imágenes a Firebase.

Middleware
En la carpeta "Middleware" se encuentran los middleware, que son responsables de procesar las solicitudes entrantes antes de que se envíen a la capa de servicios. Los middleware pueden realizar validaciones, transformaciones y otras operaciones en las solicitudes entrantes.

Autenticación y autorización
La carpeta "Auth" contiene los archivos encargados de la verificación de datos de entrada, la validación de formatos y la prevención de ataques de inyección de código.

Repository
En la carpeta "Repository" se encuentra la capa de abstracción entre la capa de acceso a datos y la capa de negocio. Esta capa se encarga de proporcionar métodos de acceso a la base de datos para los controladores y los servicios.

Interfaces
En la carpeta "Interfaces" se encuentran los archivos encargados de definir cómo se comunican diferentes componentes de la aplicación.

Dbconnect
En la carpeta "Dbconnect" se encuentra el archivo encargado de establecer y gestionar la conexión a la base de datos.

Interceptor
La carpeta "Interceptor" contiene los archivos encargados de la gestión de errores.

En resumen, el back-end de la aplicación se encarga de recibir solicitudes, procesarlas y enviar una respuesta adecuada. Cada una de las carpetas tiene una responsabilidad específica en este proceso, lo que facilita la organización y el mantenimiento del código fuente.Responsabilidades del Back-end
En este repositorio se encuentra el código fuente del back-end de la aplicación. Las responsabilidades de cada una de las carpetas son las siguientes:

Config
En la carpeta "Config" se encuentran los archivos de configuración del proyecto. Estos archivos contienen información como la configuración de la base de datos, la configuración de la autenticación, la configuración de las rutas, entre otros.

Controller
En la carpeta "Controller" se encuentran los controladores que manejan las solicitudes de la API. Los controladores son responsables de recibir las solicitudes entrantes, coordinar la respuesta del servidor y comunicarse con los servicios necesarios para responder a la solicitud.

Model
En la carpeta "Model" se encuentra el modelo de la base de datos. El modelo define la estructura de la base de datos y los esquemas de validación de los datos que se almacenan en ella.

Router
En la carpeta "Router" se encuentra el enrutador, que es responsable de recibir las solicitudes entrantes y enrutarlas a la función de controlador correspondiente.

Services
En la carpeta "Services" se encuentran los servicios, que son responsables de procesar las solicitudes entrantes y producir una respuesta adecuada. También se encargan de subir imágenes a Firebase.

Middleware
En la carpeta "Middleware" se encuentran los middleware, que son responsables de procesar las solicitudes entrantes antes de que se envíen a la capa de servicios. Los middleware pueden realizar validaciones, transformaciones y otras operaciones en las solicitudes entrantes.

Autenticación y autorización
La carpeta "Auth" contiene los archivos encargados de la verificación de datos de entrada, la validación de formatos y la prevención de ataques de inyección de código.

Repository
En la carpeta "Repository" se encuentra la capa de abstracción entre la capa de acceso a datos y la capa de negocio. Esta capa se encarga de proporcionar métodos de acceso a la base de datos para los controladores y los servicios.

Interfaces
En la carpeta "Interfaces" se encuentran los archivos encargados de definir cómo se comunican diferentes componentes de la aplicación.

Dbconnect
En la carpeta "Dbconnect" se encuentra el archivo encargado de establecer y gestionar la conexión a la base de datos.

Interceptor
La carpeta "Interceptor" contiene los archivos encargados de la gestión de errores.

En resumen, el back-end de la aplicación se encarga de recibir solicitudes, procesarlas y enviar una respuesta adecuada. Cada una de las carpetas tiene una responsabilidad específica en este proceso, lo que facilita la organización y el mantenimiento del código fuente.
