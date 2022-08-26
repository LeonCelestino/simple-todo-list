import React, {useState} from 'react';
import App from '../App'
import Form from './Form'

function List ({listItem, setListItem}) {
    
    const removeItem = (index) => {
        let newList = listItem;

        newList.splice( index, 1 );
        setListItem([...newList]);
    }
    return (
        <ul>
            { 
                listItem.map((lis, index) => (<li key={index}>{lis} <button onClick={()=>removeItem(index)}>X</button></li>) )
            }
        </ul>
    )


}

export default List