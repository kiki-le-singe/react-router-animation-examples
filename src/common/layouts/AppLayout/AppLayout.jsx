import React, { PureComponent, PropTypes, cloneElement } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Infos from 'common/components/Infos'
import Nav from 'common/components/Nav'
import HomeView from 'common/views/HomeView'

export default class AppLayout extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
  }

  static defaultProps = {
    children: {},
  }

  constructor() {
    super()

    this.state = { transitionName: 'fadeIn' }
  }

  setTransitionName = (transitionName) => {
    this.setState({ transitionName })
  }

  render() {
    const { children, location: { pathname } } = this.props
    const key = pathname.split('/')[1] || 'root'

    return (
      <div className="views">
        <Infos />
        <Nav setTransitionName={this.setTransitionName} />
        <HomeView />

        <ReactCSSTransitionGroup
          transitionName={this.state.transitionName}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {children && cloneElement(children, {
            key,
            setTransitionName: this.setTransitionName,
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
