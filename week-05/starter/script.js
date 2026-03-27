// ============================================
// PROYECTO SEMANA 05: Clasificador de Artesanías
// DOMINIO: Raíces Ancestrales
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento (Mochila Wayúu)
// ============================================

const elementName = "Mochila Wayúu Extra Grande"; 
const elementStatus = "active"; // "active" o "inactive"
const elementValue = 15;        // Cantidad en stock para clasificar
const elementType = "premium";  // "standard", "premium", "luxury"
// Simulamos un objeto que podría ser null si no hay datos del artesano
const elementInfo = {
    artisan: "Familia Epiayú",
    location: "Uribia, La Guajira"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;
if (elementValue > 20) {
    classification = "Stock Alto (Suficiente)";
} else if (elementValue >= 5) {
    classification = "Stock Medio (Revisar pronto)";
} else {
    classification = "Stock Crítico (Pedido urgente)";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// Si el estado es "active", mostramos "Disponible", de lo contrario "Fuera de Catálogo"
const statusLabel = elementStatus === "active" ? "✅ Disponible" : "❌ Fuera de Catálogo";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;
switch (elementType) {
    case "standard":
        typeLabel = "Línea Comercial";
        break;
    case "premium":
        typeLabel = "Línea de Autor (Alta Calidad)";
        break;
    case "luxury":
        typeLabel = "Pieza de Museo / Colección";
        break;
    default:
        typeLabel = "Categoría no definida";
}

// ============================================
// SECCIÓN 5 y 6: Valor por defecto (??) y Acceso seguro (?.)
// ============================================

// Si el nombre es null, usa el fallback. 
const displayName = elementName ?? "Artesanía Sin Nombre";

// Acceso seguro: Si elementInfo es null, no rompe el código y usa el mensaje de fallback.
const infoDetail = elementInfo?.artisan ?? "Artesano no registrado";
const safeProperty = elementInfo?.location ?? "Origen no especificado";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(45));
console.log("🏺 RAÍCES ANCESTRALES - SISTEMA DE CONTROL");
console.log("=".repeat(45));
console.log(`Producto:        ${displayName}`);
console.log(`Estado actual:   ${statusLabel}`);
console.log(`Nivel de Stock:  ${classification} (${elementValue} und)`);
console.log(`Categoría:       ${typeLabel}`);
console.log(`Maestro(a):      ${infoDetail}`);
console.log(`Procedencia:     ${safeProperty}`);
console.log("=".repeat(45));