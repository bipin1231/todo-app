# React Todo App (React + Zustand + React Hook Form + React Router + TailwindCSS + Cloudinary)

## Run the project locally

# 1. Clone the repository
```
git clone https://github.com/bipin1231/todo-app.git
cd todo-app
```

# 2. Install dependencies
```
npm install
```

# 3. Start the development server
```
npm run dev
```

# 4. Open the application in your browser
http://localhost:3000](http://localhost:5173/todos)


## Approach

### State Management

- Used Zustand to store todos globally,avoiding prop drilling.
- Provides addTodo, updateTodo, and deleteTodo functions for managing todos.

### Form Handling

- Used a reusable TodoForm component with React Hook Form.
- Supports title, description, status, and optional image upload.

### Image Uploads

- Frontend uploads images directly to Cloudinary via unsigned preset.
- Cloudinary is used beacause local Storage is limited to ~5MB per domain so it will quickly exceed this limit

### UX & Error Handling

- Shows loading state during create/update todos.
- Confirmation dialog on delete ensures accidental deletion is prevented.

### Navigation

- React Router DOM handles navigation between Todo List, Create Todo, and Edit Todo pages.
