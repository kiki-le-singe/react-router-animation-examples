import PostRoute from './PostRoute'

export default () => ({
  path: 'posts',
  getComponent: async (location, cb) => {
    const component = await System.import('common/views/PostsView')
    cb(null, component.default)
  },
  childRoutes: [
    PostRoute(),
  ],
  // getChildRoutes(location, cb) {
  //   // do asynchronous stuff to find the child routes
  //   cb(null, [PostRoute()])
  // }
})
