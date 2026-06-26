import Image from "next/image";

const activities = [
  "Services",
  "Technologies",
  "Agriculture",
  "Commerce",
  "Industries",
  "Transport",
  "Immobilier",
  "Énergie",
  "Finance",
  "Santé",
  "Éducation",
  "Médias",
];

export default function Hero() {
  return (
    <section className="bg-[#f7f5ef] px-6 pt-24 pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Colonne gauche */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0f3d91]">
            GENERALY GROUPE
          </p>

          <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Créer de l'impact, durablement.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
            GENERALY GROUPE rassemble des sociétés spécialisées dans plusieurs
            secteurs stratégiques afin de développer des activités
            complémentaires, accompagner des projets et créer une valeur
            durable.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#activites"
              className="rounded-full bg-[#111111] px-8 py-4 font-semibold text-white transition hover:bg-[#0f3d91]"
            >
              Découvrir nos activités
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black/15 px-8 py-4 font-semibold transition hover:border-[#0f3d91] hover:text-[#0f3d91]"
            >
              Nous contacter
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {activities.map((activity) => (
              <span
                key={activity}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>

        {/* Colonne droite */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15">
            <Image
              src="/images/hero.jpg"
              alt="GENERALY GROUPE"
              width={900}
              height={700}
              priority
              className="h-[600px] w-full object-cover"
            />
          </div>

          {/* Carte flottante */}
          <div className="absolute -bottom-8 left-8 rounded-3xl bg-white p-8 shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f3d91]">
              Notre vision
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Développer des activités complémentaires.
            </h3>

            <p className="mt-4 max-w-xs leading-7 text-black/60">
              Une organisation construite autour d'une vision commune, de
              compétences complémentaires et d'une création de valeur durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}