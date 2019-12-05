/* eslint-disable react/style-prop-object */
import React from 'react'

const Text = ({ style, text }) => (
  <p style={style}>{text}</p>
)

const Button = ({ style, children, onClick }) => (
  <button style={style} onClick={onClick}>{children}</button>
)

export class App extends React.Component {
  state = {
    counter: 0,
  }

  onButtonClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }))
  }

  render() {
    return (
      <div style='background: #001f3f; display: flex; align-items: center; flex-direction: column; height: 100vh;'>
        <Text style='color: white; margin-top: 60px; font-size: 30px;' text='Hello from Custom Renderer' />
        <Button
          style='color: white; background: none; padding: 10px 20px; border: 1px solid white; outline: none; cursor: pointer;'
          onClick={this.onButtonClick}
        >
          Zwiększ wartość
        </Button>
        <p style='color: #85144b; font-size: 30px;'>
          {this.state.counter}
        </p>
      </div>
    )
  }
}
