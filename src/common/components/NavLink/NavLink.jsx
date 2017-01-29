import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'

export default class AppLayout extends PureComponent {
  static propTypes = {
    setTransitionName: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
    transitionName: PropTypes.string,
    text: PropTypes.string,
  }
  static defaultProps = {
    transitionName: 'fadeIn',
    text: 'Link',
  }

  shouldComponentUpdate() {
    return false
  }

  handleClick = () => {
    const { setTransitionName, transitionName } = this.props

    setTransitionName(transitionName)
  }

  render() {
    const { to, text } = this.props

    return (
      <li>
        <Link to={to} onClick={this.handleClick}>{text}</Link>
      </li>
    )
  }
}
