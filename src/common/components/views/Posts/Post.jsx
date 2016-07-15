import React, { PropTypes } from 'react'

const contextTypes = {
  router: PropTypes.object
}

export default function Post(props, context) {
  const closeView = () => {
    context.router.push('/posts')
  }

  return (
    <div className="page page-slide-in-right page-post">
      <header>
        <h1>Post</h1>
        <button onClick={closeView}>Close</button>
      </header>
    </div>
  )
}

Post.contextTypes = contextTypes
