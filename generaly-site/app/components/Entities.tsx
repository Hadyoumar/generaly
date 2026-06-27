import {
  Briefcase,
  Cpu,
  Leaf,
  ShoppingCart,
  Factory,
  Truck,
  Building2,
  Zap,
  Landmark,
  HeartPulse,
  GraduationCap,
  Megaphone,
} from "lucide-react";

const entities = [
  {
    icon: Briefcase,
    name: "SERVICES",
    description:
      "Conseil stratégique, accompagnement des organisations et solutions professionnelles.",
  },
  {
    icon: Cpu,
    name: "TECHNOLOGIES",
    description:
      "Innovation numérique, intelligence artificielle, logiciels et télécommunications.",
  },
  {
    icon: Leaf,
    name: "AGRICULTURE",
    description:
      "Production, transformation et développement des activités agricoles.",
  },
  {
    icon: ShoppingCart,
    name: "COMMERCE",
    description:
      "Distribution, négoce, commerce national et international.",
  },
  {
    icon: Factory,
    name: "INDUSTRIES",
    description:
      "Production industrielle, textile et activités manufacturières.",
  },
  {
    icon: Truck,
    name: "TRANSPORT",
    description:
      "Transport, logistique, mobilité et gestion des flux.",
  },
  {
    icon: Building2,
    name: "IMMOBILIER",
    description:
      "Promotion, investissement et gestion d'actifs immobiliers.",
  },
  {
    icon: Zap,
    name: "ÉNERGIE",
    description:
      "Énergie, infrastructures et solutions énergétiques.",
  },
  {
    icon: Landmark,
    name: "FINANCE",
    description:
      "Finance, investissement et ingénierie financière.",
  },
  {
    icon: HeartPulse,
    name: "SANTÉ",
    description:
      "Solutions et services dédiés au secteur de la santé.",
  },
  {
    icon: GraduationCap,
    name: "ÉDUCATION",
    description:
      "Formation, enseignement et développement des compétences.",
  },
  {
    icon: Megaphone,
    name: "MÉDIAS",
    description:
      "Communication, médias, production de contenus et image.",
  },
];

export default function Entities() {
  return (
    <section className="bg-[#f7f5ef] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f3d91]">
          Notre démarche
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          Une organisation structurée autour de pôles spécialisés.
        </h2>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-black/60">
          Nous disposons de pôles dédiés à des domaines d'activité précis 
          afin de mobiliser les compétences et les expertises adaptées à chaque
          projet. 
          .
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {entities.map((entity) => {
            const Icon = entity.icon;

            return (
              <div
                key={entity.name}
                className="group rounded-3xl border border-black/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-[#0f3d91] hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f3d91]/10 text-[#0f3d91]">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold">
                  {entity.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/60">
                  {entity.description}
                </p>

                <div className="mt-8 text-sm font-semibold text-[#0f3d91] transition group-hover:translate-x-1">
                  Découvrir →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}