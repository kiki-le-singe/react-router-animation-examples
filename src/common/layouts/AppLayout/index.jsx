import React, { PropTypes, cloneElement } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// *** STYLES *** //
import 'common/styles/global/core.css'

const propTypes = {
  location: PropTypes.object,
  children: PropTypes.object
}

function AppLayout(props) {
  const { children, location } = props

  return (
    <div className="views">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/slide-in-right">SlideInRight</Link></li>
      </ul>
      <ReactCSSTransitionGroup
        transitionName="slideInRight"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
      >
        {cloneElement(children, {
          key: location.pathname
        })}
      </ReactCSSTransitionGroup>
    </div>
  )
}

AppLayout.propTypes = propTypes

export default AppLayout
