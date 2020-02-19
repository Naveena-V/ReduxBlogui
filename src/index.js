import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './store/ConfigureStore'
import { startGetUsers, startGetPosts, startGetComments } from './actions/AllActions'


const store=configureStore()
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))