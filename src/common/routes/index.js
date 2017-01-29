// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#plainroute
// https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

import AppLayout from 'common/layouts/AppLayout'
import HelloRoute from './HelloRoute'
import AboutRoute from './AboutRoute'
import PostsRoute from './PostsRoute'
import ContactRoute from './ContactRoute'
import NotFoundRoute from './NotFoundRoute'

// Possibility to pass the store to routes: HelloRoute(store)
export default store => ({ // eslint-disable-line
  path: '/',
  component: AppLayout,
  childRoutes: [
    HelloRoute(),
    AboutRoute(),
    PostsRoute(),
    ContactRoute(),
    NotFoundRoute(), // this route must be at end because (path: '*').
  ],
})
