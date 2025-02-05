import React, { useEffect, useState } from "react";

const Cards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 4))) // Limiting to 4 posts
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:flex-1 bg-white p-0 rounded-lg">
          <img
            src="https://media.istockphoto.com/id/1316049982/vector/core-banking-it-system-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=eVjsfYkt4mvU7JSH2U6FJhM0aHbraN5arZ-aOrAvbqY="
            alt="Core Banking IT System"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        <div className="w-full md:flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 ">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={`https://via.placeholder.com/100?text=${post.id}`}
                alt={`Post ${post.id}`}
                className="mx-auto mb-4 rounded-full"
              />
              <h2 className="text-blue-700 text-xl font-bold mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
