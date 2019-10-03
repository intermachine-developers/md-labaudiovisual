import React,{useEffect} from 'react';

// CSS
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';

// Materialize-css Javascript
import M from 'materialize-css'

// component core
function App() {

  /* hook efect init materialize*/
  useEffect(()=> M.AutoInit());

  /* render component */
  return (
    <h1>edit in App.js <i className="material-icons">edit</i></h1>
  );
}

export default App;
