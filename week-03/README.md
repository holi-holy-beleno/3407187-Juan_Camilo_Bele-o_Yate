# 🏺 Proyecto: Raíces Ancestrales - Semana 03
## Módulo: Operadores y Lógica de Programación en JavaScript

Este repositorio contiene el avance de la **Semana 03** del programa **ADSO**, donde implementé una **Calculadora de Dominio** para la gestión financiera de artesanías colombianas.

---

## 📋 Descripción del Avance
En esta fase, el sistema dejó de ser estático para realizar cálculos automáticos. Utilicé operadores aritméticos, de asignación y lógicos para simular un proceso de venta real.

### Conceptos Técnicos Aplicados:
* **Operadores Aritméticos:** Cálculo de subtotales, IVA (19%) y costos de envío.
* **Asignación Compuesta:** Uso de `+=` y `-=` para actualizar el saldo de caja y el inventario de productos (Mochilas y Sombreros Vueltiaos).
* **Comparación Estricta (`===`):** Validaciones de seguridad para confirmar estados booleanos sin errores de tipo.
* **Operadores Lógicos (`&&`, `||`):** * `||` para habilitar descuentos de bienvenida (primera compra o cupón).
  * `&&` para validar condiciones complejas de envío gratuito.

---

## 📈 Lógica de Negocio
El script realiza las siguientes operaciones automáticas:
1. **Venta de Productos:** Calcula el valor total de 3 Mochilas Wayúu más impuestos.
2. **Control de Inventario:** Resta automáticamente las unidades vendidas del stock inicial.
3. **Marketing:** Evalúa si el monto de la compra califica para beneficios adicionales según las reglas del negocio.
