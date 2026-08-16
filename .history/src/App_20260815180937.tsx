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
    descripcion: "Los recursos naturales como el aire y agua eran de uso común, por lo que la Lex Aquilia estipuló la responsabilidad civil, mediante la reparación de daños injustos, por dolo o culpa, para proteger la propiedad privada.",
    icono: "🏛️",
    color: "#fca5a5",
    badgeBg: "#f97316",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 2,
    fecha: "1825–1829",
    pos: "izquierda",
    titulo: "CONSERVACIÓN SIMON BOLIVAR",
    subtitulo: "Hito: Medidas de protección para la fauna, el agua y los bosques",
    descripcion: "Primer legislativo de la era republicana por regular la salubridad ambiental y conservación de los recursos.",
    icono: "📜",
    color: "#e879f9",
    badgeBg: "#a855f7",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 3,
    fecha: "1918",
    pos: "izquierda",
    titulo: "CREACIÓN DE INDERENA",
    subtitulo: "Hito: Nacimiento del instituto nacional de recursos naturales",
    descripcion: "El estado asume la gestión ambiental nacional.",
    icono: "🛡️",
    color: "#f87171",
    badgeBg: "#2563eb",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 4,
    fecha: "1968",
    pos: "derecha",
    titulo: "TEORIA DEL RIESGO CREADO",
    subtitulo: "Hito: Responsabilidad por riesgo en el tribunal de cartagena",
    descripcion: "Permite asumir las responsabilidades por actividades peligrosas sin necesidad de prueba de culpa.",
    icono: "⚖️",
    color: "#7dd3fc",
    badgeBg: "#dc2626",
    fuente: "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual."
  },
  {
    id: 5,
    fecha: "1973",
    pos: "izquierda",
    titulo: "LEY 2811 DE 1974",
    subtitulo: "Hito: Creación del código nacional de recursos naturales",
    descripcion: "Establece que cualquier acción que conlleve a la contaminación es sancionable, también uso de la responsabilidad administrativa y civil sobre los recursos.",
    icono: "📘",
    color: "#86efac",
    badgeBg: "#eab308",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 6,
    fecha: "1974",
    pos: "derecha",
    titulo: "LEY 23 DE 1973",
    subtitulo: "Hito: Nacimiento del derecho ambiental Colombiano",
    descripcion: "Define al medio ambiente como patrimonio común y otorgó facultades legislativas sobre contaminación y recursos naturales.",
    icono: "🌿",
    color: "#fde047",
    badgeBg: "#15803d",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 7,
    fecha: "1991",
    pos: "izquierda",
    titulo: "LEY 99 DE 1993",
    subtitulo: "Hito: Creación del ministerio de ambiente y el Sistema nacional ambiental",
    descripcion: "Fortalece la gestión técnica y sanciones mediante contribuciones, tasas, multas e impacto ambiental.",
    icono: "🏛️",
    color: "#fed7aa",
    badgeBg: "#ec4899",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana."
  },
  {
    id: 8,
    fecha: "1993",
    pos: "derecha",
    titulo: "CONSTITUCION ECOLÓGICA",
    subtitulo: "Hito: Ambiente sano como derecho colectivo y creación de acciones populares",
    descripcion: "Incluye 49 artículos sobre el medio ambiente en pro de la protección ambiental y la prevención, restauración y resarcimiento de daños ambientales.",
    icono: "🇨🇴",
    color: "#fbcfe8",
    badgeBg: "#78350f",
    fuente: "Colombia Asamblea Nacional Constituyente (1991)."
  },
  {
    id: 9,
    fecha: "2009–2026",
    pos: "derecha",
    titulo: "LEY 1333 DE 2009",
    subtitulo: "Hito: Régimen sancionatorio y medidas preventivas",
    descripcion: "Procedimientos para sancionar infracciones de hasta 5000 salarios mínimos, cierres y demoliciones, además de restaurar el daño causado.",
    icono: "⚠️",
    color: "#fca5a5",
    badgeBg: "#e11d48",
    fuente: "Cancelado Ávila, D. F., et al. (s.f.). Análisis jurídico de protección a las víctimas."
  }
];

export default function App() {
  const [selectedHito, setSelectedHito] = useState<Hito | null>(null);

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
          <span>🕊️</span><span>🌿</span><span>🕊️</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(18px, 2.5vw, 26px)',
          fontWeight: '900',
          textTransform: 'uppercase',
          margin: 0,
          color: '#1e293b',
          letterSpacing: '-0.5px'
        }}>
          EVOLUCIÓN DE LA RESPONSABILIDAD CIVIL AMBIENTAL EN COLOMBIA
        </h1>
        <p style={{ fontSize: '11px', color: '#64748b', marginTop: '8px', fontWeight: '700' }}>
          💡 Haz clic en cualquier tarjeta de hito para desplegar su análisis jurídico y fuente bibliográfica oficial.
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
                        border: '3px solid #1e293b',
                        borderRadius: '8px',
                        boxShadow: '6px 6px 0px 0px #1e293b',
                        textAlign: 'left',
                        display: 'inline-block',
                        width: '100%',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '8px 8px 0px 0px #1e293b';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '6px 6px 0px 0px #1e293b';
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
                        <p style={{ fontSize: '11px', color: '#334155', margin: 0, lineHeight: '1.5' }}>
                          {hito.descripcion}
                        </p>
                        <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', color: '#2563eb', backgroundColor: '#eff6ff', padding: '4px 8px', borderRadius: '4px', border: '1px solid #bfdbfe' }}>
                          <span>📖</span> Ver fuente bibliográfica
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#ffffff', border: '3px solid #1e293b', borderRadius: '50%', width: '64px', height: '64px', boxShadow: '4px 4px 0px 0px #1e293b' }}>
                      <span style={{ fontSize: '30px' }}>{hito.icono}</span>
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
                    boxShadow: '4px 4px 0px 0px #1e293b',
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
                        border: '3px solid #1e293b',
                        borderRadius: '8px',
                        boxShadow: '6px 6px 0px 0px #1e293b',
                        textAlign: 'left',
                        display: 'inline-block',
                        width: '100%',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '8px 8px 0px 0px #1e293b';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '6px 6px 0px 0px #1e293b';
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
                        <p style={{ fontSize: '11px', color: '#334155', margin: 0, lineHeight: '1.5' }}>
                          {hito.descripcion}
                        </p>
                        <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', color: '#2563eb', backgroundColor: '#eff6ff', padding: '4px 8px', borderRadius: '4px', border: '1px solid #bfdbfe' }}>
                          <span>📖</span> Ver fuente bibliográfica
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#ffffff', border: '3px solid #1e293b', borderRadius: '50%', width: '64px', height: '64px', boxShadow: '4px 4px 0px 0px #1e293b' }}>
                      <span style={{ fontSize: '30px' }}>{hito.icono}</span>
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
            padding: '20px 40px',
            borderRadius: '12px',
            boxShadow: '6px 6px 0px 0px #1e293b'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '6px' }}>🦋🌿🌎</div>
            <div style={{ fontWeight: '900', fontSize: '13px', textTransform: 'uppercase', color: '#1e293b', letterSpacing: '1px' }}>
              NATURALEZA COMO SUJETO DE DERECHOS
            </div>
          </div>
        </div>

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
            borderRadius: '14px',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '10px 10px 0px 0px #1e293b',
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
              <div style={{ display: 'inline-block', backgroundColor: selectedHito.badgeBg, color: '#fff', fontSize: '10px', fontWeight: '900', padding: '5px 10px', borderRadius: '6px', marginBottom: '12px', border: '2px solid #1e293b' }}>
                {selectedHito.fecha}
              </div>
              <h3 style={{ fontSize: '13px', fontWeight: '900', color: '#1e293b', margin: '0 0 10px 0' }}>
                {selectedHito.subtitulo}
              </h3>
              <p style={{ fontSize: '11px', color: '#334155', lineHeight: '1.6', margin: '0 0 18px 0', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                {selectedHito.descripcion}
              </p>
              
              <div style={{ borderTop: '2px dashed #cbd5e1', paddingTop: '14px' }}>
                <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#1e293b', display: 'block', marginBottom: '6px' }}>
                  📖 Referencia Bibliográfica Oficial:
                </span>
                <p style={{ fontSize: '11px', color: '#475569', fontStyle: 'italic', margin: 0, backgroundColor: '#fef3c7', padding: '10px', borderRadius: '6px', border: '1px solid #f59e0b' }}>
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
                  borderRadius: '10px',
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