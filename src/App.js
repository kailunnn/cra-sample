// 外部套件
import { useEffect, useState } from 'react';
import axios from 'axios';

// 空一行，放內部套件
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

function App() {

  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    (async() => {
      console.log("API Path:", process.env.REACT_APP_PATH);
      const path = process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa voluptate, aliquid dicta eligendi in delectus dolor maiores, pariatur reiciendis voluptas harum iure
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
        {text}
        <Input id="SampleText" text="這是一個Input" value={text} onChangeHandler={onChangeHandler}/>
      </header>
    </div>
  );
}

export default App;
