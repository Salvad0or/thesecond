import axios from 'axios';

export default class PostService {
    static async  getAll(limit = 10, page = 1){

        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts' , {
            params:{
                _limit : limit,
                _page : page
            }
        })
            return responce; // здесь нам необходимо обращаться к хедерам и вытаскивать общее кол-во постов
        

      
    }
}