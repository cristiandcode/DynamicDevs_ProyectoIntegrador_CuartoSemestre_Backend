# Sitio en construcción

# 🍫 ChocoDevs – Backend E-commerce de Alfajores e Infusiones

**ChocoDevs** es un **backend para un proyecto de e-commerce** desarrollado con enfoque profesional y académico.  
Permite gestionar productos (alta, baja, edición y listado) conectando con **MongoDB Atlas** y sirve como API para un frontend de tienda online. Además, se utilizaron **Postman** para pruebas de endpoints y simulación de peticiones.

---

## 🧠 Objetivos del proyecto
- Desarrollar un **backend completo** para la gestión de productos de un e-commerce.  
- Implementar un **CRUD completo de productos** con validaciones: alta, baja, modificación y obtención de productos.  
- Conectar con **MongoDB Atlas** usando Mongoose.  
- Permitir integración con un frontend para consumo de la API.  
- Aplicar buenas prácticas de desarrollo web y estructura escalable.  
- Probar y depurar la API utilizando **Postman**.

---

## 👨‍💻 Equipo de desarrollo


| Rol | Nombre | GitHub | LinkedIn |
|-----|--------|--------|----------|
| Líder Técnico Backend | Diaz Cristian Ivan | <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="16"/> [GitHub](https://github.com/cristiandcode)  | <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="16"/> [LinkedIn](https://www.linkedin.com/in/cristiandcode/) |
| Desarrollador | Cortez Hector | <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="16"/> [GitHub](https://github.com/CoraYako)  | <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="16"/> [LinkedIn](https://www.linkedin.com/in/hector-cortez-cy/) |
| Desarrollador | Leytes Rodrigo | <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="16"/> [GitHub](https://github.com/Roddri19)  | <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="16"/> [LinkedIn](https://www.linkedin.com/in/rodrigoleytes/) |
| Desarrollador | Gimenez Miqueas | <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="16"/> [GitHub](https://github.com/miquigz)  | <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="16"/> [LinkedIn](https://www.linkedin.com/in/miqueasgimenez/) |
| Desarrollador | Paz Ezequiel | <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="16"/> [GitHub]()  | <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="16"/> [LinkedIn]() |
| Desarrollador | Diaz Federico | <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="16"/> [GitHub]()  | <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="16"/> [LinkedIn]() |
| Desarrollador | Vignati Mauro | <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="16"/> [GitHub]()  | <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="16"/> [LinkedIn]() |


---

## ⚙️ Tecnologías utilizadas

### 🗄️ Backend

| Tecnología | Versión | Uso |
|------------|--------|-----|
| Node.js | 20.x | Servidor y API REST |
| Express.js | 5.1.0 | Framework backend |
| Mongoose | 8.19.1 | Conexión y manejo de MongoDB |
| CORS | 2.8.5 | Permitir peticiones externas |
| Morgan | 1.10.1 | Logs de requests en consola |
| Postman | Última | Pruebas y depuración de endpoints |

---

## 🧩 Funcionalidades principales
- CRUD de productos: alta, baja, edición y listado  
- Validación de datos de productos (nombre, precio, categoría, imágenes, descripciones)  
- Conexión segura con **MongoDB Atlas**  
- Respuestas en formato JSON para consumir desde el frontend  
- Logs de peticiones para monitoreo y debugging  
- Pruebas de API y simulación de peticiones con **Postman**

---



## 📫 Contacto

**Diaz Cristian Ivan – Líder Técnico Backend - Frontend - Responsable del proyecto**  
- [LinkedIn](https://www.linkedin.com/in/cristiandcode/)  
- [GitHub](https://github.com/cristiandcode)


## 🚀 Clonar y ejecutar el proyecto

1️⃣ **Clonar el repositorio**  
```bash
git clone <https://github.com/PowerSystem2024/DynamicDevs_ProyectoIntegrador_CuartoSemestre_Backend.git>

cd Proyecto4semestreBackend
npm install

MONGODB_URI=<URI_MONGO>
PORT=4001
npm run dev
## El servidor debería imprimir en consola:
Base de datos conectada
Estoy escuchando el puerto 4001


