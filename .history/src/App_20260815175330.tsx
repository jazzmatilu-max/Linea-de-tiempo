import React, { useState } from 'react';

interface Hito {
  id: number;
  fecha: string;
  pos: 'izquierda' | 'derecha';
  tagColor: string;
  glowColor: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  icono: string;
  fuente: string;
}

const hitos: Hito[] = [
  {
    id: 1,
    fecha: "S III A.C. – VI D.C.",
    pos: "derecha",
    tagColor: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.4)",
    titulo: "DERECHO ROMANO",
    subtitulo: "Lex Aquilia y res communi",
    descripcion: "Los recursos naturales como el aire y agua eran de uso común, por lo que la Lex Aquilia estipuló la responsabilidad civil, mediante la reparación de daños injustos por dolo o culpa, para proteger la propiedad privada.",
    icono: "🏛️",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 2,
    fecha: "1825–1829",
    pos: "izquierda",
    tagColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.4)",
    titulo: "CONSERVACIÓN SIMÓN BOLÍVAR",
    subtitulo: "Medidas de protección para la fauna, el agua y los bosques",
    descripcion: "Primer legislativo de la era republicana por regular la salubridad ambiental y conservación de los recursos.",
    icono: "📜",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 3,
    fecha: "1918",
    pos: "izquierda",
    tagColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.4)",
    titulo: "CREACIÓN DE INDERENA",
    subtitulo: "Nacimiento del instituto nacional de recursos naturales",
    descripcion: "El estado asume la gestión ambiental nacional.",
    icono: "🌲",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 4,
    fecha: "1968",
    pos: "derecha",
    tagColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.4)",
    titulo: "TEORÍA DEL RIESGO CREADO",
    subtitulo: "Responsabilidad por riesgo en el tribunal de cartagena",
    descripcion: "Permite asumir las responsabilidades por actividades peligrosas sin necesidad de prueba de culpa.",
    icono: "⚡",
    fuente: "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual."
  },
  {
    id: 5,
    fecha: "1973",
    pos: "izquierda",
    tagColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.4)",
    titulo: "LEY 2811 DE 1974",
    subtitulo: "Creación del código nacional de recursos naturales",
    descripcion: "Establece que cualquier acción que conlleve a la contaminación es sancionable, también uso de la responsabilidad administrativa y civil sobre los recursos.",
    icono: "💧",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 6,
    fecha: "1974",
    pos: "derecha",
    tagColor: "#eab308",
    glowColor: "rgba(234, 179, 8, 0.4)",
    titulo: "LEY 23 DE 1973",
    subtitulo: "Nacimiento del derecho ambiental colombiano",
    descripcion: "Define al medio ambiente como patrimonio común y otorgó facultades legislativas sobre contaminación y recursos naturales.",
    icono: "🌍",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 7,
    fecha: "1991",
    pos: "izquierda",
    tagColor: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.4)",
    titulo: "LEY 99 DE 1993",
    subtitulo: "Creación del ministerio de ambiente y el Sistema nacional ambiental",
    descripcion: "Fortalece la gestión técnica y sanciones mediante contribuciones, tasas, multas e impacto ambiental.",
    icono: "⚖️",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana."
  },
  {
    id: 8,
    fecha: "1993",
    pos: "derecha",
    tagColor: "#6366f1",
    glowColor: "rgba(99, 102, 241, 0.4)",
    titulo: "CONSTITUCIÓN ECOLÓGICA",
    subtitulo: "Ambiente sano como derecho colectivo y creación de acciones populares",
    descripcion: "Incluye 49 artículos sobre el medio ambiente en pro de la protección ambiental y la prevención, restauración y resarcimiento de daños ambientales.",
    icono: "🌿",
    fuente: "Colombia Asamblea Nacional Constituyente (1991)."
  },
  {
    id: 9,
    fecha: "2009–2026",
    pos: "derecha",
    tagColor: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.4)",
    titulo: "LEY 1333 DE 2009",
    subtitulo: "Régimen sancionatorio y medidas preventivas",
    descripcion: "Procedimientos para sancionar infracciones de hasta 5000 salarios mínimos, cierres y demoliciones, además de restaurar el daño causado.",
    icono: "🛡️",
    fuente: "Cancelado Ávila, D. F., et al. (s.f.). Análisis jurídico de protección a las víctimas."
  }
];

export default function App() {
  const [selectedHito, setSelectedHito] = useState<Hito | null>(null);
  const [showFuentes, setShowFuentes] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#090a0f',
      color: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '60px 20px',
      overflowX: 'hidden',
      backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(30, 27, 75, 0.3) 0%, transparent 60%)'
    }}>
      
      {/* HEADER HERO */}
      <div style={{
        maxWidth: '850px',
        margin: '0 auto 70px auto',
        background: 'rgba(18, 20, 32, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '36px',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(90deg, #6366f1, #a855f7)', color: '#fff',
          fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px',
          padding: '4px 14px', borderRadius: '20px', boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)'
        }}>
          Línea de Tiempo Interactiva
        </div>
        <h1 style={{
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: '900',
          textTransform: 'uppercase',
          margin: '10px 0 14px 0',
          background: 'linear-gradient(135deg, #ffffff 30%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          Evolución de la Responsabilidad Civil Ambiental en Colombia
        </h1>
        <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, fontWeight: '400' }}>
          Haz clic en cualquier tarjeta de hito para desplegar los detalles arquitectónicos y jurídicos completos.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        
        {/* Glowing Center Line */}
        <div style={{
          position: 'absolute', left: '50%', top: '30px', bottom: '30px', width: '3px',
          background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
          transform: 'translateX(-50%)', zIndex: 1,
          boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)'
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', position: 'relative', zIndex: 2 }}>
          {hitos.map((hito) => {
            const isLeft = hito.pos === 'izquierda';
            return (
              <div key={hito.id} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                
                {/* LEFT COLUMN */}
                <div style={{ width: '45%', textAlign: 'right', paddingRight: '25px' }}>
                  {isLeft ? (
                    <div 
                      onClick={() => setSelectedHito(hito)}
                      style={{
                        background: 'rgba(18, 20, 32, 0.75)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '22px',
                        borderRadius: '18px',
                        boxShadow: `0 10px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)`,
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'inline-block',
                        width: '100%',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = hito.tagColor;
                        e.currentTarget.style.boxShadow = `0 15px 35px rgba(0,0,0,0.6), 0 0 20px ${hito.glowColor}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontWeight: '900', fontSize: '11px', textTransform: 'uppercase', color: hito.tagColor, letterSpacing: '0.5px' }}>
                          {hito.titulo}
                        </span>
                        <span style={{ fontSize: '16px' }}>{hito.icono}</span>
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: '#e2e8f0', marginBottom: '8px' }}>
                        {hito.subtitulo}
                      </div>
                      <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5' }}>
                        {hito.descripcion}
                      </p>
                      <div style={{ marginTop: '12px', fontSize: '11px', fontWeight: '700', color: hito.tagColor, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Explorar hito &rarr;
                      </div>
                    </div>
                  ) : (
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      background: 'rgba(18, 20, 32, 0.6)', backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)', padding: '8px 16px',
                      borderRadius: '20px', fontSize: '12px', fontWeight: '600', color: '#cbd5e1',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}>
                      <span>{hito.icono}</span>
                      <span>{hito.titulo}</span>
                    </div>
                  )}
                </div>

                {/* CENTER BADGE (DATE) */}
                <div style={{ width: '10%', display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    background: '#0f111a',
                    color: '#fff',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    border: `2px solid ${hito.tagColor}`,
                    fontSize: '11px',
                    fontWeight: '900',
                    textAlign: 'center',
                    boxShadow: `0 0 20px ${hito.glowColor}`,
                    whiteSpace: 'nowrap',
                    zIndex: 3
                  }}>
                    {hito.fecha}
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div style={{ width: '45%', textAlign: 'left', paddingLeft: '25px' }}>
                  {!isLeft ? (
                    <div 
                      onClick={() => setSelectedHito(hito)}
                      style={{
                        background: 'rgba(18, 20, 32, 0.75)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '22px',
                        borderRadius: '18px',
                        boxShadow: `0 10px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)`,
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'inline-block',
                        width: '100%',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = hito.tagColor;
                        e.currentTarget.style.boxShadow = `0 15px 35px rgba(0,0,0,0.6), 0 0 20px ${hito.glowColor}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontWeight: '900', fontSize: '11px', textTransform: 'uppercase', color: hito.tagColor, letterSpacing: '0.5px' }}>
                          {hito.titulo}
                        </span>
                        <span style={{ fontSize: '16px' }}>{hito.icono}</span>
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: '#e2e8f0', marginBottom: '8px' }}>
                        {hito.subtitulo}
                      </div>
                      <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5' }}>
                        {hito.descripcion}
                      </p>
                      <div style={{ marginTop: '12px', fontSize: '11px', fontWeight: '700', color: hito.tagColor, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Explorar hito &rarr;
                      </div>
                    </div>
                  ) : (
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      background: 'rgba(18, 20, 32, 0.6)', backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)', padding: '8px 16px',
                      borderRadius: '20px', fontSize: '12px', fontWeight: '600', color: '#cbd5e1',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}>
                      <span>{hito.icono}</span>
                      <span>{hito.titulo}</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* TIMELINE END BADGE */}
        <div style={{ textAlign: 'center', marginTop: '60px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
            color: '#fff',
            border: '1px solid rgba(129, 140, 248, 0.4)',
            padding: '14px 28px',
            borderRadius: '16px',
            fontWeight: '900',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
          }}>
            🌿 Naturaleza como Sujeto de Derechos
          </div>
        </div>

      </div>

      {/* FOOTER & SOURCES SECTION */}
      <div style={{ maxWidth: '850px', margin: '70px auto 0 auto', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '40px' }}>
        <button 
          onClick={() => setShowFuentes(!showFuentes)}
          style={{
            background: 'rgba(18, 20, 32, 0.8)',
            color: '#f8fafc',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '12px 24px',
            borderRadius: '14px',
            fontWeight: '700',
            fontSize: '12px',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366f1'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'}
        >
          {showFuentes ? "Ocultar Fuentes Académicas de Uniagraria" : "📖 Ver Fuentes Académicas de Uniagraria"}
        </button>

        {showFuentes && (
          <div style={{
            marginTop: '24px',
            textAlign: 'left',
            background: 'rgba(15, 17, 26, 0.9)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '28px',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            fontSize: '12px'
          }}>
            <h4 style={{ fontWeight: '900', textTransform: 'uppercase', marginTop: 0, marginBottom: '16px', color: '#e2e8f0', letterSpacing: '0.5px' }}>
              Referencias Bibliográficas Oficiales:
            </h4>
            <ul style={{ paddingLeft: '20px', margin: 0, color: '#94a3b8', lineHeight: '1.7' }}>
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

      {/* MODAL DETALLES */}
      {selectedHito && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(5, 6, 10, 0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div style={{
            background: '#121420',
            border: `1px solid ${selectedHito.tagColor}`,
            borderRadius: '24px',
            maxWidth: '520px',
            width: '100%',
            padding: '32px',
            boxShadow: `0 25px 50px rgba(0,0,0,0.8), 0 0 30px ${selectedHito.glowColor}`,
            position: 'relative',
            animation: 'fadeIn 0.25s ease-out'
          }}>
            <button 
              onClick={() => setSelectedHito(null)}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: '50%', width: '32px', height: '32px',
                color: '#fff', fontWeight: 'bold', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              ✕
            </button>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '10px', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span>{selectedHito.icono}</span>
              <span style={{ fontSize: '11px', fontWeight: '900', color: selectedHito.tagColor, letterSpacing: '0.5px' }}>{selectedHito.fecha}</span>
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 6px 0', color: '#fff' }}>
              {selectedHito.titulo}
            </h2>
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: selectedHito.tagColor, margin: '0 0 16px 0' }}>
              {selectedHito.subtitulo}
            </h4>

            <div style={{
              background: 'rgba(9, 10, 15, 0.6)',
              padding: '16px',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '12px',
              color: '#cbd5e1',
              lineHeight: '1.6'
            }}>
              {selectedHito.descripcion}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', display: 'block', marginBottom: '6px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Referencia Bibliográfica:
              </span>
              <p style={{ fontSize: '11px', color: '#cbd5e1', fontStyle: 'italic', background: 'rgba(255, 255, 255, 0.03)', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)', margin: 0, lineHeight: '1.5' }}>
                {selectedHito.fuente}
              </p>
            </div>

            <button 
              onClick={() => setSelectedHito(null)}
              style={{
                width: '100%',
                marginTop: '24px',
                background: `linear-gradient(135deg, ${selectedHito.tagColor}, #4f46e5)`,
                color: '#fff',
                fontWeight: '800',
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                letterSpacing: '0.5px',
                boxShadow: `0 8px 20px ${selectedHito.glowColor}`
              }}
            >
              Cerrar ventana
            </button>
          </div>
        </div>
      )}

    </div>
  );
}