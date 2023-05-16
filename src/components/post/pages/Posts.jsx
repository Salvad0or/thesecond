
import { useEffect, useState } from 'react';
import Post from '../Post'
import PostForm from '../PostForm';
import PostFilter from '../PostFilter';
import MainButton from '../UI/Buttons/MainButton';
import MyModalWindow from '../UI/MyModal/MyModalWindow';
import { UsePosts } from '../hooks/usePosts';
import PostService from '../UI/API/PostService';
import { useFetching } from '../hooks/useFetching';
import { getPagesArray, getPagesConunt } from '../utils/pages';
import Pagination from '../UI/pagination/Pagination';


export const Posts = () => {


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


  const [totalPages, setTotalPages] = useState(0); // общее кол-во постов
  const [limit, setLimit] = useState(10) // cколько постов на страницу будет передаваться
  const [page, setPage] = useState(1) // по умолчанию первая страница




  const [fetchPosts, isLoading, postError] = useFetching(async () => { // первым параметром возвращяет функцию, второым лоадер, третим ошибку
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesConunt(totalCount, limit)) // Получили ответ от сервера, обращаемся к хедеру и достаем кол-во постов
  })

  const changePage = (page) => {
    setPage(page);
    fetchPosts();

  }

  useEffect(() => {
    fetchPosts();
  }, [page])


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
        : <Post className='postDiv' posts={sortedAndSearchedPosts} remove={removePost} />
      }

      <Pagination page = { page} changePage={changePage} totalPages={totalPages}></Pagination>

    </div>
  )
}
