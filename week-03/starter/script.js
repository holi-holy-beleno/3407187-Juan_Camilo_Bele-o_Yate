// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Dominio: Marketing de Artesanías Colombianas
// Proyecto: Raíces Ancestrales
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
const MOCHILA_PRICE = 125000;
const SOMBRERO_VUELTIAO_PRICE = 210000;
const SHIPPING_COST = 15000;
const TAX_RATE = 0.19; // IVA del 19%

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas de Venta ===");

const quantityMochilas = 3;
const subtotalMochilas = MOCHILA_PRICE * quantityMochilas;
const totalWithShipping = subtotalMochilas + SHIPPING_COST;
const ivaAmount = totalWithShipping * TAX_RATE;
const grandTotal = totalWithShipping + ivaAmount;

console.log(`Subtotal (3 Mochilas):   $${subtotalMochilas}`);
console.log(`Envío fijo:              $${SHIPPING_COST}`);
console.log(`IVA calculado (19%):     $${ivaAmount}`);
console.log(`Total a pagar:           $${grandTotal}`);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Gestión de Inventario y Caja ===");

let currentBalance = 0;
console.log("Saldo inicial caja:      $", currentBalance);

currentBalance += grandTotal; // Sumamos la venta anterior
console.log("Tras venta de mochilas:  $", currentBalance);

let stockSombreros = 20;
stockSombreros -= 2; // Se vendieron 2 unidades
console.log("Stock Sombreros actual:  ", stockSombreros);

currentBalance *= 0.95; // Aplicamos un gasto operativo del 5%
console.log("Saldo tras gastos (5%):  $", currentBalance);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones de Negocio ===");

const minimumOrderForFreeShipping = 300000;
const isFreeShippingEligible = subtotalMochilas >= minimumOrderForFreeShipping;
console.log("¿Aplica envío gratis?:   ", isFreeShippingEligible === true);

const isStockLow = stockSombreros < 5;
console.log("¿Alerta de stock bajo?:  ", isStockLow);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones de Marketing ===");

const isFirstPurchase = true;
const totalPurchase = subtotalMochilas;
const hasCoupon = false;

// Cupón válido si es primera compra O tiene un cupón físico
const canApplyWelcomeDiscount = isFirstPurchase || hasCoupon;
console.log("¿Habilitar descuento bienvenida?: ", canApplyWelcomeDiscount);

// Envío gratis solo si supera el monto Y hay disponibilidad técnica
const technicalAvailability = true;
const finalFreeShipping = isFreeShippingEligible && technicalAvailability;
console.log("¿Confirmar envío gratis final?:   ", finalFreeShipping);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen de Transacción ===");
console.log(`Dominio:           Marketing de Artesanías`);
console.log(`Total Procesado:   $${grandTotal}`);
console.log(`Estado Envío:      ${finalFreeShipping ? "Gratuito" : "Con costo"}`);
console.log(`Stock Restante:    ${stockSombreros} unidades`);
console.log("===========================");