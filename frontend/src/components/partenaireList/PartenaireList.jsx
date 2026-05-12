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
    <div className="min-h-screen bg-gray-50 py-16 px-4 flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-gray-900">
          Nos Partenaires
        </h1>
        <div className="w-12 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Grid/Flex Container */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4 sm:gap-8">
        {partenaires.map((p, index) => (
          <a
            key={index}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 flex flex-col items-center text-center hover:-translate-y-2 w-[46%] sm:w-[280px]"
          >
            {/* Logo Container */}
            <div className="w-full h-20 sm:h-32 flex items-center justify-center mb-4 bg-gray-50/50 rounded-xl group-hover:bg-white transition-colors duration-500">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-10 sm:max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
              />
            </div>

            {/* Partner Name - Reduced for Mobile */}
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-gray-800 line-clamp-1">
              {p.name}
            </h3>

            {/* Call to action */}
            <span className="text-[9px] font-bold uppercase text-indigo-600 mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Découvrir →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartenaireList;