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

export default function Posts(props, context) {
  const closeView = () => {
    context.router.push('/')
  }
  const { children, location } = props

  return (
    <div className="page page-slide-in-right page-posts">
      <header>
        <h1>Posts</h1>
        <button onClick={closeView}>Close</button>
      </header>
      <section className="content posts">
        <ul>
          <li><Link to="posts/post-1">Post 1</Link></li>
          <li><Link to="posts/post-2">Post 2</Link></li>
          <li><Link to="posts/post-3">Post 3</Link></li>
          <li><Link to="posts/post-4">Post 4</Link></li>
          <li><Link to="posts/post-5">Post 5</Link></li>
        </ul>
      </section>

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
}

Posts.propTypes = propTypes
Posts.contextTypes = contextTypes
