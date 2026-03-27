# 🏺 Proyecto: Raíces Ancestrales - Semana 05
## Módulo: Estructuras de Control y Toma de Decisiones

En esta quinta semana del programa **ADSO**, implementé la "inteligencia" del sistema de gestión de artesanías. Ahora, el software es capaz de evaluar el estado del inventario y clasificar los productos automáticamente según reglas de negocio.

---

## 🧠 Conceptos Técnicos Aplicados

Implementé las estructuras de control esenciales de JavaScript para la toma de decisiones:

### 1. Clasificación Dinámica (`if / else if / else`)
* El sistema evalúa el **stock disponible** y asigna una categoría de prioridad:
  * **Stock Alto:** > 20 unidades.
  * **Stock Medio:** entre 5 y 20 unidades.
  * **Stock Crítico:** < 5 unidades (genera alerta inmediata).

### 2. Estandarización de Categorías (`switch`)
* Utilicé `switch` para transformar etiquetas técnicas (`standard`, `premium`, `luxury`) en nombres comerciales legibles para el usuario final, como **"Línea de Autor"**.

### 3. Programación Defensiva (`?.` y `??`)
* **Optional Chaining (`?.`)**: Permite acceder a los datos del artesano (como la ubicación) sin que el programa falle si el objeto está vacío o es nulo.
* **Nullish Coalescing (`??`)**: Proporciona valores por defecto ("Artesano no registrado") cuando la información no está disponible.

### 4. Lógica Binaria (Operador Ternario)
* Una forma simplificada de mostrar visualmente si un producto está **Disponible ✅** o **Agotado ❌** con una sola línea de código.

---

## 📊 Ejemplo de Salida en Consola

```text
=============================================
🏺 RAÍCES ANCESTRALES - SISTEMA DE CONTROL
=============================================
Producto:        Mochila Wayúu Extra Grande
Estado actual:   ✅ Disponible
Nivel de Stock:  Stock Medio (Revisar pronto) (15 und)
...
=============================================