export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f7f5ef]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f3d91] text-2xl font-black text-white">
            G
          </div>

          <div className="leading-none">
            <p className="text-lg font-bold tracking-[0.25em] text-[#111111]">
              GENERALY
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.45em] text-[#0f3d91]">
              Groupe
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-black/70 md:flex">
          <a href="#" className="transition hover:text-[#0f3d91]">Accueil</a>
          <a href="#groupe" className="transition hover:text-[#0f3d91]">Le Groupe</a>
          <a href="#activites" className="transition hover:text-[#0f3d91]">Activités</a>
          <a href="#contact" className="transition hover:text-[#0f3d91]">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3d91] md:inline-flex"
        >
          Nous contacter
        </a>
      </div>
    </header>
  );
}