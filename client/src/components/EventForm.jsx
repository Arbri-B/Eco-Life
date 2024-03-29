import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../AuthContext';
import {  GoogleMap, Autocomplete, useLoadScript,  } from "@react-google-maps/api";

const CreateEvent = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startTime, setStartTime] = useState("")
    const [address, setAddress] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const userId = localStorage.getItem('userId');
    const [errorMessage, setErrorMessage] = useState("");

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDNOnnW2lR3qZJqjZ8ZO2w4K0ajm-zmyGA",
        libraries:['places']
    });

    const navigateBack = () => {
        navigate(-1);
    };

    const createEvent = async (e) => {
        e.preventDefault();

        try {
            if (title.length < 5 || address.length < 5 || description.length < 5) {
                setErrorMessage('Your form has some unsolved issues!');
            } else {
                console.log(
                    title,
                    address,
                    startTime,
                    description,
                    imageUrl,
                    userId,
                )
                axios.post('http://localhost:8000/api/post', {
                    title,
                    address,
                    startTime,
                    description,
                    imageUrl,
                    userId,
                }, {
                    withCredentials: true,
                });

                navigate('/events');
            }
        } catch (error) {
            setErrorMessage("Your API has some problems!");
            console.log(error);
        }
    };

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div className="px-3 create-main">

            <h1 className="text-center p-2">Create an Event</h1>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

            <form className="w-75 m-auto" onSubmit={(e) => createEvent(e)}>
                <div>
                    <label className="form-label">Title :</label>
                    <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title" />
                    {title.length > 0 && title.length < 5 &&
                        <p className="text-danger">The title should be 5 characters or more</p>
                    }
                </div>
                <div>
                    <label className="form-label">Address :</label>
                    <Autocomplete>
                    <input className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </Autocomplete>
                    {address.length > 0 && address.length < 5 &&
                        <p className="text-danger">The address should be 5 characters or longer</p>
                    }

                </div>
                <div>
                    <label htmlFor="start">Start date:</label>

                    <input
                        type="datetime-local"
                        id="start"
                        name="trip-start"
                        value={startTime ? startTime : ""}
                        min="2024-01-01T00:00"
                        max="2024-12-31T23:59"
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>
                <div>
                    <label className="form-label">Description :</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                    {description.length > 0 && description.length < 5 &&
                        <p className="text-danger">The description should be 5 characters or longer</p>
                    }
                </div>
                <div>
                    <label className="form-label">Image URL: </label>
                    <input className="form-control" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="URL goes here" pattern="https?://.+"
                        title="Include http:// or https:// in the URL" />
                </div>
                <div className="d-flex justify-content-between btn-div-create">
                    <button className="btn btn-outline-primary customColor mt-2 s-button">Create the Event</button>
                    <p className="s-button mt-2 btn-outline-primary " onClick={navigateBack}> Cancel </p>
                </div>
            </form>
        </div>
    );
};

export default CreateEvent;
