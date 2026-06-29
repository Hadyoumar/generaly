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
    <section className="bg-[#f7f5ef] px-5 pb-16 pt-28 md:px-6 md:pb-20 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Colonne gauche */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f3d91] md:text-sm md:tracking-[0.35em]">
            GENERALY GROUPE
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:mt-8 md:text-7xl">
            Créer de l&apos;impact, durablement.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 md:mt-8 md:text-lg">
            GENERALY est une société spécialisée dans plusieurs secteurs
            stratégiques afin de développer des activités complémentaires,
            accompagner des projets et créer une valeur durable.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap md:mt-12 md:gap-4">
            <a
              href="#activites"
              className="rounded-full bg-[#111111] px-7 py-4 text-center font-semibold text-white transition hover:bg-[#0f3d91]"
            >
              Découvrir nos activités
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black/15 px-7 py-4 text-center font-semibold transition hover:border-[#0f3d91] hover:text-[#0f3d91]"
            >
              Nous contacter
            </a>
          </div>

          <div className="mt-8 flex max-h-32 flex-wrap gap-2 overflow-hidden md:mt-12 md:max-h-none md:gap-3">
            {activities.map((activity) => (
              <span
                key={activity}
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs md:px-4 md:text-sm"
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
              className="h-[360px] w-full object-cover sm:h-[440px] md:h-[600px]"
            />
          </div>

          {/* Carte Vision */}
          <div className="mt-6 rounded-3xl bg-white p-6 shadow-2xl md:absolute md:-bottom-8 md:left-8 md:mt-0 md:max-w-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f3d91]">
              Notre vision
            </p>

            <h3 className="mt-3 text-xl font-semibold md:text-2xl">
              Développer des activités complémentaires.
            </h3>

            <p className="mt-4 text-sm leading-7 text-black/60 md:text-base">
              Une organisation construite autour d&apos;une vision commune,
              de compétences complémentaires et d&apos;une création de valeur
              durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}