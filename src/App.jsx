import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { TodoComputed } from "./components/TodoComputed"
import { TodoCreate } from "./components/TodoCreate"
import { TodoFilter } from "./components/TodoFilter"
import { TodoList } from "./components/TodoList"
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialState = JSON.parse(localStorage.getItem('todos')) || []


const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
export const App = () => {


  const [todos, setTodos] = useState(initialState)
  const [filter, setFilter] = useState('all')


  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])



  const filterTodo = () => {

    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed)
      default:
        return todos

    }
  }

  const changeFilter = (filter) => {

    setFilter(filter)
  }



  const createTodo = (title) => {

    const newTodo = {
      id: Date.now(),
      title,
      completed: false

    }

    setTodos([...todos, newTodo])

  }

  const removeTodo = (id) => {
    const removeTo = todos.filter((todo) => todo.id !== id)
    setTodos(removeTo)
  }


  const updateTodo = (id) => {

    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length


  const clearCompleted = () => {
    const clear = todos.filter((todo) => !todo.completed)
    setTodos(clear)
  }

 
  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
    )
        return;

    setTodos((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
    );
};

  return (
    <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] ">


      <Header />
      <main className="container mx-auto mt-8">

        <TodoCreate createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList todos={filterTodo()} removeTodo={removeTodo} updateTodo={updateTodo} />
        </DragDropContext>
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
        <TodoFilter changeFilter={changeFilter} filter={filter} />



      </main>



      <footer className="text-center mt-8 dark:text-gray-400">Drag and drop</footer>




    </div>
  )
}
