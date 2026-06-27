export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 py-16 text-white md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4 md:gap-12">
        <div className="md:col-span-2">
          <p className="text-lg font-bold tracking-[0.22em] md:text-xl md:tracking-[0.25em]">
            GENERALY GROUPE
          </p>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
            Construire l&apos;avenir en développant des entreprises qui
            créent de la valeur durable dans des secteurs stratégiques.
          </p>
        </div>

        <div>
          <p className="font-semibold">Navigation</p>

          <div className="mt-5 grid gap-3 text-sm text-white/60">
            <a href="#" className="transition hover:text-white">
              Accueil
            </a>

            <a href="#groupe" className="transition hover:text-white">
              À propos
            </a>

            <a href="#activites" className="transition hover:text-white">
              Activités
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>

          <div className="mt-5 grid gap-3 text-sm text-white/60">
            <p className="break-all">contact@generaly.net</p>

            <p>+33 7 53 20 41 36</p>

            <p>Paris, France</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/40 md:flex-row md:items-center md:justify-between md:text-left">
        <p>© 2026 GENERALY GROUPE. Tous droits réservés.</p>

        <p>Mentions légales · Politique de confidentialité</p>
      </div>
    </footer>
  );
}