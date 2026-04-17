import { motion } from 'motion/react';

export default function Risks() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-16"
    >
      {/* Header Section */}
      <div className="max-w-4xl space-y-6">
        <span className="text-[10px] font-bold tracking-[0.25em] text-min-action uppercase block leading-none">Portafolio de Auditoría de Riesgos</span>
        <h2 className="font-headline text-6xl font-semibold text-min-text-main tracking-tight">Defensa y Mitigación</h2>
        <p className="text-min-text-muted text-xl leading-relaxed font-medium">
          Nuestra estrategia de automatización prioriza la integridad estructural. A continuación, se presenta un libro completo de riesgos operativos identificados y las medidas defensivas activas establecidas para asegurar la continuidad del negocio.
        </p>
      </div>

      {/* Risk Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Price Hikes Card */}
        <div className="lg:col-span-8 bg-white p-12 rounded-[40px] relative overflow-hidden group border border-min-border shadow-sm">
          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-12">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-min-surface text-min-action rounded-2xl flex items-center justify-center border border-min-border transition-colors group-hover:bg-min-action group-hover:text-white">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <h3 className="text-3xl font-bold text-min-text-main font-headline">Aumentos de Precios</h3>
              </div>
              <p className="text-min-text-muted text-lg leading-relaxed font-medium">Escalada imprevista en los costos de infraestructura en la nube y licencias de API de terceros durante las fases de escalado.</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-2 bg-min-surface text-[10px] font-bold rounded-xl text-min-text-main uppercase tracking-widest border border-min-border">Bloqueo Activo</span>
                <span className="px-6 py-2 bg-min-surface text-[10px] font-bold rounded-xl text-min-text-main uppercase tracking-widest border border-min-border">Umbrales de Uso</span>
              </div>
            </div>
            <div className="w-full md:w-80 bg-min-text-main p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-min-action/10 blur-[48px]"></div>
              <span className="text-[10px] font-bold uppercase text-white/40 block mb-4 tracking-[0.2em] leading-none">Estrategia de Mitigación</span>
              <p className="text-md font-semibold leading-relaxed text-white">Ciclos de adquisición anuales a tasa fija y redimensionamiento automático de contenedores para eliminar gastos innecesarios de computación inactiva.</p>
            </div>
          </div>
        </div>

        {/* Maintenance Card */}
        <div className="lg:col-span-4 bg-white p-12 rounded-[40px] border border-min-border relative group shadow-sm flex flex-col justify-between">
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 bg-min-surface text-min-action rounded-2xl flex items-center justify-center border border-min-border transition-colors group-hover:bg-min-action group-hover:text-white">
                <span className="material-symbols-outlined text-2xl">construction</span>
              </div>
              <div className="bg-amber-500 text-white text-[10px] font-bold px-4 py-2 rounded-xl uppercase tracking-widest">MODERADO</div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-min-text-main font-headline mb-4">Mantenimiento</h3>
              <p className="text-md text-min-text-muted font-medium leading-relaxed">Fatiga de la infraestructura y actualizaciones de integración de sistemas heredados que causan fricción operativa.</p>
            </div>
          </div>
          <div className="space-y-4 pt-10">
            <div className="flex items-center gap-3 text-[11px] font-bold text-min-text-main uppercase tracking-[0.15em]">
              <span className="material-symbols-outlined text-emerald-500 text-lg font-bold">check_circle</span>
              Auditorías de Salud Bisemanales
            </div>
            <div className="flex items-center gap-3 text-[11px] font-bold text-min-text-main uppercase tracking-[0.15em]">
              <span className="material-symbols-outlined text-emerald-500 text-lg font-bold">check_circle</span>
              Paridad de Servicios Gestionados
            </div>
          </div>
        </div>

        {/* Silent Failures Card */}
        <div className="lg:col-span-12 bg-min-text-main text-white p-16 rounded-[48px] flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-min-action/5 blur-[128px]"></div>
          <div className="lg:w-1/3 space-y-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-white text-3xl">report</span>
              </div>
              <h3 className="text-4xl font-bold font-headline tracking-tight">Fallos Silenciosos</h3>
            </div>
            <p className="text-white/60 text-lg font-medium leading-relaxed">Errores lógicos que evitan las alertas estándar sin una interrupción inmediata del servicio.</p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full relative z-10">
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group/sub">
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 mb-4 leading-none">Protocolo de Defensa Alfa</p>
              <p className="text-md font-semibold font-medium leading-relaxed">Detección de desviaciones mediante monitoreo de transacciones sintéticas en todas las APIs principales.</p>
            </div>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group/sub">
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 mb-4 leading-none">Protocolo de Defensa Beta</p>
              <p className="text-md font-semibold font-medium leading-relaxed">Disparadores de reversión automáticos sincronizados con la varianza en la puntuación de anomalías.</p>
            </div>
          </div>
          <div className="lg:w-48 flex flex-col items-center justify-center border-l border-white/10 lg:pl-16 h-full relative z-10">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.25em] mb-3 leading-none uppercase">Nivel de Riesgo</span>
            <span className="text-7xl font-bold text-white tracking-tighter">P1</span>
          </div>
        </div>
      </div>

      {/* Inquiry Management */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start pt-10">
        <div className="lg:col-span-4 sticky top-40 space-y-8">
          <h2 className="text-5xl font-semibold text-min-text-main leading-tight font-headline tracking-tight">Portal de Consultas</h2>
          <p className="text-min-text-muted text-xl leading-relaxed font-medium">Respuestas directas a preocupaciones estratégicas críticas sobre el ciclo de vida y la gobernanza de 12 meses.</p>
          <div className="aspect-square w-full rounded-[48px] overflow-hidden border border-min-border shadow-inner relative group">
            <img 
              alt="Consulta Ejecutiva" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              referrerPolicy="no-referrer"
              src="https://picsum.photos/seed/corporate-abstract/600/600" 
            />
            <div className="absolute inset-0 bg-min-text-main/10 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-10">
          {[
            { id: '01', q: '¿Cuál es el perfil de costos proyectado a los 12 meses?', a: 'En el hito de un año, proyectamos una reducción del 22% en los gastos operativos. Aunque el gasto de capital inicial es mayor, la transición del trabajo humano variable a los costos de infraestructura fija proporciona un modelado de EBITDA predecible.' },
            { id: '02', q: '¿Cómo se gestionan los fallos del sistema en entornos de alto riesgo?', a: 'Empleamos un protocolo de respaldo "Humano en el bucle". Si la matriz de riesgo detecta una puntuación de confianza inferior al 94%, el sistema entra en un estado de solo lectura y activa una escalada inmediata al oficial de guardia del Libro Ejecutivo.' },
            { id: '03', q: '¿Quién mantiene la responsabilidad de la integridad lógica a largo plazo?', a: 'La responsabilidad se bifurca: el mantenimiento técnico recae en el núcleo de DevOps, mientras que la gobernanza estratégica sigue siendo competencia exclusiva del Grupo de Liderazgo Estratégico.' }
          ].map((faq) => (
            <div key={faq.id} className="p-12 bg-white rounded-[40px] border border-min-border group hover:border-min-action transition-all shadow-sm hover:shadow-xl">
              <div className="flex gap-12">
                <span className="text-min-action/10 text-8xl font-bold italic tracking-tighter leading-none font-headline shrink-0">{faq.id}</span>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-min-text-main font-headline leading-tight tracking-tight">{faq.q}</h4>
                  <p className="text-min-text-muted text-lg leading-relaxed font-medium">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
