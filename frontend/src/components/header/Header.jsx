export default function Header() {
  const services = [
    {
      title: "Applications Web",
      description:
        "Création de plateformes modernes, rapides et sécurisées adaptées à votre activité.",
      icon: "bi-window",
    },
    {
      title: "Applications Mobile",
      description:
        "Applications Android et iOS performantes avec expérience utilisateur premium.",
      icon: "bi-phone",
    },
    {
      title: "E-Commerce",
      description:
        "Boutiques en ligne professionnelles optimisées pour les ventes et la croissance.",
      icon: "bi-cart3",
    },
    {
      title: "UI / UX Design",
      description:
        "Interfaces élégantes et intuitives pensées pour vos utilisateurs.",
      icon: "bi-palette",
    },
  ];

  const stats = [
    { number: "50+", label: "Projets réalisés" },
    { number: "24/7", label: "Support & assistance" },
    { number: "100%", label: "Responsive design" },
    { number: "99%", label: "Clients satisfaits" },
  ];

  return (
    /* MODIFICATION : bg-white par défaut, bg-[#020617] en dark mode */
    <div className="bg-gray-100 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-indigo-600/10 dark:bg-indigo-600/20 blur-[140px] rounded-full animate-pulse"></div>

          <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[160px] rounded-full animate-pulse delay-1000"></div>

          {/* Grille adaptative : sombre en light mode, blanche en dark mode */}
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="animate-fadeUp text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl text-indigo-600 dark:text-indigo-300 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse"></span>
              AYACODIA • Agence Digitale
            </div>

            <h1 className="mt-8 text-5xl sm:text-2xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:!text-white">
              Créons votre
              <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 dark:from-indigo-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                futur digital.
              </span>
            </h1>

            <p className="mt-8 text-slate-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              AYACODIA accompagne les entreprises avec des solutions digitales
              modernes : applications web, applications mobiles, plateformes
              e-commerce et systèmes intelligents.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a
                href="/contact"
                className="w-full sm:w-[249px] text-center bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-600 group relative overflow-hidden px-8 py-5 font-bold text-white transition-all duration-500 shadow-lg shadow-indigo-500/20"
              >
                Démarrer un projet
              </a>

              <a
                href="/services"
                className="w-full sm:w-[249px] text-center px-8 py-5 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-500 font-semibold text-slate-700 dark:text-gray-200"
              >
                Découvrir nos services
              </a>
            </div>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] backdrop-blur-xl p-5 hover:-translate-y-2 transition-all duration-500 shadow-sm dark:shadow-none"
                >
                  <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 to-blue-400 bg-clip-text">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-slate-500 dark:text-gray-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative animate-fadeRight">
            <div className="w-full relative border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-8 shadow-xl dark:shadow-[0_20px_80px_rgba(79,70,229,0.2)]">
              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full"></div>

              <img
                src="/logo.png"
                alt="AYACODIA"
                className="relative z-10 w-full max-w-md mx-auto object-contain drop-shadow-2xl dark:drop-shadow-[0_0_35px_rgba(99,102,241,0.4)] animate-float"
              />

              <div className="relative z-10 mt-10 grid grid-cols-2 gap-4">
                {["Performance", "Sécurité", "Responsive", "Innovation"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="border border-blue-600 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.05] p-4 text-center text-sm font-semibold text-slate-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-white/[0.08] transition duration-500"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <hr className="border-slate-200 dark:border-white/10" />
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">
              Nos Services
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl font-black leading-tight text-slate-900 dark:text-white">
              Des solutions digitales
              <span className="block text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 to-blue-400 bg-clip-text">
                pensées pour votre croissance.
              </span>
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] backdrop-blur-xl p-8 hover:-translate-y-3 transition-all duration-700 shadow-sm dark:shadow-none"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 dark:from-indigo-500/10 dark:to-blue-500/10 transition duration-700"></div>

                <div className="text-center relative z-10 flex flex-col items-center">
                  {/* ICON */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                    <i
                      className={`bi ${service.icon} text-white text-2xl leading-none`}
                    ></i>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-2xl font-black text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-slate-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full pb-24 mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full max-w-7xl mx-auto relative overflow-hidden border border-white/10 bg-gradient-to-br from-blue-100 to-blue-700 p-4 sm:p-16 text-center shadow-[0_20px_80px_rgba(79,70,229,0.4)]">
          <div className="w-full absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
              Vous avez un projet ?
            </h2>

            <p className="mt-8 text-white/80 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
              Créons ensemble une solution digitale puissante qui transforme vos
              idées en résultats concrets.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
              <a
                href="/contact"
                className="px-8 py-5 bg-white text-indigo-700 font-black hover:scale-105 transition-all duration-500 shadow-xl"
              >
                Nous contacter
              </a>

              <a
                href="https://abdulrahman-adam.com"
                className="px-8 py-5 border border-white/20 bg-white/10 backdrop-blur-xl text-white font-semibold hover:bg-white/20 transition-all duration-500"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style jsx="true">{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-fadeUp { animation: fadeUp 1s ease forwards; }
        .animate-fadeRight { animation: fadeRight 1s ease forwards; }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}