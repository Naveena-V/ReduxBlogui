import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducer/UsersReducer'
import postsReducer from '../reducer/PostReducer'
import commentsReducer from '../reducer/CommentReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        users:usersReducer,
        posts:postsReducer,
        comments:commentsReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore