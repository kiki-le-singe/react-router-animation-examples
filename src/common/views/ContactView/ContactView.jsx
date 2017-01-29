import React, { PureComponent, PropTypes, cloneElement } from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class ContactView extends PureComponent {
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
      <div className="page page-slide-in-left page-contact">
        <header>
          <h1>Contact</h1>
          <button onClick={this.closeView}>Close</button>
        </header>

        <ul>
          <li><Link to="/contact/tab1">Tab 1</Link></li>
          <li><Link to="/contact/tab2">Tab 2</Link></li>
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
}
