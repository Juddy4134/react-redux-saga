import React from "react"
import Post from "./Post"
import { connect } from "react-redux"


const Posts = ({syncPosts}) => {
    if (!syncPosts.length){
        return <p className="text-center">Постов пока нету!</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.postsReducer.posts
    }
}

export default connect(mapStateToProps,null)(Posts)