import React, { useEffect, useState } from "react";
import MuseumActivityItem from "./MuseumActivityItem"

const BASE_URL = "http://localhost:8000/wp-json/wp/v2"

export default function MuseumActivities() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                // Make a ressource friendly API request by fetching only the field groups you need
                const response = await fetch(`${BASE_URL}/activities?_fields=id,author,featured_media,title,excerpt,slug`);
                const activities = await response.json();
                setActivities(activities);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <>
        <h2 className="activities-list">Imported from WordPress using REST API</h2>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <ul className="activities-list">
                    {activities.map(activity => (
                        <li key={activity.id}>
                            <MuseumActivityItem activity={activity} />
                        </li>
                    ))}
                </ul>
            )}
 
            {error && <p>Error loading activities: {error.message}</p>}
        </>
    );
}
