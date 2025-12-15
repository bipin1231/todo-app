import { create } from "zustand";
import { persist } from "zustand/middleware"
export const useTodoStore = create(persist(set => ({
    todos: [],
    addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
    updateTodo: (updated) =>
        set((state) => ({
            todos: state.todos.map((t) => (t.id === updated.id ? updated : t)),
        })),
    deleteTodo: (id) =>
        set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),

}),
    { name: "todo-storage" }
))