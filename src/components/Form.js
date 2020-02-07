import React from 'react';
import {AppContext} from '../AppContext'







 export default class Form extends React.Component {
     static contextType = AppContext;

     render() {
     return (
        <>
             <form onSubmit={this.context.fetchData} id="dataForm">
             <label htmlFor="searchInput"> Search Galaxy </label>
             <input type="text" id="searchInput" name="galaxyInfo"></input>
             <select name="dataType" form="dataForm" className="galaxyFilter">
                <option value="films">films</option>
                <option value="people">people</option> 
                <option value="planets">planets</option>
                <option value="species">species</option>
                <option value="starships">starships</option>
                <option value="vehicles">vehicles</option>
            </select>
            <button type="submit">Search</button>
            </form>
            <p className="noData">{this.context.validateData()}</p>
        </>
     )
     }
}
