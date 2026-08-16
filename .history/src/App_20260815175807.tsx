import React from 'react';

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
    badgeBg: "#f97316"
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
    badgeBg: "#a855f7"
  },
  {
    id: 3,
    fecha: "1918",
    pos: "izquierda",
    titulo: "CREACIÓN DE INDERENA",
    subtitulo: "Hito: Nacimiento del instituto nacional de recursos naturales",
    descripcion: "El estado asume la gestión ambiental nacional.",
    icono: "🌸",
    color: "#ef4444",
    badgeBg: "#2563eb"
  },
  {
    id: 4,
    fecha: "1968",
    pos: "derecha",
    titulo: "TEORÍA DEL RIESGO CREADO",
    subtitulo: "Hito: Responsabilidad por riesgo en el tribunal de cartagena",
    descripcion: "Permite asumir las responsabilidades por actividades peligrosas sin necesidad de prueba de culpa.",
    icono: "🐦",
    color: "#3b82f6",
    badgeBg: "#dc2626"
  },
  {
    id: 5,
    fecha: "1973",
    pos: "izquierda",
    titulo: "LEY 2811 DE 1974",
    subtitulo: "Hito: Creación del código nacional de recursos naturales",
    descripcion: "Establece que cualquier acción que conlleve a la contaminación es sancionable, también uso de la responsabilidad administrativa y civil sobre los recursos.",
    icono: "🐻",
    color: "#15803d",
    badgeBg: "#eab308"
  },
  {
    id: 6,
    fecha: "1974",
    pos: "derecha",
    titulo: "LEY 23 DE 1973",
    subtitulo: "Hito: Nacimiento del derecho ambiental colombiano",
    descripcion: "Define al medio ambiente como patrimonio común y otorgó facultades legislativas sobre contaminación y recursos naturales.",
    icono: "🐿️",
    color: "#eab308",
    badgeBg: "#15803d"
  },
  {
    id: 7,
    fecha: "1991",
    pos: "izquierda",
    titulo: "LEY 99 DE 1993",
    subtitulo: "Hito: Creación del ministerio de ambiente y el Sistema nacional ambiental",
    descripcion: "Fortalece la gestión técnica y sanciones mediante contribuciones, tasas, multas e impacto ambiental.",
    icono: "🐞",
    color: "#d97706",
    badgeBg: "#ec4899"
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
    badgeBg: "#78350f"
  },
  {
    id: 9,
    fecha: "2009–2026",
    pos: "derecha",
    titulo: "LEY 1333 DE 2009",
    subtitulo: "Hito: Régimen sancionatorio y medidas preventivas",
    descripcion: "Procedimientos para sancionar infracciones de hasta 5000 salarios mínimos, cierres y demoliciones, además de restaurar el daño causado.",
    icono: "🦗",
    color: "#e11d48",
    badgeBg: "#e11d48"
  }
];

export default function App() {
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
          margin: 0,
          color: '#1e293b',
          letterSpacing: '-0.5px'
        }}>
          Evolución de la Responsabilidad Civil Ambiental en Colombia
        </h1>
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
                    <div style={{
                      backgroundColor: '#ffffff',
                      border: `3px solid ${hito.color}`,
                      borderRadius: '10px',
                      boxShadow: '5px 5px 0px 0px #1e293b',
                      textAlign: 'left',
                      display: 'inline-block',
                      width: '100%',
                      overflow: 'hidden'
                    }}>
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
                        <p style={{ fontSize: '11px', color: '#475569', margin: 0, lineHeight: '1.5' }}>
                          {hito.descripcion}
                        </p>
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
                    <div style={{
                      backgroundColor: '#ffffff',
                      border: `3px solid ${hito.color}`,
                      borderRadius: '10px',
                      boxShadow: '5px 5px 0px 0px #1e293b',
                      textAlign: 'left',
                      display: 'inline-block',
                      width: '100%',
                      overflow: 'hidden'
                    }}>
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
                        <p style={{ fontSize: '11px', color: '#475569', margin: 0, lineHeight: '1.5' }}>
                          {hito.descripcion}
                        </p>
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
    </div>
  );
}