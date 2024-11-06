import React, { useEffect, useState } from 'react';
import MuseumCard from './MuseumCard'
import './Main.css'
import { fetchMuseumData } from '../utils/api';

export default function Main() {
    const [museumData, setMuseumData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await fetchMuseumData()
                setMuseumData(data)
            } catch (error) {
                console.error('Error fetching museum data:', error);
            }
        }

        fetchData()
    }, [])

    const museums = museumData.map(museum => {
        return (           
            <MuseumCard
            key={museum.id}
            {...museum}
            />            
        )
    })

    return (
        <>
        <div className="museum-cards-list">
            {museums}
        </div>
        </>
    );
}

