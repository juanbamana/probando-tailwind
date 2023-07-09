/* eslint-disable react/display-name */
import React from "react"
import { CheckIcon } from "./icons/CheckIcon"
import { CrossIcon } from "./icons/CrossIcon"

 const TodoItems = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {

        const { id, title, completed } = todo
        return (
            <article {...props} ref={ref} className="flex gap-4 py-4 border-b border-b-gray-400 px-4 dark:bg-gray-800">
            
                {/* <button className="rounded-full border-2 w-5 h-5 inline-block flex-none">
                </button>*/}
                <button onClick={()=>updateTodo(id)}className={`${completed ? 'rounded-full border-2 w-5 h-5 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to pink-500 flex justify-center items-center' : "rounded-full border-2 w-5 h-5 inline-block flex-none" }`}>
                    {completed && <CheckIcon /> }
                </button>
                <p className={`grow text-gray-500 dark:text-gray-300 ${completed && 'line-through'}`}>{title}</p>
                <button onClick={()=> removeTodo(id)} className="flex-none"><CrossIcon /></button>
            </article>)
    }
    
)

export default TodoItems
