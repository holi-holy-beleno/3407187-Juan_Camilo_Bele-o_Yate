# 🏺 Proyecto: Raíces Ancestrales - Semana 07
## Módulo: Funciones, Modularización y Modo Estricto

En esta séptima semana de **ADSO**, transformé el proyecto en un sistema modular. La implementación se centra en la creación de una librería de funciones especializadas para procesar el catálogo de artesanías de forma eficiente y segura.

---

## 🛠️ Conceptos Técnicos Implementados

### 1. Funciones de Flecha (Arrow Functions)
* Implementé `formatCraft` como una función flecha para generar una visualización estandarizada de los productos, mejorando la legibilidad del código y la interfaz de consola.

### 2. Funciones Puras y Cálculos Financieros
* Desarrollé la función `calculateTotalWithTax`. Es una **función pura** porque no depende de variables externas, garantizando que el cálculo del IVA (19%) sea siempre exacto y predecible.

### 3. Programación Robusta con "use strict"
* Activé el **Modo Estricto** de JavaScript para asegurar que el código cumpla con los estándares profesionales, evitando errores silenciosos y malas prácticas de declaración de variables.

### 4. Parámetros por Defecto
* Utilicé parámetros predefinidos en funciones de visualización de precios, asegurando que el sistema siempre muestre la moneda correcta (COP) incluso si el dato no es suministrado explícitamente.

---

## 📈 Resultado de la Ejecución
El sistema genera un reporte consolidado que incluye:
* **Catálogo Formateado:** Uso de técnicas de espaciado para alineación visual.
* **Control de Disponibilidad:** Validación en tiempo real de productos activos.
* **Liquidación de Impuestos:** Cálculo automático del valor comercial total con IVA.
