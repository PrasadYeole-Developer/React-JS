import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts:</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchDataEffect;
