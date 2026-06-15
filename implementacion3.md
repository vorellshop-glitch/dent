# Plan de Implementación 3: Radical Luxury Landing Page

Este plan describe la estrategia para diseñar e implementar la tercera versión de la landing page de odontología estética (**Lumière Obsidian: The Definitive Smile Sanctuary**). Esta versión introduce un diseño radical de ultra lujo, animaciones avanzadas e interactividad superior, manteniendo la coexistencia de las tres versiones de la página.

---

## 🏛️ Coexistencia de Tres Versiones (Ruteo Dinámico)

Modificaremos la lógica del punto de entrada en `src/index.tsx` para alternar entre las tres versiones usando el parámetro `page` o `v` en la URL:
1. **La Nueva Radical de Ultra Lujo (Predeterminada):** Accesible en la raíz `http://localhost:5173/` o usando `?page=radical`.
2. **La Versión Premium Anterior:** Accesible mediante `?page=landing` o `?v=luxury`.
3. **La Versión Original (Legacy):** Accesible mediante `?page=desktop` o `?v=legacy`.

Estructura de archivos propuesta para la nueva versión:
* **[NUEVO]** `src/screens/RadicalLanding/` (Directorio para la pantalla radical)
* **[NUEVO]** `src/screens/RadicalLanding/sections/` (Secciones de la nueva pantalla)
  * `HeroRadical.tsx`
  * `ServicesRadical.tsx` (Incluye la calculadora de inversión interactiva)
  * `GalleryRadical.tsx` (Incluye el comparador de imágenes con slider interactivo antes/después)
  * `ExperienceRadical.tsx` (Timeline interactiva de la experiencia VIP Concierge)
  * `FAQRadical.tsx` (Filtros de preguntas interactivos)
  * `FooterRadical.tsx`

---

## 🎨 Concepto y Estética Visual: "Obsidian & Gold Leaf"

Para lograr un impacto radical de lujo, abandonaremos las estructuras genéricas y adoptaremos una UI premium con el siguiente sistema de diseño:
* **Fondo Obsidiana Profundo:** Uso de colores obsidian mate (`#080807`, `#0c0c0a`) con sutiles degradados radiales para crear profundidad.
* **Detalles en Hojas de Oro:** Acentos y bordes con colores dorado champán y oro satinado (`#f2e3c9`, `#d4af37`), y efectos de brillo metálico.
* **Glassmorphism Extremo:** Tarjetas translúcidas con desenfoque de fondo ultra nítido y bordes dorados de 1px con opacidades variables.
* **Tipografía Editorial:** Títulos con serifas elegantes e imponentes (como *Cinzel* u *Outfit* importadas dinámicamente) y textos en sans-serif de peso extra-ligero y alta separación entre caracteres (tracking-widest).

---

## ✨ Características Especiales de Ultra Lujo y Efectos Radicales

### 1. HeroRadical con Efecto Shimmer y Entrada Dramática
* Mensaje audaz y de altísimo nivel: *"The Craft of Incomparable Smiles"*.
* Animación de brillo metálico que recorre los botones CTA de manera periódica (efecto *shimmer* dorado).
* Indicador de scroll flotante con micro-animaciones continuas.

### 2. Slider Interactivo Antes/Después Real (Drag-to-Reveal)
* En lugar de dos imágenes estáticas una al lado de la otra, implementaremos un componente interactivo real con un deslizador de arrastre (slider).
* El usuario podrá deslizar horizontalmente una barra divisoria dorada para revelar progresivamente el "Antes" y el "Después" en tiempo real sobre la misma imagen.

### 3. Calculadora de Inversión Interactiva (Custom Concierge Calculator)
* Tarjetas de tratamientos refinadas y ultra visuales.
* Panel interactivo donde el paciente puede configurar opciones de personalización (ej. número de carillas, opciones de sedación VIP, financiamiento a plazos a 0% de interés) y obtener un estimado instantáneo del plan mensual mediante sliders elegantes, eliminando el estrés financiero.

### 4. VIP Patient Experience (Concierge Care Timeline)
* Sección interactiva tipo timeline que describe el viaje del paciente de ultra lujo:
  1. *Private Jet/Chauffeur coordination* (si aplica) o recepción personalizada en lounge privado.
  2. *Digital Smile Design Consultation* (Diseño 3D en 30 minutos).
  3. *Zero-Pain Treatment* (Protocolos de sedación consciente y aromaterapia).
  4. *Reveal & Aftercare VIP Pack*.

### 5. FAQ con Filtros Rápidos Interactivos
* Categorización interactiva de preguntas frecuentes (Resultados, Proceso, Financiamiento, Garantía) para evitar que el usuario se abrume leyendo texto largo.

---

## 📋 Checklist de Progreso: Versión Radical (implementacion3.md)

### Fase 1: Arquitectura y Ruteo Triple
- [x] Configurar el ruteo de tres vías en `src/index.tsx`
- [x] Crear el directorio `src/screens/RadicalLanding` y estructurar sus subcarpetas
- [x] Crear el esqueleto inicial de `src/screens/RadicalLanding/RadicalLanding.tsx`

### Fase 2: Componentes y Efectos Especiales (Obsidian & Gold)
- [x] Implementar `HeroRadical.tsx` con tipografía editorial, shimmer en botones y menú móvil premium
- [x] Implementar `ServicesRadical.tsx` con calculadora de cuotas interactiva para los planes premium
- [x] Implementar `GalleryRadical.tsx` con el componente deslizante horizontal (Before/After Slider) táctil y arrastrable
- [x] Implementar `ExperienceRadical.tsx` con la línea de tiempo interactiva de la experiencia VIP
- [x] Implementar `FAQRadical.tsx` con acordeones y botones de filtro por categorías
- [x] Implementar `FooterRadical.tsx` con el formulario de reservas de ultra lujo integrado

### Fase 3: Transiciones, Animaciones e Integración de Fuentes
- [x] Importar e integrar la tipografía Serif premium (*Playfair Display* o *Cinzel*)
- [x] Añadir efectos de scroll revelador (fade-in up) en las secciones
- [x] Refinar las micro-animaciones globales de hover en botones y tarjetas

### Fase 4: Verificación y Compilación
- [x] Ejecutar el build de producción para validar la compilación limpia de la versión radical
- [x] Probar el rendimiento y responsividad en dispositivos móviles
- [x] Probar la conmutación de las tres páginas a través de los query parameters de la URL
