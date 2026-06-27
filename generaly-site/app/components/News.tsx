import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "Diversification",
    text: "Développer des activités complémentaires afin de créer des synergies durables entre plusieurs secteurs stratégiques.",
  },
  {
    title: "Création de valeur",
    text: "Concevoir, structurer et accompagner des projets capables de produire une croissance durable et responsable.",
  },
  {
    title: "Vision long terme",
    text: "Construire un groupe solide en privilégiant la stabilité, la qualité des réalisations et le développement progressif.",
  },
];

export default function Development() {
  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0f3d91]">
          Notre développement
        </p>

        <h2 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Une croissance guidée par une vision durable.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
          GENERALY développe ses activités avec une approche fondée sur
          la complémentarité, la création de valeur et la recherche permanente
          de solutions adaptées aux besoins de ses partenaires.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-black/10 bg-[#f7f5ef] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-black/60">
                {item.text}
              </p>

              <div className="mt-10 flex items-center gap-2 font-semibold text-[#0f3d91]">
                En savoir plus
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}