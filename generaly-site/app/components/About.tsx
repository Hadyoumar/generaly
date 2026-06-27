const items = [
  ["Notre mission", "Développer des activités créatrices de valeur."],
  ["Notre vision", "Construire un groupe diversifié, solide et durable."],
  ["Notre approche", "Mobiliser les expertises nécessaires pour accompagner chaque projet."],
  ["Nos engagements", "Excellence, intégrité, innovation et responsabilité."],
];

export default function About() {
  return (
    <section id="groupe" className="bg-white px-5 py-20 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
          Une vision commune au service d&apos;activités diversifiées.
        </h2>

        <p className="mt-6 max-w-4xl text-base leading-8 text-black/60 md:mt-8 md:text-lg">
          GENERALY réunit et développe des activités dans plusieurs secteurs
          stratégiques. Son organisation permet de mobiliser des compétences
          complémentaires pour concevoir, structurer et accompagner des projets
          avec exigence, efficacité et responsabilité.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {items.map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-black/10 bg-[#f7f5ef] p-6 md:p-7"
            >
              <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}