import { motion } from 'motion/react';

export default function Summary() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      {/* Hero Section */}
      <section className="max-w-4xl">
        <span className="inline-block px-4 py-1.5 bg-min-surface text-min-action text-[10px] font-bold uppercase tracking-widest rounded-full mb-8 border border-min-border">Recomendación Estratégica</span>
        <h1 className="font-headline text-6xl font-semibold text-min-text-main leading-tight mb-6 tracking-tight">
          Acción Recomendada: <br/>
          <span className="text-min-action">Adoptar Make para un ROI inmediato</span>
        </h1>
        <p className="font-sans text-xl text-min-text-muted max-w-2xl font-medium leading-relaxed">
          Estrategia Híbrida para la Automatización de Leads — Despliegue de la Fase 1 y escalado operativo.
        </p>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Core Why Card */}
        <div className="md:col-span-8 bg-white p-12 rounded-[32px] border border-min-border relative overflow-hidden group shadow-sm transition-all hover:shadow-xl hover:shadow-min-accent/5">
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-min-action">info</span>
                <h3 className="font-headline text-lg font-bold text-min-text-main uppercase tracking-widest leading-none">Razón Principal</h3>
              </div>
              <p className="font-sans text-3xl text-min-text-main leading-snug max-w-xl font-semibold">
                "El tiempo de retorno <span className="text-min-action">(2 semanas)</span> y los conectores nativos superan la carga técnica para la Fase 1."
              </p>
            </div>
            <div className="mt-12 flex gap-4">
              <button className="bg-min-text-main text-white px-10 py-4 rounded-2xl font-bold text-sm hover:translate-y-[-2px] transition-all active:translate-y-1 shadow-lg shadow-min-text-main/10">
                Ver Hoja de Ruta Completa
              </button>
              <button className="bg-white text-min-text-main px-10 py-4 rounded-2xl font-bold text-sm border border-min-border hover:bg-min-surface transition-colors">
                Auditoría Técnica
              </button>
            </div>
          </div>
        </div>

        {/* Stats Stack */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="bg-min-text-main p-10 rounded-[32px] text-white shadow-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-4 leading-none">Plataforma Inicial</p>
            <h4 className="font-headline text-4xl font-bold tracking-tight mb-6">Make.com</h4>
            <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <span className="material-symbols-outlined text-lg">verified</span>
              Estrategia Certificada
            </div>
          </div>
          <div className="bg-min-surface p-10 rounded-[32px] border border-min-border">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-min-text-muted mb-4 leading-none">ROI Estimado</p>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-5xl font-bold text-min-text-main tracking-tight">340%</span>
              <span className="text-min-action font-bold text-sm uppercase tracking-widest">/ año 1</span>
            </div>
          </div>
        </div>

        {/* Metric Tiles */}
        <div className="md:col-span-4 bg-white p-10 rounded-[32px] border border-min-border flex flex-col justify-between group hover:border-min-action/50 transition-colors">
          <div className="flex justify-between items-start mb-10">
            <span className="material-symbols-outlined text-min-text-muted transition-colors group-hover:text-min-action">speed</span>
            <span className="text-[10px] font-bold text-min-text-muted uppercase tracking-widest">Eficiencia</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-min-text-muted mb-2">Tiempo de Lanzamiento</p>
            <span className="font-headline text-3xl font-bold text-min-text-main transition-colors group-hover:text-min-action">14 Días</span>
          </div>
        </div>
        <div className="md:col-span-4 bg-white p-10 rounded-[32px] border border-min-border flex flex-col justify-between group hover:border-min-action/50 transition-colors">
          <div className="flex justify-between items-start mb-10">
            <span className="material-symbols-outlined text-min-text-muted transition-colors group-hover:text-min-action">savings</span>
            <span className="text-[10px] font-bold text-min-text-muted uppercase tracking-widest">Financiero</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-min-text-muted mb-2">Ahorro en OpEx</p>
            <span className="font-headline text-3xl font-bold text-min-text-main transition-colors group-hover:text-min-action">$12.4k</span>
          </div>
        </div>
        <div className="md:col-span-4 bg-white p-10 rounded-[32px] border border-min-border flex flex-col justify-between group hover:border-min-action/50 transition-colors">
          <div className="flex justify-between items-start mb-10">
            <span className="material-symbols-outlined text-min-text-muted transition-colors group-hover:text-min-action">verified</span>
            <span className="text-[10px] font-bold text-min-text-muted uppercase tracking-widest">Estabilidad</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-min-text-muted mb-2">Riesgo de Fallo</p>
            <span className="font-headline text-3xl font-bold text-min-text-main transition-colors group-hover:text-sky-500">Bajo</span>
          </div>
        </div>
      </div>

      {/* Hybrid Note */}
      <section className="bg-min-surface rounded-[32px] p-12 border border-min-border">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h4 className="font-headline text-2xl font-bold text-min-text-main mb-4 tracking-tight">La Ruta de Transición Híbrida</h4>
            <p className="text-min-text-muted text-lg leading-relaxed font-medium">
              Mientras que Make proporciona la entrada más rápida para la automatización de leads, recomendamos mantener n8n para la sanitización de datos de alto volumen en la Fase 2. Este equilibrio garantiza un alto rendimiento sin sacrificar la agilidad requerida para los tiempos de respuesta del mercado actual.
            </p>
          </div>
          <div className="flex gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-min-border shadow-sm group hover:border-min-action transition-colors">
              <span className="material-symbols-outlined text-min-text-main group-hover:text-min-action transition-colors text-2xl">link</span>
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-min-border shadow-sm group hover:border-min-action transition-colors">
              <span className="material-symbols-outlined text-min-text-main group-hover:text-min-action transition-colors text-2xl">terminal</span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
