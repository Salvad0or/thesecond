import MainButton from './UI/Buttons/MainButton';
import MyInput from './UI/Inputs/MyInput';
import { useState } from 'react';

const PostForm = ({createPost}) => {

    
    const [post, setTitle] = useState({ title: '', description: '', id : 0 });

    const addNewPost = () => {
       
        let newPost = { ...post }

        createPost(newPost)

        setTitle({ title: '', description: '' })

    }

    return (
        <div>
            <MyInput
                value={post.title}
                onChange={e => setTitle({ ...post, title: e.target.value })}
            />
            <MyInput
                value={post.description}
                onChange={e => setTitle({ ...post, description: e.target.value })}
            />

            <MainButton onClick={addNewPost}>Добавить пост</MainButton>
        </div>
    )
}

export default PostForm;