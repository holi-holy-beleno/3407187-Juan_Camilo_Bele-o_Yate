# 🏺 Proyecto: Raíces Ancestrales - Semana 04
## Módulo: Manipulación de Strings y Generación de Mensajes

En esta fase del proyecto **ADSO**, me enfoqué en la estandarización de los datos del catálogo de artesanías. El objetivo fue asegurar que la información de productos como las **Mochilas Wayúu** se presente de forma limpia y profesional en el sistema.

---

## 📋 Conceptos Técnicos Aplicados

Esta semana implementé métodos esenciales de JavaScript para el tratamiento de cadenas de texto:

### 1. Limpieza y Transformación
* **`trim()`**: Utilizado para eliminar espacios accidentales al inicio o final de los nombres de las artesanías, evitando errores en la base de datos.
* **`toUpperCase()` / `toLowerCase()`**: Empleados para normalizar títulos de fichas técnicas y generar identificadores consistentes.
* **`slice(0, 3)`**: Implementado para extraer el prefijo de categoría (ej. "ART") de los códigos de inventario.

### 2. Búsqueda y Validación
* **`includes()`**: Para verificar si una descripción contiene palabras clave esenciales (como la comunidad de origen).
* **`startsWith()` / `endsWith()`**: Para validar que los códigos de producto sigan el estándar definido por el negocio.

### 3. Visualización con Template Literals
* Uso de **Backticks (`` ` ``)** para construir fichas multilínea dinámicas, integrando variables y operadores ternarios para mostrar el estado de disponibilidad (✅ Disponible / ❌ Agotado).

---

## 🚀 Visualización de la Ficha Técnica

El sistema ahora genera un reporte automático con el siguiente formato:

```text
==================================================
  RAÍCES ANCESTRALES — FICHA TÉCNICA
==================================================
PRODUCTO:      MOCHILA WAYÚU TRADICIONAL
CATEGORÍA:     Tejeduría en Hilo
CÓDIGO:        ART-WAY-001
...