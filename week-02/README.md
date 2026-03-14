# Ficha 3407187 - Juan Camilo Beleño Yate - Week-02

## 📋 Información

- **Nombre**: Juan Camilo Beleño Yate
- **Fecha**: 26/02/2026
- **Dominio Asignado**: #2 - Marketing de Artesanías Colombianas
- **Entidad Principal**: Artesanías de Colombia (Gestión de Inventario)

---


## 📋 Descripción del Avance
En esta fase, he implementado una ficha técnica de productos utilizando **JavaScript ES2023**, aplicando conceptos fundamentales de programación para modelar el inventario de artesanías.

### Conceptos Aplicados:
* **Variables y Constantes:** Uso de `const` para valores fijos del dominio (ej. nombre del sistema).
* **Tipos de Datos Primitivos:**
  * `String`: Para nombres y categorías de productos.
  * `Number`: Para la gestión de precios y valores monetarios.
  * `Boolean`: Para estados lógicos (disponibilidad de stock).
  * `Null`: Para representar datos pendientes de asignación (artesanos por asignar).
* **Conversiones Explícitas:** Transformación de tipos numéricos a cadenas de texto para visualización de precios.
* **Validación de Tipos:** Uso del operador `typeof` para asegurar la integridad de la información.

---

## 📊 Ficha Técnica del Dominio
El sistema actualmente procesa los siguientes datos maestros:

| Dato | Tipo | Propósito |
| :--- | :--- | :--- |
| `itemName` | String | Identificación del producto artesanal. |
| `itemQuantity` | Number | Valor comercial base del artículo. |
| `isItemAvailable` | Boolean | Indicador de existencia en bodega. |
| `assignedArtisan` | Null | Estado inicial antes de la vinculación del autor. |
