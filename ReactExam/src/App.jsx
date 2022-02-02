import {useState} from 'react';
import "./main.css";

const App = () => {

  console.clear();

  const [newToDo, setNewToDO] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [toDoIndex, setToDoIndex] = useState(0);

  const addToDo = () => {

    const temp = {
      id : toDoIndex + 1,
      title : newToDo
    };

    setToDoIndex(toDoIndex + 1);

    setToDoList([...toDoList, temp]);
    setNewToDO("");
  }

  const toDoDelete = (id) => {
    setToDoList(toDoList.filter(todo => todo.id != id ))
  }

  let showToDoList = <div>등록된 리스트가 없습니다.</div>

  if(toDoList.length != 0) {
    showToDoList = <ul>
      {toDoList.slice(0).reverse().map((toDo)=> {
        return (
          <li key={toDo.id}>
            {toDo.id} {toDo.title}
            &nbsp;<button onClick={() => toDoDelete(toDo.id)}>삭제</button>
            &nbsp;<button>수정</button>
          </li>
        );
      })}
    </ul>
  }

  return (
    <div className="layout">
      <div className='top-menu'>
        <span className='logo'>To Do List</span>
        <input type="text"
          value={newToDo}
          onChange={({target : {value}}) => {
            setNewToDO(value);
          }}
        />
        <button onClick={() => addToDo()}>등록</button>
      </div>
      {showToDoList}
    </div>
  );

}

export default App;
