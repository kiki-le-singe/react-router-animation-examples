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

  const { children, location } = props

  return (
    <div className="views">
      <ul>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/slide-in-right">SlideInRight</Link></li>
      </ul>

      <Home />

      <ReactCSSTransitionGroup
        transitionName="slideInRight"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
      >
        {children && cloneElement(children, {
          key: location.pathname
        })}
      </ReactCSSTransitionGroup>
    </div>
  )
class AppLayout extends Component {
}

AppLayout.propTypes = propTypes

export default AppLayout
