import css from './main.module.css';
import React, {useState} from 'react';
import List from '../List/list';
import AddListForm from '../add-form-list/add-form-list';

function Main(props) {
  const {loggedUser, todos} = props
  const initialState = {
    isFormOpen: false,
    todos:todos,
  }
  const[state, setState] = useState(initialState)

  function toggleForm() {
    setState(state => {
      return {
        ...state,
        isFormOpen: !state.isFormOpen
      }
    })
  }

  function addCard(data) {
    setState(state => {
      return {
          isFormOpen:false,
          todos: [...state.todos, {
            ...data,
            userId: loggedUser.id,
          }]
        }
      })
  }

  return (
    <main className={css.container}>
        {loggedUser ? (
          <>
            <h2>Welcome, {loggedUser.name}!</h2>
            <button className={css.button} onClick={toggleForm}>{state.isFormOpen ? 'Close' : 'Add List'}</button>
            {state.isFormOpen && <AddListForm addCard={addCard} />}
            <List todos={state.todos}/>
            
            </>
        ) : (
          <>
            <h2>Welcome to ToDo App!</h2> 
            <p>You need to <a href="/">create 
            an account</a> to use the app.</p> 
            {/* may create a separate js file with the empty state and put <EmptyState /> */}
          </>
        )}
    </main>
  );
}

export default Main;