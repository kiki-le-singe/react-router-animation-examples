import React, { PureComponent, PropTypes } from 'react'

// require the logo image both from client and server
const logoImage = require('./kiki.jpg')

export default class HomeView extends PureComponent {
  // static propTypes = {
  //   setTransitionName: PropTypes.func
  // }
  ///
  // static defaultProps = {
  //   setTransitionName: () => {}
  // }
  ///
  // componentDidMount() {
  //   this.props.setTransitionName('fadeIn')
  // }

  render() {
    return (
      <div className="page page-home">
        <div className="page-content">
          <h2>Home</h2>
          <p><img src={logoImage} alt="Kiki" width="300" height="300" /></p>
        </div>
      </div>
    )
  }
}
