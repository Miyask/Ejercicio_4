/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Summary from './pages/Summary';
import Matrix from './pages/Matrix';
import Defense from './pages/Defense';
import Risks from './pages/Risks';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Summary);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Summary:
        return <Summary />;
      case Page.Matrix:
        return <Matrix />;
      case Page.Defense:
        return <Defense />;
      case Page.Risks:
        return <Risks />;
      default:
        return <Summary />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case Page.Summary: return 'Estrategia de Automatización';
      case Page.Matrix: return 'Matriz de Inversión';
      case Page.Defense: return 'Defensa Estratégica';
      case Page.Risks: return 'Portafolio de Riesgos';
      default: return 'Libro Ejecutivo';
    }
  };

  return (
    <div className="flex min-h-screen bg-min-bg text-min-text-main font-sans selection:bg-min-action selection:text-white">
      {/* Navigation Sidebar */}
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar title={getPageTitle()} />
        
        <main className="flex-1 overflow-x-hidden p-10 lg:p-14">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <div key={currentPage}>
                {renderPage()}
              </div>
            </AnimatePresence>
          </div>
        </main>

        {/* Global Footer */}
        <footer className="px-14 py-12 border-t border-min-border flex justify-between items-center bg-white shadow-[0_-4_24px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-min-text-main flex items-center justify-center text-white border border-min-border">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
              <span className="font-headline font-bold text-min-text-main tracking-tighter text-lg uppercase leading-none">Libro Cinético</span>
            </div>
            <p className="text-[10px] text-min-text-muted font-bold uppercase tracking-[0.25em] leading-none opacity-50">© 2026 Auditoría de Estrategia de Automatización</p>
          </div>
          
          <div className="flex gap-10 items-center">
            <button className="text-[10px] font-bold text-min-text-muted hover:text-min-action uppercase tracking-[0.2em] transition-all">Marco de Cumplimiento</button>
            <button className="text-[10px] font-bold text-min-text-muted hover:text-min-action uppercase tracking-[0.2em] transition-all">Canal de Soporte</button>
            <button className="bg-min-action text-white px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-min-action/10 hover:translate-y-[-2px] transition-all">Portal Interno</button>
          </div>
        </footer>
      </div>
    </div>
  );
}
