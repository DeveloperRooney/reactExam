import {useState} from 'react';

const App = () => {

  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("11");
  const [newText, setNewText] = useState(text);
  
  const editCancel = () => {
    setEditMode(false);
    setNewText(text);
  };

  const commitEdit = () => {
    setEditMode(false);
    setText(newText);
  }

  let content = <div>
    {text} <button onClick={() => setEditMode(true)}>수정</button>
    </div>

  if(editMode) {
    content = (
      <>
        <input
          type="text"
          value={newText}
          onChange={({ target: { value } }) => {
            setNewText(value);
          }}
        />
        <button onClick={() => editCancel()}>수정 취소</button>
        <button onClick={() => commitEdit()}>수정</button>
      </>
    );
  }

  return (
  <div className='App'>
    {content}
  </div>
  )
}

export default App;
