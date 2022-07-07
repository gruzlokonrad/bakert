import React from 'react';
import './App.scss';

import { MdSettingsSuggest } from 'react-icons/md'
import logo from './img/logo.webp';



function App() {
  return (
    <div className="App ">
      <div className="logo center">
        <img src={logo} className="logo__icon" alt="logo" />
      </div>
      <div className="container center">
        <main className="">
          <div className="content center">
            bakert.pl <br/>
            Pilotaż pojazdu nienormatywnego
          </div>
          <div className="icon center">
              <MdSettingsSuggest />
          </div>
          <div className="center">
            Strona w budowie
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
