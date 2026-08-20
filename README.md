# 🏋️‍♂️ Fitzone App - Sistema de Gestión de Entrenamiento Personalizado

> **Fitzone App** es una plataforma digital (móvil y web) diseñada para optimizar la experiencia de entrenamiento personalizado en gimnasios de alta afluencia (diseñada conceptualmente para *Strong Gym*). Permite a los usuarios acceder de manera autónoma a sus rutinas, planes de alimentación y seguimiento físico, aliviando la carga de trabajo de los entrenadores y garantizando la continuidad en la atención al cliente.

---

## 📄 Descripción General

En gimnasios con alta afluencia, los entrenadores cuentan con tiempo limitado para atender a cada usuario de forma personalizada. **Fitzone App** resuelve esta problemática ofreciendo una herramienta en la que:
- Los **entrenadores** pueden crear, asignar y modificar planes de entrenamiento y alimentación de forma centralizada.
- Los **clientes/usuarios** pueden consultar sus rutinas diarias de manera autónoma, ver detalles de ejecución (técnica, imágenes y descripciones), registrar parámetros de entrenamiento, calidad del sueño, motivación y mediciones físicas (plicometría, porcentaje de grasa, etc.).

---

## 🛠 Stack Tecnológico

El proyecto utiliza un conjunto de tecnologías modernas, eficientes y escalables:

### **Frontend**
* **Flutter / Dart:** Framework multiplataforma para la creación del aplicativo móvil y web.

### **Backend**
* **Node.js:** Entorno de ejecución para JavaScript en el servidor.
* **Express.js:** Framework web minimalista para la creación de la API RESTful.
* **JSON Web Tokens (JWT):** Autenticación y autorización segura.

### **Base de Datos**
* **MongoDB:** Base de datos NoSQL orientada a documentos para almacenar la información de usuarios, rutinas, historial y pagos.
* **Mongoose:** ODM (Object Data Modeling) para interactuar con MongoDB desde Node.js.

### **Herramientas de Desarrollo y Despliegue**
* **Git & GitHub:** Control de versiones.
* **Postman:** Pruebas e inspección de la API REST.

---

## ✨ Características del Proyecto

### 1. **Gestión de Perfiles y Autenticación**
- Registro e Inicio de sesión seguro con roles diferenciados (**Cliente**, **Entrenador**, **Administrador**).

### 2. **Planes de Entrenamiento Personalizados**
- Selección de periodos (Mesociclos / Macrociclos) y frecuencia semanal.
- Distribución de grupos musculares, series, repeticiones y descansos.
- Consulta de catálogo de ejercicios con detalles de técnica.

### 3. **Seguimiento Biométrico y Físico**
- Registro de mediciones físicas: Plicometría, circunferencias corporales y porcentaje de grasa corporal.

### 4. **Monitoreo Holístico y Salud**
- Evaluación de la calidad del sueño y fatiga general.
- Registro diario de motivación y estado psicológico/estrés.
- Seguimiento de parámetros de entrenamiento (agujetas, pulsaciones en reposo, horas de sesión).

### 5. **Control Alimentario**
- Diario de alimentación y distribución de requerimientos nutricionales / calorías.

### 6. **Gestión de Pagos y Notificaciones**
- Registro y confirmación de pagos del servicio de entrenamiento personalizado.
- Notificaciones y alertas automáticas.

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para clonar e instalar el proyecto en tu entorno local de desarrollo.

### **Requisitos Previos**
Asegúrate de tener instalado:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v16+)
- [Flutter SDK](https://flutter.dev/) (v3.0+)
- [MongoDB](https://www.mongodb.com/) (Instancia local o cluster en MongoDB Atlas)

---

### **1. Clonar el repositorio**
```
git clone https://github.com/strongym889-ship-it/fitzone
cd fitzone-app
