// このファイルは触らないようにしましょう！
import React from 'react';
import logo from './logo.svg';
import TextInput from './TextInput';
import DisplayText from './DisplayText';
import { RecoilRoot } from 'recoil';
import './App.css';
import { useRecoilValue } from 'recoil';
import { userState } from './models/atoms';

function App() {
  const user = useRecoilValue(userState)
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main className="mt-4">
          <h1 className="text-2xl font-bold text-center">Recoil Example</h1>
          <TextInput />
          <DisplayText />
        </main>
      </div>
    </RecoilRoot>
  );
}

export default App;



// npm install recoil
