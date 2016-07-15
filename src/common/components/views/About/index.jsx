import React, { PropTypes } from 'react'
import classNames from 'classnames'

import titleStyles from 'common/styles/local/title.css'
import styles from './About.css'

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
      <div className="page-content">
        <h1 className={classNames(styles.title, titleStyles.h1)}>About</h1>
      </div>
    </div>
  )
}

About.contextTypes = contextTypes
