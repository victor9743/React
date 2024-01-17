import './styles.css';
export const PostCard = ({title, cover, body, id}) => {
  // const {post} = props; // mesma forma: const post = props.post;
    <div className='post'>
      <img src={cover} alt={title} />
      <div className='post-content' >
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
}