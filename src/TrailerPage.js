import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import config from './config.json';
import './TrailerPage.css'; // Import your CSS file
import YouTube from 'react-youtube'; // Make sure this line is at the top of your component file

const TrailerPage = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const [description, setDescription] = useState('');
    const [cast, setCast] = useState([]);
    const [director, setDirector] = useState('');
    const [ratings, setRatings] = useState('');
    const apiKey = config.apiKey;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const baseUrl = 'https://api.themoviedb.org/3/movie/';
    
            try {
                const videoResponse = await fetch(
                    `${baseUrl}${id}/videos?language=en-US&api_key=${apiKey}`
                );
                const videoData = await videoResponse.json();
                setVideos(videoData.results || []); // Handle potential undefined value

                const movieResponse = await fetch(
                    `${baseUrl}${id}?language=en-US&api_key=${apiKey}`
                );
                const movieData = await movieResponse.json();
                setDescription(movieData.overview);
                setRatings(movieData.vote_average); // Fetch and set the ratings

                const creditsResponse = await fetch(
                    `${baseUrl}${id}/credits?api_key=${apiKey}`
                );
                const creditsData = await creditsResponse.json();
                setDirector(getDirector(creditsData.crew));
                setCast(getCastWithImages(creditsData.cast));
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
        fetchMovieDetails();
    }, [id, apiKey]);

    const firstVideo = videos.length > 0 ? videos[0] : null;
    const youtubeVideoId = firstVideo ? firstVideo.key : '';

    const getDirector = (crew) => {
        const director = crew.find(member => member.job === 'Director');
        return director ? director.name : 'N/A';
    };

    const getCastWithImages = (castArray) => {
        return castArray.slice(0, 5).map(member => ({
            name: member.name,
            profilePath: member.profile_path
        }));
    };

    return (
        <div className="TrailerPage">
            <div className="video-container">
                {youtubeVideoId ? (
                    <div className="video-wrapper">
                        <YouTube
                            videoId={youtubeVideoId}
                            opts={{
                                width: '100%',
                                height: '515',
                                playerVars: {
                                    autoplay: 1, // Set autoplay to 1 for automatic playback
                                },
                            }}
                        />
                    </div>
                ) : (
                    <p>No videos available.</p>
                )}
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="details">
                <div className="ratings">
                    <p>IMDB : {ratings} /10</p>
                </div>
                <p><strong>Director:</strong> {director}</p>
                <div className="cast">
                    <strong>Cast:</strong>
                    <div className="cast-list">
                        {cast.map(member => (
                            <div key={member.name} className="cast-member">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200/${member.profilePath}`}
                                    alt={`${member.name} profile`}
                                />
                                <p>{member.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TrailerPage;
