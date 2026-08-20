Aquí tienes todo el archivo `README.md` formateado en un **único bloque de código completo**, listo para que lo copies y pegues directamente en el repositorio:

```
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

### **Herramientas de Desarrollo**
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
git clone [https://github.com/tu-usuario/fitzone-app.git](https://github.com/tu-usuario/fitzone-app.git)
cd fitzone-app

```

---

### **2. Configuración del Backend (Node.js + Express)**

1. Entra al directorio del backend:
```
cd backend

```


2. Instala las dependencias:
```
npm install

```


3. Crea un archivo `.env` en la raíz de la carpeta `backend` con las siguientes variables de entorno:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/fitzone_db
JWT_SECRET=tu_clave_secreta_jwt

```


4. Inicia el servidor de desarrollo:
```
npm run dev

```



---

### **3. Configuración del Frontend (Flutter)**

1. En una nueva terminal, navega a la carpeta del frontend:
```
cd frontend

```


2. Obtén las dependencias de Flutter:
```
flutter pub get

```


3. Ejecuta la aplicación en un emulador o dispositivo conectado:
```
flutter run

```


---

## 🏗 Estructura y Arquitectura del Proyecto

El proyecto está dividido en dos directorios principales siguiendo la separación entre el cliente (Frontend) y el servidor (Backend).

```
fitzone-app/
├── backend/                  # Servidor de API RESTful
│   ├── src/
│   │   ├── config/           # Configuración de BD y constantes
│   │   ├── controllers/      # Lógica de negocio (Autenticación, Rutinas, Pagos, etc.)
│   │   ├── models/           # Esquemas de MongoDB (User, Workout, Measurement, etc.)
│   │   ├── routes/           # Rutas/Endpoints de la API
│   │   ├── middlewares/      # Validaciones y verificación de JWT
│   │   └── utils/            # Funciones auxiliares / Helpers
│   ├── .env.example
│   ├── package.json
│   └── server.js             # Punto de entrada de Node.js
│
└── frontend/                 # Aplicación Flutter
    ├── lib/
    │   ├── models/           # Modelos de datos en Dart
    │   ├── providers/        # Gestión de estado global
    │   ├── services/         # Consumo de la API Backend (Http / Dio)
    │   ├── ui/               # Vistas y componentes de interfaz
    │   │   ├── screens/      # Pantallas (Home, Login, Routine, Profile, etc.)
    │   │   └── widgets/      # Componentes reutilizables
    │   └── main.dart         # Punto de entrada de Flutter
    ├── pubspec.yaml
    └── README.md

```

---

## 👥 Autores del Proyecto

Proyecto diseñado y desarrollado por:

* **Lizeth Zamara Vélez Falla**
* *Rol:* Diseñadora, analista y programadora.

* **Yasmin Lorena Vélez Falla**
* *Rol:* Diseñadora, analista y programadora.





```

```
