URL aplikacije u cloudu:

https://spaapp-90tr.onrender.com/

Kako pokrenuti lokalno:

Nakon što se zip raspakira u neku mapu, pozicionirati se u tu mapu preko terminala i pokrenuti naredbe:

1. npm install
2. npm run dev

Popis zahtjeva i gdje se vidi u kodu:

1. interpolation/one-way binding – DA
   - src/views/HomeView.vue ({{ appTitle }})
   - src/components/TaskList.vue ({{ t.title }})

2. two-way binding – DA
   - src/components/AddTaskForm.vue (v-model na input i select)

3. methods – DA
   - src/components/AddTaskForm.vue (submit())
   - src/views/TasksView.vue (onAdd(), onSelect())
   - src/stores/tasks.js (actions: load/addTask/toggleDone...)

4. computed properties – DA
   - src/components/AddTaskForm.vue (canSubmit)
   - src/views/TaskDetailsView.vue (computed: id, task)
   - src/stores/tasks.js (getters: filteredTasks, doneCount)

5. barem jedan scoped style – DA
   - src/components/TaskList.vue (style scoped)
   - src/components/AddTaskForm.vue (style scoped)
   - src/App.vue (style scoped)

6. lifecycle hook – DA
   - src/views/TasksView.vue (onMounted -> store.load())
   - src/views/TaskDetailsView.vue (onMounted -> ensureLoaded() -> store.load() po potrebi)

7. routing (više stranica) + bookmarkable + 404 – DA
   - src/router/index.js (rute: /, /tasks, /task/:id, /about)
   - Direktan URL npr. /tasks i /task/2 radi (bookmarkable)
   - 404 catch-all ruta: /:pathMatch(._)_ (NotFoundView)

8. (barem) dvije komponente – DA
   - src/components/AddTaskForm.vue (komponenta sa stanjem) Stateful: (ref: title, priority)
   - src/components/TaskList.vue (komponenta bez stanja, koristi props) Stateless: (props: tasks)

9. barem jedna komponenta emitira event – DA
   - src/components/AddTaskForm.vue emitira 'add'
   - src/components/TaskList.vue emitira 'select' i 'toggle'

10. store (Pinia) – DA

- src/stores/tasks.js (useTasksStore)

11. asinkroni dohvat podataka – DA

- src/services/tasksApi.js (fetchTasks async)
- src/stores/tasks.js (load() await fetchTasks())

Kratke upute za korištenje:
Na stranici Tasks možete dodati novi zadatak unosom naslova (min. 3 znaka) i odabirom prioriteta, a zatim klikom na “Dodaj”. Uz svaki zadatak nalazi se gumb “Gotovo/Vrati” kojim se mijenja status zadatka, dok “Prikaži gotove” uključuje/isključuje prikaz dovršenih zadataka. Polje “Filter…” sužava listu po tekstu u naslovu, a klik na naziv zadatka otvara detalje na ruti /task/:id.
