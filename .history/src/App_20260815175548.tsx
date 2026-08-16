import React, { useState } from 'react';

const timelineData = [
  {
    year: "S III A.C. – VI D.C.",
    title: "DERECHO ROMANO",
    subtitle: "Lex Aquilia y res communi",
    description: "Los recursos naturales como el aire y agua eran de uso común. La Lex Aquilia estipuló la responsabilidad civil mediante la reparación de daños injustos.",
    icon: "🏛️"
  },
  {
    year: "1825–1829",
    title: "CONSERVACIÓN BOLIVARIANA",
    subtitle: "Protección de fauna, agua y bosques",
    description: "Primeros decretos republicanos enfocados en la salubridad pública y el uso sostenible de los recursos.",
    icon: "📜"
  },
  {
    year: "1918",
    title: "GESTIÓN ESTATAL (INDERENA)",
    subtitle: "Nacimiento de la administración ambiental",
    description: "El Estado asume la responsabilidad técnica de la gestión de recursos naturales a nivel nacional.",
    icon: "🌲"
  },
  {
    year: "1968",
    title: "TEORÍA DEL RIESGO",
    subtitle: "Responsabilidad civil por riesgo",
    description: "Desarrollo de criterios de responsabilidad sin necesidad de probar culpa en actividades peligrosas.",
    icon: "⚡"
  },
  {
    year: "1973–1974",
    title: "CÓDIGO NACIONAL",
    subtitle: "Ley 23 y Ley 2811",
    description: "El ambiente se declara patrimonio común. Se establecen las bases de la responsabilidad civil y administrativa.",
    icon: "💧"
  },
  {
    year: "1991–1993",
    title: "CONSTITUCIÓN ECOLÓGICA",
    subtitle: "SINA y Acciones Populares",
    description: "Derecho a un ambiente sano como derecho colectivo. Se crea el Ministerio de Ambiente y el SINA.",
    icon: "⚖️"
  },
  {
    year: "2009–2026",
    title: "LEY 1333 DE 2009",
    subtitle: "Régimen sancionatorio ambiental",
    description: "Procedimientos sancionatorios con multas, cierres y obligación de restauración del daño causado.",
    icon: "🛡️"
  }
];

export default function TimelineApp() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f172a',
      color: '#f1f5f9',
      padding: '40px 20px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2rem', color: '#38bdf8' }}>
        Evolución Ambiental en Colombia
      </h1>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {timelineData.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            marginBottom: '30px',
            position: 'relative'
          }}>
            {/* Línea vertical */}
            <div style={{
              width: '2px',
              background: '#38bdf8',
              marginRight: '20px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '-6px',
                width: '14px',
                height: '14px',
                background: '#38bdf8',
                borderRadius: '50%'
              }} />
            </div>

            {/* Contenido */}
            <div style={{
              background: '#1e293b',
              padding: '20px',
              borderRadius: '12px',
              flex: 1,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 'bold' }}>{item.year}</span>
              <h3 style={{ margin: '5px 0', color: '#e2e8f0' }}>{item.icon} {item.title}</h3>
              <p style={{ margin: '5px 0', fontSize: '0.9rem', color: '#cbd5e1' }}>{item.subtitle}</p>
              <p style={{ margin: '10px 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px', background: '#0f172a' }}>
        <p style={{ color: '#38bdf8', fontWeight: 'bold' }}>🌿 Naturaleza como Sujeto de Derechos</p>
      </div>
    </div>
  );
}