
import { useMemo, useState } from 'react';
import Post from './components/post/Post'
import PostForm from './components/post/PostForm';
import PostFilter from './components/post/PostFilter';
import ModalWindow from './components/post/UI/MyModal/ModalWindow';
import MainButton from './components/post/UI/Buttons/MainButton';


function App() {


  const [posts, setPosts] = useState([
    { id: 1, title: 'Гена', description: 'итр' },
    { id: 2, title: 'Зет', description: 'абс' },
    { id: 3, title: 'Яша', description: 'вкс' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' }); // filter будет содержать два объекта. Алгоритм сортировки и поисковая строка.

  const [modal, setModal] = useState(false); // состояние модального окна

  //#region Создание и удаление поста

  const createPost = (newPost) => {
    newPost.id = posts.length + 1;
    setPosts([...posts, newPost])
    setModal(false);
  }

  const removePost = (post) => {

    setPosts(posts.filter(p => p.id !== post.id))

  }

  //#endregion

  //#region Сортировка постов
  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }

    return posts;

  }, [filter.sort, posts]) // мы следим за методом сортировки и за самими постами, если они изменятся - массив будет сортироваться

  const sortedAndSearchedPosts = useMemo(() => {

    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))

  }, [filter.query, sortedPost])

  //#endregion
  
  
  return (
    <div className='App'>

      <MainButton onClick = {() => setModal(true)}>
        Создать пост
      </MainButton> 

      <ModalWindow 
      visible={modal} // передаем состояние и метод
      setVisible={setModal}>
        <PostForm className='Inputs' createPost={createPost} />
      </ModalWindow>


      <PostFilter filter={filter} setFilter={setFilter} />

      <Post className='postDiv' posts={sortedAndSearchedPosts} remove={removePost} />


    </div>
  )

}

export default App;
