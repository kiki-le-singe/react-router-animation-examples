import React, { PureComponent, PropTypes, cloneElement } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class PostsView extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
  }

  static defaultProps = {
    children: {},
  }

  static contextTypes = {
    router: PropTypes.object
  }

  closeView = () => {
    this.context.router.push('/')
  }

  render() {
    const { children, location } = this.props

    return (
      <div className="page page-slide-in-right page-posts">
        <header>
          <h1>Posts</h1>
          <button onClick={this.closeView}>Close</button>
        </header>

        <section className="content posts">
          <ul>
            <li><Link to="/posts/post-1">Post 1</Link></li>
            <li><Link to="/posts/post-2">Post 2</Link></li>
            <li><Link to="/posts/post-3">Post 3</Link></li>
            <li><Link to="/posts/post-4">Post 4</Link></li>
            <li><Link to="/posts/post-5">Post 5</Link></li>
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
}
