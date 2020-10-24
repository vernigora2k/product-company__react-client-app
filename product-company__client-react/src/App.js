import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SingIn from './SingIn/SingIn'
import CatalogItems from './CatalogItems/CatalogItems'
import IdItem from './IdItem/IdItem'
import { apiRequest, body } from './js/apiClient'
import { URLlogin } from './js/config';
import { singIn } from './js/controller'
// import {  } from './Redux/actions' 

function App() {

  

  return (
    <div className="App flex">
      <header className="App-header flex">
        <div className="header__logo">
          <span>Логотип</span>
        </div>
        <div className="header__menu flex">
          <div className="header__title">
            <span className="title-production">Продукция</span>
            <a className="header__login">Войти в аккаунт</a>
          </div>
          <div className="header__logout">
            <a className="header__logout-link">
              Выйти из аккаунта
            </a>
          </div>
        </div>
      </header>
      <main className="App-main">
      kjhkjh
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
