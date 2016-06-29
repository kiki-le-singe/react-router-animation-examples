import React from 'react'
import { Route, Redirect } from 'react-router'

import AppLayout from 'common/layouts/AppLayout'
import About from 'common/components/views/About'
import Hello from 'common/components/views/Hello'
import SlideInRight from 'common/components/views/SlideInRight'
import SlideInLeft from 'common/components/views/SlideInLeft'

export default (
  <Route path="/" component={AppLayout}>
    <Route path="hello" component={Hello} />
    <Route path="about" component={About} />
    <Route path="slide-in-right" component={SlideInRight} />
    <Route path="slide-in-left" component={SlideInLeft} />
    <Redirect from="*" to="hello" />
  </Route>
)
