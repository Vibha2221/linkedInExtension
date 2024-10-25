import Post from './Post';
export{}
const Feed = () => {
  const posts = [
    { id: 1, author: "John Doe", content: "Just got a new job!" },
    { id: 2, author: "Jane Smith", content: "Excited to start a new project!" },
  ];

  return (
    <div className="flex-grow p-4">
      {posts.map((post) => (
        <Post key={post.id} author={post.author} content={post.content} />
      ))}
    </div>
  );
}

export default Feed;
