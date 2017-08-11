export const STORAGE_KEY = 'todos-vuejs'

export const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}
