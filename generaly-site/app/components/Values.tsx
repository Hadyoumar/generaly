import {
  Eye,
  ShieldCheck,
  Trophy,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Vision",
    text: "Construire sur le long terme avec une vision claire et une stratégie durable.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    text: "Rechercher la qualité dans chaque projet, chaque décision et chaque réalisation.",
  },
  {
    icon: ShieldCheck,
    title: "Intégrité",
    text: "Agir avec responsabilité, transparence et respect de nos engagements.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    text: "Encourager les nouvelles idées et développer des solutions adaptées aux enjeux de demain.",
  },
];

export default function Values() {
  return (
    <section className="bg-[#111111] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#5d8cff]">
          Nos valeurs
        </p>

        <h2 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Les principes qui guident chacune de nos actions.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
          Au-delà des secteurs d'activité, GENERALY partage une même
          culture d'entreprise fondée sur l'exigence, la responsabilité,
          l'innovation et la création de valeur durable.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#5d8cff]/40 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5d8cff]/10 text-[#5d8cff]">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-5 leading-7 text-white/60">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}