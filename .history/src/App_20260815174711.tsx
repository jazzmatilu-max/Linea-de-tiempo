import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, X, Leaf, Sparkles, Calendar, ExternalLink } from 'lucide-react';

interface Hito {
  id: number;
  fecha: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imagen: string;
  fuente: string;
}

const hitos: Hito[] = [
  {
    id: 1,
    fecha: "S III A.C. – VI D.C.",
    titulo: "DERECHO ROMANO",
    subtitulo: "Lex Aquilia y res communi",
    descripcion: "Los recursos naturales como el aire y agua eran de uso común, por lo que la Lex Aquilia estipuló la responsabilidad civil, mediante la reparación de daños injustos por dolo o culpa, para proteger la propiedad privada.",
    imagen: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 2,
    fecha: "1825–1829",
    titulo: "CONSERVACIÓN SIMÓN BOLÍVAR",
    subtitulo: "Medidas de protección para la fauna, el agua y los bosques",
    descripcion: "Primer legislativo de la era republicana por regular la salubridad ambiental y conservación de los recursos naturales en el territorio.",
    imagen: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 3,
    fecha: "1918",
    titulo: "CREACIÓN DE INDERENA",
    subtitulo: "Nacimiento del instituto nacional de recursos naturales",
    descripcion: "El Estado asume por primera vez la gestión ambiental nacional centralizada para el control de los recursos.",
    imagen: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano."
  },
  {
    id: 4,
    fecha: "1968",
    titulo: "TEORÍA DEL RIESGO CREADO",
    subtitulo: "Responsabilidad por riesgo en el Tribunal de Cartagena",
    descripcion: "Se permite asumir responsabilidades por actividades peligrosas sin necesidad de prueba de culpa directa, sentando precedentes de protección.",
    imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    fuente: "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual."
  },
  {
    id: 5,
    fecha: "1973",
    titulo: "LEY 2811 DE 1974",
    subtitulo: "Creación del Código Nacional de Recursos Naturales",
    descripcion: "Establece que cualquier acción que conlleve a la contaminación es sancionable, implementando la responsabilidad administrativa y civil.",
    imagen: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 6,
    fecha: "1974",
    titulo: "LEY 23 DE 1973",
    subtitulo: "Nacimiento del derecho ambiental colombiano",
    descripcion: "Define al medio ambiente como patrimonio común y otorgó facultades legislativas especiales sobre contaminación y recursos naturales.",
    imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    fuente: "Flórez Hernández, C., et al. (2024). Hitos de la normatividad colombiana."
  },
  {
    id: 7,
    fecha: "1991",
    titulo: "LEY 99 DE 1993",
    subtitulo: "Creación del Ministerio de Ambiente y el SINA",
    descripcion: "Fortalece la gestión técnica y las sanciones mediante contribuciones, tasas retributivas, multas e indemnizaciones por impacto ambiental.",
    imagen: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana."
  },
  {
    id: 8,
    fecha: "1993",
    titulo: "CONSTITUCIÓN ECOLÓGICA",
    subtitulo: "Ambiente sano como derecho colectivo y acciones populares",
    descripcion: "Incluye 49 artículos enfocados en la protección ambiental, prevención, restauración obligatoria y resarcimiento de daños ecológicos.",
    imagen: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    fuente: "Colombia Asamblea Nacional Constituyente (1991)."
  },
  {
    id: 9,
    fecha: "2009–2026",
    titulo: "NATURALEZA COMO SUJETO DE DERECHOS",
    subtitulo: "Régimen sancionatorio (Ley 1333 de 2009)",
    descripcion: "Procedimientos drásticos para sancionar infracciones ambientales de hasta 5,000 salarios mínimos, cierres, demoliciones y restauración obligatoria del daño.",
    imagen: "https://images.unsplash.com/photo-1511497584788-876761192d12?auto=format&fit=crop&w=800&q=80",
    fuente: "Cancelado Ávila, D. F., et al. (s.f.). Análisis jurídico de protección a las víctimas."
  }
];

export default function App() {
  const [selectedHito, setSelectedHito] = useState<Hito | null>(null);
  const [showFuentes, setShowFuentes] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 font-sans selection:bg-purple-500 selection:text-white pb-20">
      {/* Efectos de fondo estilo Neón */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Principal */}
      <header className="relative max-w-5xl mx-auto pt-16 pb-10 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-300 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" /> Línea de Tiempo Interactiva Profesional
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
          Evolución de la Responsabilidad Civil Ambiental en Colombia
        </h1>
        <p className="text-slate-400 mt-4 text-base md:text-lg max-w-2xl mx-auto font-light">
          Explora los hitos históricos, normativos y constitucionales. Haz clic en cualquier tarjeta para abrir su modal interactivo con detalles y fuentes académicas.
        </p>
      </header>

      {/* Contenedor de la Línea de Tiempo */}
      <main className="relative max-w-4xl mx-auto px-4 mt-8">
        {/* Línea central vertical con brillo neón */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-1.5 bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

        <div className="space-y-12">
          {hitos.map((hito, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={hito.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} justify-between w-full group`}
              >
                {/* Tarjeta de Contenido */}
                <div className="w-full pl-12 md:pl-0 md:w-[45%]">
                  <div 
                    onClick={() => setSelectedHito(hito)}
                    className="bg-slate-900/80 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/60 p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] relative overflow-hidden"
                  >
                    {/* Barra lateral neón */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-blue-500" />
                    
                    {/* Imagen miniatura temática */}
                    <div className="h-36 w-full rounded-2xl overflow-hidden mb-4 relative">
                      <img src={hito.imagen} alt={hito.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-3 px-3 py-1 bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-extrabold rounded-full backdrop-blur-md">
                        {hito.fecha}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-wide">{hito.titulo}</h3>
                    <p className="text-xs font-semibold text-emerald-400 mt-1">{hito.subtitulo}</p>
                    <p className="text-slate-300 text-xs mt-3 line-clamp-2 leading-relaxed">{hito.descripcion}</p>
                    
                    <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-800/80">
                      <span className="text-xs text-purple-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Ver detalles completos <ChevronRight className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Hito #{hito.id}</span>
                    </div>
                  </div>
                </div>

                {/* Nodo central brillante */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-ping absolute" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                {/* Espacio balanceador para desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Sección de Fuentes Académicas */}
      <footer className="max-w-3xl mx-auto mt-24 px-4 text-center">
        <button 
          onClick={() => setShowFuentes(!showFuentes)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all transform hover:scale-105"
        >
          <BookOpen className="w-5 h-5 text-emerald-300" />
          {showFuentes ? "Ocultar Fuentes Académicas de Uniagraria" : "Ver Fuentes Académicas de Uniagraria"}
        </button>

        {showFuentes && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-left bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 p-8 rounded-3xl text-sm text-slate-300 shadow-2xl space-y-4"
          >
            <h4 className="font-extrabold text-white text-lg mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-emerald-400" /> Referencias Bibliográficas Oficiales:
            </h4>
            <ul className="list-disc pl-5 space-y-3 text-slate-300">
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

      {/* Modal Interactivo Grande */}
      <AnimatePresence>
        {selectedHito && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="bg-slate-900 border border-purple-500/40 rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)] relative overflow-hidden"
            >
              {/* Botón cerrar */}
              <button 
                onClick={() => setSelectedHito(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800 hover:bg-purple-600 p-2.5 rounded-full transition-colors z-10 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Imagen grande en el modal */}
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative border border-slate-700">
                <img src={selectedHito.imagen} alt={selectedHito.titulo} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <span className="absolute bottom-3 left-4 px-3.5 py-1.5 bg-purple-600/90 text-white text-xs font-bold rounded-full backdrop-blur-md shadow-lg">
                  {selectedHito.fecha}
                </span>
              </div>

              <h2 className="text-2xl font-black text-white tracking-wide">{selectedHito.titulo}</h2>
              <h4 className="text-sm font-bold text-emerald-400 mt-1">{selectedHito.subtitulo}</h4>
              
              <div className="mt-5 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-slate-200 text-sm leading-relaxed shadow-inner">
                <p>{selectedHito.descripcion}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800">
                <span className="text-xs font-bold text-purple-400 block mb-1.5">Referencia Académica Verificada:</span>
                <p className="text-xs text-slate-300 italic bg-purple-950/30 p-3 rounded-xl border border-purple-500/20">
                  {selectedHito.fuente}
                </p>
              </div>

              <button 
                onClick={() => setSelectedHito(null)}
                className="w-100% mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3.5 rounded-2xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] text-sm tracking-wide"
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