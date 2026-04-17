import { motion } from 'motion/react';

export default function Matrix() {
  const criteria = [
    { name: 'Conectores', desc: 'Amplitud de integraciones nativas con APIs', weight: 9, make: 10, n8n: 7 },
    { name: 'Manejo de HTTP', desc: 'Soporte para APIs personalizadas y autenticación compleja', weight: 8, make: 8, n8n: 9 },
    { name: 'Observabilidad', desc: 'Registro, depuración y seguimiento de errores', weight: 10, make: 7, n8n: 10 },
    { name: 'Transformación de Datos', desc: 'Scripting y mapeo de datos complejos', weight: 9, make: 8, n8n: 10 },
    { name: 'Escalabilidad', desc: 'Capacidad de ejecución para altos volúmenes', weight: 10, make: 8, n8n: 9 },
    { name: 'Tiempo de Valor', desc: 'Facilidad de uso y velocidad de desarrollo', weight: 7, make: 10, n8n: 6 },
    { name: 'Privacidad/Alojamiento', desc: 'Soberanía de datos y alojamiento local', weight: 8, make: 2, n8n: 10 },
    { name: 'Eficiencia de Costos', desc: 'Costo de licencia vs. costo de ejecución', weight: 9, make: 6, n8n: 9 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <section className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-min-border pb-10">
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] text-min-action font-bold uppercase tracking-[0.25em] block leading-none">Auditoría de Inteligencia</span>
          <h2 className="text-5xl font-semibold text-min-text-main leading-tight font-headline tracking-tight">Matriz de Decisión: Make vs. n8n</h2>
          <p className="text-lg text-min-text-muted font-medium leading-relaxed">Evaluación técnica profunda a través de 8 grupos de criterios operativos para automatización de grado empresarial.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white text-min-text-main border border-min-border px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-min-surface transition-colors">Exportar Libro</button>
          <button className="bg-min-action text-white px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-min-action/10 hover:translate-y-[-2px] transition-all">Bloquear Estrategia</button>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-10">
        {/* Matrix Table */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[32px] border border-min-border overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-min-surface">
                <th className="py-6 px-8 text-[10px] font-bold uppercase tracking-[0.2em] text-min-text-muted">Criterio Operativo</th>
                <th className="py-6 px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-min-text-muted text-center">Peso</th>
                <th className="py-6 px-8 text-sm font-bold text-min-text-main text-center uppercase tracking-widest">Make</th>
                <th className="py-6 px-8 text-sm font-bold text-min-text-main text-center uppercase tracking-widest">n8n</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-min-border text-min-text-main">
              {criteria.map((item, idx) => (
                <tr key={item.name} className="hover:bg-min-surface/50 transition-colors group">
                  <td className="py-6 px-8">
                    <div className="font-bold text-lg mb-1">{item.name}</div>
                    <div className="text-[12px] text-min-text-muted font-medium max-w-xs leading-normal">{item.desc}</div>
                  </td>
                  <td className="py-6 px-6 text-center font-headline font-bold text-xl text-min-text-muted">{item.weight}</td>
                  <td className="py-6 px-8 text-center">
                    <div className={`inline-flex flex-col items-center px-4 py-2 rounded-xl transition-all ${item.make >= item.n8n ? 'bg-min-action/5 border border-min-action/10' : ''}`}>
                      <span className={`font-headline text-2xl ${item.make >= item.n8n ? 'font-bold text-min-action' : 'font-medium text-min-text-muted/30'}`}>{item.make}</span>
                      {item.make >= item.n8n && <span className="text-[8px] uppercase font-bold text-min-action tracking-widest mt-1">Ganador</span>}
                    </div>
                  </td>
                  <td className="py-6 px-8 text-center">
                    <div className={`inline-flex flex-col items-center px-4 py-2 rounded-xl transition-all ${item.n8n > item.make ? 'bg-emerald-500/5 border border-emerald-500/10' : ''}`}>
                      <span className={`font-headline text-2xl ${item.n8n > item.make ? 'font-bold text-emerald-600' : 'font-medium text-min-text-muted/30'}`}>{item.n8n}</span>
                      {item.n8n > item.make && <span className="text-[8px] uppercase font-bold text-emerald-600 tracking-widest mt-1">Ganador</span>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sidebar Summary */}
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <div className="bg-min-text-main text-white rounded-[32px] p-10 space-y-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-min-action/20 blur-[64px] transition-all group-hover:bg-min-action/30"></div>
            <div className="relative z-10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-3 leading-none">Inteligencia Agregada</h3>
              <p className="text-sm text-white/60 leading-relaxed font-medium">Análisis ponderado a través de todos los grupos de auditoría.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-[9px] uppercase font-bold text-white/40 mb-2 leading-none">Puntuación Make</p>
                <p className="font-headline text-4xl font-bold">528</p>
                <div className="h-0.5 w-8 bg-white/20 mt-4"></div>
              </div>
              <div className="bg-min-action rounded-2xl p-6 shadow-xl border border-white/10 ring-4 ring-min-action/20">
                <p className="text-[9px] uppercase font-bold text-white/60 mb-2 leading-none">Puntuación n8n</p>
                <p className="font-headline text-4xl font-bold">642</p>
                <div className="mt-4 inline-block px-2 py-1 bg-white text-min-text-main text-[8px] font-bold uppercase tracking-widest rounded leading-none">Líder de Auditoría</div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 relative z-10">
              <p className="text-sm leading-relaxed text-white/80 font-medium italic">
                "El control arquitectónico de n8n y sus capacidades de auto-alojamiento lo convierten en la opción superior para entornos de alto cumplimiento."
              </p>
            </div>
          </div>

          <div className="bg-white text-min-text-main rounded-[32px] p-10 border border-min-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-min-surface flex items-center justify-center border border-min-border">
                <span className="material-symbols-outlined text-min-action text-lg">info</span>
              </div>
              <h4 className="font-bold text-xs tracking-[0.2em] uppercase leading-none">Contexto Crítico</h4>
            </div>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-min-action mt-2 shrink-0"></div>
                <p className="text-sm font-medium text-min-text-muted leading-relaxed">La residencia de datos de Make depende de la nube (solo regiones de la UE/EE. UU.).</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-min-action mt-2 shrink-0"></div>
                <p className="text-sm font-medium text-min-text-muted leading-relaxed">n8n requiere una carga interna de DevOps para el mantenimiento a largo plazo.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
