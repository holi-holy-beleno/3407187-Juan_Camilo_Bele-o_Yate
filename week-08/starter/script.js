// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// DOMINIO: Raíces Ancestrales
// ============================================

const DOMAIN_NAME = "Raíces Ancestrales";
const VALUE_LABEL = "artesanías";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Mochila Wayúu", price: 120000, inStock: true, material: "Algodón", region: "Guajira" },
  { id: 2, name: "Sombrero Vueltiao", price: 250000, inStock: true, material: "Caña Flecha", region: "Sucre" },
  { id: 3, name: "Ruana Boyacense", price: 180000, inStock: false, material: "Lana", region: "Boyacá" },
  { id: 4, name: "Chiva de Barro", price: 45000, inStock: true, material: "Arcilla", region: "Tolima" },
  { id: 5, name: "Carriel Jericoano", price: 320000, inStock: true, material: "Cuero", region: "Antioquia" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN (Métodos de Array)
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`✅ Agregado al final: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`🗑️  Eliminado el último: ${removed ? removed.name : "Ninguno"}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`⭐ Prioridad agregada: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`✂️  Eliminado en posición ${index}: ${removed[0].name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.inStock === true);
};

const findByName = (name) => {
  return items.find(item => item.name.toLowerCase().includes(name.toLowerCase()));
};

const formatItem = (item) => {
  const status = item.inStock ? "✅" : "❌";
  return `[ID: ${item.id}] ${item.name.padEnd(20)} | $${item.price.toLocaleString()} | ${status} | Origen: ${item.region}`;
};

// ============================================
// 3. EJECUCIÓN DEL REPORTE
// ============================================

console.log(`\n${"=".repeat(60)}`);
console.log(`📦 SISTEMA DE GESTIÓN: ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(60)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- 🛠️  PROCESANDO MUTACIONES ---\n");

// Agregar nuevo
addItem({ id: 6, name: "Hamaca San Jacinto", price: 350000, inStock: true, material: "Hilo", region: "Bolívar" });

// Agregar prioridad
addPriorityItem({ id: 0, name: "Pieza Única Oro", price: 950000, inStock: true, material: "Oro/Cobre", region: "Quimbaya" });

// Eliminar del medio (índice 3)
removeByIndex(3);

// Eliminar el último
removeLastItem();

console.log("\n--- 📋 INVENTARIO ACTUALIZADO ---\n");
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- 🔍 BÚSQUEDA Y FILTRADO ---\n");

const search = "Sombrero";
const found = findByName(search);
console.log(`🔎 Buscando "${search}":`, found ? formatItem(found) : "No encontrado");

const activeOnes = getActiveItems();
console.log(`✔️  Total productos en stock: ${activeOnes.length}`);

console.log("\n--- ✨ TRANSFORMACIONES (Map) ---\n");

// Obtener solo nombres
const namesOnly = items.map(item => item.name);
console.log("Nombres en catálogo:", namesOnly.join(", "));

// Crear lista con descuento del 10% (Solo para mostrar, no muta el original)
const discountedPrices = items.map(item => ({
  nombre: item.name,
  precioOferta: item.price * 0.9
}));
console.log("🏷️  Precios con descuento (10%):");
discountedPrices.forEach(d => console.log(`   - ${d.nombre}: $${d.precioOferta.toLocaleString()}`));

console.log("\n--- 📊 RESUMEN FINAL ---\n");
const activeCount = activeOnes.length;
console.log(`Total en inventario : ${items.length} ${VALUE_LABEL}`);
console.log(`Disponibles         : ${activeCount} piezas`);
console.log(`Agotados            : ${items.length - activeCount} piezas`);

console.log(`\n${"=".repeat(60)}`);
console.log("✅ GESTIÓN DE INVENTARIO COMPLETADA");
console.log(`${"=".repeat(60)}\n`);