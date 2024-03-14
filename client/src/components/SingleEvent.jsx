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
  const userId = localStorage.getItem("userId");

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

      const response = await axios.post(
        `http://localhost:8000/api/post/confirm-participation/${id}`,
        {
          userId: userId,
        },
        { withCredentials: true }
      );

      // Update local state with the new post data (including participants count)
      setPost(response.data.post);
      console.log("Participation confirmed successfully!");
    } catch (error) {
      console.error("Error confirming participation", error);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/post/${id}`, {
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
    width: "100%",
    height: "300px",
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <section className="portfolio-details">
      <TopBar />

      <div className="col-lg-12">
        <div className="portfolio-info d-flex align-items-start gap-4">
          <div style={{ width: "50%" }}>
            <h3>{post.title}</h3>
            <ul className="d-flex flex-column align-items-start">
              <li>
                <strong>Addres</strong>: {post.address}
              </li>
              <li>
                <strong>Event date</strong>: {post.startTime}
              </li>
             

              <li>
                <strong>Description</strong>: {post.description}
              </li>
              <div>
              <li>
                <strong>Confirmed participants</strong>: {post.participants.length} 
              </li>
              
                <button style={{backgroundColor:"#e2e8f0"}}
                  className="nav-link scrollto active mt-2"
                  onClick={confirmParticipation}
                >
                  Confirm participation
                </button>
              </div>
            </ul>

            {userId == post.userId ? (
              <Link
                className="card-title single-card-edit"
                to={`/event/edit/${post._id}`}
              >
                Edit This Post
              </Link>
            ) : null}
          </div>
          <div style={{ width: "50%" }}>
            <img
              className="single-card-img"
              src={post.imageUrl}
              alt={post.title}
            />
          </div>
        </div>

        <div className="portfolio-description">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={16}
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
    </section>
  );
};

export default DisplayOne;
