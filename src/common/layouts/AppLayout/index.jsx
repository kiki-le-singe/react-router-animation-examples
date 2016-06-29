import React, { Component, PropTypes, cloneElement } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Home from 'common/components/views/Home'

// *** STYLES *** //
import 'common/styles/global/core.css'

const propTypes = {
  location: PropTypes.object,
  children: PropTypes.object
}

class AppLayout extends Component {
  constructor() {
    super()

    this.state = { transition: '' }

    this.setTransitionName = this.setTransitionName.bind(this)
  }

  setTransitionName(transition = '') {
    this.setState({ transition })
  }

  render() {
    const { children, location } = this.props

    /* eslint-disable */
    return (
      <div className="views">
        <ul>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/slide-in-right" onClick={this.setTransitionName.bind(this, 'slideInRight')}>SlideInRight</Link>
          </li>
        </ul>

        <Home />

        <ReactCSSTransitionGroup
          transitionName={this.state.transition}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {children && cloneElement(children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

AppLayout.propTypes = propTypes

export default AppLayout
