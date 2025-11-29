import { Component } from "react";
import styled from "styled-components";
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalWindow = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  width: 450px;
  max-width: 90%;
  box-shadow: 0 10px 35px rgba(0,0,0,0.35);
  animation: slideIn 0.2s ease;

  @keyframes slideIn {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;
class Modal extends Component {

  esc = (e) => {
    if (e.key === 'Escape') {
      this.props.close();
    }
  };

  state = {
    seconds: 0
  };

  componentDidMount() {
            document.addEventListener('keydown', this.esc);
    this.timer = setInterval(() => {
      this.setState(prev => ({ seconds: prev.seconds + 1 }));
    }, 1000);

    console.log("Timer started");
  }

  componentWillUnmount() {        
    document.removeEventListener('keydown', this.esc);
    document.removeEventListener('keydown', this.esc);
    clearInterval(this.timer);
    console.log("Timer stopped");
  }

  render() {
    return (<Backdrop>
      <ModalWindow>
        <p>Модалка відкрита: {this.state.seconds} сек</p>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis fuga vitae, quis error temporibus laboriosam rerum ratione, minima qui omnis doloribus expedita magnam accusantium dolorem rem asperiores, sequi possimus recusandae?</p>
      </ModalWindow>
    </Backdrop>)
  }
}
export default Modal