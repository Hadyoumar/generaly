import { Mail, Phone, MapPin, Building2, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f7f5ef] px-5 py-20 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl md:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
            Échangeons.
          </h2>

          <p className="mt-5 text-base leading-8 text-black/60 md:mt-6 md:text-lg">
            Nos équipes sont à votre disposition pour toute demande
            d&apos;information, de partenariat, de collaboration ou de
            développement de projet.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_1fr] lg:gap-10">
          <div className="rounded-[1.5rem] bg-[#111111] p-6 text-white md:rounded-[2rem] md:p-10">
            <h3 className="text-2xl font-semibold md:text-3xl">
              GENERALY
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/65 md:mt-6 md:text-base md:leading-8">
              Nous développons des activités complémentaires dans plusieurs
              secteurs stratégiques.
            </p>

            <div className="mt-8 space-y-6 md:mt-12 md:space-y-8">
              <div className="flex gap-4 md:gap-5">
                <Mail className="mt-1 shrink-0 text-[#5d8cff]" size={22} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="break-all text-sm text-white/60 md:text-base">
                    contact@generaly.net
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-5">
                <Phone className="mt-1 shrink-0 text-[#5d8cff]" size={22} />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-sm text-white/60 md:text-base">
                    +33 7 53 20 41 36
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-5">
                <MapPin className="mt-1 shrink-0 text-[#5d8cff]" size={22} />
                <div>
                  <p className="font-semibold">Siège social</p>
                  <p className="text-sm leading-7 text-white/60 md:text-base">
                    60 rue François Ier, 75008 Paris
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-5">
                <Building2 className="mt-1 shrink-0 text-[#5d8cff]" size={22} />
                <div>
                  <p className="font-semibold">Activités</p>
                  <p className="text-sm text-white/60 md:text-base">
                    12 secteurs stratégiques
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-xl shadow-black/5 md:rounded-[2rem] md:p-10">
            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              <input
                placeholder="Nom"
                className="w-full rounded-2xl border border-black/10 px-5 py-4 text-base outline-none transition focus:border-[#0f3d91]"
              />

              <input
                placeholder="Entreprise"
                className="w-full rounded-2xl border border-black/10 px-5 py-4 text-base outline-none transition focus:border-[#0f3d91]"
              />
            </div>

            <input
              placeholder="Adresse e-mail"
              className="mt-4 w-full rounded-2xl border border-black/10 px-5 py-4 text-base outline-none transition focus:border-[#0f3d91] md:mt-6"
            />

            <input
              placeholder="Objet"
              className="mt-4 w-full rounded-2xl border border-black/10 px-5 py-4 text-base outline-none transition focus:border-[#0f3d91] md:mt-6"
            />

            <textarea
              placeholder="Votre message..."
              className="mt-4 min-h-40 w-full rounded-2xl border border-black/10 px-5 py-4 text-base outline-none transition focus:border-[#0f3d91] md:mt-6 md:min-h-52"
            />

            <button className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#111111] px-8 py-4 font-semibold text-white transition hover:bg-[#0f3d91] md:mt-8 md:w-auto">
              Envoyer le message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}