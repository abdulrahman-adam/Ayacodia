import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/about" },
        { name: "Nos Services", href: "/services" },
        { name: "Carrières", href: "/careers" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Applications Web", href: "/web-development" },
        { name: "Applications Mobile", href: "/mobile-development" },
        { name: "UI/UX Design", href: "/design" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Confidentialité", href: "/privacy-policy" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white border-t border-indigo-500/10">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] left-[-120px] w-[350px] h-[350px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-180px] right-[-100px] w-[420px] h-[420px] bg-blue-500/10 blur-[140px] rounded-full animate-pulse delay-1000"></div>

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* BRAND SECTION */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* LOGO */}
            <a href="/" className="group relative inline-block">
              <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition duration-700"></div>

              <img
                src="/logo.png"
                alt="AYACODIA"
                className="relative z-10 w-[240px] sm:w-[280px] md:w-[320px] object-contain drop-shadow-[0_0_25px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-all duration-500"
              />
            </a>

            {/* DESCRIPTION */}
            <p className="mt-8 text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
              Nous développons des applications web et mobiles modernes,
              performantes et sécurisées pour accompagner les entreprises dans
              leur transformation digitale.
            </p>

            {/* TAGS */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-semibold text-indigo-300 hover:scale-105 transition duration-300">
                Développement Web
              </div>

              <div className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-semibold text-indigo-300 hover:scale-105 transition duration-300">
                Mobile Apps
              </div>

              <div className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-semibold text-indigo-300 hover:scale-105 transition duration-300">
                Solutions Entreprises
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-10">
              {[
                { icon: "linkedin", link: "#" },
                { icon: "github", link: "#" },
                { icon: "instagram", link: "#" },
                { icon: "twitter-x", link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="group relative w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <i
                    className={`bi bi-${social.icon} relative z-10 text-lg text-gray-300 group-hover:text-white transition duration-300`}
                  ></i>
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-3">
            {/* KEEP IN ONE LINE ON MOBILE */}
            <div className="grid grid-cols-3 gap-4 sm:gap-10">
              {footerSections.map((section, index) => (
                <div
                  key={index}
                  className="animate-footerUp"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.15em] text-white mb-5 flex items-center justify-center sm:justify-start">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 shadow-[0_0_20px_rgba(99,102,241,1)]"></span>
                    {section.title}
                  </h3>

                  <ul className="space-y-3 text-center sm:text-left">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.href}
                          className="group inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 text-[11px] sm:text-sm"
                        >
                          <span className="hidden sm:block w-0 group-hover:w-4 h-[1px] bg-indigo-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>

                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      
        {/* BOTTOM */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-indigo-400">AYACODIA</span>. Tous
            droits réservés.
          </p>

          <div className="flex items-center gap-5 text-gray-500 text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Montgeron, France
            </span>

            <span className="hidden sm:block">•</span>

            <span>Applications Web & Mobile</span>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx="true">{`
        @keyframes footerUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-footerUp {
          opacity: 0;
          animation: footerUp 0.8s ease forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;