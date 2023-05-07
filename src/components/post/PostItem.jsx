import style from  './PostItem.module.css'
import MainButton from './UI/Buttons/MainButton'

const PostItem = ({ post , remove }) => {
    return (
        <div className={style.container}>
            <div>
                <strong>{post.id}</strong>
                <strong>{post.title}</strong>
            </div>
            <div>
                {post.description}
            </div>

            <div>
                <MainButton onClick = {() => remove(post)}> Удолить</MainButton>
            </div>
        </div>
    )
}

export default PostItem;