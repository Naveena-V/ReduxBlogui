import axios from 'axios'

export const setUsers=(user)=>{
    return{type:'SET_USERS',payload:user}
}

export const startGetUsers=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                const users=response.data
                dispatch(setUsers(users))
            })
    }
}

export const setPosts=(post)=>{
    return{type:'SET_POSTS',payload:post}
}

export const startGetPosts=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const posts=response.data
                dispatch(setPosts(posts))
            })
    }
}

export const setComments=(comment)=>{
    return{type:'SET_COMMENTS',payload:comment}
}

export const startGetComments=()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response)=>{
                const comments=response.data
                dispatch(setComments(comments))
            })
    }
}