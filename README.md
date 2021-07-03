
# Prueba Tecnica Backend / Apirest - :computer: Parque Explora

## :computer: Requerimientos

Debes contar en tu pc con `NPM` y `Node.js` para instalarlos ingresa [aquí](https://nodejs.org/en/)

## :technologist: Para obtener el proyecto

Para clonar este repositorio realiza el siguiente comando:

```bash
$ git clone https://github.com/j-roma/ep-backend.git 
```
ingresa a la carpeta donde se clono el repositorio

## 🔥 Para empezar 

Primero necesitas instalar las dependencias requeridas con:

```bash
npm install
# o
yarn
```

Este proyecto fue reaalizado con Express y NodeJs, para procesar las imagenes se utilizo multer.

Para correr el servidor de desarrollo es con:

```bash
npm run dev
# o
yarn dev
```

## Peticiones

Peticiones configuradas en la Apirest

```bash
GET/ localhost:3001/ //Obtienes todas las Experiencias
GET/ localhost:3001/{id} //Obtienes la experiencia por su id
GET/ localhost:3001/salas/{nombre} //Obtienes las experiencias por sala (Salas: acuario, musica, vivario)

POST/ localhost:3001/ //Insertas una nueva experiencia

PUT/ localhost:3001/{id} //Actualizas una experiencia por su id

DELETE/ localhost:3001/{id} //Borras una experiencia por su id


```

Abrir [http://localhost:3001](http://localhost:3001) en tu navegador para ver los resultados.


## :man_technologist: Autor

* **Jhosep Ropero**  - [@J-Roma](https://github.com/J-Roma)