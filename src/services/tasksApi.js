const seed = [
  { id: 1, title: 'Matematikčka analiza 1: integrali – zadatci 1–10', done: false, priority: 'high' },
  { id: 2, title: 'Napredni razvoj programske potpore za web: ponoviti Vue Router (bilješke)', done: true, priority: 'mid' },
  { id: 3, title: 'Baze podataka: SELECT + JOIN vježbe', done: false, priority: 'mid' },
  { id: 4, title: 'Operacijski sustavi: signali', done: false, priority: 'low' },
]

export async function fetchTasks() {
  await new Promise((r) => setTimeout(r, 500))
  return structuredClone(seed)
}
