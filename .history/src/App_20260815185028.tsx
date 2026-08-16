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
    subtitulo: "Hito: Lex Aquilia y res communis",
    descripcion: "Desde el derecho romano se gestaron los pilares doctrinales de la responsabilidad. La categoría de 'res communis' catalogaba recursos esenciales como el agua, el aire y el mar como bienes comunes de uso público. Paralelamente, la Lex Aquilia introdujo la obligación de reparar económicamente el daño injusto causado por culpa o dolo, conceptos históricos que siglos más tarde fundamentarían la protección del patrimonio natural y colectivo frente a los perjuicios ambientales, estructurando las bases jurídicas del resarcimiento patrimonial y la salvaguarda de los elementos naturales de uso colectivo.",
    icono: "🏛️",
    color: "bg-orange-100",
    badgeBg: "bg-orange-600",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano. Derecho y Sociedad, 1(1), 1-10."
  },
  {
    id: 2,
    fecha: "1825–1829",
    pos: "izquierda",
    titulo: "ERA REPUBLICANA",
    subtitulo: "Hito: Decretos bolivarianos de conservación forestal y de aguas",
    descripcion: "En los albores de la vida republicana, Simón Bolívar impulsó normativas y decretos pioneros en América Latina orientados a frenar la explotación desmedida de los bosques nacionales, regular la distribución equitativa de las aguas y proteger la fauna silvestre. Constituyen el primer antecedente formal de intervención estatal y gestión pública sobre los recursos naturales como patrimonio de la nación, marcando el inicio de la soberanía jurídica sobre la riqueza ecológica del territorio.",
    icono: "📜",
    color: "bg-purple-100",
    badgeBg: "bg-purple-600",
    fuente: "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano. Derecho y Sociedad, 1(1), 1-10."
  },
  {
    id: 3,
    fecha: "1968",
    pos: "derecha",
    titulo: "TEORÍA DEL RIESGO",
    subtitulo: "Hito: Evolución jurisprudencial de la responsabilidad extracontractual",
    descripcion: "La adopción de la teoría del riesgo creado supuso una evolución decisiva en la jurisprudencia contenciosa y civil, permitiendo imputar responsabilidad e indemnizar a las víctimas por el ejercicio de actividades peligrosas sin necesidad de demostrar la culpa directa del agente. Este criterio jurídico facilitó el camino para el resarcimiento frente a daños complejos al entorno y a la colectividad, adaptando los mecanismos tradicionales de reparación a las exigencias técnicas e industriales modernas.",
    icono: "⚖️",
    color: "bg-sky-100",
    badgeBg: "bg-red-600",
    fuente: "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual (2da ed.). Temis; Universidad de La Sabana."
  },
  {
    id: 4,
    fecha: "1973–1974",
    pos: "izquierda",
    titulo: "CODIFICACIÓN AMBIENTAL",
    subtitulo: "Hito: Ley 23 de 1973 y Código Nacional de Recursos Naturales",
    descripcion: "La Ley 23 de 1973 marcó el nacimiento formal del derecho ambiental en Colombia al declarar los recursos naturales como patrimonio común de la sociedad. Posteriormente, el Código Nacional de Recursos Naturales (Ley 2811 de 1974) sistematizó la gestión ecológica e impuso la responsabilidad ineludible de prevenir y reparar el daño ambiental, dotando al Estado de las primeras herramientas normativas de control, planificación y estructuración integral de los ecosistemas nacionales.",
    icono: "📘",
    color: "bg-emerald-100",
    badgeBg: "bg-yellow-600",
    fuente: "Flórez Hernández, C., Quintana, B. V., & Molina Romero, M. (2024). Hitos de la normatividad colombiana en materia de protección ambiental y su desarrollo jurisprudencial. Revista Jurídica Mario Alario D’Filippo, 16(33), 184-201."
  },
  {
    id: 5,
    fecha: "1991",
    pos: "derecha",
    titulo: "CONSTITUCIÓN ECOLÓGICA",
    subtitulo: "Hito: Derechos colectivos, medio ambiente y acciones populares",
    descripcion: "La Asamblea Nacional Constituyente consagró la denominada 'Constitución Ecológica' al integrar más de 49 disposiciones sobre medio ambiente. Elevó el ambiente sano a rango de derecho colectivo fundamental e instituyó mecanismos procesales constitucionales de gran calado como la Acción Popular (respaldada por la Ley 472), permitiendo exigir judicialmente la prevención y restauración de los daños al ecosistema, garantizando así la participación activa de los ciudadanos en la defensa del patrimonio ecológico.",
    icono: "🇨🇴",
    color: "bg-pink-100",
    badgeBg: "bg-amber-900",
    fuente: "Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares (Proyecto de Acto Constituyente No. 62)."
  },
  {
    id: 6,
    fecha: "1993",
    pos: "izquierda",
    titulo: "REESTRUCTURACIÓN SINA",
    subtitulo: "Hito: Ley 99 de 1993, Ministerio de Ambiente e instrumentos económicos",
    descripcion: "La Ley 99 de 1993 estructuró la institucionalidad moderna creando el Ministerio del Ambiente y el Sistema Nacional Ambiental (SINA). Descentralizó el control a través de las Corporaciones Autónomas Regionales e incorporó instrumentos económicos de gestión ambiental (tasas retributivas, compensatorias y multas) para desincentivar la contaminación y alinear la economía con el desarrollo sostenible, optimizando la capacidad de respuesta estatal frente a las presiones industriales.",
    icono: "🏛️",
    color: "bg-amber-100",
    badgeBg: "bg-pink-600",
    fuente: "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia a partir de la Constitución de 1991. Jurídicas, 4(2), 163-185."
  },
  {
    id: 7,
    fecha: "2009–Actual",
    pos: "derecha",
    titulo: "RÉGIMEN SANCIONATORIO",
    subtitulo: "Hito: Ley 1333 de 2009, precaución y nuevas tendencias de aseguramiento",
    descripcion: "La Ley 1333 de 2009 consolidó el régimen sancionatorio ambiental, dotando a las autoridades de facultades para imponer medidas preventivas y multas de hasta 5,000 salarios mínimos con enfoque estricto en la restauración. Hoy en día, este marco se complementa con la aplicación jurisprudencial del principio de precaución (Buitrago Dangond, 2018) y los retos del aseguramiento de la responsabilidad civil frente al cambio climático, consolidando un esquema punitivo y preventivo de alta exigencia.",
    icono: "⚠️",
    color: "bg-rose-100",
    badgeBg: "bg-rose-600",
    fuente: "Cancelado Ávila, D. F., Solís Yepes, J. L., & Díaz Castillo, W. J. (s.f.). Capítulo IV: Parangón e implementación de los instrumentos económicos de política ambiental y sanciones por daños al medio ambiente en epicentros de conflicto armado en Colombia. En Análisis jurídico de protección a las víctimas y del medio ambiente (pp. 111-131). Escuela Superior de Guerra."
  }
];

const referenciasLista = [
  "Acuerdo No. 1011. (2022, 6 de julio). Por medio del cual se adopta la política ambiental de la Fundación Universitaria Agraria de Colombia - UNIAGRARIA. Consejo Superior, Fundación Universitaria Agraria de Colombia.",
  "Buitrago Dangond, E. A. (2018). El principio de precaución en la jurisprudencia constitucional. Derectum, 3(2), 107-126.",
  "Cancelado Ávila, D. F., Solís Yepes, J. L., & Díaz Castillo, W. J. (s.f.). Capítulo IV: Parangón e implementación de los instrumentos económicos de política ambiental y sanciones por daños al medio ambiente en epicentros de conflicto armado en Colombia. En Análisis jurídico de protección a las víctimas y del medio ambiente (pp. 111-131). Escuela Superior de Guerra.",
  "Colombia. Asamblea Nacional Constituyente. (1991). Derechos colectivos, medio ambiente y acciones populares (Proyecto de Acto Constituyente No. 62).",
  "Facultad de Ciencias Jurídicas U. Javeriana. (s.f.). Evento | Las Nuevas Tendencias de la Responsabilidad Civil y su Aseguramiento [Archivo de video]. YouTube. https://www.youtube.com/watch?v=A8f9mG0X_Z0",
  "Flórez Hernández, C., Quintana, B. V., & Molina Romero, M. (2024). Hitos de la normatividad colombiana en materia de protección ambiental y su desarrollo jurisprudencial. Revista Jurídica Mario Alario D’Filippo, 16(33), 184-201.",
  "González Villa, J. E. (2012). Las acciones populares y el daño ambiental. Revista Facultad de Derecho y Ciencias Políticas, 42(117), 581-620.",
  "IARCE. (2020). El dilema de la culpa - Obdulio Velásquez Posada. YouTube. https://www.youtube.com/embed/LJgR2vy07Qs",
  "Kerguelén Durango, E. A. (2016). Antecedentes históricos del derecho ambiental colombiano. Derecho y Sociedad, 1(1), 1-10.",
  "Ortiz Monsalve, Á. (s.f.). Responsabilidad civil: Concepto y clases. YouTube. https://www.youtube.com/watch?v=7hZ8zYk0A9Q",
  "Porras Ramírez, A. (2011). Incidencias de la regulación ambiental en la economía: Una aproximación desde el desarrollo sostenible en Colombia [Tesis de grado, Universidad Icesi].",
  "Universidad Abierta Para Adultos (UAPA). (2021). Memorias 25 aniversario, UAPA 1995-2020. Ediciones UAPA.",
  "Valencia Hernández, J. G. (2007). Estado ambiental, democracia y participación ciudadana en Colombia a partir de la Constitución de 1991. Jurídicas, 4(2), 163-185.",
  "Velásquez Posada, O. (2013). Responsabilidad civil extracontractual (2da ed.). Bogotá, Colombia: Temis; Universidad de La Sabana.",
  "Woolcott Oyague, O., & Monje Mayorca, D. F. (Eds.). (2018). La modernización de las instituciones del derecho civil. Responsabilidad civil, propiedad y contrato. Bogotá, Colombia: Universidad Católica de Colombia."
];

export default function LineaDeTiempoAmbiental() {
  const [selectedHito, setSelectedHito] = useState<Hito | null>(null);
  const iconosNaturaleza = ["🌿", "🌸", "🦋", "🌲", "🦜", "🌱", "🌺"];

  return (
    <div className="min-h-screen bg-slate-50 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:35px_35px] text-slate-800 py-12 px-4 sm:px-6">
      
      {/* TÍTULO PRINCIPAL */}
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-700 px-4 py-1.5 rounded-full text-xs font-black text-emerald-800 mb-4 shadow-[3px_3px_0px_0px_#15803d]">
          <span>🌱</span> MARCO NORMATIVO Y JURÍDICO <span>🌿</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-slate-900 leading-snug">
          EVOLUCIÓN DE LA RESPONSABILIDAD CIVIL AMBIENTAL EN COLOMBIA
        </h1>
        
        <p className="text-xs text-slate-600 font-bold max-w-xl mx-auto">
          Haz clic en cualquier tarjeta del recorrido histórico para desplegar su análisis jurídico detallado y su respectiva fuente bibliográfica oficial.
        </p>
      </div>

      {/* CONTENEDOR LÍNEA DE TIEMPO */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* Línea Central Estilizada */}
        <div className="absolute left-1/2 top-5 bottom-20 w-1.5 bg-slate-900 -translate-x-1/2 z-10 rounded-full hidden md:block">
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-sm">🍃</div>
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 text-sm">🌸</div>
          <div className="absolute top-[70%] left-1/2 -translate-x-1/2 text-sm">🦋</div>
        </div>

        <div className="flex flex-col gap-12 relative z-20">
          {hitos.map((hito, index) => {
            const isLeft = hito.pos === 'izquierda';
            const iconoFloral = iconosNaturaleza[index % iconosNaturaleza.length];
            return (
              <div key={hito.id} className="flex flex-col md:flex-row items-center w-full">
                
                {/* Lado Izquierdo */}
                <div className="w-full md:w-[45%] md:text-right md:pr-8 mb-6 md:mb-0">
                  {isLeft ? (
                    <div 
                      onClick={() => setSelectedHito(hito)}
                      className="bg-white border-3 border-slate-900 rounded-lg shadow-[6px_6px_0px_0px_#0f172a] text-left inline-block w-full overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#0f172a] transition-all duration-200"
                    >
                      <div className={`${hito.color} px-3.5 py-2 flex justify-between items-center border-b-3 border-slate-900`}>
                        <span className="font-black text-[11px] text-slate-900 uppercase tracking-wide">
                          {hito.titulo}
                        </span>
                        <div className="flex gap-1 text-[10px] bg-white/70 px-1.5 py-0.5 rounded border border-slate-900 text-slate-900">
                          <span>—</span><span>□</span><span>✕</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-xs font-black text-slate-900 mb-1.5">
                          {hito.subtitulo}
                        </div>
                        <p className="text-[11px] text-slate-700 m-0 leading-relaxed line-clamp-3">
                          {hito.descripcion}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-1 text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200">
                          <span>📖</span> Ampliar información y ver cita
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:inline-flex items-center justify-end text-3xl" title="Biodiversidad">
                      {iconoFloral}
                    </div>
                  )}
                </div>

                {/* Badge Central de Fecha */}
                <div className="w-full md:w-[10%] flex justify-center relative mb-4 md:mb-0">
                  <div className={`${hito.badgeBg} text-white px-3 py-2 rounded-lg border-3 border-slate-900 text-[10px] font-black text-center shadow-[4px_4px_0px_0px_#0f172a] whitespace-nowrap z-30`}>
                    {hito.fecha}
                  </div>
                </div>

                {/* Lado Derecho */}
                <div className="w-full md:w-[45%] md:text-left md:pl-8">
                  {!isLeft ? (
                    <div 
                      onClick={() => setSelectedHito(hito)}
                      className="bg-white border-3 border-slate-900 rounded-lg shadow-[6px_6px_0px_0px_#0f172a] text-left inline-block w-full overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#0f172a] transition-all duration-200"
                    >
                      <div className={`${hito.color} px-3.5 py-2 flex justify-between items-center border-b-3 border-slate-900`}>
                        <span className="font-black text-[11px] text-slate-900 uppercase tracking-wide">
                          {hito.titulo}
                        </span>
                        <div className="flex gap-1 text-[10px] bg-white/70 px-1.5 py-0.5 rounded border border-slate-900 text-slate-900">
                          <span>—</span><span>□</span><span>✕</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-xs font-black text-slate-900 mb-1.5">
                          {hito.subtitulo}
                        </div>
                        <p className="text-[11px] text-slate-700 m-0 leading-relaxed line-clamp-3">
                          {hito.descripcion}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-1 text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200">
                          <span>📖</span> Ampliar información y ver cita
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:inline-flex items-center justify-start text-3xl" title="Biodiversidad">
                      {iconoFloral}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* CIERRE / NATURALEZA COMO SUJETO DE DERECHOS */}
        <div className="text-center mt-16 relative z-20">
          <div className="inline-block bg-white border-3 border-slate-900 py-4 px-8 rounded-xl shadow-[6px_6px_0px_0px_#0f172a]">
            <div className="text-3xl mb-1.5">🌍 🦋 🌺</div>
            <div className="font-black text-xs uppercase text-slate-900 tracking-wider">
              NATURALEZA COMO SUJETO DE DERECHOS
            </div>
          </div>
        </div>

      </div>

      {/* SECCIÓN DE REFERENCIAS BIBLIOGRÁFICAS AL FINAL */}
      <div className="max-w-3xl mx-auto mt-20 bg-white border-3 border-slate-900 rounded-xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#0f172a]">
        <div className="flex items-center gap-2 mb-4 border-b-2 border-slate-200 pb-3">
          <span className="text-lg">📚</span>
          <h2 className="text-xs font-black uppercase text-slate-900 tracking-wider m-0">
            Referencias Bibliográficas Utilizadas
          </h2>
        </div>
        <ul className="m-0 pl-5 flex flex-col gap-2">
          {referenciasLista.map((refItem, idx) => (
            <li key={idx} className="text-[10px] text-slate-600 leading-relaxed italic">
              {refItem}
            </li>
          ))}
        </ul>
      </div>

      {/* MODAL INTERACTIVO DE CITAS Y DETALLE */}
      {selectedHito && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white border-3 border-slate-900 rounded-xl max-w-lg w-full shadow-[8px_8px_0px_0px_#0f172a] overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className={`${selectedHito.color} px-4 py-3 flex justify-between items-center border-b-3 border-slate-900`}>
              <span className="font-black text-xs text-slate-900 uppercase">
                {selectedHito.titulo}
              </span>
              <button 
                onClick={() => setSelectedHito(null)}
                className="bg-white border-2 border-slate-900 rounded w-7 h-7 text-slate-900 font-black cursor-pointer flex items-center justify-center hover:bg-slate-100"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className={`inline-block ${selectedHito.badgeBg} text-white text-[10px] font-black px-2.5 py-1 rounded-md mb-3 border-2 border-slate-900`}>
                {selectedHito.fecha}
              </div>
              <h3 className="text-xs font-black text-slate-900 mb-2">
                {selectedHito.subtitulo}
              </h3>
              <p className="text-[11px] text-slate-700 leading-relaxed mb-5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                {selectedHito.descripcion}
              </p>
              
              <div className="border-t-2 border-dashed border-slate-200 pt-3.5">
                <span className="text-[10px] font-black uppercase text-slate-900 block mb-1.5">
                  📖 Referencia Bibliográfica Oficial:
                </span>
                <p className="text-[10px] text-slate-600 italic m-0 bg-amber-50 p-2.5 rounded-md border border-amber-200">
                  {selectedHito.fuente}
                </p>
              </div>

              <button 
                onClick={() => setSelectedHito(null)}
                className="w-full mt-5 bg-slate-900 text-white font-black py-3 rounded-lg border-none cursor-pointer text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
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