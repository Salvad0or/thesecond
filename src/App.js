
import { useMemo, useState } from 'react';
import Post from './components/post/Post'
import PostForm from './components/post/PostForm';
import PostFilter from './components/post/PostFilter';


function App() {


  const [posts, setPosts] = useState([
    { id: 1, title: 'Гена', description: 'итр' },
    { id: 2, title: 'Зет', description: 'абс' },
    { id: 3, title: 'Яша', description: 'вкс' },
  ])


  const createPost = (newPost) => {
    newPost.id = posts.length + 1;
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {

    setPosts(posts.filter(p => p.id !== post.id))

  }

  const [filter, setFilter] = useState({sort : '' , query :''}); // filter будет содержать два объекта. Алгоритм сортировки и поисковая строка.

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }

    return posts;

  }, [filter.sort, posts]) // мы следим за методом сортировки и за самими постами, если они изменятся - массив будет сортироваться

  const sortedAndSearchedPosts = useMemo(() => {

    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))

  }, [filter.query, sortedPost])

  return (
    <div className='App'>
      <div className='Inputs'>
        <PostForm createPost={createPost} />
      </div>
      <PostFilter filter={filter} setFilter={setFilter} />

      <div className='postDiv'>

      <Post className='postDiv' posts={sortedAndSearchedPosts} remove={removePost} />

      </div>
    </div>
  )

}

export default App;
