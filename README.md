# React Router Animation Examples

This project is just an example using [`React Router`](https://github.com/reactjs/react-router) and [`React' Animations`](https://facebook.github.io/react/docs/animation.html) in a mobile context. So reduce your screen size.

In this example I only use `react-router` but in my opinion we can't only use the router to navigate from one screen to the other. Because obviously the route will change and you'll lose the previous displayed screen. This is not always the wanted effect in a mobile application. Maybe we could combine the router with the pushing and popping techniques like [`React Native`](https://facebook.github.io/react-native/)'s [`Navigation`](https://facebook.github.io/react-native/docs/navigation.html) or native mobile apps.

## Installation

```shell
$ git clone git@github.com:kiki-le-singe/react-router-animation-examples.git
$ cd react-router-animation-examples
$ npm install
```

## Scripts

### Development

```shell
$ npm start
```

Serves your app at `localhost:3000`. HMR will be enabled in development. A proxy is used for when you  request http://localhost:3000/, it will fetch http://localhost:3001/ and return.

```shell
$ npm run start:server
```

Starts the `dev` server to serve your app at `localhost:3000`.

```shell
$ npm run start:client:server
```

Starts the `webpack dev server` to serve your `webpack bundle` at `localhost:3001` and enable HMR in development.


### Production

```shell
$ npm run compile
```

It does some optimizations and Compiles the application, for the production, to disk (`~/static/dist`).

```shell
$ npm run deploy
```

Cleans the `~/static/dist` folder previously created, then compiles your application to disk and starts the `prod` server.

```shell
$ npm run prod
```

Starts the `prod` server to serve your app at `localhost:3000`.


## Sources

 * [React Animation](https://facebook.github.io/react/docs/animation.html)
 * [React Router](https://github.com/reactjs/react-router)
  * [React Router's examples animations](https://github.com/reactjs/react-router/tree/master/examples/animations)
  * [React Router's examples nested animations](https://github.com/reactjs/react-router/tree/master/examples/nested-animations)

## Learn more

 * [Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
