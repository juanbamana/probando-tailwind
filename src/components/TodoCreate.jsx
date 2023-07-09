import { useState } from "react"
export const TodoCreate = ({ createTodo }) => {


  const [title, setTitle] = useState('')


  const handleSubmitTodo = (e) => {

    e.preventDefault()

    if(!title.trim()) {
       return setTitle('')
    }
    createTodo(title)
    setTitle('')
  }


  return (
    <form onSubmit={handleSubmitTodo} className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 dark:bg-gray-800">
      <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
      <input className="dark:bg-gray-800 w-full text-gray-400 outline-none" type="text" placeholder="Create a new todo" value={title} onChange={(e)=>setTitle(e.target.value)} />
    </form>)
}
