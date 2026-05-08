import React from "react";


const Services = () => {
  const services = [
    {
      title: "Développement Web",
      icon: "bi-window",
      description:
        "Création d'applications web modernes, performantes et sécurisées adaptées à votre activité.",
      features: [
        "React & Next.js",
        "Node.js & APIs",
        "Dashboard Admin",
        "Architecture scalable",
      ],
    },
    {
      title: "Applications Mobile",
      icon: "bi-phone",
      description:
        "Applications Android & iOS fluides avec une expérience utilisateur premium.",
      features: [
        "React Native",
        "Applications hybrides",
        "Notifications push",
        "Publication Stores",
      ],
    },
    {
      title: "E-Commerce",
      icon: "bi-cart3",
      description:
        "Boutiques en ligne professionnelles optimisées pour les ventes et les performances.",
      features: [
        "Paiements Stripe",
        "Gestion commandes",
        "SEO optimisé",
        "Responsive design",
      ],
    },
    {
      title: "UI / UX Design",
      icon: "bi-palette",
      description:
        "Interfaces modernes et intuitives pensées pour vos utilisateurs.",
      features: [
        "Design moderne",
        "Expérience utilisateur",
        "Animations premium",
        "Prototype Figma",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "bi-cloud",
      description:
        "Déploiement sécurisé et infrastructure cloud performante.",
      features: [
        "Docker",
        "CI/CD",
        "VPS & Cloud",
        "Monitoring",
      ],
    },
    {
      title: "Maintenance & Support",
      icon: "bi-shield-check",
      description:
        "Support technique et maintenance continue pour garantir la stabilité.",
      features: [
        "Corrections bugs",
        "Mises à jour",
        "Optimisation",
        "Support rapide",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Analyse",
      text: "Nous analysons vos besoins et objectifs afin de proposer la meilleure solution.",
    },
    {
      step: "02",
      title: "Conception",
      text: "Création d'une architecture moderne avec une expérience utilisateur premium.",
    },
    {
      step: "03",
      title: "Développement",
      text: "Développement rapide, sécurisé et optimisé avec les dernières technologies.",
    },
    {
      step: "04",
      title: "Déploiement",
      text: "Mise en production, optimisation et accompagnement continu.",
    },
  ];

  return (
    <div className="bg-[#020617] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse"></div>

          <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full animate-pulse delay-1000"></div>

          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-indigo-300 text-xs sm:text-sm font-semibold tracking-widest uppercase animate-fadeUp">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            AYACODIA • Services
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight animate-fadeUp">
            Des services digitaux
            <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              puissants & modernes.
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed animate-fadeUp">
            AYACODIA accompagne les entreprises, startups et commerces avec des
            solutions digitales modernes, performantes et évolutives.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 hover:-translate-y-3 hover:border-indigo-500/30 transition-all duration-700"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 transition duration-700"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-[0_10px_30px_rgba(79,70,229,0.4)] group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                    <i className={`bi ${service.icon} text-white text-2xl flex items-center justify-center leading-none`}></i>
                  </div>

                  <h2 className="mt-8 text-3xl font-black text-white leading-tight">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-8 space-y-4">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 text-gray-300"
                      >
                        <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                          <i className="bi bi-check-lg"></i>
                        </div>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-10 group/button relative overflow-hidden rounded-2xl px-6 py-4 font-bold text-white transition-all duration-500 w-full">
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-600"></span>

                    <span className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500 to-indigo-500 blur-xl"></span>

                    <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
                      En savoir plus
                      <i className="bi bi-arrow-right text-xl group-hover/button:translate-x-1 transition duration-300"></i>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">
              Notre Process
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl font-black leading-tight">
              Une méthode claire
              <span className="block text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text">
                pour des résultats excellents.
              </span>
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-6xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text opacity-70">
                  {item.step}
                </div>

                <h3 className="mt-6 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 sm:p-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[140px] rounded-full"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">
                Pourquoi AYACODIA ?
              </span>

              <h2 className="mt-6 text-4xl sm:text-5xl font-black leading-tight">
                Nous créons des expériences
                <span className="block text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text">
                  digitales premium.
                </span>
              </h2>

              <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                Notre équipe développe des solutions modernes avec des designs
                élégants, des performances optimisées et une sécurité avancée.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  "Design moderne",
                  "Haute performance",
                  "Responsive mobile",
                  "Support rapide",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white">
                      <i className="bi bi-check-lg"></i>
                    </div>

                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-2xl p-8 sm:p-10 shadow-[0_20px_80px_rgba(79,70,229,0.2)]">
                <img
                  src="/logo.png"
                  alt="AYACODIA"
                  className="w-full max-w-sm mx-auto object-contain animate-float drop-shadow-[0_0_35px_rgba(99,102,241,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-600 to-blue-700 p-10 sm:p-16 text-center shadow-[0_20px_80px_rgba(79,70,229,0.4)]">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Prêt à transformer votre idée ?
            </h2>

            <p className="mt-8 text-white/80 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
              Créons ensemble une solution digitale moderne qui aide votre
              entreprise à grandir rapidement.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
              <a
                href="/contact"
                className="px-8 py-5 rounded-2xl bg-white text-indigo-700 font-black hover:scale-105 transition-all duration-500"
              >
                Commencer un projet
              </a>

              <a
                href="https://abdulrahman-adam.com"
                className="px-8 py-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white font-semibold hover:bg-white/20 transition-all duration-500"
              >
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>{`
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

  @keyframes float {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-12px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  .animate-fadeUp {
    animation: fadeUp 1s ease forwards;
  }

  .animate-float {
    animation: float 5s ease-in-out infinite;
  }
`}</style>
    </div>
  );
}


export default Services;