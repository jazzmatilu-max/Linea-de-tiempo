import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BookOpen, Calendar, ChevronRight, X, Leaf } from 'lucide-react';

interface Hito {
  id: number;
  fecha: string;
  color: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  fuente: string;
}

const hitos: Hito[] = [
  {
    id: 1,
    fecha: "S III A.C. – VI D.C.",
    color: "bg-orange-500",
    titulo: "DERECHO ROMANO",
    subtitulo: "Lex Aquilia y res communi",
    descripcion: "Los recursos naturales como el aire y agua eran de uso común, por lo que la Lex Aquilia estipuló la responsabilidad civil, mediante la reparación de daños injustos por dolo o culpa, para proteger la propiedad privada.",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 2,
    fecha: "1825–1829",
    color: "bg-purple-500",
    titulo: "CONSERVACIÓN SIMON BOLIVAR",
    subtitulo: "Medidas de protección para la fauna, el agua y los bosques",
    descripcion: "Primer legislativo de la era republicana por regular la salubridad ambiental y conservación de los recursos.",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 3,
    fecha: "1918",
    color: "bg-blue-500",
    titulo: "CREACIÓN DE INDERENA",
    subtitulo: "Nacimiento del instituto nacional de recursos naturales",
    descripcion: "El estado asume la gestión ambiental nacional.",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 4,
    fecha: "1968",
    color: "bg-red-500",
    titulo: "TEORIA DEL RIESGO CREADO",
    subtitulo: "Responsabilidad por riesgo en el tribunal de cartagena",
    descripcion: "Permite asumir las responsabilidades por actividades peligrosas sin necesidad de prueba de culpa.",
    fuente: "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual."
  },
  {
    id: 5,
    fecha: "1973",
    color: "bg-yellow-500",
    titulo: "LEY 2811 DE 1974",
    subtitulo: "Creación del código nacional de recursos naturales",
    descripcion: "Establece que cualquier acción que conlleve a la contaminación es sancionable, también uso de la responsabilidad administrativa y civil sobre los recursos.",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 6,
    fecha: "1974",
    color: "bg-green-600",
    titulo: "LEY 23 DE 1973",
    subtitulo: "Nacimiento del derecho ambiental Colombiano",
    descripcion: "Define al medio ambiente como patrimonio común y otorgó facultades legislativas sobre contaminación y recursos naturales.",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 7,
    fecha: "1991",
    color: "bg-pink-500",
    titulo: "LEY 99 DE 1993",
    subtitulo: "Creación del ministerio de ambiente y el Sistema nacional ambiental",
    descripcion: "Fortalece la gestión técnica y sanciones mediante contribuciones, tasas, multas e impacto ambiental.",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana."
  },
  {
    id: 8,
    fecha: "1993",
    color: "bg-amber-700",
    titulo: "CONSTITUCION ECOLÓGICA",
    subtitulo: "Ambiente sano como derecho colectivo y creación de acciones populares",
    descripcion: "Incluye 49 artículos sobre el medio ambiente en pro de la protección ambiental y la prevención, restauración y resarcimiento de daños ambientales.",
    fuente: "Colombia Asamblea Nacional Constituyente (1991)."
  },
  {
    id: 9,
    fecha: "2009–2026",
    color: "bg-rose-700",
    titulo: "NATURALEZA COMO SUJETO DE DERECHOS",
    subtitulo: "Régimen sancionatorio y medidas preventivas (Ley 1333 de 2009)",
    descripcion: "Procedimientos para sancionar infracciones de hasta 5000 salarios mínimos, cierres y demoliciones, además de restaurar el daño causado.",
    fuente: "Cancelado Ávila, D. F., et al. (s.f.). Análisis jurídico de protección a las víctimas."
  }
];

export default function App() {
  const [selectedHito, setSelectedHito] = useState<Hito | null>(null);
  const [showFuentes, setShowFuentes] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center my-8">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-emerald-500/20">
          <Leaf className="w-4 h-4" /> Línea de Tiempo Interactiva
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
          Evolución de la Responsabilidad Civil Ambiental en Colombia
        </h1>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Haz clic en cualquier hito histórico para ver el detalle técnico y las referencias bibliográficas.
        </p>
      </header>

      {/* Timeline Container */}
      <main className="max-w-3xl mx-auto relative my-12">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 via-green-500 to-rose-700 rounded-full" />

        <div className="space-y-12">
          {hitos.map((hito, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={hito.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-center ${isEven ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row'} justify-between w-full`}
              >
                <div className="w-[42%] md:w-[45%]">
                  <div 
                    onClick={() => setSelectedHito(hito)}
                    className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 p-5 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 group-hover:bg-teal-400 transition-colors" />
                    <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">{hito.fecha}</span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">{hito.titulo}</h3>
                    <p className="text-xs font-semibold text-slate-300 mt-0.5">{hito.subtitulo}</p>
                    <p className="text-slate-400 text-xs mt-2 line-clamp-2">{hito.descripcion}</p>
                    <div className="mt-3 flex items-center text-xs text-emerald-400 font-medium gap-1 group-hover:translate-x-1 transition-transform">
                      Ver detalles <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-4 border-emerald-500 shadow-lg">
                  <div className={`w-2 h-2 rounded-full ${hito.color}`} />
                </div>

                <div className="w-[42%] md:w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-16 border-t border-slate-800 pt-6 text-center">
        <button 
          onClick={() => setShowFuentes(!showFuentes)}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 px-5 py-2.5 rounded-xl border border-slate-700 font-medium text-sm transition-all"
        >
          <BookOpen className="w-4 h-4 text-emerald-400" />
          {showFuentes ? "Ocultar Fuentes Académicas de Uniagraria" : "Ver Fuentes Académicas de Uniagraria"}
        </button>

        {showFuentes && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-6 text-left bg-slate-900/80 border border-slate-800 p-6 rounded-2xl text-xs md:text-sm text-slate-300 space-y-3"
          >
            <h4 className="font-bold text-white text-base mb-2">Referencias Bibliográficas:</h4>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Acuerdo No. 1011. (2022, 6 de julio). Política ambiental de la Fundación Universitaria Agraria de Colombia - UNIAGRARIA.</li>
              <li>Buitrago Dangond, E. A. (2018). El principio de precaución en la jurisprudencia constitucional. <i>Derectum</i>, 3(2), 107-126.</li>
              <li>Cancelado Ávila, D. F., Solís Yepes, J. L., & Díaz Castillo, W. J. (s.f.). Capítulo IV: Parangón e implementación de instrumentos económicos de política ambiental. Escuela Superior de Guerra.</li>
              <li>Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares.</li>
              <li>Flórez Hernández, C., Quintana, B. V., & Molina Romero, M. (2024). Hitos de la normatividad colombiana en materia de protección ambiental. <i>Revista Jurídica Mario Alario D’Filippo</i>, 16(33), 184-201.</li>
              <li>Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano. <i>Derecho y Sociedad</i>, 1(1), 1-10.</li>
              <li>Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia a partir de la Constitución de 1991. <i>Jurídicas</i>, 4(2), 163-185.</li>
              <li>Velásquez Posada, O. (2013). Responsabilidad civil extracontractual (2da ed.). Temis; Universidad de La Sabana.</li>
            </ul>
          </motion.div>
        )}
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedHito && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedHito(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full mb-3 border border-emerald-500/20">
                {selectedHito.fecha}
              </span>
              <h2 className="text-xl font-extrabold text-white">{selectedHito.titulo}</h2>
              <h4 className="text-sm font-semibold text-emerald-400 mt-1">{selectedHito.subtitulo}</h4>
              
              <div className="mt-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-slate-300 text-sm leading-relaxed">
                <p>{selectedHito.descripcion}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-400 block mb-1">Referencia Académica de Apoyo:</span>
                <p className="text-xs text-slate-300 italic bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/50">
                  {selectedHito.fuente}
                </p>
              </div>

              <button 
                onClick={() => setSelectedHito(null)}
                className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 rounded-xl transition-colors text-sm shadow-lg shadow-emerald-600/20"
              >
                Cerrar ventana
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}