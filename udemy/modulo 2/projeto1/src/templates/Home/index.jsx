import '../../styles/global.css';
import { Component } from 'react';
import {Posts} from '../../components/Posts'
import {loadPosts} from "../../utils/load-posts"
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {


  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ''
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage} = this.state

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
  }

  handleChange = (e) => {
    const {value} = e.target;

    this.setState({searchValue: value});
  }

  render () {

    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts =  !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
    })
    : posts;

    /*
      !! ou !
      quando colocado em uma variavel, converte a variavel para boleano.
      Se estiver vazia vai retornar false, se houver algum valor retorna true

      &&
      caso a condicao for verdadeira a partir deste simbolo o codigo sera executado
    */
    return (
      <section className='container'>
        <div className='search-container'>
          {!!searchValue && (
            <h1>Search value: {searchValue}</h1>
          )}

          <TextInput searchValue={searchValue} handleChange={this.handleChange} /> <br/><br/><br />
        </div>
          {filteredPosts.length > 0 && (
            <Posts  posts={filteredPosts}/>
          )}

          {filteredPosts.length === 0 && (
            <p>Nao existem posts</p>
          )}
          

          <div className='button-container'>
            {!searchValue && (
              <Button 
              texto="load more posts" 
              evento={this.loadMorePosts} 
              disabled={noMorePosts}
            />
            )}
          </div>
      </section>
    );
  }
}
