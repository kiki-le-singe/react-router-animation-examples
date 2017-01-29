import React, { PureComponent } from 'react'

/* eslint-disable */
export default class Infos extends PureComponent {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div className="alert alert-info">
        <p>
          <strong>Hello! </strong>
          For a better experience, reduce your screen or open your Javascript console and
          simulate mobile devices
        </p>
        <p><strong>I will disappear if it's good</strong></p>
      </div>
    )
  }
}
