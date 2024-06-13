# Trabajo practico Laboratorio de programacion y lenguaje - Real_Madrid.js
## integrantes:
- Ailen Villar  
- Ramiro Lazarte  
## Descipcion:  
Este proyecto es una API RESTful construida con Express.js que facilita la gestión de carreras y materias en una universidad. La API ofrece funcionalidades CRUD (Crear, Leer, Actualizar y Eliminar) para carreras y materias, permitiendo a los usuarios llevar a cabo operaciones como la creación de nuevas carreras, la obtención de información detallada sobre una carrera específica, la actualización de datos de materias. y la eliminación de materia
## Dependencias:
- npm (v6 o superior)
- Visual Studio Code  
- Node.js (v14 o superior)
## Ejecucion:
Escribir en la consoda de Visual studio los siguientes comandos:  
- npm i express
- npm i express joi
- npm i -D nodemon
- npm run dev (para empezar a correr el servidor)
## Endpoints de la API:
- Get /data.carreras Resultado: 200 Obtener todas la carreras
- Get /data.carreras/:id Resultado: 200, 404 Obtener una carrera en particular
- Post /data.carreras Resultado:201 , 400 Crear una Carrera
- Delete /data.carreras/:id Resultado:200, 404 Borra una carrera en particular
- Post /data.carreras/:id/materia Resultado:201, 404, 400 Crea un materia dentro de una carrera
- Get /data.carreras/:id/materias Resultado:200, 404 Obtener todas la materias de una Carrera
- Get /data.materias Resultado:200 Obtener todas las materias
- Get /data.materias/:id Resultado:200, 404 Obtener una materia en particular
- Delete /data.materias/:id Resultado:200, 404 Borra una materia en particular


## Estructura del programa:
![image](https://github.com/Ramovich14/Trabajo-practico/assets/143752245/53553969-0477-410d-96cb-db42b9a2d332)

