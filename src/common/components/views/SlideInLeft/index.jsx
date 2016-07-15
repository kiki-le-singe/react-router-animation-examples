import React, { PropTypes, cloneElement } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const propTypes = {
  location: PropTypes.object,
  children: PropTypes.object
}

const contextTypes = {
  router: PropTypes.object
}

export default function SlideInLeft(props, context) {
  const closeView = () => {
    context.router.push('/')
  }
  const { children, location } = props

  return (
    <div className="page page-slide-in-left">
      <header>
        <h1>SlideInLeft</h1>
        <button onClick={closeView}>Close</button>
      </header>

      <ul>
        <li><Link to="/slide-in-left/tab1">Tab 1</Link></li>
        <li><Link to="/slide-in-left/tab2">Tab 2</Link></li>
      </ul>

      <ReactCSSTransitionGroup
        component="div"
        transitionName="fadeIn"
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

SlideInLeft.propTypes = propTypes
SlideInLeft.contextTypes = contextTypes
