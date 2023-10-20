import '../../styles/global.css';
import { Component } from 'react';
import {Posts} from '../../components/Posts'
import {loadPosts} from "../../utils/load-posts"
import { Button } from '../../components/Button';

export class Home extends Component {


  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
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
    const nextPosts = allPosts.slice(nextPage, nextPage, postsPerPage)

  }

  render () {

    const { posts } = this.state;

    return (
      <section className='container'>
        <Posts  posts={posts}/>
        <Button texto="hello wolrd" evento={this.loadMorePosts} />
      </section>
    );
  }
}
