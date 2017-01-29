import React, { PropTypes } from 'react'

const propTypes = {
  params: PropTypes.object.isRequired
}

const contextTypes = {
  router: PropTypes.object
}

function PostView({ params }, context) {
  const closeView = () => {
    context.router.push('/posts')
  }

  return (
    <div className="page page-slide-in-right page-post">
      <header>
        <h1>Post - {params.slug}</h1>
        <button onClick={closeView}>Back</button>
      </header>
    </div>
  )
}

PostView.propTypes = propTypes
PostView.contextTypes = contextTypes

export default PostView
