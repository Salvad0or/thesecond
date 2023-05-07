import PostItem from './PostItem'

const Post = ({posts, remove})=> {
  
    return (
        
        <div>
            {posts.map(p =>
                <PostItem post={p} remove = {remove}/>
            )}
        </div>
    )
}

export default Post;