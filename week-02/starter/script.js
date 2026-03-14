// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "Marketing de Artesanías Colombianas";

const itemName = "Mochila Wayúu Tradicional";

const itemCategory = "Tejeduría Indígena";

const itemQuantity = 125000; // Representa el precio base en pesos

const isItemAvailable = true; 

const assignedArtisan = null; // Aún no se ha asignado un artesano específico a este lote


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Producto:    ${itemName}`);
console.log(`Categoría:   ${itemCategory}`);
console.log(`Precio Base: $${itemQuantity}`);
console.log(`Disponible:  ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:     ", typeof itemName);     // string
console.log("typeof itemQuantity: ", typeof itemQuantity); // number
console.log("typeof isItemAvailable:", typeof isItemAvailable); // boolean
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Se convierte el precio (number) a String para poner con el símbolo de moneda
const priceAsText = String(itemQuantity);
console.log("Precio formateado como texto: ", "$" + priceAsText);
console.log("Tipo tras conversión:         ", typeof priceAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Artesano asignado: ", assignedArtisan);
console.log("¿El valor es nulo?: ", assignedArtisan === null); 
console.log("Dato curioso (typeof null): ", typeof assignedArtisan); 
console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA - Raíces Ancestrales");
console.log("===========================");