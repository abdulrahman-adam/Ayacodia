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

  const technologies = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "React Native",
    "Docker",
    "Stripe",
    "Firebase",
  ];

  return (
    <div className="bg-[#020617] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse"></div>

          <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full animate-pulse delay-1000"></div>

          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="animate-fadeUp text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-indigo-300 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              AYACODIA • Agence Digitale
            </div>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Créons votre
              <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                futur digital.
              </span>
            </h1>

            <p className="mt-8 text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              AYACODIA accompagne les entreprises avec des solutions digitales
              modernes : applications web, applications mobiles, plateformes
              e-commerce et systèmes intelligents.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a
                href="/contact"
                className="group relative overflow-hidden rounded-2xl px-8 py-5 font-bold text-white transition-all duration-500"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-600"></span>

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500 to-indigo-500 blur-xl"></span>

                <span className="relative z-10 flex items-center gap-3 tracking-wide">
                  Démarrer un projet
                  <i className="bi bi-arrow-right text-xl group-hover:translate-x-1 transition duration-300"></i>
                </span>
              </a>

              <a
                href="/services"
                className="px-8 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 font-semibold text-gray-200"
              >
                Découvrir nos services
              </a>
            </div>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:-translate-y-2 transition-all duration-500"
                >
                  <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-gray-400 text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative animate-fadeRight">
            <div className="relative rounded-[40px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_80px_rgba(79,70,229,0.2)]">
              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full"></div>

              <img
                src="/logo.png"
                alt="AYACODIA"
                className="relative z-10 w-full max-w-md mx-auto object-contain drop-shadow-[0_0_35px_rgba(99,102,241,0.4)] animate-float"
              />

              <div className="relative z-10 mt-10 grid grid-cols-2 gap-4">
                {[
                  "Performance",
                  "Sécurité",
                  "Responsive",
                  "Innovation",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center text-sm font-semibold text-gray-200 hover:bg-white/[0.08] transition duration-500"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">
              Nos Services
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl font-black leading-tight">
              Des solutions digitales
              <span className="block text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text">
                pensées pour votre croissance.
              </span>
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:-translate-y-3 transition-all duration-700"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 transition duration-700"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition duration-500 mx-auto sm:mx-0">
                    <i className={`bi ${service.icon} text-white text-2xl flex items-center justify-center leading-none`}></i>
                  </div>

                  <h3 className="mt-8 text-2xl font-black text-white text-center sm:text-left">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-gray-400 leading-relaxed text-center sm:text-left">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 sm:p-16 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full"></div>

            <div className="relative z-10 text-center">
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm">
                Technologies
              </span>

              <h2 className="mt-6 text-4xl sm:text-5xl font-black">
                Stack moderne & performante
              </h2>

              <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                Nous utilisons les meilleures technologies pour développer des
                produits rapides, évolutifs et sécurisés.
              </p>

              <div className="mt-14 flex flex-wrap justify-center gap-5">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.05] text-gray-200 font-semibold hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all duration-500"
                  >
                    {tech}
                  </div>
                ))}
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
              Vous avez un projet ?
            </h2>

            <p className="mt-8 text-white/80 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
              Créons ensemble une solution digitale puissante qui transforme vos
              idées en résultats concrets.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
              <a
                href="/contact"
                className="px-8 py-5 rounded-2xl bg-white text-indigo-700 font-black hover:scale-105 transition-all duration-500"
              >
                Nous contacter
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

        .animate-fadeRight {
          animation: fadeRight 1s ease forwards;
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
