import React from "react";

const partenaires = [
  {
    name: "Oumabarar",
    image: "/oumabarar.jpeg",
    url: "https://www.oumabarar.com",
  },
  {
    name: "Wehda",
    image: "/wehda.png",
    url: "https://www.wehda.fr",
  },
  {
    name: "FancyMarcket",
    image: "/fancymarcket.png",
    url: "https://www.fancymarcket.com",
  },
];

const PartenaireList = () => {
  return (
    /* J'ajoute dark:!bg-[#020617] pour écraser ton .dark body de l'index.css */
    <div className="min-h-screen bg-gray-50 dark:!bg-[#020617] py-20 px-6 flex flex-col items-center justify-center transition-colors duration-700 ease-in-out">
      
      {/* Title Section */}
      <div className="text-center mb-20 flex flex-col items-center">
        {/* Le !text-white est CRITIQUE ici pour battre ton .dark h1 !important */}
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 dark:!text-white transition-colors duration-500">
          Nos Partenaires
        </h1>
        <div className="w-16 h-1.5 bg-indigo-500 mt-4 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]"></div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-6 sm:gap-10">
        {partenaires.map((p, index) => (
          <a
            key={index}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            /* On force le bg de la carte pour battre le .dark .bg-white de ton CSS */
            className="group relative bg-white dark:!bg-white/[0.03] rounded-[32px] border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-700 p-6 sm:p-10 flex flex-col items-center text-center hover:-translate-y-3 w-[45%] sm:w-[300px]"
          >
            {/* Logo Container */}
            <div className="w-full h-24 sm:h-36 flex items-center justify-center mb-6 bg-gray-50/50 dark:!bg-white/5 rounded-2xl group-hover:bg-white dark:group-hover:bg-indigo-500/10 transition-all duration-500">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-12 sm:max-h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 dark:opacity-90 group-hover:opacity-100 dark:brightness-110"
              />
            </div>

            {/* Partner Name : Le !text-gray-200 force la couleur face au CSS index */}
            <h3 className="text-[11px] sm:text-sm font-black uppercase tracking-[0.25em] text-gray-800 dark:!text-gray-200 transition-colors duration-500">
              {p.name}
            </h3>

            {/* Call to action */}
            <div className="overflow-hidden h-6 mt-2">
              <span className="block text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Découvrir →
              </span>
            </div>

            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-indigo-500/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartenaireList;