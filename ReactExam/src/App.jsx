import {useState} from 'react';

console.clear();

const App = () => {

  const [text, setText] = useState("11");

  return (
    <div classNmae="App">
      <input type="text"
        onChange={({target : { value }}) => {
          setText(value);
        }}
        value={text}
      />
    </div>
  );
}

export default App;
