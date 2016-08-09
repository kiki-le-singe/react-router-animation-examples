import React, { PropTypes } from 'react'

const contextTypes = {
  router: PropTypes.object
}

export default function About(props, context) {
  const closeView = () => {
    context.router.push('/')
  }

  return (
    <div className="page page-slide-in-down">
      <header>
        <h1>About</h1>
        <button onClick={closeView}>Close</button>
      </header>
    </div>
  )
}

About.contextTypes = contextTypes
