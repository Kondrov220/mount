import './App.css';
import { Component } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal/Modal';
class App extends Component {
  state = {
    modal: false,
  }



  render() {
    return (
      <div className="App">
        <button onClick={() => {
          if (this.state.modal == false) {
            this.setState({ modal: true })
            console.log(this.state.modal)
          } else {
            this.setState({ modal: false })
            console.log(this.state.modal)
          }
        }}>
          Open
        </button>
       {this.state.modal && (
  <Modal close={() => this.setState({ modal: false })} />
)}

      </div>
    );
  }
}
export default App;
