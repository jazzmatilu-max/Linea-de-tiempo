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
    subtitulo: "Hito: Lex Aquilia y res communi",
    descripcion: "Los recursos naturales como el aire y agua eran de uso común, por lo que la Lex Aquilia estipuló la responsabilidad civil, mediante la reparación de daños injustos por dolo o culpa, para proteger la propiedad privada.",
    icono: "🐦",
    color: "#3b82f6",
    badgeBg: "#f97316",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 2,
    fecha: "1825–1829",
    pos: "izquierda",
    titulo: "CONSERVACIÓN SIMÓN BOLÍVAR",
    subtitulo: "Hito: Medidas de protección para la fauna, el agua y los bosques",
    descripcion: "Primer legislativo de la era republicana por regular la salubridad ambiental y conservación de los recursos.",
    icono: "🌲",
    color: "#a855f7",
    badgeBg: "#a855f7",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 3,
    fecha: "1918",
    pos: "izquierda",
    titulo: "CREACIÓN DE INDERENA",
    subtitulo: "Hito: Nacimiento del instituto nacional de recursos naturales",
    descripcion: "El estado asume la gestión ambiental nacional y la administración directa de los recursos del país.",
    icono: "🌸",
    color: "#ef4444",
    badgeBg: "#2563eb",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 4,
    fecha: "1968",
    pos: "derecha",
    titulo: "TEORÍA DEL RIESGO CREADO",
    subtitulo: "Hito: Responsabilidad por riesgo en el tribunal de cartagena",
    descripcion: "Permite asumir las responsabilidades por actividades peligrosas sin necesidad de prueba de culpa directa, innovando en la protección civil.",
    icono: "🐦",
    color: "#3b82f6",
    badgeBg: "#dc2626",
    fuente: "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual."
  },
  {
    id: 5,
    fecha: "1973",
    pos: "izquierda",
    titulo: "LEY 2811 DE 1974",
    subtitulo: "Hito: Creación del código nacional de recursos naturales",
    descripcion: "Establece que cualquier acción que conlleve a la contaminación es sancionable, implementando la responsabilidad administrativa y civil sobre los recursos.",
    icono: "🐻",
    color: "#15803d",
    badgeBg: "#eab308",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 6,
    fecha: "1974",
    pos: "derecha",
    titulo: "LEY 23 DE 1973",
    subtitulo: "Hito: Nacimiento del derecho ambiental colombiano",
    descripcion: "Define al medio ambiente como patrimonio común y otorgó facultades legislativas especiales sobre contaminación y recursos naturales.",
    icono: "🐿️",
    color: "#eab308",
    badgeBg: "#15803d",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 7,
    fecha: "1991",
    pos: "izquierda",
    titulo: "LEY 99 DE 1993",
    subtitulo: "Hito: Creación del ministerio de ambiente y el Sistema nacional ambiental",
    descripcion: "Fortalece la gestión técnica y las sanciones mediante contribuciones, tasas retributivas, multas e instrumentos de impacto ambiental.",
    icono: "🐞",
    color: "#d97706",
    badgeBg: "#ec4899",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana."
  },
  {
    id: 8,
    fecha: "1993",
    pos: "derecha",
    titulo: "CONSTITUCIÓN ECOLÓGICA",
    subtitulo: "Hito: Ambiente sano como derecho colectivo y creación de acciones populares",
    descripcion: "Incluye 49 artículos sobre el medio ambiente en pro de la protección ambiental y la prevención, restauración y resarcimiento de daños ambientales.",
    icono: "🐝",
    color: "#db2777",
    badgeBg: "#78350f",
    fuente: "Colombia Asamblea Nacional Constituyente (1991)."
  },
  {
    id: 9,
    fecha: "2009–2026",
    pos: "derecha",
    titulo: "LEY 1333 DE 2009",
    subtitulo: "Hito: Régimen sancionatorio y medidas preventivas",
    descripcion: "Procedimientos para sancionar infracciones de hasta 5000 salarios mínimos, cierres y demoliciones, además de consagrar la obligación estricta de restaurar el daño causado.",
    icono: "🦗",
    color: "#e11d48",
    badgeBg: "#e11d48",
    fuente: "Cancelado Ávila, D. F., et al. (s.f.). Análisis jurídico de protección a las víctimas."
  }
];

export default function App() {
  const [selectedHito, setSelectedHito] = useState<Hito | null>(null);
  const [showFuentes, setShowFuentes] = useState(false);

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
        maxWidth: '900px',
        margin: '0 auto 60px auto',
        backgroundColor: '#ffffff',
        border: '3px solid #1e293b',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '6px 6px 0px 0px #1e293b',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '10px', fontSize: '26px' }}>
          <span>🐦</span><span>🐦</span><span>🐦</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(20px, 2.5vw, 28px)',
          fontWeight: '900',
          textTransform: 'uppercase',
          margin: '0 0 8px 0',
          color: '#1e293b',
          letterSpacing: '-0.5px'
        }}>
          Evolución de la Responsabilidad Civil Ambiental en Colombia
        </h1>
        <p style={{ fontSize: '12px', color: '#64748b', margin: 0, fontWeight: '600' }}>
          Haz clic en cualquier tarjeta de hito para consultar su detalle jurídico y referencias académicas.
        </p>
      </div>

      {/* CONTENEDOR LÍNEA DE TIEMPO */}
      <div style={{ maxWidth: '950px', margin: '0 auto', position: 'relative' }}>
        
        {/* Línea Central */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '20px',
          bottom: '100px',
          width: '6px',
          backgroundColor: '#1e293b',
          transform: 'translateX(-50%)',
          zIndex: 1
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', position: 'relative', zIndex: 2 }}>
          {hitos.map((hito) => {
            const isLeft = hito.pos === 'izquierda';
            return (
              <div key={hito.id} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                
                {/* Lado Izquierdo */}
                <div style={{ width: '45%', textAlign: 'right', paddingRight: '35px' }}>
                  {isLeft ? (
                    <div 
                      onClick={() => setSelectedHito(hito)}
                      style={{
                        backgroundColor: '#ffffff',
                        border: `3px solid ${hito.color}`,
                        borderRadius: '10px',
                        boxShadow: '5px 5px 0px 0px #1e293b',
                        textAlign: 'left',
                        display: 'inline-block',
                        width: '100%',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '7px 7px 0px 0px #1e293b';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '5px 5px 0px 0px #1e293b';
                      }}
                    >
                      <div style={{
                        backgroundColor: hito.color,
                        padding: '6px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: `2px solid ${hito.color}`
                      }}>
                        <span style={{ fontWeight: '900', fontSize: '11px', color: '#ffffff', textTransform: 'uppercase' }}>
                          {hito.titulo}
                        </span>
                        <div style={{ display: 'flex', gap: '4px', fontSize: '10px', background: 'rgba(255,255,255,0.3)', padding: '2px 6px', borderRadius: '4px', color: '#fff' }}>
                          <span>—</span><span>□</span><span>✕</span>
                        </div>
                      </div>
                      <div style={{ padding: '16px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '900', color: '#1e293b', marginBottom: '6px' }}>
                          {hito.subtitulo}
                        </div>
                        <p style={{ fontSize: '11px', color: '#475569', margin: 0, lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {hito.descripcion}
                        </p>
                        <span style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px', fontWeight: '800', color: hito.color }}>
                          + Ampliar información &rarr;
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: '42px', filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.15))' }}>{hito.icono}</span>
                    </div>
                  )}
                </div>

                {/* Badge Central de Fecha */}
                <div style={{ width: '10%', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <div style={{
                    backgroundColor: hito.badgeBg,
                    color: '#ffffff',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '3px solid #1e293b',
                    fontSize: '11px',
                    fontWeight: '900',
                    textAlign: 'center',
                    boxShadow: '3px 3px 0px 0px #1e293b',
                    whiteSpace: 'nowrap',
                    zIndex: 3
                  }}>
                    {hito.fecha}
                  </div>
                </div>

                {/* Lado Derecho */}
                <div style={{ width: '45%', textAlign: 'left', paddingLeft: '35px' }}>
                  {!isLeft ? (
                    <div 
                      onClick={() => setSelectedHito(hito)}
                      style={{
                        backgroundColor: '#ffffff',
                        border: `3px solid ${hito.color}`,
                        borderRadius: '10px',
                        boxShadow: '5px 5px 0px 0px #1e293b',
                        textAlign: 'left',
                        display: 'inline-block',
                        width: '100%',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '7px 7px 0px 0px #1e293b';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '5px 5px 0px 0px #1e293b';
                      }}
                    >
                      <div style={{
                        backgroundColor: hito.color,
                        padding: '6px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: `2px solid ${hito.color}`
                      }}>
                        <span style={{ fontWeight: '900', fontSize: '11px', color: '#ffffff', textTransform: 'uppercase' }}>
                          {hito.titulo}
                        </span>
                        <div style={{ display: 'flex', gap: '4px', fontSize: '10px', background: 'rgba(255,255,255,0.3)', padding: '2px 6px', borderRadius: '4px', color: '#fff' }}>
                          <span>—</span><span>□</span><span>✕</span>
                        </div>
                      </div>
                      <div style={{ padding: '16px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '900', color: '#1e293b', marginBottom: '6px' }}>
                          {hito.subtitulo}
                        </div>
                        <p style={{ fontSize: '11px', color: '#475569', margin: 0, lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {hito.descripcion}
                        </p>
                        <span style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px', fontWeight: '800', color: hito.color }}>
                          + Ampliar información &rarr;
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                      <span style={{ fontSize: '42px', filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.15))' }}>{hito.icono}</span>
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
            borderRadius: '14px',
            boxShadow: '6px 6px 0px 0px #1e293b'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '6px' }}>🦋🌿</div>
            <div style={{ fontWeight: '900', fontSize: '13px', textTransform: 'uppercase', color: '#1e293b', letterSpacing: '1px' }}>
              Naturaleza como Sujeto de Derechos
            </div>
          </div>
        </div>

      </div>

      {/* SECCIÓN FUENTES ACADÉMICAS DE UNIAGRARIA */}
      <div style={{ maxWidth: '900px', margin: '70px auto 0 auto', textAlign: 'center' }}>
        <button 
          onClick={() => setShowFuentes(!showFuentes)}
          style={{
            backgroundColor: '#ffffff',
            color: '#1e293b',
            border: '3px solid #1e293b',
            padding: '12px 24px',
            borderRadius: '12px',
            fontWeight: '900',
            fontSize: '12px',
            cursor: 'pointer',
            boxShadow: '4px 4px 0px 0px #1e293b',
            textTransform: 'uppercase'
          }}
        >
          {showFuentes ? "Ocultar Fuentes Académicas de Uniagraria" : "📖 Ver Fuentes Académicas de Uniagraria"}
        </button>

        {showFuentes && (
          <div style={{
            marginTop: '20px',
            textAlign: 'left',
            backgroundColor: '#ffffff',
            border: '3px solid #1e293b',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '6px 6px 0px 0px #1e293b',
            fontSize: '12px'
          }}>
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', marginTop: 0, marginBottom: '12px', color: '#1e293b' }}>
              Referencias Bibliográficas Oficiales:
            </h4>
            <ul style={{ paddingLeft: '20px', margin: 0, color: '#475569', lineHeight: '1.6' }}>
              <li>Acuerdo No. 1011. (2022, 6 de julio). Política ambiental de la Fundación Universitaria Agraria de Colombia - UNIAGRARIA.</li>
              <li>Buitrago Dangond, E. A. (2018). El principio de precaución en la jurisprudencia constitucional. <i>Derectum</i>, 3(2), 107-126.</li>
              <li>Cancelado Ávila, D. F., Solís Yepes, J. L., & Díaz Castillo, W. J. (s.f.). Capítulo IV: Parangón e implementación de instrumentos económicos de política ambiental. Escuela Superior de Guerra.</li>
              <li>Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares.</li>
              <li>Flórez Hernández, C., Quintana, B. V., & Molina Romero, M. (2024). Hitos de la normatividad colombiana en materia de protección ambiental. <i>Revista Jurídica Mario Alario D’Filippo</i>, 16(33), 184-201.</li>
              <li>Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano. <i>Derecho y Sociedad</i>, 1(1), 1-10.</li>
              <li>Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia a partir de la Constitución de 1991. <i>Jurídicas</i>, 4(2), 163-185.</li>
              <li>Velásquez Posada, O. (2013). Responsabilidad civil extracontractual (2da ed.). Temis; Universidad de La Sabana.</li>
            </ul>
          </div>
        )}
      </div>

      {/* MODAL INTERACTIVO DE DETALLES */}
      {selectedHito && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            border: `3px solid ${selectedHito.color}`,
            borderRadius: '16px',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '10px 10px 0px 0px #1e293b',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Barra de ventana modal */}
            <div style={{
              backgroundColor: selectedHito.color,
              padding: '10px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontWeight: '900', fontSize: '12px', color: '#ffffff', textTransform: 'uppercase' }}>
                {selectedHito.titulo}
              </span>
              <button 
                onClick={() => setSelectedHito(null)}
                style={{
                  background: 'rgba(255,255,255,0.3)', border: 'none', borderRadius: '4px',
                  width: '24px', height: '24px', color: '#fff', fontWeight: 'bold', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>

            {/* Contenido Modal */}
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'inline-block', backgroundColor: selectedHito.badgeBg, color: '#fff', fontSize: '10px', fontWeight: '900', padding: '4px 8px', borderRadius: '6px', marginBottom: '12px' }}>
                {selectedHito.fecha}
              </div>
              <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#1e293b', margin: '0 0 10px 0' }}>
                {selectedHito.subtitulo}
              </h3>
              <div style={{ backgroundColor: '#f1f5f9', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '12px', color: '#334155', lineHeight: '1.6', marginBottom: '16px' }}>
                {selectedHito.descripcion}
              </div>
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                  Referencia Bibliográfica:
                </span>
                <p style={{ fontSize: '11px', color: '#475569', fontStyle: 'italic', margin: 0, backgroundColor: '#fffbeb', padding: '8px', borderRadius: '6px', border: '1px solid #fef3c7' }}>
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
                  padding: '10px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12px',
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