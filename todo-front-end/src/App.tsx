import React from 'react';
import './App.css';
import Layout from './container/Layout';
import Todos from './container/Todos';

function App() {
  return (
    <div className="App">
      <Layout>
          <Todos />
      </Layout>
    </div>
  );
}

export default App;
