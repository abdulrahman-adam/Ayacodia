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
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Nos Partenaires
      </h1>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partenaires.map((p, index) => (
          <a
            key={index}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center hover:-translate-y-2"
          >
            {/* Image */}
            <div className="w-full h-40 flex items-center justify-center mb-4">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-32 object-contain"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-800">
              {p.name}
            </h3>

            {/* Link text */}
            <p className="text-sm text-gray-500 mt-2">
              Visiter le site →
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartenaireList;