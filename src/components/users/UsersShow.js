import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function UsersShow(props){
    //console.log(props)
    return(
        <div>
            
            {
                props.users && (
                    <div>
                        <h1>USER NAME:{props.users.name}</h1>
                        <h1><u>Posts Written By The User</u></h1>
                        <ul>
                            {props.posts.map(post=>{
                                return(<li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)
                            })}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
const mapStateToProp=(state,props)=>{
    return{
        users:state.users.find(usr=>usr.id===parseInt(props.match.params.id)),
        posts:state.posts.filter(post=>post.userId===parseInt(props.match.params.id))
    }
}
export default connect(mapStateToProp)(UsersShow)