import React  from 'react';
import Header from './components/Header';
import Form from './components/Form'
import List from './components/List';



export default class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Form />
        <List /> 
      </main>
    )
  }
}

