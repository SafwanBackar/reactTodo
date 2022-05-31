import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {

    const [todos, setTodos] = useState([]);

    // Add todo
    const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    }

    // Update todo
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };
    

    //   Remove todo
      const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };
  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      {/* <Todo */}
        {/* todos={todos} */}
        {/* completeTodo={completeTodo} */}
        {/* removeTodo={removeTodo} */}
        {/* updateTodo={updateTodo} */}
       {/* /> */}
      </>
  );
}

export default TodoList