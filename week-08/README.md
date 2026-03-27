# 🏺 Proyecto: Raíces Ancestrales - Semana 08
## Módulo: Gestión Avanzada de Inventarios y Métodos de Arreglos

En esta entrega final del ciclo de lógica, el sistema de **Raíces Ancestrales** ha evolucionado hacia una herramienta de gestión de datos completa. El enfoque de esta semana fue la manipulación dinámica de colecciones de objetos utilizando los métodos más potentes de JavaScript moderno.

---

## 🚀 Funcionalidades y Métodos Implementados

He aplicado un conjunto de herramientas que permiten que el inventario sea interactivo y resiliente:

### 1. Métodos de Mutación (Modificación del Arreglo)
* **`push()` y `unshift()`**: Implementados para el ingreso de nueva mercancía, permitiendo añadir elementos tanto al final como al inicio (prioritarios) del catálogo.
* **`pop()` y `splice()`**: Utilizados para dar de baja productos o retirar piezas específicas del inventario según su posición.

### 2. Algoritmos de Búsqueda y Filtrado
* **`find()`**: Creación de un buscador inteligente que localiza artesanías por nombre, facilitando la consulta rápida de precios y origen.
* **`filter()`**: Generación de reportes automáticos de existencias, filtrando únicamente los productos que se encuentran en stock (disponibles).

### 3. Transformación de Datos con `map()`
* Implementé una capa de inteligencia comercial que genera listas de precios con **descuento del 10%** de forma inmutable, sin afectar los valores base del inventario original.

---

## 📋 Resumen del Sistema

A través de la consola, el sistema ahora reporta:
* **Estado del Inventario:** Lista detallada con ID, Precio, Disponibilidad y Origen.
* **Procesamiento de Mutaciones:** Registro en tiempo real de qué se agrega y qué se elimina.
* **Estadísticas Finales:** Conteo automático de piezas activas vs. agotadas.
