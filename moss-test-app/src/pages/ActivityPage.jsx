import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:8000/wp-json/wp/v2/activities";

export default function ActivityPage() {
    // Get the id from the URL
    const params = useParams();

    const [activityData, setActivityData] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchActivityData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/${params.id}`);
                const activity = await response.json();
                setActivityData(activity);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchActivityData();
    }, [params.id]);  // Component needs re-rendering if the params.id changes 
    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading activity: {error.message}</p>
            ) : (
                <>
                    <NavLink to='/'>Go Back</NavLink>
                    <hr />
                    <h1>{activityData.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: activityData.content.rendered }} />
                    <h3>Publisher: {activityData.acf.publisher}</h3>
                </>
            )}
        </>
    );
}
