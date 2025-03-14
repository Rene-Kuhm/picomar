# Picomar - E-commerce de Productos del Mar

## Descripción

Plataforma de comercio electrónico especializada en productos del mar, con más de 60 años de historia en General Pico, La Pampa. Desarrollada con React y MaterialUI, ofrece una experiencia de compra moderna y eficiente.

## Características Implementadas

### Autenticación y Usuario

- Sistema de login/registro con validación
- Perfil de usuario personalizado
- Dashboard con estadísticas de compras
- Historial de pedidos y seguimiento
- Protección de rutas para usuarios autenticados

### Catálogo de Productos

- Visualización en grid con diseño responsive
- Filtrado por nombre y código
- Opciones de compra por unidad o caja
- Precios diferenciados mayorista/minorista
- Imágenes y descripciones detalladas
- Categorización Premium/Clásico
- Efectos de hover y animaciones suaves

### Carrito de Compras

- Gestión completa de productos
- Cálculo automático de totales
- Proceso de checkout en 4 pasos:
  1. Revisión del carrito
  2. Datos de envío
  3. Método de pago
  4. Confirmación
- Múltiples métodos de pago implementados
- Validación de formularios
- Confirmación de pedido con feedback

### Diseño y UI/UX

- Navbar responsive con menú móvil
- Hero section con efecto parallax
- Animaciones GSAP para scrolling
- Wave effects y glassmorphism
- Timeline animado en sección "Nosotros"
- Efectos de hover personalizados
- ScrollToTop component
- Loading states y feedback visual

### Secciones Principales

- Home con showcasing de productos
- Catálogo completo de productos
- Página "Nosotros" con historia desde 1961
- Contacto con formulario y mapa
- Perfil de usuario con tracking

## Tecnologías Utilizadas

### Core

- React 19
- MaterialUI v5
- React Router v6
- Context API (Auth y Cart)

### Animaciones y Efectos

- GSAP
- Framer Motion
- AOS
- Swiper
- Custom animations

### Optimización

- Lazy loading de componentes
- Code splitting
- Error boundaries
- Performance optimizations

### Estilos

- Styled Components
- CSS-in-JS
- Custom theme
- Responsive design

## Performance

La aplicación ha sido optimizada para ofrecer la mejor experiencia de usuario posible. Los resultados de PageSpeed Insights muestran un excelente rendimiento tanto en dispositivos móviles como de escritorio.

### Dispositivos Móviles

![PageSpeed Mobile](/images/mobile-performance.jpg)

- Performance: 98
- Accesibilidad: 96
- Mejores Prácticas: 95
- SEO: 100

### Escritorio

![PageSpeed Desktop](/images/desktop-performance.jpg)

- Performance: 99
- Accesibilidad: 96
- Mejores Prácticas: 95
- SEO: 100

### Optimizaciones Implementadas

- Lazy loading de imágenes
- Código dividido (code splitting)
- Compresión de assets
- Optimización de fuentes
- Caché efectivo
- Minificación de CSS/JS
- Imágenes optimizadas
- Server-side rendering
- PWA ready

## Estructura del Proyecto
