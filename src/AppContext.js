import React from 'react';


const AppContext = React.createContext({
    data: [],
    touched: false,
    fetchData: () => {

    },
    validateData: () => {

    },
})


export default class AppProvider extends React.Component {

    state = {
        data: [],
        touched: false
    }


    fetchData = (e) => {
        e.preventDefault();
        fetch(`https://swapi.co/api/${e.target.dataType.value}/?search=${e.target.galaxyInfo.value}`)
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                }
                    return response.json()
                })
            .then(response => this.setState({
                data: response.results,
                touched: true
            }))
            .catch(error => {
                console.log({ error })
             })
    }

    validateData = () => {
        if(this.state.data.length <= 0 && this.state.touched) {
            return "Nothing found in the galaxy, try another search!"
        }
    }


    render() {
        const contextValue = {
            data: this.state.data,
            touched: false,
            fetchData: this.fetchData,
            validateData: this.validateData
        }
        return(
            <AppContext.Provider value={contextValue}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export {AppContext}