const seed = [
  { id: 1, title: 'Planirati tjedan', done: false, priority: 'mid' },
  { id: 2, title: 'Napisati bilješke', done: true, priority: 'low' },
  { id: 3, title: 'Ponoviti Vue Router', done: false, priority: 'high' },
]

export async function fetchTasks() {
  await new Promise(r => setTimeout(r, 500)) 
  return structuredClone(seed)
}
