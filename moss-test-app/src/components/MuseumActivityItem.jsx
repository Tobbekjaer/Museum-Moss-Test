import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const BASE_URL = "http://localhost:8000/wp-json/wp/v2";

export default function MuseumActivityItem(props) {
    const [activityData, setActivityData] = useState({
        author: "",
        imgUrl: "",
        isLoading: true,
    });

    // Fetch data when the component mounts or when the activity prop changes
    useEffect(() => {
        function fetchActivityData() {
            const { author, featured_media } = props.activity;

            const fetchAuthor = fetch(`${BASE_URL}/users/${author}`).then((res) => res.json());
            const fetchImageUrl = fetch(`${BASE_URL}/media/${featured_media}`).then((res) => res.json());

            Promise.all([fetchAuthor, fetchImageUrl])
                .then((res) => {
                    setActivityData({
                        author: res[0].name,
                        imgUrl: res[1].media_details.sizes.full.source_url,
                        isLoading: false,
                    });
                })
                .catch((error) => {
                    console.error("Error fetching data", error);
                    setActivityData((prevState) => ({
                        ...prevState,
                        isLoading: false,
                    }));
                });
        }

        // Only fetch data if activity is available
        if (props.activity) {
            fetchActivityData();
        }
    }, [props.activity]);

    const { title, excerpt, id } = props.activity;
    const { author, imgUrl, isLoading } = activityData;

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h3>{title.rendered}</h3>
                    <small>
                        Reviewed by <strong>{author}</strong>
                    </small>
                    <img
                        src={imgUrl}
                        alt={title.rendered}
                        style={{
                            display: "block",
                            margin: "10px auto",
                            maxWidth: "100px", 
                            width: "100%",     
                            height: "auto"       
                        }}
                    />
                    <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
                    <NavLink to={`/activities/${id}`}>
                        Read more
                    </NavLink>
                    <hr />
                </div>
            )}
        </>
    );
}