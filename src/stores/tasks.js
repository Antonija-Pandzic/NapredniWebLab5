import { defineStore } from 'pinia'
import { fetchTasks } from '../services/tasksApi'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null,
    filterText: '',
    showDone: true,
  }),

  getters: {
    filteredTasks(state) {
      const t = state.filterText.trim().toLowerCase()
      return state.tasks
        .filter((x) => (state.showDone ? true : !x.done))
        .filter((x) => (t ? x.title.toLowerCase().includes(t) : true))
    },
    doneCount(state) {
      return state.tasks.filter((t) => t.done).length
    },
  },

  actions: {
    async load() {
      this.loading = true
      this.error = null
      try {
        this.tasks = await fetchTasks()
      } catch {
        this.error = 'Neuspješno učitavanje podataka.'
      } finally {
        this.loading = false
      }
    },

    addTask(title, priority) {
      const clean = title.trim()
      if (clean.length < 3) return

      const newId = this.tasks.length ? Math.max(...this.tasks.map((t) => t.id)) + 1 : 1
      this.tasks.unshift({ id: newId, title: clean, done: false, priority })
    },

    toggleDone(id) {
      const t = this.tasks.find((x) => x.id === id)
      if (t) t.done = !t.done
    },

    setFilterText(v) {
      this.filterText = v
    },

    setShowDone(v) {
      this.showDone = v
    },
  },
})
