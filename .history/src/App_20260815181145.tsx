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
    descripcion: "Los recursos naturales como el aire, el agua corriente y el mar eran considerados bienes de uso común ('res communis'). No obstante, la promulgación de la Lex Aquilia sentó las bases históricas de la responsabilidad civil extracontractual al sancionar y exigir la reparación económica por daños injustos causados por dolo o culpa, protegiendo inicialmente los intereses patrimoniales y sentando los cimientos doctrinales para el resarcimiento de daños ambientales colectivos posteriores.",
    icono: "🐦",
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
    descripcion: "Durante el inicio de la era republicana, el Libertador Simón Bolívar expidió decretos pioneros en América Latina orientados a regular el uso y la conservación de los recursos naturales. Estas normativas tempranas buscaron proteger las fuentes hídricas, reglamentar el aprovechamiento forestal y salvaguardar la fauna silvestre, constituyéndose como el primer esfuerzo legislativo oficial en Colombia por regular la salubridad ambiental y la administración estatal de los recursos.",
    icono: "🌲",
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
    descripcion: "Con la consolidación de políticas de administración pública ambiental, el Estado asume un rol protagónico y directo en la gestión técnica, control y conservación del patrimonio natural de la nación. Esto permitió unificar criterios de manejo de los recursos renovables, fortaleciendo la inspección y vigilancia a escala nacional bajo una institucionalidad especializada.",
    icono: "🌸",
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
    descripcion: "Este hito jurisprudencial marcó un punto de inflexión en la jurisdicción contenciosa y civil al permitir imputar responsabilidades legales derivadas del desarrollo de actividades peligrosas, sin que fuera indispensable demostrar la culpa directa del agente causante. Al consagrarse la teoría del riesgo creado, se facilitó la protección a las víctimas y la exigibilidad de indemnizaciones ante daños tecnológicos o ambientales complejos.",
    icono: "🐦",
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
    descripcion: "El Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente estableció de manera formal que cualquier acción u omisión que conlleve a la contaminación o degradación del entorno es estrictamente sancionable. Consagró de forma explítica la obligación de asumir responsabilidad tanto administrativa como civil frente a los perjuicios ocasionados a los recursos naturales.",
    icono: "🐻",
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
    descripcion: "Considerada la piedra angular del ambientalismo jurídico en el país, la Ley 23 de 1973 definió de manera categórica al medio ambiente como un patrimonio común de la humanidad y de interés público. Asimismo, otorgó facultades extraordinarias al Presidente de la República para expedir el Código de Recursos Naturales, estructurando las bases normativas para prevenir la contaminación y regular el uso sostenible.",
    icono: "🐿️",
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
    descripcion: "Esta ley reestructuró profundamente la administración pública del sector ambiental al crear el Ministerio del Ambiente y organizar el Sistema Nacional Ambiental (SINA). Fortaleció sustancialmente la gestión técnica, descentralizó el manejo a través de las Corporaciones Autónomas Regionales e implementó instrumentos económicos disuasorios como tasas retributivas, compensatorias y multas severas por impacto ambiental.",
    icono: "🐞",
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
    descripcion: "La Asamblea Nacional Constituyente consagró la llamada 'Constitución Ecológica' al incluir más de 49 disposiciones orientadas a la protección ambiental. Elevó el derecho a un ambiente sano a la categoría de derecho colectivo, e introdujo mecanismos procesales constitucionales de gran calado como las acciones populares y de grupo para prevenir, restaurar y resarcir de manera efectiva los daños ambientales.",
    icono: "🐝",
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
    descripcion: "Estableció el actual y moderno procedimiento sancionatorio ambiental en Colombia. Otorga facultades a las autoridades para imponer medidas preventivas inmediatas y sanciones severas que incluyen multas de hasta 5,000 salarios mínimos legales mensuales vigentes, cierres temporales o definitivos de establecimientos, demoliciones y, de manera primordial, la consagración de la obligación estricta de restaurar el daño causado al ecosistema.",
    icono: "🦗",
    color: "#fca5a5",
    badgeBg: "#e11d48",
    fuente: "Cancelado Ávila, D. F., et al. (s.f.). Análisis jurídico de protección a las víctimas e instrumentos de política ambiental."
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
          <span>🐦</span><span>🐦</span><span>🐦</span>
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
          💡 Haz clic en cualquier tarjeta de hito para consultar la ampliación de su contenido jurídico y su referencia bibliográfica oficial.
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
                        borderRadius: '6px',
                        boxShadow: '5px 5px 0px 0px #1e293b',
                        textAlign: 'left',
                        display: 'inline-block',
                        width: '100%',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{
                        backgroundColor: hito.color,
                        padding: '6px 12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '3px solid #1e293b'
                      }}>
                        <span style={{ fontWeight: '900', fontSize: '10px', color: '#1e293b', textTransform: 'uppercase' }}>
                          {hito.titulo}
                        </span>
                        <div style={{ display: 'flex', gap: '4px', fontSize: '10px', background: 'rgba(255,255,255,0.6)', padding: '2px 6px', borderRadius: '4px', border: '1px solid #1e293b', color: '#1e293b' }}>
                          <span>—</span><span>□</span><span>✕</span>
                        </div>
                      </div>
                      <div style={{ padding: '14px' }}>
                        <div style={{ fontSize: '10px', fontWeight: '900', color: '#1e293b', marginBottom: '6px' }}>
                          {hito.subtitulo}
                        </div>
                        <p style={{ fontSize: '10px', color: '#334155', margin: 0, lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {hito.descripcion}
                        </p>
                        <span style={{ display: 'block', marginTop: '8px', fontSize: '9px', fontWeight: 'bold', color: '#2563eb' }}>
                          + Ampliar información y ver cita
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: '38px', filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.15))' }}>{hito.icono}</span>
                    </div>
                  )}
                </div>

                {/* Badge Central de Fecha */}
                <div style={{ width: '10%', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <div style={{
                    backgroundColor: hito.badgeBg,
                    color: '#ffffff',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: '3px solid #1e293b',
                    fontSize: '10px',
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
                        border: '3px solid #1e293b',
                        borderRadius: '6px',
                        boxShadow: '5px 5px 0px 0px #1e293b',
                        textAlign: 'left',
                        display: 'inline-block',
                        width: '100%',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{
                        backgroundColor: hito.color,
                        padding: '6px 12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '3px solid #1e293b'
                      }}>
                        <span style={{ fontWeight: '900', fontSize: '10px', color: '#1e293b', textTransform: 'uppercase' }}>
                          {hito.titulo}
                        </span>
                        <div style={{ display: 'flex', gap: '4px', fontSize: '10px', background: 'rgba(255,255,255,0.6)', padding: '2px 6px', borderRadius: '4px', border: '1px solid #1e293b', color: '#1e293b' }}>
                          <span>—</span><span>□</span><span>✕</span>
                        </div>
                      </div>
                      <div style={{ padding: '14px' }}>
                        <div style={{ fontSize: '10px', fontWeight: '900', color: '#1e293b', marginBottom: '6px' }}>
                          {hito.subtitulo}
                        </div>
                        <p style={{ fontSize: '10px', color: '#334155', margin: 0, lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {hito.descripcion}
                        </p>
                        <span style={{ display: 'block', marginTop: '8px', fontSize: '9px', fontWeight: 'bold', color: '#2563eb' }}>
                          + Ampliar información y ver cita
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                      <span style={{ fontSize: '38px', filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.15))' }}>{hito.icono}</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* CIERRE / NATURALEZA COMO SUJETO DE DERECHOS */}
        <div style={{ textAlign: 'center', marginTop: '60px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            border: '3px solid #1e293b',
            padding: '16px 32px',
            borderRadius: '10px',
            boxShadow: '6px 6px 0px 0px #1e293b'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '4px' }}>🦋🌿</div>
            <div style={{ fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', color: '#1e293b', letterSpacing: '0.5px' }}>
              NATURALEZA COMO SUJETO DE DERECHOS
            </div>
          </div>
        </div>

      </div>

      {/* MODAL INTERACTIVO AMPLIADO */}
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
              padding: '10px 14px',
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
                  width: '24px', height: '24px', color: '#1e293b', fontWeight: '900', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'inline-block', backgroundColor: selectedHito.badgeBg, color: '#fff', fontSize: '10px', fontWeight: '900', padding: '4px 8px', borderRadius: '4px', marginBottom: '10px', border: '2px solid #1e293b' }}>
                {selectedHito.fecha}
              </div>
              <h3 style={{ fontSize: '13px', fontWeight: '900', color: '#1e293b', margin: '0 0 10px 0' }}>
                {selectedHito.subtitulo}
              </h3>
              <p style={{ fontSize: '11px', color: '#334155', lineHeight: '1.6', margin: '0 0 16px 0', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                {selectedHito.descripcion}
              </p>
              
              <div style={{ borderTop: '2px dashed #cbd5e1', paddingTop: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: '#1e293b', display: 'block', marginBottom: '4px' }}>
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
                  padding: '10px',
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