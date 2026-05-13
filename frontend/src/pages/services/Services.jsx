import React from "react";
import PartenaireList from "../../components/partenaireList/PartenaireList";

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      icon: "bi-window",
      description: "Création d'applications web modernes, performantes et sécurisées adaptées à votre activité.",
      features: ["React & Next.js", "Node.js & APIs", "Dashboard Admin", "Architecture scalable"],
    },
    {
      title: "Applications Mobile",
      icon: "bi-phone",
      description: "Applications Android & iOS fluides avec une expérience utilisateur premium.",
      features: ["React Native", "Applications hybrides", "Notifications push", "Publication Stores"],
    },
    {
      title: "E-Commerce",
      icon: "bi-cart3",
      description: "Boutiques en ligne professionnelles optimisées pour les ventes et les performances.",
      features: ["Paiements Stripe", "Gestion commandes", "SEO optimisé", "Responsive design"],
    },
    {
      title: "UI / UX Design",
      icon: "bi-palette",
      description: "Interfaces modernes et intuitives pensées pour vos utilisateurs.",
      features: ["Design moderne", "Expérience utilisateur", "Animations premium", "Prototype Figma"],
    },
    {
      title: "Cloud & DevOps",
      icon: "bi-cloud",
      description: "Déploiement sécurisé et infrastructure cloud performante.",
      features: ["Docker", "CI/CD", "VPS & Cloud", "Monitoring"],
    },
    {
      title: "Maintenance & Support",
      icon: "bi-shield-check",
      description: "Support technique et maintenance continue pour garantir la stabilité.",
      features: ["Corrections bugs", "Mises à jour", "Optimisation", "Support rapide"],
    },
  ];

  const process = [
    { step: "01", title: "Analyse", text: "Nous analysons vos besoins et objectifs afin de proposer la meilleure solution." },
    { step: "02", title: "Conception", text: "Création d'une architecture moderne avec une expérience utilisateur premium." },
    { step: "03", title: "Développement", text: "Développement rapide, sécurisé et optimisé avec les dernières technologies." },
    { step: "04", title: "Déploiement", text: "Mise en production, optimisation et accompagnement continu." },
  ];

  return (
    <div className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white overflow-hidden transition-colors duration-500">
      
      {/* --- HERO SECTION (CENTRAGE TOTAL) --- */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-600/10 dark:bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[150px] rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md text-indigo-600 dark:text-indigo-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase animate-fadeUp">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
            AYACODIA • Expertise
          </div>

          <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight animate-fadeUp max-w-5xl">
            Des services digitaux
            <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 dark:from-indigo-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
              puissants & modernes.
            </span>
          </h1>

          <p className="mt-6 text-slate-600 dark:text-gray-400 text-base sm:text-xl max-w-2xl leading-relaxed animate-fadeUp">
            AYACODIA accompagne les entreprises avec des solutions digitales sur-mesure, performantes et évolutives.
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID (CENTRAGE MOBILE) --- */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                  <i className={`bi ${service.icon} text-white text-2xl`}></i>
                </div>

                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{service.title}</h2>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8">{service.description}</p>

                <div className="space-y-3 w-full flex flex-col items-center mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-gray-300 text-sm font-medium">
                      <i className="bi bi-check2-circle text-indigo-500"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-auto w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-md shadow-indigo-500/20 active:scale-95">
                  En savoir plus
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS (CENTRAGE MOBILE) --- */}
      <section className="py-24 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-[0.3em] text-xs">Notre Process</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Une méthode <span className="text-indigo-600">claire.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-[24px] border border-transparent hover:border-slate-200 dark:hover:border-white/10 hover:bg-white dark:hover:bg-white/5 transition-all">
                <div className="text-5xl font-black text-indigo-600/20 dark:text-indigo-400/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US (LAYOUT MIRACLE) --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-[40px] bg-slate-900 dark:bg-white/5 p-8 sm:p-16 relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <h2 className="relative z-10 text-3xl sm:text-5xl font-black text-white leading-tight">
            Expériences digitales <span className="text-indigo-400">Premium.</span>
          </h2>
          
          <p className="relative z-10 mt-6 text-slate-300 dark:text-gray-400 text-base max-w-xl">
            Design élégant, performances foudroyantes et sécurité blindée.
          </p>

          <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
            {["Design moderne", "Haute performance", "Responsive mobile", "Support rapide"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <i className="bi bi-shield-check text-indigo-400 text-xl"></i>
                <span className="text-white font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 animate-float">
             <img src="/logo.png" alt="Logo" className="h-20 sm:h-28 object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center py-16 sm:py-24 rounded-[40px] bg-gradient-to-br from-indigo-600 to-blue-700 shadow-2xl relative overflow-hidden text-white">
           <div className="relative z-10 px-6">
              <h2 className="text-3xl sm:text-5xl font-black mb-6">Prêt à décoller ?</h2>
              <p className="text-white/80 text-base sm:text-lg max-w-xl mb-10">Créons ensemble la solution qui fera grandir votre business.</p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="/contact" className="px-10 py-4 bg-white text-indigo-700 rounded-xl font-black text-center transition-transform active:scale-95 shadow-xl">Commencer ici</a>
                <a href="https://abdulrahman-adam.com" className="px-10 py-4 bg-indigo-500/30 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-center">Réalisations</a>
              </div>
           </div>
        </div>

        <PartenaireList />
      </section>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Services;