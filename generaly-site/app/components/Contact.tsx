import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f7f5ef] px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0f3d91]">
            
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Échangeons.
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/60">
            Nos équipes sont à votre disposition pour toute demande
            d'information, de partenariat, de collaboration ou de
            développement de projet.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">

          {/* Colonne gauche */}

          <div className="rounded-[2rem] bg-[#111111] p-10 text-white">

            <h3 className="text-3xl font-semibold">
              GENERALY GROUPE
            </h3>

            <p className="mt-6 leading-8 text-white/65">
              Nous développons des activités complémentaires
              dans plusieurs secteurs stratégiques.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex gap-5">
                <Mail className="mt-1 text-[#5d8cff]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white/60">
                    contact@generaly.net
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="mt-1 text-[#5d8cff]" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-white/60">
                    +33 7 53 20 41 36
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="mt-1 text-[#5d8cff]" />
                <div>
                  <p className="font-semibold">
                    Siège social
                  </p>
                  <p className="text-white/60">
                    60 RUE FRANCOIS IER, 75008, PARIS
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Building2 className="mt-1 text-[#5d8cff]" />
                <div>
                  <p className="font-semibold">
                    Activités
                  </p>

                  <p className="text-white/60">
                    12 secteurs stratégiques
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Formulaire */}

          <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-xl shadow-black/5">

            <div className="grid gap-6 md:grid-cols-2">

              <input
                placeholder="Nom"
                className="rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#0f3d91]"
              />

              <input
                placeholder="Entreprise"
                className="rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#0f3d91]"
              />

            </div>

            <input
              placeholder="Adresse e-mail"
              className="mt-6 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#0f3d91]"
            />

            <input
              placeholder="Objet"
              className="mt-6 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#0f3d91]"
            />

            <textarea
              placeholder="Votre message..."
              className="mt-6 min-h-52 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none transition focus:border-[#0f3d91]"
            />

            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#111111] px-8 py-4 font-semibold text-white transition hover:bg-[#0f3d91]">

              Envoyer le message

              <Send size={18} />

            </button>

          </div>

        </div>
      </div>
    </section>
  );
}