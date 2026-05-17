import React, { useState } from 'react';

// Données des services pour faciliter la maintenance et l'évolution
const servicesData = [
  {
    id: 'web-mobile',
    title: "Applications Web & Web Mobile",
    subtitle: "Performance & Ergonomie",
    description: "Nous concevons des applications web et mobiles sur mesure, intuitives et ultra-performantes. Du design responsive à l'architecture fluide, nous optimisons l'expérience utilisateur sur tous les écrans.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    badge: "Incontournable",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 'digital-transform',
    title: "Transformation Digitale",
    subtitle: "Conseil & Accompagnement",
    description: "Nous accompagnons les entreprises dans leur mutation technologique. Modernisation des processus, audit technique et conduite du changement pour propulser votre business dans l'ère du digital.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badge: "Stratégie",
    gradient: "from-purple-600 to-indigo-500",
  },
  {
    id: 'scale-solutions',
    title: "Ingénierie Système & Architecture",
    subtitle: "Du CRUD à l'Intelligence Artificielle",
    description: "Une expertise unique segmentée selon l'envergure et la maturité de vos projets techniques.",
    hasSubsystems: true,
    gradient: "from-emerald-600 to-teal-500",
  }
];

const subsystems = [
  { level: "Petits Systèmes", tech: "Applications CRUD", desc: "Gestion d'inventaire, logiciels de point de vente (POS) agiles." },
  { level: "Moyens Systèmes", tech: "Outils Business", desc: "Solutions CRM centralisées et plateformes de gestion RH." },
  { level: "Grands Systèmes", tech: "Écosystèmes Enterprise", desc: "Architectures ERP robustes et infrastructures bancaires sécurisées." },
  { level: "Systèmes Avancés", tech: "IA & Systèmes Distribués", desc: "Modèles prédictifs, Big Data et scalabilité horizontale." },
];

export default function ServicesData() {
  const [activeSystem, setActiveSystem] = useState(0);

  return (
    <section className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans selection:bg-cyan-500 selection:text-slate-900">
      <div className="max-w-7xl rectangular-blur mx-auto relative">
        
        {/* Effets de lumière en arrière-plan (Glow effect) */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

        {/* En-tête de la section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Notre Écosystème d'Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Des services pensés pour votre <span className="underline decoration-cyan-500 decoration-4 underline-offset-8">croissance</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            De l'application mobile ciblée au déploiement d'architectures d'entreprise propulsées par l'IA, nous façonnons le futur technologique de votre structure.
          </p>
        </div>

        {/* Grille principale des Services Majeurs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 text-center">
          {servicesData.filter(s => !s.hasSubsystems).map((service) => (
            <div 
              key={service.id}
              className="group relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/5 overflow-hidden"
            >
              {/* Overlay de gradient au hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />
              
              <div className="flex flex-row items-center justify-between gap-4 mb-6">
  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-500 ease-out inline-block`}>
    {service.icon}
  </div>
  <span className="text-xs font-semibold px-3 py-1 bg-slate-700/40 text-slate-300 rounded-full border border-slate-600/30">
    {service.badge}
  </span>
</div>

              <div className="space-y-3">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{service.subtitle}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

            
            </div>
          ))}
        </div>

        {/* Composant Grand Écran / Système Avancé Interactif (Miracle Component) */}
        {servicesData.filter(s => s.hasSubsystems).map((service) => (
          <div 
            key={service.id}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-8">
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">{service.subtitle}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">{service.title}</h3>
              <p className="text-sm sm:text-base text-slate-400 font-light mt-2 max-w-2xl">
                {service.description}
              </p>
            </div>

            {/* Layout interactif adaptatif : Tabs sur mobile/tablette, Dashboard interactif sur Large Screen */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Menu de sélection gauche */}
              <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
                {subsystems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSystem(index)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                      activeSystem === index
                        ? 'bg-gradient-to-r from-slate-800 to-slate-700/50 border-emerald-500/40 shadow-xl shadow-emerald-950/20 translate-x-2'
                        : 'bg-transparent border-transparent hover:bg-slate-800/30 hover:border-slate-700/50 text-slate-400'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <p className={`text-xs font-bold uppercase tracking-wider ${activeSystem === index ? 'text-emerald-400' : 'text-slate-500'}`}>
                        {item.level}
                      </p>
                      <p className={`font-semibold text-base ${activeSystem === index ? 'text-white' : 'text-slate-300'}`}>
                        {item.tech}
                      </p>
                    </div>
                    <div className={`p-2 rounded-xl transition-colors ${activeSystem === index ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Écran d'affichage de la transition à droite */}
              <div className="lg:col-span-7 bg-slate-900/60 border border-slate-700/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative min-h-[220px] sm:min-h-[260px] lg:min-h-auto overflow-hidden group">
                
                {/* Animation de fond lors du changement d'état */}
                <div key={activeSystem} className="animate-fadeIn space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Architecture active
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {subsystems[activeSystem].tech}
                  </h4>
                  
                  <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl">
                    {subsystems[activeSystem].desc}
                  </p>
                </div>

                {/* Simulation de code ou d'indicateur technologique en bas de carte */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>STATUS: OPTIMIZED</span>
                  <span>SCALE: 0{activeSystem + 1} // NEXT_GEN</span>
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}