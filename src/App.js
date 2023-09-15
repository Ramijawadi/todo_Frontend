
import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteTodo, getAllTodo, updateTodo } from "./utils/HandleApi";

function App() {

const[toDo , setToDo]= useState([])
const[text , setText] = useState("")
const[isUpdating , setIsUpdating]= useState(false)

const[toDoId, setToDoId]=useState("")
useEffect (()=> {

getAllTodo(setToDo)

},[])


const updateMode =(_id , text)=> {

  setIsUpdating(true)
  setText(text)
  setToDoId(_id)
}

  return (
    <div className="App">
      <div className="container">

  <h1>Todo App</h1>

<div className="top">  
<input  type="text" 
 placeholder="Add Todo ..."
 value={text}
 onChange={(e)=>setText(e.target.value)}
 
 />
<div className="add" onClick={ isUpdating ? ()=>updateTodo(toDoId , text , setText , setToDo , setIsUpdating) :
    ()=>addToDo(text,setText,setToDo)} >
   {isUpdating ? "update" : "Add"}
  </div>
</div>
<div className="list">
{toDo.map((item)=><ToDo
  key={item._id}
  text={item.text}
  updateMode={()=>updateMode(item._id , item.text)}
  deleteToDo = {()=> deleteTodo(item._id , setToDo)}
  
  /> )}


</div>
      </div>
    </div>
  );
}

export default App;
