
import { useEffect,  useState } from 'react';
import Post from './components/post/Post'
import PostForm from './components/post/PostForm';
import PostFilter from './components/post/PostFilter';
import MainButton from './components/post/UI/Buttons/MainButton';
import MyModalWindow from './components/post/UI/MyModal/MyModalWindow';
import { UsePosts } from './components/post/hooks/usePosts';
import PostService from './components/post/UI/API/PostService';
import { useFetching } from './components/post/hooks/useFetching';


function App() {


  const [posts, setPosts] = useState([])

  //#region  Модальное окно
  const [isActive, setModal] = useState(false); // состояние модального окна

  //#endregion

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
  const [filter, setFilter] = useState({ sort: '', query: '' }); // filter будет содержать два объекта. Алгоритм сортировки и поисковая строка.
  const sortedAndSearchedPosts = UsePosts(posts, filter.sort, filter.query)

  //#endregion

 
  const [fetchPosts, isLoading, postError] = useFetching(async() => { // первым параметром возвращяет функцию, второым лоадер, третим ошибку
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  useEffect(() => {
    fetchPosts();
  }, [])


  return (
    <div className='App'>

      <button onClick={fetchPosts}>получить данные</button>

      <MainButton onClick={() => setModal(true)}>
        Создать пост
      </MainButton>


      <MyModalWindow
        isActive={isActive}
        setActive={setModal}>
        <PostForm className='Inputs' createPost={createPost} />
      </MyModalWindow>



      <PostFilter filter={filter} setFilter={setFilter} />

      {
        postError &&
        <h1>Ошибкааааааааааа ${postError}</h1>
      }

      {isLoading



        ? <h1>Идет загрузка</h1>
        : <Post className='postDiv' posts={sortedAndSearchedPosts} remove={removePost} />}




    </div>
  )

}

export default App;
