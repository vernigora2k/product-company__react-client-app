import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SingIn from './SingIn/SingIn'
import CatalogItems from './CatalogItems/CatalogItems'
import IdItem from './IdItem/IdItem'
import { apiRequest, body } from './js/apiClient'
import { URLlogin } from './js/config';
// import {  } from './Redux/actions' 

function App() {

  // apiRequest('POST', URLlogin, body)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))

  return (
    <div className="App">
      <header className="App-header">
        <div className="header__logo">
          <span>Логотип</span>
        </div>
        <div className="header__menu">
          <div className="header__title">
            <span>Продукция</span>
          </div>
          <div className="header__sing-in">
            <a className="header__sing-in-link">
              Войти в аккаунт
            </a>
          </div>
        </div>
      </header>
      <main className="App-main">
        <SingIn/>
        <CatalogItems/>
        <IdItem/>
      </main>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
