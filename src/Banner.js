import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">
                        <PlayArrowIcon className="banner__icon" />
                             &nbsp;&nbsp;Abspielen</button>
                    <button className="banner__button">
                        <FormatListBulletedIcon className="banner__icon" />
                             &nbsp;&nbsp;Meine Liste</button>
                </div>

                <h1 className="banner__description">{truncate(movie?.overview, 220)}</h1>

            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
