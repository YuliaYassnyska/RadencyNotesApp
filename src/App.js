import React from 'react';
import Form from './components/Form';
import List from './components/List';
import { headers } from './data';

const App = () => {

  return (
    <div className="App">
      <List head={headers.notesHeader} icons={true} addIcons={true} defaultL={true} total={false} />
      <Form />
    </div>
  );
}

export default App;
