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
    descripcion: "Desde el derecho romano se concebían los recursos naturales como bienes comunes de uso público ('res communis'). A través de la Lex Aquilia se estructuraron las bases fundamentales de la responsabilidad civil al tipificar el deber de reparar económicamente los daños injustos causados por dolo o culpa, marcando los antecedentes históricos sobre cómo el patrimonio y la ley debían responder ante los perjuicios inferidos al entorno y a la colectividad.",
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
    descripcion: "En los albores de la vida republicana, el Libertador Simón Bolívar impulsó decretos pioneros enfocados en cuidar los bosques nacionales, regular la distribución de las aguas y proteger la fauna silvestre. Fueron las primeras directrices de carácter oficial orientadas a frenar la explotación desmedida y preservar las fuentes hídricas, sentando el punto de partida en nuestra historia legislativa para la administración y salvaguarda de los recursos naturales.",
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
    descripcion: "Representó un avance institucional decisivo en el cual el Estado asumió de forma directa la gestión técnica, el control administrativo y la conservación integral de los recursos renovables del país. Esto permitió unificar criterios de manejo forestal y pesquero, fortaleciendo sustancialmente las labores de inspección, vigilancia y protección ambiental en todo el territorio nacional.",
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
    descripcion: "Un hito jurisprudencial de gran calado porque transformó la jurisdicción contenciosa al permitir exigir responsabilidades e indemnizaciones derivadas del ejercicio de actividades peligrosas, suprimiendo la exigencia de demostrar la culpa directa. Esto facilitó considerablemente la protección jurídica y el resarcimiento económico de las víctimas frente a los daños tecnológicos y ambientales complejos.",
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
    descripcion: "Este código dejó explícitamente consagrado que cualquier acción u omisión que genere contaminación o deterioro del entorno constituye una infracción estrictamente sancionable. Sentó con firmeza las bases jurídicas de la responsabilidad administrativa y civil orientadas a prevenir y resarcir los perjuicios causados sobre los componentes de la naturaleza.",
    icono: "📘",
    color: "#86efac",
    badgeBg: "#eab308",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana en materia de protección ambiental."
  },
  {
    id: 6,
    fecha: "1974",
    pos: "derecha",
    titulo: "LEY 23 DE 1973",
    subtitulo: "Hito: Nacimiento del derecho ambiental Colombiano",
    descripcion: "Reconocida como la piedra angular del derecho ambiental en Colombia al declarar formalmente el medio ambiente como un patrimonio común de la sociedad y de interés público prioritario. Otorgó facultades extraordinarias al Gobierno para dictar normas destinadas a prevenir y controlar la contaminación, estructurando las bases del ordenamiento ecológico nacional.",
    icono: "🌿",
    color: "#fde047",
    badgeBg: "#15803d",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana en materia de protección ambiental."
  },
  {
    id: 7,
    fecha: "1991",
    pos: "izquierda",
    titulo: "LEY 99 DE 1993",
    subtitulo: "Hito: Creación del ministerio de ambiente y el Sistema nacional ambiental",
    descripcion: "Transformó de raíz la estructura de la administración pública ambiental creando el Ministerio del Ambiente y organizando el Sistema Nacional Ambiental (SINA). Fortaleció la gestión descentralizada mediante las corporaciones autónomas regionales e introdujo herramientas económicas disuasorias, tasas retributivas y multas severas para mitigar el impacto ambiental.",
    icono: "🏛️",
    color: "#fed7aa",
    badgeBg: "#ec4899",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia."
  },
  {
    id: 8,
    fecha: "1993",
    pos: "derecha",
    titulo: "CONSTITUCION ECOLÓGICA",
    subtitulo: "Hito: Ambiente sano como derecho colectivo y creación de acciones populares",
    descripcion: "La Asamblea Nacional Constituyente consagró la denominada 'Constitución Ecológica' al integrar más de 49 artículos dedicados a la protección de los recursos naturales. Elevó el ambiente sano a derecho colectivo fundamental e introdujo mecanismos procesales constitucionales de gran impacto como las acciones populares para prevenir, exigir la restauración y resarcir de manera efectiva los daños ambientales.",
    icono: "🇨🇴",
    color: "#fbcfe8",
    badgeBg: "#78350f",
    fuente: "Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares."
  },
  {
    id: 9,
    fecha: "2009–2026",
    pos: "derecha",
    titulo: "LEY 1333 DE 2009",
    subtitulo: "Hito: Régimen sancionatorio y medidas preventivas",
    descripcion: "Consolidó el marco sancionatorio ambiental vigente en el país, dotando a las autoridades de facultades para imponer medidas preventivas inmediatas y sanciones severas que alcanzan multas de hasta 5,000 salarios mínimos, cierres de establecimientos y la estricta obligación de restaurar el daño causado a los ecosistemas afectados.",
    icono: "⚠️",
    color: "#fca5a5",
    badgeBg: "#e11d48",
    fuente: "Cancelado Ávila, D. F., et al. (s.f.). Análisis jurídico de protección a las víctimas e instrumentos de política ambiental."
  }
];

const referenciasLista = [
  "Cancelado Ávila, D. F., et al. (s.f.). Análisis jurídico de protección a las víctimas e instrumentos de política ambiental.",
  "Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares.",
  "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana en materia de protección ambiental.",
  "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano.",
  "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia.",
  "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual."
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
      
      {/* TÍTULO PRINCIPAL - Integrado y profesional */}
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
          Haz clic en cualquier tarjeta del recorrido histórico para desplegar su análisis jurídico detallado y su respectiva fuente bibliográfica oficial.
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
          <div style={{ position: 'absolute', top: '12%', left: '50%', transform: 'translateX(-50%)', fontSize: '14px' }}>🍃</div>
          <div style={{ position: 'absolute', top: '32%', left: '50%', transform: 'translateX(-50%)', fontSize: '14px' }}>🌿</div>
          <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translateX(-50%)', fontSize: '14px' }}>🌱</div>
          <div style={{ position: 'absolute', top: '78%', left: '50%', transform: 'translateX(-50%)', fontSize: '14px' }}>🌲</div>
        </div>

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
                        e.currentTarget.style.transform = 'translateY(-3px)';
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
                        <p style={{ fontSize: '11px', color: '#334155', margin: 0, lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {hito.descripcion}
                        </p>
                        <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', color: '#2563eb', backgroundColor: '#eff6ff', padding: '4px 8px', borderRadius: '4px', border: '1px solid #bfdbfe' }}>
                          <span>📖</span> Ampliar información y ver cita
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: '32px' }}>
                      {hito.icono}
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
                        e.currentTarget.style.transform = 'translateY(-3px)';
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
                        <p style={{ fontSize: '11px', color: '#334155', margin: 0, lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {hito.descripcion}
                        </p>
                        <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', color: '#2563eb', backgroundColor: '#eff6ff', padding: '4px 8px', borderRadius: '4px', border: '1px solid #bfdbfe' }}>
                          <span>📖</span> Ampliar información y ver cita
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '32px' }}>
                      {hito.icono}
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
            <div style={{ fontSize: '32px', marginBottom: '6px' }}>🌍 🦋 🌿</div>
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