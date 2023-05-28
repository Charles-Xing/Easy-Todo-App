import { getAllTodos } from "@/public/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  
  return (
    <main className="max-w-3xl mx-auto mt-4 ">
      <div className="flex flex-col gap-4 my-5 text-center">
        <h1 className="text-2xl font-bold">ToDo List App</h1>
        <AddTask />
        {/* <TodoList /> */}
      </div>
      <TodoList tasks={tasks}/>
    </main>
  )
}
