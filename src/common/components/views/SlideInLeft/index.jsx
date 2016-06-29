import React, { PropTypes } from 'react'

const contextTypes = {
  router: PropTypes.object
}

export default function SlideInLeft(props, context) {
  const closeView = () => {
    context.router.push('/')
  }

  return (
    <div className="page page-slide-in-left">
      <header>
        <h1>SlideInLeft</h1>
        <button onClick={closeView}>Close</button>
      </header>
    </div>
  )
}

SlideInLeft.contextTypes = contextTypes
