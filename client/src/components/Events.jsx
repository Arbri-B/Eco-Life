import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";
import TopBar from "./NavTop";

const Events = (props) => {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <TopBar />
      <div className="portfolio-details">
        <div className="row all-main">
          <div className="col d-flex flex-wrap ">
            {posts.length > 0 ? (
              posts.map((post, index) => {
                return (
                  <div key={index} class="col-lg-4">
                    <div class="portfolio-info">
                      <h3>Event information</h3>
                      <ul>
                        <li>
                          <strong>Category</strong>{" "}
                          <Link
                            className="card-title"
                            to={`/event/${post._id}`}
                          >
                            {post.title}
                          </Link>
                        </li>
                        <li>
                          <strong>Description</strong>: {post.description}
                        </li>
                        <li>
                          <strong>Event date</strong>: {post.startTime}
                        </li>
                        <li>
                          {" "}
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            width="100%"
                            height="200"
                          />{" "}
                        </li>
                      </ul>

                      {userId == post.userId ? (
                        <Link
                          className="card-title single-card-edit"
                          to={`/event/edit/${post._id}`}
                        >
                          Edit
                        </Link>
                      ) : null}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-100">
                <div className="card text-center w-100">
                  <div className="card-header">There are no posts yet!</div>
                  <div className="card-body">
                    <h5 className="card-title">Feeling inspired?</h5>
                    <p className="card-text">Go ahead and</p>
                    <Link to={"/event/new"}>Create a new one!</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Events;
