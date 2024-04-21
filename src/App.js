import React from "react";
import Header from "./companents/Header/Header";
import lp from "./img/lp.jpg"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello World",
      userChange: '',
    };
    // Регестрация события для слвего метода, если пишешь в событии код то регестрировать его не нужно
    this.onClick = this.onClick.bind(this);
  }
  
  componentDidUpdate(prevProp) {
    if (this.state.title !== 'Helllo World') {
      console.log('Измененение состояния!!!!')
    }
  }

  render() {
    return (
      <div className="App">
        <Header text='Home' />
        <h1 onMouseEnter={this.mouseOverMain}>{this.state.title}</h1>
        <h2>{this.state.userChange}</h2>
        {/* // onChange прописали внутри события код и его регистрировать не нужно */}
        <input onChange={event => this.setState({userChange: event.target.value})} onClick={this.onClick} placeholder="input" /> <br />
        <img src={lp} alt="lp" />
      </div>
    );
  }

  mouseOverMain() {console.log("mouse over")}

  onClick() {
    this.setState({title: "Change text"})
    console.log('Cliked')
  }

}



export default App;
