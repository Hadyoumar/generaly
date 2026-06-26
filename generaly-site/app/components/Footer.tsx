export default function Footer() {
  return (
    <footer className="bg-[#111111] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-xl font-bold tracking-[0.25em]">GENERALY GROUPE</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.45em] text-white/50">
            
          </p>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
            Construire l&apos;avenir en développant des entreprises qui comptent.
          </p>
        </div>

        <div>
          <p className="font-semibold">Navigation</p>
          <div className="mt-5 grid gap-3 text-sm text-white/60">
            <a href="#" className="hover:text-white">Accueil</a>
            <a href="#groupe" className="hover:text-white">À propos</a>
            <a href="#activites" className="hover:text-white">Activités</a>
            <a href="#actualites" className="hover:text-white">Actualités</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-5 grid gap-3 text-sm text-white/60">
            <p>contact@generaly-groupe.com</p>
            <p>GENERALY GROUPE</p>
            <p></p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
        <p>© 2026 GENERALY GROUPE. Tous droits réservés.</p>
        <p>Mentions légales · Politique de confidentialité</p>
      </div>
    </footer>
  );
}