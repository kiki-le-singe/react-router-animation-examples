import React, { PureComponent, PropTypes } from 'react'

import NavLink from '../NavLink'

export default class AppLayout extends PureComponent {
  static propTypes = {
    setTransitionName: PropTypes.func.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { setTransitionName } = this.props

    return (
      <ul>
        <NavLink to="/hello" setTransitionName={setTransitionName} transitionName="slideInUp" text="Hello" />
        <NavLink to="/about" setTransitionName={setTransitionName} transitionName="slideInDown" text="About" />
        <NavLink to="/contact" setTransitionName={setTransitionName} transitionName="slideInLeft" text="Contact" />
        <NavLink to="/posts" setTransitionName={setTransitionName} transitionName="slideInRight" text="Posts" />
      </ul>
    )
  }
}
