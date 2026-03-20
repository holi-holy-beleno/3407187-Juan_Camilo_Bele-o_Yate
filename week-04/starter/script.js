// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// DOMINIO: Raíces Ancestrales (Artesanías)
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Nombre del proyecto
const DOMAIN_NAME = "Raíces Ancestrales";

// Entidad principal con espacios para probar transformaciones
const rawEntityName = "   Mochila Wayúu Tradicional   ";

// Categoría técnica
const entityCategory = "Tejeduría en Hilo";

// Código con prefijo y sufijo definido
const entityCode = "ART-WAY-001";

// Descripción con palabras clave para validación
const entityDescription = "Una pieza única de la comunidad Wayúu, tejida a mano con técnicas ancestrales de la Guajira.";

// Dato numérico: Precio de venta
const mainValue = 125000;

// Estado de disponibilidad
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// 1. Limpiamos espacios en blanco al inicio y final
const entityName = rawEntityName.trim();

// 2. Convertimos a mayúsculas para títulos
const entityNameUpper = entityName.toUpperCase();

// 3. Convertimos a minúsculas (útil para generar correos o rutas)
const entityNameLower = entityName.toLowerCase();

// 4. Extraemos el prefijo del código (las primeras 3 letras)
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// ¿El código empieza con el prefijo 'ART'?
const hasValidPrefix = entityCode.startsWith("ART");

// ¿La descripción menciona a la comunidad 'Wayúu'?
const descriptionIsRelevant = entityDescription.includes("Wayúu");

// ¿El código termina con el correlativo '001'?
const hasValidSuffix = entityCode.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(50);
const subSeparator = "-".repeat(50);

// Construcción de la ficha técnica usando Template Literals
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA TÉCNICA
${separator}
PRODUCTO:      ${entityNameUpper}
CATEGORÍA:     ${entityCategory}
CÓDIGO:        ${entityCode}
PREFIJO REG:   ${codePrefix}
PRECIO:        $${mainValue.toLocaleString()} COP
ESTADO:        ${isActive ? "✅ DISPONIBLE" : "❌ AGOTADO"}

${subSeparator}
DESCRIPCIÓN DEL ARTESANO:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Reporte de Validaciones
// ============================================

console.log("--- Reporte de Integridad de Datos ---");
console.log(`¿Prefijo '${codePrefix}' es válido?: ${hasValidPrefix}`);
console.log(`¿Menciona palabra clave 'Wayúu'?: ${descriptionIsRelevant}`);
console.log(`¿ID termina en '001'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Notificación de Inventario
// ============================================

console.log("--- Notificación de Sistema ---");

// Mensaje corto optimizado para una sola línea
const notification = `📢 REGISTRO EXITOSO: ${entityName} [${entityCode}] añadido al catálogo de ${DOMAIN_NAME}.`;
console.log(notification);
console.log("");