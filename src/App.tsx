import Navigation from './components/Navigation'

const sections = [
  {
    id: 'despesas',
    title: 'Despesas',
    description: 'Aqui vais registar e consultar as despesas da casa.',
  },
  {
    id: 'acertos',
    title: 'Acertos',
    description: 'Aqui vais acompanhar quem tem a pagar ou a receber.',
  },
  {
    id: 'moradores',
    title: 'Moradores',
    description: 'Aqui vais gerir os moradores da casa.',
  },
  {
    id: 'definicoes',
    title: 'Definições',
    description: 'Aqui vais configurar os dados da casa.',
  },
]

function App() {
  return (
    <>
      <Navigation />

      <main className="mx-auto max-w-7xl space-y-6 px-6 py-10">
        <section
          id="visao-geral"
          className="scroll-mt-6 rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            A nossa casa, organizada.
          </p>

          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            Visão geral
          </h1>

          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Bem-vindo ao AquiEmCasa. Este será o espaço para acompanhar
            as despesas, os acertos e os moradores da tua casa.
          </p>
        </section>

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-6 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold">{section.title}</h2>

            <p className="mt-3 leading-relaxed text-muted">
              {section.description}
            </p>
          </section>
        ))}
      </main>
    </>
  )
}

export default App