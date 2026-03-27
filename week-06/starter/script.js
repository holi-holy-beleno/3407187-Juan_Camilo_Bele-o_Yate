// ============================================
// PROYECTO SEMANA 06: Reporte de Inventario
// Dominio: Raíces Ancestrales (Artesanías)
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const crafts = [
  { name: "Mochila Wayúu Tradicional", category: "Tejeduría", price: 120000 },
  { name: "Sombrero Vueltiao (21 vueltas)", category: "Fibras", price: 250000 },
  { name: "Chiva de Barro Galera", category: "Cerámica", price: 45000 },
  { name: "Hamaca de San Jacinto", category: "Tejeduría", price: 350000 },
  { name: "Canasto de Werregue", category: "Fibras", price: 180000 },
  { name: "Vaso de Barro Negro", category: "Cerámica", price: 35000 }
];

const categories = ["Tejeduría", "Fibras", "Cerámica"];
const valueLabel = "Precio (COP)";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== 📜 LISTADO DE INVENTARIO ===");

let lineNumber = 0;
for (const craft of crafts) {
  lineNumber++;
  console.log(`${lineNumber}. ${craft.name.padEnd(30)} — [${craft.category}] — ${valueLabel}: $${craft.price.toLocaleString()}`);
}
console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== 📦 CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;
  for (const craft of crafts) {
    if (craft.category === category) {
      count++;
    }
  }
  console.log(`🔹 ${category.padEnd(12)}: ${count} producto(s)`);
}
console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== 📈 ESTADÍSTICAS FINANCIERAS ===");

let totalValue = 0;
for (const craft of crafts) {
  totalValue += craft.price;
}

const averageValue = crafts.length > 0 ? totalValue / crafts.length : 0;

console.log(`💰 Valor Total del Inventario : $${totalValue.toLocaleString()}`);
console.log(`📊 Precio Promedio por Pieza  : $${averageValue.toLocaleString(undefined, {minimumFractionDigits: 2})}`);
console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== 💎 PRODUCTOS DESTACADOS ===");

let maxCraft = crafts[0] ?? null;
let minCraft = crafts[0] ?? null;

if (crafts.length > 0) {
  for (const craft of crafts) {
    if (craft.price > maxCraft.price) maxCraft = craft;
    if (craft.price < minCraft.price) minCraft = craft;
  }

  console.log(`⭐ Pieza de Lujo (Mayor costo): ${maxCraft.name} ($${maxCraft.price.toLocaleString()})`);
  console.log(`🏷️  Pieza Accesible (Menor costo): ${minCraft.name} ($${minCraft.price.toLocaleString()})`);
}
console.log("");

// ============================================
// SECCIÓN 6: Reporte detallado con for clásico
// ============================================
console.log("=== 📋 ANÁLISIS DE PRECIOS VS PROMEDIO ===");

for (let i = 0; i < crafts.length; i++) {
  const craft = crafts[i];
  
  // Comparación usando ternario
  const comparison = craft.price >= averageValue ? "⬆️ SOBRE el promedio" : "⬇️ BAJO el promedio";

  console.log(`${i + 1}. ${craft.name.padEnd(30)} | ${comparison}`);
}

console.log("");
console.log("=== ✅ FIN DEL REPORTE DE RAÍCES ANCESTRALES ===");