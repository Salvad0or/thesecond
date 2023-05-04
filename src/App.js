
import { useRef, useState } from 'react';
import Post from './components/post/Post'
import MainButton from './components/post/UI/Buttons/MainButton';
import MyInput from './components/post/UI/Inputs/MyInput';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', description: 'Язык программирования' },
    { id: 2, title: 'Javascript 2', description: 'Язык программирования 2' },
    { id: 3, title: 'Javascript 3', description: 'Язык программирования 3' },
  ])

  const [post, setTitle] = useState({ title: '', description: '' });

  const addNewPost = () => {

    setPosts([...posts, {...post, id: posts.length + 1}])

  }

  return (
    <div className='App'>

      {/*Управляемый компонент */}
      <div className='Inputs'>

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

      <div className='postDiv'>
        {
          posts.map(post =>
            <Post post={post} key={post.id} />)
        }
      </div>
    </div>
  )

}

export default App;
