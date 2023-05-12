import { useMemo, useState } from 'react';

export const useSortedPosts = (posts, sort) => {

    const sortedPost = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
    
        return posts;
    
      }, [sort, posts]) // мы следим за методом сортировки и за самими постами, если они изменятся - массив будет сортироваться

      return sortedPost;
    
}

export const UsePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts,sort);
    
    const sortedAndSearchedPosts = useMemo(() => {
  
      return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
  
    }, [query, sortedPosts])

    return sortedPosts;
}