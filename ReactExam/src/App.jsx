import React, {useState} from 'react';
import "./main.css";

console.clear();

const App = () => {

  const [newToDo, setNewToDo] = useState(''); 
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className='layout'>
      <ToDoForm newToDo={newToDo} 
                setNewToDo={setNewToDo}
                toDoList={toDoList} 
                setToDoList={setToDoList}/>
      <ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
  )
}

const ToDoForm = ({ newToDo, setNewToDo, toDoList, setToDoList }) => {
  const [toDoIndex, setToDoIndex] = useState(1);

  const addToDo = () => {
    const toDo = {
      id: toDoIndex,
      title: newToDo,
    };
    setToDoList([...toDoList, toDo]);
    setToDoIndex(toDoIndex + 1);
    setNewToDo("");
  };

  return (
    <div className="top-menu">
      <span className="logo">To Do List</span>
      <input
        type="text"
        value={newToDo}
        onChange={(e) => {
          setNewToDo(e.target.value);
        }}
      />
      <button onClick={addToDo}>등록</button>
    </div>
  );
};



const ToDoList = ({toDoList, setToDoList}) => {
  

  const [editMode, setEditMode] = useState(false);


  let showList = <div>등록된 일정이 없습니다.</div>
  
  const deleteToDo = (id) => {
    setToDoList(toDoList.filter(todo => todo.id != id));
  }

  const showEditBtn = () => {
    setEditMode(true);
  }

  if(toDoList.length > 0) {
    showList = (
      <ul>
        {toDoList.slice(0).reverse().map((toDo) => {
          return (
            <li key={toDo.id}>
              {toDo.id}
              {" "}
              {editMode ? (
                <>
                  <input type="text" />
                  {" "}
                  <button>수정</button>
                  {" "}
                  <button>취소</button>
                </>
              ) : (
                <>
                  {toDo.title}
                  <button onClick={() => showEditBtn()}>수정</button>
                  <button onClick={() => deleteToDo(toDo.id)}>삭제</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    )
  }

  return (
    <>
      {showList}
    </>
  )
}

export default App;
