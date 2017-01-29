import Tab1Route from './Tab1Route'
import Tab2Route from './Tab2Route'

export default () => ({
  path: 'contact',
  getComponent: async (location, cb) => {
    const component = await System.import('common/views/ContactView')
    cb(null, component.default)
  },
  childRoutes: [
    Tab1Route(),
    Tab2Route(),
  ],
})
