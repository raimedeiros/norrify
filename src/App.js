import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Categories from './components/categories'

function App () {
  return (
    <div className="App container">
      <div class="row">
        <div class="col">
          <Categories></Categories>
        </div>
      </div>
    </div>
  );
}

export default App;
