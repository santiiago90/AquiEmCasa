import { useState } from 'react'

const links = [
  { label: 'Visão geral', href: '#visao-geral' },
  { label: 'Despesas', href: '#despesas' },
  { label: 'Acertos', href: '#acertos' },
  { label: 'Moradores', href: '#moradores' },
  { label: 'Definições', href: '#definicoes' },
]

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <a
          href="#visao-geral"
          className="text-xl font-bold tracking-tight text-content"
          onClick={() => setIsMenuOpen(false)}
        >
          Aqui<span className="text-primary">EmCasa</span>
        </a>

        <button
          type="button"
          className="rounded-lg border border-border px-4 py-2 text-sm text-content focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          {isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        </button>

        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`${isMenuOpen ? 'flex' : 'hidden'} w-full flex-col gap-2 md:flex md:w-auto md:flex-row`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-background hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navigation