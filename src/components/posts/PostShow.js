import React from 'react'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom'

function PostShow(props){
    //console.log(props)
    return(
        <div>
          {
              props.users &&(
                  <div>
                      <h1>NAME:{props.users.name}</h1>
                      <h1>TITLE:{props.posts.title}</h1>
                      <h1>BODY:</h1><h2>{props.posts.body}</h2>
                      <h1>Comments</h1><hr/>
                      <ul>
                          {props.comments.map(comment=>{
                          return(<li key={comment.id}>{comment.body}</li>)
                          })}
                      </ul>
                      <Link to={`/users/${props.users.id}`}>More Posts Of Author:{props.users.name}</Link>
                  </div>
              )
          }
        </div>
        
    )
}
const mapStateToProps=(state,props)=>{
    return{
        comments:state.comments.filter(comment=>comment.postId===parseInt(props.match.params.id)),//*
        posts:state.posts.find(post=>post.id===parseInt(props.match.params.id)),
        users:state.users.find(user=>{
            const userId = state.posts.find(post => post.id ===parseInt(props.match.params.id)).userId
            return user.id === userId
        })
    }
}
export default connect(mapStateToProps)(PostShow)