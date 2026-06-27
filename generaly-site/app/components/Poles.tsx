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

const activities = [
  [Briefcase, "Services", "Conseil stratégique, gestion, expertise, accompagnement opérationnel et solutions professionnelles destinées aux entreprises, aux organisations et aux institutions."],
  [Cpu, "Technologies", "Solutions numériques, logiciels, intelligence artificielle, télécommunications, connectivité et innovation technologique."],
  [Leaf, "Agriculture", "Production agricole, agro-industrie, transformation, commercialisation et développement de projets agricoles durables."],
  [ShoppingCart, "Commerce", "Distribution, négoce, import-export, représentation commerciale et développement des échanges économiques."],
  [Factory, "Industries", "Conception, fabrication, transformation, production industrielle et développement d'activités manufacturières et textiles."],
  [Truck, "Transport / Logistique", "Transport de personnes et de marchandises, logistique, chaîne d'approvisionnement, entreposage et gestion des flux."],
  [Building2, "Immobilier", "Promotion immobilière, construction, aménagement, gestion de patrimoine et développement de projets immobiliers."],
  [Zap, "Énergie", "Solutions énergétiques, infrastructures, énergies renouvelables et optimisation des ressources énergétiques."],
  [Landmark, "Finance", "Services financiers, investissement, financement de projets, conseil financier et gestion d'actifs."],
  [HeartPulse, "Santé", "Services de santé, équipements médicaux, innovation sanitaire et accompagnement des acteurs du secteur."],
  [GraduationCap, "Éducation", "Formation, enseignement, développement des compétences et accompagnement de l'apprentissage."],
  [Megaphone, "Médias / Communication", "Communication institutionnelle, production audiovisuelle, médias, création de contenus et stratégie de communication."],
] as const;

export default function Poles() {
  return (
    <section
      id="activites"
      className="bg-[#f7f5ef] px-5 py-20 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f3d91] md:text-sm">
          Nos activités
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:mt-6 md:text-6xl">
          Des activités complémentaires, une même ambition.
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-black/60 md:mt-6 md:text-lg">
          GENERALY développe ses activités dans plusieurs secteurs
          stratégiques afin de construire un groupe diversifié,
          innovant et durable.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {activities.map(([Icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 md:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-white md:mb-8 md:h-14 md:w-14">
                <Icon size={22} strokeWidth={1.8} className="md:h-7 md:w-7" />
              </div>

              <h3 className="text-xl font-semibold md:text-2xl">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60 md:mt-5 md:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}