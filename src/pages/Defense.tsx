import { motion } from 'motion/react';

export default function Defense() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-7xl mx-auto space-y-20"
    >
      {/* Strategic Defense Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 space-y-10">
            <span className="text-min-action font-bold tracking-[0.2em] text-[10px] uppercase block leading-none">Defensa Estratégica</span>
            <h2 className="font-headline text-6xl text-min-text-main leading-tight font-bold tracking-tight">¿Por qué Make ahora? <br/><span className="text-min-text-muted font-normal opacity-40 font-serif italic text-4xl">(0-12 meses)</span></h2>
            <p className="text-min-text-muted font-medium text-xl leading-relaxed">La implementación inmediata aprovecha la agilidad del low-code para asegurar la posición de mercado antes de que la acumulación de deuda técnica dificulte la velocidad.</p>
            
            <div className="space-y-6 pt-6">
              <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-min-border shadow-sm group hover:border-min-action transition-colors">
                <div className="bg-min-surface text-min-action p-4 rounded-2xl border border-min-border transition-colors group-hover:bg-min-action group-hover:text-white">
                  <span className="material-symbols-outlined text-2xl">bolt</span>
                </div>
                <div>
                  <h4 className="font-bold text-min-text-main font-headline text-xl">Tiempo de Valor</h4>
                  <p className="text-md text-min-text-muted font-medium mt-2 leading-relaxed">Despliegue del motor central en 4 semanas. ROI inmediato mediante la eliminación de tareas manuales.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-min-border shadow-sm group hover:border-min-action transition-colors">
                <div className="bg-min-surface text-min-action p-4 rounded-2xl border border-min-border transition-colors group-hover:bg-min-action group-hover:text-white">
                  <span className="material-symbols-outlined text-2xl">campaign</span>
                </div>
                <div>
                  <h4 className="font-bold text-min-text-main font-headline text-xl">Autonomía de Marketing</h4>
                  <p className="text-md text-min-text-muted font-medium mt-2 leading-relaxed">Desacoplamiento de los sprints de TI. Los equipos no técnicos ganan el 100% del control sobre la lógica del flujo de trabajo.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="aspect-[4/3] bg-min-surface rounded-[40px] overflow-hidden relative border border-min-border shadow-sm group">
              <img 
                className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110" 
                referrerPolicy="no-referrer"
                src="https://picsum.photos/seed/modern-architecture/1200/800"
                alt="Arquitectura"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-min-text-main/40 to-transparent">
                <div className="bg-white p-10 rounded-[32px] shadow-2xl max-w-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-bold text-min-text-muted mb-3 uppercase tracking-[0.2em] leading-none">Velocidad Actual</p>
                  <p className="font-headline text-5xl font-bold text-min-text-main tabular-nums">+40%</p>
                  <p className="text-[12px] text-min-text-muted mt-4 font-medium leading-relaxed">Incremento en la velocidad de despliegue a través de silos operativos dentro del ciclo de auditoría del primer trimestre.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Roadmap Section */}
      <section className="space-y-16 py-16 bg-white rounded-[40px] p-16 border border-min-border shadow-sm relative overflow-hidden">
        <div className="text-center space-y-6 relative z-10">
          <h2 className="font-headline text-5xl text-min-text-main font-bold tracking-tight">Ruta de Migración a n8n</h2>
          <p className="text-lg text-min-text-muted font-medium max-w-xl mx-auto">La estrategia de transición del Libro Arquitectónico diseñada para escala empresarial de 12 a 18 meses.</p>
        </div>

        <div className="relative pt-16">
          <div className="absolute top-[4.5rem] left-0 w-full h-[2px] bg-min-border hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="bg-white p-10 rounded-[32px] border border-min-border shadow-sm relative group hover:border-min-action transition-colors">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-min-text-main border border-min-border font-headline font-bold text-xl shadow-lg group-hover:bg-min-action group-hover:text-white transition-all">01</div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-xl text-min-text-main uppercase tracking-tight">Fase Estándar</h3>
                <p className="text-[10px] text-min-action font-bold uppercase tracking-widest mt-2 mb-8 leading-none">0-12 MESES</p>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-[13px] text-min-text-main font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-emerald-500 text-xl font-bold">check_circle</span>
                  Orquestación en Make
                </li>
                <li className="flex items-center gap-4 text-[13px] text-min-text-main font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-emerald-500 text-xl font-bold">check_circle</span>
                  Integraciones SaaS
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-min-text-main p-10 rounded-[40px] shadow-2xl scale-105 relative text-white border-4 border-min-action">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-min-action flex items-center justify-center text-white font-headline font-bold text-xl shadow-xl">02</div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-xl text-white uppercase tracking-tight">Disparadores de Escala</h3>
                <p className="text-[10px] text-min-action font-bold uppercase tracking-widest mt-2 mb-8 leading-none">UMBRALES CRÍTICOS</p>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-[10px] font-bold text-white/40 mb-2 leading-none uppercase tracking-widest">Control de Volumen</p>
                  <p className="text-2xl font-bold text-white">&gt;10k leads/mes</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-[10px] font-bold text-white/40 mb-2 leading-none uppercase tracking-widest">Economía de Unidad</p>
                  <p className="text-2xl font-bold text-white">Costo &gt;$150/mes</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-10 rounded-[32px] border border-min-border relative opacity-50 group pointer-events-none">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-min-text-muted border border-min-border font-headline font-bold text-xl shadow-sm">03</div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-xl text-min-text-main uppercase tracking-tight">Evolución Nativa</h3>
                <p className="text-[10px] text-min-text-muted font-bold uppercase tracking-widest mt-2 mb-8 leading-none">12-18 MESES</p>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-[13px] text-min-text-main font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-min-text-muted/40 text-xl font-bold">settings_input_component</span>
                  Ruta Auto-alojada
                </li>
                <li className="flex items-center gap-4 text-[13px] text-min-text-main font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-min-text-muted/40 text-xl font-bold">storage</span>
                  Sanitización de BD
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
