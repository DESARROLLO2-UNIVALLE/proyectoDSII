# Proyecto DSI - DevOps Pipeline

Este proyecto implementa un pipeline DevOps completo, incluyendo integración continua (CI), pruebas automatizadas y estrategias de despliegue. A continuación, se detalla la estructura del proyecto, las herramientas utilizadas y cómo ejecutarlo.

---

## Estructura del Proyecto

```
PROYECTODSII/
|-- .github/
|   `-- workflows/
|       |-- deploy.yml        # Workflow para el despliegue automatizado
|       `-- tests.yml         # Workflow para las pruebas automatizadas
|-- k8s/
|   |-- deployment.yaml       # Configuración de despliegue para Kubernetes
|   `-- service.yaml          # Configuración del servicio para Kubernetes
|-- node_modules/             # Dependencias de Node.js
|-- public/                   # Archivos públicos del proyecto
|-- src/
|   |-- assets/               # Recursos estáticos
|   |-- components/
|       |-- TodoList.css      # Estilos del componente TodoList
|       `-- TodoList.jsx      # Lógica del componente TodoList
|   |-- test/                 # Carpeta para pruebas
|       |-- App.css           # Estilos generales
|       |-- App.jsx           # Componente principal de la aplicación
|       |-- index.css         # Estilos base de la aplicación
|       |-- main.jsx          # Punto de entrada de la aplicación
|-- .dockerignore             # Archivos ignorados por Docker
|-- .gitignore                # Archivos ignorados por Git
|-- babel.config.json         # Configuración de Babel
|-- Dockerfile                # Archivo de configuración para Docker
|-- eslint.config.js          # Configuración para ESLint
|-- index.html                # Archivo HTML principal
|-- package-lock.json         # Archivo de dependencias bloqueadas
|-- package.json              # Configuración de dependencias del proyecto
|-- README.md                 # Documentación del proyecto
|-- sonar-project.properties  # Configuración para SonarCloud
|-- vite.config.js            # Configuración del bundler Vite
```

---

## Herramientas Utilizadas

1. **Amazon EC2**: Hosting para el entorno de producción.
2. **Docker**: Contenerización de la aplicación para asegurar consistencia en diferentes entornos.
3. **Git**: Control de versiones para gestionar cambios en el código.
4. **Git Flow**: Modelo de ramas para mantener un flujo de trabajo estructurado.
5. **GitHub**: Plataforma para la colaboración en el repositorio del proyecto.
6. **Git Actions**: Herramienta para implementar pipelines de CI/CD.
7. **Jest**: Framework de pruebas para garantizar la calidad del código.
8. **Kubernetes**: Orquestador de contenedores para manejar despliegues en producción.
9. **SonarCloud**: Análisis de calidad y seguridad del código.

---

## Cómo Ejecutar el Proyecto

### 1. Requisitos Previos

- Docker instalado en tu máquina.
- Acceso a un clúster de Kubernetes.
- Credenciales para SonarCloud.

### 2. Instalación

1. Clonar el repositorio:

   ```bash
   git clone <url_del_repositorio>
   cd PROYECTODSII
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

### 3. Ejecución Local

- Iniciar la aplicación:
  ```bash
  npm run dev
  ```
- Abrir en el navegador: `http://localhost:3000`

### 4. Contenerización

- Construir la imagen Docker:
  ```bash
  docker build -t proyectodsii .
  ```
- Ejecutar el contenedor:
  ```bash
  docker run -p 3000:3000 proyectodsii
  ```

### 5. Despliegue en Kubernetes

- Aplicar configuraciones:
  ```bash
  kubectl apply -f k8s/deployment.yaml
  kubectl apply -f k8s/service.yaml
  ```

---

## Descripción del Workflow

### Integración Continua (CI)

- **Archivo**: `.github/workflows/tests.yml`
- **Descripción**: Ejecuta pruebas automatizadas usando Jest para validar la calidad del código.

### Despliegue Continuo (CD)

- **Archivo**: `.github/workflows/deploy.yml`
- **Descripción**: Construye y despliega la aplicación en un clúster de Kubernetes.

---

## Configuración de SonarCloud

Para realizar el análisis de calidad del código:

1. Configurar las credenciales de SonarCloud en el archivo `sonar-project.properties`.
2. Ejecutar el análisis:
   ```bash
   npm run sonar
   ```

---

## Contribuciones

Este proyecto fue desarrollado por el grupo 7, quienes se encargaron de diferentes aspectos del pipeline DevOps y la aplicación en general.

---

## Licencia

Este proyecto se distribuye bajo una licencia abierta. Para más detalles, consulta el archivo `LICENSE` en el repositorio.
