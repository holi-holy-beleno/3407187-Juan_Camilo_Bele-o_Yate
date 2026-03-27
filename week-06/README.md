# 🏺 Proyecto: Raíces Ancestrales - Semana 06
## Módulo: Iteraciones y Procesamiento de Colecciones (Arrays)

En esta sexta semana del programa **ADSO**, el sistema ha evolucionado de manejar una sola artesanía a gestionar un **inventario completo**. Implementé estructuras de repetición (bucles) para procesar listas de productos, permitiendo generar reportes automáticos y estadísticas precisas.

---

## 📋 Conceptos Técnicos Aplicados

Esta semana dominé el uso de bucles para recorrer arreglos de objetos:

### 1. Recorrido de Colecciones (`for...of`)
* Utilizado para listar todos los productos del catálogo de forma eficiente.
* **Ventaja:** Es más legible y menos propenso a errores de índice cuando solo necesitamos leer los datos.

### 2. Lógica de Acumuladores y Contadores
* **Acumuladores:** Implementé variables para sumar el valor total de todas las piezas (Mochilas, Sombreros, Hamacas), lo que permite calcular el **Valor Total del Inventario**.
* **Contadores:** Uso de bucles anidados para contar cuántas piezas pertenecen a cada categoría (Tejeduría, Fibras, Cerámica).

### 3. Algoritmos de Búsqueda (Máximos y Mínimos)
* Desarrollé lógica para identificar la "Pieza de Lujo" (más costosa) y la "Pieza Accesible" (más económica) comparando los precios dentro de la colección.

### 4. Reportes Comparativos (`for` clásico)
* Uso del bucle `for` con índice para comparar cada producto contra el **promedio de precios**, clasificándolos como productos por encima o por debajo del valor medio del mercado.

---

## 📈 Resultados del Reporte Automático

El sistema ahora genera una salida profesional en consola que incluye:
* **Listado Numerado:** Con alineación de texto para mayor legibilidad.
* **Estadísticas:** Totales y promedios financieros calculados dinámicamente.
* **Análisis de Impacto:** Comparación visual del costo de cada artesanía.
