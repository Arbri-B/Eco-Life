import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthProvider } from "../AuthContext";
import axios from "axios";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import TopBar from "./NavTop";

const DisplayOne = (props) => {
    const [post, setPost] = useState({});
    const [participants, setParticipants] = useState(0);
    const { id } = useParams();
    const userId = localStorage.getItem('userId');

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDNOnnW2lR3qZJqjZ8ZO2w4K0ajm-zmyGA",
    });

    const confirmParticipation = async () => {
        try {
            // Check if the user has already confirmed participation
            if (post.participants.includes(userId)) {
                console.log("You have already confirmed participation.");
                return;
            }
    
            const response = await axios.post(`http://localhost:8000/api/post/confirm-participation/${id}`, {
                userId: userId,
            }, { withCredentials : true}
            );
    
            // Update local state with the new post data (including participants count)
            setPost(response.data.post);
            console.log("Participation confirmed successfully!");
        } catch (error) {
            console.error("Error confirming participation", error);
        }
    };


    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${id}`, {
            withCredentials: true,
        })
            .then((res) => {
                setPost(res.data.post);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const mapContainerStyle = {
        width: "80%",
        height: "200px",
    };

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <>
        <TopBar/>
        <div className="single-main">
            <div className=" single-card d-flex justify-content-between align-items-center">
                <div className="single-card-text">
                    <h1>{post.title}</h1>
                    <h4>{post.address}</h4>
                    <p>Starting time{post.startTime}</p>
                    <p>{post.description}</p>
                    <div>
                        <p>{post.participants.length} confirmed participants</p>
                    <button onClick={confirmParticipation}>Confirm participation</button>
                    </div>
                    {
                userId == post.userId ?
                    <Link className="card-title single-card-edit" to={`/event/edit/${post._id}`}>Edit</Link> :
                    null
            }
                </div>
                <img className="single-card-img" src={post.imageUrl} alt={post.title}/>
            </div>

            <div className="single-map">
            <GoogleMap 
                mapContainerStyle={mapContainerStyle}
                zoom={20}
                center={{
                    lat: post.lat,
                    lng: post.long,
                }}
            >
                <MarkerF
                    icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                    position={{
                        lat: post.lat,
                        lng: post.long,
                    }}
                />
            </GoogleMap>
            </div>


        </div>
        </>
    );
};

export default DisplayOne;
