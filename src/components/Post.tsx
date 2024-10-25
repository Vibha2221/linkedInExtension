interface PostProps {
    author: string;
    content: string;
  }
  export {}
  const Post: React.FC<PostProps> = ({ author, content }) => {
    return (
      <div className="bg-white p-4 shadow rounded-lg mb-4">
        <h3 className="font-bold">{author}</h3>
        <p>{content}</p>
      </div>
    );
  }
  
  export default Post;
  