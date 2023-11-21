// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timerInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  getTimerFormat = () => {
    const {timerInSeconds} = this.state

    const minutes = Math.floor(timerInSeconds / 60)
    const seconds = Math.floor(timerInSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch-heading"> Stopwatch </h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer-heading"> Timer </p>
            </div>
            <h1 className="stopwatch-timer">{this.getTimerFormat()}</h1>
            <div className="timer-buttons">
              <button
                className="start-button button"
                type="button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="stop-button button"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="reset-button button"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
