import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import UsersList from './components/users/UsersList'
import UsersShow from './components/users/UsersShow'
import PostList from './components/posts/PostList'
import PostShow from './components/posts/PostShow'
import Home from './Home'

function App(props){
    return(
        <div>
            <BrowserRouter>
                <Link to="/">Home|</Link>
                <Link to="/users">Users|</Link>
                <Link to="/posts">Posts</Link>
                

                <Route path="/" component={Home} exact />
                <Route path="/users" component={UsersList} exact />
                <Route path="/users/:id" component={UsersShow}  />
                <Route path="/posts" component={PostList} exact />
                <Route path="/posts/:id" component={PostShow} />
                
            </BrowserRouter>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps)(App)