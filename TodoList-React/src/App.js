import { useRef, useState } from 'react';
import './App.css'

function App() {
  const [todos,setTodos] = useState([])
  const refInput = useRef()
  const handleAddItem =() => {
    const text = refInput.current.value
    const newItem = {completed: false , text}
    setTodos([...todos,newItem])
    refInput.current.value = '';
  } 
  const handleDashed = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }
  const handleDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  return (
    <div className='App'>
      <h2 className='todo'> Todo-List</h2>
      <div className='todo--'>
        <ul>
          {todos.map((todo,index)=> {
            return (
              <div className='item'>
                <li key={index}
                  className={todo.completed ? 'dash': ''} onClick={()=> handleDashed(index)}>{todo.text}
                </li>
                <span onClick={()=> handleDelete(index)}>❌</span>
              </div>
            )
          })}
        </ul>
        <input ref={refInput} placeholder='Enter Item Please...'/>
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  )
}
export default App;