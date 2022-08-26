import Form from './components/Form';
import List from './components/List'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {    
    const [listItem, setListItem] = useState([]);

  return (
    <div className="parentElementsBox">
      <Form listItem={listItem} setListItem={setListItem}/>
      <List listItem={listItem}/>
    </div>
  )
}



export default App;
