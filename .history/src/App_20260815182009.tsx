import React, { useState } from 'react';

interface Hito {
  id: number;
  fecha: string;
  pos: 'izquierda' | 'derecha';
  titulo: string;
  subtitulo: string;
  descripcion: string;
  icono: string;
  color: string;
  badgeBg: string;
  fuente: string;
}

const hitos: Hito[] = [
  {
    id: 1,
    fecha: "S III A.C. – VI D.C.",
    pos: "derecha",
    titulo: "DERECHO ROMANO",
    subtitulo: "Antecedentes: Lex Aquilia y res communis",
    descripcion: "Desde el derecho romano se gestaron los pilares de la responsabilidad. La figura de 'res communis' catalogaba recursos como el agua y el aire como bienes comunes. Paralelamente, la Lex Aquilia introdujo la sanción por daño injusto, estableciendo la obligación de reparación económica por culpa o dolo, conceptos que evolucionarían siglos después para fundamentar la protección del patrimonio ambiental ante daños colectivos.",
    icono: "🏛️",
    color: "#fca5a5",
    badgeBg: "#f97316",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 2,
    fecha: "1825–1829",
    pos: "izquierda",
    titulo: "ERA REPUBLICANA",
    subtitulo: "Decretos bolivarianos de conservación",
    descripcion: "En los albores de la república, Simón Bolívar lideró la expedición de decretos pioneros en América Latina. Estas normativas buscaban regular la administración de aguas, el aprovechamiento forestal y la protección de la fauna silvestre. Fue el primer intento formal del Estado por frenar la explotación desenfrenada de recursos naturales y establecer una visión de gestión pública sobre el patrimonio natural de la nación.",
    icono: "📜",
    color: "#e879f9",
    badgeBg: "#a855f7",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 3,
    fecha: "1968",
    pos: "derecha",
    titulo: "TEORÍA DEL RIESGO",
    subtitulo: "Evolución en la jurisprudencia contenciosa",
    descripcion: "La adopción de la teoría del riesgo creado supuso un avance crítico al permitir imputar responsabilidad civil sin la necesidad de probar la culpa del agente, especialmente en actividades peligrosas. Este enfoque jurisprudencial facilitó el camino hacia la protección de víctimas y el resarcimiento frente a daños ambientales complejos, un pilar fundamental en el derecho de responsabilidad extracontractual moderno.",
    icono: "⚖️",
    color: "#7dd3fc",
    badgeBg: "#dc2626",
    fuente: "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual."
  },
  {
    id: 4,
    fecha: "1973–1974",
    pos: "izquierda",
    titulo: "CODIFICACIÓN AMBIENTAL",
    subtitulo: "Ley 23 de 1973 y Código de Recursos Naturales",
    descripcion: "La Ley 23 de 1973 marcó el nacimiento del derecho ambiental en Colombia al declarar los recursos naturales como patrimonio común. Poco después, el Código Nacional de Recursos Naturales (Ley 2811 de 1974) sistematizó la gestión ambiental, imponiendo la responsabilidad de restaurar los daños causados y dotando a la administración de herramientas para la prevención de la contaminación y la gestión sostenible.",
    icono: "📘",
    color: "#86efac",
    badgeBg: "#eab308",
    fuente: "Flórez Hernández, C., Quintana, B. V., & Molina Romero, M. (2024). Hitos de la normatividad colombiana en materia de protección ambiental."
  },
  {
    id: 5,
    fecha: "1991",
    pos: "derecha",
    titulo: "CONSTITUCIÓN ECOLÓGICA",
    subtitulo: "Derechos colectivos y acciones populares",
    descripcion: "La Constitución de 1991, denominada 'Constitución Ecológica', integró más de 49 disposiciones sobre medio ambiente. Elevó el ambiente sano a derecho colectivo fundamental, consagrando mecanismos como la Acción Popular para proteger intereses de la comunidad, permitiendo exigir judicialmente la prevención y reparación de daños al ecosistema bajo el marco del desarrollo sostenible.",
    icono: "🇨🇴",
    color: "#fbcfe8",
    badgeBg: "#78350f",
    fuente: "Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares."
  },
  {
    id: 6,
    fecha: "1993",
    pos: "izquierda",
    titulo: "REESTRUCTURACIÓN SINA",
    subtitulo: "Ley 99 de 1993: Ministerio y gestión regional",
    descripcion: "La Ley 99 de 1993 fue el punto de quiebre institucional al crear el Ministerio del Ambiente y el Sistema Nacional Ambiental (SINA). Este marco descentralizó el control ambiental mediante las Corporaciones Autónomas Regionales e implementó instrumentos económicos (tasas retributivas, compensatorias y multas severas) para disuadir impactos negativos y fomentar el compromiso de las empresas con la sostenibilidad.",
    icono: "🏛️",
    color: "#fed7aa",
    badgeBg: "#ec4899",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia a partir de la Constitución de 1991."
  },
  {
    id: 7,
    fecha: "2009–Actual",
    pos: "derecha",
    titulo: "RÉGIMEN SANCIONATORIO",
    subtitulo: "Ley 1333 de 2009 y nuevas tendencias",
    descripcion: "Esta norma instauró el régimen sancionatorio ambiental moderno, permitiendo a las autoridades imponer medidas preventivas y multas de hasta 5,000 salarios mínimos. Se enfoca en la obligación ineludible de restauración del daño ambiental. En la actualidad, el aseguramiento de la responsabilidad civil y el principio de precaución (Buitrago, 2018) son esenciales para abordar los retos del cambio climático y la justicia ambiental.",
    icono: "⚠️",
    color: "#fca5a5",
    badgeBg: "#e11d48",
    fuente: "Cancelado Ávila, D. F., Solís Yepes, J. L., & Díaz Castillo, W. J. (s.f.). Análisis jurídico de protección a las víctimas y del medio ambiente."
  }
];

const referenciasTotales = [
  "Acuerdo No. 1011 (2022). Política ambiental de la Fundación Universitaria Agraria de Colombia - UNIAGRARIA.",
  "Buitrago Dangond, E. A. (2018). El principio de precaución en la jurisprudencia constitucional. Derectum, 3(2), 107-126.",
  "Cancelado Ávila, D. F., et al. (s.f.). Capítulo IV: Instrumentos económicos de política ambiental. En Análisis jurídico de protección a las víctimas y del medio ambiente.",
  "Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares.",
  "Facultad de Ciencias Jurídicas U. Javeriana. (s.f.). Las Nuevas Tendencias de la Responsabilidad Civil y su Aseguramiento [Video]. YouTube.",
  "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana en materia de protección ambiental. Revista Jurídica Mario Alario D’Filippo, 16(33), 184-201.",
  "González Villa, J. E. (2012). Las acciones populares y el daño ambiental. Revista Facultad de Derecho y Ciencias Políticas, 42(117), 581-620.",
  "IARCE. (2020). El dilema de la culpa - Obdulio Velásquez Posada [Video]. YouTube.",
  "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano. Derecho y Sociedad, 1(1), 1-10.",
  "Ortiz Monsalve, Á. (s.f.). Responsabilidad civil: Concepto y clases [Video]. YouTube.",
  "Porras Ramírez, A. (2011). Incidencias de la regulación ambiental en la economía [Tesis de grado, Universidad Icesi].",
  "Universidad Abierta Para Adultos (UAPA). (2021). Memorias 25 aniversario, UAPA 1995-2020.",
  "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia. Jurídicas, 4(2), 163-185.",
  "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual (2da ed.). Temis; Universidad de La Sabana.",
  "Woolcott Oyague, O., & Monje Mayorca, D. F. (Eds.). (2018). La modernización de las instituciones del derecho civil."
];

export default function App() {
  const [selectedHito, setSelectedHito] = useState<Hito | null>(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#1e293b', fontFamily: 'system-ui, sans-serif', padding: '40px 20px' }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto 50px auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px' }}>
          Evolución de la Responsabilidad Civil Ambiental
        </h1>
        <p style={{ fontSize: '14px', color: '#64748b' }}>Recorrido histórico y normativo en Colombia</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '50%', top: '20px', bottom: '80px', width: '4px', backgroundColor: '#e2e8f0', transform: 'translateX(-50%)', zIndex: 1 }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', zIndex: 2 }}>
          {hitos.map((hito) => (
            <div key={hito.id} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div style={{ width: '45%', textAlign: hito.pos === 'izquierda' ? 'right' : 'left' }}>
                <div onClick={() => setSelectedHito(hito)} style={{ cursor: 'pointer', backgroundColor: '#fff', border: '2px solid #1e293b', padding: '15px', borderRadius: '8px', boxShadow: '4px 4px 0px #1e293b' }}>
                  <h3 style={{ fontSize: '14px', margin: '0 0 5px' }}>{hito.titulo}</h3>
                  <p style={{ fontSize: '12px', color: '#475569', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{hito.subtitulo}</p>
                </div>
              </div>
              <div style={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ backgroundColor: hito.badgeBg, color: '#fff', padding: '5px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>{hito.fecha}</div>
              </div>
              <div style={{ width: '45%' }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '60px auto 0 auto', backgroundColor: '#fff', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '16px', marginBottom: '15px' }}>Referencias Bibliográficas</h2>
        <ul style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.6' }}>
          {referenciasTotales.map((ref, idx) => <li key={idx} style={{ marginBottom: '5px' }}>{ref}</li>)}
        </ul>
      </div>

      {selectedHito && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }} onClick={() => setSelectedHito(null)}>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', maxWidth: '500px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <h2 style={{ margin: '0 0 10px' }}>{selectedHito.titulo}</h2>
            <p style={{ fontSize: '13px', lineHeight: '1.6' }}>{selectedHito.descripcion}</p>
            <p style={{ fontSize: '11px', marginTop: '15px', fontStyle: 'italic', color: '#64748b' }}>Fuente: {selectedHito.fuente}</p>
            <button onClick={() => setSelectedHito(null)} style={{ marginTop: '20px', width: '100%', padding: '10px', cursor: 'pointer' }}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}