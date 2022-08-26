
import React, { useState } from 'react';
import List from './List';
import ReactDOM from 'react-dom';

function Form({listItem, setListItem}) {    
    const [userItem, setUserItem] = useState('');

    const handleChange = (e) => {
        setUserItem(e.target.value);
        
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setListItem((lis) => [...lis, userItem]);

        console.log(listItem);
        setUserItem('');
    }
  return (
    <>
      <form className="myForm" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={userItem}></input>
        <button type="submit">Add your item</button>
      </form>
    
    </>)
  
}


export default Form;