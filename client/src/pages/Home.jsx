import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext"; // Ensure AuthContext is correctly imported

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(AuthContext); // Access authentication context
  const navigate = useNavigate();
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const handlePostClick = (id) => {
    if (!currentUser) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      navigate(`/post/${id}`); // Navigate to post if logged in
    }
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <div
                className="link"
                onClick={() => handlePostClick(post.id)} // Use custom handler
              >
                <h1>{post.title}</h1>
              </div>
              <p>{getText(post.desc)}</p>
              <button onClick={() => handlePostClick(post.id)}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
