import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import { useAuth } from '../AuthContext';
import TopBar from "./NavTop";

const Events = (props) => {
    const [posts, setPosts] = useState([])
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        axios.get("http://localhost:8000/api/posts", {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data);
                setPosts(res.data.posts);
            })
            .catch((err) => {
                console.log(err);
            })


    }, [])


    return (
        <>
        <TopBar/>
        <div className="all-main">

            <div className="row all-main">
                <div className="col">
                    {
                        posts.length > 0 ?
                            posts.map((post, index) => {
                                return (

                                    <div key={index} className="card">
                                        <div className="card-body d-flex justify-content-around">
                                            <div className="card-text">
                                            <Link className="card-title" to={`/event/${post._id}`}>{post.title}</Link>
                                            <p>Hello</p>
                                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                                            <p>Start time {post.startTime}</p>
                                            <p className="card-text-add">{post.address}</p>
                                            <p className="card-text-desc">{post.description}</p>
                                            {
                                                userId == post.userId ?
                                                    <Link className="card-title single-card-edit"to={`/event/edit/${post._id}`}>Edit</Link> :
                                                    null
                                            }
                                            </div>
                                            <img src={post.imageUrl} alt={post.title} width="250" height="200" />                                        </div>
                                    </div>

                                )
                            })
                            :
                            <div className="w-100">
                                <div className="card text-center w-100">
                                    <div className="card-header">
                                        There are no posts yet!
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Feeling inspired?</h5>
                                        <p className="card-text">Go ahead and</p>
                                        <Link to={'/event/new'}>Create a new one!</Link>
                                    </div>

                                </div>
                            </div>



                    }
                </div>


            </div>

        </div>
        </>
    )
}
export default Events;
