import React, { useEffect, useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ayacodia-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("ayacodia-cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("ayacodia-cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] px-4 sm:px-8 pb-4 sm:pb-6">
      
      <div className="max-w-6xl mx-auto bg-[#020617]/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between animate-fadeUp">

        {/* TEXT */}
        <div className="text-sm sm:text-base text-gray-200 leading-relaxed">
          <p className="font-semibold text-white mb-1">
            🍪 AYACODIA utilise des cookies
          </p>

          <p className="text-gray-400">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site,
            personnaliser les contenus et analyser notre trafic.
            <br />
            Ces données sont <span className="text-white font-semibold">strictement anonymes</span> et ne sont jamais revendues.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

          <button
            onClick={refuse}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition"
          >
            Refuser
          </button>

          <button
            onClick={accept}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:scale-105 transition"
          >
            Accepter
          </button>

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeUp {
          animation: fadeUp 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;