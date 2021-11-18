import React from 'react';
import './App.css';
import CreateTodo from './container/CreateTodo';
import Layout from './container/Layout';
import Todos from './container/Todos';

function App() {
  return (
    <div className="App">
      <Layout>
          <>
            <CreateTodo />
            <Todos />
          </>
      </Layout>
    </div>
  );
}

export default App;
