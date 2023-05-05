//import React , { useState } from 'react';
import css from './components/app.module.css';
import Header from './components/Header/header.js'
import Main from './components/Main/main.js'
import Footer from './components/Footer/footer.js'
import mock from '../src/server-response-mock.js'


function App() {
      const {activeUserId, users, todos} = mock
      const isLogged = activeUserId !== null
      const loggedUser =users.find(user => user.id === activeUserId)
      
      let filteredTodos = []
      if (isLogged){
        filteredTodos = todos.filter(item => item.userId === loggedUser.id)
      }

  return (
   
    <div className={css.app}> 
    <Header isLogged={isLogged}/>
    <Main loggedUser={loggedUser} todos={filteredTodos}/>
    <Footer />
    </div> 
  );
  
}

export default App;


