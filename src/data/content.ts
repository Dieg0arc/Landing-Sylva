export const TOTAL_FRAMES = 120;

export interface Stage {
  icon: string;
  num: string;
  title: string;
  text: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface Stat {
  target: number;
  suffix: string;
  label: string;
}

export interface Tip {
  icon: string;
  title: string;
  text: string;
  w: string;
}

export const stages: Stage[] = [
  { icon: "🌱", num: "01", title: "Germinación", text: "La semilla despierta al contacto con el agua y la luz. En su interior, la energía acumulada activa los primeros procesos de vida." },
  { icon: "🌿", num: "02", title: "Brote", text: "Las raíces se anclan en la tierra mientras el tallo emerge hacia la luz. La fotosíntesis comienza a alimentar cada célula." },
  { icon: "🍃", num: "03", title: "Crecimiento", text: "Las hojas se despliegan y multiplican, capturando energía solar. La planta construye su estructura con precisión matemática." },
  { icon: "🌸", num: "04", title: "Floración", text: "En su punto álgido, la planta produce flores que atraen polinizadores y garantizan la continuidad de la especie." },
];

export const processSteps: ProcessStep[] = [
  { n: "1", title: "Absorción de nutrientes", desc: "Las raíces extraen agua y minerales del suelo mediante ósmosis. Estos compuestos viajan por el xilema hasta cada rincón de la planta." },
  { n: "2", title: "Conversión de energía", desc: "Los cloroplastos capturan fotones de luz y los transforman en ATP — la moneda energética universal de la vida." },
  { n: "3", title: "Síntesis de tejidos", desc: "Con la glucosa producida, la planta fabrica celulosa, proteínas y lípidos que forman nuevas células y estructuras." },
  { n: "4", title: "Reproducción y dispersión", desc: "Las flores atraen polinizadores; los frutos dispersan semillas. Un ciclo perfecto que se repite desde hace 300 millones de años." },
];

export const stats: Stat[] = [
  { target: 391000, suffix: "",   label: "Especies de plantas conocidas" },
  { target: 80,     suffix: "%",  label: "Del oxígeno marino proviene del fitoplancton" },
  { target: 3000,   suffix: "M",  label: "Millones de años de fotosíntesis en la Tierra" },
  { target: 91,     suffix: "cm", label: "Crecimiento diario del bambú más veloz" },
];

export const tips: Tip[] = [
  { icon: "💧", title: "Riego equilibrado",    text: "El exceso de agua es el error más común. Toca la tierra: riega solo cuando el primer centímetro esté seco.", w: "75%" },
  { icon: "☀️", title: "Luz adecuada",         text: "Cada especie tiene sus preferencias. Observa hacia dónde se inclina tu planta; te dice dónde necesita estar.", w: "90%" },
  { icon: "🪱", title: "Sustrato vivo",        text: "Una tierra rica en microorganismos y lombrices es el mejor punto de partida para cualquier cultivo.", w: "85%" },
  { icon: "🌡️", title: "Temperatura constante", text: "Los cambios bruscos estresan a las plantas. Un ambiente entre 15 °C y 25 °C favorece el crecimiento.", w: "65%" },
];

/* ── Ecosystems ── */
export interface Ecosystem {
  icon: string;
  name: string;
  stat: string;
  statLabel: string;
  desc: string;
}

export const ecosystems: Ecosystem[] = [
  { icon: "🌴", name: "Selva Tropical",  stat: "50%",     statLabel: "de todas las especies del planeta",       desc: "La biodiversidad más densa de la Tierra. Cada hectárea puede albergar hasta 400 especies de árboles, más que en toda Europa." },
  { icon: "🌾", name: "Sabana",          stat: "20%",     statLabel: "de la superficie terrestre cubierta",     desc: "Las gramíneas dominan estos paisajes abiertos, adaptadas al fuego, la sequía y la presión constante de los grandes herbívoros." },
  { icon: "🌵", name: "Desierto",        stat: "<250 mm", statLabel: "de lluvia al año como máximo",            desc: "Las plantas xerófitas almacenan agua en tejidos especializados y ralentizan su metabolismo esperando con paciencia infinita." },
  { icon: "🌲", name: "Bosque Boreal",   stat: "30%",     statLabel: "del carbono forestal terrestre",         desc: "La taiga captura CO₂ en silencio durante siglos, cubriendo millones de km² que equilibran el clima del hemisferio norte." },
];

/* ── Curiosities ── */
export interface Curiosity {
  emoji: string;
  quote: string;
  source: string;
}

export const curiosities: Curiosity[] = [
  { emoji: "📡", quote: "Las plantas se comunican entre sí liberando compuestos orgánicos volátiles que alertan a sus vecinas del ataque de insectos herbívoros.", source: "Plant Signaling & Behavior" },
  { emoji: "⏳", quote: "El abeto 'Old Tjikko' en Suecia tiene raíces con más de 9.550 años de antigüedad — el organismo vivo más longevo conocido en la Tierra.", source: "Leif Kullman, Univ. de Umeå" },
  { emoji: "🌙", quote: "Semillas de loto sagrado han germinado tras 1.300 años de latencia. La vida vegetal no conoce el concepto de 'demasiado tarde'.", source: "Science Magazine, 1995" },
  { emoji: "🕸️", quote: "Los árboles de un bosque comparten azúcares y minerales mediante redes de hongos subterráneos: la llamada 'Wood Wide Web'.", source: "Suzanne Simard, UBC" },
  { emoji: "🌍", quote: "Las plantas y el fitoplancton producen el 98% del oxígeno atmosférico. Sin ellas, el aire respirable desaparecería en siglos.", source: "NASA Earth Observatory" },
  { emoji: "🎵", quote: "Ciertas frecuencias sonoras aceleran la germinación hasta un 70%. Las plantas, literalmente, escuchan su entorno.", source: "Journal of Integrative Plant Biology" },
];

/* ── Conservation ── */
export interface EndangeredStat {
  number: string;
  label: string;
}

export const endangeredStats: EndangeredStat[] = [
  { number: "40%",   label: "de las especies de plantas en riesgo de extinción" },
  { number: "2M ha", label: "de bosque tropical perdidas cada año" },
  { number: "571",   label: "especies extintas desde 1750" },
];
