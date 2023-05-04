import style from './style.module.css'
const Post = (props) => {
    
    return(
        <div className={style.container}>
            <div>
                <strong>{props.post.id}</strong>
                <strong>{props.post.title}</strong>
            </div>
            <div>
                {props.post.description}
            </div>

            <div>
                <button>Удолить</button>
            </div>
        </div>
    )
}

export default Post