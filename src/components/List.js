import React, {useState} from 'react';
import App from '../App'
import Form from './Form'

function List ({listItem}) {
    

    return (
        <ul>
            { listItem.map((lis, index) => (<li key={index}>{lis}</li>) )}
        </ul>
    )


}

export default List