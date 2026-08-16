import { useState } from 'react';

interface Hito {
  id: number;
  fecha: string;
  pos: 'izquierda' | 'derecha';
  titulo: string;
  subtitulo: string;
  descripcion: string;
  contexto: string;
  icono: string;
  iconoGrande: string;
  color: string;
  badgeBg: string;
  fuente: string;
  impacto: string;
}

const hitos: Hito[] = [
  {
    id: 1,
    fecha: "S III A.C. – VI D.C.",
    pos: "derecha",
    titulo: "DERECHO ROMANO",
    subtitulo: "Hito: Lex Aquilia y res communis",
    descripcion: "Desde el derecho romano se gestaron los pilares doctrinales de la responsabilidad. La categoría de 'res communis' catalogaba recursos esenciales como el agua, el aire y el mar como bienes comunes de uso público. Paralelamente, la Lex Aquilia introdujo la obligación de reparar económicamente el daño injusto causado por culpa o dolo, conceptos históricos que siglos más tarde fundamentarían la protección del patrimonio natural y colectivo frente a los perjuicios ambientales.",
    contexto: "El imperio romano desarrolló un sofisticado sistema legal que reconocía dos categorías de propiedad: la privada (res privatae) y la común (res communis). Esta distinción fue revolucionaria para su época, sentando el precedente de que ciertos recursos debían ser protegidos para el beneficio colectivo.",
    icono: "🏛️",
    iconoGrande: "⚖️🏛️",
    color: "#fca5a5",
    badgeBg: "#f97316",
    impacto: "Estableció el principio de reparación económica por daño injusto, base de la responsabilidad civil moderna",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano. Derecho y Sociedad, 1(1), 1-10."
  },
  {
    id: 2,
    fecha: "1825–1829",
    pos: "izquierda",
    titulo: "ERA REPUBLICANA",
    subtitulo: "Hito: Decretos bolivarianos de conservación forestal y de aguas",
    descripcion: "En los albores de la vida republicana, Simón Bolívar impulsó normativas y decretos pioneros en América Latina orientados a frenar la explotación desmedida de los bosques nacionales, regular la distribución equitativa de las aguas y proteger la fauna silvestre. Constituyen el primer antecedente formal de intervención estatal y gestión pública sobre los recursos naturales como patrimonio de la nación.",
    contexto: "Bolívar emitió múltiples decretos que contemplaban la protección de ecosistemas estratégicos, la regulación de la tala de árboles y la garantía de acceso equitativo al agua. Estos actos administrativos pioneros fueron los primeros en América Latina en reconocer que los recursos naturales no eran infinitos y que su manejo requería regulación estatal.",
    icono: "📜",
    iconoGrande: "🌳🇨🇴",
    color: "#e879f9",
    badgeBg: "#a855f7",
    impacto: "Primer reconocimiento institucional de que los recursos naturales son patrimonio de la nación sujeto a regulación estatal",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano. Derecho y Sociedad, 1(1), 1-10."
  },
  {
    id: 3,
    fecha: "1968",
    pos: "derecha",
    titulo: "TEORÍA DEL RIESGO",
    subtitulo: "Hito: Evolución jurisprudencial de la responsabilidad extracontractual",
    descripcion: "La adopción de la teoría del riesgo creado supuso una evolución decisiva en la jurisprudencia contenciosa y civil, permitiendo imputar responsabilidad e indemnizar a las víctimas por el ejercicio de actividades peligrosas sin necesidad de demostrar la culpa directa del agente. Este criterio jurídico facilitó el camino para el resarcimiento frente a daños complejos al entorno y a la colectividad.",
    contexto: "La teoría del riesgo creado surgió de decisiones judiciales que reconocieron que quien realiza actividades peligrosas debe responder por los daños aunque no medie culpa personal directa. Esto fue especialmente relevante para industrias y actividades extractivas que, aunque se realicen con cuidado, generan riesgos inherentes al ambiente.",
    icono: "⚖️",
    iconoGrande: "⚠️⚖️",
    color: "#7dd3fc",
    badgeBg: "#dc2626",
    impacto: "Permitió imputar responsabilidad por actividades peligrosas sin demostrar culpa directa, revolucionando la reparación de daños complejos",
    fuente: "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual (2da ed.). Temis; Universidad de La Sabana."
  },
  {
    id: 4,
    fecha: "1973–1974",
    pos: "izquierda",
    titulo: "CODIFICACIÓN AMBIENTAL",
    subtitulo: "Hito: Ley 23 de 1973 y Código Nacional de Recursos Naturales",
    descripcion: "La Ley 23 de 1973 marcó el nacimiento formal del derecho ambiental en Colombia al declarar los recursos naturales como patrimonio común de la sociedad. Posteriormente, el Código Nacional de Recursos Naturales (Ley 2811 de 1974) sistematizó la gestión ecológica e impuso la responsabilidad ineludible de prevenir y reparar el daño ambiental, dotando al Estado de las primeras herramientas normativas de control.",
    contexto: "Estos instrumentos fueron revolucionarios en su momento, estableciendo un marco legal integral que abarcaba bosques, aguas, fauna y flora. El Código Nacional de Recursos Naturales fue considerado una de las legislaciones ambientales más avanzadas de América Latina en la década de 1970, incluyendo normas sobre contaminación, conservación de ecosistemas y responsabilidad por daño ambiental.",
    icono: "📘",
    iconoGrande: "📚🌿",
    color: "#86efac",
    badgeBg: "#eab308",
    impacto: "Declaró los recursos naturales como patrimonio común e instituyó el deber de reparar el daño ambiental",
    fuente: "Flórez Hernández, C., Quintana, B. V., & Molina Romero, M. (2024). Hitos de la normatividad colombiana en materia de protección ambiental y su desarrollo jurisprudencial. Revista Jurídica Mario Alario D'Filippo, 16(33), 184-201."
  },
  {
    id: 5,
    fecha: "1991",
    pos: "derecha",
    titulo: "CONSTITUCIÓN ECOLÓGICA",
    subtitulo: "Hito: Derechos colectivos, medio ambiente y acciones populares",
    descripcion: "La Asamblea Nacional Constituyente consagró la denominada 'Constitución Ecológica' al integrar más de 49 disposiciones sobre medio ambiente. Elevó el ambiente sano a rango de derecho colectivo fundamental e instituyó mecanismos procesales constitucionales de gran calado como la Acción Popular (respaldada por la Ley 472), permitiendo exigir judicialmente la prevención y restauración de los daños al ecosistema.",
    contexto: "La Constitución de 1991 incorporó más disposiciones ambientales que cualquier constitución anterior en Colombia. Artículos clave como el 49 (derecho a la salud y ambiente sano), 80 (deber del Estado de proteger la diversidad), y otros reconocieron que la protección ambiental es un asunto de interés general. La Acción Popular permitió a cualquier ciudadano demandar por daños ambientales sin necesidad de demostrar daño personal.",
    icono: "🇨🇴",
    iconoGrande: "📜🌍",
    color: "#fbcfe8",
    badgeBg: "#78350f",
    impacto: "Elevar el ambiente sano a derecho colectivo fundamental y crear acciones judiciales populares para su protección",
    fuente: "Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares (Proyecto de Acto Constituyente No. 62)."
  },
  {
    id: 6,
    fecha: "1993",
    pos: "izquierda",
    titulo: "REESTRUCTURACIÓN SINA",
    subtitulo: "Hito: Ley 99 de 1993, Ministerio de Ambiente e instrumentos económicos",
    descripcion: "La Ley 99 de 1993 estructuró la institucionalidad moderna creando el Ministerio del Ambiente y el Sistema Nacional Ambiental (SINA). Descentralizó el control a través de las Corporaciones Autónomas Regionales e incorporó instrumentos económicos de gestión ambiental (tasas retributivas, compensatorias y multas) para desincentivar la contaminación y alinear la economía con el desarrollo sostenible.",
    contexto: "El SINA se conformó por organismos de control nacional y regional, incluyendo INDERENA, CORNARE, CAR y otras corporaciones regionales. La Ley 99 fue innovadora al combinar regulación directa con instrumentos económicos, permitiendo que quienes contaminan paguen por el daño causado. Las tasas retributivas se aplicaban a descargas de residuos líquidos, y las compensatorias al uso de recursos renovables.",
    icono: "🏛️",
    iconoGrande: "🌎📊",
    color: "#fed7aa",
    badgeBg: "#ec4899",
    impacto: "Creó institucionalidad moderna ambiental con instrumentos económicos que alinean mercado con sostenibilidad",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia a partir de la Constitución de 1991. Jurídicas, 4(2), 163-185."
  },
  {
    id: 7,
    fecha: "2009–Actual",
    pos: "derecha",
    titulo: "RÉGIMEN SANCIONATORIO",
    subtitulo: "Hito: Ley 1333 de 2009, precaución y nuevas tendencias de aseguramiento",
    descripcion: "La Ley 1333 de 2009 consolidó el régimen sancionatorio ambiental, dotando a las autoridades de facultades para imponer medidas preventivas y multas de hasta 5,000 salarios mínimos con enfoque estricto en la restauración. Hoy en día, este marco se complementa con la aplicación jurisprudencial del principio de precaución (Buitrago Dangond, 2018) y los retos del aseguramiento de la responsabilidad civil frente al cambio climático.",
    contexto: "La Ley 1333 estableció un sistema progresivo de sanciones: amonestación, multas, decomiso de productos, cierre de operaciones y restitución. El principio de precaución adoptado permite tomar medidas preventivas incluso con incertidumbre científica completa si existe riesgo potencial de daño ambiental grave. Esta ley refleja la evolución hacia una responsabilidad ambiental más estricta y la importancia creciente de prevenir en lugar de solo remediar.",
    icono: "⚠️",
    iconoGrande: "⚠️🔒",
    color: "#fca5a5",
    badgeBg: "#e11d48",
    impacto: "Régimen sancionatorio exhaustivo con enfoque preventivo y aplicación del principio de precaución ante incertidumbre científica",
    fuente: "Cancelado Ávila, D. F., Solís Yepes, J. L., & Díaz Castillo, W. J. (s.f.). Capítulo IV: Parangón e implementación de los instrumentos económicos de política ambiental y sanciones por daños al medio ambiente en epicentros de conflicto armado en Colombia. En Análisis jurídico de protección a las víctimas y del medio ambiente (pp. 111-131). Escuela Superior de Guerra."
  },
  {
    id: 4,
    fecha: "1973–1974",
    pos: "izquierda",
    titulo: "CODIFICACIÓN AMBIENTAL",
    subtitulo: "Hito: Ley 23 de 1973 y Código Nacional de Recursos Naturales",
    descripcion: "La Ley 23 de 1973 marcó el nacimiento formal del derecho ambiental en Colombia al declarar los recursos naturales como patrimonio común de la sociedad. Posteriormente, el Código Nacional de Recursos Naturales (Ley 2811 de 1974) sistematizó la gestión ecológica e impuso la responsabilidad ineludible de prevenir y reparar el daño ambiental, dotando al Estado de las primeras herramientas normativas de control.",
    contexto: "Estos instrumentos fueron revolucionarios en su momento, estableciendo un marco legal integral que abarcaba bosques, aguas, fauna y flora. El Código Nacional de Recursos Naturales fue considerado una de las legislaciones ambientales más avanzadas de América Latina en la década de 1970, incluyendo normas sobre contaminación, conservación de ecosistemas y responsabilidad por daño ambiental.",
    icono: "📘",
    iconoGrande: "📚🌿",
    color: "#86efac",
    badgeBg: "#eab308",
    impacto: "Declaró los recursos naturales como patrimonio común e instituyó el deber de reparar el daño ambiental",
    fuente: "Flórez Hernández, C., Quintana, B. V., & Molina Romero, M. (2024). Hitos de la normatividad colombiana en materia de protección ambiental y su desarrollo jurisprudencial. Revista Jurídica Mario Alario D’Filippo, 16(33), 184-201."
  },
  {
    id: 5,
    fecha: "1991",
    pos: "derecha",
    titulo: "CONSTITUCIÓN ECOLÓGICA",
    subtitulo: "Hito: Derechos colectivos, medio ambiente y acciones populares",
    descripcion: "La Asamblea Nacional Constituyente consagró la denominada 'Constitución Ecológica' al integrar más de 49 disposiciones sobre medio ambiente. Elevó el ambiente sano a rango de derecho colectivo fundamental e instituyó mecanismos procesales constitucionales de gran calado como la Acción Popular (respaldada por la Ley 472), permitiendo exigir judicialmente la prevención y restauración de los daños al ecosistema.",
    contexto: "La Constitución de 1991 incorporó más disposiciones ambientales que cualquier constitución anterior en Colombia. Artículos clave como el 49 (derecho a la salud y ambiente sano), 80 (deber del Estado de proteger la diversidad), y otros reconocieron que la protección ambiental es un asunto de interés general. La Acción Popular permitió a cualquier ciudadano demandar por daños ambientales sin necesidad de demostrar daño personal.",
    icono: "🇨🇴",
    iconoGrande: "📜🌍",
    color: "#fbcfe8",
    badgeBg: "#78350f",
    impacto: "Elevar el ambiente sano a derecho colectivo fundamental y crear acciones judiciales populares para su protección",
    fuente: "Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares (Proyecto de Acto Constituyente No. 62)."
  },
  {
    id: 6,
    fecha: "1993",
    pos: "izquierda",
    titulo: "REESTRUCTURACIÓN SINA",
    subtitulo: "Hito: Ley 99 de 1993, Ministerio de Ambiente e instrumentos económicos",
    descripcion: "La Ley 99 de 1993 estructuró la institucionalidad moderna creando el Ministerio del Ambiente y el Sistema Nacional Ambiental (SINA). Descentralizó el control a través de las Corporaciones Autónomas Regionales e incorporó instrumentos económicos de gestión ambiental (tasas retributivas, compensatorias y multas) para desincentivar la contaminación y alinear la economía con el desarrollo sostenible.",
    contexto: "El SINA se conformó por organismos de control nacional y regional, incluyendo INDERENA, CORNARE, CAR y otras corporaciones regionales. La Ley 99 fue innovadora al combinar regulación directa con instrumentos económicos, permitiendo que quienes contaminan paguen por el daño causado. Las tasas retributivas se aplicaban a descargas de residuos líquidos, y las compensatorias al uso de recursos renovables.",
    icono: "🏛️",
    iconoGrande: "🌎📊",
    color: "#fed7aa",
    badgeBg: "#ec4899",
    impacto: "Creó institucionalidad moderna ambiental con instrumentos económicos que alinean mercado con sostenibilidad",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia a partir de la Constitución de 1991. Jurídicas, 4(2), 163-185."
  },
  {
    id: 7,
    fecha: "2009–Actual",
    pos: "derecha",
    titulo: "RÉGIMEN SANCIONATORIO",
    subtitulo: "Hito: Ley 1333 de 2009, precaución y nuevas tendencias de aseguramiento",
    descripcion: "La Ley 1333 de 2009 consolidó el régimen sancionatorio ambiental, dotando a las autoridades de facultades para imponer medidas preventivas y multas de hasta 5,000 salarios mínimos con enfoque estricto en la restauración. Hoy en día, este marco se complementa con la aplicación jurisprudencial del principio de precaución (Buitrago Dangond, 2018) y los retos del aseguramiento de la responsabilidad civil frente al cambio climático.",
    icono: "⚠️",
    color: "#fca5a5",
    badgeBg: "#e11d48",
    fuente: "Cancelado Ávila, D. F., Solís Yepes, J. L., & Díaz Castillo, W. J. (s.f.). Capítulo IV: Parangón e implementación de los instrumentos económicos de política ambiental y sanciones por daños al medio ambiente en epicentros de conflicto armado en Colombia. En Análisis jurídico de protección a las víctimas y del medio ambiente (pp. 111-131). Escuela Superior de Guerra."
  }
];

const referenciasLista = [
  "Acuerdo No. 1011. (2022, 6 de julio). Por medio del cual se adopta la política ambiental de la Fundación Universitaria Agraria de Colombia - UNIAGRARIA. Consejo Superior, Fundación Universitaria Agraria de Colombia.",
  "Buitrago Dangond, E. A. (2018). El principio de precaución en la jurisprudencia constitucional. Derectum, 3(2), 107-126.",
  "Cancelado Ávila, D. F., Solís Yepes, J. L., & Díaz Castillo, W. J. (s.f.). Capítulo IV: Parangón e implementación de los instrumentos económicos de política ambiental y sanciones por daños al medio ambiente en epicentros de conflicto armado en Colombia. En Análisis jurídico de protección a las víctimas y del medio ambiente (pp. 111-131). Escuela Superior de Guerra.",
  "Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares (Proyecto de Acto Constituyente No. 62).",
  "Facultad de Ciencias Jurídicas U. Javeriana. (s.f.). Evento | Las Nuevas Tendencias de la Responsabilidad Civil y su Aseguramiento [Archivo de video]. YouTube. https://www.youtube.com/watch?v=A8f9mG0X_Z0",
  "Flórez Hernández, C., Quintana, B. V., & Molina Romero, M. (2024). Hitos de la normatividad colombiana en materia de protección ambiental y su desarrollo jurisprudencial. Revista Jurídica Mario Alario D’Filippo, 16(33), 184-201. https://doi.org/10.32997/2256-2796-vol.16-num.33-2024-4888",
  "González Villa, J. E. (2012). Las acciones populares y el daño ambiental. Revista Facultad de Derecho y Ciencias Políticas, 42(117), 581-620.",
  "IARCE. (2020). El dilema de la culpa - Obdulio Velásquez Posada. YouTube. https://www.youtube.com/embed/LJgR2vy07Qs",
  "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano. Derecho y Sociedad, 1(1), 1-10.",
  "Ortiz Monsalve, Á. (s.f.). Responsabilidad civil: Concepto y clases. YouTube. https://www.youtube.com/watch?v=7hZ8zYk0A9Q",
  "Porras Ramírez, A. (2011). Incidencias de la regulación ambiental en la economía: Una aproximación desde el desarrollo sostenible en Colombia [Tesis de grado, Universidad Icesi].",
  "Universidad Abierta Para Adultos (UAPA). (2021). Memorias 25 aniversario, UAPA 1995-2020. Ediciones UAPA.",
  "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia a partir de la Constitución de 1991. Jurídicas, 4(2), 163-185.",
  "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual (2da ed.). Bogotá, Colombia: Temis; Universidad de La Sabana.",
  "Woolcott Oyague, O., & Monje Mayorca, D. F. (Eds.). (2018). La modernización de las instituciones del derecho civil. Responsabilidad civil, propiedad y contrato. Bogotá, Colombia: Universidad Católica de Colombia."
];

export default function App() {
  const [selectedHito, setSelectedHito] = useState<Hito | null>(null);
  const [hoveredHito, setHoveredHito] = useState<number | null>(null);

  // Iconos de naturaleza seleccionados con criterio estético audiovisual (fauna, flora y ecosistemas)
  const iconosNaturaleza = ["🌿", "🌸", "🦋", "🌲", "🦜", "🌱", "🌺"];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
      backgroundSize: '35px 35px',
      color: '#1e293b',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '50px 20px',
    }}>
      
      {/* TÍTULO PRINCIPAL */}
      <div style={{
        maxWidth: '850px',
        margin: '0 auto 60px auto',
        textAlign: 'center'
      }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '10px', 
          backgroundColor: '#dcfce7', 
          border: '2px solid #15803d', 
          padding: '6px 16px', 
          borderRadius: '20px', 
          fontSize: '11px', 
          fontWeight: '800', 
          color: '#15803d', 
          marginBottom: '16px',
          boxShadow: '3px 3px 0px 0px #15803d'
        }}>
          <span>🌱</span> MARCO NORMATIVO Y JURÍDICO <span>🌿</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(20px, 2.8vw, 28px)',
          fontWeight: '900',
          textTransform: 'uppercase',
          margin: '0 0 10px 0',
          color: '#1e293b',
          letterSpacing: '-0.5px',
          lineHeight: '1.3'
        }}>
          EVOLUCIÓN DE LA RESPONSABILIDAD CIVIL AMBIENTAL EN COLOMBIA
        </h1>
        
        <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', maxWidth: '650px', margin: '0 auto' }}>
          Haz clic en cualquier tarjeta del recorrido histórico para desplegar su análisis jurídico detallado y su respectiva fuente bibliográfica 
        </p>
      </div>

      {/* CONTENEDOR LÍNEA DE TIEMPO */}
      <div style={{ maxWidth: '950px', margin: '0 auto', position: 'relative' }}>
        
        {/* Línea Central Estilizada */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '20px',
          bottom: '80px',
          width: '6px',
          backgroundColor: '#1e293b',
          transform: 'translateX(-50%)',
          zIndex: 1,
          borderRadius: '4px'
        }}>
          <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', fontSize: '14px' }}>🍃</div>
          <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translateX(-50%)', fontSize: '14px' }}>🌸</div>
          <div style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translateX(-50%)', fontSize: '14px' }}>🦋</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', position: 'relative', zIndex: 2 }}>
          {hitos.map((hito, index) => {
            const isLeft = hito.pos === 'izquierda';
            const iconoFloral = iconosNaturaleza[index % iconosNaturaleza.length];
            return (
              <div key={hito.id} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                
                {/* Lado Izquierdo */}
                <div style={{ width: '45%', textAlign: 'right', paddingRight: '35px', position: 'relative' }}>
                  {isLeft ? (
                    <>
                      {/* Línea conectora del lado izquierdo */}
                      <div style={{
                        position: 'absolute',
                        right: '-30px',
                        top: '50%',
                        width: '30px',
                        height: '2px',
                        backgroundColor: '#1e293b',
                        transform: 'translateY(-50%)',
                        zIndex: 0
                      }}></div>
                      
                      {/* Punta de flecha */}
                      <div style={{
                        position: 'absolute',
                        right: '-35px',
                        top: '50%',
                        width: '0',
                        height: '0',
                        borderStyle: 'solid',
                        borderWidth: '6px 8px 6px 0',
                        borderColor: 'transparent #1e293b transparent transparent',
                        transform: 'translateY(-50%)',
                        zIndex: 0
                      }}></div>
                      
                      <div 
                        onClick={() => setSelectedHito(hito)}
                        onMouseEnter={() => setHoveredHito(hito.id)}
                        onMouseLeave={() => setHoveredHito(null)}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '3px solid #1e293b',
                          borderRadius: '8px',
                          boxShadow: hoveredHito === hito.id ? '12px 12px 0px 0px #1e293b, 0 8px 16px rgba(0,0,0,0.15)' : '6px 6px 0px 0px #1e293b, 0 4px 8px rgba(0,0,0,0.08)',
                          textAlign: 'left',
                          display: 'inline-block',
                          width: '100%',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transform: hoveredHito === hito.id ? 'translateY(-6px) scale(1.03)' : 'translateY(0) scale(1)',
                          position: 'relative',
                          zIndex: 2,
                          animation: 'cardEnter 0.6s ease-out'
                        }}
                      >
                      <div style={{
                        backgroundColor: hito.color,
                        padding: '8px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '3px solid #1e293b'
                      }}>
                        <span style={{ fontWeight: '900', fontSize: '10px', color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {hito.titulo}
                        </span>
                        <div style={{ display: 'flex', gap: '4px', fontSize: '10px', background: 'rgba(255,255,255,0.7)', padding: '2px 6px', borderRadius: '4px', border: '1px solid #1e293b', color: '#1e293b' }}>
                          <span>—</span><span>□</span><span>✕</span>
                        </div>
                      </div>
                      <div style={{ padding: '16px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '900', color: '#1e293b', marginBottom: '6px' }}>
                          {hito.subtitulo}
                        </div>
                        <p style={{ fontSize: '11px', color: '#334155', margin: '0 0 10px 0', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {hito.descripcion}
                        </p>
                        <div style={{
                          backgroundColor: '#f0fdf4',
                          border: '1px solid #86efac',
                          borderRadius: '6px',
                          padding: '8px',
                          marginBottom: '10px',
                          fontSize: '10px',
                          fontWeight: '700',
                          color: '#166534',
                          transition: 'all 0.3s ease',
                          maxHeight: hoveredHito === hito.id ? '100px' : '0px',
                          opacity: hoveredHito === hito.id ? 1 : 0,
                          overflow: 'hidden'
                        }}>
                          <span style={{ fontWeight: '900', display: 'block', marginBottom: '4px' }}>✨ Impacto:</span>
                          {hito.impacto}
                        </div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', color: '#2563eb', backgroundColor: '#eff6ff', padding: '4px 8px', borderRadius: '4px', border: '1px solid #bfdbfe', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                          <span>📖</span> Ver detalle
                        </div>
                        
                        {/* Flecha descendente animada */}
                        {hoveredHito === hito.id && (
                          <div style={{
                            marginTop: '8px',
                            textAlign: 'center',
                            fontSize: '14px',
                            animation: 'arrowDown 1s ease-in-out infinite',
                            opacity: 0.7,
                            color: '#1e293b'
                          }}>
                            ↓
                          </div>
                        )}
                      </div>
                    </div>
                    </>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: '44px', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', transform: hoveredHito === hito.id ? 'scale(1.35) rotate(-14deg)' : 'scale(1) rotate(0deg)', animation: hoveredHito === hito.id ? 'floatEmoji 2s ease-in-out infinite' : 'none', filter: hoveredHito === hito.id ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} title="Elemento de biodiversidad y naturaleza">
                      {iconoFloral}
                    </div>
                  )}
                </div>

                {/* Badge Central de Fecha */}
                <div style={{ width: '10%', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <div style={{
                    backgroundColor: hito.badgeBg,
                    color: '#ffffff',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: '3px solid #1e293b',
                    fontSize: '10px',
                    fontWeight: '900',
                    textAlign: 'center',
                    boxShadow: hoveredHito === hito.id ? '0px 0px 12px rgba(0,0,0,0.3)' : '4px 4px 0px 0px #1e293b',
                    whiteSpace: 'nowrap',
                    zIndex: 3,
                    transition: 'all 0.3s ease',
                    transform: hoveredHito === hito.id ? 'scale(1.1)' : 'scale(1)'
                  }}>
                    {hito.fecha}
                  </div>
                </div>

                {/* Lado Derecho */}
                <div style={{ width: '45%', textAlign: 'left', paddingLeft: '35px', position: 'relative' }}>
                  {!isLeft ? (
                    <>
                      {/* Línea conectora del lado derecho */}
                      <div style={{
                        position: 'absolute',
                        left: '-30px',
                        top: '50%',
                        width: '30px',
                        height: '2px',
                        backgroundColor: '#1e293b',
                        transform: 'translateY(-50%)',
                        zIndex: 0
                      }}></div>
                      
                      {/* Punta de flecha */}
                      <div style={{
                        position: 'absolute',
                        left: '-35px',
                        top: '50%',
                        width: '0',
                        height: '0',
                        borderStyle: 'solid',
                        borderWidth: '6px 0 6px 8px',
                        borderColor: 'transparent transparent transparent #1e293b',
                        transform: 'translateY(-50%)',
                        zIndex: 0
                      }}></div>
                      
                      <div 
                        onClick={() => setSelectedHito(hito)}
                        onMouseEnter={() => setHoveredHito(hito.id)}
                        onMouseLeave={() => setHoveredHito(null)}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '3px solid #1e293b',
                          borderRadius: '8px',
                          boxShadow: hoveredHito === hito.id ? '12px 12px 0px 0px #1e293b, 0 8px 16px rgba(0,0,0,0.15)' : '6px 6px 0px 0px #1e293b, 0 4px 8px rgba(0,0,0,0.08)',
                          textAlign: 'left',
                          display: 'inline-block',
                          width: '100%',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transform: hoveredHito === hito.id ? 'translateY(-6px) scale(1.03)' : 'translateY(0) scale(1)',
                          position: 'relative',
                          zIndex: 2,
                          animation: 'cardEnter 0.6s ease-out'
                        }}
                      >
                      <div style={{
                        backgroundColor: hito.color,
                        padding: '8px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '3px solid #1e293b'
                      }}>
                        <span style={{ fontWeight: '900', fontSize: '10px', color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {hito.titulo}
                        </span>
                        <div style={{ display: 'flex', gap: '4px', fontSize: '10px', background: 'rgba(255,255,255,0.7)', padding: '2px 6px', borderRadius: '4px', border: '1px solid #1e293b', color: '#1e293b' }}>
                          <span>—</span><span>□</span><span>✕</span>
                        </div>
                      </div>
                      <div style={{ padding: '16px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '900', color: '#1e293b', marginBottom: '6px' }}>
                          {hito.subtitulo}
                        </div>
                        <p style={{ fontSize: '11px', color: '#334155', margin: '0 0 10px 0', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {hito.descripcion}
                        </p>
                        <div style={{
                          backgroundColor: '#f0fdf4',
                          border: '1px solid #86efac',
                          borderRadius: '6px',
                          padding: '8px',
                          marginBottom: '10px',
                          fontSize: '10px',
                          fontWeight: '700',
                          color: '#166534',
                          transition: 'all 0.3s ease',
                          maxHeight: hoveredHito === hito.id ? '100px' : '0px',
                          opacity: hoveredHito === hito.id ? 1 : 0,
                          overflow: 'hidden'
                        }}>
                          <span style={{ fontWeight: '900', display: 'block', marginBottom: '4px' }}>✨ Impacto:</span>
                          {hito.impacto}
                        </div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', color: '#2563eb', backgroundColor: '#eff6ff', padding: '4px 8px', borderRadius: '4px', border: '1px solid #bfdbfe', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                          <span>📖</span> Ver detalle
                        </div>
                        
                        {/* Flecha descendente animada */}
                        {hoveredHito === hito.id && (
                          <div style={{
                            marginTop: '8px',
                            textAlign: 'center',
                            fontSize: '14px',
                            animation: 'arrowDown 1s ease-in-out infinite',
                            opacity: 0.7,
                            color: '#1e293b'
                          }}>
                            ↓
                          </div>
                        )}
                      </div>
                    </div>
                    </>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '44px', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', transform: hoveredHito === hito.id ? 'scale(1.35) rotate(14deg)' : 'scale(1) rotate(0deg)', animation: hoveredHito === hito.id ? 'floatEmoji 2s ease-in-out infinite' : 'none', filter: hoveredHito === hito.id ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} title="Elemento de biodiversidad y naturaleza">
                      {iconoFloral}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* CIERRE / NATURALEZA COMO SUJETO DE DERECHOS */}
        <div style={{ textAlign: 'center', marginTop: '70px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            border: '3px solid #1e293b',
            padding: '18px 36px',
            borderRadius: '12px',
            boxShadow: '6px 6px 0px 0px #1e293b'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '6px' }}>🌍 🦋 🌺</div>
            <div style={{ fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', color: '#1e293b', letterSpacing: '1px' }}>
              NATURALEZA COMO SUJETO DE DERECHOS
            </div>
          </div>
        </div>

      </div>

      {/* SECCIÓN DE REFERENCIAS BIBLIOGRÁFICAS AL FINAL */}
      <div style={{
        maxWidth: '850px',
        margin: '80px auto 0 auto',
        backgroundColor: '#ffffff',
        border: '3px solid #1e293b',
        borderRadius: '12px',
        padding: '24px 30px',
        boxShadow: '6px 6px 0px 0px #1e293b'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', borderBottom: '2px solid #cbd5e1', paddingBottom: '10px' }}>
          <span style={{ fontSize: '18px' }}>📚</span>
          <h2 style={{ fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', color: '#1e293b', margin: 0, letterSpacing: '0.5px' }}>
            Referencias Bibliográficas Utilizadas
          </h2>
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {referenciasLista.map((refItem, idx) => (
            <li key={idx} style={{ fontSize: '10px', color: '#475569', lineHeight: '1.5', fontStyle: 'italic' }}>
              {refItem}
            </li>
          ))}
        </ul>
      </div>

      {/* MODAL INTERACTIVO DE CITAS Y DETALLE */}
      {selectedHito && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            border: '3px solid #1e293b',
            borderRadius: '12px',
            maxWidth: '520px',
            width: '100%',
            boxShadow: '8px 8px 0px 0px #1e293b',
            overflow: 'hidden'
          }}>
            <div style={{
              backgroundColor: selectedHito.color,
              padding: '12px 18px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '3px solid #1e293b'
            }}>
              <span style={{ fontWeight: '900', fontSize: '11px', color: '#1e293b', textTransform: 'uppercase' }}>
                {selectedHito.titulo}
              </span>
              <button 
                onClick={() => setSelectedHito(null)}
                style={{
                  background: '#ffffff', border: '2px solid #1e293b', borderRadius: '4px',
                  width: '26px', height: '26px', color: '#1e293b', fontWeight: '900', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '48px', marginBottom: '12px', animation: 'pulse 2s infinite' }}>
                  {selectedHito.iconoGrande}
                </div>
              </div>
              
              <div style={{ display: 'inline-block', backgroundColor: selectedHito.badgeBg, color: '#fff', fontSize: '10px', fontWeight: '900', padding: '5px 10px', borderRadius: '6px', marginBottom: '12px', border: '2px solid #1e293b' }}>
                {selectedHito.fecha}
              </div>
              
              <h3 style={{ fontSize: '13px', fontWeight: '900', color: '#1e293b', margin: '0 0 10px 0' }}>
                {selectedHito.subtitulo}
              </h3>
              
              <p style={{ fontSize: '11px', color: '#334155', lineHeight: '1.6', margin: '0 0 16px 0', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                {selectedHito.descripcion}
              </p>

              <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #86efac', borderRadius: '8px', padding: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#166534', display: 'block', marginBottom: '6px' }}>
                  📌 Contexto:
                </span>
                <p style={{ fontSize: '11px', color: '#15803d', margin: 0, lineHeight: '1.5' }}>
                  {selectedHito.contexto}
                </p>
              </div>

              <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#92400e', display: 'block', marginBottom: '6px' }}>
                  ✨ Impacto:
                </span>
                <p style={{ fontSize: '11px', color: '#b45309', margin: 0, lineHeight: '1.5', fontWeight: '600' }}>
                  {selectedHito.impacto}
                </p>
              </div>
              
              <div style={{ borderTop: '2px dashed #cbd5e1', paddingTop: '14px' }}>
                <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#1e293b', display: 'block', marginBottom: '6px' }}>
                  📖 Referencia:
                </span>
                <p style={{ fontSize: '10px', color: '#475569', fontStyle: 'italic', margin: 0, backgroundColor: '#fff3cd', padding: '10px', borderRadius: '6px', border: '1px solid #f5d76e', lineHeight: '1.4' }}>
                  {selectedHito.fuente}
                </p>
              </div>

              <button 
                onClick={() => setSelectedHito(null)}
                style={{
                  width: '100%',
                  marginTop: '20px',
                  backgroundColor: '#1e293b',
                  color: '#ffffff',
                  fontWeight: '900',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '11px',
                  textTransform: 'uppercase'
                }}
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}