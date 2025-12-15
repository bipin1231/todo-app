import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../store/todoStore";
import TodoForm from "../component/TodoForm";
import { uploadImage } from "../api/uploadImage";
import { useParams } from "react-router-dom";

export default function EditTodo() {
  const { id } = useParams();

  const { todos, updateTodo } = useTodoStore();

  const todo = todos.find(t => t.id == id)



  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);


  const onSubmit = async (data) => {
    console.log(data);
    
    if (isLoading) return;

    setIsLoading(true);
   
    try {
      let imageUrl = todo.image;


      if (data.image?.[0]) {
        imageUrl = await uploadImage(data.image[0]);
      }

      updateTodo({
        id: todo.id,
        title: data.title,
        description: data.description || "",
        status: data.status,
        image: imageUrl,
      });

     navigate("/todos");
    } catch (err) {

      alert(
        err.message ||
        "Something went wrong while creating the todo. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };
if(!todo) return(
  <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 text-white text-4xl font-bold">No todo found with this id</div>
)
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="mb-12">
          <button
            onClick={() => navigate("/todos")}
            className="text-zinc-500 cursor-pointer hover:text-white transition-colors text-sm mb-8"
            disabled={isLoading}
          >
            ← Back
          </button>

          <h1 className="text-5xl font-light text-white tracking-tight">
            New Task
          </h1>
        </div>



        <TodoForm
          defaultValue={todo}
          submitLabel={isLoading ? "Updating..." : "Update Todo"}
          onSubmit={onSubmit}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
