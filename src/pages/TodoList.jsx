import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodoStore } from "../store/todoStore";

export default function TodoList() {
  const { todos, deleteTodo, updateTodo } = useTodoStore();


  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <div>
            <h1 className="text-5xl font-light text-white mb-3 tracking-tight">Tasks</h1>
            <p className="text-zinc-500 text-base">{todos.length} items</p>
          </div>
          <button
            onClick={() => navigate('create')}
            className="px-6 py-3 cursor-pointer bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-all rounded-full"
          >
            Create Task
          </button>
        </div>

        {todos.length === 0 ? (
          <div className="py-32 text-center">
            <p className="text-zinc-600 text-lg">Your tasks will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-all"
              >
                <div className="flex gap-6">

                  <img
                    src={todo?.image || null}
                    alt={todo.title}
                    className="w-24 h-24 object-cover rounded-xl"
                  />


                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className={`text-2xl font-medium ${todo.status === 'completed' ? 'line-through text-zinc-600' : 'text-white'
                        }`}>
                        {todo.title}
                      </h3>

                      <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${todo.status === 'completed'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-zinc-800 text-zinc-400'
                        }`}>
                        {todo.status}
                      </span>
                    </div>

                    {todo.description && (
                      <p className="text-zinc-400 text-base leading-relaxed mb-4">
                        {todo.description}
                      </p>
                    )}

                    <div className="flex gap-4">
                      <button
                        onClick={() => navigate(`${todo.id}/edit`)}
                        className="text-sm text-zinc-500 hover:text-white transition-colors cursor-pointer"
                      >
                        Edit
                      </button>
                      <span className="text-zinc-800">·</span>
                      <button
                        onClick={() => {
                          if (window.confirm("Are you sure you want to delete this todo?")) {
                            deleteTodo(todo.id);
                          }
                        }}
                        className="text-sm text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}