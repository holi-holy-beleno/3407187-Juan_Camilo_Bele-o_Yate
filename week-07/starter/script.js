"use strict"; // Activa el modo estricto para evitar errores comunes

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Raíces Ancestrales";
const VALUE_LABEL = "Precio";
const TAX_RATE = 0.19; // IVA del 19% en Colombia

const crafts = [
  { id: 1, name: "Mochila Wayúu Tradicional", category: "Tejeduría", value: 120000, active: true },
  { id: 2, name: "Sombrero Vueltiao", category: "Fibras", value: 250000, active: true },
  { id: 3, name: "Chiva de Barro", category: "Cerámica", value: 45000, active: false },
  { id: 4, name: "Hamaca de San Jacinto", category: "Tejeduría", value: 350000, active: true },
  { id: 5, name: "Canasto de Werregue", category: "Fibras", value: 180000, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato (Arrow Function)
// ============================================

const formatCraft = (craft) => 
  `🏺 ${craft.name.padEnd(25)} | Cat: ${craft.category.toLowerCase()} | $${craft.value.toLocaleString()}`;

// ============================================
// SECCIÓN 3: Función de cálculo (Pura)
// ============================================

/**
 * Calcula el precio final incluyendo un factor (como el IVA)
 * @param {number} baseValue - Precio base de la artesanía
 * @param {number} tax - Porcentaje de impuesto (ej. 0.19)
 */
const calculateTotalWithTax = (baseValue, tax = TAX_RATE) => {
  return baseValue + (baseValue * tax);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isAvailable = (craft) => craft.active === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatPriceDisplay = (amount, label = VALUE_LABEL, currency = "COP") => {
  return `${label} Final: $${amount.toLocaleString()} ${currency}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(55)}`);
console.log(`       🏢 SISTEMA DE GESTIÓN — ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"═".repeat(55)}`);

if (crafts.length === 0) {
  console.log("\n⚠️  No hay artesanías registradas.");
} else {
  // --- Listado Formateado ---
  console.log("\n📋 CATÁLOGO ACTUALIZADO:");
  let lineNumber = 1;
  for (const craft of crafts) {
    console.log(`  ${lineNumber}. ${formatCraft(craft)}`);
    lineNumber++;
  }

  // --- Validación de Disponibilidad ---
  let availableCount = 0;
  for (const craft of crafts) {
    if (isAvailable(craft)) {
      availableCount++;
    }
  }
  console.log(`\n✅ Productos disponibles para venta: ${availableCount} / ${crafts.length}`);

  // --- Cálculo de Valor de Inventario con IVA ---
  let totalInventoryValue = 0;
  for (const craft of crafts) {
    if (isAvailable(craft)) {
      // Usamos nuestra función pura para calcular el valor real de venta
      totalInventoryValue += calculateTotalWithTax(craft.value);
    }
  }

  // --- Resumen Final ---
  console.log("\n💰 RESUMEN FINANCIERO (Con IVA):");
  console.log(`  ${formatPriceDisplay(totalInventoryValue)}`);
}

console.log(`\n${"═".repeat(55)}\n`);