import React, { PropTypes } from 'react'

const contextTypes = {
  router: PropTypes.object
}

export default function Hello(props, context) {
  const closeView = () => {
    context.router.push('/')
  }

  return (
    <div className="page page-slide-in-up page-hello">
      <header>
        <h1>Hello</h1>
        <button onClick={closeView}>Close</button>
      </header>
      <div className="page-content">Hello <span className="text">World!</span></div>
    </div>
  )
}

Hello.contextTypes = contextTypes
