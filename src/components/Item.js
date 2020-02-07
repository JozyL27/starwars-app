import React from 'react';
import { AppContext } from '../AppContext';



export default class Item extends React.Component {
    static contextType = AppContext
    render() {
        return(
            <>
            {this.context.data.map( (data, index) => 
            <li key={index} className="items">{data.name || data.title}</li>)}
            </>
        )
    }
}