# Soltecom - Soluciones Tecnológicas y Comunicaciones

Aplicación web corporativa moderna de alto rendimiento para **Soltecom**, diseñada para presentar servicios empresariales en telecomunicaciones, redes, soporte IT, infraestructura tecnológica y suministros.

---

## 🚀 Características Principales

- **Experiencia Visual Inmersiva:**
  - Fondos animados WebGL fluidos (`<Grainient />`) con shaders dinámicos basados en la identidad visual corporativa.
  - Galería interactiva 3D esférica (`<DomeGallery />`) en WebGL (OGL) para visualizar servicios e infraestructura con gestos y aceleración GPU.
  - Tarjetas corporativas apilables con fijación física (`ScrollStack` / `position: sticky`) sin saltos ni desfases de scroll.
- **Catálogo de Servicios y Productos:**
  - Filtrado por categorías en tiempo real, búsqueda predictiva y vistas detalladas de productos/servicios.
  - Integración de cotización directa a WhatsApp con mensajes preformateados.
- **Centro Legal y Descarga de Documentos:**
  - Generador automatizado de documentos oficiales en PDF (`pdf-lib`) con membrete, logo corporativo de alta resolución y estructura legal conforme a la normativa de protección de datos:
    - *Términos y Condiciones de Servicio*
    - *Política de Tratamiento de Datos Personales*
- **Rendimiento y Responsividad:**
  - Arquitectura Single Page Application (SPA) con Vite + React 18 + TypeScript.
  - Diseño 100% responsivo adaptable a dispositivos móviles, tablets y monitores ultrawide mediante Tailwind CSS.

---

## 🎨 Paleta de Colores Corporativa

| Identificador | Tono | Muestra | Uso Principal |
| :--- | :--- | :--- | :--- |
| `#008744` | Verde Soltecom | `rgb(0, 135, 68)` | Primario, acentos, botones de acción, WhatsApp |
| `#14325b` | Azul Corporativo | `rgb(20, 50, 91)` | Encabezados, textos de alta jerarquía, contraste |
| `#ffffff` | Blanco Puro | `rgb(255, 255, 255)` | Fondos, tarjetas y superficies limpias |

---

## 🛠️ Stack Tecnológico

- **Frontend Core:** [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Estilos & UI:** [Tailwind CSS](https://tailwindcss.com/), [Lucide React Icons](https://lucide.dev/)
- **Gráficos & Animaciones:** [OGL](https://github.com/oframe/ogl) (WebGL), [Framer Motion](https://www.framer.com/motion/)
- **Documentación & PDFs:** [pdf-lib](https://pdf-lib.js.org/)
- **Gestión de Formularios & Estado:** [React Hook Form](https://react-hook-form.com/), [Zustand](https://zustand-demo.pmnd.rs/)

---

## 📂 Estructura del Proyecto

```text
├── public/                 # Recursos estáticos (logos, favicons, PDFs generados)
├── scripts/                # Scripts utilitarios (generación de PDFs legales con logo)
├── src/
│   ├── components/         # Componentes reutilizables (Navbar, Footer, Grainient, DomeGallery, ScrollStack)
│   ├── data/               # Catálogo de servicios, productos y contenido estático
│   ├── pages/              # Vistas principales (Inicio, Nosotros, Servicios, Productos, Contacto, Legal)
│   ├── styles/             # Configuración global de estilos
│   ├── App.tsx             # Enrutamiento principal
│   └── main.tsx            # Punto de entrada de la aplicación
├── index.html              # Documento HTML base
├── tailwind.config.js      # Configuración de temas y colores Tailwind
├── tsconfig.json           # Configuración de compilación TypeScript
└── vite.config.ts          # Configuración del empaquetador Vite
```

---

## ⚙️ Instalación y Uso Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Madro014/soltecom.git
cd soltecom
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

### 4. Generar PDFs legales con membrete
```bash
npm run generate:pdfs
```

### 5. Compilar para producción
```bash
npm run build
```
Los archivos optimizados para despliegue se generarán en la carpeta `dist/`.

---

## 📄 Licencia

Este proyecto es propiedad privada de **Soltecom**. Todos los derechos reservados.
