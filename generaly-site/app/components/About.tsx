const items = [
  ["Notre mission", "Développer des activités créatrices de valeur."],
  ["Notre vision", "Construire un groupe diversifié, solide et durable."],
  ["Notre approche", "Mobiliser les expertises nécessaires pour accompagner chaque projet."],
  ["Nos engagements", "Excellence, intégrité, innovation et responsabilité."],
];

export default function About() {
  return (
    <section id="groupe" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f3d91]">
          Le Groupe
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          Une vision commune au service d&apos;activités diversifiées.
        </h2>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-black/60">
          GENERALY GROUPE réunit et développe des activités dans plusieurs
          secteurs stratégiques. Son organisation permet de mobiliser des
          compétences complémentaires pour concevoir, structurer et accompagner
          des projets avec exigence, efficacité et responsabilité.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {items.map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-black/10 bg-[#f7f5ef] p-7">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}