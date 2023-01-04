import { useState } from 'react'

import './App.css';
import Header from './components/Header';
import List from './components/List/List/List'
import Form from './components/Form/Form'

function App() {

  const [list, setList] = useState([{title: 'Teste 1', id: 1}])

  function addList(title) {
    var lastItem = list.length <= 0 ? 1 : (list.at(-1).id + 1)
    console.log(lastItem)
    setList([...list, {title: title, id: lastItem}])
  }

  function removeList(id) {
    setList(list.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <Header title="Lista Dinâmica" ops={[{name: 'criar Item', url: '#'}]}></Header>
      <h1>FORM</h1>
      <Form addItem={addList}></Form>
      <h1>LISTA</h1>
      <List items={list} removeItem={removeList} addItem={addList}></List>
    </div>
  );
}

export default App;
