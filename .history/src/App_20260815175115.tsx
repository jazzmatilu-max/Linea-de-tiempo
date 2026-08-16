import React, { useState } from 'react';
import { BookOpen, ChevronRight, X } from 'lucide-react';

interface Hito {
  id: number;
  fecha: string;
  pos: 'izquierda' | 'derecha';
  colorBg: string;
  colorBorder: string;
  badgeBg: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  animal: string;
  fuente: string;
}

const hitos: Hito[] = [
  {
    id: 1,
    fecha: "S III A.C. – VI D.C.",
    pos: "derecha",
    colorBg: "bg-[#fff9f5]",
    colorBorder: "border-[#e2b08a]",
    badgeBg: "bg-[#e06d33]",
    titulo: "DERECHO ROMANO",
    subtitulo: "Lex Aquilia y res communi",
    descripcion: "Los recursos naturales como el aire y agua eran de uso común, por lo que la Lex Aquilia estipuló la responsabilidad civil, mediante la reparación de daños injustos por dolo o culpa, para proteger la propiedad privada.",
    animal: "🐦 Pájaro rojo",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 2,
    fecha: "1825–1829",
    pos: "izquierda",
    colorBg: "bg-[#fbf4ff]",
    colorBorder: "border-[#c490e4]",
    badgeBg: "bg-[#9b4dca]",
    titulo: "CONSERVACIÓN SIMÓN BOLÍVAR",
    subtitulo: "Medidas de protección para la fauna, el agua y los bosques",
    descripcion: "Primer legislativo de la era republicana por regular la salubridad ambiental y conservación de los recursos.",
    animal: "🌲 Bosque",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 3,
    fecha: "1918",
    pos: "izquierda",
    colorBg: "bg-[#fff4f4]",
    colorBorder: "border-[#e49090]",
    badgeBg: "bg-[#d94141]",
    titulo: "CREACIÓN DE INDERENA",
    subtitulo: "Nacimiento del instituto nacional de recursos naturales",
    descripcion: "El estado asume la gestión ambiental nacional.",
    animal: "🐦 Colibrí",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 4,
    fecha: "1968",
    pos: "derecha",
    colorBg: "bg-[#f4faff]",
    colorBorder: "border-[#90c4e4]",
    badgeBg: "bg-[#3390e0]",
    titulo: "TEORÍA DEL RIESGO CREADO",
    subtitulo: "Responsabilidad por riesgo en el tribunal de cartagena",
    descripcion: "Permite asumir las responsabilidades por actividades peligrosas sin necesidad de prueba de culpa.",
    animal: "🌸 Flor blanca",
    fuente: "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual."
  },
  {
    id: 5,
    fecha: "1973",
    pos: "izquierda",
    colorBg: "bg-[#f5fff4]",
    colorBorder: "border-[#90e4a0]",
    badgeBg: "bg-[#2da84a]",
    titulo: "LEY 2811 DE 1974",
    subtitulo: "Creación del código nacional de recursos naturales",
    descripcion: "Establece que cualquier acción que conlleve a la contaminación es sancionable, también uso de la responsabilidad administrativa y civil sobre los recursos.",
    animal: "🐻 Oso",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 6,
    fecha: "1974",
    pos: "derecha",
    colorBg: "bg-[#fffef4]",
    colorBorder: "border-[#e4d690]",
    badgeBg: "bg-[#d4be2c]",
    titulo: "LEY 23 DE 1973",
    subtitulo: "Nacimiento del derecho ambiental colombiano",
    descripcion: "Define al medio ambiente como patrimonio común y otorgó facultades legislativas sobre contaminación y recursos naturales.",
    animal: "🐿️ Ardilla",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 7,
    fecha: "1991",
    pos: "izquierda",
    colorBg: "bg-[#fff4fb]",
    colorBorder: "border-[#e490d6]",
    badgeBg: "bg-[#d941be]",
    titulo: "LEY 99 DE 1993",
    subtitulo: "Creación del ministerio de ambiente y el Sistema nacional ambiental",
    descripcion: "Fortalece la gestión técnica y sanciones mediante contribuciones, tasas, multas e impacto ambiental.",
    animal: "🐞 Mariquita",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana."
  },
  {
    id: 8,
    fecha: "1993",
    pos: "derecha",
    colorBg: "bg-[#fff6f4]",
    colorBorder: "border-[#e4a890]",
    badgeBg: "bg-[#d96241]",
    titulo: "CONSTITUCIÓN ECOLÓGICA",
    subtitulo: "Ambiente sano como derecho colectivo y creación de acciones populares",
    descripcion: "Incluye 49 artículos sobre el medio ambiente en pro de la protección ambiental y la prevención, restauración y resarcimiento de daños ambientales.",
    animal: "🐝 Abeja",
    fuente: "Colombia Asamblea Nacional Constituyente (1991)."
  },
  {
    id: 9,
    fecha: "2009–2026",
    pos: "derecha",
    colorBg: "bg-[#fff4f4]",
    colorBorder: "border-[#e49090]",
    badgeBg: "bg-[#bf3030]",
    titulo: "LEY 1333 DE 2009",
    subtitulo: "Régimen sancionatorio y medidas preventivas",
    descripcion: "Procedimientos para sancionar infracciones de hasta 5000 salarios mínimos, cierres y demoliciones, además de restaurar el daño causado.",
    animal: "🦗 Saltamontes",
    fuente: "Cancelado Ávila, D. F., et al. (s.f.). Análisis jurídico de protección a las víctimas."
  }
];

export default function App() {
  const [selectedHito, setSelectedHito] = useState<Hito | null>(null);
  const [showFuentes, setShowFuentes] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-slate-900 font-sans p-6 md:p-12">
      {/* Título Principal */}
      <header className="max-w-4xl mx-auto text-center my-6 bg-white border-2 border-slate-900 p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
          Evolución de la Responsabilidad Civil Ambiental en Colombia
        </h1>
        <p className="text-xs md:text-sm text-slate-600 mt-2 font-medium">
          Haz clic en cualquier tarjeta de hito para ver los detalles completos y las referencias bibliográficas.
        </p>
      </header>

      {/* Contenedor Principal de la Línea de Tiempo */}
      <main className="max-w-4xl mx-auto relative my-16">
        {/* Línea Central Vertical */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-2 bg-slate-900 z-0" />

        <div className="space-y-12 relative z-10">
          {hitos.map((hito) => {
            const isLeft = hito.pos === 'izquierda';
            return (
              <div key={hito.id} className="grid grid-cols-12 items-center gap-4 relative">
                
                {/* Columna Izquierda (45%) */}
                <div className={`col-span-5 ${isLeft ? 'order-1 text-right' : 'order-3 text-left'}`}>
                  {isLeft ? (
                    <div 
                      onClick={() => setSelectedHito(hito)}
                      className={`${hito.colorBg} border-2 ${hito.colorBorder} p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] cursor-pointer hover:-translate-y-1 transition-all text-left inline-block w-full`}
                    >
                      <div className="flex items-center justify-between border-b border-slate-300 pb-2 mb-2">
                        <span className="font-black text-xs uppercase text-slate-900">{hito.titulo}</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full border border-slate-600 bg-slate-200" />
                          <div className="w-2 h-2 rounded-full border border-slate-600 bg-slate-200" />
                          <div className="w-2 h-2 rounded-full border border-slate-600 bg-slate-200" />
                        </div>
                      </div>
                      <div className="text-[11px] font-bold text-slate-800 mb-1">Hito: {hito.subtitulo}</div>
                      <p className="text-[11px] text-slate-700 line-clamp-2">{hito.descripcion}</p>
                      <div className="mt-2 text-[10px] font-bold text-indigo-600 flex items-center gap-1">
                        Ver detalles <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white border border-slate-300 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm inline-flex items-center gap-1.5 float-right">
                      <span>{hito.animal}</span>
                    </div>
                  )}
                </div>

                {/* Columna Central - Nodo de Fecha (2 cols) */}
                <div className="col-span-2 flex justify-center order-2">
                  <div className={`${hito.badgeBg} text-white px-3 py-1.5 rounded-lg border-2 border-slate-900 font-black text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center whitespace-nowrap`}>
                    {hito.fecha}
                  </div>
                </div>

                {/* Columna Derecha (45%) */}
                <div className={`col-span-5 ${isLeft ? 'order-3 text-left' : 'order-1 text-right'}`}>
                  {!isLeft ? (
                    <div 
                      onClick={() => setSelectedHito(hito)}
                      className={`${hito.colorBg} border-2 ${hito.colorBorder} p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] cursor-pointer hover:-translate-y-1 transition-all text-left inline-block w-full`}
                    >
                      <div className="flex items-center justify-between border-b border-slate-300 pb-2 mb-2">
                        <span className="font-black text-xs uppercase text-slate-900">{hito.titulo}</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full border border-slate-600 bg-slate-200" />
                          <div className="w-2 h-2 rounded-full border border-slate-600 bg-slate-200" />
                          <div className="w-2 h-2 rounded-full border border-slate-600 bg-slate-200" />
                        </div>
                      </div>
                      <div className="text-[11px] font-bold text-slate-800 mb-1">Hito: {hito.subtitulo}</div>
                      <p className="text-[11px] text-slate-700 line-clamp-2">{hito.descripcion}</p>
                      <div className="mt-2 text-[10px] font-bold text-indigo-600 flex items-center gap-1">
                        Ver detalles <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white border border-slate-300 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm inline-flex items-center gap-1.5 float-left">
                      <span>{hito.animal}</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Final */}
        <div className="text-center mt-16 relative z-10">
          <div className="inline-block bg-slate-900 text-white border-2 border-slate-900 px-6 py-3 rounded-2xl shadow-[5px_5px_0px_0px_rgba(100,100,100,0.8)] font-black uppercase text-xs tracking-widest">
            Naturaleza como Sujeto de Derechos
          </div>
        </div>
      </main>

      {/* Fuentes */}
      <footer className="max-w-3xl mx-auto mt-20 pt-6 border-t-2 border-slate-300 text-center">
        <button 
          onClick={() => setShowFuentes(!showFuentes)}
          className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-900 px-6 py-2.5 rounded-xl font-bold text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <BookOpen className="w-4 h-4 inline-block mr-2 text-emerald-600" />
          {showFuentes ? "Ocultar Fuentes Académicas de Uniagraria" : "Ver Fuentes Académicas de Uniagraria"}
        </button>

        {showFuentes && (
          <div className="mt-6 text-left bg-white border-2 border-slate-900 p-6 rounded-2xl text-xs text-slate-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-2">
            <h4 className="font-black text-sm uppercase mb-3 text-slate-900">Referencias Bibliográficas Oficiales:</h4>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
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
      </footer>

      {/* Modal */}
      {selectedHito && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white border-3 border-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <button 
              onClick={() => setSelectedHito(null)}
              className="absolute top-4 right-4 bg-slate-200 hover:bg-slate-300 text-slate-900 border border-slate-900 p-2 rounded-full transition-colors font-bold"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="inline-block bg-slate-900 text-white text-xs font-black px-3 py-1 rounded-md mb-3">
              {selectedHito.fecha}
            </div>
            <h2 className="text-xl font-black text-slate-900 uppercase">{selectedHito.titulo}</h2>
            <h4 className="text-xs font-bold text-indigo-700 mt-1">{selectedHito.subtitulo}</h4>
            <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-300 text-slate-800 text-xs leading-relaxed">
              <p>{selectedHito.descripcion}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200">
              <span className="text-[11px] font-black text-slate-700 block mb-1">Referencia Bibliográfica:</span>
              <p className="text-[11px] text-slate-600 italic bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                {selectedHito.fuente}
              </p>
            </div>
            <button 
              onClick={() => setSelectedHito(null)}
              className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl transition-all text-xs tracking-wide shadow-[3px_3px_0px_0px_rgba(100,100,100,0.8)]"
            >
              Cerrar ventana
            </button>
          </div>
        </div>
      )}
    </div>
  );
}