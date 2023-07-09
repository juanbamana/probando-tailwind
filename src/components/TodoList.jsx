import  TodoItems  from "./TodoItems"
import { Droppable, Draggable } from '@hello-pangea/dnd';


export const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (

    <Droppable droppableId='todos' >
      {
        (droppableProvided) => (
          <div
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
            className="rounded-t-md bg-white mt-8">
            {
              todos && todos.map((todo, index) => (
                <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>
                  {
                    (draggableProvided) => (
                      <TodoItems 
                      todo={todo} 
                      removeTodo={removeTodo} 
                      updateTodo={updateTodo} 
                      ref={draggableProvided.innerRef} 
                      {...draggableProvided.dragHandleProps}
                      {...draggableProvided.draggableProps}
                      />

                    )
                  }

                </Draggable>

              ))}

            {droppableProvided.placeholder}

          </div>
        )}
    </Droppable>

  )
}
