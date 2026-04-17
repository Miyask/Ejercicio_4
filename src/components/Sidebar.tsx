import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const navItems = [
    { id: Page.Summary, label: 'Resumen', icon: 'dashboard' },
    { id: Page.Matrix, label: 'Matriz', icon: 'grid_view' },
    { id: Page.Defense, label: 'Defensa', icon: 'security' },
    { id: Page.Risks, label: 'Riesgos', icon: 'warning' },
  ];

  return (
    <aside className="h-screen w-72 left-0 sticky flex flex-col py-12 bg-min-surface text-min-text-main shrink-0 border-r border-min-border">
      <div className="px-10 mb-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-min-text-main rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">insights</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight font-headline uppercase leading-none">Cinético</h2>
        </div>
        <p className="text-[10px] font-bold text-min-text-muted uppercase tracking-[0.25em] leading-none">Libro de Estrategia</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-200 group ${
              currentPage === item.id
                ? 'bg-min-text-main text-white shadow-lg shadow-min-text-main/10'
                : 'text-min-text-muted hover:text-min-text-main hover:bg-white'
            }`}
          >
            <span className={`material-symbols-outlined text-[22px] transition-transform duration-300 ${currentPage === item.id ? 'scale-110' : 'group-hover:translate-x-1'}`}>
              {item.icon}
            </span>
            <span className="text-sm font-bold tracking-tight">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-10 pt-8 border-t border-min-border mx-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold text-min-text-muted uppercase tracking-widest">Sistema En Línea</span>
        </div>
        <button className="text-[10px] font-bold text-min-action uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
          Ver Protocolo v2.4
        </button>
      </div>
    </aside>
  );
}
