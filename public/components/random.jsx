import PostComponent from './components/PostComponent';
import { useState, useEffect } from 'react';

const random = () => {
  // here works begin..

  // useState hook
  const [posts, setPosts] = useState([]);

  const AddPost = () => {
    setPosts([
      ...posts,
      {
        name: 'Baka',
        subtitle: '1,00,000',
        time: '10m ago',
        image:
          'https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-1/464745256_122156240078274328_7451870511857595091_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=UdaYfUI5G5AQ7kNvgGt1EF3&_nc_zt=24&_nc_ht=scontent.fktm8-1.fna&_nc_gid=ApNU4IPdV22zYJaG7wQrVG7&oh=00_AYC9nyAB-N1HLg63l4QMHufREqOOaSvaOvsPIrXniASxvQ&oe=67547F87',
        description:
          'What to know when how to hit 1000s of subscribers all over the worlds',
      },
    ]);
  };

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  // Notification bell codes starts here....
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log('Above setInterval');
    setInterval(increaseCount, 5000);
  }, []);

  useEffect(() => {
    console.log(`The count has been updated to ${count}`);
  }, [count]); // dependency array takes something which changes and then the useEffect runs whenever the change in dependency array occurs...
  // You can make it run whenever both things runs ... such as count1, count2 [count1, count2 ] like this ... and nothing is shit around something that nobody does it.... GG

  return (
    <div
      style={{
        backgroundColor: '#dfe6e9',
        height: '100vh',
      }}
    >
      <button onClick={AddPost}>Add Post</button>
      {/* React is a framework which makes website dynamic only when we are using state... */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>{postComponents}</div>
      </div>

      <div style={{ display: 'flex' }}>
        <div
          style={{
            background: 'red',
            borderRadius: 20,
            width: 20,
            height: 25,
            paddingLeft: 10,
            paddingTop: 5,
          }}
        >
          {count}
        </div>
      </div>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxOCMMODh9L9iJ2NfEORL0bR5lEuxCjujlQ&s'
        style={{ cursor: 'pointer', width: 40 }}
        alt=''
      />
    </div>
  );
};

export default random;
