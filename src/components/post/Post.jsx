import PostItem from './PostItem'


const Post = ({posts, remove})=> {
    
    
    if(!posts.length){
        return(
            <div>
                Посты не найдены
            </div>
        )
    }

    return (
        
        <div>
           
            {posts.map(p =>
                <PostItem post={p} remove = {remove}/>
            )}
        </div>
    )
}


export default Post;