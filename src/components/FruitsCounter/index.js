// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onMangoesCount = () => {
    this.setState(prevCount => ({mangoes: prevCount.mangoes + 1}))
  }

  onBananasCount = () => {
    this.setState(prevCount => ({bananas: prevCount.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoes}</span> mangoes{' '}
            <span className="count">{bananas}</span> bananas
            <div className="fruits-container">
              <div className="item-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                  className="image"
                />
                <button className="button" onClick={this.onMangoesCount}>
                  Eat Mango
                </button>
              </div>
              <div className="item-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                  className="image"
                />
                <button className="button" onClick={this.onBananasCount}>
                  Eat Banana
                </button>
              </div>
            </div>
          </h1>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
