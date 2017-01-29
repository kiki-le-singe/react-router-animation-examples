import React from 'react'
import { renderToString } from 'react-dom/server'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import configureStore from 'common/redux/store'
import routes from 'common/routes'
import Html from 'server/components/Html'

const renderFullPage = (component, store) => {
  const assets = webpackIsomorphicTools.assets()
  // Render the component to a string
  const html = renderToString(<Html assets={assets} component={component} store={store} />)

  return `<!doctype html>\n${html}`
}

const handleRender = (ctx) => {
  // clear require() cache if in development mode
  // (makes asset hot reloading work)
  if (__DEV__) {
    webpackIsomorphicTools.refresh()
  }

  // Compile an initial state
  const preloadedState = {}
  // Create a new Redux store instance
  const store = configureStore(preloadedState)

  const _ctx = ctx
  const { url: location } = _ctx
  const memoryHistory = createMemoryHistory(_ctx.url)
  const history = syncHistoryWithStore(memoryHistory, store)

  match({ history, routes: routes(store), location }, (error, redirectLocation, renderProps) => {
    if (error) {
      _ctx.status = 500
      _ctx.body = error.message
    } else if (redirectLocation) {
      _ctx.status = 302
      _ctx.redirect(`${redirectLocation.pathname}${redirectLocation.search}`)
    } else if (renderProps) {
      const component = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
      // Send the rendered page back to the client
      _ctx.type = 'html'
      _ctx.status = 200
      _ctx.body = renderFullPage(component, store)
    } else {
      _ctx.status = 404
      _ctx.body = 'Not found'
    }
  })
}

export default handleRender
