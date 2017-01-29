import React, { PropTypes } from 'react'

const contextTypes = {
  router: PropTypes.object
}

function AboutView(props, context) {
  const closeView = () => {
    context.router.push('/')
  }

  return (
    <div className="page page-slide-in-down page-about">
      <header>
        <h1>About</h1>
        <button onClick={closeView}>Close</button>
      </header>
    </div>
  )
}

AboutView.contextTypes = contextTypes

export default AboutView
