import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [task, setTask] = useState("");
  const [todo,setTodo]=useState([]);

  function addTodo(){
    if(task.trim()=='') {
      alert('no todo enterd')
    }
    else{
    setTodo([...todo, task]);
    setTask("");
    }
  };

  function delbtn(index) {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      const updatedTodo = todo.filter((_, i) => i !== index);
      setTodo(updatedTodo);
    }
  }


  return (
    <>
    <div className='mydiv'>
      <input type="text" onChange={(e)=>setTask(e.target.value)} value={task} placeholder='Enter new todo' className='m-3 p-2'/>
      <button onClick={addTodo} className='btn btn-info'>ADD</button></div>
      <div className='mydiv'>
      <ul>
      {todo.map((todo, index) => (
        <li key={index}><input type="checkbox"  />{todo}
        <button className='btn btn-danger'  onClick={() => delbtn(index)}>Delete</button></li>
      ))}
      </ul>
      </div>
    </>
  )
}

export default App
