import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputBox: '', letterCount: 0}

  onInputChange = event => {
    const {inputBox} = this.state
    this.setState({inputBox: event.target.value})
    if (event.target.value !== '') {
      this.setState(prevState => ({letterCount: prevState.letterCount + 1}))
    } else {
      this.setState({letterCount: 0})
    }
  }

  render() {
    const {letterCount} = this.state

    return (
      <div className="container">
        <div className="calculator-container">
          <div className="container-1">
            <img
              className="calculator-image"
              alt="letters calculator"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
          <div className="container-2">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="lettersInput" className="lettersInput">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              className="user-input"
              placeholder="Enter the phrase"
              id="lettersInput"
              onChange={this.onInputChange}
            />
            <div className="letters-count-container">
              <p className="letters-count">No.of letters: {letterCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
