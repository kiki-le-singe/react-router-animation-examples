import React, { PropTypes } from 'react'

const contextTypes = {
  router: PropTypes.object
}

export default function SlideInRight(props, context) {
  const closeView = () => {
    context.router.push('/')
  }

  return (
    <div className="page page-slide-in-right">
      <header>
        <h1>SlideInRight</h1>
        <button onClick={closeView}>Close</button>
      </header>
    </div>
  )
}

SlideInRight.contextTypes = contextTypes
