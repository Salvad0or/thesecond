
import { useRef, useState } from 'react';
import Post from './components/post/Post'

import PostForm from './components/post/PostForm';
import MySelect from './components/post/UI/Select/MySelect';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Гена', description: 'итр' },
    { id: 2, title: 'Зет', description: 'абс' },
    { id: 3, title: 'Яша', description: 'вкс' },
  ])

  const [selectedSort, setSelectedSort] = useState('');

  const sortPosts = (eventTargetValue) => {
    setSelectedSort(eventTargetValue);
    // функция пост не возвращяет новый массив, а мутирует тот массив к которому функция была применена,
    // состояния на прямую изменять нельзя

    setPosts([...posts].sort((a,b) => a[eventTargetValue].localeCompare(b[eventTargetValue])))

    // поработать над сортировкой массивов
    // сделать с нуля еще раз select, полностью самому
    // попробовать другую сортировку, пусть будет уродливее но понятнее тебе лично
  }

  const createPost = (newPost) => {
    let lastId = posts.pop();
    newPost.id = lastId.id + 1;
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {

    setPosts(posts.filter(p => p.id !== post.id))

  }



  return (
    <div className='App'>
      <div className='Inputs'>
        <PostForm createPost={createPost} />
      </div>

      <MySelect
        defaultValue={'Сортировка'}
        value={selectedSort}
        onChange={sortPosts}
        options={
          [
            { value: 'title', name: 'По названию' },
            { value: 'description', name: 'По описанию' }
          ]

        }
      />

      <div className='postDiv'>

        {
          posts.length !== 0
            ?
            <Post posts={posts} remove={removePost} />
            :
            <div>
              Постов не найдено
            </div>
        }

      </div>
    </div>
  )

}

export default App;
