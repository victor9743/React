import { Component } from 'react';
import '../../styles/global.css';
// import { useCallback, useEffect, useState } from 'react';
// import {Posts} from '../../components/Posts'
// import {loadPosts} from "../../utils/load-posts"
// import { Button } from '../../components/Button';
// import { TextInput } from '../../components/TextInput';

// export const Home = () => {

//   const [posts, setPosts] = useState([]);
//   const [allPosts, setAllPosts] = useState([]);
//   const [page, setPage] = useState(0);
//   const [postsPerPage] = useState(10);
//   const [searchValue, setsearchValue] = useState('');

//   const noMorePosts = page + postsPerPage >= allPosts.length;

//   const filteredPosts =  !!searchValue ?
//   allPosts.filter(post => {
//     return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
//   })
//   : posts;

//   const handleloadPosts = useCallback(async (page, postsPerPage) => {
//     const postsAndPhotos = await loadPosts();

//     setPosts(postsAndPhotos.slice(page, postsPerPage));
//     setAllPosts(postsAndPhotos);
//   }, []);

//   useEffect(()=> {
//     handleloadPosts(0, postsPerPage);
//   }, [handleloadPosts,  postsPerPage]);

//   const loadMorePosts = () => {
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

//     posts.push(...nextPosts);

//     setPosts(posts);
//     setPage(nextPage);
//   }

//   const handleChange = (e) => {
//     const {value} = e.target;
//     setsearchValue(value);
//   }

//   return (
//     <section className='container'>
//       <div className='search-container'>
//         {!!searchValue && (
//           <h1>Search value: {searchValue}</h1>
//         )}

//         <TextInput searchValue={searchValue} handleChange={handleChange} /> <br/><br/><br />
//       </div>
//         {filteredPosts.length > 0 && (
//           <Posts  posts={filteredPosts}/>
//         )}

//         {filteredPosts.length === 0 && (
//           <p>Nao existem posts</p>
//         )}
        

//         <div className='button-container'>
//           {!searchValue && (
//             <Button 
//             texto="load more posts" 
//             evento={loadMorePosts} 
//             disabled={noMorePosts}
//           />
//           )}
//         </div>
//     </section>
//   );
// }

export class Home extends Component {
  state = {
    counter: 0
  }
  
  handleClick = () => {
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  }

  render() {
    return (
      <div  className='container'>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
  )
  }
}