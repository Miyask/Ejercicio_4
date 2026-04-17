interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <header className="w-full top-0 sticky z-10 h-32 flex justify-between items-center px-12 bg-white border-b border-min-border">
      <div className="flex items-center gap-6">
        <h1 className="text-4xl font-semibold tracking-tight text-min-text-main font-headline">{title}</h1>
        <div className="h-6 w-px bg-min-border hidden md:block"></div>
        <div className="hidden md:flex items-center gap-2 text-min-text-muted text-[10px] font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-[14px]">calendar_today</span>
          17 de Abril, 2026
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="hidden sm:flex items-center gap-3 py-2.5 px-6 bg-min-surface rounded-2xl border border-min-border">
          <span className="material-symbols-outlined text-min-text-muted text-xl">search</span>
          <input 
            type="text" 
            placeholder="Buscar en el libro de auditoría..." 
            className="bg-transparent border-none focus:ring-0 text-xs font-bold w-48 text-min-text-main placeholder:text-min-text-muted/40 uppercase tracking-widest"
          />
        </div>
        
        <div className="flex items-center gap-4 pl-8 border-l border-min-border">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-min-text-main leading-none">Alex Sterling</p>
            <p className="text-[10px] text-min-text-muted mt-1 uppercase font-bold tracking-widest">Acceso Ejecutivo</p>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-min-accent flex items-center justify-center text-white border border-min-border shadow-sm font-headline font-bold">
            AS
          </div>
        </div>
      </div>
    </header>
  );
}
