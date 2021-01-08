import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    ////////////////////////////////////////////////////////////////
    // const [movie, setMovie] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(requests.fetchTrending);
    //         setMovie(request.data.results[
    //             Math.floor(Math.random() * request.data.results.length)
    //         ]);
    //         return request;
    //     }
    //     fetchData();
    // }, []);

    useEffect(() => { //snippet of code that runs based on a specific condition

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]); // dependency: if [], run once when the row loads and dont run again
    //if any outside variable is used in useEffect, it is now a dependency and has to be included

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };

    const handleClick = (movie) => {

        <p>
            {movies.map(movie => (
                <p>{movie.name}</p>
            ))}
        </p>





        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.error(error));
        }
    };




    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        // onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}

            </div>
            {/* <p videoId={trailerUrl} opts={opts}>
                {movies.map(movie => (
                    <p>{movie.name}</p>
                ))}
            </p> */}


        </div>
    )
}

export default Row
