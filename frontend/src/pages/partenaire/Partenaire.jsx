import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import PartenaireList from "../../components/partenaireList/PartenaireList";

const Partenaire = () => {
  const { createPartenaire } = useAppContext();

  const [formData, setFormData] = useState({
    companyName: "",
    siret: "",
    profession: "",
    contactEmail: "",
    description: "",
  });

  const validateForm = () => {
    const { companyName, siret, profession, contactEmail, description } = formData;
    const siretRegex = /^\d{14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (companyName.length < 2) {
      toast.error("Nom de l'entreprise invalide.");
      return false;
    }
    if (!siretRegex.test(siret)) {
      toast.error("Le SIRET doit contenir exactement 14 chiffres.");
      return false;
    }
    if (profession.length < 3) {
      toast.error("Veuillez préciser votre secteur d'activité.");
      return false;
    }
    if (!emailRegex.test(contactEmail)) {
      toast.error("Email de contact invalide.");
      return false;
    }
    if (description.length < 20) {
      toast.error("Veuillez décrire brièvement votre projet (min. 20 caractères).");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const loadingToast = toast.loading("Envoi de votre candidature...");
    const success = await createPartenaire(formData);
    toast.dismiss(loadingToast);

    if (success) {
      setFormData({
        companyName: "",
        siret: "",
        profession: "",
        contactEmail: "",
        description: "",
      });
    }
  };

  return (
    <div 
      style={{ margin: '1px auto' }}
      className="max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 rounded-3xl md:rounded-[2.5rem] py-8 md:py-16 overflow-hidden relative shadow-2xl bg-[#020617] text-white"
    >
      {/* BACKGROUND MAGIC SHAPES */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-200/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* LEFT SECTION - TEXT & BENEFITS */}
        <div className="space-y-8 md:space-y-12 animate-fadeInLeft">
          <div className="text-center lg:text-left transition-all duration-700">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 leading-tight hover:scale-[1.02] transition-transform cursor-default">
              Devenir Partenaire
            </h2>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
              Rejoignez notre réseau et développez votre activité. Nous recherchons des partenaires passionnés pour une collaboration <span className="text-indigo-600 font-bold underline decoration-indigo-200 underline-offset-4">durable</span>.
            </p>
          </div>

          {/* Responsive Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: "bi-graph-up-arrow", title: "Croissance", desc: "Boostez votre visibilité", delay: "0.1s" },
              { icon: "bi-shield-check", title: "Fiabilité", desc: "Paiements sécurisés", delay: "0.2s" },
              { icon: "bi-people", title: "Support", desc: "Équipe dédiée 7j/7", delay: "0.3s" },
              { icon: "bi-lightning-charge", title: "Rapidité", desc: "Activation en 48h", delay: "0.4s" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group animate-float"
                style={{ animationDelay: item.delay }}
              >
                <div style={{ marginTop: '1px', marginBottom: '1px', marginLeft: 'auto', marginRight: 'auto' }}
                 className="text-center w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                  <i className={`bi ${item.icon} text-xl`}></i>
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION - APPLICATION FORM */}
        <div className="bg-white/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl md:rounded-[3rem] border border-white shadow-2xl animate-slideUp relative group/form">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-[3rem] pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            
            <div className="space-y-2 group">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-indigo-500 ml-1 group-focus-within:text-indigo-700 transition-colors">
                Nom de l'Entreprise
              </label>
              <input
                type="text"
                placeholder="Ex: Ayacodia"
                className="w-full p-4 rounded-xl md:rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none bg-gray-50/50 transition-all hover:ring-indigo-200"
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                value={formData.companyName}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-indigo-500 ml-1">
                  N° SIRET
                </label>
                <input
                  type="text"
                  maxLength="14"
                  placeholder="14 chiffres"
                  className="w-full p-4 rounded-xl md:rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none bg-gray-50/50 transition-all"
                  onChange={(e) => setFormData({ ...formData, siret: e.target.value })}
                  value={formData.siret}
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-indigo-500 ml-1">
                  Secteur d'Activité
                </label>
                <input
                  type="text"
                  placeholder="Ex: Logistique"
                  className="w-full p-4 rounded-xl md:rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none bg-gray-50/50 transition-all"
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  value={formData.profession}
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-indigo-500 ml-1">
                Email Professionnel
              </label>
              <input
                type="email"
                placeholder="contact@entreprise.com"
                className="w-full p-4 rounded-xl md:rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none bg-gray-50/50 transition-all"
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                value={formData.contactEmail}
              />
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-indigo-500 ml-1">
                Pourquoi nous rejoindre ?
              </label>
              <textarea
                rows="4"
                placeholder="Décrivez votre motivation..."
                className="w-full p-4 rounded-xl md:rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none bg-gray-50/50 transition-all resize-none"
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                value={formData.description}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 relative overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-700 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg tracking-widest hover:shadow-[0_20px_40px_rgba(79,70,229,0.4)] shadow-lg hover:-translate-y-1 transition-all active:scale-95 group/btn"
            >
              <div className="flex items-center justify-center gap-3 relative z-10">
                <i className="bi bi-rocket-takeoff-fill group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
                SOUMETTRE
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </button>
          </form>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-slideUp { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>

      <PartenaireList />
    </div>
  );
};

export default Partenaire;