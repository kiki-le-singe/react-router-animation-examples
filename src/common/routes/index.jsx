import React from 'react'
import { Route, Redirect } from 'react-router'

import AppLayout from 'common/layouts/AppLayout'
import About from 'common/components/views/About'
import Hello from 'common/components/views/Hello'
import Posts from 'common/components/views/Posts'
import Post from 'common/components/views/Posts/Post'
import SlideInLeft from 'common/components/views/SlideInLeft'

export default (
  <Route path="/" component={AppLayout}>
    <Route path="hello" component={Hello} />
    <Route path="about" component={About} />
    <Route path="posts" component={Posts}>
      <Route path=":slug" component={Post} />
    </Route>
    <Route path="slide-in-left" component={SlideInLeft} />
    <Redirect from="*" to="hello" />
  </Route>
)
