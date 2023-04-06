import React from 'react';
import Navbar from './components/Navbar';
import Item from './components/Item'


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Item/>
          <Item/>
        </main>
        
          
      </div>
    );
  }
}

export default App;