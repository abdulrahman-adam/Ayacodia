import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const validateForm = () => {
    const { name, email, telephone, message } = formData;

    const nameRegex = /^[a-zA-ZÀ-ÿ]{2,}\s+[a-zA-ZÀ-ÿ]{2,}/;
    const phoneRegex = /^[0-9+ ]{8,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      toast.error("Veuillez entrer votre prénom et nom.");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Adresse email invalide.");
      return false;
    }

    if (!phoneRegex.test(telephone)) {
      toast.error("Numéro de téléphone invalide.");
      return false;
    }

    if (message.length < 10) {
      toast.error("Votre message est trop court.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const loadingToast = toast.loading("Envoi du message...");

    try {
      const { data } = await axios.post(
        "/api/contact/send",
        formData
      );

      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success(data.message);

        setFormData({
          name: "",
          email: "",
          telephone: "",
          message: "",
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Erreur serveur.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#020617] py-16 sm:py-24">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] left-[-120px] w-[350px] h-[350px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-180px] right-[-100px] w-[450px] h-[450px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse delay-1000"></div>

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="text-center mb-16 animate-fadeUp">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-indigo-300 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            AYACODIA • Agence Digitale
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white">
            Donnez vie à vos
            <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              projets digitaux.
            </span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Applications web, plateformes e-commerce, applications mobiles,
            solutions métiers et accompagnement digital.
            <span className="text-white font-semibold">
              {" "}
              AYACODIA transforme vos idées en expériences modernes et performantes.
            </span>
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="animate-fadeLeft">
            {/* CARD */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 sm:p-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full"></div>

              {/* LOGO */}
              <div className="text-center relative z-10">
                <img
                  src="/logo.png"
                  alt="AYACODIA"
                  className="mx-auto w-[220px] sm:w-[280px] object-contain drop-shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105 transition duration-500"
                />

                <h2 className="mt-10 text-3xl sm:text-4xl font-black text-white leading-tight">
                  Une équipe dédiée à votre réussite digitale.
                </h2>

                <p className="mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
                  Nous accompagnons les entreprises, startups et commerces dans
                  la création de solutions modernes, rapides et sécurisées.
                  Notre mission est de construire des plateformes élégantes,
                  performantes et pensées pour la croissance.
                </p>

                {/* FEATURES */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "bi-window",
                      title: "Applications Web",
                    },
                    {
                      icon: "bi-phone",
                      title: "Applications Mobile",
                    },
                    {
                      icon: "bi-cart",
                      title: "E-commerce",
                    },
                    {
                      icon: "bi-lightning",
                      title: "Solutions Performantes",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition duration-500 block mx-auto">
                        <i className={`bi ${item.icon} text-white text-xl`}></i>
                      </div>

                      <h3 className="mt-4 text-white font-bold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* CONTACT INFO */}
                <div className="mt-10 space-y-5">
                  <a
                    href="mailto:info@ayacodia.com"
                    className="group flex items-center gap-5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                      <i className="bi bi-envelope-fill text-xl"></i>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="text-white font-semibold group-hover:text-indigo-300 transition">
                        info@ayacodia.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/zx4vu5CTeVUuf15h6"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                      <i className="bi bi-geo-alt-fill text-xl"></i>
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Adresse</p>
                      <p className="text-white font-semibold group-hover:text-indigo-300 transition">
                        68 bis Rue jean mermoz 91230 Montgeron
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* MAP */}
            
          </div>

          {/* RIGHT SIDE */}
          <div className="animate-fadeRight">
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 sm:p-10 lg:p-12 shadow-[0_20px_80px_rgba(79,70,229,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/5 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="text-center inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-[0.2em]">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Contact Rapide
                </div>

                <h2 className="text-center mt-6 text-3xl sm:text-5xl font-black text-white leading-tight">
                  Parlons de votre projet.
                </h2>

                <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed">
                  Décrivez votre besoin et notre équipe vous répondra rapidement
                  avec une solution adaptée à votre activité.
                </p>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="text-xs uppercase tracking-[0.2em] text-indigo-300 font-bold">
                        Nom complet
                      </label>

                      <input
                        type="text"
                        placeholder="Prénom Nom"
                        className="mt-3 w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-indigo-500 focus:bg-white/[0.08] transition-all duration-300"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="group">
                      <label className="text-xs uppercase tracking-[0.2em] text-indigo-300 font-bold">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="email@domaine.com"
                        className="mt-3 w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-indigo-500 focus:bg-white/[0.08] transition-all duration-300"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-indigo-300 font-bold">
                      Téléphone
                    </label>

                    <input
                      type="tel"
                      placeholder="+33 1 23 45 67 89"
                      className="mt-3 w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-indigo-500 focus:bg-white/[0.08] transition-all duration-300"
                      value={formData.telephone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          telephone: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-indigo-300 font-bold">
                      Message
                    </label>

                    <textarea
                      rows="6"
                      placeholder="Parlez-nous de votre projet..."
                      className="mt-3 w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-indigo-500 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="group relative overflow-hidden rounded-2xl py-5 font-black tracking-[0.2em] text-white"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-600"></span>

                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500 to-indigo-500 blur-xl"></span>

                    <span className="relative z-10 flex items-center justify-center gap-3 text-sm sm:text-base">
                      ENVOYER LE MESSAGE
                      <i className="bi bi-arrow-right text-xl group-hover:translate-x-1 transition duration-300"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-fadeUp {
          animation: fadeUp 0.9s ease forwards;
        }

        .animate-fadeLeft {
          animation: fadeLeft 1s ease forwards;
        }

        .animate-fadeRight {
          animation: fadeRight 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;